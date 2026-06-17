# frame — kit (the UI library) — f5 — the bench fills in

address: 210 (layout·positions·work) · mode: builder window · status: **BUILDING — design + diagnostics bench working; theme/feel/save left** · scope: `kit` (211/kit) · folds from [[frame.kit.f4]]

f4 stood up the workbench spine (parts · canvas · inspector · edit/interact). f5 builds the operator's "all but 4" — the three layers that make it a real UI design + diagnostics bench.

## built this fold

**1. Per-part properties.** Parts are now **schema-driven**: each carries `props` (defaults) + `fields` (an inspector schema). Select a node → the inspector shows its editable properties (slider: label/min/max/value/step; selector: options; region: arrange/gap; …). Editing a prop **rebuilds the live atom**. The property editors are the kit's own controls (dogfooding). Each node keeps its `props`, so edits persist.

**2. Layout regions + slotting.** A **`region`** container part. Drop it, set its `arrange` (row/stack/grid) + `gap` in the inspector. With a region **selected**, adding a part **slots it inside** — the part flows per the arrangement instead of free-floating. Regions stay interactive (children selectable); slotted nodes lose move/resize (the region arranges them), keep select/property/delete. This is the configurable layout editor — the layout atoms made first-class.

**3. Scope + wire mode (the diagnostics bench).** `scope.js` — a rolling value-over-time plot (samples each frame, so a held value is a flat line, a swept one a curve). **wire mode**: click a control, then a display → connects `control.out → display.sink` (via a `binding`); SVG lines draw the wires. Flip to **interact** and drive the control — the wired scope/meter/readout shows the live signal. Each node carries an `out` binding (its value) and an optional `sink` (displays).

Toolbar is now **edit · wire · interact**. tsc-strict clean, buildless, no deps, serving.

## the diagnostics loop (what it's for)

drop a slider + a scope → **wire** the slider to the scope → **interact** and sweep the slider → watch the trace. Calibrate and tune a control's behavior by eye. That's the bench the operator asked for.

## open / next (item 4 + polish)

- **look (theme)** — CSS variables + live swatches; the reskin/strip-line for portability.
- **feel** — the precise-by-default scrub knobs surfaced per selected control.
- **save/recall** a design — it's just nodes (type · geometry · props) + connections; serializable.
- **polish** — drag-from-palette (vs click-to-add) + drop-into-region by position; snapping/align; multi-select; un-slot; wire delete.

## known rough edges (first cut, named not hidden)

- slotting targets the **selected region** (no drag-to-drop-into yet); no un-slotting.
- region sizing vs slotted-child overflow is naive; resize a region if children clip.
- wires connect control→display only; no wire deletion UI yet (delete a node clears its wires).

## laws (carried)

direct manipulation, not code · design/use modes (edit·wire·interact) · the atoms are the parts bin · one atom = one job ([[one-atom-one-job]]) · buildless, no deps, self-contained ([[buildless-unit-default]]) · vocab-neutral, no tooltips · name rough edges, don't hide them · a question halts ([[questions-halt]]).
