// scope.js — the DIAGNOSTICS display. Plots value(s) over time: a rolling trace that
// scrolls left as samples arrive. set(a) feeds channel A; set(a, b) also feeds B.
//
// One channel (default): a single trace across the full height. Two channels: the
// classic oscilloscope split — A in the top lane, B in the bottom lane, each its own
// trace, NOT overlapping, divided by a centre rule. A held value draws a flat line, a
// swept one a curve. Plain JS + Canvas, self-contained, no deps.
//
// PRECISION: the backing store is sized to the displayed pixels × devicePixelRatio and
// holds ONE sample per physical pixel column — no CSS up-scaling, no smear, crisp lines.
// It re-fits on resize. FOLLOW mode tracks an unbounded climber: the y-range slides to
// [value − span, value] so the trace keeps climbing at its rate's slope instead of pegging.

const COL_A = '#62f0c0';   // channel A — green
const COL_B = '#e8b765';   // channel B — amber

/**
 * @param {{ min?: number, max?: number, width?: number, height?: number, channels?: 1|2 }} [opts]
 * @returns {{ el: HTMLCanvasElement, set: (a:number, b?:number) => void, push: (a:number, b?:number) => void,
 *   setRange: (lo:number, hi:number) => void, setChannels: (n:1|2) => void, setFollow: (on:boolean, span?:number) => void, clear: () => void }}
 */
export function createScope(opts = {}) {
  let min = opts.min ?? 0, max = opts.max ?? 1;
  let channels = opts.channels ?? 1;
  let follow = false, followSpan = 1;
  let W = Math.max(2, opts.width ?? 180), H = Math.max(2, opts.height ?? 70);
  let lineW = 1;
  const cv = document.createElement('canvas');
  cv.width = W; cv.height = H;
  cv.style.background = '#05080d';
  cv.style.border = '1px solid #1c2630';
  cv.style.borderRadius = '6px';
  const ctx = cv.getContext('2d');
  let bufA = new Array(W).fill(min);
  let bufB = new Array(W).fill(min);
  let curA = min, curB = min;

  const norm = (/** @type {number} */ v) => Math.max(0, Math.min(1, (v - min) / ((max - min) || 1)));

  // size the backing store to the displayed pixels × dpr — one sample per physical column. Preserve
  // the most-recent tail when the width changes so a resize doesn't blank the trace.
  function fit() {
    const dpr = Math.max(1, window.devicePixelRatio || 1);
    const rect = cv.getBoundingClientRect();
    const cssW = rect.width || (opts.width ?? 180), cssH = rect.height || (opts.height ?? 70);
    const nW = Math.max(2, Math.round(cssW * dpr)), nH = Math.max(2, Math.round(cssH * dpr));
    lineW = Math.max(1, Math.round(dpr));
    if (nW === W && nH === H) return;
    const nbA = new Array(nW).fill(min), nbB = new Array(nW).fill(min);
    const keep = Math.min(W, nW);
    for (let i = 0; i < keep; i++) { nbA[nW - 1 - i] = bufA[W - 1 - i]; nbB[nW - 1 - i] = bufB[W - 1 - i]; }
    bufA = nbA; bufB = nbB; W = nW; H = nH; cv.width = W; cv.height = H;
  }
  if (typeof ResizeObserver !== 'undefined') new ResizeObserver(() => fit()).observe(cv);

  /** @param {number} a @param {number} [b] */
  function set(a, b) { curA = a; curB = (b === undefined ? min : b); if (follow) { min = a - followSpan; max = a; } }   // follow: slide the window to keep the climber at the top
  /** @param {number} lo @param {number} hi */
  function setRange(lo, hi) { min = lo; max = hi; }
  /** @param {1|2} n */
  function setChannels(n) { channels = n; }
  /** @param {boolean} on @param {number} [span] */
  function setFollow(on, span) { follow = !!on; if (span && span > 0) followSpan = span; }
  function clear() { for (let i = 0; i < W; i++) { bufA[i] = min; bufB[i] = min; } curA = min; curB = min; }

  /** Draw one trace into a horizontal lane [top, top+h]. @param {number[]} buf @param {number} top @param {number} h @param {string} col */
  function lane(buf, top, h, col) {
    if (!ctx) return;
    ctx.strokeStyle = '#1c2630'; ctx.lineWidth = lineW; ctx.beginPath();
    ctx.moveTo(0, top + h / 2); ctx.lineTo(W, top + h / 2); ctx.stroke();     // lane midline
    ctx.strokeStyle = col; ctx.lineWidth = lineW; ctx.beginPath();
    for (let i = 0; i < W; i++) {
      const y = top + h - norm(buf[i]) * h;
      i === 0 ? ctx.moveTo(i, y) : ctx.lineTo(i, y);
    }
    ctx.stroke();
  }

  (function loop() {
    bufA.shift(); bufA.push(curA);
    bufB.shift(); bufB.push(curB);
    if (ctx) {
      ctx.clearRect(0, 0, W, H);
      if (channels === 2) {
        lane(bufA, 0, H / 2, COL_A);
        lane(bufB, H / 2, H / 2, COL_B);
        ctx.strokeStyle = '#2a3a48'; ctx.lineWidth = lineW; ctx.beginPath();   // lane divider
        ctx.moveTo(0, H / 2); ctx.lineTo(W, H / 2); ctx.stroke();
      } else {
        lane(bufA, 0, H, COL_A);
      }
    }
    requestAnimationFrame(loop);
  })();

  return { el: cv, set, push: set, setRange, setChannels, setFollow, clear };
}
