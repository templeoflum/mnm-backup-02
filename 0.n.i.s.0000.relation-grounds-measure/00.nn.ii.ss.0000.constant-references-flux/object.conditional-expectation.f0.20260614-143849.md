---
name: conditional-expectation
type: object
object-type: definition
essence: the best estimate of a random variable given the information in a sub-sigma-algebra — a measurable projection, unique a.s.
field: [field.probability-theory]
status: proven
state: float
attribution: A. N. Kolmogorov (1933), via the Radon–Nikodym theorem; modern sub-sigma-algebra formulation standardized by Doob (1953)
formalized: true
source: [source.kolmogorov-1933, source.doob-1953]
depends-on: [object.kolmogorov-axioms]
used-by: [object.martingale]
---

**statement (plain)** — given partial information (which events you can currently distinguish), the conditional expectation of a random quantity is your best forecast of it using only that information. If the information is "we observed event B," it is the average of X restricted to B. The modern version conditions not on a single event but on a whole *body of information* (a sub-σ-algebra), producing a new random variable — the smoothed, information-respecting version of X. It is the geometric "projection" onto what you know, and the building block of martingales and filtering.

**statement (formal)** — let (Ω, F, P) be a probability space, X an integrable random variable (E|X| < ∞), and G ⊆ F a sub-σ-algebra. The **conditional expectation** E[X | G] is any random variable Y such that:
1. Y is **G-measurable**, and
2. for every A ∈ G, ∫_A Y dP = ∫_A X dP.
Such Y **exists and is unique up to P-null sets** (by the Radon–Nikodym theorem). For X ∈ L², E[X | G] is the orthogonal projection of X onto L²(G). Key properties: linearity, tower rule E[E[X|G]] = E[X] and E[E[X|H]|G] = E[X|G] for G ⊆ H, taking out what is known, and Jensen's inequality. **[confirmed]**

**status** — definition; existence/uniqueness is a proven theorem.

**proof (of existence)** — for X ≥ 0 the map A ↦ ∫_A X dP is a finite measure on G absolutely continuous w.r.t. P|_G; the **Radon–Nikodym theorem** gives a G-measurable density Y = dν/dP, which is E[X|G]; extend to general X by X = X⁺ − X⁻. Uniqueness up to null sets follows from property (2). [[source.kolmogorov-1933]]

**lineage** — Kolmogorov defined conditional expectation/probability with respect to a σ-algebra via Radon–Nikodym in the *Grundbegriffe* (1933) [[source.kolmogorov-1933]] — often called the central definition of modern probability; the sub-σ-algebra formulation and its systematic use (notably for martingales) were standardized by Doob, *Stochastic Processes* (1953) [[source.doob-1953]]. **[confirmed]**

**sources** — [[source.kolmogorov-1933]], [[source.doob-1953]]; corroborated by Wikipedia ("Conditional expectation"), Encyclopedia of Mathematics ("Conditional mathematical expectation"), and standard texts (Williams, *Probability with Martingales*). **[confirmed]**

**door** — [[source.grimmett-stirzaker]] (conditional expectation & martingales); [[source.blitzstein-hwang]] (conditional expectation, ch. 9).
