// scrub.js — the scrub control: a compact numeric chip you drag, step, or type.
//
// The kit's workhorse, distilled from TS_formulas. One job: edit a number. It
// knows nothing about parameters or phase — it holds a value, and calls onInput
// when the value changes. Bind it to anything (a parameter's ratio, a base value,
// a raw uniform) from the outside.
//
// Interaction:
//   · drag horizontally — change by  dx · step  (× a precision factor). The cursor hides
//     for the drag (cursor:none, pointer captured) — no Pointer Lock, no Esc banner.
//   · Ctrl / Shift / Alt while dragging — coarser, for big jumps (8 tiers)
//   · ◀ ▶ arrows — step by the grid (snap ?? step); modifiers coarsen as above
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
    .scrub .sval{padding:6px 6px;flex:1;min-width:0;text-align:center;cursor:ew-resize;overflow:hidden;white-space:nowrap}
    .scrub b{color:#62f0c0;font-weight:500;margin-left:6px}
    .scrub.dragging{border-color:#4fb8e8}
    /* while any control is dragging, hide the cursor everywhere — overrides each element's
       own cursor (which is why cursor:none on body alone didn't take). */
    body.kit-dragging, body.kit-dragging *{cursor:none !important}
    /* stacked: label on top, ◀ value ▶ below — for narrow containers (e.g. the heart grid) */
    .scrub.stacked{flex-direction:column}
    .scrub.stacked .slab{padding:3px 6px 1px;text-align:center;color:#7d97ab;font-size:10px;
      white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
    .scrub.stacked .srow{display:flex;align-items:stretch;border-top:1px solid #11161d}
    .scrub.stacked .srow .sval{margin-left:0}
    .scrub.stacked b{margin-left:0}
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
 * The "feel" of a scrub — the constants that shape how it responds. Pulled out so they
 * can be tuned live (a control's controls). Pass a shared object to many scrubs and mutate
 * it to retune them all at once. Read by reference at event time.
 *
 * The model: PRECISE BY DEFAULT. A bare drag is fine and slow (low `sensitivity`). Holding
 * Ctrl / Shift / Alt (and combos) makes it COARSER for big jumps — the same tier system the
 * arrows use. So drag and arrows share one notion of coarseness.
 * @typedef {Object} Feel
 * @property {number} sensitivity how fine the default (no-modifier) drag is: Δvalue = dx · step · sensitivity · coarseness
 * @property {number} depthBase   coarseness per tier: each Ctrl/Shift/Alt step — and each `vpx` of vertical drag — multiplies by this
 * @property {number} logBase     log drag: value ·= logBase^(dx · sensitivity · coarseness)
 * @property {number} vpx         vertical pixels per coarseness tier: drag DOWN finer, UP coarser, ×depthBase every `vpx`
 */

/** @type {Feel} */
export const FEEL_DEFAULTS = { sensitivity: 0.25, depthBase: 10, logBase: 1.012, vpx: 70 };

/** Coarseness from modifiers: 8 tiers from Ctrl/Shift/Alt combos, each × depthBase.
 * none = ×1 (the precise default); modifiers escalate for big jumps. Shared by drag and arrows.
 * @param {PointerEvent|MouseEvent} ev @param {Feel} feel */
export function depthMult(ev, feel) {
  const c = ev.ctrlKey || ev.metaKey, s = ev.shiftKey, a = ev.altKey;
  let tier = 0;
  if (c && s && a) tier = 7; else if (s && a) tier = 6; else if (c && a) tier = 5;
  else if (c && s) tier = 4; else if (a) tier = 3; else if (s) tier = 2; else if (c) tier = 1;
  return Math.pow(feel.depthBase, tier);
}

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
 * @property {Feel} [feel] shared feel object (default a private copy of FEEL_DEFAULTS); mutate to retune live
 * @property {boolean} [stacked] label on its own line above ◀ value ▶ — for narrow containers (default false)
 */

/**
 * Create a scrub control.
 * @param {ScrubOpts} [opts]
 * @returns {{ el: HTMLElement, get: () => number, set: (v:number, silent?:boolean) => void, feel: Feel }}
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
  const feel = opts.feel ?? { ...FEEL_DEFAULTS };       // shared+mutable for live tuning
  const initial = clamp(opts.value ?? 0);

  let value = initial;

  /** @param {number} v */
  function clamp(v) { return Math.max(min, Math.min(max, v)); }

  const stacked = opts.stacked ?? false;
  const el = document.createElement('span');
  el.className = 'scrub' + (stacked ? ' stacked' : '');
  const sval = document.createElement('span');
  sval.className = 'sval';
  let b = document.createElement('b');

  const L = document.createElement('span'); L.className = 'ar l'; L.textContent = '◀';
  const R = document.createElement('span'); R.className = 'ar r'; R.textContent = '▶';
  if (stacked) {                                          // label above, ◀ value ▶ below
    const slab = document.createElement('span'); slab.className = 'slab'; slab.textContent = label;
    const srow = document.createElement('span'); srow.className = 'srow';
    sval.appendChild(b);
    srow.append(L, sval, R);
    el.append(slab, srow);
  } else {                                                // label inline, before the value
    sval.appendChild(document.createTextNode(label ? label + ' ' : ''));
    sval.appendChild(b);
    el.append(L, sval, R);
  }

  /** @param {boolean} [silent] */
  function commit(silent) {
    value = clamp(value);
    b.textContent = fmt(value);
    if (!silent && onInput) onInput(value);
  }
  /** @param {number} v @param {boolean} [silent] */
  function set(v, silent) { value = clamp(v); commit(silent); }
  function get() { return value; }

  // ── arrows: step by the grid (snap ?? step) × modifier depth (Ctrl/Shift/Alt tiers) ──
  /** @param {number} dir @param {MouseEvent|PointerEvent} ev */
  function bump(dir, ev) {
    const grid = (snap ?? step) * depthMult(ev, feel);
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

  // ── drag: horizontal = change. The cursor is HIDDEN for the drag (cursor:none) and the
  //    pointer captured so moves keep landing here. We read RELATIVE movement (movementX),
  //    not an absolute coordinate. No Pointer Lock — so no "press Esc" banner; the trade is
  //    the drag stalls at the screen edge (movementX → 0 there). ──
  let dragging = false, accY = 0;
  el.addEventListener('pointerdown', (e) => {
    if (e.target instanceof HTMLInputElement) return;
    if (e.target instanceof HTMLElement && e.target.classList.contains('ar')) return;  // arrows handle themselves
    dragging = true; accY = 0;
    el.classList.add('dragging'); el.setPointerCapture(e.pointerId);
    document.body.classList.add('kit-dragging'); e.preventDefault();   // hide the cursor for the drag
  });
  el.addEventListener('pointermove', (e) => {
    if (!dragging) return;
    accY += e.movementY || 0;
    const dx = e.movementX || 0;                                    // x = change (incremental)
    const vFactor = Math.pow(feel.depthBase, -Math.max(0, accY) / feel.vpx);  // DOWN finer; up rests at default
    const co = feel.sensitivity * depthMult(e, feel) * vFactor;     // Ctrl/Shift/Alt make it coarser
    if (log) set(Math.max(1e-9, value * Math.pow(feel.logBase, dx * co)));
    else set(value + dx * step * co);
  });
  const end = () => { if (!dragging) return; dragging = false; el.classList.remove('dragging'); document.body.classList.remove('kit-dragging'); };
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
  return { el, get, set, feel };
}
