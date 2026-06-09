# dream.warehouse-settled — f3

address: 112
folded from: f2 + review

all floats settled. corrections applied. this is the ground.

---

## settled

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
13. the warehouse is five instruments: transaction log, reconciliation, count, audit, View 2. [settled]
14. manifest.session.f1 should be retired — stop updating, distribute its jobs. [settled]
15. "manifest · confirms · count" — the manifest's role is reconciliation (confirming the count matches reality), not recording (the transaction log does that). [settled]
16. orphaned jobs: feature inventory → 212 (adapts, xx2 pattern for logs). status verbs → keystone or 200 when they settle. settled/floating snapshot → nowhere (state is distributed, stop centralizing). chunk inventory → schedule at 202. [settled]
17. `/reconcile` is a GET endpoint. compares files on disk against manifest entries. returns `{clean, unregistered, missing}`. snapshot approach (check current state), not replay approach (replay entire log). [settled]
18. first reconciliation needs seeding — one-time bulk registration to baseline the ledger. [settled]
19. file selection persists across View 0 and View 2. persists silently through View 1 — invisible but not lost. [settled]
20. View 2 gets a drag-and-drop surface for unsigned intake at 200. text/markdown only initially. [settled]
21. View 2 shows reconciliation status on activation — "clean" or "N unregistered, M missing". clickable to expand discrepancies. refreshes after mutations. [settled]
22. all three views already have file lists — they just aren't connected. persistent selection means connecting what exists, not building new UI. [settled]
23. cardiogram instrument, simplified status verbs, targeted spot-checks — parked. need usage data before design. [settled]
