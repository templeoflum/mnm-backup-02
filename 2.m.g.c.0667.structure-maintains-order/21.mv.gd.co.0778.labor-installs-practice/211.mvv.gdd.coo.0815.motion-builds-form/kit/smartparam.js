// smartparam.js — THE smart parameter. One control, every affordance live (no morph-by-
// type): the value zone is a left-drag XY (x = value, y = saturation), a right-drag depth
// menu, click-to-type, double-click-reset, steppers; the name zone toggles DRIVE (run the
// value off the heart by ratio). Stable footprint — value reads from fill + colour, never
// from size. Built in rungs (see frame.smartparam.f0); this file is rung 1: the shell.
//
// Self-contained: injects its own CSS once. Plain JS + DOM. Reuses the scrub control
// for the depth-menu rows.

import { createScrub, depthMult, FEEL_DEFAULTS } from './scrub.js';

let stylesIn = false;
function ensureStyles() {
  if (stylesIn) return; stylesIn = true;
  const css = `
    /* palette + type identical to the heart scrub (scrub.js): #05080d bg, #1c2630 border,
       #7d97ab slab label, #62f0c0 value, #4a5a68 arrows. */
    /* no fixed width — content-sizes (so a "10000 Hz" output won't clip) with a floor; a sized
       node overrides to fill (.node.sized rule). resizable like any other part. */
    .sparam{position:relative;display:inline-flex;flex-direction:column;min-width:112px;
      font:11.5px ui-monospace,monospace;color:#9fc4dc;border:1px solid #1c2630;border-radius:6px;
      user-select:none;background:#05080d}
    .sparam.dragging{border-color:#4fb8e8}
    /* name = the heart scrub's slab (10px, muted), and the drive button */
    .sparam .sp-name{padding:3px 6px 1px;color:#7d97ab;text-align:center;cursor:pointer;font-size:10px;
      border-radius:5px 5px 0 0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;touch-action:none}
    .sparam .sp-name:hover{color:#9fc4dc}
    .sparam .sp-name.driven{color:#02040a;background:#62f0c0}        /* drive on */
    .sparam .sp-value{position:relative;display:flex;flex:1;align-items:stretch;border-top:1px solid #11161d;
      cursor:ew-resize;touch-action:none;overflow:hidden;border-radius:0 0 5px 5px}
    /* debug overlay — the value×grain pad, fixed over the value zone, with a live dot at (x,y) */
    .sparam .sp-debug, .sp-debug{position:fixed;z-index:9000;pointer-events:none;display:none;
      border:1px dashed #4fb8e8;background:rgba(79,184,232,0.06);border-radius:4px;box-sizing:border-box}
    .sp-debug-label{position:absolute;left:4px;top:2px;color:#7fd0f5;font:9px ui-monospace,monospace;white-space:nowrap}
    .sp-debug-dot{position:absolute;width:9px;height:9px;border-radius:50%;background:#4fb8e8;
      box-shadow:0 0 7px #4fb8e8;transform:translate(-50%,-50%)}
    /* menu (right-drag down on the name): sits within the param's own width — no overhang */
    .sparam .sp-menu{position:absolute;top:100%;left:0;right:0;box-sizing:border-box;z-index:30;margin-top:2px;
      background:#0a1016;border:1px solid #2a3a48;border-radius:6px;display:none;
      flex-direction:column;gap:6px;padding:8px;box-shadow:0 6px 18px rgba(0,0,0,0.5)}
    .sparam .sp-menu.open{display:flex}
    .sparam .sp-lvl{display:none;gap:6px}
    .sparam .sp-lvl.show{display:flex}
    .sparam .sp-menu .scrub{flex:1}
    /* the green fill lives only inside the number cell — between the two steppers */
    .sparam .sp-num{position:relative;flex:1;padding:7px 4px;text-align:center;overflow:hidden}
    .sparam .sp-fill{position:absolute;left:0;top:0;bottom:0;width:0;pointer-events:none;
      background:#62f0c0;opacity:0.18}
    .sparam .sp-num b{position:relative;z-index:1;color:#62f0c0;font-weight:500}
    .sparam .sp-step{width:20px;font-size:10px;display:flex;align-items:center;justify-content:center;
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
 * @property {number} [default] reset target for the value right-click (default = value)
 * @property {number} [min] LIMITER floor — confines the signal within [0,1] (default 0)
 * @property {number} [max] LIMITER ceiling — confines the signal within [0,1] (default 1)
 * @property {number} [step] drag/stepper granularity (default 0.01)
 * @property {number} [outMin] OUTPUT MAPPING floor — the real value at signal 0 (default 0)
 * @property {number} [outMax] OUTPUT MAPPING ceiling — the real value at signal 1 (default 1)
 * @property {boolean} [outLog] map [0,1]→[outMin,outMax] logarithmically (default false; needs out>0)
 * @property {string} [unit] unit suffix shown after the displayed value (default '')
 * @property {boolean} [showMapped] display the MAPPED output value instead of the raw [0,1] signal (default false — 0..1 is the standard)
 * @property {()=>void} [onSelect] called when a noDrive param's name is clicked (e.g. to show its properties)
 * @property {boolean} [driven] initial drive state (default false)
 * @property {boolean} [noDrive] disable the name's drive toggle + the Animation menu (e.g. heart controls)
 * @property {number} [ratio] frequency fraction vs the heart (default 1); rate = heart × ratio × multiplier
 * @property {number} [multiplier] frequency multiple vs the heart (default 1)
 * @property {number} [offset] phase offset 0..1 (default 0)
 * @property {Partial<import('./scrub.js').Feel>} [feel] feel overrides merged onto the defaults
 * @property {(v:number)=>string} [format] mapped-value → display string
 * @property {(v:number)=>void} [onInput] called with the [0,1] signal when it changes
 * @property {(v:number)=>void} [onOutput] called with the mapped real value when it changes
 * @property {(d:boolean)=>void} [onDrive] called when DRIVE toggles
 * @property {(c:{ratio:number,multiplier:number,offset:number,min:number,max:number,default:number})=>void} [onConfig] called when a menu value changes
 */

/**
 * Create a smart parameter. Rung 1: shell — name zone, value zone (fill + number +
 * steppers), stable footprint. Interaction (drag / type / drive / depth menu) lands in
 * later rungs.
 * @param {SmartParamOpts} [opts]
 */
export function createSmartParam(opts = {}) {
  ensureStyles();
  // LIMITER — confines the signal to [omin,omax] within [0,1] (set in the Properties dropdown).
  let omin = opts.min ?? 0, omax = opts.max ?? 1;
  // OUTPUT MAPPING — maps the [0,1] signal onto a real range, for the DISPLAY and the emitted real
  // value (onOutput). The signal itself stays [0,1]. outLog for decade ranges (Hz); unit = suffix.
  let outMin = opts.outMin ?? 0, outMax = opts.outMax ?? 1, outLog = !!opts.outLog, unit = opts.unit ?? '';
  let showMapped = !!opts.showMapped;   // display the mapped output (true) or the raw [0,1] signal (false, the standard)
  const step = opts.step ?? 0.01;
  const fmt = opts.format ?? defaultFormat;
  const onInput = opts.onInput, onOutput = opts.onOutput;
  /** map the [0,1] signal to the real output range. @param {number} s */
  function mapOut(s) {
    return (outLog && outMin > 0 && outMax > 0) ? outMin * Math.pow(outMax / outMin, s) : outMin + s * (outMax - outMin);
  }
  /** inverse of mapOut: a real value → the [0,1] signal (for typing in mapped units). @param {number} r */
  function unmap(r) {
    return (outLog && outMin > 0 && outMax > 0 && r > 0) ? Math.log(r / outMin) / Math.log(outMax / outMin) : (outMax === outMin ? 0 : (r - outMin) / (outMax - outMin));
  }
  let value = clamp(opts.value ?? 0.5);
  let sat = 72;   // precision-as-saturation readout (only shown when feel.satReadout is on)
  // the RESET target (right-click on the value): a [0,1] value, set in the Properties menu.
  let defaultValue = clamp(opts.default ?? opts.value ?? 0.5);
  // GRAIN: where the y-drag sits on the pad, a plain [0,1] position — bottom 0 = finest, top 1 =
  // coarsest (the default). NOT the value (x is the value; both ride [0,1] independently). The
  // precision the x-drag uses is derived from this; scope ch2 reads this number straight.
  let grainY = 1;

  /** the signal rides [0,1], confined to the LIMITER window [omin,omax]. @param {number} v */
  function clamp(v) { return Math.max(omin, Math.min(omax, Math.max(0, Math.min(1, v)))); }

  const el = document.createElement('div'); el.className = 'sparam';
  const name = document.createElement('div'); name.className = 'sp-name'; name.textContent = opts.label ?? 'param';
  const vz = document.createElement('div'); vz.className = 'sp-value';
  const fill = document.createElement('span'); fill.className = 'sp-fill';
  const L = document.createElement('span'); L.className = 'sp-step l'; L.textContent = '◀';
  const num = document.createElement('span'); num.className = 'sp-num';
  let b = document.createElement('b'); num.append(fill, b);   // fill sits behind the number, inside the cell
  const R = document.createElement('span'); R.className = 'sp-step r'; R.textContent = '▶';
  vz.append(L, num, R);
  el.append(name, vz);

  /** @param {boolean} [silent] */
  function paint(silent) {
    value = clamp(value);
    // DISPLAY: raw [0,1] signal (the standard) unless showMapped → the projected output value + unit
    b.textContent = showMapped ? (fmt(mapOut(value)) + (unit ? ' ' + unit : '')) : defaultFormat(value);
    fill.style.width = (value * 100) + '%';                  // bar still reads the [0,1] signal, between the steppers
    // OPTIONAL precision-as-colour: only the FILL BAR's saturation reads precision; the digit
    // stays static heart-green either way.
    fill.style.background = feel.satReadout ? `hsl(160, ${Math.round(sat)}%, 66%)` : '';
    if (feel.debug) paintDot();
    if (!silent) { if (onInput) onInput(value); if (onOutput) onOutput(mapOut(value)); }   // signal + mapped real value
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

  // ── value zone = a click-to-LOCK xy pad. CLICK to lock (pointer lock — cursor hidden and held
  //    in place); then MOVE without holding any button — x → VALUE (the [0,1] signal), y → GRAIN
  //    (a [0,1] pad position, bottom 0 = finest, top 1 = coarsest/default). CLICK again to unlock;
  //    the cursor returns where it started. Ctrl/Shift/Alt coarsen. SATURATION optionally reads
  //    the precision as colour (feel.satReadout). No-hold = steadier, finer movements. ──
  // feel: padW = px to cross the full [0,1] value at default grain (the "pad size"); vpx = px to
  //   cross the grain pad top→bottom; vBase = how much finer the bottom of the pad is; satBase/
  //   satSpan = the optional saturation readout curve. All live-tunable from the properties panel.
  const feel = { ...FEEL_DEFAULTS, padW: 420, satBase: 58, satSpan: 16, satReadout: false, debug: false, ...opts.feel };
  let locked = false, hadLock = false;
  function lock() { if (locked) return; locked = true; el.classList.add('dragging'); document.body.classList.add('kit-dragging'); vz.requestPointerLock?.(); }
  function unlock() { if (!locked) return; locked = false; el.classList.remove('dragging'); document.body.classList.remove('kit-dragging'); if (document.pointerLockElement === vz) document.exitPointerLock?.(); }
  /** apply one increment of locked movement. @param {MouseEvent} e */
  function adjust(e) {
    if (!locked) return;
    grainY = Math.max(0, Math.min(1, grainY - (e.movementY || 0) / feel.vpx));  // y: down → finer (toward 0), up → coarser (toward 1)
    const dx = e.movementX || 0;                                            // x = change (incremental)
    const vFactor = Math.pow(feel.vBase, -(1 - grainY));                    // grain → precision: top 1 = default, bottom 0 = 1/vBase (fine)
    const mod = depthMult(e, feel);                                         // Ctrl/Shift/Alt coarser
    value = clamp(value + (dx / feel.padW) * mod * vFactor);                // x → value; padW px = full range at default grain
    sat = Math.max(8, Math.min(100, feel.satBase + Math.log2(mod * vFactor) * feel.satSpan));  // precision → saturation
    paint(false);
  }
  // CLICK toggles lock. (must request pointer lock inside the gesture — no setTimeout.)
  vz.addEventListener('click', (e) => {
    if (e.target instanceof HTMLInputElement) return;
    if (e.target instanceof HTMLElement && e.target.classList.contains('sp-step')) return;  // steppers handle themselves
    locked ? unlock() : lock();
  });
  document.addEventListener('mousemove', adjust);   // while locked, movementX/Y flow regardless of cursor position
  // keep our state in sync if pointer lock is exited by Esc (only after it actually engaged).
  document.addEventListener('pointerlockchange', () => {
    if (document.pointerLockElement === vz) hadLock = true;
    else if (hadLock) { hadLock = false; if (locked) { locked = false; el.classList.remove('dragging'); document.body.classList.remove('kit-dragging'); } }
  });

  // ── value zone: right-click → reset to default (and unlock) · double-click → type an exact value ──
  vz.addEventListener('contextmenu', (e) => { e.preventDefault(); e.stopPropagation(); unlock(); set(defaultValue); });
  vz.addEventListener('dblclick', (e) => {
    if (e.target instanceof HTMLElement && e.target.classList.contains('sp-step')) return;  // steppers handle themselves
    unlock();                                          // the two clicks toggled lock; land unlocked, then type
    const cur = showMapped ? mapOut(value) : value;     // type in whatever the display shows (mapped or raw 0–1)
    num.removeChild(b);
    const inp = document.createElement('input');
    inp.value = showMapped ? fmt(cur) : defaultFormat(cur); num.appendChild(inp); inp.focus(); inp.select();
    const done = () => { const v = parseFloat(inp.value); num.removeChild(inp); b = document.createElement('b'); num.appendChild(b); set(Number.isNaN(v) ? value : (showMapped ? unmap(v) : v)); };
    inp.addEventListener('blur', done);
    inp.addEventListener('keydown', (ev) => { if (ev.key === 'Enter') inp.blur(); });
  });

  // ── name zone: click → toggle DRIVE (rung 4). ──
  let driven = !!opts.driven;
  /** @param {boolean} d */
  function setDriven(d) { driven = !!d; name.classList.toggle('driven', driven); if (opts.onDrive) opts.onDrive(driven); }
  if (driven) name.classList.add('driven');
  if (!opts.noDrive) name.addEventListener('click', () => setDriven(!driven));   // drivable: name toggles drive
  const onSelect = opts.onSelect;
  if (onSelect) el.addEventListener('pointerdown', () => onSelect());            // any click in any zone → select (show properties)

  // ── name right-drag → one of TWO menus, picked by which SIDE of the name the drag starts:
  //    RIGHT half → ANIMATION (ratio · multiplier · offset) · LEFT half → PROPERTIES (min · max ·
  //    default). Right-button drag DOWN reveals levels by distance (3 per menu); latches open at
  //    the revealed depth; a click outside closes. min/max are OUTPUT metadata (never the signal);
  //    default is the value the right-click reset returns to. ──
  let ratio = opts.ratio ?? 1, multiplier = opts.multiplier ?? 1, offset = opts.offset ?? 0;
  const fireConfig = () => { if (opts.onConfig) opts.onConfig({ ratio, multiplier, offset, min: omin, max: omax, default: defaultValue }); };

  /** build a menu + its stacked levels. @param {'left'|'right'} side @param {{el:HTMLElement}[]} scrubs */
  function buildMenu(side, scrubs) {
    const menu = document.createElement('div'); menu.className = 'sp-menu ' + side;
    const lvls = scrubs.map((s) => { const d = document.createElement('div'); d.className = 'sp-lvl'; d.appendChild(s.el); menu.appendChild(d); return d; });
    el.appendChild(menu);
    return { menu, lvls };
  }
  const ratioS = createScrub({ label: 'ratio', value: ratio, min: 0.0625, max: 16, step: 0.01, log: true, stacked: true, format: (x) => x.toFixed(2) + '×', onInput: (v) => { ratio = v; fireConfig(); } });
  const multS = createScrub({ label: 'mult', value: multiplier, min: 0.0625, max: 16, step: 0.01, log: true, stacked: true, format: (x) => x.toFixed(2) + '×', onInput: (v) => { multiplier = v; fireConfig(); } });
  const offsetS = createScrub({ label: 'offset', value: offset, min: 0, max: 1, step: 0.001, stacked: true, format: (x) => x.toFixed(3), onInput: (v) => { offset = v; fireConfig(); } });
  // LIMITER min/max — a window within [0,1] (re-clamps the value when tightened)
  const minS = createScrub({ label: 'min', value: omin, min: 0, max: 1, step: 0.001, stacked: true, format: (x) => x.toFixed(3), onInput: (v) => { omin = v; set(value); fireConfig(); } });
  const maxS = createScrub({ label: 'max', value: omax, min: 0, max: 1, step: 0.001, stacked: true, format: (x) => x.toFixed(3), onInput: (v) => { omax = v; set(value); fireConfig(); } });
  const defS = createScrub({ label: 'default', value: defaultValue, min: 0, max: 1, step: 0.001, stacked: true, format: (x) => x.toFixed(3), onInput: (v) => { defaultValue = clamp(v); fireConfig(); } });
  const anim = buildMenu('right', [ratioS, multS, offsetS]);    // animation — right side
  const props = buildMenu('left', [minS, maxS, defS]);          // properties — left side

  /** @type {{menu:HTMLElement,lvls:HTMLElement[]}|null} */ let openMenu = null;
  /** @param {{menu:HTMLElement,lvls:HTMLElement[]}|null} m @param {number} n */
  function reveal(m, n) {
    for (const x of [anim, props]) { const on = x === m && n > 0; x.menu.classList.toggle('open', on); x.lvls.forEach((d, i) => d.classList.toggle('show', on && i < n)); }
    openMenu = n > 0 ? m : null;
  }
  document.addEventListener('pointerdown', (e) => { if (openMenu && !el.contains(/** @type {Node} */(e.target))) reveal(null, 0); });

  // right-button drag down on the name → reveal by depth; the side at press picks the menu.
  // Suppress the browser context menu for the whole gesture (the flag outlives pointerup).
  let depth = false, dsy = 0, suppressCtx = false, dragMenu = anim;
  name.addEventListener('pointerdown', (e) => {
    if (e.button !== 2) return;
    const r = name.getBoundingClientRect();
    dragMenu = (!opts.noDrive && (e.clientX - r.left) > r.width / 2) ? anim : props;   // right half → animation · left half → properties (noDrive → always properties)
    depth = true; suppressCtx = true; dsy = e.clientY; e.preventDefault();
    name.setPointerCapture(e.pointerId);
  });
  name.addEventListener('pointermove', (e) => {
    if (!depth) return;
    const dy = e.clientY - dsy;
    reveal(dragMenu, dy > 84 ? 3 : dy > 48 ? 2 : dy > 12 ? 1 : 0);   // depth → levels (3 per menu)
  });
  const depthUp = () => { depth = false; };              // latch at the revealed depth
  name.addEventListener('pointerup', depthUp);
  name.addEventListener('pointercancel', depthUp);
  el.addEventListener('contextmenu', (e) => e.preventDefault());
  document.addEventListener('contextmenu', (e) => { if (suppressCtx) { e.preventDefault(); suppressCtx = false; } });

  // ── debug overlay (toggle in properties): the value×grain PAD with a LIVE DOT at (x = value,
  //    y = grain). width = padW (px to cross [0,1] value), height = vpx (the grain travel). The
  //    dot moves as you lock-drag, so the y (grain) axis is visible alongside the scope. ──
  const dbg = document.createElement('div'); dbg.className = 'sp-debug';
  const dbgLabel = document.createElement('div'); dbgLabel.className = 'sp-debug-label';
  const dbgDot = document.createElement('div'); dbgDot.className = 'sp-debug-dot';
  dbg.append(dbgLabel, dbgDot); document.body.appendChild(dbg);
  const DBG_SIDE = 160;                                   // a square [0,1]² pad (like pad.js), dot placed by fraction
  function paintDot() {                                   // dot position: x = value, y = grain (top 1, bottom 0)
    dbgDot.style.left = (value * DBG_SIDE) + 'px';
    dbgDot.style.top = ((1 - grainY) * DBG_SIDE) + 'px';
  }
  function updateDebug() {
    if (!feel.debug) { dbg.style.display = 'none'; return; }
    const r = vz.getBoundingClientRect();
    const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
    dbg.style.display = 'block';
    dbg.style.width = DBG_SIDE + 'px'; dbg.style.height = DBG_SIDE + 'px';
    dbg.style.left = (cx - DBG_SIDE / 2) + 'px'; dbg.style.top = cy + 'px';   // top edge at the value-zone midpoint, hangs down
    dbgLabel.textContent = 'x value · y grain';
    paintDot();
  }
  updateDebug();

  paint(true);
  return {
    el, feel, get, set, setDriven, updateDebug,
    repaint: () => paint(true),                         // re-apply styling (e.g. after toggling sat readout)
    /** live-set the output mapping (no rebuild → keeps the value). @param {{outMin?:number,outMax?:number,outLog?:boolean,unit?:string}} c */
    setOutput: (c) => { if (c.outMin != null) outMin = c.outMin; if (c.outMax != null) outMax = c.outMax; if (c.outLog != null) outLog = !!c.outLog; if (c.unit != null) unit = c.unit; paint(false); },
    /** switch the display between raw [0,1] and the mapped output. @param {boolean} m */
    setDisplay: (m) => { showMapped = !!m; paint(true); },
    getMapped: () => mapOut(value),                     // the current mapped real value (signal → output range)
    outY: () => grainY * 0.5,                            // GRAIN readout for scope ch2 — tops at 0.5 (reads as a distinct signal)
    get driven() { return driven; },
  };
}
