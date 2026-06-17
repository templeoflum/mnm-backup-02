# frame — kit (the UI library) — f7 — auto-scope, composable layout, no wiring

address: 210 (layout·positions·work) · mode: builder window · status: **BUILDING — instrument fluid; theme/feel/save left** · scope: `kit` (211/kit) · folds from [[frame.kit.f6]]

f6 had explicit wiring (click control → display) + a flat per-zone arrange. The operator cut both: wiring is unnecessary, and one flat arrange isn't enough to build a real layout.

## changed this fold

- **Wiring removed.** The center canvas **auto-scopes the focused param**: select one (edit) or touch one (interact) and the scope plots it, staying until the next param. No wire mode, no wires. Modes are now just **edit · interact**. (`scope.setRange`/`clear` added so it tracks the param's range.)
- **Composable layout.** `stack · row · grid · dropdown` are now **droppable, nestable container parts**. Drop one into a pool (or another container) → it becomes the active drop target; controls slot in. Each configurable (grid cols, dropdown title, gap); pools arrange-configurable too. The layout is a tree you build, not one flat property.
- **Drag-reorder.** Drag any part to reorder within its container or move it across containers/pools (live sortable by hit-test). Click = select; drag = move.
- Displays dropped from the palette — the **center is THE readout** now; pools hold parameters + layout.

## the house instrument, current

```
[parts]  left pool          center canvas         right pool   [inspector]
 ctrls   ┌ stack ┐          ┌─────────────┐       ┌ grid ┐      props
 layout  │ slider│  ──────▶ │   ∿ scope    │       │ … …  │      delete
         │ ┌row┐ │  (focus) │  follows the │       └──────┘
         │ │..│ │          │  param you   │
         └ └──┘ ┘          └  touch ──────┘
```

## open / next

- **item 4** — look (theme variables + live swatches), feel (scrub knobs per control), **save/recall** (the design is nodes + props + tree order — serializable to JSON).
- **polish** — drag-from-palette; un-nest / drag-out; multi-select; focus a param without driving it (a "probe" click in interact); auto-range scopes for unbounded params (button count).

## known rough edges (named)

- drag-reorder hit-tests live; fast drags or tiny containers can misplace — re-drag.
- focusing in edit shows a flat line (parts inert); the curve appears in interact.
- a param's range drives the scope; non-ranged params (toggle/selector/button) use 0..1.

## laws (carried)

the house shape: one canvas, pools either side · auto-scope, don't wire · layout is a composable tree · direct manipulation, not code · drag to move, click to select · buildless, no deps ([[buildless-unit-default]]) · vocab-neutral, no tooltips · name rough edges ([[hold-positions-provisionally]]).
