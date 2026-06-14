# Frame — w3b · the surfaces — f0 — 20260614-134314

Status **[float]** — LEAN/STUB: stub the shape, fill rungs as we go.
Child of `frame.w3.f1` (W3 umbrella). The lattice-client side of W3.

## What this frame is
The operator-facing side of W3 — **pixels the operator looks at.** Lattice client / UI work. Concrete and **fork-free** — no design forks open here. Rides on the live comms board (`frame.comms.f1`) and the existing viewer's open-by-address.

## Chunks × slices × rungs (stubbed)

### Chunk 1 — memo→file deep-link (NEW, operator idea 20260614)
*A memo names a changed file and you click it to land on that file in the library.*
- slice 1.1 — author the link: server stamps a changed file's address into the memo (**auto**), and/or any address-shaped token in a memo body is rendered clickable (**manual**). rung: TBD.
- slice 1.2 — the click handler: clicking tells the lattice viewer to navigate-to-address + open in the reader (**reuses existing open-by-address**). rung: TBD.
- slice 1.3 — interlock with **U-7 operator inbox** (new-file tracking, a W4 ask): the deep-link is half of "operator sees what landed and jumps to it." Note the seam; **don't build U-7 here.** rung: TBD.

### Chunk 2 — U-5 config panel look
- slice 2.1 — operator looks over the config-panel surface where the w3a settings (bodies / wake / orientation) would show. **look first, build to taste.** rung: TBD.

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
