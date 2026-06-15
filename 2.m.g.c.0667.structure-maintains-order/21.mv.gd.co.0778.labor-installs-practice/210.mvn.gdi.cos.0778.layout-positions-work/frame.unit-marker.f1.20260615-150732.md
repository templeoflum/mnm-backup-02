# frame — unit-marker → folder-typing — f1

address: 210 (layout·positions·work) · mode: builder window (clerk, systems) · status: **framed, pending rework** · scope: `unit-marker` (now a folder-typing system) · folds from [[frame.unit-marker.f0]]

**Redraft (operator word 20260615): f0 welded two unrelated jobs onto one marker, and got the browser backwards.** f0 made `.unit` mean *both* "keep out of the ledger" *and* "the browser can't open it." Wrong: those are orthogonal, and the browser need was inverted — the operator wants project folders **open/browsable** (to reach the clock) and the **address (digit) folders hidden** from the browse list (they are navigated by the lattice's own address UI; listing them as folders is redundant clutter). f0's browser slice (S4) is reverted; its ledger slices stand.

## the two orthogonal axes (the correction)

A folder declares its kind with a marker; two independent axes, never the same code path:

| marker | folder kind | ledger / witness | browser |
|--------|-------------|------------------|---------|
| `.unit` | a project (e.g. `ts`) | **out** — git is its file-by-file log; manifest books it once | **in** — a normal browsable folder; open it, reach its files |
| `.stem` / `.leaf` / `.cell` | an address folder (1 / 2 / 3-digit) | **in** — these *are* lattice addresses; their files are witnessed | **out** — hidden from the browse list; reached via the address UI |
| (none) | freight / content (e.g. `marginalia/`, `src/`) | in (witnessed at its address) | in (browsable) |

`.unit` is ledger-only. The address markers are browser-only. Orthogonal.

## the vocabulary this settles (operator word)

- **root** — the being at the 1-digit identity (root 2 = structure·maintains·order); the essence it grows from.
- **stem** — the 1-digit address itself (`2.m.g.c.0667…`), the trunk stemming from the root. (Keystone's old "branch: 1 digit" now reads **stem**.)
- **leaf** (2-digit) · **cell** (3-digit) — what grows off the stem.
- **branch** — the *whole* rooted unit: root + stem + leaves + cells, called as one. The three branches (0/1/2) make the lattice.

`.stem` (not `.branch`) is the marker name — branch is the whole, and it dodges git's "branch". Keystone implication (the "branch: 1 digit" line → "stem") is flagged for a separate, deliberate keystone fold — not done in this build.

## what stands from f0 (the ledger side — correct)

- **S1** `is_unit()` helper · **S2** witness skips files inside a `.unit` · **S3** cell scan skips `.unit` folders · **S5** `ts/.unit` placed + unit booked once. All proven, all kept. The `.unit` axis is right.

## the rework (the browser side — corrected)

| # | slice | what | proven when |
|---|-------|------|-------------|
| **R1** | **revert S4 browser** | drop the `units` op_list split + the client's opaque `📦` rendering, `_unitCache`, sweep-units tracking | `op_list` returns one `folders` again; client renders `ts` as a normal clickable 📁 |
| **R2** | **address marker + helper** | `is_address(path)` in `server.py` = holds `.stem`/`.leaf`/`.cell`; `ADDRESS_MARKERS` by depth | helper True only on a marked address folder |
| **R3** | **hide address folders** | `op_list` omits folders where `is_address(f)`; freight + units still listed | at a stem/leaf, the digit children no longer appear in the browse list; `ts`, `marginalia` do |
| **R4** | **seed the markers** | drop `.stem`/`.leaf`/`.cell` into every EXISTING address folder (depth-keyed); add auto-creation to the folder-generation path so future addresses get theirs | every existing address folder carries its marker; a freshly-made address folder is born with one |

Build R1→R4, each proven, committed live. Address nav verified independent (v0Select/go set currentAddr from the digit structure, not op_list) — hiding is safe.

## out (unchanged)

project-local manifest / check-in-out → multi-seat, booked · a project *opener* view distinct from browse → later · changing git or how freight is witnessed → untouched · the keystone "branch→stem" fold → separate deliberate act.

## laws (carried, light)

decouple before you mark — one marker, one job · prove the slice in isolation · errors STOP and are walked · the markers are the only boundary, no inferring · systems change on the shared floor → commit per slice, operator watches live.
