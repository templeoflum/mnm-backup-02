---
name: fractal
type: object
object-type: concept
essence: a set with fine structure at every scale whose Hausdorff–Besicovitch dimension strictly exceeds its topological dimension
field: [field.fractal-geometry-self-similarity]
status: established
state: settled
attribution: term coined by B. Mandelbrot (1975, Les objets fractals); definition via dimension given in The Fractal Geometry of Nature (1982); dimension concept from Hausdorff (1918)
formalized: true
source: [source.mandelbrot-1982, source.mandelbrot-1975, source.falconer-1990]
depends-on: [object.hausdorff-dimension]
used-by: []
---

**statement (plain)** — a fractal is a shape that stays detailed no matter how far you zoom in — its roughness does not smooth out at small scales. Mandelbrot's working definition pins this to dimension: a set is a fractal when its "fractal" (Hausdorff–Besicovitch) dimension is strictly larger than its ordinary topological dimension. A coastline (topological dimension 1) that crinkles at every scale has fractal dimension greater than 1; the Cantor set, Koch curve, and Sierpiński gasket are textbook examples. The word comes from Latin *fractus*, "broken."

**statement (formal)** — Mandelbrot (1982): *a fractal is by definition a set for which the Hausdorff–Besicovitch dimension strictly exceeds the topological dimension*, dim_H(F) > dim_T(F). Falconer declines a single rigid definition, instead characterizing a fractal F by a cluster of properties: fine structure at arbitrarily small scales; too irregular to describe with classical calculus/geometry; often (statistical or exact) self-similarity; dim_H(F) usually greater than its topological dimension and often non-integer; yet a simple, often recursive, definition.

**basis** — the dimension-based definition is Mandelbrot's, stated verbatim in *The Fractal Geometry of Nature* (1982) and built on the [[hausdorff-dimension]] of [[source.hausdorff-1918]] (with Besicovitch's geometric measure theory) [[source.mandelbrot-1982]]. **[confirmed]** Limit/critique: Falconer notes Mandelbrot's strict-inequality definition excludes some sets usually regarded as fractal, so he treats "fractal" as a family of properties rather than a precise definition — the term is descriptive, not a single theorem [[source.falconer-1990]]. **[confirmed]** Etymology (*fractus*) and 1975 coinage from [[source.mandelbrot-1975]] **[confirmed as attribution]**.
