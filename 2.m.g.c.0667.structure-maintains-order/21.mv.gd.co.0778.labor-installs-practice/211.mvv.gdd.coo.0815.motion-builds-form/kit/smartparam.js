// smartparam.js — THE smart parameter. One control, every affordance live (no morph-by-
// type): the value zone is a left-drag XY (x = value, y = saturation), a right-drag depth
// menu, click-to-type, double-click-reset, steppers; the name zone toggles DRIVE (run the
// value off the heart by ratio). Stable footprint — value reads from fill + colour, never
// from size. Built in rungs (see frame.smartparam.f0); this file is rung 1: the shell.
//
// Self-contained: injects its own CSS once. Plain JS + DOM. Reuses the scrub control
// for the depth-menu rows.

import { createScrub } from './scrub.js';

let stylesIn = false;
function ensureStyles() {
  if (stylesIn) return; stylesIn = true;
  const css = `
    .sparam{position:relative;display:inline-flex;flex-direction:column;width:128px;
      font:11.5px ui-monospace,monospace;border:1px solid #1c2630;border-radius:6px;
      user-select:none;background:#05080d}
    .sparam.dragging{border-color:#4fb8e8}
    .sparam .sp-name{padding:5px 9px;color:#6f8aa0;text-align:center;cursor:pointer;
      letter-spacing:0.04em;border-bottom:1px solid #1c2630;background:#0a1016;border-radius:5px 5px 0 0;
      white-space:nowrap;overflow:hidden;text-overflow:ellipsis;touch-action:none}
    .sparam .sp-name:hover{color:#9fc4dc}
    .sparam .sp-name.driven{color:#02040a;background:#62f0c0}        /* drive on */
    .sparam .sp-value{position:relative;display:flex;align-items:stretch;
      cursor:ew-resize;touch-action:none;overflow:hidden;border-radius:0 0 5px 5px}
    /* depth menu (right-drag down on the name): levels revealed by drag distance */
    .sparam .sp-menu{position:absolute;top:100%;left:-1px;right:-1px;z-index:30;margin-top:2px;
      background:#0a1016;border:1px solid #2a3a48;border-radius:6px;display:none;
      flex-direction:column;gap:6px;padding:8px;box-shadow:0 6px 18px rgba(0,0,0,0.5)}
    .sparam .sp-menu.open{display:flex}
    .sparam .sp-lvl{display:none;gap:6px}
    .sparam .sp-lvl.show{display:flex}
    .sparam .sp-menu .scrub{flex:1}
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
 * @property {number} [ratio] period multiplier vs the heart (default 1)
 * @property {number} [offset] phase offset 0..1 (default 0)
 * @property {(v:number)=>string} [format] value → display string
 * @property {(v:number)=>void} [onInput] called when the value changes
 * @property {(d:boolean)=>void} [onDrive] called when DRIVE toggles
 * @property {(c:{ratio:number,offset:number,min:number,max:number})=>void} [onConfig] called when a depth-menu value changes
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
  // OUTPUT mapping METADATA — never the signal. The param value is ALWAYS [0,1]; a consumer
  // maps it to [omin,omax] downstream (and can remap after). Exposed because output ranges
  // are easy to guess wrong. They do not touch the value, the clamp, or the anim.
  let omin = opts.min ?? 0, omax = opts.max ?? 1;
  const step = opts.step ?? 0.01;
  const hue = opts.hue ?? 160;
  const fmt = opts.format ?? defaultFormat;
  const onInput = opts.onInput;
  let value = clamp(opts.value ?? 0.5);
  let sat = opts.sat ?? 72;

  /** the signal is always [0,1] @param {number} v */
  function clamp(v) { return Math.max(0, Math.min(1, v)); }

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
    fill.style.width = (value * 100) + '%';                  // value is the [0,1] signal
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

  // ── value zone = the XY drag. LEFT-drag → value (x) + saturation (y). The cursor is
  //    HIDDEN for the drag (cursor:none) — no Pointer Lock, so no "press Esc" banner; the
  //    pointer is captured so moves keep landing here. Movement stalls at the screen edge
  //    (the accepted trade for a clean surface). NAME owns click→DRIVE + right-drag→menu. ──
  const SENS = 0.25, SAT_SENS = 0.3, THRESH = 4;
  let dragging = false, accX = 0, accY = 0, sv0 = 0, ss0 = 0, moved = false;
  vz.addEventListener('pointerdown', (e) => {
    if (e.button !== 0) return;                       // left only
    dragging = true; accX = 0; accY = 0; sv0 = value; ss0 = sat; moved = false;
    el.classList.add('dragging'); vz.setPointerCapture(e.pointerId);
    document.body.style.cursor = 'none'; e.preventDefault();
  });
  vz.addEventListener('pointermove', (e) => {
    if (!dragging) return;
    accX += e.movementX || 0; accY += e.movementY || 0;
    if (!moved && Math.hypot(accX, accY) > THRESH) moved = true;
    value = clamp(sv0 + accX * step * SENS);          // x → value (always [0,1])
    sat = Math.max(0, Math.min(100, ss0 - accY * SAT_SENS));   // y → saturation (up = more)
    paint(false);
  });
  const endDrag = () => { if (!dragging) return; dragging = false; el.classList.remove('dragging'); document.body.style.cursor = ''; };
  vz.addEventListener('pointerup', endDrag);
  vz.addEventListener('pointercancel', endDrag);

  // ── name zone: click → toggle DRIVE (rung 4). ──
  let driven = !!opts.driven;
  function setDriven(d) { driven = !!d; name.classList.toggle('driven', driven); if (opts.onDrive) opts.onDrive(driven); }
  if (driven) name.classList.add('driven');
  name.addEventListener('click', () => setDriven(!driven));

  // ── name right-drag → DEPTH MENU. Right-button drag DOWN reveals levels by distance:
  //    1 ratio · 2 offset · 3 min · 4 max — each a stacked row. min/max are OUTPUT metadata
  //    (never the signal). Latches open at the revealed depth; a click outside closes it. ──
  let ratio = opts.ratio ?? 1, offset = opts.offset ?? 0;
  const fireConfig = () => { if (opts.onConfig) opts.onConfig({ ratio, offset, min: omin, max: omax }); };
  const menu = document.createElement('div'); menu.className = 'sp-menu';
  /** @param {HTMLElement} scrub */
  const mkLvl = (scrub) => { const d = document.createElement('div'); d.className = 'sp-lvl'; d.appendChild(scrub); menu.appendChild(d); return d; };
  const ratioS = createScrub({ label: 'ratio', value: ratio, min: 0.0625, max: 16, step: 0.01, log: true, format: (x) => x.toFixed(2) + '×', onInput: (v) => { ratio = v; fireConfig(); } });
  const offsetS = createScrub({ label: 'offset', value: offset, min: 0, max: 1, step: 0.001, format: (x) => x.toFixed(3), onInput: (v) => { offset = v; fireConfig(); } });
  const minS = createScrub({ label: 'min', value: omin, min: -1e6, max: 1e6, step: 0.01, onInput: (v) => { omin = v; fireConfig(); } });
  const maxS = createScrub({ label: 'max', value: omax, min: -1e6, max: 1e6, step: 0.01, onInput: (v) => { omax = v; fireConfig(); } });
  const lvls = [mkLvl(ratioS.el), mkLvl(offsetS.el), mkLvl(minS.el), mkLvl(maxS.el)];
  el.appendChild(menu);

  let menuOpen = false;
  /** @param {number} n show levels 1..n (0 = closed) */
  function reveal(n) { menu.classList.toggle('open', n > 0); lvls.forEach((d, i) => d.classList.toggle('show', i < n)); menuOpen = n > 0; }
  document.addEventListener('pointerdown', (e) => { if (menuOpen && !el.contains(/** @type {Node} */(e.target))) reveal(0); });

  // right-button drag down on the name → reveal by depth. Suppress the browser context menu
  // for the whole gesture (the flag outlives pointerup, when contextmenu actually fires).
  let depth = false, dsy = 0, suppressCtx = false;
  name.addEventListener('pointerdown', (e) => {
    if (e.button !== 2) return;
    depth = true; suppressCtx = true; dsy = e.clientY; e.preventDefault();
    name.setPointerCapture(e.pointerId);
  });
  name.addEventListener('pointermove', (e) => {
    if (!depth) return;
    const dy = e.clientY - dsy;
    reveal(dy > 104 ? 4 : dy > 72 ? 3 : dy > 40 ? 2 : dy > 12 ? 1 : 0);   // depth → levels
  });
  const depthUp = () => { depth = false; };              // latch at the revealed depth
  name.addEventListener('pointerup', depthUp);
  name.addEventListener('pointercancel', depthUp);
  el.addEventListener('contextmenu', (e) => e.preventDefault());
  document.addEventListener('contextmenu', (e) => { if (suppressCtx) { e.preventDefault(); suppressCtx = false; } });

  paint(true);
  return {
    el, get, set, setDriven,
    get driven() { return driven; },
    get sat() { return sat; }, set sat(s) { sat = Math.max(0, Math.min(100, s)); paint(true); },
  };
}
