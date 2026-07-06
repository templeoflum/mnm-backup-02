# Lineage

The posture: ancestry. Where each piece of the framework came from — what tradition it answers to, whose voice is in it, what prior work made it possible.

A lineage document is not a citation list and not a credits roll. It is the auditable record of *intellectual debt*: when the framework uses a concept borrowed from another tradition (consciously or not), the borrowing is named here, traced to source, and (when possible) accompanied by what the framework does *differently* than the source.

---

## Why lineage

The framework's honesty discipline commits to marking borrowed vocabulary as gestural until earned. Lineage extends that commitment from *vocabulary* to *concepts*: the framework borrows ideas — from spline math, from category theory, from narrative theory, from the operator's own prior work, from traditions the operator has studied. The borrowing should be auditable, not implicit.

Three purposes:

1. **Credit.** Ideas have origins; using them without acknowledgment is dishonest, even when the use is original.
2. **Inherited blind spots.** When the framework borrows X from tradition Y, it inherits Y's blind spots unless they're explicitly stepped out of. Naming the borrowing makes the inheritance visible.
3. **Stage-setting for earning.** When the framework eventually earns what it currently gestures at, the lineage doc documents what came before, what's been kept, and what's been changed.

The framework already trusts lineage as a structural feature elsewhere: every generation has an operator and timestamp; every work declares its dependencies; the formalization roadmap tracks design heritage. The framework's *thinking* deserves the same treatment.

---

## Schema

Each lineage entry has the following fields:

- **What is borrowed** — the framework's name for the concept.
- **From where** — the source tradition; the specific work or thinker if known; the operator's prior work if applicable.
- **What the source means** — a short, honest gloss of the concept as the source uses it.
- **What the framework does with it** — how the framework uses the concept, including what's kept and what's modified.
- **What's not borrowed** — explicitly: what the source's apparatus is *not* being claimed by the framework's use.
- **Lineage status** — one of:
  - **Direct** — acknowledged, deliberate borrowing
  - **Convergent** — independent arrival at a similar concept
  - **Background** — general influence, not specific borrowing
  - **Gestural** — vocabulary borrowed without the formal content (links into formalization roadmap)

---

## Population

Population is ongoing. The operator has substantial prior work and studied traditions that will fill in over dedicated sessions. The entries below are starter entries from what's already documented in the framework; they are not exhaustive.

A `[pending: ...]` marker indicates a known borrowing that has not yet been written up.

---

## Lineage entries

### Prior spline score → the framework's shape

**What is borrowed:** the framework's entire shape.

**From where:** the operator's prior authored work (a multi-movement spline score in progress before the framework existed). The work itself was removed from this codebase 2026-05-28 to keep the framework focused on its iteration harness while load-bearing claims are still being earned; it persists outside the repo in the operator's own materials.

**What the source means:** a multi-movement work whose authoring discipline made the working methods explicit. Spline scoring, layer composition, and realization construction emerged as the working methods for that score.

**What the framework does with it:** generalized the working methods into a framework that can apply to other works. The framework outlived the originating score in the codebase; the score is what produced the framework, not the other way around.

**What's not borrowed:** the prior score's specific characters, objects, motifs, and aesthetic choices are work-content, not framework. The framework is score-agnostic by design.

**Lineage status:** Direct (historical ancestry; the linked artifact is no longer present in the codebase).

---

### Parameter Motion Protocol → S2 parameterization

**What is borrowed:** the parameterization approach for movements — local movement time (t=0 movement start, t=1 movement end) rather than wall-clock duration; phase as derived parameter rather than accumulated time. The determinism principle (same spec → same trajectory).

**From where:** the operator's prior Parameter Motion Protocol (a live-performance ratio-based parameter animation system).

**What the source means:** a resolver model with multi-contributor weighted sums and conserved weight budgets, applied to live parameter animation. Cross-element composition via ratios.

**What the framework does with it:** adopted the local-time parameterization and the determinism principle into Stage S2 of the formalization roadmap. Did not adopt the multi-contributor resolver model — that's a later-stage candidate (S4+).

**What's not borrowed:** the ratio-based cross-element composition language. Premature for S1+S2; deferred.

**Lineage status:** Direct. Cited in [../know/formalization_roadmap.md](../know/formalization_roadmap.md) under Design Heritage.

---

### Spline mathematics → "spline" terminology and continuity grades

**What is borrowed:** the word "spline"; piecewise-defined functions joined at knots; the C⁰ / C¹ / C² classification of continuity at joins.

**From where:** the mathematical literature on splines (Schoenberg 1946 and after; CAGD; numerical analysis).

