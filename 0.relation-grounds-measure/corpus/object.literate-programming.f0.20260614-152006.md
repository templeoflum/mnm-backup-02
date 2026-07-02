---
name: literate-programming
type: object
object-type: method
essence: write the program as a document for humans — prose in the order of human thought, code woven in, a tool then extracts both the compilable source and the typeset essay
field: ["[[field.literate-programming]]"]
status: established
state: settled
attribution: Donald E. Knuth, "Literate Programming," The Computer Journal 27(2) (1984):97–111; collected in Knuth, Literate Programming (CSLI, 1992)
formalized: false
source: ["[[source.knuth-1984]]", "[[source.knuth-1992]]"]
depends-on: []
used-by: ["[[object.web-tangle-weave]]", "[[object.program-as-essay]]", "[[object.computational-notebook]]"]
---

**statement (plain)** — write a program as a piece of writing aimed at people, not at the machine. You compose one document that explains, in plain language and in the order your thinking actually runs, what you want the computer to do, and you embed the code fragments inside that explanation wherever the prose calls for them. A tool then reads the single document two ways: one pass produces the source a compiler can build, the other produces a formatted essay a person can read. The method couples a programming language with a documentation language.

**statement** — literate programming is the discipline of treating a program "as a piece of literature, addressed to human beings rather than to a computer" (Knuth). Its programmatic call: "Instead of imagining that our main task is to instruct a computer what to do, let us concentrate rather on explaining to human beings what we want a computer to do." The author writes a single source combining a programming language with a documentation language; a *weave* step produces human-readable typeset documentation and a *tangle* step produces machine-compilable code (see [[object.web-tangle-weave]]). The practitioner "can be regarded as an essayist" (see [[object.program-as-essay]]). **[confirmed]**

**basis** — Knuth introduced the method in 1984 alongside its first implementation, the WEB system, written while developing TeX and METAFONT at Stanford. The method is a practice and design philosophy, not a formalized or proved result (hence `formalized: false`). Its claim is that a program ordered for human comprehension — rather than for the compiler — is better understood, better documented, and more reliable, because exposition and code are written and maintained together as one artifact. **[confirmed]**

**lineage** — authored and named by Donald E. Knuth; first stated in the 1984 *Computer Journal* paper [[source.knuth-1984]] and collected, with later essays, in *Literate Programming* (CSLI, 1992) [[source.knuth-1992]]. The concrete realization is [[object.web-tangle-weave]]; the guiding aesthetic is [[object.program-as-essay]]; the widely used modern descendant is the [[object.computational-notebook]]. **[confirmed as attribution]**

**sources** — [[source.knuth-1984]]; [[source.knuth-1992]]; Wikipedia "Literate programming"; Knuth, lp.html (Stanford).
