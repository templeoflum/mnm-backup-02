# frame — editor · composes · zine — f0 — [live · chunks A–C + E built (slices 1–7, 9–10) · eye-confirm pending · chunk D / pool next]

The maker: a local, hand-operated surface to arrange printable content (your own — and later, submitted) into zine pages. Page size and count stay open; placement is free-canvas plus optional presets, neither canon. This is the first build of the zine-builder. The hub and the print-export are not here.

## §1 — agreement · at a glance
- **scope = the EDITOR (compose) only.** From [[note.zine-builder-walk.f0]]: the shape splits into two surfaces; this frames the **local maker, your hands**. NOT this frame: the public hub · the deploy-system · Drive submission-intake · print-PDF export (Fork B) · Canva.
- **the model:** a **sized page** (size a param, no fixed canon) · **content atoms** (image / text block) placed, then **moved / resized / layered by hand** (direct manipulation — [[operator-builds-by-hand]]: an instrument you pick up, not a coder catalog) · **free-canvas (A) AND presets (B), no preset is canon** · **multi-page** · a **pile** to place from · **imposition** (deterministic) · **save + version** (the unit's git/fold nature).
- **stack:** buildless browser JS, file-you-edit = file-that-runs ([[buildless-unit-default]]); a unit inside the zine-builder; local-only. **Controls = the kit** (operator 20260629): w/h `scrub`, unit/kind `selector`, imported across the floor from the sibling `../kit/src` (one source of truth, not copied) — the editor's params are hand-tuned with the kit, not raw HTML inputs.
- **render primitive — SVG** (blessed, operator 20260629): vector → print-clean, hand-draggable, exportable.
- **triad — BLESSED (operator 20260629): `editor · composes · zine`** — literal: the zine editor, composing a zine from content.
- **MVP-first:** chunk A alone is a pickup-able editor (a page, place, move by hand). Everything after extends it.

## §2 — plan · slices & rungs
status marks: ○ todo · ▸ doing · ✓ done · ⊘ blocked  — *(chunk A underway)*

**chunk A — the surface & the hand**  *(the MVP loop)*
- **slice 1 — the page (sized canvas)**  ✓ DONE · node-proof 5/5 · eye-confirmed 20260629
  - ✓ `src/page.js` — `pageGeom` (pure) + `pageSVG`: viewBox = the physical page (in/mm/px), no canon size; `index.html` re-renders live as w/h/unit change. `src/page.proof.js` 5/5 (units convert · size param changes it · positive/unit guards · svg carries dims) — runs under node, prints in-browser. `package.json` declares the unit ESM.
  - ✓ **operator eye (20260629):** index loads, the page renders and resizes with the inputs. (Surfaced + fixed the rename's addrPath 404 — [[incident.rename-missed-addrpath]] — to get here.)
- **slice 2 — place an atom**  ▸ BUILT · node-proof 7/7 · tsc clean · eye-confirm pending
  - ✓ `src/atom.js` — atom in page units (`placeAtom` centres on the drop point, placeholder content until the pile; `atomSVG` renders image→`<image>`, text→box+`<text>`, XML-escaped). `pageSVG` grew an `atoms` param (z-order = array order). `index.html`: kind picker + click-to-drop via the svg's coordinate transform. `src/atom.proof.js` 7/7.
  - ○ **operator eye:** load index, place a text and an image atom — both appear where clicked.
- **slice 3 — hand manipulation**  ▸ BUILT · node-proof 6/6 · tsc clean · eye-confirm pending
  - ✓ `src/manip.js` (pure) — `moveAtom`, `resizeAtom` (corner drag, opposite corner anchored, extent floored at `MIN`), `restack` (front/back). `index.html`: click→select (outline + 4 handles), body-drag→move, handle-drag→resize, front/back kit buttons→layer. Pointer delegated on `#stage` + document move/up (survives re-render); screen→page-unit deltas via the live viewBox; place-click suppressed after a drag. `src/manip.proof.js` 6/6.
  - ○ **operator eye:** place a couple atoms, drag one, resize from a corner, send one front/back.

**chunk B — content & the book**
- **slice 4 — the pile**  ▸ BUILT · atom-proof 8/8 · tsc clean · eye-confirm pending
  - ✓ `placeAtom` takes an optional `source` (pile content: image→data-URL, text→file body; omitted → placeholder/blank). `index.html`: a 'load files' kit button reads files (`readAsDataURL`/`readAsText`) into a pile drawer listing them (thumb/name); click a row to arm, page-clicks place that content, click again to release. (submitted content via Drive is later — needs the bucket.)
  - ○ **operator eye:** load an image + a text file; arm each; click the page — that content lands.
- **slice 5 — multi-page**  ▸ BUILT · manip-proof 7/7 · tsc clean · eye-confirm pending
  - ✓ model became a `pages` array (each page its own atoms, shared size); `moveItem` (pure) reorders. `index.html`: numbered chip strip navigates, '+ page' adds, '◀ move / move ▶' reorder the current page; selection clears on navigate; readout shows page x/N.
  - ○ **operator eye:** add a page or two, place different atoms on each, navigate between them, reorder.

**chunk C — efficiency & persistence**
- **slice 6 — presets (B)**  ▸ BUILT · presets-proof 4/4 · tsc clean · eye-confirm pending
  - ✓ `presets.js` (pure) — named layouts as page-fraction slots (single · 2 cols · 2 rows · grid 2×2 · thirds, via a grid helper); `presetRects` scales to page units. `atom.js` `atomInRect` fills a slot (shared `content()` with `placeAtom`). `index.html`: a button per preset drops atoms into its slots using the current place source (pile/kind); free-canvas + hand-manip stay free over them. No preset is canon.
  - ○ **operator eye:** click a couple presets, confirm slots land and you can still move/replace/place freely over them.
- **slice 7 — save + iterate**  ▸ BUILT · project-proof 4/4 · tsc clean · eye-confirm pending
  - ✓ **persistence settled (operator 20260629): project file, fold-style** — see [[note.pool-and-portability.f0]]. `project.js` (pure) `toProject`/`fromProject` serialize page size + pages + atoms to a JSON-safe doc and rebuild with validation. `index.html`: 'save' downloads `zine.YYYYMMDD-HHMM.json` (**never overwrites** — the filesystem holds the fold history); 'open' restores + reseeds id counters. Static, portable, zero backend. (localStorage / folder-write deferred to the local-folder provider.)
  - ○ **operator eye:** build a layout, save, edit, save again (two files), then open the first — it restores; the prior file still stands.

**chunk E — reversible editing**  *(operator want, 20260629)*
- **slice 9 — delete**  ▸ BUILT · manip-proof 8/8 · tsc clean · eye-confirm pending
  - ✓ `manip.js` `removeById` (pure). `index.html`: delete the selected **atom** (delete button + Delete/Backspace) and the current **page** (`− page`, keeps ≥1).
  - ○ **operator eye:** select an atom → delete (and Delete key); `− page` removes the current page, never the last.
- **slice 10 — undo / redo**  ▸ BUILT · tsc clean · eye-confirm pending
  - ✓ **full-state snapshot history** (`structuredClone` of size+pages+view): `pushUndo` before each action and once per drag gesture (banked at gesture start). undo/redo buttons + Ctrl+Z / Ctrl+Shift+Z / Ctrl+Y; capped 50; redo branch cleared on a new edit. Page-size scrubs excluded (v1, continuous).
  - ○ **operator eye:** place/move/delete, undo back through them, redo forward; a fresh edit after undo kills the redo branch.

**chunk D — output & later**
- **slice 8 — imposition**  ○
  - ○ reading-order → print signatures, **parameterized** (scheme not fixed). prove: pages reorder into a chosen signature scheme.
- **later** *(own slices/chunks when reached):*
  - **text as a subsystem** *(operator want, 20260629)* — large bodies of text with **fluid auto-formatting + auto page-distribution** (text flows/wraps within a box and across pages), seamless and fun. Current text atom is a single unwrapped `<text>` line (slice-4 limit) — placeholder until this lands. Likely its own chunk; text stops being a simple atom.
  - **image play / effects** *(operator want, 20260629)* — interactive transforms: **stretch · clone · mirror** (and more) — fun design moves on placed images. Its own chunk.
  - **scatter** (aleatory themed placement of fragments) · **submitted content** (read the Drive bucket — needs the hub) · **print-PDF export** (Fork B — the swappable terminal seam).

## §3 — trace · DAG & status
```
A1 page ─→ A2 place ─→ A3 hand-manip ─┐   (MVP: a pickup-able editor)
                                       ├─→ B4 pile ─→ B5 multi-page ─→ C6 presets ─→ C7 save/iterate ─→ D8 imposition
                                       └─→ (later: scatter · Drive-submissions · PDF export [Fork B])
```
- **status:** `.live` · triad blessed · SVG settled · **chunks A–C built — slices 1–7 (the editor MVP: page · place · hand-manip · pile · multi-page · presets · save/open). slices 1–5 eye-confirmed (operator 20260629); slices 6–7 self-captured (`dev/_cap.mjs`) — a flex-shrink panel-squash regression caught + fixed; operator eye still pending. next: chunk D (imposition) and/or the pool providers ([[note.pool-and-portability.f0]]: local-folder, then Drive w/ hub).**
- **eye-check rig:** `dev/_cap.mjs` — windowless capture of the rendered editor; run before declaring any UI slice done ([[eye-the-ui-before-done]]).
- **builds on:** the kit stack ([[buildless-unit-default]]) · [[note.zine-builder-walk.f0]] (shape + tooling).
- **forks flagged:** ~~render primitive~~ → **SVG (settled)** · imposition scheme params (slice 8) · where scatter / Drive-submissions / PDF land (chunk D / later).
- **build order:** moved to **211** before work began (operator gate); then **chunk A first** (the MVP loop), proving each slice in isolation before the next (U0).
- mode: clerk · builder window · `.live`, at 211 — chunk A on the operator's go.
