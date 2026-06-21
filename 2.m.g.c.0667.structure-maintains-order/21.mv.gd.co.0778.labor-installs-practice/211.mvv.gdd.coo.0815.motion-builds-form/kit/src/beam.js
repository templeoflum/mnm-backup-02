// beam.js — the analog-beam renderer. Reusable: clock domain → (advance, latch) → light.
//
// Renders a live stream of emitted samples as a glowing, persistent phosphor beam — a bright
// head, a wake decaying behind it, crossings summing brighter (visitation density). It is a
// MEASUREMENT PIPELINE THAT OUTPUTS LIGHT: it never invents structure the signal lacks and
// never hides structure it has. Consumers feed it through one thin contract and nothing more:
//
//   tick(samples, latch) — samples = the points emitted since the last tick (normalized [0,1],
//                          x left→right, y 0=bottom 1=top). latch = present this frame (boolean).
//
// `advance` (arc-length moved this frame) is read FROM the samples' own geometry, so the renderer
// stays dumb about time: freeze = tick([], …) (no samples → advance 0); step = tick([oneSample]).
//
// Honest by construction:
//   - linear-HDR additive accumulation, tone-mapped ONCE (additive glow in sRGB would lie about
//     intensity where strokes overlap).
//   - persistence keyed to ARC-LENGTH-behind-head, not wall-clock — so freeze holds the picture
//     rock-steady and a fast-moving beam fades its wake faster (honest velocity reading).
//   - never draws a chord longer than the PSF spot: long jumps are sub-sampled, so the beam never
//     connects distant points it didn't actually traverse.
//   - spot size (the PSF width) IS the spatial resolution; it's a reported quantity, not hidden.
//
// SCROLL mode (this build): the head sits at the right edge, the wake scrolls left as it ages —
// the time-series scope. SWEEP mode (head sweeps a fixed screen, figures, retrace) arrives with
// strobe/hold-off, deferred. Plain JS + Canvas, no deps, no build (types in JSDoc, tsc --noEmit).

/** persistence regimes — decay length as a multiple of the visible window (arc-length, px). */
export const REGIME = { comet: 0.12, breathing: 0.5, standing: 6.0 };

/**
 * @param {{ width?:number, height?:number, dpr?:number, color?:[number,number,number],
 *   spot?:number, persistence?:number, exposure?:number }} [opts]
 * @returns {{ el:HTMLCanvasElement, tick:(samples:{x:number,y:number}[], latch?:boolean)=>number,
 *   freeze:(on:boolean)=>void, isFrozen:()=>boolean, step:(s:{x:number,y:number})=>void,
 *   setPersistence:(px:number)=>void, setSpot:(px:number)=>void, setColor:(c:[number,number,number])=>void,
 *   setExposure:(e:number)=>void, spotSize:()=>number, persistLen:()=>number, fit:(w:number,h:number)=>void,
 *   clear:()=>void }}
 */
