// beam.js — the analog-beam renderer. Reusable: clock domain → (advance, latch) → light.
//
// Renders a live stream of emitted samples as a glowing, persistent phosphor beam — a bright
// head, a wake decaying behind it, crossings summing brighter (visitation density). It is a
// MEASUREMENT PIPELINE THAT OUTPUTS LIGHT: it never invents structure the signal lacks and
// never hides structure it has. Consumers feed it through one thin contract and nothing more:
//
//   tick(samples, latch) — samples = the points emitted since the last tick (normalized [0,1],
//                          y 0=bottom 1=top). latch = present this frame (boolean).
//
// freeze = tick([], …) (no samples → no advance); step = tick([oneSample]).
//
// Honest by construction:
//   - linear-HDR additive accumulation, tone-mapped ONCE (additive glow in sRGB would lie about
//     intensity where strokes overlap).
//   - persistence is a PHOSPHOR property: how long the screen keeps glowing after the beam hits,
//     in WALL-CLOCK SECONDS, independent of how fast the beam moves. (Earlier this was keyed to
//     arc-length per the design doc — that made fast signals fade faster, which is backwards for a
//     phosphor. Operator-corrected 20260621.) Freeze pauses the decay clock, so a frozen trace
//     holds rock-steady instead of fading to black.
//   - never draws a chord longer than the PSF spot: long jumps are sub-sampled, so the beam never
//     connects distant points it didn't actually traverse.
//   - spot size (the PSF width) IS the spatial resolution; it's a reported quantity, not hidden.
//
// TWO TIMEBASE MODES (a setting, both honest):
//   - 'scroll' — the head sits at the right edge, the wake scrolls left as it ages. The time-series.
//   - 'sweep'  — the head sweeps left→right across a fixed screen and retraces (pen up at the seam);
//                old sweeps glow underneath until they fade. The classic analog-scope face. (Without
//                trigger/hold-off, consecutive sweeps walk; those lock-the-figure controls are later.)
//
// Plain JS + Canvas, no deps, no build (types in JSDoc, tsc --noEmit).

/** persistence regimes — phosphor glow time in SECONDS (the e-fold of the decay). */
export const REGIME = { comet: 0.08, breathing: 0.45, standing: 3.0 };

/**
 * @param {{ width?:number, height?:number, dpr?:number, color?:[number,number,number],
 *   spot?:number, persistence?:number, exposure?:number, mode?:'scroll'|'sweep' }} [opts]
 * @returns {{ el:HTMLCanvasElement, tick:(samples:{x:number,y:number}[], latch?:boolean)=>number,
 *   freeze:(on:boolean)=>void, isFrozen:()=>boolean, step:(s:{x:number,y:number})=>void,
 *   setMode:(m:'scroll'|'sweep')=>void, setPersistence:(sec:number)=>void, setSpot:(px:number)=>void,
 *   setColor:(c:[number,number,number])=>void, setExposure:(e:number)=>void, spotSize:()=>number,
 *   persistSec:()=>number, fit:(w:number,h:number)=>void, clear:()=>void }}
 */
