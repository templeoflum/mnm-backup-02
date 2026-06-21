// scope.js — the DIAGNOSTICS display. Plots value(s) over time: a rolling trace that scrolls
// left as samples arrive. set(a..d) feeds channels A–D (up to 4). Each channel gets its own
// horizontal lane, NOT overlapping, divided by centre rules — the classic oscilloscope split.
//
// TWO READOUT TYPES (switchable, honest readings of the same samples):
//   - 'line'  — the connected polyline. Crisp, one sample per physical pixel column. (default)
//   - 'beam'  — the analog phosphor beam (beam.js): a glowing head with a wake that persists and
//               decays, crossings summing brighter. The same trace, rendered as light not strokes.
//
// A held value draws a flat line, a swept one a curve. Plain JS + Canvas, no deps, no build.
//
// PRECISION (line): the backing store is sized to displayed pixels × devicePixelRatio, one sample
// per physical column — no CSS up-scaling, no smear. Re-fits on resize. FOLLOW mode tracks an
// unbounded climber: the y-range slides to [value − span, value] so the trace keeps climbing.

import { createBeam } from './beam.js';

const COLORS = ['#62f0c0', '#e8b765', '#7aa8ff', '#ff8fae'];   // A green · B amber · C blue · D pink

/** '#rrggbb' → [r,g,b]. @param {string} hex @returns {[number,number,number]} */
function hexRgb(hex) {
  const n = parseInt(hex.slice(1), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

/**
 * @param {{ min?:number, max?:number, width?:number, height?:number, channels?:1|2|3|4, readout?:'line'|'beam' }} [opts]
 * @returns {{ el:HTMLCanvasElement, set:(a:number, b?:number, c?:number, d?:number)=>void,
 *   push:(a:number, b?:number, c?:number, d?:number)=>void, setRange:(lo:number, hi:number)=>void,
 *   setChannels:(n:1|2|3|4)=>void, setReadout:(t:'line'|'beam')=>void, setFollow:(on:boolean, span?:number)=>void,
 *   setZoom:(z:number)=>void, freeze:(on:boolean)=>void, step:()=>void, clear:()=>void }}
 */
export function createScope(opts = {}) {
  let min = opts.min ?? 0, max = opts.max ?? 1;
  let tLo = min, tHi = max;   // range TARGET — min/max LERP toward it each frame (smooth, no snap on focus)
  let channels = /** @type {1|2|3|4} */ (Math.max(1, Math.min(4, opts.channels ?? 1)));
  let readout = opts.readout ?? 'line';
  let follow = false, followSpan = 1, zoomX = 1, frozen = false;
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
  let laneHpx = H;                              // device-px lane height the beams were sized to (re-fit on change)

  const norm = (/** @type {number} */ v) => Math.max(0, Math.min(1, (v - min) / ((max - min) || 1)));

  function fit() {
    const dpr = Math.max(1, window.devicePixelRatio || 1);
    const rect = cv.getBoundingClientRect();
    const cssW = rect.width || (opts.width ?? 180), cssH = rect.height || (opts.height ?? 70);
    W = Math.max(2, Math.round(cssW * dpr)); H = Math.max(2, Math.round(cssH * dpr));
    cv.width = W; cv.height = H; lineW = Math.max(1, Math.round(dpr));
    syncBeams(true);   // beam buffers depend on W and lane height — re-fit them
  }
  if (typeof ResizeObserver !== 'undefined') new ResizeObserver(() => fit()).observe(cv);
  function setZoom(z) { zoomX = Math.max(W / HIST, Math.min(50, z)); cv.dataset.zoomx = zoomX.toFixed(3); }
  cv.addEventListener('wheel', (e) => { e.preventDefault(); setZoom(zoomX * (e.deltaY < 0 ? 1.15 : 1 / 1.15)); }, { passive: false });

  // beam lanes are only built when the readout is 'beam'; each is sized to its lane and owns its
  // persistent accumulation buffer. Re-fit when W, channel count, or lane height changes.
  function syncBeams(force) {
    if (readout !== 'beam') return;
    const dpr = Math.max(1, window.devicePixelRatio || 1);
    const laneH = Math.max(2, Math.floor(H / channels));
    const refit = force || laneH !== laneHpx;
    laneHpx = laneH;
    for (let i = 0; i < channels; i++) {
      if (!beams[i]) beams[i] = createBeam({ width: W / dpr, height: laneH / dpr, dpr, color: hexRgb(COLORS[i]) });
      else if (refit) beams[i].fit(W / dpr, laneH / dpr);
    }
  }

  function set(/** @type {number} */ a, /** @type {number=} */ b, /** @type {number=} */ c, /** @type {number=} */ d) {
    cur[0] = a; cur[1] = b ?? min; cur[2] = c ?? min; cur[3] = d ?? min;
    if (follow) { tLo = a - followSpan; tHi = a; }   // follow: slide the target to keep the climber at the top
  }
  function setRange(/** @type {number} */ lo, /** @type {number} */ hi) { tLo = lo; tHi = hi; }
  function setChannels(/** @type {1|2|3|4} */ n) { channels = /** @type {1|2|3|4} */ (Math.max(1, Math.min(4, n))); syncBeams(true); }
  function setReadout(/** @type {'line'|'beam'} */ t) { readout = t === 'beam' ? 'beam' : 'line'; if (readout === 'beam') syncBeams(true); }
  function setFollow(/** @type {boolean} */ on, /** @type {number=} */ span) { follow = !!on; if (span && span > 0) followSpan = span; }
  function freeze(/** @type {boolean} */ on) { frozen = !!on; for (const bm of beams) if (bm) bm.freeze(frozen); }
  function clear() { for (const buf of bufs) buf.fill(min); cur.fill(min); for (const bm of beams) if (bm) bm.clear(); }

  /** advance exactly one sample-quantum while frozen — the fine-focus knob for time (beam.js §11). */
  function step() {
    for (let k = 0; k < 4; k++) { bufs[k].shift(); bufs[k].push(cur[k]); }
    if (readout === 'beam') { syncBeams(false); for (let i = 0; i < channels; i++) beams[i]?.step({ x: 0, y: norm(cur[i]) }); }
  }

  /** the connected polyline — one trace into a horizontal lane [top, top+h]. */
  function lane(/** @type {number[]} */ buf, /** @type {number} */ top, /** @type {number} */ h, /** @type {string} */ col) {
    if (!ctx) return;
    ctx.strokeStyle = '#1c2630'; ctx.lineWidth = lineW; ctx.beginPath();
    ctx.moveTo(0, top + h / 2); ctx.lineTo(W, top + h / 2); ctx.stroke();     // lane midline
    const vis = Math.max(2, Math.min(HIST, Math.round(W / zoomX)));
    const start = HIST - vis;
    ctx.strokeStyle = col; ctx.lineWidth = lineW; ctx.beginPath();
    for (let i = 0; i < vis; i++) {
      const x = (i / (vis - 1)) * (W - 1);
      const y = top + h - norm(buf[start + i]) * h;
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    }
    ctx.stroke();
  }

  (function loop() {
    if (!frozen) for (let k = 0; k < 4; k++) { bufs[k].shift(); bufs[k].push(cur[k]); }
    min += (tLo - min) * 0.18; max += (tHi - max) * 0.18;   // ease the live range toward the target — smooth, no snap
    if (ctx) {
      ctx.clearRect(0, 0, W, H);
      const laneH = H / channels;
      if (readout === 'beam') {
        syncBeams(false);
        for (let i = 0; i < channels; i++) {
          const bm = beams[i]; if (!bm) continue;
          bm.tick(frozen ? [] : [{ x: 0, y: norm(cur[i]) }], true);   // one sample/frame; freeze → no advance
          ctx.drawImage(bm.el, 0, Math.round(i * laneH), W, Math.round(laneH));
        }
      } else {
        for (let i = 0; i < channels; i++) lane(bufs[i], i * laneH, laneH, COLORS[i]);
      }
      if (channels > 1) {                                  // lane dividers
        ctx.strokeStyle = '#2a3a48'; ctx.lineWidth = lineW;
        for (let i = 1; i < channels; i++) { ctx.beginPath(); ctx.moveTo(0, i * laneH); ctx.lineTo(W, i * laneH); ctx.stroke(); }
      }
    }
    requestAnimationFrame(loop);
  })();

  return { el: cv, set, push: set, setRange, setChannels, setReadout, setFollow, setZoom, freeze, step, clear };
}
