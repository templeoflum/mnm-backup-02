// workbench.js — the instrument bench. House layout: a CENTER scope that auto-scopes the
// param you're touching, a configurable parameter POOL down each side. No wiring — selecting
// (edit) or touching (interact) a param points the scope at it; it stays until the next one.
//
// Pools hold a composable LAYOUT TREE: drop stack / row / grid / dropdown containers and nest
// them; controls slot into the active container. Drag any part to reorder or move it.
// Two modes: edit (arrange/tune) · interact (run; the scope shows live output).

import { createScrub } from './scrub.js';
import { createButton } from './button.js';
import { createToggle } from './toggle.js';
import { createSelector } from './selector.js';
import { createPad } from './pad.js';
import { createField } from './field.js';
import { createScope } from './scope.js';
import { createSmartParam } from './smartparam.js';
import { createBinding } from './binding.js';
import { clock, phaseAt } from './clock.js';
import { unitCircle, setFrequency, setPhase0, setTimeScale, setPlaying, setRadixN, setScrub, heartState, heartPeriod } from './unit-circle.js';

/** @typedef {{ k:string, kind:'text'|'num'|'bool' }} FieldSpec */
/** @typedef {{ type:string, container?:boolean, drivable?:boolean, props:Record<string,any>, fields:FieldSpec[], build:(p:Record<string,any>, node:Node)=>HTMLElement }} Part */
/** @typedef {{ get:()=>number, set:(v:number)=>void, subscribe:(fn:(v:number)=>void)=>(()=>void) }} NumBinding */
/** @typedef {{ name:string, el:HTMLElement, body:HTMLElement, props:Record<string,any> }} Zone */
/** @typedef {{ id:number, type:string, part:Part, props:Record<string,any>, el:HTMLElement, inner:HTMLElement,
 *   parent:Node|null, body:HTMLElement|null, out:NumBinding, outY:(()=>number)|null, sink:((v:number)=>void)|null, rebuild:()=>void,
 *   clk:{period:number,phase0:number}, driven:boolean, setValue:((v:number)=>void)|null, reflectDrive?:((d:boolean)=>void)|null, ratio?:number }} Node */

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

/** @param {string} type @param {Record<string,any>} p @param {Node} node */
function buildContainer(type, p, node) {
  const frame = document.createElement('div'); frame.className = 'cont cont-' + type;
  const body = document.createElement('div'); body.className = 'cbody';
  if (type === 'dropdown') {
    const head = document.createElement('div'); head.className = 'chead';
    const caret = document.createElement('span'); caret.className = 'ccaret'; caret.textContent = '▾';
    const ttl = document.createElement('span'); ttl.className = 'ctitle'; ttl.textContent = p.title ?? 'group';
    head.appendChild(caret); head.appendChild(ttl);
    head.addEventListener('click', (e) => { e.stopPropagation(); frame.classList.toggle('closed'); });
    frame.appendChild(head);
  }
  frame.appendChild(body);
  styleArrange(body, type === 'grid' ? 'grid' : type === 'row' ? 'row' : 'stack', p);
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
    build: (p, n) => { const s = createScrub({ label: p.label, min: p.min, max: p.max, value: p.value, step: p.step, onInput: (v) => n.out.set(v) }); n.setValue = s.set; return s.el; } },
  { type: 'selector', props: { options: 'sine,tri,saw' }, fields: [{ k: 'options', kind: 'text' }],
    build: (p, n) => { const opts = String(p.options).split(',').map((s) => s.trim());   // N states across [0,1]
      return createSelector({ options: opts, onChange: (_v, i) => n.out.set(opts.length > 1 ? i / (opts.length - 1) : 0) }).el; } },
  { type: 'pad', props: {}, fields: [], build: (_p, n) => { const pd = createPad({ onInput: (v) => n.out.set(v.x) }); n.outY = () => pd.get().y; return pd.el; } },   // x → out (ch A), y → outY (ch B)
  { type: 'field', props: { label: 'name', placeholder: 'type…' }, fields: [{ k: 'label', kind: 'text' }, { k: 'placeholder', kind: 'text' }],
    build: (p) => createField({ label: p.label, placeholder: p.placeholder }).el },
  { type: 'param', drivable: true, props: { label: 'param', min: 0, max: 1, value: 0.5, step: 0.01 },   // THE smart parameter (frame.smartparam.f0)
    fields: [{ k: 'label', kind: 'text' }, { k: 'min', kind: 'num' }, { k: 'max', kind: 'num' }, { k: 'value', kind: 'num' }, { k: 'step', kind: 'num' }],
    build: (p, n) => { const sp = createSmartParam({ label: p.label, min: p.min, max: p.max, value: p.value, step: p.step, driven: n.driven, ratio: n.ratio ?? 1,
      onInput: (v) => n.out.set(v), onDrive: (d) => { n.driven = d; },
      onConfig: ({ ratio, offset, min, max }) => { n.ratio = ratio; n.clk.phase0 = offset; n.props.min = min; n.props.max = max; } }); n.setValue = sp.set; n.reflectDrive = sp.setDriven; return sp.el; } },
  // layout containers (nestable) ──
  { type: 'stack', container: true, props: { gap: 10 }, fields: [{ k: 'gap', kind: 'num' }], build: (p, n) => buildContainer('stack', p, n) },
  { type: 'row', container: true, props: { gap: 10 }, fields: [{ k: 'gap', kind: 'num' }], build: (p, n) => buildContainer('row', p, n) },
  { type: 'grid', container: true, props: { cols: 2, rows: 0, gap: 10 }, fields: [{ k: 'cols', kind: 'num' }, { k: 'rows', kind: 'num' }, { k: 'gap', kind: 'num' }], build: (p, n) => buildContainer('grid', p, n) },
  { type: 'dropdown', container: true, props: { title: 'group', gap: 10 }, fields: [{ k: 'title', kind: 'text' }, { k: 'gap', kind: 'num' }], build: (p, n) => buildContainer('dropdown', p, n) },
];

