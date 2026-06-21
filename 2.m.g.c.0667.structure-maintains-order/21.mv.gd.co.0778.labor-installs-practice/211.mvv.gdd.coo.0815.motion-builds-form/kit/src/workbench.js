// workbench.js — the instrument bench. House layout: a CENTER scope that auto-scopes the
// param you're touching, a configurable parameter POOL down each side. No wiring — selecting
// (edit) or touching (interact) a param points the scope at it; it stays until the next one.
//
// Pools hold a composable LAYOUT TREE: drop stack / row / grid / dropdown containers and nest
// them; controls slot into the active container. Drag any part to reorder or move it.
// Two modes: edit (arrange/tune) · interact (run; the scope shows live output).

import { createScrub } from './scrub.js';
import { createSlider } from './slider.js';
import { createButton } from './button.js';
import { createToggle } from './toggle.js';
import { createSelector } from './selector.js';
import { createPad } from './pad.js';
import { createField } from './field.js';
import { createScope } from './scope.js';
import { createSmartParam } from './smartparam.js';
import { createReadout } from './readout.js';
import { createRatioSystem } from './ratio-system.js';
import { createBinding } from './binding.js';
import { clock, phaseAt } from './clock.js';
import { unitCircle, setFrequency, setPhase0, setTimeScale, setPlaying, setRadixN, nudge, resetHeart, heartState, heartTurns, heartReadings } from './unit-circle.js';

/** @typedef {{ k:string, kind:'text'|'num'|'bool' }} FieldSpec */
/** @typedef {{ type:string, container?:boolean, drivable?:boolean, props:Record<string,any>, fields:FieldSpec[], build:(p:Record<string,any>, node:Node)=>HTMLElement }} Part */
/** @typedef {{ get:()=>number, set:(v:number)=>void, subscribe:(fn:(v:number)=>void)=>(()=>void) }} NumBinding */
/** @typedef {{ name:string, el:HTMLElement, body:HTMLElement, props:Record<string,any> }} Zone */
/** @typedef {{ id:number, type:string, part:Part, props:Record<string,any>, el:HTMLElement, inner:HTMLElement,
 *   parent:Node|null, body:HTMLElement|null, out:NumBinding, outY:(()=>number)|null, sink:((v:number)=>void)|null, rebuild:()=>void,
 *   clk:{period:number,phase0:number}, driven:boolean, setValue:((v:number)=>void)|null, reflectDrive?:((d:boolean)=>void)|null, ratio?:number, multiplier?:number, sp?:any }} Node */
/** A READOUT — an output-only source node: the heart writes its `out` every frame, the user only reads
 *  it (a chip + a click to scope it). Carries enough Node-shape for `focus()` and the scope sample loop. */
/** @typedef {{ type:'readout', props:{label:string,min:number,max:number}, out:NumBinding, outY:(()=>number)|null,
 *   srcOf:(R:any)=>number, renderOf:(R:any)=>string, chipSet:(v:string)=>void, chipEl:HTMLElement, follow:boolean, followSpan:number }} Readout */

/** Style a flow container body. @param {HTMLElement} b @param {'stack'|'row'|'grid'} kind @param {Record<string,any>} p */
function styleArrange(b, kind, p) {
  b.style.gap = (p.gap ?? 10) + 'px';
  if (kind === 'grid') {
    b.style.display = 'grid';
    b.style.gridTemplateColumns = `repeat(${Math.max(1, Math.round(p.cols ?? 2))}, max-content)`;
    b.style.gridTemplateRows = (p.rows && p.rows > 0) ? `repeat(${Math.round(p.rows)}, max-content)` : '';
    b.style.gridAutoFlow = (p.rows && p.rows > 0) ? 'column' : 'row';   // rows set → fill down columns
  }
  else if (kind === 'row') { b.style.display = 'flex'; b.style.flexDirection = 'row'; b.style.flexWrap = 'wrap'; b.style.alignItems = 'flex-start'; }
  else { b.style.display = 'flex'; b.style.flexDirection = 'column'; b.style.alignItems = 'flex-start'; }
}

const UNIT = 8;                                          // the grid module — all sizes snap to multiples of this
/** @param {number} px */ function snap(px) { return Math.round(px / UNIT) * UNIT; }

/** Apply a node's explicit (snapped) size; unset = size to content. @param {Node} node */
function applyNodeSize(node) {
  const w = node.props.w, h = node.props.h;
  if (w || h) { node.el.classList.add('sized'); node.el.style.width = w ? w + 'px' : ''; node.el.style.height = h ? h + 'px' : ''; }
  else { node.el.classList.remove('sized'); node.el.style.width = ''; node.el.style.height = ''; }
}

/** The collapse head for a dropdown-layout container. @param {string} title @param {HTMLElement} frame */
function makeDropdownHead(title, frame) {
  const head = document.createElement('div'); head.className = 'chead';
  const caret = document.createElement('span'); caret.className = 'ccaret'; caret.textContent = '▾';
  const ttl = document.createElement('span'); ttl.className = 'ctitle'; ttl.textContent = title ?? 'group';
  head.appendChild(caret); head.appendChild(ttl);
  head.addEventListener('click', (e) => { e.stopPropagation(); frame.classList.toggle('closed'); });
  return head;
}
/** @param {Record<string,any>} p @param {Node} node */
function buildContainer(p, node) {
  const layout = p.layout || 'stack';
  const frame = document.createElement('div'); frame.className = 'cont cont-' + layout;
  const body = document.createElement('div'); body.className = 'cbody';
  if (layout === 'dropdown') frame.appendChild(makeDropdownHead(p.title, frame));
  frame.appendChild(body);
  styleArrange(body, layout === 'grid' ? 'grid' : layout === 'row' ? 'row' : 'stack', p);
  node.body = body;
  return frame;
}

