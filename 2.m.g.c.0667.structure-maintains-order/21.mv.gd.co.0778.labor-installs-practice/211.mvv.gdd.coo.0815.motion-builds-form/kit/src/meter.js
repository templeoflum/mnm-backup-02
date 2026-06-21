// meter.js — the LEVEL display. System → human, read-only: shows a value's position in
// a range as a filled bar (and a state dot). The non-numeric way to read a quantity.
// Plain JS + DOM, self-contained, no deps.

let stylesIn = false;
function ensureStyles() {
  if (stylesIn) return; stylesIn = true;
  const css = `
    .kmeter{display:inline-flex;align-items:center;gap:9px;font:11px ui-monospace,monospace;color:#4a5a68}
    .kmeter .bar{width:130px;height:8px;background:#0c1218;border:1px solid #1c2630;border-radius:5px;overflow:hidden}
    .kmeter .fill{height:100%;width:0;background:linear-gradient(90deg,#2a6f5e,#62f0c0)}
    .kmeter .dot{width:8px;height:8px;border-radius:50%;background:#1c2630}
    .kmeter.live .dot{background:#62f0c0;box-shadow:0 0 6px rgba(98,240,192,0.6)}`;
  const t = document.createElement('style'); t.id = 'kit-meter-css'; t.textContent = css;
  document.head.appendChild(t);
}

/**
 * @param {{ label?: string, value?: number, min?: number, max?: number }} [opts]
 * @returns {{ el: HTMLElement, set: (v:number) => void, get: () => number }}
 */
export function createMeter(opts = {}) {
  ensureStyles();
  const min = opts.min ?? 0, max = opts.max ?? 1;
  let value = opts.value ?? min;
  const el = document.createElement('span'); el.className = 'kmeter';
  const dot = document.createElement('span'); dot.className = 'dot';
  if (opts.label) { const l = document.createElement('span'); l.textContent = opts.label; el.appendChild(l); }
  const bar = document.createElement('span'); bar.className = 'bar';
  const fill = document.createElement('span'); fill.className = 'fill';
  bar.appendChild(fill); el.appendChild(bar); el.appendChild(dot);
  /** @param {number} v */
  function set(v) {
    value = v;
    const f = Math.max(0, Math.min(1, (v - min) / (max - min)));
    fill.style.width = (f * 100) + '%';
    el.classList.toggle('live', f > 0.001);
  }
  set(value);
  return { el, set, get: () => value };
}
