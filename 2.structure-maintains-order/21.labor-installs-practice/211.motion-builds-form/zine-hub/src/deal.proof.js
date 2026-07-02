// U0 proof — the deal, checked in isolation against the REAL families.json.
//   node --input-type=module -e "import('./deal.proof.js').then(m=>m.runProofs().then(r=>console.log(r)))"
// A regression net, not a gate — the shelf under the operator's hand is the eye.

import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { mulberry32, dealSeed, dealShelf } from './deal.js';

/** @typedef {{ name:string, pass:boolean, detail:string }} ProofResult */

/** @param {string} name @param {boolean} pass @param {string} detail @returns {ProofResult} */
function result(name, pass, detail) { return { name, pass, detail }; }

async function data() {
  const p = join(dirname(fileURLToPath(import.meta.url)), '..', 'families.json');
  return JSON.parse(await readFile(p, 'utf8'));
}

/** @returns {Promise<ProofResult[]>} */
export async function runProofs() {
  const d = await data();
  return [deterministic(d), shelfShape(d), familiesAgree(d), weightsBias(d), cupNeverImageMode(d)];
}

/** same seed → the same shelf, address for address. */
function deterministic(d) {
  const a = dealShelf(d, mulberry32(7));
  const b = dealShelf(d, mulberry32(7));
  const key = (s) => [...s.word, ...s.image].map((x) => x.prompt.addr + '+' + x.fragment.addr).join(' ');
  const ok = key(a) === key(b) && key(a).length > 0;
  return result('deterministic', ok, ok ? key(a).slice(0, 44) + '…' : 'shelves differ under one seed');
}

/** 3 word + 3 image, no prompt repeats. */
function shelfShape(d) {
  const s = dealShelf(d, mulberry32(11));
  const addrs = [...s.word, ...s.image].map((x) => x.prompt.addr);
  const ok = s.word.length === 3 && s.image.length === 3
    && s.word.every((x) => x.prompt.mode === 'w') && s.image.every((x) => x.prompt.mode === 'i')
    && new Set(addrs).size === 6;
  return result('shelf shape', ok, ok ? '3 word + 3 image, 6 distinct prompts' : JSON.stringify(addrs));
}

/** every seed's fragment shares its prompt's family — the pairing law. */
function familiesAgree(d) {
  const rnd = mulberry32(13);
  for (let k = 0; k < 60; k++) {
    const s = dealShelf(d, rnd);
    for (const x of [...s.word, ...s.image]) {
      if (x.prompt.family !== x.fragment.family) {
        return result('families agree', false, `${x.prompt.addr} paired with ${x.fragment.addr}`);
      }
    }
  }
  return result('families agree', true, '60 shelves, every pair same-family');
}

/** learned weight pulls the deal — a heavily-cracked family surfaces far more often. */
function weightsBias(d) {
  const rnd = mulberry32(17);
  let hits = 0;
  const N = 120;
  for (let k = 0; k < N; k++) {
    const s = dealSeed(d, 'w', rnd, { '13': 60 });
    if (s.prompt.family === '13') hits++;
  }
  const ok = hits > N * 0.6;   // 13 families at base 1, one at 61 → expect ~83%
  return result('weights bias', ok, `${hits}/${N} deals landed the weighted family`);
}

/** the-cup holds no image prompts — the image deal never fabricates one. */
function cupNeverImageMode(d) {
  const rnd = mulberry32(19);
  for (let k = 0; k < 200; k++) {
    const s = dealSeed(d, 'i', rnd, { '07': 100 });   // beg for the cup
    if (s.prompt.family === '07') return result('cup never image-mode', false, s.prompt.addr);
  }
  return result('cup never image-mode', true, '200 begged image deals, none fabricated');
}
