---
name: eigenvalue-repulsion-level-spacing
type: object
object-type: law
essence: random-matrix eigenvalues avoid each other — nearest-neighbor spacings follow the Wigner surmise, not Poisson
field: [field.random-matrix-theory]
status: established
state: float
attribution: E. P. Wigner (surmise, 1956/57); β classification F. J. Dyson (1962)
formalized: true
source: [source.wigner-1957, source.dyson-1962, source.mehta-1967, source.tao-rmt]
depends-on: [object.gaussian-ensembles, object.eigenvalue-eigenvector]
used-by: []
---

**statement (plain)** — the eigenvalues of a random matrix are not independent: they repel each other. Unlike random independent points (which clump — the spacing of zero is the most likely), random-matrix eigenvalues almost never coincide; the probability of two sitting very close together vanishes. The histogram of gaps between consecutive eigenvalues (after rescaling to unit mean) follows a characteristic bell-ish curve that rises from zero, the **Wigner surmise**. This level repulsion is the experimental signature of random-matrix behavior — it is how nuclear spectra, quantum-chaotic systems, and the zeros of the Riemann zeta function were recognized as RMT-governed.

**statement (formal)** — for the Gaussian β-ensembles, the distribution p(s) of the **unfolded** nearest-neighbor spacing s (normalized to mean 1) is captured, exactly for 2×2 matrices and to excellent approximation in general, by the **Wigner surmise**:
  β = 1 (GOE):  p(s) = (π/2) s · exp(−π s²/4),
  β = 2 (GUE):  p(s) = (32/π²) s² · exp(−4 s²/π),
  β = 4 (GSE):  p(s) = (2¹⁸/3⁶π³) s⁴ · exp(−(64/9π) s²).
In general p(s) ∝ s^β as s → 0 — **level repulsion of order β** — versus the Poisson (independent-eigenvalue) law p(s) = e^{−s}, which has p(0) = 1, i.e. no repulsion. The origin of the repulsion is the Vandermonde factor ∏_{i<j}|λ_i − λ_j|^β in the joint density of the [[object.gaussian-ensembles]]: it forces the density to zero whenever two eigenvalues coincide. **[confirmed]**

**status** — established (the surmise is an exact 2×2 result and a benchmark approximation; exact N→∞ spacing laws are given by Fredholm determinants of the sine kernel, due to Gaudin–Mehta–Dyson).

**proof (reference)** — the surmise is obtained exactly by integrating the joint density of a 2×2 ensemble over the level positions, holding the gap fixed. The exact bulk spacing distribution for N→∞ is det(I − K_sin) on an interval, where K_sin is the sine kernel — the Gaudin–Mehta–Dyson result. See [[source.mehta-1967]], [[source.tao-rmt]]. **[confirmed]**

**lineage** — the spacing surmise is Wigner's, posed at the 1956 Gatlinburg neutron-physics conference (proceedings 1957) [[source.wigner-1957]]; the β = 1, 2, 4 strength of repulsion follows Dyson's symmetry classification [[source.dyson-1962]]; exact spacing laws are due to Gaudin, Mehta and Dyson, codified in [[source.mehta-1967]]. **[confirmed]** (GSE surmise constants are carried as **[candidate, constant-form varies]** — the prefactor is sometimes written 2¹⁸/(3⁶π³); the s⁴ repulsion and exp(−(64/9π)s²) are standard.)

**sources** — [[source.wigner-1957]], [[source.dyson-1962]], [[source.mehta-1967]], [[source.tao-rmt]]; Wikipedia "Wigner surmise."
