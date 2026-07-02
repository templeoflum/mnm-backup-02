// ingest-images.mjs — pull the operator's sorted image pool (G: ground folders, the 13
// families as directories) into the unit as ADDRESSED image fragments.
//
// seeds/images/ is GITIGNORED (304MB doesn't live in the lattice's git — the corpus
// library pattern: content ignored, register tracked). The register this emits is
// dev/images.src.json; make-families.mjs merges it into families.json as material-'i'
// fragments. Rerun after the operator prunes the G: folders (or the local copies).
//
// run: node ingest-images.mjs [--skip-copy]   (--skip-copy = register only, no file copy)
import { readdir, stat, mkdir, copyFile, writeFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join, extname } from 'path';

const HERE = dirname(fileURLToPath(import.meta.url));
const GROUND = 'G:/My Drive/Signal flow/SF002/imagery/seed/ground';
const OUT = join(HERE, '..', 'seeds', 'images');
const skipCopy = process.argv.includes('--skip-copy');

// G: folder name → family id (the operator's sort speaks the same 13)
const FOLDER_FAM = {
  'ternary': 'the-three',
  'circles-return': 'the-ring',
  'motion-swing': 'the-swing',
  'form-growth': 'mid-change',
  'folds-cloth': 'the-crease',
  'bridge-gap': 'the-gap',
  'coffee-cup': 'the-cup',
  'mirror-mountain': 'the-mirror',
  'embodied-metacognition': 'the-body',
  'noise-resonance': 'noise-resonance',
  'grid-within': 'the-grid',
  'veiled-light': 'the-veil',
  'gates-city': 'the-gates',
};
const FAM_N = ['the-three', 'the-ring', 'the-swing', 'mid-change', 'the-crease', 'the-gap',
  'the-cup', 'the-mirror', 'the-body', 'noise-resonance', 'the-grid', 'the-veil', 'the-gates']
  .reduce((m, id, i) => (m[id] = String(i + 1).padStart(2, '0'), m), {});
const WEB_EXT = new Set(['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.jfif', '.avif']);

const entries = [];
const skipped = [];
for (const folder of Object.keys(FOLDER_FAM)) {
  const famId = FOLDER_FAM[folder];
  const fam = FAM_N[famId];
  const dir = join(GROUND, folder);
  const files = (await readdir(dir)).sort((a, b) => a.localeCompare(b, 'en'));  // deterministic order
  let n = 0;
  for (const f of files) {
    const ext = extname(f).toLowerCase();
    const s = await stat(join(dir, f));
    if (!s.isFile()) continue;
    if (!WEB_EXT.has(ext)) { skipped.push(`${folder}/${f}`); continue; }
    n++;
    const nn = String(n).padStart(2, '0');
    const name = `sf02.${fam}.i${nn}${ext === '.jpeg' || ext === '.jfif' ? '.jpg' : ext}`;
    entries.push({
      addr: `${fam}.i${nn}`, family: fam, material: 'i', n,
      file: `seeds/images/${name}`,
      src: { folder, original: f, bytes: s.size },
    });
    if (!skipCopy) {
      await mkdir(OUT, { recursive: true });
      await copyFile(join(dir, f), join(OUT, name));
    }
  }
}

await writeFile(join(HERE, 'images.src.json'), JSON.stringify({
  kind: 'zine-hub/images-register',
  ground: GROUND,
  note: 'Register of ingested image fragments; the files themselves are gitignored. Rerun dev/ingest-images.mjs after a prune, then dev/make-families.mjs to remerge.',
  entries,
}, null, 2) + '\n');

console.log(`ingested ${entries.length} image fragments${skipCopy ? ' (register only)' : ''}`);
if (skipped.length) console.log('skipped (non-web):', skipped.join(' · '));
const per = {};
for (const e of entries) per[e.family] = (per[e.family] || 0) + 1;
console.log(Object.entries(per).map(([f, c]) => `${f}:${c}`).join(' '));
