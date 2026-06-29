---
name: smooth-manifold
type: object
object-type: definition
essence: a space that locally looks like ℝⁿ and is glued together by smooth coordinate changes — the stage on which calculus is done beyond Euclidean space
field: [field.differential-geometry, field.point-set-topology]
status: foundational
state: settled
attribution: notion from Riemann (1854 habilitation, pub. 1868); modern atlas definition Weyl (1913, 2-d) and Veblen–Whitehead (early 1930s); set on a Euclidean footing by Whitney's embedding theorem (1936)
formalized: true
source: [source.riemann-1868, source.weyl-1913, source.whitney-1936, source.do-carmo-1976]
depends-on: []
used-by: [object.riemannian-metric, object.geodesic, object.gaussian-curvature]
---

**statement (plain)** — a smooth manifold is a shape that, if you zoom in anywhere on it, looks just like ordinary flat space ℝⁿ — so you can lay down coordinates locally. Where two such coordinate patches overlap, the formula translating one set of coordinates into the other is infinitely differentiable (smooth). This lets you do calculus — derivatives, tangent vectors, velocities — on curved spaces (spheres, tori, spacetime) that have no global coordinate system. The manifold is the underlying space; the smoothness lives in how the patches are stitched together.

**statement (formal)** — a smooth (C^∞) manifold of dimension n is a topological space M that is Hausdorff and second-countable, together with a smooth atlas: a collection of charts {(U_α, φ_α)} where the U_α are open sets covering M and each φ_α : U_α → φ_α(U_α) ⊆ ℝⁿ is a homeomorphism onto an open subset of ℝⁿ, such that for every overlapping pair the transition map
φ_β ∘ φ_α⁻¹ : φ_α(U_α ∩ U_β) → φ_β(U_α ∩ U_β)
is a C^∞ diffeomorphism between open subsets of ℝⁿ. A maximal such atlas is a smooth structure. **[confirmed]**

**status** — foundational definition (not a theorem; the structure on which the field's theorems live).

**lineage** — the qualitative notion of an n-fold extended "manifoldness" (*Mannigfaltigkeit*) is Riemann's, from the 1854 Göttingen habilitation lecture *Über die Hypothesen, welche der Geometrie zu Grunde liegen* (published posthumously 1868) [[source.riemann-1868]]. The first modern atlas-style definition (for 2-dimensional manifolds / Riemann surfaces) is Hermann [[source.weyl-1913]] (*Die Idee der Riemannschen Fläche*). The general abstract definition was given by Veblen and Whitehead (early 1930s); Hassler Whitney's 1936 *Differentiable Manifolds* embedding theorem showed every such abstract smooth manifold can be realized as a subset of a Euclidean space, securing the definition [[source.whitney-1936]]. **[confirmed]**

**door** — do Carmo treats curves and surfaces (regular surfaces as 2-manifolds in ℝ³) [[source.do-carmo-1976]]; the abstract C^∞ manifold is the standard object of graduate differential geometry (e.g. Lee, *Introduction to Smooth Manifolds*).

**sources** — nLab, "smooth manifold"; Wikipedia, "Differentiable manifold" (history: Riemann, Weyl 1913, Whitney); Whitney, *Annals of Mathematics* 37 (1936): 645–680 (via nLab Whitney-embedding-theorem and Celebratio Mathematica).
