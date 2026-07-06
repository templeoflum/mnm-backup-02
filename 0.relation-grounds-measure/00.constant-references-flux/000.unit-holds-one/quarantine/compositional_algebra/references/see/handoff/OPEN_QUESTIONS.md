# Open Questions

The posture: uncertainty. Questions the framework has not yet decided. Each entry is something where the next move is unclear, or where evidence is missing that would let a decision be made.

Distinct from:
- **[../CRITIQUE.md](../CRITIQUE.md)** — gaps between framework's claim and framework's delivery (the framework *has* decided but doesn't actually do it yet)
- **[QUEUE.md](QUEUE.md)** — pending work that's clear enough to be picked up
- **[IDEAS.md](IDEAS.md)** — speculative possibilities, not yet decided whether to pursue

An open question becomes a QUEUE item when the path to resolution is clear. It becomes a CRITIQUE entry when the question reveals a gap in current delivery. It closes by being resolved, with the resolution becoming a DEV_LOG entry.

Items below were extracted from `../DEV_LOG.md`'s "Open Findings" sections and the prior `HANDOFF.md`'s "Open Findings carried forward" list. DEV_LOG retains the historical context where each was first surfaced; this file carries the live state.

---

## Open

### Math primitive gap

Calibration uses math primitives in its spline signals — "line segment with endpoint" (path), "threshold" (window-as-boundary), "aperture" (window as openable), "transition" (air crossing threshold), "release", "sustained tone", "silence between breaths", "release of pressure" — that are not in the framework's eighteen named primitives (Vector, Basis, Vector space, Dimension, Inner product, Orthogonality, Slerp, Manifold, Function space, Fourier, Fractal dimension, Configuration space, Hilbert space, Projection, Topology, Spline/continuity, Cauchy, Graph/network).

The primitives are mathematically meaningful (line segments are basic geometry; thresholds and apertures are topological boundary concepts; transitions are state-change events; sustained tone and silence are temporal-acoustic primitives; release-of-pressure is thermodynamic-acoustic). They are being used coherently as authoritative work-vocabulary; the spline's per-movement signals work and the realizations construct from them.

**Resolution options:**
1. Extend the framework's primitive vocabulary to include them. Each would need a framework entry in `math_visual_reference.md` or `math_audio_reference.md` with consistent treatment.
2. Document them as score-local extensions in Calibration's `dependencies.md`. The framework gains a documented pattern for score-local primitives.
3. Hybrid: promote the mathematically-general primitives (line segment, threshold, aperture, transition) into the framework; leave the specifically-acoustic ones (silence between breaths, release of pressure) as score-local.

**Why this matters:** Stage S3 (polynomial commitment) and Stage A1 (operations named) both benefit from a stable primitive list. Resolving before either stage starts.

**First surfaced:** in DEV_LOG.md under "Open Findings" during the Realization A verification run (`calibration.a.hedawn.20260527-103000`).

---

### Image/audio voice-fill asymmetry

After the 12-pass workflow restructure, narrative goes through four progressive refinements before generation: form (Pass 5) → identity (Pass 6) → trajectory (Pass 7) → voice fill (Pass 8). Image and audio go through three: form → identity → trajectory. After Pass 7 the image and audio prompts are descriptive paragraphs ready to be handed to external generators.

The question is whether this asymmetry is right.

**Why it might be right:** Image and audio prompts at the end of Pass 7 are fully committed in content. Their register (how the description reads) comes from medium + visual world + audio aesthetic Identity declared at Pass 5. There may be no equivalent "writing pass" needed because the prompts are descriptive specifications, not voiced prose.

**Why it might be wrong:** Substitution + outline produce structurally complete prompts but may not produce ones that read with the same kind of intentional surface as narrative prose written under a voice spec. The image prompt's *language* — its sentence rhythm, vocabulary register, the way it draws attention through a scene — might benefit from a surface-polish pass.

**Resolution path:** Run multiple cross-modal verification realizations. Compare read quality of image and audio prompts after Pass 7 against read quality of narrative after Pass 8. If image/audio prompts feel structurally complete but read flatly, that's a signal for a surface-polish pass.

**Status:** deferred until more 12-pass tracked generations are available for comparison. For Calibration this is closed in negative (verification doesn't need per-beat image/audio); will become important for long-format works.

---

### C³+ continuity grades

The framework currently supports C⁰, C¹, C². Higher-order grades (C³+) are mathematically valid but require extending Shape with a fourth sub-function (tangent-of-tangent) to verify them honestly.

**Question:** when (if ever) does a spline score need C³ or higher?

**Resolution path:** wait for a spline score to need the distinction. The extension is mechanical when motivated by a real authoring need; speculative extension violates the define-before-reference discipline.

**Status:** deliberately deferred. See `framework/transition_reference.md`, Note on higher-order continuity.

---

### Per-beat per-modality modulation

Framework supports per-movement modulation of atomic units. Per-beat modulation would extend modulation to finer granularity.

**Question:** when (if ever) does the framework need per-beat per-modality modulation?

**Resolution path:** not needed for Calibration; will become important for long-format works. Defer until a work requires it.

**Status:** deferred.

---

---

## Closed

### Asparśa Yoga lineage status

**Resolved 2026-05-27.** Operator placed source document at `projects/study/dumps/Asparśa Yoga_ A Reflective Discipline of Alignment.docx` during the session; LINEAGE.md updated with a Direct entry confirming Asparśa as real operator lineage and naming what's borrowed (operational alignment posture) vs not (theology, metaphysics). Deeper structured extraction queued for when the study system goes live.

---

When future open questions resolve, the resolution becomes a DEV_LOG entry and the question moves here with a brief note about how it was resolved.
