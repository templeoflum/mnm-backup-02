# Formalization Roadmap

**Purpose:** This document acknowledges the current state of Compositional Algebra's formal claims and lays out a staged path toward earning them. The framework's structural discipline is real and load-bearing; the formal-mathematical framing is, in many places, gestural — borrowing vocabulary from spline math, type theory, and algebra to organize thinking without yet delivering the formal content the vocabulary implies.

This document is the honest record of what has been earned, what is aspirational, and what the path forward looks like.

---

## Current state: gestural framing with structural rigor

The framework operates in a state where:

- **Structural discipline is real and tested.** The three-tier composition, layer architecture, signal flow, audio-first surface ordering, translation discipline, Pass 6 substitution, voice translation, L1/L2 verification, generation tracking, dependencies model, framework versioning — all of these are operationally sound and verified at the L1 level through Calibration construction.

- **Formal vocabulary is borrowed but not earned.** Terms like "functor," "propositional equality," "refinement type," "product space," "dependently-typed signal-flow algebra," and "spline" are used as evocative organizers, not as proven mathematical content. They motivate the discipline; they do not deliver the formal structure they imply.

- **The naming is preserved.** "Compositional Algebra" and "spline scoring" remain as the framework's vocabulary. The names are evocative and motivational. Honesty is achieved by marking formal claims as aspirational until earned, not by renaming and renaming back.

---

## What's gestural and what's load-bearing

### Load-bearing (real and tested)

- Three-tier compositional architecture (atomic options / layer presets / realization specs)
- Layer separation with explicit signal flow and dependency order
- Audio-first surface composition (defensible on developmental and phenomenological grounds)
- Pass 6 substitution as the load-bearing cross-modal identity step
- Translation discipline at the prompt boundary
- Voice translation as constant per realization
- Generative / freeze / surgical-edit lifecycle
- Generation tracking with operator signatures
- Dependencies declaration with Pass 0 compatibility check
- Framework versioning at second precision
- L1 / L2 verification discipline

### Gestural (borrowed vocabulary, not yet formal)

- **"Algebra"** — we have composition operations (preset composition, override application, locking) but have not formalized their carriers, signatures, or laws. No proven associativity, idempotency, distributivity, or identity.
- **"Spline"** — we have piecewise segments joined at knots, but movements are authored as prose + Shape labels, not as polynomial functions. Continuity grades (C⁰/C¹/C²) are classification rules, not derivations from polynomial join conditions.
- **"Functor"** — layers are functions reading typed signals and producing typed outputs. We do not have categories defined, morphisms in those categories, or structure-preservation proofs.
- **"Propositional equality"** — used in describing continuity grades. We have no proof system, no equality type, no judgmental equality. The phrase means "the felt qualities match across the join," which is a much weaker claim.
- **"Refinement type"** — locks are described as refinement types. They are advisory declarations checked by convention, not predicates checked at type-check time.
- **"Dependently-typed signal-flow algebra over a product space of compositional layers"** — the formal opener in the framework README. This is aspirational naming for what we hope the framework can become; it is not what the framework currently is.

### Real underneath the gestural

Some of the gestural framings have real structure under them that could be made formal:

- The tier system and override mechanism is genuinely close to a real type system with refinement constraints. Sub-functions as sum types and layer presets as product types is mostly load-bearing.
- The piecewise-segments-joined-at-knots structure is genuinely spline-shaped. The continuity grades have real referents — they could be derived from polynomial conditions if movements were polynomials in a felt-quality space.
- The composition operations on presets and realizations are real operations with real signatures. They could be made into a real algebra with explicit laws.

The formalization path is therefore not "invent the math" but "earn the math that's already implicit."

---

## Spline stages

The framework currently uses "spline" gesturally. Real spline math is well-defined and broadly applicable; we can earn it in stages. Each stage builds on the prior; each is useful by itself.

### Stage S1: Felt-quality parameter space (definition only)

**What it earns:** Shape has a real referent. Movements parameterize through a defined space.

