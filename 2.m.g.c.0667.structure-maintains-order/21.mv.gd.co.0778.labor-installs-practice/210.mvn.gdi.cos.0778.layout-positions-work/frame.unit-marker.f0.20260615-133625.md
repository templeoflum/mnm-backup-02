# frame — unit-marker (the project-unit boundary) — f0

address: 210 (layout·positions·work) · mode: builder window (clerk, systems) · status: **framed, pending build** · scope: `unit-marker`

## the subject

A project folder (e.g. `211/ts`) is **one tracked unit**, not a sub-tree of lattice addresses. Today both the witness and the browser walk into it and treat its internals as lattice — the witness logs `clock.ts`/`main.ts` file-by-file (against the confirmed folder-as-tracked-unit policy), and the browser shows `src/`/`dist/` as if they were structure, breaking the clean addressed view. This frame draws the boundary: a project **declares itself a unit** with a `.unit` marker file, and both instruments stop at it.

## the one rule

**A folder is a unit iff it contains a `.unit` file at its root.** Below that folder is the unit's own business — git is its machine-log, `222 — log.ts-formula.f0` its curated record. The lattice treats the whole folder as one thing.

Why declared, not inferred: a "non-digit folder" can't tell a project (`ts/`) from legitimate lattice **freight** (`marginalia/` under a cell). Freight stays browsable and witnessed; a marked unit does not. Only an explicit marker separates them — so the marker is the boundary, nothing else.

The marker is a dotfile, so it is itself invisible (both instruments already skip `.`-prefixed names) — it is *read for presence*, never listed.

## decisions (settled with operator, this session)

- **minimal scope** — exclude + hide-as-unit only. No project-local manifest now: git + the scope log already cover the inside, so nothing is lost by excluding. The project-local check-in/check-out manifest is the **multi-seat** form of this — booked (log [20260615-1025]), built at that threshold, not here.
- **marker = a dedicated `.unit` file** (general across project types; not `package.json`-inferred, not a registry row).
- **unit granularity = register once, then git.** The unit gets ONE manifest placement row (it exists at 211); its internal churn is git's job, not the manifest's.

## the slices (each built, proven in isolation, then the next — the U0 method)

| # | slice | what it does | proven when |
|---|-------|--------------|-------------|
| **S1** | **marker helper** | `is_unit(path)` in `server.py` = `(path / '.unit').exists()`; one shared definition both instruments call | `is_unit(ts)` is False before the marker, True after; digit folders + `marginalia/` read False |
| **S2** | **witness exclusion** | `.claude/seats/witness.py`: if the touched file sits **below** a `.unit` ancestor (between the deepest address folder and the file), skip file-by-file witnessing | a Write to `ts/src/foo.ts` produces **no** manifest row / no session line; a Write to a real lattice doc still witnesses (extend `test_witness.py`) |
| **S3** | **scan exclusion** | `server.py` `_list_files` (the recursive cell scan): do **not** recurse into a `.unit` folder; it surfaces as the unit, never its files | the sweep at 211 does not surface `ts/src/*.ts`; the cell's own freight still lists |
| **S4** | **browser-as-unit** | `op_list` returns `.unit` folders in a separate **`units`** key (not `folders`); the client (`lattice` html at 211) renders a unit as a single opaque "project" node — shown, not expanded | `op_list('211')` puts `ts` under `units`, `marginalia` under `folders`; client shows the project node and does not browse its guts (extend `test_folder_browse.py`) |
| **S5** | **place the marker** | drop `ts/.unit`; register the `ts` unit once in the manifest at 211 | `211/ts/.unit` exists; manifest carries one `ts` unit row; no new file-by-file rows on the next project edit |

Build order S1→S5. S1 is the shared primitive; S2/S3/S4 each consume it and prove alone; S5 lights it up live.

## out (keeps the crowding back)

- project-local manifest / check-in-check-out **inside** the unit → multi-seat, booked, not now.
- a project **opener/view** in the client (browse a unit's files *as a project*, distinct from lattice) → later; for now the unit node is shown, not expandable.
- changing git, or how the cell scan handles freight (`marginalia/`) → untouched.

## open (wants a word before or during build)

- **the rows already written** (clock.ts · clock.proof.ts · main.ts · index.html · the deleted `_proofrun.ts`, all at 211): leave as historical trail (append-only ledger; the exclusion is forward-going), or add a one-time annotation marking them superseded by the `ts` unit row? My lean: **leave as trail**, register the unit, move on.
- **unit node behaviour on click**: minimal = inert (shown, not expandable). Confirm that's enough for now.

## laws (carried, light)

prove the slice in isolation before the next · errors STOP the work and are walked · the marker is the only boundary — no inferring · systems change on the shared floor → commit per slice, operator watches live.
