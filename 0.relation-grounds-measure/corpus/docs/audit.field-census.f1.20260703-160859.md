# audit — field census — f1 — 20260703

**Fold f0 → f1:** f0 was a first pass and **over-flagged narrowness** (it put clean documented research-areas like `habit-formation` in the "doesn't hold" pile). Re-examined against the **sharpened criterion** below. The genuine problem is much narrower than f0 implied. f0 retained as the trail. *(Trigger unchanged: operator flagged field bloat + long invented names, 20260703.)*

## the sharpened criterion

**A field is a documented area of study, named as it names itself.** You can point to a literature under roughly that name. **The tell of invention is the compound mashup or the over-specified suffix — NOT narrowness.** A narrow but real, cleanly-named research area is a fine field (`creativity-research`, `naturalistic-decision-making`, `perceptual-learning`, `habit-formation`, `synaptic-plasticity`). What fails:

- **mashup** — two distinct co-equal fields hyphenated (`cybernetics-control-theory`)
- **over-specification** — a real field with a subtopic/concept suffixed (`fluid-dynamics-hydrodynamic-stability`, `phenomenological-method`)
- **technique / standard / pattern as field** — an object-sized thing made a container (`ieee-754-floating-point`, `retrieval-augmented-generation`)
- **descriptive non-name** — no documented field goes by it (`addressing-namespace-design`, `graphics-sampling-artifacts`)

## the tightened finding

f0 flagged ~34 as smelling. Under the sharpened criterion the real actionable set is **~40 across four buckets, but most are one-line renames**, and a large group f0 flagged is now **cleared**. The math / analysis / algebra / probability / named-science core was never in question and stays.

---

## A — HOLD (documented areas). Previously-flagged, now CLEARED:

These are real, documented, cleanly-named research areas — narrow ≠ invented. **No change:**

`habit-formation` · `synaptic-plasticity` · `operant-conditioning` · `theory-of-constraints` · `toyota-production-system` · `stigmergy` · `tacit-knowledge` · `argument-structure` · `data-curation` · `philosophy-of-craft` · `numeration-systems` · `glossolalia-studies` · `creativity-research` · `naturalistic-decision-making` · `perceptual-learning` · `contemplative-science` · `interoception`

(Plus the whole established core: the number-theory / analysis / algebra / geometry / probability / statistics / CS / named-science fields.)

## B — RENAME (real field, over-specified name → the discipline's short name)

*Low-controversy: the field is real, only the name over-reaches. `float` unless marked ⚙settled. High-confidence unless marked ~borderline (suffix may be intentional — your call).*

