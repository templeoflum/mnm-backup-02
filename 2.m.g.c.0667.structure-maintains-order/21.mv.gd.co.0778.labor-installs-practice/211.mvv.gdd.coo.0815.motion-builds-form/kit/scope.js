// scope.js — the DIAGNOSTICS display. Plots a value over time: a rolling trace that
// scrolls left as samples arrive. Set its value (e.g. from a wired control); it samples
// the current value every frame, so a held value draws a flat line, a swept one draws a
// curve. Plain JS + Canvas, self-contained, no deps.

/**
 * @param {{ min?: number, max?: number, width?: number, height?: number }} [opts]
 * @returns {{ el: HTMLCanvasElement, set: (v:number) => void, push: (v:number) => void, setRange: (lo:number, hi:number) => void, clear: () => void }}
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
  let current = min;

  function set(/** @type {number} */ v) { current = v; }
  function setRange(/** @type {number} */ lo, /** @type {number} */ hi) { min = lo; max = hi; }
  function clear() { for (let i = 0; i < W; i++) buf[i] = min; current = min; }

  (function loop() {
    buf.shift(); buf.push(current);
    if (ctx) {
      ctx.clearRect(0, 0, W, H);
      ctx.strokeStyle = '#1c2630'; ctx.beginPath();
      ctx.moveTo(0, H / 2); ctx.lineTo(W, H / 2); ctx.stroke();   // midline
      ctx.strokeStyle = '#62f0c0'; ctx.lineWidth = 1.5; ctx.beginPath();
      for (let i = 0; i < W; i++) {
        const f = (buf[i] - min) / (max - min);
        const y = H - Math.max(0, Math.min(1, f)) * H;
        i === 0 ? ctx.moveTo(i, y) : ctx.lineTo(i, y);
      }
      ctx.stroke();
    }
    requestAnimationFrame(loop);
  })();

  return { el: cv, set, push: set, setRange, clear };
}
