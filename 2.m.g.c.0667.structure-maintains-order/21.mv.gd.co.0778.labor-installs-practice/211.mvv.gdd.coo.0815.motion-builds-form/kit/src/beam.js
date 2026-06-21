// beam.js — the analog-beam renderer. A MEASUREMENT PIPELINE THAT OUTPUTS LIGHT.
//
// The consumer feeds the path the beam is on, one contract and nothing more:
//   tick(samples, latch) — samples = the {x,y} points the beam visited since the last tick
//                          (normalized [0,1], y 0=bottom 1=top). latch = present this frame.
// The consumer owns the motion: a scope feeds a sawtooth-swept x with the signal as y; the
// Trajectoscope feeds a Lissajous x,y. freeze = tick([], …); step = tick([oneSample]).
//
// MECHANISM (the operator's LBO-508A, corrected 20260621 — earlier builds had it backwards):
//   - BRIGHTNESS = additive accumulation vs time-decay, NOT dwell. Each pass deposits FIXED energy
//     at ~1px spacing along the path (uniform — beam speed does not bias per-pass brightness). The
//     field decays over wall-clock time. Where the beam RE-HITS a spot before it fades, energy
//     piles up → bright. So the steady line forms at HIGH sweep speed (overlapping sweeps re-trace
//     the path before it decays); slow sweep → each point decays before re-hit → a moving dot.
//   - PERSISTENCE = phosphor glow-time in SECONDS, its own quality: decay = exp(−dt/τ). Freeze
//     pauses the decay clock so a held picture stays put.
//   - COLOR ramps with energy: deep green at low → white-cyan hot core at high (the phosphor
//     desaturates toward white where the beam piles up). A two-scale glow: a tight core + a soft
//     bloom halo.
//   - never connect across a large gap (sweep flyback / a jump the beam didn't traverse) — pen up.
//
// Linear-HDR additive accumulation, tone-mapped ONCE. Plain JS + Canvas, no deps, no build.

/** persistence regimes — phosphor glow time in SECONDS (the e-fold of the decay). */
export const REGIME = { comet: 0.08, breathing: 0.45, standing: 3.0 };

const PHOSPHOR = [0.30, 1.0, 0.55];   // base phosphor green (slightly cyan); whitens as energy rises

/**
 * @param {{ width?:number, height?:number, dpr?:number, color?:[number,number,number],
 *   spot?:number, persistence?:number, exposure?:number }} [opts]
 * @returns {{ el:HTMLCanvasElement, tick:(samples:{x:number,y:number}[], latch?:boolean)=>void,
 *   freeze:(on:boolean)=>void, isFrozen:()=>boolean, step:(s:{x:number,y:number})=>void,
 *   setPersistence:(sec:number)=>void, setSpot:(px:number)=>void, setColor:(c:[number,number,number])=>void,
 *   setExposure:(e:number)=>void, spotSize:()=>number, persistSec:()=>number, fit:(w:number,h:number)=>void,
 *   clear:()=>void }}
 */
