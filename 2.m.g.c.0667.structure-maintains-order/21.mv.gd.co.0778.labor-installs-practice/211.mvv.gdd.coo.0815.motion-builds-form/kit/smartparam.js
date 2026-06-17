// smartparam.js — THE smart parameter. One control, every affordance live (no morph-by-
// type): the value zone is a left-drag XY (x = value, y = saturation), a right-drag depth
// menu, click-to-type, double-click-reset, steppers; the name zone toggles DRIVE (run the
// value off the heart by ratio). Stable footprint — value reads from fill + colour, never
// from size. Built in rungs (see frame.smartparam.f0); this file is rung 1: the shell.
//
// Self-contained: injects its own CSS once. Plain JS + DOM, no deps.

let stylesIn = false;
function ensureStyles() {
  if (stylesIn) return; stylesIn = true;
  const css = `
    .sparam{display:inline-flex;flex-direction:column;width:128px;
      font:11.5px ui-monospace,monospace;border:1px solid #1c2630;border-radius:6px;
      overflow:hidden;user-select:none;background:#05080d}
    .sparam.dragging{border-color:#4fb8e8}
    .sparam .sp-name{padding:5px 9px;color:#6f8aa0;text-align:center;cursor:pointer;
      letter-spacing:0.04em;border-bottom:1px solid #1c2630;background:#0a1016;
      white-space:nowrap;overflow:hidden;text-overflow:ellipsis;touch-action:none}
    .sparam .sp-name:hover{color:#9fc4dc}
    .sparam .sp-name.driven{color:#02040a;background:#62f0c0}        /* drive on */
    .sparam .sp-value{position:relative;display:flex;align-items:stretch;
      cursor:ew-resize;touch-action:none}
    .sparam .sp-fill{position:absolute;left:0;top:0;bottom:0;width:0;pointer-events:none}
    .sparam .sp-num{flex:1;padding:7px 4px;text-align:center;z-index:1}
    .sparam .sp-num b{font-weight:500}
    .sparam .sp-step{width:18px;display:flex;align-items:center;justify-content:center;
      color:#4a5a68;cursor:pointer;z-index:1;background:rgba(255,255,255,0.025)}
    .sparam .sp-step:hover{color:#9fc4dc;background:rgba(98,240,192,0.14)}
    .sparam .sp-step:active{background:rgba(98,240,192,0.28)}
    .sparam .sp-step.l{border-right:1px solid #1c2630}
    .sparam .sp-step.r{border-left:1px solid #1c2630}
    .sparam .sp-num input{width:60px;background:#02040a;border:1px solid #4fb8e8;
      color:#cfe6f5;font:inherit;border-radius:3px;text-align:center}`;
  const t = document.createElement('style'); t.id = 'kit-smartparam-css'; t.textContent = css;
  document.head.appendChild(t);
}

/** @param {number} v */
function defaultFormat(v) { return (Math.abs(v) >= 100 || Number.isInteger(v)) ? v.toFixed(0) : v.toFixed(2); }

/**
 * @typedef {Object} SmartParamOpts
 * @property {string} [label] the name shown in the name zone
 * @property {number} [value] initial value (default 0.5)
 * @property {number} [min] floor (default 0)
 * @property {number} [max] ceiling (default 1)
 * @property {number} [step] drag/stepper granularity (default 0.01)
 * @property {number} [hue] colour hue (default 160 — kit green)
 * @property {number} [sat] colour saturation %, 0..100 (default 72)
 * @property {boolean} [driven] initial drive state (default false)
 * @property {(v:number)=>string} [format] value → display string
 * @property {(v:number)=>void} [onInput] called when the value changes
 * @property {(d:boolean)=>void} [onDrive] called when DRIVE toggles
 */

/**
 * Create a smart parameter. Rung 1: shell — name zone, value zone (fill + number +
 * steppers), stable footprint. Interaction (drag / type / drive / depth menu) lands in
 * later rungs.
 * @param {SmartParamOpts} [opts]
 * @returns {{ el: HTMLElement, get: () => number, set: (v:number, silent?:boolean) => void, sat: number }}
 */
