---
name: residue-theorem
type: object
object-type: theorem
essence: a contour integral equals 2πi times the sum of the enclosed residues, weighted by winding number
field: ["[[field.complex-analysis]]"]
status: proven
state: settled
attribution: A.-L. Cauchy — calculus of residues introduced 1826 (term "résidu"), developed 1826–1829
formalized: true
source: ["[[source.cauchy-1826]]", "[[source.ahlfors-1953]]"]
depends-on: ["[[object.cauchy-integral-theorem]]", "[[object.cauchy-integral-formula]]", "[[object.laurent-series]]"]
used-by: []
---

**statement (plain)** — to integrate a function around a closed loop when the function has isolated bad points (poles or other singularities) inside the loop, you do not need to do the integral directly. Instead, to each singularity attach a single number called its residue (the coefficient of the 1/(z−a) term in its local Laurent expansion). The whole loop integral is then just 2πi times the sum of those residues — counting each one as many times as the loop winds around it. This turns hard integrals into algebra.

**statement (formal)** — let U ⊆ ℂ be open and simply connected, let a₁, …, aₙ be points of U, and let f be holomorphic on U \ {a₁, …, aₙ}. For any closed rectifiable curve γ in U \ {a₁, …, aₙ},
∮_γ f(z) dz = 2πi · Σ_{k=1}ⁿ I(γ, a_k) · Res(f, a_k),
where I(γ, a_k) is the winding number (index) of γ about a_k and Res(f, a_k) is the residue of f at a_k. For a positively-oriented simple closed curve, I = 1 for interior points and 0 otherwise, giving ∮_γ f dz = 2πi · Σ Res(f, a_k) over enclosed singularities. **[confirmed]**

**status** — proven.

**proof (reference)** — encircle each a_k with a small circle; on each, the integral picks out 2πi times the residue (the 1/(z−a_k) term of the [[object.laurent-series]]); the [[object.cauchy-integral-theorem]] kills the rest. Standard treatment: Ahlfors, *Complex Analysis*, ch. 5 [[source.ahlfors-1953]]. **[confirmed]**

**lineage** — Cauchy introduced the residue concept (the word *résidu*) in 1826 in *Sur un nouveau genre de calcul analogue au calcul infinitésimal*, developing it with examples across the *Exercices de Mathématiques* (1826–1829) [[source.cauchy-1826]]. The modern winding-number (index) formulation is the general statement found in textbooks (e.g. Ahlfors). **[confirmed]**

**sources** — Wikipedia, "Residue theorem"; MacTutor biography of Cauchy (St Andrews); arXiv:1701.04887 ("Cauchy's residue sore thumb"); Ahlfors, *Complex Analysis* [[source.ahlfors-1953]].
