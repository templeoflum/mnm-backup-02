---
name: research-compendium
type: object
object-type: method
essence: package a study's data, code, and text in one conventionally-structured, self-contained bundle so all results can be regenerated straightforwardly
field: ["[[field.reproducibility-engineering]]"]
status: established
state: settled
attribution: Gentleman & Temple Lang (2007); conventions codified by The Turing Way (2019+)
formalized: false
source: ["[[source.gentleman-temple-lang-2007]]", "[[source.turing-way-2019]]", "[[source.stodden-2014]]"]
depends-on: ["[[object.reproducible-research]]"]
used-by: ["[[object.computational-environment-capture]]", "[[object.reproducible-research]]"]
---

**statement (plain)** — a research compendium is a single, well-organized bundle that holds everything a study needs to be re-run: the raw data, the code that analyzes it, and the text that reports it, laid out in a conventional folder structure with data, methods, and outputs clearly separated and the computing environment specified. The point is that someone can download the bundle and regenerate every result without hunting for missing pieces.

**statement** — a method for making a study self-contained and re-executable. Gentleman & Temple Lang (2007) define the **compendium** as both a *container* for the elements that make up a document and its computations (text, code, data) and a *means* for distributing, managing, and updating that collection. The Turing Way states three core principles: (1) files are organized in a conventional folder structure; (2) data, methods, and output are clearly separated; (3) the computational environment is specified. Materials sort into read-only inputs (raw data, metadata), human-generated artifacts (code, prose, documentation), and project-generated outputs (cleaned data, figures, results). **[confirmed]**

**basis** — the compendium operationalizes [[object.reproducible-research]]: where reproducible research is the goal, the compendium is the concrete deliverable that carries it. It pairs naturally with [[literate programming]] (text and code interwoven) and is completed by [[object.computational-environment-capture]] (principle 3 — pinning the environment). It is an engineering convention, not a theorem; its authority comes from adoption (R packages, the `rrtools` / `ResearchCompendium` conventions, *The Turing Way*). **[confirmed]**

**lineage** — the term and concept are from Robert Gentleman & Duncan Temple Lang, "Statistical Analyses and Reproducible Research," *J. Computational and Graphical Statistics* 16(1) (2007):1–23 (Bioconductor working-paper version c. 2004) [[source.gentleman-temple-lang-2007]]. Conventions consolidated in *The Turing Way* [[source.turing-way-2019]] and Stodden, Leisch & Peng (eds.), *Implementing Reproducible Research* (2014) [[source.stodden-2014]]. **[confirmed]**

**sources** — Gentleman & Temple Lang 2007 [[source.gentleman-temple-lang-2007]]; *The Turing Way* "Research Compendia" [[source.turing-way-2019]]; Stodden et al. 2014 [[source.stodden-2014]].