**What it requires:** Commit to "felt-quality at a moment of a movement is a value in space S." Define S, even minimally — start with a single scalar (e.g., intensity ∈ ℝ) if higher dimensions feel premature.

**What it doesn't yet do:** Make movements into functions; commit to polynomial form; allow real continuity-grade derivation.

**Cost:** Low (a single definitional choice and a doc update).
**Benefit:** Modest (Shape and continuity-grade language become grounded rather than gestural).

**Status:** Not yet started.

---

### Stage S2: Movements as continuous functions of local time

**What it earns:** Movements have measurable values, not just felt-quality labels. We can talk about trajectories and derivatives without metaphor.

**What it requires:** Each movement is a function `f: [0, 1] → S`, where t=0 is the movement's start and t=1 is its end. Commit that f is continuous. Allow Shape's sub-fields to be characterized in terms of f: Approach ≈ f at small t plus f'(0); Within ≈ f over (0, 1); Departure ≈ f at large t plus f'(1).

**What it doesn't yet do:** Commit to polynomial form; permit mechanical continuity-grade verification.

**Cost:** Low (formalize a definition; minor updates to Shape vocabulary).
**Benefit:** Larger (derivatives become real; Shape sub-fields become measurable quantities, not labels).

**Status:** Not yet started.

**Depends on:** S1.

---

### Stage S3: Polynomial commitment

**What it earns:** Continuity grades become real derivable conditions. C^n at a join means the first n derivatives match; this becomes a checkable equation, not a felt-quality match.

**What it requires:** Commit to a polynomial degree d. Cubic (d=3) is canonical — supports C² continuity, four coefficients per segment, well-studied. Each movement is now a polynomial f_n(t) of degree d.

C⁰ at a join: f_n(1) = f_{n+1}(0).
C¹: also f'_n(1) = f'_{n+1}(0).
C²: also f''_n(1) = f''_{n+1}(0).

These are equations. They can be checked mechanically.

**What it doesn't yet do:** Give a comfortable authoring interface — polynomial coefficients are not natural for authoring.

