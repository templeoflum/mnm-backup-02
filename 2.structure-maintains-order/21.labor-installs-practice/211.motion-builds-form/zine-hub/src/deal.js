// deal.js — the shelf's dealing. A seed = one prompt (its mode = what you'll make) +
// one fragment from the SAME family (either material — a line can tune a drawing, an
// image can tune a writing). Pure: the browser seeds the RNG with entropy, the rig
// seeds with a constant and gets the same shelf every time.

/** Deterministic 32-bit RNG (mulberry32). @param {number} seed @returns {() => number} */
export function mulberry32(seed) {
  let a = seed >>> 0;
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * Weighted pick: base weight 1 per item, plus the learned weight (B2's crack counts).
 * @template T @param {T[]} items @param {(x:T)=>number} weightOf @param {()=>number} rnd
 * @returns {T}
 */
export function weightedPick(items, weightOf, rnd) {
  const weights = items.map((x) => Math.max(0, weightOf(x)));
  const total = weights.reduce((a, b) => a + b, 0);
  if (!(total > 0)) return items[Math.floor(rnd() * items.length)];
  let r = rnd() * total;
  for (let i = 0; i < items.length; i++) {
    r -= weights[i];
    if (r < 0) return items[i];
  }
  return items[items.length - 1];
}

/**
 * Deal ONE seed: family (weighted, must hold an eligible prompt of the mode and at
 * least one fragment) → prompt (uniform among that family+mode, minus excluded) →
 * fragment (uniform among the family's fragments, any material).
 * @param {{ prompts:any[], fragments:any[] }} data  families.json
 * @param {'w'|'i'} mode
 * @param {() => number} rnd
 * @param {Record<string, number>} [learned]  family → crack count (adds to base weight 1)
 * @param {Set<string>} [exclude]  prompt addrs already on the shelf
 * @returns {{ prompt:any, fragment:any } | null}  null only if nothing is eligible
 */
export function dealSeed(data, mode, rnd, learned = {}, exclude = new Set()) {
  const byFam = new Map();
  for (const p of data.prompts) {
    if (p.mode !== mode || exclude.has(p.addr)) continue;
    let arr = byFam.get(p.family);
    if (!arr) byFam.set(p.family, arr = []);
    arr.push(p);
  }
  const fragsByFam = new Map();
  for (const f of data.fragments) {
    let arr = fragsByFam.get(f.family);
    if (!arr) fragsByFam.set(f.family, arr = []);
    arr.push(f);
  }
  const eligible = [...byFam.keys()].filter((fam) => (fragsByFam.get(fam) || []).length > 0);
  if (!eligible.length) return null;
  const fam = weightedPick(eligible, (f) => 1 + (learned[f] || 0), rnd);
  const prompts = byFam.get(fam);
  const prompt = prompts[Math.floor(rnd() * prompts.length)];
  const frags = fragsByFam.get(fam);
  const fragment = frags[Math.floor(rnd() * frags.length)];
  return { prompt, fragment };
}

/**
 * Deal the SHELF: three word seeds (top), three image seeds (bottom); no prompt
 * repeats within one shelf.
 * @param {{ prompts:any[], fragments:any[] }} data
 * @param {() => number} rnd
 * @param {Record<string, number>} [learned]
 * @returns {{ word:any[], image:any[] }}
 */
export function dealShelf(data, rnd, learned = {}) {
  const exclude = new Set();
  const take = (/** @type {'w'|'i'} */ mode, /** @type {number} */ count) => {
    const out = [];
    for (let k = 0; k < count; k++) {
      const s = dealSeed(data, mode, rnd, learned, exclude);
      if (!s) break;
      exclude.add(s.prompt.addr);
      out.push(s);
    }
    return out;
  };
  return { word: take('w', 3), image: take('i', 3) };
}
