---
name: stirling-approximation
type: object
object-type: theorem
essence: n! ∼ √(2πn)(n/e)ⁿ — the asymptotic size of the factorial
field: ["[[field.special-functions-series-acceleration]]", "[[field.asymptotic-analysis]]"]
status: proven
state: settled
attribution: A. de Moivre (1730, leading term); J. Stirling (1730, constant √(2π))
formalized: true
source: ["[[source.demoivre-1730]]", "[[source.stirling-1730]]", "[[source.dlmf]]", "[[source.abramowitz-stegun-1964]]"]
depends-on: ["[[object.gamma-function]]", "[[object.euler-maclaurin-formula]]"]
used-by: []
---

**statement (plain)** — for large n, the factorial n! is very close to √(2πn) times (n/e)ⁿ. The relative error shrinks to zero as n grows. Taking logarithms, ln n! ≈ n ln n − n, which is the form most used in analysis and statistical mechanics.

**statement (formal)** — n! ∼ √(2πn) (n/e)ⁿ as n → ∞, i.e. lim_{n→∞} n! / [√(2πn)(n/e)ⁿ] = 1.
Logarithmic form: ln n! = n ln n − n + ½ ln(2πn) + O(1/n).
More generally, for the [[gamma function]] as |z|→∞ with |arg z| < π,
ln Γ(z) ∼ (z − ½) ln z − z + ½ ln(2π) + Σ_{k≥1} B_{2k} / [2k(2k−1) z^{2k−1}],
the asymptotic (Stirling) series, where B_{2k} are Bernoulli numbers. **[confirmed]**

**proof** — apply the [[object.euler-maclaurin-formula]] to ln n! = Σ_{k=2}^n ln k, or evaluate Γ(z+1)=∫₀^∞ tᶻe^{−t}dt by Laplace's method around its maximum at t=z. The √(2π) arises from the Gaussian integral ∫e^{−u²/2}du = √(2π). Full treatment: DLMF §5.11 [[source.dlmf]]; A&S §6.1.37–6.1.41 [[source.abramowitz-stegun-1964]]. **[confirmed]**

**lineage** — [[Abraham de Moivre]], working a binomial/probability problem, derived n! ∼ c·n^{n+1/2}e^{−n} in *Miscellanea Analytica* (1730), but fixed the constant c only approximately (as a numerical logarithm) [[source.demoivre-1730]]. [[James Stirling]] then showed c = √(2π) exactly, in *Methodus Differentialis* (1730) [[source.stirling-1730]]. The formula is named for Stirling though the leading asymptotic is de Moivre's; carry it as a **de Moivre–Stirling** result. **[confirmed]**

**sources** — DLMF §5.11 [[source.dlmf]]; A&S §6.1 [[source.abramowitz-stegun-1964]]; origins [[source.demoivre-1730]], [[source.stirling-1730]]. **[confirmed]**
