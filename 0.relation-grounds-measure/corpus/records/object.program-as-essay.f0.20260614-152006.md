---
name: program-as-essay
type: object
object-type: principle
essence: the programmer is an essayist — present the program in the order best for human understanding, not the order the compiler demands
field: ["[[field.literate-programming]]"]
status: established
state: settled
attribution: Donald E. Knuth, "Literate Programming," The Computer Journal 27(2) (1984):97–111
formalized: false
source: ["[[source.knuth-1984]]", "[[source.knuth-1992]]"]
depends-on: ["[[object.literate-programming]]"]
used-by: []
---

**statement (plain)** — a program should be written like an essay, for a reader. The order in which a person best understands a program is usually not the order a compiler needs the code in, so the author should follow the human order: introduce ideas, name things carefully, explain intent, and place the code where the explanation calls for it. The writer of such a program is doing the work of an essayist — exposition and style matter, not just correctness.

**statement** — Knuth's guiding principle for [[object.literate-programming]]: "The practitioner of literate programming can be regarded as an essayist, whose main concern is with exposition and excellence of style." Concepts are introduced "in an order that is best for human understanding," and a large program is viewed "as a web, to be explored in a psychologically correct order" rather than in the order imposed by the machine. The reorientation is captured in the call to stop merely instructing the computer and instead concentrate "on explaining to human beings what we want a computer to do." **[confirmed]**

**basis** — the principle inverts the default priority of programming: human comprehension over compiler convenience. It is what makes [[object.literate-programming]] more than a documentation convenience — the claim is that writing for the reader, in the reader's order, produces better and more reliable programs because the act of explaining forces clear thought. It is a design philosophy and aesthetic, not a formalized or proved result (`formalized: false`). **[confirmed]**

**lineage** — authored by Donald E. Knuth; stated in the 1984 *Computer Journal* paper [[source.knuth-1984]] and elaborated across the essays collected in *Literate Programming* (CSLI, 1992) [[source.knuth-1992]]. It is the animating principle behind the [[object.literate-programming]] method and its [[object.web-tangle-weave]] tooling. **[confirmed as attribution]**

**sources** — [[source.knuth-1984]]; [[source.knuth-1992]]; Wikipedia "Literate programming"; Knuth, lp.html (Stanford).
