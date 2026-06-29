# Frame — hygiene — f0 — 20260610-042049

The books get amended to match the floor. Five slices, all paperwork and small moves — no instrument surgery, no content changes. Source: log.fable.f0 at 201 (arrival walk), schedule.lattice.f5 chunk P.

## What this build IS

Ledger truth restoration. The walk found drift the system already half-knows: ghost entries (files deleted without delete rows), duplicates on the books as two originals, untyped strays outside the accumulation zone, legacy numbering, one test stub. Each slice follows the same shape: **propose → sign → execute one at a time → verify via /reconcile**. Errors cluster at boundaries (file movement, address changes) — so nothing batches, nothing wildcards. The count.research-sort.f0 wildcard error is the cautionary tale.

## Source material

- `201/log.fable.f0` — walk observations, the sloppiness list
- `201/manifest.live.md` — the ledger being amended
- `211/server.py` — /reconcile, /move, /delete endpoints (mutations go through the instrument so rows write themselves)
- `202/schedule.lattice.f5` — chunk P, overlap notes with G1/O3

## Ground rules (from division of labor, settled)

1. Every mutation through the instrument where an endpoint exists — manifest rows come free.
2. Retroactive ledger rows (P1) are manual manifest appends — the one case where hand-editing the ledger is the fix, not the drift.
3. Deletes and moves gate on user sign-off per slice. A location is not a permission.
4. /reconcile run before and after each slice — before to confirm the proposal matches reality, after to confirm the slice landed clean.

## What to build

### 0 — P1: ledger amendments (manifest.live.md only)

Retroactive delete rows for files gone from the floor. No files move.

- run /reconcile, capture the "missing" list (last known: 8 — root install, deleted test files, old folds)
- for each: confirm with user it was deliberately deleted, then append a row: `| {now} | delete | {file} | {addr} | - | retroactive — deleted {when/why if known}, row added per frame.hygiene |`
- for entries that are legitimate non-deletes (e.g., root CLAUDE.md install — root is not a cell address), annotate instead of fabricating a delete
- done when: /reconcile "missing" count is 0 or every remaining item has an explanatory row

### 1 — P5: test stub removal

Smallest slice, run second as the delete-path rehearsal.

- `111/note.scratch.f0.20260608-145457.md` (4 bytes, instrument-test residue)
- confirm content is disposable (read it first — verify against reality, not expectation)
- delete via instrument → row writes itself
- done when: file gone, row present, /reconcile clean

### 2 — P2: duplicate canonicalization

~12 files at two addresses, no canonical marked.

- produce `count.duplicates.f0` at 201: each file, both addresses, byte-compare result, proposed canonical, proposed disposition for the other copy (delete / keep with copy-annotation)
- known set: findings.md, HANDOFF.md, TS_3D/4D/fingerprint/formulas.html, ux_plan.md, spline_continuity_BRIEF.md, spline_continuity_v2 (4).html at 100↔220 · FINDINGS_ternary_TS.md, TS_BRIEF.md at 111↔220 · tsnew-trace.html at 110↔211
- user signs the count doc — each line individually signable, not all-or-nothing
- execute signed lines one at a time via instrument
- done when: no file exists at two addresses without a copy-annotation in the ledger

### 3 — P3: strays outside the accumulation zone

Untyped/unstamped files at 100 and 121 (the 220 pile is sanctioned accumulation — not this slice, that's G1).

- produce proposal list: current name → proposed typed name and/or address (e.g., `riemann-dependency-map.md` → reference type? `the_two_who_built.md` → myth naming?)
- some may be deliberate keeps (reference docs that predate the convention) — proposing is not renaming
- user signs per line, execute via instrument
- done when: 100 and 121 hold only typed/stamped files or deliberately-kept references noted in the ledger

### 4 — P4: fold-numbering legacy

Minimal touch — these are historical documents.

- manifest.session.f0 ×2 (collision): manifest.session is already retiring (frame.warehouse 0.7). proposal: annotate the ledger, rename nothing
- audit.lattice.p1–p4: predate the fN convention. proposal: leave as-is, note in ledger that pN is pre-convention partial numbering
- user decides annotate vs rename; execute accordingly
- done when: the collision and the pN scheme are either resolved or explained on the books

## Definition of done

- [ ] /reconcile returns clean — zero unexplained missing, zero unregistered
- [ ] no file at two addresses without a copy-annotation
- [ ] 100 and 121 hold only typed/stamped or ledger-noted reference files
- [ ] manifest.session.f0 collision and audit.lattice.pN explained or resolved on the books
- [ ] note.scratch stub gone with its row
- [ ] every mutation has a ledger row; no row without a mutation

## Execution

### 0.0 — P1 ledger amendments — first, frees /reconcile as a trustworthy gate for everything after
### 0.1 — P5 stub delete — rehearses the delete path on the lowest-stakes file
### 0.2 — P2 duplicates — count doc, sign, execute
### 0.3 — P3 strays — proposal list, sign, execute
### 0.4 — P4 numbering — annotate (or rename), close the books

Each step folds this frame if scope shifts. Nothing executes until the user signs the slice.
