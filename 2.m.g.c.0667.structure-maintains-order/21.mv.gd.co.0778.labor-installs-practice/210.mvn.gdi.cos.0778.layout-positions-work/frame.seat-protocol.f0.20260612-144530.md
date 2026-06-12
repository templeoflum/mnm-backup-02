# frame — seat protocol — f0 — W7: close safe, hand off whole

address: 210 (layout·positions·work)
cut: 20260612, from the W7 discussion conducted live this session. DRAFT — UNSIGNED. Awaits the operator's sign; nothing builds. The kanban/Duckworth research report (operator's, inbound) reviews against this draft before the sign — guidance lands before the frame locks.

## mission

Make closing safe and make the gap carry freight. Opening is already free (seat launchers, W1). W7 is the rest of the switching cost: a session closeable at ANY moment without loss, and a hand-off that arrives whole. The season's spine made real: state lives in the system, not in the operator's head.

## settled in discussion (operator word, 20260612)

- **Close-out ritual = three checks**: floor clean (all changes committed, own paths) · trail current (log carries the last act; mid-flight state written where it stands) · baton cut. A seat passing all three is closeable. Small enough to hold — if the ritual grows past three checks it stops being done.
- **Baton ≠ wake — the cadence split**: baton = SESSION close, thin, every time. wake = SEASON close, thick, the compass kit's existing close-thread. Myth stays gated on wake thickness (already practiced).
- **Baton home: 222** (sign·hands·record) for warehouse seats; migrates into the W4 mailbox when U-7 builds it. W7 does not gate on W4.
- **Gait tags — the pace channel**, operator's design: body language for documents. The type says what a document IS; the gait says how fast to move with it now. Three tags, naming paces already practiced: **[hold]** context only, don't act · **[walk]** proceed, confirm each pull · **[work]** framed and clear, execute. Optional field on the baton; may ride any doc header. Float — a fourth pace earns its tag through use, never coined in advance.
- **Elder's gift — the wake's closing section**: "what survives the crossing" — distillation addressed to the next compass holder. THE GIFT IS THE RECORD, NOT THE RULE (operator's intent, carved). Round-trip: gift cut at season close; at the next op's charter time, the first act is reading the previous gift. The kit's f0 templates stay blank forever; the gift travels alongside.
- **Switch signals ×4, soft-flag**: gate-reached (a decision only the operator makes — say so plainly, stop) · pile-drained (season queue empty) · snag-stop (the chain halts, the walk happens before resume) · drift-smell (mode blur — switch, don't push through). Surfacing: named plainly in the reply + logged. No structural walls until W3's permission work. Lattice surfacing rides W4/U-7.
- **Operator close-out — he initiates, the seat scribes.** He says "closing" + whatever is in his head; the open seat asks the three questions future-him always asks (where was I · what's mid-flight · what was I about to do) and cuts his baton for him. Proof of need: this session opened with "where were we?" and the answer had to be rebuilt from the trail.

## the baton, specified

- **type**: `baton` — new document type, practice-level registration (keystone type list is [float]; the in-use registry gains one, drift already booked).
- **form**: one living relay document per seat — `baton.<seat>.fN.<stamp>` at 222 — **folding once per hand-off**. The fold trail IS the relay history. This is the baton's own per-type fold trigger, stated by design (narrows the fold-trigger watch-item by one more type): the session is the baton's integration unit. NOT the accumulator pattern (each fold replaces state; the schedule accumulates, the baton relays). At the 39 ceiling: cleanup per existing practice, the trail's tail rests in git.
- **fields, four + one, one screen maximum**:
  - **state** — where each live thread stands
  - **next pull** — what the next session pulls first
  - **snags** — anything stopped (andon-kin)
  - **wants-word** — decisions waiting on the operator
  - **gait** — optional pace tag for the hand-off
- **operator's baton**: `baton.operator.fN` at 222, scribed by whatever seat is open at his "closing."

## definition of done (through use, not declaration)

1. Close-out ritual inscribed in all three seat .md files and practiced at a real session close.
2. `template.baton.f0` exists at 100; first real baton cut at 222 by this seat at this session's own close — the frame proves itself the way frame.shared-floor did.
3. Wake-gift section specified; applied to the compass kit's wake template AT R7 disposition (W5) — practiced meanwhile on the next wake that closes, whichever comes first.
4. Switch signals in live use — at least one fired, surfaced plainly, and logged before W7 calls itself done.
5. Operator close-out exercised once for real.

## execution steps (small build — documents and practice, no code)

- 0.0 `template.baton.f0` cut at 100 (the form above).
- 0.1 close-out ritual section added to clerk.md / mind.md / ground.md (beside L1–L6; guideline language, no law).
- 0.2 `baton.clerk.f0` cut at 222 at THIS session's close — first live baton.
- 0.3 wake-gift amendment spec noted on the R7 line (W5) so the kit disposition carries it; no edit to the unsigned masters before R7.
- 0.4 records: log the build; schedule W7 row annotated; W7 closes only after DoD 4 and 5 happen in real use — duration decides, no premature DONE.

## out of scope (fenced)

Lattice/inbox surfacing of signals and batons (W4 + U-7) · hard permission walls (W3) · mail/memo system (W4) · compass kit master disposition (R7, W5) · any keystone edit (type list stays [float]; smallness line still in carriage).

## edges, named

- **Baton sprawl** — the one-screen rule is the guard; a baton past one screen gets trimmed at cut time, not after.
- **Ritual skipped under momentum** — the likeliest failure. The breach itself is the signal: log it when it happens, count the breaches, let duration tell us if the ritual is wrong or the discipline is.
- **Two-seats-open hand-off** — the baton assumes serial seats; concurrent seats passing work mid-session is W4's mail problem, not the baton's. Named, fenced.
- **Research report inbound** — kanban/Duckworth freight reviews against this draft BEFORE the sign; anything it changes folds in at f1 with the operator. If it arrives after the sign: f1 amendment, folds are cheap.

## the sign line

Operator signs here → fold to f1 SIGNED → execute 0.0–0.4.

UNSIGNED — awaiting the report look-over and the operator's word.
