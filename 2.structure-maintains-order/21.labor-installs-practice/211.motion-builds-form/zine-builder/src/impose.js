// impose.js — imposition: reading-order pages → print sheets. NON-destructive — this
// computes a MAP (which page lands in which sheet/side/slot); the editor's pages array
// is never reordered. Pure (no DOM) — impose.proof.js checks it under node. Export (PDF)
// is a separate, later seam (Fork B); this slice stops at the map + a preview.
//
// Scheme is a parameter so more slot in later (mini-zine, n-up). v1 ships saddle-stitch.

/** @typedef {number|null} Slot   0-based page index, or null for a blank (padding). */
/** @typedef {{ front:[Slot,Slot], back:[Slot,Slot] }} Sheet */
/** @typedef {{ scheme:string, pageCount:number, sheetCount:number, sheets:Sheet[] }} Imposition */

export const SCHEMES = ['saddle-stitch'];

/**
 * Saddle-stitch booklet: stack S sheets, fold the stack in half, staple the spine.
 * Pages padded to a multiple of 4; each sheet is printed double-sided, 2-up per side.
 * For 0-based sheet k (k=0 is the OUTERMOST sheet) over P padded pages:
 *   front [P-1-2k, 2k]   back [2k+1, P-2-2k]   — indices ≥ pageCount become null (blank).
 * 8pp → front[7,0]/back[1,6] · front[5,2]/back[3,4]  (1-based: [8|1][2|7] · [6|3][4|5]).
 * @param {number} n  real page count @returns {Imposition}
 */
function saddleStitch(n) {
  const P = Math.ceil(n / 4) * 4;            // pad up to a full booklet
  const S = P / 4;
  const slot = (i) => (i >= 0 && i < n ? i : null);   // real page or blank
  /** @type {Sheet[]} */
  const sheets = [];
  for (let k = 0; k < S; k++) {
    sheets.push({
      front: [slot(P - 1 - 2 * k), slot(2 * k)],
      back: [slot(2 * k + 1), slot(P - 2 - 2 * k)],
    });
  }
  return { scheme: 'saddle-stitch', pageCount: n, sheetCount: S, sheets };
}

/**
 * Impose `n` reading-order pages under a named scheme.
 * @param {number} n @param {string} [scheme] @returns {Imposition}
 */
export function impose(n, scheme = 'saddle-stitch') {
  if (!Number.isInteger(n) || n < 0) throw new Error('impose: page count must be a non-negative integer');
  if (scheme === 'saddle-stitch') return saddleStitch(n);
  throw new Error(`impose: unknown scheme "${scheme}" (have: ${SCHEMES.join(', ')})`);
}
