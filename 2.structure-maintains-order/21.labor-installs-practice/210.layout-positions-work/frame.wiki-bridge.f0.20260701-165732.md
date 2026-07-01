# frame — bridge · joins · corpus — f0 — [spec forming · not built · build-our-own-bridge to Obsidian, run NONE of cobsidian's code · triad proposed/unblessed · folder-structure fork OPEN]

A buildless bridge that makes the knowledge-corpus at `0` navigable + graphable in the Obsidian
app — a read-only window over the same plain-`.md` files. We adopt the *pattern*, not the code
(vet: [[audit.kb-tooling-vet.f0]]). Populating the wiki (ingest/curate) is the keeper+operator's
half — this frame is only the clerk's half: the vault, the convention, the link reconcile.

## §1 — agreement · at a glance

- **scope = the BRIDGE only.** In: a minimal Obsidian vault config over the corpus, a wiki
  folder convention, and a `[[slug]]` ↔ Obsidian title/path **resolution reconcile**. NOT this
  frame: cobsidian's retrieval engine (python/bm25/rerank/ollama), its `bin/` bootstraps, hooks,
  and **the vendored `.obsidian/plugins/`** — all excluded by the vet; **ingest/populate** (the
  keeper's half); canvas + Advanced-Canvas (deferred).
- **why build-our-own:** the vet — cobsidian's own scripts are hygienic, but adopting whole is a
  heavy code surface + 4 unvettable minified community plugins (the rug-pull layer). The parts we
  want are **inert** (a folder convention + the mainstream app as a viewer). So: read as
  reference, run none of it.
- **the model:** Obsidian = a **parallel read-only reader** over the identical files — one source
  of truth, two readers. The lattice keeps its addressing, git, and tooling unchanged; Obsidian
  adds only its own `.obsidian/` config and builds the graph from `[[links]]` already in the
  notes. Non-destructive: it doesn't rewrite a note unless edited *through* it.
- **stack:** **no code to run.** A markdown folder convention + a minimal `.obsidian/` config.
  The Obsidian **app** is a separate, mainstream install (operator action; official installer,
  **no community plugins**, plugin auto-update **off**).
- **triad — PROPOSED, unblessed [float]:** `bridge · joins · corpus`. Awaits operator bless/reword.
- **division (branch-2 split, [[note.kb-tooling.f1]]):** clerk stands up the bridge; keeper +
  operator populate + curate. Ingest is parallel work, not an in-line dependency
  ([[handoff-is-not-a-gate]]).

## §2 — plan · slices & rungs
status marks: ○ todo · ▸ doing · ✓ done · ⊘ blocked

**chunk A — the vault (the viewer floor)**  *(the MVP: open the corpus in Obsidian, see its graph)*
- **slice 1 — vault config**  ○ — a minimal `.obsidian/` (graph settings, no plugins, auto-update
  off) so the app opens the corpus non-destructively and graphs existing `[[links]]`. **Vault
  scope OPEN:** corpus-at-`0` only vs the whole repo (graph the entire lattice). Confirm: app
  opens, graph renders, no notes mutated.
- **slice 2 — link-resolution reconcile**  ○ — survey `[[slug]]` (our convention) vs Obsidian's
  title/path resolution across the corpus; settle the rule so links resolve (likely: filename =
  slug → resolves by path); report unresolved links to sweep. A survey + the rule, not a rewrite.

**chunk B — the wiki convention (ours, the shape)**
- **slice 3 — the wiki convention**  ○ · **FORK OPEN: lattice-native vs cobsidian's names.**
  Define the page-type folders + linking convention for corpus pages. *Lean: lattice-native* —
  let Obsidian graph our existing structure/links; add convention only where we lack one; don't
  import `concepts/entities/sources/domains` wholesale ([[dont-adopt-the-materials-ontology]]).
- **slice 4 — corpus index / graph hub**  ○ — an entry page (index, + a hot/log equivalent if
  wanted) that seeds the graph and orients a reader. Optional/light.

**chunk C — populate**  *(NOT a clerk build — handed to keeper + operator)*
- ingest `.raw` sources → wiki pages, curate. Parallel work; clerk's bridge only provides the
  structure + resolution it lands into.

**deferred** *(revisit after the viewer lands):* the Obsidian **Advanced Canvas** surface — needs
the app + a *separately vetted* plugin; the visual/drag layer, its own pass.

## §3 — trace · DAG & status
```
A1 vault-config ─→ A2 link-reconcile ─┐
                                       ├─→ B3 wiki-convention ─→ B4 index/hub ─→ (C: keeper ingests)
                                       └─→ (deferred: canvas surface)
```
- **status:** spec forming · not built · triad proposed (unblessed) · two forks OPEN (vault scope,
  folder structure) · Obsidian app = operator install.
- **opens for the operator:** (1) triad bless/reword · (2) vault scope — corpus-only vs whole repo
  · (3) folder structure — lattice-native vs cobsidian names · (4) when to install the app.
- **builds on:** [[audit.kb-tooling-vet.f0]] (run none of their code) · [[note.kb-tooling.f1]]
  (the adopt decision + division) · [[buildless-unit-default]] · [[explorer-not-product]].
- **freeze note:** f0 is the spec; fold f0→f1 at the first build-tracking update (origin frozen).
- mode: clerk · framing at 210 · before build (210), on the operator's go.
