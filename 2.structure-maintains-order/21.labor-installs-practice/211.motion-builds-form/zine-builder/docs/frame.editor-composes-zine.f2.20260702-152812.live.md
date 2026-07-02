# frame — editor · composes · zine — f2 — [live · reshaped ARTIFACT-FIRST (operator, 20260702) · editor stands complete through story+window · M1 print path ▸]

folds [[frame.editor-composes-zine.f1]] (the slice era — chunks A–F, all built + eye-confirmed; its §2 holds that detail) which folds [[frame.editor-composes-zine.f0]] (frozen spec). **Reshape reason:** fifteen slices in, no zine had come out the far end. Feature-first flips to artifact-first: milestones end in something printable, real use writes the next queue, the eye batches once per milestone.

## §1 — agreement · at a glance

- **scope unchanged:** the editor + the light print path. NOT here: the public hub · deploy · Drive intake · full print-PDF export (Fork B) · Canva.
- **what stands (all eye-confirmed):** page/atoms/hand-manip · pile + local-folder pool · leaf model (C1/L/C2) · presets · save/open (project v2 — stories) · delete · undo/redo · imposition (saddle-stitch, non-destructive) · wrapped text (measured tspans) · story + editor window (content/layout split, live reflow) · quick-edit. Reference shot `editor.f1.20260702-145654.png` blessed.
- **stack unchanged:** buildless browser JS · SVG · kit controls · node proofs + windowless captures stay (they catch real bugs cheap) — batched per milestone, not per edit.
- **method (the reshape):** vertical increments — every milestone exits through a printed artifact; the NEXT milestone's queue is written by the artifact, not scheduled ahead; one operator eye-sitting per milestone.
- **MVPoC acceptance (unchanged, now M1's exit):** an 8pp saddle-stitch zine — cover with title+image, interiors mixing wrapped body text + images — imposed, **printed, folded, reads 1→8**.

## §2 — plan · milestones
status marks: ○ todo · ▸ doing · ✓ done

**M1 — hold a zine**
- **m1.1 — light print path**  ✓ BUILT (20260702) · capture-confirmed (`dev/shots/
  print-m1.png`, print-media emulation) · operator eye = m1.2 itself — a `print` button
  (swings into impose view if needed) stages a hidden print root: one sheet side per
  printed page, true physical size (`width="11in"` etc. + `@page { size; margin: 0 }`),
  artifact CLEAN (watermark / fold line / sheet edge / blank-dashes are preview-only;
  `sheetSideSVG` grew `phys`/`clean` opts). Readout carries the 100%-scale + duplex
  instruction; flip edge settles empirically in m1.2. **The shot caught a real one:**
  `.page-bg2` white was scoped to `.impo` → print pages rendered SOLID BLACK (the
  atom-box scoped-fill trap, third occurrence) — unscoped, print-media re-proven white.
- **m1.2 — the acceptance run**  ⊘ PARKED (operator, 20260702, same day) — "I don't need
  to print it to know what I'd notice." The physical walk waits; the design side is the
  pressing front. What replaced it:
  - **canonical test zine** (operator-designed): 4pp, one preset per side — C1a single ·
    C1b 2 cols · C2a thirds · C2b grid 2×2, every slot's story naming its leaf + preset +
    slot (self-identifying in any view or print). Tracked as `dev/fixtures/
    zine.test-base.f0.json`, regenerable via `dev/make-test-zine.mjs` (deterministic).
  - **parked spec — duplex calibration** (operator idea, logged for the print season): a
    base double-sided calibration pattern printed and held up to the light; the visible
    misalignment is read off and INPUT into the editor, which computes the per-printer
    offset so duplex printing comes out symmetrical. Lives with print refinements (M3+)
    until the physical season reopens.

**M2 — the fix list the artifact writes** — REVISED (operator, 20260702): the artifact is
evaluated IN-APP, not on paper; the reader view replaces the physical walk as the
design-evaluation instrument.
- **m2.1 — reader view**  ✓ (20260702) · capture-confirmed (`dev/shots/read-view.png`)
  · **operator eye: BLESSED same day** — a `read` toggle beside impose: the zine in READING order — front cover
  alone on the right, facing spreads (even page left), back cover alone on the left. Flip
  by clicking a stage half, arrow keys, or the leaf chips (navigate syncs into the view).
  Read-only (atoms inert); impose/read/print modes exclusive. Rig: cover `C1a · 1/5`,
  flip → `C1b | L1a · 2/5`, zero errors.
- **m2.2 — type controls**  ✓ (20260702, old slice 13) · capture-confirmed
  (`dev/shots/type-m22.png`) · **operator eye: BLESSED (size first pass; fonts after the
  dead-font fix, same day)** — font + size on the selected text frame, in
  the story panel: kit selector `serif · sans · mono` (three families for the narrow
  panel; atoms store the full CSS stack so richer pickers later cost no data change) +
  kit size scrub (page units, floor 0.02, NO ceiling — [[dont-hardcap-configurable-inputs]]).
  One undo per frame-session; wrap re-measures under the new family (rig: mono + 5 bumps
  → 13→24 lines, scale transform tracks size/64, flows through to the imposition preview).
  **Dead-font bug (operator-caught, 20260702):** size worked, family never rendered — the
  `.atom-text-t` CSS rule carried `font-family: Georgia`, and any CSS rule silently beats
  an SVG presentation ATTRIBUTE; my rig asserted the attribute, a false green, and I
  rationalized the shot's glyphs. Fix: `DEFAULT_FONT` moved into atom.js, the attribute
  always emitted, the CSS rule stripped to fill-only; **rig now asserts
  `getComputedStyle().fontFamily` — the rendered truth, never the attribute.**
- **m2.3+ — the design queue**  ○ — written by flipping the canonical test zine (and real
  compositions) in the reader. Candidates (not presumed): margins/safe-area · image
  handling · richer font stacks.

**M3+ — pulled, not scheduled**  ○ — image play/effects (Resolume-style) · generative
construction (its own MVPoC) · print refinements / full PDF export (Fork B) · scatter ·
Drive/hub. Each waits for a zine that wants it.

## §3 — trace · DAG & status
```
m1.1 print ✓ · m1.2 acceptance ⊘ parked ─→ m2.1 reader view ▸ (eye) ─→ m2.2+ design queue ─→ M3+ pulled work
```
- **status:** `.live` · f2 opens with the editor mechanically complete; the whole chain
  compose → impose → print → fold → read is unwalked past "impose" — m1.2 walks it.
- **builds on:** f1 (all mechanics + incident history) · [[operator-builds-by-hand]] ·
  [[checks-are-a-net-not-a-gate]].
- mode: clerk · builder window · at 211 — M1 underway on the operator's word (20260702).
