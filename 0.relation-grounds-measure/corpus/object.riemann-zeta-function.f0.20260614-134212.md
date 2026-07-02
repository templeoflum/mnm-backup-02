---
name: riemann-zeta-function
type: object
object-type: definition
essence: the function ζ(s) = Σ 1/nˢ, analytically continued — the central object of analytic number theory
field: ["[[field.analytic-number-theory]]", "[[field.complex-analysis]]"]
status: established
state: settled
attribution: B. Riemann (1859); the series goes back to Euler
formalized: true
source: ["[[source.riemann-1859]]", "[[source.dlmf]]"]
depends-on: ["[[object.euler-product]]", "[[object.gamma-function]]"]
used-by: ["[[object.prime-number-theorem]]", "[[object.riemann-hypothesis]]", "[[object.basel-problem]]"]
---

**statement (plain)** — for a complex number s with real part greater than 1, ζ(s) is the sum of the reciprocals of the nth powers of the positive integers. It extends uniquely to a function defined everywhere on the complex plane except a single point at s = 1.

**statement (formal)** — for Re(s) > 1, ζ(s) = Σ_{n=1}^∞ n^{−s} = ∏_{p prime} (1 − p^{−s})^{−1} (the [[object.euler-product]]). ζ continues to a meromorphic function on ℂ \ {1}, holomorphic everywhere except a simple pole at s = 1 with residue 1. It satisfies the functional equation
ζ(s) = 2ˢ π^{s−1} sin(πs/2) Γ(1−s) ζ(1−s),
relating s to 1−s. **[confirmed]**

**trivial zeros** — s = −2, −4, −6, … (from the sin(πs/2) factor). The nontrivial zeros lie in the critical strip 0 < Re(s) < 1 — their location is the [[object.riemann-hypothesis]].

**sources** — definition & analytic continuation: B. Riemann, "Über die Anzahl der Primzahlen unter einer gegebenen Größe" (1859) [[source.riemann-1859]]; standard reference: NIST DLMF §25 [[source.dlmf]]. **[confirmed]**
