---
name: exponential-map-lie
type: object
object-type: construction
essence: exp: 𝔤 → G sends a Lie-algebra element to the time-1 point of its one-parameter subgroup — a local diffeomorphism from algebra to group near the identity
field: [field.lie-theory, field.differential-geometry]
status: standard
state: verified
attribution: classical; rooted in S. Lie's integration of infinitesimal transformations (1870s); matrix exponential earlier
formalized: true
source: [source.hall-lie, source.kirillov-lie, source.lie-engel-1888]
depends-on: [object.lie-group, object.lie-algebra]
used-by: [object.lie-group-lie-algebra-correspondence, object.baker-campbell-hausdorff-formula]
---

**statement (plain)** — the exponential map is the bridge from a Lie algebra back up to its Lie group. Given a direction X in the algebra, you follow the unique "constant-speed" path through the group that starts at the identity in that direction, and exp(X) is where you are after one unit of time. For matrices it is exactly the familiar matrix exponential e^X = I + X + X²/2! + …. Near the identity it is invertible (a local diffeomorphism), so the flat algebra is a faithful local chart for the curved group.

**statement (formal)** — for a [[Lie group]] G with [[Lie algebra]] 𝔤, and X ∈ 𝔤, let γ_X: ℝ → G be the unique one-parameter subgroup (homomorphism) with γ_X′(0) = X — equivalently the integral curve through the identity of the left-invariant vector field determined by X. Define
exp: 𝔤 → G, exp(X) := γ_X(1).
Then exp is smooth, satisfies exp((s+t)X) = exp(sX)·exp(tX), and its differential at 0 is the identity map of 𝔤; hence by the inverse function theorem exp is a diffeomorphism from a neighborhood of 0 ∈ 𝔤 onto a neighborhood of the identity e ∈ G. For a matrix Lie group, exp(X) = Σ_{k≥0} Xᵏ/k! (the matrix exponential). **[confirmed]**

Caveats: exp is in general **not** a homomorphism (exp X · exp Y ≠ exp(X+Y) unless [X,Y]=0 — this gap is exactly what the [[object.baker-campbell-hausdorff-formula]] measures), and it is **not** globally a diffeomorphism; surjectivity holds for connected compact groups but can fail otherwise (e.g. SL(2,ℝ)). **[confirmed]**

**proof / status** — a standard construction; existence and uniqueness of γ_X follow from the existence-uniqueness theorem for ODEs / flows of vector fields, and the local-diffeomorphism claim from d(exp)₀ = id and the inverse function theorem.

**lineage** — the idea is classical, descending from [[Sophus Lie]]'s reconstruction of finite transformations by integrating infinitesimal ones ([[source.lie-engel-1888]]); the matrix exponential predates Lie theory. No single contested attribution.

**door** — B. C. Hall, *Lie Groups, Lie Algebras, and Representations*, exponential-map chapters [[source.hall-lie]]; A. Kirillov Jr. (draft PDF) [[source.kirillov-lie]].

**sources** — [[source.hall-lie]], [[source.kirillov-lie]], [[source.lie-engel-1888]]; cross-checked against nLab (entry "exponential map") and Wikipedia ("exponential map (Lie theory)"). **[confirmed]**
