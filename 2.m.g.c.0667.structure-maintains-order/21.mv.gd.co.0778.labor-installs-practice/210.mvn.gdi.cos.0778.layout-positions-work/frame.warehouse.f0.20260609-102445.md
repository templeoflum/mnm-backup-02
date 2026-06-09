# Frame — warehouse — f0 — 20260609-102445

The warehouse gets its health system. Server learns to check itself, client shows the result, manifest.session retires. Source: dream.warehouse-settled.f3 at 112, dream.warehouse-tasks.f0 at 122.

## What this build IS

Four server additions (scan_files, reconcile, route, ledger seeding), four client additions (health indicator, reconciliation refresh, drop zone, persistent file selection), one practice change (retire manifest.session). One frame because they form a single pipeline: server produces reconciliation data → client displays it → practice follows from having it.

## Source material

- `112/dream.warehouse-settled.f3` — all 23 settled claims
- `122/dream.warehouse-tasks.f0` — task list
- `211/server.py` — current server (582 lines, 13 endpoints)
- `211/lattice.html` — current instrument (View 0, 1, 2)
- `201/manifest.live.md` — current transaction log

## Settled decisions (from 112, relevant to this build)

1. snapshot approach — check current state vs manifest entries, not replay entire log
2. return shape: `{clean, unregistered, missing}`
3. one-time seeding to baseline pre-existing files
4. health indicator: "clean" or "N unregistered, M missing", clickable
5. reconciliation on View 2 activation + after mutations
6. drop zone: text/markdown only, drag-and-drop surface at 200
7. persistent selection: connect existing file lists, View 1 holds silently
8. manifest.session: stop updating, leave as history

## What to build

### 0 — `op_scan_files()` (server.py)

Enhanced scan returning file names, not just counts. The foundation everything else builds on.

- walk all 27 cells (same loop as `op_scan()`)
- return `{files: {addr: [filenames]}}` — only addresses with files
- expose as GET `/scan/files` (separate from existing `/scan` which stays as-is)

### 1 — ledger seeding (server.py + one-time operation)

Baseline manifest.live.md with everything that exists before reconciliation runs.

- `op_seed()` — calls `op_scan_files()`, for each file at each address, appends a manifest entry: `| {timestamp} | seed | {filename} | - | {addr} | initial inventory |`
- expose as POST `/seed` — one-time use, returns count of files seeded
- guard: if manifest.live.md already has seed entries, refuse to re-seed

### 2 — `op_reconcile()` + GET `/reconcile` (server.py)

The warehouse checks itself.

- calls `op_scan_files()` — what's on disk
- reads ALL manifest.live.md entries (remove the 50-entry limit for internal use)
- for each file on disk: scan manifest for any entry with `to == addr` and `file == filename`. if none → unregistered
- for each manifest entry where `op` is `create`, `move`, `receive`, or `seed`: check if file exists at the `to` address. if not, check if a later entry moved it elsewhere. if neither → missing
- return: `{clean: bool, unregistered: [{file, addr}], missing: [{file, addr, op, ts}], counts: {scanned: N, registered: N, unregistered: N, missing: N}}`
- expose as GET `/reconcile`

### 3 — health indicator (lattice.html, View 2)

View 2 shows reconciliation status.

- on View 2 activation: fetch `/reconcile`
- render status line: "clean" or "N unregistered · M missing"
- click to expand: list of discrepancies (file, address, issue type)
- placement: above the manifest trail in the right column, or as a status bar at the top of View 2

### 4 — reconciliation refresh (lattice.html, View 2)

After any mutation in View 2, refresh the health indicator.

- after successful `/move`, `/create`, `/fold`, `/delete` response: re-fetch `/reconcile`
- update the status line
- if the mutation resolved a discrepancy (e.g., moved an unregistered file), the indicator should reflect the change

### 5 — drop zone (lattice.html, View 2)

Drag-and-drop surface for unsigned intake at 200.

- HTML element: a drop target area, visually distinct, always visible in View 2
- `dragover`: highlight the surface, prevent default
- `drop`: read file(s) via FileReader as text, POST each to `/receive` with filename and content
- after drop: refresh the file list for 200, refresh health indicator
- text/markdown only — if a binary file is dropped, show a message that only text files are supported

### 6 — persistent file selection (lattice.html, shared state)

Connect the file lists that already exist across views.

- shared state: `{selectedAddr, selectedFile}` accessible by all views
- when View 0 selects a file: update shared state. switching to View 2 shows that file selected in its list, ready to send.
- when View 2 selects a file: update shared state. switching to View 0 opens that file for reading.
- View 1: does not display selection, but shared state persists through it. leaving View 1 returns to whatever was selected.

## Definition of done

- [ ] GET `/scan/files` returns file names per cell
- [ ] POST `/seed` baselines manifest.live.md (run once)
- [ ] GET `/reconcile` returns clean/unregistered/missing
- [ ] View 2 shows health indicator on activation
- [ ] health indicator refreshes after mutations
- [ ] files can be dragged onto View 2 drop zone and land at 200
- [ ] selecting a file in View 0 carries to View 2 and vice versa
- [ ] manifest.session.f1 is no longer updated (practice change, no code)

## Execution

### 0.0 — scan_files

Add `op_scan_files()` to server.py. Add GET `/scan/files` route. Test via curl.

### 0.1 — seed

Add `op_seed()` to server.py. Add POST `/seed` route. Run once. Verify manifest.live.md has entries for all pre-existing files.

### 0.2 — reconcile

Add `op_reconcile()` to server.py. Add GET `/reconcile` route. Test via curl — should return clean (all files now seeded).

### 0.3 — health indicator

Add status line to View 2. Fetch `/reconcile` on view activation. Render result.

### 0.4 — reconciliation refresh

Wire mutation callbacks to re-fetch `/reconcile` after each operation in View 2.

### 0.5 — drop zone

Add drag-and-drop surface to View 2. Wire to `/receive`. Refresh file list and health after drop.

### 0.6 — persistent selection

Lift file selection to shared state. Wire View 0 and View 2 to read/write from it. Verify View 1 passthrough.

### 0.7 — retire manifest.session

Declaration: manifest.session.f1 is historical. Stop updating. Note in session log.
