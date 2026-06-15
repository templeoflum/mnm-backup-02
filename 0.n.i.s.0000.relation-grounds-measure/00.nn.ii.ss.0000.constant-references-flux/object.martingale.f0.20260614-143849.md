---
name: martingale
type: object
object-type: definition
essence: a "fair game" process whose expected next value, given the past, equals its present value; converges under an L1 bound
field: [field.probability-theory]
status: proven
state: float
attribution: notion from Lévy (1934, inequalities); named & extended by J. Ville (1939); theory and convergence/optional-stopping theorems by J. L. Doob (1953)
formalized: true
source: [source.doob-1953, source.kolmogorov-1933]
depends-on: [object.conditional-expectation, object.kolmogorov-axioms]
used-by: []
---

**statement (plain)** — a martingale models a fair game: at any moment, your best forecast of the next value, given everything that has happened so far, is exactly the current value — no drift up or down. A *supermartingale* drifts down (unfavorable), a *submartingale* up. The headline result is that a martingale that does not grow too large on average must *settle down* — it converges to a definite limit. This is the backbone of stochastic-process theory, optional-stopping arguments, and modern stochastic calculus.

**statement (formal)** — given a filtration (Fₙ)ₙ≥₀ (increasing sub-σ-algebras) on (Ω, F, P), an integrable adapted process (Xₙ) is a **martingale** if E[Xₙ₊₁ | Fₙ] = Xₙ for all n (submartingale if ≥, supermartingale if ≤).
**Doob's martingale convergence theorem**: if (Xₙ) is a martingale (or supermartingale) with supₙ E|Xₙ| < ∞ (L¹-bounded), then Xₙ → X∞ almost surely for some integrable X∞.
**Optional stopping**: under suitable conditions (e.g. bounded stopping time τ), E[X_τ] = E[X₀]. **[confirmed]**

**status** — definition + proven convergence/stopping theorems.

**proof (convergence, sketch)** — Doob's **upcrossing inequality** bounds the expected number of times an L¹-bounded (super)martingale crosses any interval [a, b]; finitely many upcrossings a.s. for every rational interval forces lim Xₙ to exist a.s.; Fatou's lemma gives integrability of the limit. [[source.doob-1953]]

**lineage** — built on [[object.conditional-expectation]] (Kolmogorov, 1933, [[source.kolmogorov-1933]]). The probabilistic notion grew from Paul Lévy's 1934 martingale inequalities; the term "martingale" was introduced and the concept extended by **Jean Ville** in *Étude critique de la notion de collectif* (1939); the full theory — convergence theorem, optional sampling, Doob decomposition, maximal inequalities — was developed by **J. L. Doob** in *Stochastic Processes* (1953) [[source.doob-1953]]. **[confirmed as attribution]** (Lévy 1934 and Ville 1939 carried as lineage; not separately filed.)

**sources** — [[source.doob-1953]], [[source.kolmogorov-1933]]; corroborated by Wikipedia ("Martingale (probability theory)", "Doob's martingale convergence theorems") and standard texts (Williams, *Probability with Martingales*; Durrett). **[confirmed]**

**door** — [[source.grimmett-stirzaker]] (ch. 12, martingales); [[source.blitzstein-hwang]] (Markov chains / conditional expectation lead-in).
