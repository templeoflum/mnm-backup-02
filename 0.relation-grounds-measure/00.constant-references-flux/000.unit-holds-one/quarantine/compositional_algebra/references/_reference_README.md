# Compositional Algebra

A framework for making mathematical structure perceivable across mediums and narrative.

> **New to the framework?** Start with [see/SURVEY.md](see/SURVEY.md) — the bird's-eye view of what the framework is for, what it does, and how it's organized. Then read [see/ARCHITECTURE.md](see/ARCHITECTURE.md) for the see/know/do model that organizes the whole project.

---

## What it is

Compositional Algebra is a framework for authoring works that separate score from performance, where the score is mathematical and the performance is sensory. A work is composed at two stages:

- **Spline scoring** — authoring a *spline score*: the fixed mathematical structure of the work, including its sequence of moments (the spline itself), the typed signals each moment emits, and the content layers that travel with the work (characters, objects, motifs specific to it). The spline score is the authored mathematical structure.
- **Realization construction** — composing a *realization* of an existing spline score by choosing presets or atomic configurations at each interpretive layer (medium, visual world, audio aesthetic, voice, script, presentation). The same spline score can be constructed into many realizations.

This separation is the framework's central move. A spline score is the mathematical structure of a work; a realization is one rendering of that structure into a sensible, perceivable form. The same score yields many realizations because mathematical structure does not determine its sensory expression — different aesthetic and narrative choices render the same math differently. The framework's discipline is what coordinates the rendering so that the math is felt rather than lost.

### Identity and Trajectory

Every layer of the framework has two parts:

- **Identity** — what the layer *is* (its aesthetic, its content, its character). Authored or chosen.
- **Trajectory** — how the layer *moves through the work* (its arc across movements). Derived from the math.

Math drives all Trajectories. Identity is the authored part. Two realizations of the same spline share Trajectories (same math) under different Identities (different aesthetic and narrative choices), which is why they read as different works of the same shape.

See [see/SURVEY.md](see/SURVEY.md) for the full architectural picture.

---

## Why it's called Compositional Algebra

**Formal (aspirational — see [formalization roadmap](know/formalization_roadmap.md)):** The framework is intended as a dependently-typed signal-flow algebra over a product space of compositional layers. Layers are functors; sub-functions are product types; options are sum types; layer presets are named inhabitants of product types; realization specs are dependent products across all six layer types; locks are refinement types narrowing the inhabitable space; the workflow (Pass 0 dependencies check, Passes 1–10 composition, Pass 11 freeze and tracking) is functorial composition under a fixed normalization order; continuity grades at transitions are propositional equalities required at type level.

The above is the formal framing we are building toward. Currently it is gestural — the vocabulary organizes thinking and motivates the discipline, but the formal content the vocabulary implies (categories, type systems, proven algebraic laws) has not yet been earned. See the [formalization roadmap](know/formalization_roadmap.md) for the staged path toward earning it.

**Informal:** Composition is the central act. Works are composed across layers, signals flow from layer to layer in a typed pipeline, and the whole framework is a structured space over which compositional choices happen. Parameters (atomic sub-function options), layer presets (named bundles within a single layer), and realization specs (full cross-layer bundles) form a three-tier system in which composition can happen at any level of granularity. Sub-functions are dimensions; presets are convenient points; realizations are complete coordinates in the realization space. The algebra (in the sense of "rules for combining and overriding across tiers") is the discipline that makes this work.

A realization that closely resembles another shares most of its presets and differs only at specific atomic overrides — siblings in the realization space, not duplicates. The lock concept makes the algebra honest: each preset can declare specific sub-function choices as constitutive of its identity, so that overrides that change those choices explicitly leave the preset family.

The framework emerged from authoring a prior spline score (since removed from the codebase; see [LINEAGE.md](see/LINEAGE.md) for ancestry). Compositional Algebra is what crystallized when the working method became formal enough to apply across multiple spline scores rather than living implicit in one.

### A note on **Formal:** tags throughout the framework