/** Boot the workbench.
 * @param {HTMLElement} toolbar @param {HTMLElement} palette @param {HTMLElement} canvas @param {HTMLElement} inspector */
export function initWorkbench(toolbar, palette, canvas, inspector) {
  /** @type {Node[]} */ const nodes = [];
  /** @type {Map<HTMLElement, {kind:'zone',zone:Zone}|{kind:'node',node:Node}>} */ const bodyOwner = new Map();
  /** @type {{kind:'node',node:Node}|{kind:'zone',zone:Zone}|{kind:'scope'}|null} */ let selected = null;
  /** @type {Node|null} */ let focused = null;
  /** @type {HTMLElement} */ let activeBody;
  /** @type {'edit'|'interact'} */ let mode = 'edit';
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
    body.addEventListener('pointerdown', (e) => { if (e.target === body && mode === 'edit') { setActive(body); select({ kind: 'zone', zone: z }); } });
    return z;
  }
  const poolL = buildPool('pool', 'left', { arrange: 'stack', gap: 10 });
  const center = document.createElement('div'); center.className = 'zone center';
  const chead = document.createElement('div'); chead.className = 'zhead'; chead.textContent = 'scope · —';
  const scope = createScope({ min: 0, max: 1, width: 560, height: 240 });
  scope.el.style.width = '100%'; scope.el.style.height = 'calc(100% - 22px)';
  center.appendChild(chead); center.appendChild(scope.el); canvas.appendChild(center);
  const scopeProps = { channels: 1 };                         // the scope's own tunables (its properties panel)
  chead.addEventListener('pointerdown', (e) => { e.stopPropagation(); select({ kind: 'scope' }); });
  // the HEART zone (replaces the right pool): the unit-circle VISUAL pinned + always visible,
  // driven by our own scrub controls. the heart is the master clock — every param's ratio is
  // relative to it. just the visual; no readout/proof text, controls in our ecosystem's form.
  const clockZone = document.createElement('div'); clockZone.className = 'zone clockz';
  const clkHead = document.createElement('div'); clkHead.className = 'zhead'; clkHead.textContent = 'heart';
  const clkCanvas = document.createElement('canvas'); clkCanvas.width = 320; clkCanvas.height = 320; clkCanvas.className = 'clockface';
  const clkParams = document.createElement('div'); clkParams.className = 'heartparams';
  clockZone.append(clkHead, clkCanvas, clkParams);
  canvas.appendChild(clockZone);

  // our-form (scrub) controls driving the heart — a 3×2 grid laid out with INLINE styles
  // (no stylesheet dependency, so it reloads with the JS and overrides any stale cached CSS).
  // cols 1–2 hold the four params (2×2); the far-right column is play (top) + scrub (bottom).
  const hs = heartState();
  const grid = document.createElement('div'); grid.className = 'heartgrid';
  grid.style.cssText = 'display:grid;grid-template-columns:repeat(3,minmax(0,1fr));grid-template-rows:auto auto;gap:8px;align-items:stretch;';
  /** @param {HTMLElement} el @param {number} col @param {number} row */
  const place = (el, col, row) => { el.style.width = '100%'; el.style.gridColumn = String(col); el.style.gridRow = String(row); grid.appendChild(el); };
  /** @param {string} label @param {import('./scrub.js').ScrubOpts} opts @param {number} v @param {(n:number)=>void} on @param {number} col @param {number} row */
  const heartScrub = (label, opts, v, on, col, row) => { const s = createScrub({ ...opts, label, value: v, onInput: on }); place(s.el, col, row); };
  heartScrub('speed', { min: 0.01, max: 10000, step: 0.01, log: true, format: (x) => x < 1000 ? x.toFixed(2) + ' Hz' : (x / 1000).toFixed(2) + ' kHz' }, hs.freq, setFrequency, 1, 1);
  heartScrub('radix', { min: 2, max: 16, step: 0.01, format: (x) => x.toFixed(3) }, hs.radix, setRadixN, 2, 1);
  heartScrub('phase₀', { min: 0, max: 1, step: 0.001, format: (x) => x.toFixed(3) }, hs.phase0, setPhase0, 1, 2);
  heartScrub('playback', { min: -3, max: 3, step: 0.01, format: (x) => x.toFixed(2) + '×' }, hs.timeScale, setTimeScale, 2, 2);
  let hbPlaying = true;
  const hbBtn = createButton({ label: 'pause', onClick: () => { hbPlaying = !hbPlaying; setPlaying(hbPlaying); hbBtn.el.textContent = hbPlaying ? 'pause' : 'play'; } });
  place(hbBtn.el, 3, 1);   // play — top-right
  const scrubCtl = createScrub({ label: 'scrub', min: 0, max: 1, step: 0.0005, format: (x) => x.toFixed(4), onInput: setScrub });
  place(scrubCtl.el, 3, 2);   // scrub — bottom-right
  clkParams.appendChild(grid);

  // mount the visual on its own WebGPU harness (just the shader render)
  const dummy = document.createElement('div');
  (async function mountHeart() {
    if (!navigator.gpu) { clkHead.textContent = 'heart · no WebGPU'; return; }
    const adapter = await navigator.gpu.requestAdapter();
    if (!adapter) { clkHead.textContent = 'heart · no GPU'; return; }
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
  /** @param {Node|null} n */
  function focus(n) {
    focused = n;
    if (n) { scope.setRange(Number(n.props.min ?? 0), Number(n.props.max ?? 1)); chead.textContent = 'scope · ' + (n.props.label ?? n.type); }   // continuous — never clear
    else chead.textContent = 'scope · —';
  }
  // one loop: advance every driven param off the shared clock, then sample the focused one
  (function loop() {
    const t = now();
    for (const n of nodes) if (n.driven && n.setValue) {
      if (n.type === 'param') n.clk.period = Math.max(1e-4, heartPeriod() * (n.ratio ?? 1));   // smart param: one heart, by ratio
      const lo = Number(n.props.min ?? 0), hi = Number(n.props.max ?? 1); n.setValue(lo + phaseAt(n.clk, t) * (hi - lo));
    }
    const f = /** @type {Node|null} */ (focused); if (f) scope.set(Number(f.out.get()) || 0, f.outY ? f.outY() : undefined);
    requestAnimationFrame(loop);
  })();

  // ── toolbar ──
  const modesEl = document.createElement('div'); modesEl.className = 'tmode';
  /** @type {Record<string, HTMLButtonElement>} */ const modeBtns = {};
  for (const m of /** @type {('edit'|'interact')[]} */(['edit', 'interact'])) {
    const b = document.createElement('button'); b.className = 'tbtn'; b.textContent = m;
    b.addEventListener('click', () => setMode(m)); modeBtns[m] = b; modesEl.appendChild(b);
  }
  toolbar.appendChild(modesEl);
  const sep = document.createElement('div'); sep.className = 'tsep'; toolbar.appendChild(sep);
  const hint = document.createElement('div'); hint.className = 'thint'; toolbar.appendChild(hint);
  /** @param {'edit'|'interact'} m */
  function setMode(m) {
    mode = m;
    document.body.classList.remove('mode-edit', 'mode-interact'); document.body.classList.add('mode-' + m);
    for (const k in modeBtns) modeBtns[k].classList.toggle('on', k === m);
    hint.textContent = m === 'edit' ? 'arrange — pick a zone/container, drop parts, drag to reorder, select to tune' : 'live — touch a param; the scope follows it';
    if (m !== 'edit') select(null);
  }

  // ── palette → drop into the active container ──
  for (const part of PARTS) {
    const b = document.createElement('button'); b.className = 'pitem' + (part.container ? ' lay' : ''); b.textContent = part.type;
    b.addEventListener('click', () => addNode(part)); palette.appendChild(b);
  }
  /** @param {Part} part */
  function addNode(part) {
    /** @type {Node} */
    const node = { id: ids++, type: part.type, part, props: { ...part.props }, parent: null, body: null,
      el: document.createElement('div'), inner: document.createElement('div'),
      out: createBinding(/** @type {number} */(0)), outY: null, sink: null, rebuild: () => {},
      clk: clock(1, 0), driven: false, setValue: /** @type {((v:number)=>void)|null} */(null) };
    node.el.className = 'node' + (part.container ? ' isCont' : ''); node.inner.className = 'ninner'; node.el.appendChild(node.inner);
    node.rebuild = () => { node.outY = null; node.inner.innerHTML = ''; node.inner.appendChild(part.build(node.props, node)); };   // build re-sets outY for a pad
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
    node.out.subscribe(() => { if (mode === 'interact') focus(node); });
    node.el.addEventListener('pointerdown', (e) => onNodeDown(node, e));
    if (part.container) { setActive(/** @type {HTMLElement} */(node.body)); }
    select({ kind: 'node', node });
    if (!part.container) focus(node);
  }

  // ── drag-reorder / move, or click-select ──
  /** @type {HTMLElement|null} */ let dropBody = null;
  function clearDrop() { if (dropBody) dropBody.classList.remove('drop-target'); dropBody = null; }
  /** @param {Node} node @param {PointerEvent} e */
  function onNodeDown(node, e) {
    if (mode === 'interact') return;
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
  /** @param {{kind:'node',node:Node}|{kind:'zone',zone:Zone}|null} s */
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
    if (!selected) { hintRow('nothing selected · pick a zone, drop a part'); return; }
    if (selected.kind === 'scope') return renderScopeInspector();
    if (selected.kind === 'zone') return renderZoneInspector(selected.zone);
    return renderNodeInspector(selected.node);
  }
  /** @param {string} t */ function hintRow(t) { const e = document.createElement('div'); e.className = 'ihint'; e.textContent = t; inspector.appendChild(e); }
  /** @param {string} t */ function titleRow(t) { const e = document.createElement('div'); e.className = 'ititle'; e.textContent = t; inspector.appendChild(e); }
  /** @param {Node} node */
  function renderNodeInspector(node) {
    titleRow(node.type + (node.part.container ? ' · layout' : '') + (node.parent ? ' · in ' + node.parent.type : ''));
    const apply = () => { if (node.part.container) updateContainer(node); else node.rebuild(); if (focused === node) focus(node); };
    for (const f of node.part.fields) propRow(f, node.props, apply);
    if (node.part.drivable) {                              // clock controls: run this param off the shared time
      titleRow('clock');
      const dr = createToggle({ label: 'drive', value: node.driven, onChange: (v) => { node.driven = v; node.reflectDrive?.(v); } });
      const r = document.createElement('div'); r.className = 'irow'; r.appendChild(dr.el); inspector.appendChild(r);
      const pr = createScrub({ label: 'period', value: node.clk.period, min: 0.05, max: 60, step: 0.01, log: true, format: (v) => v.toFixed(2), onInput: (v) => { node.clk.period = v; } });
      const r2 = document.createElement('div'); r2.className = 'irow'; r2.appendChild(pr.el); inspector.appendChild(r2);
    }
    const del = createButton({ label: 'delete', onClick: () => remove(node) }); del.el.classList.add('idelete'); inspector.appendChild(del.el);
  }
  function renderScopeInspector() {
    titleRow('scope');
    const ch = createSelector({ options: ['1 ch', '2 ch'], value: scopeProps.channels === 2 ? '2 ch' : '1 ch',
      onChange: (v) => { scopeProps.channels = v === '2 ch' ? 2 : 1; scope.setChannels(/** @type {1|2} */(scopeProps.channels)); } });
    const r = document.createElement('div'); r.className = 'irow'; r.appendChild(ch.el); inspector.appendChild(r);
    hintRow('2 ch — stacked lanes: A top, B bottom (an XY pad reads x in A, y in B)');
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
    if (node.body) styleArrange(node.body, node.type === 'grid' ? 'grid' : node.type === 'row' ? 'row' : 'stack', node.props);
    if (node.type === 'dropdown') { const t = node.inner.querySelector('.ctitle'); if (t) t.textContent = node.props.title; }
  }
  /** @param {FieldSpec} f @param {Record<string,any>} props @param {()=>void} apply */
  function propRow(f, props, apply) {
    const row = document.createElement('div'); row.className = 'irow';
    if (f.kind === 'bool') row.appendChild(createToggle({ label: f.k, value: !!props[f.k], onChange: (v) => { props[f.k] = v; apply(); } }).el);
    else if (f.kind === 'num') row.appendChild(createScrub({ label: f.k, value: Number(props[f.k]) || 0, step: 0.01, onInput: (v) => { props[f.k] = v; apply(); } }).el);
    else row.appendChild(createField({ label: f.k, value: String(props[f.k] ?? ''), onInput: (v) => { props[f.k] = v; apply(); } }).el);
    inspector.appendChild(row);
  }

  select(null); setMode('edit');
}
