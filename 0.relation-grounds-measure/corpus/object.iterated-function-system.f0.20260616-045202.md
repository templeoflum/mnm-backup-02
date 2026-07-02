---
name: iterated-function-system
type: object
object-type: method
essence: a finite set of contraction maps whose Hutchinson operator has a unique compact attractor — the constructive engine for self-similar fractals
field: ["[[field.fractal-geometry-self-similarity]]"]
status: established
state: settled
attribution: J. E. Hutchinson (1981); popularized by M. Barnsley (Fractals Everywhere, 1988); rests on the Banach fixed-point theorem
formalized: true
source: ["[[source.hutchinson-1981]]", "[[source.falconer-1990]]"]
depends-on: ["[[object.self-similarity]]", "[[object.hausdorff-dimension]]"]
used-by: []
aliases: ["object.iterated-function-system"]
---

**statement (plain)** — pick a few maps that each shrink space (contractions). Apply all of them to a starting shape, take the union, and repeat. The picture settles down to one limiting set — the attractor — no matter what shape you started from. That attractor is a fractal: choose the maps and you've specified the fractal. This is how the Sierpiński gasket, the Barnsley fern, and Koch curve are generated, and the basis of the chaos game and fractal image compression.

**statement (formal)** — on a complete metric space (X, d), an **iterated function system** is a finite family {S_1, …, S_N} of contractions (Lipschitz constants c_i < 1). The **Hutchinson operator** on the space K(X) of non-empty compact subsets, with the Hausdorff metric d_H, is
F(A) = ⋃_{i=1}^{N} S_i(A).
F is a contraction on (K(X), d_H) with ratio max_i c_i, so by the Banach fixed-point theorem it has a **unique fixed point** (the attractor) A* = F(A*), and F^{n}(A_0) → A* for every starting compact A_0. When the S_i are similarities satisfying the open set condition, A* is self-similar with dim_H(A*) the similarity dimension (Moran's equation).

**basis** — existence and uniqueness of the attractor as a contraction fixed point on (K(X), d_H) is Hutchinson's theorem (1981) [[source.hutchinson-1981]] **[confirmed]**, a direct application of the Banach fixed-point theorem; the construction, the Hausdorff-metric contraction estimate d_H(F(A),F(B)) ≤ (max c_i) d_H(A,B), and the link to self-similar dimension are standard textbook material in Falconer ch. 9 [[source.falconer-1990]] **[confirmed]**. Limit: the clean dimension formula needs the open set condition; the method produces self-affine and random IFS attractors too, but those leave the equal-ratio similarity regime and require the broader theory.
