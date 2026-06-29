# frame — container model: layout as a property, not a part-type

home: `kit` (project frame, co-located) · mode: builder window · status: **FRAMED — not started; ONE decision to settle first (the dropdown question below)** · from this session's intake · relates to the pool grid→stack persistence bug

Collapse the four container *types* into a small set of container *parts* whose arrangement is a configurable, persisted property. "A container is a container; how it arranges is a setting."

## current state

`NODE_DEFS` (workbench.js) carries four separate container part-types, each its own palette entry:
- `stack` (props: gap) · `row` (gap) · `grid` (cols, rows, gap) · `dropdown` (title, gap)

So arrangement is baked into *identity* — to change a stack to a grid you'd swap the part. And the pool's layout isn't persisted: the hot-reload poll rebuilds it at the default (stack), losing a grid setting. That bug is a symptom of the same root — layout isn't a saved property of the container.

## the goal

- Palette stops exposing stack/row/grid as distinct parts.
- A container's arrangement is a **property** you set in the inspector (and that **persists** across reload).
- Folds in the persistence bug for free: if layout is a saved property, grid survives refresh.

## the open decision (settle before building)

The operator's phrasing pointed two ways: "we want container and dropdown… and those each let you set stack/row/grid or dropdown." So:

- **Option A — one part, layout incl. dropdown.** A single `container` part; its layout property is `{stack | row | grid | dropdown}`. "dropdown" is just another arrangement (collapsible). Fewest parts; but "dropdown" is behavior (collapse), not pure arrangement, so it sits oddly next to stack/row/grid.
- **Option B — two parts (clerk's lean).** `container` with layout `{stack | row | grid}`, and a separate `dropdown` part that is a collapsible container *also* carrying a layout `{stack | row | grid}` for its contents. Dropdown stays distinct because it adds *collapse + title*, not just arrangement.

Both let you drop a dropdown and nest configured containers inside it. The split is purely: **is "dropdown" an arrangement value or its own part?** Needs the operator's word.

## what it touches

- `NODE_DEFS` — replace 4 entries with 1–2 (per the decision); add a `layout` prop.
- container `build` fns (`buildContainer`) — read `layout` to arrange (stack/row/grid CSS).
- the inspector — expose `layout` as a settable field on a container.
- **persistence** — `layout` enters the saved part state (rig `persist` check must cover it).

## chunks (chunk × slice × rung)

1. **model** — add `layout` prop + collapse the part-types in NODE_DEFS (per decision). buildContainer reads layout.
2. **inspector** — layout selector on a focused container (reuse selector/binselector).
3. **persist** — layout into save/restore; a red-first rig check (set grid → reload → still grid) before the fix, so the #3 bug is the guard.

Each chunk commits separately; the rig stays the net, operator feel the gate.

## agreement (minimum-LOD glance)

- layout = persisted property, not part identity · 4 types → 1–2 parts
- dropdown = part vs arrangement: **UNSETTLED** (operator's call)
- absorbs the pool grid→stack reset bug (chunk 3, red-first)
- touches NODE_DEFS · buildContainer · inspector · persistence
- not started; settle the dropdown question, then build chunk 1
