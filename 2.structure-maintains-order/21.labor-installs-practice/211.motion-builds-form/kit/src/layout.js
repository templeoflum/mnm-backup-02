// layout.js — the SPACE atoms. Not controls, not displays — the arrangement the others
// live in. A container bounds a region; row/stack/grid arrange children; group titles a
// set that belongs together. Plain JS + DOM, self-contained, no deps.

let stylesIn = false;
function ensureStyles() {
  if (stylesIn) return; stylesIn = true;
  const css = `
    .kbox{background:#0c1218;border:1px solid #1c2630;border-radius:8px;padding:14px}
    .krow{display:flex;align-items:center;gap:12px}
    .kstack{display:flex;flex-direction:column;gap:12px}
    .kgrid{display:grid;gap:12px}
    .kgroup{display:flex;flex-direction:column;gap:10px}
    .kgroup > .gt{font:11px ui-monospace,monospace;color:#4a5a68;letter-spacing:0.06em;text-transform:uppercase}`;
  const t = document.createElement('style'); t.id = 'kit-layout-css'; t.textContent = css;
  document.head.appendChild(t);
}

/** @param {string} cls @param {(HTMLElement|{el:HTMLElement})[]} kids */
function box(cls, kids) {
  ensureStyles();
  const el = document.createElement('div'); el.className = cls;
  for (const k of kids) el.appendChild(k instanceof HTMLElement ? k : k.el);
  return el;
}

/** A bounded region. @param {...(HTMLElement|{el:HTMLElement})} kids */
export function container(...kids) { return box('kbox', kids); }
/** Lay children in a row. @param {...(HTMLElement|{el:HTMLElement})} kids */
export function row(...kids) { return box('krow', kids); }
/** Stack children vertically. @param {...(HTMLElement|{el:HTMLElement})} kids */
export function stack(...kids) { return box('kstack', kids); }
/** Lay children in an N-column grid. @param {number} cols @param {(HTMLElement|{el:HTMLElement})[]} kids */
export function grid(cols, kids) { const el = box('kgrid', kids); el.style.gridTemplateColumns = `repeat(${cols}, max-content)`; return el; }
/** A titled set that belongs together. @param {string} title @param {...(HTMLElement|{el:HTMLElement})} kids */
export function group(title, ...kids) {
  ensureStyles();
  const el = document.createElement('div'); el.className = 'kgroup';
  const t = document.createElement('div'); t.className = 'gt'; t.textContent = title;
  el.appendChild(t);
  for (const k of kids) el.appendChild(k instanceof HTMLElement ? k : k.el);
  return el;
}
