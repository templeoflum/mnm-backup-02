---
name: pickands-balkema-de-haan-theorem
type: object
object-type: theorem
essence: excesses over a high threshold are asymptotically generalized Pareto — the second theorem of EVT
field: [field.extreme-value-theory, field.probability-theory]
status: proven
state: settled
attribution: Balkema & de Haan (1974) and Pickands (1975), independently
formalized: true
source: [source.balkema-de-haan-1974, source.pickands-1975, source.coles-2001]
depends-on: [object.fisher-tippett-gnedenko-theorem, object.generalized-pareto-distribution]
used-by: [object.generalized-pareto-distribution]
---

**statement (plain)** — instead of taking the single largest value in each block, look at every value that crosses a high threshold and measure how far it overshoots. The theorem says that for a high enough threshold, the spread of those overshoots settles to one shape — the generalized Pareto distribution — almost regardless of the underlying data. This is the "peaks-over-threshold" (POT) counterpart to the maxima theorem, and it uses the data more efficiently than block maxima.

**statement (formal)** — let X have cdf F with right endpoint x_F, and define the conditional excess distribution over threshold u,
  F_u(y) = P(X − u ≤ y | X > u) = ( F(u+y) − F(u) ) / ( 1 − F(u) ),  0 ≤ y < x_F − u.
Then F is in the max-domain of attraction of some extreme-value law (i.e. the [[object.fisher-tippett-gnedenko-theorem]] applies) if and only if there exists a positive measurable function σ(u) such that
  lim_{u → x_F}  sup_{0 ≤ y < x_F − u}  | F_u(y) − G_{ξ,σ(u)}(y) | = 0,
where G_{ξ,σ} is the [[object.generalized-pareto-distribution]]. The shape ξ is the same parameter as in the GEV limit for the maxima of F. **[confirmed]**

**status** — proven ("second theorem in extreme value theory").

**proof** — reference. The threshold-stability of the GPD mirrors the max-stability behind the FTG theorem; convergence is established via the same regular-variation / von Mises tail conditions. See Coles (2001) ch. 4 [[source.coles-2001]]; original Balkema & de Haan (1974) [[source.balkema-de-haan-1974]] and Pickands (1975) [[source.pickands-1975]].

**lineage** — two independent and distinct origins: Balkema & de Haan, "Residual Life Time at Great Age," *Ann. Probab.* 2 (1974) [[source.balkema-de-haan-1974]]; and Pickands III, "Statistical Inference Using Extreme Order Statistics," *Ann. Statist.* 3 (1975) [[source.pickands-1975]]. Same-era, different journals, different authors — the combined name credits both. **[confirmed]**

**sources** — [[source.balkema-de-haan-1974]], [[source.pickands-1975]], [[source.coles-2001]]; statement cross-checked against Wikipedia (Pickands–Balkema–de Haan theorem) and POT references (Cornell ORIE mean-excess notes; pyextremes). **[confirmed]**
