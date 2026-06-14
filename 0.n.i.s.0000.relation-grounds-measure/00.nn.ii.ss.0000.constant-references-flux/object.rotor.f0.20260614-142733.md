---
name: rotor
type: object
object-type: theorem
essence: an even unit multivector R (RR̃=1) that rotates any object by the two-sided sandwich x ↦ RxR̃; R = exp(−Bθ/2) for a unit bivector B
field: [field.geometric-algebra]
status: proven
state: float
attribution: rotation-as-two-reflections from Hamilton / Cartan–Dieudonné; rotor formulation in geometric algebra Hestenes (1966) and Hestenes & Sobczyk (1984)
formalized: true
source: [source.hestenes-sobczyk-1984, source.doran-lasenby-2003, source.macdonald-geometric-algebra, source.lounesto-2001]
depends-on: [object.geometric-product, object.clifford-algebra, object.multivector]
used-by: []
---

**statement (plain)** — a rotor is the geometric-algebra object that performs a rotation. It is built from an even number of reflections (each reflection is a "sandwich" with a unit vector), so a rotor is a product of an even number of unit vectors. You rotate any object — a vector, a plane, a whole multivector — with the same one-line formula: sandwich it between the rotor and its reverse. A rotor can be written as the exponential of a bivector: the bivector names the plane of rotation, and the angle in the exponent is half the rotation angle (the half-angle that quaternions also have).

**statement (formal)** — in the geometric algebra of a Euclidean (or general nondegenerate) space, a **rotor** R is an even-grade multivector satisfying the unimodular condition
R R̃ = 1,
where R̃ is the reverse (reversal of the order of the vector factors in each blade). Any vector — and more generally any [[object.multivector]] M — rotates by the double-sided sandwich
M ↦ R M R̃   ( = R M R⁻¹, since R⁻¹ = R̃ ).
Equivalently a rotor is the geometric product of an even number of unit vectors, i.e. a composition of an even number of reflections (Cartan–Dieudonné). For a rotation by angle θ in the plane of a unit bivector B (B² = −1),
R = exp(−Bθ/2) = cos(θ/2) − B sin(θ/2),
and the sandwich RvR̃ rotates v through angle θ in that plane. Rotors form the group Spin = { R ∈ Cl⁰ : RR̃ = 1 }, the double cover of SO. **[confirmed]**

**proof** — a reflection of v in the hyperplane orthogonal to a unit vector n is v ↦ −nvn. Composing two such reflections gives v ↦ (mn) v (mn)~ = RvR̃ with R = mn even and RR̃ = mnñm̃ = 1; by Cartan–Dieudonné every rotation is a product of an even number of reflections, so every rotation is realized by such a sandwich. Writing R for a single plane: since B²=−1, exp(−Bθ/2) = cos(θ/2) − B sin(θ/2); a direct computation of R v R̃ for v in the B-plane yields v rotated by θ, while components orthogonal to the plane commute through and are fixed. The half-angle is forced by the two-sided action. **[confirmed]**

**lineage** — "every rotation = composition of two reflections" is classical (Hamilton; generalized as the Cartan–Dieudonné theorem); the rotor/sandwich formulation as the native rotation operator of geometric algebra is due to the Hestenes revival. Carried as lineage. **[confirmed as attribution]**

**sources** — rotor as even multivector with RR̃=1, product of an even number of unit vectors, sandwich v↦RvR̃ = RvR⁻¹, Spin group, exponential R = exp(−Bθ/2) with half-angle: Wikipedia *Rotor (mathematics)* and the Geometric Algebra "The rotor" reference at geometrica.vialattea.net (two independent sources, exponential/half-angle form confirmed by the latter); door treatments Doran & Lasenby [[source.doran-lasenby-2003]], Macdonald [[source.macdonald-geometric-algebra]], Hestenes & Sobczyk [[source.hestenes-sobczyk-1984]]; spin/spinor framing Lounesto [[source.lounesto-2001]].
