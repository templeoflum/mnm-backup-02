---
name: gauss-kuzmin-theorem
type: object
object-type: theorem
essence: for almost every real number the n-th continued-fraction digit equals k with limiting probability log2(1 + 1/(k(k+2)))
field: ["[[field.continued-fractions]]", "[[field.diophantine-approximation]]", "[[field.ergodic-theory-equidistribution]]"]
status: proven
state: settled
attribution: distribution stated by Gauss (diary 1800; letter to Laplace 1812); proved by R. O. Kuzmin (1928); sharper bound by P. Lévy (1929)
formalized: false
source: ["[[source.gauss-1812]]", "[[source.kuzmin-1928]]", "[[source.levy-1929]]", "[[source.khinchin-cf]]", "[[source.perron-1913]]"]
depends-on: ["[[object.continued-fraction-expansion]]"]
used-by: []
aliases: ["object.gauss-kuzmin-theorem"]
---

**statement (plain)** — pick a real number at random in (0,1). Look at its continued-fraction digits a₁, a₂, a₃, …. As you go further out, the chance that a digit equals a given value k settles to a fixed law: the digit 1 appears about 41.5% of the time, 2 about 17%, and large digits are rare. The same limiting law holds for almost every starting number — the digits "forget" where they came from.

**statement (formal)** — let x be uniform on (0,1) with CF [0; a₁, a₂, …], and let xₙ be the n-th tail (complete quotient remainder), Fₙ(s) = Prob(xₙ ≤ s). Then for almost every x,
limₙ→∞ Prob(aₙ = k) = log₂(1 + 1/(k(k+2))) = −log₂(1 − 1/(k+1)²), k = 1, 2, 3, …
and more fundamentally the tail distribution converges to the **Gauss measure** with density 1/((1+s)·ln 2) on (0,1):
limₙ→∞ Fₙ(s) = log₂(1 + s).
(This is the [Gauss–Kuzmin distribution](https://en.wikipedia.org/wiki/Gauss%E2%80%93Kuzmin_distribution); the digit law follows by integrating the Gauss density over the interval where ⌊1/x⌋ = k.) **[confirmed]**

**proof / rate** — Gauss stated the limit Fₙ(s) → log₂(1+s) without proof (his "problem" to Laplace was to bound the error). The first proof is **R. O. Kuzmin (1928)**, giving |Fₙ(s) − log₂(1+s)| = O(q^√n) for some 0 < q < 1, uniformly in s [[source.kuzmin-1928]]. **P. Lévy (1929)**, independently and by a different method, sharpened the bound to O(qⁿ) with q = 3.5 − 2√2 ≈ 0.6716 [[source.levy-1929]]. The optimal rate is governed by the **Gauss–Kuzmin–Wirsing constant** λ ≈ 0.3036 (E. Wirsing, 1974). The result is the prototype of the [ergodic theory](https://en.wikipedia.org/wiki/Ergodic_theory) of the [Gauss map](https://en.wikipedia.org/wiki/Gauss%E2%80%93Kuzmin%E2%80%93Wirsing_operator), which is ergodic w.r.t. the Gauss measure. Full proof in Khinchin, *Continued Fractions*, ch. III [[source.khinchin-cf]]. **[confirmed]**

**lineage** — Gauss recorded the limiting law in his *Mathematisches Tagebuch* on 25 October 1800 and posed the rate-of-convergence question in his letter to Laplace of 30 January 1812 ("Gauss's problem"); it stood open over a century until Kuzmin (1928), with Lévy (1929) improving the bound. Carried as a genuine multi-step lineage: statement = Gauss, first proof = Kuzmin, sharper bound = Lévy. [[source.gauss-1812]] [[source.kuzmin-1928]] [[source.levy-1929]] **[confirmed]**

**door** — Khinchin, *Continued Fractions* (Dover), ch. III [[source.khinchin-cf]]; Perron [[source.perron-1913]].

**sources** — Wikipedia, "Gauss–Kuzmin distribution" (p(k) = −log₂(1 − 1/(k+1)²); Kuzmin 1928 exp(−α√n); Lévy 1929 O(0.7ⁿ)); Encyclopedia of Mathematics, "Continued fraction" / "Gauss–Kuzmin problem" (Gauss 1800 diary, 1812 Laplace letter, Kuzmin 1928 first solution); Wolfram MathWorld, "Gauss-Kuzmin Distribution." The 3.5 − 2√2 Lévy constant cross-checked via the search-surfaced MathWorld/EoM accounts. Cross-confirmed across Wikipedia + Encyclopedia of Mathematics + MathWorld.
