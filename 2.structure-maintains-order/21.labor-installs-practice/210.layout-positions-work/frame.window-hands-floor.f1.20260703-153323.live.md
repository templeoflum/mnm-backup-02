# frame — window-hands-floor — f1 — window·hands·floor

NOW   V1 slice 1.3 — the focused approvals test rig (contract fix is in
      code, unproven; V0 the active dial DONE)
GATE  simultaneity: the harness is single-gate (verdict below) — window-first
      with CLI fallback is the ceiling; revisit only if the harness grows a
      decision channel
PINS  frame.dispatch.f2 (v1, wrapped — the shell this builds on) · COMMS
      SUITE frame (pinned separately: board to root, channels, chats per
      agent — V3's full form waits on it) · guide verdict 20260703 (sourced,
      §1) · LOTO · THE 27

## §1 — the agreement

Dispatch v2 (operator, 20260703): the window becomes the operator's whole
console. **Seat cards become control-HUDs** — what each seat is doing, its
gait settable right there, its pending approvals living IN the card (no
global strip stacking), quick settings as they earn themselves. **Top panes
become chat windows** — any agent or the group board; one compose box with a
permanent home, auto-sending to whichever pane is selected (the pop-up memos
overlay retires from this view). **Approvals answerable from the window or
the CLI.** The v1 bareness was right; now it gets deliberate design — decrowd,
elegance, quiet-dark still governing (color only where it means something).

**The harness verdict (claude-code-guide, 20260703, sourced to
code.claude.com/docs/hooks + /permissions):** true both-at-once approval is
NOT supported — the permission flow is single-gate sequential, and no API
answers a pending CLI prompt from outside. So the design ceiling is
**window-first, short CLI fallback** (the current stagger, tuned), plus two
real wins the consult surfaced: (1) the correct PermissionRequest output is
`decision: {behavior: allow|deny}` — v1 emitted the PreToolUse shape
(worked once empirically; emit both, trust the documented one); (2)
**`ruleToApply`** — a window approval can also persist a permission rule, so
"allow always" from the card means that command never prompts again. The
intermittency has a named cause: rule precedence — commands matching an
allow rule raise no prompt, so no hook, no row (the one observed CLI-box-
without-row case still gets a live debug in V1).

**Standing constraints carried from v1:** never automate the un-done · the
dashboard IS the lattice · what must stay slow stays slow · mechanical ≠
mindless · a covered control is an unreachable control.

## §2 — chunks × slices × rungs

### Chunk V0 — the active dial (pulled forward, operator word 20260703) — DONE

- active.py (on/off/clear per seat, GIT_AUTHOR_NAME-signed) + GET /active +
  the "ACTIVE frame" pane source (replaces the hardcoded frame prefix;
  stored panes migrate). Frames outrank other files on the dial; the bar
  names seat + path + how many more. **Wake and sleep carry it:** the wake
  flags a stale dial (or reminds to switch on what you pick up); the close
  order includes turning it off. Dial state is control state, gitignored —
  the trail of work stays git. Verified: dial on → /active → pane renders
  this very frame (probe + shot). rung: DONE

### Chunk V1 — approvals ironed

- slice 1.1 — contract fix: approve.py emits the documented
  `decision.behavior` shape (legacy fields ride beside it — DONE in code,
  20260703); wait tuned ~30s; UNTESTED LIVE — needs 1.3's focused rig.
  rung: DOING
- slice 1.2 — "allow always": second button on the approval row → decision
  carries `ruleToApply`, the rule persists, the same ask never prompts
  again. rung: TBD
- slice 1.3 — THE CO-RUN TEST RIG (operator correction 20260703: the seat
  is NOT the verifier here — "you will crown it verified when it's not").
  The rig = a standard repeatable test run TOGETHER: clerk scripts exact
  numbered steps with expected observations, the OPERATOR executes and
  reports what his screen actually did at each checkpoint; pass/fail comes
  from his observations, never from probes (probes can't see his screen —
  both live failures lived in that gap). Then his two failures reproduced
  and named through the same rig. rung: TBD — NEXT PULL, procedure drafted,
  runs on his word.

### Chunk V2 — seat cards become control-HUDs

- slice 2.1 — approvals move INTO the seat card (strip retires); pending ask
  renders amber inside the card, allow/deny/always there. rung: TBD
- slice 2.2 — HOLD on the card (operator re-cut 20260703): a hold/release
  button per seat card = the per-seat stop we already have (halt/<seat>),
  just given its button — hold effectively sets the working gait. The
  fuller idea (an ACTIVE gait distinct from the baton's recorded gait,
  settable from the card) needs more ironing — parked until it does.
  rung: BUILT (20260703, layout-shot clean; hold pulls halt/<seat>, release
  clears, both by the operator's hand + D rows). The working gate is HIS
  click on a live seat — co-run, like everything on this frame.
- slice 2.3 — quick settings on the card as they earn themselves (operator
  names them in use). rung: TBD

### Chunk V3 — panes become chats

- slice 3.1 — compose gets its permanent home in the view; auto-sends to the
  selected pane (group board first). rung: TBD
- slice 3.2 — per-agent chat panes — FULL FORM RIDES THE COMMS SUITE frame
  (channels, board at root); here only the pane plumbing that will receive
  it. rung: TBD

### Chunk V4 — the design pass

- slice 4.1 — decrowd + elegance: spacing, hierarchy, the HUD row, pane
  chrome; quiet-dark audit (every lit element earns it). Operator's eye is
  the gate, shot-by-shot. rung: TBD

## §3 — order, dependencies, lineage

**DAG:** V1 → V2 → V3 → V4 as a finishing pass; V3.2 gated on the comms
suite frame. S5.2 (the loop proper) still rides behind — its deadman
prerequisite is evidence-backed by the 5.1 pilot.

**Folds:** f0 = the frozen spec (operator's design word 20260703) · f0→f1 at
the first rung update, same date (V0 dial pulled forward and delivered; 1.1
contract fix in code). Fold note: the f0 seed was accidentally edited in
place, then mangled by a PowerShell restore — recovered byte-exact via git
restore from 4e24a7a; this f1 carries the edits. Two disciplines re-learned
in one move: fold before tracking, and the Edit tool owns document bytes.

**Lineage:** frame.dispatch.f2 at 210 (v1, wrapped — S1 stop spine · S2 bus ·
S3 window · S4 hands · 5.1 pilot all stand under this) · the pilot's board
thread 20260703 (the design conversation itself ran over the bus it
describes) · claude-code-guide consult 20260703 (the harness contract) ·
note.mail-conventions at 210 · corpus grounding as cited in v1 §1.
