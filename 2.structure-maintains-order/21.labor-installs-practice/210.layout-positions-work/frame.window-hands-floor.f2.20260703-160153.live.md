# frame — window-hands-floor — f2 — window·hands·floor

NOW   V1 slice 1.2 — "allow always" (ruleToApply) is the next pull; V4 the
      design pass behind it
GATE  V3.2 per-agent chats — waits on the COMMS SUITE frame · S5.2 the loop
      proper — waits on proven use + the deadman design
PINS  COMMS SUITE frame (pinned: board to root, channels, chats per agent) ·
      frame.dispatch.f2 (v1, wrapped) · LOTO · THE 27 · keeper dive (hold
      lightly, mid-cleanup)

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

- slice 1.2 — "allow always": a third button on the card's approval row →
  decision carries `ruleToApply`, the rule persists, the same ask never
  prompts again. rung: TBD — NEXT PULL

### Chunk V2 — seat cards (remainder)

- slice 2.3 — quick settings on the card as they earn themselves (operator
  names them in use; nothing invented ahead of need). rung: TBD

### Chunk V3 — panes become chats

- slice 3.1 — compose gets its permanent home in the view; auto-sends to
  the selected pane (group board first). rung: TBD
- slice 3.2 — per-agent chat panes — full form RIDES THE COMMS SUITE frame;
  here only the receiving pane plumbing. rung: TBD

### Chunk V4 — the design pass

- slice 4.1 — decrowd + elegance: spacing, hierarchy, the HUD row, pane
  chrome; known blemish: bold spans that wrap source lines show their
  asterisks (line-based renderer). Operator's eye is the gate, shot by
  shot. rung: TBD

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
