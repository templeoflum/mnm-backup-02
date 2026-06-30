# frame — editor · composes · zine — f0 — [live · triad blessed · awaiting build-go]

The maker: a local, hand-operated surface to arrange printable content (your own — and later, submitted) into zine pages. Page size and count stay open; placement is free-canvas plus optional presets, neither canon. This is the first build of the zine-builder. The hub and the print-export are not here.

## §1 — agreement · at a glance
- **scope = the EDITOR (compose) only.** From [[note.zine-builder-walk.f0]]: the shape splits into two surfaces; this frames the **local maker, your hands**. NOT this frame: the public hub · the deploy-system · Drive submission-intake · print-PDF export (Fork B) · Canva.
- **the model:** a **sized page** (size a param, no fixed canon) · **content atoms** (image / text block) placed, then **moved / resized / layered by hand** (direct manipulation — [[operator-builds-by-hand]]: an instrument you pick up, not a coder catalog) · **free-canvas (A) AND presets (B), no preset is canon** · **multi-page** · a **pile** to place from · **imposition** (deterministic) · **save + version** (the unit's git/fold nature).
- **stack:** buildless browser JS, file-you-edit = file-that-runs ([[buildless-unit-default]]); a unit inside the zine-builder; local-only.
- **render primitive — OPEN** (settle at slice 1): DOM vs SVG vs canvas. Lean **SVG** (vector → print-clean, hand-draggable, exportable), held loosely.
- **triad — BLESSED (operator 20260629): `editor · composes · zine`** — literal: the zine editor, composing a zine from content.
- **MVP-first:** chunk A alone is a pickup-able editor (a page, place, move by hand). Everything after extends it.

## §2 — plan · slices & rungs
status marks: ○ todo · ▸ doing · ✓ done · ⊘ blocked  — *(all ○ — proposed, not yet built)*

**chunk A — the surface & the hand**  *(the MVP loop)*
- **slice 1 — the page (sized canvas)**  ○
  - ○ render a blank page at a **configurable** size; no canon default forced. **open: render primitive — settle here.** prove: a page of given dimensions renders; changing the size param changes it.
- **slice 2 — place an atom**  ○
  - ○ drop a content element (image or text block) onto the page at a position. prove: an atom appears where placed; both kinds work.
- **slice 3 — hand manipulation**  ○
  - ○ move (drag) / resize (handles) / layer (z-order) a placed atom — the by-hand heart. prove: drag moves, handles resize, order restacks, all by mouse, no code.

**chunk B — content & the book**
- **slice 4 — the pile**  ○
  - ○ load your **own** content (image/text files) into a drawer; place **from** it. (submitted content via Drive is later — needs the bucket.) prove: the pile lists loaded files; placing from it lands on the page.
- **slice 5 — multi-page**  ○
  - ○ more than one page; add / reorder / navigate. prove: several pages, reorder, move between them.

**chunk C — efficiency & persistence**
- **slice 6 — presets (B)**  ○
  - ○ optional layout presets that place slots; free-canvas still works over them; no preset is canon. prove: applying a preset positions content; hand-placement stays free.
- **slice 7 — save + iterate**  ○
  - ○ persist a composition and reload it; prior version kept (git/fold — the unit's nature). prove: save → reload restores; an edit keeps the prior.

**chunk D — output & later**
- **slice 8 — imposition**  ○
  - ○ reading-order → print signatures, **parameterized** (scheme not fixed). prove: pages reorder into a chosen signature scheme.
- **later** *(own slices when reached):* **scatter** (aleatory themed placement of fragments) · **submitted content** (read the Drive bucket — needs the hub) · **print-PDF export** (Fork B — the swappable terminal seam).

## §3 — trace · DAG & status
```
A1 page ─→ A2 place ─→ A3 hand-manip ─┐   (MVP: a pickup-able editor)
                                       ├─→ B4 pile ─→ B5 multi-page ─→ C6 presets ─→ C7 save/iterate ─→ D8 imposition
                                       └─→ (later: scatter · Drive-submissions · PDF export [Fork B])
```
- **status:** `.live` · triad blessed (20260629) · not yet built. **Wants a word:** render-primitive call (or leave it to slice 1) · confirm scope + slice order · build-go.
- **builds on:** the kit stack ([[buildless-unit-default]]) · [[note.zine-builder-walk.f0]] (shape + tooling).
- **forks flagged:** render primitive (slice 1) · imposition scheme params (slice 8) · where scatter / Drive-submissions / PDF land (chunk D / later).
- **on bless + build-go:** build **chunk A first** (the MVP loop), proving each slice in isolation before the next (U0). The unit then moves 200 → 211.
- mode: clerk · builder window · `.live`, awaiting the operator's bless + build-go.