| current | → proposed |
|---|---|
| `fluid-dynamics-hydrodynamic-stability` | `fluid-dynamics` |
| `fractal-geometry-self-similarity` | `fractal-geometry` |
| `real-analysis-limits` | `real-analysis` |
| `ergodic-theory-equidistribution` | `ergodic-theory` |
| `special-functions-series-acceleration` | `special-functions` (series-acceleration → objects) |
| `harmonic-fourier-analysis` ~ | `harmonic-analysis` |
| `point-process-statistics` ~ | `point-processes` |
| `coordinate-systems-erlangen-program` | `erlangen-program` (or `klein-geometry`) |
| `choice-architecture-behavioral-economics` | `behavioral-economics` |
| `phenomenological-method` | `phenomenology` |
| `narratology-story-morphology` | `narratology` |
| `comparative-mythology-oral-tradition` | `comparative-mythology` |
| `nonverbal-perception-thin-slicing` | `nonverbal-perception` |
| `altered-states-neuroscience` ~ | `altered-states-of-consciousness` |
| `dissociation-mediumship-psychology` | `dissociation` |
| `recursive-grammar-fractal-linguistics` | `generative-grammar` (fractal-linguistics isn't a field) |
| `interactive-fiction-ludology` | `ludology` |
| `constructionism-microworlds` | `constructionism` |
| `ethology-horsemanship-lineage` | `ethology` |
| `ai-alignment-praxis` | `ai-alignment` |
| `mechanistic-interpretability-probing` | `mechanistic-interpretability` |
| `representation-learning-embeddings` | `representation-learning` |
| `intrinsic-dimension-manifold-learning` | `manifold-learning` |
| `validated-interval-arithmetic` | `interval-arithmetic` |
| `software-testing-n-version` | `software-testing` |
| `reproducibility-engineering` | `reproducible-research` |
| `preregistration-open-science` ~ | `open-science` |
| `zettelkasten-knowledge-organization` | `knowledge-organization` (zettelkasten → method/object) |
| `version-control-theory` | `version-control` |
| `apophatic-traditions` | `apophatic-theology` |
| `generative-live-visual-art` | `generative-art` |
| `prepared-environment-pedagogy` | `montessori-education` |

## C — SPLIT / true mashup (two co-equal fields; needs your call on the target)

| current | the two things | lean |
|---|---|---|
| `cybernetics-control-theory` ⚙ | cybernetics + control theory | → `cybernetics` (objects are cybernetics-flavored) |
| `high-reliability-orgs-safety-engineering` ⚙ | HRO + safety engineering | → `high-reliability-organizations`; safety-engineering objects may want their own home |
| `distributed-cognition-extended-mind` ⚙ | distributed cognition + extended mind | → `distributed-cognition` (extended-mind = a theory/object within) |
| `distributed-systems-flow-control` ~⚙ | distributed systems + flow control | → `flow-control` (objects are flow-control-specific), or keep |

## D — DEMOTE TO OBJECT (a technique / standard / pattern, not an area of study)

*These name an object-sized thing. Proposal: retire the field, re-home its objects under a real host field.*

| current | is a | → objects go under |
|---|---|---|
| `ieee-754-floating-point` ⚙ | a standard | `numerical-analysis` (or a `computer-arithmetic` field) |
| `retrieval-augmented-generation` ⚙ | a technique | `information-retrieval` |
| `event-sourcing-append-only-architecture` ⚙ | an architecture pattern | a software-architecture field (none yet — hold?) |
| `explorable-explanations` ⚙ | a genre | `human-computer-interaction` / `data-visualization` |
| `addressing-namespace-design` ⚙ | descriptive non-name | its objects (namespace, DNS, URI, gödel-numbering) may support a real `naming-and-addressing` field — or fold |
| `graphics-sampling-artifacts` ⚙ | descriptive non-name | a `computer-graphics` field (none yet) / `digital-signal-processing` |
| `knowledge-dataset-distillation` ⚙ | two techniques | a broader ML field (`model-compression`?) |
| `faceted-classification` ~⚙ | a technique | `knowledge-organization` — **or hold** (borderline: real named area) |
| `literate-programming` ~⚙ | a paradigm | hold as narrow area **or** object under software-engineering (borderline) |

## E — TYPE QUESTION (not the invention problem — a design decision)

The **34 mythic-library Bin-1** fields — 14 esoteric (`tarot`, `enneagram`, `chakras`, `iching-*`, `wu-xing`, `western-astrology`, `elder-futhark`…) + 20 psychology/typology (`mbti`, `big-five`, `jungian-archetypes`, `propp-morphology`, `commedia-dellarte`…) — are **not areas of study; they are the systems being studied.** Calling them `field` stretches the word. This was deliberate intake, so it's not drift — but it raises a clean policy question: **should they carry a distinct type (`system` / `tradition`) instead of `field`?** Independent of A–D.

---

## summary + recommendation

- **B (rename):** ~32 — mechanical, low-controversy, the proven re-point mechanic. Mostly `settled` (older fields), so each wants your nod, but they're one-liners.
- **C (split):** 4 — need your call on the target name.
- **D (demote):** ~9 — retire field, re-home objects; a couple are borderline-hold.
- **E (type):** 34 symbolic systems — a `field`-vs-`system` policy decision.
- **Cleared from f0:** the narrow-but-clean research areas (habit-formation et al.) — no longer flagged.

**Proposed order:** settle the **naming rule** into the keystone first (so this doesn't recur), then walk **B** top-to-bottom (fast renames), then decide **C** and **D** per-item, and treat **E** as its own conversation. Nothing here is touched — my four from pass 1 are the only changes on disk.

*Read only.*
