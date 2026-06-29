# Frame — hygiene — f1 — 20260610-044417

Fold from f0. Execution status after the whole-pass run (operator authorized the full pass; conservative rules applied: identical → trim, divergent → annotate, no renames of branch-1 working files).

## Definition of done — status

- [x] /reconcile: 0 unregistered, 175/175 registered. 2 missing remain, both explained on the books (CLAUDE.md at root, TS_measurement_handoff/ directory — scan blind spots, see edges)
- [x] no file at two addresses — all 12 pairs were byte-identical, non-canonical copies trimmed (count.duplicates.f0 at 201)
- [x] 100 and 121 strays ledger-noted as kept references — renames deferred to a joint session with branch 1 (their working files, their presence required)
- [x] manifest.session.f0 collision and audit.lattice.pN annotated — historical, kept as-is, no renames
- [x] note.scratch stub deleted with its row
- [x] every mutation has a row; no row without a mutation. 13 file deletes total (11 at 220, 1 at 110, 1 at 111), 0 moves, 0 renames

## Execution record

| slice | result |
|-------|--------|
| 0.0 — P1 | 6 retroactive registrations (two-flatlanders f0–f3, frame.warehouse.f1, schedule.lattice.f3 — created last session with log entries but no rows), 7 retroactive deletes (dream.test, extract.research.f2, old lattice.f2-0608, survey.ceilingtest ×4), 2 explanatory notes |
| 0.1 — P5 | stub read ("yooo"), deleted, row written |
| 0.2 — P2 | 12 pairs hashed, all identical. count.duplicates.f0 created at 201. 12 trims, each with delete row + canonical re-placement note |
| 0.3 — P3 | annotate-only: 7 note rows (5 at 100, 2 at 121). no renames — deferred |
| 0.4 — P4 | annotate-only: 6 note rows. no renames |

## Edges found during execution

1. **The ledger gap ran both directions** — the walk found deletes without rows; execution found creates without rows (everything from the 20260609 afternoon session post-seed). The log↔manifest cross-check is the audit the walk didn't do.
2. **Scan blind spots**: /scan walks 3-digit cells only. It cannot see (a) root, (b) directories like TS_measurement_handoff/, (c) leaf-depth files — the review.* docs at 22 are entirely off-book, invisible to both unregistered and missing checks. Proposed as H13 in schedule.lattice.f6.
3. **last_location is keyed by filename alone** in op_reconcile — a file at two addresses has only one "last word." Worked in our favor here (duplicates resolved), but a deliberate same-name-two-addresses case would confuse it. Noted for H13's design.

## What remains open

- Renames of pre-convention files (P3 residual) — joint session with branch 1, propose-per-line
- H13 — scan coverage: root, directories, leaf depth
- The 220 pile is down to 31 files — G1 (address each) still open, now smaller
