// atom.js — a content atom: an image or text block placed on the page.
//
// Position and size are in PAGE UNITS (the SVG viewBox), so an atom sits in the
// same physical coordinate system as the page — print-clean, and ready for the
// by-hand move / resize / layer of slice 3. atomGeom is pure (node-proofed);
// atomSVG renders one atom into the page's coordinate system.

/** @typedef {{ id:string, kind:'image', x:number, y:number, w:number, h:number, href:string }} ImageAtom */
/** @typedef {{ id:string, kind:'text', x:number, y:number, w:number, h:number, text:string, size:number, font?:string, lines?:string[] }} TextAtom */
/** @typedef {ImageAtom|TextAtom} Atom */

const KINDS = ['image', 'text'];

/** A neutral placeholder swatch — slice 2 places it; the pile (slice 4) brings real content. */
const PLACEHOLDER_HREF =
  'data:image/svg+xml,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4 3">' +
      '<rect width="4" height="3" fill="%23ccc"/>' +
      '<path d="M0 3 1.5 1.5 2.5 2.5 3.2 1.8 4 3z" fill="%23999"/>' +
      '<circle cx="3" cy=".8" r=".4" fill="%23999"/>' +
    '</svg>'
  );

/**
 * Normalized atom geometry. Throws on unknown kind, non-finite position, or
 * non-positive size. Pure — no DOM.
 * @param {Atom} atom
 * @returns {{ x:number, y:number, w:number, h:number, right:number, bottom:number }}
 */
export function atomGeom(atom) {
  const { kind, x, y, w, h } = atom;
  if (!KINDS.includes(kind)) throw new Error(`atom: unknown kind "${kind}"`);
  if (!Number.isFinite(x) || !Number.isFinite(y)) throw new Error(`atom: x and y must be finite (got ${x},${y})`);
  if (!(w > 0) || !(h > 0)) throw new Error(`atom: w and h must be > 0 (got ${w}×${h})`);
  return { x, y, w, h, right: x + w, bottom: y + h };
}

/** XML-escape text content so it can't break the SVG markup. @param {unknown} s */
function esc(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/** @typedef {{ href?:string, text?:string }} AtomSource  content from the pile (slice 4) */

/** Kind-specific content fields: image href (placeholder if none) or text body + size. */
function content(/** @type {'image'|'text'} */ kind, /** @type {AtomSource|undefined} */ source, /** @type {number} */ textSize) {
  return kind === 'image'
    ? { kind, href: source?.href ?? PLACEHOLDER_HREF }
    : { kind, text: source?.text ?? 'text', size: textSize };
}

/**
 * Build an atom positioned so its CENTRE sits at (cx, cy) — where the hand drops
 * it. Size and text size default proportional to the page. Content comes from
 * `source` (a loaded pile file) when given, else a placeholder / blank text.
 * @param {'image'|'text'} kind
 * @param {number} cx @param {number} cy  drop point, in page units
 * @param {{ w:number, h:number }} page    page size in the same units
 * @param {string} id
 * @param {AtomSource} [source]            real content to carry (pile); omitted → placeholder
 * @returns {Atom}
 */
export function placeAtom(kind, cx, cy, page, id, source) {
  const w = page.w / 3;
  const h = kind === 'text' ? page.h / 10 : (page.h / 4) * (3 / 4);
  return { id, x: cx - w / 2, y: cy - h / 2, w, h, ...content(kind, source, page.h / 40) };
}

/**
 * Build an atom filling an explicit rect (page units) — used by presets (slice 6),
 * which position content into layout slots. Text size scales to the slot height.
 * @param {'image'|'text'} kind
 * @param {{ x:number, y:number, w:number, h:number }} rect
 * @param {string} id
 * @param {AtomSource} [source]
 * @returns {Atom}
 */
export function atomInRect(kind, rect, id, source) {
  const { x, y, w, h } = rect;
  return { id, x, y, w, h, ...content(kind, source, h * 0.18) };
}

/**
 * SVG fragment for one atom, in page units (drops inside pageSVG's viewBox).
 * @param {Atom} atom
 * @returns {string}
 */
export function atomSVG(atom) {
  const g = atomGeom(atom);
  if (atom.kind === 'image') {
    return (
      `<image class="atom atom-image" data-id="${esc(atom.id)}" ` +
      `x="${g.x}" y="${g.y}" width="${g.w}" height="${g.h}" ` +
      `href="${atom.href}" preserveAspectRatio="xMidYMid meet"/>`
    );
  }
  // text: a box + wrapped lines as <text>/<tspan> (pure SVG — scales clean in the editor,
  // the imposition preview, and print; no foreignObject rasterization trap). The lines are
  // pre-measured by the render path (`wrapLines` + a browser measurer) and handed in as
  // `atom.lines`; with none we fall back to the raw text as a single line.
  // Render the lines from a 64px master and scale back with an SVG <g transform>: a small
  // font-size in page units (~0.2) rasterizes as a black smear when the svg is downscaled
  // (the imposition preview); a 64px master scaled by an SVG transform stays crisp at any
  // zoom. SVG text + SVG transform composes cleanly (unlike foreignObject — see frame).
  const S = 64 / atom.size;
  const pad = atom.size * 0.3;
  const lhM = atom.size * 1.3 * S;                 // line height, magnified
  const lines = atom.lines && atom.lines.length ? atom.lines : [atom.text];
  const tx = (g.x + pad) * S;
  const ty = (g.y + atom.size + pad * 0.5) * S;    // first-line baseline, near the top
  const tspans = lines.map((ln, i) =>
    `<tspan x="${tx}" dy="${i === 0 ? 0 : lhM}">${esc(ln) || ' '}</tspan>`).join('');
  // clip the lines to the box so overflow stays inside its bounds (resize the box; auto-fit
  // is later). clip on an un-transformed <g> (page units); the magnified text scales inside.
  // clip the lines to the box so overflow stays inside its bounds (resize the box; auto-fit
  // is later). clip on an un-transformed <g> (page units); the magnified text scales inside.
  const clipId = `tclip-${esc(atom.id)}`;
  const fontFam = atom.font ? ` font-family="${esc(atom.font)}"` : '';
  return [
    `<g class="atom atom-text" data-id="${esc(atom.id)}">`,
    `<clipPath id="${clipId}"><rect x="${g.x}" y="${g.y}" width="${g.w}" height="${g.h}"/></clipPath>`,
    `<rect class="atom-box" x="${g.x}" y="${g.y}" width="${g.w}" height="${g.h}"/>`,
    `<g clip-path="url(#${clipId})"><g transform="scale(${1 / S})"><text class="atom-text-t" x="${tx}" y="${ty}" font-size="64"${fontFam}>${tspans}</text></g></g>`,
    `</g>`,
  ].join('');
}

/**
 * Greedy word-wrap into lines that fit `maxWidth`, honouring explicit '\n' breaks. Pure:
 * `measure(str)` returns the rendered width of a string (the browser supplies a canvas-
 * based measurer; proofs pass a fake). A single word wider than maxWidth gets its own line.
 * @param {string} text @param {number} maxWidth @param {(s:string)=>number} measure
 * @returns {string[]}
 */
export function wrapLines(text, maxWidth, measure) {
  const out = [];
  for (const para of String(text).split('\n')) {
    let line = '';
    for (const word of para.split(/\s+/).filter(Boolean)) {   // collapse runs of whitespace
      const trial = line ? line + ' ' + word : word;
      if (line && measure(trial) > maxWidth) { out.push(line); line = word; }
      else line = trial;
    }
    out.push(line);                                            // last line of the paragraph (may be '')
  }
  return out;
}
