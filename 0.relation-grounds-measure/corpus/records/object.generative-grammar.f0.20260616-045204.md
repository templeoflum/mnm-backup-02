---
name: generative-grammar
type: object
object-type: framework
essence: a finite explicit rule system that specifies (generates) exactly the well-formed sentences of a language
field: ["[[field.generative-grammar]]"]
status: established
state: settled
attribution: Noam Chomsky (1957)
formalized: true
source: ["[[source.chomsky-1957]]", "[[source.carnie-2021]]"]
depends-on: ["[[object.recursion-in-language]]"]
used-by: []
---

**statement (plain)** — a generative grammar is a finite set of explicit rules that enumerates all and only the grammatical sentences of a language, assigning each a structural description. The aim is to model a speaker's *competence* — tacit knowledge of structure — rather than to catalogue observed utterances. Recursion is what lets this finite device cover an infinite language.

**statement (formal)** — a grammar G = (N, Σ, P, S): nonterminals N, terminals Σ, productions P, start symbol S; the language L(G) is the set of terminal strings derivable from S. Chomsky's hierarchy ranks grammars (regular ⊂ context-free ⊂ context-sensitive ⊂ recursively enumerable); natural-language syntax exceeds finite-state and at least strains context-free description.

**basis** — introduced in *Syntactic Structures* (1957), including the argument that finite-state (Markov) models cannot capture the nested dependencies of natural language, motivating phrase-structure plus transformational rules. [[source.chomsky-1957]] **[confirmed]** The framework as taught today — phrase structure, X-bar, movement — is set out in Carnie's standard textbook. [[source.carnie-2021]] **[confirmed]** *Limits:* the specific rule formalisms have evolved through many revisions (Standard Theory, GB, Minimalism); "generative grammar" names the program, not a fixed rule set.
