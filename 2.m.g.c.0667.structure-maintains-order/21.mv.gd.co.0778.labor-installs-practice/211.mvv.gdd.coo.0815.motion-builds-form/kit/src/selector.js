// selector.js — the ONE-OF-N control. Produces a *choice*: exactly one option from a
// set. Shown as a segmented row (every option visible) with ◀▶ to step. Plain JS + DOM,
// self-contained, no deps.

let stylesIn = false;
function ensureStyles() {
  if (stylesIn) return; stylesIn = true;
  const css = `
    .ksel{display:inline-flex;align-items:stretch;font:11.5px ui-monospace,monospace;
      border:1px solid #1c2630;border-radius:6px;overflow:hidden;user-select:none}
    .ksel .opt{padding:6px 11px;color:#6f8aa0;cursor:pointer;background:#05080d;border-left:1px solid #1c2630}
    .ksel .opt:first-child{border-left:none}
    .ksel .opt:hover{color:#9fc4dc}
    .ksel .opt.on{color:#02040a;background:#62f0c0}`;
  const t = document.createElement('style'); t.id = 'kit-selector-css'; t.textContent = css;
  document.head.appendChild(t);
}

/**
 * @param {{ options: string[], value?: string, onChange?: (v:string, i:number) => void }} opts
 * @returns {{ el: HTMLElement, get: () => string, set: (v:string, silent?:boolean) => void }}
 */
export function createSelector(opts) {
  ensureStyles();
  const options = opts.options;
  let idx = Math.max(0, options.indexOf(opts.value ?? options[0]));
  const el = document.createElement('div');
  el.className = 'ksel';
  /** @type {HTMLElement[]} */
  const cells = options.map((o, i) => {
    const c = document.createElement('span'); c.className = 'opt'; c.textContent = o;
    c.addEventListener('click', () => select(i));
    el.appendChild(c); return c;
  });
  /** @param {boolean} [silent] */
  function paint(silent) {
    cells.forEach((c, i) => c.classList.toggle('on', i === idx));
    if (!silent && opts.onChange) opts.onChange(options[idx], idx);
  }
  /** @param {number} i @param {boolean} [silent] */
  function select(i, silent) { idx = (i + options.length) % options.length; paint(silent); }
  /** @param {string} v @param {boolean} [silent] */
  function set(v, silent) { const i = options.indexOf(v); if (i >= 0) select(i, silent); }
  paint(true);
  return { el, get: () => options[idx], set };
}
