---
name: rank-nullity-theorem
type: object
object-type: theorem
essence: for a linear map, dim of domain = rank + nullity — image and kernel dimensions add up to the source dimension
field: [field.linear-algebra]
status: proven
state: verified
attribution: classical (no single originator); called "fundamental theorem of linear maps" by Axler
formalized: true
source: [source.axler-linear-algebra, source.strang-linear-algebra, source.halmos-1942]
depends-on: [object.vector-space]
used-by: [object.gaussian-elimination-lu]
---

**statement (plain)** — take a linear map from one (finite-dimensional) vector space to another. Some inputs get crushed to zero (the kernel); the outputs you can actually reach form the image. The theorem says: the dimension of the kernel plus the dimension of the image equals the dimension of the starting space. Whatever dimension the map "loses" to the kernel, it makes up exactly in the image.

**statement (formal)** — let T : V → W be a linear map with V finite-dimensional. Then
dim V = rank(T) + nullity(T) = dim(im T) + dim(ker T).
Equivalently, for an m × n matrix A, rank(A) + dim(null A) = n (the number of columns). **[confirmed]**

**status** — proven.

**proof (reference)** — choose a basis u₁,…,u_k of ker T (so nullity = k), extend it to a basis u₁,…,u_k, v₁,…,v_m of V (so dim V = k + m). One shows T v₁,…,T v_m is a basis of im T, hence rank = m, giving dim V = k + m = nullity + rank. See Axler, *Linear Algebra Done Right* ("Fundamental Theorem of Linear Maps") [[source.axler-linear-algebra]]; nLab "rank-nullity theorem." **[confirmed]**

**naming note** — Axler calls this the **fundamental theorem of linear maps**; it is also the matrix "dimension theorem." It is classical and folkloric — no single mathematician is credited with first stating it; it emerges directly once dimension and linear maps are formalized (so it tracks the [[object.vector-space]] codification of Peano onward). **[confirmed for statement; no contested attribution]**

**door** — Axler, *Linear Algebra Done Right*, ch. 3 [[source.axler-linear-algebra]]; Strang, *Introduction to Linear Algebra* (the four fundamental subspaces) [[source.strang-linear-algebra]].

**sources** — [[source.axler-linear-algebra]], [[source.strang-linear-algebra]], [[source.halmos-1942]]; Wikipedia "Rank–nullity theorem" and nLab "rank-nullity theorem" (statement, two-source confirmed).
