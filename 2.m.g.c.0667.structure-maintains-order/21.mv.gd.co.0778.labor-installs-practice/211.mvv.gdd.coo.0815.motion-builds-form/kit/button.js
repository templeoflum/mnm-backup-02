// button.js — the TRIGGER control. Produces a *moment*, not a stored value: press
// and it fires once. The simplest control atom. Plain JS + DOM, self-contained, no deps.

let stylesIn = false;
function ensureStyles() {
  if (stylesIn) return; stylesIn = true;
  const css = `
    .kbtn{font:12px ui-monospace,monospace;color:#9fc4dc;background:#11161d;
      border:1px solid #1c2630;border-radius:6px;padding:7px 14px;cursor:pointer;user-select:none}
    .kbtn:hover{color:#cfe6f5;border-color:#2a3a48}
    .kbtn:active,.kbtn.flash{color:#02040a;background:#62f0c0;border-color:#62f0c0}`;
  const t = document.createElement('style'); t.id = 'kit-button-css'; t.textContent = css;
  document.head.appendChild(t);
}

/**
 * @param {{ label?: string, onClick?: () => void }} [opts]
 * @returns {{ el: HTMLElement }}
 */
export function createButton(opts = {}) {
  ensureStyles();
  const el = document.createElement('button');
  el.className = 'kbtn';
  el.textContent = opts.label ?? 'do it';
  el.addEventListener('click', () => {
    el.classList.add('flash');
    setTimeout(() => el.classList.remove('flash'), 90);
    if (opts.onClick) opts.onClick();
  });
  return { el };
}
