---
name: recursion-in-language
type: object
object-type: concept
essence: a grammatical category embedded within another of the same type, yielding unbounded hierarchical structure
field: ["[[field.recursive-grammar-fractal-linguistics]]"]
status: established
state: settled
attribution: Chomsky (generative formulation, 1957); named as FLN core by Hauser, Chomsky & Fitch (2002)
formalized: true
source: ["[[source.chomsky-1957]]", "[[source.hauser-chomsky-fitch-2002]]", "[[source.pinker-jackendoff-2005]]"]
depends-on: []
used-by: ["[[object.center-embedding]]", "[[object.discrete-infinity]]", "[[object.generative-grammar]]"]
---

**statement (plain)** — recursion is the property by which a syntactic rule can apply to its own output: a clause inside a clause, a noun phrase inside a noun phrase. Because a category can contain another instance of itself, finitely many rules generate infinitely many, ever-deeper sentences ("the cat that the dog that the boy owned chased ran"). It is the formal source of language's self-similar, nested structure.

**statement (formal)** — a rule schema such as `NP → NP PP`, `PP → P NP` (or `S → … S …`) is recursive: the symbol on the left reappears on the right, directly or through a cycle. The grammar's language is then the least fixed point of these productions — unbounded in depth.

**basis** — the generative formulation traces to Chomsky's *Syntactic Structures* (1957), where recursive rules give finite grammars infinite generative capacity. [[source.chomsky-1957]] **[confirmed]** Hauser, Chomsky & Fitch (2002) elevate recursion to the proposed sole core of the narrow language faculty (FLN). [[source.hauser-chomsky-fitch-2002]] **[confirmed]** *Limits:* whether recursion is uniquely human and uniquely linguistic is disputed — Pinker & Jackendoff (2005) argue much of grammar is non-recursive and that recursion also appears in non-linguistic cognition. [[source.pinker-jackendoff-2005]] **[confirmed]**
