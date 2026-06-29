// page.js — the page: the sized rectangle a zine is composed on.
//
// Size is PHYSICAL (in / mm / px) and configurable — no canon default; the editor
// asks. The SVG's coordinate system IS the physical page (viewBox "0 0 w h"), so
// every atom placed later sits in real page units (clean for print). On-screen
// size is the page in px (unit→px) times a display scale.
//
// pageGeom is pure — page.proof.js checks it under node, no DOM. pageSVG builds markup.

/** @typedef {{ w:number, h:number, unit:('in'|'mm'|'px') }} PageSpec */

/** CSS px per physical unit, for on-screen size only (the viewBox stays in the unit). */
const PX_PER_UNIT = { in: 96, mm: 96 / 25.4, px: 1 };

/**
 * Normalized page geometry from a spec. Throws on non-positive size or unknown unit.
 * @param {PageSpec} spec
 * @returns {{ w:number, h:number, unit:string, pxW:number, pxH:number, aspect:number }}
 */
export function pageGeom(spec) {
  const { w, h, unit } = spec;
  const ppu = PX_PER_UNIT[unit];
  if (ppu === undefined) throw new Error(`page: unknown unit "${unit}"`);
  if (!(w > 0) || !(h > 0)) throw new Error(`page: w and h must be > 0 (got ${w}×${h})`);
  return { w, h, unit, pxW: w * ppu, pxH: h * ppu, aspect: w / h };
}

/**
 * SVG markup for a blank page. viewBox is the physical page; width/height are
 * on-screen px (× scale). The consumer drops this into the DOM.
 * @param {PageSpec} spec
 * @param {number} [scale=1]
 * @returns {string}
 */
export function pageSVG(spec, scale = 1) {
  const g = pageGeom(spec);
  return [
    `<svg class="page" xmlns="http://www.w3.org/2000/svg"`,
    `width="${g.pxW * scale}" height="${g.pxH * scale}"`,
    `viewBox="0 0 ${g.w} ${g.h}" data-unit="${g.unit}">`,
    `<rect class="page-bg" x="0" y="0" width="${g.w}" height="${g.h}"/>`,
    `</svg>`,
  ].join(' ');
}
