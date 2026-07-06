# Critique

The posture: self-criticism. Where the framework falls short of its own claims — the named gaps between what the framework *promises* and what the framework *delivers*.

Critique is distinct from neighboring postures:

- **Survey** describes what the framework is, including honestly what it cannot do (the "What the framework cannot do, honestly" section).
- **Open questions** (in the proposed handoff structure) are uncertainties — things the framework hasn't decided yet.
- **Frictions** (currently absorbed into observations) are operational resistance felt while working.
- **Critique** is the gap between *promise and delivery* — places where the framework asserts something it has not actually demonstrated.

A critique entry is not a complaint. It is an identification: *here the framework says X, but in fact it does only Y*. The format makes the gap visible without prescribing how to close it. Closing happens through framework changes (which become DEV_LOG entries and remove the entry from this doc).

---

## Why critique

The framework's honesty discipline already commits to marking formal claims as gestural rather than earned. Critique extends that commitment from formal claims to *all claims*: operational, procedural, architectural. Anywhere the framework speaks with more authority than it has earned, critique names the over-reach.

This is consistent with the discipline against sycophancy: the framework should not flatter itself any more than its operators should flatter each other. The same standard applied to the conversation applies to the framework's self-description.

---

## Schema

Each critique entry has:

- **Claim** — what the framework asserts (with citation to where).
- **Delivery** — what the framework actually does, in operational terms.
- **Gap** — the precise way in which delivery falls short of claim.
- **What would close it** — the framework change, stage of the formalization roadmap, or operator action that would let the claim be made honestly.
- **Status** — Open / Partially closed / Closed (with date and DEV_LOG link).

Critiques are working entries. When closed, they leave (or move to a `CRITIQUES_CLOSED.md` archive — TBD when the first closure happens).

---

## Open critiques

### Framework-level preset bundles never earned their position

**Claim:** Framework references describe what's framework-general — sub-functions, options, and bundle conventions reusable across works. The framework is work-agnostic. (See [SURVEY.md](SURVEY.md), [CHARTER.md](CHARTER.md).)

**Delivery:** `know/references/{voice,medium,visual_world,audio_aesthetic,script,presentation}.md` each contain a `## Preset Bundles` section. The bundles in them (Mythic celebrant, Watercolor, Storybook, Quiet voice, etc.) were authored against the originating spline score, never met a graduation bar, and stayed at framework-level by virtue of living in framework-level reference files. With the originating work removed (2026-05-28), the bundles are floating — claiming framework-generality without evidence.

**Gap:** A reader of the framework would conclude that the named presets are framework-general bundles. In fact each was a Tier 2 convenience authored against one specific spline score's needs; none has been shown to be reusable across works. The framework asserts work-agnosticism while carrying inherited work-specific vocabulary at its top reference level.

**What would close it:** Strip framework-level preset bundles ([`do/projects/plans/calibration_completeness.md`](../do/projects/plans/calibration_completeness.md), Phase 1). Restore preset bundles to framework-level only through explicit graduation evidence — a bundle used by multiple works, with the second-use evidence documented in the bundle's framework-level entry.

**Status:** Open. Plan scoped this session; execution pending.

---

### Structural scaffolding has outpaced proof of load-bearing claims

**Claim:** The framework's central operational claims — Identity/Trajectory split, math drives all Trajectories, three-tier composition, spline as score, translation discipline, signal flow as typed pipeline, layer decomposition, generation tracking — are presented as the framework's structure ([SURVEY.md](SURVEY.md), [README.md](README.md), the references).

**Delivery:** Across sessions N+4–N+6 the project accumulated structure (see/know/do reorganization, atomic disciplines, plans posture, network map V1, workbench V1, friction reframes) faster than it accumulated proof. Of the eight load-bearing claims, only fragments of any have been operationally demonstrated. Calibration A — the closest integrated test — stalled at fourth attempt.

**Gap:** A reader of the framework's reference set would conclude that the framework *does* what it claims. In fact most of those claims are *asserted*, not *shown*. The gap is the difference between structural completeness and operational proof.

