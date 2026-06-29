# frame — address-folders-shorten — f0 — folder · sheds · length [built — E owed]

address: 210 (layout·positions·work) · mode: builder window (clerk, systems) · status: **BUILT 20260629 (commit 21833db) — B·C·D done, server net green; E2/E3 owed to operator eye** · scope: rename the 39 address folders to **digit+triad**, full notation stays as card/keystone info · triad **blessed** (folder·sheds·length)

## §1 — the agreement glance

**The change.** Address folder names drop the letter/ratio middle. Folder keeps only `digit.triad`:

- `2.m.g.c.0667.structure-maintains-order` → `2.structure-maintains-order`
- `21.mv.gd.co.0778.labor-installs-practice` → `21.labor-installs-practice`
- `211.mvv.gdd.coo.0815.motion-builds-form` → `211.motion-builds-form`

The full `m.g.c.0667` notation is **not deleted** — it already lives in the keystone §02 table and the visualizer data, and stays there as the detailed read. The folder stops being its carrier; that's all.

**Why now.** The long names overflow Windows path limits and are blocking files from moving into deep cells.

**Scope: 39 folders.** 3 stems · 9 leaves · 27 cells. Nothing else renames — non-address subfolders (`corpus`, `marginalia`, `mythic library`, `quarantine`, `kit`, `src`, project `.unit` folders) already have short names and are untouched. The `.md` files inside don't rename (their names carry no address).

**The linchpin (settles the shape).** `server.py:resolve()` *generates* the folder name from the digits — it is the single source of the name format. Change that one function to emit `{digit}.{triad}` and the server's whole path layer follows. The 39 renames must match its new output exactly. The `.stem`/`.leaf`/`.cell` marker system keys on file-presence + depth, **not** the folder name → survives untouched.

## §2 — slices · rungs (living tracker)

### chunk A — sort the floor (precondition)

The rename wants a quiet, legible floor. In-flight tracked work committed; untracked content rides along on disk through a folder rename (it isn't `git mv`'d, see method note).

