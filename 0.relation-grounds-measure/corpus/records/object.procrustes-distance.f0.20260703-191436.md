---
name: procrustes-distance
type: object
object-type: concept
essence: the metric on Kendall shape space — the residual distance between two landmark configurations after optimally removing translation, scale, and rotation
field: ["[[field.statistical-shape-analysis]]"]
status: established
state: settled
attribution: Kendall (1984); Gower; generalized Procrustes (Rohlf–Slice 1990)
formalized: true
source: ["[[source.kendall-1984]]", "[[source.dryden-mardia-1998]]"]
depends-on: ["[[object.kendall-shape-space]]"]
used-by: []
---

**statement (plain)** — to compare two shapes, slide, scale, and rotate one to sit as close as possible on top of the other; the leftover mismatch is the Procrustes distance. It is the natural “how different are these shapes” number, and it is exactly the distance built into Kendall's shape space.

**statement (formal)** — for pre-shapes x, y (translation and scale removed), the Procrustes distance is d_P(x,y) = min_{R∈SO(m)} ‖x − Ry‖, the geodesic/chordal distance on the shape space Σ^k_m. Generalized Procrustes analysis extends it to samples. **[confirmed]**

**basis** — the working metric of geometric morphometrics; door: Dryden–Mardia.
