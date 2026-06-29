# incident — lattice blank-then-populate — f0 — trace·audits·path

stamp: 20260621-060854 UTC · status: **RESOLVED (slow-burn root)** 20260621 — the standing scaling concern below is fixed by the `.shelf` marker (commit `e1790ea`): the sweep no longer deep-walks the 000 reference library (quarantine 362 / mythic library 150 = 512 files / ~637MB off every cycle; sweep 35ms offline). Needs a server restart to go live. Acute single-thread half mitigated earlier by the threaded server. · shares a root with [[incident.reentry-kit-load.f0]] (the kit-side report)

## what happened

At session start the lattice showed **no files at all** — blank for a long time — then populated all at once. The operator's read ("i think that's the same thing happening with the kit folder") is correct: same underlying cause, different surface.

## mechanism

Every open lattice tab runs several polls on timers (`lattice.f2`):
- `1500ms` — HEAD request on the page for hot-reload (`:3398`).
- `2500ms` — `/scan/files` full-floor sweep + `syncBrowse` (`:3458`).
- `2500ms` — open-reader content re-read (`:3520`).
- `3000ms` — board poll when memos open (`:1336`).

The expensive one is `/scan/files` → `op_scan_files()` (`server.py:580`). It walks **all 39 addresses**, and for every cell calls `_list_files(path, recursive=True)`, which does `f.rglob('*')` — a recursive walk of every subfolder (units and excluded dirs aside) — `server.py:560`. That is a full-tree filesystem walk roughly every 2.5s, indefinitely.

**Blank-then-populate:** until the operator's `lattice.bat` restart, the live server was still single-threaded (`HTTPServer`; the `ThreadingHTTPServer` fix `85dcc9a` was committed but not restarted-into). On one thread, the page's initial tree load had to queue behind the heavy recursive sweep, the 1.5s reload-check, and any folder browse. First paint starved until it won a slot — so the floor read empty for a long stretch, then filled at once when the load finally returned.

## real defect, or "just needs time"? — both

- **Acute = real regression.** Single-threaded contention. The restart put the threaded server live, which is almost certainly why "now the lattice just populated." Largely mitigated now; confirm by feel.
- **Slow-burn = real, threading does not fix it.** A full recursive `rglob` of the whole corpus every 2.5s, no caching, no debounce, no incremental diff. Cost grows with the corpus. Threading lets it run *concurrently* with the initial load, but the work itself only gets heavier over time. This is the part worth optimizing deliberately.

## shared root

The single-threaded server being the live instance at session start is the common cause across all three faces: the clerk launch POST had no thread to answer (thread A, kit report), the kit listing starved behind the sweep (thread B, kit report), and here the initial floor load starved behind the sweep. See [[incident.reentry-kit-load.f0]].

## landing

22 trace·audits·path → the floor looked empty when it was only starved; the surface lied about the state because the one thread was busy walking the whole tree. Threaded server now live — re-verify by use. The 2.5s full-tree recursive scan is the standing scaling concern. No fixes applied.
