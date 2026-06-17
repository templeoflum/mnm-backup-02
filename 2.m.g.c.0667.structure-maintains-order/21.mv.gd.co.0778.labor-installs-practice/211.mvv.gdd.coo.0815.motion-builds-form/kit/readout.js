// readout.js — the value DISPLAY. System → human, read-only: shows a value, live.
// A static label is just a readout you never update. Plain JS + DOM, self-contained.

let stylesIn = false;
function ensureStyles() {
  if (stylesIn) return; stylesIn = true;
  const css = `
    .krd{display:inline-flex;align-items:baseline;gap:8px;font:12px ui-monospace,monospace}
    .krd .lab{color:#4a5a68}
    .krd .v{color:#62f0c0;letter-spacing:0.02em}`;
  const t = document.createElement('style'); t.id = 'kit-readout-css'; t.textContent = css;
  document.head.appendChild(t);
}

/**
 * @param {{ label?: string, value?: unknown, format?: (v:unknown) => string }} [opts]
 * @returns {{ el: HTMLElement, set: (v:unknown) => void, get: () => unknown }}
 */
export function createReadout(opts = {}) {
  ensureStyles();
  const fmt = opts.format ?? ((v) => String(v));
  let value = opts.value;
  const el = document.createElement('span'); el.className = 'krd';
  if (opts.label) { const l = document.createElement('span'); l.className = 'lab'; l.textContent = opts.label; el.appendChild(l); }
  const v = document.createElement('span'); v.className = 'v';
  el.appendChild(v);
  /** @param {unknown} nv */
  function set(nv) { value = nv; v.textContent = fmt(nv); }
  set(value);
  return { el, set, get: () => value };
}
