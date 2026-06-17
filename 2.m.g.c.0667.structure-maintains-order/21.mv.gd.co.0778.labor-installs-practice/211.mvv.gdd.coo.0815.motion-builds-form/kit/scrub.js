// scrub.js — the scrub control: a compact numeric chip you drag, step, or type.
//
// The kit's workhorse, distilled from TS_formulas. One job: edit a number. It
// knows nothing about parameters or phase — it holds a value, and calls onInput
// when the value changes. Bind it to anything (a parameter's ratio, a base value,
// a raw uniform) from the outside.
//
// Interaction:
//   · drag horizontally — change by  dx · step  (× a precision factor)
//   · drag vertically while dragging — pull DOWN for finer, UP for coarser
//   · Ctrl while dragging — finer still
//   · ◀ ▶ arrows — step by the grid (snap ?? step); Shift = ×10
//   · double-click — type an exact value
//   · right-click — reset to the initial value
//
// Self-contained: injects its own CSS once. Copy the file out and it works.
// Plain JS + DOM, no deps.

let stylesIn = false;
function ensureStyles() {
  if (stylesIn) return;
  stylesIn = true;
  const css = `
    .scrub{font:11.5px ui-monospace,monospace;color:#9fc4dc;background:#05080d;
      border:1px solid #1c2630;border-radius:6px;cursor:ew-resize;user-select:none;
      white-space:nowrap;touch-action:none;display:inline-flex;align-items:stretch;overflow:hidden}
    .scrub .sval{padding:6px 10px;flex:1;text-align:center;cursor:ew-resize}
    .scrub b{color:#62f0c0;font-weight:500;margin-left:6px}
    .scrub.dragging{border-color:#4fb8e8}
    .scrub .ar{display:flex;align-items:center;justify-content:center;width:20px;
      color:#4a5a68;cursor:pointer;background:rgba(255,255,255,0.025);font-size:10px;flex:0 0 auto}
    .scrub .ar:hover{color:#9fc4dc;background:rgba(98,240,192,0.14)}
    .scrub .ar:active{background:rgba(98,240,192,0.28)}
    .scrub .ar.l{border-right:1px solid #1c2630}
    .scrub .ar.r{border-left:1px solid #1c2630}
    .scrub .sval input{width:54px;background:#02040a;border:1px solid #4fb8e8;
      color:#cfe6f5;font:inherit;border-radius:3px;text-align:center}`;
  const tag = document.createElement('style');
  tag.id = 'kit-scrub-css';
  tag.textContent = css;
  document.head.appendChild(tag);
}

/** Smart default formatter: integers and |v|≥100 show no decimals, else two. @param {number} v */
function defaultFormat(v) { return (Math.abs(v) >= 100 || Number.isInteger(v)) ? v.toFixed(0) : v.toFixed(2); }

/**
 * @typedef {Object} ScrubOpts
 * @property {string} [label] text shown before the value
 * @property {number} [value] initial value (default 0)
 * @property {number} [min] hard floor (default -Infinity)
 * @property {number} [max] hard ceiling (default +Infinity)
 * @property {number} [step] drag/arrow granularity (default 0.01)
 * @property {boolean} [log] multiplicative drag/step, for wide positive ranges (default false)
 * @property {number|null} [snap] arrow grid; arrows snap to multiples of this (default null → use step)
 * @property {(v:number)=>string} [format] value → display string (default smart)
 * @property {(v:number)=>void} [onInput] called whenever the value changes
 */

/**
 * Create a scrub control.
 * @param {ScrubOpts} [opts]
 * @returns {{ el: HTMLElement, get: () => number, set: (v:number, silent?:boolean) => void }}
 */
