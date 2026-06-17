// scope.js — the DIAGNOSTICS display. Plots a value over time: a rolling trace that
// scrolls left as samples arrive. set(a) draws one trace; set(a, b) draws a SECOND
// (dim) trace for b AND rides the primary trace's colour SATURATION on b — so an XY
// pad reads as x (line position) carrying y (saturation + a ghost trace). A held value
// draws a flat line, a swept one a curve. Plain JS + Canvas, self-contained, no deps.

/**
 * @param {{ min?: number, max?: number, width?: number, height?: number }} [opts]
 * @returns {{ el: HTMLCanvasElement, set: (a:number, b?:number) => void, push: (a:number, b?:number) => void, setRange: (lo:number, hi:number) => void, clear: () => void }}
 */
export function createScope(opts = {}) {
  let min = opts.min ?? 0, max = opts.max ?? 1;
  const W = opts.width ?? 180, H = opts.height ?? 70;
  const cv = document.createElement('canvas');
  cv.width = W; cv.height = H;
  cv.style.background = '#05080d';
  cv.style.border = '1px solid #1c2630';
  cv.style.borderRadius = '6px';
  const ctx = cv.getContext('2d');
  const buf = new Array(W).fill(min);
  /** @type {(number|null)[]} */ const buf2 = new Array(W).fill(null);
  let current = min;
  /** @type {number|null} */ let currentB = null;

  const norm = (/** @type {number} */ v) => Math.max(0, Math.min(1, (v - min) / ((max - min) || 1)));
  const yOf = (/** @type {number} */ v) => H - norm(v) * H;

  /** @param {number} a @param {number} [b] */
  function set(a, b) { current = a; currentB = (b === undefined ? null : b); }
  /** @param {number} lo @param {number} hi */
  function setRange(lo, hi) { min = lo; max = hi; }
  function clear() { for (let i = 0; i < W; i++) { buf[i] = min; buf2[i] = null; } current = min; currentB = null; }

  (function loop() {
    buf.shift(); buf.push(current);
    buf2.shift(); buf2.push(currentB);
    if (ctx) {
      ctx.clearRect(0, 0, W, H);
      // midline
      ctx.strokeStyle = '#1c2630'; ctx.lineWidth = 1; ctx.beginPath();
      ctx.moveTo(0, H / 2); ctx.lineTo(W, H / 2); ctx.stroke();
      // secondary (b) — a dim ghost trace behind, so y's own shape is visible
      ctx.strokeStyle = 'rgba(120,150,175,0.32)'; ctx.lineWidth = 1; ctx.beginPath();
      let started = false;
      for (let i = 0; i < W; i++) {
        const v = buf2[i]; if (v === null) { started = false; continue; }
        const y = yOf(v);
        started ? ctx.lineTo(i, y) : (ctx.moveTo(i, y), started = true);
      }
      ctx.stroke();
      // primary (a) — per-segment colour: saturation rides on b at each sample
      ctx.lineWidth = 1.5;
      for (let i = 1; i < W; i++) {
        const sat = buf2[i] === null ? 82 : Math.round(18 + 82 * norm(/** @type {number} */(buf2[i])));
        ctx.strokeStyle = `hsl(160, ${sat}%, 64%)`;
        ctx.beginPath();
        ctx.moveTo(i - 1, yOf(buf[i - 1]));
        ctx.lineTo(i, yOf(buf[i]));
        ctx.stroke();
      }
    }
    requestAnimationFrame(loop);
  })();

  return { el: cv, set, push: set, setRange, clear };
}
