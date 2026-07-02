// make-test-zine.mjs — deterministic generator for the CANONICAL 4pp test zine
// (operator-designed, 20260702): one preset per side — C1a single · C1b 2 cols ·
// C2a thirds · C2b grid 2×2 — every slot's story names its own leaf address +
// preset + slot, so the zine identifies itself in any view, flip, or print.
// run: node make-test-zine.mjs  → writes fixtures/zine.test-base.f0.json
import { writeFile, mkdir } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { presetByName, presetRects } from '../src/presets.js';
import { atomInRect } from '../src/atom.js';
import { toProject } from '../src/project.js';
import { pageRole, roleCode } from '../src/pagetype.js';

const HERE = dirname(fileURLToPath(import.meta.url));
const spec = { w: 5.5, h: 8.5, unit: 'in' };
const PLAN = ['single', '2 cols', 'thirds', 'grid 2×2'];   // pages 0..3 = C1a C1b C2a C2b

let atomN = 1, storyN = 1;
const stories = [];
const pages = PLAN.map((presetName, pi) => {
  const preset = presetByName(presetName);
  if (!preset) throw new Error(`unknown preset "${presetName}"`);
  const code = roleCode(pageRole(pi, PLAN.length));
  const rects = presetRects(preset, spec);
  const atoms = rects.map((rect, si) => {
    const a = atomInRect('text', rect, 'a' + atomN++);
    const s = { id: 's' + storyN++, text: `${code} · ${presetName} · slot ${si + 1}/${rects.length}` };
    stories.push(s);
    a.storyId = s.id;
    delete a.text;
    return a;
  });
  return { id: 'pg' + (pi + 1), atoms };
});

const doc = toProject({ spec, pages, stories });
await mkdir(join(HERE, 'fixtures'), { recursive: true });
await writeFile(join(HERE, 'fixtures', 'zine.test-base.f0.json'), JSON.stringify(doc, null, 2) + '\n');
console.log(`wrote fixtures/zine.test-base.f0.json — ${pages.length} pages, ${stories.length} stories`);