export function createScrub(opts = {}) {
  ensureStyles();
  const label = opts.label ?? '';
  const min = opts.min ?? -Infinity;
  const max = opts.max ?? Infinity;
  const step = opts.step ?? 0.01;
  const log = opts.log ?? false;
  const snap = opts.snap ?? null;
  const fmt = opts.format ?? defaultFormat;
  const onInput = opts.onInput;
  const initial = clamp(opts.value ?? 0);

  let value = initial;

  /** @param {number} v */
  function clamp(v) { return Math.max(min, Math.min(max, v)); }

  const el = document.createElement('span');
  el.className = 'scrub';
  const sval = document.createElement('span');
  sval.className = 'sval';
  const lab = document.createTextNode(label ? label + ' ' : '');
  let b = document.createElement('b');
  sval.appendChild(lab);
  sval.appendChild(b);

  const L = document.createElement('span'); L.className = 'ar l'; L.textContent = '◀';
  const R = document.createElement('span'); R.className = 'ar r'; R.textContent = '▶';
  el.appendChild(L);
  el.appendChild(sval);
  el.appendChild(R);

  /** @param {boolean} [silent] */
  function commit(silent) {
    value = clamp(value);
    b.textContent = fmt(value);
    if (!silent && onInput) onInput(value);
  }
  /** @param {number} v @param {boolean} [silent] */
  function set(v, silent) { value = clamp(v); commit(silent); }
  function get() { return value; }

  // ── arrows: step by the grid (snap ?? step), Shift = ×10 ──
  /** @param {number} dir @param {MouseEvent|PointerEvent} ev */
  function bump(dir, ev) {
    const grid = (snap ?? step) * (ev.shiftKey ? 10 : 1);
    let next;
    if (log) {
      next = value * Math.pow(1 + step, dir);
    } else if (snap != null) {
      const snapped = Math.round(value / grid) * grid;             // land on the grid first…
      next = (Math.abs(snapped - value) > 1e-9 && Math.sign(snapped - value) === dir) ? snapped : snapped + dir * grid;
    } else {
      next = value + dir * grid;
    }
    set(next);
  }
  [L, R].forEach((a, i) => {
    a.addEventListener('pointerdown', (e) => e.stopPropagation());
    a.addEventListener('pointerup', (e) => { e.stopPropagation(); e.preventDefault(); bump(i === 0 ? -1 : 1, e); });
  });

  // ── drag: horizontal = change, vertical = precision (pull down for finer) ──
  let dragging = false, sx = 0, sy = 0, sv = 0;
  el.addEventListener('pointerdown', (e) => {
    if (e.target instanceof HTMLInputElement) return;
    dragging = true; sx = e.clientX; sy = e.clientY; sv = value;
    el.classList.add('dragging'); el.setPointerCapture(e.pointerId); e.preventDefault();
  });
  el.addEventListener('pointermove', (e) => {
    if (!dragging) return;
    const dx = e.clientX - sx, dy = e.clientY - sy;
    let rm = Math.pow(10, -dy / 120);                 // vertical = precision: down → finer
    if (e.ctrlKey && e.shiftKey) rm *= 0.01; else if (e.ctrlKey) rm *= 0.1;
    if (log) set(Math.max(1e-9, sv * Math.pow(1.012, dx * rm)));
    else set(sv + dx * step * rm);
  });
  const end = () => { dragging = false; el.classList.remove('dragging'); };
  el.addEventListener('pointerup', end);
  el.addEventListener('pointercancel', end);
  el.addEventListener('touchstart', (e) => { if (!(e.target instanceof HTMLInputElement)) e.preventDefault(); }, { passive: false });
  el.addEventListener('touchmove', (e) => e.preventDefault(), { passive: false });

  // ── right-click: reset to initial ──
  el.addEventListener('contextmenu', (e) => { e.preventDefault(); set(initial); });

  // ── double-click: type an exact value ──
  el.addEventListener('dblclick', (e) => {
    if (e.target instanceof HTMLElement && e.target.classList.contains('ar')) return;
    const cur = value;
    sval.removeChild(b);
    const inp = document.createElement('input');
    inp.value = fmt(cur);
    sval.appendChild(inp);
    inp.focus(); inp.select();
    const done = () => {
      const v = parseFloat(inp.value);
      sval.removeChild(inp);
      b = document.createElement('b');
      sval.appendChild(b);
      set(Number.isNaN(v) ? cur : v);
    };
    inp.addEventListener('blur', done);
    inp.addEventListener('keydown', (ev) => { if (ev.key === 'Enter') inp.blur(); });
  });

  commit(true);                                       // paint initial value, no callback
  return { el, get, set };
}
