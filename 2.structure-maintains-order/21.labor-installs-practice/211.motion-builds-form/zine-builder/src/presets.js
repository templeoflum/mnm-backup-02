// presets.js — optional layout presets: named slot rectangles in PAGE FRACTIONS
// [0,1], converted to page units on apply. NO preset is canon — applying just drops
// atoms at the slot rects; free-canvas placement and hand-manip still rule afterward.
// Pure (no DOM) — presets.proof.js checks it under node.

/** @typedef {{ xf:number, yf:number, wf:number, hf:number }} Slot   fractions of the page */
/** @typedef {{ name:string, slots:Slot[] }} Preset */

const M = 0.06;     // default outer margin, fraction of the page
const GAP = 0.03;   // gutter between slots, fraction of the page

/** A cols×rows grid of slots with margin + gutter. @param {number} cols @param {number} rows @returns {Slot[]} */
function grid(cols, rows) {
  const cw = (1 - 2 * M - (cols - 1) * GAP) / cols;
  const ch = (1 - 2 * M - (rows - 1) * GAP) / rows;
  const slots = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      slots.push({ xf: M + c * (cw + GAP), yf: M + r * (ch + GAP), wf: cw, hf: ch });
    }
  }
  return slots;
}

/** @type {Preset[]} */
export const PRESETS = [
  { name: 'single', slots: grid(1, 1) },
  { name: '2 cols', slots: grid(2, 1) },
  { name: '2 rows', slots: grid(1, 2) },
  { name: 'grid 2×2', slots: grid(2, 2) },
  { name: 'thirds', slots: grid(3, 1) },
];

/** Lookup a preset by name. @param {string} name @returns {Preset|undefined} */
export function presetByName(name) { return PRESETS.find((p) => p.name === name); }

/**
 * A preset's fractional slots → page-unit rects for a given page size. Pure.
 * @param {Preset} preset @param {{ w:number, h:number }} page
 * @returns {{ x:number, y:number, w:number, h:number }[]}
 */
export function presetRects(preset, page) {
  return preset.slots.map((s) => ({ x: s.xf * page.w, y: s.yf * page.h, w: s.wf * page.w, h: s.hf * page.h }));
}
