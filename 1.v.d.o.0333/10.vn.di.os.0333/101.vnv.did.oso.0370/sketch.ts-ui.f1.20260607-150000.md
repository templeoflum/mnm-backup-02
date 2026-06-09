# sketch — ts-ui — f1 — 20260607-150000

review. proposed changes.

---

## what should stay
- scrub controls. the drag-to-change pattern works well. no reason to change the interaction model.
- info panel with full readout. the dense information display is what makes the instrument a measurement tool, not just a visualization.
- state capture (log, JSON, image). essential for recording findings.
- keyboard/mouse interaction. standard, working.
- per-depth rate overrides. the one UI element that produces real shape change.

## what should change

### LOD zones → overlay groups
per visualization sketch: replace LOD zones with overlay group toggles. each group (structural, extent, shape, reference, measurement) is a collapsible section with individual overlay checkboxes. simpler than the tier/depth opacity system.

### naming in UI
- "level" → "depth" throughout all labels and readouts
- "beam" → "trace" in all UI text
- "normalize" → "compress" in checkbox labels
- "fingerprint" → "signature" in capture buttons
- these are display text changes, not mechanism changes

### panel organization
the info panel (updatePanel) dumps everything into one column. in the collapsed instrument, organize by scope sections:

1. **construction**: depth, cycle, radius, k, ratio
2. **extent**: bbox, rmin/rmax, center
3. **shape**: principal axes, ellipsoid type, symmetry
4. **dynamics**: net rotation, closure, feature angles
5. **caliper**: distance, chart, distortion, cross-system (when active)
6. **trace meeting**: separation, locus (when two traces active)

each section collapsible. matches the scope's internal organization.

### formula selector
currently a dropdown. in the collapsed instrument, could be a segmented button row (like the mode selector in the spline instrument). composed is the default, highlighted differently from the alternatives.

**decision needed:** visual weight. composed is the core, the others are references. the selector should reflect this — composed isn't just another option, it's the primary mode. alternatives are for comparison.

### the deep-depth UX problem
at depth > 10, the instrument becomes hard to use. rates are microscopic, the form is enormous, manual timebase adjustment is needed. the findings note this as an open question.

**decision needed:** auto-adapt timebase to depth? or provide presets? or just document the manual process? this is a real usability gap. not blocking the rebuild but worth flagging.

## summary
UI is the largest section by line count but the least structural. main changes: naming, panel reorganization, LOD→overlay groups. no mechanism changes. the deep-depth UX problem is real but separate from the rebuild.

---
