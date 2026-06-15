---
name: fundamental-theorem-of-algebra
type: object
object-type: theorem
essence: every non-constant polynomial with complex coefficients has a complex root — ℂ is algebraically closed
field: [field.complex-analysis]
status: proven
state: verified
attribution: first attempt d'Alembert (1746); first widely-accepted proof Gauss (1799, who named it); first rigorous proof and the first stated for complex coefficients Argand (1814)
formalized: true
source: [source.gauss-1799, source.argand-1814]
depends-on: [object.liouville-theorem]
used-by: []
---

**statement (plain)** — every polynomial of degree at least one, with complex-number coefficients, has at least one complex root. Repeatedly factoring out roots, a degree-n polynomial then has exactly n complex roots counted with multiplicity, and factors completely into linear pieces. The content is that the complex numbers are "algebraically closed" — you never have to invent new numbers to solve a polynomial once you have ℂ. The name is historical: the result is really a theorem of analysis (it depends on completeness of ℝ/ℂ), not of pure algebra.

**statement (formal)** — let p(z) = aₙzⁿ + … + a₁z + a₀ with aₖ ∈ ℂ, n ≥ 1, aₙ ≠ 0. Then there exists z₀ ∈ ℂ with p(z₀) = 0; consequently p(z) = aₙ ∏_{k=1}ⁿ (z − zₖ) for complex roots z₁, …, zₙ. **[confirmed]**

**status** — proven.

**proof (reference)** — the short complex-analytic proof: if p had no zero, then 1/p would be entire, and since |p(z)| → ∞ as |z| → ∞ it would also be bounded, hence constant by [[object.liouville-theorem]] — contradicting that p is non-constant. Other routes: Argand's minimum-modulus argument (|p| attains a minimum, which must be 0), Gauss's topological/winding-number argument, and Galois-theoretic proofs using that ℝ has no odd-degree extension. Standard treatment: Ahlfors, *Complex Analysis*. **[confirmed]**

**lineage** — first attempted by J. d'Alembert (1746), whose argument was incomplete; C. F. Gauss gave the first broadly accepted proof in his 1799 doctoral dissertation, naming the theorem, though his geometric argument had a gap rigorously closed only in 1920 (Ostrowski) [[source.gauss-1799]]. J.-R. Argand published the first full and rigorous proof, and the first stated for complex (not merely real) coefficients, in 1814 [[source.argand-1814]]. Gauss added three further proofs (two in 1816, a fourth in 1849). Carried as a d'Alembert → Gauss → Argand lineage. **[confirmed]**

**sources** — Wikipedia, "Fundamental theorem of algebra"; MacTutor (St Andrews), "Fundamental theorem of algebra"; ProofWiki.
