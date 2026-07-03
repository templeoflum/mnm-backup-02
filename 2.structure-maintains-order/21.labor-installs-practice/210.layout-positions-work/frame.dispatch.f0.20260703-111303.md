# frame — dispatch — f0 — dispatch·steers·flow [spec settled, operator word 20260703]

address: 210 (layout·positions·work) · seat: clerk
f0 = the settled spec, frozen. Build tracking folds to f1 at the first rung update.

## §1 — the agreement

One screen where the operator and the three seats work in unison: the
**dispatch window** — split in half horizontally, thirds vertically. Bottom
three panes: one chat window per seat. Top three panes: dynamic shared
paperwork. The memo board is the group chat. The operator signs and approves
paperwork, makes quick edits, turns dials — fast nonverbal steering — with a
small menu bar to bring session-relevant documents to context and shortcuts
for common forms (incident report kin). An **E-stop** halts all seats
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
safe before making flow fast [[object.theory-of-constraints]] frames the
whole: exploit the constraint, subordinate everything else.

**Standing constraints:** never automate the un-done (fable-2 ~22) · the
dashboard IS the lattice — features on the existing UI, no second surface
(fable-2 ~34) · what must stay slow stays slow: sift, operator's word, dream,
vet, settling (fable-2 ~27) · mechanical ≠ mindless — seats stay genuine
collaborators through the loops.

## §2 — chunks × slices × rungs

### Chunk S1 — the stop spine (first: stops before flow)

- slice 1.1 — the halt mechanism: one halt state (master + per-seat) every
  seat's hooks check structurally before acting; instant, attention-free.
  rung: TBD
- slice 1.2 — the operator's cord: pull/clear from the lattice UI + CLI; a
  stop and its clearing are ledger rows (a stop is a record, never a shame).
  rung: TBD
- slice 1.3 — self-stop wiring: the seat's own abnormality flags (snag-stop,
  drift-smell) route into the same halt state — jidoka, not just andon.
  rung: TBD
- slice 1.4 — the goodnight mirror: close-side injection kin of wake.py
  (deferred at frame.seat-protocol.f3; lands here). rung: TBD

### Chunk S2 — the bus (the board, polished)

- slice 2.1 — memo CLI helper: post/read without hand-rolled JSON. rung: TBD
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
  prerequisites: S1 whole, deadman behavior decided). rung: TBD
- **GATE: S5 opens only on the operator's word after S1–S4 are proven in
  use — never automate the un-done.**

## §3 — order, dependencies, lineage

**DAG:** S1 → S2 → S3 → S4 → S5, strict. The keeper dive (shift handover ·
5S · standardized work + kaizen · control-room/dispatch practice — memos
20260703, behind his re-mine line) lands asynchronously: it may re-inform S3/S4
(alarm management, HMI discipline) and the baton's internal shape. Handoff is
not a gate — S1 does not wait on it.

**Lineage:** dream.fable-2 ~32 (the switchboard seed) + ~34 (dashboard IS the
lattice) at 102 · dream.fable-2_sift.f0 at 112 (family C, held as
data-for-later — this frame is the later, operator word 20260703) ·
parked.engine.f0 at 212 (S5's motor) · frame.comms.f1 at 210 (the board is
live; its deferred e-stop/LOTO slot is taken up by S1) ·
note.design-for-the-agent.f0 at 122 · corpus records as cited in §1 ·
frame.seat-protocol.f3 at 210 (the close; slice 1.4's origin).
