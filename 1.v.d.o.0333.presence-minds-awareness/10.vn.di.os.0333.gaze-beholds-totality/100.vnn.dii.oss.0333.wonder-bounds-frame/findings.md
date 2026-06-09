
## Self-similarity verified to L19 (proportional.html)

The self-scaling proportional-hole rule **d = k·(k+1)^(C−1)·D** (k=2) is confirmed self-similar at least to **level 19, cycle 9**. Logged snapshot:

| metric | value | reading |
|---|---|---|
| holeRatio | 0.3505 | same ~0.35 as L7 — stable |
| outerErr | 0.993 | predicted 1,574,640 vs measured 1,563,469 — within 0.7% |
| comRel | 0.0099 | center still at origin, no drift |
| pcaR1 / pcaR2 | 0.972 / 0.058 | odd-level flat-ring signature, on pattern |

The hole-ratio creep (0.333 → 0.350) has **plateaued** — a fixed sampling-floor offset, not runaway drift. The earlier "breaks at L9" was an undersampling artifact of the throttled 600-point live analyzer, now corrected by dense logging.

### Sampling-strategy finding
At L19 the outer radius is ~1.5 million vs the seed's 80 — four-plus orders of magnitude — and the innermost rotation turns at (1/π)^18 ≈ 6×10⁻¹⁰ of the outer rate. The fine, *legible* structure evolves almost infinitely slowly relative to the gross motion. So the correct viewing strategy at deep levels is **low speed + enormous timebase**: timebase takes finer steps that resolve the slow inner structure, whereas cranking speed computes huge fast outer sweeps and grinds to a halt. This is a direct consequence of the geometric rate cascade — the instrument behaves exactly as the math demands.

**Open question:** auto-scale timebase (and/or speed) with level, so deep forms are legible by default instead of requiring manual extreme settings?

## L8 time-variation: the form breathes (it doesn't break)

Two snapshots of the SAME config (L8, cycle 4, k≈2.94) at t=260 and t=522 (user log):

| metric | t=260 | t=522 | reading |
|---|---|---|---|
| rOuter | 5095.9 | 5099.0 | constant (envelope stable) |
| holeRatio | 0.4934 | 0.4938 | constant (hole proportion holds) |
| outerErr | 0.998 | 0.999 | ball-formula accurate (self-scaling intact) |
| comRel | 0.0104 | 0.0060 | small, near origin |
| pcaR1/R2 | 0.515/0.495 | 0.550/0.533 | **moved** — anisotropy breathing |
| netDeg | 132.1 | 63.9 | **moved** — orientation in motion |

**Finding:** at higher levels the gross form (size, hole, envelope) is STABLE, but PCA shape-ratios and net-rotation angle are genuinely TIME-VARYING. The form is a slightly oblate (pcaR≈0.5/0.5, not isotropic 0.577) near-sphere that *breathes and reorients* as the trajectory sweeps. The apparent "drift from concentric iteration" at high levels is NOT a breakdown of the construction — it is this real, ongoing motion, now visible for the first time via the geometric skeleton overlay. The clean concentric look at LOW levels is because too few rotations exist for the anisotropy to develop. Correction to an earlier drift hypothesis (frame-misalignment): averaged over phases the per-slot orbit ratios are stable (period-4, ~constant), so the iteration is clean on average; the visible motion is instantaneous wobble + reorientation, which is intrinsic, not error.

## VE / cuboctahedron alignment + the projection-orientation observation (2026-05-31)

**Verified (the L1 VE-touching):** the L1 orbit circle passes EXACTLY through 4 of the cuboctahedron's 12 vertices — at θ=45°,135°,225°,315° the point sits on VE vertices (±1,±1,0). NOT a coincidence: the circle is in the XY plane and the cuboctahedron's XY-plane vertices are the 45° diagonals. The construction's SCHED rotates in the 3 coordinate planes (XY,YZ,XZ), which are exactly the 3 planes whose diagonals define the cuboctahedron's 12 vertices. So **the VE is the natural symmetry frame of the 3-coordinate-plane rotation scheme** — a real structural relationship, not arbitrary.

**Tempered (NOT an all-levels proportionality):** only the FIRST, un-displaced rotation's circle is origin-centered and hits the VE vertices. Every later orbit circle has a pivot offset from origin (43, 36, 62… units), so it lies in a coordinate plane but is shifted and does NOT pass through the origin-centered VE vertices. So the VE-vertex-touching is an L1 (pristine unit circle) phenomenon. It is a SYMMETRY relationship (angular), distinct from the verified RADIAL self-similar proportionality ((k+1)× hole scaling). Two different structures: one radial/scaling (verified keystone), one angular/symmetry (L1-clean only). Retracted the stronger "another dimension of proportionality threading all levels" reading — data doesn't support it.

**VE orientation for viewing:** axis-aligned orientation (4-fold/square face toward Z) collapses to a flat diamond+square from the Z view. Oriented down a 3-FOLD axis (body diagonal (1,1,1)→+Z), the Z view shows the FULL cuboctahedron: hexagonal silhouette, all 12 vertices distinct, every 30° (6 outer + 6 inner). This is now the VE's resting orientation in ellipsoid.html.

**OPEN / live intuition (unverified):** user feels a pull that the 3-fold/4-fold orientation that "lets us see the form" points at the UNIFIED PROJECTION RULE — i.e. that iteratively folding/orienting a projection space (choosing which symmetry axis faces the viewer) is part of the Stage-2 projection question. Framing to test, NOT a claim: is there a principled orientation/fold per level that makes the form's structure legible, and does that relate to the immerse-vs-project Stage-2 distinction? Connects to: the offset-pivot question (do the offset orbit pivots fall on any regular angular lattice?) — that's the concrete checkable next step, distinct from VE-vertex-touching which we already showed fails past L1.

## Ellipsoid shape sequence across levels — period-2 oscillation, ratio-independent (2026-05-31)

**Setup:** measured the PCA ellipsoid (covariance of the whole point cloud, via incommensurate Weyl
sampling) at each level L=1..12. Anisotropy = r1/r3 (largest/smallest normalized principal radius).

| L | aniso | r1 | r2 | r3 | shape |
|---|---|---|---|---|---|
| 1 | ∞ | 0.707 | 0.707 | 0.000 | planar (the seed circle) |
| 2 | 1.41 | 0.707 | 0.500 | 0.500 | prolate |
| 3 | 3.08 | 0.689 | 0.689 | 0.224 | oblate |
| 4 | 1.35 | 0.689 | 0.512 | 0.512 | prolate |
| 5 | 3.89 | 0.696 | 0.696 | 0.179 | oblate |
| 6 | 1.37 | 0.696 | 0.508 | 0.507 | prolate |
| 7 | 4.10 | 0.697 | 0.697 | 0.170 | oblate |
| 8 | 1.38 | 0.697 | 0.508 | 0.506 | prolate |
| 9 | 4.12 | 0.697 | 0.697 | 0.169 | oblate |
| 10 | 1.37 | 0.697 | 0.507 | 0.507 | prolate |
| 11 | 4.12 | 0.697 | 0.696 | 0.169 | oblate |
| 12 | 1.38 | 0.697 | 0.509 | 0.505 | prolate |

**Verified pattern:** the ellipsoid shape **strictly alternates by parity** — even levels are PROLATE
(one long axis, two short ≈ [0.697, 0.508, 0.506], aniso → ~1.37), odd levels (≥3) are OBLATE (two
long axes, one short ≈ [0.697, 0.697, 0.169], aniso → ~4.12). It is **period-2 with convergence**:
both parities lock onto fixed limiting shapes by ~L7. The largest normalized radius is ~0.697 in BOTH
parities; what flips is whether the *second* axis joins the first (oblate) or the third (prolate).

**Key properties:**
- **Ratio-independent** ✅ — computed with incommensurate phases; the shape is purely a property of the
  construction's geometry (plane schedule + self-scaling), NOT the rate cascade. This matches the
  user's observation ("based on the overall shape not the trace") and is a consistency check passing:
  rates set how the trace sweeps, not where the cloud's mass sits.
- **Mechanism (hypothesis):** the period-4 plane schedule (XY,YZ,XZ,YZ) adds rotations such that an
  even vs. odd count puts the "extra" spread on a different axis, flipping prolate↔oblate each level.
- **Correction to the live read:** the user described it as "non-repetitive"; the data shows it's
  strongly REPETITIVE (period-2) once settled. The early levels (1–4) are a transient before lock-in,
  which is likely what read as non-repetitive to the eye.

**OPEN questions to research/define:**
1. WHY period-2 and why these specific limit values (0.697 / 0.508 / 0.169)? Closed form? Do they
   relate to the self-scaling k, or to the plane-schedule structure, or are they schedule-universal?
