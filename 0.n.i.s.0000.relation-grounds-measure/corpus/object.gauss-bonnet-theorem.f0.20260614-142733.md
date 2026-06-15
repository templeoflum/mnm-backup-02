---
name: gauss-bonnet-theorem
type: object
object-type: theorem
essence: the total Gaussian curvature of a closed surface equals 2π times its Euler characteristic — geometry (curvature) pinned to topology (shape's invariant count)
field: [field.differential-geometry]
status: proven
state: verified
attribution: local angle-excess form Gauss (1827); bounded-region (disc) form P. O. Bonnet (1848); global closed-surface form later (von Dyck; standard 20th-c. statement)
formalized: true
source: [source.gauss-1827, source.bonnet-1848, source.do-carmo-1976]
depends-on: [object.gaussian-curvature, object.geodesic, object.riemannian-metric]
used-by: []
---

**statement (plain)** — bend and stretch a closed surface however you like (without tearing) and its curvature gets pushed around — flattened here, sharpened there — but the *total* curvature, summed over the whole surface, never changes. It always equals 2π times the Euler characteristic, a whole-number count of the surface's shape (2 for a sphere, 0 for a doughnut/torus, negative for many-holed surfaces). So a purely geometric quantity (how the surface curves) is locked to a purely topological one (how many holes it has). The local form says: in a geodesic triangle, the angles add up to π plus the enclosed curvature — angle excess on a sphere, angle deficit on a saddle.

**statement (formal, global)** — let M be a compact, oriented two-dimensional Riemannian manifold without boundary, with Gaussian curvature K and area element dA. Then
∫_M K dA = 2π χ(M),
where χ(M) is the Euler characteristic of M. **[confirmed]**

**statement (formal, local / with boundary)** — let R be a region on a surface bounded by a piecewise-smooth simple closed curve with smooth arcs of geodesic curvature k_g and exterior (turning) angles θ_i at the corners. Then
∫∫_R K dA + ∮_{∂R} k_g ds + Σ_i θ_i = 2π.
For a geodesic triangle (k_g = 0 on the sides), with interior angles α_i, this reduces to Σ α_i = π + ∫∫_R K dA. **[confirmed]**

**status** — proven.

**lineage (contested attribution)** — Gauss, in *Disquisitiones generales circa superficies curvas* (1827) [[source.gauss-1827]], proved the geodesic-triangle case (angle sum vs. integrated curvature) but did not publish the general theorem. Pierre Ossian Bonnet (1848) [[source.bonnet-1848]] published the generalization to a region bounded by an arbitrary (piecewise-smooth) curve homeomorphic to a disc — the local Gauss–Bonnet formula. Neither Gauss's nor Bonnet's stated result is the modern *global* closed-surface form; that connection of total curvature to the Euler characteristic was made later (commonly associated with Walter von Dyck's late-19th-century work on the Euler characteristic and crystallized in 20th-century textbooks). The n-dimensional generalization is the Chern–Gauss–Bonnet theorem (S.-S. Chern, 1945). **[confirmed for Gauss 1827 local case and Bonnet 1848 disc case; global-form attribution carried as lineage]**

**door** — do Carmo, *Differential Geometry of Curves and Surfaces*, ch. 4-5 (Gauss–Bonnet theorem, local and global) [[source.do-carmo-1976]].

**sources** — Encyclopedia of Mathematics, "Gauss–Bonnet theorem" (gives Bonnet 1848, disc case; ∫K dS = 2πχ); Wikipedia, "Gauss–Bonnet theorem" (Gauss developed but never published; Bonnet 1848 special case; Chern 1945 generalization); REU expositions (Zhu, Berkeley; Rotskoff, Chicago) confirming local and global statements.
