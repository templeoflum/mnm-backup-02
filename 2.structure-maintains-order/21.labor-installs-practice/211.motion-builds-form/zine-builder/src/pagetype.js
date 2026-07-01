// pagetype.js — a zine is a stack of LEAVES, each leaf a sheet with two sides. The side
// suffix follows the leaf's READING ORDER: a = the side met first on opening, b = second.
// Outer/inner is a DERIVED property that flips between the covers (they face opposite ways):
// the outer cover is C1a on the front leaf but C2b on the back leaf. Default = 2 cover
// leaves C1·C2 (= 4 cover surfaces of one folded sheet). `+ leaf` adds an interior leaf
// (2 sides) between the covers; you never add a lone page. Interior sides carry the reader
// page numbers (L1a = page 1, L1b = 2…). Covers take no page number. The leaf/side address
// is the authoring label; imposition (impose.js) folds this reading order onto sheets
// separately. Pure — pagetype.proof.js.
//
// reading order of the pages array (0-based i) runs straight through, C1a→C2b:
//   i=0    C1a  front cover  (outer)      i=1    C1b  inside front (inner)
//   i=2    L1a  page 1                     i=3    L1b  page 2
//   …interior leaves…
//   i=n-2  C2a  inside back  (inner)       i=n-1 C2b  back cover  (outer, last surface)

/** @typedef {{ kind:'cover'|'interior', leaf:number, side:'a'|'b', page:number|null }} Role */
/** @typedef {{ i:number, side:'a'|'b', code:string, page:number|null }} LeafSide */
/** @typedef {{ kind:'cover'|'interior', leaf:number, label:string, sides:LeafSide[] }} Leaf */

/**
 * The leaf-address role of page `i` (0-based) in an `n`-page zine. n is even (leaves are
 * pairs); min 4 = the two cover leaves. Below 4 (old projects) reads as plain numbered
 * pages grouped in loose leaves.
 * @param {number} i @param {number} n @returns {Role}
 */
export function pageRole(i, n) {
  if (n < 4) return { kind: 'interior', leaf: Math.floor(i / 2) + 1, side: i % 2 === 0 ? 'a' : 'b', page: i + 1 };
  if (i === 0)     return { kind: 'cover', leaf: 1, side: 'a', page: null };   // C1a front cover  (outer)
  if (i === 1)     return { kind: 'cover', leaf: 1, side: 'b', page: null };   // C1b inside front (inner)
  if (i === n - 2) return { kind: 'cover', leaf: 2, side: 'a', page: null };   // C2a inside back  (inner)
  if (i === n - 1) return { kind: 'cover', leaf: 2, side: 'b', page: null };   // C2b back cover   (outer, last)
  return { kind: 'interior', leaf: Math.floor((i - 2) / 2) + 1, side: (i - 2) % 2 === 0 ? 'a' : 'b', page: i - 1 };
}

/** Address code for a chip / the imposition watermark, e.g. "C1a" / "L1a". @param {Role} role @returns {string} */
export function roleCode(role) { return `${role.kind === 'cover' ? 'C' : 'L'}${role.leaf}${role.side}`; }

/** Leaf label without the side, e.g. "C1" / "L1" — the per-leaf nav chip. @param {Role} role @returns {string} */
export function leafLabel(role) { return `${role.kind === 'cover' ? 'C' : 'L'}${role.leaf}`; }

/** Readout label: the code, plus the reader page for interiors. @param {Role} role @returns {string} */
export function roleLong(role) { return role.page == null ? roleCode(role) : `${roleCode(role)} · page ${role.page}`; }

/**
 * The leaves of an `n`-page zine in stack order (C1, L1, L2, …, C2), each with its two
 * sides as {i, side, code, page}. One entry per leaf → drives the per-leaf nav strip.
 * @param {number} n @returns {Leaf[]}
 */
export function leaves(n) {
  /** @param {number} i @returns {LeafSide} */
  const side = (i) => { const r = pageRole(i, n); return { i, side: r.side, code: roleCode(r), page: r.page }; };
  /** @type {Leaf[]} */
  const out = [];
  if (n < 4) {                                   // degenerate: loose pairs, may end odd
    for (let i = 0; i < n; i += 2) {
      const r = pageRole(i, n);
      out.push({ kind: 'interior', leaf: r.leaf, label: leafLabel(r), sides: i + 1 < n ? [side(i), side(i + 1)] : [side(i)] });
    }
    return out;
  }
  out.push({ kind: 'cover', leaf: 1, label: 'C1', sides: [side(0), side(1)] });          // a=front cover, b=inside front
  const interior = (n - 4) / 2;
  for (let k = 0; k < interior; k++) { const a = 2 + k * 2; out.push({ kind: 'interior', leaf: k + 1, label: `L${k + 1}`, sides: [side(a), side(a + 1)] }); }
  out.push({ kind: 'cover', leaf: 2, label: 'C2', sides: [side(n - 2), side(n - 1)] });   // a=inside back, b=back cover (outer, last)
  return out;
}

/** Index where `+ leaf` inserts a new interior leaf's 2 pages: just before the back cover leaf. @param {number} n @returns {number} */
export function leafInsertAt(n) { return n >= 4 ? n - 2 : n; }

/** Can a leaf be removed? Only interior leaves; the 2 cover leaves (4 pages) are the floor. @param {number} n @returns {boolean} */
export function canRemoveLeaf(n) { return n > 4; }
