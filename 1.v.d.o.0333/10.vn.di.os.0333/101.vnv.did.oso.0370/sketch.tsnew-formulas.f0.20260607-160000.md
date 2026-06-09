# sketch — tsnew-formulas — f0 — 20260607-160000

the formulas toy. multiple trajectory generators feeding the same measurement.

---

## what this toy is

a standalone HTML file. the trace engine plus a formula selector. switch between trajectory generators — composed, lissajous, torus, epicyclic, simultaneous — and see them all on the same canvas, measured by the same scope. the thesis: different generators produce different forms, but the measurement apparatus is the same. composed is the default.

this is the third toy. it answers: what does the construction look like compared to known parametric forms?

## what it contains

### the trace engine + scope (from tsnew-trace, tsnew-scope)

everything from the first two toys. this toy adds the formula bank.

### formula dispatch — formulaPoint(name, phases, depth, radius)

one dispatch function. takes a formula name and the current state, returns a point.

- **composed** (default): the full SE(4) construction via buildRaw. this IS the composition — iterative matrix rotation + translation. produces a 4D point, needs projection to 3D.
- **lissajous**: sin/cos combination across axes. 3D-native. classic oscilloscope figure.
- **torus**: parametric torus surface with cascading frequencies. 3D-native.
- **epicyclic**: circles on circles (Ptolemaic). 3D-native. shows the rotational nesting directly.
- **simultaneous**: all rotations applied at once instead of sequenced. 4D. the non-iterative version of composed — reveals what sequencing does.

### the shared phase array

all formulas read the same phases[]. the cascade applies uniformly regardless of which formula is active. this means switching formulas shows what the same frequency structure looks like through different geometric constructions.

### the selector

a row of buttons (not a dropdown). composed is visually distinguished — it's not just another option, it's the primary mode. the alternatives are for comparison.

when composed or simultaneous is active: 4D mode, projection active.
when lissajous/torus/epicyclic is active: 3D mode, projection skipped.

### 3D vs 4D awareness

the toy needs to know whether the current formula produces a 3D or 4D point. if 4D: run through project4to3 (basic — the full projection toy handles the rich version). if 3D: skip projection, go straight to the 3D camera.

this is a simple flag per formula, not a complex system.

## what it does NOT contain

- no caliper — same as scope toy
- no rich projection (multi-view, n-dimensional stubs) — that's tsnew-projection
- no overlay system — no reference shapes, no structural overlays
- no formula extensibility — five formulas, hardcoded. adding a sixth means editing the dispatch. designing for extensibility is premature with five formulas.

## inputs

everything from scope toy, plus:

| control | what it does |
|---------|-------------|
| formula selector | switch between composed / lissajous / torus / epicyclic / simultaneous |

## outputs

- the trail changes character as you switch formulas
- the scope readout updates to reflect the current formula's form
- composed produces the richest structure (nested, self-similar)
- lissajous/torus/epicyclic produce recognizable known shapes
- simultaneous shows what composed looks like without sequential ordering

## decisions needed

1. **trail behavior on switch**: clear the canvas when switching formulas? or overlay the new trail on top of the old? leaning toward clear — switching formulas changes the whole form, an overlay would be confusing. but maybe a "compare" mode where two formulas draw simultaneously in different colors? defer to assembly.

2. **scope measurement on switch**: re-trigger measurement immediately? yes. switching formulas changes the form, the scope numbers should update.

3. **4D projection in this toy**: basic project4to3 is needed for composed and simultaneous. how basic? leaning toward orthographic only with fixed w-viewing angles. the full projection toy handles the rich version.

## dependencies

- **depends on**: tsnew-trace (engine), tsnew-scope (measurement)
- **blocks**: tsnew-assembly (the formula selector becomes part of the full UI)

## what "done" looks like

- open the file, see composed running by default (trail + readout)
- click lissajous → canvas clears, new trail appears, scope readout updates
- the same ratio/depth/k parameters produce visibly different forms across formulas
- composed at depth 3 with 3D schedule → torus-like form. lissajous at same parameters → lissajous figure. visually distinct, same frequencies.
- simultaneous shows a simpler form than composed — the sequencing creates structure that simultaneous doesn't have
- scope numbers differ across formulas (different eigenvalue ratios, different extents)

---
