---
name: tracy-widom-distribution
type: object
object-type: law
essence: the universal fluctuation law of the largest eigenvalue at the spectral edge — F₂ via Painlevé II
field: [field.random-matrix-theory]
status: established
state: settled
attribution: C. A. Tracy & H. Widom (1993, 1994)
formalized: true
source: [source.tracy-widom-1993, source.tracy-widom-1994, source.dyson-1962, source.tao-rmt, source.anderson-guionnet-zeitouni]
depends-on: [object.gaussian-ensembles, object.wigner-semicircle-law, field.probability-theory]
used-by: []
---

**statement (plain)** — the largest eigenvalue of a large random matrix sits near the right edge of the semicircle (around 2√n), but it fluctuates. After centering and rescaling, those fluctuations follow a specific universal distribution — the Tracy–Widom distribution. It is asymmetric (a longer tail to the left), it is not Gaussian, and it appears far beyond random matrices: in the longest increasing subsequence of a random permutation, in growth models of the KPZ universality class, and in many other "largest of many correlated quantities" problems. It is the edge analogue of the central limit theorem.

**statement (formal)** — for a Gaussian β-ensemble of size N (β = 1, 2, 4 → GOE, GUE, GSE), the largest eigenvalue λ_max, centered at the semicircle edge 2√N and rescaled by N^{1/6}, converges:
  N^{1/6}(λ_max − 2√N) ⇒ TW_β.
For β = 2 (GUE) the limiting CDF is
  F₂(s) = exp( −∫_s^∞ (x − s) q(x)² dx ),
where q is the **Hastings–McLeod solution** of the **Painlevé II** equation
  q''(x) = x q(x) + 2 q(x)³,  with  q(x) ∼ Ai(x) as x → +∞.
The GOE and GSE cases are
  F₁(s) = √F₂(s) · exp( −½ ∫_s^∞ q(x) dx ),
  F₄(s/√2) = √F₂(s) · cosh( ½ ∫_s^∞ q(x) dx ). **[confirmed]**

**status** — established (universal limiting distribution).

**proof (reference)** — the GUE edge is governed by the **Airy kernel** K_Ai(x,y) = (Ai(x)Ai'(y) − Ai'(x)Ai(y))/(x − y); F₂ is the Fredholm determinant det(I − K_Ai) on (s, ∞), which Tracy & Widom reduced to the Painlevé II representation above. See [[source.tracy-widom-1994]], [[source.tao-rmt]], [[source.anderson-guionnet-zeitouni]]. **[confirmed]**

**lineage** — introduced by Craig A. Tracy and Harold Widom: first announced in *Physics Letters B* (1993) [[source.tracy-widom-1993]] and developed fully in *Communications in Mathematical Physics* (1994) [[source.tracy-widom-1994]], both titled "Level-spacing distributions and the Airy kernel." The three indices β = 1, 2, 4 follow Dyson's symmetry classification [[source.dyson-1962]]. **[confirmed]**

**sources** — [[source.tracy-widom-1993]], [[source.tracy-widom-1994]], [[source.tao-rmt]], [[source.anderson-guionnet-zeitouni]]; Wikipedia "Tracy–Widom distribution."
