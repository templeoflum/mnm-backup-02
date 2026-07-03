---
name: invariant-signature-curve
type: object
object-type: concept
essence: Cartan's equivalence in practice — two curves are related by a group transformation iff their signature curves (e.g. curvature vs. its arc-length derivative) coincide
field: ["[[field.statistical-shape-analysis]]"]
status: established
state: float
attribution: Cartan (moving frames); Calabi, Olver, Shakiban, Tannenbaum, Haker (1998)
formalized: true
source: ["[[source.calabi-olver-1998]]"]
depends-on: []
used-by: []
---

**statement (plain)** — to tell whether two shapes are the same up to rotation/translation (or scaling), you do not compare them point by point; you compare their signatures — coordinate-free curves built from local invariants like curvature. Two curves match under the group exactly when their signatures are identical, so recognition becomes signature comparison.

**statement (formal)** — by Cartan's theorem, two curves are group-equivalent iff their signature curves coincide; the Euclidean signature is the locus of (κ, κ_s) (curvature vs. its arc-length derivative). Integral invariant signatures (Manay et al. 2004) trade differential for integral operators to resist noise. **[confirmed]**

**basis** — Calabi–Olver et al. (1998); Fels–Olver moving-frame method (1999) generalizes Cartan's repère mobile.
