---
name: kendall-shape-space
type: object
object-type: concept
essence: the space of shapes of k landmarks in m dimensions after removing translation, scale, and rotation — for m=2 it is the complex projective space CP^{k−2}
field: ["[[field.statistical-shape-analysis]]"]
status: established
state: settled
attribution: D. G. Kendall (1977, 1984)
formalized: true
source: ["[[source.kendall-1984]]"]
depends-on: []
used-by: ["[[object.procrustes-distance]]"]
---

**statement (plain)** — the “shape” of a set of marked points is what you have left once position, size, and orientation no longer matter. Kendall showed these shapes themselves form a smooth curved space. For points in the plane that space is a familiar geometric object (complex projective space); for triangles it is simply a sphere.

**statement (formal)** — for k landmarks in ℝ^m, remove translation and scale (the pre-shape sphere), then rotation: the shape space Σ^k_m = pre-shape / SO(m). For m=2, Σ^k_2 ≅ CP^{k−2}; triangles (k=3, m=2) give a sphere of radius 1/2. **[confirmed]**

**basis** — Kendall (1977, 1984); the foundational object of statistical shape analysis, with the Procrustes distance as its metric.
