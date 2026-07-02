// make-families.mjs — deterministic generator for families.json v2 (the refold after
// note.hub-address-walk: one vocabulary, item-level tags, dotted positional addresses).
//
// Reads: dev/prompts.src.json  (the A1 prompt pass — texts verbatim + family tags)
//        the snippets list at 102 (288 lines parsed, never retyped — verbatim held)
// Embeds: the fragment→family tag map (clerk's item-level pass, 20260702; the operator's
//         prune retags freely — rerun this script after editing the maps below).
// Emits:  families.json v2 — addresses sf02.<fam>.<w|i><n>.<l|i><n>.<stamp>.<author>.<ext>
//
// run: node make-families.mjs   (from anywhere; paths resolve relative to this file)
import { readFile, writeFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const HERE = dirname(fileURLToPath(import.meta.url));
const SNIPPETS = join(HERE, '../../../..', '..',
  '1.presence-minds-awareness/10.gaze-beholds-totality/102.chaos-untethers-finality',
  'list.sf02-zine-snippets.f0.20260702-051840.md');

// the 13 families — order fixes the numeric joint (01–13)
const FAMILIES = [
  ['the-three', 'ternary / the three'],
  ['the-ring', 'circles / rings / return / ouroboros'],
  ['the-swing', 'motion / the swing / the coal on the cord'],
  ['mid-change', 'form / growth / the shape mid-change'],
  ['the-crease', 'folds / cloth / the crease'],
  ['the-gap', 'the bridge that never meets / the gap'],
  ['the-cup', 'the coffee cup'],
  ['the-mirror', 'the mirror and the mountain'],
  ['the-body', 'embodied / meta-cognition'],
  ['noise-resonance', 'noise into resonance (the through-line)'],
  ['the-grid', 'the grid you stand inside'],
  ['the-veil', 'veiled light / the eye that never opens'],
  ['the-gates', 'the gates / the stomach / the city'],
];

// fragment→family: clerk's item-level pass over the 288 lines (registers stay as
// provenance on each fragment; this map is what the operator's prune edits).
const FRAG_MAP = {
  'the-three': [87, 208, 228, 238],
  'the-ring': [1, 11, 48, 49, 50, 51, 68, 73, 89, 113, 129, 130, 173, 174, 179, 194, 199, 216, 217, 223, 224, 232, 239, 244, 251, 261, 265, 283, 288],
  'the-swing': [5, 23, 47, 53, 54, 229, 230],
  'mid-change': [21, 46, 67, 70, 72, 80, 190, 191, 205, 245, 248, 277, 279, 280],
  'the-crease': [27, 58, 61, 62, 74, 75, 76, 78, 79, 88, 91, 97, 287],
  'the-gap': [24, 37, 43, 52, 55, 63, 64, 65, 66, 71, 92, 93, 94, 95, 96, 101, 177, 181, 197, 206, 211, 212, 218, 225, 237, 268, 270, 271, 272, 282],
  'the-cup': [116, 125, 128, 136, 281],
  'the-mirror': [3, 8, 18, 30, 33, 45, 107, 109, 114, 115, 117, 118, 119, 120, 121, 134, 153, 182, 189, 198, 201, 222, 226, 258, 263, 275],
  'the-body': [6, 39, 40, 81, 100, 112, 124, 172, 178, 180, 183, 184, 185, 186, 187, 192, 195, 196, 200, 202, 209, 210, 213, 247, 252, 254, 255, 273, 286],
  'noise-resonance': [2, 9, 10, 12, 13, 14, 15, 16, 19, 22, 31, 41, 42, 132, 133, 137, 214, 215, 227, 231, 235, 246, 259, 260, 269, 276],
  'the-grid': [38, 56, 57, 59, 60, 83, 85, 90, 102, 103, 104, 105, 106, 108, 111, 122, 123, 126, 127, 135, 167, 207, 219, 220, 233, 234, 236, 240, 243, 257, 262, 266, 274, 278, 284],
  'the-veil': [4, 7, 17, 20, 25, 26, 28, 29, 32, 44, 77, 82, 86, 98, 99, 110, 131, 188, 193, 203, 204, 241, 242, 249, 256, 264, 267, 285],
  'the-gates': [34, 35, 36, 69, 84, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 168, 169, 170, 171, 175, 176, 221, 250, 253],
};

const famN = new Map(FAMILIES.map(([id], i) => [id, String(i + 1).padStart(2, '0')]));

// ── parse the snippets list: "NN. \"text\" (source tag)" under "## X — register" ──
const md = await readFile(SNIPPETS, 'utf8');
const lines = {};
let register = null, registerLabel = null;
for (const raw of md.split(/\r?\n/)) {
  const h = raw.match(/^## ([A-G]) — (.+)$/);
  if (h) { register = h[1]; registerLabel = h[2]; continue; }
  const m = raw.match(/^(\d{1,3})\. "(.*)" \(([^)]+)\)\s*$/);
  if (m && register) lines[+m[1]] = { text: m[2], register, source: m[3] };
}
const parsed = Object.keys(lines).length;
if (parsed !== 288) throw new Error(`expected 288 snippet lines, parsed ${parsed}`);

// invert + verify the fragment map covers 1..288 exactly once
const fragFam = new Map();
for (const [fam, nums] of Object.entries(FRAG_MAP)) {
  for (const n of nums) {
    if (fragFam.has(n)) throw new Error(`fragment ${n} tagged twice`);
    fragFam.set(n, fam);
  }
}
for (let n = 1; n <= 288; n++) if (!fragFam.has(n)) throw new Error(`fragment ${n} untagged`);

// ── prompts: A1's pass, renumbered WITHIN family+mode (storm order preserved) ──
const src = JSON.parse(await readFile(join(HERE, 'prompts.src.json'), 'utf8'));
const modeChar = { word: 'w', image: 'i' };
const counters = {};
const prompts = src.prompts
  .map((p) => ({ ...p, storm: +p.id.slice(1) }))
  .sort((a, b) => a.storm - b.storm)
  .map((p) => {
    const fam = famN.get(p.family);
    const mc = modeChar[p.mode];
    const key = fam + mc;
    const n = (counters[key] = (counters[key] || 0) + 1);
    return { addr: `${fam}.${mc}${String(n).padStart(2, '0')}`, family: fam, mode: mc, n, text: p.text, src: { storm: p.storm } };
  });

// ── fragments: parsed lines, renumbered within family (list order preserved) ──
const fcounters = {};
const fragments = [];
for (let listN = 1; listN <= 288; listN++) {
  const fam = famN.get(fragFam.get(listN));
  const n = (fcounters[fam] = (fcounters[fam] || 0) + 1);
  const L = lines[listN];
  fragments.push({
    addr: `${fam}.l${String(n).padStart(2, '0')}`, family: fam, material: 'l', n,
    text: L.text, register: L.register, source: L.source, src: { list: listN },
  });
}
// image fragments (material 'i') enter at A2 when the image pool lands in the unit.

const out = {
  kind: 'zine-hub/families',
  version: 2,
  note: 'The refold (note.hub-address-walk, operator go 20260702): one vocabulary — the 13 families tag every item natively; registers ride as provenance only. Addresses are dotted positional, broad to fine; numbers are within-parent. Regenerate with dev/make-families.mjs; the operator prunes by editing its maps and rerunning.',
  address: 'sf02.<family>.<w|i><prompt>.<l|i><fragment>.<stamp>.<author>.<ext>',
  families: FAMILIES.map(([id, label], i) => ({ n: String(i + 1).padStart(2, '0'), id, label })),
  prompts,
  fragments,
};
await writeFile(join(HERE, '..', 'families.json'), JSON.stringify(out, null, 2) + '\n');

const pc = {}, fc = {};
for (const p of prompts) pc[p.family] = (pc[p.family] || 0) + 1;
for (const f of fragments) fc[f.family] = (fc[f.family] || 0) + 1;
console.log(`families.json v2 — ${prompts.length} prompts, ${fragments.length} fragments`);
for (const f of out.families) console.log(`  ${f.n} ${f.id.padEnd(16)} prompts ${String(pc[f.n] || 0).padStart(2)} · fragments ${String(fc[f.n] || 0).padStart(2)}`);
