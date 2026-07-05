---
name: whitehead-minimization-problem
type: object
object-type: concept
essence: finding a minimum-length element in the automorphic orbit of a word in a free group — first fully polynomial algorithm (Roig–Ventura–Weil)
field: ["[[field.geometric-group-theory]]"]
status: established
state: settled
attribution: J. H. C. Whitehead (1936); first fully polynomial algorithm Roig–Ventura–Weil
formalized: true
source: ["[[source.roig-ventura-weil-2007]]"]
depends-on: []
used-by: []
---

**statement (plain)** — in a free group, an automorphism can lengthen or shorten a word. Whitehead's problem: given a word, find the shortest word you can reach by applying automorphisms (its minimal form). Roig, Ventura, and Weil gave the first algorithm polynomial in both the word length and the rank of the free group.

**statement (formal)** — for the free group F_n and w ∈ F_n, the Whitehead minimization problem seeks min{|α(w)| : α ∈ Aut(F_n)}. Roig–Ventura–Weil give the first algorithm polynomial in |w| and n. **[confirmed]**

**basis** — Whitehead's peak-reduction (1936); underpins the automorphism/orbit problems of free groups, a core geometric-group-theory computation.
