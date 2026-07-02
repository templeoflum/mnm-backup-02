---
name: riemannian-metric
type: object
object-type: definition
essence: a smoothly varying inner product on the tangent spaces of a manifold — it supplies lengths, angles, areas, and so makes a bare manifold into a geometry
field: ["[[field.differential-geometry]]"]
status: foundational
state: settled
attribution: B. Riemann (1854 habilitation, pub. 1868), as the positive-definite line element ds² = Σ g_ij dxⁱ dxʲ
formalized: true
source: ["[[source.riemann-1868]]", "[[source.do-carmo-1976]]"]
depends-on: ["[[object.smooth-manifold]]"]
used-by: ["[[object.geodesic]]", "[[object.gaussian-curvature]]", "[[object.gauss-bonnet-theorem]]"]
---

**statement (plain)** — a smooth manifold by itself has no notion of length or angle. A Riemannian metric supplies one: at every point it gives a way to measure the length of a tangent vector and the angle between two of them, and this measuring rule varies smoothly from point to point. Once you have it you can measure the length of any curve, find shortest paths, define areas and volumes, and speak of curvature. It is written infinitesimally as the line element ds² = Σ g_ij dxⁱ dxʲ.

**statement (formal)** — a Riemannian metric on a smooth manifold M is a smooth assignment to each point p ∈ M of a symmetric, positive-definite bilinear form
g_p : T_pM × T_pM → ℝ
on the tangent space T_pM (i.e. a smooth, symmetric, positive-definite (0,2)-tensor field). In local coordinates (x¹,…,xⁿ) it is g = Σ_{i,j} g_ij dxⁱ ⊗ dxʲ with g_ij = g(∂_i, ∂_j) a smooth, symmetric, positive-definite matrix at each point. The length of a curve γ on [a,b] is L(γ) = ∫_a^b √(g_{γ(t)}(γ'(t), γ'(t))) dt. A manifold with a chosen Riemannian metric is a Riemannian manifold. **[confirmed]**

**status** — foundational definition.

**lineage** — introduced by Bernhard Riemann in the 1854 habilitation lecture *Über die Hypothesen, welche der Geometrie zu Grunde liegen* (published 1868), where he posits the line element as the square root of a positive-definite quadratic form in the coordinate differentials [[source.riemann-1868]]. This generalized Gauss's first fundamental form for surfaces to n dimensions and founded what is now called Riemannian geometry. The tensorial / abstract-manifold formulation came later (Levi-Civita, Ricci; Cartan). **[confirmed]**

**door** — do Carmo, *Differential Geometry of Curves and Surfaces*, treats the first fundamental form (the metric for surfaces in ℝ³) [[source.do-carmo-1976]]; the abstract case is do Carmo's *Riemannian Geometry* and Lee's *Riemannian Manifolds*.

**sources** — Wikipedia, "Riemannian manifold"; Encyclopedia of Mathematics, "Riemannian metric" / "Riemannian geometry"; lecture notes (Heckman, Radboud; USTC) confirming the smooth-symmetric-positive-definite definition and the 1854 line-element origin.
