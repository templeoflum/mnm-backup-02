# Roadmap

The posture: forward-planning. Where the project is heading over the medium and long term — milestones, gated work, conditional paths.

This document is the **comprehensive work survey** for the project: everything-open at every horizon, pulled together so prioritization can happen against a complete picture. Each entry cross-references its source so the audit trail stays honest.

Distinct from neighboring posture documents:

- **[SURVEY.md](SURVEY.md)** describes current state.
- **[CHARTER.md](CHARTER.md)** lists what the project commits *not* to do.
- **[CRITIQUE.md](CRITIQUE.md)** names gaps between current claim and current delivery.
- **[../know/formalization_roadmap.md](../know/formalization_roadmap.md)** is scoped specifically to earning formal claims (Spline stages S1–S5, Algebra stages A1–A4).
- **[handoff/QUEUE.md](handoff/QUEUE.md)** carries immediate-term pending items at session granularity.
- **[handoff/OPEN_QUESTIONS.md](handoff/OPEN_QUESTIONS.md)** carries uncertainties not yet resolved.

This document carries **project-level direction** at horizons longer than QUEUE and scope broader than the formalization roadmap.

---

## Posture and population

Roadmap entries are descriptions of intent, not commitments. The charter governs commitments. An entry on the roadmap means the work is identified, not promised — entries can be deferred, dropped, or re-scoped as understanding improves.

Each entry has a status. Status changes as work happens. Closed entries move to a closed section (or to DEV_LOG if they produced framework changes worth logging).

This is the comprehensive view — every open item should appear here, with a link back to where it was first surfaced. If something is open and not in this document, the discipline is broken.

---

## Active

Work currently underway, picked up in current or recent sessions.

- **MVPoC pivot — paused.** Per [`do/projects/plans/mvpoc_pivot.md`](../do/projects/plans/mvpoc_pivot.md), the active mode was *one load-bearing claim proven at a time, paired with a workbench verification surface*. MVPoC #1 (math-drives-Trajectory) is verified. MVPoC #2 (Identity/Trajectory split) was attempted and retired as moot (the split is constitutive of framework structure, not at risk). Paused for the calibration-completeness work (below).
- **Calibration completeness + preset redesign.** Ground-up redesign of calibration's presets as work-local archetypes purpose-built for MVPoC-style stress-testing of load-bearing claims. Removes the framework's preset bundles (no graduation to framework-level until earned). Plan to be scoped this session; execution future.
- **Operator profile system.** Schema, first profile (operator-led, not AI-inferred). Interview deferred to dedicated session.

---

## Near-term

Identified, ready to pick up, not currently active.

### Framework substance
- **Refine Pass 10 framework description.** Sharpen the boundary with Pass 9; re-examine the two-mode framing under the corrected Pass 9 / Pass 10 split. (From prior pending queue.)
- **Articulate Notebook entry preset's script-text conventions** in [../know/references/script.md](../know/references/script.md). How silences, dated entries, sensory cues, marginal observations render as text.
- **Articulate Intimate page preset's presentation-visual conventions** in [../know/references/presentation.md](../know/references/presentation.md). Typography, ground, leading, cue-block treatment, format choice.
- **Resolve math primitive gap.** Calibration uses primitives not in framework's eighteen. Three resolution options (extend framework / score-local extension / hybrid) documented. Needed before serious foundational work (S3 or A2). *Source: [handoff/OPEN_QUESTIONS.md](handoff/OPEN_QUESTIONS.md).*
- ~~**Resolve Asparśa Yoga lineage.**~~ Closed 2026-05-27. LINEAGE entry promoted to Direct; dumps/ workflow established (gitignored binary inputs, tracked Markdown derivatives in dives/). See Closed section.

### Infrastructure
- **DEV_LOG entry** for this session capturing the full arc.

---

## Medium-term

Multi-session work, often gated by near-term completion.

