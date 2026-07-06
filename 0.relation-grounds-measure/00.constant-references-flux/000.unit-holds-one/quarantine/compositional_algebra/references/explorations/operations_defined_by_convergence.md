# Exploration — Operations Defined by Convergence

**Status:** exploration, not incorporated
**Relates to:** algebra path A1–A4, felt-quality definition, formalization roadmap
**Origin:** external session, migrated from `dumps/observation note dump 20260527.223154.txt`

---

## Premise

The framework needs operations on felt-quality — modulations, compositions, transformations. An operation is defined by its properties, not its implementation: the group axioms never specify how a product is computed, only that it is associative, has identity, has inverses. This leaves open *how* the framework's operations get their values.

## Proposal

Define an operation's value as the felt-equivalence class that a sequence of evaluations converges to under a felt-metric — not as any single evaluation.

This is the Cauchy construction. A real number is not its decimal expansion; it is an equivalence class of convergent rational sequences. The limit is well-defined though no term is the answer. An operation's value is likewise the class its evaluation-sequence converges to.

The principle: **specifying is not required when grouping suffices.** Characterize the convergence; identify the operation with the class.

## Structure required

1. **Felt-metric / felt-equivalence.** Defines what "close in felt-quality" means; without it, convergence is undefined. This is the A1–A4 relational definition.

2. **Cauchy condition.** Beyond some N, evaluations fall within ε of each other in felt-distance. Checkable by measuring spread, without specifying the limit.

3. **Completeness.** Define felt-quality space as the completion under the metric. Limits exist by construction, as ℝ completes ℚ.

## What the structure yields

Two consequences fall out for free, which is the test that the construction is load-bearing rather than decorative:

**Determinism at the level of the class.** Individual evaluations vary; the class is stable. The variation lives in the representatives, the operation lives in the class.

**Divergence means undefined.** Where evaluations do not converge — wide spread, bimodal, drift — the operation has no value at that input, exactly as a divergent sequence names no real. This is detectable and is honest truth, not failure. The operation is legitimate precisely over its region of convergence.

A plain "sample and take consensus" approach gets the first but has no principled answer to the second — it would bolt on an arbitrary threshold. The completion construction makes non-convergence *mean* something exact. That is what earns the framing its place.

## Foundational constraint

The felt-metric cannot be defined by the same process whose convergence it certifies. A distance measure that is just another instance of the measured thing certifies nothing. The metric needs independent grounding:

- operator-calibrated anchor pairs as fixed reference points, and/or
- relational axioms it must satisfy: symmetry, triangle inequality, identity of indiscernibles up to felt-equivalence.

## Standing

The construction rests entirely on the felt-metric, which does not yet exist and is the framework's hardest open problem. So the present value of this exploration is **directional**: it establishes that the felt-metric is not optional flavor on the relational path but the precondition for any convergence-defined operation to be well-defined at all. Convergence is defined by it, the Cauchy check runs against it, divergence is detected by it, completion is built from it.

This is not a usable operation today. It is a sharpening of what A1–A4 must deliver and why the metric must be built and grounded first.

## Why this fits

The construction attaches to problems the framework already has: a real space of outputs, a real need for an equivalence relation, a real question of what to do when evaluations disagree. It imports no apparatus the framework has no use for. The test of fit is whether the borrowed structure maps onto existing problems rather than smuggling in foreign ones — this maps.

## Precedent for a future dive

Verified computation and computer-assisted proof (Lean/mathlib, Flyspeck). Legitimacy came from moving trust to a checkable certificate rather than to any single computation. Same shape here: propose freely, validate by convergence under a grounded metric. Trust lives in the certificate, not the proposer.

## Relationship to other threads

- Specifies what A1–A4 (algebra path in [`../../../know/formalization_roadmap.md`](../../../know/formalization_roadmap.md)) must deliver.
- Connects to [Prompt as Algorithmic Generative Process](prompt_as_algorithmic_generative_process.md) — both rely on the specification/execution split (well-defined specification, non-deterministic execution producing representatives that converge to a class).
- The felt-metric is the hardest open problem; until it exists, every operation-related exploration is directional.
