# Schedule — lattice — f6 — 20260610-044417

Fold from f5. Sources: frame.hygiene.f1 at 210, count.duplicates.f0 at 201, /reconcile output.

## Changes since f5

- Chunk P executed in full (operator authorized the whole pass). All five slices done — see frame.hygiene.f1 for the execution record.
- Books state: 0 unregistered, 175/175 registered, 2 missing both explained on the ledger (scan blind spots).
- 220 pile reduced 42 → 31 files (11 byte-identical duplicates trimmed). G1 is smaller.
- New proposed slice **H13** — scan coverage: /scan walks 3-digit cells only; root, directories, and leaf-depth files (the review.* docs at 22!) are invisible to reconciliation. Also: op_reconcile keys last-location by filename alone — same name at two addresses gets one "last word." Tooling work, wants a frame before build.
- P3 residual: renames of pre-convention files deferred to a joint session with branch 1 (their working files). Annotated on the ledger meanwhile.

## Gate map

```
A (settle) ─┬─→ C (gated fixes) ─→ view/code consistency
             ├─→ G (file distribution) — smaller after P2
             ├─→ K (carry-forward) ←─── I (research/ground truth)
             │                    ←─── O (TS handoff sort)
B (ungated fixes) ─→ (free)
H (tooling) ─→ H13 proposed (scan coverage). V0/V1 fixes open
L (three-branch concurrency) ─→ needs working instruments first
M (ground truth library) ─→ feeds K, feeds L. partially fed by O.
N (instrument workshop) ─→ feeds L, needs M for TS. O feeds N1.
O (TS handoff sort) ─→ feeds K1, N1, N7, M4. blocked by nothing. NEXT.
P (warehouse hygiene) ─→ DONE except P3-residual (joint renames)
```

## Chunks

### A–O: unchanged from f4/f5

### H: tooling — one addition

| slice | description | status |
|-------|-------------|--------|
| H13 | Scan coverage — root, directories, leaf-depth files visible to /scan and /reconcile; per-address last-location keying | proposed — frame before build |

### P: warehouse hygiene — DONE

| slice | result |
|-------|--------|
| P1 | done — 6 registrations, 7 retroactive deletes, 2 explanatory notes |
| P2 | done — 12 identical pairs trimmed, count.duplicates.f0 at 201 |
| P3 | done (annotate) — renames deferred to joint session with branch 1 |
| P4 | done (annotate) — no renames, historical files kept as-is |
| P5 | done — stub trimmed |

## Schedule notes

- O (TS handoff sort) is now the clear next work — the books are true, receiving holds one counted unsigned package, nothing else competes.
- The both-directions ledger gap (deletes unrowed AND creates unrowed, all from one session) suggests a practice: end-of-session reconcile as the closing act, the way the walk opened this one. Cheap, catches drift while it's one session old. [float — propose to operator]
- H13 should fold P's two explained-missing items to zero when built.
