---
name: canonicalization
type: object
object-type: concept
essence: attaining invariance by mapping each input to one canonical representative of its group orbit — learning a distribution over the orbit space X/G rather than over X
field: ["[[field.geometric-deep-learning]]"]
status: established
state: float
attribution: formalized in the equivariant-learning literature (Kaba et al. 2023; Ma et al. 2024)
formalized: true
source: ["[[source.kaba-2023]]", "[[source.ma-2024]]"]
depends-on: []
used-by: ["[[object.frame-averaging]]", "[[object.learned-canonicalization]]"]
---

**statement (plain)** — if you want a model that does not care about a symmetry (rotation, permutation), first rotate/relabel every input into one agreed-upon “canonical pose,” then process that. All inputs in the same orbit collapse to one representative, so invariance is automatic — you have effectively moved from the raw space X to the quotient X/G.

**statement (formal)** — an orbit-representative map c: X → X, c(x) = h(x)⁻¹·x, where h: X → G is an equivariant canonicalization function; a model f∘c is G-invariant, and learning over c(X) is learning over X/G. **[confirmed]**

**basis** — the unifying idea behind frame averaging (Puny) and learned canonicalization (Kaba); its limits given by the impossibility-of-continuous-canonicalization result (Dym–Lawrence–Siegel 2024).
