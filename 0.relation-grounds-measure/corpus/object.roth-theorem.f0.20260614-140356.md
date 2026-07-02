---
name: roth-theorem
type: object
object-type: theorem
essence: an algebraic irrational has approximation exponent exactly 2 — the exponent 2+ε admits only finitely many solutions
field: ["[[field.diophantine-approximation]]"]
status: proven
state: settled
attribution: K. F. Roth (1955); Thue–Siegel–Roth lineage (Thue 1909, Siegel 1921, Dyson 1947, Gelfond); Fields Medal 1958
formalized: true
source: ["[[source.roth-1955]]", "[[source.cassels-1957]]"]
depends-on: ["[[object.dirichlet-approximation-theorem]]", "[[object.liouville-approximation-theorem]]"]
used-by: []
---

**statement (plain)** — an irrational algebraic number can be approximated by rationals to within about 1/q², but no better in any uniform sense: ask for approximations even slightly better than 1/q² (say 1/q^2.001) and only finitely many fractions can do it. Combined with Dirichlet's floor (always at least 1/q²), this pins the "irrationality exponent" of every algebraic irrational to exactly 2.

**statement (formal)** — let α be an irrational algebraic number and ε > 0. Then
|α − p/q| < 1/q^(2+ε)
has only finitely many solutions in coprime integers p, q with q > 0. Equivalently, the irrationality exponent μ(α) = 2 for every algebraic irrational α. The exponent 2 is best possible (Dirichlet supplies the matching lower bound). **[confirmed]**

**proof** — reference. The proof is deep and ineffective (it bounds the *number* of good approximations but does not produce the implied constant or a list of solutions). It builds an auxiliary polynomial in many variables vanishing to high order, controls its index via a combinatorial "Roth lemma," and derives a contradiction from too many good approximations. Full proof: Roth, *Mathematika* 2 (1955) [[source.roth-1955]]; exposition in [[source.cassels-1957]]. **[confirmed as attribution]**

**lineage (Thue–Siegel–Roth)** — the exponent was driven down over half a century from Liouville's degree-dependent bound: A. Thue 1909 (exponent ≈ n/2 + 1), C. L. Siegel 1921 (≈ 2√n), F. Dyson 1947 and A. O. Gelfond independently (≈ √(2n)), and K. F. Roth 1955 (2 + ε, independent of degree). The result is named the **Thue–Siegel–Roth theorem**, carrying all three. Roth received the Fields Medal in 1958 largely for it. **[confirmed]**

**place in the field** — the capstone of the approximation-exponent strand: it closes the gap between [[object.liouville-approximation-theorem]] (upper bound depending on degree) and [[object.dirichlet-approximation-theorem]] (universal lower bound exponent 2), proving the exponent is exactly 2 for all algebraic irrationals.

**source** — Roth, "Rational approximations to algebraic numbers," *Mathematika* 2 (1955), 1–20, corrigendum p. 168 [[source.roth-1955]]; statement, lineage, and Fields Medal confirmed against Encyclopedia of Mathematics ("Thue-Siegel-Roth theorem"), Wikipedia ("Roth's theorem"), and Cassels [[source.cassels-1957]]. **[confirmed]**
