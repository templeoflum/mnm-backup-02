---
name: diffeomorphic-metric
type: object
object-type: concept
essence: the distance on the space of shapes given by the minimal kinetic energy of a diffeomorphic flow connecting them — geodesic distance in the diffeomorphism group
field: ["[[field.computational-anatomy]]"]
status: established
state: settled
attribution: Miller, Trouvé & Younes (2002)
formalized: true
source: ["[[source.miller-trouve-younes-2002]]"]
depends-on: ["[[object.deformable-template]]"]
used-by: []
---

**statement (plain)** — because every shape is a warp of the template, you can ask how much warping separates two shapes. The least deformation-energy needed to flow from one to the other is their distance. This turns the orbit of shapes into a metric space where nearby means easily deformable into each other.

**statement (formal)** — for shapes I₀, I₁ in the orbit, d(I₀,I₁)² = inf ∫₀¹ ‖v_t‖²_V dt over flows with Φ₁·I₀ = I₁; d is a geodesic distance on the diffeomorphism group / shape orbit (a right-invariant Riemannian metric). **[confirmed]**

**basis** — Miller–Trouvé–Younes (2002); the metric structure that makes computational anatomy a *metric* pattern theory (diffeomorphometry).
