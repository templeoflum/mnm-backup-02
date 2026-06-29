// project.js — the composition as a portable, fold-style document: serialize the
// whole zine (page size + pages + atoms) to a plain object for JSON download, and
// rebuild it on open with validation. Pure (no DOM) — project.proof.js checks the
// round-trip.
//
// Saving never overwrites: each save is a new timestamped file, so the filesystem
// holds the fold history (the unit's git/fold nature, applied to user data).

export const PROJECT_VERSION = 1;
const KIND = 'zine-builder/project';
const UNITS = ['in', 'mm', 'px'];

/**
 * Current editor state → a plain, JSON-safe project object.
 * @param {{ spec:{w:number,h:number,unit:string}, pages:{id:string,atoms:object[]}[] }} state
 * @returns {object}
 */
export function toProject(state) {
  return {
    kind: KIND,
    version: PROJECT_VERSION,
    page: { w: state.spec.w, h: state.spec.h, unit: state.spec.unit },
    pages: state.pages.map((p) => ({ id: p.id, atoms: p.atoms })),
  };
}

/**
 * A parsed project object → editor state, with validation. Throws if it isn't a
 * zine-builder project or the page size is invalid; coerces soft/missing fields.
 * @param {any} obj
 * @returns {{ spec:{w:number,h:number,unit:string}, pages:{id:string,atoms:object[]}[] }}
 */
export function fromProject(obj) {
  if (!obj || obj.kind !== KIND) throw new Error('not a zine-builder project file');
  const page = obj.page || {};
  const spec = { w: +page.w, h: +page.h, unit: page.unit };
  if (!(spec.w > 0) || !(spec.h > 0) || !UNITS.includes(spec.unit)) throw new Error('project: bad page size');
  const raw = Array.isArray(obj.pages) ? obj.pages : [];
  const pages = raw.map((/** @type {any} */ p, /** @type {number} */ i) => ({
    id: typeof p?.id === 'string' ? p.id : 'pg' + (i + 1),
    atoms: Array.isArray(p?.atoms) ? p.atoms : [],
  }));
  return { spec, pages: pages.length ? pages : [{ id: 'pg1', atoms: [] }] };
}