/** @type {Part[]} */
const PARTS = [
  { type: 'button', props: { label: 'button' }, fields: [{ k: 'label', kind: 'text' }],
    build: (p, n) => createButton({ label: p.label, onClick: () => { n.out.set(1); setTimeout(() => n.out.set(0), 120); } }).el },   // trigger: a momentary pulse
  { type: 'toggle', props: { label: 'toggle', value: true }, fields: [{ k: 'label', kind: 'text' }, { k: 'value', kind: 'bool' }],
    build: (p, n) => createToggle({ label: p.label, value: !!p.value, onChange: (v) => n.out.set(v ? 1 : 0) }).el },
  { type: 'slider', drivable: true, props: { label: 'x', min: 0, max: 1, value: 0.5, step: 0.01 },
    fields: [{ k: 'label', kind: 'text' }, { k: 'min', kind: 'num' }, { k: 'max', kind: 'num' }, { k: 'value', kind: 'num' }, { k: 'step', kind: 'num' }],
    build: (p, n) => { const s = createSlider({ label: p.label, min: p.min, max: p.max, value: p.value, step: p.step, onInput: (v) => n.out.set(v) }); n.setValue = s.set; return s.el; } },
  { type: 'selector', props: { options: 'sine,tri,saw' }, fields: [{ k: 'options', kind: 'text' }],
    build: (p, n) => { const opts = String(p.options).split(',').map((s) => s.trim());   // N states across [0,1]
      return createSelector({ options: opts, onChange: (_v, i) => n.out.set(opts.length > 1 ? i / (opts.length - 1) : 0) }).el; } },
  { type: 'pad', props: {}, fields: [], build: (_p, n) => { const pd = createPad({ onInput: (v) => n.out.set(v.x) }); n.outY = () => pd.get().y; return pd.el; } },   // x → out (ch A), y → outY (ch B)
  { type: 'field', props: { label: 'name', placeholder: 'type…' }, fields: [{ k: 'label', kind: 'text' }, { k: 'placeholder', kind: 'text' }],
    build: (p) => createField({ label: p.label, placeholder: p.placeholder }).el },
  { type: 'param', drivable: true,   // THE smart parameter — seeds from `default`; min/max = limiter, out* = output mapping
    props: { label: 'param', min: 0, max: 1, step: 0.01, default: 0.5, outMin: 0, outMax: 1, outLog: false, unit: '', showMapped: false, wrap: false },
    fields: [{ k: 'label', kind: 'text' }, { k: 'step', kind: 'num' }],   // limiter (min/max) lives in the dropdown; output mapping has its own panel section
    build: (p, n) => { const seed = n.props.default ?? 0.5;
      const sp = createSmartParam({ label: p.label, min: p.min, max: p.max, step: p.step, value: seed, default: seed,
        outMin: p.outMin, outMax: p.outMax, outLog: p.outLog, unit: p.unit, showMapped: p.showMapped, wrap: p.wrap,
        driven: n.driven, ratio: n.ratio ?? 1, multiplier: n.multiplier ?? 1, offset: n.clk.phase0 ?? 0,
        onInput: (v) => n.out.set(v), onDrive: (d) => { n.driven = d; },
        onConfig: ({ ratio, multiplier, offset, min, max, default: dflt }) => { n.ratio = ratio; n.multiplier = multiplier; n.clk.phase0 = offset; n.props.min = min; n.props.max = max; n.props.default = dflt; } });
      n.setValue = sp.set; n.reflectDrive = sp.setDriven; n.outY = () => sp.outY(); n.sp = sp; return sp.el; } },
  { type: 'ratio',   // THE RATIO SYSTEM, standalone — dial φ=fract(H·m·r+o) against the heart in isolation
    props: {}, fields: [],
    build: (_p, n, ctx) => createRatioSystem({ onOutput: (phi) => n.out.set(phi), onSelectControl: (c) => ctx.select({ kind: 'ratioctl', ...c }) }).el },
  // layout containers (nestable) ──
  // ONE container — arrangement is the `layout` PROP {stack|row|grid|dropdown}, not the part type.
  // (the layout selector is slice 2; fields here are the union so gap/cols/rows/title stay editable meanwhile.)
  { type: 'container', container: true,
    props: { layout: 'stack', gap: 10, cols: 2, rows: 0, title: 'group' },
    fields: [{ k: 'gap', kind: 'num' }, { k: 'cols', kind: 'num' }, { k: 'rows', kind: 'num' }, { k: 'title', kind: 'text' }],
    build: (p, n) => buildContainer(p, n) },
];

const TAU = Math.PI * 2;
// the heart's readings, as source-node definitions — full parity with heartReadings() (the on-face
// readout's struct). each plots one field of the readings struct R; the climbing/accumulating ones
// (cycle·turns·distance·base·r-cnt) FOLLOW (sliding window); the rest use a fixed natural range.
/** @type {{label:string,min:number,max:number,src:(R:any)=>number,srcY?:(R:any)=>number,render:(R:any)=>string,follow?:boolean}[]} */
const READOUT_DEFS = [
  { label: 'phase',    min: 0,  max: 1,                 src: (R) => R.phase,    render: (R) => R.phase.toFixed(4) },
  { label: 'angle°',   min: 0,  max: 360,               src: (R) => R.angleDeg, render: (R) => R.angleDeg.toFixed(1) + '°' },
  { label: 'rad',      min: 0,  max: TAU,               src: (R) => R.rad,      render: (R) => R.rad.toFixed(4) },
  { label: 'cycle',    min: 0,  max: 16,                src: (R) => R.cycle,    render: (R) => R.cycle.toFixed(0), follow: true },
  { label: 'turns',    min: 0,  max: 16,                src: (R) => R.turns,    render: (R) => R.turns.toFixed(4), follow: true },
  { label: 'quad',     min: 1,  max: 4,                 src: (R) => R.quad,     render: (R) => R.quad.toFixed(0) },
  { label: 'square',   min: 1,  max: 4,                 src: (R) => R.square,   render: (R) => R.square.toFixed(0) },
  { label: 'cos',      min: -1, max: 1,                 src: (R) => R.cos,      render: (R) => R.cos.toFixed(4) },
  { label: 'sin',      min: -1, max: 1,                 src: (R) => R.sin,      render: (R) => R.sin.toFixed(4) },
  { label: 'unit-pt',  min: -1, max: 1,                 src: (R) => R.cos, srcY: (R) => R.sin, render: (R) => R.cos.toFixed(2) + ', ' + R.sin.toFixed(2) },
  { label: 'tan',      min: -8, max: 8,                 src: (R) => R.tan,      render: (R) => Number.isFinite(R.tan) ? R.tan.toFixed(4) : (R.tan > 0 ? '+∞' : '-∞') },
  { label: 'sec',      min: 1,  max: 2.5,               src: (R) => R.sec,      render: (R) => isNaN(R.sec) ? '—' : R.sec.toFixed(4) },
  { label: 'sec-pt',   min: -1, max: 1,                 src: (R) => R.secPtX, srcY: (R) => R.secPtY, render: (R) => isNaN(R.secPtX) ? '—' : R.secPtX.toFixed(2) + ', ' + R.secPtY.toFixed(2) },
  { label: 'cos2φ',    min: -1, max: 1,                 src: (R) => R.cos2,     render: (R) => R.cos2.toFixed(4) },
  { label: 'sin2φ',    min: -1, max: 1,                 src: (R) => R.sin2,     render: (R) => R.sin2.toFixed(4) },
  { label: 'freq',     min: 0,  max: 10000,             src: (R) => R.freq,     render: (R) => R.freq.toFixed(1) },
  { label: 'ω',        min: 0,  max: TAU * 10000,       src: (R) => R.omega,    render: (R) => R.omega.toFixed(2) },
  { label: 'velocity', min: -TAU * 10000, max: TAU * 10000, src: (R) => R.velocity, render: (R) => R.velocity.toFixed(2) },
  { label: 'accel',    min: 0,  max: (TAU * 10000) ** 2, src: (R) => R.accel,   render: (R) => R.accel.toExponential(1) },
  { label: 'distance', min: 0,  max: 16,                src: (R) => R.distance, render: (R) => R.distance.toFixed(3), follow: true },
  { label: 'radix',    min: 2,  max: 16,                src: (R) => R.radix,    render: (R) => R.radix.toFixed(3) },
  { label: 'base',     min: 0,  max: 16,                src: (R) => R.base,     render: (R) => R.baseStr, follow: true },
  { label: 'sub φ',    min: 0,  max: 1,                 src: (R) => R.subPhase, render: (R) => R.subPhase.toFixed(4) },
  { label: 'r-idx',    min: 0,  max: 16,                src: (R) => R.rIdx,     render: (R) => R.rIdx.toFixed(0) },
  { label: 'r-cnt',    min: 0,  max: 16,                src: (R) => R.rCnt,     render: (R) => R.rCnt.toFixed(0), follow: true },
  { label: 'perim',    min: 0,  max: TAU,               src: (R) => R.perim,    render: (R) => R.perim.toFixed(4) },
  { label: 'area',     min: 0,  max: Math.PI,           src: (R) => R.area,     render: (R) => R.area.toFixed(4) },
  { label: 'side',     min: 0,  max: 2,                 src: (R) => R.side,     render: (R) => R.side.toFixed(4) },
  { label: 'gap',      min: 0,  max: TAU,               src: (R) => R.gap,      render: (R) => R.gap.toFixed(4) },
  { label: 'p-gap',    min: 0,  max: 0.4,               src: (R) => R.pGap,     render: (R) => isNaN(R.pGap) ? '—' : R.pGap.toFixed(4) },
  // |pt| (=1) and v·r (=0) dropped — true constants that never move.
];

