// scope.js — the DIAGNOSTICS display. Plots value(s) over time: a rolling trace that scrolls
// left as samples arrive. set(a..d) feeds channels A–D (up to 4). Each channel gets its own
// cell, NOT overlapping, divided by rules — the classic oscilloscope split.
//
// READOUT TYPE (switchable, honest readings of the same samples):
//   - 'line'  — the connected polyline. Crisp, one sample per physical pixel column. (default)
//   - 'beam'  — the analog phosphor beam (beam.js): a glowing head with a wake that persists and
//               decays, crossings summing brighter. The same trace, rendered as light not strokes.
//
// The beam SWEEPS: x = a sawtooth timebase, the signal is y; the phosphor accumulates where the
// beam re-hits and decays over time. LAYOUT: 'stack' (vertical lanes) | 'row' (a 2-column grid —
// an odd last channel spans the full width: 1=full, 2=side-by-side, 3=two on top + one below, 4=2×2).
//
// A held value draws a flat line, a swept one a curve. Plain JS + Canvas, no deps, no build.

import { createBeam } from './beam.js';

const COLORS = ['#62f0c0', '#e8b765', '#7aa8ff', '#ff8fae'];   // A green · B amber · C blue · D pink

/** '#rrggbb' → [r,g,b]. @param {string} hex @returns {[number,number,number]} */
function hexRgb(hex) {
  const n = parseInt(hex.slice(1), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

/**
 * @param {{ min?:number, max?:number, width?:number, height?:number, channels?:1|2|3|4,
 *   readout?:'line'|'beam', layout?:'stack'|'row', sweepPeriod?:number }} [opts]
 * @returns {{ el:HTMLCanvasElement, set:(a:number, b?:number, c?:number, d?:number)=>void,
 *   push:(a:number, b?:number, c?:number, d?:number)=>void, setSignal:(fn:((t:number)=>number[])|null)=>void, time:()=>number, setRange:(lo:number, hi:number)=>void,
 *   setChannels:(n:1|2|3|4)=>void, setReadout:(t:'line'|'beam')=>void, setSweepPeriod:(sec:number)=>void,
 *   setLayout:(l:'stack'|'row')=>void, setMode:(m:'time'|'xy')=>void, setPersistence:(sec:number)=>void, setIntensity:(e:number)=>void, setFocus:(px:number)=>void, setFollow:(on:boolean, span?:number)=>void,
 *   setZoom:(z:number)=>void, freeze:(on:boolean)=>void, step:()=>void, clear:()=>void }}
 */
export function createScope(opts = {}) {
  let min = opts.min ?? 0, max = opts.max ?? 1;
  let tLo = min, tHi = max;   // range TARGET — min/max LERP toward it each frame (smooth, no snap on focus)
  let channels = /** @type {1|2|3|4} */ (Math.max(1, Math.min(4, opts.channels ?? 1)));
  let readout = opts.readout ?? 'line';
  let layout = opts.layout === 'row' ? 'row' : 'stack';
  let mode = opts.mode === 'xy' ? 'xy' : 'time';   // 'time' = swept waveforms (trigger) · 'xy' = both-axes figure (slice 5)
  let sweepPeriod = opts.sweepPeriod ?? 0.5;   // TIME/CM — seconds for one sweep across the screen
  // TIME-mode TRIGGER: a sweep runs left→right, then the timebase waits for the trigger source
  // (ch A) to cross TRIG_LEVEL rising, so every sweep starts at the SAME signal phase → the
  // waveform stands still. Auto free-runs if no trigger arrives within TRIG_AUTO. (slice 3)
  let swept = 0, sweeping = false, holdoffT = 0, armWait = 0, prevTrig = 0;
  let lastRise = 0, sweepEndT = 0;   // (dense path) latest rising-crossing time + when the last sweep ended
  const TRIG_LEVEL = 0.5, TRIG_HOLDOFF = 0, TRIG_AUTO = 0.4;
  // OPTIONAL signal-as-function feed: fn(t) → [chA, chB, chC, chD] at time t (seconds). When set, the
  // scope samples it DENSELY (≈1 per pixel) along the sweep and finds the trigger crossing to sub-frame
  // precision → clean at any freq + a rock-steady standing wave. Falls back to per-frame set() if null.
  /** @type {((t:number)=>number[])|null} */ let signalFn = null;
  let tNow = 0, sweepStartT = 0;
  let persistence = 0, intensity = 0, focus = 0;   // 0 = leave the beam's own default; >0 overrides (persist sec · INTEN · FOCUS px)
  let follow = false, followSpan = 1, zoomX = 1, frozen = false, lastFrame = 0;
  let W = Math.max(2, opts.width ?? 180), H = Math.max(2, opts.height ?? 70);
  let lineW = 1;
  const HIST = 4096;                            // history reservoir — independent of canvas width, so X-zoom can pull more time into view
  const cv = document.createElement('canvas');
  cv.width = W; cv.height = H; cv.dataset.zoomx = '1.000';
  cv.style.background = '#05080d';
  cv.style.border = '1px solid #1c2630';
  cv.style.borderRadius = '6px';
  const ctx = cv.getContext('2d');
  const bufs = [0, 1, 2, 3].map(() => new Array(HIST).fill(min));   // one ring buffer per channel
  const cur = [min, min, min, min];
  /** @type {(ReturnType<typeof createBeam>|null)[]} */ const beams = [null, null, null, null];

  const norm = (/** @type {number} */ v) => Math.max(0, Math.min(1, (v - min) / ((max - min) || 1)));

  function fit() {
    const dpr = Math.max(1, window.devicePixelRatio || 1);
    const rect = cv.getBoundingClientRect();
    const cssW = rect.width || (opts.width ?? 180), cssH = rect.height || (opts.height ?? 70);
    W = Math.max(2, Math.round(cssW * dpr)); H = Math.max(2, Math.round(cssH * dpr));
    cv.width = W; cv.height = H; lineW = Math.max(1, Math.round(dpr));
  }
  if (typeof ResizeObserver !== 'undefined') new ResizeObserver(() => fit()).observe(cv);
  function setZoom(z) { zoomX = Math.max(W / HIST, Math.min(50, z)); cv.dataset.zoomx = zoomX.toFixed(3); }
  cv.addEventListener('wheel', (e) => { e.preventDefault(); setZoom(zoomX * (e.deltaY < 0 ? 1.15 : 1 / 1.15)); }, { passive: false });

  // device-px cell rects for each channel. 'row' is a 2-column grid; an odd final channel spans the
  // full width on its own row (1=full · 2=side-by-side · 3=two-on-top+one-below · 4=2×2). 'stack' is
  // full-width lanes top to bottom.
  function cellRects() {
    const r = [];
    if (layout === 'row' && channels > 1) {
      const rows = Math.ceil(channels / 2), rh = H / rows, halfW = W / 2;
      for (let i = 0; i < channels; i++) {
        const lastOdd = i === channels - 1 && channels % 2 === 1;
        r.push({ x: lastOdd ? 0 : (i % 2) * halfW, y: Math.floor(i / 2) * rh, w: lastOdd ? W : halfW, h: rh });
      }
    } else {
      const lh = H / channels;
      for (let i = 0; i < channels; i++) r.push({ x: 0, y: i * lh, w: W, h: lh });
    }
    // square each cell: a centered 1:1 square in its slot — so XY figures render round and the scope
    // holds a square footprint instead of stretching wide (frame.scope-shows-mode slice 2).
    return r.map((s) => { const side = Math.min(s.w, s.h); return { x: s.x + (s.w - side) / 2, y: s.y + (s.h - side) / 2, w: side, h: side }; });
  }

  // a beam per channel, sized to its cell and refit when the cell dims change (resize/layout/channels).
  function ensureBeam(/** @type {number} */ i, /** @type {{x:number,y:number,w:number,h:number}} */ rect) {
    const dpr = Math.max(1, window.devicePixelRatio || 1);
    const cw = Math.max(2, Math.round(rect.w)), ch = Math.max(2, Math.round(rect.h));
    let bm = beams[i];
    if (!bm) { bm = createBeam({ width: cw / dpr, height: ch / dpr, dpr, color: hexRgb(COLORS[i]) }); beams[i] = bm; }
    else if (bm.el.width !== cw || bm.el.height !== ch) bm.fit(cw / dpr, ch / dpr);
    if (persistence > 0) bm.setPersistence(persistence);
    if (intensity > 0) bm.setExposure(intensity);
    if (focus > 0) bm.setSpot(focus);
    return bm;
  }

  function set(/** @type {number} */ a, /** @type {number=} */ b, /** @type {number=} */ c, /** @type {number=} */ d) {
    cur[0] = a; cur[1] = b ?? min; cur[2] = c ?? min; cur[3] = d ?? min;
    if (follow) { tLo = a - followSpan; tHi = a; }   // follow: slide the target to keep the climber at the top
  }
  function setRange(/** @type {number} */ lo, /** @type {number} */ hi) { tLo = lo; tHi = hi; }
  function setChannels(/** @type {1|2|3|4} */ n) { channels = /** @type {1|2|3|4} */ (Math.max(1, Math.min(4, n))); }
  function setReadout(/** @type {'line'|'beam'} */ t) { readout = t === 'beam' ? 'beam' : 'line'; }
  function setSweepPeriod(/** @type {number} */ sec) { sweepPeriod = Math.max(0.02, sec); }   // TIME/CM — seconds to cross the screen
  function setLayout(/** @type {'stack'|'row'} */ l) { layout = l === 'row' ? 'row' : 'stack'; }
  function setMode(/** @type {'time'|'xy'} */ m) { mode = m === 'xy' ? 'xy' : 'time'; }   // timebase mode: swept waveforms vs XY figure
  /** @param {((t:number)=>number[])|null} fn  signal as a function of seconds → channel values; enables dense + sub-frame-precise sampling */
  function setSignal(fn) { signalFn = fn; }
  function setPersistence(/** @type {number} */ sec) { persistence = Math.max(0, sec); for (const bm of beams) if (bm && persistence > 0) bm.setPersistence(persistence); }
  function setIntensity(/** @type {number} */ e) { intensity = Math.max(0, e); for (const bm of beams) if (bm && intensity > 0) bm.setExposure(intensity); }   // INTEN
  function setFocus(/** @type {number} */ px) { focus = Math.max(0, px); for (const bm of beams) if (bm && focus > 0) bm.setSpot(focus); }                      // FOCUS
  function setFollow(/** @type {boolean} */ on, /** @type {number=} */ span) { follow = !!on; if (span && span > 0) followSpan = span; }
  function freeze(/** @type {boolean} */ on) { frozen = !!on; for (const bm of beams) if (bm) bm.freeze(frozen); }
  function clear() { for (const buf of bufs) buf.fill(min); cur.fill(min); for (const bm of beams) if (bm) bm.clear(); }

  /** advance exactly one sample-quantum while frozen — the fine-focus knob for time (beam.js §11). */
  function step() {
    for (let k = 0; k < 4; k++) { bufs[k].shift(); bufs[k].push(cur[k]); }
    swept = swept >= 1 ? 0 : swept + 1 / Math.max(2, W);   // advance the sweep one column-quantum
    if (readout === 'beam') { const rects = cellRects(); for (let i = 0; i < channels; i++) ensureBeam(i, rects[i]).step({ x: swept, y: norm(cur[i]) }); }
  }

  /** the connected polyline — one trace into a cell rect. */
  function lane(/** @type {number[]} */ buf, /** @type {{x:number,y:number,w:number,h:number}} */ r, /** @type {string} */ col) {
    if (!ctx) return;
    ctx.strokeStyle = '#1c2630'; ctx.lineWidth = lineW; ctx.beginPath();
    ctx.moveTo(r.x, r.y + r.h / 2); ctx.lineTo(r.x + r.w, r.y + r.h / 2); ctx.stroke();     // lane midline
    const vis = Math.max(2, Math.min(HIST, Math.round(r.w / zoomX)));
    const start = HIST - vis;
    ctx.strokeStyle = col; ctx.lineWidth = lineW; ctx.beginPath();
    for (let i = 0; i < vis; i++) {
      const x = r.x + (i / (vis - 1)) * (r.w - 1);
      const y = r.y + r.h - norm(buf[start + i]) * r.h;
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    }
    ctx.stroke();
  }

  /** internal cell separators only (cells touching the canvas edge get no rule). */
  function dividers(/** @type {{x:number,y:number,w:number,h:number}[]} */ rects) {
    if (!ctx || channels <= 1) return;
    ctx.strokeStyle = '#2a3a48'; ctx.lineWidth = lineW;
    for (const r of rects) {
      if (r.y > 0.5) { ctx.beginPath(); ctx.moveTo(r.x, r.y); ctx.lineTo(r.x + r.w, r.y); ctx.stroke(); }
      if (r.x > 0.5) { ctx.beginPath(); ctx.moveTo(r.x, r.y); ctx.lineTo(r.x, r.y + r.h); ctx.stroke(); }
    }
  }

  const m01 = (/** @type {number} */ v) => Math.max(0, Math.min(1, v * 0.5 + 0.5));   // bipolar [-1,1] → [0,1] (XY)

  (function loop() {
    const now = (typeof performance !== 'undefined' ? performance.now() : lastFrame + 16.7);
    const dt = lastFrame ? (now - lastFrame) / 1000 : 0; lastFrame = now;
    const tPrev = tNow; if (!frozen) tNow += dt;
    if (signalFn) { const v = signalFn(tNow); for (let k = 0; k < 4; k++) cur[k] = v[k] ?? min; }   // refresh cur for line/history/XY
    if (!frozen) for (let k = 0; k < 4; k++) { bufs[k].shift(); bufs[k].push(cur[k]); }

    /** points to deposit per channel this frame (beam). @type {{x:number,y:number}[][]} */
    const bp = [[], [], [], []];
    if (!frozen && readout === 'beam') {
      if (mode === 'xy') {                                       // figure: x,y both from the signal
        if (signalFn) { const n = Math.max(1, Math.ceil((tNow - tPrev) * 480)); for (let k = 1; k <= n; k++) { const v = signalFn(tPrev + (tNow - tPrev) * k / n); bp[0].push({ x: m01(v[0]), y: m01(v[1]) }); } }
        else bp[0].push({ x: m01(cur[0]), y: m01(cur[1]) });
      } else if (signalFn) {
        // TIME, BUFFERED-TRIGGER-WINDOW (classic software scope, per teropa/oscilloscope + Pd scope~):
        // each frame, re-find the trigger and redraw a FIXED time window from it — stateless, so there's
        // no sweep state to drift (the live-sweep walk is gone). The window = sweepPeriod (TIME/CM); the
        // signal's frequency shows as the cycle count in it; the rising-edge trigger pins the phase.
        const wd = sweepPeriod, A = (/** @type {number} */ t) => norm(signalFn(t)[0]);
        let trigT = tNow - wd;                                  // free-run default if no crossing found
        const lo = tNow - 2 * wd, steps = Math.max(2, Math.ceil(wd * 2000)); let pa = A(lo);
        for (let k = 1; k <= steps; k++) { const tk = lo + wd * k / steps, pk = A(tk); if (pa < TRIG_LEVEL && pk >= TRIG_LEVEL) trigT = tk; pa = pk; }   // latest rising crossing in [now-2wd, now-wd] → phase-locked window start
        const nSub = Math.max(2, W);
        for (let i = 0; i < channels; i++) { const pts = bp[i]; for (let k = 0; k <= nSub; k++) { const xx = k / nSub, v = signalFn(trigT + xx * wd); pts.push({ x: xx, y: norm(v[i]) }); } }
      } else {
        // TIME, LIVE feed (the workbench sends one value/frame → buffered in `bufs`). Same buffered-
        // trigger-window model as the dense path, on the rolling history: findStart on ch A's rising
        // edge, draw a fixed window from it → standing. (Resolution is frame-rate; the heart-as-function
        // feed via setSignal would add sub-frame/high-freq fidelity later.)
        const win = Math.max(2, Math.min(HIST - 2, Math.round(sweepPeriod / Math.max(dt, 1 / 240))));   // window length in frame-samples
        let start = HIST - 1 - win;                             // free-run default
        for (let i = Math.max(1, HIST - 2 * win); i <= HIST - 1 - win; i++) { if (norm(bufs[0][i - 1]) < TRIG_LEVEL && norm(bufs[0][i]) >= TRIG_LEVEL) start = i; }   // latest rising crossing leaving room for a full window
        for (let i = 0; i < channels; i++) { const pts = bp[i]; for (let k = 0; k <= win; k++) pts.push({ x: k / win, y: norm(bufs[i][start + k]) }); }
      }
    }

    min += (tLo - min) * 0.18; max += (tHi - max) * 0.18;   // ease the live range toward the target — smooth, no snap
    if (ctx) {
      ctx.clearRect(0, 0, W, H);
      const rects = cellRects();
      if (readout === 'beam') {
        const lanes = mode === 'xy' ? 1 : channels;
        for (let i = 0; i < lanes; i++) {
          const r = rects[i], bm = ensureBeam(i, r);
          bm.tick(bp[i], true);
          ctx.drawImage(bm.el, Math.round(r.x), Math.round(r.y), Math.round(r.w), Math.round(r.h));
        }
      } else {
        for (let i = 0; i < channels; i++) lane(bufs[i], rects[i], COLORS[i]);
      }
      dividers(rects);
    }
    requestAnimationFrame(loop);
  })();

  return { el: cv, set, push: set, setSignal, time: () => tNow, setRange, setChannels, setReadout, setSweepPeriod, setLayout, setMode, setPersistence, setIntensity, setFocus, setFollow, setZoom, freeze, step, clear };
}