### Formalization
- **Stage A1 — operations explicitly named with signatures.** Catalog the implicit operations the framework currently performs (preset composition, override application, locking, substitution, translation, realization construction). Pure naming work; no new commitments. Unlocks A2 (laws conjectured) and A3 (laws verified). The relational definition of felt-quality from prior session reflection is a natural starting point. *Source: [../know/formalization_roadmap.md](../know/formalization_roadmap.md).* *Closes [CRITIQUE: Compositional Algebra names operations but operations not catalogued](CRITIQUE.md) when reached.*
- **Stage S3 — polynomial commitment.** Commit movements to polynomial form of some chosen degree. Continuity grades become real derivable equations. Mechanical verification becomes possible. *Source: [../know/formalization_roadmap.md](../know/formalization_roadmap.md).*
- **Stage S4 — authoring convention.** Shape's sub-fields become operational specifications of polynomial constraints. Determinism (same spec → same f_n) becomes operational. *Source: [../know/formalization_roadmap.md](../know/formalization_roadmap.md).* *Closes [CRITIQUE: Math drives Trajectory but Shape labels qualitative](CRITIQUE.md) when reached.*

### Verification
- **First Level 2 (cold-start) verification.** Run one full realization through an independent operator with no in-conversation context. Required before claiming cold-start sufficiency or reproducibility-by-others. *Closes [CRITIQUE: L1 verification supports L2 confidence but L2 never run](CRITIQUE.md).*
- **Exercise edit cycle (`.e1`).** First surgical edit on a frozen Calibration generation. Verifies the generation tracking lifecycle works end-to-end. *Closes [CRITIQUE: Generation tracking lifecycle specified but edit cycle never exercised](CRITIQUE.md).*

### Apparatus + content
- **Populate LINEAGE with operator's prior work.** Dedicated sessions to write up traditions and prior works that influenced the framework. Asparśa source now in `../do/projects/study/dumps/`; Parameter Motion Protocol already named; others pending. *Source: [LINEAGE.md](LINEAGE.md) pending entries.*
- **Build operator profile fully.** Schema + populated `../know/operator_profiles/hedawn.md`. Interview-driven.

---

## Long-term / vision

Work whose value is clear but whose path requires substantial intermediate progress.

- **Multi-voice realizations.** Voice has five sub-functions; only four have been exercised. Configuration (Solo / Chorus / Layered / Call-and-response) tested only at Solo. *Closes [CRITIQUE: Voice has 5 sub-functions but only 4 exercised](CRITIQUE.md) when at least one non-Solo realization completes.*
- **Cross-work composition.** Currently a character or object in one work cannot be formally referenced from another. Each work's content layers are independent. *Source: [SURVEY.md](SURVEY.md) limitations.*
- **Branching / recursive spline structure.** Currently linear: Movement 1 → 2 → ... → N. No branches, no recursion, no convergence from multiple prior movements. *Source: [SURVEY.md](SURVEY.md) limitations.*
- **Reach Stages S5, A2, A3, A4.** Full formalization paths completed. *Source: [../know/formalization_roadmap.md](../know/formalization_roadmap.md).*
- **Non-narrative works.** The workflow assumes narrative as the in-kit generator. Works that are primarily visual or sonic without narrative don't fit the current Pass 6 (narrative generation) cleanly. *Source: [SURVEY.md](SURVEY.md) limitations.*

---

## Conditional / gated

Work that is real but waits on something specific.

### Workbench project (V1 landed; iterating from operator feedback)

V1 (`../do/projects/workbench/navigator.html`) addresses Friction 1; verified by operator 20260527. Friction set reframed 2026-05-28 around the developer-of-the-system stance (see `../do/projects/workbench/frictions.md` *Reframe note*). F2 is the active priority.

Friction-by-friction (current four-friction set):
- **Friction 1: Seeing everything at once.** *V1 verified 20260527.* Navigable tree + markdown + HTML render + hot reload. See [../do/projects/workbench/navigator.html](../do/projects/workbench/navigator.html).
- **Friction 2: Network as visible, traceable, editable system.** *Active priority.* See/trace/edit the codebase's network — files, concepts, references, signal flow, algebra. Absorbs the former F4 (signal flow as live diagram). Stopgap: [`../do/projects/plans/network_map.md`](../do/projects/plans/network_map.md).
- **Friction 3: File tracking — designs, entities, generations.** Iterate, store, recall design files in general (not just generations). Sets up entity_creators.
- **Friction 4: Validation as ambient state.** Every generation/prompt/preset reference validated continuously. *Partial work in the validator script (Active section above) addresses the smallest version of this friction without the full workbench.*

