# baton — clerk — f22

closed: 20260629-151123 · gait: [walk] · folds [[baton.clerk.f21]]

**next pull = resume the zine-builder — operator picks the next chunk: chunk D (imposition, toward print) OR the local-folder pool provider.** Both are framed/noted. My lean: **local-folder pool** (highest portability payoff, still a static page via the File System Access API) — see [[note.pool-and-portability.f0]]. The editor MVP is otherwise complete and eye-confirmed.

## what landed this session (all committed)
- **zine-builder editor — chunks A–C + E built & eye-confirmed.** The MVP: a sized SVG page · place text/image atoms · move/resize/layer by hand · the **pile** (load your own files, place from them) · **multi-page** (add/navigate/reorder) · **presets** (5 layouts, none canon) · **save/open** · **delete** · **undo/redo**. Operator confirmed working through undo/redo.
- **controls = the kit** (operator 20260629) — w/h `scrub`, unit/kind/place `selector`, all buttons `kit button`, imported across from `../kit/src` (one source of truth). [[frame.editor-composes-zine]] tracks every slice.
- **persistence settled: project file, fold-style** — `save` downloads `zine.YYYYMMDD-HHMMSS.json` (never overwrites; the filesystem holds the fold history), `open` restores. Static, portable, zero backend.
- **note folded** — [[note.pool-and-portability.f0]]: the pile is a **source provider**; backends swap behind it (upload built · local-folder static via FS Access · Drive rides the hub, later); export mirrors it.
- **UI break caught + fixed (operator flagged).** I shipped chunk C without rendering it; the flex column squashed the kit controls to 2px under `flex-shrink` (overflow:hidden children). Fixed (`flex:0 0 auto`), built **`dev/_cap.mjs`** (windowless capture rig), recorded the lesson → [[eye-the-ui-before-done]]. Later caught a `−page` clip the same way (flex-wrap fix).

## state (live threads — 1, healthy)
1. **zine-builder editor** — at **211**, chunks A–C + E done & confirmed. Ahead: chunk D (imposition) · pool providers · the parked wants (text-as-subsystem · image-effects).

## loose ends (note + address later)
- **v1 exclusions:** page width/height **not undoable** (continuous, not content); on a short window the controls panel **scrolls** (offered: split into columns) — neither bugged the operator yet.
- **zine-builder unbooked in the ledger** — the deferred per-project manifest.count (carried from f21).
- **class-builder + flyer-content-builder** — at the 200 dock, unframed; their season later (flyer last).
- **settings.local.json** — ~20 long-form paths in the allowlist (prompts, not 404s) → clean when convenient (carried from f21).
- **220/lattice.html latent addrPath** — operator said **leave dormant** (resolved this session).

## wants-word
- **next chunk?** chunk D (imposition) vs local-folder pool (my lean: pool).
- page-size undo + panel scroll-vs-columns — fix if they start to bug you.

## carry
- **[[eye-the-ui-before-done]]** — capture + LOOK before calling a UI slice done; proofs/tsc are blind to layout. `dev/_cap.mjs` is the rig (serves the 211 floor so `../kit` resolves).
- **operator builds by hand** — the editor is a direct-manipulation instrument; kit controls are the surface.
- **checks are a net** — green ≠ done; the operator's eye is the gate.
- node-proof every pure module red-first; commit per change; the operator watches live.
