# baton — clerk — f23

closed: 20260630-104541 · gait: [walk] · folds [[baton.clerk.f22]]

**next pull = resume zine-builder chunk F (text MVPoC). FIRST settle the leaf page-naming with the operator (open — see [[note.leaf-model.f0]]), THEN fold the leaf model into slice 14, THEN build slice 15 (story + editor window).** The naming is a wants-word, blocked on his aesthetic call.

## what landed this session (all committed)
- **local-folder pool (slice 4b)** — the pile gains a 2nd source provider via `showDirectoryPicker()`; same seam, Drive rides it later. eye-confirmed.
- **imposition (slice 8)** — `impose.js` saddle-stitch map (pure, 5/5) + a non-destructive **impose** preview (2-up sheets, fold line, role watermark). eye-confirmed.
- **text wrap (slice 11)** — measured `<tspan>` lines (`wrapLines` pure), clipped to box, crisp in editor + preview. **Fixed the long-standing preview "black box"** = `.atom-box fill:none` was scoped to `svg.page`, defaulted black in the preview svg. (foreignObject tried + rejected — breaks under preview scaling; → tspans.)
- **text edit (slice 12)** — overlay-textarea editing; **SUPERSEDED as primary** by the story+window reshape (kept as quick-edit).
- **page types (slice 14)** — `pagetype.js` (pure, 5/5): 4-cover default, auto roles from position, `+page` inserts interior between covers, covers undeletable. **NOW being revised to the leaf model** (below).
- **discipline corrections (operator):** frame folds — **freeze the origin, fold f0→f1 at the first update** (I'd been editing the f0 seed in place; recovered byte-exact from git). Screenshot **canonical = the crystallized fold itself (no `.ref` marker)**, tracks layout-integrity, moves only on his bless.

## state (live threads — 1, healthy)
1. **zine-builder · chunk F (text authoring MVPoC)** — RESHAPED to **content/layout split**: a *story* (full text) edited in a dedicated **window**; a page box is a *frame* onto it. Single frame for MVPoC; **threaded flow + point-at-file = deferred (the generative-distribution bridge).** Page model now **leaf-based** (locked): leaves with 2 sides, add leaves not pages, default 2 cover leaves. **Naming = open** (operator rejects 3-word cover terms; leaf# vs page# mismatch unresolved — [[note.leaf-model.f0]]).

## wants-word
- **the leaf naming convention** — covers in ≤2 words, reconcile leaf-numbering vs page-numbering, one clean side-suffix. THE blocker for slice 14 revision.
- slice 13 (font/size controls) ordering — before or after slice 15.

## loose ends (carried)
- zine-builder unbooked in the ledger (deferred per-project manifest.count, from f21).
- settings.local.json ~20 long allowlist paths — clean when convenient (from f21).
- MVPoC's other half: a **light print path** (browser-print the imposition at true size) — framed in chunk F "later", build after the text floor.

## carry
- **[[eye-the-ui-before-done]]** — capture + LOOK; **probe the live DOM state before swapping the rendering mechanism** (the foreignObject detour: ~8 variants before one probe showed it was an unstyled rect). `dev/_cap.mjs` is the rig.
- **[[frame-doc-conventions]]** — freeze the origin; fold f0→f1 at first edit; never edit the seed in place.
- shared SVG render markup must NOT rely on container-scoped CSS (the black-box bug).
- node-proof every pure module; commit per change; the operator watches live.
