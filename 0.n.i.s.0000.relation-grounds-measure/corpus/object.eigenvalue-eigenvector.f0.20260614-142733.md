---
name: eigenvalue-eigenvector
type: object
object-type: definition
essence: directions a linear map only stretches — Av = λv, where v is the eigenvector and λ its eigenvalue
field: [field.linear-algebra]
status: defined
state: settled
attribution: "characteristic root" Cauchy (early 19th c.); "latent root" Sylvester (1883); "eigen-" terminology Hilbert (1904)
formalized: true
source: [source.cauchy-1829, source.hilbert-1904, source.axler-linear-algebra, source.strang-linear-algebra]
depends-on: [object.vector-space]
used-by: [object.spectral-theorem, object.cayley-hamilton-theorem, object.singular-value-decomposition, object.condition-number, object.eigenvalue-repulsion-level-spacing, object.gaussian-ensembles, object.marchenko-pastur-law, object.wigner-semicircle-law]
---

**statement (plain)** — most directions get rotated and rescaled when a linear map acts on them. An eigenvector is a special non-zero direction that the map does NOT rotate — it only stretches or shrinks it (possibly flipping it). The factor by which it stretches is the eigenvalue. These special directions reveal the intrinsic "axes" of the transformation.

**statement (formal)** — let T : V → V be a linear operator on a vector space V over a field F. A non-zero vector v ∈ V is an eigenvector of T with eigenvalue λ ∈ F if
T v = λ v.
For a square matrix A, the eigenvalues are exactly the roots of the characteristic polynomial p(λ) = det(λI − A) = 0; for each such λ the eigenvectors are the non-zero solutions of (A − λI)v = 0. **[confirmed]**

**status** — definition.

**lineage (terminology, contested over time)** — [[Augustin-Louis Cauchy]] introduced the characteristic equation and "characteristic root" (racine caractéristique) and proved real symmetric matrices have real roots [[source.cauchy-1829]]. J. J. Sylvester used "latent root" (1883). [[David Hilbert]], studying integral operators as infinite matrices, introduced the German *eigen-* ("own") in his work on integral equations (1904) [[source.hilbert-1904]]; this terminology became dominant and was later anglicized to eigenvalue / eigenvector. **[confirmed as attribution for the eigen- terminology]** (original German works not opened). The 18th-century roots lie in Euler's and Lagrange's principal axes of rotating bodies. **[confirmed]**

**door** — Axler, *Linear Algebra Done Right*, ch. 5 [[source.axler-linear-algebra]]; Strang, *Introduction to Linear Algebra*, ch. 6 [[source.strang-linear-algebra]].

**sources** — [[source.cauchy-1829]], [[source.hilbert-1904]], [[source.axler-linear-algebra]], [[source.strang-linear-algebra]]; Wikipedia "Eigenvalues and eigenvectors" and MAA "Math Origins: Eigenvectors and Eigenvalues" (definition + terminology history, two-source confirmed).
