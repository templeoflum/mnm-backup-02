---
name: homogeneous-coordinates
type: object
object-type: construction
essence: name a projective point by (n+1) numbers defined only up to scale — so points at infinity get ordinary coordinates and projective maps become linear
field: [field.coordinate-systems-erlangen-program, field.projective-geometry]
status: foundational
state: verified
attribution: August Ferdinand Möbius, Der barycentrische Calcul (1827); independently Plücker (1830), Feuerbach, Bobillier
formalized: true
source: [source.mobius-1827, source.plucker-1830]
depends-on: [object.cartesian-coordinates]
used-by: []
---

**statement (plain)** — to coordinatize projective space the way Cartesian coordinates do Euclidean space, give each point one extra number and agree that scaling all the numbers by the same nonzero factor names the same point. In the plane: a point is a triple (X, Y, Z), not all zero, with (X, Y, Z) and (λX, λY, λZ) the same for any λ ≠ 0. When Z ≠ 0 this is the ordinary point (X/Z, Y/Z); when Z = 0 it is a "point at infinity" (a direction). The payoff: parallel lines meet, duality is symmetric, and projective transformations become ordinary linear/matrix maps.

**statement (formal)** — for projective space ℙⁿ(K) over a field K, a point is an equivalence class of (n+1)-tuples (x₀,…,xₙ) ∈ Kⁿ⁺¹ \ {0} under x ∼ λx for λ ∈ K×; the class [x₀:…:xₙ] is the homogeneous coordinates of the point. Equivalently ℙⁿ(K) = (Kⁿ⁺¹\{0})/K×, the lines through the origin in Kⁿ⁺¹. The affine chart {xₙ ≠ 0} recovers Kⁿ via (x₀/xₙ,…,x_{n−1}/xₙ); the hyperplane {xₙ = 0} is the points at infinity. Projectivities are induced by GL(n+1, K), acting as PGL(n+1, K) — connecting to the [[object.erlangen-program]] reading of projective geometry. **[confirmed]**

**status** — foundational construction, not a theorem.

**lineage (multiple independent discovery)** — first published by August Ferdinand Möbius in *Der barycentrische Calcul* (1827), where a point is the barycenter (center of mass) of weights at the vertices of a fixed triangle — scaling all weights leaves the point fixed, exactly the scale-invariance above [[source.mobius-1827]]. Homogeneous coordinates are commonly reported as discovered independently four times — Möbius, Julius Plücker (1830, treating them algebraically without the mass interpretation [[source.plucker-1830]]), Karl Wilhelm Feuerbach, and Étienne Bobillier — with Möbius holding publication priority. **[confirmed]** for Möbius and Plücker; **[confirmed as attribution]** for the four-fold independent-discovery claim (reported by Wikipedia/MathWorld, primary works not opened).

**trap avoided** — Möbius's coordinate work is the 1827 *barycentrische Calcul* [[source.mobius-1827]], a different work from his 1832 Crelle paper on the number-theoretic Möbius function ([[source.mobius-1832]]). "Plücker coordinates" for lines in ℙ³ are a related but distinct later construction.

**relation** — homogeneous coordinates are the projective extension of [[object.cartesian-coordinates]]; their scale-invariance is what lets the projective group act linearly, tying them to [[object.erlangen-program]].

**sources** — [[source.mobius-1827]], [[source.plucker-1830]]; cross-confirmed against Wikipedia "Homogeneous coordinates" and Britannica "Der barycentrische Calkul."