2. Does the limit shape depend on kHole or the schedule? (Test other k, other SCHED.)
3. Is the 0.697 ≈ a recognizable constant? (√(0.485)? relation to 1/√2=0.707 it's near but not equal.)
4. Connection to the earlier RADIAL self-similarity ((k+1)× per cycle): radius grows geometrically,
   shape oscillates period-2 — two different structures on the same object (radial-scaling vs
   angular-shape), as with the VE symmetry finding.

## Rendering idea (future direction, NOT current goal)
Noted for later: once the instrument is more developed, the shape glyphs (ellipsoid, and possibly
superquadric / other tensor-surfaces) could become a *rendering* layer — adding surface to the shape
instead of/alongside the dot-beam. Caveat kept honest: the ellipsoid is a statistical ENVELOPE (the
covariance summary), not the traced form itself; as a render it shows the smoothed bounding shape, not
the intricate trace. Fine as an additional envelope layer; not a substitute for the trace's detail.
Superquadric glyphs (Kindlmann/Ennis) are the principled upgrade if pursued. Parked.

### Sweep A — empirical characterization of the period-2 pattern (2026-05-31)

Varied the construction's parameters to learn what the period-2 oscillation depends on, BEFORE
researching theory (so the research can be aimed). Headless, incommensurate Weyl sampling, N=4000.

**TEST 1 — does the limit shape depend on k (self-scaling constant)? YES, specifically:**

| k | prolate aniso | prolate [r1,r2,r3] | oblate aniso | oblate [r1,r2,r3] |
|---|---|---|---|---|
| 1.5 | 1.36 | [0.692,0.511,0.510] | 3.38 | [0.692,0.692,0.205] |
| 2.0 | 1.38 | [0.697,0.508,0.506] | 4.12 | [0.697,0.697,0.169] |
| 2.5 | 1.39 | [0.700,0.506,0.505] | 4.84 | [0.700,0.700,0.144] |
| 3.0 | 1.39 | [0.702,0.504,0.504] | 5.57 | [0.702,0.701,0.126] |
| 4.0 | 1.40 | [0.704,0.503,0.502] | 7.00 | [0.704,0.703,0.101] |

- **Largest radius is ~k-invariant** (~0.69–0.70 across all k). The PROLATE shape barely moves
  (aniso 1.36→1.40 over a 2.7× change in k).
- **The OBLATE short axis (r3) tracks k strongly** — shrinks 0.205→0.101 as k grows, driving oblate
  aniso 3.4→7.0. So k controls *how flat the oblate disk is*, while leaving the cigar and major axis
  essentially fixed. Clean, smooth, interpretable dependency.

**TEST 2 — does it depend on the plane schedule? MOSTLY NO, with one key exception:**
- Standard-family schedules (std `XY,YZ,XZ,YZ`; `XY,YZ` only; `even XY,YZ,XZ`; all-3-cycle) ALL give
  ≈ the same limit ([0.697,0.508,0.506] prolate, ~4.1 oblate). The pattern is robust within the family.
- **EXCEPTION: `XY,XZ,YZ` breaks the parity flip entirely** — at L9 gives [0.610,0.609,0.507],
  aniso 1.20 (stays prolate-ish, does NOT go oblate). So the **ORDERING of planes in the schedule
  matters** to whether the period-2 oscillation happens. → the pattern is a property of THIS schedule
  family, NOT universal. A different ordering can suppress it.

**TEST 3 — is 0.697 a recognizable constant? INCONCLUSIVE:**
- 0.697 ≈ √0.485; *near* 1/√2 = 0.7071 but measurably NOT equal (real gap, not sampling noise).
- 0.697² = 0.486 = variance fraction along the major axis. Not cleanly identified as a named constant;
  may be a root of something schedule-specific rather than a universal.

**WHAT A TELLS US (aims the research B):** the oscillation is schedule-family-specific (Test 2),
largest-radius is k-invariant while k tunes oblate flatness (Test 1), constants not clean (Test 3).
The smooth k-dependence + ordering-sensitivity (non-commuting rotations, order changes the product)
points AWAY from deep universal dynamics and TOWARD the **linear algebra of products of structured
rotation matrices** — the limit shape as the covariance fixed-point of a particular matrix product.
Candidate theory bodies for B (user to pick direction): (a) products of rotation matrices / Lyapunov
spectra / Furstenberg; (b) why ordering `XY,XZ,YZ` suppresses the flip (commutator structure of the
schedule); (c) closed form for oblate r3(k). Order/direction TBD by user.

---

## INVESTIGATION SWEEP — Track 3 / "D" (2026-05-31, headless from instrument_clean.html)

Method: faithful Python reproduction of instrument_clean.html's EXACT construction (buildRaw) + measurement
(measureDense: random-phase sampling → rmin/rmax/COM/PCA). Investigate-in-place (no file modified). Script:
sweep.py. Three questions tested. Honest reporting — confirmed / nuanced / failed all noted.

### Q1 — (k+1) SELF-SIMILARITY: ✅ CONFIRMED EXACTLY (across k = 1.5, 2, 3)
The outer radius grows by EXACTLY (k+1) per CYCLE, and `D·(k+1)^cycle` predicts rmax dead-on at cycle
completion (e.g. k=2: 240, 720, 2160, 6480 — exact). NUANCE (mechanism, not in the original claim): the (k+1)
multiplication lands on the SECOND rotation of each cycle (the "tip"), with the first rotation + displacement
holding rmax flat (×1.000). So a cycle = [hold, ×(k+1)], netting ×(k+1) per two levels. Deviations at high
level (e.g. 2154.8 vs 2160) are finite-sampling noise in the random-phase rmax, shrinking with N — NOT a real
departure. The construction's defining self-similar property is exact to sampling precision.

### Q2 — FRAME CONVERGENCE: ✅ CONFIRMED — converges to a PERIOD-2 limit cycle (not a single shape)
PCA shape (pcaR2 = λ₃/λ₁) settles, but even and odd levels converge to DIFFERENT stable values:
  - even levels → pcaR2 ≈ 0.51–0.53 (one dominant axis)
  - odd levels  → pcaR2 ≈ 0.058–0.060 (flat/oblate-leaning), converging tightly (Δ ≈ 0.0002 by L13)
So "converges ~L7" (earlier finding) is sharpened: it converges to a 2-CYCLE in shape, each parity → its own
fixed value. Both subsequences are settled by ~L11–13.

### Q3 — PARITY FLIP: ◐ PARTIAL — shape flip CONFIRMED, VE-angle does NOT track it (honest miss)
- PCA SHAPE genuinely alternates with parity (even ≈ prolate-ish pcaR2 0.51; odd ≈ flat pcaR2 0.06) — the
  even/odd parity split is real + stable. Consistent with the prior period-2 prolate/oblate finding.
- BUT the VE major-axis angle does NOT cleanly flip with parity: ~44° on even, SCATTERED on odd (39.8, 41.3,
  8.1, 29.4, 43.1 — no pattern). REASON (understood): on odd/oblate levels λ₁≈λ₂, so the "major axis"
  direction is degenerate/unstable sample-to-sample → its VE angle is noise. So: **VE major-axis angle is NOT
  a reliable parity indicator** (the shape ratio pcaR2 IS). Don't use veMajDeg to detect parity.

### TAKEAWAYS
- The keystone's (k+1) self-similarity is now EMPIRICALLY confirmed exact, with the within-cycle mechanism
  (hold-then-×(k+1)) made explicit.
- The form's long-run behavior is a period-2 shape limit cycle (even-prolate / odd-oblate), both parities
  converging by ~L11–13.
- A measurement caveat worth carrying: on near-oblate (odd) levels the major-axis direction is degenerate, so
  any major-axis-direction readout (incl. VE angle) is unreliable there. pcaR2 (a ratio, not a direction) is
  the robust shape indicator.
- NEXT: spot-check 2–3 of these against the LIVE instrument_clean.html (freeze + log + read) to confirm the
  headless model matches what the instrument shows. Then the holographic-principle (Track 3) question —
  does a FRAGMENT reconstruct the whole — is the natural follow-on, pairing with homology.

---

## CALIPER RUNG 2 — STEP 1 VERIFIED (2026-05-31, headless: caliper_verify.py)

The axiomatic foundation for the caliper-as-coordinate-system, verified before any UI. AXIOMS (user-locked):
3D Euclidean position = the INVARIANT; every grid = a CHART on it; report BOTH coordinate-Δ and metric-
distance; VERIFICATION = all charts converge to equivalence on the invariant 3D distance as resolution
deepens, with residual spread = discretization "breathing" that shrinks with depth.

### 1a — chart maps are faithful: ✅ EXACT
All four charts (cartesian, polar, log-polar, spherical) forward-map (3D→chart coords) then inverse-map back,
and the reconstructed 3D distance equals the true 3D distance to machine precision (max err ~1e-13 ≈ 0).
Proven, not assumed: each grid is a faithful chart on the same invariant 3D point. (Projection-mode warp is a
separate DISPLAY layer, intentionally excluded — the axiom is about true geometry.)

### 1b — breathing converges monotonically: ✅ CONFIRMED
Quantizing each chart's coords at calRes (lengths → 1/calRes grid, angles → 360/calRes°), reconstructing, and
measuring cross-chart spread: the spread SHRINKS MONOTONICALLY as calRes deepens —
  calRes:   2     4     8    16    32    64   128
  spread: 70.8% 38.2% 20.2%  9.4%  4.6%  2.5%  1.2%
Clean ~1/calRes convergence (spread ≈ halves when calRes doubles). This IS the user's "charts converge to
equivalence; they breathe from the invariant depending on resolution depth." No chart lies — they quantize
differently and provably converge.

### STATUS
Conceptual foundation PROVEN. Next: Step 2 (formalize the breathing-vs-depth as the verification readout),
then Step 3 (wire the caliper as an independent system: pick ruler/chart + endpoints → both scalar metric-
distance and component breakdown), Step 4 (cross-system readout + visible breathing). Building on TS_calipers.html.

---

## CALIPER RUNG 2 — OBSERVATION REFRAME (2026-05-31, user-locked) — the warp is a SECOND instrument

Key conceptual upgrade: the projection warp is NOT error to exclude — it MODELS OBSERVATION ITSELF. Perspective
foreshortening (by depth + focal length + mode) faithfully models how a structure APPEARS to an observer under
specific optics — like a painter's perspective is accurate to the viewpoint, not inaccurate. So there are TWO
valid measurement regimes, and the caliper reflects both:
  - **TRUE geometry (warp-free):** the invariant — what the structure IS, observer-independent. (Step 1 verified
    this converges across charts.) Ground truth.
  - **OBSERVED geometry (warped):** what it APPEARS to be under the current projection params — true TO that
    observation. Real data about apparent measurement.
  - **★ DISTORTION = observed − true (THE HEADLINE MEASUREMENT):** quantifies how the observation conditions
    deform the apparent structure. This is the whole point of including the warp — "how observation affects
    measurement," made numerical, WITH the invariant as anchor to compare against.

Projection parameters (focalLength, stereoR, mode: ortho/iso=parallel/no-warp, perspective & stereo=foreshorten
by off-plane depth) are the OBSERVATION CONDITIONS — they are inputs to observed-mode, not nuisance params.
"The distance from the grid, the focal length, all the projection params — those ARE the point."

Why it's rich: all measurement is observation under conditions. The instrument now holds the Platonic invariant
AND the observer-relative apparent, and the MAP between them (the warp, parameterized) is itself studyable
because it can always be checked against truth. (Mirrors the form/hole twin-lens and the coordinate-reveals-
invariant thesis.)

### REVISED caliper rung-2 plan (supersedes the prior Step list):
- Step 1 ✅ DONE — true-geometry charts converge to invariant (caliper_verify.py).
- Step 1c (NEXT) — verify the OBSERVATION layer headless: model the warp (focal/depth/mode), confirm ortho/iso
  give zero distortion (parallel), perspective/stereo give depth-dependent distortion, and observed→(remove
  warp)→true round-trips. The distortion must be a well-defined function of the projection params + off-plane
  depth, reproducible against the truth.
- Step 2 — breathing-vs-depth readout (cross-chart convergence, already proven in 1b).
- Step 3 — caliper as independent system: pick ruler/chart + endpoints, TRUE/OBSERVED regime, report scalar
  metric-distance + component breakdown + ★ distortion (observed−true).
- Step 4 — cross-system readout + visible breathing + distortion, all anchored to the invariant.
  - Step 3 ALSO exposes the FRAME choice (world-axis vs PCA) for ANY chart, not just XY-vs-PCA — same
    planeBasis() machinery, just surfaced as a choice ("world coords vs the form's own coords"). Folded in.

### Step 1c — observation layer: PARTIAL (true-geometry solid; warp model needs the real pipeline)
PASSED: ortho/iso → exactly zero distortion (parallel, no warp) ✓; observed→un-warp→true round-trips exactly
(1e-13) ✓ — the warp is invertible, truth is recoverable.
FAILED (honestly): perspective/stereo distortion came out absurd (4.66× / 59,710×) and non-monotonic in focal.
ROOT CAUSE (diagnosed): my headless warp was unfaithful in TWO ways —
  1. used RAW un-normalized coords, but proj() warps the NORMALIZED point (build() applies 100/rmax + COM-
     centering BEFORE proj), so my points sat past the focal singularity (focal+depth→0 → blowup).
  2. used the off-plane NORMAL depth (pn) as the warp depth, but proj() uses CAMERA depth `c` from rot()
     (the rotated z), NOT the grid-plane normal.
KEY REALIZATION: observed-mode depends on the CAMERA ORIENTATION (yaw/pitch via rot()), plus normalization,
plus focal/stereoR/mode. "What you observe depends on where you look from" — more inputs than first modeled.
This is the verification WORKING: it caught an unfaithful observation model before any UI was built on it.

NEXT (when resumed): rebuild Step 1c with the FAITHFUL pipeline — normalize (100/rmax, COM-center) then rot()
for camera depth `c`, then warp with `c`. Re-verify: ortho/iso zero (still), perspective/stereo distortion
SANE (small %, monotonic in focal: closer focal = stronger warp), camera-angle dependence characterized,
round-trip exact. TRUE-geometry charts (Step 1a/1b) are unaffected and remain verified.

### Step 1c CORRECTED — grid-locked observation layer: ✅ VERIFIED (caliper_obs.py)
Fix applied (per the grid-locked reframe): normalize the point FIRST (100/rmax + COM-center, as build() does),
then depth = off-plane component along the SELECTED GRID's normal (planeBasis().n) — NOT the live display
camera. Observation conditions = focal/stereoR/mode only; yaw/pitch never consulted. Results, for BOTH a
world grid (XY, normal=Z) AND a PCA grid (rotated normal):
  - 1c-i  ortho/iso → distortion EXACTLY 0 (parallel) ✓
  - 1c-ii perspective ≈4.1%, stereo ≈6.2% → SANE ✓ (was 466% / 59,710% with the unfaithful model — the
    normalize-first fix eliminated the focal-singularity blowup)
  - 1c-iii focal trend MONOTONIC ✓: f=120→24%, 240→8.7%, 480→4.1%, 960→2.0%, 1920→1.0% (closer focal =
    stronger warp; halves as focal doubles — physically correct)
  - 1c-iv observed → un-warp → true EXACT (1e-14) ✓ — truth always recoverable
  - 1c-v CAMERA-ORIENTATION INDEPENDENCE EXACT (0 change across display yaws) ✓ — orbiting the display never
    affects a measurement (the entire point of grid-locking; far fewer variables than a camera-following model)
PCA grid gives the same clean results → the per-grid-normal model works (caliper views along whatever the
selected grid's normal is, world or PCA).

### CALIPER RUNG 2 — FOUNDATION COMPLETE (Steps 1, 1b, 1c all verified)
Both instruments proven before any UI: TRUE geometry (charts converge to invariant, breathing shrinks ~1/calRes)
and OBSERVED geometry (grid-locked, sane/monotonic/invertible/camera-independent). The distortion (observed−true)
headline measurement rests on a verified base. Ready for Step 2 (breathing readout) / Step 3 (live caliper:
ruler + endpoints + TRUE/OBSERVED regime + distortion + world-vs-PCA frame choice for any chart).

---

## RATIO CATALOG HYGIENE (2026-05-31, on TS_calipers.html)
Started as "duplicate π in the dropdown" → diagnosis uncovered a LIVE id-collision bug.
- **Surface fix:** `1/φ` was coded `1/PHI+1` = 1.618 = φ (accidental duplicate, wrong value). Changed to
  **φ² = φ+1 ≈ 2.618** (a genuine distinct golden number), relabeled 'φ²'. (1/φ=0.618 can't exist here — the
  catalog clamps ratios >1 since rate = (1/ratio)^level.)
- **★ Real bug found:** the id generator `label.replace(/[^a-z0-9]/gi,'')` strips ALL non-ASCII chars, so
  **φ, φ², π ALL produced the same id `irrational_`** — colliding in the RATIOS object (last-write-wins). This
  silently broke selection of those ratios AND made the "π default" actually resolve to whichever collided
  last. (Explains the mysterious `"rateRatio":"irrational_"` in earlier captures.) FIX: fall back to an
  index-based id (`grp+'_'+i`) when the stripped label is empty or already taken → all ids unique, default
  correctly = π, cross-group overlaps (e.g. just 1:2 vs powers 1:2) preserved as distinct reachable entries.
- **Kept (by decision):** cross-group duplicate VALUES (3:5, 5:8 in both just & fibonacci; 2 in just & powers)
  are MEANINGFUL — a ratio legitimately belongs to multiple categories; the category is the lens. Not deduped.
- Verified: unique ids, default→π, parses, all getElementById refs resolve.

---

## CALIPER STEP 4 — CROSS-SYSTEM READOUT (2026-05-31, on TS_calipers.html) — DONE
`caliperCrossSystem()` + `calXsysChk` toggle: measures the same endpoints (dot→target) in ALL four rulers at
once. Readout shows the shared invariant anchor, then per-chart (metric + component breakdown + distortion),
then the cross-chart agreement spread.
- Verified headless: all four charts return the SAME true metric (= the invariant) to machine precision;
  each chart's distortion computed independently; parses; all 62 ids resolve.
- **HONEST CORRECTION made:** initial label said the cross-chart spread "shrinks ~1/calRes (breathing)." That
  OVERCLAIMED — the continuous metric is IDENTICALLY chart-independent (spread ~0 always), because all charts
  share vec3=[pu,pv,pn]. The ~1/calRes breathing of Step 1b was the DISCRETIZED ADDRESS (rounding components
  to calRes), a SEPARATE quantity. Relabeled "agreement: charts agree to ~machine precision, confirming the
  metric is chart-independent (the metric IS the invariant)." Don't conflate the continuous metric (always
  equal) with the discretized address (which actually converges).
- This COMPLETES the integration plan's caliper rung: the caliper is an independent measurement system —
  ruler + endpoints → invariant + per-chart description + observation distortion, single-ruler OR all-at-once.

---

## THREE-POINT MEASUREMENT (triangle analysis) — DONE (2026-05-31, on TS_calipers.html)
Extended the caliper from 2-point (distance) to a 2/3-point instrument via a `calMode` switch. In 3-point
mode the live dot = vertex B; `calTarget`=A, new `calC`=C dropdown. Engine `caliperTriangle(A,B,C,observed)`
verified headless (tri_verify.py + in-instrument reproduction):
- 3-4-5 right triangle: angle@B 90°, sides 3/4/5, area 6, circumradius 2.5, circumcenter @ hyp-midpoint,
  normal=Z, all exact. Equilateral: 60°×3, R=s/√3. Rotated-into-skew-plane: angle preserved, normal rotates
  with the plane, R invariant. Collinear → degenerate flagged (no R=∞).
- READOUT (LODZONE philosophy): HEADLINE always = angle@B (with true/observed distortion) + 3 sides +
  circumradius; FULL (calTriFullChk) = all 3 angles + sum + area + plane normal + tilt-vs-grid + circumcenter.
- TRUE/OBSERVED: angle@B is the headline distortion; calObserve() warps points (grid-locked) before the
  triangle so projection's effect on angle/area/R shows. Verified: ortho→identical angle (no warp);
  perspective→sane nonzero angle distortion (e.g. 0.63° on a tilted triangle). The angular analog of the
  distance distortion — projection bends angles, now measurable.
- Cross-system DEFERRED for 3-point (angle/area/R are coordinate-free → don't vary by chart; true/observed is
  the meaningful axis). N-point (4+: tetrahedron/sphere-fit/coplanarity) logged as a future arc in
  integration_plan.
- DRAWING: triangle edges + vertex markers (B filled); circumcircle drawn in-plane when full-detail on.
- Verified: parses, 66 ids resolve, refreshCaliperTargets populates calC each frame.

This completes the caliper as a true geometric-measurement instrument: distance (2-pt, any ruler, true/obs/
cross-system) + angle/triangle/plane/circle (3-pt, true/obs). Slice-3 measurement INTERACTION substantially
beyond the original "cursors + calipers + protractor" spec (the 3-point angle IS the protractor).

---

## STACKED-LEVELS OVERLAY — DONE (2026-05-31, on TS_calipers.html) [Slice 4, corrected]
NOTE: superseded an earlier mis-build. I first misread the request and built a level-series LOGGER (a button
that swept L1→current and emitted a data series). That was WRONG — the user wanted a VISUAL OVERLAY. Reverted
the logger entirely (button, sweep fns, combined-export) and built the correct thing:
- `▦ stack levels` — an OVERLAY toggle (with the sphere/torus/orbit refs), NO separate button. Draws the form's
  locus at EVERY level 1→current superimposed in ONE frame: `drawStackedLevels()` samples each level (Weyl,
  420 pts), normalizes with the LIVE meas (com/scale) so all levels share the current frame, and draws faint
  dots — opacity ramps quadratically (earliest faintest → current brightest), drawn UNDER the live beam.
  Earlier levels nest INSIDE the current one (form grows (k+1)/cycle) — the self-similar nesting made visible.
- MINIMAL "log the data" (as requested): each logged row now carries a `levelSeries` field — L1→current
  fingerprints (rOuter, holeRatio, comRel, pcaR1/R2, FA, predOuter, outerErr), computed by a sweep that runs
  ONLY on the deliberate log action (not per-frame). Reuses fingerprintAtCurrentMeas(). No separate button.
- Verified: parses, 67 ids resolve. (Visual feel — opacity ramp / dot density — confirmed by the user on view.)

## MOBILE BUG FIXES — DONE (2026-05-31, on TS_calipers.html) — CONFIRMED WORKING on device
Two mobile bugs reported + fixed + user-confirmed:
- STEPPER ARROWS dead on touch: the scrub elements preventDefault on touchstart (to block page-scroll on
  drag), which SUPPRESSES the synthetic click on mobile — and the arrows (scrub ◀▶ and dropdown ◂▸) were bound
  to `click`. Fixed: bound to `pointerup` instead (fires regardless), added touch-action:none to `.selar`.
- NO ZOOM on mobile: zoom was wheel-only (desktop) + the zoom scrub; no pinch handler. Fixed: added two-finger
  PINCH-to-zoom on the canvas (`_ptrs` map tracks active pointers; two down → distance-ratio drives vals.zoom
  via `_setZoom`, rotation suppressed during pinch; single finger still rotates). Wheel still works on desktop.
- Both CONFIRMED working on device by the user.

## VIEW-LOCK PIVOT — DONE (2026-05-31, on TS_calipers.html) — confirmed working [Slice-3 addendum]
`center` dropdown in the projection tier → `viewPivot` (draw-space point the camera orbits/centers on).
Subtracted at the start of proj() before rot(), so the selected feature lands at screen center & orbiting
pivots around it. COM = [0,0,0] default (form is normalized COM-centered; unchanged behavior). Reuses
caliperFeatures (origin/COM/dot/PCA verts/VE verts), populated + resolved each frame via refreshPivot().
Logged as a Slice-3 interaction addendum (not a new slice). Verified: parses, 68 ids resolve, user-confirmed.

## SLICE 6 (weighted Birkhoff) — INVESTIGATED → DROPPED, with evidence (2026-05-31, birkhoff_test.py)
The spec assumed our measurement was a Birkhoff-style time-average along one orbit that exp-bump weights could
accelerate to super-polynomial convergence. VERIFIED HEADLESS that this is FALSE for our system:
- Our measurement (analyzeLocus) is NOT a single-orbit time-average — it's WEYL-QUASIRANDOM SPATIAL sampling
  (independent irrational phase increments per sample → uniform torus coverage), then spatial stats
  (bbox/COM/covariance). Chosen deliberately because single-orbit coverage is poor for this construction
  (recorded earlier: locked-u sweeps drifted COM 30–95%).
- Test (COM convergence to a 200k-Weyl gold standard, level 6): Weyl-spatial err → 0.198 @N=5000; weighted
  Birkhoff (single orbit) → 37–680, i.e. 2–3 ORDERS OF MAGNITUDE WORSE, across 3 different incommensurate
  rate-sets + finer dt. Fundamental: the orbit doesn't equidistribute fast enough for a time-average to win.
- Also: rmax is a MAX (un-averageable — Birkhoff weighting is for averages); PCA is a covariance that would
  need the same (failing) orbit-average reframing.
CONCLUSION: weighted Birkhoff is inapplicable here and would DEGRADE precision. Slice 6 dropped (not built).
The existing Weyl sampling is already the right, well-converging estimator. (Classic verify-don't-trust: the
impressive-sounding upgrade is wrong for this system; the evidence overrides the spec.)

## SLICE 7 (rotation number + resonance) — DONE (2026-05-31, on TS_calipers.html)
`rotation / resonance` toggle in the measure full-state tier → rotationAnalysis(). The levels rotate at
(1/ratio)^k, so adjacent-level frequency ratio = 1/ratio; its continued fraction characterizes the timing:
- Readout: rate ratio → inter-level frequency, continued fraction, convergents (nearest rationals),
  resonance character (commensurate=orbit closes/periodic; incommensurate=quasiperiodic; φ-like all-1s CF =
  strongly irrational; large CF term = near a low-order resonance).
- VERIFIED headless (rotnum_test.py) + in-instrument match: π→[0,3,7,15,1,292] incomm (convergents incl.
  113/355), φ→all-1s [0,1,1,1,1,1] incomm, ratio=2→1/2 COMMENSURATE (closes).
- HONEST CAVEAT caught in verification: "most irrational" is surfaced via the CF SIGNATURE (all-1s = golden),
  NOT a nearest-rational distance (that metric misleads — φ's convergents approximate it well). Used CF.
- The angular/timing invariant channel, complementing the radial/shape invariants. Parses, 69 ids resolve.

## INTEGRATION STATUS (2026-05-31): Slices 0,1,2,3,4 DONE · 6 DROPPED (evidence) · 7 DONE · only 5 remains.

## SLICE 5 (superquadric glyph) — DONE (2026-05-31, on TS_calipers.html) — FINISHES INTEGRATION
`superquadric` toggle (next to ellipsoid) → drawSuperquadric(): Kindlmann tensor glyph. Same eigen-orientation
+ 2√λ semi-axes as the ellipsoid, but the unit surface is a superellipsoid with signed-power exponents
α=(1−cp)^γ, β=(1−cl)^γ (γ=3) from the live Westin cl/cp. Edge sharpness encodes anisotropy: round=isotropic,
sharp ridge=linear (ridge along P1), sharp disc=planar — shape-type readable from ANY viewpoint (resolves the
ellipsoid's bad-angle ambiguity). Verified: surface math (superquad_test.py) spans unit in all regimes;
in-instrument exponent mapping matches headless exactly (iso 0.857/0.857 round; linear β→0.003 ridge; planar
α→0.003 disc). Parses, 70 ids resolve. Expect period-2 to show as a shape-TYPE flip (ridge↔disc) across levels.

## ★★★ INTEGRATION PLAN COMPLETE (2026-05-31) ★★★
All slices resolved: 0 (catalog+lock) ✓ · 1 (readout layer) ✓ · 2 (visual hygiene) ✓ · 3 (cursors/calipers
/protractor, +view-lock-pivot addendum) ✓ · 4 (stacked-levels overlay + minimal data-fold) ✓ · 5 (superquadric
glyph) ✓ · 6 (weighted Birkhoff) ❌ DROPPED with evidence (inapplicable — measurement is Weyl spatial, not a
single-orbit time-average) · 7 (rotation number + resonance) ✓.
This was the integration of the LAST research dive. Per the user's priority framing: integration was Priority 1;
everything else (thesis work, LOD/multi-scale zoom, batch-compute, N-point, editable schedule, homology) was a
discovery made DURING integration, PARKED for later. With integration complete, the next move is the NEXT
research dive → its own integration plan → then the thesis work.

## CONDITIONAL-CAPTURE LOG HOLE — FIXED (2026-05-31, on TS_calipers.html)
The logged caliper fields (calTarget, calDistU) were gated on calChk.checked — the caliper OVERLAY toggle — so
a well-defined reading (target selected + current point existing) silently failed to log whenever the overlay
was drawn off. Fixed: both fields now log UNCONDITIONALLY when the measurement is well-defined (caliperTargetPos()
resolves a target + meas.curPt exists), independent of calChk. The overlay toggle now controls ONLY drawing
(lines 1874, 2008), not logging validity. caliperTargetPos() guards unresolved targets (returns null → logs null,
no garbage). Verified: parses, 70 ids resolve, calChk confirmed absent from the logging path.
Relevant because state-capture is the substrate the future fingerprint (Gap A) builds on — closed the leak first.

## ★ CHECKPOINT FROZEN: TS_3D.html (2026-05-31)
Froze the fully-verified 3D instrument (TS_calipers.html, 2689 lines, parses, 70 ids resolve) as
TS_3D.html — byte-identical. This is the FROZEN 3D KEYSTONE-INSTRUMENT, the comparison baseline
for the SE(4) dimensional-ascent work about to begin. It is the SE(3) construction (rotations in XY/YZ/XZ +
translation, confined to 3-space per the research dive) with the full measurement suite, calipers, stacked
overlay, rotation-number readout, superquadric, view-lock pivot, and the conditional-capture log fix.
Per the locked naming convention: this is a frozen CHECKPOINT; new SE(4) work proceeds on a NEW working file,
never overwriting this. Reason for the checkpoint: about to attempt the audit's actual fix — rebuild the
construction matrix as 5×5 SE(4) with the XW/YW/ZW rotation planes, to test whether genuine 4D form-structure
(beyond 3D shadows) can be swept. The 3D keystone must survive intact so swept-form invariants can be compared
3D-vs-4D.

## ★ SE(4) RUNG 1 — VERIFIED (2026-05-31, se4_rung1_fixed.py) — basic 4D form
First verified rung of the SE(4) re-founding (headless-first, before any UI). 5×5 homogeneous matrix: 4×4 SO(4)
rotation block (the SIX planes XY,XZ,XW,YZ,YW,ZW — three more than SE(3)'s XY/YZ/XZ), translation col, homo row;
seed [D,0,0,0,1].
- VERIFIED: single XY → clean circle (radius exact, z/w untouched). XY→YZ→ZW schedule sweeps a genuine
  3-SPHERE SHELL: all four coords span ~160 at constant radius 80, and 4D PCA shows FOUR significant
  eigenvalues (ratios 1 : 0.50 : 0.25 : 0.25) ⇒ genuinely 4D, not a 3D subspace in disguise.
- ★ FALSIFICATION VERIFIED: the SE(3) schedule [XY,YZ,XZ] gives w-span ~0 and only 3 PCA eigenvalues
  (confined to 3-space); the SE(4) schedule gets the 4th eigenvalue + nonzero w-extent. The 4D invariant is
  UNREACHABLE in 3D — concrete, runnable confirmation of the SE(3)→SE(4) boundary the research dive identified.
  This is the falsification the reframe was missing; we can now distinguish "genuinely 4D" from "3D shadow."
- Clifford double rotation (XY+ZW simultaneously) sweeps a flat 2-torus (2 big + 2 zero eigenvalues) — the
  signature SO(4) motion with no SO(3) analog. Confirmed.
- ★ REAL CORRECTION found by going headless-first: the 3D keystone's RIGHT-multiplication (M = M@R) has the
  last-scheduled plane act on the seed FIRST — which in 4D no-ops on the all-zero-z,w seed and collapses the
  form to a circle. The correct general rule is LEFT-multiplication (M = R@M): each rotation lifts the
  ACCUMULATED figure into the next fresh dimension. Carry this into the 4D build. (The 3D keystone's right-mult
  happened to work for its specific seed/schedule; left-mult is the dimension-general rule.)
NEXT (rung 2): translation in 4D (open a hole → 3-torus-class form?), then later the proportional self-scaling
rule re-derived in 4D. Build remains headless until the 4D form-family is understood, THEN wire into a viewer.

## ★ SE(4) RUNG 2 — VERIFIED (2026-05-31, se4_rung2.py) — 4D translation opens a hole
Headless test of whether 4D translation produces the 4D analog of sphere→torus. Build: 3-sphere shell
(XY,YZ,ZW) → displace along X by d → revolve in XW. Left-multiplication (rung-1 correction).
- VERIFIED: 4D translation DOES open a hole. The displaced+revolved 3-sphere yields a clean inner radius;
  holeRatio tracks d sensibly (d=120→0.20, d=160→0.33, d=240→0.50), COM stays centered (comRel≈0), and the
  form stays genuinely 4D (4 significant PCA eigenvalues throughout). This is a 3-TORUS-CLASS form — the
  genuine 4D analog of the 3D torus.
- The first-cycle hole ratio matches the 3D law (d−D)/(d+D) EXACTLY (k=2→0.3333, k=3→0.5000, k=4→0.6000 with
  d=k·D, matching (k-1)/(k+1)).
- ★ HONEST CAVEAT (do not oversell): the first-cycle match is PARTLY GEOMETRICALLY FORCED — inner radius of a
  revolved displaced shell is (d−D), outer is (d+D), so the ratio (d−D)/(d+D) holds in ANY dimension almost by
  construction. So "the keystone rule transfers" is true only at the FIRST cycle, where it isn't yet
  informative. The REAL test is multi-cycle SELF-SCALING: does d = k·(k+1)^(C−1)·D hold the hole at constant
  proportion ACROSS cycles in 4D, as it did to depth 19 in 3D? Multi-cycle self-similarity is NOT forced by
  single-step geometry — it either holds or breaks. That is rung 3, and it's the genuinely informative one.
NEXT (rung 3): the multi-cycle self-scaling test in 4D — the actual transfer-or-break of the keystone.
Still headless; TS_4D.html (copy of TS_3D.html) is the eventual advance once the 4D form-family is understood.

## ★ SE(4) RUNG 3 — VERIFIED (2026-05-31, se4_rung3.py + se4_rung3_samplecheck.py) — self-scaling TRANSFERS to 4D
The informative multi-cycle test (self-similarity across cycles is NOT forced by single-step geometry, unlike
rung 2's first cycle). 4D schedule SCHED=['XY','YZ','ZW','XW','XZ','YW'] (6-plane period, 3 ops/cycle),
displacement d_C = k·(k+1)^(C−1)·D along X, k=2, left-multiplication.
- ★ GROWTH LAW TRANSFERS EXACTLY: outer radius grows ×3.000 every cycle (std=0.0000), matching (k+1)=3, with
  outer/pred=1.0000 through 8 cycles. Stays genuinely 4D (4 PCA eigenvalues) the whole way. This compounds
  across cycles so it is NOT geometrically forced — a real transfer of the keystone's scaling cascade.
- HOLE LAW TRANSFERS (once sampling is adequate): cycles 2-8 initially read 0.34–0.38 (vs 3D's clean 0.333),
  which looked like possible 4D law-difference. RESOLVED by sample-size test (se4_rung3_samplecheck.py): holding
  cycle fixed and growing N=2k→128k, EVERY cycle's hole ratio trends to 0.3333 (e.g. cyc2: 0.3386→0.3337,
  cyc5: 0.3605→0.3383). It was SAMPLING NOISE — rmin (closest approach to center) is under-resolved on the
  higher-radius 4D shell at low N, reading hole slightly too large until enough samples land near the inner edge.
  NOT a real 4D difference.
- ★ VERDICT: the 3D keystone (proportional self-scaling, hole (k−1)/(k+1), growth ×(k+1)/cycle, verified to
  depth 19 in 3D) TRANSFERS TO 4D unchanged. Both laws hold. The noise was measurement coverage, not construction.
- METHOD NOTE: 4D measurement needs MORE samples than 3D for the same rmin precision (sparser coverage of a
  higher-dim shell). Carry into the eventual TS_4D viewer — bump Weyl sample count for 4D analysis.
NEXT: the 4D form-family is now understood through self-scaling. Candidate next rungs (still headless or first
viewer): vary k in 4D; confirm the 3-torus→? oscillation analog of 3D's sphere/torus class-cycle; THEN advance
to TS_4D.html (copy TS_3D.html) and wire the verified 5×5 SE(4) core into a viewer.

## ★ SE(4) VIEWER LIVE + A CORRECTED MIS-READ (2026-05-31) — the 4D forms are the faithful analog
TS_4D.html is live (5×5 SE(4) core wired into the viewer; 4D→3D projection via project4to3, ortho-w default,
persp-w with form-scaled eye; w-spin + manual XW/YW/ZW view controls; 72 ids resolve). User stepped levels
1-10 and observed: "definitely recreating, but not the same way as 3D" — L1 circle & L2 sphere IDENTICAL to 3D
(correct: W-planes haven't entered the schedule yet), then varied shape-classes (flat disc L5, lacy flower L7,
diffuse ball L8, cigar L10).

★ THE CORRECTION (3rd recurrence of the overselling failure mode this session, caught by measurement):
- Step 1: measured 4D PCA per level (se4_anisotropy.py) → found the forms are ANISOTROPIC in 4D (two large
  eigenvalues, two ~0 at many levels). Real data. CONCLUDED (wrongly) "the inherited 3D schedule flattens the
  4D forms, needs fixing."
- Step 2: searched schedules (se4_schedule_fix.py), hypothesis "3 rots/cycle builds a 3-sphere like rung-1's
  2 rots build a 2-sphere." HYPOTHESIS FALSIFIED — 3-ops/cycle did NOT restore isotropy; most levels stayed flat.
- Step 3: the disciplined check I should have run FIRST (se4_why_flat.py) — does the VERIFIED 3D KEYSTONE also
  flatten under the same isotropy measure? ANSWER: YES, identically. 3D odd levels (tori) have iso ratio
  0.105/0.066/0.060 (FLAT — a torus is a flat ring), even levels (spheres) ~0.53 (rounder). The 3D form
  ALTERNATES flat-torus / round-sphere.
- ★ VERDICT: "the 3D family stays isotropic" was MY FALSE ASSUMPTION. The 4D forms are NOT broken/flattened by
  a bad schedule — they are the FAITHFUL 4D ANALOG: same alternating flat-torus / round-sphere structure, one
  dimension up. We read 3D's flat levels as "torus" (a familiar ring) and 4D's flat levels as "disc/flower"
  (less familiar), but it's the same phenomenon. The schedule was never broken. NOTHING TO FIX.
- The "tiny sphere" at L3 = sphere→torus (the torus is genuinely flatter) + ortho-w dropping the w-extent.
- METHODOLOGICAL NOTE: the error was comparing 4D against an IMAGINED isotropic-3D. The fix was to measure the
  actual 3D baseline. Whenever judging "4D does X differently," measure whether 3D does X too BEFORE concluding
  it's a 4D difference. (This is why TS_3D.html as a frozen comparison baseline matters.)
DECISION (user): leave the schedule, forms are correct, keep exploring.

## ★ FINGERPRINT F0 + F1 (2026-06-01) — the equivalence-class made computable, and trust-gated
Built the fingerprint (Slice F0, fingerprint.py) and ran the trust gate (Slice F1).

**F0 — fingerprint definition (dimension-general, headless):**
SHAPE fingerprint = [normalized PCA eigenvalue spectrum (λ2/λ1, λ3/λ1, ...), hole ratio rmin/rmax].
Design decisions (explicit): SCALE-FREE (eigenvalue ratios, not absolute — size is a recipe param, not identity);
SHAPE not DYNAMICS (rotation-number DELIBERATELY EXCLUDED — it's trajectory timing/closure, not shape; two
recipes with different ratios could sweep the same shape with different rotation numbers, so including it would
wrongly separate them); Westin cl/cp/cs EXCLUDED as redundant (reparameterization of the same eigenvalues, 3D-
specific). All components in [0,1] → Euclidean distance meaningful. Works 3D & 4D (4D just has one more eigen-ratio).

**F1 — the trust gate (within-form scatter vs between-form distance):**
- First gate run FAILED (ratio 1.4) — but the failure was DIAGNOSTIC, not fatal, and caught by the gate exactly
  as intended (a clean F0 first-look would have walked us into a false F3).
- Cause 1 (W inflated): 4D high-level within-scatter (L7 0.006, L8 0.010) was rmin UNDERSAMPLING — confirmed:
  4D L8 fingerprint stabilizes by N=16000 (Δ→0.0002), eigenvalue components rock-stable, only the hole lags at
  low N. Fix = more samples at high 4D levels. NOT a fingerprint defect. (Matches rung-3's sampling note.)
- Cause 2 (B_min tiny): the "different forms" set was MISLABELED. The closest "different" pairs were 3D L5≈L7
  (both torus-class) and L6≈L8 (both sphere-class) — distances ~0.005. This is the fingerprint CORRECTLY
  detecting SELF-SIMILARITY: same shape-class recurring at different nesting depth, which (being scale-free) it
  rightly calls nearly-the-same. Not coarseness — the construction's self-similarity, seen by the measure.
- VERIFIED self-similar class structure: odd levels (3,5,7,9)=torus-class cluster (spread 0.046), even
  (4,6,8,10)=sphere-class cluster (spread 0.033), clusters 0.63 apart (13.6×). ★ HONEST CAVEAT: within-class
  spread (0.046) is ~40× the noise floor (0.0011) — same-class forms are CLOSE but CONVERGING to a limit with
  depth, NOT identical (L3 torus 0.105 measurably flatter than L9 0.059). So self-similar forms APPROACH a fixed
  fingerprint as level grows; they don't sit exactly on it. (More honest than "they're the same.")
- ★ CORRECTED GATE — between-CLASS distances (torus vs sphere vs different-k): B_min=0.27 vs W≈0.0011 →
  **245× separation. ✓ PASS.** The fingerprint is trustworthy for distinguishing shape-classes.

**Evidence-based tolerance picture (for F3):**
- ε ≈ 0.003 (3× the adequately-sampled noise floor 0.001) = "genuinely identical forms"
- 0.03–0.05 band = same class, different nesting depth
- 0.27+ = different class
**F1 GATE: PASSED (with correct between-class labeling). F3 (formula-comparison) may proceed.** Use N≥16000 for
high 4D levels. F3 must distinguish "same class converging" (0.03-0.05) from "genuinely identical" (<0.003).

## ★ FINGERPRINT F3 (2026-06-01) — the thesis test: MIXED result, and the mixed-ness IS the finding
Ran the formula-comparison test (f3_formula_test.py) with predictions LOCKED before running, match pairs +
falsification pairs. 4/6 matched prediction. The 2 failures are the real result (reported honestly, not spun).

PASSED as predicted:
- A (fill-invariance): same recipe, different incommensurate ratios → distance 0.0000. Fingerprint is EXACTLY
  fill-invariant. (Confirms excluding rotation-number was right: traversal timing doesn't affect the shape fp.)
- B (different tip plane): 2-sphere via (XY,YZ) vs (XY,XZ) → 0.0002. GENUINE "different formula, same form" —
  different plane choice, identical uniform 2-sphere. Real thesis support.
- E,F (FALSIFICATIONS): sphere vs torus = 0.87; torus k=2 vs k=4 = 0.28. The fingerprint correctly SEPARATES
  genuinely-different forms — it is NOT coarse. (The guard worked.)

FAILED prediction (C, D) — and the diagnosis is a real conceptual finding, not a fingerprint defect:
- C ★: predicted 2-sphere depth-2 (XY,YZ)=[0.5,0.5,1.0] identical to depth-3 (XY,XZ,YZ)=[0.999,0.667,1.0].
  Distance 0.53, NOT identical. My reasoning error: I assumed "pure rotation keeps all points at radius D, so
  3 rotations still = the 2-sphere." The RADIUS part holds (hole=1.0 both), but 3 incommensurate rotations do
  NOT fill the 2-sphere surface UNIFORMLY — they cover it anisotropically, so PCA sees a different distribution.
- D: two tori, same hole (0.333) but different eigenvalue structure ([0.999,0.105] vs [0.999,0.667]) — different
  revolve planes give different cross-sectional COVERAGE, not the same torus.
- ROOT CAUSE: I conflated "same point-SET (same region swept)" with "same DISTRIBUTION (same measured
  invariants)." The fingerprint measures the DISTRIBUTION (via PCA). C and D sweep ~the same region but populate
  it differently → different fingerprints. The fingerprint was MORE discerning than my prediction, not failing.

WHAT C,D ACTUALLY SHOW (stated narrowly — no thesis-level claim):
  C and D are a concrete pair of recipe-pairs that come out SAME under one measurement (point-set: ~same region
  swept) and DIFFERENT under another (distribution: PCA-measured invariants differ). That is a fact about C and D.
  Two distinct notions of identity are in play: (1) same POINT-SET (same region occupied) vs (2) same DISTRIBUTION
  (same measured invariant-set). The fingerprint uses (2). Recipe B is same under BOTH; C,D same under (1) only.
  → INTERPRETATION (user's framing, NOT verified by this test): "same form" is measurement-relative — each
    fingerprint defines its own equivalence-classes, and choosing the measurement is itself the move (like
    choosing a frame; cf. the world-locked-vs-PCA two-wings choice). This is a coherent reading consistent with
    the project's thesis, but ONE example pair does NOT verify the general claim "identity is always
    measurement-relative." That remains an unproven thesis, not a result. Do not write it up as demonstrated.
  → What IS established by F3: (a) the fingerprint is validated as a tool (fill-invariant; confirms B; separates
    E,F); (b) "same form" is not single-valued in practice — at least two measurements give different verdicts on
    the same recipe-pair. Nothing larger is shown.
DESIGN IMPLICATION (user-confirmed direction, not yet built): there is a FAMILY of possible fingerprints
(distribution-sensitive, coverage/point-set-sensitive, radius-only, anisotropy-only, ...), each defining its own
"same." The instrument should let you PICK the measurement rather than hardcode one — the fingerprint choice is a
knob, like the frame choice. NEXT (open): expose fingerprint-choice; optionally add a coverage/point-set facet
(e.g. uniform re-sampling of the swept set before measuring) so point-set-identity is also measurable. Documented;
not yet planned into slices.

## ADVANCE: TS_4D → TS_fingerprint.html (2026-06-01)
Froze TS_4D.html (verified genuinely-4D SE(4) instrument, parses, 72 ids) as a frozen prior; advanced to
TS_fingerprint.html (byte-identical start) as the current working file for Slice F2 — wiring the validated
fingerprint (F0/F1/F3, headless) into the viewer as a readout. Per naming convention, frozen files keep their
work-name (TS_4D.html); "frozen" lives in pipeline_state, not the filename.

## ★ FINGERPRINT F2 — DONE (2026-06-01, on TS_fingerprint.html) — readout wired into the viewer
Slice F2 complete. The fingerprint (F0/F1/F3 — validated as a tool for gross-shape separation; see the later
blind-spot entry for its proven angular blind spot) now displays live in the full-state panel:
- Readout: `fingerprint [λ2/λ1, λ3/λ1, hole]`, assembled from values the instrument ALREADY measures
  (meas.pcaVal sorted desc + holeRatio = rmin/rmax). NO recompute — pure assembly + display.
- Buttons (delegated click listener on document, since the panel innerHTML regenerates each frame): **set ref**
  (capture current fingerprint as reference), **copy** (fingerprint to clipboard via existing copyText), **clr
  ref**. When a ref is set, a live **dist to ref** appears in the readout → the F3 formula-comparison test is now
  doable BY HAND in the viewer (change level/k/ratio/schedule, watch forms converge/diverge under the measure).
- VERIFIED: in-viewer assembly matches the headless fingerprint() definition EXACTLY (max abs diff 0.00e+00 on a
  3D L5 form). Parses, 72 ids resolve.
- HONEST LABEL (in tooltip): this is the PROJECTED-3D fingerprint (meas.pcaVal is the post-4D→3D-projection
  cloud's eigenvalues) — correct for what's rendered; the genuine 4D fingerprint has one more eigen-ratio. Tiers
  noted: <0.003 identical / 0.03-0.05 same class / 0.27+ different.
STATUS: fingerprint plan F0✅ F1✅ F3✅ F2✅. Remaining = F4 (parked; trigger later shown DEMONSTRABLE by the
blind-spot finding, but fires only for out-of-construction forms), F5 (fingerprint family, parked, post-F2).
TS_fingerprint.html is current working file; TS_4D.html frozen prior.

## ★ FINGERPRINT STRESS-TEST + A CORRECTION (2026-06-01)
User pushed (correctly): sphere-vs-torus is a SOFTBALL — passing it doesn't prove resolving power. Ran a
stress test (fp_stress.py) with hard cases. Results, with a correction the user supplied:
- HARD CASE 1 (nearby k): tori k=2.00 vs k=2.05 (near-identical to the eye) → distance 0.011, cleanly above
  the ~0.001 noise floor. The fp DOES resolve small hole differences. Real, not a softball.
- HARD CASE 4 (accidental collisions): searched ~40 forms (levels 3-10 × k∈{1.5,2,2.5,3,4}) for two
  genuinely-different forms landing on the same 3 numbers → ZERO collisions found. Within this family,
  different forms don't accidentally coincide.
- HARD CASE 3 (different ratios → "flower" vs "smooth torus"): the fp called them ~0.0005-0.003 apart
  (≈identical). I INITIALLY misread this as "the fingerprint is BLIND to winding/texture — a real limit."
  ★ CORRECTION (user): the lacy "flower" seen earlier (level-7 screenshot) was NOT a different form — it was
  the SAME form UNDER-RENDERED (global time / time-base settings meant the trajectory hadn't filled in yet; a
  sparse snapshot of a partially-drawn form). Given enough traversal it fills to the full torus. So flower &
  torus are ONE form at two fill/render stages. Therefore the fp calling them identical is CORRECT — it is
  fill-invariance working as designed (the same property F3 Case A verified), seeing through the render artifact
  to the real form. NOT a blind spot.
- ★ NET: my "3 numbers is blind to winding, F4 must fire" conclusion is WITHDRAWN. It rested on treating a
  fill-artifact as a form difference. We do NOT currently have a confirmed case where the 3-number fp fails on
  two genuinely-distinct FULLY-RENDERED forms of the same gross class. (HARD CASE 2 — two different-recipe tori
  at 0.05 apart — is same-class-but-measurably-different, NOT a failure.)
- WHAT STANDS: "sphere-vs-torus is too easy" is a fair point (gross-class pass ≠ subtle power). WHAT'S WITHDRAWN:
  "must tell flower from torus" (not different forms). OPEN (not yet answered): is there ANY genuinely-distinct
  fully-rendered pair, same gross class, the 3-number fp can't separate? [UPDATE: a blind spot was LATER found —
  see the CONFIRMED BLIND SPOT entry below; at THIS point in the work none had been found yet.] F4 (heavier
  descriptors) stayed PARKED here. Descriptor-family choice: deferred (user: "come back to it").
- METHOD NOTE (recurring): I again built a "limit found → must fix" story on a misread input (render artifact ≠
  form). The correction came from the user knowing the render settings. Reinforces: confirm the INPUT is what you
  think before concluding the TOOL failed.

## ★ THE HARD-CASE HUNT + SABOTAGE (2026-06-01) — what makes the fingerprint tick
User asked the right structural question: is something about the CONSTRUCTION guaranteeing the fp always wins,
and is that good or bad? Pursued it by trying to BREAK the fp, not defend it.

THE GUARANTEE (identified): the construction builds every form from ONE seed pushed through rotations+
translations, sampled densely → it can ONLY make CONNECTED, single-orbit, shell-or-filled forms. It structurally
CANNOT natively make disconnected blobs, a cavity-in-solid, or a knot. So the form-space is NARROW, and gross-
shape+hole may capture most of what varies — NOT because the fp is powerful, but because there's little hidden
structure to miss. Good/bad: GOOD for this construction's use (3 numbers genuinely sufficient there); but it
means robustness on ARBITRARY forms is UNTESTED by the construction's natural output (the trap).

SO WE SABOTAGED IT (fp_sabotage.py) — manually built forms the construction can't make, where a gross-shape fp
SHOULD fail. Orthogonal check throughout: pairwise-distance distribution (sees connectivity/clumping the fp is
blind to). fp SEPARATED ALL FIVE:
- cavity (solid vs carved hollow interior): fp-dist 0.17 (caught via hole 0.33→0.50). 
- disconnected (one blob vs two): 1.00 (caught hard — separation dominates PCA).
- shear/bend: 0.71 (caught — bending breaks proportions).
- nested shells (single vs double): 0.17 (caught via hole 0.33→0.17).
- engineered ratio-mimic (stretch torus to fake sphere's eigen-ratios): 0.55 (stretch also moved the hole).

HONEST READING (not overclaimed):
- The sabotage power leans heavily on the HOLE component (cavity, nesting both caught mainly by rmin/rmax). So
  the fp's strength on these is real but comes substantially from one of its three numbers.
- Across 144 natural forms + 5 sabotages, found ZERO cases where fp says "same" but orthogonal pdist says
  "different" — the ONLY thing that would prove a blind spot. This is consistent with "no blind spot in reach,"
  NOT proof of "no blind spot." Absence of a counterexample ≠ proof of robustness (the day's recurring caution).
- The combined result IS strong: (a) natural forms yield no hard case AND (b) even sabotaged forms don't fool
  the fp. Together → the construction's form-space is narrow and the fp is sufficient for it WITH MARGIN
  (it catches cavities/breaks/bends the construction can't even make).

VERDICT on the fingerprint (as of the sabotage stage — SUPERSEDED in part by the blind-spot finding below, see
note): sufficient for the form-space the project actually inhabits (connected single-orbit shells). It separated
all 5 sabotages (cavity, disconnection, shear, nesting, ratio-mimic). NOT proven sufficient for arbitrary forms.
F4 stayed parked at this stage.
★ NOTE (reconciled after the blind-spot finding): the phrase "demonstrated headroom" written here OVERCLAIMED.
The sabotages it survived all happened to perturb the covariance or the hole, so the fp caught them — but that
is NOT general headroom against out-of-construction forms. The very next investigation FOUND an out-of-
construction form the fp completely misses (shell vs 6 clusters; see below). So the accurate statement is: the
fp catches out-of-construction forms THAT DISTURB ITS TWO MEASURED QUANTITIES, and is BLIND to those that hold
both fixed. The "OPEN THREAD (no blind-spot pair found in 144+5 attempts)" noted here is now CLOSED — a blind
spot WAS found by engineering the exact covariance-and-radius-preserving case. Do not read this paragraph's
"headroom" as robustness; read the blind-spot section.

## ★★★ CONFIRMED FINGERPRINT BLIND SPOT (2026-06-01) — angular distribution at fixed radius+covariance
After the ablation clarified the fp's structure, hunted Gap 1 (a pair where fp says "same" but an orthogonal
measure says "different") precisely — and FOUND it. Prediction was locked before the confirming run.

ABLATION FIRST (fp_ablation.py) — what each of the 3 numbers does (division of labor, complementary specialists):
- EIGENVALUE RATIOS [λ2/λ1, λ3/λ1] carry the SHAPE-CLASS distinction. torus-vs-sphere: eigen-only 0.66 = full
  0.66; hole contributes 0.0000. Telling torus from sphere is ENTIRELY the eigenvalues.
- HOLE [rmin/rmax] carries the HOLE-SIZE distinction. k2-vs-k4: hole-only 0.27 vs eigen-only 0.045.
- Each is blind where the other sees: eigen nearly blind to k2-vs-k3 (0.032 vs full 0.17); hole TOTALLY blind to
  torus-vs-sphere (0.0000 vs full 0.66). Complementary pair, neither dominates. (CORRECTS the earlier "hole does
  the heavy lifting" — that was true only for cavity/nesting; across the battery eigenvalues do more, hole is
  the specialist rescuing same-shape-different-void.)
- The within-class depth convergence (F1) lives almost entirely in EIGENVALUE drift; the hole is stable across
  depth (L5-vs-L7 hole moves 0.001).

THE BLIND SPOT (fp_blindspot2.py) — CONFIRMED, prediction met exactly:
- A smooth 2-sphere SHELL vs SIX TIGHT CLUSTERS of points (equal mass on ±x,±y,±z poles, all at radius R).
- Equal mass on 6 axis-poles → covariance = (R²/3)·I EXACTLY = isotropic, same as uniform shell → eigenvalues
  identical. All points at radius R → hole = 1.0 identical. So EVERYTHING the fp measures is held fixed.
- RESULT: fp-distance = 0.0072 (fp says "same form"), orthogonal pdist-gap = 0.67 (structurally as different as
  possible — continuous shell vs 6 discrete blobs). ★ THE FINGERPRINT CANNOT TELL THEM APART.

WHAT THE FP ACTUALLY IS (now precise): a measure of GROSS SHAPE (2nd moment / covariance) + RADIAL VOID
structure. It is PROVABLY BLIND to higher-order ANGULAR structure — any arrangement that holds covariance and
radius fixed while moving points angularly (shell vs clusters vs ring vs spiral all read identical).
WHY IT STAYED HIDDEN (ties to the construction's narrowness guarantee): the construction makes only connected
single-orbit forms, which have NO independent angular structure to hide (dense fill erases it) — so no NATURAL
form exposes this, and earlier sabotages kept accidentally perturbing the covariance or hole. The blind spot only
opens when BOTH covariance AND radius are held exactly fixed, which takes a deliberate symmetric construction.
STATUS: the blind spot is REAL but does NOT bite the construction's own forms. For arbitrary point clouds it
DOES. This is exactly the case F4 (heavier descriptors — Zernike/EFD, which capture angular structure) would
address IF the project ever needs to fingerprint forms with independent angular structure. F4 trigger: now
genuinely demonstrable (not just hypothetical), but still only fires for OUT-OF-CONSTRUCTION forms. Parked unless
that need arises. The honest "absence of counterexample ≠ robustness" caution PAID OFF — there was one.

## ★ AUDIT / DRIFT-IRONING PASS (2026-06-01) — re-grounding claims against evidence
User called a reflection/audit to catch claim-drift (interpretations hardening into facts, "validated"
overclaiming scope, stale hedges). Findings of the audit:
- NEW VERIFICATION (audit_angular.py): the load-bearing claim "the construction can't make independent angular
  structure, so the blind spot is safe for its forms" was ASSERTED, not verified. Now TESTED directly: 144
  natural forms (8 levels × 6 k × 3 rate-seeds); of 513 pairs where fp says ~same (fp-dist<0.01), the LARGEST
  orthogonal pdist gap was 0.109 — below the 0.15 "real difference" bar, far from the engineered blind spot's
  0.67. → CLAIM NOW EARNED: the blind spot is not exercised by the construction's own forms.
- DRIFT CORRECTED #1: the sabotage-stage VERDICT said "VALIDATED ... with demonstrated headroom" and listed an
  "OPEN THREAD: no blind-spot pair found." Both were written BEFORE the blind spot was found and CONTRADICTED
  the later finding. Reconciled: "headroom" overclaimed (the sabotages it survived all disturbed covariance or
  hole; that's not general headroom — the blind spot was then found); the "open thread" is CLOSED (blind spot
  found). Paragraph now points forward to the blind-spot section instead of contradicting it.
- DRIFT CORRECTED #2: "the validated fingerprint" (bare) at F2 → scoped to "validated as a tool for gross-shape
  separation; see blind-spot entry." "F4 untriggered" (×2, stale) → "trigger later shown DEMONSTRABLE by the
  blind-spot finding, fires only for out-of-construction forms."
- CHECKED & LEFT AS-IS (already honest): F3's "validated as a tool" is scoped with its evidence (fill-invariant,
  confirms B, separates E,F) — not blanket. The F3 "identity is measurement-relative" interpretation is already
  explicitly marked UNVERIFIED. SE(4) rung "VERIFIED" claims each cite a script + specific result (eigenvalue
  counts, w-span) — grounded.
NET: the one genuinely unverified load-bearing claim (angular-structure safety) is now verified; two stale
pre-blind-spot overclaims reconciled. No interpretation is currently logged as a fact.

## ★ EXPRESSION LIBRARY on the spine + THE CUBE QUESTION (2026-06-01)
User reached back to split_view.html (the formula-comparison file: staged/freed/hopf/torus/lissajous/epicyclic,
driven by a ratio library) asking how to get COMPARABLE data under the calibrated fingerprint spine — and noted
the cube observation ("Lissajous at π → cube") was never properly stressed.

WHY THE OLD DATA WASN'T COMPARABLE (confirmed): split_view measured bounding-box extent + per-step distance +
%-of-c_toy (a coherence/aliasing vocabulary). The cube was "confirmed" by EQUAL-EXTENT BBOX — but equal extent
is a gross-shape fact a SPHERE also has, so the old ruler literally could NOT distinguish cube from sphere. The
fingerprint spine (PCA ratios + hole) is a different, and now common, ruler.

BUILT (expr_library.py, headless): ported the formulas, sampled each identically (Weyl phase walk), ran the SAME
fingerprint() → comparable data at last. Distinct fingerprints per formula at level 3:
  lissajous [1.0,1.0,0] · freed/sphere [0.5,0.5,0] · torus [1.0,0.20,0.36] · epicyclic [0.99,0.04,0.08] ·
  hopf [1.0,0.65,0.08]. (These genuinely separate — the thing the old bbox vocabulary couldn't give.)

THE CUBE — reproduced, characterized, and it ANSWERS the angular question:
- A naive π-cascade gives a DEGENERATE FLAT figure (x-extent 0), NOT a cube. The old "cube" depended on settings
  never written down + a ruler that couldn't verify it → status was "unreproduced, evidence insufficient."
- Found what actually fills a cube (cube_hunt.py): 3 COMPARABLE incommensurate/commensurate axis freqs. 3:4:5
  gives 20% CORNER MASS (sphere=0%), extent ratio 0.95 → REAL corners (actual point-mass where a sphere has
  none). So: the cube's angles are REAL form-structure, measurable (corner-fraction), not a fill artifact.
- ★ DOES THE FP SEE THE CUBE? Solid cube fp [0.98,0.96,0.02] vs sphere-shell [0.99,0.98,1.0] → dist 0.98, large.
  BUT it's carried ENTIRELY by the HOLE (cube filled 0.02, sphere hollow 1.0); the eigenvalue ratios are nearly
  identical (cube and ball have ~the same 2nd moment). So the fp distinguishes them by FILL, NOT by detecting
  corners. A SOLID cube vs a SOLID ball (same fill) → fp would be ~blind (same eigenvalues, same ~0 hole). The
  corners live in the fp's blind region.
- ★ UNIFICATION: the cube question and the angular blind spot are the SAME finding from two directions. The fp
  measures shape-ENVELOPE (2nd moment) + radial FILL, and is BLIND to angular/corner structure. "Cube vs sphere"
  was catchable here only because this cube is solid and this sphere is hollow — a coincidence of the comparison,
  not cube-detection.
- NUANCE: "the Lissajous cube" is a FAMILY, not one form — rational freqs (3:4:5) = closed curve tracing cube
  EDGES (sparse wireframe); irrational (√2:√3:√5) = denser corner-reaching fill (~7% corners). They fingerprint
  differently. The old single "cube" label hid this spectrum.
- METHOD: again a written-down claim ("π→cube") didn't reproduce because the exact recipe wasn't recorded and
  the original ruler couldn't verify it. Reinforces recording exact recipes + using a ruler that can see the
  claimed feature.
STATUS: expression-library substrate exists headless + comparable. NOT yet in any viewer. The cube is real;
detecting corners (form-angles) would need a corner/angular descriptor — same family as F4 (Zernike/EFD) — IF
the project wants to fingerprint angular structure. Open: discuss which formulas + what to build into the viewer.

## ★ TS_formulas G0+G1 — DONE (2026-06-01) — formula bank wired on the spine
Advanced TS_fingerprint → TS_formulas.html (current working file; TS_fingerprint frozen). Built the expression
library into the viewer.
- G0 (formula abstraction): added a FORMULA registry + selector (formulaSel). 'staged' = the verified SE(4)
  buildRaw, UNTOUCHED (dispatch falls through to it). Non-staged formulas (freed, lissajous, torus, epicyclic)
  compute directly from ph[] and return 3D early. freed = displace-all-axes + rotate-all-planes per step (the
  visual-derived def, NOT gen-sum), verified to sweep volume (in-viewer L3 self-scaling fp [0.80,0.73,0.005],
  near-zero hole = filled).
- G1 (camera gating): the 4D camera row (row4D: w-spin/proj4/dist4/view4) HIDES for non-staged formulas (they're
  3D-native) and shows for staged. Per decision D1.
- VERIFIED (verify_clean.py): all in-viewer formulas produce well-defined comparable fingerprints under the
  HTML's EXACT phase walk (alpha[k]=TAU*sqrt(WEYL[k])): lissajous [1.0,1.0,0], torus [0.60,0.60,0.36], epicyclic
  [0.99,0.04,0.07], freed [0.80,0.73,0.005]. Parses, 74 ids resolve.
- ★ FINDING (from a verify discrepancy that turned out informative): a formula's fingerprint is RATE-DEPENDENT,
  not intrinsic to the formula alone. The torus reads [0.60,0.60] under HTML rates (√2,√3,√5 by axis) vs
  [1.0,0.20] under a different rate→axis assignment — because which rate drives the major vs minor angle changes
  how the surface fills. So viewer comparisons are of (formula + rate assignment), not pure formulas. Hold the
  rate assignment fixed (or note it) when comparing. Same lesson as the cube: form depends on ratio+sampling.
  (The transient 0.57 'mismatch' was the verify harness importing expr_library's different rate assignment — NOT
  an HTML bug; the HTML uses the Weyl √prime walk consistently.)
STATUS: G0✅ G1✅ on TS_formulas. Remaining in plan: G2 (port the full RATIO_LIB presets), then STOP and measure
the library live. G3 (corner descriptor) + 5D/6D + split-view all parked. The rate-dependence finding makes G2
(ratio library) more pointed: the ratio is part of a form's identity in this bank.

## ★ DOC-SYSTEM REORG (2026-06-01) — sorting the 30 accumulated docs into the 5 kinds (validates the spec)
The blueprint's doc-system spec (5 kinds) was tested against the 30 docs that actually accumulated. ALL 30 sort
cleanly into {blueprint, index, map, plan, findings, brief, work-files} or archive — the spec holds (no doc
needed a 6th kind). The sort = the reorg:

BLUEPRINT (global, 1): working_system_BLUEPRINT.md (+ _v1.._v4 = frozen priors of it).
INDEX (global, 1): toy_catalog.md.
MAP (per project): pipeline_state.md.
PLAN (per project, 1 live + record): integration_plan_formulas.md (LIVE) · integration_plan_fingerprint.md
  (done→record) · integration_plan.md (archive→record).
BRIEF (per instrument): TS_BRIEF.md · spline_continuity_BRIEF.md.
FINDINGS (per project — these all FOLD IN as entries, were separate files only by accretion):
  findings.md (the home) · apparatus_audit.md · critique_the_case_against.md · essay_on_the_instrument.md ·
  hygiene_audit.md  → all are findings/reflection ENTRIES, not distinct kinds.
RESEARCH-STAGE outputs (spent dives/seeds; fold key results into FINDINGS, archive the rest):
  dive_brief.md · dive_brief_presentation.md · research_targets.md · split_view_spec.md · kb_sketch.md ·
  knowledge_base_capture.md.
ARCHIVE — memory-freight from earlier sessions (the OLD organizing docs the 5-kind system replaces; froze, don't
  delete): master_plan.md · session_log.md · math_study_plan.md · curriculum_blueprint.md · sprint_day1.md ·
  ux_plan.md.
WORK-FILES (not docs): the TS_*.html chain + spline_*.html + other .html experiments.

NET: ~30 docs → 5 live kinds (blueprint, index, map, 1 live plan, findings) + per-instrument briefs + frozen
priors/archive. The sprawl was mostly (a) findings that became separate files instead of entries, and (b) stale
memory-docs from before the map-not-memory discipline. No actual deletion — archive/freeze per the chain-only-
grows rule. The spec earned itself: every doc fit a kind. (Physical reorg deferred — this sort IS the map of it;
acting on it is housekeeping, do when it pays.)

## ★ DOC-SYSTEM: 7th kind added — STUDY (2026-06-01, supersedes part of the reorg above)
The earlier reorg folded essays/critiques/audit-writeups INTO findings as entries. That was incomplete: a
research dive (or an essay/critique/audit) produces TWO deposits — (a) atomized typed claims → FINDINGS, and
(b) the coherent synthesis itself → a new kind, **STUDY**. FINDINGS = a ledger of checkable claims you audit;
STUDY = a coherent body you re-read to re-inhabit an area. Distinct by form+purpose, not subject (a STUDY can be
of a foreign area OR of our own work). Passes the fold test (a synthesis isn't a typed claim, doesn't take an
E/V/D tag, so it can't be a FINDINGS entry).
- KEY REFRAMING (the reason STUDY is safe to add): docs split into NAVIGATIONAL (map/index/brief/live-plan —
  routed THROUGH, must stay lean, map-not-memory) vs REFERENCE/RECORD (findings/study — routed TO, may
  ACCUMULATE FREELY). A dumping ground is fine; it just can't be the navigation. So STUDY has no strict
  gatekeeper — its only rule is it stays OUT of the navigation (the MAP points at the shelf; no path runs
  through the pile). This also corrects an over-universal reading of "map not memory": that's a NAVIGATIONAL
  rule, not a law for all docs — FINDINGS was always a made-for-audit exception, STUDY is the made-for-memory one.
- RESORT: apparatus_audit.md · critique_the_case_against.md · essay_on_the_instrument.md → STUDY (not FINDINGS
  entries). Their extractable claims, where any, remain FINDINGS entries. findings.md stays the FINDINGS home.
- Doc kinds now SEVEN: BLUEPRINT · INDEX · MAP · PLAN · FINDINGS · STUDY · BRIEF (+ work-files, not a doc). All
  `+` except INDEX. Templates: each kind has a *_TEMPLATE.md.
