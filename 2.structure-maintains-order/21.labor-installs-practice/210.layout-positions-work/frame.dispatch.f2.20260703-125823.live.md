# frame — dispatch — f2 — dispatch·steers·flow

NOW   S2 the bus — next rung 2.1, memo CLI helper
GATE  S5 the loop — holds for the operator's word after S1–S4 prove in use
PINS  schedule.lattice.f13 (season) · frame.seat-protocol.f3 (the close) ·
      keeper dive (memos 20260703, async) · LOTO (noted, beside S5)

## §1 — the agreement

One screen where the operator and the three seats work in unison: the
**dispatch window** — split in half horizontally, thirds vertically. Bottom
three panes: one chat window per seat. Top three panes: dynamic shared
paperwork. The memo board is the group chat. The operator signs and approves
paperwork, makes quick edits, turns dials — fast nonverbal steering — with a
small menu bar to bring session-relevant documents to context and shortcuts
for common forms (incident report kin). An **E-stop** halts every seat
instantly. Work is saved dynamically as it is written.

The point (operator, 20260703): remove friction so development is faster and
the operator stops bouncing back and forth — his attention is the system's
constraint, and the whole build organizes around it: every decision that is
his reachable in one glance; the seats prepare work to the point where only
his word is missing.

**Grounding (corpus, read 20260703):** the E-stop is andon — the cord is
trivial, the culture is everything; stops must be cheap, obligatory,
blame-free, answered with help (a near-silent cord is fear, not quality)
[[object.andon]] [[object.psychological-safety]]. Each seat also stops
ITSELF on abnormality — continuing-while-broken is the failure
[[object.jidoka]]. The interface carries safety in its geometry — wrong
actions impossible or self-evident, not policed [[object.poka-yoke]]
(convergent with note.design-for-the-agent's walls-not-virtues, 122). The
paperwork is the coordination medium — record and cue at once, state in the
medium not in heads [[object.stigmergy-as-external-memory]]; work is PULLED
with a WIP cap (the ≤3-thread band is the card limit) [[object.kanban]].
The staging order is Toyota's own: jidoka before just-in-time — make stops
safe before making flow fast. [[object.theory-of-constraints]] frames the
whole: exploit the constraint, subordinate everything else.

**Standing constraints:** never automate the un-done (fable-2 ~22) · the
dashboard IS the lattice — features on the existing UI, no second surface
(fable-2 ~34) · what must stay slow stays slow: sift, operator's word, dream,
vet, settling (fable-2 ~27) · mechanical ≠ mindless — seats stay genuine
collaborators through the loops.

## §2 — chunks × slices × rungs

### Chunk S1 — the stop spine — DONE (20260703, built and verified in one day)

Rung detail in f1 (trail); commits b77cfc3 · 04f3aa0 · 510fb46 · 91130c9 ·
a57969f · 5b5c489. **What stands:**

- **the wall** — `halt.py`, PreToolUse on every tool in every seat body;
  flags at `.claude/halt/all` | `/<seat>`; reaches LIVE sessions (hooks read
  fresh — proven on this seat mid-verification, twice: once by accident, once
  by the operator's own mid-tool-call button test); fail-open by design;
  adversarially proven (PowerShell, Bash, subagent — a seat cannot reset it).
- **the cord** — one op, three doors: e-stop button on the HUD (STOP FIRST,
  paperwork after; always stacks on top — a covered stop is an unreachable
  stop) · `cord.py` CLI (direct import, works server-down) · GET/POST
  `/halt`. Every stop and clear is a D row at 222.
- **the self-stop** — snag-stop's stopping act is the seat pulling its OWN
  flag, signed by its own hand; pulls are one-way (op_halt refuses
  seat-signed clears); full-floor stop stays the operator's word. Standing
  order in all three seat files.
- **the goodnight mirror** — UserPromptSubmit injects the close order
  (baton → sit → entry → dark) on the operator's goodnight word; points only
  at what exists per seat. Closes frame.seat-protocol.f3's tooling deferral.

Standing notes: the running server's HTTP door carries the clear-guard after
its next restart (CLI door guards now) · the operator's live pull is the
standing final gate — exercised 20260703, mid-tool-call, worked.

### Chunk S2 — the bus (the board, polished) — NOW

- slice 2.1 — memo CLI helper: post/read without hand-rolled JSON.
  rung: TBD — NEXT PULL.
- slice 2.2 — pointer-mail conventions: name what one floor already does
  (words + pointers on the board, freight by commit) — absorbs frame.comms
  chunk-3 stub by reference, not wholesale. rung: TBD
- slice 2.3 — board hygiene: fold rule when long; per-seat unseen marks.
  rung: TBD

### Chunk S3 — the window, read-only (go-see before touch)

- slice 3.1 — the shell: 2×3 pane layout in the lattice (exact layout
  disclosed by the build, not pinned here). rung: TBD
- slice 3.2 — top panes: live paperwork views + the menu bar for
  session-relevant documents. rung: TBD
  - PINNED (operator, 20260703): collapsible/expandable sections in the md
    view — hide/expand by heading. Rides the paperwork panes (and serves
    View 0's reader for free).
- slice 3.3 — bottom panes: per-seat presence, read-only (gait, last commit,
  live thread, board mentions). rung: TBD

### Chunk S4 — the hands (interaction)

- slice 4.1 — sign/approve: gate-keys surfaced as controls that exist only
  when their keys are present (poka-yoke geometry). rung: TBD
- slice 4.2 — quick edits + dials, dynamically saved as written. rung: TBD
- slice 4.3 — shortcut forms (incident report first; others on use). rung: TBD

### Chunk S5 — the loop (last, gated)

- slice 5.1 — the cadence run BY HAND through the window across real seasons —
  the proving ground. rung: TBD
- slice 5.2 — seats on loops, waking on signal (parked.engine.f0 energizes;
  prerequisites: S1 whole ✓, deadman behavior decided). rung: TBD
- **GATE: S5 opens only on the operator's word after S1–S4 are proven in
  use — never automate the un-done.**

### Noted, not scheduled (operator word 20260703)

- **LOTO** — per-seat symbolic lock + key on shared or sensitive work: any
  seat working the piece hangs its lock; work resumes when EVERY lock is
  off — seats clear their OWN locks, no operator intervention. The E-stop
  stays the catastrophic word (operator-cleared); LOTO is coordination
  equipment between seats. Corpus kin: [[object.two-person-rule]]; the
  lockout-tagout literature rides the queued control-room dive when it
  lands. Builds at earliest beside S5 (it matters most when seats run
  concurrently).

## §3 — order, dependencies, lineage

**DAG:** S1 ✓ → S2 → S3 → S4 → S5, strict. The keeper dive (shift handover ·
5S · standardized work + kaizen · control-room/dispatch practice — memos
20260703, behind his re-mine line) lands asynchronously: it may re-inform
S3/S4 (alarm management, HMI discipline), the baton's internal shape, and
LOTO. Handoff is not a gate.

**Folds:** f0 = frozen spec (20260703) · f0→f1 at the first rung update (S1
build trail) · f1→f2 on S1's completion, cleanup fold, operator word
20260703; same date, the front matter became the HUD (NOW/GATE/PINS —
catalog lines dropped: folder carries the address, filename the fold, git
author the seat).

**Lineage:** frame.dispatch.f0 (frozen spec) · f1 (S1 build trail, this
date) · dream.fable-2 ~32/~34 at 102 · dream.fable-2_sift.f0 at 112 ·
parked.engine.f0 at 212 (S5's motor) · frame.comms.f1 at 210 (the board;
its e-stop/LOTO slot: e-stop landed as S1, LOTO noted above) ·
note.design-for-the-agent.f0 at 122 · corpus records as cited in §1 ·
frame.seat-protocol.f3 at 210 (the close; 1.4 closed its deferral) ·
schedule.lattice.f13 at 202 (the season cut).
