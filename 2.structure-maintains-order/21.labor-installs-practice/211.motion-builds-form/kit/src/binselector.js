// binselector.js — THE 3-BIN SELECTOR. Three bins side by side; each bin is a one-of-N set.
// ONE bin is ACTIVE at a time and its current pick is the output. Left-click a segment → make that
// bin active. Right-click a segment → dropdown of that bin's options → pick one (sets the bin's pick
// AND activates it). The point: pin one candidate per bin and flip between them fast — the
// calibration A/B/C. Native context menu is killed page-wide (main.js), so right-click is ours.
// Plain JS + DOM, self-contained, no deps.

let stylesIn = false;
function ensureStyles() {
  if (stylesIn) return; stylesIn = true;
  const css = `
    .kbin{display:inline-flex;font:11.5px ui-monospace,monospace;border:1px solid #1c2630;
      border-radius:6px;user-select:none}
    .kbin-seg{position:relative;display:flex;flex-direction:column;gap:1px;padding:5px 10px;
      cursor:pointer;background:#05080d;border-left:1px solid #1c2630;min-width:52px}
    .kbin-seg:first-child{border-left:none;border-top-left-radius:6px;border-bottom-left-radius:6px}
    .kbin-seg:last-child{border-top-right-radius:6px;border-bottom-right-radius:6px}
    .kbin-seg .kbin-lab{font-size:8.5px;letter-spacing:.5px;text-transform:uppercase;color:#46586a}
    .kbin-seg .kbin-val{color:#6f8aa0}
    .kbin-seg:hover .kbin-val{color:#9fc4dc}
    .kbin-seg.active{background:#0c2118}
    .kbin-seg.active .kbin-lab{color:#3a9c7e}
    .kbin-seg.active .kbin-val{color:#62f0c0}
    .kbin-menu{position:absolute;top:100%;left:-1px;z-index:30;margin-top:3px;min-width:calc(100% + 2px);
      background:#0a1016;border:1px solid #2a3a48;border-radius:6px;display:none;flex-direction:column;
      padding:4px;box-shadow:0 6px 18px rgba(0,0,0,.5)}
    .kbin-menu.open{display:flex}
    .kbin-item{padding:4px 9px;color:#6f8aa0;cursor:pointer;border-radius:4px;white-space:nowrap}
    .kbin-item:hover{background:#13202a;color:#9fc4dc}
    .kbin-item.on{color:#62f0c0}`;
  const t = document.createElement('style'); t.id = 'kit-binselector-css'; t.textContent = css;
  document.head.appendChild(t);
}

/**
 * @param {{ bins: {name:string, options:string[]}[], active?:number,
 *   onChange?: (value:string, binIdx:number, optIdx:number) => void }} opts
 * @returns {{ el:HTMLElement, get:()=>{bin:number,value:string},
 *   setActive:(i:number)=>void, setMatch:(v:string|null)=>void }}
 */
export function createBinSelector(opts) {
  ensureStyles();
  const bins = opts.bins;
  const sel = bins.map(() => 0);             // selected option index, per bin
  let active = opts.active ?? 0;
  const el = document.createElement('div'); el.className = 'kbin';

  const segs = bins.map((bin, bi) => {
    const seg = document.createElement('div'); seg.className = 'kbin-seg';
    const lab = document.createElement('div'); lab.className = 'kbin-lab'; lab.textContent = bin.name;
    const val = document.createElement('div'); val.className = 'kbin-val';
    const menu = document.createElement('div'); menu.className = 'kbin-menu';
    const items = bin.options.map((o, oi) => {
      const it = document.createElement('div'); it.className = 'kbin-item'; it.textContent = o;
      it.addEventListener('click', (e) => { e.stopPropagation(); pick(bi, oi); closeMenus(); });
      menu.appendChild(it); return it;
    });
    seg.append(lab, val, menu);
    seg.addEventListener('click', () => setActive(bi));               // left-click → activate this bin
    seg.addEventListener('contextmenu', (e) => e.preventDefault());   // suppress the native menu
    // right-DRAG down → open this bin's dropdown. ONE gesture with the depth menus; a bare right-click
    // is unreliable (races click-vs-drag, so the menu only sometimes appears). 8px down opens it.
    seg.addEventListener('pointerdown', (e) => {
      if (e.button !== 2) return;
      e.preventDefault();
      const sy = e.clientY; let opened = false;
      try { seg.setPointerCapture(e.pointerId); } catch (_) { /* capture optional */ }
      const move = (ev) => { if (!opened && ev.clientY - sy > 8) { opened = true; const was = menu.classList.contains('open'); closeMenus(); if (!was) menu.classList.add('open'); } };
      const up = () => { seg.removeEventListener('pointermove', move); seg.removeEventListener('pointerup', up); seg.removeEventListener('pointercancel', up); };
      seg.addEventListener('pointermove', move);
      seg.addEventListener('pointerup', up);
      seg.addEventListener('pointercancel', up);
    });
    el.appendChild(seg);
    return { seg, val, menu, items };
  });

  function closeMenus() { segs.forEach((s) => s.menu.classList.remove('open')); }
  document.addEventListener('pointerdown', (e) => { if (e.target instanceof Node && el.contains(e.target)) return; closeMenus(); });

  function paint() {
    segs.forEach((s, bi) => {
      s.seg.classList.toggle('active', bi === active);
      s.val.textContent = bins[bi].options[sel[bi]];
      s.items.forEach((it, oi) => it.classList.toggle('on', oi === sel[bi]));
    });
  }
  function emit() { if (opts.onChange) opts.onChange(bins[active].options[sel[active]], active, sel[active]); }
  /** @param {number} i */
  function setActive(i) { active = i; paint(); emit(); }
  /** @param {number} bi @param {number} oi */
  function pick(bi, oi) { sel[bi] = oi; active = bi; paint(); emit(); }   // picking a value activates its bin
  // sync the highlight to an external value (e.g. a free-dialed scrub) WITHOUT emitting — finds the
  // option matching `v` across bins and shows it active; clears all if no match.
  /** @param {string|null} v */
  function setMatch(v) {
    for (let bi = 0; bi < bins.length; bi++) {
      const oi = bins[bi].options.indexOf(/** @type {string} */ (v));
      if (oi >= 0) { sel[bi] = oi; active = bi; paint(); return; }
    }
    segs.forEach((s) => { s.seg.classList.remove('active'); s.items.forEach((it) => it.classList.remove('on')); });
  }

  paint();
  return { el, get: () => ({ bin: active, value: bins[active].options[sel[active]] }), setActive, setMatch };
}
