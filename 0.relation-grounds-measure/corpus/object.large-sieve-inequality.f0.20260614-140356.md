---
name: large-sieve-inequality
type: object
object-type: theorem
essence: values of a trig polynomial at well-spaced points can't all be large — Σ|S(x_r)|² ≤ (N + δ⁻¹) Σ|aₙ|²
field: ["[[field.sieve-methods]]", "[[field.analytic-number-theory]]"]
status: proven
state: settled
attribution: originated Yu. V. Linnik (1941); analytic inequality refined to sharp constant by Selberg and by Montgomery–Vaughan (1973); lineage via Rényi, Roth, Bombieri, Davenport–Halberstam
formalized: false
source: ["[[source.linnik-1941]]", "[[source.montgomery-vaughan-1973-largesieve]]", "[[source.cojocaru-murty-2005]]", "[[source.halberstam-richert-1974]]"]
depends-on: []
used-by: []
aliases: ["object.large-sieve-inequality"]
---

**statement (plain)** — take a trigonometric polynomial — a sum of N exponentials with given coefficients. If you evaluate it at points that are spread out (no two closer than δ on the circle), then the total energy at those points can't exceed the polynomial's own energy by more than a controlled factor: roughly N plus 1/δ, times the sum of squared coefficients. Arithmetically, this says a sequence cannot avoid many residue classes to many moduli at once — the basis of the "large" sieve, which sieves out a large fraction of classes per prime.

**statement (formal)** — let S(x) = Σ_{M < n ≤ M+N} aₙ e(nx), e(t) = e^{2πit}, with complex aₙ. Let x₁, …, x_R be real points δ-spaced modulo 1 (‖x_r − x_s‖ ≥ δ for r ≠ s). Then
Σ_{r=1}^R |S(x_r)|² ≤ (N + δ⁻¹) Σ_{M < n ≤ M+N} |aₙ|².
The constant N + δ⁻¹ is essentially best possible. Arithmetic form: summing over Farey fractions a/q with q ≤ Q (spacing δ = Q⁻²) gives
Σ_{q ≤ Q} Σ_{a mod q, (a,q)=1} |S(a/q)|² ≤ (N + Q²) Σ |aₙ|². **[confirmed]**

**proof** — the analytic inequality is proved either by an approximate Plancherel / Selberg-majorant argument (bounding the spaced points by integrating an extremal band-limited majorant) or by the duality principle applied to the relevant matrix. The sharp constant N + δ⁻¹ was obtained independently by Atle Selberg (via his majorant function) and by H. L. Montgomery & R. C. Vaughan, "The large sieve," *Mathematika* 20 (1973), 119–134 [[source.montgomery-vaughan-1973-largesieve]]. Exposition: [[source.cojocaru-murty-2005]]; [[source.halberstam-richert-1974]]. **[confirmed]**

**lineage** — originated by Yu. V. Linnik in 1941 to study least quadratic non-residues [[source.linnik-1941]]; developed by A. Rényi (1947–59, probabilistic method, Goldbach applications); recast as the underlying analytic inequality independently by K. F. Roth and E. Bombieri in the early 1960s; the explicit analytic form named and formulated by Davenport & Halberstam (1966); sharp constant by Selberg and Montgomery–Vaughan (1973). The name "large" (Linnik): it can exclude a *large* fraction of residue classes mod p, unlike combinatorial sieves that exclude few. Genuinely multi-author; carried as lineage, not flattened. **[confirmed]**

**place** — engine behind the Bombieri–Vinogradov theorem ("Riemann Hypothesis on average") and many distribution results; the analytic counterpart to the combinatorial sieves of [[object.brun-theorem|Brun]] and [[object.selberg-sieve|Selberg]]. Door: [[source.cojocaru-murty-2005]].

**sources** — [[source.linnik-1941]] (origin), [[source.montgomery-vaughan-1973-largesieve]] (sharp constant), [[source.cojocaru-murty-2005]] and [[source.halberstam-richert-1974]] (exposition). Inequality and history cross-checked against Wikipedia ("Large sieve"), Montgomery's 1973 *Mathematika* paper listing, and standard analytic number theory notes (PSU Vaughan, Leiden Evertse). **[confirmed]**
