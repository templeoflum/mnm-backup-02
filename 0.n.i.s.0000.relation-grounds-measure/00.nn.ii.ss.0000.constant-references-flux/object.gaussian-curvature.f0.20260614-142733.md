---
name: gaussian-curvature
type: object
object-type: definition+theorem
essence: the product of the two principal curvatures of a surface — and, by the Theorema Egregium, a quantity intrinsic to the surface's own metric, unchanged by bending
field: [field.differential-geometry]
status: proven
state: float
attribution: C. F. Gauss, Disquisitiones generales circa superficies curvas (1827) — defines the curvature and proves the Theorema Egregium
formalized: true
source: [source.gauss-1827, source.do-carmo-1976]
depends-on: [object.riemannian-metric, object.smooth-manifold]
used-by: [object.gauss-bonnet-theorem]
---

**statement (plain, definition)** — at a point on a surface, look at all the curves cut by planes through the surface normal; the steepest and shallowest bending rates are the two principal curvatures κ₁ and κ₂. Their product K = κ₁κ₂ is the Gaussian curvature. It is positive where the surface domes like a sphere, negative where it saddles, zero where it is flat or can be unrolled flat (a cylinder). This definition refers to how the surface sits in 3-space.

**statement (plain, Theorema Egregium)** — Gauss's "remarkable theorem": K can actually be computed using only measurements made *within* the surface — distances and angles along it (the first fundamental form / metric) — with no reference to how the surface is embedded in space. Consequence: bending a surface without stretching it (a local isometry) leaves K unchanged. A flat sheet (K=0) cannot be wrapped onto a sphere (K>0) without distortion — why every flat map of the Earth must lie.

**statement (formal)** — for a regular surface S ⊆ ℝ³, the Gaussian curvature is K = det(S_p), the determinant of the shape operator (Weingarten map), equivalently K = κ₁κ₂ = (eg − f²)/(EG − F²) in terms of the second and first fundamental form coefficients. **Theorema Egregium:** K is expressible through the coefficients E, F, G of the first fundamental form and their derivatives alone; hence K is invariant under local isometries. Equivalently, if two surfaces are locally isometric, their Gaussian curvatures agree at corresponding points. **[confirmed]**

**status** — proven (Gauss, 1827).

**lineage** — both the definition of K and the Theorema Egregium are due to Carl Friedrich Gauss, *Disquisitiones generales circa superficies curvas* (1827) [[source.gauss-1827]]. Gauss's own phrasing of the theorem: "If a curved surface is developed upon any other surface whatever, the measure of curvature in each point remains unchanged." The result is the seed of intrinsic geometry, generalized by [[object.riemannian-metric]] (Riemann, 1854/1868) to the curvature of higher-dimensional manifolds. **[confirmed]**

**door** — do Carmo, *Differential Geometry of Curves and Surfaces*, ch. 3–4 (Gauss map, second fundamental form, Theorema Egregium) [[source.do-carmo-1976]].

**sources** — Wikipedia, "Theorema Egregium" and "Gaussian curvature"; HandWiki, "Theorema Egregium"; Harvard Math 136 lecture 14 (Knill); Theorem of the Day, "Theorema Egregium" — agreeing on the 1827 attribution, the K = κ₁κ₂ definition, and the isometry-invariance statement.
