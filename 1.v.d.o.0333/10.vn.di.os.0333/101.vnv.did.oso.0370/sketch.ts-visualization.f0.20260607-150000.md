# sketch — ts-visualization — f0 — 20260607-150000

rendering. what gets drawn and how. baseline.

---

## what it is now

### the main loop: frame()
called every animation frame. advances phases, calls build, projects, draws everything. this is the heartbeat.

sequence inside frame():
1. advance phases: `ph[k] += dt · speed · rateFor(k)` for each active depth
2. call buildRaw → get raw point → project → draw
3. plot the point on the canvas (main trail + overlay)
4. draw all enabled overlays
5. call updatePanel (UI readout)

### the drawing functions

**trajectory rendering:**
- main point plotted per frame (trail builds up over time)
- hardClear: wipe canvas for fresh draw
- nrm: normalize a raw point to draw space (same transform as build())

**structural overlays:**
- drawChain: the skeleton — step-by-step construction, showing pivot points and orbit circles
- drawSkeleton1/2: simplified skeleton modes
- drawAxes: world X/Y/Z axes
- drawScaleRing: unit-radius reference circle

**measurement overlays:**
- drawBBox: bounding box
- drawCOM: center of mass marker
- drawRadiusRings: concentric circles at inner/outer radius
- drawStackedLevels: all depths superimposed (fainter for earlier depths)
- drawOrbitRefs: concentric circles at self-similar radii D·(k+1)^cycle

**shape overlays:**
- drawEllipsoid: PCA-derived ellipsoid wireframe
- drawSuperquadric: generalized ellipsoid
- drawPCA: principal axes + proportions
- drawRefSphere: reference sphere
- drawRefTorus: reference torus
- drawVectorEquilibrium: cuboctahedron wireframe

**measurement-specific overlays (from fingerprint):**
- drawCaliper: the caliper line/triangle + measurement readout
- drawMeetLocus: where two traces meet
- drawAccumFrame: accumulated rotation frame
- drawNetAxis: net rotation axis

### the LOD system
visibility controlled by "tier" opacity ranges. four tiers: data (0.90-1.0), feature (0.60-0.90), grid (0.08-0.25), annot (0.70-0.95). each tier's opacity can be set — controls which overlays are visible. this is the LOD zone system in the UI.

### the canvas
two canvases composited: main canvas (trajectory) + overlay canvas (overlays). this allows the trajectory to persist (not cleared each frame — trail accumulates) while overlays refresh.

---
