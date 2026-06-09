# dream.warehouse — tasks

address: 122
source: dream.warehouse-settled.f3 at 112
scope: warehouse system — short running list, what's next
frame: frame.warehouse.f1 at 210

---

## server — DONE

- [x] `op_scan_files()` — enhanced scan returning file NAMES per cell. GET `/scan/files`. 15 addresses, 176 files.
- [x] `op_reconcile()` — compare filesystem against manifest.live.md entries. return `{clean, unregistered, missing}`. snapshot approach.
- [x] GET `/reconcile` route — expose reconciliation to the client.
- [x] ledger seeding — one-time bulk registration. POST `/seed`. 176 files baselined.

## client — DONE (browser verified: health bar, drop zone, file browser layout)

- [x] health indicator in View 2 — v2LoadHealth() + renderV2Health(). shows clean/drift at top of trail column. clickable to expand.
- [x] reconciliation refresh after mutations — renderV2() includes v2LoadHealth(). v2DoMove triggers full re-render.
- [x] drop zone in View 2 — moved to right column above manifest. drag/drop on v2-intake container. text files only. POSTs to /receive at 200.
- [x] persistent file selection — v0PickFile↔v2Selected sync. switchView(0) loads pending selection. View 1 passthrough.
- [x] V2 file browser matches V0 — same doc grouping, fold badges, expand/collapse. V2 color accents. intake moved to right column.

## practice

- [x] retire manifest.session — declared in session log f6. manifest.live.md and /scan are the living instruments.
- [ ] feature inventory → 212 — AI-written build log when features ship. xx2 pattern.
- [ ] status verbs — decide when they settle. not now.
- [ ] chunk inventory — move to schedule at 202 when schedule work begins.

## parked

- [ ] cardiogram instrument — needs historical reconciliation data first.
- [ ] simplified status verbs (unsigned/confirmed/archived) — needs usage of receiving flow first.
- [ ] targeted spot-checks after mutations — optimization, may not be needed at 27 cells.
- [ ] split view / compare in View 0 — side-by-side file comparison in the library.
- [ ] copy text button in View 0 — alongside fold and edit tools in the reader bar.
- [ ] pinboard fold history — pinned files don't show fold expand/collapse. need to surface fold navigation from tray items.
