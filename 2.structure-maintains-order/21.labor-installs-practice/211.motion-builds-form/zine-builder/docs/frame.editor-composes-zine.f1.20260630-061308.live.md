# frame — editor · composes · zine — f1 — [live · A–E + pool(4b) + imposition(8) + chunk F: wrap(11) + edit(12) + leaf(14) + story(15) ALL EYE-CONFIRMED 20260702 · ref editor.f1 blessed · next: dev-plan re-look (operator), then 13 type]

folds [[frame.editor-composes-zine.f0]] (frozen: the settled spec at build-go — triad blessed, all ○). f0 was the source of truth and stays it; build-tracking lives here in f1.

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
- **slice 4b — local-folder pool**  ✓ DONE · pool-proof 4/4 · tsc clean · eye-confirmed 20260630  *(the first connected provider, [[note.pool-and-portability.f0]])*
  - ✓ The pile gains a **second source provider**: `src/pool.js` `folderKind` (pure, classify a folder entry by extension → image/text/skip; proof 4/4). `index.html`: a feature-detected **'load folder'** kit button → `showDirectoryPicker()` reads the picked folder's image/text files into the **same pile** (upload + folder funnel through one `addFile` reader). The editor never knows the backend — Drive later rides this seam. Chromium + secure context (https/localhost); top-level files only (no recursion, v1).
  - ✓ **operator eye (20260630):** in Chrome — folder loads, files appear in the pile, placing works.
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

**chunk D — output**
- **slice 8 — imposition**  ✓ DONE · impose-proof 5/5 · eye-confirmed 20260630  *(first scheme = saddle-stitch booklet, operator 20260630; engine parameterized so mini-zine / n-up slot in later. NON-destructive — a view over the reading-order pages, not a reorder. Export stays Fork B / later.)*
  - ✓ **rung 1 — the map engine** (pure): `src/impose.js` `impose(pageCount, scheme)` → sheets `[{front:[l,r], back:[l,r]}]`, slots = 0-based page index or null (blank padding to ×4). Saddle-stitch formula, 0-based sheet k: front `[P-1-2k, 2k]`, back `[2k+1, P-2-2k]`. `impose.proof.js` 5/5 (known 8pp arrangement · every page once · short-pad · empty/quad · input guards). tsc clean.
  - ✓ **rung 2 — the preview view**: an **'impose' toggle** (new output group) renders the S sheets (front+back), each side a 2×-wide sheet with its two source pages' atoms drawn in left/right halves (nested SVG viewports + `atomSVG`), a dashed fold line, and a **faint page-number watermark** (added so the fold order reads at a glance — preview aid, not on the artifact; **blessed, operator 20260630**). `pages` untouched. self-cap (`dev/shots/impose.png`): 8pp → 2 sheets, [8|1][2|7]·[6|3][4|5], atom lands in page 1's half.
  - ○ **operator eye:** an 8-page zine → impose → 2 sheets, front [8|1]/back [2|7] · front [6|3]/back [4|5]; print-fold-staple reads in order.
**chunk F — text (authoring)**  *(THE MVPoC now: pipeline-first → produce a full basic test zine. operator 20260630. Acceptance: an 8pp saddle-stitch zine — cover w/ title+image, interiors mixing wrapped body text + images — imposed, printed, folded, reads 1→8.)*

