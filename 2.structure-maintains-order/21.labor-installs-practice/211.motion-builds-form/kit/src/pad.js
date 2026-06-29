// pad.js — the 2D control. Produces *two numbers at once*: drag a point in a square.
// The XY pad. Each axis maps [0..1] across the box to [min..max]. Plain JS + DOM,
// self-contained, no deps.

let stylesIn = false;
function ensureStyles() {
  if (stylesIn) return; stylesIn = true;
  const css = `
    .kpad{position:relative;width:140px;height:140px;background:#05080d;border:1px solid #1c2630;
      border-radius:6px;touch-action:none;cursor:crosshair}
    .kpad .dot{position:absolute;width:12px;height:12px;margin:-6px;border-radius:50%;
      background:#62f0c0;box-shadow:0 0 8px rgba(98,240,192,0.6);pointer-events:none}
    .kpad .cross{position:absolute;background:#13202a;pointer-events:none}`;
  const t = document.createElement('style'); t.id = 'kit-pad-css'; t.textContent = css;
  document.head.appendChild(t);
}

/**
 * @param {{ value?: {x:number,y:number}, xMin?:number, xMax?:number, yMin?:number, yMax?:number,
 *   onInput?: (v:{x:number,y:number}) => void }} [opts]
 * @returns {{ el: HTMLElement, get: () => {x:number,y:number}, set: (v:{x:number,y:number}, silent?:boolean) => void }}
 */
export function createPad(opts = {}) {
  ensureStyles();
  const xMin = opts.xMin ?? 0, xMax = opts.xMax ?? 1, yMin = opts.yMin ?? 0, yMax = opts.yMax ?? 1;
  let x = opts.value?.x ?? (xMin + xMax) / 2;
  let y = opts.value?.y ?? (yMin + yMax) / 2;

  const el = document.createElement('div'); el.className = 'kpad';
  const dot = document.createElement('div'); dot.className = 'dot';
  el.appendChild(dot);

  const clamp = (/** @type {number} */ v, /** @type {number} */ lo, /** @type {number} */ hi) => Math.max(lo, Math.min(hi, v));
  /** @param {boolean} [silent] */
  function paint(silent) {
    const px = (x - xMin) / (xMax - xMin), py = (y - yMin) / (yMax - yMin);
    dot.style.left = (px * 100) + '%';
    dot.style.top = ((1 - py) * 100) + '%';                 // y up
    if (!silent && opts.onInput) opts.onInput({ x, y });
  }
  /** @param {{x:number,y:number}} v @param {boolean} [silent] */
  function set(v, silent) { x = clamp(v.x, xMin, xMax); y = clamp(v.y, yMin, yMax); paint(silent); }

  let dragging = false;
  function fromEvent(/** @type {PointerEvent} */ e) {
    const r = el.getBoundingClientRect();
    const px = clamp((e.clientX - r.left) / r.width, 0, 1);
    const py = clamp(1 - (e.clientY - r.top) / r.height, 0, 1);
    x = xMin + px * (xMax - xMin); y = yMin + py * (yMax - yMin); paint(false);
  }
  el.addEventListener('pointerdown', (e) => { dragging = true; el.setPointerCapture(e.pointerId); fromEvent(e); e.preventDefault(); });
  el.addEventListener('pointermove', (e) => { if (dragging) fromEvent(e); });
  el.addEventListener('pointerup', () => { dragging = false; });
  el.addEventListener('pointercancel', () => { dragging = false; });

  paint(true);
  return { el, get: () => ({ x, y }), set };
}
