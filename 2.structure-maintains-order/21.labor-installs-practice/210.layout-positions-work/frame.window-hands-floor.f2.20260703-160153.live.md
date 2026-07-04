# frame — window-hands-floor — f2 — window·hands·floor

NOW   V4: 4.2 W5 body-render deployed 20260704 (operator's eye is the gate);
      4.1 decrowd remains
GATE  V3.2 per-agent chats — waits on the COMMS SUITE frame · S5.2 the loop
      proper — waits on proven use + the deadman design
PINS  COMMS SUITE frame (pinned: board to root, channels, chats per agent) ·
      frame.dispatch.f2 (v1, wrapped) · LOTO · THE 27 · keeper dive (hold
      lightly, mid-cleanup) · SEAT AVATARS (operator 20260703, own think) ·
      WEBGPU LATTICE UPGRADE (operator 20260703: corpus reader struggling is
      the driver — own frame, bigger than a deploy) · FILING CABINET
      (operator 20260704-042508: paperwork will pile up — signed proposals
      want a lifecycle/archive; forms more embodied, UI season) ·
      MULTI-MESSAGE PROTOCOL (operator same memo: he fires ideas in
      succession, some related some not, some captured-not-acted; formalize
      how a seat sorts directives from captures within one turn)

## §1 — the agreement

Dispatch v2 (operator, 20260703): the window becomes the operator's whole
console. Seat cards are control-HUDs — what each seat is doing, its pending
approvals living IN the card, hold/release at hand, quick settings as they
earn themselves. Top panes are re-pointable surfaces (board default; the
ACTIVE dial keeps the current frame on screen) growing toward chat windows
with one permanently-homed compose. Approvals answer from the window or the
CLI — whichever hand is closer. The v1 bareness was right; the design pass
(V4) makes it deliberate — decrowd, elegance, quiet-dark governing.

**Verified ground (co-run rig, operator as verifier, 20260703):** requests
show on BOTH surfaces simultaneously in practice (better than the harness
docs' single-gate ceiling; the guide verdict lives in f0 §1). Allow runs it,
deny blocks it (`Permission denied by hook`), every decision is a D row by
the operator's hand at 222. The correct PermissionRequest reply is
`decision.behavior` (legacy fields ride beside). Intermittency's named
cause: rule precedence — an allow-rule match raises no prompt, so no row.
The rig itself is standing practice: for operator-facing flows, clerk
scripts numbered steps, the OPERATOR executes and reports, pass/fail from
HIS observations only.

**Standing constraints:** never automate the un-done · the dashboard IS the
lattice · what must stay slow stays slow · mechanical ≠ mindless · a covered
control is an unreachable control · quiet-dark (every lit element earns it).

## §2 — chunks × slices × rungs

### DELIVERED (this date; detail in f1, the trail)

- **V0 the active dial** — active.py per seat + /active + the ACTIVE pane
  source; wake flags stale dials, close order turns them off. rung: DONE
- **V1.1 the contract** — approve.py emits the documented shape; proven by
  the rig. rung: DONE
- **V1.3 the co-run rig** — passed: allow clean · deny clean · timeout CUT
  by the operator (both surfaces show; no timeout wanted). Earlier failures
  not recurred — watch, not chase. rung: DONE
- **V2.1 approvals in the card** — amber row inside the owning seat's card,
  allow/deny there; global strip retired. rung: DONE
- **V2.2 HOLD on the card** — the per-seat stop given its button
  (pull/release by the operator's hand, D rows); ACTIVE-gait idea parked
  for ironing. rung: DONE

### Chunk V1 — approvals (remainder)

- slice 1.2 — "allow always": blue button on the card row (Bash/PowerShell
  only, poka-yoke). FINDING: the harness ignores `ruleToApply` (co-run
  proved it — same command re-prompted after an always), so op_approve
  persists the EXACT rule itself into settings.local.json, refusing the
  decision if the write fails. Co-run verified: round-1 always → rule on
  disk → identical round-2 ran in silence, zero hook activity. Exact rules
  only — wildcards stay the operator's to write. NOTE: always-clicks grow
  the allowlist; the standing allowlist-prune (schedule S1) gets more owed
  with each. rung: DONE (operator verified)

### Chunk V2 — seat cards (remainder)

- slice 2.3 — quick settings, operator's first namings (20260703): LAUNCH
  moves into the card (HUD seat buttons + seats button retired — top
  decrowds); launch starts the console MINIMIZED (`start /min`) and the
  seat wakes INTO the board-watch loop (loop prompt in the seat .cmd:
  full wake first — sit, baton — then watch /board, act on @mentions,
  reply via board.py; individual channels STUBBED in the prompt until the
  comms suite). rung: BUILT (shot clean; his launch-click is the working
  gate)

### Chunk V3 — channels + chats (re-cut on the operator's word 20260703:
the working minimum pulled IN from the pinned comms frame — three seat
threads in one browser; governance/etiquette/lifecycle stay in that frame)

- slice 3.0 — comms/ at ROOT (house plumbing beside server.py, outside the
  addresses — git is its record): one file per channel, born on first post
  (board.md group · <seat>.md operator↔seat · <a>-<b>.md agent↔agent);
  op_post/op_channel/op_channels + routes; /board + /memo aliases of the
  group channel; the 222 board retired in place as the archive, its 30 rows
  seeding comms/board.md. rung: DONE
- slice 3.1 — the permanent compose bar at the bottom of the dispatch view:
  click a pane to select it (inset outline), type, Enter posts to that
  pane's channel as hedawn; doc panes grey the compose. rung: BUILT
- slice 3.2 — panes as chats: channel sources = the standing four unioned
  with whatever /channels lists (unborn channels stay selectable — eye
  caught them vanishing from the dropdown; new chats appear on their own);
  DEFAULT = the three seat channels (operator word). rung: BUILT
- slice 3.3 — seat-side wiring: loop prompts watch board + own channel and
  answer in the thread it came from; the wake surfaces board @mentions PLUS
  everything on the seat's own channel; board.py -c <channel>. rung: DONE
- the working gates: operator's live use — post in a seat pane, launch that
  seat, watch it answer in-thread. (clerk's channel born in verification;
  keeper + lantern born on their first posts.)

### Chunk V5 — paperwork proper (operator thread-word 20260703-171937,
"word" 172208): each seat's hands, leaning into its branch

The crack: the S4 flag grammar IS the paperwork engine, generalized. A seat
writes `proposal.<subject>.fN.<stamp>.md` on its own floor — FLAG lines for
every decision, SIGN at the bottom — and aims it by switching it ON the
active dial. Dispatch raises it as a POPUP: all the switches, one sign,
sent back on its own. Twenty y/n decisions = one popup, one minute.

- slice 5.1 — the proposal popup: dispatch watches /active for proposal.*
  entries; raises the card (dWidgetize body — switches + sign live);
  dismissable; on SIGN, auto-posts "signed: <file>" to the proposing seat's
  channel. rung: DONE — proven end-to-end on its own first paperwork: the
  operator configured and signed proposal.dream-commission through the
  popup (172634), the auto-post landed in clerk's thread, decisions read
  back, dial off. FLAG grammar fixed for multi-word values on the way
  (eye-caught).
- slice 5.2 — the convention to the seats: proposal docs + dial-on to aim,
  dial-off after reading the signed decisions back. rung: DONE — keeper
  memo'd with the grammar; his field-rename batch is the first live use.
- slice 5.3 — lantern's dream view: his dial points at the live dream doc,
  the pane renders it growing; sift-aid marks ride the same flag grammar.
  Mostly free — verify with lantern in use. rung: TBD
- slice 5.4 — the clerk desk/clipboard + the fuller office/body metaphors —
  COMMISSIONED TO LANTERN AS A DREAM (operator-signed paperwork 172634:
  at his next wake, THE 27 in scope; commission posted to his thread).
  rung: PARKED until the dream returns. Handoff is not a gate.

### Chunk V4 — the design pass

**Governing principle (HELD from lantern's sift, operator-signed 182226,
handed 182459 — raw at 102/dream.desks-and-bodies ~1): RENDER THE
VOCABULARY THE PAPER ALREADY SPEAKS.** The body words exist in the house's
own documents — **gait** (baton: hold sits, walk stands, work leans in),
**hands** (the dial: what's held), **breath** (loop cadence as a slow pulse
on dark glass), **the raised hand** (the amber row IS a body asking — draw
it as the hand it is), **the pulled flag** (a stopped seat is a seated body
with its flag out, not a greyed div). The window invented HUD-language
instead; the design pass is rendering, not invention. And it scales with
the chair: the same glyphs travel down to THE 27 unchanged — one
vocabulary, every floor; a deep house at rest is three breathing cards and
earned darkness behind them. (Kin W6 clipboard-stack was CUT at the sign —
it does not ride.)

- slice 4.1 — decrowd + elegance: spacing, hierarchy, the HUD row, pane
  chrome; known blemish: bold spans that wrap source lines show their
  asterisks (line-based renderer). Operator's eye is the gate, shot by
  shot. rung: TBD
- slice 4.2 — W5 body-render, RE-CUT by the operator (thread-word
  20260704-024046): gait stances SKIPPED ("harder to get right, hold is
  enough"); kept breath + the raised hand; ADDED a working indicator.
  Delivered then RE-CUT AGAIN: the working chip (typing dots on a status
  under 2m old) was a timer over a self-report — operator (031000):
  "not a valid way to track... just a hallucination"; PULLED on his word
  (041001), posture back to awake/asleep/flag. The miss (built on an
  un-agreed function) is incident.assumed-function.f0 at 212. Standing:
  BREATH — a 5s pulse in the awake card's dark glass (8% alpha) · THE
  RAISED HAND — the amber row opens with a slowly lifting ✋. Probes
  _w5_probe/_w5_clip at seats/. rung: breath+hand BUILT (his eye is the
  gate) · working WAITS on the agreed hook-driven turn-state design
  (proposal in clerk thread 031552: function, mechanism, limits, four-check
  co-run)

## §3 — order, dependencies, lineage

**DAG:** 1.2 → V4 as the near line; 2.3 fills by use; 3.1 anytime; 3.2
gated on the comms suite frame; S5.2 behind everything, deadman-informed.

**Folds:** f0 frozen spec (design word 20260703) · f0→f1 first rung update
(V0 pulled forward; seed restored byte-exact from 4e24a7a after an in-place
edit + PowerShell mangle — fold-before-tracking and Edit-owns-bytes both
re-learned) · f1→f2 same date, cleanup fold: the day's deliveries compressed
(V0, V1.1, V1.3, V2.1, V2.2), rig verdicts folded into §1 as ground.

**Lineage:** frame.dispatch.f2 at 210 (v1) · f0 (frozen spec + the guide
verdict in full) · f1 (build trail, this date) · the co-run rig log in f1 +
D rows at 222 · note.mail-conventions at 210 · corpus grounding as cited in
v1 §1.
