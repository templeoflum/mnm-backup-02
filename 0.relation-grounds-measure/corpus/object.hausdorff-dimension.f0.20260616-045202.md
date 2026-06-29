---
name: hausdorff-dimension
type: object
object-type: definition
essence: a real-valued dimension assigned to any metric set via the critical exponent of Hausdorff measure — non-integer for fractals
field: [field.fractal-geometry-self-similarity]
status: established
state: settled
attribution: F. Hausdorff (1918), building on Carathéodory's outer-measure construction; geometric theory developed by A. S. Besicovitch
formalized: true
source: [source.hausdorff-1918, source.falconer-1990, source.mandelbrot-1982]
depends-on: []
used-by: [object.fractal, object.self-similarity, object.iterated-function-system]
---

**statement (plain)** — a way to assign a "dimension" to any set in a metric space that can come out non-integer. You cover the set by small pieces, raise each piece's diameter to a power s, and add up. For small s the total stays infinite no matter how fine the cover; for large s it drops to zero. There is one critical exponent where it flips — that number is the Hausdorff dimension. A line gives 1, a filled square 2, but the Cantor set gives log2/log3 ≈ 0.631 and the Koch curve log4/log3 ≈ 1.262.

**statement (formal)** — for a set F in a metric space and s ≥ 0, the s-dimensional Hausdorff measure is
H^s(F) = lim_{δ→0} inf { Σ_i (diam U_i)^s : {U_i} a countable δ-cover of F }.
There is a unique critical value s* such that H^s(F) = ∞ for s < s* and H^s(F) = 0 for s > s*; the **Hausdorff dimension** is
dim_H(F) = s* = inf{ s ≥ 0 : H^s(F) = 0 } = sup{ s ≥ 0 : H^s(F) = ∞ }.

**proof/derivation** — Hausdorff (1918) constructed the parameter-dependent outer measure (via Carathéodory's method of covers of bounded diameter) and showed the measure jumps from ∞ to 0 at a single critical value of the parameter, which therefore acts as a dimension taking arbitrary non-negative real values [[source.hausdorff-1918]]. **[confirmed]** The existence and uniqueness of the critical exponent, and the standard properties (monotonicity, countable stability, dim_H ≤ box dimension, equals the usual dimension for smooth sets), are developed rigorously in Falconer ch. 2–3 [[source.falconer-1990]] **[confirmed]**; Mandelbrot uses this (as "Hausdorff–Besicovitch dimension") as the defining quantity of a fractal [[source.mandelbrot-1982]] **[confirmed]**.
