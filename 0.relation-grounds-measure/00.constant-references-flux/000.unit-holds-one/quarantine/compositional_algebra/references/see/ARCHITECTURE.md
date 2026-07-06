# Architecture

The posture: organizer. How the project's structure is laid out and why. The see/know/do model — the first principle the rest of the project organizes around.

This document is foundational. SURVEY describes *what* the framework is; ARCHITECTURE describes *how the project is organized to support that work*. Read SURVEY first if you want to understand the framework's content; read ARCHITECTURE first if you want to understand the project's structure and where things live.

---

## The three layers

The project is organized around three layers, each a top-level directory and a distinct cognitive stance. A master craftsman across many fields — science, math, literature, physics, engineering, music, design, software, architecture, philosophy, wisdom traditions, the humanities, art, performance — does three things constantly: **looks** at the work from many angles, **knows** what holds in the discipline of the craft, and **makes** the actual work. The framework's structure reflects this.

### Layer 1 — see/

**Stance:** ways of looking. Postures that view the work from many angles.

Each posture is a distinct cognitive primer — reading the file's name puts the reader into the stance the file is written from. The framework gives postures their own surfaces so the stance can be entered deliberately rather than incidentally.

**Lives in [`./`](./)** (this directory):
- Project-level posture documents — SURVEY (wide-angle), CHARTER (refusal), CRITIQUE (self-criticism), LINEAGE (ancestry), ROADMAP (forward-planning), DEV_LOG (historian), and ARCHITECTURE (this document — organizer)
- Session working state in [`handoff/`](handoff/) — STATE (snapshot), QUEUE (pending), OPEN_QUESTIONS (uncertainty), OBSERVATIONS (pattern-spotting), IDEAS (speculation)

### Layer 2 — know/

**Stance:** what holds. The settled understanding the work is built on.

Where Layer 1 looks at the work, Layer 2 carries what the work knows is true: vocabulary, specifications, disciplines, formal claims. Changes here ripple through the project — which is why audit-after-change and versioning disciplines live alongside what they govern.

