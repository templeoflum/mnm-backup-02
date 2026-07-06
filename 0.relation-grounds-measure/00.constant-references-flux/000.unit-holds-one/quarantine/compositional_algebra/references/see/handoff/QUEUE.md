# Queue

The posture: pending. Ordered list of work items being picked up imminently — this session and the next few.

Distinct from neighbors:
- **[../ROADMAP.md](../ROADMAP.md)** — direction at longer horizons
- **STATE.md** — snapshot of where things stand right now
- **OPEN_QUESTIONS.md** — uncertainties not yet pickable as work
- **FINDINGS.md** — specific discoveries from the work, not yet promoted
- **IDEAS.md** — speculation, not yet decided

Items can be marked `done — untested` when implementation has landed but operator hasn't verified.

---

## Next session (top of stack)

- [ ] **Execute the calibration completeness plan.** Per [`do/projects/plans/calibration_completeness.md`](../../do/projects/plans/calibration_completeness.md). Phase 1: strip framework-level preset bundles from the six layer references. Phase 2: gap analysis (which load-bearing claims do calibration's current realizations exercise; what's missing). Phase 3: design calibration-local preset archetypes — operator-led architectural conversation likely needed. Phase 4: rewrite calibration's realizations against the new presets. Phase 5: confirm MVPoC pivot can resume.

## Retired (recent)

- ✗ **MVPoC #2 — Identity/Trajectory split.** Retired as moot 2026-05-28. The split is constitutive of framework structure (Identity → content layers; Trajectory → derived from math), not at risk. Built and immediately deleted; the build also surfaced that it was sourcing from framework-level presets authored against a removed work, which is what triggered the calibration completeness reframe.

## Completed (recent)

- [x] **MVPoC #1 — math-drives-Trajectory derivation.** Verified by operator 2026-05-28. Verification surface: [`trajectory.html`](../../do/projects/workbench/trajectory.html). Claim *math drives all Trajectories* operationally demonstrated on a 3-knot toy spline with C⁰/C¹/C² grades + `f_n = t^γ`. No control authors the Trajectory directly; y-axis auto-fits so overshoot is honest.

---

## Through-line — paused

The [MVPoC pivot](../../do/projects/plans/mvpoc_pivot.md) is **paused** while [calibration completeness](../../do/projects/plans/calibration_completeness.md) rebuilds calibration as a proper stress-test bed. The pivot resumes from **MVPoC #3 (translation-discipline audit)** sourced from calibration's actual rewritten realizations when calibration completeness retires.

## Operator priorities (standing — demand-pulled)

1. **Develop the workbench further.** Demand-pulled: verification surfaces accumulate as MVPoCs ship.
2. **Flesh out the atomic file system.** Demand-pulled: only when an MVPoC's verification surface needs finer reference granularity.
3. **First essential deep dives.** Parallel apparatus work; not the through-line.

---

## Framework substance (deferred — most folds into calibration completeness)

- [ ] **Regenerate Calibration A through Pass 10** under the corrected workflow. The fourth attempt. *Deferred until calibration's preset redesign completes — the corrected workflow needs to be run against the redesigned spec, not the old.*
- [ ] **Resolve math primitive gap.** Calibration uses primitives not in framework's eighteen; needed before serious foundational work (S3 or A2). *Source: [OPEN_QUESTIONS.md](OPEN_QUESTIONS.md). Likely folds into calibration completeness Phase 2 (gap analysis).*

---

## Explorations awaiting decision

- [ ] **Shared Knot Structure** ([`../../do/projects/explorations/shared_knot_structure.md`](../../do/projects/explorations/shared_knot_structure.md)) — architectural correction; should be adopted into the spline reference.
- [ ] **Scale Invariance as Design Philosophy** ([`../../do/projects/explorations/scale_invariance_as_design_philosophy.md`](../../do/projects/explorations/scale_invariance_as_design_philosophy.md)) — candidate for CHARTER addition.
- [ ] **Micro-Docs with Reference IDs** ([`../../do/projects/explorations/micro_docs_with_reference_ids.md`](../../do/projects/explorations/micro_docs_with_reference_ids.md)) — needs design conversation; will inform read-first chain in CLAUDE.md.

---

## Findings awaiting action (from this session's sweep)

See [FINDINGS.md](FINDINGS.md) for full entries. Items that may want to move into the queue when picked up:

- [ ] **Glossary spatium-flavoring audit.** Entries that reference Spatium's seven-movement structure (Roman numerals I–VII) or the *Five Voices, The* canonical character. Either generalize or remove.
- [ ] **CHARTER reframing decision.** The *"no edits to quarantined work"* gate is moot in its specific form; decide whether to reframe as a more general no-silent-reintroduction gate or drop entirely.
- [ ] **Handoff stubs decision.** `HANDOFF.md`, `STUDY_HANDOFF.md`, `WORKBENCH_HANDOFF.md` — keep as discoverability redirects, or delete now that paths are stable.
- [ ] **Shape vocabulary location gap.** With spatium removed, the Shape vocabulary (6 × 7 × 6 option set) no longer has a canonical documentation site. Promote to a framework reference or fold into calibration completeness.

---

## Near-term (queued; not yet active)

- [ ] **Workbench Friction 2 — network as visible, traceable, editable system.** See/trace/edit codebase connections. Demand-pulled.
- [ ] **Workbench Friction 4 — validation as ambient state.** Extend validator integration into navigator. Demand-pulled.
- [ ] **Workbench Friction 3 — file tracking (designs, entities, generations).** Demand-pulled.
- [ ] **Operator profile system.** Schema + first profile in `know/operator_profiles/hedawn.md`, operator-led (interview).
- [ ] **Populate LINEAGE with operator's prior work.** Dedicated sessions; Asparśa source in `do/projects/study/dumps/`.

---

## Completed this session (N+8 — 2026-05-28)

Detailed in DEV_LOG entry for the session. Headline items:

- ✓ MVPoC #2 attempted, retired as moot; `identity_trajectory.html` deleted
- ✓ Operator manually removed `do/works/spatium_dimensio/`; 26 in-repo references swept
- ✓ FINDINGS.md added as a new handoff posture (notepad); registered in handoff/README + session-start/end checklists
- ✓ Full doc sweep with spatium reference cleanup; SURVEY layer/pass counts corrected; glossary spatium realizations removed; LINEAGE entry rewritten; CHARTER gate removed
- ✓ Calibration completeness plan scoped at `do/projects/plans/calibration_completeness.md`
- ✓ MVPoC pivot plan updated with pause context
- ✓ CRITIQUE entry added (framework-level preset bundles)
- ✓ OBSERVATIONS entry added (vocabulary graduates by living somewhere, not by earning it)
- ✓ FINDINGS populated with 7 entries
- ✓ ROADMAP rewritten — Active section now reflects paused pivot + new plan + operator profile
- ✓ Network map artifacts flagged as stale; re-extraction at session end
- ✓ VERSION bumped (at session end)
- ✓ DEV_LOG entry for the session appended (at session end)

---

## How to use this file

- **At session start:** read top to bottom; pick the top item or one of the operator priorities.
- **When completing an item:** mark `done — untested` if implementation landed but operator hasn't verified; mark fully complete only after verification.
- **When adding an item:** Next session = top of stack. Near-term = a few sessions out. Anything beyond goes to [`../ROADMAP.md`](../ROADMAP.md).

The queue is a working document, not a contract.
