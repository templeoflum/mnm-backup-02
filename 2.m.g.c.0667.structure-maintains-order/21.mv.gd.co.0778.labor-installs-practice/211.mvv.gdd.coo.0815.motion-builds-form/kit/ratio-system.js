// ratio-system.js — THE RATIO SYSTEM as a standalone part: dial the param↔heart rate
// relationship in ISOLATION before folding the controls into the smart param.
//   φ = fract(H · m · r + o) against the heart's real H. See frame.ratio-system.f1.
//     ratio  r ∈ [0, 1)  — free scrub + library bookmarks
//     mult   |m| ≥ 1     — magnitude scrub + a reverse toggle (sign = direction)
//     offset o ∈ [0, 1)  — head-start
//   Readouts (live, against the heart): φ · m·r (cycles/turn) · sync (turns to re-home, or free).
//
// Self-contained: own CSS + own rAF reading heartTurns(). Stops when its element leaves the DOM.
// Plain JS + DOM. The math lives in ratio.js (rig-checked); this is the control surface only.

import { heartReadings } from './unit-circle.js';
import { createScrub } from './scrub.js';
import { createSelector } from './selector.js';
import { createReadout } from './readout.js';
import { createToggle } from './toggle.js';
import { createDepthMenu, wireDepthDrag } from './menu.js';
import { paramPhase, cyclesPerTurn, syncTurns } from './ratio.js';

// sub-1 ratio bookmarks — the catalog's intervals as their <1 decimals (the m=1 values). A
// starter set; the full Layer-2 catalog selector is a later step (frame build-sequence #2).
const RATIO_BOOKMARKS = [
  { name: '1:1', v: 1 },                                  // unison — the inert/identity ratio
  { name: '1:2', v: 1 / 2 }, { name: '2:3', v: 2 / 3 }, { name: '3:4', v: 3 / 4 },
  { name: '3:5', v: 3 / 5 }, { name: '4:5', v: 4 / 5 }, { name: '5:6', v: 5 / 6 },
  { name: '1/φ', v: 0.6180339887498949 },
];

// INPUT — which heart output node feeds the ratio system (replaces the old hardcoded turns).
// A starter spread, one of each kind: two accumulators (turns/distance climb forever), a bounded
// phase ([0,1) sawtooth), two bipolar ([-1,1] back-and-forth). `key` indexes heartReadings().
const INPUT_NODES = [
  { name: 'turns', key: 'turns' }, { name: 'distance', key: 'distance' },
  { name: 'phase', key: 'phase' }, { name: 'sin', key: 'sin' }, { name: 'cos', key: 'cos' },
];

let stylesIn = false;
function ensureStyles() {
  if (stylesIn) return; stylesIn = true;
  const css = `
    .kratio{display:inline-flex;flex-direction:column;gap:8px;padding:9px;min-width:200px;
      font:11.5px ui-monospace,monospace;color:#9fc4dc;background:#05080d;
      border:1px solid #1c2630;border-radius:6px}
    .kratio .krrow{display:flex;align-items:center;gap:6px;flex-wrap:wrap}
    .kratio .krrow > .scrub{flex:1;min-width:88px}
    .kratio .krlab{color:#7d97ab;font-size:10px;flex:0 0 auto}
    .kratio .krout{display:flex;flex-direction:column;gap:3px;border-top:1px solid #11161d;padding-top:7px}`;
  const t = document.createElement('style'); t.id = 'kit-ratio-css'; t.textContent = css;
  document.head.appendChild(t);
}

/**
 * @param {{ onOutput?: (phi:number)=>void }} [opts] onOutput fires each frame with φ (for the scope).
 * @returns {{ el: HTMLElement, phase: ()=>number, dispose: ()=>void }}
 */
