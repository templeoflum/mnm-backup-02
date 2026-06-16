# note — mythic-library — f0 · intake catalog (orientation pass)

opened 20260616-151757 · keeper · gait [walk]
subject: the `mythic library/` folder dropped into **000** (unit·holds·one) — a prior project, whole, to be grounded before it touches anything else.

**Status of the material: QUARANTINED.** Contaminated until cataloged, examined, refuted-or-confirmed, sorted. Receiving is not endorsing (#200). Nothing here is signed; nothing crosses into the corpus or any branch until it earns it.

This fold is **survey only** — breadth, shape, and the contamination boundary as first read. The deep walk (per-area, per-text provenance, claim-by-claim refutation) is the season ahead. Slow cycles.

---

## what it is

A self-contained prior attempt at the same idea this system is building, dropped in wholesale — it carries its own `.git`, `.github`, `.claude`, `requirements.txt`, pytest. Self-described (`README.md`) as *"Part of the Mythogenetic OS project."* Three sub-projects braided into one repo plus its tooling:

1. **The mythic library** — `texts/` + `sources/`: public-domain source texts across 33 traditions, plus build-metadata. *Our primary intake target: get this into the corpus, find the right format.*
2. **ACP — Archetypal Context Protocol** — `ACP/`: an 8-dimensional coordinate system claiming to encode cross-cultural mythic structure; 997 archetypes. *Our second target: rebuild / reformat for this system.*
3. **Miroglyph** — `miroglyph/`: a browser-based narrative-structuring / exploration tool. *Not a knowledge-base — a build project. Keeper only cleans & sorts it, then hands to the other branches.*

Supporting layers (`data/`, `scripts/`, `validation/`, `integration/`, `outputs/`, `docs/`, `tests/`) are the prior pipeline — derived artifacts and code, not source.

provenance: nested repo HEAD `42695f2` — "Re-export archetypes catalog with clean ACP data" — 2026-02-11. Built ~Jan–Feb 2026.

---

## the shape (top-level, .git excluded)

| area | files | size | what it is | layer |
|------|------:|-----:|------------|-------|
| `texts/` | 4729 | 977M | source texts by tradition; each `{tradition}/{text-id}/` = `SOURCES.md` + `downloads/` + `normalized/` + `segments/` | **SOURCE** |
| `sources/` | 12 | 929K | build-metadata: master_catalog.csv, curated_sources, corpus_audit, extraction/segmentation/normalization results, schema | meta |
| `ACP/` | 127 | 5.0M | the protocol: schema (axes/primordials/relationships) + 997 archetypes as JSON-LD | **CLAIM** |
| `data/` | 7 | 164M | derived analysis: entities.json (12M), motif_tags.json (17M), `mythic_patterns.db` (137M SQLite), thompson_motif_index | **DERIVED** |
| `miroglyph/` | 43 | 1.6M | browser explorer (Atlas/Codex/Chronicle + Journey Mapper); html/js/css + pre-exported JSON | tool |
| `outputs/` | 175 | 17M | generated reports, metrics, 40 human-audit cases | DERIVED |
| `scripts/` | 73 | 1.6M | the pipeline: normalize / segment / extract / motif / database | code |
| `validation/` | 45 | 929K | the falsification suite (v1 archived + v2) | **CLAIM** |
| `integration/` | 17 | 245K | ACP↔library bridge (loaders, entity_mapper) | code |
| `docs/` | 6 | 132K | DEVELOPMENT.md (Phases 1–12), gap_analysis_v3.md | meta |
| `tests/` | 3 | 72K | pytest | code |

total ≈ 5250 files on disk, ~1.1 GB. Manifest (nested git `ls-files`): **5028 tracked.**

### texts/ by tradition (33)
indian 1189 · european 705 · celtic 350 · roman 264 · greek 238 · japanese 222 · chinese 211 · norse 172 · persian 164 · anthology 156 · siberian 108 · north-american 106 · mesopotamian 93 · polynesian 87 · egyptian 86 · southeast-asian 82 · mesoamerican 46 · oceanic 42 · australian-aboriginal 37 · south-american 31 · slavic 28 · arctic 15 · korean 15 · hebrew 14 · germanic 10 · zoroastrian 8 · turkic 3 · levantine 2 · tibetan 2 · baltic 1 · mongol 1 · other 1

README claims **132 texts / 32 traditions**; the on-disk tree shows 33 tradition folders and far more text-id folders. Count reconciliation pending (the deep walk).

---

## contamination read (PROVISIONAL — first pass, subject to change)

The cleanest cut runs between **what was collected** and **what was concluded**:

- **SOURCE (likely groundable):** `texts/` — public-domain material with `SOURCES.md` provenance traveling per text. Still each needs its provenance checked, public-domain status confirmed, and the normalize/segment processing examined (processing can introduce error). This is the safest layer but not free.
- **DERIVED (quarantine):** `data/` entity/motif extraction, the pattern DB. Machine-extracted claims about the source. Believe none of it on sight; spot-check against the texts.
- **CLAIM (hard quarantine):** ACP's 8D coordinates, the relationship ontology, and `validation/`'s verdicts. This is where aspiration outran truth.

**The tell** (`README.md` lines 284–285, Phases 4–10): the original falsification **failed** — *"1D 'same tradition?' outperforms 8D ACP (|r|=0.36 vs |r|=0.09). Co-occurrence primarily reflects cultural origin, not archetypal structure."* The response was to **pivot the test** (v2) to a different question — "cross-cultural structural equivalence" — and declare **"Verdict: STRONG."** That is the exact drift #221 names: when a frame goes stale, findings start protecting the old frame instead of verifying the new. The "STRONG" verdict is a reframe, not a confirmation.

### headline claims to refute-or-confirm (checklist for the season)
- [ ] "132 texts across 32 traditions" — reconcile against the on-disk tree (looks higher)
- [ ] "997 archetypes across 60+ systems, 95% rich+ tier"
- [ ] "8D coordinates empirically weighted" (creation-destruction 2.17 … ascent-descent 0.20)
- [ ] "Validation Verdict: STRONG, all 6 tests pass" — vs. the buried v1 failure
- [ ] "87.5% expert concordance (35/40)" — who were the experts? (likely model-generated audit)
- [ ] DB scale: "4000 segments, 173 entities, 28104 mentions, 579 motifs, 55539 tags"
- [ ] the 18 "cross-cultural patterns" (cosmogony, hero cycle, flood, trickster…)

None checked. All inherited claims, not findings.

---

## edges / snags

- **E1 — nested `.git` inside `mythic library/` (FLOOR HAZARD).** A repo inside our repo. Our `git add` of own paths must never reach into it; it could be swallowed as a gitlink/submodule or shadow our index. Do not `git add` anything under `mythic library/` until this is settled (likely: keep it ignored, or strip its `.git` once we've mined the manifest). **Wants-word before any commit touching that tree.**
- **E2 — path-length casualties: 8 files, one text.** All under `texts/north-american/myths-and-legends-of-the-mississippi-valley-and-th/` (downloads/normalized/segments). Cause: repo-relative path (≤157 chars) + our lattice address prefix (~190 chars) > Windows 260 limit. Recoverable — git object store still holds them (`git show HEAD:<path>`), even if a normal checkout can't write the long name. Fix later (shorten the folder name on extract). Only this one text affected.
- **E3 — 137M binary `mythic_patterns.db`** + 12M/17M JSON. Heavy binaries on the ground floor; decide whether they stay, get mined-then-dropped, or get externalized. Not corpus material.
- **E4 — build cruft present** (`.pytest_cache`, `*.pyc`, `__pycache__`). Noise; ignore/strip when we settle the tree.

---

## walked vs. not

- **walked:** top-level shape, area sizes, texts/ tradition breakdown, README self-description, sample text-folder layout, nested-repo manifest count, path-length reconciliation.
- **not walked:** inside any tradition (4729 text files), the ACP schema + archetype JSON-LD, the validation code, the DB contents, the miroglyph tool, docs/DEVELOPMENT.md (the full Phase 1–12 log — the project's own honest record), the `sources/` metadata files.

---

## next pulls (for discussion — nothing acted on)

1. **Settle E1 (nested .git)** before any commit — how the quarantined tree relates to our floor.
2. **Read `docs/DEVELOPMENT.md`** — the project's own session log is the fastest route to what was actually done vs. claimed.
3. **Decide intake order** — texts first (clean source, format question) or ACP first (the harder reformat). My lean: texts, per the operator's stated order.
4. **Settle the corpus format** for mythic source texts — likely an extension of `template.corpus-records`, but myth/source-text may need its own shape.

This note grows as the walk continues (f1, f2 … per area). Index pointer pending. Held provisionally throughout.
