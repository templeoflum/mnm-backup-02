# audit — systems sweep — f0 — every claim verified, the books reduced to what's true

address: 221 (trace·audits·path)
cut: 20260612, on operator word — "assume now we know nothing to be true." Full catalog + one-by-one verification of every task, bug, concern, idea, and claim on the books, against the filesystem and the executing code. Companion: count.systems-sweep.f0 at 201 (the file census, 679 files).

method: five parallel verification passes (root 1 whole · 20x+root-2 · 21x · 22x · code-vs-schedule), all 278 .md documents read, claims checked against disk and source. Two inter-pass conflicts resolved by direct read before booking (server /list endpoint EXISTS at server.py:604 — one pass missed the regex route; C3 center dot still branch-colored at lattice.f2:1945 — one pass inverted the bug's direction). Verification by code-read and file-presence; claims needing a live browser/run are queued in §IV, never assumed.

---

## I — THE CORRECTIONS: what the books said that is not true

The operator's instinct was right — f9 carried errors. Each booked here; statuses corrected in schedule.lattice.f9 in place.

### claims marked open that are actually DONE
| id | the claim | the truth |
|----|-----------|-----------|
| B2 | v0Label stale comment — open | comment removed in the f1→f2 fold (f1:1112 had it; f2:1161 clean). **DONE, by the fold not by the task.** |
| B3 | go() doesn't saveState — open | `function go(digits){ currentAddr=digits; render(); saveState(); }` lattice.f2:1277 — present since f1. **DONE.** |
| 0412 | _fileCache never refreshes (flagged 3×) | repaired 20260610 in place: 2.5s freshness sweep against /scan/files (edge.worktree-visibility annotation; code present in f2). **DONE** — the 22x logs never got the closure row. |

### claims marked DONE that are actually NOT
| id | the claim | the truth |
|----|-----------|-----------|
| B6 | dead code cleanup — DONE | **CONTRADICTED.** The entire CompactionEngine block (~70 lines) is dead — instantiated at f2:1248, never invoked; LEVELS/LLABELS/makeTs/NW/pk/gn live only for it. v0Open state vestigial (saved/restored, never toggled). Orphaned CSS (.v0-scope-pos etc.). Plus server.py DOC_TYPES is dead code (defined, never enforced). **REOPENED.** |
| seats | clerk full, mind/ground "shells" | all six seat files are FULL (mind.md 1234B, ground.md 1353B, complete identity + guidelines + env) — only the HANDLES are placeholder. Also frame.shared-floor.f0 spec said seat json carries permission posture — the jsons carry env only. Minor, but the books understate what exists and overstate the spec match. |
| R1 | commit cadence — LANDED, active practice | true as practice, but the sweep itself caught the floor mid-breach (modified f9 + untracked census uncommitted while agents ran). Practice, not law — as the operator already ruled. Committed at sweep close. |

### claims whose numbers are wrong
| where | said | actual |
|-------|------|--------|
| survey.post-dream / f9 W5 | "~38 unregistered files" | **~368 filenames have no ledger row.** The manifest is not stale — it is DEAD since 20260610-1801 UTC. Everything after (compass.tsr kit, trajectoscope f0–f6, ~200 bench/play shots, tsr lists, frames f2–f4, shared-floor, schedules f8/f9, seats, all audits since) is unledgered. Plus one unledgered MOVE: the 43 cell/build toys went 200→211 with zero rows — the ledger's last word still places them at 200. |
| f9 R7 | "the dock holds only this [compass kit]" | dock holds **15 files**: kit (4) + TS_formulas.html + journal.cells f0/f1 + list.toys-dreamed f0/f1 + map.settled-and-floating f0–f3 + myth.the-small-rooms + essay.the-horse-writes-back. True on 06-10 at 16:05; falsified by the 18:15 cellbuild pull; copied forward uncorrected twice. |
| count.systems-sweep F1 (my own census, this morning) | "ROOT 0 DOES NOT EXIST ON THE FLOOR" | **CONTRADICTED — my own miss, named.** The full root-0 tree (13 dirs) EXISTS on disk, empty, mtime 06-09. File-based listings show nothing because empty dirs hold no files. Same wrong claim stands in log.fable.f0 and survey.post-dream. The true fact: nothing has ever landed at 0. 120 and 212 likewise exist and are empty. |
| mind's settled-fold footers | fable-settled f2 "64 floats" / f3 "24 settle + 40 float" · tsr-settled f1 "16 float" / f2 "14 float" | f2 actually holds **78** lettered items (sections J/K never entered the count; propagated to f3, actual 31 settle + 47 float) · tsr f1 actual 18 float (footer doesn't sum) · f2 actual 15. Tally errors in the mind's own books — small, but the sift chain inherited them. |
| survey.post-dream | "the dream added 12 shots" | 13 dream-named PNGs on disk. |
| tsr·T7 / settled | "nine ◊ rungs want the two-source pass" | corpus map lists **ten** (1 unconfirmed + 9 partial). |
| frame.warehouse.f0 + frame.hygiene.f0 | "211/server.py — current server" | server.py lives at tree ROOT (its own docstring also still says 211). No record of the move. |

