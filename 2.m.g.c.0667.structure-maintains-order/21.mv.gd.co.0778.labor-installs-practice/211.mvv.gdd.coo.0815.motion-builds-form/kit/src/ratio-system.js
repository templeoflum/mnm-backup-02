// ratio-system.js — THE RATIO SYSTEM as a standalone part: dial the param↔heart rate
// relationship in ISOLATION before folding the controls into the smart param.
//   φ = fract(H · m · r + o), where H = (input + shift) / period — the input's handshake normalizes
//   its native value to heart-turns, so any input drives the SAME formula. See frame.ratio-system.f1.
//     ratio  r ∈ [0, 1)  — free scrub + library bookmarks
//     mult   |m| ≥ 1     — magnitude scrub + a reverse toggle (sign = direction)
//     offset o ∈ [0, 1)  — head-start
//   Readouts (live, against the heart): φ · m·r (cycles/turn) · sync (turns to re-home, or free).
//
// Self-contained: own CSS + own rAF reading heartTurns(). Stops when its element leaves the DOM.
// Plain JS + DOM. The math lives in ratio.js (rig-checked); this is the control surface only.

import { heartReadings } from './unit-circle.js';
import { createScrub } from './scrub.js';
import { createBinSelector } from './binselector.js';
import { createReadout } from './readout.js';
import { createToggle } from './toggle.js';
import { createDepthMenu, wireDepthDrag } from './menu.js';
import { paramPhase, cyclesPerTurn, syncTurns, toTurns } from './ratio.js';

// RATIO BINS — presets sorted by BEHAVIOR (the calibration axis), since m·r has exactly three:
//   reference  — passes/locks trivially (unison + octaves down). q = 1 or 2.
//   rational   — locks at the reduced denominator: re-homes every q heart-turns. the harmonic intervals.
//   irrational — never locks, free-running forever.
// Pick one of each to exercise all three behaviors. r ∈ (0,1]; octaves above 1 are mult territory.
const RATIO_BINS = [
  { name: 'reference',  items: [{ name: '1:1', v: 1 }, { name: '1:2', v: 1 / 2 }, { name: '1:4', v: 1 / 4 }] },
  { name: 'rational',   items: [{ name: '2:3', v: 2 / 3 }, { name: '3:4', v: 3 / 4 }, { name: '4:5', v: 4 / 5 },
                                { name: '5:6', v: 5 / 6 }, { name: '3:5', v: 3 / 5 }] },
  { name: 'irrational', items: [{ name: '1/φ', v: 0.6180339887498949 }, { name: '1/√2', v: Math.SQRT1_2 },
                                { name: '1/π', v: 1 / Math.PI }] },
];

