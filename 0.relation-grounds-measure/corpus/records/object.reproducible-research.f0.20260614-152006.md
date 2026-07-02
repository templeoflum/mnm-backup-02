---
name: reproducible-research
type: object
object-type: concept
essence: publish work so that others can regenerate the figures and results by re-running the same data and code — the article plus its complete computational compendium
field: ["[[field.reproducibility-engineering]]"]
status: established
state: settled
attribution: Jon F. Claerbout (Stanford, c. 1990–92); sharpened by Buckheit & Donoho (1995)
formalized: false
source: ["[[source.claerbout-karrenbach-1992]]", "[[source.buckheit-donoho-1995]]", "[[source.peng-2011]]", "[[source.plesser-2018]]", "[[source.turing-way-2019]]"]
depends-on: ["[[object.research-compendium]]"]
used-by: ["[[object.computational-environment-capture]]", "[[object.reproducibility-replicability-distinction]]", "[[object.research-compendium]]"]
---

**statement (plain)** — reproducible research means publishing a study together with everything needed to regenerate its results: the data, the code, and the instructions, arranged so that another person (or your future self) can re-run the same software on the same input and get the same figures and numbers. The paper alone is not the scholarship; the paper plus its working computational bundle is.

**statement** — a practitioner-origin standard for computational science holding that a published result should ship with a complete, executable record of the computation behind it. In Claerbout's original sense, "reproducing" is running the same software on the same input data and obtaining the same results — what later literature calls *computational reproducibility*. The classic articulation: "An article about computational science... is not the scholarship itself, it is merely advertising of the scholarship. The actual scholarship is the complete software development environment and the complete set of instructions which generated the figures" (Buckheit & Donoho 1995, restating Claerbout). **[confirmed]**

**basis** — the idea is engineering practice, not a theorem: it arose from the demands of seismic-data processing in [[Jon Claerbout]]'s Stanford Exploration Project, where computational workflows had grown too intricate to trust to a prose description. The discipline is to bind the manuscript to its [[object.research-compendium]] and, ideally, to author it as a [[literate program]] so text and code live together. It is the seed concept of the whole field — [[reproducibility engineering]] — and the practical answer to the [[object.replication-crisis]]. **[confirmed]**

**lineage** — coined by Jon F. Claerbout at Stanford around 1990–92; first scholarly appearance is Claerbout & Karrenbach, "Electronic documents give reproducible research a new meaning," *SEG Expanded Abstracts 1992* [[source.claerbout-karrenbach-1992]]. Carried into statistics by David Donoho's group — Buckheit & Donoho, "WaveLab and Reproducible Research" (1995) [[source.buckheit-donoho-1995]] — and into mainstream computational science by Roger Peng, "Reproducible Research in Computational Science," *Science* (2011) [[source.peng-2011]]. Practitioner-origin field; the founding statements are engineering manifestos, not formal definitions. **[confirmed]**

**sources** — [[source.claerbout-karrenbach-1992]]; [[source.buckheit-donoho-1995]]; [[source.peng-2011]]; Plesser 2018 (history) [[source.plesser-2018]]; *The Turing Way* [[source.turing-way-2019]].
