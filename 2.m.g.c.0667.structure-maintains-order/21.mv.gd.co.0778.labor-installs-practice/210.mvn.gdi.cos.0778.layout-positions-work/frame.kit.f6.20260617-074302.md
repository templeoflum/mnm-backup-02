# frame — kit (the UI library) — f6 — the oscilloscope layout (house shape)

address: 210 (layout·positions·work) · mode: builder window · status: **BUILDING — instrument layout in; free placement retired** · scope: `kit` (211/kit) · folds from [[frame.kit.f5]]

f5's free-placement canvas felt wrong to design on, the wires were ugly, and there was no removal. The operator named the real shape: **the classic oscilloscope.** This is bigger than a fix — it's the **house layout for all the software** (operator): *one canvas, a pool of parameters on either side.*

## the house shape (operator, settled — hold as [float])

**Every app = one CENTER canvas readout + a configurable parameter POOL down each side.** Not free-floating controls on a blank surface — a structured instrument. The kit's own design surface now *is* this shape, and it's the default skeleton future apps start from.

## built this fold

- **Three zones** — `left pool · center canvas · right pool`. Each is a **configurable layout** (stack / row / grid + gap), set in the inspector when the zone is selected. Sized for a **wide, short window** (thin toolbar, compact palette/inspector, zones fill height — the operator runs it ~half height).
- **Slotting replaces free placement.** Parts drop into the **active zone** (click a zone to activate it); placement is *which zone + order*, no x/y/w/h, no resize handles. This fixes "placement feels wrong."
- **Removal** — inspector `delete` + **Delete/Backspace** on the selected node.
- **Wires** — clean **bezier curves** (subtle when idle, bright in wire mode), not the old straight ugly lines.
- Dropped: free geometry, the `region` part (zones are the containers now), move/resize.

## the diagnostics loop (unchanged, now in the house shape)

drop a slider in a side pool · drop a scope in the center · **wire** slider→scope · **interact** and sweep · watch the trace. Calibrate by eye.

## open / next

- **item 4** — look (theme variables + live swatches), feel (precise-by-default scrub knobs per control), **save/recall** a design (zones + nodes + props + connections — serializable).
- **polish** — reorder parts within a zone (drag); drag-from-palette; nested regions inside a pool; wire-delete UI; per-part value seeding for displays.
- the engine (`phase.js`) returns via wiring: a wired control→param→display is the live parameter.

## the through-line

This is the convergence point. The center canvas = where the TS formula (or any output) renders. The side pools = the parameter controls (the scrub, the feel work, eventually phase/ratio). One shape holds the formula, the kit, and everything after: **canvas + parameter pools.**

## laws (carried)

the house shape: one canvas, pools either side · direct manipulation, not code · slot, don't free-place · design/use modes (edit·wire·interact) · the atoms are the parts bin · buildless, no deps ([[buildless-unit-default]]) · vocab-neutral, no tooltips · name rough edges, don't hide them · hold the house shape provisionally until it proves out ([[hold-positions-provisionally]]).
