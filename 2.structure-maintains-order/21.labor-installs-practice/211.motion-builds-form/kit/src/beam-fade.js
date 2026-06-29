// beam-fade.js — the LIGHTWEIGHT beam. Same contract as beam.js, rendered cheap: each frame fade the
// whole canvas toward the background by the decay, then stroke the new swept segment. No per-pixel
// gaussian, no float accumulator, no bloom — a fillRect + a stroke, cost independent of sweep speed.
// Persistence = the fade rate (τ, seconds); the trail dims as exp(−dt/τ). The HDR phosphor look lives
// in beam.js, parked for a Rust/WASM port (frame.beam-fades-trace). Plain JS + Canvas, no deps.
//
// The consumer owns the motion via tick(samples, latch): samples = {x,y} the beam visited since the
// last tick (normalized [0,1], y 0=bottom 1=top). Pen lifts on a sweep flyback (x jumps backward).

const BG = [5, 8, 13];   // #05080d — the scope background the fade dims toward

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
  let spot = (opts.spot ?? 1.2) * dpr;                 // FOCUS → stroke width (device px)
  let tau = opts.persistence ?? 0.1;                   // phosphor glow time in seconds (the fade rate)
  let exposure = opts.exposure ?? 0.5;                 // INTEN → stroke alpha (brightness)
  let color = opts.color ?? [0.30 * 255, 255, 0.55 * 255].map(Math.round);
  let frozen = false;
  let lastT = (typeof performance !== 'undefined' ? performance.now() : 0);
  let hasPrev = false, prevPx = 0, prevPy = 0;

  const cv = document.createElement('canvas');
  cv.width = W; cv.height = H;
  cv.style.background = '#05080d';
  cv.style.borderRadius = '6px';
  const ctx = cv.getContext('2d');
  function fillBg() { if (ctx) { ctx.globalCompositeOperation = 'source-over'; ctx.fillStyle = `rgb(${BG[0]},${BG[1]},${BG[2]})`; ctx.fillRect(0, 0, W, H); } }
  fillBg();   // start opaque on the background (so drawImage onto the scope composites seamlessly)

  const now = () => (typeof performance !== 'undefined' ? performance.now() : lastT + 16.7);

  /**
   * The contract. `samples` are the {x,y} points visited since last tick. Fade then stroke.
   * @param {{x:number,y:number}[]} samples @param {boolean} [latch=true]
   */
  function tick(samples, latch = true) {
    const t = now();
    const dt = (t - lastT) / 1000; lastT = t;
    if (frozen) return;                                  // hold the picture: no fade, no draw
    if (ctx && dt > 0) {                                 // FADE: dim the whole canvas toward bg by the decay
      ctx.globalCompositeOperation = 'source-over';
      ctx.fillStyle = `rgba(${BG[0]},${BG[1]},${BG[2]},${Math.min(1, 1 - Math.exp(-dt / Math.max(0.001, tau)))})`;
      ctx.fillRect(0, 0, W, H);
    }
    if (ctx && samples && samples.length) {              // STROKE the new swept segment
      ctx.strokeStyle = `rgba(${color[0]},${color[1]},${color[2]},${Math.max(0.05, Math.min(1, exposure))})`;
      ctx.lineWidth = Math.max(1, spot); ctx.lineCap = 'round'; ctx.lineJoin = 'round';
      ctx.beginPath();
      for (let i = 0; i < samples.length; i++) {
        const px = samples[i].x * (W - 1), py = (1 - samples[i].y) * (H - 1);
        if (hasPrev && (prevPx - px) <= W * 0.5) ctx.lineTo(px, py);   // pen down — connect (incl. steep edges)
        else ctx.moveTo(px, py);                                       // pen up — flyback / first point
        prevPx = px; prevPy = py; hasPrev = true;
      }
      ctx.stroke();
    }
  }

  function clear() { fillBg(); hasPrev = false; }

  return {
    el: cv,
    tick,
    freeze: (on) => { frozen = !!on; },
    isFrozen: () => frozen,
    step: (s) => { const f = frozen; frozen = false; tick([s], true); frozen = f; },
    setPersistence: (sec) => { tau = Math.max(0.01, sec); },   // fade rate, seconds
    setSpot: (px) => { spot = Math.max(0.5, px * dpr); },      // FOCUS → stroke width
    setColor: (c) => { color = c; },
    setExposure: (e) => { exposure = Math.max(0.01, e); },     // INTEN → stroke alpha
    spotSize: () => spot / dpr,
    persistSec: () => tau,
    fit: (w, h) => {
      W = Math.max(2, Math.round(w * dpr)); H = Math.max(2, Math.round(h * dpr));
      cv.width = W; cv.height = H;
      fillBg(); hasPrev = false;
    },
    clear,
  };
}
