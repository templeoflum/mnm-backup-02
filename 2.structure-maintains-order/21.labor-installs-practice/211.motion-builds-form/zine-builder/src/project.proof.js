// U0 proof — the project document, checked in isolation (no DOM).
//   node --input-type=module -e "import('./project.proof.js').then(m=>console.log(m.runProofs()))"
// A regression net, not a gate: green means save↔open round-trips and rejects junk —
// a real composition actually restoring is the operator's eye on index.html.

import { toProject, fromProject } from './project.js';

/** @typedef {{ name:string, pass:boolean, detail:string }} ProofResult */

/** @returns {ProofResult[]} */
export function runProofs() {
  return [roundTrips(), rejectsForeign(), rejectsBadSize(), fillsEmpty()];
}

/** @param {string} name @param {boolean} pass @param {string} detail @returns {ProofResult} */
function result(name, pass, detail) { return { name, pass, detail }; }

const STATE = {
  spec: { w: 5.5, h: 8.5, unit: 'in' },
  pages: [
    { id: 'pg1', atoms: [{ id: 'a1', kind: 'text', x: 1, y: 1, w: 2, h: 1, text: 'hi', size: 0.2 }] },
    { id: 'pg2', atoms: [{ id: 'a2', kind: 'image', x: 0, y: 0, w: 3, h: 4, href: 'data:...' }] },
  ],
};

/** serialize → JSON → parse → deserialize reproduces the state exactly. */
function roundTrips() {
  const back = fromProject(JSON.parse(JSON.stringify(toProject(STATE))));
  const ok = JSON.stringify(back) === JSON.stringify(STATE);
  return result('round-trips', ok, ok ? 'save → JSON → open === original' : `got ${JSON.stringify(back)}`);
}

/** a non-project object is rejected. */
function rejectsForeign() {
  let threw = 0;
  for (const o of [null, {}, { kind: 'something-else' }]) {
    try { fromProject(o); } catch { threw++; }
  }
  return result('rejects foreign', threw === 3, threw === 3 ? 'null / {} / wrong-kind all throw' : `only ${threw}/3 threw`);
}

/** a project with an invalid page size is rejected. */
function rejectsBadSize() {
  let threw = 0;
  for (const page of [{ w: 0, h: 8, unit: 'in' }, { w: 5, h: 8, unit: 'furlong' }]) {
    try { fromProject({ kind: 'zine-builder/project', version: 1, page, pages: [] }); } catch { threw++; }
  }
  return result('rejects bad size', threw === 2, threw === 2 ? 'w≤0 and bad unit throw' : `only ${threw}/2 threw`);
}

/** a valid project with no pages restores one empty page (never zero pages). */
function fillsEmpty() {
  const back = fromProject({ kind: 'zine-builder/project', version: 1, page: { w: 6, h: 9, unit: 'in' }, pages: [] });
  const ok = back.pages.length === 1 && back.pages[0].atoms.length === 0;
  return result('fills empty', ok, ok ? 'no pages → one empty page' : `got ${back.pages.length} pages`);
}
