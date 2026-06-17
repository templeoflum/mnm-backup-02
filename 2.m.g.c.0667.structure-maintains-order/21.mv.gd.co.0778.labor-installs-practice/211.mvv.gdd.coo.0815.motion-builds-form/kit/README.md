# kit

A reusable UI/control library the modules draw from — buttons, sliders, steppers,
toggles, selects — so a unit declares its parameters and gets the controls, the
state binding, and the readout for free. The input half of the workbench.

Plain JS + DOM, **no build, no dependencies**. The browser runs the source files
directly. Self-contained on purpose: "reusable for other projects" = copy the
file out. (No `tsconfig` / `package.json` — those are the TS project's own
dev-env choices, not what makes a folder a project; the `.unit` file is.)

## run

Open `index.html` through the lattice server — the gallery shows each component
on its own to see and interact with in isolation:

    http://localhost:8000/<this unit's address>/kit/index.html

## status

Scaffold only. The component set and the declarative param shape come next, per
the operator's doc. See `frame.kit.f0` at 210.
