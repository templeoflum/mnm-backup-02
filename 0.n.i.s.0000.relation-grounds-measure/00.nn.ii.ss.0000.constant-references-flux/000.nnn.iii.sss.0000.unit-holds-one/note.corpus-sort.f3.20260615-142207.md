# note — corpus sort — f3 — 20260615-142207

**Fold f2 → f3: the sort dissolves. The corpus becomes one `.unit` database at root `0`.** f2 worked out the finer pinning and found it had *no deterministic signal* — 790 records of forced per-record judgment. That friction was the tell. This fold records the turn: the scatter is abandoned, the corpus consolidates into a single tracked unit. f0–f2 stay as the trail of *how the question was walked*; this is where it landed.

---

## what turned, and why

The sort tried to place each record at a lattice address (field → branch, source → reference-leaf, object → cell). It kept producing strain — the cell/leaf pin had no signal in the records (`kind:` ≠ role; essence ≠ cell). The reframe that resolved it:

**The corpus is the *library*, not the system's own work-product.** Ground is "the library underneath both other wings" — reference the wings *draw from*. A library is reached through its **catalog** (`corpus.index`), not by scattering the books into the shape of whoever reads them. The lattice addresses things by their role in the *system's* work (frames, logs, batons, dreams). Scattering reference material into those addresses conflated the holdings with the structure. The friction was the structure declining the imposition.

## what was done (this session)

- **Consolidated** all 1029 records + `corpus.index` into **`0/corpus/`**, a single folder.
- **Declared it a `.unit`** (per `frame.unit-marker`, 210) — the lattice treats the folder as one thing, not a sub-tree of addresses. *(NB: opacity is partial until the clerk builds S2/S3 of that frame — witness + recursive scan still see inside; `op_list` already surfaces it as a unit.)*
- **Dissolved the hold** — the 161 mind/structure objects are just records in the DB now; no tag, no subfolder. **The existence-branch-vs-mode hinge dissolves with it** — no scatter means nothing to gate.
- **The elegant part survives as metadata**: field/source/object = spec/ops/config, queryable, and `corpus.index` groups by exactly that. We dropped only the part that had no signal.

## what was *applied then reverted* (the trail, honestly)

Earlier this session, before the pivot, two f1 "pinned moves" were executed: 78 fields → branch `0`, 161 flagged → `000/hold`. The consolidation **pulled both back** into `0/corpus/`. Net effect on disk: everything in one folder. The moves were not wasted — walking them is what surfaced the no-signal friction (and the 7 mis-typed records, fixed and kept).

## one ground fix carried forward

The count gate caught **7 `object.*` records with `type:` mis-filled** (the sub-type instead of `object`); fixed losslessly (commit `5157990`). That fix stands regardless of the sort — it was a real data error.

## what's now stale (flagged, not yet done)

- **`corpus.index`'s "sort rule (recorded — execution deferred)" section** describes the abandoned scatter. It needs an update/fold to read: *single `.unit` database, structure lives as metadata, no lattice placement.* Proposed, not yet done — the index folds on completion cleanup / discussed change, so this is the next light pass (operator's nod).

---

*f3 — the sort dissolved into a single `.unit` database at `0/corpus/`; corpus = library (catalog-reached), not lattice-scattered; structure survives as metadata; the existence-branch hinge dissolved. f0–f2 retained as the trail. Stale: the index's sort-rule section.*
