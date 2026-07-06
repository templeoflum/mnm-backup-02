# Compositional Algebra — A Survey

This document is the bird's-eye view of Compositional Algebra. It answers: what the framework is for, what it actually does, how it's organized, what's load-bearing, what's gestural, and where it's going.

Read this before reading any other framework document. Everything else descends from what's here.

---

## What this is for

Compositional Algebra is a framework for **making mathematical structure perceivable across mediums and narrative**.

Mathematics has a kind of beauty — structural, rigorous, relational — that is largely inaccessible to people without specific training. The framework's purpose is to take this beauty and render it in forms where it can be *felt*: as visual, as sound, as narrative, as composed work.

Math is the signal. Audio, visual, and voice are renderings of that signal at different sensory addresses. Characters, objects, and motifs are narrative entities whose movement through the work is coordinated with the math. The framework's discipline is what makes this coordination rigorous rather than gestural.

Everything else the framework does — layer architecture, signal flow, realization composition, generation tracking, dependencies — serves this purpose.

---

## The central architectural distinction: Identity and Trajectory

Every layer of the framework has two parts:

- **Identity** — what the thing *is*. Authored, chosen, or specified. The character's body and manner; the object's material and history; the motif's pattern; the audio's aesthetic; the visual's medium and world; the voice's register and stance. Identities persist across the work as the same identities.

- **Trajectory** — how the thing *moves through the work*. The character's arc of action; the object's role across movements; the motif's phase emphasis; the audio's intensity arc; the visual's development; the voice's attention arc. Trajectories are derived from the math.

Identity is what the layer is. Trajectory is how the layer moves.

**Math drives all Trajectories.** This is the framework's central operational claim. The spline's math (mathematical content + felt-quality function f_n per movement) coordinates every layer's trajectory. Two realizations of the same spline have the same trajectories (same math) under different identities (different aesthetic and narrative choices) — which is why they read as different works of the same shape.

Identity comes from authoring (the spline's identity constraints + the realization spec's layer choices). Trajectory comes from math.

---

## What math actually is in this framework

At the movement level, the math has two aspects:

1. **Mathematical content** — which mathematical primitives are at home in the movement, and what structural relations hold between them. Currently: eighteen primitives (line segment with endpoint, threshold, aperture, basis, transition, etc.), authored per movement with density assignments.

2. **Mathematical trajectory** — the felt-quality function `f_n: [0, 1] → ℝ` per movement. Where felt intensity moves over the movement's duration. (Framework Stages S1 and S2 grounded this; see formalization roadmap.)

Both aspects together are *the math of a movement*. Both drive everything downstream — content layers, surface layers, voice. Mathematical content drives *what appears* in each layer (which primitives render visually, sonically, narratively). Mathematical trajectory drives *how each layer moves* (the felt-quality arc of audio, the development of imagery, the attention of voice).

The framework's first earned mathematical commitment is `S = ℝ` (felt intensity, scalar, unbounded) and `f_n: [0, 1] → ℝ` (continuous per movement). Further commitments — polynomial form (S3), authoring convention (S4) — are on the roadmap.

---

## The shape of the thing

The framework has these structural pieces:

- **The spline.** Per-movement signals declaring what each movement's math is (content + trajectory), what identity constraints hold (which characters/objects/motifs are present and in what state), and what the transition into the next movement looks like.
- **Eleven layers.** Math Visual, Math Audio, Character, Object, Motif (content layers); Audio Aesthetic, Medium, Visual World (surface layers); Voice; Script; Presentation. Each layer has Identity and Trajectory. Each is defined by a framework reference document.
- **Three tiers of compositional granularity.** Atomic sub-functions (Tier 1), layer presets bundling sub-functions (Tier 2 — currently being redesigned as work-local rather than framework-level), realization specs bundling configurations across all eleven layers (Tier 3). Composition can happen at any tier; overrides at lower tiers leave preset identity explicitly.
- **The realization spec.** A complete bundle of Identity choices across all eleven layers for a given work. Tier 3.
- **The workflow.** Twelve passes (Pass 0 dependencies check, Passes 1–10 composition, Pass 11 freeze and tracking). Each pass walks across all movements; movements aren't worked through serially.
- **Generation tracking.** Each generation of a realization has a durable ID `{work}.{realization}.{operator}.{YYYYMMDD-HHMMSS}[.{edit-suffix}]`. Generations move through live → frozen → superseded states; surgical edits chain from frozen artifacts.
- **Dependencies model.** Each work declares what it needs from the framework; Pass 0 verifies compatibility before composition begins.
- **Framework versioning.** `framework/VERSION` (second precision) is the single source of truth.

