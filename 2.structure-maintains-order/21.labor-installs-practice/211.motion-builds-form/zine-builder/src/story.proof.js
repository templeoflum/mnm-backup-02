// U0 proof — story resolution + ids + gc, checked in isolation (no DOM).
//   node --input-type=module -e "import('./story.proof.js').then(m=>console.log(m.runProofs()))"
// A regression net, not a gate — the story panel editing live is the operator's eye.

import { resolveText, nextStoryId, gcStories } from './story.js';

/** @typedef {{ name:string, pass:boolean, detail:string }} ProofResult */

/** @returns {ProofResult[]} */
export function runProofs() {
  return [resolves(), fallsBack(), emptyWhenNothing(), idsSkipExisting(), gcDropsOrphans()];
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