**Lives in [`../know/`](../know/)**:
- Top-level pillars — VERSION, glossary, formalization_roadmap
- Sub-categories — references/ (the framework's reference manuals), disciplines/ (operator-agnostic process disciplines, currently 12), diagrams/ (visual specifications)
- Future — operator_profiles/ when the operator-profile system goes live

### Layer 3 — do/

**Stance:** what's made. Artifacts produced by the work.

Compositions (spline scores and their realizations) are what the framework is *for*. Apparatus (workbench, study, explorations) is what makes the framework usable and informed. Both are artifacts; both go in `do/`.

**Lives in [`../do/`](../do/)**:
- works/ — compositions: calibration (the framework's iteration harness and stress-test bed; the only work currently in the codebase)
- projects/ — apparatus: study (external knowledge intake → structured dives), workbench (operator tool + validator), explorations (internal thinking intake → structured drafts), plans (forward-looking execution sketches)

---

## The loop

The three layers form a loop, not a stack.

```
                see ──→ know ──→ do
                 ↑                ↓
                 └───── see ←─────┘
```

A master craftsman cycles through this constantly. Look at the work; check it against the discipline; make something; look at what was made; refine the discipline; make again. The framework's apparatus exists to support this loop — particularly the transitions between layers, which is where friction usually lives.

### see → know

Observations harden into disciplines. Explorations harden into references. Critique entries harden into roadmap items or close-by-replacement of prior framings. The four-step promotion path in `see/handoff/OBSERVATIONS.md` (observation → discipline / framework change / critique / roadmap) is one face of this transition.

**Current friction:** mostly manual. The operator notices the pattern and asks for it to be named. The discipline-discovery observation in OBSERVATIONS.md captures this.

### know → do

References inform realizations. Disciplines shape operator behavior. The validator partly mechanizes this — it witnesses that what's claimed in `know/` is reflected in what's made in `do/`. The workbench (per its frictions document) would extend this further.

**Current friction:** partly mechanical (validator catches some), mostly manual.

### do → see

Generations surface new observations. Failed runs become critique entries. Successful runs become DEV_LOG entries and roadmap closures. The three failed Calibration A runs of Session N+2 are a vivid example — each surfaced a pattern that became a framework refinement.

**Current friction:** mostly manual. The operator reviews the artifact and surfaces what it teaches.

### see → see (within layer)

Observations promote to ideas; ideas to roadmap entries; roadmap entries to queue items. Critique entries close as work lands. CHARTER additions reflect lessons from CRITIQUE. The handoff files structure this internal flow.

**Current friction:** partially structured. The handoff system gives each posture its own surface but the *promotion* between them is still manual.

---

## Where apparatus earns its place

The loop's transitions are exactly where apparatus earns its place. The workbench's frictions (in [`../do/projects/workbench/frictions.md`](../do/projects/workbench/frictions.md), reframed 2026-05-28) map directly:

| Workbench friction | Loop transition it serves |
|---|---|
| F1: Seeing everything at once | see → see (intra-layer visibility) |
| F2: Network as visible, traceable, editable system | know ↔ do (system structure ↔ developer-of-the-system; absorbs former signal-flow-as-live-diagram friction) |
| F3: File tracking — designs, entities, generations | do → see (artifacts → navigable history) |
| F4: Validation as ambient state | know ↔ do (mechanical witnessing in both directions) |
| (deferred) Spline visualization and editing | know → do (authorship-side; returns when content-authoring is the active stance) |

The validator already addresses a small slice of F4 (formerly F5 before the 2026-05-28 reframe). The navigator (`do/projects/workbench/navigator.html`) addresses F1 (verified). Both are minimum-viable; the workbench proper advances as friction-pain warrants. The reframe collapsed five frictions to four current + one deferred: old F2 (spline visualization) moved off the current list; old F4 (signal flow as live diagram) absorbed into new F2; old F5 renumbered to F4.

---

## Cross-layer files

A few files cut across all three layers:

- **[`../README.md`](../README.md)** — project entry-point. Points into all three layers.
- **[`../CLAUDE.md`](../CLAUDE.md)** — AI orientation. Points into all three layers.
- **[`./DEV_LOG.md`](DEV_LOG.md)** — chronological record of all three layers' activity. Lives in see/ (historian's posture) but its content describes the work of all layers.

Infrastructure (`.git/`, `.gitignore`) sits at root as project-mechanical, not see/know/do.

---

## How a new thing finds its home

When something new appears, the see/know/do model says: which layer does it serve?

- Is it a way of looking — a posture or a working surface? → **see/**
- Is it a specification, vocabulary, discipline, or settled understanding? → **know/**
- Is it an artifact being made — a composition, a tool, or apparatus? → **do/**

When uncertain, ask which layer would suffer most from its absence:
- If the framework would have no way to look at a particular angle, it's see/.
- If the framework would have no way to specify the thing that holds, it's know/.
- If nothing would be made or no tool would exist, it's do/.

Edge cases live in multiple layers via cross-references, not by being duplicated.

---

## How the structure evolves

The see/know/do top-level is the first principle. Sub-organization within each layer follows the **atomic principle**: each category has a `README.md` (overview + how to add) and atomic items (one concept per file).

To add a *new sub-category* within a layer, the bar is high — it must be a coherent kind of thing that doesn't fit any existing category and will produce more than one item over time. Singletons stay at the layer's top level (like `know/glossary.md`).

To add a *new item* within a category, follow that category's README. Atomic items are typically small files focused on one thing.

To add a *new top-level layer* — the bar is highest. The see/know/do model is the first principle; adding a fourth layer would require a stance no existing layer covers and that produces a substantial body of work over time. None is currently envisioned.

---

## Relationship to other posture documents

| Posture document | What it does | How it differs from ARCHITECTURE |
|---|---|---|
| **SURVEY** | describes what the framework *is* — its purpose, capabilities, limits | descriptive (the framework's content); ARCHITECTURE is organizational (the project's structure) |
| **CHARTER** | states what the project commits *not* to do | normative (refusals); ARCHITECTURE is organizational (where things live) |
| **CRITIQUE** | names gaps between framework's claim and its delivery | gap-finding; ARCHITECTURE is structural |
| **LINEAGE** | traces where each piece came from | ancestry; ARCHITECTURE is current shape |
| **ROADMAP** | shows where the project is heading | forward; ARCHITECTURE is present |
| **DEV_LOG** | chronicles what happened across sessions | chronological; ARCHITECTURE is atemporal |

ARCHITECTURE answers: *how is the project organized and why?* The other posture documents answer different questions about the project.

---

## The model in one sentence

> The framework is laid out as **see** (postures from which the work is viewed), **know** (specifications the work rests on), and **do** (artifacts the work produces) — three layers that form a loop, with apparatus living at the loop's transitions where friction is felt.

That is the first principle. Everything else descends from it.