### dangling references (pointers to things that don't exist)
- myth.one-route.f0 cites "flatlanders f6" — only f0–f3 exist.
- TS_BRIEF.md (111) says "READ pipeline_state.md FIRST" — that file exists nowhere in the tree.
- marginalia corpus map imports `lineage.the-fields.f0.20260611-025919` — not in this checkout.

### lost / dropped items recovered by the sweep
- **J-4 — compass design floats** (gait tags, direction-vs-heading, wake type, elder's-gift round-trip, myth gated on wake thickness): in note.tasks-compiled.f0, absent from f7/f8/f9 and note f1. Dropped without a closure row. Partially realized de facto by the compass kits; the rest re-booked in f9 sweep intake.
- **dream.fable.f1 pass ~17** (navigation-over-recall, modes-eat-each-other, floats-take-time): appended after the settled catalogue closed at ~16 — never entered the f2/f3/f4 sift. A dropped stitch in mind's chain; flagged for the sift's next pass.
- **R10 closure** was implicit in f9 (resolved by W1 + corrections) — now explicit: closed.

---

## II — CONFIRMED SOLID: the big claims that held under hostile verification

- **O (TS handoff sort) — genuinely DONE.** All 46 located at claimed destinations, not spot-checked — every one: 30 toys + 3 integration js at 211, 8 harnesses at 221, docs at 121/111/201, edge at 112, count folded.
- **P (hygiene) — genuinely DONE.** All 12 duplicate trims verified gone, canonicals present, ledger rows in place, stub deleted.
- **W1 (shared floor) — genuinely DONE and advanced.** One worktree, one branch `main`, stray clones gone, seats + launchers exist and match spec (env, --settings, --append-system-prompt-file), 9 commits authored `clerk`, /launch route with allowlist + exists-guard in server.py.
- **H1–H7 — code present for all seven** (viewer, badges, health, drop zone, selection sync, V2 browser, refresh). Caveat booked: apiFold/apiCreate/apiDelete refresh files but skip the health re-check (freshness sweep covers it eventually). Behavior-in-browser claims ride §IV.
- **B9 /create** — confirmed: naming, auto-fold-increment, UTC stamp, 39-ceiling guard.
- **B8** — claim accurate and understated: client cache now self-reconciles (2.5s sweep). /list exists.
- **H13 — the bug is real and live, verified in source:** op_scan/op_scan_files/op_seed walk only the 27 three-digit cells (root, branch dirs, leaf-depth, subfolders invisible — marginalia's 14 files confirmed invisible to /scan); op_reconcile keys last-location by bare filename (server.py:478) — same-name-two-addresses collides (TS_formulas 100/200 is the live instance, hashes still divergent).
- **220 pile = exactly 31 files** as claimed. **The 46-file count, the 43-toy count, the 176-row seed, the census's collapse record** — all check out.
- **Mind's structural chain held:** dream→sift→settled→tasks placements all real (98→47→45 sift, 14+5 tasks at 122, settled trio at 112, satchel at 100, myth lineage at 121), modulo the footer-tally and stale-header errors above.

---

## III — THE OPEN REGISTER: what is actually left, reduced

Everything below is verified-open as of this audit. The season's signed order stands; this is the full inventory behind it.

### bugs, verified live in code
1. **H13** scan blind spots + filename keying (gates W5 manifest run) — the single highest-leverage fix: the health indicator and reconcile silently disagree with the floor.
2. **C3** ring center dot branch-colored (f2:1945) — origin is exact, dot should be fixed.
3. **C4** ratio line labels symmetric, 1 not marked unreachable (f2:2024; ring view does mark 0.5).
4. **C7** timestamp inconsistency — three-way: client log local-time vs engine/server UTC; plus the stamp-ahead-of-clock pattern (3 instances found: manifest row 191500 in a file written 1801; cycle-2 stamps; non-monotonic log entries).
5. **B6 reopened** — dead CompactionEngine block, vestigial v0Open, orphaned CSS, dead DOC_TYPES, renderV2Files near-verbatim copy of renderV0Sidebar (two drift points).
6. **fetch-failure silent blank** — dead server / file:// open renders a confident empty lattice, no banner (edge.worktree-visibility fifth hazard).
7. **0418** file reader doesn't clear on address change (stale render caused one false alarm) — never fixed, needs play to confirm still live.
8. **Stage-2 lens regression** — lensblock/spliced dead (freeze + checkboxes), never root-caused; harnesses sit at 221 unrun; kernel/test require() split (211 vs 221) still bridged by nothing.
9. **universal folding unimplemented** — op_fold parses fold-named files only; dumped files can't start at f0 (Q9 correction, settled, never built).
10. **eyes rig broken** — eyes.js/eyes-test/eyes-numpad-diag (Playwright harness, untracked) point at pre-rename paths and a keyboard scheme f2 no longer implements. Fix, retire, or re-aim — operator call (W5 clutter neighborhood).

### the manifest emergency (W5, now properly sized)
Dead ledger since 06-10 18:01; ~368 unledgered filenames; one unledgered 43-file move; H13 gates an honest run. The W5 manifest run is not a tidy-up — it is a rebuild of the books, and H13 must land first or the run will lie.

### tasks verified open (by area)
- **W7 seat protocol** — nothing exists; season opens here. Discussion → frame.
- **Q-cluster / W3** — no orientation files, no presence line, no hooks, no whisper, no ask-gates, no per-seat permission postures (seat jsons are env-only), no SessionStart design, no fold-ceiling UI (server-side 39 only), no config panel work. Q2's per-tree-port half mooted by W1; server-announces-root + startup guard still useful (edge fixes 1–3 unimplemented, port still hardcoded 8000).
- **W4 comms** — sketch.comms.f0 real and committed; nothing built; memo-from-worktree rationale stale (worktrees gone) — re-scope at frame.
- **W2/U-1** root path display; **U-3** chat surface (no sketch yet); U-4/U-5/U-6 untouched.
- **W6** — R3 carriage (smallness line not yet in keystone — correct, it waits); R4 format (this sweep is exhibit #4); R5/H12 feature inventory (212 confirmed EMPTY); R9 pre-convention renames (strays confirmed standing at 100/121/220).
- **G1/G2** — 220 pile, 31 files, unsorted. **Preservation risk inside it:** crossref flagged three uniques; "permutation pairs" lives ONLY in observations.txt in the trim pile. The 0524 cleanup cycle never ran.
- **R6** — the two stale dream floats now have names: dream.fable.f0's note.scratch and tsnew-trace-at-110 claims (both OUTDATED by hygiene; floats D4/D5 never annotated).
- **R7** — kit disposition still open; dock actually holds 15 files (see §I) — the R7 pass should sweep the whole dock, not just the kit.
- **tsr chain** — paused intact behind tsr·T1, confirmed: zero deliverables exist for T1–T8/T13; ts-synthesis lineage never instantiated; four open gates queued on the TSR detour (atlas review → installs gate → reprojection → chunk 1); bench op paused at quarry item 7 (last 5 toys with operator: registry 34/35/36/42/43 + partials 15/27/28).
- **mind's own open threads** (for the sift, not the clerk): View 1 rethink · template stamping · compaction readout (asked twice, never built) · split-screen compare · per-address feel · document scroller · toy browser (T10) · the dropped pass ~17 · flatlanders f2 ground corrections never folded · epistemic exchange rate (Q5, skipped twice).
- **questions standing, operator's to call when ready:** dream reviews at 22 vs 12x · leaf-vocabulary float ("leaf" is a middle layer) · "ternary" terminology overclaim check · ratio-as-pressure · inventory doc type · log lifecycle (logs accumulate at 222 forever?) · spot-fix spectrum · where operator-arrival logs live (201 vs 222) · doc-type registry (server 12 vs keystone 17 vs practice ~24 — journal, list, essay, compass, map, play, bench, marginalia, float all in use, none registered).

### naming / convention (W5–R9 fodder, verified standing)
Stale birth-address headers (tsr-settled ×3 say 102, live at 112; fable-settled ×3 say 101, live at 112) — E1's convention call now has six exhibits · marginalia/ non-address subfolder (14 files) · "spline_continuity_v2 (4).html" browser-counter fossil · placeholder-stamp template names at 200 (×4) + marginalia.draft missing HHMMSS · pre-convention inherited names at 100/111/121/220 · audit.lattice pN numbering · review.session.f0 "# Thread" heading · riemann-dependency-map 100 vs 111 near-duplicate, never byte-compared, no canonical · duplicate-stamp folds (ts-rebuild f0/f1 same stamp; warehouse f0/f1 same stamp) · `nul` at root (Windows reserved name — deletion hazard, needs special handling) · MATRIX stale · research-operation docs at root unsorted · settings.local.json lost the PowerShell(node *) allowlist rule the bench op added (friction will recur at bench resume).

---

## IV — UNVERIFIABLE FROM HERE: the play-verification queue

Claims that need a live browser/run — queued, not assumed (tooltips-are-not-ground):
H1–H7 in-browser behavior · B1 (no editing UI found in code — near-certain done, one click confirms) · B5 selector focus-nav absence · 0418 reader-clear · drop-zone 100ms timing edge · lattice 404-repair "verified live" claim · kernel PASS claims (test_kernel at 221, one `node` run — needs the allowlist rule back) · Stage-2 regression reproduction · TS numeric claims (telescoping identity, H≈0.48 → tsr·T13, paused) · bench/journal validation claims (signed by work; bench shots cover them, re-run only if doubted) · external-literature claims (rediscovery dictionary, research registries — ride the parked wing).

## V — what the sweep changes on the books, by this audit's hand

- schedule.lattice.f9 corrected in place: B2/B3 → done · B6 → reopened-real · C1 → noted moot-unless-engine-revived · C3/C4/C7 → confirmed with line numbers · B8 note · H7 caveat · R7 dock truth · W5 manifest run re-sized (~368, dead-not-stale, H13 hard-gates) · seat-shells wording fixed · sweep-intake section appended (J-4 recovery, eyes disposition, fetch-blank bug, universal folding, 0418, allowlist regression, riemann dup check, 220 preservation risk, stale-header exhibits).
- The mis-claims in older documents (census F1, survey ~38, settled-fold footers, dangling refs) are NOT edited — they stay as they lie, named here. Fold discipline: corrections forward, never backward.
- Memory: no new memory carved — the operative lessons (verify against reality; accumulator folds; announce paths) are already carved; this audit is their application.

## VI — the sweep's own limits, stated honestly

- Browser-behavior claims unverified (§IV) — code-read only.
- External-world claims (research registries, literature) untouched.
- The ~200 play/bench PNGs at 110 were counted, not visually inspected.
- settings/hooks living outside the repo (global config) checked only where a repo file references them.
- One pass produced two errors caught by cross-check (§ method). Others may have slipped — this f0 is the base reference for the next reconciliation, not gospel.