> **RESHAPE (operator 20260630):** text splits **content vs layout**. The *story* (full text) is edited in a **separate editor window** where you see all of it; the page text box is a **frame** — a viewport onto the story (clipped). The frame handles wrapping/positioning; the story handles content. **MVPoC line drawn at single-frame + window** (lean agreed): one story → one frame, edited in the window. **Threaded flow** (link frames so one story distributes across several boxes/pages · point a story at a file) is the NEXT increment — it IS the first piece of the deferred generative-distribution MVPoC, so pulling it in later is deliberate, not free.
- **slice 11 — wrapping text**  ✓ DONE · atom-proof 11/11 · eye-confirmed editor + preview 20260630 — text atoms render as word-wrapped SVG `<text>`/`<tspan>`, measured by canvas at render time (`wrapLines`, pure), clipped to the box. Renders crisp in BOTH the editor and the imposition preview (64px master scaled by an SVG `<g>` dodges small-font rasterization; preview halves use `<g transform>`+clipPath, no nested `<svg>`).
  - **the "black box" root cause (20260630):** the long-standing black box in the preview (seen since slice 8, blamed on text/foreignObject) was actually `.atom-box`'s `fill:none` being **scoped to `svg.page`** — so the box rect defaulted to BLACK fill in the preview's `sheet-svg`. It was never the text. Unscoped `fill:none`; the editor keeps its guide stroke. (foreignObject was still genuinely unfit — separate issue — so tspans remain the right render.)
- **slice 12 — in-place editing**  ✓ DONE · eye-confirmed 20260630 · **SUPERSEDED as primary by the story+window model (slice 15)** — kept as a quick-edit; the overlay/commit/undo mechanics + `pointer-events:all` carry over. (Was: double-click a text box → `<textarea>` overlay → type → commit on click-away. Double-click detected manually by atom-id+timing since mousedown re-renders break native `dblclick`.)
- **slice 13 — type controls**  ○ — font + size on the selected text frame, via kit controls (a font selector + a size scrub). one default readable font is the floor; the picker is the bonus. (after the story/frame model settles — 15.)
- **slice 14 — LEAF MODEL** *(revised 20260701 from the 4-cover role model; naming settled — [[note.leaf-model.f2]])*  ▸ BUILT · pagetype-proof 8/8 · tsc clean · capture-confirmed · operator eyed the model (C2 side-order fix, below) · **operator re-eye pending** — a zine is a stack of **leaves** (a sheet = 2 sides; suffix `a`=side met first on opening, `b`=second — outer/inner *flips* between covers, so the outer cover is `C1a` front / `C2b` back). Default = **2 cover leaves C1·C2**; `+ leaf` / `− leaf` add/remove an interior leaf (both sides together, interior only, floor = 2 cover leaves); nav = **one chip per leaf** (`C1 [a|b] … C2 [a|b]`, current side lit); move reorders the whole current interior leaf. Interior sides carry the **reader page numbers** (`L1a`=page 1…); covers carry none. Imposition watermark reads the **leaf address** (`C1a`/`L1a`). Two coordinate systems kept separate — leaf-address (imposition slot) vs page# (reading sequence) — imposition is the map; `pagetype.js` pure-derived, `impose.js`/`project.js` untouched. Capture: default `C1·C2`, 8pp stack `C1(ab) L1(ab) L2(ab) C2(ab)` reading straight `C1a..C2b`, fold `[C2b|C1a][C1b|C2a] · [L2b|L1a][L1b|L2a]`, no console errors. **Reference shot `editor.f0` now stale (pre-leaf layout) — awaits operator re-bless.**
- **slice 15 — story + editor window**  ▸ BUILT (20260702) · story-proof 5/5 + project-proof 6/6 (incl. v1 migration) · capture-confirmed (`dev/shots/story15.png`) · eye-confirm pending — **content/layout split landed**: `src/story.js` (pure: `resolveText` w/ legacy fallback · `nextStoryId` · `gcStories`); stories live beside pages in the model + project doc (**v2**; v1 files migrate on open: atom text → story, atom carries `storyId` only); placing/preset text frames adopts their text into a fresh story (1 story ↔ 1 frame); **story panel** on the right opens when a text frame is selected — full text unclipped, typing writes the story and the page frame reflows LIVE (one undo per typing session); slice 12's overlay kept as quick-edit, now story-backed; delete/leaf-removal GC orphan stories; undo/save/open carry stories. Capture: panel `frame a1 · s1`, 211 chars → 13 tspans live, imposition preview renders story text, zero page errors.
  - ✓ **operator eye (20260702): "it all worked."** Slice 14's re-eye landed the same
    sitting; the stale reference re-blessed → **`editor.f1.20260702-145654.png`** (covers
    leaf model + story panel). Slices 14 + 15 both stand eye-confirmed.
  - **deferred (next increment — the generative-distribution bridge):** **threaded flow** — link N frames so one story distributes across them + across pages; **point a story at a file** (the file is the source, same swappable-provider idea as the pile).