**What the source means:** functions composed piecewise from polynomial pieces, classified by their smoothness at the joins between pieces.

**What the framework does with it:** uses "spline" as the term for a multi-movement work; treats movements as the "pieces"; uses C⁰/C¹/C² as classification of how adjacent movements relate at the join.

**What's not borrowed:** polynomial commitment. Movements are not yet polynomial — that's Stage S3. The continuity grades are currently classification rules, not derivable equations from polynomial join conditions.

**Lineage status:** Gestural (will become Direct at S3).

---

### Category theory → "functor," "morphism," "commuting diagram"

**What is borrowed:** the vocabulary.

**From where:** category theory (Mac Lane and after).

**What the source means:** structure-preserving maps between categories; objects and arrows satisfying composition laws.

**What the framework does with it:** uses the vocabulary as a *gesture* — naming layer outputs as functorial without delivering the categorical content.

**What's not borrowed:** any actual category-theoretic content. No categories defined. No morphisms specified. No proofs of structure preservation.

**Lineage status:** Gestural. Marked as such in the formalization roadmap (algebra path A1–A4).

---

### Type theory → "dependent product," "refinement type," "propositional equality"

**What is borrowed:** the vocabulary.

**From where:** dependent type theory (Martin-Löf and after); refinement types (Liquid Haskell, F*, etc.).

**What the source means:** type families indexed by values (dependent product); types narrowed by logical predicates (refinement type); proofs of equality at the type level (propositional equality).

**What the framework does with it:** uses the vocabulary to *gesture at* the shape of realization specs (dependent product across layers), locks (refinement types), and continuity grades (propositional equality at joins). The gestures organize thinking but do not deliver type-theoretic content.

**What's not borrowed:** any type checker, any proof system, any operational type-theoretic content.

**Lineage status:** Gestural.

---

### Asparśa Yoga → reflective-alignment posture in operator practice

**What is borrowed:** an alignment posture — reflective discipline rather than performative response, pausing where distortion is more likely than clarity, refusing identity-claim, tracking lineage of expressions. The posture shapes how the operator works with AI collaborators and how the framework holds itself accountable.

**From where:** operator's prior study of Asparśa Yoga. Source document at `../do/projects/study/dumps/Asparśa Yoga_ A Reflective Discipline of Alignment.docx` (not git-tracked; binary source material kept local).

**What the source means:** Asparśa Yoga (अस्पर्श-योग, "yoga of non-contact") is a contemplative tradition associated with Gauḍapāda's commentary on the Māṇḍūkya Upaniṣad and developed across the Advaita Vedānta lineage; concerns the awareness-substrate that does not enter into contact with what it knows. The framework borrows the *operational posture* this contemplative discipline produces — not the metaphysics or theology.

**What the framework does with it:** the alignment posture shows up in multiple framework commitments — the [anti-sycophancy discipline](../know/disciplines/anti_sycophancy.md) (refusal of performative response), the [CHARTER's "no invented operator state"](CHARTER.md#what-this-work-refuses) (refusal of identity-claim about the operator), the [honesty discipline's earned-vs-gestural distinction](../know/disciplines/honesty.md) (tracking lineage of expressions), and this lineage document itself (the discipline of crediting what's borrowed).

**What's not borrowed:** the framework makes no theological claims, no metaphysical commitments, no soteriological assertions. The borrowing is at the level of working discipline, not doctrine.

**Lineage status:** Direct. Deeper structured extraction (specific concepts, primitives, operations, relations — per the study system schema) is queued for when the study system goes live; the source document is in the study system's `dumps/` for that future processing.

---

## Pending entries (to populate over dedicated sessions)

- `[pending: narrative theory contributions — Genette, etc.]`
- `[pending: musical-form influences — Schenkerian analysis or related foreground/middleground/background structure]`
- `[pending: visual-composition tradition — what's informing the visual world reference]`
- `[pending: any specific borrowings from individual thinkers the operator has worked with]`
- `[pending: prior operator works beyond the originating spline score, the Parameter Motion Protocol, and the Asparśa study]`

Population is deliberate and operator-led. Entries that name traditions the operator has not actually engaged with are worse than no entry at all — they fabricate intellectual ancestry. Better to leave a `[pending]` marker than to invent.

---

## Lineage as discipline

When a new framework concept is being introduced and it draws (knowingly or unknowingly) from an existing tradition, an entry here should be created at the same time. The audit-after-change discipline applies: when a borrowing is identified, the source is named.

When a future stage of the formalization roadmap is reached and a gestural borrowing becomes earned, the entry's status changes (Gestural → Direct) and the changes are documented.
