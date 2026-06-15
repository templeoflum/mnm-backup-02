# raw.index — the feedstock register — f0 — 20260615-154824

**The catalog of raw research — the mine the corpus is extracted from.** Parallel to `corpus.index` (which catalogs the *records*); this catalogs the *feedstock*. One file, at the corpus-unit root, beside the record index — it folds/appends as research arrives, so it never piles into a folder. `raw/` stays pure feedstock; this register is how we track it.

**Unit-structure note (operator, 20260615):** the corpus `.unit` is its own origin point — organized in **≤3 internal depths**, semantic folders not digit-addresses (the keystone fractal one level down). Today: depth 0 = the unit root (records, both indexes); depth 1 = `raw/` (feedstock). `raw/notes/` (depth 2) is held in reserve, used only if tracking ever needs more than this one register — never deeper.

**Discipline:** this is a **collect** — gather candidate fields faithfully, no cutting. The **sift** (which candidates become records, in/out of scope) is a *shared* pass, later. Pipeline (operator): fields we don't already have → credible established sources → objects where we can; raw kept as the reference we consult when reviewing cycles for friction/vocab. Slow cycles — process what we have before gathering more, or we waste.

---

## inventory — the raw research, by status

### PROCESSED → became the corpus (the three dives)
Per `marginalia/map.the-corpus.research-op.f2`: the corpus's ~83 fields → 1029 records came **only** from the three "archaeological canon maps":
- `marginalia/compass_artifact_…4a441a0b…` — **the Measuring Canon** (dive 0)
- `marginalia/compass_artifact_…c0dfac0d…` — **the Mind Canon** + remainder sweep (dive 1)
- `marginalia/compass_artifact_…841f5945…` — **the Structure Canon** (dive 2)
- compiled to `marginalia/the-corpus.compiled-cards.three-dives` (sealed 20260611).

### UNPROCESSED → never extracted (the backlog)
All the same genre: **design / self-research** — about how the system works and gets built, not domain-reference. ~21 docs:

- **in `raw/` (the 6 new dives, already here):** stigmergy · safe-systems-asymmetry · two-phase-mind · channeling-craft-reading-list · inner-stillness-perception · inward-channeling-grammar.
- **at `000` (pending move into `raw/`):**
  - `research01–03` — Grounding (structural realism, categorical foundations, measurement) · MECHANICS (generating sets, orbit spaces, self-similarity) · Frontier (intrinsic dimension, emergent/relational spacetime, grammar–ontology).
  - `research04–06` — Mind/Memory/External-Hold · Self-Similar/Recursive Grammar in language · Making/Craft/Tacit-Knowledge.
  - `research07–09` — Relational Architecture (esoteric systems as networks) · Traversal & Initiation (why glimpses resist transmission) · The Shadow (unconstrained relation).
  - `research10–12` — Experiment Feasibility/Design (structured-vs-flat) · Data-Curation Pipeline · Distillation/Comparison/Handoff.
  - `0_ / 1_ / 2_` — tooling landscape: Storage/Math/Graph · Visualization/Frontend/Compute · Embeddings/Vector-Stores/Distillation (Parked).

---

## collect pass — f0 — candidate fields (deduped vs the existing 78)

Generous, uncut. Marked: **[have]** already a corpus field · **[new]** candidate · **[scope?]** real domain but in-scope is a sift call · **[not-field]** tooling/instance, not a domain.

