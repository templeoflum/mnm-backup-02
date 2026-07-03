---
name: dehn-twist
type: object
object-type: definition
essence: the mapping class got by cutting a surface along a simple closed curve, twisting one side by 2π, and regluing — the elementary generator of the mapping class group
field: ["[[field.low-dimensional-topology]]"]
status: established
state: float
attribution: M. Dehn (1938)
formalized: true
source: ["[[source.dehn-1938]]"]
depends-on: ["[[object.mapping-class-group]]"]
used-by: ["[[object.lickorish-generation-theorem]]", "[[object.two-generator-theorem-mapping-class-group]]"]
---

**statement (plain)** — pick a loop on the surface that does not bound a disk. Cut along it, give one cut edge a full 2π turn, and glue back. The result is a homeomorphism of the surface — a Dehn twist about that curve. These twists are the atoms: every mapping class is built from finitely many of them.

**statement (formal)** — for a simple closed curve c on Σ, the (left) Dehn twist T_c ∈ Mod(Σ) acts on an annular neighborhood A = S¹×[0,1] of c by (θ,t) ↦ (θ+2πt, t) and is the identity outside A. **[confirmed]**

**basis** — Dehn's twists generate Mod(Σ_g) (finite generation, Dehn 1938). The generation counts (Lickorish 3g−1; Humphries 2g+1) are theorems about these elements.
