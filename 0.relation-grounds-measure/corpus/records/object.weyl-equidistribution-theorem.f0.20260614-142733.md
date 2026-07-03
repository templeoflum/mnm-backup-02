---
name: weyl-equidistribution-theorem
type: object
object-type: theorem
essence: a real sequence is equidistributed mod 1 iff all its nonzero-frequency exponential sums vanish in average (Weyl's criterion); in particular nα mod 1 is equidistributed for irrational α
field: ["[[field.ergodic-theory]]", "[[field.analytic-number-theory]]"]
status: proven
state: settled
attribution: H. Weyl (1916); equidistribution of nα earlier by Bohl, Weyl, Sierpiński (1909–1910)
formalized: true
source: ["[[source.weyl-1916]]", "[[source.walters-1982]]", "[[source.einsiedler-ward]]", "[[source.korner-fourier]]"]
depends-on: ["[[object.fourier-series]]"]
used-by: []
---

**statement (plain)** — a sequence of real numbers, read modulo 1 (i.e. as points on the circle), is "equidistributed" if in the long run it visits every arc in proportion to the arc's length. Weyl's criterion turns this geometric condition into an analytic test: the sequence is equidistributed exactly when, for every nonzero integer frequency, the averaged complex exponentials over the sequence tend to zero. A flagship consequence: for any irrational α, the multiples α, 2α, 3α, … wrap around the circle perfectly evenly.

**statement (formal)** — a sequence (xₙ) in ℝ is **equidistributed mod 1** if for every 0 ≤ a < b ≤ 1,

  limₙ→∞ (1/N) · #{ n ≤ N : {xₙ} ∈ [a, b) } = b − a.

**Weyl's criterion:** (xₙ) is equidistributed mod 1 if and only if for every nonzero integer k,

  limₙ→∞ (1/N) Σₙ₌₁ᴺ e^{2πi k xₙ} = 0.

Corollary (equidistribution theorem): if α is irrational, then (nα) is equidistributed mod 1. Weyl further proved that (p(n)) is equidistributed mod 1 whenever p is a real polynomial with at least one irrational coefficient on a term of degree ≥ 1. **[confirmed]**

**status** — proven.

**proof** — the criterion follows from the Stone–Weierstrass / Fourier approximation of the indicator of an arc by trigonometric polynomials (see [[object.fourier-series]]); the corollary follows by summing the geometric series Σ e^{2πi k nα} and using that e^{2πi k α} ≠ 1 for irrational α. See Körner, *Fourier Analysis* [[source.korner-fourier]] and Einsiedler & Ward [[source.einsiedler-ward]] (where it is read as an ergodicity statement for the irrational circle rotation). **[confirmed]**

**lineage** — the equidistribution of (nα) for irrational α was established independently around 1909–1910 by **Piers Bohl, Hermann Weyl, and Wacław Sierpiński**. Weyl's 1916 memoir, "Über die Gleichverteilung von Zahlen mod. Eins" [[source.weyl-1916]], gave the general **criterion** (the exponential-sum characterization) and the polynomial results, which is why the criterion and the broad theory carry his name. **[confirmed as attribution]**

**connection** — equidistribution of the circle rotation is the equidistribution face of **ergodicity**: an irrational rotation is uniquely ergodic, so Weyl's theorem is [[object.birkhoff-pointwise-ergodic-theorem]] specialized to that system. **[confirmed]**

**door** — Körner, *Fourier Analysis* [[source.korner-fourier]]; Einsiedler & Ward [[source.einsiedler-ward]].

**sources** — Wikipedia, "Equidistribution theorem"; Encyclopedia of Mathematics / standard references on Weyl's criterion; [[source.weyl-1916]]; [[source.korner-fourier]]. **[confirmed]**