**Coordination · flow · systems** (the 6 dives + channeling list)
- stigmergy **[new]** · network-flow theory (max-flow/min-cut) **[new]** · theory-of-constraints **[new]** · queueing theory (Little's law, Erlang) **[new]** · constructal law **[new, scope?]** · fluid dynamics / hydrodynamic stability **[new]** · traffic-flow theory **[new]** · high-reliability-organizations & safety engineering (HRO, Normal Accident Theory, andon/jidoka, fail-safe) **[new]** · self-regulation theory (cybernetic) **[new]** · choice architecture / behavioral economics **[new]** · cybernetics & control theory **[have]** · second-order cybernetics **[have]** · general systems / requisite variety (Ashby) **[new, near cybernetics]**

**Cognition · creativity · perception** (dives + research)
- explore-exploit / cognitive search (foraging, bandits) **[new]** · creativity research (divergent-convergent, incubation, DMN) **[new]** · naturalistic decision-making / expert intuition (Klein RPD; Kahneman-Klein) **[new]** · nonverbal perception / thin-slicing (Ambady, Ekman) **[new]** · perceptual learning (Gibson, Kellman) **[new]** · contemplative science / meditation research **[new]** · interoception (Farb; Gendlin felt-sense) **[new]** · distributed cognition / extended mind (Clark-Chalmers, Hutchins) **[new]** · tacit knowledge **[have]** · deliberate practice **[have]**

**Mind · consciousness · the channel** (research04, 07–09; channeling dives)
- dissociation & mediumship psychology (Myers, Flournoy, Janet, Wegner, Dienes) **[new]** · anthropology of trance/possession (Bourguignon, Lewis, Luhrmann, Goodman) **[new]** · altered-states neuroscience / transient hypofrontality (Dietrich) **[new]** · glossolalia studies **[new]**

**Foundations · philosophy · language** (research01–06)
- ontic structural realism **[new, scope?]** · category theory / categorical foundations **[new]** · fractal geometry / self-similarity **[new]** · intrinsic-dimension estimation / manifold learning **[new]** · emergent/relational spacetime **[new, scope?]** · philosophy of craft (technê/poiesis/praxis) **[new]** · recursive grammar / fractal linguistics **[new]**

**Esoteric · hermetic** (research07–09) — **[scope?]** flagged as a set: is this a domain we ground, or design-rationale only?
- Western esotericism (Faivre, Hanegraaff) · Kabbalah / Sefer Yetzirah · alchemy / Hermeticism · mystery religions (Eleusinian) · gematria & textual esotericism · philosophy of language / private-language (Wittgenstein) · semiotics / unlimited semiosis (Eco) · simulacra (Baudrillard)

**ML · data** (research10–12; `2_` tooling)
- representation learning / embeddings **[new]** · knowledge & dataset distillation **[new]** · retrieval-augmented generation / in-context learning **[new]** · data curation **[new]** · mechanistic interpretability / probing **[new]** · information retrieval **[new]**

**Tooling** (`0_ / 1_ / 2_`) — **[not-field]**: build-stack landscape (D3/Plotly/Three.js, FAISS/Chroma, storage engines), not academic domains. The underlying *algorithms* (cosine-similarity, kNN, k-means) could be object-records, not fields. Likely build-reference, not corpus — sift call.

---

## flags surfaced by the collect

1. **A possible gap in the *existing* corpus.** The map's mind-canon **slice-12 "myth & meaning"** (structuralism · semiotics · linguistics-argument-structure · narratology · comparative-mythology · apophatic-traditions · interactive-fiction/ludology — 7 fields) does **not** appear among the 78 corpus field slugs. They were hunted in the dives but seem **not extracted into records** (or renamed). ~83 rungs vs 78 fields ≈ this gap. **Verify before assuming** — but if real, this is unprocessed *within* the material we thought was done.
2. **Two genres, one pipeline.** Most candidates are the system's *own* operating domains (coordination, cognition, channeling) — grounding our method in real lineage, the "honor lineage / establish vocab for what we do" payoff. A subset (esoteric, structural-realism, emergent-spacetime) is more *design-rationale* than groundable domain — the sift decides which earn field records vs. stay design-input in `raw/`.
3. **Scope is the sift's first question**, not mine to settle: how far does "a domain we ground" reach — coordination/cognition yes; esoteric/frontier-physics/ML-tooling, to be decided together.

---

*f0 — collect only. Inventory of all raw research (3 processed → corpus; ~21 unprocessed). Candidate fields gathered uncut and deduped vs the 78, clustered and flagged. No records written, no cuts made. Next: the shared sift (which candidates become fields), then sources, then objects — slow cycles. Also flagged: a possible slice-12 gap in the existing corpus, to verify.*
