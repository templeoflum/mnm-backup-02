// kit — the UI R&D bench. Tune the feel of parameter manipulation by hand, live:
// drag the subjects, turn the feel knobs, feel the difference instantly. Drag a
// panel's header to move it — play with placement. See frame.kit.f2 at 210.

import { createScrub, FEEL_DEFAULTS } from './scrub.js';

const gallery = /** @type {HTMLElement} */ (document.querySelector('#gallery'));

// the one live feel, shared by the subjects. The feel knobs mutate it; the subjects
// read it by reference at event time, so every change is felt on the next drag tick.
/** @type {import('./scrub.js').Feel} */
const feel = { ...FEEL_DEFAULTS };

/** Make a box draggable by a handle (fixed-positioned, so it floats anywhere).
 * @param {HTMLElement} box @param {HTMLElement} handle */
function makeDraggable(box, handle) {
  let drag = false, px = 0, py = 0, ox = 0, oy = 0;
  handle.addEventListener('pointerdown', (e) => {
    drag = true; px = e.clientX; py = e.clientY;
    const r = box.getBoundingClientRect();
    ox = r.left; oy = r.top;
    box.style.position = 'fixed'; box.style.left = ox + 'px'; box.style.top = oy + 'px'; box.style.margin = '0';
    handle.setPointerCapture(e.pointerId); e.preventDefault();
  });
  handle.addEventListener('pointermove', (e) => {
    if (!drag) return;
    box.style.left = (ox + e.clientX - px) + 'px';
    box.style.top = (oy + e.clientY - py) + 'px';
  });
  handle.addEventListener('pointerup', () => { drag = false; });
}

/** A draggable panel: titled box you can move by its header. @param {string} title */
function panel(title) {
  const box = document.createElement('div'); box.className = 'panel';
  const head = document.createElement('div'); head.className = 'phead'; head.textContent = title;
  const body = document.createElement('div'); body.className = 'pbody';
  box.appendChild(head); box.appendChild(body);
  gallery.appendChild(box);
  makeDraggable(box, head);
  return { box, body };
}

/** A labelled row inside a panel body. @param {HTMLElement} body @param {HTMLElement} control @param {HTMLElement} [readout] */
function row(body, control, readout) {
  const r = document.createElement('div'); r.className = 'row';
  r.appendChild(control);
  if (readout) r.appendChild(readout);
  body.appendChild(r);
  return r;
}

// ── the subjects: big scrubs to sweep, sharing the live feel ──
const subjects = panel('subjects — drag to sweep');
/** @param {string} label @param {import('./scrub.js').ScrubOpts} opts */
function subject(label, opts) {
  const out = document.createElement('span'); out.className = 'big';
  const s = createScrub({ ...opts, label, feel, onInput: (v) => { out.textContent = (opts.format ?? ((x) => String(x)))(v); } });
  out.textContent = (opts.format ?? ((x) => String(x)))(s.get());
  row(subjects.body, s.el, out);
  return s;
}
subject('linear', { value: 0, min: -1e9, max: 1e9, step: 1 });
subject('log', { value: 1, min: 1e-6, max: 1e9, step: 0.01, log: true, format: (v) => v < 1 ? v.toPrecision(3) : v.toFixed(2) });

// ── the feel knobs: each mutates the shared feel, retuning the subjects live ──
const feelp = panel('feel — tune by hand');
/** @param {keyof import('./scrub.js').Feel} field @param {import('./scrub.js').ScrubOpts} opts */
function knob(field, opts) {
  const out = document.createElement('span'); out.className = 'out';
  const k = createScrub({
    ...opts, label: field, value: feel[field],
    onInput: (v) => { feel[field] = v; out.textContent = (opts.format ?? ((x) => String(x)))(v); },
  });
  out.textContent = (opts.format ?? ((x) => String(x)))(feel[field]);
  row(feelp.body, k.el, out);
}
knob('sensitivity', { min: 0.02, max: 50, step: 0.01, log: true, format: (v) => v.toFixed(3) });
knob('precisionDiv', { min: 20, max: 800, step: 1, snap: 1, format: (v) => v.toFixed(0) });
knob('logBase', { min: 1.001, max: 1.2, step: 0.001, format: (v) => v.toFixed(3) });
knob('ctrlMult', { min: 0.01, max: 1, step: 0.01, log: true, format: (v) => v.toFixed(3) });
knob('ctrlShiftMult', { min: 0.001, max: 1, step: 0.001, log: true, format: (v) => v.toFixed(3) });
knob('depthBase', { min: 2, max: 100, step: 1, snap: 1, format: (v) => v.toFixed(0) });
