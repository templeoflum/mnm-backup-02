// U0 proof — story resolution + ids + gc, checked in isolation (no DOM).
//   node --input-type=module -e "import('./story.proof.js').then(m=>console.log(m.runProofs()))"
// A regression net, not a gate — the story panel editing live is the operator's eye.

import { resolveText, nextStoryId, gcStories, flowStory } from './story.js';

/** @typedef {{ name:string, pass:boolean, detail:string }} ProofResult */

/** @returns {ProofResult[]} */
export function runProofs() {
  return [resolves(), fallsBack(), emptyWhenNothing(), idsSkipExisting(), gcDropsOrphans(),
    flowSplits(), flowKeepsParagraphs(), flowRest(), flowPassesCapZero()];
}

// flowStory fakes: measure = character count (each char 1 unit); a frame of w=avail+pad*2
// takes lines of `avail` chars; cap lines from height. size 1 → pad .3, lineH 1.3.
const M = () => (/** @type {string} */ s) => s.length;
/** @param {number} chars @param {number} capLines  a frame sized to take `chars`-wide lines × capLines */
const frame = (chars, capLines) => ({ w: chars + 0.6, h: 1 + 0.15 + (capLines - 1) * 1.3 + 0.001, size: 1 });

/** one story splits across two frames in order, no duplication. */
function flowSplits() {
  const { perFrame, rest } = flowStory('aa bb cc dd ee ff', [frame(5, 2), frame(5, 2)], M);
  const ok = JSON.stringify(perFrame) === JSON.stringify([['aa bb', 'cc dd'], ['ee ff']]) && rest === '';
  return result('flow splits', ok, ok ? '2 lines · 1 line · no rest' : JSON.stringify({ perFrame, rest }));
}

/** paragraph breaks survive frame boundaries. */
function flowKeepsParagraphs() {
  const { perFrame } = flowStory('aa bb\ncc', [frame(5, 1), frame(5, 2)], M);
  const ok = JSON.stringify(perFrame) === JSON.stringify([['aa bb'], ['cc']]);
  return result('flow keeps paragraphs', ok, ok ? 'break lands as its own line in frame 2' : JSON.stringify(perFrame));
}

/** what survives the last frame is rest — the nub's overflow, paragraphs intact. */
function flowRest() {
  const { rest } = flowStory('aa bb cc\ndd', [frame(5, 1)], M);
  const ok = rest === 'cc\ndd';
  return result('flow rest', ok, ok ? 'tail text + its paragraph break intact' : JSON.stringify(rest));
}

/** a cap-0 frame passes everything on; a too-wide word still takes a line. */
function flowPassesCapZero() {
  const { perFrame, rest } = flowStory('elephantine', [{ w: 3.6, h: 0.5, size: 1 }, frame(3, 1)], M);
  const ok = perFrame[0].length === 0 && JSON.stringify(perFrame[1]) === JSON.stringify(['elephantine']) && rest === '';
  return result('flow cap-0 + wide word', ok, ok ? 'short frame skipped; wide word takes a line' : JSON.stringify({ perFrame, rest }));
}

/** @param {string} name @param {boolean} pass @param {string} detail @returns {ProofResult} */
function result(name, pass, detail) { return { name, pass, detail }; }

const STORIES = [{ id: 's1', text: 'the full story' }, { id: 's2', text: 'another' }];

/** a frame with a storyId renders its story's text. */
function resolves() {
  const got = resolveText({ storyId: 's1' }, STORIES);
  return result('resolves storyId', got === 'the full story', `got "${got}"`);
}

/** a legacy atom (own text, no story) still renders — pre-story projects keep working. */
function fallsBack() {
  const got = resolveText({ text: 'legacy words' }, STORIES);
  const gotDangling = resolveText({ storyId: 's9', text: 'legacy words' }, STORIES);
  const ok = got === 'legacy words' && gotDangling === 'legacy words';
  return result('legacy fallback', ok, ok ? 'own text used; dangling ref falls back too' : `got "${got}" / "${gotDangling}"`);
}

/** nothing to render → empty string, never undefined. */
function emptyWhenNothing() {
  const got = resolveText({}, STORIES);
  return result('empty when nothing', got === '', `got ${JSON.stringify(got)}`);
}

/** next id skips every existing sN. */
function idsSkipExisting() {
  const got = nextStoryId(STORIES);
  const fresh = nextStoryId([]);
  const ok = got === 's3' && fresh === 's1';
  return result('ids skip existing', ok, ok ? 's3 after s1,s2 · s1 when empty' : `got ${got} / ${fresh}`);
}

/** gc keeps referenced stories, drops orphans, touches nothing else. */
function gcDropsOrphans() {
  const pages = [{ atoms: [{ storyId: 's2' }, { kind: 'image' }] }];
  const kept = gcStories(STORIES, pages);
  const ok = kept.length === 1 && kept[0].id === 's2' && STORIES.length === 2;
  return result('gc drops orphans', ok, ok ? 's1 dropped, s2 kept, input untouched' : `kept ${JSON.stringify(kept.map((s) => s.id))}`);
}
