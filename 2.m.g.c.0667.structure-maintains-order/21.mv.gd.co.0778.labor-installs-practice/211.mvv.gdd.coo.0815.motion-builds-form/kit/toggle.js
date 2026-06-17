// toggle.js — the BOOLEAN control. Produces a *bit*: on or off, held. Click to flip.
// Plain JS + DOM, self-contained, no deps.

let stylesIn = false;
function ensureStyles() {
  if (stylesIn) return; stylesIn = true;
  const css = `
    .ktog{display:inline-flex;align-items:center;gap:9px;font:12px ui-monospace,monospace;
      color:#9fc4dc;cursor:pointer;user-select:none}
    .ktog .sw{width:34px;height:18px;border-radius:9px;background:#1c2630;border:1px solid #2a3a48;
      position:relative;transition:background .12s}
    .ktog .sw::after{content:'';position:absolute;top:1px;left:1px;width:14px;height:14px;border-radius:50%;
      background:#6f8aa0;transition:left .12s,background .12s}
    .ktog.on .sw{background:#173b32;border-color:#62f0c0}
    .ktog.on .sw::after{left:17px;background:#62f0c0}`;
  const t = document.createElement('style'); t.id = 'kit-toggle-css'; t.textContent = css;
  document.head.appendChild(t);
}

/**
 * @param {{ label?: string, value?: boolean, onChange?: (v:boolean) => void }} [opts]
 * @returns {{ el: HTMLElement, get: () => boolean, set: (v:boolean, silent?:boolean) => void }}
 */
export function createToggle(opts = {}) {
  ensureStyles();
  let value = opts.value ?? false;
  const el = document.createElement('label');
  el.className = 'ktog';
  const sw = document.createElement('span'); sw.className = 'sw';
  const lab = document.createElement('span'); lab.textContent = opts.label ?? '';
  el.appendChild(sw); el.appendChild(lab);
  /** @param {boolean} [silent] */
  function paint(silent) { el.classList.toggle('on', value); if (!silent && opts.onChange) opts.onChange(value); }
  /** @param {boolean} v @param {boolean} [silent] */
  function set(v, silent) { value = !!v; paint(silent); }
  el.addEventListener('click', () => set(!value));
  paint(true);
  return { el, get: () => value, set };
}
