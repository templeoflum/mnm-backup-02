// workbench.js — the instrument bench. The house layout: one CENTER canvas readout, a
// configurable parameter POOL down each side. You design by slotting parts into the pools
// and the center; no fiddly free placement. Three modes (toolbar):
//   edit     — arrange: drop parts into the active zone, tune properties, configure zones
//   wire     — connect: click a control, then a display, to pipe its value across
//   interact — run: the parts come alive; wired scopes show real output (tune by feel)
//
// Parts slot into ZONES. Each zone is a configurable layout (row/stack/grid). Leaf parts are
// inert in edit/wire (you're designing them); they come alive in interact.

import { createScrub } from './scrub.js';
import { createButton } from './button.js';
import { createToggle } from './toggle.js';
import { createSelector } from './selector.js';
import { createPad } from './pad.js';
import { createField } from './field.js';
import { createReadout } from './readout.js';
import { createMeter } from './meter.js';
import { createScope } from './scope.js';
import { createBinding } from './binding.js';

/** @typedef {{ k:string, kind:'text'|'num'|'bool' }} FieldSpec */
/** @typedef {{ type:string, props:Record<string,any>, fields:FieldSpec[], build:(p:Record<string,any>, node:Node)=>HTMLElement }} Part */
/** @typedef {{ get:()=>number, set:(v:number)=>void, subscribe:(fn:(v:number)=>void)=>(()=>void) }} NumBinding */
/** @typedef {{ name:string, el:HTMLElement, body:HTMLElement, head:HTMLElement, props:Record<string,any> }} Zone */
/** @typedef {{ id:number, type:string, part:Part, props:Record<string,any>, el:HTMLElement, inner:HTMLElement,
 *   zone:Zone|null, out:NumBinding, sink:((v:number)=>void)|null, rebuild:()=>void }} Node */

/** @type {Part[]} */
const PARTS = [
  { type: 'button', props: { label: 'button' }, fields: [{ k: 'label', kind: 'text' }],
    build: (p, n) => createButton({ label: p.label, onClick: () => n.out.set((Number(n.out.get()) || 0) + 1) }).el },
  { type: 'toggle', props: { label: 'toggle', value: true }, fields: [{ k: 'label', kind: 'text' }, { k: 'value', kind: 'bool' }],
    build: (p, n) => createToggle({ label: p.label, value: !!p.value, onChange: (v) => n.out.set(v ? 1 : 0) }).el },
  { type: 'slider', props: { label: 'x', min: 0, max: 1, value: 0.5, step: 0.01 },
    fields: [{ k: 'label', kind: 'text' }, { k: 'min', kind: 'num' }, { k: 'max', kind: 'num' }, { k: 'value', kind: 'num' }, { k: 'step', kind: 'num' }],
    build: (p, n) => createScrub({ label: p.label, min: p.min, max: p.max, value: p.value, step: p.step, onInput: (v) => n.out.set(v) }).el },
  { type: 'selector', props: { options: 'sine,tri,saw' }, fields: [{ k: 'options', kind: 'text' }],
    build: (p, n) => createSelector({ options: String(p.options).split(',').map((s) => s.trim()), onChange: (_v, i) => n.out.set(i) }).el },
  { type: 'pad', props: {}, fields: [], build: (_p, n) => createPad({ onInput: (v) => n.out.set(v.x) }).el },
  { type: 'field', props: { label: 'name', placeholder: 'type…' }, fields: [{ k: 'label', kind: 'text' }, { k: 'placeholder', kind: 'text' }],
    build: (p) => createField({ label: p.label, placeholder: p.placeholder }).el },
  { type: 'readout', props: { label: 'value' }, fields: [{ k: 'label', kind: 'text' }],
    build: (p, n) => { const r = createReadout({ label: p.label, format: (v) => Number(v).toFixed(2) }); n.sink = (v) => r.set(v); return r.el; } },
  { type: 'meter', props: { min: 0, max: 1 }, fields: [{ k: 'min', kind: 'num' }, { k: 'max', kind: 'num' }],
    build: (p, n) => { const m = createMeter({ min: p.min, max: p.max }); n.sink = (v) => m.set(v); return m.el; } },
  { type: 'scope', props: { min: 0, max: 1, width: 240, height: 120 }, fields: [{ k: 'min', kind: 'num' }, { k: 'max', kind: 'num' }, { k: 'width', kind: 'num' }, { k: 'height', kind: 'num' }],
    build: (p, n) => { const s = createScope({ min: p.min, max: p.max, width: p.width, height: p.height }); n.sink = (v) => s.set(v); return s.el; } },
];

/** Style a zone's body per its arrange/gap props. @param {Zone} z */
function arrangeZone(z) {
  const b = z.body, p = z.props;
  b.style.display = p.arrange === 'grid' ? 'grid' : 'flex';
  b.style.gap = (p.gap ?? 10) + 'px';
  if (p.arrange === 'grid') { b.style.gridTemplateColumns = 'repeat(auto-fill, max-content)'; }
  else if (p.arrange === 'row') { b.style.flexDirection = 'row'; b.style.flexWrap = 'wrap'; b.style.alignItems = 'flex-start'; }
  else { b.style.flexDirection = 'column'; b.style.alignItems = 'flex-start'; }   // stack (default)
}