**What would close it:** The [MVPoC pivot plan](../do/projects/plans/mvpoc_pivot.md) — a sequence of small proofs, each paired with a verification surface, until enough load-bearing claims are demonstrated that the framework can stand on its proofs rather than its scaffolding.

**Status:** Open. The plan is the closure path; no MVPoC has been verified yet.

---

### Math drives Trajectory — but Shape labels are still qualitative

**Claim:** "Math drives all Trajectories." ([SURVEY.md](SURVEY.md), [README.md](README.md) — the framework's central operational claim.)

**Delivery:** Shape sub-fields (Approach × Within × Departure) characterize the felt-quality function `f_n` qualitatively. The function exists (S2 grounded it); the characterization refers to it. But the framework does not yet *derive* `f_n` from a spec — the operator authors `f_n` informally and labels it with category words. Math gestures at driving Trajectory; it does not yet operationally drive it.

**Gap:** The Trajectory of a movement is not derivable from the spec. Two operators reading the same spline produce visually-similar but mathematically-divergent `f_n`. The claim "same spec → same f_n" is aspirational at S2.

**What would close it:** Stage S4 (authoring convention) operationalizes Shape's sub-fields as polynomial-constraint interfaces; determinism becomes operational.

**Status:** Open. Pre-S4.

---

### Translation discipline is asserted — but failed three times this session

**Claim:** Framework-internal vocabulary does not appear in generator-facing prompts. (See [../know/references/prompt_construction.md](../know/references/prompt_construction.md), [../know/disciplines/](../know/disciplines/).)

**Delivery:** The four-block prompt template (Identity / Scene / Length / Avoid) and the no-leak rule are documented. Three Calibration A generations this session produced symptoms (identity dumps in cues, telegraphic voice fill) traceable to translation-adjacent failures.

**Gap:** The discipline is stated but enforcement is by author vigilance. There is no mechanical check — no validator, no lint, no warning at prompt-assembly time when framework vocabulary appears. Each new operator (AI or human) re-learns the discipline by leaking and being caught.

**What would close it:** A mechanical check at prompt-assembly that flags framework vocabulary in prompt text. The workbench would house this (per its Friction 4, validation as ambient state). Until then, audit-after-generation remains the only enforcement.

**Status:** Open.

---

### L1 verification supports L2 confidence — but L2 has never been run

**Claim:** The L1/L2 distinction is named, and L1 is offered as fast-iteration support with L2 reserved for milestone verification. (See [SURVEY.md](SURVEY.md), [../know/disciplines/](../know/disciplines/).)

**Delivery:** L1 has been exercised many times. L2 has been exercised zero times. The relationship between L1 evidence and L2 confidence is *asserted*, not tested.

**Gap:** It is currently possible for L1 verification to pass while L2 would fail (cold-start prompts insufficient; framework abstractions unreadable to an isolated operator). The framework does not know how often this would happen because it has not measured.

**What would close it:** Run at least one full L2 generation — an independent operator, cold-start, no in-conversation context, executing the assembled prompt with only the framework's specified deliverables. The result either confirms L1→L2 confidence is well-founded or surfaces the gap.

**Status:** Open. Required before the framework can honestly claim cold-start sufficiency or reproducibility-by-others.

---

### Twelve-pass workflow is documented — but Pass 8/9/10 boundaries were misread three runs in a row

**Claim:** The workflow is sequential, the passes are distinguishable, and the boundaries between passes are clear enough to execute against.

**Delivery:** Three Calibration A generations this session failed in part because Pass 8 was being treated as construction (authoring narration by hand) rather than execution (running the assembled prompt). The framework descriptions have since been corrected.

**Gap:** Even after correction, the framework has not yet produced a successful Pass 8 → Pass 9 → Pass 10 run under the new understanding. The corrected descriptions are *intended* to be unambiguous; this hasn't been verified.

**What would close it:** Complete Calibration A end-to-end under the corrected workflow. If the result is good, the descriptions hold. If it fails again, the descriptions need another revision.

**Status:** Open. First test pending.

---

### Generation tracking lifecycle is specified — but the edit cycle has never been exercised

**Claim:** Generation tracking supports live → frozen → superseded lifecycle and surgical edits chained from frozen artifacts (`.e1`, `.e2`). (See [../know/references/generation_tracking.md](../know/references/generation_tracking.md).)

**Delivery:** The first three states have been used. No edit-suffix generation has ever been produced.

**Gap:** Whether the edit cycle is operationally workable — whether a `.e1` produces something coherent against its parent, whether multi-edit chains stay readable, whether the ID format supports the workflow in practice — is unverified.

**What would close it:** Exercise the edit cycle at least once, probably on a frozen Calibration generation.

**Status:** Open. Low priority until first frozen Calibration generation lands.

---

### Voice has five sub-functions — but only four have been exercised

**Claim:** Voice composition operates across five sub-functions (per [../know/references/voice.md](../know/references/voice.md)).

**Delivery:** Four sub-functions have been exercised across realizations. The fifth — Configuration (Solo / Chorus / Layered / Call-and-response) — has only been tested at Solo. Multi-voice realizations have not been produced.

**Gap:** The Configuration sub-function is documented but the framework's coverage of it is asserted, not verified. Whether Chorus or Layered configurations work as the reference describes is unknown.

**What would close it:** Author and produce at least one realization at each non-Solo Configuration value within Calibration (or a future authored work).

**Status:** Open.

---

### "Compositional Algebra" names operations — but operations have not been catalogued

**Claim:** The framework name asserts algebraic structure — "algebra" implies operations, signatures, laws.

**Delivery:** Composition operations exist (preset composition, override application, locking, substitution, translation, realization construction). But they have not been explicitly catalogued (A1), conjectured for laws (A2), verified (A3), or named as algebraic structure (A4). The "algebra" is in operation but not in formal content.

**Gap:** The framework's name claims more than the framework delivers. Marked gestural in [../know/formalization_roadmap.md](../know/formalization_roadmap.md), but the name itself does not carry the marker — only the documents inside the framework do.

**What would close it:** Stage A1 (operations explicitly named with signatures). Following stages strengthen the closure progressively.

**Status:** Open. Pre-A1. The honest read is that the framework's name is currently a promise, not a description.

---

## Closed critiques

### Carrier-and-modulation framing — closed by replacement (2026-05-27)

**Claim (implicit):** the framework's per-movement signals (Character, Object, Motif, Voice, Visual, Audio) were thought of as modulations of a carrier signal (the felt-quality curve), with modulation depth varying per signal and per tier.

**Why it didn't deliver:** modulation requires the modulating signals to vary a parameter of the carrier and demodulate back to carrier + signal. Calibration's voice is constant across all three movements while the felt-quality curve rises and falls — voice does not vary against the curve, so it is not a modulation of it. Defending this by calling constant voice "zero-depth modulation" makes the claim unfalsifiable.

**Gap (what the framework actually was):** signals are *authored per movement* over a shared partition of [0, T], with continuity grades that apply to all tracks at each knot. The felt-quality curve is the *reference track* among the bundle, not a carrier. This is co-articulation over a shared partition, not modulation of a carrier.

**Closed by replacement:** the shared knot structure framing supersedes carrier/modulation. The unifying instinct — one structure everything aligns to — was correct; the name was wrong. The replacement is falsifiable (signals at unshared boundaries would visibly break co-articulation) and needs no unfalsifiable dodge (constant tracks are just flat functions over the partition).

**See:** [`../do/projects/explorations/shared_knot_structure.md`](../do/projects/explorations/shared_knot_structure.md) — the exploration that surfaced the replacement and named the prior framing as wrong.

**Status:** Closed by replacement. The replacement is itself an exploration (not yet adopted into the spline reference); when adopted, this entry remains as historical record of what was tried and found wanting.

---

When future critiques close, the entry moves here with a brief note: what changed, when, and the DEV_LOG link (or "closed by replacement" if a different framing took over).

---

## Critique as discipline

A critique is added when over-reach is identified. A critique is closed when framework changes deliver what was claimed. Both events produce DEV_LOG entries.

The discipline of critique-as-working-document mirrors the framework's own preference for honest accounting over performance. It is the same posture turned inward.
