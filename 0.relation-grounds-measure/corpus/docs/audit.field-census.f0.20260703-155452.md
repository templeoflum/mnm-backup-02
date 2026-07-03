# audit — field census — f0 — 20260703

**Trigger:** operator flagged (20260703) that recent field additions read as bloat, and that long compound field-names are the tell of invention. Question raised: *what even is a field here, and how are they being classified?* This census re-examines all 164 fields against a recalibrated criterion. **Nothing is changed by this doc — it is a read for the operator to adjudicate.** Sibling to `incident.field-name-extraction.f0` (the earlier extraction drift; this is the naming/existence drift).

## the recalibrated criterion (proposed)

**A field is an established, documented discipline — one that names *itself*.** You can point to it as a journal, textbook, course, or encyclopedia entry carrying roughly that name. Its name is the discipline's own, usually short and recognized (`category-theory`, `metrology`, `psychophysics`, `semiotics`, `algorithms`).

**Tells of invention** (a field the corpus made up rather than named):
- **compound mashup** — two real things hyphenated together (`human-factors-supervisory-control`, `high-reliability-orgs-safety-engineering`)
- **field + subtopic suffix** — a real field with a concept appended (`real-analysis-limits`, `fractal-geometry-self-similarity`)
- **concept / technique / standard / method elevated to field** — a single object-sized idea made a container (`stigmergy`, `literate-programming`, `ieee-754-floating-point`)

**The test going forward:** can I point to the discipline calling itself this? If I'm compounding, suffixing, or elevating a concept, it fails — the material should route into the real field it belongs to, or live as an object, not spawn a field.

## classes

- **A — established, well-named.** Keep as-is. (The healthy core: the mathematics/statistics/CS/named-science fields.)
- **B — invented compound (two things mashed).** The sharpest problem; the operator's examples live here. → rename to the real field, or split, or fold.
- **C — real field, over-specified name.** → rename to the discipline's own short name (a pure rename; the field is real).
- **D — concept / technique / standard / system elevated to field.** Policy question: is it a discipline, or an object under a broader field?
- **E — symbolic / typological systems (the mythic-library Bin-1 intake).** A *type* question, separate from invention — see below.

---

## B — invented compounds (rename / split / fold)

*The clearest offenders. My four session-additions are marked ★.*

