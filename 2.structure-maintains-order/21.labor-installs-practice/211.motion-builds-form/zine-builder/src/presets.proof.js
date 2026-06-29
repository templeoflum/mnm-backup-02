// U0 proof — presets, checked in isolation (no DOM).
//   node --input-type=module -e "import('./presets.proof.js').then(m=>console.log(m.runProofs()))"
// A regression net, not a gate: green means slot math didn't break — a preset
// actually laying content out is the operator's eye on index.html.

import { PRESETS, presetByName, presetRects } from './presets.js';

/** @typedef {{ name:string, pass:boolean, detail:string }} ProofResult */

/** @returns {ProofResult[]} */
export function runProofs() {
  return [counts(), withinPage(), scalesWithPage(), lookup()];
}

/** @param {string} name @param {boolean} pass @param {string} detail @returns {ProofResult} */
function result(name, pass, detail) { return { name, pass, detail }; }

/** each preset's slot count matches its grid (single 1, 2-cols 2, 2×2 4, thirds 3). */
function counts() {
  const got = Object.fromEntries(PRESETS.map((p) => [p.name, p.slots.length]));
  const ok = got['single'] === 1 && got['2 cols'] === 2 && got['2 rows'] === 2 && got['grid 2×2'] === 4 && got['thirds'] === 3;
  return result('slot counts', ok, ok ? 'single 1 · cols/rows 2 · 2×2 4 · thirds 3' : JSON.stringify(got));
}

/** every slot rect sits inside the page (0 ≤ x, y and right/bottom ≤ page). */
function withinPage() {
  const page = { w: 6, h: 9 };
  let bad = '';
  for (const p of PRESETS) {
    for (const r of presetRects(p, page)) {
      if (r.x < -1e-9 || r.y < -1e-9 || r.x + r.w > page.w + 1e-9 || r.y + r.h > page.h + 1e-9) bad = `${p.name} slot escapes page`;
      if (!(r.w > 0) || !(r.h > 0)) bad = `${p.name} slot non-positive`;
    }
  }
  return result('within page', bad === '', bad || 'all slots inside the page, positive');
}

/** rects scale linearly with page size — fractions, no fixed units. */
function scalesWithPage() {
  const p = presetByName('grid 2×2');
  const a = presetRects(/** @type {any} */(p), { w: 6, h: 9 });
  const b = presetRects(/** @type {any} */(p), { w: 12, h: 18 });
  const ok = a.length === 4 && b.length === 4 && Math.abs(b[3].x - 2 * a[3].x) < 1e-9 && Math.abs(b[3].w - 2 * a[3].w) < 1e-9;
  return result('scales with page', ok, ok ? 'double the page → double the rects' : 'rects did not scale');
}

/** lookup by name finds it; unknown → undefined. */
function lookup() {
  const ok = presetByName('thirds')?.slots.length === 3 && presetByName('nope') === undefined;
  return result('lookup', ok, ok ? 'name → preset · unknown → undefined' : 'lookup wrong');
}
