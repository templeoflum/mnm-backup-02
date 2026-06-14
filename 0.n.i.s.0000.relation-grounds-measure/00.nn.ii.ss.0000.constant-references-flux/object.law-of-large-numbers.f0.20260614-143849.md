---
name: law-of-large-numbers
type: object
object-type: theorem
essence: the sample average of many independent draws converges to the true mean — weak (in probability) and strong (almost surely)
field: [field.probability-theory]
status: proven
state: float
attribution: weak law — Jacob Bernoulli (1713), generalized to i.i.d. finite-mean by Khinchin (1929); strong law — Borel (1909), general form Kolmogorov (1930/1933)
formalized: true
source: [source.bernoulli-1713, source.khinchin-1929, source.borel-1909, source.kolmogorov-1930, source.kolmogorov-1933]
depends-on: [object.kolmogorov-axioms]
used-by: [field.mathematical-statistics, field.monte-carlo-methods]
---

**statement (plain)** — if you repeat an experiment many times independently, the average of the results gets close to the expected value, and the more repetitions, the closer it tends to stay. The *weak* law says the average is *probably* close to the mean for large n; the *strong* law says the running average actually *converges* to the mean for (almost) every infinite sequence of trials. It is why long-run frequencies match probabilities — the bridge between the abstract measure and observed averages.

**statement (formal)** — let X₁, X₂, … be independent and identically distributed with finite mean E[Xᵢ] = μ, and let X̄ₙ = (X₁ + … + Xₙ)/n.
- **Weak law (WLLN)**: X̄ₙ → μ *in probability* — for every ε > 0, P(|X̄ₙ − μ| > ε) → 0 as n → ∞.
- **Strong law (SLLN)**: X̄ₙ → μ *almost surely* — P(limₙ X̄ₙ = μ) = 1.
For i.i.d. variables, a finite mean is necessary and sufficient for the strong law (Kolmogorov). **[confirmed]**

**status** — proven (both laws).

**proof** — WLLN for finite variance follows from Chebyshev's inequality (Var(X̄ₙ) = σ²/n → 0); the finite-mean-only i.i.d. case is Khinchin's, via characteristic functions / truncation [[source.khinchin-1929]]. SLLN: Kolmogorov's sufficient condition Σ Var(Xₙ)/n² < ∞ for independent variables, and the i.i.d. finite-mean form, use the Kolmogorov maximal inequality and the three-series machinery [[source.kolmogorov-1930]] [[source.kolmogorov-1933]].

**lineage** — *weak law*: Jacob Bernoulli's "golden theorem" for Bernoulli trials, *Ars Conjectandi* (1713) [[source.bernoulli-1713]]; name coined by Poisson (1837); generalized to i.i.d. with only a finite mean by Khinchin (1929) [[source.khinchin-1929]]. *Strong law*: first stated by Borel (1909) for the Bernoulli/normal-numbers case [[source.borel-1909]] (proof not fully rigorous), rigorous for Bernoulli trials by Hausdorff (1914), general theory by Kolmogorov (1930, 1933) [[source.kolmogorov-1930]] [[source.kolmogorov-1933]]. **[confirmed]** (Bernoulli 1713 and Borel 1909 are distinct works for the two laws.)

**sources** — primaries above; corroborated by Encyclopedia of Mathematics ("Law of large numbers", "Strong law of large numbers"), Wolfram MathWorld ("Weak Law of Large Numbers"), MacTutor, and Seneta, "A Tricentenary history of the Law of Large Numbers," *Bernoulli* 19(4) (2013). **[confirmed]**

**door** — [[source.blitzstein-hwang]] (ch. 10, LLN & CLT); [[source.grimmett-stirzaker]].
