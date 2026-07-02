---
name: neyman-pearson-lemma
type: object
object-type: theorem
essence: for testing two simple hypotheses, the likelihood-ratio test is the most powerful test of any given size
field: ["[[field.mathematical-statistics]]"]
status: proven
state: settled
attribution: Jerzy Neyman & Egon S. Pearson (1933)
formalized: true
source: ["[[source.neyman-pearson-1933]]", "[[source.casella-berger]]", "[[source.wasserman-aos]]"]
depends-on: []
used-by: ["[[object.likelihood-ratio-test]]"]
aliases: ["object.neyman-pearson-lemma"]
---

**statement (plain)** — when you must decide between exactly two fully specified hypotheses, the best possible test — the one that, for a fixed false-alarm rate, catches the true alternative most often — is to compare the likelihood ratio of the two hypotheses against a threshold. Nothing does better.

**statement (formal)** — test H₀: θ = θ₀ against H₁: θ = θ₁ with densities f₀ = f(x; θ₀), f₁ = f(x; θ₁). Consider the likelihood-ratio test with rejection region

  R = { x : f₁(x) > k · f₀(x) }   for some k ≥ 0,

with size α = P_{θ₀}(X ∈ R) (randomizing on the boundary f₁ = k f₀ to hit α exactly). Then:
- **(Sufficiency / existence)** this test is **most powerful** at level α: among all tests φ with E_{θ₀}φ ≤ α, it maximizes the power E_{θ₁}φ.
- **(Necessity)** any most-powerful level-α test must be of this likelihood-ratio form (a.e., except possibly on {f₁ = k f₀}). **[confirmed]**

**status** — proven.

**proof** — for any competing test φ and the NP test φ*, the integrand (φ* − φ)(f₁ − k f₀) ≥ 0 pointwise by construction of R; integrating gives power(φ*) − power(φ) ≥ k(size(φ*) − size(φ)) ≥ 0. See Casella & Berger §8.3.2 (Theorem 8.3.12) [[source.casella-berger]].

**lineage** — Jerzy Neyman & Egon S. Pearson, "On the Problem of the Most Efficient Tests of Statistical Hypotheses," *Phil. Trans. R. Soc. A* 231 (1933):289–337 [[source.neyman-pearson-1933]] (the paper full title prefixes "IX."). Generalizations to composite hypotheses via monotone likelihood ratio give uniformly most powerful (UMP) tests; the Karlin–Rubin theorem extends it. **[confirmed]**

**door** — Casella & Berger, *Statistical Inference*, §8.3 [[source.casella-berger]]; Wasserman, *All of Statistics*, ch. 10 [[source.wasserman-aos]].

**sources** — Neyman & Pearson (1933) [[source.neyman-pearson-1933]]; Casella & Berger [[source.casella-berger]]; Wasserman [[source.wasserman-aos]]. Cross-checked against Wikipedia "Neyman–Pearson lemma" and the Stanford Stats 200 lecture notes. **[confirmed]**