These pieces compose: a spline (the score) plus a realization spec (the performance choices) plus the workflow (the execution discipline) plus an operator (the author) produces a generation (the artifact).

---

## What the framework can do, honestly

**Authoring:**
- Structure a multi-movement work as a spline score with explicit per-movement math content and trajectory
- Compose realizations from layer presets, atomic overrides, or any mixture
- Specify cross-layer coherence through transitions with continuity grades
- Generate from a spec with full translation discipline at the prompt boundary
- Track generations across operators and time with durable IDs
- Declare dependencies and verify compatibility before generation

**Verifying (in-conversation, Level 1):**
- That structural discipline holds (signal flow, layer dependencies, vocabulary consistency)
- That translation discipline holds (no framework vocabulary in prompts, no shorthand)
- That same-spec generations share invariants while differing in specifics
- That continuity grades produce qualitatively different joins
- That voice modulation across sub-functions produces distinguishable voices

**Verifying (external generator, Level 2):**
- Currently not exercised. Reproducibility-by-others, cold-start prompt sufficiency, and translation discipline robustness all require independent operator testing.

---

## What the framework cannot do, honestly

- **Mechanically verify continuity grades.** Continuity grades are currently qualitative (matched direction, matched magnitude). They become real derivable equations at Stage S3 (polynomial commitment); until then, verification is by author judgment.
- **Numerically specify Shape.** Shape currently uses category labels (Held, Rising, Steep rise, etc.). These characterize the felt-quality function f_n but don't determine it numerically. Stage S4 (authoring convention) closes this gap.
- **Handle non-narrative works cleanly.** The workflow assumes narrative as the in-kit generator. Works that are primarily visual or sonic without narrative don't fit the current Pass 6 (narrative generation) cleanly.
- **Handle branching or recursive spline structure.** The spline is linear. Movement 1 → 2 → ... → N. No branches, no recursion, no convergence from multiple prior movements.
- **Compose across works.** A character or object in one work cannot be formally referenced from another. Each work's content layers are independent.
- **Vary Configuration sub-function.** Voice has five sub-functions; four have been exercised. Configuration (Solo / Chorus / Layered / Call-and-response) has only been tested at Solo. Multi-voice realizations not yet verified.
- **Verify reproducibility-by-others.** Claim 12 is asserted but untested. No Level 2 generation has been produced.

---

## Where the framework is gestural vs load-bearing

The discipline is real and tested. The formal-mathematical framing is partly earned, partly gestural.

**Load-bearing (real and verified):**
- Three-tier composition (atomic / preset / realization)
- Layer architecture with explicit signal flow and dependency order
- Identity / Trajectory split (formalized as central architectural distinction)
- Audio-first surface composition (sound as temporal substrate, vision as spatial moment within; both renderings of math)
- Pass 6 substitution as load-bearing narrative continuity step
- Translation discipline at the prompt boundary (including no-shorthand enforcement)
- Voice translation as constant per realization
- Generative / freeze / surgical-edit lifecycle
- Generation tracking with operator signatures
- Dependencies declaration with Pass 0 compatibility check
- Framework versioning at second precision
- Level 1 / Level 2 verification distinction
- Parameter space S = ℝ and continuous f_n: [0, 1] → S (Stages S1 + S2 completed)

**Partly earned, partly gestural:**
- "Spline" — piecewise segments joined at knots is genuinely spline-shaped, and S1+S2 grounded f_n as a real continuous function. But movements are not yet polynomial (S3 pending), so continuity grades remain qualitative.
- "Algebra" — composition operations exist (preset composition, override application, locking, substitution, translation, realization construction) but have not been explicitly catalogued (Stage A1), conjectured for laws (A2), or verified (A3).