export function createSmartParam(opts = {}) {
  ensureStyles();
  const min = opts.min ?? 0, max = opts.max ?? 1;
  const step = opts.step ?? 0.01;
  const hue = opts.hue ?? 160;
  const fmt = opts.format ?? defaultFormat;
  const onInput = opts.onInput;
  const initial = clamp(opts.value ?? 0.5);
  let value = initial;
  let sat = opts.sat ?? 72;

  /** @param {number} v */
  function clamp(v) { return Math.max(min, Math.min(max, v)); }
  const norm = () => (max - min) ? (value - min) / (max - min) : 0;

  const el = document.createElement('div'); el.className = 'sparam';
  const name = document.createElement('div'); name.className = 'sp-name'; name.textContent = opts.label ?? 'param';
  const vz = document.createElement('div'); vz.className = 'sp-value';
  const fill = document.createElement('span'); fill.className = 'sp-fill';
  const L = document.createElement('span'); L.className = 'sp-step l'; L.textContent = '◀';
  const num = document.createElement('span'); num.className = 'sp-num';
  let b = document.createElement('b'); num.appendChild(b);
  const R = document.createElement('span'); R.className = 'sp-step r'; R.textContent = '▶';
  vz.append(fill, L, num, R);
  el.append(name, vz);

  function paint(/** @type {boolean} */ silent) {
    value = clamp(value);
    b.textContent = fmt(value);
    fill.style.width = (Math.max(0, Math.min(1, norm())) * 100) + '%';
    const col = `hsl(${hue}, ${Math.round(sat)}%, 60%)`;
    fill.style.background = col; fill.style.opacity = '0.20';
    num.style.color = `hsl(${hue}, ${Math.round(sat)}%, 78%)`;
    if (!silent && onInput) onInput(value);
  }
  /** @param {number} v @param {boolean} [silent] */
  function set(v, silent) { value = clamp(v); paint(silent); }
  function get() { return value; }

  // ── steppers (rung 1): step by the grid; Shift = ×10 ──
  /** @param {number} dir @param {MouseEvent} ev */
  function bump(dir, ev) { set(value + dir * step * (ev.shiftKey ? 10 : 1)); }
  [L, R].forEach((a, i) => {
    a.addEventListener('pointerdown', (e) => e.stopPropagation());
    a.addEventListener('pointerup', (e) => { e.stopPropagation(); e.preventDefault(); bump(i === 0 ? -1 : 1, e); });
  });

  // ── value zone = the XY drag (rung 2–3). LEFT-drag → value (x) + saturation (y).
  //    Pointer Lock hides the cursor and frees the motion from the screen edge, so a drag
  //    sweeps without limit. The NAME zone owns click→DRIVE (rung 4) and right-drag→depth
  //    menu (rung 5); right-click is suppressed on the name to reserve it. ──
  const SENS = 0.25, SAT_SENS = 0.3, THRESH = 4;
  let dragging = false, accX = 0, accY = 0, sv0 = 0, ss0 = 0, moved = false;
  vz.addEventListener('pointerdown', (e) => {
    if (e.button !== 0) return;                       // left only
    dragging = true; accX = 0; accY = 0; sv0 = value; ss0 = sat; moved = false;
    el.classList.add('dragging'); e.preventDefault();
    const req = vz.requestPointerLock && vz.requestPointerLock();
    if (req && typeof req.catch === 'function') req.catch(() => {});
  });
  const onMove = (/** @type {PointerEvent} */ e) => {
    if (!dragging) return;
    accX += e.movementX || 0; accY += e.movementY || 0;
    if (!moved && Math.hypot(accX, accY) > THRESH) moved = true;
    value = clamp(sv0 + accX * step * SENS);          // x → value
    sat = Math.max(0, Math.min(100, ss0 - accY * SAT_SENS));   // y → saturation (up = more)
    paint(false);
  };
  const endDrag = () => {
    if (!dragging) return;
    dragging = false; el.classList.remove('dragging');
    if (document.pointerLockElement === vz) document.exitPointerLock();
    // (no-move left click → type lands later; name click → DRIVE in rung 4)
  };
  document.addEventListener('pointermove', onMove);
  document.addEventListener('pointerup', endDrag);
  document.addEventListener('pointerlockchange', () => {
    const locked = document.pointerLockElement === vz;
    if (locked && !dragging) document.exitPointerLock();         // lock landed after release
    else if (!locked && dragging) endDrag();                     // Esc / lost lock
  });
  name.addEventListener('contextmenu', (e) => e.preventDefault());   // reserve right-click on the name for the depth menu (rung 5)

  // ── name zone: click → toggle DRIVE (rung 4). right-drag → depth menu is rung 5. ──
  let driven = !!opts.driven;
  function setDriven(d) { driven = !!d; name.classList.toggle('driven', driven); if (opts.onDrive) opts.onDrive(driven); }
  if (driven) name.classList.add('driven');
  name.addEventListener('click', () => setDriven(!driven));

  paint(true);
  return {
    el, get, set, setDriven,
    get driven() { return driven; },
    get sat() { return sat; }, set sat(s) { sat = Math.max(0, Math.min(100, s)); paint(true); },
  };
}
