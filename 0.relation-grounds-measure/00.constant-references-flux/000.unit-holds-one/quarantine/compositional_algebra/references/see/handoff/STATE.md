# State

The posture: snapshot. Where the framework stands right now.

This file is overwritten each session. Older state lives in [`../DEV_LOG.md`](../DEV_LOG.md).

---

## Framework version

`20260528-194530` (see [`../../know/VERSION`](../../know/VERSION))

---

## Last session

**Session date:** 2026-05-28 (Session N+8)
**Operator:** hedawn

**Arc of the session:** Open with session-start discipline (STATE/QUEUE/etc. read; validator clean) → operator confirms MVPoC #2 (Identity/Trajectory split) as top of stack → AI builds `identity_trajectory.html` from framework-level `voice.md` presets → operator surfaces that the MVPoC shows a vacuous truth (Identity and Trajectory live in different functional planes by construction; nothing at risk) → operator surfaces the deeper structural problem: framework-level presets shouldn't exist; calibration should hold its own presets purpose-built for stress-testing; spatium being in the codebase causes confusion → spatium removed (operator manual) → full doc sweep + spatium reference cleanup → FINDINGS posture added as a new handoff notepad → calibration_completeness plan scoped → MVPoC pivot paused pending that plan's execution → logs/observations/critique/findings updated.

