---
name: mapping-class-group
type: object
object-type: definition
essence: the group of isotopy classes of orientation-preserving homeomorphisms of a surface — Mod(Σ_g) = Homeo⁺(Σ_g)/Homeo₀(Σ_g)
field: ["[[field.low-dimensional-topology]]"]
status: established
state: settled
attribution: Dehn (1920s–1938); standard modern treatment Farb–Margalit (2011)
formalized: true
source: ["[[source.dehn-1938]]", "[[source.farb-margalit-2011]]"]
depends-on: []
used-by: ["[[object.dehn-twist]]", "[[object.lickorish-generation-theorem]]", "[[object.two-generator-theorem-mapping-class-group]]", "[[object.nielsen-thurston-classification]]"]
---

**statement (plain)** — take all the ways to continuously deform a surface onto itself (orientation preserving), and count two the same when one can be slid to the other without cutting. Those equivalence classes form a group under composition — the mapping class group. It is the symmetry group of the surface up to isotopy, and it is the object every surface-generation result is about.

**statement (formal)** — for a closed oriented genus-g surface Σ_g, Mod(Σ_g) = π₀(Homeo⁺(Σ_g)) = Homeo⁺(Σ_g)/Homeo₀(Σ_g), the isotopy classes of orientation-preserving self-homeomorphisms. **[confirmed]**

**basis** — a foundational object of low-dimensional topology; elements classify (Nielsen–Thurston) as periodic, reducible, or pseudo-Anosov. Door: Farb–Margalit, *A Primer on Mapping Class Groups*.
