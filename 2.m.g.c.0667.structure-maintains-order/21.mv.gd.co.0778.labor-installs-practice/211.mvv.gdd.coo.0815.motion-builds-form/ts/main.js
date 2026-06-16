// TS — the shell. Owns what every atomic unit shares: the one <canvas>, the
// WebGPU device, the message line, and the top-left unit switcher. Holds a
// registry of units, mounts the active one, and runs a single render loop that
// ticks whichever unit is mounted. Each unit (unit-circle.js, plane.js, …) is a
// self-contained module — mount() builds its controls + pipeline, frame() renders
// one tick, unmount() tears its UI down. Add a unit = add it to UNITS.
//
// Plain JS + JSDoc, no build — the lattice serves this directly.

import { unitCircle } from './unit-circle.js';
import { plane } from './plane.js';

const canvas = /** @type {HTMLCanvasElement} */ (document.querySelector('canvas'));
const msg = /** @type {HTMLElement} */ (document.querySelector('#msg'));
const read = /** @type {HTMLElement} */ (document.querySelector('#read'));
const controls = /** @type {HTMLElement} */ (document.querySelector('#controls'));
const unitsBar = /** @type {HTMLElement} */ (document.querySelector('#units'));

/** @typedef {{ name: string, mount: (s: any) => void, frame: () => void, unmount: () => void }} Unit */
/** @type {Unit[]} — the registry; the toggle order matches this */
const UNITS = [unitCircle, plane];

/** @type {Unit | null} */
let active = null;
/** @type {any} */
let shared = null;

/** @param {number} i */
function mountUnit(i) {
  if (active) active.unmount();
  active = UNITS[i];
  active.mount(shared);
  [...unitsBar.children].forEach((b, j) => b.classList.toggle('on', j === i));
}

function buildBar() {
  unitsBar.innerHTML = UNITS.map((u, i) => `<button data-i="${i}">${u.name}</button>`).join('');
  [...unitsBar.children].forEach((b) =>
    b.addEventListener('click', () => mountUnit(Number(/** @type {HTMLElement} */ (b).dataset.i))));
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
