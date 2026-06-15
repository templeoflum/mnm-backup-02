---
name: geometric-product
type: object
object-type: operation
essence: the single associative product of vectors that splits into a symmetric inner part and an antisymmetric outer part — ab = a·b + a∧b
field: [field.geometric-algebra]
status: definition
state: settled
attribution: W. K. Clifford (1878), building on Grassmann's exterior product (1844) and Hamilton's quaternions; modern formulation Hestenes (1966) and Hestenes & Sobczyk (1984)
formalized: true
source: [source.clifford-1878, source.grassmann-1844, source.hestenes-sobczyk-1984, source.doran-lasenby-2003, source.macdonald-geometric-algebra, source.lounesto-2001]
depends-on: [field.linear-algebra]
used-by: [object.clifford-algebra, object.multivector, object.rotor]
---

**statement (plain)** — the geometric product is the one fundamental multiplication of geometric algebra. For two vectors it combines two older products at once: a symmetric piece that measures how parallel they are (a scalar, the dot product) and an antisymmetric piece that measures the oriented plane they span (a bivector, the wedge product). It is associative and distributive, and the square of a vector equals its squared length, so the product carries both metric and orientation in a single invertible operation.

**statement (formal)** — for vectors a, b in a real vector space with quadratic form (metric), the [[geometric product]] is
ab = a·b + a∧b,
where the symmetric (inner) part is the scalar
a·b = ½(ab + ba)
and the antisymmetric (outer) part is the bivector
a∧b = ½(ab − ba).
The product is associative, (ab)c = a(bc), bilinear/distributive over addition, and satisfies the contraction rule a² = a·a = Q(a) (a scalar). For orthogonal a, b the product is the pure bivector a∧b = ab = −ba; for parallel vectors it is the pure scalar a·b. **[confirmed]**

**proof (definitional)** — this is a definition, not a theorem; the content is that the two classical products are recovered as the symmetric/antisymmetric parts of one associative product. Given an associative product with a² scalar, polarization of (a+b)² = (a+b)·(a+b) gives ab + ba = 2 a·b, fixing the symmetric part as the inner product; the remainder ½(ab − ba) is then the outer product, antisymmetric by construction. Consistency with the [[object.clifford-algebra]] is exactly the relation ab + ba = 2⟨a,b⟩. **[confirmed]**

**sources** — geometric product ab = a·b + a∧b with a·b = ½(ab+ba), a∧b = ½(ab−ba): MRAO/Cambridge Geometric Algebra introduction and Hestenes & Sobczyk [[source.hestenes-sobczyk-1984]]; door treatments Doran & Lasenby [[source.doran-lasenby-2003]] and Macdonald [[source.macdonald-geometric-algebra]]; historical origin Clifford [[source.clifford-1878]] on Grassmann [[source.grassmann-1844]].