- **render fork — RESOLVED to B (measured tspans), 20260630.** Tried **(A) `<foreignObject>` + HTML** first (smooth native editing, lean). Editor render worked, but it **breaks in the imposition preview**: Chromium rasterizes foreignObject at screen resolution while laying out at local px, so any real scale transform (which the preview/print inherently apply) garbles the text to a black blob. Diagnosed + tried 5 variants (nested svg · g-transform · css-transform · full-size + css-shrink · clipPath) — all broke. So A's deferred downside surfaced in the PREVIEW, not later in PDF. **→ (B) measured `<tspan>` lines**: pure SVG, scales perfectly everywhere (editor · preview · print · PDF). Wrap computed via canvas `measureText` at render time (browser). Editing (slice 12) = a positioned overlay textarea committing to the model — still smooth (type in a box over the atom, re-renders on commit), just not live-wrapping while typing.
- ○ **operator eye:** type a paragraph into a box — it wraps; resize the box — it reflows; change font/size; survives save/open + undo; shows correct in the imposition preview.

**later** *(own slices/chunks when reached):*
- **image play / effects** *(operator want, 20260629/30)* — interactive transforms: **stretch · clone · mirror · color-shift / distort** (Resolume linear-cloner-style) — fun design moves on placed images. Its own chunk.
- **generative zine construction** *(operator 20260630 — its OWN MVPoC, after the basic builder)* — a distribution + proportion grammar so a composition auto-adapts across impositions; cross-page text auto-flow is its first wedge. Needs the builder producing zines first.
- **the MVPoC's output half** — a **light print path** (browser-print the imposition at true size, fold-and-staple) — framed when we build it; full **print-PDF export** is Fork B (the swappable terminal seam).
- **scatter** (aleatory themed placement of fragments) · **submitted content** (read the Drive bucket — needs the hub).

## §3 — trace · DAG & status
```
A1 page ─→ A2 place ─→ A3 hand-manip ─┐   (MVP: a pickup-able editor)
                                       ├─→ B4 pile (+4b folder) ─→ B5 multi-page ─→ C6 presets ─→ C7 save/iterate ─→ D8 imposition ─→ F11 wrap ─→ F12 edit ─→ F13 type
                                       │                                                                              (E9 delete · E10 undo/redo span the editor)
                                       └─→ (later: image-effects · generative construction · light print path / PDF [Fork B] · scatter · Drive)
```
- **status:** `.live` · triad blessed · SVG settled · **built & eye-confirmed: chunks A–E (slices 1–10 — the editor MVP + delete + undo/redo), the local-folder pool (4b), and imposition (slice 8, saddle-stitch, non-destructive).** The editor is a usable hand-operated zine maker; imposition previews the fold. **MVPoC now = chunk F (text authoring): editable wrapping text → produce a full basic test zine.** Generative construction is a separate later MVPoC (operator 20260630).
- **eye-check rig:** `dev/_cap.mjs` — windowless capture of the rendered editor; run before declaring any UI slice done ([[eye-the-ui-before-done]]).
- **builds on:** the kit stack ([[buildless-unit-default]]) · [[note.zine-builder-walk.f0]] (shape + tooling).
- **forks flagged:** ~~render primitive~~ → **SVG (settled)** · ~~imposition scheme~~ → **saddle-stitch first (settled)** · **text render: A (foreignObject) REJECTED — breaks under preview/print scaling; → B measured tspans + overlay editing (slice 11)** · where light-print / PDF / scatter / Drive land (later).
- **build order:** chunk-by-chunk, each slice proved in isolation (U0) before the next; frame before build (210). chunk F (text) on the operator's go.
- mode: clerk · builder window · `.live`, at 211 — chunk F (text) framed, render fork open.