export function createBeam(opts = {}) {
  const dpr = Math.max(1, opts.dpr ?? (typeof window !== 'undefined' ? window.devicePixelRatio : 1) ?? 1);
  let W = Math.max(2, Math.round((opts.width ?? 180) * dpr));
  let H = Math.max(2, Math.round((opts.height ?? 70) * dpr));
  let spot = (opts.spot ?? 1.4) * dpr;                 // PSF radius in device px = the resolution limit
  let persistPx = (opts.persistence ?? W * REGIME.breathing); // arc-length (px) over which energy falls by 1/e
  let exposure = opts.exposure ?? 1.0;
  let color = opts.color ?? [98, 240, 192];            // wake hue (linear-ish rgb 0..255)
  let frozen = false;

  const cv = document.createElement('canvas');
  cv.width = W; cv.height = H;
  cv.style.background = '#05080d';
  cv.style.border = '1px solid #1c2630';
  cv.style.borderRadius = '6px';
  const ctx = cv.getContext('2d');

  let acc = new Float32Array(W * H);                   // linear HDR energy, one cell per device pixel
  let img = ctx ? ctx.createImageData(W, H) : null;
  /** @type {{x:number,y:number}|null} */ let head = null;   // latest emitted sample (normalized)

  // ── deposit one sample's energy via a gaussian point-spread function (additive, linear) ──
  // σ = spot/2; the splat is clamped to the spot radius. This is the aperture: two features
  // closer than the spot merge — which is WHY the spot is reported, not hidden.
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

  const toPx = (/** @type {{x:number,y:number}} */ s) => ({ px: s.x * (W - 1), py: (1 - s.y) * (H - 1) });

  // ── emit: lay this frame's samples into the buffer, sub-sampling any chord longer than the spot
  // so the beam never draws a straight line it didn't traverse. Returns arc-length advanced (px). ──
  function emit(/** @type {{x:number,y:number}[]} */ samples) {
    let arc = 0;
    let prev = head ? toPx(head) : null;
    for (let i = 0; i < samples.length; i++) {
      const cur = toPx(samples[i]);
      if (prev) {
        const dx = cur.px - prev.px, dy = cur.py - prev.py;
        const seg = Math.hypot(dx, dy);
        arc += seg;
        const steps = Math.max(1, Math.ceil(seg / spot));     // honesty rule: no chord longer than the spot
        for (let k = 1; k <= steps; k++) {
          const t = k / steps;
          deposit(prev.px + dx * t, prev.py + dy * t, 1 / steps);
        }
      } else {
        deposit(cur.px, cur.py, 1);
      }
      prev = cur;
      head = samples[i];
    }
    return arc;
  }

  // ── persistence: decay the whole field by arc-length advanced. Frame-rate independent because
  // it's keyed to how far the beam MOVED, not to how many frames elapsed. ──
  function decay(/** @type {number} */ arc) {
    if (arc <= 0) return;
    const k = Math.exp(-arc / Math.max(1, persistPx));
    for (let i = 0; i < acc.length; i++) acc[i] *= k;
  }

  // scroll the field left by `cols` device-px so the wake ages leftward as new head samples land
  // at the right edge (the time-series scroll). Vertical structure is preserved; only x shifts.
  function scrollLeft(/** @type {number} */ cols) {
    cols = Math.round(cols);
    if (cols <= 0) return;
    if (cols >= W) { acc.fill(0); return; }
    for (let y = 0; y < H; y++) {
      const row = y * W;
      acc.copyWithin(row, row + cols, row + W);          // shift this row left
      for (let x = W - cols; x < W; x++) acc[row + x] = 0; // clear the newly-exposed right edge
    }
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
    // the head is real, live information — render it brighter and tighter than its wake.
    if (head) {
      const { px, py } = toPx(head);
      ctx.save();
      ctx.globalCompositeOperation = 'lighter';
      const g = ctx.createRadialGradient(px, py, 0, px, py, spot * 1.6);
      g.addColorStop(0, 'rgba(235,255,245,0.95)');
      g.addColorStop(1, 'rgba(235,255,245,0)');
      ctx.fillStyle = g;
      ctx.beginPath(); ctx.arc(px, py, spot * 1.6, 0, Math.PI * 2); ctx.fill();
      ctx.restore();
    }
  }

  /**
   * The contract. `samples` are the points emitted since the last tick (normalized). `latch`
   * presents this frame. Returns the arc-length advanced (the honest `advance`).
   * @param {{x:number,y:number}[]} samples @param {boolean} [latch=true]
   */
  function tick(samples, latch = true) {
    if (frozen) { if (latch) present(); return 0; }       // freeze: advance 0, field holds, view stays live
    let arc = 0;
    if (samples && samples.length) {
      // scroll the wake to keep pace with the head's horizontal travel, then lay the new samples.
      const dxCols = head ? (samples[samples.length - 1].x - head.x) * (W - 1) : 0;
      if (dxCols > 0) scrollLeft(dxCols);
      arc = emit(samples);
      decay(arc);
    }
    if (latch) present();
    return arc;
  }

  return {
    el: cv,
    tick,
    freeze: (on) => { frozen = !!on; },
    isFrozen: () => frozen,
    step: (s) => { const f = frozen; frozen = false; tick([s], true); frozen = f; },  // one quantum, view stays put
    setPersistence: (px) => { persistPx = Math.max(1, px); },
    setSpot: (px) => { spot = Math.max(0.5, px * dpr); },
    setColor: (c) => { color = c; },
    setExposure: (e) => { exposure = Math.max(0.01, e); },
    spotSize: () => spot / dpr,                            // reported in CSS px — the resolution the eye sees
    persistLen: () => persistPx,
    fit: (w, h) => {
      W = Math.max(2, Math.round(w * dpr)); H = Math.max(2, Math.round(h * dpr));
      cv.width = W; cv.height = H;
      acc = new Float32Array(W * H);
      img = ctx ? ctx.createImageData(W, H) : null;
      head = null;
    },
    clear: () => { acc.fill(0); head = null; },
  };
}
