// manip.js — the by-hand transforms on a placed atom: MOVE, RESIZE from a corner,
// and RESTACK (z-order). All pure (new value in, new value out — no DOM, no mutation);
// manip.proof.js checks them under node. index.html wires pointer drags to these.
//
// The kit handles VALUE params (scrub/selector); the on-canvas drag is SVG-native —
// deltas arrive already converted to page units, so these stay unit-agnostic.

/** Minimum atom extent, in page units — keeps a grabbable region under any resize. */
export const MIN = 0.05;

/** Move an atom by (dx,dy) page units. @template {{x:number,y:number}} A @param {A} atom @param {number} dx @param {number} dy @returns {A} */
export function moveAtom(atom, dx, dy) {
  return { ...atom, x: atom.x + dx, y: atom.y + dy };
}

/**
 * Resize an atom by dragging one CORNER by (dx,dy) page units; the opposite corner
 * is the anchor (stays put). Each edge clamps so the extent never drops below MIN.
 * @template {{x:number,y:number,w:number,h:number}} A
 * @param {A} atom @param {'nw'|'ne'|'sw'|'se'} corner @param {number} dx @param {number} dy @returns {A}
 */
export function resizeAtom(atom, corner, dx, dy) {
  let { x, y, w, h } = atom;
  const right = x + w, bottom = y + h;
  if (corner.includes('w')) { const nx = Math.min(x + dx, right - MIN); x = nx; w = right - nx; }
  else { w = Math.max(MIN, w + dx); }
  if (corner.includes('n')) { const ny = Math.min(y + dy, bottom - MIN); y = ny; h = bottom - ny; }
  else { h = Math.max(MIN, h + dy); }
  return { ...atom, x, y, w, h };
}

/**
 * Move an array item from index `from` to index `to` (both clamped into range).
 * Pure — returns a new array. Used to reorder pages (slice 5).
 * @template T @param {T[]} arr @param {number} from @param {number} to @returns {T[]}
 */
export function moveItem(arr, from, to) {
  const a = arr.slice();
  if (from < 0 || from >= a.length) return a;
  const dest = Math.max(0, Math.min(a.length - 1, to));
  const [it] = a.splice(from, 1);
  a.splice(dest, 0, it);
  return a;
}

/**
 * Remove the atom with this id. Pure — returns a new array (unchanged if not found).
 * @template {{id:string}} A @param {A[]} atoms @param {string} id @returns {A[]}
 */
export function removeById(atoms, id) { return atoms.filter((a) => a.id !== id); }

/** Index of the atom with this id, or -1. @param {{id:string}[]} atoms @param {string} id */
function indexOf(atoms, id) { return atoms.findIndex((a) => a.id === id); }

/**
 * Restack: move the atom to the front (top) or back (bottom) of the z-order.
 * z-order = array order (pageSVG paints in order), so this reorders the array.
 * @template {{id:string}} A @param {A[]} atoms @param {string} id @param {'front'|'back'} where @returns {A[]}
 */
export function restack(atoms, id, where) {
  const i = indexOf(atoms, id);
  if (i < 0) return atoms.slice();
  const rest = atoms.slice(0, i).concat(atoms.slice(i + 1));
  return where === 'front' ? rest.concat(atoms[i]) : [atoms[i], ...rest];
}
