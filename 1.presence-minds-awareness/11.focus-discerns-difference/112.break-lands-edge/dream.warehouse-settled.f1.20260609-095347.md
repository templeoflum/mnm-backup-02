# dream.warehouse-settled — f1

address: 112
folded from: dream.warehouse-settled.f0.20260609-094847.md

f0 was the sifted dream. f1 is the claims register. every claim, every decision, tagged for review.

---

## ground — facts about what exists now

these describe current reality. verifiable against server.py and the filesystem.

1. `trace()` auto-appends every mutation to manifest.live.md at 201 AND session log at 222. no manual step. the ledger writes itself. [settled]

2. `/scan` walks all 27 cells and returns file counts. this is filesystem truth — what's actually on disk. [settled]

3. `/manifest` reads manifest.live.md and returns the last 50 entries reversed. this is transaction history — what the server witnessed. [settled]

4. `/receive` places a file at 200 (default) with automatic tracing. unsigned intake already works. [settled]

5. all mutation endpoints (`/move`, `/fold`, `/create`, `/write`, `/delete`) trace automatically. no mutation goes unrecorded. [settled]

6. manifest.live.md only knows about operations since the server was built. pre-existing files have no manifest entries. the ledger is partial. [settled]

7. manifest.session.f1 is 444 lines doing six distinct jobs: inventory by address, feature inventory, status verb definitions, settled/floating/blocked snapshot, intake/outflow ledger, chunk inventory. [settled]

8. count.instrument-rebuild.f0 and count.research-sort.f0 are scoped, bounded, clean. 50 and 120 lines. each covers one operation's movements. [settled]

---

## roles — who does what

9. the human looks, plays, discusses, directs, makes surgical edits. the human's job is the moment of attention — looking at the thing and understanding what it is. [settled]

10. the AI writes counts, audits, reconciliation reports, inventory snapshots, movement narratives. the AI holds the clipboard. [settled]

11. the human reviews AI-written documents. corrections fold the document. the human never drafts the paperwork from scratch. [float]

---

## architecture — the five instruments

12. the warehouse system is five instruments: transaction log, reconciliation, count, audit, View 2. [float]

13. **transaction log** (manifest.live.md at 201) — machine-written flat record of every mutation. already exists. keep it as-is. [settled]

14. **reconciliation** — new instrument. the warehouse comparing its filesystem to its ledger. does not exist yet. [float]

15. **count** (at 201) — AI-written scoped movement narratives for specific operations. format proven by two existing documents. [settled]

16. **audit** (at 221) — AI-led conceptual verification, human-reviewed. walks the system, assesses whether files belong where they are. [float]

17. **View 2** — the health dashboard. shows dock, grid, transactions, and reconciliation status. [float]

---

## manifest.session retirement

18. manifest.session.f1 should be retired — stop updating it. [float]

19. the retirement is not a delete. the file stays as historical record. we stop maintaining it. [settled]

20. **inventory by address** → already automated by `/scan`. stop hand-maintaining. [settled]

21. **intake/outflow ledger** → already automated by manifest.live.md. stop hand-maintaining. [settled]

22. **feature inventory** (what View 0/1/2 can do) → moves to 211, written as a build log when features ship. [float]

23. **status verb definitions** (staged/claimed/signed/delivered/received/archived/retired) → moves to keystone or 200 when the verbs settle. not now. [float]

24. **settled/floating/blocked snapshot** → goes nowhere as a single document. state is distributed across documents. the keystone carries [settled]/[float]. dreams carry vision. frames carry build state. stop centralizing state. [float]

25. **chunk inventory** (A through K) → moves to schedule at 202 when schedule work begins. [float]

---

## the reconciliation design

26. `/reconcile` is a GET endpoint on the server. returns whether the system is clean or drifted. [float]

27. needs `op_scan_files()` — enhanced `/scan` that returns file NAMES per cell, not just counts. [float]