/** Boot the workbench.
 * @param {HTMLElement} toolbar @param {HTMLElement} palette @param {HTMLElement} canvas @param {HTMLElement} inspector */
export function initWorkbench(toolbar, palette, canvas, inspector) {
  /** @type {Node[]} */ const nodes = [];
  /** @type {Map<HTMLElement, {kind:'zone',zone:Zone}|{kind:'node',node:Node}>} */ const bodyOwner = new Map();
  /** @type {{kind:'node',node:Node}|{kind:'zone',zone:Zone}|{kind:'scope'}|{kind:'heartparam',sp:any,props:Record<string,any>,label:string}|{kind:'ratioctl',label:string,step:number,setStep:(s:number)=>void}|null} */ let selected = null;
  /** @type {Node|Readout|null} */ let focused = null;
  /** @type {HTMLElement} */ let activeBody;
  /** @type {'move'|'interact'} */ let mode = 'move';   // move = rearrange parts · interact = run + edit properties
  let debugOn = false;                                    // global: the focused param shows its (value,grain) overlay
  let ids = 0;

  // ── pools (left/right) + center scope ──
  /** @param {string} name @param {string} cls @param {Record<string,any>} props @returns {Zone} */
  function buildPool(name, cls, props) {
    const el = document.createElement('div'); el.className = 'zone ' + cls;
    const head = document.createElement('div'); head.className = 'zhead'; head.textContent = name;
    const body = document.createElement('div'); body.className = 'zbody';
    el.appendChild(head); el.appendChild(body); canvas.appendChild(el);
    /** @type {Zone} */ const z = { name, el, body, props };
    styleArrange(body, props.arrange, props);
    bodyOwner.set(body, { kind: 'zone', zone: z });
    head.addEventListener('pointerdown', (e) => { e.stopPropagation(); setActive(body); select({ kind: 'zone', zone: z }); });
    body.addEventListener('pointerdown', (e) => { if (e.target === body && mode === 'move') { setActive(body); select({ kind: 'zone', zone: z }); } });
    return z;
  }
  const poolL = buildPool('pool', 'left', { arrange: 'stack', gap: 10 });
  const center = document.createElement('div'); center.className = 'zone center';
  const chead = document.createElement('div'); chead.className = 'zhead';
  const cheadLabel = document.createElement('span'); cheadLabel.className = 'zhead-label'; cheadLabel.textContent = 'scope · —';
  const scope = createScope({ min: 0, max: 1, width: 560, height: 240 });
  scope.el.style.width = '100%'; scope.el.style.height = 'calc(100% - 22px)';
  const clearBtn = createButton({ label: 'clear', onClick: () => scope.clear() });   // wipe the trace history
  clearBtn.el.classList.add('scope-clear');
  clearBtn.el.addEventListener('pointerdown', (e) => e.stopPropagation());            // don't trigger the head's select-scope
  chead.append(cheadLabel, clearBtn.el);
  center.appendChild(chead); center.appendChild(scope.el); canvas.appendChild(center);
  const scopeProps = { channels: 1, readout: /** @type {'line'|'beam'} */ ('line'),
    layout: /** @type {'stack'|'row'} */ ('stack'), persistence: 0.45, inten: 0.5, focus: 1.2, sweep: 0.5 };   // the scope's own tunables (its properties panel)
  chead.addEventListener('pointerdown', (e) => { e.stopPropagation(); select({ kind: 'scope' }); });
  // the HEART zone (replaces the right pool): the unit-circle VISUAL pinned + always visible,
  // driven by our own scrub controls. the heart is the master clock — every param's ratio is
  // relative to it. just the visual; no readout/proof text, controls in our ecosystem's form.
  const clockZone = document.createElement('div'); clockZone.className = 'zone clockz';
  const clkHead = document.createElement('div'); clkHead.className = 'zhead'; clkHead.textContent = 'clock';
  const clkCanvas = document.createElement('canvas'); clkCanvas.width = 320; clkCanvas.height = 320; clkCanvas.className = 'clockface';
  const clkParams = document.createElement('div'); clkParams.className = 'heartparams';
  clockZone.append(clkHead, clkCanvas, clkParams);
  canvas.appendChild(clockZone);

  // the heart's four controls are FULL smart params (locked-drag feel, output mapping → Hz/×/count,
  // and now DRIVE: a driven heart param modulates the clock itself — FM-self). each carries a [0,1]
  // signal; the output mapping turns it into the real value that drives the clock (onOutput → the
  // setter). compact 3×2 grid (params cols 1–2, transport col 3); the seek scrub stays noDrive (a jog).
  const hs = heartState();
  const grid = document.createElement('div'); grid.className = 'heartparams-grid';
  grid.style.cssText = 'display:grid;grid-template-columns:repeat(3,minmax(0,1fr));grid-template-rows:auto auto;gap:8px;align-items:stretch;';
  /** @param {HTMLElement} el @param {number} col @param {number} row */
  const place = (el, col, row) => { el.style.width = '100%'; el.style.minWidth = '0'; el.style.gridColumn = String(col); el.style.gridRow = String(row); grid.appendChild(el); };
  // FULL smart params now: a driven heart param animates its [0,1] signal off the heart (same drive
  // law as a bench param) and maps it to the clock — the heart modulating itself. The workbench loop
  // drives them; `set(signal)` fires onOutput → the clock setter, so no new path. [[frame.heartdrive.f0]]
  /** @type {{sp:any, drv:{driven:boolean,ratio:number,mult:number,offset:number}}[]} */
  const heartDriveables = [];
  /** @param {string} label @param {{outMin:number,outMax:number,outLog:boolean,format:(x:number)=>string}} cfg @param {number} current @param {(n:number)=>void} setter @param {number} col @param {number} row */
  const heartParam = (label, cfg, current, setter, col, row) => {
    const sig = cfg.outLog ? Math.log(current / cfg.outMin) / Math.log(cfg.outMax / cfg.outMin) : (current - cfg.outMin) / (cfg.outMax - cfg.outMin);
    const props = { outMin: cfg.outMin, outMax: cfg.outMax, outLog: cfg.outLog, unit: '', showMapped: true };   // heart params show the mapped value
    const drv = { driven: false, ratio: 1, mult: 1, offset: 0 };
    const sp = createSmartParam({ label, value: Math.max(0, Math.min(1, sig)), step: 0.001, showMapped: true,
      outMin: cfg.outMin, outMax: cfg.outMax, outLog: cfg.outLog, format: cfg.format, onOutput: setter,
      onDrive: (d) => { drv.driven = d; },                                                  // name click toggles self-modulation
      onConfig: ({ ratio, multiplier, offset }) => { drv.ratio = ratio; drv.mult = multiplier; drv.offset = offset; },
      onSelect: () => select({ kind: 'heartparam', sp, props, label }) });   // any touch → show its properties
    place(sp.el, col, row);
    heartDriveables.push({ sp, drv });
    return sp;
  };
  heartParam('speed', { outMin: 0.01, outMax: 10000, outLog: true, format: (x) => x < 1000 ? x.toFixed(1) + ' Hz' : (x / 1000).toFixed(2) + ' kHz' }, hs.freq, setFrequency, 1, 1);
  heartParam('radix', { outMin: 2, outMax: 16, outLog: false, format: (x) => x.toFixed(3) }, hs.radix, setRadixN, 2, 1);
  heartParam('phase₀', { outMin: 0, outMax: 1, outLog: false, format: (x) => x.toFixed(3) }, hs.phase0, setPhase0, 1, 2);
  heartParam('playback', { outMin: -3, outMax: 3, outLog: false, format: (x) => x.toFixed(2) + '×' }, hs.timeScale, setTimeScale, 2, 2);
  // transport: play/pause + stop (hold / rewind the odometer) share col 3 top; seek scrub below.
  let hbPlaying = true;
  const setHbPlaying = (/** @type {boolean} */ p) => { hbPlaying = p; setPlaying(p); hbBtn.el.textContent = p ? 'pause' : 'play'; };
  const hbBtn = createButton({ label: 'pause', onClick: () => setHbPlaying(!hbPlaying) });
  const stopBtn = createButton({ label: 'stop', onClick: () => { resetHeart(); setHbPlaying(false); } });
  const transport = document.createElement('div');
  transport.style.cssText = 'display:flex;gap:6px;align-items:stretch';
  hbBtn.el.style.flex = '1'; stopBtn.el.style.flex = '1';
  transport.append(hbBtn.el, stopBtn.el);
  place(transport, 3, 1);
  // scrub = a smart param in CYCLIC mode (wrap). It reports MOVEMENT, which jogs the heart's
  // position (the CDJ platter): 1 full scrub = 1 cycle. No skip; while playing the nudge rides on
  // top of the auto-advance. No special case — just wrap + the movement channel wired to nudge().
  const scrubProps = { outMin: 0, outMax: 1, outLog: false, unit: '', showMapped: false, wrap: true };
  const scrubSp = createSmartParam({ label: 'scrub', value: 0, step: 0.001, noDrive: true, wrap: true,
    onDelta: (d) => nudge(d), onSelect: () => select({ kind: 'heartparam', sp: scrubSp, props: scrubProps, label: 'scrub' }) });
  place(scrubSp.el, 3, 2);
  clkParams.appendChild(grid);

  // ── readout bank: the heart's live readings as SOURCE nodes (output-only, heart-driven). Each is a
  //    node (it carries an `out`), so the scope's focus→plot path works unchanged — clicking a chip
  //    points the scope at it. Baseline: raw value at natural range (projection is a later rung).
  const bank = document.createElement('div'); bank.className = 'readout-bank';
  const bankHead = document.createElement('div'); bankHead.className = 'rd-bankhead'; bankHead.textContent = 'readouts';
  const bankGrid = document.createElement('div'); bankGrid.className = 'rd-bankgrid';
  bank.append(bankHead, bankGrid);
  clkParams.appendChild(bank);
  /** @type {Readout[]} */ const readouts = [];
  let lastReadings = heartReadings();                          // refreshed once per frame; outY reads from it
  for (const def of READOUT_DEFS) {
    const rd = createReadout({ label: def.label, format: (s) => String(s) });
    const chipEl = document.createElement('div'); chipEl.className = 'rdchip'; chipEl.appendChild(rd.el);
    const sy = def.srcY;
    /** @type {Readout} */ const ro = { type: 'readout', props: { label: def.label, min: def.min, max: def.max },
      out: createBinding(0), outY: sy ? () => sy(lastReadings) : null, srcOf: def.src, renderOf: def.render, chipSet: rd.set, chipEl,
      follow: !!def.follow, followSpan: def.max - def.min };
    chipEl.addEventListener('pointerdown', (e) => { e.stopPropagation(); focus(ro); });   // focus by interaction only (never emission)
    bankGrid.appendChild(chipEl);
    readouts.push(ro);
  }
  const paintChips = () => { for (const r of readouts) r.chipEl.classList.toggle('sel', focused === r); };

  // mount the visual on its own WebGPU harness (just the shader render)
  const dummy = document.createElement('div');
  (async function mountHeart() {
    if (!navigator.gpu) { clkHead.textContent = 'clock · no WebGPU'; return; }
    const adapter = await navigator.gpu.requestAdapter();
    if (!adapter) { clkHead.textContent = 'clock · no GPU'; return; }
    const device = await adapter.requestDevice();
    const ctx = /** @type {GPUCanvasContext} */ (clkCanvas.getContext('webgpu'));
    const format = navigator.gpu.getPreferredCanvasFormat();
    ctx.configure({ device, format, alphaMode: 'opaque' });
    unitCircle.mount({ canvas: clkCanvas, device, ctx, format, read: dummy, controls: dummy, msg: dummy });
    (function spin() { unitCircle.frame(); requestAnimationFrame(spin); })();
  })();
  const pools = [poolL];
  activeBody = poolL.body;

  /** @param {HTMLElement} b */
  function setActive(b) { activeBody = b; document.querySelectorAll('.zbody, .cbody').forEach((x) => x.classList.toggle('active-drop', x === b)); }
  setActive(poolL.body);

  // the heart: one shared clock time `t` (seconds), read by every clocked param
  const t0 = performance.now();
  const now = () => (performance.now() - t0) / 1000;

  // center scope follows the focused param
  /** @param {Node|Readout|null} n */
  function focus(n) {
    if (n === focused) return;                 // no change (out.subscribe fires every emit) — skip the work
    if (focused && focused !== n && 'sp' in focused && focused.type === 'param' && focused.sp) { focused.sp.feel.debug = false; focused.sp.updateDebug(); }  // drop the old overlay
    focused = n;
    if (n) {
      // the scope's y-range eases (lerps) to the focused signal's natural range — smooth, no jarring
      // re-scale of the existing trace; it keeps rolling and adopts the new scale over a few frames.
      // CHANNEL COUNT is the scope's own property (its inspector), not touched by focus.
      if (n.type === 'param') { scope.setFollow(false); scope.setRange(0, 1); }   // signal is always [0,1]
      else if ('follow' in n && n.follow) scope.setFollow(true, n.followSpan);     // accumulator → sliding window
      else { scope.setFollow(false); scope.setRange(Number(n.props.min ?? 0), Number(n.props.max ?? 1)); }
      if ('sp' in n && n.type === 'param' && n.sp) { n.sp.feel.debug = debugOn; n.sp.updateDebug(); }     // overlay follows focus
      cheadLabel.textContent = 'scope · ' + (n.props.label ?? n.type);  // continuous — never clear
    } else cheadLabel.textContent = 'scope · —';
    paintChips();                              // keep the readout-bank highlight in sync with focus
  }
  // one loop: advance every driven param off the shared clock, then sample the focused one
  (function loop() {
    const t = now();
    // driven HEART params modulate the clock itself (FM-self): animate the signal off the heart by the
    // same drive law, set() → onOutput → the clock setter. Done first so nodes see the modulated heart.
    for (const h of heartDriveables) if (h.drv.driven) {
      const ph = (heartTurns() * h.drv.ratio * h.drv.mult + h.drv.offset) % 1;
      h.sp.set(ph < 0 ? ph + 1 : ph);
    }
    for (const n of nodes) if (n.driven && n.setValue) {
      if (n.type === 'param') {                                         // smart param: read phase off the
        const ph = (heartTurns() * (n.ratio ?? 1) * (n.multiplier ?? 1) + (n.clk.phase0 || 0)) % 1;   // rate = heart × ratio × mult
        n.setValue(ph < 0 ? ph + 1 : ph);                              // signal is [0,1]
      } else { const lo = Number(n.props.min ?? 0), hi = Number(n.props.max ?? 1); n.setValue(lo + phaseAt(n.clk, t) * (hi - lo)); }
    }
    lastReadings = heartReadings();                                            // one struct per frame (the source of truth)
    for (const r of readouts) { r.out.set(r.srcOf(lastReadings)); r.chipSet(r.renderOf(lastReadings)); }   // heart writes each readout's out + chip
    const f = /** @type {Node|Readout|null} */ (focused); if (f) scope.set(Number(f.out.get()) || 0, f.outY ? f.outY() : undefined);
    requestAnimationFrame(loop);
  })();

  // ── toolbar ──
  const modesEl = document.createElement('div'); modesEl.className = 'tmode';
  /** @type {Record<string, HTMLButtonElement>} */ const modeBtns = {};
  for (const m of /** @type {('move'|'interact')[]} */(['move', 'interact'])) {
    const b = document.createElement('button'); b.className = 'tbtn'; b.textContent = m;
    b.addEventListener('click', () => setMode(m)); modeBtns[m] = b; modesEl.appendChild(b);
  }
  toolbar.appendChild(modesEl);
  // debug overlay — a global toggle right by the mode buttons; when on, the focused param shows
  // its (value,grain) pad overlay. No edit-mode + properties-scroll detour.
  const dbgBtn = document.createElement('button'); dbgBtn.className = 'tbtn'; dbgBtn.textContent = 'debug';
  dbgBtn.addEventListener('click', () => {
    debugOn = !debugOn; dbgBtn.classList.toggle('on', debugOn);
    if (focused && focused.type === 'param' && focused.sp) { focused.sp.feel.debug = debugOn; focused.sp.updateDebug(); }
  });
  toolbar.appendChild(dbgBtn);
  /** @param {'move'|'interact'} m */
  function setMode(m) {
    mode = m;
    document.body.classList.remove('mode-move', 'mode-interact'); document.body.classList.add('mode-' + m);
    for (const k in modeBtns) modeBtns[k].classList.toggle('on', k === m);
    if (m !== 'move') select(null);
  }

  // ── palette → drop into the active container ──
  for (const part of PARTS) {
    const b = document.createElement('button'); b.className = 'pitem' + (part.container ? ' lay' : ''); b.textContent = part.type;
    b.addEventListener('click', () => addNode(part)); palette.appendChild(b);
  }
  // build a node and drop it into the active body. No selection/focus side-effects — addNode
  // adds those for an interactive drop; restore() calls this quietly to rehydrate the floor.
  /** @param {Part} part @param {{props?:Record<string,any>,driven?:boolean,ratio?:number,multiplier?:number,offset?:number}} [init] @returns {Node} */
  function createNode(part, init = {}) {
    /** @type {Node} */
    const node = { id: ids++, type: part.type, part, props: { ...part.props, ...(init.props || {}) }, parent: null, body: null,
      el: document.createElement('div'), inner: document.createElement('div'),
      out: createBinding(/** @type {number} */(0)), outY: null, sink: null, rebuild: () => {},
      clk: clock(1, 0), driven: !!init.driven, setValue: /** @type {((v:number)=>void)|null} */(null) };
    if (init.ratio != null) node.ratio = init.ratio;
    if (init.multiplier != null) node.multiplier = init.multiplier;
    if (init.offset != null) node.clk.phase0 = init.offset;
    node.el.className = 'node' + (part.container ? ' isCont' : ''); node.inner.className = 'ninner'; node.el.appendChild(node.inner);
    node.rebuild = () => { node.outY = null; node.inner.innerHTML = ''; node.inner.appendChild(part.build(node.props, node, { select })); };   // build re-sets outY for a pad; ctx.select lets a part route sub-control selection to the inspector
    node.rebuild();
    // resize grip — sibling of .ninner so it's always live; snaps to the grid module
    const grip = document.createElement('div'); grip.className = 'nhandle'; node.el.appendChild(grip);
    grip.addEventListener('pointerdown', (e) => {
      e.stopPropagation();
      const r = node.el.getBoundingClientRect(); const sw = r.width, sh = r.height, sx = e.clientX, sy = e.clientY;
      const mv = (/** @type {PointerEvent} */ ev) => { node.props.w = Math.max(UNIT * 3, snap(sw + ev.clientX - sx)); node.props.h = Math.max(UNIT * 3, snap(sh + ev.clientY - sy)); applyNodeSize(node); };
      const up = () => { grip.removeEventListener('pointermove', mv); grip.removeEventListener('pointerup', up); };
      grip.setPointerCapture(e.pointerId); grip.addEventListener('pointermove', mv); grip.addEventListener('pointerup', up);
    });
    applyNodeSize(node);
    if (part.container && node.body) bodyOwner.set(node.body, { kind: 'node', node });
    activeBody.appendChild(node.el);
    adopt(node);
    nodes.push(node);
    // NOTE: focus is set by INTERACTION only (onNodeDown / addNode), never by emission — a
    // continuously-emitting (driven) node must NOT steal focus. It latches to the last touched.
    node.el.addEventListener('pointerdown', (e) => onNodeDown(node, e));
    return node;
  }
  /** @param {Part} part */
  function addNode(part) {
    const node = createNode(part);
    if (part.container) { setActive(/** @type {HTMLElement} */(node.body)); }
    select({ kind: 'node', node });
    if (!part.container) focus(node);
  }

  // ── drag-reorder / move, or click-select ──
  /** @type {HTMLElement|null} */ let dropBody = null;
  function clearDrop() { if (dropBody) dropBody.classList.remove('drop-target'); dropBody = null; }
  /** @param {Node} node @param {PointerEvent} e */
  function onNodeDown(node, e) {
    if (mode === 'interact') {                  // interact: touching a part selects it → its properties show (no move)
      if (!node.part.container) { select({ kind: 'node', node }); focus(node); }
      return;
    }
    e.stopPropagation();
    const sx = e.clientX, sy = e.clientY; let dragging = false;
    const move = (/** @type {PointerEvent} */ ev) => {
      if (!dragging) { if (Math.hypot(ev.clientX - sx, ev.clientY - sy) < 5) return; dragging = true; node.el.classList.add('dragging'); node.el.style.pointerEvents = 'none'; }
      reorder(node, ev.clientX, ev.clientY);
    };
    const up = () => {
      node.el.removeEventListener('pointermove', move); node.el.removeEventListener('pointerup', up);
      node.el.classList.remove('dragging'); node.el.style.pointerEvents = ''; clearDrop();
      if (!dragging) {
        if (node.part.container) setActive(/** @type {HTMLElement} */(node.body));
        select({ kind: 'node', node });
        if (!node.part.container) focus(node);
      } else { adopt(node); }
    };
    node.el.setPointerCapture(e.pointerId);
    node.el.addEventListener('pointermove', move); node.el.addEventListener('pointerup', up);
  }
  /** Move node.el to follow the pointer among drop bodies (dragged node is pointer-transparent). @param {Node} node @param {number} x @param {number} y */
  function reorder(node, x, y) {
    const t = document.elementFromPoint(x, y); if (!t) return;
    const body = /** @type {HTMLElement|null} */ (t.closest('.cbody, .zbody'));
    if (!body || node.el.contains(body)) return;
    if (dropBody !== body) { clearDrop(); dropBody = body; body.classList.add('drop-target'); }
    const grid = getComputedStyle(body).display === 'grid';
    const rowish = grid || getComputedStyle(body).flexDirection === 'row';
    const kids = Array.from(body.children).filter((c) => c !== node.el && c.classList.contains('node'));
    /** @type {Element|null} */ let ref = null;
    for (const k of kids) { const r = k.getBoundingClientRect(); const mid = rowish ? r.left + r.width / 2 : r.top + r.height / 2; const pos = rowish ? x : y; if (pos < mid) { ref = k; break; } }
    body.insertBefore(node.el, ref);
  }
  /** Set node.parent/owner from where it currently sits in the DOM. @param {Node} node */
  function adopt(node) {
    const body = node.el.parentElement; if (!body) return;
    const owner = bodyOwner.get(body);
    node.parent = owner && owner.kind === 'node' ? owner.node : null;
  }

  // ── selection + removal ──
  /** @param {{kind:'node',node:Node}|{kind:'zone',zone:Zone}|{kind:'scope'}|{kind:'heartparam',sp:any,props:Record<string,any>,label:string}|null} s */
  function select(s) {
    selected = s;
    for (const n of nodes) n.el.classList.toggle('selected', s?.kind === 'node' && s.node === n);
    for (const z of pools) z.el.classList.toggle('selected', s?.kind === 'zone' && s.zone === z);
    center.classList.toggle('selected', s?.kind === 'scope');
    renderInspector();
  }
  /** @param {Node} n */
  function remove(n) {
    if (n.body) for (const m of [...nodes]) if (n.body.contains(m.el) && m !== n) remove(m);   // remove children first
    const i = nodes.indexOf(n); if (i >= 0) nodes.splice(i, 1);
    if (n.body) bodyOwner.delete(n.body);
    n.el.remove();
    if (focused === n) focus(null);
    if (selected?.kind === 'node' && selected.node === n) select(null);
  }
  document.addEventListener('keydown', (e) => {
    if (e.target instanceof HTMLInputElement) return;
    if ((e.key === 'Delete' || e.key === 'Backspace') && selected?.kind === 'node') { e.preventDefault(); remove(selected.node); }
  });

  // ── inspector ──
  function renderInspector() {
    inspector.innerHTML = '';
    if (!selected) return;
    if (selected.kind === 'scope') return renderScopeInspector();
    if (selected.kind === 'zone') return renderZoneInspector(selected.zone);
    if (selected.kind === 'heartparam') { titleRow('clock · ' + selected.label); return renderParamProps(selected.sp, selected.props, 'output'); }
    if (selected.kind === 'ratioctl') {
      titleRow('ratio · ' + selected.label);
      const s = createScrub({ label: 'step', value: selected.step, min: 0.0001, max: 1, step: 0.0001, format: (v) => v.toFixed(4), onInput: (v) => selected.setStep(v) });
      const r = document.createElement('div'); r.className = 'irow'; r.appendChild(s.el); inspector.appendChild(r);
      return;
    }
    return renderNodeInspector(selected.node);
  }
  /** @param {string} t */ function hintRow(t) { const e = document.createElement('div'); e.className = 'ihint'; e.textContent = t; inspector.appendChild(e); }
  /** @param {string} t */ function titleRow(t) { const e = document.createElement('div'); e.className = 'ititle'; e.textContent = t; inspector.appendChild(e); }
  // projection controls — shared by bench params (inspector) and heart params (when selected). The
  // [0,1] signal is the standard; display-type projects it to the mapped output range + unit.
  /** @param {any} sp @param {Record<string,any>} props @param {string} title */
  function renderParamProps(sp, props, title) {
    titleRow(title);
    const row = (/** @type {HTMLElement} */ el) => { const r = document.createElement('div'); r.className = 'irow'; r.appendChild(el); inspector.appendChild(r); };
    row(createSelector({ options: ['0–1', 'output'], value: props.showMapped ? 'output' : '0–1', onChange: (v) => { props.showMapped = v === 'output'; sp.setDisplay(props.showMapped); } }).el);
    row(createToggle({ label: 'cyclic (wrap)', value: !!props.wrap, onChange: (v) => { props.wrap = v; sp.setWrap(v); } }).el);
    row(createScrub({ label: 'out min', value: Number(props.outMin) || 0, step: 0.01, onInput: (v) => { props.outMin = v; sp.setOutput({ outMin: v }); } }).el);
    row(createScrub({ label: 'out max', value: Number(props.outMax) || 0, step: 0.01, onInput: (v) => { props.outMax = v; sp.setOutput({ outMax: v }); } }).el);
    row(createToggle({ label: 'log', value: !!props.outLog, onChange: (v) => { props.outLog = v; sp.setOutput({ outLog: v }); } }).el);
    row(createField({ label: 'unit', value: String(props.unit ?? ''), onInput: (v) => { props.unit = v; sp.setOutput({ unit: v }); } }).el);
  }
  /** @param {Node} node */
  function renderNodeInspector(node) {
    titleRow(node.type + (node.part.container ? ' · layout' : '') + (node.parent ? ' · in ' + node.parent.type : ''));
    const apply = () => { if (node.part.container) updateContainer(node); else node.rebuild(); if (focused === node) focus(node); };
    if (node.part.container) {   // layout selector — the container's arrangement, applied live
      const lsel = createSelector({ options: ['stack', 'row', 'grid', 'dropdown'], value: node.props.layout || 'stack',
        onChange: (v) => { node.props.layout = v; apply(); } });
      const lr = document.createElement('div'); lr.className = 'irow'; lr.appendChild(lsel.el); inspector.appendChild(lr);
    }
    for (const f of node.part.fields) propRow(f, node.props, apply);
    if (node.type === 'param' && node.sp) renderParamProps(node.sp, node.props, 'output');   // display-type + range + log + unit
    if (node.part.drivable && node.type !== 'param') {     // non-param drivables (slider): drive + period (param drive lives on the name)
      titleRow('clock');
      const dr = createToggle({ label: 'drive', value: node.driven, onChange: (v) => { node.driven = v; node.reflectDrive?.(v); } });
      const r = document.createElement('div'); r.className = 'irow'; r.appendChild(dr.el); inspector.appendChild(r);
      const pr = createScrub({ label: 'period', value: node.clk.period, min: 0.05, max: 60, step: 0.01, log: true, format: (v) => v.toFixed(2), onInput: (v) => { node.clk.period = v; } });
      const r2 = document.createElement('div'); r2.className = 'irow'; r2.appendChild(pr.el); inspector.appendChild(r2);
    }
    if (node.type === 'param' && node.sp) {                 // smart-param feel knobs — tune the drag live
      titleRow('feel');
      const f = node.sp.feel;
      /** @param {string} label @param {string} key @param {import('./scrub.js').ScrubOpts} o */
      const knob = (label, key, o) => { const s = createScrub({ label, value: f[key], ...o, onInput: (v) => { f[key] = v; node.sp.updateDebug(); } }); const r = document.createElement('div'); r.className = 'irow'; r.appendChild(s.el); inspector.appendChild(r); };
      knob('pad size', 'padW', { min: 40, max: 1600, step: 1, snap: 1, format: (x) => x.toFixed(0) + 'px' });
      knob('fine ramp', 'vBase', { min: 1.05, max: 50, step: 0.01, format: (x) => x.toFixed(2) + '×' });
      knob('ramp px', 'vpx', { min: 20, max: 800, step: 1, snap: 1, format: (x) => x.toFixed(0) + 'px' });
      const sr = createToggle({ label: 'sat readout', value: !!f.satReadout, onChange: (v) => { f.satReadout = v; node.sp.repaint(); } });
      const rsr = document.createElement('div'); rsr.className = 'irow'; rsr.appendChild(sr.el); inspector.appendChild(rsr);
      knob('sat base', 'satBase', { min: 0, max: 100, step: 1, snap: 1, format: (x) => x.toFixed(0) });
      knob('sat span', 'satSpan', { min: 0, max: 40, step: 0.5, format: (x) => x.toFixed(1) });
      // the debug overlay is a global toolbar toggle (it follows the focused param) — not here.
    }
    const del = createButton({ label: 'delete', onClick: () => remove(node) }); del.el.classList.add('idelete'); inspector.appendChild(del.el);
  }
  function renderScopeInspector() {
    titleRow('scope');
    const ch = createSelector({ options: ['1 ch', '2 ch', '3 ch', '4 ch'], value: scopeProps.channels + ' ch',
      onChange: (v) => { scopeProps.channels = parseInt(v, 10) || 1; scope.setChannels(/** @type {1|2|3|4} */(scopeProps.channels)); } });
    const r = document.createElement('div'); r.className = 'irow'; r.appendChild(ch.el); inspector.appendChild(r);
    const rd = createSelector({ options: ['line', 'beam'], value: scopeProps.readout,
      onChange: (v) => { scopeProps.readout = /** @type {'line'|'beam'} */ (v); scope.setReadout(scopeProps.readout); } });
    const r2 = document.createElement('div'); r2.className = 'irow'; r2.appendChild(rd.el); inspector.appendChild(r2);
    const lay = createSelector({ options: ['stack', 'row'], value: scopeProps.layout,
      onChange: (v) => { scopeProps.layout = /** @type {'stack'|'row'} */ (v); scope.setLayout(scopeProps.layout); } });
    const r3 = document.createElement('div'); r3.className = 'irow'; r3.appendChild(lay.el); inspector.appendChild(r3);
    // beam-only knobs — mirror the hardware scope (INTEN · FOCUS · TIME/CM) + phosphor glow. (No-ops in 'line'.)
    const inten = createScrub({ label: 'inten', value: scopeProps.inten, min: 0.1, max: 2, step: 0.05,
      format: (v) => v.toFixed(2), onInput: (v) => { scopeProps.inten = v; scope.setIntensity(v); } });
    const r4 = document.createElement('div'); r4.className = 'irow'; r4.appendChild(inten.el); inspector.appendChild(r4);
    const foc = createScrub({ label: 'focus', value: scopeProps.focus, min: 0.5, max: 4, step: 0.1,
      format: (v) => v.toFixed(1) + 'px', onInput: (v) => { scopeProps.focus = v; scope.setFocus(v); } });
    const r5 = document.createElement('div'); r5.className = 'irow'; r5.appendChild(foc.el); inspector.appendChild(r5);
    const tcm = createScrub({ label: 'time/cm', value: scopeProps.sweep, min: 0.05, max: 2, step: 0.05,
      format: (v) => v.toFixed(2) + 's', onInput: (v) => { scopeProps.sweep = v; scope.setSweepPeriod(v); } });
    const r6 = document.createElement('div'); r6.className = 'irow'; r6.appendChild(tcm.el); inspector.appendChild(r6);
    const ps = createScrub({ label: 'persist', value: scopeProps.persistence, min: 0.05, max: 3, step: 0.05,
      format: (v) => v.toFixed(2) + 's', onInput: (v) => { scopeProps.persistence = v; scope.setPersistence(v); } });
    const r7 = document.createElement('div'); r7.className = 'irow'; r7.appendChild(ps.el); inspector.appendChild(r7);
  }
  /** @param {Zone} zone */
  function renderZoneInspector(zone) {
    titleRow(zone.name + ' · pool');
    const arr = createSelector({ options: ['stack', 'row', 'grid'], value: zone.props.arrange, onChange: (v) => { zone.props.arrange = v; styleArrange(zone.body, /** @type {'stack'|'row'|'grid'} */(v), zone.props); } });
    const r1 = document.createElement('div'); r1.className = 'irow'; r1.appendChild(arr.el); inspector.appendChild(r1);
    const gap = createScrub({ label: 'gap', value: zone.props.gap ?? 10, min: 0, max: 60, step: 1, snap: 1, format: (v) => v.toFixed(0), onInput: (v) => { zone.props.gap = v; styleArrange(zone.body, zone.props.arrange, zone.props); } });
    const r2 = document.createElement('div'); r2.className = 'irow'; r2.appendChild(gap.el); inspector.appendChild(r2);
  }
  /** @param {Node} node */
  function updateContainer(node) {
    if (!node.body) return;
    const ly = node.props.layout || 'stack';
    const frame = /** @type {HTMLElement} */ (node.body.parentElement);   // the .cont
    frame.className = 'cont cont-' + ly;
    const head = frame.querySelector(':scope > .chead');                  // present iff dropdown
    if (ly === 'dropdown' && !head) frame.insertBefore(makeDropdownHead(node.props.title, frame), node.body);
    else if (ly !== 'dropdown' && head) { head.remove(); frame.classList.remove('closed'); }
    else if (head) { const t = head.querySelector('.ctitle'); if (t) t.textContent = node.props.title; }
    styleArrange(node.body, ly === 'grid' ? 'grid' : ly === 'row' ? 'row' : 'stack', node.props);
  }
  /** @param {FieldSpec} f @param {Record<string,any>} props @param {()=>void} apply */
  function propRow(f, props, apply) {
    const row = document.createElement('div'); row.className = 'irow';
    if (f.kind === 'bool') row.appendChild(createToggle({ label: f.k, value: !!props[f.k], onChange: (v) => { props[f.k] = v; apply(); } }).el);
    else if (f.kind === 'num') row.appendChild(createScrub({ label: f.k, value: Number(props[f.k]) || 0, step: 0.01, onInput: (v) => { props[f.k] = v; apply(); } }).el);
    else row.appendChild(createField({ label: f.k, value: String(props[f.k] ?? ''), onInput: (v) => { props[f.k] = v; apply(); } }).el);
    inspector.appendChild(row);
  }

  // ── autosave: the floor persists across reload (localStorage). Serializes the layout tree
  //    (parts + their props + each drivable's drive/ratio/multiplier/offset) and the scope's
  //    channel count. A dirty-check tick saves only when the snapshot changed; beforeunload
  //    catches the last edit. Heart settings + mode are NOT persisted yet (deferred). ──
  const SAVE_KEY = 'kit.workbench.v1';
  /** Walk pools depth-first → ordered records; a parent always precedes its children. */
  function serialize() {
    /** @type {any[]} */ const recs = []; let serial = 0;
    /** @param {HTMLElement} body @param {any} parent */
    const walk = (body, parent) => {
      for (const child of Array.from(body.children)) {
        if (!(child instanceof HTMLElement) || !child.classList.contains('node')) continue;
        const n = nodes.find((x) => x.el === child); if (!n) continue;
        const sid = serial++;
        /** @type {any} */ const rec = { sid, type: n.type, props: { ...n.props }, parent };
        if (n.part.drivable) { rec.driven = !!n.driven; rec.ratio = n.ratio ?? 1; rec.multiplier = n.multiplier ?? 1; rec.offset = n.clk.phase0 ?? 0; }
        recs.push(rec);
        if (n.body) walk(/** @type {HTMLElement} */(n.body), { kind: 'node', sid });
      }
    };
    for (const pool of pools) walk(pool.body, { kind: 'pool', name: pool.name });
    return { v: 1, channels: scopeProps.channels, readout: scopeProps.readout,
      scopeLayout: scopeProps.layout, scopePersist: scopeProps.persistence,
      scopeInten: scopeProps.inten, scopeFocus: scopeProps.focus, scopeSweep: scopeProps.sweep, nodes: recs,
      zones: pools.map((z) => ({ name: z.name, arrange: z.props.arrange, gap: z.props.gap })) };
  }
  /** Rebuild the floor from a serialized snapshot. @param {any} data */
  function restore(data) {
    if (!data || !Array.isArray(data.nodes)) return;
    /** @type {Map<number,Node>} */ const map = new Map();
    for (const rec0 of data.nodes) {
      // back-compat: the 4 old container types collapsed into one `container` + a `layout` prop.
      const rec = ['stack', 'row', 'grid', 'dropdown'].includes(rec0.type)
        ? { ...rec0, type: 'container', props: { layout: rec0.type, ...rec0.props } }
        : rec0;
      const part = PARTS.find((p) => p.type === rec.type); if (!part) continue;
      let body = poolL.body;
      if (rec.parent?.kind === 'pool') { const pool = pools.find((z) => z.name === rec.parent.name); if (pool) body = pool.body; }
      else if (rec.parent?.kind === 'node') { const par = map.get(rec.parent.sid); if (par && par.body) body = par.body; }
      activeBody = body;
      const node = createNode(part, { props: rec.props, driven: rec.driven, ratio: rec.ratio, multiplier: rec.multiplier, offset: rec.offset });
      map.set(rec.sid, node);
    }
    if (Array.isArray(data.zones)) for (const zr of data.zones) {
      const z = pools.find((p) => p.name === zr.name);
      if (z) { if (zr.arrange) z.props.arrange = zr.arrange; if (zr.gap != null) z.props.gap = zr.gap; styleArrange(z.body, z.props.arrange, z.props); }
    }
    if (data.channels >= 1 && data.channels <= 4) { scopeProps.channels = data.channels; scope.setChannels(data.channels); }
    if (data.readout === 'beam' || data.readout === 'line') { scopeProps.readout = data.readout; scope.setReadout(data.readout); }
    if (data.scopeLayout === 'row' || data.scopeLayout === 'stack') { scopeProps.layout = data.scopeLayout; scope.setLayout(data.scopeLayout); }
    if (typeof data.scopePersist === 'number' && data.scopePersist > 0) { scopeProps.persistence = data.scopePersist; scope.setPersistence(data.scopePersist); }
    if (typeof data.scopeInten === 'number' && data.scopeInten > 0) { scopeProps.inten = data.scopeInten; scope.setIntensity(data.scopeInten); }
    if (typeof data.scopeFocus === 'number' && data.scopeFocus > 0) { scopeProps.focus = data.scopeFocus; scope.setFocus(data.scopeFocus); }
    if (typeof data.scopeSweep === 'number' && data.scopeSweep > 0) { scopeProps.sweep = data.scopeSweep; scope.setSweepPeriod(data.scopeSweep); }
  }
  let lastSaved = '';
  function save() { let s; try { s = JSON.stringify(serialize()); } catch { return; } if (s !== lastSaved) { lastSaved = s; try { localStorage.setItem(SAVE_KEY, s); } catch { /* storage full/blocked — skip */ } } }
  try { const raw = localStorage.getItem(SAVE_KEY); if (raw) { restore(JSON.parse(raw)); lastSaved = raw; } } catch { /* corrupt save — start clean */ }
  setInterval(save, 800);
  window.addEventListener('beforeunload', save);

  setActive(poolL.body);
  select(null); setMode('interact');     // default to run mode; switch to edit to arrange
}
