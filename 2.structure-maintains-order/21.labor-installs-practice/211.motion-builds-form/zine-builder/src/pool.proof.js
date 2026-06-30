// U0 proof — pool classifier, checked in isolation (no DOM).
//   node --input-type=module -e "import('./pool.proof.js').then(m=>console.log(m.runProofs()))"
// A regression net, not a gate: green means folder entries get sorted into image/text/skip
// the way the upload pool's `accept` filter does — the folder actually listing & placing
// is the operator's eye on index.html (needs a Chromium secure context).

import { folderKind } from './pool.js';

/** @typedef {{ name:string, pass:boolean, detail:string }} ProofResult */

/** @returns {ProofResult[]} */
export function runProofs() {
  return [images(), texts(), skips(), caseInsensitive()];
}

/** @param {string} name @param {boolean} pass @param {string} detail @returns {ProofResult} */
function result(name, pass, detail) { return { name, pass, detail }; }

/** common image extensions classify as image. */
function images() {
  const names = ['a.png', 'b.JPG', 'c.jpeg', 'd.gif', 'e.webp', 'f.avif', 'g.bmp', 'h.svg'];
  const bad = names.filter((n) => folderKind(n) !== 'image');
  return result('images → image', bad.length === 0, bad.length ? 'missed: ' + bad.join(' ') : names.length + ' image types');
}

/** common text extensions classify as text. */
function texts() {
  const names = ['a.txt', 'b.MD', 'c.markdown', 'd.csv', 'e.json', 'f.html', 'g.htm'];
  const bad = names.filter((n) => folderKind(n) !== 'text');
  return result('texts → text', bad.length === 0, bad.length ? 'missed: ' + bad.join(' ') : names.length + ' text types');
}

/** unknown / extensionless files are skipped (null), not mis-read as text. */
function skips() {
  const names = ['movie.mp4', 'doc.pdf', 'archive.zip', 'binary', 'font.ttf', '.gitignore'];
  const bad = names.filter((n) => folderKind(n) !== null);
  return result('unknown → skip', bad.length === 0, bad.length ? 'wrongly kept: ' + bad.join(' ') : 'non-placeable types skipped');
}

/** extension match ignores case (FILE.PNG === file.png). */
function caseInsensitive() {
  const ok = folderKind('PHOTO.PNG') === 'image' && folderKind('NOTES.TXT') === 'text';
  return result('case-insensitive', ok, ok ? '.PNG/.TXT match' : 'case sensitivity leaked');
}
