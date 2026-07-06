# Calibration

A three-movement spline score authored as a calibration suite for [Compositional Algebra](../../README.md). Not a literary work; its purpose is to verify framework claims and serve as a fast-iteration harness for testing signal flow, coherence, continuity, voice modulation, and presentation.

---

## What this is

A figure walks across a room toward a window, reaches it, opens it. Three movements. Minimum viable content layers (one character, one object, one motif). Designed to:

1. Exercise all six signal types (Identity+Shape, Math vocabulary, Audio, Visual, Voice, Transition)
2. Stress both C¹ and C² continuity grades at its two joins
3. Carry at least one Shape transition that's not a magnitude-match (verifies C¹ vs C² rules)
4. Exercise audio-first surface composition (audio surface as temporal substrate; visual within)
5. Exercise Pass 6 substitution (cross-modal: work-specific identities woven into image, audio, narrative prompts from character/object/motif references)
6. Exercise Voice translation discipline (generator-facing voice description, constant across movements)
7. Exercise translation discipline at the prompt boundary (no framework vocabulary in prompts)
8. Run end-to-end through the framework's twelve passes (Pass 0 dependencies + Passes 1–10 composition + Pass 11 freeze) on a scale small enough for rapid iteration
9. Produce checkable verification of framework claims (see [verification.md](verification.md))

---

## The spline

| # | Movement | Felt weight | Shape |
|---|---|---|---|
| 1 | Crossing | gathered, forward | Approach=Held · Within=Rising · Departure=Steep rise |
| 2 | At the Window | held, suspended | Approach=Gradual rise · Within=Steady · Departure=Gradual fall |
| 3 | Opening | released, exhale | Approach=Gradual fall · Within=Falling · Departure=Held |

**Continuity grades:**
- 1→2: C¹ — direction match (rising→rising), magnitude differs (steep→gradual). The figure approaches the window faster than the window receives them; an asymmetric arrival.
- 2→3: C² — direction and magnitude match (gradual fall→gradual fall). The window's opening unfolds from the held arrival.

Full per-movement signals in [spline_reference.md](spline_reference.md).

---

## Content layers

- **[Character](character_reference.md)** — *the Figure*. A person crossing the room. Unspecified age, gender, appearance.
- **[Object](object_reference.md)** — *the Window*. Present as goal in 1, foregrounded in 2, opened in 3.
- **[Motif](motif_reference.md)** — *Approach-and-Arrive*. Recurring compositional pattern of forward-then-stillness; reads as forward motion in 1, held arrival in 2, release-after-arrival in 3.

---

## Realizations

Two realizations constructed to verify framework claims:

- **[Realization A](realizations/realization_a.md)** — preset-based composition (Tier 2 wholesale). Voice: Intimate first-person (Everyman × Realist × Intimate × Solo × Composed). Medium: Watercolor. Visual world: Storybook. Includes Voice translation field.
- **[Realization B](realizations/realization_b.md)** — atomic-override composition (Tier 1 direct). Voice: Scientist × Empirical × Testimonial × Solo × Stricken. Demonstrates atomic composition path and Affect variation. Includes Voice translation field.

Both honor the spline's invariants; both differ at flexibility points. See [verification.md](verification.md) for what each realization tests.

## Generations

Each realization is a generator function — invoked, it produces a sample. Generations of Calibration's realizations live in [realizations/generations/](realizations/generations/) and follow the naming convention `calibration.{realization}.{operator}.{YYYYMMDD-HHMMSS}[.{edit-suffix}]`.

Current generations:
- `calibration.a.hedawn.20260527-041500` — Realization A, initial L1 generation
- `calibration.a.hedawn.20260527-045500` — Realization A, second L1 generation (variance test)
- `calibration.b.hedawn.20260527-043000` — Realization B, initial L1 generation
- `calibration.b.hedawn.20260527-051000` — Realization B, second L1 generation (variance test)

See [know/references/generation_tracking.md](../../../know/references/generation_tracking.md) for the tracking convention.

## Dependencies

Calibration's framework dependencies are declared in [dependencies.md](dependencies.md). Currently requires framework version 20260527-044500 or later. No score-local extensions (Calibration uses only base framework vocabulary by design — it's the framework's iteration harness, so vocabulary discovered during Calibration construction goes to framework base directly).

---

## Verification

See [verification.md](verification.md) for the full claims-and-methods checklist. Running a realization end-to-end against the checklist produces pass/fail per framework claim.

**Two verification levels:**
- **Level 1 (in-conversation, fast iteration):** All structural claims testable with explicit isolation discipline during dev runs
- **Level 2 (external generator, milestone verification):** Cold-start sufficiency, translation discipline robustness, and reproducibility require external generator isolation; deferred to milestone-verification stage once framework stabilizes

---

## Status

Calibration is the framework's primary iteration harness and stress-test bed. Framework changes get applied here first and verified before any extension to other authored works. Current state: framework iterating; both realizations have Voice translation fields applied; calibration's presets are about to be ground-up redesigned as work-local archetypes purpose-built for MVPoC-style stress-testing (see [`../../projects/plans/`](../../projects/plans/)).
