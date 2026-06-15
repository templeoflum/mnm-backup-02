---
name: data-ink-ratio
type: object
object-type: principle
essence: maximize the share of a graphic's ink that carries data; erase the rest — the rest is chartjunk
field: [field.data-visualization]
status: established
state: settled
attribution: Edward R. Tufte, The Visual Display of Quantitative Information (1983)
formalized: false
source: [source.tufte-1983]
depends-on: []
used-by: []
---

**statement (plain)** — most of the ink in a graphic should be spent showing the actual numbers. Tufte calls the ink that shows data "data-ink," and the data-ink ratio is the fraction of all the graphic's ink that is data-ink. The design rule: within reason, maximize that fraction — remove non-data-ink and redundant data-ink. The leftover decoration that fails this test is "chartjunk."

**statement** — Tufte defines **data-ink** as "the non-erasable core of a graphic, the non-redundant ink arranged in response to variation in the numbers represented." The **data-ink ratio** is

data-ink ratio = (data-ink) / (total ink used to print the graphic)
            = proportion of a graphic's ink devoted to the non-redundant display of data
            = 1 − (proportion of a graphic that can be erased without loss of data-information).

The prescriptive principle: *maximize the data-ink ratio, within reason*, and *erase non-data-ink and redundant data-ink, within reason.* **Chartjunk** is the complementary term — ink (interior decoration, heavy gridlines, moiré, 3-D effects) that "does not tell the viewer anything new... non-data-ink or redundant data-ink." Both are heuristics, not measured laws. **[confirmed]**

**basis** — Tufte's authority is the codifying text of the field; the principle has been the dominant minimalist design guideline in data visualization since 1983. It is a normative design rule grounded in Tufte's analysis of "graphical excellence," not an empirical or proven result — and it is contested at the margins (later studies, e.g. Bateman et al. 2010, found some "chartjunk" aids recall), so it carries as a strong, debated heuristic.

**lineage** — Edward R. Tufte, *The Visual Display of Quantitative Information* (Graphics Press, 1983), where both **data-ink ratio** and **chartjunk** are introduced [[source.tufte-1983]]; Tufte credits the setting of a Princeton statistics seminar co-taught with John Tukey. The minimalist program (eliminate chartjunk, maximize data-ink, multifunctioning elements, high data density) is laid out across the book's later chapters. Empirical pushback later qualified the chartjunk half of the principle.

**sources** — [[source.tufte-1983]]; [[https://en.wikipedia.org/wiki/Chartjunk]]; [[https://infovis-wiki.net/wiki/Data-Ink_Ratio]]. **[confirmed]**