**Gestural (borrowed vocabulary, formal content not yet delivered):**
- "Functor" — layers are functions reading typed signals; no categories defined, no morphisms, no structure-preservation proofs.
- "Propositional equality" — used in describing continuity grades. No proof system. Becomes real at S3.
- "Refinement type" — locks are advisory declarations, not type-checked predicates.
- "Dependently-typed signal-flow algebra over a product space" — aspirational naming.

The framework's formalization roadmap (`framework/formalization_roadmap.md`) documents the staged path toward earning the gestural framing. The framework's purpose (making math perceivable) does not depend on every gesture being earned, but the discipline that supports the purpose is more rigorous when the gestures become real.

---

## What's being earned next

The path forward, in roughly the order intended:

1. **A1 (operations explicitly named).** Catalog the implicit operations the framework currently performs. Pure naming work; no new commitments. Unlocks A2 (laws conjectured) and A3 (laws verified).

2. **S3 (polynomial commitment).** Commit movements to polynomial form of some chosen degree. Continuity grades become real derivable equations. Mechanical verification becomes possible.

3. **S4 (authoring convention).** Shape's sub-fields become operational specifications of polynomial constraints. Determinism (same spec → same f_n) becomes operational. The framework's central claim — math drives trajectory — becomes provable per movement.

After these, the framework would be substantially more rigorous in delivering its purpose. Other open paths (L2 generation, non-narrative works, branching structure) remain available but are not the path's main line.

---

## How to navigate the framework

For someone new to the framework, in roughly this order:

1. **`ARCHITECTURE.md`** — the see/know/do model that organizes the whole project (read first; sets the frame)
2. **This survey document** — what the framework is, what's load-bearing vs gestural
3. **Postures** in `see/`:
   - **`CHARTER.md`** — refusal posture (gates the work has decided about itself)
   - **`CRITIQUE.md`** — self-criticism posture (gaps between framework's promise and delivery)
   - **`LINEAGE.md`** — ancestry posture (where each piece of the framework came from)
   - **`ROADMAP.md`** — forward-planning posture (where the project is heading, at horizons longer than QUEUE)
4. **`../know/diagrams/`** — visual companion documents (open in browser); use as quick orientation:
   - `workflow_signal_flow.html` — map of the 12-pass workflow
   - `layer_architecture_map.html` — Identity / Trajectory per layer
   - `spline_signal_anatomy.html` — what one movement emits (eight signals)
   - `three_tier_composition.html` — realization spec → presets → atomic choices
   - `continuity_grades.html` — C⁰ / C¹ / C² visualized at the movement join
5. **`../know/references/realization_workflow.md`** — the workflow that organizes everything
6. **`../know/references/parameter_space.md`** — the framework's mathematical foundation (S1+S2)
7. **`../know/formalization_roadmap.md`** — what's earned and what's ahead (for the framework's content)
8. **`../know/disciplines/`** — operator-agnostic disciplines (12 atomic files + README)
9. **Layer references** in `../know/references/`, in dependency order: math (visual, audio), then content (character, object, motif), then surface (audio aesthetic, medium, visual world), then voice
10. **`../know/references/prompt_construction.md`** — how layer outputs assemble into cold-start prompts with translation discipline
11. **`../know/references/generation_tracking.md`** and **`../know/references/dependencies.md`** — the infrastructure
12. **A work**: `../do/works/calibration/` is the iteration harness and stress-test bed (the only work currently in the codebase)
13. **Meta-projects**: `../do/projects/study/` (knowledge-base apparatus, deferred), `../do/projects/workbench/` (operator tool, gated by friction-pain), `../do/projects/explorations/` (internal thinking intake) — apparatus built to support the framework
14. **`../know/glossary.md`** — vocabulary reference
15. **`DEV_LOG.md`** — the development history, useful for understanding why current decisions were made (paths in entries before the see/know/do reorganization reflect pre-reorg structure)

The framework is not small but it is navigable. Each piece does one thing. The pieces compose.

---

## A closing note

This framework began with a math study that became an essay that became a composition. The composition's working methods became implicit conventions, then explicit references, then a framework. What's here is what survived being used to make a real work and being iterated against a calibration harness. Some of it may not survive further use. That's expected — the framework iterates.

The purpose, though, is stable: mathematics has structural beauty; that beauty deserves to be perceivable; the framework's discipline is what makes the rendering rigorous rather than gestural. Everything else is in service of that.
