# Frame — w3b · the surfaces — f0 — 20260614-134314

Status **[float]** — LEAN/STUB: stub the shape, fill rungs as we go.
Child of `frame.w3.f1` (W3 umbrella). The lattice-client side of W3.

## What this frame is
The operator-facing side of W3 — **pixels the operator looks at.** Lattice client / UI work. Concrete and **fork-free** — no design forks open here. Rides on the live comms board (`frame.comms.f1`) and the existing viewer's open-by-address.

## Chunks × slices × rungs (stubbed)

### Chunk 1 — memo→file deep-link (NEW, operator idea 20260614)
*A memo names a changed file and you click it to land on that file in the library.*
- slice 1.1 — author the link. **BUILT — manual path (e680e99):** `renderBoard` link-ifies any `<addr> <file.ext>` token in a memo body (matches the house file-reference format). **auto path** (server stamps address on post) deferred as a follow-on rung. rung: BUILT, **play-confirmed (operator 20260614)**.
- slice 1.2 — the click handler. **BUILT (e680e99):** `memoOpenFile(addr,file)` = `go(addr)` + `v0PickFile(addr/file)` + `switchView(0)`; unknown address → hudPulse + bail. Reuses the existing open-by-address. rung: BUILT, **play-confirmed (operator 20260614)**.
- slice 1.3 — interlock with **U-7 operator inbox** (new-file tracking, a W4 ask): the deep-link is half of "operator sees what landed and jumps to it." Note the seam; **don't build U-7 here.** rung: TBD (seam noted, not built).

### Surface bug — reader scroll-yank (operator-reported 20260614)
- **FIXED (e2e751d):** the data-freshness sweep called `render()` when the file roster changed on disk (keeper writing a batch), rebuilding the reader DOM and yanking scroll to top. `renderV0Editor` now preserves `.v0-reader-body` scrollTop across same-file re-renders (via `_readerScrollFile`); a genuine file-open still starts at top. rung: BUILT, **play-confirmed (operator 20260614)**.

### Chunk 2 — U-5 config panel look — BUILT (read-only seat board)
- slice 2.1 — the read-only **seat board**. **BUILT:** `GET /seats` (server `6bbf2cf`, op_seats reads the three seat .json) + a "seats" button → slide-over panel (client `c518413`) showing each seat's name + home, wake lean, body in plain terms (can / asks / can't, path rules prettified to wing labels), and hooks. Read-only — surfaces the harness, writes nothing. rung: BUILT, **awaiting play-confirm — needs a server restart** (the running server predates /seats). Levels 2 (editable) + 3 (orientation-aware) remain as later calls.

### B-slice riders (the client's open anyway)
- B4 persistence re-scope · B5 selector focus-nav · B6 dead-code sweep (client + server `DOC_TYPES` + `renderV2Files` dedup). Fold in as the relevant file is touched; no separate pass.

### DEFERRED member — H14 fold-ceiling UI (operator word 20260614)
- the surface that *would* live here but has nothing to show yet: tons of folds, no single one worth surfacing. Returns when folds are maxing/mixing and need tracking. Named here so it's not forgotten.

## Definition of done (light)
- a memo can name a changed file and the operator clicks through to it in the library.
- the config panel is a surface the operator has looked over (and we've built to his taste).

## Related / lineage
- **`frame.w3.f1` at 210** — the W3 umbrella (parent).
- **`frame.w3a.f0` at 210** — sibling (the bodies/wake the panel surfaces).
- **`frame.comms.f1` at 210** — the memo board the deep-link rides on.
- **U-7 inbox / U-8 signing desk** (W4) — the deep-link is half of U-7.
