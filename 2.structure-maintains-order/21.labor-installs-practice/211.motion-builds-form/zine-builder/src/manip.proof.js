// U0 proof — the by-hand transforms, checked in isolation (no DOM).
//   node --input-type=module -e "import('./manip.proof.js').then(m=>console.log(m.runProofs()))"
// A regression net, not a gate: green means move/resize/restack math didn't break —
// the atom actually following the mouse is the operator's eye on index.html.

import { moveAtom, resizeAtom, restack, moveItem, removeById, MIN } from './manip.js';

/** @typedef {{ name:string, pass:boolean, detail:string }} ProofResult */

/** @returns {ProofResult[]} */
export function runProofs() {
  return [moves(), resizesSE(), resizesNW(), anchorHolds(), minClamps(), restacks(), reorders(), removes()];
}

/** @param {string} name @param {boolean} pass @param {string} detail @returns {ProofResult} */
function result(name, pass, detail) { return { name, pass, detail }; }

const A = { id: 'a', kind: 'image', x: 2, y: 3, w: 4, h: 5, href: 'x' };

/** move shifts x/y, leaves w/h. */
function moves() {
  const m = moveAtom(A, 1, -2);
  const ok = m.x === 3 && m.y === 1 && m.w === 4 && m.h === 5;
  return result('moves', ok, ok ? '(x,y)+=(dx,dy), size unchanged' : `got ${JSON.stringify(m)}`);
}

/** SE drag grows w/h from the NW anchor (x,y fixed). */
function resizesSE() {
  const r = resizeAtom(A, 'se', 2, 3);
  const ok = r.x === 2 && r.y === 3 && r.w === 6 && r.h === 8;
  return result('resize SE', ok, ok ? 'w/h grow, x/y fixed' : `got ${JSON.stringify(r)}`);
}

/** NW drag moves x/y and shrinks w/h, keeping the SE corner (right/bottom) fixed. */
function resizesNW() {
  const r = resizeAtom(A, 'nw', 1, 1);
  const ok = r.x === 3 && r.y === 4 && r.w === 3 && r.h === 4 && (r.x + r.w) === 6 && (r.y + r.h) === 8;
  return result('resize NW', ok, ok ? 'x/y move, SE corner fixed' : `got ${JSON.stringify(r)}`);
}

/** the anchored (opposite) corner stays put under any corner drag. */
function anchorHolds() {
  let bad = '';
  for (const c of /** @type {('nw'|'ne'|'sw'|'se')[]} */(['nw', 'ne', 'sw', 'se'])) {
    const r = resizeAtom(A, c, 0.7, -0.4);
    // anchor = the corner opposite c; its coordinate must equal the original
    const ax = c.includes('w') ? (A.x + A.w) : A.x;   // west drag → east edge anchored
    const ay = c.includes('n') ? (A.y + A.h) : A.y;   // north drag → south edge anchored
    const gotX = c.includes('w') ? (r.x + r.w) : r.x;
    const gotY = c.includes('n') ? (r.y + r.h) : r.y;
    if (Math.abs(gotX - ax) > 1e-9 || Math.abs(gotY - ay) > 1e-9) bad = `${c}: anchor moved`;
  }
  return result('anchor holds', bad === '', bad || 'opposite corner fixed for all four');
}

/** a drag that would invert the box clamps each extent at MIN. */
function minClamps() {
  const r = resizeAtom(A, 'se', -100, -100);
  const ok = r.w === MIN && r.h === MIN && r.x === 2 && r.y === 3;
  return result('min clamps', ok, ok ? `w,h floored at ${MIN}, anchor held` : `got ${JSON.stringify(r)}`);
}

/** restack moves an atom to front (end) or back (start); order otherwise preserved. */
function restacks() {
  const atoms = [{ id: 'a' }, { id: 'b' }, { id: 'c' }];
  const front = restack(atoms, 'a', 'front').map((a) => a.id).join('');
  const back = restack(atoms, 'c', 'back').map((a) => a.id).join('');
  const pure = atoms.map((a) => a.id).join('') === 'abc';   // original untouched
  const ok = front === 'bca' && back === 'cab' && pure;
  return result('restacks', ok, ok ? "front→'bca' · back→'cab' · original intact" : `front:${front} back:${back}`);
}

/** moveItem reorders pages by index, clamps the destination, leaves the original intact. */
function reorders() {
  const ps = ['a', 'b', 'c'];
  const down = moveItem(ps, 0, 1).join('');     // a one step later
  const up = moveItem(ps, 2, 1).join('');       // c one step earlier
  const clamp = moveItem(ps, 0, 9).join('');    // past the end → last slot
  const pure = ps.join('') === 'abc';
  const ok = down === 'bac' && up === 'acb' && clamp === 'bca' && pure;
  return result('reorders', ok, ok ? "0→1 'bac' · 2→1 'acb' · clamp 'bca' · original intact" : `down:${down} up:${up} clamp:${clamp}`);
}

/** removeById drops the matching atom, leaves the rest, no-ops on a miss; original intact. */
function removes() {
  const atoms = [{ id: 'a' }, { id: 'b' }, { id: 'c' }];
  const gone = removeById(atoms, 'b').map((a) => a.id).join('');
  const miss = removeById(atoms, 'z').map((a) => a.id).join('');
  const pure = atoms.map((a) => a.id).join('') === 'abc';
  const ok = gone === 'ac' && miss === 'abc' && pure;
  return result('removes', ok, ok ? "drop 'b' → 'ac' · miss → 'abc' · original intact" : `gone:${gone} miss:${miss}`);
}
