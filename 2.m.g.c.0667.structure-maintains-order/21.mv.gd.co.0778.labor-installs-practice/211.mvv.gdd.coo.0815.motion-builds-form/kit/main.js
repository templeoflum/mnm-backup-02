// kit — the UI/control library gallery. Each component shown on its own to see and
// interact with in isolation. See frame.kit.f1 at 210.

import { createScrub } from './scrub.js';

const gallery = /** @type {HTMLElement} */ (document.querySelector('#gallery'));

/** One gallery row: a control + a live readout of its current value.
 * @param {string} name @param {import('./scrub.js').ScrubOpts} opts */
function row(name, opts) {
  const wrap = document.createElement('div');
  wrap.className = 'row';
  const tag = document.createElement('span');
  tag.className = 'tag';
  tag.textContent = name;
  const out = document.createElement('span');
  out.className = 'out';
  const scrub = createScrub({ ...opts, onInput: (v) => { out.textContent = String(v); } });
  out.textContent = String(scrub.get());
  wrap.appendChild(tag);
  wrap.appendChild(scrub.el);
  wrap.appendChild(out);
  gallery.appendChild(wrap);
}

// a spread of scrubs exercising every mode
row('linear', { label: 'gain', value: 1, step: 0.01 });
row('bounded', { label: 'mix', value: 0.5, min: 0, max: 1, step: 0.01 });
row('integer (snap)', { label: 'count', value: 4, min: 1, step: 1, snap: 1, format: (v) => String(Math.round(v)) });
row('log', { label: 'freq', value: 1, min: 1e-3, step: 0.01, log: true });
row('fine (phase)', { label: 'φ', value: 0, min: 0, max: 1, step: 0.005, format: (v) => v.toFixed(3) });
