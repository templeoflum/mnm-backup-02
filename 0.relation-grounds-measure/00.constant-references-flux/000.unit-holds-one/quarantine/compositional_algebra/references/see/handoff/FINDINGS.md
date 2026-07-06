# Findings

The posture: discoveries. Running notes on specific things found in the codebase during work — facts, gaps, inconsistencies, disjointed items — that surfaced during a pass.

Distinct from neighbors:
- **[OBSERVATIONS.md](OBSERVATIONS.md)** — patterns (recurring, generalized across sessions)
- **[OPEN_QUESTIONS.md](OPEN_QUESTIONS.md)** — uncertainties pending decision
- **[../CRITIQUE.md](../CRITIQUE.md)** — gaps between framework's claim and delivery
- **[IDEAS.md](IDEAS.md)** — speculation, not yet decided

A finding is a specific noticed thing that may or may not need action. Findings are the raw output of a sweep, a sit-with, or a piece of work that surfaced something concrete. When a finding matures, it gets *promoted*:

- To **OBSERVATIONS** if it's a recurring pattern across sessions
- To **OPEN_QUESTIONS** if it surfaces a decision the framework hasn't made
- To **CRITIQUE** if it reveals a gap between claim and delivery
- To **QUEUE** if it becomes pending work
- To **DEV_LOG** if it's been acted on
- To **IDEAS** if it points at a speculative possibility

Entries are append-only; promotion removes the entry from this file (or, optionally, moves it to a Closed section).

Posture notes:
- Findings are *specific*, not abstract. "voice.md has preset bundles" is a finding; "the framework has too many presets" is an observation or critique.
- Findings are *noticed*, not concluded. The act of looking at one place and seeing something worth noting is the source.
- Findings are *append-only*. The point isn't to curate a current state; it's to keep a working surface where discoveries land until they're acted on or promoted.

---

## Active findings

### 2026-05-28 — SURVEY's load-bearing counts were stale

**Context:** doc sweep this session (post-spatium-removal). Reading [SURVEY.md](../SURVEY.md) cold.

**Finding:** SURVEY said *"Six layers"* and listed nine; said *"Ten passes (… Passes 1–8 composition, Pass 9 freeze and tracking)"*; mentioned *"Pass 6a substitution"*. The current canonical state is eleven layers (math/content/surface/voice/script/presentation), twelve passes (Pass 0–11, Pass 11 freeze), Pass 6 (substitution) as the current name with no `6a` distinction. Fixed inline this session, but the staleness had survived multiple post-restructure sessions in the document a new reader is told to read first.

**Possible promotion:** OBSERVATIONS — pattern of *posture documents drifting from the workflow they describe when the workflow restructures*. Worth a discipline section if it recurs.

---

### 2026-05-28 — glossary still carries spatium-flavored work vocabulary

**Context:** spatium removal sweep this session. Five glossary entries explicitly named removed spatium realizations (Fairytale, Lecture, Personal Letter, Sacred Ritual, Technical Essay) — removed inline. But other entries reference spatium's structure implicitly: *"Five Voices, The (canonical character) — V's layered configuration: celebrant + mythic-scientist + mythic-mathematician + mythic-artist + mythic-child"* (the V is Spatium's Movement V); *"The field, the — opens at I; overlaid at II; pluralized at III; compressed at IV; released at V; held at VI; met directly at VII"* (the seven Roman-numeral movements are Spatium's). Multiple `Strong at I, III, V` modifiers on sub-function options across glossary.

**Finding:** The glossary blends framework vocabulary with work-specific vocabulary inherited from the originating spline score. The vocabulary that survived spatium's removal is now floating — claiming generality while implicitly named against a structure that no longer lives here.

**Possible promotion:** CRITIQUE — the framework's claim of work-agnosticism is undercut by glossary entries that name specific work-movements. Or QUEUE — a glossary audit pass to either generalize or remove work-specific items.

---

### 2026-05-28 — framework preset bundles still live in six layer references

**Context:** operator framing this session: *"the only presets we should have should be those in calibration; we havent earned any graduation to framework level yet; everything there should be pure direction on construction, not presets."* Surfaced after MVPoC #2 was built using preset bundles from `voice.md`.

