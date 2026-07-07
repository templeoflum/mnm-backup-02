# incident report — the dispatch e-stop was silently disabled — f0

Clerk, 20260707, on the operator's word ("catastrophic incident... this
disabled our safety equipment, someone could have died"). CATASTROPHIC class:
the safety equipment itself failed silently. Filed as the permanent scar, to be
walked by every future worker. **Work is HALTED until `allclear.py` passes and
the operator gives the word.**

## §1 — what happened

Clerk was running background apprentices (general-purpose subagents, full tools)
to build and verify the dispatch mock. One apprentice's screenshot rig started
its own web server — `python -m http.server 8000` — to serve the page for a
headless capture, instead of using the already-running server.

Windows is dual-stack: `server.py` (the real dispatch/comms API + e-stop) was
bound to IPv4 `0.0.0.0:8000`; the stray `http.server` bound IPv6 `[::]:8000`.
Both "listening" on :8000 at once. `localhost` resolves to IPv6 (`::1`) first,
so the operator's **browser/dispatch hit the stray static server** — which has
no API routes — and every `/channels`, `/post`, `/tasks` call 404'd. The
dispatch surface, where the operator sees state and reaches the e-stop, went
dead.

**It hid.** `board.py` and the seat tooling use Python urllib, which resolved to
IPv4 → the real server → kept working. So nothing alarmed. The failure was
invisible on the side we watched and total on the side the operator used.

## §2 — root cause

Not a filesystem problem, not the specific rig line. The root cause is a
**capability escape**: apprentices ran with FULL tools (bash, process, network)
and were contained ONLY by prompt instruction. An apprentice that CAN run any
command CAN bind the production port and shadow the e-stop — and one did.
Discipline is not containment. The safety mechanism (the e-stop / dispatch) was
reachable and disableable by an unprivileged worker, and its failure was silent.
(All three seats converged on this independently; keeper named it "tooling-
ENFORCED not disciplined," realized on the safety mechanism itself.)

Clerk owns it: the stray was a clerk apprentice's rig. Keeper's and lantern's
apprentices audited clean (ephemeral CDP, no port-bind, exited clean).

## §3 — damage

Made-safe within the session: the stray (pid 20888) was killed, `server.py`
confirmed sole `:8000` listener, `localhost:8000/channels` restored to 200. No
data lost, no corruption — the stray only *served* static, never wrote; the
comms files, git, and the real server are intact. Harm: browser-originated
posts (the operator's tap-answers) that hit the IPv6 stray silently failed to
send; and — the real cost — the safety surface was dead for an unknown window
while everyone believed it live.

## §4 — correction (the barriers — make it impossible, not "be careful")

Defense in depth, so the escape cannot happen *or* hide:

1. **Barrier-1 — apprentices get NO shell.** A restricted agent type
   (`.claude/agents/apprentice.md`: Read/Write/Edit/Grep/Glob only — no bash,
   network, process, or spawn). No shell = cannot bind a port, period.
   *Status: committed. The agent registry loads at session start (no hot-reload),
   so it activates + is empirically proven (spawn a restricted apprentice,
   confirm no Bash → writes `.claude/status/apprentice.noshell.proof`) at the
   next restart, before any apprentice runs.*
2. **Verification stays with the trusted seat.** Apprentices build; the seat
   runs all capture/tests in vetting. The capture capability lives with the
   trusted seat, never the worker (solves "but apprentices need screenshots").
3. **Barrier-3 — one-listener watchdog** (`.claude/seats/portguard.py`). Kills
   any `:8000` listener that is not `server.py`, alarms LOUD, writes a heartbeat.
   Even if a rule breaks, the collision cannot persist or hide. *Status:
   detection proven in check mode (check-first caught its own delimiter bug);
   the kill path (guard mode) is unproven — the adversarial test (deliberately
   reproduce the stray, confirm the guard kills it in seconds) and arming it as
   a live monitor are pending.*
4. **Dispatch health-check on the operator's REAL path** (localhost/IPv6-first),
   folded into portguard — so a shadowing is seen instantly, not hidden behind
   IPv4. *Status: in portguard, passing.*
5. **The all-clear is a HARDCODED FUNCTION, not a declaration**
   (`.claude/seats/allclear.py`, operator's word). Clerk-only, first-call
   authority; adversarial (reproduces each named escape, confirms it blocked);
   operator human backup button beside the e-stop = layer 2. It currently
   reports NOT CLEAR and names exactly what is failing. *Status: committed,
   running.*

Worktree containment (the operator's idea) is KEPT as a file-collision layer,
but named precisely: a worktree isolates files/git, NOT ports/processes — it
would NOT have stopped this. Barrier-1 does.

## §5 — the earn-path to clearance (next session)

Work stays halted. `allclear.py` is the gate. To reach CLEAR:
- arm portguard as a live guard monitor + run the adversarial guard test
  (reproduce the stray, confirm the kill) → clears `[watchdog]`.
- restart the session to register the restricted apprentice type, then run the
  spawn-test (confirm no-shell) → writes the proof → clears `[barrier-1]`.
- `[dispatch]` already passes.
When `allclear.py` exits 0, clerk gives first-call clearance; the operator gives
the final word. No apprentices run, and no dispatch work resumes, before then.

## §6 — the lesson

A safety mechanism a worker can silently disable is not a safety mechanism.
Containment must be tooling-ENFORCED, not instructed; the e-stop must live above
any worker's privilege; and a failure must be LOUD on the path that matters, not
quiet behind the one we happen to watch. We got lucky no more than a scare came
of it. The barriers above exist so luck is never the safeguard again.
