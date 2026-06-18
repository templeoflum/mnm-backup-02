// slider.js — a real horizontal slider: a track with a draggable thumb over [min,max]. The
// thumb tracks the pointer directly (absolute position, not the scrub's cursor-hidden relative
// drag) — click anywhere on the track to jump there, drag the thumb to slide. One job: pick a
// value in a range by hand. Self-contained: injects its own CSS once. Plain JS + DOM, no deps.
//
// Palette matches the rest of the kit (heart scrub / smart param): #05080d ground, #1c2630
// border, #7d97ab slab label, #62f0c0 fill + thumb.

let stylesIn = false;
function ensureStyles() {
  if (stylesIn) return; stylesIn = true;
  const css = `
    .kslider{display:inline-flex;flex-direction:column;gap:4px;width:128px;box-sizing:border-box;
      font:11.5px ui-monospace,monospace;color:#9fc4dc;background:#05080d;padding:4px 8px 8px;
      border:1px solid #1c2630;border-radius:6px;user-select:none;touch-action:none}
    .kslider .ksl-slab{display:flex;justify-content:space-between;gap:6px;color:#7d97ab;font-size:10px;
      white-space:nowrap;overflow:hidden}
    .kslider .ksl-slab b{color:#62f0c0;font-weight:500}
    .kslider .ksl-track{position:relative;height:10px;border-radius:5px;background:#02040a;
      border:1px solid #1c2630;cursor:pointer}
    .kslider .ksl-fill{position:absolute;left:0;top:0;bottom:0;width:0;border-radius:5px 0 0 5px;
      background:#62f0c0;opacity:0.22;pointer-events:none}
    .kslider .ksl-thumb{position:absolute;top:50%;width:10px;height:14px;border-radius:3px;
      background:#62f0c0;transform:translate(-50%,-50%);pointer-events:none;box-shadow:0 0 0 1px #05080d}
    .kslider.dragging .ksl-track{border-color:#4fb8e8}`;
  const t = document.createElement('style'); t.id = 'kit-slider-css'; t.textContent = css;
  document.head.appendChild(t);
}

/** @param {number} v */
function defaultFormat(v) { return (Math.abs(v) >= 100 || Number.isInteger(v)) ? v.toFixed(0) : v.toFixed(2); }

/**
 * @typedef {Object} SliderOpts
 * @property {string} [label] text shown at the slab's left
 * @property {number} [value] initial value (default = min)
 * @property {number} [min] floor (default 0)
 * @property {number} [max] ceiling (default 1)
 * @property {number} [step] quantise the value to this grid (default 0.01; 0 = continuous)
 * @property {(v:number)=>string} [format] value → display string
 * @property {(v:number)=>void} [onInput] called whenever the value changes
 */

/**
 * Create a slider control.
 * @param {SliderOpts} [opts]
 * @returns {{ el: HTMLElement, get: () => number, set: (v:number, silent?:boolean) => void }}
 */
export function createSlider(opts = {}) {
  ensureStyles();
  const label = opts.label ?? '';
  const min = opts.min ?? 0;
  const max = opts.max ?? 1;
  const step = opts.step ?? 0.01;
  const fmt = opts.format ?? defaultFormat;
  const onInput = opts.onInput;
  let value = clamp(opts.value ?? min);

  /** @param {number} v */
  function clamp(v) { return Math.max(min, Math.min(max, v)); }
  /** @param {number} v */
  function quantise(v) { return step > 0 ? Math.round(v / step) * step : v; }

  const el = document.createElement('div'); el.className = 'kslider';
  const slab = document.createElement('div'); slab.className = 'ksl-slab';
  const lab = document.createElement('span'); lab.textContent = label;
  let b = document.createElement('b');
  slab.append(lab, b);
  const track = document.createElement('div'); track.className = 'ksl-track';
  const fill = document.createElement('div'); fill.className = 'ksl-fill';
  const thumb = document.createElement('div'); thumb.className = 'ksl-thumb';
  track.append(fill, thumb);
  el.append(slab, track);

  /** @param {boolean} [silent] */
  function paint(silent) {
    const frac = (max - min) ? (value - min) / (max - min) : 0;       // [0,1] position
    fill.style.width = (frac * 100) + '%';
    thumb.style.left = (frac * 100) + '%';
    b.textContent = fmt(value);
    if (!silent && onInput) onInput(value);
  }
  /** @param {number} v @param {boolean} [silent] */
  function set(v, silent) { value = clamp(quantise(v)); paint(silent); }
  function get() { return value; }

  // pointer → value by absolute position along the track (the slider IS where you point)
  /** @param {number} clientX */
  function fromX(clientX) {
    const r = track.getBoundingClientRect();
    const frac = r.width ? Math.max(0, Math.min(1, (clientX - r.left) / r.width)) : 0;
    set(min + frac * (max - min));
  }
  let dragging = false;
  track.addEventListener('pointerdown', (e) => {
    dragging = true; el.classList.add('dragging'); track.setPointerCapture(e.pointerId);
    fromX(e.clientX); e.preventDefault();
  });
  track.addEventListener('pointermove', (e) => { if (dragging) fromX(e.clientX); });
  const end = () => { if (!dragging) return; dragging = false; el.classList.remove('dragging'); };
  track.addEventListener('pointerup', end);
  track.addEventListener('pointercancel', end);

  paint(true);                                       // initial render, no callback
  return { el, get, set };
}