Many framework documents (this README, layer references, the workflow reference, the prompt construction reference) use **Formal:** to introduce type-signature or category-theoretic framings of what the document covers. These framings are organizers and motivators, not earned formal-mathematical content. Where the framing uses borrowed vocabulary (functor, propositional equality, dependent product, refinement type), the borrowed term refers to the everyday structural meaning rather than the proven mathematical content. The [formalization roadmap](know/formalization_roadmap.md) lays out the staged path toward earning each piece of borrowed vocabulary.

The **Informal:** sections that accompany **Formal:** sections are not "easier" versions — they're the load-bearing explanation. The Formal section gives a compact signature; the Informal section gives the working meaning.

---

## The three tiers

**Formal:** Composition operates at three tiers, formally corresponding to:
- **Tier 1** — sum types (each sub-function's options form a sum type: `Register = Scientist | Mathematician | Mythic | Caretaker | ...`)
- **Tier 2** — named inhabitants of a layer's product type (a layer preset is a specific tuple in the product space of its sub-functions)
- **Tier 3** — dependent products across all six layer types (a realization spec picks one inhabitant per layer, with locks as refinement-type constraints)

**Informal:** Three tiers across all six layers (voice, medium, visual world, audio aesthetic, script, presentation):

**Tier 1 — Parameters (atomic).** Each layer is composed of **sub-functions** — independently configurable parameters. Each sub-function has options. Atomic configuration picks one option per sub-function within a layer. Example: Visual World = Palette × Light × Line × Figure × Atmosphere.

**Tier 2 — Layer presets.** Named bundles of sub-function options within a single layer. Convenience shorthand; reusable across realizations. Example: the *Mythic* visual world preset bundles a specific palette × light × line × figure × atmosphere combination.

**Tier 3 — Realization specs.** Complete top-level bundles across all six layers. Each realization spec picks a Tier 2 preset (or atomic Tier 1 configuration) per layer.

At each tier, composition can happen wholesale (use the preset, use the realization), with overrides (use the preset but change specific sub-functions), or atomically (configure every sub-function directly). The same expressive space is reachable through any of these paths; the choice is between concision (wholesale) and precision (atomic).

---

## Repository structure (see/know/do)

```
compositional_algebra/
├── README.md                   project entry point (this file)
├── CLAUDE.md                   AI orientation
├── .git/, .gitignore           infrastructure
│
├── see/                        LAYER 1 — ways of looking (postures)
│   ├── README.md
│   ├── ARCHITECTURE.md         the see/know/do model itself
│   ├── SURVEY.md               wide-angle posture
│   ├── CHARTER.md              refusal posture
│   ├── CRITIQUE.md             self-critic posture
│   ├── LINEAGE.md              genealogist posture
│   ├── ROADMAP.md              forward-planning posture
│   ├── DEV_LOG.md              historian's posture (chronological)
│   └── handoff/                live session working state
│       ├── README.md
│       ├── STATE.md, QUEUE.md, OPEN_QUESTIONS.md, OBSERVATIONS.md, IDEAS.md
│       └── (3 redirect stubs from prior reorg)
│
├── know/                       LAYER 2 — what holds (specifications)
│   ├── README.md
│   ├── VERSION                 framework version (YYYYMMDD-HHMMSS)
│   ├── glossary.md             canonical vocabulary
│   ├── formalization_roadmap.md  staged path for earning formal claims
│   ├── disciplines/            12 operator-agnostic process disciplines
│   │   ├── README.md
│   │   └── (12 atomic discipline files)
│   ├── references/             13 work-agnostic specifications
│   │   ├── README.md
│   │   ├── audio_aesthetic.md, math_audio.md, math_visual.md
│   │   ├── medium.md, visual_world.md
│   │   ├── voice.md, script.md, presentation.md
│   │   ├── prompt_construction.md, realization_workflow.md
│   │   ├── parameter_space.md
│   │   └── generation_tracking.md, dependencies.md
│   └── diagrams/               visual specifications (HTML)
│       └── (5 diagrams + README)
│
└── do/                         LAYER 3 — what's made (artifacts)
    ├── README.md
    ├── works/                  compositions
    │   ├── README.md
    │   └── calibration/        the framework's iteration harness and stress-test bed
    └── projects/               apparatus
        ├── README.md
        ├── study/              external knowledge intake → structured dives
        ├── workbench/          operator tool + tools/validator
        │   ├── navigator.html, frictions.md, architecture.md, README.md
        │   └── tools/          validate.py + README
        ├── explorations/       internal thinking intake → structured drafts
        │   ├── README.md
        │   ├── dumps/          intake (gitignored except README)
        │   └── (6 structured explorations)
        └── plans/              forward-looking execution sketches
            ├── README.md
            └── (atomic plan files; first: network_map.md)
```

The see/know/do model is documented in [see/ARCHITECTURE.md](see/ARCHITECTURE.md). Each top-level directory has its own README explaining what belongs there and how to add. The atomic principle (categories have READMEs + atomic items) applies recursively.

To author a new work: see [do/works/README.md](do/works/README.md).
To extend the framework: see [know/README.md](know/README.md).
To open a new posture or look at the work from a new angle: see [see/README.md](see/README.md).

---

## Vocabulary

**Formal types:**
- **Layer** : functor from spline-state to layer-output
- **Sub-function** : product-type field within a layer
- **Option** : sum-type constructor for a sub-function
- **Layer preset** : named inhabitant of a layer's product type (Tier 2)
- **Realization spec** : dependent product across all six layer types (Tier 3)
- **Locked parameter** : refinement-type constraint on a preset
- **Spline score** : typed source term; piecewise function over movement-knots
- **Shape** : sub-field of Identity specifying Approach × Within × Departure curvature per movement
- **Continuity grade** : propositional equality at a transition join, derived from Shape

**Informal:**
- **Compositional Algebra** — the framework
- **Spline scoring** — the activity of authoring a spline score
- **Spline score** — what spline scoring produces; the structured authorship that defines a work
- **Realization construction** — the activity of constructing a realization from a spline score
- **Realization** — what realization construction produces; a complete cross-layer compositional treatment of a spline score
- **Layer reference** — a `know/references/` document defining one of the framework's layers and its vocabulary of sub-functions and presets
- **Sub-function** — an independently configurable parameter within a layer (Tier 1)
- **Layer preset** — a named bundle of sub-function options within a single layer (Tier 2)
- **Realization spec** — the complete cross-layer bundle for one realization (Tier 3)
- **Locked parameter** — a sub-function choice within a layer preset declared constitutive of the preset's identity; can be overridden but doing so means leaving the preset's identity
- **Voice translation** — generator-facing description of voice spec, constant across movements (unless affect varies); per-realization; lives in the realization spec and forms the opening block of every narrative prompt
- **Substitution (Pass 6)** — the cross-modal pass that commits work-specific identities (character/object/motif) into prompts before outline and execution
- **Translation discipline** — framework-internal vocabulary (sub-function names, motif names, primitive names) does not appear in generator prompts; all framework abstractions translate to concrete sensory/structural specification at the prompt boundary. See [`know/disciplines/translation.md`](know/disciplines/translation.md).
- **Level 1 / Level 2 verification** — verification discipline acknowledging that some framework claims (structural coherence, signal flow, visible vocabulary leaks) can be verified in-conversation with discipline (L1), while others (cold-start prompt sufficiency, translation discipline robustness, reproducibility-by-others) require external generator isolation (L2). L1 supports fast iteration; L2 supports milestone verification. See [`know/disciplines/two_level_verification.md`](know/disciplines/two_level_verification.md).
- **Generation tracking** — durable identity for each generation of a realization. Generation ID format `{work}.{realization}.{operator}.{YYYYMMDD-HHMMSS}[.{edit-suffix}]`. Supports the generative/freeze/edit cycle: realization specs are generative seeds; generations are samples; one is selected and frozen as working draft; surgical edits chain from the freeze. See [`know/references/generation_tracking.md`](know/references/generation_tracking.md).
- **Dependencies** — explicit declaration of what a spline score requires from the framework. Each work has a `dependencies.md` listing base framework references used, score-local extensions (if any), framework version requirements, and compatibility notes. Pass 0 of the workflow verifies dependencies are satisfied before composition begins. See [`know/references/dependencies.md`](know/references/dependencies.md).
- **Framework version** — single source of truth in `know/VERSION`. Timestamped to second precision. Bumped on meaningful framework changes (reference signatures, workflow, vocabulary, project structure). Score dependency declarations reference this value.
- **Formalization roadmap** — staged path toward earning the formal-mathematical framing the framework currently uses gesturally. Two parallel paths: spline stages (S1–S5, toward real spline math) and algebra stages (A1–A4, toward proven algebraic structure). See [`know/formalization_roadmap.md`](know/formalization_roadmap.md).
- **Development discipline** — operator-agnostic discipline under which the framework is developed. 12 disciplines named: honesty, root-cause patches, define-before-reference, vocabulary, translation, audit-after-change, versioning/tracking, two-level verification, posture-naming, session-ending, session-starting, anti-sycophancy. See [`know/disciplines/`](know/disciplines/).
- **Parameter space (felt intensity)** — `S = ℝ`, single scalar, unbounded. Each movement is a continuous function `f_n: [0, 1] → S` over local movement time. Shape characterizes f at start, interior, and end. Continuity grades characterize how adjacent f relate at the join. Framework Stages S1 and S2 completed. See [`know/references/parameter_space.md`](know/references/parameter_space.md).
- **Identity** — what a layer *is* in a given work. Authored or chosen. The character's body and manner; the object's material and history; the motif's pattern; the audio's aesthetic; the visual's medium and world; the voice's register and stance. Identity persists across the work as the same identity. Identity is what differs between two realizations of the same spline.
- **Trajectory** — how a layer *moves through the work*. Derived from the math (spline's mathematical content + felt-quality function f_n). The character's arc of action; the object's role across movements; the motif's phase emphasis; the audio's intensity arc; the visual's development; the voice's attention arc. Trajectory is what's shared between two realizations of the same spline.

See [`know/glossary.md`](know/glossary.md) for the full glossary.

---

## Getting started

For an existing spline score: read the work's README, then construct or run realizations through the framework's [realization workflow reference](know/references/realization_workflow.md).

For authoring a new spline score: study Calibration's [spline reference](do/works/calibration/spline_reference.md) and [realizations](do/works/calibration/realizations/) as the working example, then author your own spline + content layers in a new directory under `do/works/`.

For understanding the framework architecture: read [see/SURVEY.md](see/SURVEY.md) for content overview, then [see/ARCHITECTURE.md](see/ARCHITECTURE.md) for project structure, then the layer references in [know/references/](know/references/) in any order. Each layer reference is self-contained; the layers compose through the signal flow.

---

## Status and intent

Compositional Algebra is developed for authoring works that benefit from score-and-performance separation: works whose authorship is structural rather than singular-voice; works where the same score should yield many valid interpretations; works that invite re-composition by other practitioners.

The framework is open. New spline scores can be authored. Existing spline scores can be realized in new ways. Layer references can be extended (with new sub-function options or new presets) when realizations need vocabulary that doesn't yet exist — and the discipline is to extend them honestly, defining new options before realizations reference them.

**Active development:** the framework is currently being iterated through the Calibration spline score (a three-movement iteration harness that doubles as stress-test bed for load-bearing framework claims). Calibration is the only work in the codebase; earlier work was removed 2026-05-28 to keep the framework focused while proofs are still being earned. Recent framework additions are listed in [see/ROADMAP.md](see/ROADMAP.md) and [see/DEV_LOG.md](see/DEV_LOG.md).

See [see/DEV_LOG.md](see/DEV_LOG.md) for the development history. Open questions live in [see/handoff/OPEN_QUESTIONS.md](see/handoff/OPEN_QUESTIONS.md); current state in [see/handoff/STATE.md](see/handoff/STATE.md).
