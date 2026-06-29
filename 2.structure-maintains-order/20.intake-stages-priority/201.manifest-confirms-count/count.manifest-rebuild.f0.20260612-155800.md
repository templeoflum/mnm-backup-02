# count — manifest rebuild — f0 — the books are true again

address: 201 (manifest·confirms·count)
cut: 20260612, executing frame.scan-coverage.f1 (H13, signed). The fresh baseline of decision 10.

## what happened

1. **The dead ledger archived whole:** manifest.live.md (last honest row 20260610-1801, ~368 filenames never registered, one unledgered 43-file move) rotated by git mv to `manifest.archive.f0.20260612-154447.md` — same cell, full history preserved, nothing rewritten.
2. **The scan learned to see the whole floor** (server.py, H13): tree root (pseudo-address `root`) · branch dirs · leaf dirs · cells · subfolder freight with subpaths. Exclusions explicit in code: .git, node_modules, __pycache__, .claude (out by operator word). Reconcile's missing-side now keys (file, addr) — TS_formulas at 100 and at 200 are two facts, not one overwritten word.
3. **Fresh seed:** 674 files registered across 19 addresses in one pass, plus the ledger's self-registration row (a ledger cannot pre-register its own birth — the one edge the rebuild surfaced).

## the verification (DoD 6)

- reconcile after seed: **scanned 675 · registered 675 · unregistered 0 · missing 0 · CLEAN.**
- squared against count.systems-sweep.f0's census: 679 − 7 (.claude, out of books) − 6 (nul + five trimmed root strays, this session) + 8 (files born since the census: sweep audit, two frames, baton template, seat-protocol f1, the two reports, the census itself) = 674, + the new ledger = **675. Exact.** Two independent counts agree — the instrument and the audit shake hands.

## now visible that never was

marginalia/ ×14 at 100 (subpaths) · the compass.tsr kit ×12 at branch 2 · every review.* at leaf 22 (×8) · the root residents ×11 (server.py, lattice.bat, CLAUDE.md, three seat launchers, the eyes rig pending its W5 look, package files) · branch/leaf-level files everywhere.

## standing notes

- The RUNNING server still serves the old scan until lattice.bat restarts — the health pane shows true books only after the operator's next restart + reload. The play check of the pane rides the W5 play batch.
- No client code changed: the health pane renders address strings data-driven; new keys flow through. Verified at the play check, not assumed.
- First fresh-ledger rows after the seed block: the self-registration row. All future acts row here; the archive holds everything before 20260612-1544.
