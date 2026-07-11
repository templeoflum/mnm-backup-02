# frame — the unified 12-channel inbox (harness integration) — f0

address: 210 · layout · positions · work
clerk, 20260711-074230. Frames the build; source = the harness package (200), design system 03, protocol spec 02, study_02 (unified inbox) is the assembled target.

## HUD
- **what:** the dispatch's chat becomes the **unified 12-channel inbox** — the container that integrates every party, record, and message into one structured surface. Not more isolated modules; the console the modules are panels of.
- **why:** the current chat (board + 3 seats, ad-hoc colors) is a shallow slice of the protocol. The source depth is a dense integrated console. We converge to it.
- **shape:** an **inbox = ≤12 TIA-598 channels**; a 13th → a **new inbox** reusing the same twelve. Envelope-rows flow through the channels; sticky panels ride the side; the composer routes by `@`.

## §1 — the channel code (IMPORTED EXACTLY from 03 §2, verbatim — the single source of truth)
All twelve jacket/print pairs, no approximation. Extract to ONE shared token block every piece imports.

| # | channel | jacket | print | party / role (authored — operator's to set) |
|---|---------|--------|-------|-----|
| 01 | blue | `#3e7ddb` | `#7aa8ee` | keeper |
| 02 | orange | `#e8842b` | `#f09a52` | (open) |
| 03 | green | `#4fa855` | `#7cc884` | lantern |
| 04 | brown | `#8b5e3c` | `#c49a76` | (open) |
| 05 | slate | `#7c8b94` | `#a8b8c0` | `#trace` (ghost — records, no presence) |
| 06 | white | `#c9d1ce` | `#eef2f0` | operator |
| 07 | **red** | `#d84040` | `#ef7070` | **`#safety` — RESERVED, forever** |
| 08 | black | `#000000` | `#d9dfdc` | `#vault` (ghost — archive) |
| 09 | yellow | `#d9b93a` | `#ecd56e` | clerk |
| 10 | violet | `#8e6bc8` | `#b493e6` | (open) |
| 11 | rose | `#d87d9d` | `#f0a3bd` | (open) |
| 12 | aqua | `#45c2c7` | `#6fd4d8` | board (`·all` broadcast) |

Identity carried FOUR ways per channel (03 §7.2): number + name + hue + **pattern** (so losing any two still identifies). Context markers: `#` = ghost, `·all`/`·N` = group. Okabe–Ito CVD mode available.

## §2 — the console (source depth — the whole thing, not one panel)
- **channel rail** (left): the twelve channels, four-deep identity, filters (act/urg/ghost/holding), `#safety` always red.
- **the tray** (center): envelope-rows across channels — the row module IS the renderer. LOW rows opacity .82, ghosts dashed+italic, hold rows breathe.
- **composer** (bottom): windsock strip (landing conditions) over one input; band selector + act/tone/wants minis; `@` retargets; input wears the target channel's jacket.
- **sticky panels** (right rail): **Crew · Weight · Feedback · Ledger · Rosetta** — the ledger/windsock modules become these panels; the Rosetta rides every sheet.
- **faceplate**: engineering title block — identity/job/walk-gate/cert-chain/**unheld=0** invariant.
- invariants held (03/05): motion=presence only · silence is null · red=#safety · unheld=0 · shape-first/color-echo · Rosetta every sheet · envelope resists growth · ownership at fixed coordinates · strain declared never inferred.

## §3 — slices (chunk × slice × rung; build DEEP per slice, not shallow-wide)
1. **Shared token import** — extract the twelve TIA-598 pairs + core tokens (03 §1) to one block; the inbox + modules key off it. (foundation)
2. **Channel rail** — the twelve channels, four-deep identity, `#safety` reserved, ghost markers, filters.
3. **The tray** — envelope-rows rendered per-channel from the message stream (row module as renderer).
4. **Composer** — windsock + `@` router + band selector, input wears the channel jacket.
5. **Panels** — Crew · Weight · Feedback · Ledger · Rosetta as the sticky rail (modules → panels).
6. **Faceplate + ghosts + 13th→new-inbox** — the invariants made visible.

## open (operator's word)
- party→channel assignment (the map above is a first cut; colors are fixed, the mapping is his).
- where the inbox lands: replace the current dispatch chat, or a new surface that folds in.
- FROZEN at first build: the twelve-color code + the invariants (§1, §2 tail) do not drift.
