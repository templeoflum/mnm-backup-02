---
name: web-tangle-weave
type: object
object-type: concept
essence: the first literate-programming tool — one WEB source, two extractors: TANGLE makes the compilable code, WEAVE makes the typeset document
field: [field.literate-programming]
status: established
state: verified
attribution: Donald E. Knuth, "Literate Programming," The Computer Journal 27(2) (1984):97–111 (WEB built at Stanford alongside TeX)
formalized: false
source: [source.knuth-1984, source.knuth-1992]
depends-on: [object.literate-programming]
used-by: []
---

**statement (plain)** — WEB is the original system that made literate programming real. You write one source file mixing English prose and Pascal code in human-reading order. Two programs then process that one file: TANGLE rearranges and extracts the code into a plain source file a Pascal compiler can build, and WEAVE turns the same file into a TeX document — a typeset, cross-referenced, indexed essay you can read. Knuth picked the name "WEB" because it was one of the few three-letter English words not yet taken by computing, and because he saw a complex program as best regarded as a web of interconnected parts.

**statement** — WEB is the source format and tool pair Knuth wrote (ca. 1981–84) to implement [[object.literate-programming]]. A WEB file interleaves documentation (destined for [[field.literate-programming]]'s typeset output via TeX) with named code "sections" that may be defined out of compiler order. **TANGLE** reads the WEB file and emits machine-compilable Pascal source (resolving the section references into the order the compiler requires). **WEAVE** reads the same WEB file and emits a TeX document — formatted, cross-referenced, and indexed — for human reading. One source, two derived products. **[confirmed]**

**basis** — the concept's force is the two-direction extraction from a single human-ordered source: the programmer maintains exposition and code together, and never hand-syncs a separate document. WEB targeted Pascal and produced TeX; its design seeded later variants (CWEB for C, noweb, language-independent webs). It is a concrete software system and convention, not a formalized result (`formalized: false`). **[confirmed]**

**lineage** — designed and named by Donald E. Knuth as part of his work on TeX/METAFONT at Stanford; described in the 1984 *Computer Journal* paper [[source.knuth-1984]] and the 1992 collection [[source.knuth-1992]]. It is the original instrument of [[object.literate-programming]]; the [[object.computational-notebook]] is a later tool in the same lineage. **[confirmed as attribution]**

**sources** — [[source.knuth-1984]]; [[source.knuth-1992]]; Wikipedia "Literate programming"; Wikipedia "Web (programming system)".