**Finding:** `know/references/{voice,medium,visual_world,audio_aesthetic,script,presentation}.md` all currently contain a `## Preset Bundles` section. These bundles are framework-level — but the bundles in them (Mythic celebrant, Watercolor, Storybook, Quiet voice, etc.) were authored against the originating spline score, not against framework-general use. None has earned graduation. Per the operator's framing they should be stripped from framework level; calibration's existing presets are about to be ground-up redesigned as work-local archetypes for stress-testing.

**Possible promotion:** CRITIQUE — *the framework currently asserts framework-level presets but these are inherited from work-specific authoring without graduation*. Or QUEUE — strip-and-redesign work, which is what this session is scoping into a plan.

---

### 2026-05-28 — CHARTER lost its "no edits to quarantined work" gate

**Context:** spatium removal this session. The gate read *"No edits to quarantined work. Spatium Dimensio is quarantined while Calibration iteration stabilizes. Quarantine is honored."* The gate was the specific instance of a more general posture.

**Finding:** With the quarantined work removed, the gate is moot in its specific form but the underlying posture (*the codebase does not silently re-introduce work that was deliberately set aside*) may still be worth committing to. Especially relevant if a removed work's content (presets, motifs) re-appears in a future authored work — the framework should be honest about provenance.

**Possible promotion:** CHARTER — reframed gate (e.g., *"No silent re-introduction of removed work. Content from removed works that re-enters the framework via a new authoring path declares its lineage."*). Or dropped.

---

### 2026-05-28 — network map V1 artifacts are stale post-spatium

**Context:** spatium removal this session.

**Finding:** `do/projects/plans/network_map/files.md`, `glossary_anchors.md`, and `network.json` were generated 2026-05-28 with spatium present. After spatium removal, files.md contains edges to non-existent files; glossary_anchors.md mentions spatium-derived terms via their source files; network.json still has spatium nodes. Need re-extraction via `do/projects/workbench/tools/extract_network_map.py` to refresh.

**Possible promotion:** QUEUE — run extraction script at session end.

---

### 2026-05-28 — three handoff redirect stubs are well past migration

**Context:** sweep this session. `see/handoff/HANDOFF.md`, `STUDY_HANDOFF.md`, `WORKBENCH_HANDOFF.md` are redirect stubs from the handoff system migration (2026-05-27). Their own text says they're temporary and should be removed once the migration is settled.

**Finding:** Migration is settled. The stubs still exist. They were preserved as discoverability redirects pending operator decision (open in QUEUE). With the session's sweep happening anyway, the deferred decision is closer to actionable.

**Possible promotion:** OPEN_QUESTIONS or QUEUE — operator decision on delete-vs-keep.

---

### 2026-05-28 — calibration's spline reference points at a vocabulary specification that no longer exists in the codebase

**Context:** spatium sweep this session. `do/works/calibration/spline_reference.md` said *"See the framework's Shape vocabulary specification (currently maintained in Spatium Dimensio's spline_reference.md pending framework-level abstraction). Six Approach options × seven Within options × six Departure options."* The reference document is now removed.

**Finding:** Shape vocabulary lived in spatium's spline reference and was never promoted to framework-level. With spatium removed, the canonical specification location is lost. The six × seven × six option set is referenced from calibration but not documented anywhere the framework can reach. Edited inline to flag the gap; the gap itself remains.

**Possible promotion:** QUEUE — promote Shape vocabulary spec to a framework reference (likely `know/references/spline.md` if a framework-level spline reference gets authored, or as a section in `parameter_space.md`). Or — if Shape is being redesigned as part of the calibration-completeness work — fold it in there.

---

## How to write an entry

Each entry has:

- **Date noticed** — `YYYY-MM-DD`
- **Context** — where the finding came from (what work was happening, which file was being read)
- **Finding** — the specific thing noted
- **Possible promotion** — where this might mature to (observation / open question / critique / queue / dev_log / ideas / dropped)

Example shape:

```
### 2026-05-28 — finding title

**Context:** [where this came from]

**Finding:** [specific thing]

**Possible promotion:** [destination or "dropped"]
```
