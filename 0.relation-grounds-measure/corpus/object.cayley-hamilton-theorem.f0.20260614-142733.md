---
name: cayley-hamilton-theorem
type: object
object-type: theorem
essence: every square matrix satisfies its own characteristic equation — p(A) = 0
field: ["[[field.linear-algebra]]"]
status: proven
state: settled
attribution: Hamilton (1853, quaternion case); Cayley (1858, stated, verified small cases); general proof Frobenius (1878)
formalized: true
source: ["[[source.cayley-1858]]", "[[source.frobenius-1878]]", "[[source.axler-linear-algebra]]", "[[source.strang-linear-algebra]]"]
depends-on: ["[[object.eigenvalue-eigenvector]]", "[[object.vector-space]]"]
used-by: []
---

**statement (plain)** — every square matrix obeys its own characteristic equation. Form the characteristic polynomial of the matrix (the one whose roots are the eigenvalues), then substitute the matrix itself in place of the variable: the result is the zero matrix. A matrix, in effect, "annihilates" its own defining polynomial.

**statement (formal)** — let A be an n × n matrix over a commutative ring (or field), with characteristic polynomial p(λ) = det(λI − A) = λⁿ + c_{n−1}λ^{n−1} + ⋯ + c₁λ + c₀. Then
p(A) = Aⁿ + c_{n−1}A^{n−1} + ⋯ + c₁A + c₀ I = 0 (the zero matrix). **[confirmed]**

**status** — proven.

**proof (reference)** — the slickest proof uses the adjugate identity (λI − A)·adj(λI − A) = det(λI − A) I = p(λ) I, then compares matrix-polynomial coefficients; one must avoid the naïve "substitute λ = A into det(λI − A)" which is invalid. See Higham, "What is the Cayley–Hamilton Theorem?"; Axler treats it via eigenvalues / generalized eigenspaces [[source.axler-linear-algebra]]. **[confirmed]**

**lineage (contested attribution)** — W. R. [[Hamilton]] proved a special case in 1853 in terms of inverses of linear functions of quaternions. A. [[Cayley]] stated the general result in his 1858 *Memoir on the Theory of Matrices* and verified the 2×2 and 3×3 cases but wrote that he "did not think it necessary to undertake the labour of a formal proof... in the general case" [[source.cayley-1858]]. The first general proof for arbitrary n was given by F. G. [[Frobenius]] in 1878 [[source.frobenius-1878]]. The name credits Cayley and Hamilton; the general proof is Frobenius's. **[confirmed]** (original Crelle and quaternion papers not opened — Frobenius/Hamilton **[confirmed as attribution]**).

**door** — Axler, *Linear Algebra Done Right* [[source.axler-linear-algebra]]; Strang, *Introduction to Linear Algebra* [[source.strang-linear-algebra]].

**sources** — [[source.cayley-1858]], [[source.frobenius-1878]], [[source.axler-linear-algebra]], [[source.strang-linear-algebra]]; Wikipedia "Cayley–Hamilton theorem" and Higham, "What is the Cayley–Hamilton Theorem?" (statement + attribution, two-source confirmed).
