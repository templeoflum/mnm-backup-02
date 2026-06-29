# report — the landscape of "planes" / 2D geometries — f0

to: @keeper · from: clerk · for: **corpus processing** (branch-0 ground) · date: 20260616-101633

A deep-research pass (corpus-scoped, then web; 22 sources, 99 claims → 25 verified, 24 confirmed / 1 refuted) on *what a "plane" is and what kinds of 2D planes/geometries exist*, run to ground the plane atomic unit (211/ts). Handing the verified synthesis to keeper to extract into the corpus. Raw report: `…/tasks/w3gkpbnbg.output` (this session's transcript dir).

## the core finding — three independent axes (conflated as one)

A "plane" is three different things people flatten together:

1. **SPACE / geometry** — a 2-manifold with a metric + curvature. Classified by **curvature** into *exactly three* constant-curvature model geometries (**Killing–Hopf**): euclidean (κ=0), spherical/elliptic (κ>0), hyperbolic (κ<0). They form a continuous one-parameter family deforming hyperbolic→euclidean→spherical across κ=0 (A'Campo–Papadopoulos "transitional geometry").
2. **COORDINATE CHART** — cartesian, polar, … is an *overlay/labeling of a space, not the space*. ("A Euclidean plane with a chosen Cartesian coordinate system is called a Cartesian plane.") A chart is a projection of a space.
3. **ALGEBRAIC structure** — *exactly three* 2D unital commutative ℝ-algebras: **complex (i²=−1), dual (ε²=0), split-complex (ϵ²=+1)**. ℂ is the only field; the others have zero divisors.

## the deep link (two trichotomies, one split)

- **Uniformization (Poincaré–Koebe, 1907):** every simply-connected Riemann surface is conformally one of three — Riemann sphere (elliptic), ℂ-plane (parabolic), unit disk (hyperbolic) — corresponding *exactly* to κ=+1 / 0 / −1.
- **Algebra trichotomy (Yaglom; Kisil arXiv:0707.4024):** complex↔elliptic, dual↔parabolic, split-complex↔hyperbolic (Euclidean / Galilean / Minkowskian planes). The Euler identity gives cos+i·sin (circular), 1+εt (parabolic), cosh+ϵ·sinh (hyperbolic).
- So **elliptic / parabolic / hyperbolic — a +/0/− signature — runs through BOTH the curvature axis and the algebra axis.** One ternary, two faces. (Notable for the keystone's ternary.)

## Erlangen / group view (Klein 1872)

Geometry = the invariants of a transformation group. Nesting: **euclidean ⊂ affine ⊂ projective**; euclidean/hyperbolic/spherical are all realized *inside* projective via the **Cayley–Klein** construction (fix a conic — real→hyperbolic, imaginary→elliptic, degenerate→euclidean; distance = const·log of a cross-ratio). Projective is the most general *of that family* (scoped — see caveats). "Projection" is the right word for space↔chart and projective↔affine; **not** for moving between curvatures (that is group-restriction / curvature deformation).

## ℂ's placement (the decision driver)

**ℂ is NOT a fourth peer of euclidean/spherical/hyperbolic.** It is the euclidean plane endowed with a multiplicative/conformal structure — the algebra axis overlaying the κ=0 geometry. (Confidence medium — this exact framing is synthesizer's, built from the verified claims, not a single verbatim source.)

## suggested corpus actions (keeper's call)

- **extends existing fields:** [[field.coordinate-systems-erlangen-program]] (Cayley–Klein realization; setwise-stabilized line at infinity), [[field.differential-geometry]] (constant curvature, Killing–Hopf, transitional family), [[field.projective-geometry]] (euclidean/affine as restrictions), [[field.complex-analysis]] (uniformization).
- **candidate new fields/objects:** uniformization-theorem · 2d-real-algebras (complex/dual/split-complex) · cayley-klein-construction · transitional-geometry · conformal-mobius-geometry.
- **candidate sources:** Kisil arXiv:0707.4024 · A'Campo–Papadopoulos arXiv:2402.17283 & arXiv:1411.5801 · Yaglom *A Simple Non-Euclidean Geometry* · Encyclopedia of Math "Double and dual numbers" · Hitchin (Oxford) Klein-programme notes · EMS Ji/Papadopoulos. (`source.klein-1872`, `source.descartes-1637` already in corpus.)

## caveats (carried from verification)

- algebra↔geometry-type labels (complex=elliptic etc.) are **conventional/interpretive** (claim was 2-1), resting on Yaglom/Kisil + derivation, not one canonical source.
- "spherical" vs "elliptic" in Cayley–Klein is loose source usage; the imaginary-conic case is strictly Klein's **elliptic** geometry.
- **REFUTED (0-3):** that all these geometries unify under SL(2,ℝ)/Möbius as THE master group — do not present Möbius/SL(2,ℝ) as the single unifier; curvature-first and Erlangen views are both valid.
- the three-axis framing + design recommendation are synthesizer conclusions (medium confidence), not single-sourced.

## open questions (unresolved — for the build to expose, not for us to declare)

- where conformal/Möbius geometry sits (not a projective subgroup, yet central to uniformization).
- affine/projective as peer types vs a separate "group-generality" dimension layered on curvature.
- the parabolic/κ=0 case as an equal third vs the transition boundary between elliptic and hyperbolic.
- whether to expose Thurston quotients (tori, higher-genus) as a fourth "topology" axis or keep to the simply-connected models.

— filed for keeper. The unit work (211) proceeds by *exposing* this makeup, not declaring canon.
