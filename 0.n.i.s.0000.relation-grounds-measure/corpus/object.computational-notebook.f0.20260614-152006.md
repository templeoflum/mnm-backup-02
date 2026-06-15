---
name: computational-notebook
type: object
object-type: concept
essence: the modern descendant of literate programming — a document of interleaved prose, executable code cells, and their live outputs (text, tables, plots)
field: [field.literate-programming]
status: established
state: verified
attribution: lineage from Knuth's literate programming (1984); statistics line via Leisch's Sweave (2002) → knitr; interactive line via IPython/Jupyter (Project Jupyter, 2014)
formalized: false
source: [source.knuth-1984, source.leisch-2002]
depends-on: [object.literate-programming]
used-by: []
---

**statement (plain)** — a computational notebook is a single document that mixes written explanation with blocks of code you can run, and shows each block's output — numbers, tables, charts — right under the code that made it. It is the everyday descendant of literate programming: prose and code woven together for a human reader, but now the code is live and re-runnable rather than only extracted for a compiler. Notebooks resurged in the 2010s as the common tool of data science.

**statement** — a computational notebook realizes [[object.literate-programming]]'s interleaving of documentation and code in an interactive form: cells of narrative (and often LaTeX/math) alternate with executable code cells whose results are captured inline. Two main lineages descend from Knuth's method — a *report* line in statistics (Sweave, then knitr / R Markdown, weaving R into LaTeX or Markdown) and an *interactive* line (IPython, then Jupyter) combining literate documents with a read-eval-print loop so each code block is stateful and re-evaluable. **[confirmed]**

**basis** — the notebook keeps literate programming's core claim — a program presented for human comprehension, prose and code as one artifact — and adds live execution and captured output, making it central to reproducible research and exploratory data analysis. It is a class of tools and document format, not a formalized result (`formalized: false`); the "descendant" relation is the well-attested historical lineage, not a single dated invention. **[confirmed]**

**lineage** — descends from Donald E. Knuth's literate programming (1984) [[source.knuth-1984]]. Concrete steps: Friedrich Leisch's **Sweave** (2002) [[source.leisch-2002]] brought literate data analysis to R + LaTeX; **knitr** (Yihui Xie) extended it to Markdown/HTML; **IPython** evolved into **Project Jupyter** (2014), giving the web-based notebook now standard in data science. **[confirmed as attribution]** *(component dates — knitr, Jupyter — are well attested but secondary to the keystone descendant claim.)*

**sources** — [[source.knuth-1984]]; [[source.leisch-2002]]; Wikipedia "Literate programming"; Wikipedia "Sweave" / "Knitr".
