// workbench.js — the design + diagnostics bench. Hand-design a UI by direct manipulation,
// then wire parameters to displays and watch them. Three modes (toolbar):
//   edit     — arrange: drop parts, move/resize, slot into regions, tune properties
//   wire     — connect: click a control, then a display, to pipe its value across
//   interact — run: the parts come alive; wired scopes show real output (tune by feel)
//
// The atom factories are the parts bin. On the canvas leaf parts are inert in edit/wire
// (you're designing them); regions stay interactive so their children can be selected.

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
/** @typedef {{ type:string, container?:boolean, props:Record<string,any>, fields:FieldSpec[],
 *   build:(p:Record<string,any>, node:Node) => HTMLElement }} Part */
/** @typedef {{ get:()=>number, set:(v:number)=>void, subscribe:(fn:(v:number)=>void)=>(()=>void) }} NumBinding */
/** @typedef {{
 *   id:number, type:string, part:Part, props:Record<string,any>,
 *   el:HTMLElement, inner:HTMLElement, x:number, y:number, w:number, h:number,
 *   parent:Node|null, body:HTMLElement|null, out:NumBinding,
 *   sink:((v:number)=>void)|null, rebuild:()=>void
 * }} Node */

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
  { type: 'pad', props: {}, fields: [],
    build: (_p, n) => createPad({ onInput: (v) => n.out.set(v.x) }).el },
  { type: 'field', props: { label: 'name', placeholder: 'type…' }, fields: [{ k: 'label', kind: 'text' }, { k: 'placeholder', kind: 'text' }],
    build: (p) => createField({ label: p.label, placeholder: p.placeholder }).el },
  { type: 'readout', props: { label: 'value' }, fields: [{ k: 'label', kind: 'text' }],
    build: (p, n) => { const r = createReadout({ label: p.label, format: (v) => Number(v).toFixed(2) }); n.sink = (v) => r.set(v); return r.el; } },
  { type: 'meter', props: { min: 0, max: 1 }, fields: [{ k: 'min', kind: 'num' }, { k: 'max', kind: 'num' }],
    build: (p, n) => { const m = createMeter({ min: p.min, max: p.max }); n.sink = (v) => m.set(v); return m.el; } },
  { type: 'scope', props: { min: 0, max: 1 }, fields: [{ k: 'min', kind: 'num' }, { k: 'max', kind: 'num' }],
    build: (p, n) => { const s = createScope({ min: p.min, max: p.max }); n.sink = (v) => s.set(v); return s.el; } },
  { type: 'region', container: true, props: { arrange: 'row', gap: 10 }, fields: [{ k: 'arrange', kind: 'text' }, { k: 'gap', kind: 'num' }],
    build: (p, n) => { const b = document.createElement('div'); n.body = b; arrangeBody(n, p); return b; } },
];

/** Style a region's body per its arrange/gap props. @param {Node} n @param {Record<string,any>} p */
function arrangeBody(n, p) {
  const b = n.body; if (!b) return;
  b.style.width = '100%'; b.style.height = '100%'; b.style.boxSizing = 'border-box'; b.style.padding = '8px';
  b.style.gap = (p.gap ?? 10) + 'px';
  if (p.arrange === 'grid') { b.style.display = 'grid'; b.style.gridAutoFlow = 'row'; b.style.gridTemplateColumns = 'repeat(auto-fill, max-content)'; }
  else if (p.arrange === 'stack') { b.style.display = 'flex'; b.style.flexDirection = 'column'; b.style.alignItems = 'flex-start'; }
  else { b.style.display = 'flex'; b.style.flexDirection = 'row'; b.style.flexWrap = 'wrap'; b.style.alignItems = 'center'; }
}

/** @param {Part} part @param {number} id @returns {Node} */
function makeNode(part, id) {
  return {
    id, type: part.type, part, props: { ...part.props },
    el: document.createElement('div'),
    inner: document.createElement('div'),
    x: 0, y: 0, w: 0, h: 0,
    /** @type {Node|null} */ parent: null,
    /** @type {HTMLElement|null} */ body: null,
    out: createBinding(/** @type {number} */(0)),
    /** @type {((v:number)=>void)|null} */ sink: null,
    /** @type {() => void} */ rebuild: () => {},
  };
}

/** Boot the workbench.
 * @param {HTMLElement} toolbar @param {HTMLElement} palette @param {HTMLElement} canvas @param {HTMLElement} inspector */