28. reconciliation compares: for each file on disk, is there a manifest entry that placed it there? files without entries → unregistered. entries without files → missing. [float]

29. return shape: `{ clean: true/false, unregistered: [{file, addr}], missing: [{file, expected_addr, last_op}] }` [float]

30. use the snapshot approach (check current state against manifest entries) not the replay approach (replay entire log sequentially). simpler, covers 95% of cases. add replay later if needed. [float]

31. first run will be noisy — all pre-existing files flag as unregistered. needs a seeding strategy. [settled]

32. seeding strategy: one-time bulk registration — add an "initial inventory" manifest entry for everything `/scan` finds before first real reconciliation. [float]

---

## persistent file selection

33. file selection persists across View 0 and View 2. select a file in one, switch to the other, it's still selected. [float]

34. the address also persists across views (already works this way). [settled]

35. View 1 (observatory) does not participate in file selection. it sees structure, not individual files. [settled]

36. file selection persists SILENTLY through View 1 — it's still there when you return to View 0 or 2, you just can't see it in View 1. [float]

37. selecting a file in View 0 primes it for sending in View 2. selecting a file in View 2 primes it for reading in View 0. [float]

---

## drop zone

38. View 2 gets a drop zone — a drag-and-drop surface where external files land as unsigned intake at 200. [float]

39. the drop zone is a SURFACE (visual area you throw things onto), not a list item or button. [float]

40. server side is already done — `/receive` handles the intake with tracing. drop zone is client-only. [settled]

41. drop zone is text/markdown only initially. binary files (PNG, PDF) deferred until needed. [float]

42. dropping a file → FileReader reads content → POST `/receive` → file appears at 200 → file list refreshes. [float]

---

## health indicator

43. View 2 shows a health indicator: "clean" or "N unregistered, M missing". [float]

44. reconciliation runs automatically on View 2 activation (page load or view switch). [float]

45. clicking the health indicator expands to show the discrepancy list. [float]

46. the health indicator sits in or near the right column (manifest trail area). [float]

47. after a mutation, reconciliation refreshes (either full re-run or targeted spot-check). [float]

---

## build sequence

48. four build items: A (reconcile endpoint), B (health indicator), C (drop zone), D (persistent file selection). [float]

49. A is the foundation — server-side only, no client changes, testable via curl. [float]

50. B depends on A. [settled]

51. C is independent of A/B — but more useful with B (drop a file, health indicator updates). [float]

52. D is independent of everything. [settled]

53. C and D can run in parallel. [settled]

---

## the key insight

54. "manifest · confirms · count" — the manifest's job is not recording (the transaction log does that). the manifest's job is CONFIRMING — reconciling the count against reality. [float]

---

## what waits — acknowledged but not designed

55. cardiogram instrument (file count / movement rate / discrepancy trend over time). needs historical data that doesn't exist yet. [float]

56. simplified status verbs (unsigned / confirmed / archived). protocol decision, not a build. waits for practice. [float]

57. unsigned indicators in file list — marking unregistered files visually. could be part of B or separate. [float]

58. targeted spot-checks after mutations instead of full reconciliation. optimization that may not be needed (27 cells is small). [float]

59. auto-detection of external file drops — comes free with reconciliation (unregistered files ARE external drops). [settled]

---

## edges — open questions

60. seeding the ledger: (a) accept noise, (b) one-time bulk registration, or (c) reconcile forward only. leaning toward (b). [float]

61. health indicator placement: in the right column header? above the manifest trail? its own row? needs to be visible at a glance without dominating. [float]

62. what triggers reconciliation refresh after a mutation: full re-run or targeted check of just the affected addresses? [float]

63. drop zone visual design: how large? always visible or collapsible? does it show file shapes/sizes like the dream imagined, or just a simple target? [float]

64. the "same room different weather" metaphor: does View 0 need a file list too (IDE-style), or does it stay as reader-only with the file list living in View 2? [float]
