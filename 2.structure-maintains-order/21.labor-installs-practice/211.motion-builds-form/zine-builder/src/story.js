// story.js — the content side of the content/layout split (slice 15). A story
// holds the FULL text; a page text box is a frame pointing at it (storyId) and
// renders only what fits. MVPoC: one story ↔ one frame. Pure — no DOM.

/** @typedef {{ id:string, text:string }} Story */

/**
 * The text a frame renders: its story's text when the reference resolves,
 * else the atom's own legacy `text` field (pre-story projects), else ''.
 * @param {{ storyId?:string, text?:string }} atom
 * @param {Story[]} stories
 * @returns {string}
 */
export function resolveText(atom, stories) {
  if (atom.storyId) {
    const s = stories.find((q) => q.id === atom.storyId);
    if (s) return s.text;
  }
  return typeof atom.text === 'string' ? atom.text : '';
}

/**
 * Next free story id (`s1`, `s2`, …) — scans existing ids so opened projects
 * never collide with new stories.
 * @param {Story[]} stories
 * @returns {string}
 */
export function nextStoryId(stories) {
  let max = 0;
  for (const s of stories) {
    const m = /^s(\d+)$/.exec(s.id);
    if (m) max = Math.max(max, +m[1]);
  }
  return 's' + (max + 1);
}

/**
 * Drop stories no frame references (an atom was deleted, a leaf removed).
 * Returns a new array; input untouched.
 * @param {Story[]} stories
 * @param {{ atoms:{ storyId?:string }[] }[]} pages
 * @returns {Story[]}
 */
export function gcStories(stories, pages) {
  const used = new Set();
  for (const pg of pages) for (const a of pg.atoms) if (a.storyId) used.add(a.storyId);
  return stories.filter((s) => used.has(s.id));
}

/**
 * Threaded flow (m2.3): distribute one story through an ordered CHAIN of frames.
 * Each frame takes as many wrapped lines as its height holds (its own width / font /
 * size govern the wrap); what doesn't fit flows to the next frame; what survives the
 * last frame is `rest` — the overflow the nub carries. Paragraph breaks ('\n') are
 * preserved across frame boundaries. Pure — the browser passes a canvas measurer via
 * `measureFor`, proofs pass a fake.
 *
 * A single word wider than a frame still takes a line (never an infinite stall);
 * a frame too short for one line (cap 0) simply passes everything on.
 *
 * @param {string} text
 * @param {{ w:number, h:number, size:number, font?:string }[]} frames  chain order
 * @param {(font:string|undefined, size:number) => (s:string)=>number} measureFor
 * @returns {{ perFrame:string[][], rest:string }}
 */
export function flowStory(text, frames, measureFor) {
  const paras = String(text).split('\n').map((p) => p.split(/\s+/).filter(Boolean));
  let pi = 0, wi = 0;                       // cursor: paragraph, word-within-paragraph
  const perFrame = frames.map((f) => {
    const pad = f.size * 0.3;
    const avail = Math.max(f.w - pad * 2, f.size);
    const cap = Math.max(0, Math.floor((f.h - f.size - pad * 0.5) / (f.size * 1.3)) + 1);
    const measure = measureFor(f.font, f.size);
    /** @type {string[]} */
    const lines = [];
    while (pi < paras.length && lines.length < cap) {
      const words = paras[pi];
      let line = '';
      while (wi < words.length) {
        const trial = line ? line + ' ' + words[wi] : words[wi];
        if (line && measure(trial) > avail) break;   // line full — resume at wi next line/frame
        line = trial; wi++;
      }
      lines.push(line);
      if (wi >= words.length) { pi++; wi = 0; }      // paragraph consumed
    }
    return lines;
  });
  const restParas = [];
  if (pi < paras.length) {
    restParas.push(paras[pi].slice(wi).join(' '));
    for (let k = pi + 1; k < paras.length; k++) restParas.push(paras[k].join(' '));
  }
  return { perFrame, rest: restParas.join('\n') };
}
