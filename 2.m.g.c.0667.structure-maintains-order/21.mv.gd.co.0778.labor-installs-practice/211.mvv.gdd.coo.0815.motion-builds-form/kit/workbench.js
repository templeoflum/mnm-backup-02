// workbench.js — the design surface. Hand-design a UI by direct manipulation: click a
// part to drop it on the canvas, drag it to move, drag a handle to resize, select it to
// tune it in the inspector. No code. The atom factories are the parts bin.
//
// On the canvas the parts are INERT (pointer-events off) — you're designing them, not
// using them. The node frame owns select/move/resize; the inspector owns their properties.

import { createScrub } from './scrub.js';
import { createButton } from './button.js';
import { createToggle } from './toggle.js';
import { createSelector } from './selector.js';
import { createPad } from './pad.js';
import { createField } from './field.js';
import { createReadout } from './readout.js';
import { createMeter } from './meter.js';

/** A part the palette offers. @typedef {{ type:string, make:() => HTMLElement }} Part */
/** @type {Part[]} */
const PARTS = [
  { type: 'button', make: () => createButton({ label: 'button' }).el },
  { type: 'toggle', make: () => createToggle({ label: 'toggle', value: true }).el },
  { type: 'slider', make: () => createScrub({ label: 'x', value: 0.5, min: 0, max: 1 }).el },
  { type: 'selector', make: () => createSelector({ options: ['sine', 'tri', 'saw'] }).el },
  { type: 'pad', make: () => createPad({}).el },
  { type: 'field', make: () => createField({ label: 'name', placeholder: 'type…' }).el },
  { type: 'readout', make: () => createReadout({ label: 'value', value: 0.5, format: (v) => Number(v).toFixed(2) }).el },
  { type: 'meter', make: () => createMeter({ value: 0.6 }).el },
];

/** A placed element on the canvas. @typedef {{ el:HTMLElement, type:string, x:number, y:number, w:number, h:number }} Node */

/** Boot the workbench into three panes.
 * @param {HTMLElement} palette @param {HTMLElement} canvas @param {HTMLElement} inspector */
export function initWorkbench(palette, canvas, inspector) {
  /** @type {Node[]} */ const nodes = [];
  /** @type {Node|null} */ let selected = null;
  let added = 0;

  // ── palette: a button per part; click to drop one on the canvas ──
  for (const part of PARTS) {
    const b = document.createElement('button');
    b.className = 'pitem'; b.textContent = part.type;
    b.addEventListener('click', () => addNode(part));
    palette.appendChild(b);
  }

  /** @param {Part} part */
  function addNode(part) {
    const el = document.createElement('div');
    el.className = 'node';
    const inner = document.createElement('div');
    inner.className = 'ninner';
    inner.appendChild(part.make());
    const handle = document.createElement('div');
    handle.className = 'nhandle';
    el.appendChild(inner); el.appendChild(handle);
    canvas.appendChild(el);

    const x = 30 + (added % 8) * 26, y = 30 + (added % 8) * 26; added++;
    const w = Math.max(60, inner.offsetWidth + 8), h = Math.max(28, inner.offsetHeight + 8);
    /** @type {Node} */ const node = { el, type: part.type, x, y, w, h };
    nodes.push(node);
    applyGeom(node);

    // move: drag the node body (not the handle)
    el.addEventListener('pointerdown', (e) => {
      if (e.target === handle) return;
      e.stopPropagation();
      select(node);
      const ox = e.clientX - node.x, oy = e.clientY - node.y;
      const move = (/** @type {PointerEvent} */ ev) => { node.x = Math.round(ev.clientX - ox); node.y = Math.round(ev.clientY - oy); applyGeom(node); syncInspector(); };
      const up = () => { el.releasePointerCapture(e.pointerId); el.removeEventListener('pointermove', move); el.removeEventListener('pointerup', up); };
      el.setPointerCapture(e.pointerId); el.addEventListener('pointermove', move); el.addEventListener('pointerup', up);
    });
    // resize: drag the handle
    handle.addEventListener('pointerdown', (e) => {
      e.stopPropagation();
      const sw = node.w, sh = node.h, sx = e.clientX, sy = e.clientY;
      const move = (/** @type {PointerEvent} */ ev) => { node.w = Math.max(40, Math.round(sw + ev.clientX - sx)); node.h = Math.max(24, Math.round(sh + ev.clientY - sy)); applyGeom(node); syncInspector(); };
      const up = () => { handle.releasePointerCapture(e.pointerId); handle.removeEventListener('pointermove', move); handle.removeEventListener('pointerup', up); };
      handle.setPointerCapture(e.pointerId); handle.addEventListener('pointermove', move); handle.addEventListener('pointerup', up);
    });

    select(node);
  }

  /** @param {Node} n */
  function applyGeom(n) {
    n.el.style.left = n.x + 'px'; n.el.style.top = n.y + 'px';
    n.el.style.width = n.w + 'px'; n.el.style.height = n.h + 'px';
  }

  /** @param {Node|null} n */
  function select(n) {
    selected = n;
    for (const m of nodes) m.el.classList.toggle('selected', m === n);
    renderInspector();
  }
  function remove(/** @type {Node} */ n) {
    const i = nodes.indexOf(n); if (i >= 0) nodes.splice(i, 1);
    n.el.remove(); if (selected === n) select(null);
  }

  // click empty canvas → deselect
  canvas.addEventListener('pointerdown', (e) => { if (e.target === canvas) select(null); });

  // ── inspector: properties of the selected node ──
  /** @type {{ setX:(v:number)=>void, setY:(v:number)=>void, setW:(v:number)=>void, setH:(v:number)=>void }|null} */
  let insp = null;
  function renderInspector() {
    inspector.innerHTML = ''; insp = null;
    if (!selected) {
      const e = document.createElement('div'); e.className = 'ihint'; e.textContent = 'nothing selected';
      inspector.appendChild(e); return;
    }
    const node = selected;
    const title = document.createElement('div'); title.className = 'ititle'; title.textContent = node.type;
    inspector.appendChild(title);

    /** @param {string} label @param {number} v @param {(n:number)=>void} on */
    const numRow = (label, v, on) => {
      const r = document.createElement('div'); r.className = 'irow';
      const s = createScrub({ label, value: v, step: 1, snap: 1, format: (x) => x.toFixed(0), onInput: on });
      r.appendChild(s.el); inspector.appendChild(r); return s;
    };
    const sx = numRow('x', node.x, (v) => { node.x = v; applyGeom(node); });
    const sy = numRow('y', node.y, (v) => { node.y = v; applyGeom(node); });
    const sw = numRow('w', node.w, (v) => { node.w = v; applyGeom(node); });
    const sh = numRow('h', node.h, (v) => { node.h = v; applyGeom(node); });
    insp = { setX: (v) => sx.set(v, true), setY: (v) => sy.set(v, true), setW: (v) => sw.set(v, true), setH: (v) => sh.set(v, true) };

    const del = createButton({ label: 'delete', onClick: () => remove(node) });
    del.el.classList.add('idelete');
    inspector.appendChild(del.el);
  }
  // keep the inspector's numbers in step while dragging on the canvas
  function syncInspector() {
    if (!selected || !insp) return;
    insp.setX(selected.x); insp.setY(selected.y); insp.setW(selected.w); insp.setH(selected.h);
  }

  select(null);
}
