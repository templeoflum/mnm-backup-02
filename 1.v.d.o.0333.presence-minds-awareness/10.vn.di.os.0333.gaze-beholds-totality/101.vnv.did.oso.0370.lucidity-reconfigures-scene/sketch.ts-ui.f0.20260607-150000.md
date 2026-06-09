# sketch — ts-ui — f0 — 20260607-150000

controls, interaction, info display. baseline.

---

## what it is now

### the info panel: updatePanel()
~200 lines. reads meas.* and displays:
- current depth/cycle count
- radius, outer radius, hole ratio
- principal axes (PCA eigenvalues + vectors)
- center (COM) position + relative magnitude
- net rotation angle + axis
- closure measure
- feature angles (spin vs world, PCA vs world, PCA vs spin)
- caliper readout (distance, chart coordinates, distortion)
- cross-system readout (all rulers compared)
- trace meeting analysis (when two traces active)

### scrub controls: initScrub()
generic scrub widget. drag left/right to change a value. each scrub has: key, step, min, max, snap, integer flag. used for all continuous parameters: speed, timebase, radius, k, displacement, ratio, growth, render scale, zoom, etc.

### LOD zones: initLodzone()
collapsible sections in the UI. each section has a depth scrub (0-3, controls tier opacity). sections: 0 summary, 1 construction, 2 projection, 3 trace, 4 measurement, 5 overlay, 6 reference.

### per-depth rate overrides: buildOverrides()
creates a row of scrubs, one per active depth. each scrub sets rateOverride[k]. visual indicator when overridden (highlighted). right-click clears override.

### beam2 controls: syncBeam2Rows()
shows/hides trace 2 parameter rows (own ratio, k, radius, displacement). only visible when trace 2 is enabled in independent mode.

### orbit/view controls
- axisClick: snap to axis-aligned views (X, Y, Z, isometric)
- syncOrbitUI, syncViewUI: sync UI state with camera state
- applyViewAxes: apply view direction to yaw/pitch

### state capture
- logState: captures full state as TSV row (tab-separated values)
- logJSON: exports current configuration as JSON
- signature capture: full measurement snapshot
- saveCompositeImage: exports canvas as PNG

### interaction
- keyboard: depth change (arrow keys), speed change, view snaps
- mouse: drag to rotate view, scroll to zoom
- resize handler

---
