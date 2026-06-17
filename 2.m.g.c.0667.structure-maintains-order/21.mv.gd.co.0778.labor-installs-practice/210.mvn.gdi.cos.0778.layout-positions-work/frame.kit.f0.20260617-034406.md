# frame — kit (the UI library) — f0 — the initial frame

address: 210 (layout·positions·work) · mode: builder window · status: **INITIAL — scaffold + frame stood up; awaiting operator's doc** · scope: `kit` (own project folder at 211, sibling to `ts/`) · folds from: none (f0)

A new track. Three were live — **formula · beam · UI/UX** — and we switch to the UI/UX one. The formula track parks at a clean stop (bare mechanism, committed); not dropped.

## the subject

A **reusable UI/control library** the modules draw from — custom buttons, sliders, steppers, toggles, selects — so a unit's parameters become **declarative and configurable in the environment**, not hand-wired one tweak at a time. The friction it removes: every unit today hand-writes its `CONTROLS_HTML` and wires each control's `input → state → readout` by hand; the operator has to direct every little change. With the kit, a unit *declares* its params and gets controls + binding + readout for free.

## the bigger frame it sits in

The shell (`ts/`: units-bar + the `mount/frame/unmount` contract + shared `{device, controls, read, msg}`) is already a reusable dev harness. The kit is its missing **input** half. The pair is **the workbench** (equipment) — distinct from **the toys** (the modules built on it). This frame is the workbench's input half only.

## settled ground (operator, 20260617)

- **own project folder, at 211**, sibling to `ts/` — not a separate repo. One floor; the address keeps UI stuff together.
- **self-contained + dependency-free** (buildless plain-JS, JSDoc + `tsc --noEmit`) — so "reusable for other projects" = a file you copy out. Portable beats separate. One source of truth on the floor.
- **own viewer** — a project like `ts/` is viewable on its own; the kit shows its components as a gallery you interact with (see/test each control in isolation).

## open / pending the operator's doc

- **scope** — param-controls only, or controls + a cleaner harness contract? (clerk leans: param-controls first, smallest sufficient — the harness already works.)
- **the declarative shape** — what a param spec looks like (`{name, type, min, max, step, value}` → control + binding + readout), the control set, how a unit registers them.
- **name** — `kit` is a placeholder; the doc can rename.
- the operator has **a doc to start us off** — it shapes the real content here. This f0 holds the ground; the doc fills it (→ f1).

## sequencing (proposed)

1. build the param-control kit (factor what `ts`/`unit-circle` already do by hand).
2. retrofit `ts` as first consumer — proves it; per-rotation-phase + overlay controls become near-free.
3. then the beam, then every later toy draws from it.

## laws (carried)

one atom = one job — don't pack ([[one-atom-one-job]]) · buildless, no framework ([[buildless-unit-default]]) · smallest sufficient first ([[discernment-over-speed]]) · don't build on unsettled ground — settle, then build · a question halts ([[questions-halt]]).