**Notable changes this session:**
- **Spatium removed.** `do/works/spatium_dimensio/` deleted (operator manual); 26 in-repo references swept and rewritten or removed. Historical references in DEV_LOG and existing generation files preserved as accurate records of past state.
- **FINDINGS.md added** as a new handoff posture (notepad for specific discoveries from the work; promotes out to OBSERVATIONS / OPEN_QUESTIONS / CRITIQUE / QUEUE / IDEAS / DEV_LOG / dropped). `see/handoff/README.md` updated; at-session-start and at-session-end checklists updated.
- **MVPoC #2 retired as moot.** Identity/Trajectory split is constitutive of framework structure; not at risk; nothing to prove. `identity_trajectory.html` (built mid-session, never tracked) deleted.
- **MVPoC pivot paused.** [`do/projects/plans/mvpoc_pivot.md`](../../do/projects/plans/mvpoc_pivot.md) updated with pause context; resumes from MVPoC #3 against the redesigned calibration when calibration_completeness retires.
- **Calibration completeness plan scoped.** New plan at [`do/projects/plans/calibration_completeness.md`](../../do/projects/plans/calibration_completeness.md). Strip framework-level preset bundles; ground-up redesign calibration's presets as work-local archetypes for MVPoC stress-testing; update calibration's realizations + dependencies. Scoped this session; execution pending.
- **Posture-doc staleness fixed.** SURVEY's *"Six layers"* (was 9 listed, currently 11) and *"Ten passes"* (currently 12) and *"Pass 6a"* (currently Pass 6) corrected. glossary `Layer` definition's six-layer enumeration corrected to eleven.
- **Glossary cleanup.** Five explicitly-named spatium realization entries removed (Fairytale, Lecture, Personal Letter, Sacred Ritual, Technical Essay). Two script-preset descriptions generalized away from specific realization names.
- **LINEAGE entry rewritten.** "Spatium Dimensio → the framework's shape" → "Prior spline score → the framework's shape" — lineage preserved (the framework's shape *did* come from that work), link removed (the work is no longer in the codebase).
- **CHARTER's "no edits to quarantined work" gate removed** (the quarantined work is gone; the gate is moot in its specific form; flagged as FINDINGS for potential CHARTER reframing).
- **CRITIQUE entry added** for framework-level preset bundles never having earned graduation.
- **OBSERVATIONS entry added** for the pattern *vocabulary graduates by living somewhere, not by earning it* (promotion candidate: discipline section on earned graduation).
- **FINDINGS populated** with 7 entries from the sweep (workflow staleness in SURVEY, glossary spatium-flavoring, framework preset positioning, CHARTER gate loss, network map artifact staleness, handoff stubs decision pending, Shape vocabulary location gap).
- **ROADMAP rewritten** — Active section is now [MVPoC pivot — paused] + [Calibration completeness + preset redesign] + [Operator profile system]. Workbench V1 / Validator / Handoff system redesign moved to Closed. Spatium un-quarantine entry removed (moot).

---

## Active work focus

**Through-line: Calibration completeness + preset redesign** ([`do/projects/plans/calibration_completeness.md`](../../do/projects/plans/calibration_completeness.md)). Scoped 2026-05-28. Execution pending.

The MVPoC pivot ([`do/projects/plans/mvpoc_pivot.md`](../../do/projects/plans/mvpoc_pivot.md)) is paused pending this work. MVPoC #1 (math-drives-Trajectory) remains verified. MVPoC #2 retired as moot. MVPoC #3 (translation-discipline audit) is the next candidate to source from the redesigned calibration when the pivot resumes.

---

## Current pass map

| Pass | Name | Job |
|---|---|---|
| 0 | Dependency check | Verifies framework version meets work's minimum; preset references resolve; spline beat-authoring present |
| 1 | Signal pull | Reads spline per-movement signals |
| 2 | Content composition | Math + character + object + motif per movement |
| 3 | Surfaces | Audio aesthetic; medium × visual world per movement |
| 4 | Voice composition | Voice atomic configuration → generator-facing description |
| 5 | Triplet assembly | Three cold-start prompts under four-block template (Identity / Scene / Length / Avoid) |
| 6 | Substitution | Cross-modal: work-specific identities committed across all prompts |
| 7 | Outline | Cross-modal: beats read from spline; per-beat narrative outline; movement-level image/audio outlines |
| 8 | Narration (prompt assembly + execution) | Compose Pass 5/6/7 into final generator-facing prompt; run; produce voiced narration |
| 9 | Script (performable text) | Apply script preset's six sub-functions; produce script as performable text |
| 10 | Presentation (visual artifact) | Apply presentation preset's five sub-functions; produce visual document |
| 11 | Freeze and tracking | Operator decision: freeze or regenerate; produce tracked generation file |

Authoritative source: [`../../know/references/realization_workflow.md`](../../know/references/realization_workflow.md).

---

## What the next session is picking up

See [QUEUE.md](QUEUE.md). Top of queue: **execute the calibration completeness plan** — Phase 1 (strip framework presets) is mechanical; Phase 2 (gap analysis) needs care; Phase 3 (design archetypes) likely needs operator-led architectural conversation.

---

## Key architectural state

**Calibration is the only work in the codebase.** Earlier work removed 2026-05-28 (the originating spline score; lineage retained in [`../LINEAGE.md`](../LINEAGE.md)).

**Framework references currently still carry preset bundles** — pending strip in the calibration completeness plan. After the strip, framework references hold only sub-function specifications (pure construction direction).

**See/know/do reorganization** (Session N+5) remains the load-bearing structure. The atomic principle (categories have README + atomic items, recursively) applies throughout.

**Twelve-pass workflow** is current canonical. Pass 8 is execution, Pass 9 is script-as-text, Pass 10 is visual artifact, Pass 11 is freeze and tracking.

**Translation discipline** named; validator catches some leak patterns; full closure requires workbench Friction 4.

**Identity / Trajectory** split remains central. **Shared knot structure** (per exploration #2) is the corrected architectural framing replacing implicit carrier/modulation; not yet adopted into the spline reference.

**Two-level verification** named; L2 never run.

**Generative / freeze / edit cycle** specified; edit suffix never exercised.

**Stages S1 + S2** completed; S3, S4 pending. Algebra path A1–A4 untouched.

**Workbench V1** verified by operator 2026-05-27. Friction set: F1 done, F2/F3/F4 demand-pulled as MVPoC needs surface (pause-paused with the MVPoC pivot).

**Plans posture** at `do/projects/plans/` holds three persistent plans: `mvpoc_pivot.md` (paused), `calibration_completeness.md` (scoped, execution pending), `network_map.md` (V1 partial; D1 reading pass pending).

**Validator + extract_network_map.py** share link-finding logic. Network map artifacts (`files.md`, `glossary_anchors.md`, `network.json`) re-extracted at session end (454 edges across 96 markdown files; 316 glossary terms). Validator clean: zero dead links.

**Study system** Option C posture preserved.

**Explorations** holds 6 framework-thinking-not-yet-incorporated drafts.

---

## Repository at session end

```
compositional_algebra/
├── .git/
├── .gitignore
├── README.md, CLAUDE.md                   project entry points
│
├── see/                                   LAYER 1 — postures (7 docs + handoff/)
│   ├── README.md
│   ├── ARCHITECTURE.md, SURVEY.md, CHARTER.md, CRITIQUE.md, LINEAGE.md, ROADMAP.md, DEV_LOG.md
│   └── handoff/                           live session state
│       ├── README.md, STATE.md, QUEUE.md
│       ├── OPEN_QUESTIONS.md, OBSERVATIONS.md, IDEAS.md
│       ├── FINDINGS.md                    NEW THIS SESSION
│       └── HANDOFF.md, STUDY_HANDOFF.md, WORKBENCH_HANDOFF.md  (legacy redirect stubs)
│
├── know/                                  LAYER 2 — specifications
│   ├── README.md, VERSION, glossary.md, formalization_roadmap.md
│   ├── disciplines/                       12 atomic discipline files + README
│   ├── references/                        13 references + README  (preset bundles still present — pending strip)
│   └── diagrams/                          5 HTML diagrams + README
│
└── do/                                    LAYER 3 — artifacts
    ├── README.md
    ├── works/
    │   ├── README.md
    │   └── calibration/                   the only work in the codebase
    └── projects/
        ├── README.md
        ├── study/                         knowledge-base apparatus (Option C, deferred)
        ├── workbench/                     V1 navigator.html + network.html + trajectory.html + tools/
        ├── explorations/                  6 explorations + dumps/ intake
        └── plans/                         3 persistent plans
            ├── README.md
            ├── mvpoc_pivot.md             paused
            ├── calibration_completeness.md  NEW THIS SESSION (scoped)
            ├── network_map.md             V1 partial
            └── network_map/               artifacts (refreshed at session end)
```
