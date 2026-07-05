---
name: categorial-grammar
type: object
object-type: framework
essence: syntactic categories as semantic types that combine as functions and arguments by a small recursive rule set — the same schema at every level
field: ["[[field.formal-semantics]]"]
status: established
state: settled
attribution: Ajdukiewicz (1935); Bar-Hillel (1953); Lambek (1958); Steedman (CCG)
formalized: true
source: ["[[source.ajdukiewicz-1935]]", "[[source.lambek-1958]]", "[[source.montague-1970]]"]
depends-on: ["[[object.principle-of-compositionality]]"]
used-by: []
---

**statement (plain)** — treat every word as either a complete thing or a function looking for arguments: "sleeps" is something that takes a noun-phrase on its left to make a sentence. Combination is just function application, checked like arithmetic — the category indices cancel. One tiny rule set, applied over and over, builds structure at every level, and the syntactic proof doubles as a recipe for the meaning.

**statement (formal)** — categories are types (e.g. NP, S, S\NP); constituents combine by function application (and, in richer systems, composition/type-raising), applied recursively. Ajdukiewicz's fractional indices cancel to check connexity; Lambek's calculus is a residuated logic with a Curry–Howard reading (proofs ↔ lambda terms); Steedman's CCG is the modern computational form. A rigorous "single recurring relational schema" across levels. **[confirmed]**

**basis** — realizes the principle of compositionality ([[object.principle-of-compositionality]]) as a structure-preserving syntax→semantics map; the type-logical line from Ajdukiewicz (1935) through Lambek (1958) to Montague and Steedman. [[source.ajdukiewicz-1935]] [[source.lambek-1958]]
