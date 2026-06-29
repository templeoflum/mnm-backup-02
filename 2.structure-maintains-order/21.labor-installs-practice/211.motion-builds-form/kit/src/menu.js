// menu.js — THE depth-reveal dropdown. Stacked scrub levels under a host, revealed by a
// right-button drag DOWN on a trigger: distance reveals depth (1/2/3), latches at the
// revealed depth, click-outside closes. One format shared by the smart param (name → two
// menus by side) and the ratio node (each control → its own menu). Box style + reveal feel
// live here so both read identically. Plain JS + DOM; the native context menu is killed
// page-wide (see main.js), so this never has to suppress it.

let stylesIn = false;
function ensureStyles() {
  if (stylesIn) return; stylesIn = true;
  const css = `
    .kmenu{position:absolute;top:100%;left:0;right:0;box-sizing:border-box;z-index:30;margin-top:2px;
      background:#0a1016;border:1px solid #2a3a48;border-radius:6px;display:none;
      flex-direction:column;gap:6px;padding:8px;box-shadow:0 6px 18px rgba(0,0,0,0.5)}
    .kmenu.open{display:flex}
    .km-lvl{display:none;gap:6px}
    .km-lvl.show{display:flex}
    .kmenu .scrub{flex:1}`;
  const t = document.createElement('style'); t.id = 'kit-menu-css'; t.textContent = css;
  document.head.appendChild(t);
}

// the shared reveal feel — drag distance (px down) → how many levels show.
/** @param {number} dy @returns {number} */
export function depthLevels(dy) { return dy > 84 ? 3 : dy > 48 ? 2 : dy > 12 ? 1 : 0; }

/**
 * A depth-reveal menu anchored under `host`. Each level is one control's element, shown
 * progressively as `reveal(n)` climbs. `host` must be positioned (position:relative).
 * @param {{ host: HTMLElement, levels: {el:HTMLElement}[], side?: 'left'|'right' }} o
 * @returns {{ el: HTMLElement, reveal: (n:number)=>void, open: ()=>boolean }}
 */
export function createDepthMenu(o) {
  ensureStyles();
  const menu = document.createElement('div');
  menu.className = 'kmenu' + (o.side ? ' ' + o.side : '');
  const lvls = o.levels.map((s) => {
    const d = document.createElement('div'); d.className = 'km-lvl'; d.appendChild(s.el); menu.appendChild(d); return d;
  });
  o.host.appendChild(menu);
  let isOpen = false;
  /** @param {number} n */
  function reveal(n) {
    menu.classList.toggle('open', n > 0);
    lvls.forEach((d, i) => d.classList.toggle('show', n > 0 && i < n));
    isOpen = n > 0;
  }
  return { el: menu, reveal, open: () => isOpen };
}

/**
 * Wire the right-button drag-DOWN open gesture for a group of menus sharing one trigger.
 * `pick` chooses which menu the drag drives (by the down event — e.g. which side); opening
 * one closes its siblings; a pointerdown outside `closeHost` closes whatever's open.
 * @param {{
 *   trigger: HTMLElement,
 *   closeHost: HTMLElement,
 *   menus: {reveal:(n:number)=>void, open:()=>boolean}[],
 *   pick: (e:PointerEvent) => ({reveal:(n:number)=>void}|null),
 * }} o
 */
export function wireDepthDrag(o) {
  let dragging = false, dsy = 0; /** @type {{reveal:(n:number)=>void}|null} */ let target = null;
  o.trigger.addEventListener('pointerdown', (e) => {
    if (e.button !== 2) return;                       // right-button only
    target = o.pick(e); if (!target) return;
    o.menus.forEach((m) => { if (m !== target && m.open()) m.reveal(0); });   // close siblings
    dragging = true; dsy = e.clientY; e.preventDefault();
    o.trigger.setPointerCapture(e.pointerId);
  });
  o.trigger.addEventListener('pointermove', (e) => { if (dragging && target) target.reveal(depthLevels(e.clientY - dsy)); });
  const up = () => { dragging = false; };             // latch at the revealed depth
  o.trigger.addEventListener('pointerup', up);
  o.trigger.addEventListener('pointercancel', up);
  document.addEventListener('pointerdown', (e) => {   // click outside the host → close
    if (e.target instanceof Node && o.closeHost.contains(e.target)) return;
    o.menus.forEach((m) => { if (m.open()) m.reveal(0); });
  });
}
