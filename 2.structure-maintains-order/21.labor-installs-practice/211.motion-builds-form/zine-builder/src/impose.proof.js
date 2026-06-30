// U0 proof — imposition map, checked in isolation (no DOM).
//   node --input-type=module -e "import('./impose.proof.js').then(m=>console.log(m.runProofs()))"
// A regression net, not a gate: green means the saddle-stitch math didn't drift — that a
// printed-folded-stapled booklet actually reads in order is the operator's eye on the preview.

import { impose } from './impose.js';

/** @typedef {{ name:string, pass:boolean, detail:string }} ProofResult */

/** @returns {ProofResult[]} */
export function runProofs() {
  return [knownEight(), everyPageOnce(), padsShort(), emptyAndQuad(), guards()];
}

/** @param {string} name @param {boolean} pass @param {string} detail @returns {ProofResult} */
function result(name, pass, detail) { return { name, pass, detail }; }

/** flatten an imposition's slots in sheet/side order. */
function flat(imp) {
  return imp.sheets.flatMap((s) => [...s.front, ...s.back]);
}

/** the canonical 8-page booklet (0-based): [7,0,1,6, 5,2,3,4]. */
function knownEight() {
  const imp = impose(8);
  const got = flat(imp);
  const want = [7, 0, 1, 6, 5, 2, 3, 4];
  const ok = imp.sheetCount === 2 && JSON.stringify(got) === JSON.stringify(want);
  return result('8pp arrangement', ok, ok ? '2 sheets, front[8|1]/back[2|7] · front[6|3]/back[4|5]' : `got ${JSON.stringify(got)}`);
}

/** every real page 0..n-1 appears exactly once; the rest are blanks. */
function everyPageOnce() {
  let bad = '';
  for (const n of [4, 8, 12, 20, 5, 13]) {
    const slots = flat(impose(n));
    const reals = slots.filter((s) => s !== null).sort((a, b) => a - b);
    const want = Array.from({ length: n }, (_, i) => i);
    if (JSON.stringify(reals) !== JSON.stringify(want)) bad = `n=${n}: pages not exactly-once (${JSON.stringify(reals)})`;
    if (slots.length !== Math.ceil(n / 4) * 4) bad = `n=${n}: slot count ${slots.length} ≠ padded ${Math.ceil(n / 4) * 4}`;
  }
  return result('every page once', bad === '', bad || 'each real page placed exactly once, padded to ×4');
}

/** a 5-page zine pads to 8: 3 trailing blanks (nulls), 5 reals. */
function padsShort() {
  const imp = impose(5);
  const slots = flat(imp);
  const blanks = slots.filter((s) => s === null).length;
  const ok = imp.pageCount === 5 && imp.sheetCount === 2 && blanks === 3;
  return result('pads short count', ok, ok ? '5pp → 2 sheets, 3 blanks' : `blanks=${blanks} sheets=${imp.sheetCount}`);
}

/** n=0 → no sheets; n=4 → one sheet [3,0,1,2]. */
function emptyAndQuad() {
  const zero = impose(0);
  const quad = impose(4);
  const ok = zero.sheetCount === 0 && zero.sheets.length === 0
    && quad.sheetCount === 1 && JSON.stringify(flat(quad)) === JSON.stringify([3, 0, 1, 2]);
  return result('empty & quad', ok, ok ? '0pp → no sheets · 4pp → [4|1]/[2|3]' : `zero=${zero.sheetCount} quad=${JSON.stringify(flat(quad))}`);
}

/** bad inputs throw: negative/non-integer count, unknown scheme. */
function guards() {
  const threw = (fn) => { try { fn(); return false; } catch { return true; } };
  const ok = threw(() => impose(-1)) && threw(() => impose(3.5)) && threw(() => impose(8, 'nope'));
  return result('guards', ok, ok ? 'negative/fractional count & unknown scheme rejected' : 'a bad input slipped through');
}
