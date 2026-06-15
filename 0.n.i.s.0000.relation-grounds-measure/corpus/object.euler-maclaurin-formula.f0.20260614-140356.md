---
name: euler-maclaurin-formula
type: object
object-type: theorem
essence: a sum equals an integral plus endpoint-derivative corrections weighted by Bernoulli numbers, with a Bernoulli-function remainder
field: [field.special-functions-series-acceleration, field.asymptotic-analysis]
status: proven
state: settled
attribution: L. Euler (1732) & C. Maclaurin (1742), independently
formalized: true
source: [source.euler-1738, source.maclaurin-1742, source.dlmf, source.abramowitz-stegun-1964]
depends-on: [object.bernoulli-numbers]
used-by: [object.stirling-approximation]
---

**statement (plain)** — to estimate a sum Σ f(j), take the corresponding integral ∫ f(x) dx, add half the endpoint values, then a series of corrections built from the derivatives of f at the two endpoints, each weighted by a Bernoulli number. It turns a slowly converging sum into a fast asymptotic estimate (and vice versa), and is the bridge between sums and integrals.

**statement (formal)** — for integers a < n, m ≥ 1, and f with f^(2m) absolutely integrable on [a,n] (DLMF §2.10.1):
Σ_{j=a}^{n} f(j) = ∫_a^n f(x) dx + ½(f(a)+f(n)) + Σ_{s=1}^{m−1} [B_{2s}/(2s)!]·(f^(2s−1)(n) − f^(2s−1)(a)) + R_m,
where B_{2s} are the [[Bernoulli numbers]] and the remainder is
R_m = ∫_a^n [B_{2m} − B̃_{2m}(x)]/(2m)! · f^(2m)(x) dx,
with B̃_{2m}(x) = B_{2m}(x − ⌊x⌋) the periodic Bernoulli function. The series in B_{2s} is generally asymptotic, not convergent. **[confirmed]**

**proof** — by repeated integration by parts of ∫ f against Bernoulli polynomials, using B_n'(x)=n B_{n−1}(x) and the values of B_n at 0 and 1; the periodic Bernoulli function carries the boundary terms across unit intervals. Full statement and proof: DLMF §2.10 [[source.dlmf]]; A&S §23.1/§3.6 [[source.abramowitz-stegun-1964]]. **[confirmed]**

**lineage** — discovered **independently**. [[Leonhard Euler]] developed the summation method around 1732, published as "Methodus generalis summandi progressiones" (E25, printed 1738) [[source.euler-1738]], and used it to compute slowly converging series — famously ζ(2)=π²/6 to ~20 decimals and the constant γ. [[Colin Maclaurin]] derived an equivalent result, published in his *Treatise of Fluxions* (1742) [[source.maclaurin-1742]]. Euler described the method in a 1736 letter to James Stirling and credited Maclaurin's independent priority. **[confirmed]**

**sources** — DLMF §2.10 [[source.dlmf]]; A&S [[source.abramowitz-stegun-1964]]; origins [[source.euler-1738]], [[source.maclaurin-1742]]. **[confirmed]**
