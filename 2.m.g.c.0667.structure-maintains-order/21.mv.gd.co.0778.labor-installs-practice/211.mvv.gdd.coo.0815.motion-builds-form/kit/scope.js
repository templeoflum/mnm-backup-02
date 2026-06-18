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
 *   setRange: (lo:number, hi:number) => void, setChannels: (n:1|2) => void, setFollow: (on:boolean, span?:number) => void,
 *   setZoom: (z:number) => void, clear: () => void }}
 */
export function createScope(opts = {}) {
  let min = opts.min ?? 0, max = opts.max ?? 1;
  let channels = opts.channels ?? 1;
  let follow = false, followSpan = 1, zoomX = 1;
  let W = Math.max(2, opts.width ?? 180), H = Math.max(2, opts.height ?? 70);
  let lineW = 1;
  const HIST = 4096;                            // history reservoir — independent of canvas width, so X-zoom can pull more time into view
  const cv = document.createElement('canvas');
  cv.width = W; cv.height = H; cv.dataset.zoomx = '1.000';
  cv.style.background = '#05080d';
  cv.style.border = '1px solid #1c2630';
  cv.style.borderRadius = '6px';
  const ctx = cv.getContext('2d');
  const bufA = new Array(HIST).fill(min);
  const bufB = new Array(HIST).fill(min);
  let curA = min, curB = min;

  const norm = (/** @type {number} */ v) => Math.max(0, Math.min(1, (v - min) / ((max - min) || 1)));

  // size the backing store to the displayed pixels × dpr — one sample per physical column. Preserve
  // the most-recent tail when the width changes so a resize doesn't blank the trace.
  // size the backing store to displayed pixels × dpr — one sample per physical column, crisp. The
  // history buffer is fixed (HIST), independent of W, so zooming X just selects how much of it shows.
  function fit() {
    const dpr = Math.max(1, window.devicePixelRatio || 1);
    const rect = cv.getBoundingClientRect();
    const cssW = rect.width || (opts.width ?? 180), cssH = rect.height || (opts.height ?? 70);
    W = Math.max(2, Math.round(cssW * dpr)); H = Math.max(2, Math.round(cssH * dpr));
    cv.width = W; cv.height = H; lineW = Math.max(1, Math.round(dpr));
  }
  if (typeof ResizeObserver !== 'undefined') new ResizeObserver(() => fit()).observe(cv);
  // scroll wheel over the scope = zoom the X (time) axis: in → fewer samples stretched (more detail),
  // out → more of the history pulled in (up to HIST). zoomX is mirrored to data-zoomx for the rig.
  function setZoom(z) { zoomX = Math.max(W / HIST, Math.min(50, z)); cv.dataset.zoomx = zoomX.toFixed(3); }
  cv.addEventListener('wheel', (e) => { e.preventDefault(); setZoom(zoomX * (e.deltaY < 0 ? 1.15 : 1 / 1.15)); }, { passive: false });

  /** @param {number} a @param {number} [b] */
  function set(a, b) { curA = a; curB = (b === undefined ? min : b); if (follow) { min = a - followSpan; max = a; } }   // follow: slide the window to keep the climber at the top
  /** @param {number} lo @param {number} hi */
  function setRange(lo, hi) { min = lo; max = hi; }
  /** @param {1|2} n */
  function setChannels(n) { channels = n; }
  /** @param {boolean} on @param {number} [span] */
  function setFollow(on, span) { follow = !!on; if (span && span > 0) followSpan = span; }
  function clear() { for (let i = 0; i < HIST; i++) { bufA[i] = min; bufB[i] = min; } curA = min; curB = min; }

  /** Draw one trace into a horizontal lane [top, top+h]. @param {number[]} buf @param {number} top @param {number} h @param {string} col */
  function lane(buf, top, h, col) {
    if (!ctx) return;
    ctx.strokeStyle = '#1c2630'; ctx.lineWidth = lineW; ctx.beginPath();
    ctx.moveTo(0, top + h / 2); ctx.lineTo(W, top + h / 2); ctx.stroke();     // lane midline
    const vis = Math.max(2, Math.min(HIST, Math.round(W / zoomX)));           // how many history samples fill the width (zoom X)
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

  return { el: cv, set, push: set, setRange, setChannels, setFollow, setZoom, clear };
}
