# dream.warehouse-settled — f2

address: 112
folded from: f0 + f1

f1 had 64 items. too many. this fold merges overlaps and strips what doesn't need a decision.

---

## settled — ground we build on

these don't need review. they're facts or principles already proven.

1. the ledger writes itself. `trace()` records every mutation to manifest.live.md and session log automatically. [settled]
2. `/scan` is filesystem truth. `/manifest` is transaction history. both work. [settled]
3. `/receive` handles unsigned intake at 200 with tracing. server side of the drop zone is done. [settled]
4. manifest.live.md is the transaction log. keep it as-is. [settled]
5. count format is proven — scoped, bounded, narrative. two clean examples exist. [settled]
6. inventory by address and intake/outflow ledger are already automated. stop hand-maintaining both. [settled]
7. the retirement is not a delete. manifest.session.f1 stays as history. [settled]
8. the human looks. the AI holds the clipboard. [settled]
9. address persists across views (already works). [settled]
10. View 1 doesn't participate in file selection — it sees structure, not files. [settled]
11. B (health indicator) depends on A (reconcile endpoint). C (drop zone) and D (persistent selection) are independent of everything and of each other. [settled]
12. unregistered file detection comes free with reconciliation. not a separate build. [settled]

---

## float — decisions for review

### the model

13. the warehouse is five instruments: transaction log, reconciliation, count, audit, View 2. [float]

14. manifest.session.f1 should be retired — stop updating, distribute its jobs. [float]

15. "manifest · confirms · count" — the manifest's role is reconciliation (confirming the count matches reality), not recording (the transaction log does that). [float]

### where the orphaned jobs go

16. feature inventory → 211 build log. status verbs → keystone or 200 when they settle. settled/floating snapshot → nowhere (state is distributed, stop centralizing). chunk inventory → schedule at 202. [float]

### reconciliation design

17. `/reconcile` is a GET endpoint. compares files on disk against manifest entries. returns `{clean, unregistered, missing}`. snapshot approach (check current state), not replay approach (replay entire log). [float]

18. first run needs seeding — all pre-existing files will flag as unregistered. one-time bulk registration to baseline the ledger. [float]

### persistent file selection

19. file selection persists across View 0 and View 2. select in one, it's there in the other. persists silently through View 1 — invisible but not lost. [float]

### drop zone

20. View 2 gets a drag-and-drop surface for unsigned intake at 200. text/markdown only initially. [float]

### health indicator

21. View 2 shows reconciliation status on activation — "clean" or "N unregistered, M missing". clickable to expand discrepancies. reconciliation also refreshes after mutations. [float]

### View 0 file list

22. does View 0 get an IDE-style file list (same list as View 2, follows address), or does it stay reader-only? [float]

### what waits

23. cardiogram instrument, simplified status verbs, targeted spot-checks — all need usage data before design. parked. [float]
