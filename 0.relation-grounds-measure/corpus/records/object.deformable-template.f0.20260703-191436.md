---
name: deformable-template
type: object
object-type: concept
essence: a reference form (template) whose orbit under the diffeomorphism group is the space of anatomical shapes — typicality in the template, variability in the deformations
field: ["[[field.computational-anatomy]]"]
status: established
state: settled
attribution: U. Grenander; M. Miller (1997/1998)
formalized: true
source: ["[[source.grenander-miller-1998]]", "[[source.trouve-1995]]"]
depends-on: []
used-by: ["[[object.lddmm]]", "[[object.diffeomorphic-metric]]"]
---

**statement (plain)** — pick one exemplar anatomy — a template. Every other instance of that anatomy is modeled as a smooth, invertible warp (diffeomorphism) of the template. The whole family of warps applied to the template sweeps out an orbit, and that orbit *is* the space of shapes: what is typical lives in the template, what varies lives in the deformations.

**statement (formal)** — for a template I_temp and the group 𝒢 of diffeomorphisms, the anatomical orbit is ℐ = 𝒢·I_temp = {g·I_temp : g ∈ 𝒢}; a shape is an element of ℐ, indexed by the transformation carrying the template to it. **[confirmed]**

**basis** — Grenander's metric pattern theory; the founding construct of computational anatomy. The metric on ℐ (geodesic deformation cost) and the LDDMM algorithm operationalize it.
