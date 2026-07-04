# frame — comms-suite — f1 — door·river·paper

NOW   C1 landed (convention cut + plumbing 1465bda); C2 waits on ONE input —
      the operator's river-play word (variants on his desk since 20260703)
GATE  C2.0 fork settles by HIS PLAY (river vs lanes, pinned vs flowing) ·
      C3 (memos-tab retirement) is SUBTRACTIVE — operator's eye + explicit
      bless on a view that exercises what it replaces, never before
PINS  votes/plural-signatures · silence-as-needs-value · composing signal
      (= working-signal turn-state, built) · DISPATCH VOICE reads the same
      river later — separate frame

## §1 — the agreement

The operator interacts with the town mostly through the board and wants one
input, one readable surface, zero triage overhead (092633: "one text input
window... all I care about is triaging that properly"; 093823: ground it,
shape it, build it).

**The shape (lantern):** ONE DOOR IN — the single compose line, aimed by the
chord (1 lantern · 2 clerk · 1+2 keeper · 0 board), never a tab choice. ONE
RIVER OUT — every channel renders into one stream of telegram lines
(who · what · needs), letters collapsed beneath, expand on inspection; the
memos tab dies into it. PAPER FLOATS ABOVE — proposals keep raising as
popups over the stream; signatures stay on their own rail.

**The ground (keeper, from code not memory):** single append-only store,
comms/<name>.md rows `| ts | from | memo |`, one lock, three doors; aim
exists only as parsed @mentions; **needs** does not exist (net-new); paper
was never in the memo store. DELTA = one new field + one promotion + one
convention. No new store; the interface renders over it, never replaces it.

**Standing context:** register rule (vet to ground, flat, no rated openers) ·
translation posture · the paper habit (decisions arrive as sheets, the board
carries telegrams).

## §2 — chunks × slices × rungs

### Chunk C1 — the envelope (paper teaches the glass)

- slice 1.1 — the telegram convention: every memo MAY lead with a telegram
  line `@aim · one-breath signal · needs: nothing|read|word|signature|play`;
  documented beside note.paperwork-grammar; absent = plain memo (backward
  compatible forever — the store's old rows stay valid).
  rung: CUT — note.telegram-envelope.f0 at 210, STAGE: PROPOSED under the
  five gates (proposed→tested→discussed→refined→voted); riding live memos.
- slice 1.2 — plumbing: op_post accepts optional `needs` + structured aim;
  written into the row tail, parsed back out by op_channel; board.py flags.
  rung: LANDED 1465bda — needs validated (nothing|read|word|signature|play),
  aim prepends missing @mentions, op_channel returns needs+aim per row (old
  rows read back needs=None aim=[], untouched), /post door passes both,
  board.py --needs/--aim compose client-side (work through either door
  today); probed on synthetic old+new rows. HTTP-door structured params take
  effect at the next server restart; the composed-text path is live now.

### Chunk C2 — the river (glass)

- slice 2.0 — the design decides by PLAY, not by flags (operator 103818 +
  104100): the replay pilot — variant pages fed by real traffic (demo.river
  f0 at 211, lantern's mock-river at 122/toys are the first two) — settles
  the open forks (river vs lanes, pinned vs flowing needs, aim grammar,
  scrollback, row shapes) by his hands before 2.1 builds on the live
  client. QoL relief may land early from what the play proves (the
  aim-glance candidate). NOTE 20260704-115345/115417 (operator + lantern,
  post-sign): dispatch-becomes-commons + seat-per-view + one input riding
  every view like an address bar — settles fork one (river vs lanes: both,
  by location) pending his play-word on the variants.
  rung: variants on his desk — BLOCKED-ON-OPERATOR, the frame's only wait.
- slice 2.1 — the stream pane: one view rendering the union of channels as
  telegram lines (who · what · needs · age), letter collapsed under each,
  click to expand; channel chips filter; newest at the hand — built to the
  shape the pilot settles. rung: TBD (opens on the 2.0 word)
- slice 2.2 — the door: the existing compose IS the door (chord aims incl.
  0 = board, caret-to-end, one draft) — verify it reaches everywhere from
  the river view; no second input ever. rung: TBD
- slice 2.3 — needs-driven glance: rows whose `needs` names the operator
  (word/signature/play — play caught by lantern pre-sign, the asks that end
  in his hands) carry the amber weight; `read` rows a soft mark; nothing
  rows stay dark. Quiet-dark: every lit element earns it. rung: TBD (the
  parse side exists as of 1.2; the glance is glass, waits on 2.1)

### Chunk C3 — the retirement (SUBTRACTIVE, gated)

- slice 3.1 — memos tab dies into the river: proposed ONLY after C2 is in
  his hands and blessed on real use; the loss named plainly at the gate.
  rung: GATED

### Chunk C4 — riders (small, after C2)

- read-holding nod = a one-tap `needs: read` acknowledgment on a row ·
  retract renders struck-through in the river (queue #3 pairs here).

## §3 — order, dependencies, lineage

**DAG:** C1 → C2 (the convention is the schema the glass parses) · C2 → C3
(nothing retires until its replacement is blessed) · C4 rides after C2.

**Verification per the ladder:** C1 plumbing = probe (run, green) · C2
surface = the operator's eye, shot by shot · C3 = his explicit bless on
exercised use.

**Folds:** f0 = the spec, frozen on the sign (hedawn 20260704-111030) ·
f1.live = this tracker, cut at the first build update (C1.2 landing).

**Lineage:** operator words 092633 · 093823 · 084419 (three-layer message) ·
084521 (the standard pull) · lantern shape 093853 + envelope 084542 ·
keeper ground 094209 · less-direction f0 (signed: R-rules, queue, ladder,
paper habit) · the comms-suite pin lineage on frame.window-hands-floor.f2 ·
build order 210029 (operator) · town-open-close f0 signed 120629 (the close
build queues behind this frame's C1, carries the close-verify render).
