---
name: asymptotic-expansion
type: object
object-type: definition
essence: a (usually divergent) series whose truncations approximate a function ever better in a limit — the founding object of the field
field: [field.asymptotic-analysis, field.complex-analysis]
status: established
state: float
attribution: H. Poincaré (1886) and T. J. Stieltjes (1886), independently and simultaneously
formalized: true
source: [source.poincare-1886, source.stieltjes-1886, source.de-bruijn-1958, source.bender-orszag]
depends-on: [object.landau-notation]
used-by: [object.laplaces-method, object.method-of-steepest-descent, object.watsons-lemma]
---

**statement (plain)** — many important series diverge yet still approximate a function: if you stop after a few terms the error is tiny when the variable is large (or small), even though adding more terms eventually makes it worse. An asymptotic expansion captures exactly this — it is asymptotic *for fixed number of terms, in the limit of the variable*, the reverse of an ordinary convergent series.

**statement (formal)** — let {φₙ(x)} be an asymptotic scale at a limit point L (i.e. φₙ₊₁(x) = o(φₙ(x)) as x → L). A function f has the asymptotic expansion f(x) ∼ Σₙ aₙ φₙ(x) (x → L) iff for every N,
  f(x) − Σ_{n=0}^{N−1} aₙ φₙ(x) = O(φ_N(x))  as x → L
(equivalently = o(φ_{N−1}(x))). In the **Poincaré** case φₙ(x) = x^{−n}: f(x) ∼ Σ aₙ x^{−n} means xᴺ (f(x) − Σ_{n=0}^{N} aₙ x^{−n}) → 0 as x → ∞ for each fixed N. The series need not converge for any x. **[confirmed]**

**proof / status** — a definition, not a theorem; "proven" marks that its basic theory (uniqueness of coefficients given a scale, term-by-term operations, Borel/Watson summability links) is fully developed and standard. Coefficients are unique relative to a fixed scale; the function is **not** unique (e.g. e^{−x} has the zero asymptotic power series at +∞ — "beyond all orders"). See [[source.de-bruijn-1958]], [[source.bender-orszag]]. **[confirmed]**

**lineage** — introduced **independently in 1886** by Henri Poincaré, "Sur les intégrales irrégulières des équations linéaires," *Acta Math.* [[source.poincare-1886]], to give analytic meaning to formal power-series solutions of linear ODEs at irregular singular points; and by T. J. Stieltjes, "Recherches sur quelques séries semi-convergentes," *Ann. ENS* [[source.stieltjes-1886]]. Precursors: Stirling's series (1730) and Laplace. The two 1886 papers are the standard joint attribution. **[confirmed]**

**door** — [[source.de-bruijn-1958]] (Dover); [[source.bender-orszag]].