export function initWorkbench(toolbar, palette, canvas, inspector) {
  /** @type {Node[]} */ const nodes = [];
  /** @type {{from:Node,to:Node,unsub:()=>void}[]} */ const conns = [];
  /** @type {Node|null} */ let selected = null;
  /** @type {Node|null} */ let wireFrom = null;
  /** @type {'edit'|'wire'|'interact'} */ let mode = 'edit';
  let ids = 0;

  // wire overlay (lines between connected nodes)
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('style', 'position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:5');
  canvas.appendChild(svg);

  // ── toolbar: modes ──
  const modesEl = document.createElement('div'); modesEl.className = 'tmode';
  /** @type {Record<string, HTMLButtonElement>} */ const modeBtns = {};
  for (const m of /** @type {('edit'|'wire'|'interact')[]} */(['edit', 'wire', 'interact'])) {
    const b = document.createElement('button'); b.className = 'tbtn'; b.textContent = m;
    b.addEventListener('click', () => setMode(m));
    modeBtns[m] = b; modesEl.appendChild(b);
  }
  toolbar.appendChild(modesEl);
  const sep = document.createElement('div'); sep.className = 'tsep'; toolbar.appendChild(sep);
  const hint = document.createElement('div'); hint.className = 'thint'; toolbar.appendChild(hint);
  /** @param {'edit'|'wire'|'interact'} m */
  function setMode(m) {
    mode = m; wireFrom = null;
    document.body.classList.remove('mode-edit', 'mode-wire', 'mode-interact');
    document.body.classList.add('mode-' + m);
    for (const k in modeBtns) modeBtns[k].classList.toggle('on', k === m);
    hint.textContent = m === 'edit' ? 'arrange — drop · drag to move · corner to resize · select to tune'
      : m === 'wire' ? 'connect — click a control, then a display, to pipe its value'
        : 'live — the parts work; wired scopes show output';
    if (m !== 'edit') select(null);
    redrawWires();
  }

  // ── palette ──
  for (const part of PARTS) {
    const b = document.createElement('button'); b.className = 'pitem'; b.textContent = part.type;
    b.addEventListener('click', () => addNode(part));
    palette.appendChild(b);
  }

  /** @param {Part} part */
  function addNode(part) {
    const node = makeNode(part, ids++);
    const { el, inner } = node;
    el.className = 'node' + (part.container ? ' container' : '');
    inner.className = 'ninner';
    el.appendChild(inner);
    const handle = document.createElement('div'); handle.className = 'nhandle'; el.appendChild(handle);

    node.rebuild = () => { inner.innerHTML = ''; node.body = null; inner.appendChild(part.build(node.props, node)); };
    node.rebuild();

    // slot into the selected region, else free on the canvas
    const target = (selected && selected.part.container && selected !== node) ? selected : null;
    if (target && target.body) {
      node.parent = target;
      el.classList.add('slotted');
      target.body.appendChild(el);
    } else {
      const k = nodes.filter((n) => !n.parent).length;
      node.x = 30 + (k % 8) * 26; node.y = 30 + (k % 8) * 26;
      node.w = Math.max(60, inner.offsetWidth + 8); node.h = Math.max(28, inner.offsetHeight + 8);
      canvas.appendChild(el); applyGeom(node);
    }
    nodes.push(node);

    el.addEventListener('pointerdown', (e) => onNodeDown(node, handle, e));
    handle.addEventListener('pointerdown', (e) => onResizeDown(node, handle, e));
    select(node);
  }

  /** @param {Node} node @param {HTMLElement} handle @param {PointerEvent} e */
  function onNodeDown(node, handle, e) {
    if (e.target === handle) return;
    if (mode === 'wire') { e.stopPropagation(); onWireClick(node); return; }
    if (mode !== 'edit') return;                         // interact: parts live, don't grab
    e.stopPropagation(); select(node);
    if (node.parent) return;                             // slotted nodes flow; not free-moved
    const ox = e.clientX - node.x, oy = e.clientY - node.y;
    const move = (/** @type {PointerEvent} */ ev) => { node.x = Math.round(ev.clientX - ox); node.y = Math.round(ev.clientY - oy); applyGeom(node); syncInspector(); redrawWires(); };
    const up = () => { el_off(node.el, move, up); };
    node.el.setPointerCapture(e.pointerId); node.el.addEventListener('pointermove', move); node.el.addEventListener('pointerup', up);
  }
  /** @param {Node} node @param {HTMLElement} handle @param {PointerEvent} e */
  function onResizeDown(node, handle, e) {
    if (mode !== 'edit' || node.parent) return;
    e.stopPropagation();
    const sw = node.w, sh = node.h, sx = e.clientX, sy = e.clientY;
    const move = (/** @type {PointerEvent} */ ev) => { node.w = Math.max(40, Math.round(sw + ev.clientX - sx)); node.h = Math.max(24, Math.round(sh + ev.clientY - sy)); applyGeom(node); syncInspector(); redrawWires(); };
    const up = () => { el_off(handle, move, up); };
    handle.setPointerCapture(e.pointerId); handle.addEventListener('pointermove', move); handle.addEventListener('pointerup', up);
  }
  /** @param {HTMLElement} el @param {(e:PointerEvent)=>void} move @param {()=>void} up */
  function el_off(el, move, up) { el.removeEventListener('pointermove', move); el.removeEventListener('pointerup', up); }

  /** @param {Node} n */
  function applyGeom(n) {
    if (n.parent) return;
    n.el.style.left = n.x + 'px'; n.el.style.top = n.y + 'px'; n.el.style.width = n.w + 'px'; n.el.style.height = n.h + 'px';
  }

  // ── wiring ──
  /** @param {Node} node */
  function onWireClick(node) {
    if (!wireFrom) { wireFrom = node; node.el.classList.add('wire-from'); return; }
    if (node !== wireFrom && node.sink) connect(wireFrom, node);
    if (wireFrom) wireFrom.el.classList.remove('wire-from');
    wireFrom = null;
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
      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      line.setAttribute('x1', String(x1)); line.setAttribute('y1', String(y1));
      line.setAttribute('x2', String(x2)); line.setAttribute('y2', String(y2));
      line.setAttribute('stroke', mode === 'wire' ? '#4fb8e8' : '#234');
      line.setAttribute('stroke-width', '2');
      svg.appendChild(line);
    }
  }

  /** @param {Node|null} n */
  function select(n) {
    selected = n;
    for (const m of nodes) m.el.classList.toggle('selected', m === n);
    renderInspector();
  }
  /** @param {Node} n */
  function remove(n) {
    for (let i = conns.length - 1; i >= 0; i--) if (conns[i].from === n || conns[i].to === n) { conns[i].unsub(); conns.splice(i, 1); }
    const i = nodes.indexOf(n); if (i >= 0) nodes.splice(i, 1);
    n.el.remove(); if (selected === n) select(null); redrawWires();
  }
  canvas.addEventListener('pointerdown', (e) => { if (mode === 'edit' && e.target === canvas) select(null); });

  // ── inspector ──
  /** @type {Record<string,(v:number)=>void>} */ let geomSet = {};
  function renderInspector() {
    inspector.innerHTML = ''; geomSet = {};
    if (!selected) { const e = document.createElement('div'); e.className = 'ihint'; e.textContent = 'nothing selected'; inspector.appendChild(e); return; }
    const node = selected;
    const title = document.createElement('div'); title.className = 'ititle'; title.textContent = node.type + (node.parent ? ' · slotted' : ''); inspector.appendChild(title);

    if (!node.parent) {
      /** @param {string} label @param {number} v @param {(n:number)=>void} on */
      const numRow = (label, v, on) => { const s = createScrub({ label, value: v, step: 1, snap: 1, format: (x) => x.toFixed(0), onInput: on }); const r = document.createElement('div'); r.className = 'irow'; r.appendChild(s.el); inspector.appendChild(r); geomSet[label] = (nv) => s.set(nv, true); };
      numRow('x', node.x, (v) => { node.x = v; applyGeom(node); redrawWires(); });
      numRow('y', node.y, (v) => { node.y = v; applyGeom(node); redrawWires(); });
      numRow('w', node.w, (v) => { node.w = v; applyGeom(node); redrawWires(); });
      numRow('h', node.h, (v) => { node.h = v; applyGeom(node); redrawWires(); });
    }

    if (node.part.fields.length) {
      const sub = document.createElement('div'); sub.className = 'ititle'; sub.textContent = 'properties'; inspector.appendChild(sub);
      for (const f of node.part.fields) addPropRow(node, f);
    }

    const del = createButton({ label: 'delete', onClick: () => remove(node) }); del.el.classList.add('idelete'); inspector.appendChild(del.el);
  }
  /** @param {Node} node @param {FieldSpec} f */
  function addPropRow(node, f) {
    const row = document.createElement('div'); row.className = 'irow';
    const apply = () => { node.rebuild(); if (node.part.container) arrangeBody(node, node.props); };
    if (f.kind === 'bool') {
      const t = createToggle({ label: f.k, value: !!node.props[f.k], onChange: (v) => { node.props[f.k] = v; apply(); } });
      row.appendChild(t.el);
    } else if (f.kind === 'num') {
      const s = createScrub({ label: f.k, value: Number(node.props[f.k]) || 0, step: 0.01, onInput: (v) => { node.props[f.k] = v; apply(); } });
      row.appendChild(s.el);
    } else {
      const fld = createField({ label: f.k, value: String(node.props[f.k] ?? ''), onInput: (v) => { node.props[f.k] = v; apply(); } });
      row.appendChild(fld.el);
    }
    inspector.appendChild(row);
  }
  function syncInspector() {
    if (!selected || selected.parent) return;
    geomSet.x?.(selected.x); geomSet.y?.(selected.y); geomSet.w?.(selected.w); geomSet.h?.(selected.h);
  }

  select(null);
  setMode('edit');
}
