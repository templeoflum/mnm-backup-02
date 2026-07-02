---
name: isomorphism-theorems
type: object
object-type: theorem
essence: quotients, homomorphisms, and subgroups line up — three structural identities
field: ["[[field.group-theory]]"]
status: proven
state: settled
attribution: E. Noether (1927, uniform formulation); roots in Dedekind
formalized: true
source: ["[[source.noether-1927]]", "[[source.dummit-foote]]", "[[source.judson-abstract-algebra]]"]
depends-on: []
used-by: []
---

**statement (plain)** — three companion facts say that "collapsing by a normal subgroup" behaves predictably. (1) Any homomorphism's image is a faithful copy of the source with its kernel collapsed. (2) Multiplying a subgroup by a normal subgroup, then collapsing the normal part, is the same as collapsing only the overlap. (3) Collapsing in two nested stages equals collapsing all at once. Together they are the grammar of quotient groups.

**statement (formal)** — let G be a group; subgroups H ≤ G, normal subgroups N, M ◁ G.
- **First (fundamental homomorphism theorem):** for a homomorphism φ : G → K, ker φ ◁ G and G / ker φ ≅ im φ.
- **Second (diamond / parallelogram):** if H ≤ G and N ◁ G, then HN ≤ G, H ∩ N ◁ H, and HN/N ≅ H/(H ∩ N).
- **Third:** if N ◁ M ◁ G with N ◁ G, then (G/N)/(M/N) ≅ G/M.
A frequently appended **fourth / correspondence (lattice) theorem** puts subgroups of G/N in order-preserving bijection with subgroups of G containing N. **[confirmed]**

**status** — proven.

**numbering caveat** — there is no universal agreement on the numbering; some texts swap the second and third, and some start the count at the correspondence theorem. The mathematical content is stable; only the labels drift. **[confirmed]**

**proof** — all three follow from the first: define the natural map, identify its kernel, apply G/ker ≅ im. Standard in [[source.dummit-foote]] and [[source.judson-abstract-algebra]]. **[confirmed]**

**lineage** — Emmy Noether gave the uniform, general formulation (for groups, rings, modules, groups-with-operators) in "Abstrakter Aufbau der Idealtheorie in algebraischen Zahl- und Funktionenkörpern," *Mathematische Annalen* 96 (1927) [[source.noether-1927]] — hence "Noether's isomorphism theorems." Noether herself credited a more special version to Dedekind. **[confirmed]**

**sources** — nLab, Encyclopedia of Mathematics, Wikipedia ("Isomorphism theorems," "Fundamental theorem on homomorphisms"); [[source.dummit-foote]], [[source.judson-abstract-algebra]].
