// U0 proof — the atom's invariants, checked in isolation (no DOM).
//   node --input-type=module -e "import('./atom.proof.js').then(m=>console.log(m.runProofs()))"
// A regression net, not a gate: green means atom geometry / render / placement
// didn't break — atoms actually appearing where clicked is the operator's eye.

import { atomGeom, atomSVG, placeAtom, atomInRect } from './atom.js';
import { pageSVG } from './page.js';

/** @typedef {{ name:string, pass:boolean, detail:string }} ProofResult */

/** @returns {ProofResult[]} */
export function runProofs() {
  return [
    geomValid(),
    positiveGuard(),
    kindGuard(),
    bothKindsRender(),
    placeCentres(),
    placeFromSource(),
    fillsRect(),
    textEscapes(),
    atomsRenderInPage(),
  ];
}

/** @param {string} name @param {boolean} pass @param {string} detail @returns {ProofResult} */
function result(name, pass, detail) { return { name, pass, detail }; }

const IMG = { id: 'a', kind: 'image', x: 1, y: 2, w: 3, h: 4, href: 'x' };
const TXT = { id: 'b', kind: 'text', x: 1, y: 2, w: 3, h: 1, text: 'hi', size: 0.5 };

/** geom returns position + size + derived right/bottom. */
function geomValid() {
  const g = atomGeom(/** @type {any} */(IMG));
  const ok = g.x === 1 && g.y === 2 && g.right === 4 && g.bottom === 6;
  return result('geom valid', ok, ok ? 'x/y/w/h + right/bottom' : `got ${JSON.stringify(g)}`);
}

/** non-positive size throws. */
function positiveGuard() {
  let threw = 0;
  for (const a of [{ ...IMG, w: 0 }, { ...IMG, h: -1 }]) {
    try { atomGeom(/** @type {any} */(a)); } catch { threw++; }
  }
  return result('positive guard', threw === 2, threw === 2 ? 'w≤0 or h≤0 throws' : `only ${threw}/2 threw`);
}

/** unknown kind throws. */
function kindGuard() {
  let threw = false;
  try { atomGeom(/** @type {any} */({ ...IMG, kind: 'sticker' })); } catch { threw = true; }
  return result('kind guard', threw, threw ? 'unknown kind throws' : 'unknown kind did not throw');
}

/** both kinds render their primitive — image→<image>, text→<text>. */
function bothKindsRender() {
  const img = atomSVG(/** @type {any} */(IMG));
  const txt = atomSVG(/** @type {any} */(TXT));
  const ok = img.includes('<image') && img.includes('class="atom atom-image"')
    && txt.includes('<text') && txt.includes('class="atom atom-text"');
  return result('both kinds render', ok, ok ? 'image→<image> · text→<text>' : `img:${img.includes('<image')} txt:${txt.includes('<text')}`);
}

/** placeAtom centres the atom on the drop point, for both kinds, and the result is valid geometry. */
function placeCentres() {
  const page = { w: 6, h: 9 };
  let bad = '';
  for (const kind of /** @type {('image'|'text')[]} */(['image', 'text'])) {
    const a = placeAtom(kind, 3, 4.5, page, kind[0]);
    const g = atomGeom(a);          // must not throw
    const cx = g.x + g.w / 2, cy = g.y + g.h / 2;
    if (Math.abs(cx - 3) > 1e-9 || Math.abs(cy - 4.5) > 1e-9) bad = `${kind} centre ${cx},${cy} (want 3,4.5)`;
  }
  return result('place centres', bad === '', bad || 'both kinds drop centred on the click point');
}

/** placing FROM a pile source carries that content; omitting it falls back to placeholder/blank. */
function placeFromSource() {
  const page = { w: 6, h: 9 };
  const img = placeAtom('image', 3, 4, page, 'i', { href: 'real.png' });
  const txt = placeAtom('text', 3, 4, page, 't', { text: 'loaded body' });
  const blank = placeAtom('text', 3, 4, page, 'b');
  const imgHref = img.kind === 'image' ? img.href : '';
  const txtText = txt.kind === 'text' ? txt.text : '';
  const blankText = blank.kind === 'text' ? blank.text : '';
  const ok = imgHref === 'real.png' && txtText === 'loaded body' && blankText === 'text';
  return result('place from source', ok, ok ? 'source content carried · no source → placeholder/blank' : `img:${imgHref} txt:${txtText}`);
}

/** atomInRect fills the slot exactly (preset placement) and carries source content. */
function fillsRect() {
  const rect = { x: 1, y: 2, w: 3, h: 4 };
  const a = atomInRect('image', rect, 'r', { href: 'slot.png' });
  const t = atomInRect('text', rect, 's');
  const okGeom = a.x === 1 && a.y === 2 && a.w === 3 && a.h === 4;
  const okContent = a.kind === 'image' && a.href === 'slot.png' && t.kind === 'text' && t.text === 'text' && t.size === rect.h * 0.18;
  return result('fills rect', okGeom && okContent, okGeom && okContent ? 'atom matches slot rect · content carried · text size scales to slot' : `geom:${okGeom} content:${okContent}`);
}

/** text content is XML-escaped so it can't break the markup. */
function textEscapes() {
  const svg = atomSVG(/** @type {any} */({ ...TXT, text: '<a & b>' }));
  const ok = svg.includes('&lt;a &amp; b&gt;') && !svg.includes('<a & b>');
  return result('text escapes', ok, ok ? '<,&,> escaped in text' : 'raw markup leaked into text');
}

/** atoms handed to pageSVG appear inside the page's svg, in order. */
function atomsRenderInPage() {
  const svg = pageSVG({ w: 6, h: 9, unit: 'in' }, 1, [/** @type {any} */(IMG), /** @type {any} */(TXT)]);
  const ok = svg.includes('data-id="a"') && svg.includes('data-id="b"')
    && svg.indexOf('data-id="a"') < svg.indexOf('data-id="b"');
  return result('atoms render in page', ok, ok ? 'both atoms inside the page svg, in array order' : 'atoms missing or out of order');
}