export function createBeam(opts = {}) {
  const dpr = Math.max(1, opts.dpr ?? (typeof window !== 'undefined' ? window.devicePixelRatio : 1) ?? 1);
  let W = Math.max(2, Math.round((opts.width ?? 180) * dpr));
  let H = Math.max(2, Math.round((opts.height ?? 70) * dpr));
  let spot = (opts.spot ?? 1.2) * dpr;                 // FOCUS — PSF radius in device px (the resolution limit)
  let tau = opts.persistence ?? REGIME.breathing;      // phosphor glow time in seconds
  let exposure = opts.exposure ?? 1.3;                 // INTEN — overall beam energy → brightness
  let phosphor = opts.color ?? PHOSPHOR;
  const DEP = 0.16;                                    // energy laid per 1px hit (one pass); repeats accumulate
  let frozen = false;
  let lastT = (typeof performance !== 'undefined' ? performance.now() : 0);

  const cv = document.createElement('canvas');
  cv.width = W; cv.height = H;
  cv.style.background = '#05080d';
  cv.style.borderRadius = '6px';
  const ctx = cv.getContext('2d');

  let acc = new Float32Array(W * H);                   // linear HDR energy, one cell per device pixel
  let img = ctx ? ctx.createImageData(W, H) : null;
  let hasPrev = false, prevPx = 0, prevPy = 0;

  // a tight gaussian splat (additive, linear). σ = spot; clamped to a small radius for the sharp core.
  function deposit(/** @type {number} */ px, /** @type {number} */ py, /** @type {number} */ e) {
    const sig = Math.max(0.5, spot), r = Math.ceil(spot * 2);
    const x0 = Math.max(0, Math.floor(px - r)), x1 = Math.min(W - 1, Math.ceil(px + r));
    const y0 = Math.max(0, Math.floor(py - r)), y1 = Math.min(H - 1, Math.ceil(py + r));
    const inv2s2 = 1 / (2 * sig * sig);
    for (let y = y0; y <= y1; y++) {
      const dy = y - py;
      for (let x = x0; x <= x1; x++) {
        const dx = x - px, d2 = dx * dx + dy * dy;
        acc[y * W + x] += e * Math.exp(-d2 * inv2s2);
      }
    }
  }

  // lay a path segment as ~1px-spaced equal-energy hits (uniform along the path — speed-independent).
  function segment(/** @type {number} */ ax, /** @type {number} */ ay, /** @type {number} */ bx, /** @type {number} */ by) {
    const dx = bx - ax, dy = by - ay, len = Math.hypot(dx, dy);
    const steps = Math.max(1, Math.round(len));        // one hit per pixel of travel
    for (let k = 1; k <= steps; k++) { const t = k / steps; deposit(ax + dx * t, ay + dy * t, DEP); }
  }

  function decay(/** @type {number} */ dt) {
    if (dt <= 0) return;
    const k = Math.exp(-dt / Math.max(0.001, tau));
    for (let i = 0; i < acc.length; i++) acc[i] *= k;
  }

  // tone-map the linear field ONCE: brightness saturates, and color whitens where energy piles up.
  function present() {
    if (!ctx || !img) return;
    const d = img.data, [pr, pg, pb] = phosphor;
    for (let i = 0; i < acc.length; i++) {
      const e = acc[i] * exposure;
      if (e <= 0) { const j = i * 4; d[j] = d[j + 1] = d[j + 2] = 0; d[j + 3] = 255; continue; }
      const lum = 1 - Math.exp(-e);                       // 0..1 brightness (saturates, never clips ugly)
      const hot = Math.min(1, Math.max(0, (e - 1.6) / 3));// whiteness onset only where energy is high
      const j = i * 4;
      d[j]     = (255 * (pr + (1 - pr) * hot) * lum) | 0;  // green → white-cyan as `hot` rises
      d[j + 1] = (255 * (pg + (1 - pg) * hot) * lum) | 0;
      d[j + 2] = (255 * (pb + (1 - pb) * hot) * lum) | 0;
      d[j + 3] = 255;
    }
    ctx.putImageData(img, 0, 0);
    // two-scale glow: the sharp trace above + a soft bloom halo composited over it (the wide green glow).
    ctx.save();
    ctx.globalCompositeOperation = 'lighter';
    ctx.globalAlpha = 0.5;
    ctx.filter = `blur(${Math.max(1, Math.round(spot * 2.5))}px)`;
    ctx.drawImage(cv, 0, 0);
    ctx.restore();
  }

  /**
   * The contract. `samples` are the {x,y} points visited since last tick. `latch` presents this frame.
   * @param {{x:number,y:number}[]} samples @param {boolean} [latch=true]
   */
  function tick(samples, latch = true) {
    const now = (typeof performance !== 'undefined' ? performance.now() : lastT + 16.7);
    const dt = (now - lastT) / 1000; lastT = now;          // keep the clock current even while frozen
    if (frozen) { if (latch) present(); return; }
    const maxChord = W * 0.5;                               // larger gap = flyback / untraversed jump → pen up
    if (samples) for (let i = 0; i < samples.length; i++) {
      const px = samples[i].x * (W - 1), py = (1 - samples[i].y) * (H - 1);
      if (hasPrev && Math.hypot(px - prevPx, py - prevPy) <= maxChord) segment(prevPx, prevPy, px, py);
      else deposit(px, py, DEP);                            // pen down at a fresh start / after flyback
      prevPx = px; prevPy = py; hasPrev = true;
    }
    decay(dt);
    if (latch) present();
  }

  function clear() { acc.fill(0); hasPrev = false; }

  return {
    el: cv,
    tick,
    freeze: (on) => { frozen = !!on; },
    isFrozen: () => frozen,
    step: (s) => { const f = frozen; frozen = false; tick([s], true); frozen = f; },
    setPersistence: (sec) => { tau = Math.max(0.01, sec); },   // phosphor glow time, seconds
    setSpot: (px) => { spot = Math.max(0.5, px * dpr); },      // FOCUS
    setColor: (c) => { phosphor = c; },
    setExposure: (e) => { exposure = Math.max(0.01, e); },     // INTEN
    spotSize: () => spot / dpr,
    persistSec: () => tau,
    fit: (w, h) => {
      W = Math.max(2, Math.round(w * dpr)); H = Math.max(2, Math.round(h * dpr));
      cv.width = W; cv.height = H;
      acc = new Float32Array(W * H);
      img = ctx ? ctx.createImageData(W, H) : null;
      hasPrev = false;
    },
    clear,
  };
}
