# survey — eyes rig — f1 — THE WHOLE PLAYWRIGHT SYSTEM, surveyed

address: 111 (view·connects·continuity)
fold: f0→f1, 20260612 — scope broadened by operator word ("I meant the whole playwright stuff in general, not just eyes"). f0 stands (the eyes deep-dive); this fold maps the entire system around it. Integration earns the fold.

## the system, whole — five parts

### 1. the engine (tree root)
- **package.json** — one dependency: `playwright ^1.60.0`. Nothing else. package-lock.json (1.7 KB) pins it.
- **node_modules/** — 3 packages, **16.6 MB**. Untracked by git AND excluded from the books (EXCLUDE_DIRS) — both deliberate: it's regenerable machinery (`npm install` rebuilds it from the lock), not floor freight.
- Born 06-07 (the keyboard dream, allowlist trail shows `npm init` / `npm install` / `npx playwright install chromium`).

### 2. the browsers (OUTSIDE the tree entirely)
`%LOCALAPPDATA%\ms-playwright\`: chromium-1223 (412 MB) + chromium_headless_shell-1223 (267 MB) + ffmpeg (3 MB) ≈ **682 MB on the machine, zero floor weight**. Pinned to the playwright build; a playwright version bump re-downloads.

### 3. the rigs — exactly three playwright consumers, nothing else uses it
| rig | where | status |
|-----|-------|--------|
| eyes.js (+2 test companions) | root | **DEAD** — full autopsy in f0; disposition open (re-aim / retire / rest), clerk's lean re-aim |
| bench.js | 221 | **ALIVE** — toy one-shot; 153 shots at 110 |
| play.js | 221 | **ALIVE** — toy sessions via step scripts; ~100 shots; last used 06-11 (tsr play) |

bench and play require the engine by **absolute path** (`C:/Users/User/Documents/0000000/mind not map/node_modules/playwright`) — load-bearing coupling, and brittle: the tree can't move or rename without breaking both rigs.

### 4. the step scripts — 15 play-*.json at 221
Inputs to play.js AND records: each one is a replayable recipe of a real play session (play-01-levels … play-15-dream-core-walk). Correctly co-located with their rig. The "play" type is unregistered in any type list — W8 fodder, already booked.

### 5. NOT playwright — the kernel-harness family (also at 221, often confused with the rigs)
runtest.js, runtest2.js, test_kernel.js, test_lensblock.js, test_spliced.js, validate.js (pure node — fs/vm only) + verify_toyA2.py, verify_toys.py (python). These are the **TS handoff verification harnesses** — no browser, no playwright. They rest with the TS pause (test_kernel's require split 211↔221 is a known open edge). Any playwright disposition leaves them untouched.

## health verdict

**The system is healthy and cheap.** One pinned dependency, regenerable engine, browsers off-floor, two live rigs earning their keep (~250 evidentiary shots), recipes co-located. The only dead weight is the eyes trio (~8 KB); the only structural debts are: (a) absolute paths in bench/play, (b) engine-at-root while rigs live at 221 — both are W8 colocation/move questions, fenced there; (c) the eyes disposition itself.

## dispositions (unchanged from f0, now system-aware)

- **A — RE-AIM eyes (lean):** repair into the lattice rig (~15 lines); the family becomes complete and deliberate: bench = toy one-shot · play = toy session · eyes = the lattice. Runs the W5 play batch. Companions retire.
- **B — RETIRE eyes:** trim the trio (preserve-then-delete); engine and live rigs untouched; play batch by hand.
- **C — REST:** as-is, honestly booked.

Whatever the call: **the engine stays** (live rigs depend on it), the browsers stay (off-floor), the kernel harnesses are a different family and rest with TS.