Deferred (returns when content-authorship becomes the active stance):
- **Spline visualization and editing.** Previously F2. Off the friction list for now; the markdown-authored Calibration spline serves current developer-of-the-system needs adequately.

Natural order: F1 (verified) → F2 → F4 → F3.

### Study system project (gated by framework stabilization — Option C)

The study system is gated by the framework stabilizing enough to anchor connection mappings. See [projects/study/](../do/projects/study/).

When work begins, in order:
- Confirm framework stability (Calibration A successfully run; Pass 10 refined; preset articulations complete).
- Finalize the schema. Generate pilot dive (probably Genette) by hand.
- Build `study/SKILL.md` directive.
- Generate four highest-priority dives (Genette, Stanislavski, Bringhurst, Milewski). Review. Refine schema.
- Begin staged batching of remaining ~95 dives across subsequent sessions.

Schema open questions (to resolve when study begins): output substrate (frontmatter? markdown body?); directory structure under dives/; directive template shape; verification checklist; batching strategy; hallucination discipline; generation cost staging. *Source: [projects/study/schema.md](../do/projects/study/schema.md).*

### Asymmetries and extension points

- **Image and audio voice-fill equivalent.** 12-pass workflow leaves narrative with per-beat structure but image and audio at movement level. For Calibration this is closed in negative. For long-format works it may need revisiting. *Source: [handoff/OPEN_QUESTIONS.md](handoff/OPEN_QUESTIONS.md).*
- **C³+ continuity grades.** Framework authors C⁰, C¹, C². Higher grades available if a spline score needs them. *Source: [handoff/OPEN_QUESTIONS.md](handoff/OPEN_QUESTIONS.md).*
- **Per-beat per-modality modulation.** Framework supports per-movement modulation; per-beat would extend to finer granularity. Not needed for Calibration; important for long-format works. *Source: [handoff/OPEN_QUESTIONS.md](handoff/OPEN_QUESTIONS.md).*

---

## Closed

- **Resolve Asparśa Yoga lineage.** Closed 2026-05-27. Operator placed source document in `../do/projects/study/dumps/`; LINEAGE entry promoted from `[pending]` to Direct with the borrowing specified (operational alignment posture, not theology). Also established the study-system intake pipeline (`dumps/` gitignored except README; `dives/` tracked) and propagated through projects/study/ docs and CLAUDE.md. See DEV_LOG Session N+3 addendum.
- **Handoff system redesign.** Closed 2026-05-27. Replaced single HANDOFF.md with stance-named surfaces; content migrated; originals stubbed. Eighth file (FINDINGS) added 2026-05-28 as a separate evolution.
- **Workbench V1.** Closed 2026-05-27. `../do/projects/workbench/navigator.html` verified — markdown render + internal links + HTML render (sandboxed iframe) + hot reload, all confirmed working. Continues to evolve under the MVPoC pivot.
- **Validator script (minimum viable).** Closed 2026-05-27. `../do/projects/workbench/tools/validate.py` — dead-link check, glossary vocabulary consistency, VERSION format, generation ID format. Iterated 2026-05-28 (regex fix that surfaced 18 hidden dead links). Continues as standing infrastructure.

When a roadmap entry closes:
1. Move the entry here with a one-line note: what shipped, when, DEV_LOG link.
2. Close any CRITIQUE entries the work was meant to address (move them to CRITIQUE's Closed section).
3. Remove any OPEN_QUESTIONS entries the work resolved.

---

## How to use this document

- **At session start:** scan Active and Near-term to orient on what's underway.
- **When proposing new work:** check whether the proposal fits an existing entry, displaces one, or belongs in Medium / Long / Conditional. Add an entry if it's new; cross-reference the source if pulled from CRITIQUE / OPEN_QUESTIONS / a project doc.
- **When work completes:** move the entry to Closed, close any CRITIQUE/OPEN_QUESTIONS it resolves, produce a DEV_LOG entry.
- **When direction changes:** revise entries directly. The roadmap is a working document, not a contract.

The roadmap is a posture, not a plan. It captures direction; the actual sequence of work happens in QUEUE, and the chronological record happens in DEV_LOG.
