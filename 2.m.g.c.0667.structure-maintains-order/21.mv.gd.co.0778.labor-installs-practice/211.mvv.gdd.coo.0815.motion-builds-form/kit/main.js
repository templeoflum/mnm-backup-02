// kit — the toolbox. Every UI element as an atomic specimen you can see and handle,
// grouped by the four kinds: CONTROL · DISPLAY · LAYOUT · BINDING. One job each.
// See frame.kit.f3 at 210.

import { createScrub } from './scrub.js';
import { createButton } from './button.js';
import { createToggle } from './toggle.js';
import { createSelector } from './selector.js';
import { createPad } from './pad.js';
import { createField } from './field.js';
import { createReadout } from './readout.js';
import { createMeter } from './meter.js';
import { createDisclosure } from './disclosure.js';
import { createBinding } from './binding.js';
import { container, row, stack, grid, group } from './layout.js';

const gallery = /** @type {HTMLElement} */ (document.querySelector('#gallery'));

/** A labelled specimen: the element name + the working toy. @param {string} name @param {HTMLElement|{el:HTMLElement}} thing */
function spec(name, thing) {
  const tag = document.createElement('span'); tag.className = 'tag'; tag.textContent = name;
  return row(tag, thing instanceof HTMLElement ? thing : thing.el);
}
/** A titled section of specimens. @param {string} title @param {string} kind @param {HTMLElement[]} kids */
function section(title, kind, kids) {
  const h = document.createElement('div'); h.className = 'sec';
  const t = document.createElement('div'); t.className = 'sech'; t.textContent = title + '  · ' + kind;
  h.appendChild(t);
  for (const k of kids) h.appendChild(k);
  gallery.appendChild(h);
}

// little swatch block, for the layout demos
const blk = () => { const d = document.createElement('div'); d.className = 'blk'; return d; };

// ── CONTROL — change state; the atoms differ by the shape of the value ──
section('CONTROL', 'change state', [
  spec('trigger (a moment)', createButton({ label: 'fire' })),
  spec('toggle (a bit)', createToggle({ label: 'on', value: true })),
  spec('selector (one of N)', createSelector({ options: ['sine', 'tri', 'saw', 'square'], value: 'tri' })),
  spec('scalar (a number)', createScrub({ label: 'x', value: 0.5, min: 0, max: 1 })),
  spec('pad (two numbers)', createPad({})),
  spec('field (free symbols)', createField({ label: 'name', placeholder: 'type…' })),
]);

// ── DISPLAY — show state; read-only ──
const cv = document.createElement('canvas'); cv.width = 180; cv.height = 70; cv.className = 'kcanvas';
const cx = cv.getContext('2d');
let ct = 0;
(function loop() {
  if (cx) {
    cx.clearRect(0, 0, cv.width, cv.height);
    cx.strokeStyle = '#2a6f5e'; cx.beginPath();
    for (let i = 0; i <= cv.width; i++) cx.lineTo(i, 35 + 22 * Math.sin(i * 0.05 + ct));
    cx.stroke();
    cx.fillStyle = '#62f0c0';
    const x = (ct * 30) % cv.width;
    cx.beginPath(); cx.arc(x, 35 + 22 * Math.sin(x * 0.05 + ct), 4, 0, 7); cx.fill();
  }
  ct += 0.03; requestAnimationFrame(loop);
})();
section('DISPLAY', 'show state', [
  spec('label (a name)', createReadout({ label: '', value: 'static text' })),
  spec('readout (a value)', createReadout({ label: 'φ', value: 0.618, format: (v) => Number(v).toFixed(3) })),
  spec('meter (a level)', createMeter({ value: 0.66, min: 0, max: 1 })),
  spec('canvas (drawn output)', cv),
]);

// ── LAYOUT — the space the others live in ──
section('LAYOUT', 'arrange space', [
  spec('container (a region)', container(blk(), blk())),
  spec('row', row(blk(), blk(), blk())),
  spec('stack', stack(blk(), blk())),
  spec('grid (3-col)', grid(3, [blk(), blk(), blk(), blk(), blk(), blk()])),
  spec('group', group('oscillator', row(blk(), blk()))),
  spec('disclosure', (() => {
    const d = createDisclosure({ title: 'advanced', open: false });
    d.body.appendChild(row(createScrub({ label: 'depth', value: 0.2 }).el, createToggle({ label: 'wrap' }).el));
    return d.el;
  })()),
]);

// ── BINDING — the wire: one value, many views ──
const val = createBinding(0.5);
const bReadout = createReadout({ label: 'value', format: (v) => Number(v).toFixed(3) });
const bMeter = createMeter({ min: 0, max: 1 });
const bcv = document.createElement('canvas'); bcv.width = 180; bcv.height = 40; bcv.className = 'kcanvas';
const bctx = bcv.getContext('2d');
val.subscribe((v) => bReadout.set(v));
val.subscribe((v) => bMeter.set(v));
val.subscribe((v) => {
  if (!bctx) return;
  bctx.clearRect(0, 0, bcv.width, bcv.height);
  bctx.fillStyle = '#62f0c0';
  bctx.beginPath(); bctx.arc(v * (bcv.width - 16) + 8, 20, 6, 0, 7); bctx.fill();
});
const bScrub = createScrub({ label: 'source', value: 0.5, min: 0, max: 1, onInput: (v) => val.set(v) });
const bPad = createPad({ value: { x: 0.5, y: 0.5 }, onInput: (p) => val.set(p.x) });
section('BINDING', 'the wire — one value, many views', [
  spec('source A', bScrub),
  spec('source B (x)', bPad),
  spec('→ readout', bReadout),
  spec('→ meter', bMeter),
  spec('→ canvas', bcv),
]);