**Cost:** Medium (commits to a polynomial form for all movements; requires care with degenerate cases — what if S is multi-dimensional? what if a movement's intended Shape is not expressible by the chosen degree?).
**Benefit:** Large (continuity grades become real; verification becomes mechanical; "C¹ vs C²" distinction becomes provable rather than felt).

**Status:** Not yet started.

**Depends on:** S1, S2.

**Choices to make at this stage:**
- Polynomial degree (cubic is canonical; could go higher for richer Shape; could go lower for simpler authoring).
- How to handle multi-dimensional S (do all components share a degree, or can they differ?).
- What happens when an authored Shape doesn't fit the chosen polynomial (forbid? approximate? extend?).

---

### Stage S4: Authoring convention

**What it earns:** Shape becomes a real authoring interface for specifying polynomial constraints, not a category label.

**What it requires:** A convention by which Shape's three sub-fields specify constraints determining the polynomial coefficients. For cubic (d=3, four coefficients), four constraints determine the polynomial uniquely. Natural choices:
- Value at start: f(0)
- Value at end: f(1)
- Derivative at start: f'(0) (this is "Approach" in derivative terms)
- Derivative at end: f'(1) (this is "Departure" in derivative terms)

"Within" becomes either a redundant check (the polynomial determined by the four constraints either does or does not have the within-character the author intended) or a fifth constraint requiring a higher-degree polynomial (quintic, etc.).

**Cost:** Medium (authoring convention requires design and testing against existing scores).
**Benefit:** Large (Shape stops being a category and becomes operational; "Rising · Steady · Falling" becomes a real polynomial specification).

**Status:** Not yet started.

**Depends on:** S1, S2, S3.

**Open question:** What happens to existing scores' Shape declarations? Most likely they remain valid as informal characterizations and get supplemented with explicit polynomial constraints when needed for mechanical continuity verification.

---

### Stage S5: Basis representation (optional)

**What it earns:** Tools for transformation, interpolation, perturbation, blending.

**What it requires:** Adopt a basis (B-splines, Bézier, Hermite) for representing the piecewise polynomial. Each has different properties (locality, convex hull, ease of derivative manipulation).

**Cost:** Medium (basis adoption affects internal representation, not authoring; may require library work for manipulation).
**Benefit:** Conditional (only useful if we want transformation/interpolation tools; not required for the core framework).

**Status:** Not yet started. Deferred indefinitely until a use case emerges.

**Depends on:** S1, S2, S3.

---

## Algebra stages

The framework currently uses "algebra" gesturally. To earn it, we need explicit operations, laws, and a carrier set on which the laws hold. This is parallel to the spline stages and can be undertaken independently.

### Stage A1: Operations explicitly named

**What it earns:** Each compositional operation has a documented signature.

**What it requires:** Identify and name the operations the framework currently performs. Initial list:
- **Preset composition** (the implicit operation when realizations compose multiple presets across layers)
- **Override application** (the operation that applies an atomic sub-function choice to override a preset's default)
- **Locking** (the operation that declares a sub-function choice constitutive of a preset's identity)
- **Substitution** (Pass 6: the operation that weaves content-layer continuity material across all three prompts cross-modally)
- **Translation** (the operation that converts framework-internal vocabulary into generator-facing description)
- **Realization construction** (the operation that combines six layer presets into a realization spec)

For each, specify: signature (input types → output type), domain (what it can be applied to), what it produces.

**Cost:** Low (catalog work; mostly already implicit).
**Benefit:** Modest (operations become discussable rather than implicit).

**Status:** Not yet started.

---

### Stage A2: Laws conjectured

**What it earns:** A list of properties the operations should satisfy.

**What it requires:** For each operation, conjecture which algebraic laws should hold:
- Is preset composition associative? (presetA composed with (presetB composed with presetC) = (presetA composed with presetB) composed with presetC?)
- Is override application idempotent? (applying the same override twice = applying it once?)
- Does locking commute with composition? (locking presetA then composing with presetB = composing then locking?)
- Is substitution distributive over composition?

These are conjectures, not yet proven.

**Cost:** Low to medium (requires thought; honest conjectures are not always easy).
**Benefit:** Larger (gives the framework checkable claims about its own operations).

**Status:** Not yet started.

**Depends on:** A1.

---

### Stage A3: Laws verified

**What it earns:** Conjectured laws become either theorems or known-false-claims.

**What it requires:** For each conjectured law, either:
- Argue informally that it holds and document the argument
- Find a counterexample and document why it doesn't hold
- Run exhaustive testing on small cases (small numbers of presets, small numbers of overrides) to gather evidence

When a law is shown to fail, decide whether to (a) accept that the operation doesn't satisfy that law and document, (b) modify the operation to satisfy the law, or (c) restrict the operation's domain so the law holds within the restricted domain.

**Cost:** Medium (real proof work for some laws; counterexample-hunting for others).
**Benefit:** Large (claims about the framework become trustworthy).

**Status:** Not yet started.

**Depends on:** A1, A2.

---

### Stage A4: Algebra structure named

**What it earns:** "Compositional Algebra" becomes a literally accurate name. The framework's operations and laws define an algebraic structure (group, monoid, semigroup, lattice, or something more exotic) — once we know which.

**What it requires:** Given the verified laws from A3, classify the structure. Examples:
- If preset composition is associative with identity and inverses → group
- If associative with identity but no inverses → monoid
- If just associative → semigroup
- If there are two interacting operations (composition and override) with distributivity → ring-like

The classification names the structure; the structure tells us what generic algebraic tools apply.

**Cost:** Medium (classification work, requires familiarity with algebraic structures).
**Benefit:** Large (the framework gains access to a body of known mathematical tools and the name "algebra" is honestly earned).

**Status:** Not yet started.

**Depends on:** A1, A2, A3.

---

## Other formalization paths (lower priority)

The spline and algebra stages are the two main paths. Other formal claims could also be earned, but are lower priority:

- **Layers as functors** — would require defining the relevant categories and morphisms. Significant work; modest benefit; defer unless category-theoretic tools turn out to be useful for some specific problem.
- **Refinement types for locks** — would require committing to a type system (Liquid Haskell, F*, Idris, etc.) and re-expressing locks as predicates. Real benefit (mechanical lock checking) but large adoption cost.
- **Propositional equality for continuity grades** — comes for free once Stage S3 is reached (continuity equations are propositional equalities in any standard sense).
- **Dependent types for realization specs** — would require committing to a dependent type system. Realization specs are already dependent products informally; making this formal would be valuable but is downstream of A1–A4.

---

## What this roadmap does not commit us to

- **A timeline.** Each stage can be undertaken when there's reason to. No deadline.
- **A particular path.** Spline and algebra stages are independent; either can be undertaken first, or both in parallel. Stages within each path are sequential, but the paths don't depend on each other.
- **Earning everything.** Some stages may turn out not to be worth earning. Stage S5 (basis representation) is explicitly conditional. Other stages may follow the same pattern.
- **Renaming.** "Compositional Algebra" and "spline scoring" remain the framework's vocabulary regardless of stage progress. They become more accurate as stages are passed, but the names don't change.

---

## What this roadmap commits us to

- **Honesty about current state.** Framework docs that make formal claims must mark them as aspirational until the relevant stage is passed.
- **Documenting stage progress here.** When a stage is started, in progress, or completed, this document records the change with a date and a brief note.
- **Not adding new formal-vocabulary gestures.** Going forward, new framework documentation should not introduce new borrowed formal vocabulary unless we're prepared to earn it. The existing gestural vocabulary is grandfathered; we don't add to it.

---

## Stage progress tracker

| Path | Stage | Status | Started | Completed |
|---|---|---|---|---|
| Spline | S1 (parameter space) | **Completed** | 20260527 | 20260527 |
| Spline | S2 (continuous functions) | **Completed** | 20260527 | 20260527 |
| Spline | S3 (polynomial commitment) | Not started | — | — |
| Spline | S4 (authoring convention) | Not started | — | — |
| Spline | S5 (basis representation) | Deferred | — | — |
| Algebra | A1 (operations named) | Not started | — | — |
| Algebra | A2 (laws conjectured) | Not started | — | — |
| Algebra | A3 (laws verified) | Not started | — | — |
| Algebra | A4 (structure named) | Not started | — | — |

This table is updated whenever a stage's status changes. The framework version is bumped on each update.

---

## Next intended step

S3 (polynomial commitment). With S1+S2 completed, movements are now continuous functions over a defined parameter space. The next step makes them polynomials, which gives:
- Real derivable continuity conditions (C^n becomes an equation, not a category match)
- Mechanical verification of continuity grades at joins
- A foundation for S4's authoring convention

Choices to make for S3:
- Polynomial degree (cubic is canonical — supports C² continuity, four coefficients per segment; could go higher for richer Shape; could go lower for simpler authoring)
- How to handle authored Shapes that don't fit the chosen degree cleanly (forbid? approximate? extend to higher degree per movement?)
- Whether to commit to a single degree across all movements or allow per-movement degree

These choices don't need to be made today. S1+S2 are useful by themselves. S3 can be undertaken whenever there's a use case that requires mechanical continuity verification.

---

## Design heritage (informational, do not implement)

External design work that informs this roadmap without being adopted directly:

**Parameter Motion Protocol** (live-performance ratio-based parameter animation system). Relevant at later stages for:
- Cross-element ratio-based composition language (potentially Stage S4 or beyond, when authoring conventions extend to cross-movement relationships)
- Multi-contributor resolver model with conserved weight budget (potentially relevant if multi-contributor composition becomes desired at the movement level)
- The principle that parameter state derives from a parameterizing variable rather than accumulated time (already adopted at S2)

The Parameter Motion Protocol itself is not embedded in the framework. Its problem domain (real-time live performance) is different from ours (authoring-time composition). When later stages benefit from its design moves, those moves are translated to our context and adopted explicitly. Until then, this entry exists so future work can find the heritage if useful.