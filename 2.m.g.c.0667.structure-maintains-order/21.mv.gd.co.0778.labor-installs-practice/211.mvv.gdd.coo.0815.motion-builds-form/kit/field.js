// field.js — the SYMBOL control. Produces *free input*: type arbitrary text (or a
// number). Commits on Enter or blur. Plain JS + DOM, self-contained, no deps.

let stylesIn = false;
function ensureStyles() {
  if (stylesIn) return; stylesIn = true;
  const css = `
    .kfield{display:inline-flex;align-items:center;gap:8px;font:12px ui-monospace,monospace;color:#6f8aa0}
    .kfield input{background:#02040a;border:1px solid #1c2630;border-radius:5px;color:#cfe6f5;
      font:inherit;padding:6px 9px;width:120px}
    .kfield input:focus{outline:none;border-color:#4fb8e8}`;
  const t = document.createElement('style'); t.id = 'kit-field-css'; t.textContent = css;
  document.head.appendChild(t);
}

/**
 * @param {{ label?: string, value?: string, placeholder?: string, numeric?: boolean,
 *   onInput?: (v:string) => void }} [opts]
 * @returns {{ el: HTMLElement, get: () => string, set: (v:string, silent?:boolean) => void }}
 */
export function createField(opts = {}) {
  ensureStyles();
  let value = opts.value ?? '';
  const el = document.createElement('label'); el.className = 'kfield';
  if (opts.label) { const l = document.createElement('span'); l.textContent = opts.label; el.appendChild(l); }
  const inp = document.createElement('input');
  inp.type = opts.numeric ? 'number' : 'text';
  if (opts.placeholder) inp.placeholder = opts.placeholder;
  inp.value = value;
  el.appendChild(inp);

  function commit(/** @type {boolean} */ silent) { value = inp.value; if (!silent && opts.onInput) opts.onInput(value); }
  /** @param {string} v @param {boolean} [silent] */
  function set(v, silent) { value = v; inp.value = v; if (!silent && opts.onInput) opts.onInput(value); }
  inp.addEventListener('change', () => commit(false));
  inp.addEventListener('keydown', (e) => { if (e.key === 'Enter') inp.blur(); });

  return { el, get: () => value, set };
}
