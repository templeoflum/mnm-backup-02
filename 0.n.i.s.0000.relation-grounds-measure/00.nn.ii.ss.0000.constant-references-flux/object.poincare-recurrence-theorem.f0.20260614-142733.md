---
name: poincare-recurrence-theorem
type: object
object-type: theorem
essence: in a finite measure-preserving system, almost every point of any positive-measure set returns to that set infinitely often
field: [field.ergodic-theory-equidistribution, field.dynamical-systems]
status: proven
state: float
attribution: H. Poincaré (1890); measure-theoretic proof Carathéodory (1919)
formalized: true
source: [source.poincare-1890, source.walters-1982, source.einsiedler-ward, source.halmos-1956]
depends-on: []
used-by: [object.birkhoff-pointwise-ergodic-theorem]
---

**statement (plain)** — take a system that conserves its total measure and lives in a space of finite total measure (e.g. a bounded conservative mechanical system). Pick any region of positive measure. Then almost every point that starts in that region will, under the dynamics, return to the region — not just once but infinitely often. Conservative bounded systems are doomed to nearly repeat themselves.

**statement (formal)** — let (X, Σ, μ) be a finite measure space (μ(X) < ∞) and T : X → X a measure-preserving transformation. For any A ∈ Σ with μ(A) > 0, almost every x ∈ A returns to A: the set { x ∈ A : Tⁿx ∈ A for infinitely many n ≥ 1 } has full measure in A. Equivalently, for infinitely many n, μ(A ∩ T⁻ⁿA) > 0. (Topological version: a volume-preserving flow with bounded orbits has, in every open set, an orbit returning to that set infinitely often.) **[confirmed]**

**status** — proven.

**proof** — let B ⊆ A be the points of A that never return. The sets B, T⁻¹B, T⁻²B, … are pairwise disjoint (any overlap would force a return) and all have measure μ(B); in a finite measure space an infinite disjoint family of equal-measure sets forces μ(B) = 0. See Walters, ch. 1 [[source.walters-1982]] and Einsiedler & Ward [[source.einsiedler-ward]]. **[confirmed]**

**lineage** — Poincaré proved the result in 1890 for the invariant measure of the **three-body problem**, before abstract measure theory existed: H. Poincaré, "Sur le problème des trois corps et les équations de la dynamique," *Acta Mathematica* 13 (1890), 1–270 [[source.poincare-1890]]. A rigorous measure-theoretic proof was given by Constantin Carathéodory in 1919 ("Über den Wiederkehrsatz von Poincaré," *Berliner Sitzungsberichte*, 580–584). **[confirmed as attribution]**

**role** — the qualitative ancestor of the quantitative ergodic theorems; it is the recurrence backbone underneath [[object.birkhoff-pointwise-ergodic-theorem]]. **[confirmed]**

**door** — Walters, ch. 1 [[source.walters-1982]]; Halmos, *Lectures on Ergodic Theory* (1956) [[source.halmos-1956]].

**sources** — Wikipedia, "Poincaré recurrence theorem"; PlanetMath, "Poincaré recurrence theorem"; [[source.poincare-1890]]; [[source.walters-1982]]. **[confirmed]**
