// kit — the toolbox. Every UI element as an atomic specimen you can see and handle,
// grouped by the four kinds: CONTROL · DISPLAY · LAYOUT · BINDING. One job each.
// Every control here is wired to a display so its effect is visible. See frame.kit.f3 at 210.

import { createScrub, FEEL_DEFAULTS } from './scrub.js';
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

/** A row: name · control · (→ display). @param {string} name @param {HTMLElement|{el:HTMLElement}} ctrl @param {(HTMLElement|{el:HTMLElement})=} display */
function spec(name, ctrl, display) {
  const tag = document.createElement('span'); tag.className = 'tag'; tag.textContent = name;
  const kids = [tag, ctrl instanceof HTMLElement ? ctrl : ctrl.el];
  if (display) {
    const arrow = document.createElement('span'); arrow.className = 'arrow'; arrow.textContent = '→';
    kids.push(arrow, display instanceof HTMLElement ? display : display.el);
  }
  return row(...kids);
}
/** @param {string} title @param {string} kind @param {HTMLElement[]} kids */
function section(title, kind, kids) {
  const h = document.createElement('div'); h.className = 'sec';
  const t = document.createElement('div'); t.className = 'sech'; t.textContent = title + '  · ' + kind;
  h.appendChild(t);
  for (const k of kids) h.appendChild(k);
  gallery.appendChild(h);
}
const blk = () => { const d = document.createElement('div'); d.className = 'blk'; return d; };

// ── CONTROL — each wired to a display so you can see what it does ──
let fires = 0;
const triggerOut = createReadout({ label: 'fires', value: 0 });
const toggleOut = createReadout({ label: 'state', value: 'on' });
const selectOut = createReadout({ label: 'choice', value: 'tri' });
const scalarOut = createMeter({ value: 0.5, min: 0, max: 1 });
const scalarNum = createReadout({ value: 0.5, format: (v) => Number(v).toFixed(3) });
const padOut = createReadout({ value: '0.50, 0.50' });
const fieldOut = createReadout({ value: '' });

// the scalar shares a live feel so the knobs below retune it
/** @type {import('./scrub.js').Feel} */
const scFeel = { ...FEEL_DEFAULTS };
const scalar = createScrub({
  label: 'x', value: 0.5, min: 0, max: 1, step: 0.01, feel: scFeel,
  onInput: (v) => { scalarOut.set(v); scalarNum.set(v); },
});

section('CONTROL', 'change state — wired to a display', [
  spec('trigger (a moment)', createButton({ label: 'fire', onClick: () => triggerOut.set(++fires) }), triggerOut),
  spec('toggle (a bit)', createToggle({ label: 'on', value: true, onChange: (v) => toggleOut.set(v ? 'on' : 'off') }), toggleOut),
  spec('selector (one of N)', createSelector({ options: ['sine', 'tri', 'saw', 'square'], value: 'tri', onChange: (v) => selectOut.set(v) }), selectOut),
  spec('scalar (a number)', scalar, row(scalarNum.el, scalarOut.el)),
  spec('pad (two numbers)', createPad({ onInput: (p) => padOut.set(p.x.toFixed(2) + ', ' + p.y.toFixed(2)) }), padOut),
  spec('field (free symbols)', createField({ label: 'name', placeholder: 'type…', onInput: (v) => fieldOut.set(v) }), fieldOut),
]);

// ── the scalar's feel — precise by default, modifiers coarsen (tune live) ──
/** @param {keyof import('./scrub.js').Feel} field @param {import('./scrub.js').ScrubOpts} opts */
function knob(field, opts) {
  const out = createReadout({ label: field, value: scFeel[field], format: (v) => Number(v).toFixed(3) });
  const k = createScrub({ ...opts, value: scFeel[field], onInput: (v) => { scFeel[field] = v; out.set(v); } });
  return row(k.el, out.el);
}
section('FEEL (scalar)', 'precise by default · Ctrl/Shift/Alt coarsen for big jumps', [
  knob('sensitivity', { min: 0.02, max: 20, step: 0.01, log: true }),
  knob('depthBase', { min: 2, max: 100, step: 1, snap: 1 }),
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