export function createBeam(opts = {}) {
  const dpr = Math.max(1, opts.dpr ?? (typeof window !== 'undefined' ? window.devicePixelRatio : 1) ?? 1);
  let W = Math.max(2, Math.round((opts.width ?? 180) * dpr));
  let H = Math.max(2, Math.round((opts.height ?? 70) * dpr));
  let spot = (opts.spot ?? 1.4) * dpr;                 // PSF radius in device px = the resolution limit
  let tau = opts.persistence ?? REGIME.breathing;      // phosphor glow time in SECONDS (energy falls by 1/e per tau)
  let exposure = opts.exposure ?? 1.0;
  let color = opts.color ?? [98, 240, 192];            // wake hue (linear-ish rgb 0..255)
  let mode = opts.mode === 'sweep' ? 'sweep' : 'scroll';
  let frozen = false;
  let lastT = (typeof performance !== 'undefined' ? performance.now() : 0);   // wall-clock anchor for time-keyed decay

  const cv = document.createElement('canvas');
  cv.width = W; cv.height = H;
  cv.style.background = '#05080d';
  cv.style.borderRadius = '6px';
  const ctx = cv.getContext('2d');

  let acc = new Float32Array(W * H);                   // linear HDR energy, one cell per device pixel
  let img = ctx ? ctx.createImageData(W, H) : null;
  let hasHead = false, headPx = W - 1, headPy = 0;     // the live beam position (device px)
  let sweepX = 0, sweepPrevPy = 0, sweepPenUp = true;  // sweep-mode head cursor + pen state

  const yToPy = (/** @type {number} */ y) => (1 - y) * (H - 1);

  // ── deposit one sample's energy via a gaussian point-spread function (additive, linear) ──
  // σ = spot/2; the splat is clamped to the spot radius. This is the aperture: two features closer
  // than the spot merge — which is WHY the spot is reported, not hidden.
  function deposit(/** @type {number} */ px, /** @type {number} */ py, /** @type {number} */ energy) {
    const sig = Math.max(0.5, spot / 2), r = Math.ceil(spot);
    const x0 = Math.max(0, Math.floor(px - r)), x1 = Math.min(W - 1, Math.ceil(px + r));
    const y0 = Math.max(0, Math.floor(py - r)), y1 = Math.min(H - 1, Math.ceil(py + r));
    const inv2s2 = 1 / (2 * sig * sig);
    for (let y = y0; y <= y1; y++) {
      const dy = y - py;
      for (let x = x0; x <= x1; x++) {
        const dx = x - px, d2 = dx * dx + dy * dy;
        acc[y * W + x] += energy * Math.exp(-d2 * inv2s2);
      }
    }
  }

  // draw a connected segment with sub-sampling so no chord exceeds the spot (honesty rule).
  function segment(/** @type {number} */ ax, /** @type {number} */ ay, /** @type {number} */ bx, /** @type {number} */ by) {
    const dx = bx - ax, dy = by - ay, seg = Math.hypot(dx, dy);
    const steps = Math.max(1, Math.ceil(seg / spot));
    for (let k = 1; k <= steps; k++) { const t = k / steps; deposit(ax + dx * t, ay + dy * t, 1 / steps); }
    return seg;
  }

  // scroll the field left by `cols` device-px so the wake ages leftward as new head samples land
  // at the right edge. Vertical structure is preserved; only x shifts.
  function scrollLeft(/** @type {number} */ cols) {
    cols = Math.round(cols);
    if (cols <= 0) return;
    if (cols >= W) { acc.fill(0); return; }
    for (let y = 0; y < H; y++) {
      const row = y * W;
      acc.copyWithin(row, row + cols, row + W);
      for (let x = W - cols; x < W; x++) acc[row + x] = 0;
    }
  }

  // ── SCROLL emit: head fixed at the right edge; the wake has scrolled left to make room, each new
  // sample lands one column in from the last. Time is implicit (newest at right). Returns arc (px). ──
  function emitScroll(/** @type {{x:number,y:number}[]} */ samples) {
    const n = samples.length;
    scrollLeft(n);
    let arc = 0;
    let prevPx = W - 1 - n, prevPy = hasHead ? headPy : yToPy(samples[0].y);
    for (let i = 0; i < n; i++) {
      const px = W - 1 - (n - 1 - i), py = yToPy(samples[i].y);
      arc += segment(prevPx, prevPy, px, py);
      prevPx = px; prevPy = py;
    }
    headPx = W - 1; headPy = prevPy; hasHead = true;
    return arc;
  }

  // ── SWEEP emit: head sweeps rightward one column per sample; at the right edge it retraces to the
  // left with the pen up (no chord across the seam). Old sweeps stay in the field, fading by time. ──
  function emitSweep(/** @type {{x:number,y:number}[]} */ samples) {
    let arc = 0;
    for (let i = 0; i < samples.length; i++) {
      const py = yToPy(samples[i].y);
      const nx = sweepX + 1;
      if (nx >= W) { sweepX = 0; sweepPenUp = true; }       // retrace
      else sweepX = nx;
      if (sweepPenUp) { deposit(sweepX, py, 1); arc += 1; sweepPenUp = false; }
      else arc += segment(sweepX - 1, sweepPrevPy, sweepX, py);
      sweepPrevPy = py;
    }
    headPx = sweepX; headPy = sweepPrevPy; hasHead = true;
    return arc;
  }

  function decay(/** @type {number} */ dt) {
    if (dt <= 0) return;
    const k = Math.exp(-dt / Math.max(0.001, tau));
    for (let i = 0; i < acc.length; i++) acc[i] *= k;
  }

  // ── present: tone-map the linear field to the canvas ONCE, then mark the head distinctly. ──
  function present() {
    if (!ctx || !img) return;
    const d = img.data, [cr, cg, cb] = color;
    for (let i = 0; i < acc.length; i++) {
      const e = acc[i];
      const t = e <= 0 ? 0 : 1 - Math.exp(-e * exposure);  // Reinhard-ish: bright sums saturate, never clip ugly
      const j = i * 4;
      d[j] = (cr * t) | 0; d[j + 1] = (cg * t) | 0; d[j + 2] = (cb * t) | 0; d[j + 3] = 255;
    }
    ctx.putImageData(img, 0, 0);
    if (hasHead) {                                         // the head is live information — brighter, tighter
      ctx.save();
      ctx.globalCompositeOperation = 'lighter';
      const g = ctx.createRadialGradient(headPx, headPy, 0, headPx, headPy, spot * 1.6);
      g.addColorStop(0, 'rgba(235,255,245,0.95)');
      g.addColorStop(1, 'rgba(235,255,245,0)');
      ctx.fillStyle = g;
      ctx.beginPath(); ctx.arc(headPx, headPy, spot * 1.6, 0, Math.PI * 2); ctx.fill();
      ctx.restore();
    }
  }

  /**
   * The contract. `samples` are the points emitted since the last tick. `latch` presents this frame.
   * Returns the arc-length advanced (the honest `advance`).
   * @param {{x:number,y:number}[]} samples @param {boolean} [latch=true]
   */
  function tick(samples, latch = true) {
    const now = (typeof performance !== 'undefined' ? performance.now() : lastT + 16.7);
    const dt = (now - lastT) / 1000; lastT = now;          // keep the clock current even while frozen, so
    if (frozen) { if (latch) present(); return 0; }        // unfreeze doesn't dump one giant decay step
    let arc = 0;
    if (samples && samples.length) arc = mode === 'sweep' ? emitSweep(samples) : emitScroll(samples);
    decay(dt);                                             // age the whole field by real time elapsed
    if (latch) present();
    return arc;
  }

  function clear() { acc.fill(0); hasHead = false; sweepX = 0; sweepPenUp = true; }

  return {
    el: cv,
    tick,
    freeze: (on) => { frozen = !!on; },
    isFrozen: () => frozen,
    step: (s) => { const f = frozen; frozen = false; tick([s], true); frozen = f; },
    setMode: (m) => { const nm = m === 'sweep' ? 'sweep' : 'scroll'; if (nm !== mode) { mode = nm; clear(); } },
    setPersistence: (sec) => { tau = Math.max(0.01, sec); },   // phosphor glow time, seconds
    setSpot: (px) => { spot = Math.max(0.5, px * dpr); },
    setColor: (c) => { color = c; },
    setExposure: (e) => { exposure = Math.max(0.01, e); },
    spotSize: () => spot / dpr,                            // reported in CSS px — the resolution the eye sees
    persistSec: () => tau,                                 // phosphor glow time in seconds
    fit: (w, h) => {
      W = Math.max(2, Math.round(w * dpr)); H = Math.max(2, Math.round(h * dpr));
      cv.width = W; cv.height = H;
      acc = new Float32Array(W * H);
      img = ctx ? ctx.createImageData(W, H) : null;
      hasHead = false; sweepX = 0; sweepPenUp = true;
    },
    clear,
  };
}
