# audit — launch / re-entry incident — f0 — trace·audits·path

stamp: 20260621-055410 UTC · scope: the clerk-button re-entry failure at session start · gait: [hold] — no fixes until operator word

## incident

The operator went to relaunch the clerk seat. The **clerk button on the lattice did not work**. He recovered by finding the disk launcher in Windows Explorer (`seat-clerk.cmd` / `lattice.bat`) and entering through it.

Near-miss, not a loss: had the disk launcher not been found, there was no other way back in — locked out of the warehouse. Severity = high (re-entry is the path that gates all other work).

## census — re-entry paths and their state

| path | kind | state at incident | verified |
|------|------|-------------------|----------|
| `seat-clerk.cmd` (root) | disk | **WORKED** — current seat entered through it | yes — this session exists |
| `lattice.bat` (root) | disk → starts server + opens tab | **WORKED** — server now LISTENING on :8000 | yes — netstat |
| clerk button → POST `/launch` → `op_launch` | server-dependent | **FAILED** — server unreachable | yes — operator report |
| `seat-keeper.cmd`, `seat-lantern.cmd` (root) | disk | present, valid, untested at incident | files exist |

Files all present and valid (`seat-{clerk,keeper,lantern}.cmd`, `lattice.bat`, `server.py`). The button wiring is correct — `launchSeat('clerk')` → `apiPost('/launch',{seat})` → `op_launch` opens `seat-clerk.cmd`. No corruption, no syntax error in `lattice.f2`. The button is NOT broken; its dependency was unavailable.

The `/launch` endpoint was NOT tested live — doing so would spawn a duplicate clerk console. Mechanism confirmed by code-read only.

## root cause

**Proximate** — the lattice server was not reachable when the button was clicked. Two candidates, can't separate retroactively, same structural root:
1. prior session's server process had exited at closeout → stale tab, dead controls.
2. server was up but **hung** — the single-threaded "unreachable-while-running" bug. f17 fixed it (ThreadingHTTPServer, committed `85dcc9a` 00:15) but the running instance was still single-threaded — baton f17 noted **"NEEDS A SERVER RESTART to take effect."**

**Structural** — the clerk button is a server-dependent *convenience*, not a guaranteed re-entry path. The only guaranteed path is the disk launcher. This was never written down as a re-entry instruction, so the button reads as the front door when it is not.

**Process** — `frame.seat-protocol.f1` close-out has three checks (floor clean / trail current / baton cut). **None verifies the re-entry path works.** f17 was signed off with a known live degradation (server restart pending) sitting directly on the re-entry path, filed as a minor snag rather than a re-entry blocker.

## the save

The disk launcher held. `seat-clerk.cmd` and `lattice.bat` are the ground-truth entry; the button is a shortcut layered on top. Ground held, surface failed.

## proposed remedies (NOT yet done — for operator word)

1. **Re-entry check in close-out** — add a fourth close-out check or fold into "floor clean": confirm the seat can be re-launched from a cold server before signing off. The cheap version: the baton names the guaranteed disk path so it's never lost.
2. **Server restart on the f17 fix** — the running instance is now threaded (operator restarted via `lattice.bat`); confirm, then the "unreachable-while-running" candidate is closed.
3. **Button feedback** — when `/launch` fails because the server is down, the failure is silent-ish (a hud pulse on a stale tab). Consider nothing here until the structural fix is decided; the button can't fix its own dependency.

## landing

22 trace·audits·path → the re-entry trail had one guaranteed path (disk) and one fragile path (button-over-server) presented as equals; the fragile one failed and was nearly the only one reached for. Close-out signs the floor but not the door. No fixes applied — census done, awaiting operator word.
