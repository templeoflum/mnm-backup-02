# frame — bridge · joins · corpus — f1 — [opens settled · slice 1 building · vault = 0/corpus/ permanent]

Folds [[frame.wiki-bridge.f0]] (frozen origin) at the first build-tracking update: **all four
opens settled by the operator, 20260702.** Scope unchanged — the bridge only; ingest is the
keeper's half; run none of cobsidian's code ([[audit.kb-tooling-vet.f0]]).

## §1 — agreement · at a glance

- **the four settles (operator, 20260702):**
  1. **triad BLESSED:** `bridge · joins · corpus`.
  2. **vault scope = corpus-only, permanent** — no intention of ever widening. Vault root =
     `0/corpus/` (the one `.unit` database); quarantine and the rest of the repo stay outside
     by construction.
  3. **wiki convention = lattice-native**, settled by comparison, not default. cobsidian's
     schema read against `template.corpus-records.f6`: source↔source and field↔domain are the
     same slots (ours richer — lineage/door vs "topic area"); their concept/entity split does
     **not** divide our objects — nearly all 1014 are their "concepts," and our `object-type`
     vocabulary already cuts finer. Their folders exist to carry type; our type lives in the
     handle + frontmatter and the corpus is deliberately flat — **no folders. Graph groups by
     filename prefix (`field.` / `source.` / `object.`) instead.**
  4. **app install: now** (operator's hands, 20260702).
- **PARKED — the entity layer (the WHO).** The one thing cobsidian's split names that we
  deliberately lack: people/orgs/places as first-class records (attribution is strings today).
  Operator: real, useful, **additive not a re-split** — a future corpus-schema fold
  (keeper + operator), independent of this bridge; the bridge graphs them the day they exist.
- everything else as f0 §1 (model: parallel read-only reader; stack: no code to run).

## §2 — plan · slices & rungs
status marks: ○ todo · ▸ doing · ✓ done · ⊘ blocked

**chunk A — the vault (the viewer floor)**
- **slice 1 — vault config**  ✓ — minimal `.obsidian/` at `0/corpus/` (app.json tracked;
  graph.json with type-prefix color groups on disk + in history, ignored after confirm
  revealed it carries live view state — zoom/pane churn per use) + corpus-local `.gitignore`.
  No community plugins — confirmed on disk: no `community-plugins.json`, no `plugins/` dir;
  restricted mode is the default for a plugin-less vault (the trust prompt only fires when a
  vault arrives carrying plugins). **Confirmed 20260702:** vault opens · graph renders
  (operator's eye) · `git status` clean on the corpus — no note mutated.
- **slice 2 — link-resolution reconcile**  ⊘ **CLOSED BY REDIRECTION (20260702)** — the
  alias rule FAILED against reality (operator-tested post-reindex: aliases do not resolve
  raw wikilinks; incident + RCA: [[audit.wiki-bridge-alias-incident.f0]]). Alias pass
  **reverted** (schema f8); rename fix rejected by the operator (filenames inviolate).
  Resolution is no longer sought from Obsidian — **graph + resolution move to
  [[frame.corpus-reader.f0]]** (210). Original record of the pass:
  Survey: 4402 body wikilinks / 1220 distinct targets; 1129 = exact handles (97.4% of
  instances); 0 resolved pre-fix; 91 ghosts = mostly **person names (the parked entity
  layer's future landing pads — left standing)**, 13 bracketed URLs (converted to md links),
  1 typo (`hausdorff-dimension` → prefixed), 1 out-of-vault doc ref (correct ghost).
  Fix: `aliases: ["<handle>"]` appended to frontmatter of all 2001 records (newest fold
  only — only `corpus.index` is multi-fold), node script, byte-faithful UTF-8. Commit 739c5c5.
  **Finding → SETTLED + RUN (operator blessed, 20260702):** the frontmatter dependency web
  (`depends-on`/`used-by`/`field`/`source`/`links`) was invisible to the graph — Obsidian only
  graphs wikilink-syntax. Schema folded **f6→f7** (`template.corpus-records.f7`, 000): refs
  become quoted wikilinks `"[[handle]]"`; **6259 refs quoted across 1931 records** by script;
  index pointer trued. Consumer check first: no code parses these fields. Commit 1b6da0e.
  The graph now carries the claim-structure, not just prose cross-refs. *Edge-type distinction
  inside Obsidian's native graph: not possible (canvas-rendered, CSS can't reach edges; edges
  untyped by design) — a typed-edge view would be our own buildless unit later, parked.*

**chunk B — the wiki convention (ours, the shape)**
- **slice 3 — the wiki convention**  ⊘ retired with the redirection — graph conventions now
  live in [[frame.corpus-reader.f0]]; Obsidian keeps only the vault config.
- **slice 4 — corpus index / graph hub**  ⊘ retired — the reader unit's find/focus is the hub.

**chunk C — populate** — keeper + operator's half, parallel, unchanged.
**deferred** — canvas surface (unchanged) · **entity layer (parked, see §1)**.

## §3 — trace · DAG & status
```
A1 vault-config ✓─→ A2 link-reconcile ─┐
                                        ├─→ B3 wiki-convention ─→ B4 index/hub ─→ (C: keeper ingests)
                                        └─→ (deferred: canvas · parked: entity layer)
```
- **status: CLOSED-AS-REDUCED (20260702).** The bridge lands as: Obsidian = plain
  single-record reader + full-text search over the corpus (slice 1 vault config ✓, stands);
  graph + handle-resolution redirected to [[frame.corpus-reader.f0]] after the alias
  incident. Entity layer stays parked. No further slices here.
- **builds on:** f0 (frozen) · [[audit.kb-tooling-vet.f0]] · [[note.kb-tooling.f1]] ·
  [[template.corpus-records.f6]] (the compared ground).
- mode: clerk · building at 211 · commit per change.
