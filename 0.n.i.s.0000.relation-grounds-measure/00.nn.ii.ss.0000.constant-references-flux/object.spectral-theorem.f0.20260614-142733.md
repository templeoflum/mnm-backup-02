---
name: spectral-theorem
type: object
object-type: theorem
essence: symmetric (more generally normal) matrices have an orthonormal eigenbasis and diagonalize via an orthogonal/unitary change of basis
field: [field.linear-algebra]
status: proven
state: verified
attribution: symmetric/finite-dimensional case Cauchy (1829); operator generalization Hilbert, von Neumann (20th c.)
formalized: true
source: [source.cauchy-1829, source.axler-linear-algebra, source.strang-linear-algebra, source.halmos-1942]
depends-on: [object.eigenvalue-eigenvector, object.vector-space]
used-by: [object.singular-value-decomposition]
---

**statement (plain)** — some matrices are "as nice as possible": you can find a set of perpendicular axes (an orthonormal basis) along which the matrix acts purely by stretching, with no shearing or rotation. Real symmetric matrices are exactly these — all their eigenvalues are real numbers, and their eigenvectors can be chosen mutually perpendicular. In that basis the matrix becomes diagonal.

**statement (formal)** — (real symmetric case) if A is a real n × n symmetric matrix (Aᵀ = A), then there is an orthogonal matrix Q (QᵀQ = I) and a real diagonal matrix D with A = Q D Qᵀ; the columns of Q are an orthonormal basis of eigenvectors and the diagonal entries of D are the (real) eigenvalues. (Complex/general case) a matrix A is normal (A*A = AA*) iff there is a unitary U with A = U D U*, D diagonal; Hermitian (A* = A) matrices are the normal matrices with real eigenvalues. **[confirmed]**

**status** — proven.

**proof (reference)** — reality of eigenvalues: for Av = λv with A Hermitian, λ‖v‖² = ⟨Av,v⟩ = ⟨v,Av⟩ = λ̄‖v‖², so λ = λ̄. Orthogonality of eigenvectors for distinct eigenvalues follows similarly; the full result is proved by induction on dimension or via the existence of an eigenvalue plus invariant-subspace restriction. See Axler ("complex/real spectral theorem") [[source.axler-linear-algebra]]; Strang [[source.strang-linear-algebra]]. **[confirmed]**

**lineage** — [[Augustin-Louis Cauchy]] proved the finite-dimensional spectral theorem for real symmetric matrices (real eigenvalues, orthogonal diagonalization) in his 1829 memoir on the secular equation [[source.cauchy-1829]], generalizing Euler's and Lagrange's principal axes. The infinite-dimensional generalization to integral operators is due to [[David Hilbert]], and to bounded/unbounded self-adjoint operators on Hilbert space to [[John von Neumann]] in the late 1920s–1930s. **[confirmed]** (the operator-theory generalization is noted as lineage; its source records are filed under functional analysis, not linked here to avoid same-name/different-work traps).

**door** — Axler, *Linear Algebra Done Right*, ch. 7 [[source.axler-linear-algebra]]; Strang, *Introduction to Linear Algebra*, ch. 6 [[source.strang-linear-algebra]].

**sources** — [[source.cauchy-1829]], [[source.axler-linear-algebra]], [[source.strang-linear-algebra]], [[source.halmos-1942]]; Wikipedia "Spectral theorem" (statement for symmetric + normal matrices, Cauchy attribution, von Neumann generalization, two-source confirmed against course/text statements).
