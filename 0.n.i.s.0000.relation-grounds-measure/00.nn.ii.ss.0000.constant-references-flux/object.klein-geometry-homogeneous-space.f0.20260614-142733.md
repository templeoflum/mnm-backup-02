---
name: klein-geometry-homogeneous-space
type: object
object-type: definition
essence: a geometry made concrete as a coset space G/H — a group G acting transitively, H the stabilizer of a point
field: [field.coordinate-systems-erlangen-program, field.differential-geometry, field.lie-theory]
status: foundational
state: float
attribution: principle from Klein (1872); modern (G,H)/G/H formulation standard via Cartan and Sharpe (1997)
formalized: true
source: [source.klein-1872, source.cartan-moving-frames, source.sharpe-1997]
depends-on: [object.erlangen-program]
used-by: []
---

**statement (plain)** — take a Lie group G of symmetries and fix one point; the subgroup H of symmetries that hold that point still is its stabilizer. Because G moves the chosen point to every other point (it acts transitively), the whole space can be identified with the cosets G/H — "where the point can go, divided by what fixes it." This is the concrete shape of an Erlangen-program geometry: the space is G/H and the geometry is whatever G preserves. Such a space is called homogeneous because it looks the same from every point.

**statement (formal)** — a **Klein geometry** is a pair (G, H) where G is a Lie group and H ⊆ G is a closed subgroup such that the left coset space G/H is connected. G is the **principal group**; X = G/H is the **space** of the geometry, with dim X = dim G − dim H. G acts smoothly and transitively on X by g·(aH) = (ga)H, and H is the stabilizer (isotropy subgroup) of the base coset eH; X is thus a **homogeneous space**. Two Klein geometries (G₁,H₁), (G₂,H₂) are isomorphic iff there is a Lie-group isomorphism φ: G₁ → G₂ with φ(H₁) = H₂. **[confirmed]**

**status** — a definition (formalization of an Erlangen-program geometry); not a theorem.

**attribution / lineage** — the underlying idea is Klein's (a geometry = group + invariants, [[object.erlangen-program]], [[source.klein-1872]]); the explicit modern formulation of a geometry as a homogeneous space G/H, and its curved generalization (Cartan geometry, where a manifold is locally modeled on G/H by "rolling without sliding"), is due to Élie Cartan [[source.cartan-moving-frames]] and is codified in Sharpe's textbook [[source.sharpe-1997]]. Cartan (1939): the synthesis "depends … on the ideas of Klein formulated in his celebrated Erlangen programme while at the same time going far beyond it." **[confirmed]**

**examples** — Euclidean plane: G = the Euclidean group E(2), H = O(2), so X = E(2)/O(2) ≅ ℝ². Projective line: G = PGL(2), H a Borel, X = ℙ¹. The sphere Sⁿ ≅ O(n+1)/O(n). **[confirmed]**

**relation** — this is the bridge from the [[object.erlangen-program]] principle to differential geometry: Klein geometries are the flat model spaces that Cartan geometries curve.

**sources** — [[source.klein-1872]], [[source.cartan-moving-frames]], [[source.sharpe-1997]]; cross-confirmed against Wikipedia "Klein geometry" and nLab "Cartan geometry."
