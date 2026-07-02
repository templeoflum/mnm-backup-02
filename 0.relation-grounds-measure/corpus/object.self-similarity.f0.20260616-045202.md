---
name: self-similarity
type: object
object-type: concept
essence: a set built of scaled copies of itself — exact or statistical invariance under change of scale
field: [field.fractal-geometry-self-similarity]
status: established
state: settled
attribution: classical constructions (Cantor, Koch, Sierpiński, Weierstrass); similarity dimension via Moran (1946); modern formalization Hutchinson (1981); named/unified Mandelbrot (1982)
formalized: true
source: [source.hutchinson-1981, source.falconer-1990, source.mandelbrot-1982]
depends-on: [object.hausdorff-dimension]
used-by: [object.iterated-function-system]
aliases: ["object.self-similarity"]
---

**statement (plain)** — a shape is self-similar when its whole is made of smaller copies of itself: zoom in on a piece and you see the same form again. It can be *exact* (the Sierpiński gasket is three half-size copies of itself) or *statistical* (a coastline looks "the same kind of rough" at every scale without literal copying). For exactly self-similar sets that don't overlap too much, a scaling-count formula gives the dimension directly.

**statement (formal)** — F is **self-similar** if F = ⋃_{i=1}^{N} S_i(F) where each S_i is a contracting similarity with ratio r_i ∈ (0,1). Under the **open set condition** (an open set V with ⋃_i S_i(V) ⊆ V and the S_i(V) disjoint), the Hausdorff dimension equals the **similarity dimension** s, the unique solution of Moran's equation
Σ_{i=1}^{N} r_i^{ s } = 1,
and in the equal-ratio case r_i = r this is s = log N / log(1/r). (Cantor: N=2, r=1/3 → log2/log3; Koch: N=4, r=1/3 → log4/log3.)

**basis** — self-similar sets arise as the unique attractors of iterated function systems of similarities, established rigorously by Hutchinson (1981) [[source.hutchinson-1981]] **[confirmed]**. The dimension formula under the open set condition is the Moran (1946)–Hutchinson result, presented as standard theory (with the open set condition and Moran's equation) in Falconer ch. 9 [[source.falconer-1990]] **[confirmed]**. Mandelbrot named self-similarity as the organizing idea of fractal geometry and the source of the classical examples [[source.mandelbrot-1982]] **[confirmed]**. Limit: the dimension formula requires the open set condition (controlled overlap); with heavy overlaps the Hausdorff dimension can be strictly smaller than the similarity dimension, and *statistical* self-similarity (random fractals, Brownian motion) needs the broader measure-theoretic machinery rather than the count formula [[source.falconer-1990]] **[confirmed]**.
