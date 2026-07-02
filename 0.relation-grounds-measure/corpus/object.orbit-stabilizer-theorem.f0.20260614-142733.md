---
name: orbit-stabilizer-theorem
type: object
object-type: theorem
essence: orbit length times stabilizer order equals the group's order
field: ["[[field.group-theory]]"]
status: proven
state: settled
attribution: corollary of Lagrange's theorem; crystallized in W. Burnside's treatise (1897/1911); no single originator
formalized: true
source: ["[[source.burnside-1911]]", "[[source.dummit-foote]]", "[[source.judson-abstract-algebra]]"]
depends-on: ["[[object.lagrange-theorem]]"]
used-by: ["[[object.sylow-theorems]]"]
aliases: ["object.orbit-stabilizer-theorem"]
---

**statement (plain)** — when a group acts on a set, pick any point. The number of places that point can be moved to (its orbit) times the number of group elements that leave it fixed (its stabilizer) equals the size of the whole group. Orbit size and stabilizer size trade off exactly.

**statement (formal)** — let a finite group G act on a set X, and let x ∈ X. Write Orb(x) = {g·x : g ∈ G} for the orbit and Stab(x) = {g ∈ G : g·x = x} for the stabilizer (a subgroup of G). Then |Orb(x)| = [G : Stab(x)] = |G| / |Stab(x)|, equivalently |G| = |Orb(x)| · |Stab(x)|. The map g·Stab(x) ↦ g·x is a well-defined bijection between the cosets of Stab(x) and the orbit. **[confirmed]**

**status** — proven.

**proof** — define φ : G → Orb(x) by φ(g) = g·x; it is surjective by definition of the orbit, and φ(g) = φ(h) iff h⁻¹g ∈ Stab(x), i.e. iff g and h lie in the same left coset of Stab(x). So φ induces a bijection from cosets of Stab(x) onto Orb(x), giving |Orb(x)| = [G : Stab(x)]. Combining with [[object.lagrange-theorem]] yields |G| = |Orb(x)|·|Stab(x)|. See [[source.dummit-foote]], [[source.judson-abstract-algebra]]. **[confirmed]**

**relations** — a direct corollary of [[object.lagrange-theorem]] (Stab(x) is a subgroup and the orbit is its coset space). It is the standard counting engine behind the [[object.sylow-theorems]] and McKay's proof of [[object.cauchy-theorem]]. **[confirmed]**

**lineage (no single originator)** — the result is folklore once group actions are in hand; it does not trace to one paper. The ingredients (orbits, stabilizers as subgroups, the coset bijection) were assembled in the late-19th-century permutation-group literature (Cauchy, Jordan, Frobenius) and given systematic textbook form in W. Burnside, *Theory of Groups of Finite Order* (1897; 2nd ed. 1911) [[source.burnside-1911]]. **[candidate, attribution — commonly stated without a named discoverer; cited here as a corollary of Lagrange crystallized in Burnside]**

**sources** — nLab ("action groupoid," "stabilizer"), Encyclopedia of Mathematics, Wikipedia ("Group action"), ProofWiki ("Orbit-Stabilizer Theorem"); [[source.dummit-foote]], [[source.judson-abstract-algebra]].
