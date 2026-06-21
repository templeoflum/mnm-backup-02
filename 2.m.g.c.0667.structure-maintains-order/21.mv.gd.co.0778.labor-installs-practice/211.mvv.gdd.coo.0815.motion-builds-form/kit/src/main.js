// kit — boots the workbench: the three-pane design surface (parts · canvas · inspector).
// See frame.kit.f4 at 210.

import { initWorkbench } from './workbench.js';

// kill the native context menu page-wide — right-drag is a control gesture here (depth menus,
// value reset). If we ever want a menu we make our own. Element contextmenu handlers still run.
window.addEventListener('contextmenu', (e) => e.preventDefault());

const toolbar = /** @type {HTMLElement} */ (document.querySelector('#toolbar'));
const palette = /** @type {HTMLElement} */ (document.querySelector('#palette'));
const canvas = /** @type {HTMLElement} */ (document.querySelector('#canvas'));
const inspector = /** @type {HTMLElement} */ (document.querySelector('#inspector'));

initWorkbench(toolbar, palette, canvas, inspector);

// workbench panes are built (synchronous) — drop the first-load spinor. The heart fills in a beat later.
document.getElementById('kit-loading')?.remove();
