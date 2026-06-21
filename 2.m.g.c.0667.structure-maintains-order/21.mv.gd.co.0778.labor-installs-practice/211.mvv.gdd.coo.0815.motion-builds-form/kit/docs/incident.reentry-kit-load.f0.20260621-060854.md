# incident — clerk re-entry + kit folder load — f0

stamp: 20260621-060854 UTC · status: **OPEN** — findings only, no fix applied · shares a root with [[incident.lattice-blank-load.f0]] (the lattice-side report at 221)

Two threads, one underlying cause. Filed together because the single-threaded server links them.

## thread A — the clerk button did not relaunch the seat

### what happened

At session start the operator went to relaunch the clerk seat. The **clerk button on the lattice did nothing**. Recovery was by finding the disk launcher (`seat-clerk.cmd` / `lattice.bat`) in Windows Explorer and entering through it. Near-miss: had the disk launcher not been found, there was no other way back in.

### mechanism

The button is wired correctly: `launchSeat('clerk')` → POST `/launch` → `op_launch('clerk')` opens `seat-clerk.cmd` (`server.py:456`). All files present and valid (`seat-{clerk,keeper,lantern}.cmd`, `lattice.bat`); no corruption in `lattice.f2`. **The button is not broken — its dependency was unavailable.** The POST reached no server, so it died on a stale tab (the net-banner / last-known-state path) with at most a hud pulse.

The server was unreachable because it was either down after the prior closeout, or up but hung as a single-threaded `HTTPServer` (the "unreachable-while-running" bug). f17 fixed this (`ThreadingHTTPServer`, commit `85dcc9a`) but the baton noted the running instance still needed a restart — so the broken instance was live.

### the structural point

The clerk button is a **server-dependent convenience, not a guaranteed re-entry path.** The only guaranteed path is the disk launcher. That was never written down as the re-entry instruction, so the button reads as the front door when it is not. (Remedy deferred — separate conversation.)

## thread B — the kit folder is slow to load, misleadingly so

### what happened

Opening the kit unit in the lattice takes long enough to read as empty / broken before it fills in — disorienting. Reported as part of the same session's trouble.

### mechanism

kit is a project **unit** — `is_unit(f)` skips it in the full-floor scan, "booked once" (`server.py:558`). So kit is not recursively walked by `/scan/files`. But when you browse *into* it, the lattice lists the open subfolder directly: `syncBrowse` → `/list/{addr}/{sub}` plus `refreshFiles` → `op_list` on the kit subfolder, repeated by the 2.5s browse poll (`lattice.f2:3443`, `:3458`).

After the reorg (`frame.reorg.f0`) the kit unit holds many more files — `src/` (22 modules) + `dev/` + `docs/`. On the single-threaded server, that listing queued behind the every-2.5s full-floor recursive sweep (thread C in [[incident.lattice-blank-load.f0]]). Result: kit contents appear only after the listing wins a thread slot → long, misleading load.

### real defect, or "just needs time"? — both

- **The acute part was a real regression:** single-threaded contention. The operator's `lattice.bat` restart put the threaded server live, which should largely mitigate it. Confirm by feel.
- **The slow-burn part is real and threading does not fix it:** the lattice runs a full recursive `rglob` of the whole corpus every 2.5s with no caching/debounce; it gets heavier as the corpus grows. The kit listing competes with that. This is a scaling matter to look at deliberately — not a transient, and not urgent.

## shared root

Both threads trace to the **single-threaded server being the live instance** when the f17 threading fix was committed-but-not-restarted. Thread A: the launch POST had no thread to answer it. Thread B: the kit listing starved behind the recursive sweep. The lattice-blank report ([[incident.lattice-blank-load.f0]]) is the third face of the same cause.

## landing

The button signs the floor but the door was never verified; the kit slowness is a real contention regression layered over a real scaling smell. Threaded server now live — re-verify both by use. No fixes applied.
