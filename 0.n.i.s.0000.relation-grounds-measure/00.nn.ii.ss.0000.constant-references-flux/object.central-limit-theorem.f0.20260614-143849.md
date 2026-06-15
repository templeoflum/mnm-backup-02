---
name: central-limit-theorem
type: object
object-type: theorem
essence: the normalized sum of many independent variables converges to a normal distribution, whatever their own shape
field: [field.probability-theory]
status: proven
state: verified
attribution: de Moivre (1733, binomial case) & Laplace (1812); rigorous general proof Lyapunov (1901); Lindeberg (1922) & Lévy (1925) for the classical i.i.d. form
formalized: true
source: [source.demoivre-1733, source.laplace-1812, source.lyapunov-1901, source.lindeberg-1922, source.levy-1925]
depends-on: [object.kolmogorov-axioms, object.law-of-large-numbers]
used-by: []
---

**statement (plain)** — add up many independent random quantities of comparable size, subtract the average, and scale by the square root of how many you added; the result looks like a bell curve (normal distribution) — no matter what the individual quantities' own distributions look like, as long as they have a finite spread. This is why the normal distribution appears everywhere measurement error, sums, and aggregates occur.

**statement (formal)** — **Lindeberg–Lévy (classical i.i.d.) CLT**: let X₁, X₂, … be i.i.d. with mean μ and finite variance σ² > 0, and Sₙ = X₁ + … + Xₙ. Then
(Sₙ − nμ) / (σ√n) → N(0, 1) in distribution as n → ∞,
equivalently √n (X̄ₙ − μ) → N(0, σ²). **[confirmed]**
**Lyapunov / Lindeberg generalizations** drop "identically distributed": independent variables satisfying the Lyapunov moment condition (order 2 + δ) or the weaker **Lindeberg condition** also have normalized sums converging to N(0, 1).

**status** — proven.

**proof** — classical proof via characteristic functions: the standardized sum's characteristic function converges pointwise to e^{−t²/2} (that of N(0,1)), and Lévy's continuity theorem upgrades this to convergence in distribution [[source.levy-1925]]. Lindeberg's alternative "replacement" method avoids characteristic functions [[source.lindeberg-1922]]. Lyapunov's original general proof used characteristic functions under the moment condition [[source.lyapunov-1901]].

**lineage** — Abraham de Moivre proved the binomial (p = 1/2) case — the first CLT — in his 1733 *Approximatio* [[source.demoivre-1733]]; Laplace generalized to general p and toward the general theorem in *Théorie analytique des probabilités* (1812) [[source.laplace-1812]] (together: the de Moivre–Laplace theorem). The first **rigorous general** proof is Lyapunov's (1900–1901) under his moment condition [[source.lyapunov-1901]]. The modern classical form (finite-variance i.i.d.) and the sharp Lindeberg condition are due to Lindeberg (1922) [[source.lindeberg-1922]] and Lévy (1925) [[source.levy-1925]] — the Lindeberg–Lévy theorem; Feller (1935) showed the Lindeberg condition essentially necessary. **[confirmed]** (de Moivre's 1733 *Approximatio*, Lyapunov's 1901 CLT paper, and Lévy's 1925 treatise are each distinct from same-author works held elsewhere in the corpus.)

**sources** — primaries above; corroborated by Wikipedia ("Central limit theorem"), MacTutor, Encyclopedia of Mathematics ("Central limit theorem", "Lyapunov theorem"), and H. Fischer, *A History of the Central Limit Theorem* (Springer, 2011). **[confirmed]**

**door** — [[source.blitzstein-hwang]] (ch. 10); [[source.grimmett-stirzaker]].
