// binding.js — the WIRE. The one UI element with no look, only behavior: it connects a
// control's output to a value, and that value to any number of displays. One source of
// truth, many views. (This is the seed of a "parameter": a held value things read and
// write.) Plain JS, no DOM, no deps.

/**
 * Create a bound value. Controls write it with `set`; displays react via `subscribe`.
 * @template T
 * @param {T} initial
 * @returns {{ get: () => T, set: (v:T) => void, subscribe: (fn:(v:T)=>void) => (()=>void) }}
 */
export function createBinding(initial) {
  let value = initial;
  /** @type {((v:T)=>void)[]} */
  const subs = [];
  return {
    get: () => value,
    /** @param {T} v */
    set(v) { value = v; for (const fn of subs) fn(value); },
    /** @param {(v:T)=>void} fn @returns {()=>void} unsubscribe */
    subscribe(fn) {
      subs.push(fn);
      fn(value);                                   // push current value immediately
      return () => { const i = subs.indexOf(fn); if (i >= 0) subs.splice(i, 1); };
    },
  };
}
