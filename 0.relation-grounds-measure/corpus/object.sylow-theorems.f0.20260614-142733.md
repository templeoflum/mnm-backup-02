---
name: sylow-theorems
type: object
object-type: theorem
essence: existence, conjugacy, and counting of maximal prime-power subgroups
field: ["[[field.group-theory]]"]
status: proven
state: settled
attribution: L. Sylow (1872)
formalized: true
source: ["[[source.sylow-1872]]", "[[source.dummit-foote]]", "[[source.judson-abstract-algebra]]"]
depends-on: ["[[object.lagrange-theorem]]", "[[object.cauchy-theorem]]", "[[object.orbit-stabilizer-theorem]]"]
used-by: ["[[object.classification-of-finite-simple-groups]]"]
---

**statement (plain)** — write the size of a finite group as pⁿ·m, where p is a prime not dividing m. Then: (1) the group contains a subgroup of size pⁿ — the largest possible p-power chunk, called a Sylow p-subgroup; (2) any two such subgroups are conjugate (one is a relabelling of the other by a group element), so they all look alike; (3) the number of them is ≡ 1 mod p and divides m. These three facts are the workhorse for taking finite groups apart prime by prime.

**statement (formal)** — let G be a finite group with |G| = pⁿ·m, p prime, p ∤ m. A Sylow p-subgroup is a subgroup of order pⁿ (equivalently, a maximal p-subgroup).
- **Sylow I (existence):** G has a subgroup of order pⁿ.
- **Sylow II (conjugacy):** every p-subgroup is contained in some Sylow p-subgroup, and any two Sylow p-subgroups P, Q are conjugate: ∃ g with g⁻¹Pg = Q.
- **Sylow III (number):** the number nₚ of Sylow p-subgroups satisfies nₚ ≡ 1 (mod p) and nₚ | m; moreover nₚ = [G : N_G(P)], the index of the normalizer of a Sylow p-subgroup. **[confirmed]**

**status** — proven.

**proof** — modern proofs (Wielandt's, and the standard text proofs) run through group actions and counting: G acts on the set of pⁿ-element subsets, or by conjugation on its Sylow subgroups, and the [[object.orbit-stabilizer-theorem]] forces the counts. Existence also follows by induction using [[object.cauchy-theorem]] for the base. Full proofs in [[source.dummit-foote]] and [[source.judson-abstract-algebra]]. **[confirmed]**

**relations** — generalizes [[object.cauchy-theorem]] (prime p ↦ prime power pⁿ) and is the deepest partial converse to [[object.lagrange-theorem]]. Central tool in [[object.classification-of-finite-simple-groups]]. **[confirmed]**

**lineage** — Peter Ludwig Mejdell Sylow (Norwegian, 1832–1918), "Théorèmes sur les groupes de substitutions," *Mathematische Annalen* 5 (1872), pp. 584–594 — a single ten-page paper stating and proving all three, in the language of substitution groups [[source.sylow-1872]]. Georg Frobenius later reproved and extended them for abstract groups. **[confirmed]**

**sources** — nLab, Encyclopedia of Mathematics, Wikipedia ("Sylow theorems," "Ludwig Sylow"), ProofWiki historical note; [[source.dummit-foote]], [[source.judson-abstract-algebra]].
