---
name: poisson-summation-formula
type: object
object-type: theorem
essence: the sum of a function over the integers equals the sum of its Fourier transform over the integers (periodization ↔ sampling duality)
field: [field.harmonic-fourier-analysis, field.analytic-number-theory]
status: proven
state: settled
attribution: S. D. Poisson, Journal de l'École polytechnique, t. XII (1823)
formalized: false
source: [source.poisson-1823, source.stein-shakarchi-2003]
depends-on: [object.fourier-series, object.fourier-transform]
used-by: []
---

**statement (plain)** — adding up the values of a function at every integer gives the same total as adding up the values of its Fourier transform at every integer. More generally, periodizing a function (wrapping it around a circle by summing its integer translates) and sampling its transform are two views of the same data — this duality between periodization and sampling is the heart of the formula, and it links continuous Fourier analysis to lattice sums in number theory.

**statement (formal)** — for a Schwartz function f on ℝ (smooth, rapidly decaying with all derivatives),
  Σ_{n=−∞}^{∞} f(n) = Σ_{k=−∞}^{∞} f̂(k),
where f̂ is the [[object.fourier-transform]] under the e^{−2πi x·ξ} convention. More generally, for the periodization,
  Σ_{n} f(x + n) = Σ_{k} f̂(k) e^{2πi k x},
the right side being the [[object.fourier-series]] of the (1-periodic) left side. A lattice form holds for a lattice L ⊂ ℝⁿ with dual lattice L*:
  Σ_{x∈L} f(x) = (1/covol(L)) Σ_{y∈L*} f̂(y). **[confirmed]**

**status** — proven.

**proof** — let P(x) = Σ_n f(x + n) be the periodization; P is 1-periodic and (for Schwartz f) smooth, so it equals its own [[object.fourier-series]]. Its k-th Fourier coefficient is ∫₀¹ P(x) e^{−2πi k x} dx = ∫_{ℝ} f(x) e^{−2πi k x} dx = f̂(k). Evaluating P at x = 0 gives Σ_n f(n) = Σ_k f̂(k). See [[source.stein-shakarchi-2003]]. **[confirmed]**

**lineage** — first published by Siméon Denis Poisson in his memoir "Suite du mémoire sur les intégrales définies et sur la sommation des séries," *Journal de l'École polytechnique*, cahier 19, tome XII (**1823**), in the course of treating the summation of trigonometric series; he used it in the study of the heat equation [[source.poisson-1823]]. The abstract locally-compact-abelian-group form underlies Tate's 1950 thesis and the Voronoi summation formula. **[confirmed]**

**door** — Stein & Shakarchi, *Fourier Analysis: An Introduction*, ch. 5 §3 [[source.stein-shakarchi-2003]].

**sources** — [[source.poisson-1823]], [[source.stein-shakarchi-2003]]; formula and Poisson/1823 attribution cross-checked against the nLab "Poisson summation formula" article, the Wikipedia "Poisson summation formula" article, and the survey "Summation Formulas, from Poisson and Voronoi to the Present" (independent confirmation of the 1823 *Journal de l'École polytechnique* publication).
