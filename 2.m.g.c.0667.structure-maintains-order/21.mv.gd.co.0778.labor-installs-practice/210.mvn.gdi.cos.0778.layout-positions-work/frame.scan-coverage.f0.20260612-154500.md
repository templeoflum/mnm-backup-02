# frame — scan coverage (H13) — f0 — the books learn to see the whole floor

address: 210 (layout·positions·work)
cut: 20260612. DRAFT — UNSIGNED. Awaits the operator's sign; nothing builds. H13 hard-gates the W5 manifest rebuild — this frame is the gate's key.

## mission

The instruments only see the 27 cells. Root files, branch-level files (the compass.tsr kit — 12 files), leaf-depth files (every review.* at 22), and subfolder contents (marginalia's 14 at 100) are invisible to /scan, /seed, and /reconcile — so the health indicator and the badges silently disagree with the floor, and an honest manifest rebuild is impossible. H13 makes the scan see everything and the reconcile stop confusing same-named files. Then the books rebuild on a fresh baseline (operator word, decision 10).

## verified current behavior (from source, this session)

- `op_scan` / `op_scan_files` (server.py:381–412): iterate `f'{b}{l}{c}'` for the 27 cells only; `iterdir()` + `is_file()` — subfolders never entered, root/branch/leaf paths never visited.
- `op_reconcile` (server.py:448–498): the UNREGISTERED side already keys by (file, addr) — path-aware, sound. The MISSING side keys `last_location[e['file']]` by bare filename (line 478) — same name at two addresses collides, last row wins. Live instance: TS_formulas.html at 100 and 200, divergent hashes.
- `op_seed` (server.py:415): one-shot guard ("already seeded") reads the CURRENT manifest.live.md — so a fresh baseline needs no code change if the ledger file rotates first.

## definition of done

1. /scan and /scan/files report files at EVERY level: tree root (pseudo-address `root`) · branch dirs (`0`,`1`,`2`) · leaf dirs (`00`–`22`) · cells (`000`–`222`) · subfolder contents inside cells, reported with their relative subpath (e.g. `marginalia/map.the-corpus...` at 100).
2. Exclusions explicit and named in code: `.git`, `node_modules`, `__pycache__`, dotfiles. (`.claude` — operator call at sign, see open questions; lean EXCLUDE: harness config, not floor freight.)
3. /reconcile's missing-side keys by (file, addr); move rows pop (file, from) and set (file, to); delete rows pop (file, from), and legacy delete rows with `from = -` pop the bare name everywhere (old-format grace). TS_formulas 100/200 reports as two distinct facts.
4. The known invisibles become visible: marginalia ×14 · compass.tsr kit ×12 · review.* at 22 · root residents (server.py, lattice.bat, CLAUDE.md, seat-*.cmd, eyes rig pending its disposition).
5. THE REBUILD (decision 10): manifest.live.md rotates to `manifest.archive.f0.<stamp>.md` at 201 — the dead ledger preserved whole as history — then /seed writes the fresh baseline into a clean manifest.live.md. Zero seed-code change.
6. Verification against the census: post-rebuild /reconcile counts square with count.systems-sweep.f0's 679 (± files born since), and zero unregistered. The health indicator's claim matches an independent count — instruments agreeing is the whole point.

## execution steps

- 0.0 server: scan coverage (root/branch/leaf/cell + recursive-within-cell subpaths + exclusion list). py_compile clean.
- 0.1 server: reconcile keying per DoD 3.
- 0.2 client: health pane gains the new buckets (minimal edit; deeper surfacing stays with W4/U-7).
- 0.3 the rotation + fresh seed (DoD 5), with a first row in the new ledger noting the rebaseline and pointing at the archive.
- 0.4 verify per DoD 6; health-pane look joins the W5 play batch.
- 0.5 records: count of the rebuild, log, schedule W5 annotation.

## out of scope (fenced)

Client browsing/listing of non-cell addresses (the lattice UI keeps its cell-centric views — only the BOOKS see everything; UI evolution rides W4/U-3) · fold-rate signal (its own W5 item, may share the reconcile pass) · any file MOVES (registration in place only — marginalia stays at 100 by operator word; sorting is other W5 items' work) · the eyes rig (its survey is a separate W5 look) · W8's refactor questions (name conventions, types, passport — H13 reports reality, W8 redesigns it).

## edges, named

- Scan cost: trivial at ~700 files; recursion bounded by the exclusion list.
- New visibility will surface MORE unregistered names than the sweep's ~368 (it counted from the outside) — expect the first honest reconcile to look worse before the seed. That's the instrument working.
- `manifest.archive` is a new doc name at 201 — registered in the fresh baseline's own first rows; W8 may rename the pattern later.
- The client's 2.5s freshness sweep polls /scan/files — payload grows; watch render cost at the play check.

## open questions at the sign

1. `.claude` in the books or out? (lean: OUT, flagged line in code so the choice is visible.)
2. Root pseudo-address token: `root` in the manifest's address column (lean), or `-`?

## the sign line

Operator signs → fold to f1 SIGNED → execute 0.0–0.5. UNSIGNED.