/** Boot the workbench.
 * @param {HTMLElement} toolbar @param {HTMLElement} palette @param {HTMLElement} canvas @param {HTMLElement} inspector */
export function initWorkbench(toolbar, palette, canvas, inspector) {
  /** @type {Node[]} */ const nodes = [];
  /** @type {{from:Node,to:Node,unsub:()=>void}[]} */ const conns = [];
  /** @type {{kind:'node',node:Node}|{kind:'zone',zone:Zone}|null} */ let selected = null;
  /** @type {Node|null} */ let wireFrom = null;
  /** @type {'edit'|'wire'|'interact'} */ let mode = 'edit';
  let ids = 0;

  // ── the three zones ──
  /** @param {string} name @param {string} cls @param {Record<string,any>} props */
  function buildZone(name, cls, props) {
    const el = document.createElement('div'); el.className = 'zone ' + cls;
    const head = document.createElement('div'); head.className = 'zhead'; head.textContent = name;
    const body = document.createElement('div'); body.className = 'zbody';
    el.appendChild(head); el.appendChild(body); canvas.appendChild(el);
    /** @type {Zone} */ const z = { name, el, body, head, props };
    arrangeZone(z);
    head.addEventListener('pointerdown', (e) => { e.stopPropagation(); active = z; markActive(); selectZone(z); });
    body.addEventListener('pointerdown', (e) => { if (e.target === body) { active = z; markActive(); selectZone(z); } });
    return z;
  }
  const zoneL = buildZone('left pool', 'left', { arrange: 'stack', gap: 10 });
  const zoneC = buildZone('canvas', 'center', { arrange: 'stack', gap: 12 });
  const zoneR = buildZone('right pool', 'right', { arrange: 'stack', gap: 10 });
  const zones = [zoneL, zoneC, zoneR];
  let active = zoneL;
  function markActive() { for (const z of zones) z.el.classList.toggle('active', z === active); }
  markActive();

  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.id = 'wires'; canvas.appendChild(svg);

  // ── toolbar ──
  const modesEl = document.createElement('div'); modesEl.className = 'tmode';
  /** @type {Record<string, HTMLButtonElement>} */ const modeBtns = {};
  for (const m of /** @type {('edit'|'wire'|'interact')[]} */(['edit', 'wire', 'interact'])) {
    const b = document.createElement('button'); b.className = 'tbtn'; b.textContent = m;
    b.addEventListener('click', () => setMode(m)); modeBtns[m] = b; modesEl.appendChild(b);
  }
  toolbar.appendChild(modesEl);
  const sep = document.createElement('div'); sep.className = 'tsep'; toolbar.appendChild(sep);
  const hint = document.createElement('div'); hint.className = 'thint'; toolbar.appendChild(hint);
  /** @param {'edit'|'wire'|'interact'} m */
  function setMode(m) {
    mode = m; clearWireFrom();
    document.body.classList.remove('mode-edit', 'mode-wire', 'mode-interact');
    document.body.classList.add('mode-' + m);
    for (const k in modeBtns) modeBtns[k].classList.toggle('on', k === m);
    hint.textContent = m === 'edit' ? 'arrange — pick a zone, drop parts, select to tune'
      : m === 'wire' ? 'connect — click a control, then a display'
        : 'live — parts work; wired scopes show output';
    if (m !== 'edit') select(null);
    redrawWires();
  }

  // ── palette → drop into the active zone ──
  for (const part of PARTS) {
    const b = document.createElement('button'); b.className = 'pitem'; b.textContent = part.type;
    b.addEventListener('click', () => addNode(part)); palette.appendChild(b);
  }
  /** @param {Part} part */
  function addNode(part) {
    /** @type {Node} */
    const node = { id: ids++, type: part.type, part, props: { ...part.props },
      el: document.createElement('div'), inner: document.createElement('div'),
      zone: active, out: createBinding(/** @type {number} */(0)), sink: null, rebuild: () => {} };
    node.el.className = 'node'; node.inner.className = 'ninner'; node.el.appendChild(node.inner);
    node.rebuild = () => { node.inner.innerHTML = ''; node.inner.appendChild(part.build(node.props, node)); };
    node.rebuild();
    active.body.appendChild(node.el);
    nodes.push(node);
    node.el.addEventListener('pointerdown', (e) => onNodeDown(node, e));
    select({ kind: 'node', node });
  }

  /** @param {Node} node @param {PointerEvent} e */
  function onNodeDown(node, e) {
    if (mode === 'interact') return;
    e.stopPropagation();
    if (mode === 'wire') { onWireClick(node); return; }
    select({ kind: 'node', node });
  }

  // ── wiring ──
  function clearWireFrom() { if (wireFrom) wireFrom.el.classList.remove('wire-from'); wireFrom = null; }
  /** @param {Node} node */
  function onWireClick(node) {
    if (!wireFrom) { wireFrom = node; node.el.classList.add('wire-from'); return; }
    if (node !== wireFrom && node.sink) connect(wireFrom, node);
    clearWireFrom();
  }
  /** @param {Node} from @param {Node} to */
  function connect(from, to) {
    const unsub = from.out.subscribe((v) => { if (to.sink) to.sink(typeof v === 'number' ? v : 0); });
    conns.push({ from, to, unsub }); redrawWires();
  }
  function redrawWires() {
    svg.innerHTML = '';
    const cr = canvas.getBoundingClientRect();
    /** @param {Node} n */
    const center = (n) => { const r = n.el.getBoundingClientRect(); return [r.left + r.width / 2 - cr.left, r.top + r.height / 2 - cr.top]; };
    for (const c of conns) {
      const [x1, y1] = center(c.from), [x2, y2] = center(c.to);
      const dx = Math.max(30, Math.abs(x2 - x1) * 0.4);
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`);
      path.setAttribute('fill', 'none');
      path.setAttribute('stroke', mode === 'wire' ? '#4fb8e8' : 'rgba(79,184,232,0.35)');
      path.setAttribute('stroke-width', '1.5');
      svg.appendChild(path);
    }
  }

  // ── selection ──
  /** @param {{kind:'node',node:Node}|{kind:'zone',zone:Zone}|null} s */
  function select(s) {
    selected = s;
    for (const n of nodes) n.el.classList.toggle('selected', s?.kind === 'node' && s.node === n);
    for (const z of zones) z.el.classList.toggle('selected', s?.kind === 'zone' && s.zone === z);
    renderInspector();
  }
  /** @param {Zone} z */
  function selectZone(z) { if (mode === 'edit') select({ kind: 'zone', zone: z }); }
  /** @param {Node} n */
  function remove(n) {
    for (let i = conns.length - 1; i >= 0; i--) if (conns[i].from === n || conns[i].to === n) { conns[i].unsub(); conns.splice(i, 1); }
    const i = nodes.indexOf(n); if (i >= 0) nodes.splice(i, 1);
    n.el.remove(); if (selected?.kind === 'node' && selected.node === n) select(null); redrawWires();
  }
  // Delete / Backspace removes the selected node (unless typing in a field)
  document.addEventListener('keydown', (e) => {
    if (e.target instanceof HTMLInputElement) return;
    if ((e.key === 'Delete' || e.key === 'Backspace') && selected?.kind === 'node') { e.preventDefault(); remove(selected.node); }
  });

  // ── inspector ──
  function renderInspector() {
    inspector.innerHTML = '';
    if (!selected) { hintRow('nothing selected · pick a zone, drop a part'); return; }
    if (selected.kind === 'zone') { renderZoneInspector(selected.zone); return; }
    renderNodeInspector(selected.node);
  }
  /** @param {string} t */
  function hintRow(t) { const e = document.createElement('div'); e.className = 'ihint'; e.textContent = t; inspector.appendChild(e); }
  /** @param {string} t */
  function titleRow(t) { const e = document.createElement('div'); e.className = 'ititle'; e.textContent = t; inspector.appendChild(e); }
  /** @param {Node} node */
  function renderNodeInspector(node) {
    titleRow(node.type + ' · ' + (node.zone ? node.zone.name : ''));
    for (const f of node.part.fields) {
      const apply = () => node.rebuild();
      propRow(f, node.props, apply);
    }
    const del = createButton({ label: 'delete', onClick: () => remove(node) }); del.el.classList.add('idelete'); inspector.appendChild(del.el);
  }
  /** @param {Zone} zone */
  function renderZoneInspector(zone) {
    titleRow(zone.name + ' · zone');
    const arr = createSelector({ options: ['stack', 'row', 'grid'], value: zone.props.arrange, onChange: (v) => { zone.props.arrange = v; arrangeZone(zone); redrawWires(); } });
    const r1 = document.createElement('div'); r1.className = 'irow'; r1.appendChild(arr.el); inspector.appendChild(r1);
    const gap = createScrub({ label: 'gap', value: zone.props.gap ?? 10, min: 0, max: 60, step: 1, snap: 1, format: (v) => v.toFixed(0), onInput: (v) => { zone.props.gap = v; arrangeZone(zone); redrawWires(); } });
    const r2 = document.createElement('div'); r2.className = 'irow'; r2.appendChild(gap.el); inspector.appendChild(r2);
  }
  /** @param {FieldSpec} f @param {Record<string,any>} props @param {()=>void} apply */
  function propRow(f, props, apply) {
    const row = document.createElement('div'); row.className = 'irow';
    if (f.kind === 'bool') {
      row.appendChild(createToggle({ label: f.k, value: !!props[f.k], onChange: (v) => { props[f.k] = v; apply(); } }).el);
    } else if (f.kind === 'num') {
      row.appendChild(createScrub({ label: f.k, value: Number(props[f.k]) || 0, step: 0.01, onInput: (v) => { props[f.k] = v; apply(); } }).el);
    } else {
      row.appendChild(createField({ label: f.k, value: String(props[f.k] ?? ''), onInput: (v) => { props[f.k] = v; apply(); } }).el);
    }
    inspector.appendChild(row);
  }

  select(null);
  setMode('edit');
}
