# kit

A buildless control + signal toolkit. Three things in one folder, tied together
by a single idea — **every signal is normalized to [0,1]**:

- **a UI control library** — drop parts onto the workbench: button, toggle,
  slider, selector, pad, field, the **smart parameter**, and the **ratio system**,
  with stack / row / grid / dropdown containers. Each part emits a [0,1] signal.
- **a clock** — the "heart": a unit-circle time source with its own parameters
  (speed in Hz on a log dial, radix, phase₀, playback ×, seek) and **30 live
  readouts** (phase, cos/sin, turns, distance, the polygon point, …) — each readout
  is itself a signal source you can plot.
- **a signal workbench** — the parts, the clock, and the scope all share the [0,1]
  signal, so anything that emits can drive anything that accepts a signal. An
  output-mapping layer translates [0,1] into real units (Hz, ×, a count) for
  display and emission; the smart parameter carries the limiter, that mapping,
  drive (animation off the clock), and step.

Because every control speaks the same normalized signal, **a control is also a
signal generator** — the kit patches together like cables, and any control can
drive something outside the kit that accepts a [0,1] signal.

## run

Open `index.html` through the lattice server. The workbench loads with the parts
palette + inspector (left), the scope (center), and the clock + readouts (right):

    http://localhost:8000/<this unit's address>/kit/index.html

## layout

Plain JS + DOM — no build, no dependencies; the browser runs the source files
directly. Reusable for other projects: copy the folder. No `tsconfig` /
`package.json` — the `.unit` file is what marks a folder as one project unit.

- `dev/` — the headless verification rig + screenshots
- `docs/` — design docs (frames, incidents, the rig audit)
