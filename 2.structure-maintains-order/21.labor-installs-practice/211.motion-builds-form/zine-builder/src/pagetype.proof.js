// U0 proof — leaf addresses, checked in isolation (no DOM).
//   node --input-type=module -e "import('./pagetype.proof.js').then(m=>console.log(m.runProofs()))"
// Green means position→leaf-address didn't drift; the chips/preview labelling right is the eye.

import { pageRole, roleCode, leafLabel, roleLong, leaves, leafInsertAt, canRemoveLeaf } from './pagetype.js';

/** @typedef {{ name:string, pass:boolean, detail:string }} ProofResult */

/** @returns {ProofResult[]} */
export function runProofs() {
  return [twoCoverLeaves(), eightPages(), pageNumbers(), leafStack(), c2Geometry(), labels(), degenerate(), insertAndFloor()];
}

/** @param {string} name @param {boolean} pass @param {string} detail @returns {ProofResult} */
function result(name, pass, detail) { return { name, pass, detail }; }

/** @param {number} n @returns {string[]} */
const codes = (n) => Array.from({ length: n }, (_, i) => roleCode(pageRole(i, n)));

/** a 4-page zine is exactly the two cover leaves, no interior. */
function twoCoverLeaves() {
  const got = codes(4).join(' ');
  const ok = got === 'C1a C1b C2b C2a';
  return result('4 = 2 cover leaves', ok, ok ? 'C1a C1b C2b C2a (one folded sheet)' : got);
}

/** an 8-page zine: covers wrap 2 interior leaves. reading order C1a C1b L1a L1b L2a L2b C2b C2a. */
function eightPages() {
  const got = codes(8).join(' ');
  const ok = got === 'C1a C1b L1a L1b L2a L2b C2b C2a';
  return result('8 = covers + 2 interior leaves', ok, ok ? got : `got ${got}`);
}

/** reader page numbers: interiors 1,2,3,4 across; covers carry none. */
function pageNumbers() {
  const pages = Array.from({ length: 8 }, (_, i) => pageRole(i, 8).page);
  const ok = JSON.stringify(pages) === JSON.stringify([null, null, 1, 2, 3, 4, null, null]);
  return result('page numbers', ok, ok ? 'interior 1..4, covers null' : JSON.stringify(pages));
}

/** leaves() groups into the stack C1, L1, L2, C2 — one entry per leaf, 2 sides each. */
function leafStack() {
  const ls = leaves(8);
  const labels = ls.map(l => l.label).join(' ');
  const sideCount = ls.every(l => l.sides.length === 2);
  const ok = labels === 'C1 L1 L2 C2' && sideCount && ls.length === 4;
  return result('leaf stack', ok, ok ? 'C1 L1 L2 C2, 2 sides each' : `${labels} (len ${ls.length})`);
}

/** C2's outer side a is the LAST reading page (back cover); inner side b is inside-back. */
function c2Geometry() {
  const ls = leaves(8);
  const c2 = ls[ls.length - 1];
  const a = c2.sides.find(s => s.side === 'a'), b = c2.sides.find(s => s.side === 'b');
  const ok = !!a && !!b && c2.label === 'C2' && a.i === 7 && b.i === 6 && a.code === 'C2a' && b.code === 'C2b';
  return result('C2 geometry (a=outer=last)', ok, ok ? 'C2a=p8(back cover), C2b=p7(inside back)' : `a@${a?.i} b@${b?.i}`);
}

/** code · leaf label · readout for a cover and an interior. */
function labels() {
  const fc = pageRole(0, 8), p1 = pageRole(2, 8);
  const ok = roleCode(fc) === 'C1a' && leafLabel(fc) === 'C1' && roleLong(fc) === 'C1a'
    && roleCode(p1) === 'L1a' && leafLabel(p1) === 'L1' && roleLong(p1) === 'L1a · page 1';
  return result('labels', ok, ok ? 'C1a / L1a · page 1' : 'label wrong');
}

/** below 4 pages (old projects) → plain numbered pages, loose leaves, no covers. */
function degenerate() {
  const r = pageRole(0, 1);
  const ok = r.kind === 'interior' && r.page === 1 && codes(2).join(' ') === 'L1a L1b'
    && pageRole(2, 3).page === 3;
  return result('degenerate <4', ok, ok ? 'n<4 → numbered pages, loose leaves' : 'degenerate handling wrong');
}

/** `+ leaf` inserts before the back cover leaf (n−2); the 2 cover leaves are the floor. */
function insertAndFloor() {
  const ok = leafInsertAt(4) === 2 && leafInsertAt(8) === 6
    && canRemoveLeaf(6) === true && canRemoveLeaf(4) === false;
  return result('insert + floor', ok, ok ? 'insert before C2; floor = 2 cover leaves' : `${leafInsertAt(4)}/${leafInsertAt(8)} rm ${canRemoveLeaf(4)}`);
}
