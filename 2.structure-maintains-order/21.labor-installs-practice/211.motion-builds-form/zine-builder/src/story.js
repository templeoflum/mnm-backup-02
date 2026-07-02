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
