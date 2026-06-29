// TS — the shell. Owns what every atomic unit shares: the one <canvas>, the
// WebGPU device, the message line, and the top-left unit switcher. Holds a
// registry of units, mounts the active one, and runs a single render loop that
// ticks whichever unit is mounted. Each unit (unit-circle.js, plane.js, …) is a
// self-contained module — mount() builds its controls + pipeline, frame() renders
// one tick, unmount() tears its UI down. Add a unit = add it to UNITS.
//
// Plain JS + JSDoc, no build — the lattice serves this directly.

import { unitCircle } from './unit-circle.js';
import { ts } from './ts.js';
// plane.js + schedule.js dropped from the registry for now (files kept on the floor; re-add when needed)

const canvas = /** @type {HTMLCanvasElement} */ (document.querySelector('canvas'));
const msg = /** @type {HTMLElement} */ (document.querySelector('#msg'));
const read = /** @type {HTMLElement} */ (document.querySelector('#read'));
const controls = /** @type {HTMLElement} */ (document.querySelector('#controls'));
const unitsBar = /** @type {HTMLElement} */ (document.querySelector('#units'));

/** @typedef {{ name: string, mount: (s: any) => void, frame: () => void, unmount: () => void }} Unit */
/** @type {Unit[]} — the registry; the toggle order matches this */
const UNITS = [unitCircle, ts];

/** @type {Unit | null} */
let active = null;
/** @type {any} */
let shared = null;
let snapDecimals = 3; // slider resolution: 0 → nearest integer · 1 → 0.0 · 2 → 0.00 · 3 → 0.000 (finest)

/** Round v to the current snap resolution — nearest, not increment (independent of
 * the slider's min, unlike HTML step). @param {number} v @returns {number} */
function snapValue(v) {
  const f = Math.pow(10, snapDecimals);
  return Math.round(v * f) / f;
}
/** Re-snap every slider's current value to the resolution and notify its unit.
 * Called on resolution change and on each mount (units rebuild their own controls). */
function applySnap() {
  controls.querySelectorAll('input[type=range]').forEach((el) => {
    const r = /** @type {HTMLInputElement} */ (el);
    const v = String(snapValue(parseFloat(r.value)));
    if (v !== r.value) { r.value = v; r.dispatchEvent(new Event('input', { bubbles: true })); }
  });
}

/** @param {number} i */
function mountUnit(i) {
  if (active) active.unmount();
  active = UNITS[i];
  active.mount(shared);
  unitsBar.querySelectorAll('button[data-i]').forEach((b) =>
    b.classList.toggle('on', Number(/** @type {HTMLElement} */ (b).dataset.i) === i));
  applySnap();
}

function buildBar() {
  const labels = ['0', '0.0', '0.00', '0.000'];
  unitsBar.innerHTML =
    UNITS.map((u, i) => `<button data-i="${i}">${u.name}</button>`).join('') +
    '<span class="snap-label">snap</span>' +
    [0, 1, 2, 3].map((d) => `<button class="snapseg" data-d="${d}">${labels[d]}</button>`).join('');
  unitsBar.querySelectorAll('button[data-i]').forEach((b) =>
    b.addEventListener('click', () => mountUnit(Number(/** @type {HTMLElement} */ (b).dataset.i))));
  const segs = unitsBar.querySelectorAll('button.snapseg');
  segs.forEach((b) => {
    const seg = /** @type {HTMLElement} */ (b);
    seg.classList.toggle('on', Number(seg.dataset.d) === snapDecimals);
    seg.addEventListener('click', () => {
      snapDecimals = Number(seg.dataset.d);
      segs.forEach((s) => s.classList.toggle('on', s === seg));
      applySnap();
    });
  });
}

function resize() {
  const dpr = Math.min(window.devicePixelRatio, 2);
  canvas.width = Math.round(canvas.clientWidth * dpr);
  canvas.height = Math.round(canvas.clientHeight * dpr);
}

async function boot() {
  if (!navigator.gpu) { msg.textContent = 'WebGPU is not available in this browser.'; return; }
  const adapter = await navigator.gpu.requestAdapter();
  if (!adapter) { msg.textContent = 'No WebGPU adapter found.'; return; }
  const device = await adapter.requestDevice();
  const ctx = /** @type {GPUCanvasContext} */ (canvas.getContext('webgpu'));
  const format = navigator.gpu.getPreferredCanvasFormat();
  ctx.configure({ device, format, alphaMode: 'premultiplied' });

  shared = { canvas, device, ctx, format, read, controls, msg };

  // snap-on-drag: round any slider's value to the resolution BEFORE the unit's own
  // handler reads it (capture phase, before the bubble-phase listeners the units add).
  controls.addEventListener('input', (e) => {
    const t = /** @type {HTMLInputElement} */ (e.target);
    if (t && t.tagName === 'INPUT' && t.type === 'range') {
      const v = String(snapValue(parseFloat(t.value)));
      if (v !== t.value) t.value = v;
    }
  }, true);

  resize();
  window.addEventListener('resize', resize);

  buildBar();
  mountUnit(0);

  function loop() {
    if (active) active.frame();
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);
}

boot().catch((/** @type {unknown} */ e) => {
  msg.textContent = 'WebGPU init failed: ' + (e instanceof Error ? e.message : String(e));
});