| slice | what | status |
|---|---|---|
| A1 | commit in-flight: `manifest.live.md`, `log.session.f13` (M) + `f14/f15/f16` (??), the `archive-project-planning` space-rename (D old / ?? new) | ✅ committed; archive recorded as `R` (rename, +16 lines) |
| A2 | decide the 200 dock intake (2 Signal Culture PDFs, Video-synthesis md) — book into manifest or leave unsigned on the dock; either is fine, just named | ✅ operator word: **leave on dock** unsigned; rides the rename |
| A3 | name the untracked dev/quarantine piles (kit `dev/shots` pngs + `_benchcap.mjs`; quarantine `acp-bin1`/`event-building`/`source-texts`) — leave untracked, they ride the rename | ✅ named, left untracked (branch-0 piles = keeper's wing; kit dev artifacts) |

### chunk B — change the name generator (the heart)

| slice | what | rung (proven when) |
|---|---|---|
| B1 | `server.py:resolve()` emits `f'{sub}.{n}-{v}-{m}'`; full notation relocated to new `full_label()` (role/mode/reg/ratio kept computable for card/keystone) | ✅ resolve('211') → short triple; full_label('211') → full notation |
| B2 | fix the `resolve()` docstring to the short form | ✅ done in the B1 edit; `full_label` docstring correctly keeps the long example |

### chunk C — rename the 39 folders to match

Method: **filesystem rename** (`Move-Item`), not `git mv` — the rename carries untracked content (dock PDFs, quarantine, dev shots) inside the folder; git then sees tracked files as a rename and records it on `git add`. Deepest-first (rename cells before their leaf before its stem) so each move targets a stable parent.

| slice | what | rung |
|---|---|---|
| C1 | generate the 39 old→new pairs from `resolve()`/`full_label()`; print, eyeball | ✅ 39 pairs, all 39 old verified on-disk (0 missing), no collision; **operator eyeballed: "reads right"** |
| C2 | rename deepest-first (Python `os.rename`, == Move-Item); stage tracked-file moves only | ✅ 39 renamed, 3020 tracked files staged as **R**, 0 orphan deletions, bulk stayed untracked |

**SNAG (walked).** First `os.rename` hit `WinError 5` on `000` — twice. Cause: not the dev server (stopped it, still locked) but **two File Explorer windows + a concurrent session** holding `…000/quarantine/event-building`. Walked: operator closed the event session; I closed the two stray Explorer windows (Shell.Application `.Quit()`). Then 39/0 clean. Lesson: a whole-tree rename needs **every** handle out of the tree, not just the server — Explorer windows lock ancestors (the L3 hazard, made real).

### chunk D — patch the other hard-coded path refs (atomic with C)

These resolve a path or gate write-scope by the **long** string — they break the moment the folders move. Must land in the same commit-window as the rename.

| ref | file:line | breaks | status |
|---|---|---|---|
All patched by byte-level segment replacement (ASCII-only, encoding/line-endings preserved) driven by the same source-of-truth seg-map; JSON configs re-validated as parseable.

| ref | file | status |
|---|---|---|
| launch URL | `lattice.bat:3` | ✅ short URL |
| wing dirs | `.claude/seats/wake.py` | ✅ 3 stems short |
| **write-gate globs** | `clerk.json`, `keeper.json`, `lantern.json` | ✅ all 3 short; JSON valid |
| witness test tuple | `test_witness.py` (A221) | ✅ short; witness 12/12 |
| branch tooltip keys | `lattice.f2…html` | ✅ 3 keys short |
| component lists | `play.js`, `bench.js` | ✅ short |

(no long-form path-ref left in any tracked code/config — only `full_label()`'s docstring carries the long form, by design.)

### chunk E — verify (operator-gated where live)

| slice | what | rung |
|---|---|---|
| E1 | server resolves: op_list/op_read; witness; markers found by `is_address` | ✅ green — `/list/{2,211,000,222}` HTTP 200 w/ real data, html 200, `is_address` True post-rename, witness 12/12 |
| E2 | launch + visualizer: address UI navigates, browse hides address folders, tooltips read right | ⏳ **operator eye** — server restarted (bg, :8000); load the new short URL |
| E3 | the original symptom: a file that wouldn't move into a deep cell now moves | ⏳ **operator confirms** the blocker is gone |

## §3 — DAG · deeper

**order.** A (floor) → B (generator) → C (rename) **with** D (refs) in one window → E (verify). C and D must not be split across a dirty interval — between the rename and the ref-patch the server can't resolve and the seats can't write. Stage both, commit together, then verify.

**why filesystem-rename not `git mv`.** `git mv` operates on tracked entries; the address folders hold untracked content (dock intake, quarantine, dev shots). A plain `Move-Item` of the folder carries everything on disk; `git add` afterward records the tracked-file renames and picks up the untracked at their new path. Avoids leaving untracked files orphaned at the old path.

**deepest-first.** Rename `211.…` before `21.…` before `2.…`. If a parent renamed first, the child's old absolute path is already invalid mid-operation. Bottom-up keeps every target parent stable until its children are done.

**the notation is not lost — confirm the carriers before C.** Full `m.g.c.0667` form persists in: keystone CLAUDE.md §02 structure table (the spec — unchanged), and the visualizer's per-node data (play.js/html labels). Verify these still render the full read after the rename; if a card pulled the full form *from the folder name*, it must pull from `resolve()`'s still-computable components instead. (B1 keeps role/mode/reg/ratio computable for exactly this.)

**out of scope.** The ~23 history docs (logs, audits, old manifests) carry the long form as *trail notation in prose* — they don't resolve to the filesystem and don't break; per fold discipline, history is not rewritten for cosmetics. `manifest.live.md` is the one live doc that may want its paths refreshed (folded, A1-adjacent). The keystone §02 table stays full-form. Branch/identity meaning, the marker system, git history — untouched.

**risk register.**
- **gate-window** (C+D split) — highest; mitigated by staging both before any commit.
- **a hidden long-form path-ref not in the 10** — sweep `git grep` once more after B1 with the *new* expectation before committing C.
- **digit collision** — none: children of one parent are distinct digits; cross-depth (`2`/`20`/`200`) are nested, never siblings.

**laws (carried, light).** one function owns the name format — change it there, not by hand-editing 39 strings · C and D are one atomic window · prove each chunk before the next · systems change on the shared floor → commit per slice, operator watches live · the rename moves bytes, not meaning.
