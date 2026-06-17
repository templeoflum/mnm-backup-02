// disclosure.js — the SHOW/HIDE layout atom. Controls how much is visible at once: a
// header you click to reveal or fold a body of controls. The answer to "many controls,
// no overwhelm" (the TS_formulas LOD idea, distilled). Plain JS + DOM, self-contained.

let stylesIn = false;
function ensureStyles() {
  if (stylesIn) return; stylesIn = true;
  const css = `
    .kdisc{border:1px solid #1c2630;border-radius:7px;overflow:hidden;background:#0c1218}
    .kdisc .dh{display:flex;align-items:center;gap:8px;padding:8px 12px;cursor:pointer;
      user-select:none;color:#6f8aa0;font:12px ui-monospace,monospace}
    .kdisc .dh .caret{transition:transform .12s;color:#4a5a68}
    .kdisc.open .dh .caret{transform:rotate(90deg)}
    .kdisc .db{padding:0 12px 12px;display:flex;flex-direction:column;gap:12px}
    .kdisc:not(.open) .db{display:none}`;
  const t = document.createElement('style'); t.id = 'kit-disclosure-css'; t.textContent = css;
  document.head.appendChild(t);
}

/**
 * @param {{ title?: string, open?: boolean }} [opts]
 * @returns {{ el: HTMLElement, body: HTMLElement, set: (open:boolean) => void, toggle: () => void }}
 */
export function createDisclosure(opts = {}) {
  ensureStyles();
  let open = opts.open ?? false;
  const el = document.createElement('div'); el.className = 'kdisc';
  const head = document.createElement('div'); head.className = 'dh';
  const caret = document.createElement('span'); caret.className = 'caret'; caret.textContent = '▸';
  const title = document.createElement('span'); title.textContent = opts.title ?? '';
  head.appendChild(caret); head.appendChild(title);
  const body = document.createElement('div'); body.className = 'db';
  el.appendChild(head); el.appendChild(body);
  /** @param {boolean} o */
  function set(o) { open = o; el.classList.toggle('open', open); }
  head.addEventListener('click', () => set(!open));
  set(open);
  return { el, body, set, toggle: () => set(!open) };
}
