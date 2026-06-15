---
name: campbells-theorem
type: object
object-type: theorem
essence: the expected value of a sum of a function over the points of a process equals the integral of that function against the intensity measure
field: [field.point-process-statistics]
status: proven
state: verified
attribution: N. R. Campbell (1909/1910), main argument credited to G. H. Hardy ("Campbell–Hardy theorem")
formalized: true
source: [source.campbell-1909, source.coeurjolly-moller-waagepetersen-2016, source.kingman-1993, source.daley-vere-jones-1988]
depends-on: [object.poisson-point-process, field.measure-theory]
used-by: [object.palm-distribution]
---

**statement (plain)** — if you add up a function evaluated at every point of a point process, the average (expected) value of that random sum is found by integrating the function against the process's intensity measure. For the Poisson case there is a matching variance formula and a clean Laplace-transform (shot-noise) formula. This is the workhorse that turns "sum over random points" into an ordinary integral.

**statement (formal)** — let N be a point process on S with intensity measure Λ, and f ≥ 0 measurable. Then
E[ Σ_{x∈N} f(x) ] = ∫_S f(x) Λ(dx).
For a *Poisson* process with f real and the sum S = Σ f(x):
- Var(S) = ∫_S f(x)² Λ(dx);
- Laplace functional: E[exp(−Σ_{x∈N} f(x))] = exp( −∫_S (1 − e^{−f(x)}) Λ(dx) ).
The higher-order ("refined") form replaces f(x) by a function over n-tuples of distinct points and Λ by the n-th factorial moment measure / joint intensity ρ^{(n)} (Coeurjolly–Møller–Waagepetersen, eq. 6):
E[ Σ^{≠}_{x₁,…,xₙ∈N} h(x₁,…,xₙ) ] = ∫…∫ h(x₁,…,xₙ) ρ^{(n)}(x₁,…,xₙ) dx₁…dxₙ. **[confirmed]**

**status** — proven.

**proof** — for the Poisson process the first-moment formula follows from the i.i.d. representation conditional on the count, summed over the Poisson count distribution; variance and Laplace-functional forms follow from independent scattering. General case: see Daley & Vere-Jones [[source.daley-vere-jones-1988]] and Coeurjolly et al. (eq. 6, verified via the density representation) [[source.coeurjolly-moller-waagepetersen-2016]].

**lineage** — stated by the physicist N. R. Campbell (1909/1910) [[source.campbell-1909]] in studying random sums from thermionic / shot noise; Campbell credited the main mathematical argument to G. H. Hardy, so it is also called the **Campbell–Hardy theorem**. (Same-surname trap: unrelated to J. E. Campbell of [[source.campbell-1897]] / Baker–Campbell–Hausdorff in Lie theory.) **[confirmed as attribution]** (historical attribution corroborated by Wikipedia + Keeler + Daley & Vere-Jones; primary papers not opened).

**sources** — [[source.campbell-1909]], [[source.coeurjolly-moller-waagepetersen-2016]], [[source.kingman-1993]], [[source.daley-vere-jones-1988]].
