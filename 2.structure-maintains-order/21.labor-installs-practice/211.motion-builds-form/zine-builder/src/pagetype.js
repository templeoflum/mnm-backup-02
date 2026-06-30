// pagetype.js — a page's ROLE in a saddle-stitch booklet, derived from its position
// (not hand-tagged). A zine is min 4 pages = the four cover surfaces of one folded sheet:
// front cover (p1) · inside front (p2) · inside back (p N−1) · back cover (p N). Pages
// between the inside covers are interior, numbered 1,2,3… Pure (no DOM) — pagetype.proof.js.

/** @typedef {{ kind:'front-cover'|'inside-front'|'inside-back'|'back-cover' }|{ kind:'interior', num:number }} Role */

/**
 * The role of page `i` (0-based) in an `n`-page booklet. Below 4 pages there are no
 * covers yet (e.g. an old 1-page project) — everything reads as numbered interior.
 * @param {number} i @param {number} n @returns {Role}
 */
export function pageRole(i, n) {
  if (n < 4) return { kind: 'interior', num: i + 1 };
  if (i === 0) return { kind: 'front-cover' };
  if (i === 1) return { kind: 'inside-front' };
  if (i === n - 1) return { kind: 'back-cover' };
  if (i === n - 2) return { kind: 'inside-back' };
  return { kind: 'interior', num: i - 1 };          // first interior (i=2) → 1
}

const SHORT = { 'front-cover': 'FC', 'inside-front': 'IF', 'inside-back': 'IB', 'back-cover': 'BC' };
const LONG = { 'front-cover': 'front cover', 'inside-front': 'inside front cover', 'inside-back': 'inside back cover', 'back-cover': 'back cover' };

/** Short code for a chip / the imposition watermark. @param {Role} role @returns {string} */
export function roleShort(role) { return role.kind === 'interior' ? String(role.num) : SHORT[role.kind]; }

/** Full label for the readout / tooltip. @param {Role} role @returns {string} */
export function roleLong(role) { return role.kind === 'interior' ? `page ${role.num}` : LONG[role.kind]; }

/** Index where `+ page` inserts a new interior page: just before the inside-back cover. */
export function interiorInsertAt(n) { return n >= 4 ? n - 2 : n; }