// INPUT BINS — the heart's readings sorted by nature into three bins (the 3-bin selector). Each node
// is self-describing: `key` indexes heartReadings(); `period` is the span of value that equals one
// cycle (the handshake — toTurns divides by it); `shift` pre-offsets before normalizing. The ratio
// formula stays uniform; each node declares how its native value maps to heart-turns.
//   rotation — where you are around the circle (turns/phase/distance + the stepped quad/square)
//   waveform — bounded projections (bipolar ±1 → shift +1, period 2 ⇒ (x+1)/2, the swing as [0,1))
//   static   — heart config/structure: constant within a turn, moves only when you change the heart.
//              period/shift derived from each value's natural range → maps it to [0,1). PROVISIONAL.
const TAU = Math.PI * 2;
const INPUT_BINS = [
  { name: 'rotation', nodes: [
    { name: 'turns',    key: 'turns',    period: 1   },
    { name: 'phase',    key: 'phase',    period: 1   },
    { name: 'distance', key: 'distance', period: TAU },
    { name: 'quad',     key: 'quad',     period: 4, shift: -1 },
    { name: 'square',   key: 'square',   period: 4, shift: -1 },
  ] },
  { name: 'waveform', nodes: [
    { name: 'sin',  key: 'sin',  period: 2, shift: 1 },
    { name: 'cos',  key: 'cos',  period: 2, shift: 1 },
    { name: 'sin2', key: 'sin2', period: 2, shift: 1 },
    { name: 'cos2', key: 'cos2', period: 2, shift: 1 },
  ] },
  { name: 'static', nodes: [
    { name: 'radix', key: 'radix', period: 14, shift: -2 },
    { name: 'freq',  key: 'freq',  period: 10000 },
    { name: 'perim', key: 'perim', period: TAU },
    { name: 'area',  key: 'area',  period: Math.PI },
    { name: 'side',  key: 'side',  period: 2 },
    { name: 'gap',   key: 'gap',   period: TAU },
  ] },
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
 * @returns {{ el: HTMLElement, phase: ()=>number, phaseAt: (turns:number)=>number, dispose: ()=>void }}
 */
export function createRatioSystem(opts = {}) {
  ensureStyles();
  const onOutput = opts.onOutput;

  const el = document.createElement('div'); el.className = 'kratio';

  // input — which heart output node feeds the system. 3-bin selector: active bin's pick feeds in.
  let inputNode = INPUT_BINS[0].nodes[0];   // default turns = the old behavior
  const inputSel = createBinSelector({
    bins: INPUT_BINS.map((b) => ({ name: b.name, options: b.nodes.map((n) => n.name) })),
    onChange: (_v, bi, oi) => { inputNode = INPUT_BINS[bi].nodes[oi]; } });
  const inLabel = document.createElement('span'); inLabel.className = 'krlab'; inLabel.textContent = 'input';
  const iRow = document.createElement('div'); iRow.className = 'krrow';
  iRow.append(inLabel, inputSel.el);

  // ratio r ∈ (0, 1] — 1 = unison. free scrub for fine dial + a 3-bin selector of presets by behavior,
  // two-way linked: pick a preset → sets the scrub; free-dial → highlights the matching preset, or none.
  const ratioS = createScrub({ label: 'ratio', value: 1, min: 0.001, max: 1, step: 0.001, noReset: true,
    format: (v) => v.toFixed(3), onInput: (v) => ratioSel.setMatch(ratioName(v)) });
  const ratioSel = createBinSelector({
    bins: RATIO_BINS.map((b) => ({ name: b.name, options: b.items.map((it) => it.name) })),
    onChange: (_v, bi, oi) => ratioS.set(RATIO_BINS[bi].items[oi].v) });   // pick → set the scrub
  /** the preset name whose value matches v (within half a step), or null. @param {number} v @returns {string|null} */
  function ratioName(v) {
    const EPS = 5e-4;   // half a step
    for (const b of RATIO_BINS) for (const it of b.items) if (Math.abs(it.v - v) < EPS) return it.name;
    return null;
  }
  ratioSel.setMatch(ratioName(ratioS.get()));            // init highlight 1:1 (createScrub's first paint is silent)
  const rRow = document.createElement('div'); rRow.className = 'krrow';
  rRow.append(ratioS.el);
  const rSelRow = document.createElement('div'); rSelRow.className = 'krrow';   // presets on their own level, below the scrub
  rSelRow.append(ratioSel.el);

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

  el.append(iRow, rRow, rSelRow, mRow, oRow, out);

  let phi = 0, alive = true;
  function tick() {
    if (!alive || !el.isConnected) { alive = false; return; }
    const raw = heartReadings()[inputNode.key];          // the selected node's native value (climbs / oscillates)
    const r = ratioS.get(), mag = multS.get(), o = offS.get();
    const m = reverse ? -mag : mag;
    const H = toTurns(raw + (inputNode.shift || 0), inputNode.period);   // handshake → heart-turns, then the uniform formula
    phi = paramPhase(H, m, r, o);
    const cpt = cyclesPerTurn(m, r);
    const q = syncTurns(m, r);
    inR.set((raw >= 0 ? ' ' : '') + raw.toFixed(4));
    phiR.set(phi.toFixed(4));
    cptR.set((cpt >= 0 ? ' ' : '') + cpt.toFixed(4));
    syncR.set(q ? `every ${q} turns` : 'free-running');
    if (onOutput) onOutput(phi);
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);

  // φ at any heart-turns — same law as tick(), reading the heart at `turns` instead of now. Lets the
  // scope reconstruct the ratio on the dense path (a function of turns) so it STANDS instead of walking.
  /** @param {number} turns @returns {number} */
  function phaseAt(turns) {
    const raw = heartReadings(turns)[inputNode.key];
    const r = ratioS.get(), mag = multS.get(), o = offS.get();
    const m = reverse ? -mag : mag;
    const H = toTurns(raw + (inputNode.shift || 0), inputNode.period);
    return paramPhase(H, m, r, o);
  }

  return { el, phase: () => phi, phaseAt, dispose: () => { alive = false; } };
}
