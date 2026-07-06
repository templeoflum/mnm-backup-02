# Exploration — Shared Knot Structure as Organizing Invariant

**Status:** exploration, not incorporated
**Relates to:** spline architecture, continuity grades, scale tiers, per-movement modulation
**Supersedes:** the "carrier + modulation" framing (tested and rejected — see below)
**Origin:** external session, migrated from `dumps/observation note dump 20260527.223154.txt`

---

## The rejected framing

Initial proposal: the spline is a carrier signal; character, object, motif, voice, visual, audio are modulations of it, with modulation depth and rules varying per tier.

This fails as literal structure. Modulation requires that the modulating signals vary a *parameter of the carrier* and that the result *demodulates* back to carrier + modulating-signal. Test against Calibration: voice is constant across all three movements while the felt-quality curve rises and falls. Voice does not vary against the curve, so it is not a modulation of it. Defending this by calling constant voice "zero-depth modulation" makes the claim unfalsifiable — any constant becomes a zero-depth modulation of anything. That is the false-coherence signal. The metaphor was being forced.

## What is actually true

The framework's per-movement signals (Identity/Shape, Math vocabulary, Character, Object, Motif, Visual, Audio, Voice, Beat-authoring) are **authored into the spline per movement**, not derived from the felt-quality curve. There is no demodulation that recovers Visual from the curve's value. The structure is not carrier-and-modulation; it is a bundle of coordinated tracks.

The real invariant is the **shared knot structure**: every signal is a function over a common partition of [0,T], with breakpoints at the same beat and movement boundaries, and continuity grades that apply to all tracks at each knot.

The felt-quality curve is the **reference track** — the spine the work is organized around — but it is not a carrier. It is one track among the bundle, distinguished by being the H² felt-quality function. The other tracks co-articulate with it over the shared partition.

## Why this is stronger than the rejected framing

1. **It is already what the framework does** — no retrofit. The signals are authored per movement over shared boundaries; that is co-articulation over a shared partition, described correctly.

2. **It explains why continuity grades govern all modalities.** The C¹-vs-C² distinction at a movement-join is a property of the shared partition, not of felt-quality alone. Every track crosses the join under the same grade. This is why the join reads as a redirect or unfold across voice, visual, and audio together — they share the knot.

3. **It is falsifiable.** If a signal changed at boundaries the other tracks do not share, co-articulation would visibly break. The rejected framing had no such failure condition.

4. **It needs no unfalsifiable dodge.** Constant voice is simply a track that does not vary across the partition — a flat function, which needs no special pleading.

## Consequence for scale tiers

Per-tier variation (the beats / movements / acts / arcs / series / eras / clusters hierarchy) reframes cleanly under this:

- A tier is a **level of the knot structure** — a density of breakpoints with its own continuity-grade conventions at its boundaries.
- Beats are dense, low-tier knots; eras are sparse, high-tier knots. Same kind of object, different scale — consistent with the recursive H² commitment (knots at every boundary; higher tiers are higher-continuity knots).
- "Scalability" means the same co-articulation structure holds at every tier: shared partition, continuity grades governing all tracks. This is checkable. If an operation only coheres at beat-scale and breaks at era-scale, co-articulation is not scale-invariant and the framework has learned a real limit.

This replaces the per-tier "modulation depth" parameter (which depended on the rejected carrier model) with per-tier **knot density and continuity-grade convention** — both concrete and verifiable.

## What to carry forward

Drop carrier/modulation. The unifying instinct — one structure everything aligns to — was correct; the correct name is the **shared knot structure with per-knot continuity grades governing all tracks simultaneously**, with the felt-quality curve as reference track rather than carrier.

## Standing

This is the most architecturally important exploration in the current batch. It corrects a wrong framing the framework was implicitly using and provides the right one. Promotion path: should become an addition to the spline reference (or a dedicated "shared knot structure" section), and the rejected carrier/modulation framing should land in CRITIQUE as a closed-by-replacement entry.

## Open question for later

Are the non-reference tracks ever genuinely *derived* from the reference track (true modulation), or always *co-authored* alongside it (co-articulation)? Calibration cannot distinguish these because its non-felt-quality tracks do not vary. A work where voice or visual varies across movements would test whether the variation is a function of the felt-quality curve or authored independently. Until such a work exists, the framework should assume co-articulation, not derivation.

## Relationship to other threads

- [Scale Invariance as Design Philosophy](scale_invariance_as_design_philosophy.md) — depends on this; the same co-articulation structure must hold at every tier for scale invariance to hold.
- Touches [`../../../know/references/parameter_space.md`](../../../know/references/parameter_space.md) — the H² commitment is grounded there.
- Will produce a [`../../../see/CRITIQUE.md`](../../../see/CRITIQUE.md) closed-by-replacement entry when adopted (carrier/modulation framing → shared knot structure).
