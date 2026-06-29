# sketch — ts-overview — f1 — 20260607-150000

review of the architecture. what should change in the collapsed instrument.

---

## proposed organization

the collapsed instrument is one HTML file with 8 clearly separated sections. each section maps to one part from f0. the sections are:

### 1. DATA (constants, state, configuration)
- T object equivalent (if integrated with lattice) or standalone config
- ratio library, plane schedules, phase arrays
- all state variables in one place
- **decision needed:** standalone HTML or integrated into lattice? standalone is simpler for now. integration is a later question.

### 2. FORMULAS (trajectory generators)
- composed (the SE(4) construction — the core)
- lissajous, torus, epicyclic, simultaneous (alternatives)
- formulaPoint dispatches to the right generator
- **decision needed:** should composed be in formulas or separate? it's the core, the others are alternatives. but from the architecture's view, they all produce the same thing: a point from phases.

### 3. COMPOSITION (the construction)
- buildRaw — the 5×5 matrix iteration (subsumes 3D's 4×4)
- cascade: rateFor, ratio library, rate overrides
- proportion: self-scaling displacement, k
- phase management: ph[], advancement, beam phases
- **decision needed:** one buildRaw or two (3D and 4D)? the 5×5 subsumes the 4×4. one function, 5×5 always. 3D mode just doesn't use the w-planes. simpler.

### 4. SCOPE (measurement)
- analyzeLocus — point cloud sampling, PCA, COM, closure, symmetry
- featureAngles — angular relationships
- compositeRotation — net rotation readout
- caliper — feature distances in multiple rulers
- crossSystem — all rulers at once
- measureDense — high-res sampling for signatures
- signature snapshot — full state capture
- **decision needed:** caliper is complex (snapping, triangle mode, cross-system). keep it as a sub-section within scope? or its own section? probably sub-section — it's measurement, just a specific kind.

### 5. PROJECTION (dimension collapse)
- project4to3 — 4D viewing rotations + ortho/perspective
- rot, proj — 3D camera (yaw, pitch, zoom)
- view4 state, proj4mode
- **decision needed:** the 3D camera exists in all four source files identically. straightforward carry-forward.

### 6. VISUALIZATION (rendering)
- frame() — main render loop
- draw* functions — skeleton, axes, scale ring, bbox, COM, radius rings, stacked depths, orbit refs, ellipsoid, superquadric, PCA, VE, accumFrame, netAxis, caliper, meet locus
- hardClear, nrm, drawChain
- **decision needed:** LOD system. currently tier-based opacity (data/feature/grid/annot). keep the mechanism but drop "tier" from vocabulary — it's rendering plumbing.

### 7. UI (controls and interaction)
- updatePanel — info readout
- initScrub — scrub controls for all parameters
- initLodzone — collapsible sections
- buildOverrides — per-depth rate multiplier controls
- syncOrbitUI, syncViewUI, syncBeam2Rows
- logging: logState, logJSON, signature capture
- image save
- **decision needed:** the UI is the largest section by line count. much of it is DOM manipulation. does it need restructuring or just carrying forward?

### 8. GLUE (what connects the parts)
- the main animation loop (requestAnimationFrame → advance phases → build → project → draw → update panel)
- event listeners (resize, keyboard, mouse)
- initialization sequence
- **this wasn't in f0.** it's the connective tissue. every part is clean in isolation but something has to wire them together. that's the glue.

## proposed file structure (within one HTML)

```html
<!-- 1. STYLE -->
<!-- 2. HTML structure -->
<script>
// ═══ 1. DATA ═══
// state, constants, configuration

// ═══ 2. FORMULAS ═══
// formulaPoint, trajectory generators

// ═══ 3. COMPOSITION ═══
// buildRaw, cascade (rateFor), proportion (displacement)

// ═══ 4. SCOPE ═══
// analyzeLocus, caliper, crossSystem, signature

// ═══ 5. PROJECTION ═══
// project4to3, rot, proj, camera

// ═══ 6. VISUALIZATION ═══
// frame, draw*, overlays

// ═══ 7. UI ═══
// updatePanel, scrubs, LOD zones, logging

// ═══ 8. GLUE ═══
// animation loop, events, init
</script>
```

## decisions summary

| decision | options | leaning |
|----------|---------|---------|
| standalone or lattice-integrated? | standalone HTML / lattice view | standalone for now |
| one buildRaw or two? | 5×5 only / 4×4 + 5×5 | 5×5 only (subsumes) |
| composed in formulas or separate? | inside formulas / own section | inside formulas (it's the default formula) |
| caliper own section? | own section / sub-section of scope | sub-section of scope |
| UI restructure? | restructure / carry forward | carry forward (it works, not broken) |

## what emerged

a new part: **glue**. the connective tissue wasn't visible when looking at individual parts. it's the animation loop, the event wiring, the init sequence. small but essential — without it the parts don't talk to each other.

---
