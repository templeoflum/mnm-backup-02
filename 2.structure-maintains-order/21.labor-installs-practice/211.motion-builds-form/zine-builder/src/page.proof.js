// U0 proof — the page's invariants, checked in isolation (no DOM).
//   node --input-type=module -e "import('./page.proof.js').then(m=>console.log(m.runProofs()))"
// A regression net, not a gate: green means the geometry didn't break — the page
// actually rendering is the operator's eye on index.html.

import { pageGeom, pageSVG } from './page.js';

/** @typedef {{ name:string, pass:boolean, detail:string }} ProofResult */

/** @returns {ProofResult[]} */
export function runProofs() {
  return [unitsConvert(), sizeParamChanges(), positiveGuard(), unitGuard(), svgCarriesDims()];
}

/** @param {string} name @param {boolean} pass @param {string} detail @returns {ProofResult} */
function result(name, pass, detail) { return { name, pass, detail }; }

/** unit → px is correct: 1in=96px, 25.4mm=96px, 1px=1px. */
function unitsConvert() {
  let bad = '';
  const inch = pageGeom({ w: 1, h: 1, unit: 'in' });
  if (inch.pxW !== 96) bad = `1in → ${inch.pxW}px (want 96)`;
  const mm = pageGeom({ w: 25.4, h: 1, unit: 'mm' });
  if (Math.abs(mm.pxW - 96) > 1e-9) bad = `25.4mm → ${mm.pxW}px (want 96)`;
  const px = pageGeom({ w: 300, h: 1, unit: 'px' });
  if (px.pxW !== 300) bad = `300px → ${px.pxW}px (want 300)`;
  return result('units convert', bad === '', bad || '1in=96px · 25.4mm=96px · 1px=1px');
}

/** changing the size param changes the geometry — the slice-1 prove. */
function sizeParamChanges() {
  const a = pageGeom({ w: 5.5, h: 8.5, unit: 'in' });
  const b = pageGeom({ w: 8.5, h: 11, unit: 'in' });
  const changed = a.pxW !== b.pxW && a.pxH !== b.pxH && a.aspect !== b.aspect;
  return result('size param changes it', changed,
    changed
      ? `5.5×8.5 (${Math.round(a.pxW)}×${Math.round(a.pxH)}px) ≠ 8.5×11 (${Math.round(b.pxW)}×${Math.round(b.pxH)}px)`
      : 'geometry did not change with size');
}

/** non-positive size throws. */
function positiveGuard() {
  let threw = 0;
  for (const s of [{ w: 0, h: 5, unit: 'in' }, { w: 5, h: -1, unit: 'in' }]) {
    try { pageGeom(/** @type {any} */(s)); } catch { threw++; }
  }
  return result('positive guard', threw === 2, threw === 2 ? 'w≤0 or h≤0 throws' : `only ${threw}/2 threw`);
}

/** unknown unit throws. */
function unitGuard() {
  let threw = false;
  try { pageGeom(/** @type {any} */({ w: 5, h: 5, unit: 'furlong' })); } catch { threw = true; }
  return result('unit guard', threw, threw ? 'unknown unit throws' : 'unknown unit did not throw');
}

/** the SVG carries the page dimensions: physical viewBox + px width/height. */
function svgCarriesDims() {
  const svg = pageSVG({ w: 5.5, h: 8.5, unit: 'in' });
  const okView = svg.includes('viewBox="0 0 5.5 8.5"');
  const okW = svg.includes(`width="${5.5 * 96}"`);
  const okH = svg.includes(`height="${8.5 * 96}"`);
  const pass = okView && okW && okH;
  return result('svg carries dims', pass,
    pass ? 'viewBox in page units · width/height in px' : `viewBox:${okView} w:${okW} h:${okH}`);
}