export function createRatioSystem(opts = {}) {
  ensureStyles();
  const onOutput = opts.onOutput;

  const el = document.createElement('div'); el.className = 'kratio';

  // input — which heart output node feeds the system (default turns = the old behavior)
  let inputKey = INPUT_NODES[0].key;
  const inputSel = createSelector({ options: INPUT_NODES.map((n) => n.name),
    onChange: (_v, i) => { inputKey = INPUT_NODES[i].key; } });
  const inLabel = document.createElement('span'); inLabel.className = 'krlab'; inLabel.textContent = 'input';
  const iRow = document.createElement('div'); iRow.className = 'krrow';
  iRow.append(inLabel, inputSel.el);

  // ratio r ∈ (0, 1] — 1 = unison (inert); free scrub + bookmark row, two-way linked
  const ratioS = createScrub({ label: 'ratio', value: 1, min: 0.001, max: 1, step: 0.001, noReset: true,
    format: (v) => v.toFixed(3), onInput: (v) => highlightBookmark(v) });
  // bookmark row — a bookmark lights ONLY when the scrub value matches it; free-dial → none lit.
  const bmRow = document.createElement('div'); bmRow.className = 'ksel kr-bm';
  const bmBtns = RATIO_BOOKMARKS.map((b) => {
    const c = document.createElement('span'); c.className = 'opt'; c.textContent = b.name;
    c.addEventListener('click', () => ratioS.set(b.v));   // set → onInput → re-highlights
    bmRow.appendChild(c); return c;
  });
  /** @param {number} v */
  function highlightBookmark(v) {
    const EPS = 5e-4;   // half a step
    bmBtns.forEach((c, i) => c.classList.toggle('on', Math.abs(RATIO_BOOKMARKS[i].v - v) < EPS));
  }
  highlightBookmark(ratioS.get());                        // init highlight (createScrub's first paint is silent)
  const rRow = document.createElement('div'); rRow.className = 'krrow';
  rRow.append(ratioS.el, bmRow);

  // mult |m| ≥ 1 — magnitude scrub + reverse toggle (sign = direction)
  const multS = createScrub({ label: 'mult', value: 1, min: 1, max: 16, step: 0.01, log: true, noReset: true,
    format: (v) => v.toFixed(2) + '×' });
  let reverse = false;
  const revT = createToggle({ label: 'reverse', value: false, onChange: (v) => { reverse = !!v; } });
  const mRow = document.createElement('div'); mRow.className = 'krrow';
  mRow.append(multS.el, revT.el);

  // offset o ∈ [0, 1)
  const offS = createScrub({ label: 'offset', value: 0, min: 0, max: 0.999, step: 0.001, noReset: true,
    format: (v) => v.toFixed(3) });
  const oRow = document.createElement('div'); oRow.className = 'krrow';
  oRow.append(offS.el);

  // right-drag DOWN a control to reveal its config menu by depth — min · max · default for that
  // control. Same depth-reveal format as the smart param (menu.js). (The menu's own scrubs don't
  // get menus — no regress.)
  /** @param {HTMLElement} row @param {any} api @param {{lo:number,hi:number,step:number,def:number,fmt:(v:number)=>string}} c */
  function configMenu(row, api, c) {
    row.style.position = 'relative';
    const levels = [
      createScrub({ label: 'min', value: c.lo, min: c.lo, max: c.hi, step: c.step, stacked: true, format: c.fmt, onInput: (v) => api.setRange(v, null) }),
      createScrub({ label: 'max', value: c.hi, min: c.lo, max: c.hi, step: c.step, stacked: true, format: c.fmt, onInput: (v) => api.setRange(null, v) }),
      createScrub({ label: 'default', value: c.def, min: c.lo, max: c.hi, step: c.step, stacked: true, format: c.fmt, onInput: (v) => api.setDefault(v) }),
    ];
    const menu = createDepthMenu({ host: row, levels });
    wireDepthDrag({ trigger: api.el, closeHost: row, menus: [menu], pick: () => menu });
  }
  configMenu(rRow, ratioS, { lo: 0.001, hi: 1, step: 0.001, def: 1, fmt: (v) => v.toFixed(3) });
  configMenu(mRow, multS, { lo: 1, hi: 16, step: 0.01, def: 1, fmt: (v) => v.toFixed(2) });
  configMenu(oRow, offS, { lo: 0, hi: 0.999, step: 0.001, def: 0, fmt: (v) => v.toFixed(3) });

  // touch a control → it selects, and the properties panel shows its step (via onSelectControl).
  const stepOf = { ratio: 0.001, mult: 0.01, offset: 0.001 };
  /** @param {any} api @param {'ratio'|'mult'|'offset'} key */
  function selectable(api, key) {
    // 'click' (not pointerdown) so it lands AFTER the node-level select in onNodeDown — control wins.
    api.el.addEventListener('click', () => {
      if (opts.onSelectControl) opts.onSelectControl({ label: key, step: stepOf[key], setStep: (s) => { stepOf[key] = s; api.setStep(s); } });
    });
  }
  selectable(ratioS, 'ratio'); selectable(multS, 'mult'); selectable(offS, 'offset');

  // readouts — live, against the heart
  const inR = createReadout({ label: 'in', value: '0.0000' });
  const phiR = createReadout({ label: 'φ', value: '0.0000' });
  const cptR = createReadout({ label: 'm·r', value: '0.0000' });
  const syncR = createReadout({ label: 'sync', value: '—' });
  const out = document.createElement('div'); out.className = 'krout';
  out.append(inR.el, phiR.el, cptR.el, syncR.el);

  el.append(iRow, rRow, mRow, oRow, out);

  let phi = 0, alive = true;
  function tick() {
    if (!alive || !el.isConnected) { alive = false; return; }
    const input = heartReadings()[inputKey];            // the selected heart output node feeds in
    const r = ratioS.get(), mag = multS.get(), o = offS.get();
    const m = reverse ? -mag : mag;
    phi = paramPhase(input, m, r, o);
    const cpt = cyclesPerTurn(m, r);
    const q = syncTurns(m, r);
    inR.set((input >= 0 ? ' ' : '') + input.toFixed(4));
    phiR.set(phi.toFixed(4));
    cptR.set((cpt >= 0 ? ' ' : '') + cpt.toFixed(4));
    syncR.set(q ? `every ${q} turns` : 'free-running');
    if (onOutput) onOutput(phi);
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);

  return { el, phase: () => phi, dispose: () => { alive = false; } };
}
