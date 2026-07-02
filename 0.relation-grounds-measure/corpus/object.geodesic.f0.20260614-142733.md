---
name: geodesic
type: object
object-type: definition
essence: the straightest possible curve on a manifold — locally shortest, with zero intrinsic acceleration; the generalization of the straight line to curved space
field: ["[[field.differential-geometry]]"]
status: foundational
state: settled
attribution: notion classical (Bernoulli, Euler 1700s, shortest surface paths); modern intrinsic/covariant form via Christoffel symbols (1869) and Levi-Civita parallel transport (1917)
formalized: true
source: ["[[source.do-carmo-1976]]", "[[source.riemann-1868]]"]
depends-on: ["[[object.riemannian-metric]]", "[[object.smooth-manifold]]"]
used-by: ["[[object.gauss-bonnet-theorem]]"]
aliases: ["object.geodesic"]
---

**statement (plain)** — a geodesic is the curved-space version of a straight line. On a surface or manifold it is the path that is locally the shortest between nearby points, and equivalently the path that "doesn't turn" — it has no acceleration as felt within the surface; any apparent bending is only the surface itself curving away beneath it. On a flat plane geodesics are straight lines; on a sphere they are great circles (the equator, lines of longitude); these are the routes airplanes follow. A taut thread laid on a surface traces a geodesic.

**statement (formal)** — on a Riemannian manifold (M, g) with Levi-Civita connection ∇, a smooth curve γ : I → M is a geodesic if its velocity is parallel along itself,
∇_{γ'} γ' = 0.
In local coordinates this is the geodesic equation
d²xᵏ/dt² + Σ_{i,j} Γᵏ_{ij} (dxⁱ/dt)(dxʲ/dt) = 0,
where the Γᵏ_{ij} are the Christoffel symbols of g. Geodesics are the critical points (and locally the minimizers) of the length / energy functional; the second condition makes them constant-speed. **[confirmed]**

**status** — foundational definition.

**lineage** — the problem of shortest curves on a surface is classical: Johann Bernoulli and Leonhard Euler studied geodesics on surfaces in the early-to-mid 1700s. The intrinsic formulation rests on later machinery: the Christoffel symbols (Elwin Bruno Christoffel, 1869) and the covariant derivative / parallel transport (Tullio Levi-Civita, 1917), through which "geodesic = curve of zero covariant acceleration" makes sense on any Riemannian manifold ([[object.riemannian-metric]], Riemann 1854/1868) [[source.riemann-1868]]. The "geodesic" terminology comes from geodesy (measuring the Earth). **[confirmed for definition; component dates carried as lineage]**

**door** — do Carmo, *Differential Geometry of Curves and Surfaces*, ch. 4 (geodesics, geodesic curvature) and *Riemannian Geometry* ch. 3 [[source.do-carmo-1976]].

**sources** — Wikipedia, "Geodesic" and "Christoffel symbols"; Encyclopedia of Mathematics, "Geodesic line"; standard lecture notes (Fiveable, Number Analytics) confirming ∇_{γ'}γ' = 0 and the coordinate geodesic equation with Christoffel symbols.