| field | read | proposed fix |
|---|---|---|
| ★ `network-science-scale-free` | real field is **network science** (Barabási's textbook is titled exactly that); `-scale-free` is my over-specification to a sub-topic | rename → `network-science` |
| ★ `human-factors-supervisory-control` | mashup; the real disciplines are *human factors* and HRO | fold into `high-reliability-orgs-safety-engineering`, **or** rename → `human-factors` |
| `high-reliability-orgs-safety-engineering` | two fields mashed (HRO + safety engineering) — a *prior* drift | rename → `high-reliability-organizations`, or split |
| `choice-architecture-behavioral-economics` | the field is **behavioral economics**; `choice-architecture` is a concept within it | rename → `behavioral-economics` |
| `recursive-grammar-fractal-linguistics` | "fractal linguistics" isn't a field; this is two concepts mashed | rename → `generative-grammar` (or fold to a linguistics field) |
| `ethology-horsemanship-lineage` | `ethology` is real; "horsemanship-lineage" is an authored framing, not a discipline | rename → `ethology`; the horsemanship angle lives as objects |
| `special-functions-series-acceleration` | two topics mashed | split → `special-functions` + fold series-acceleration as objects |
| `distributed-cognition-extended-mind` | two related theories mashed | rename → `distributed-cognition` (extended-mind is a sub-theory/object) |
| `cybernetics-control-theory` | two fields (cybernetics + control theory) — prior drift | rename → `cybernetics` (control-theory as its own or objects) |
| `knowledge-dataset-distillation` | two techniques mashed; not a field | fold into a broader ML field as objects |
| `coordinate-systems-erlangen-program` | odd mashup | rename → `klein-geometry` / `transformation-geometry`, or fold |

## C — real field, over-specified name (pure rename)

*The field is real; only the name over-reaches. Low-risk renames.*

- `real-analysis-limits` → `real-analysis`
- `fractal-geometry-self-similarity` → `fractal-geometry`
- `harmonic-fourier-analysis` → `harmonic-analysis`
- `ergodic-theory-equidistribution` → `ergodic-theory`
- `point-process-statistics` → `point-processes`
- `phenomenological-method` → `phenomenology`
- `narratology-story-morphology` → `narratology`
- `comparative-mythology-oral-tradition` → `comparative-mythology`
- `nonverbal-perception-thin-slicing` → `nonverbal-perception`
- `altered-states-neuroscience` → `altered-states-of-consciousness`
- `fluid-dynamics-hydrodynamic-stability` → `fluid-dynamics`
- `constructionism-microworlds` → `constructionism`
- `interactive-fiction-ludology` → `ludology`
- `ai-alignment-praxis` → `ai-alignment`
- `mechanistic-interpretability-probing` → `mechanistic-interpretability`
- `representation-learning-embeddings` → `representation-learning`
- `intrinsic-dimension-manifold-learning` → `manifold-learning`
- `validated-interval-arithmetic` → `interval-arithmetic`
- `software-testing-n-version` → `software-testing`
- `distributed-systems-flow-control` → `flow-control` (or `distributed-systems`)
- `preregistration-open-science` → `open-science` (or `metascience`)
- `dissociation-mediumship-psychology` → `dissociation` (mediumship as objects)
- `anthropology-of-trance-possession` → keep-ish, or `anthropology-of-religion`

## D — concept / technique / standard / system elevated to field (policy question)

*Each is a single idea sized like an object, made a container. Is it a discipline, or should it be an object under a broader real field? Needs per-item discussion — not proposing fixes here, just flagging the class.*

- **single concepts:** ★`habit-formation`, `synaptic-plasticity`, `stigmergy`, `tacit-knowledge`, `argument-structure`, `explore-exploit-cognitive-search`, `scaffolding-zpd`, `deliberate-practice-apprenticeship`, `glossolalia-studies`, `apophatic-traditions`
- **techniques / patterns / methods:** `literate-programming`, `event-sourcing-append-only-architecture`, `zettelkasten-knowledge-organization`, `faceted-classification`, `retrieval-augmented-generation`, `explorable-explanations`, `reproducibility-engineering`, `data-curation`, `theory-of-constraints`, `toyota-production-system`
- **standards / named artifacts:** `ieee-754-floating-point`, `version-control-theory`
- **descriptive compounds (no named discipline):** `addressing-namespace-design`, `graphics-sampling-artifacts`, `generative-live-visual-art`, `prepared-environment-pedagogy`, `philosophy-of-craft`, `numeration-systems`

## E — symbolic / typological systems (a *type* question)

The 34 mythic-library Bin-1 fields — 14 esoteric (`enneagram`, `chakras`, `tarot`, `iching-*`, `wu-xing`, `western-astrology`, `elder-futhark`, …) and 20 psychology/typology (`mbti`, `big-five`, `jungian-archetypes`, `propp-morphology`, `commedia-dellarte`, …) — are **not disciplines**. They are symbolic/typological *systems* the corpus catalogs (recorded-as-held, `doctrinal`; a few empirical like `big-five`, `holland-riasec`). Calling them `field` stretches the word. This was a deliberate intake, so it is not "invented drift" — but it raises a real design question: **should these carry a distinct type (`system` / `tradition`) rather than `field`?** Separate decision from B/C/D.

## the shape of the finding

- **The drift is systemic, not just my four.** Class A (clean established disciplines) is the real majority — the number-theory / analysis / algebra / probability / named-science core is solid. But **B + C together are ~30+ fields**, and the mashup pattern predates this session (region #3 seeded several).
- **My session additions:** `mathematical-structuralism` **holds** (it is the literal title of the SEP/IEP entries — a documented field). `network-science-scale-free`, `human-factors-supervisory-control`, `habit-formation` **do not** (B/B/D).
- **Everything B/C/D that I or recent work added is `float`** — the fix is a re-point, not history surgery. The older ones (region #3, mythic-library) are `settled` and would need the operator's word before any rename.

## recommendation

1. **Adjudicate B and C first** — these are clear renames/folds (the field is real or clearly belongs elsewhere). Operator marks each; keeper re-points the `float` ones, flags the `settled` ones for a separate pass.
2. **Discuss D and E as policy** — "is a concept a field?" and "should symbolic systems be a `field` or a `system` type?" These set rules, not one-offs.
3. **Lock the naming rule into the keystone** once settled — a field is an established, documented discipline, named as it names itself.
4. **Renaming a field = new record + retire old + re-point every `field:`/`links:` reference** (grep-driven, deterministic). Not started; awaiting the operator's marks.

*Read only. No records touched.*
