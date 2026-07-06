# Handoff System

The handoff directory carries **session-to-session state** — what the next session needs to pick up cleanly from where this session ended. Distinct from:

- **`../../know/`** — work-agnostic specifications (stable; rarely changes)
- **`../../do/works/`** — spline scores under composition
- **`../../do/projects/`** — apparatus built to support the framework
- **`../DEV_LOG.md`** — chronological history of meaningful framework changes (append-only)
- **Project-level posture documents** (`../ARCHITECTURE.md`, `../SURVEY.md`, `../CHARTER.md`, `../CRITIQUE.md`, `../LINEAGE.md`, `../ROADMAP.md`) — stable orientation

The handoff is *live working state*. It is overwritten, curated, pruned — not accumulated.

---

## The files

Each handoff file has one cognitive posture (per the [posture-naming discipline](../../know/disciplines/posture_naming.md)).

### Notepads (append-only, accumulate)

- **[OBSERVATIONS.md](OBSERVATIONS.md)** — running notes on patterns noticed but not yet crystallized into discipline or framework change. The pattern-spotting notepad. When a pattern matures, it gets promoted (to a discipline section, to a framework change, to a CRITIQUE entry).
- **[FINDINGS.md](FINDINGS.md)** — running notes on specific discoveries from the work — facts, gaps, inconsistencies, disjointed items — that surfaced during a sweep, a sit-with, or a piece of work. The discoveries notepad. When a finding matures, it gets promoted (to OBSERVATIONS / OPEN_QUESTIONS / CRITIQUE / QUEUE / IDEAS / DEV_LOG).

### Whiteboards (curated, overwritten, current-state)

- **[STATE.md](STATE.md)** — snapshot of the framework right now: current version, active work, current pass map, what was done last session, what the next session is picking up.
- **[QUEUE.md](QUEUE.md)** — pending work items, ordered. Items get checked off, added, deferred, re-prioritized.
- **[OPEN_QUESTIONS.md](OPEN_QUESTIONS.md)** — uncertainties not yet resolved. Items removed when resolved (resolution becomes a DEV_LOG entry).
- **[IDEAS.md](IDEAS.md)** — speculative futures. Items move to action (becoming a project, becoming a QUEUE item) or get dropped.

### System

- **[README.md](README.md)** — this file. The handoff system guide.

---

## Information flow

The handoff is not a holding pen; it's a working surface. Information flows through it:

```
   incoming idea ──→ IDEAS.md
                          │
                          ├──→ rejected: removed
                          └──→ decided: becomes action, becomes DEV_LOG entry, removed from IDEAS
                                                                       (and may become a project under ../../do/projects/)

   uncertainty ───→ OPEN_QUESTIONS.md
                          │
                          └──→ resolved: resolution becomes DEV_LOG entry, removed from OPEN_QUESTIONS

   observation ───→ OBSERVATIONS.md (accumulates; not pruned)
                          │
                          ├──→ crystallizes into discipline: file added to ../../know/disciplines/
                          ├──→ becomes framework feature: framework change + DEV_LOG entry
                          └──→ surfaces a gap: ../CRITIQUE.md entry added

   session work ──→ DEV_LOG entry (history) + STATE.md update (current) + QUEUE.md prune (done items)
```

This mirrors the framework's own generation tracking lifecycle (live → frozen → superseded). Handoff files are "live" working surfaces; DEV_LOG and the project-level posture documents are "frozen" history and direction.

---

## At session start

This is the operational checklist for the [session-starting discipline](../../know/disciplines/session_starting.md). Every session opens through these steps when crossing a session boundary (fresh Claude instance, new operator, explicit resume, or long gap). Mid-conversation continuity does not require re-reading.

1. **STATE.md** — current framework state, last session's work, where the next session was supposed to pick up.
2. **QUEUE.md** — pending work in priority order; check the top.
3. **OPEN_QUESTIONS.md** — uncertainties that might shape current work.
4. **OBSERVATIONS.md** — patterns being watched that might matter today.
5. **FINDINGS.md** — specific discoveries from prior work, not yet promoted; check whether any bear on today's work.
6. **IDEAS.md** — speculation, in case current work surfaces a related idea.
7. **AI orientation** (when AI is involved) — `../../CLAUDE.md` first, then the read-first chain it points to (ARCHITECTURE → SURVEY → README → handoff/STATE).
8. **Validator** — `python ../../do/projects/workbench/tools/validate.py`. Sanity check that previous session-end was clean.
9. **Git status** — `git status` to confirm working tree clean and previous session-end commit is the tip. Uncommitted changes mean previous session didn't close cleanly; resolve before substantive work.
10. **Confirm operator intent** — the queued top item may not match what the operator wants today; confirm before picking arbitrarily.

The per-file structure means each question is answered by opening one file, not by parsing a single mixed document. Files are canonical between sessions; conversation is provisional.

The discipline file in `../../know/disciplines/session_starting.md` is canonical; this checklist is the operational form.

---

## At session end

This is the operational checklist for the [session-ending discipline](../../know/disciplines/session_ending.md). Every session closes through these steps; no session ends with state only in conversation memory.

1. **STATE.md** — overwrite with current state. What got done this session; what shape the framework is in now.
2. **QUEUE.md** — prune completed items; add new items surfaced this session; re-order as priority shifts. Mark `done — untested` for things implemented but not operator-verified.
3. **OPEN_QUESTIONS.md** — remove resolved questions (the resolution lands in DEV_LOG); add new questions surfaced. Closed items optionally archived in a Closed section.
4. **OBSERVATIONS.md** — append any patterns noticed that aren't yet ready to be promoted.
5. **FINDINGS.md** — append specific discoveries surfaced this session that aren't yet ready to act on; promote out any findings that have matured (to OBSERVATIONS / OPEN_QUESTIONS / CRITIQUE / QUEUE / IDEAS / DEV_LOG).
6. **IDEAS.md** — add new speculation; remove ideas that were decided on (acted on or dropped).
7. **`../DEV_LOG.md`** — append a session entry covering what changed and why. Style: match existing session entries (Context / Conceptual development / Changes made / Version bump / Verification status).
8. **`../../know/VERSION`** — bump if meaningful changes landed (reference signatures, workflow, vocabulary, new framework references, new posture documents, project structure changes).
9. **Validator** — `python ../../do/projects/workbench/tools/validate.py`. Verify framework invariants hold.
10. **Git commit** — honest message; no marketing speak; Co-Authored-By footer if AI collaborated. Commit boundaries match logical work units; the final commit of the session captures this protocol's own output.

The discipline file in `../../know/disciplines/session_ending.md` is canonical; this checklist is the operational form.

---

## Lineage

The handoff system replaced a single freeform `HANDOFF.md` that conflated five jobs into one file. The conflation made it hard to keep current — every session was re-deciding what to preserve, what to update, what to discard. The split assigns each job its own surface.

The original `HANDOFF.md`, `STUDY_HANDOFF.md`, and `WORKBENCH_HANDOFF.md` were replaced by redirect stubs during the migration. Their content lives in the appropriate new locations:

- HANDOFF.md content → STATE.md (architectural state) + QUEUE.md (pending) + OPEN_QUESTIONS.md (Open Findings, also moved out of DEV_LOG)
- STUDY_HANDOFF.md content → `../../do/projects/study/`
- WORKBENCH_HANDOFF.md content → `../../do/projects/workbench/`

The "Operator profile" content in the original HANDOFF.md was AI-written and unreviewed; it was not migrated. Operator profiles will live in `../../know/operator_profiles/{operator}.md` when that system is built, written by the operator or with explicit confirmation.
