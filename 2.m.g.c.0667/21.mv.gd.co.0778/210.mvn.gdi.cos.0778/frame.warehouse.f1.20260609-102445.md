# Frame — warehouse — f1 — 20260609-102445

folded from f0. execution status updated.

## Definition of done

- [x] GET `/scan/files` returns file names per cell — **done.** 15 addresses, 176 files.
- [x] POST `/seed` baselines manifest.live.md — **done.** 176 files registered across 15 addresses.
- [x] GET `/reconcile` returns clean/unregistered/missing — **done.** 0 unreg, 8 missing (legitimate: root install, deleted test files, ceiling test folds).
- [x] View 2 shows health indicator on activation — **code done.** v2LoadHealth() + renderV2Health(). needs browser verify.
- [x] health indicator refreshes after mutations — **code done.** renderV2() includes v2LoadHealth().
- [x] files can be dragged onto View 2 drop zone and land at 200 — **code done.** v2InitDropZone(). needs browser verify.
- [x] selecting a file in View 0 carries to View 2 and vice versa — **code done.** v0PickFile↔v2Selected sync. needs browser verify.
- [x] manifest.session.f1 is no longer updated — **declared.** logged as decision in session log f6.

## Execution status

| step | what | status |
|------|------|--------|
| 0.0 | scan_files | DONE — op_scan_files() + GET /scan/files |
| 0.1 | seed | DONE — op_seed() + POST /seed, 176 files registered |
| 0.2 | reconcile | DONE — op_reconcile() + _manifest_entries() + GET /reconcile |
| 0.3 | health indicator | CODE DONE — v2LoadHealth(), renderV2Health(), CSS. needs browser verify |
| 0.4 | reconciliation refresh | CODE DONE — renderV2() calls v2LoadHealth(), v2DoMove triggers re-render |
| 0.5 | drop zone | CODE DONE — v2InitDropZone(), dragover/drop listeners, text files only. needs browser verify |
| 0.6 | persistent selection | CODE DONE — v0PickFile↔v2Selected sync, switchView(0) loads pending selection. needs browser verify |
| 0.7 | retire manifest.session | DONE — declared in session log f6 |

## What was built (server.py)

- `_manifest_entries()` — reads ALL manifest.live.md entries, returns list of dicts
- `op_scan_files()` — walks 27 cells, returns `{files: {addr: [names]}}`
- `op_seed()` — one-time bulk registration, guarded against re-seeding
- `op_reconcile()` — compares filesystem vs manifest, returns `{clean, unregistered, missing, counts}`
- routes: GET `/scan/files`, GET `/reconcile`, POST `/seed`
- server.py now ~650 lines, 16 endpoints

## What was built (lattice.f2)

- CSS: .v2-health (clean/drift states), .v2-health-details, .v2-health-item, .v2-dropzone (with dragover state)
- state: v2Health, v2HealthOpen
- v2LoadHealth() — fetches /reconcile, triggers renderV2Health()
- renderV2Health() — inserts health element at top of trail column
- v2InitDropZone() — drag/drop listeners on v2-files container
- renderV2Files() — added drop zone HTML at top
- v2SelectFile() — now syncs to v0LoadedFile
- v0PickFile() — now syncs to v2Selected
- switchView() — loads pending V2 selection when arriving at V0

## Edges

1. root is not a cell address — /scan doesn't cover CLAUDE.md. reconcile shows install as "missing." not a real problem.
2. 8 "missing" files are all legitimate — deleted tests, superseded folds, ceiling test artifacts.
3. drop zone init timing — 100ms setTimeout after first render. listeners on container survive re-renders.
