# frame — kit (the UI library) — f4 — the workbench (the pivot)

address: 210 (layout·positions·work) · mode: builder window · status: **BUILDING — design canvas up, first cut** · scope: `kit` (211/kit) · folds from [[frame.kit.f3]]

The reframe that changes everything. f1–f3 built a **coder's parts catalog** — files, factories, a gallery that *shows* specimens; to use it you'd still write code. The operator is **not a coder** (tried many times, can't get in) and is a **visual/spatial thinker**: he needs to **hand-design UI by direct manipulation** — get his hands on things, move them, resize them, tune by feel. He looked at the catalog and was lost on how to get from there to *that*.

**The miss was the kind of thing, not the parts.** The atoms (button/toggle/scrub/selector/pad/field/readout/meter) are right — they become the **parts bin**. What was missing is the **editor around them**: a design surface.

## what the workbench is

Three panes (`workbench.js`, booted by `main.js`, laid out in `index.html`):

- **parts** (left) — one button per atom; click drops an instance on the canvas.
- **canvas** (center) — a dot-grid design surface. Each dropped atom is a **node**: click to **select**, drag the body to **move**, drag the corner handle to **resize**. On the canvas the parts are **inert** (pointer-events off) — you're *designing* them, not *using* them; the node frame owns the interaction.
- **inspector** (right) — the selected node's properties as live controls (x/y/w/h scrubs, two-way with canvas drag) + delete.

The principle: **design mode ≠ use mode.** On the canvas you arrange; a part's own behavior is suppressed.

## first cut (built) vs next

Built: palette · drop · select · move · resize · inspector(geometry) · delete. tsc-strict clean, serving, buildless, no deps.

Next (the real depth, operator drives):
- **per-part properties in the inspector** — label, value, range, options, etc. (a property schema per part type).
- **look** — the theme system (CSS variables + live swatches) so appearance is hand-tunable; the reskin/strip-line for portability.
- **feel** — the scrub feel knobs (precise-by-default, modifiers coarsen) surfaced per selected control.
- **use/preview mode** — a toggle that makes the designed UI *live* (parts become interactive).
- **save/recall** a design (it's just node geometry + props — serializable).
- drag-from-palette (vs click-to-add), snapping/alignment, multi-select.

## the through-line

This is the same goal all along — "play with placement," "move them around," "tune by feel," "get my hands on things." Every earlier ask was pointing here. The engine (`phase.js`) and the feel work (f2) and the vocab (f3) all still slot in — as the *parts'* behavior, look, and feel, tuned inside this surface.

## laws (carried)

direct manipulation, not code — he designs by hand · design mode ≠ use mode · the atoms are the parts bin (nothing wasted) · one atom = one job ([[one-atom-one-job]]) · buildless, no deps, self-contained ([[buildless-unit-default]]) · vocab-neutral, no tooltips · a question halts ([[questions-halt]]) · get him hands-on fast, then deepen.
