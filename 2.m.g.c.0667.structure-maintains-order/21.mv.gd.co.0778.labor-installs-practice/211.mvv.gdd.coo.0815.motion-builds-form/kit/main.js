// kit — boots the workbench: the three-pane design surface (parts · canvas · inspector).
// See frame.kit.f4 at 210.

import { initWorkbench } from './workbench.js';

const toolbar = /** @type {HTMLElement} */ (document.querySelector('#toolbar'));
const palette = /** @type {HTMLElement} */ (document.querySelector('#palette'));
const canvas = /** @type {HTMLElement} */ (document.querySelector('#canvas'));
const inspector = /** @type {HTMLElement} */ (document.querySelector('#inspector'));

initWorkbench(toolbar, palette, canvas, inspector);
