// U0 proof — page roles, checked in isolation (no DOM).
//   node --input-type=module -e "import('./pagetype.proof.js').then(m=>console.log(m.runProofs()))"
// Green means position→role didn't drift; the chips/preview actually labelling right is the eye.

import { pageRole, roleShort, roleLong, interiorInsertAt } from './pagetype.js';

/** @typedef {{ name:string, pass:boolean, detail:string }} ProofResult */

/** @returns {ProofResult[]} */
export function runProofs() {
  return [fourCovers(), eightPages(), labels(), degenerate(), insertPoint()];
}

/** @param {string} name @param {boolean} pass @param {string} detail @returns {ProofResult} */
function result(name, pass, detail) { return { name, pass, detail }; }

const codes = (n) => Array.from({ length: n }, (_, i) => roleShort(pageRole(i, n)));

/** a 4-page zine is exactly the four covers, no interior. */
function fourCovers() {
  const got = codes(4).join(' ');
  const ok = got === 'FC IF IB BC';
  return result('4 = covers', ok, ok ? 'FC IF IB BC (one sheet, no interior)' : got);
}

/** an 8-page zine: covers at 1,2,7,8 · interior 1..4 between. */
function eightPages() {
  const got = codes(8).join(' ');
  const ok = got === 'FC IF 1 2 3 4 IB BC';
  return result('8 = covers + 4 interior', ok, ok ? got : `got ${got}`);
}

/** short vs long labels for a cover and an interior. */
function labels() {
  const fc = pageRole(0, 8), p1 = pageRole(2, 8);
  const ok = roleShort(fc) === 'FC' && roleLong(fc) === 'front cover'
    && roleShort(p1) === '1' && roleLong(p1) === 'page 1';
  return result('labels', ok, ok ? 'FC→front cover · interior→page N' : 'label wrong');
}

/** below 4 pages (old projects) → plain numbered interior, no covers. */
function degenerate() {
  const ok = roleShort(pageRole(0, 1)) === '1' && pageRole(0, 1).kind === 'interior'
    && codes(3).join(' ') === '1 2 3';
  return result('degenerate <4', ok, ok ? 'n<4 → numbered interior' : 'degenerate handling wrong');
}

/** `+ page` inserts just before the inside-back cover (index n−2). */
function insertPoint() {
  const ok = interiorInsertAt(4) === 2 && interiorInsertAt(8) === 6 && interiorInsertAt(1) === 1;
  return result('insert point', ok, ok ? 'inserts before inside-back (n−2)' : `got ${interiorInsertAt(4)}/${interiorInsertAt(8)}`);
}
