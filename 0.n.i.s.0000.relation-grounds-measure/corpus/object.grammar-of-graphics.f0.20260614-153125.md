---
name: grammar-of-graphics
type: object
object-type: framework
essence: a graphic is not a chart-type but a composition of orthogonal parts — data, algebra, scales, statistics, geometry, coordinates, aesthetics
field: [field.data-visualization]
status: established
state: settled
attribution: Leland Wilkinson, The Grammar of Graphics (1999)
formalized: true
source: [source.wilkinson-1999]
depends-on: [object.visual-variables]
used-by: []
---

**statement (plain)** — instead of treating a "bar chart" or "pie chart" as a fixed thing you pick from a menu, Wilkinson showed that almost any statistical graphic can be *built* from a small set of independent components: the data, an algebra that combines variables, statistical transforms, scales, a geometry (the marks), a coordinate system, and aesthetic mappings (color, size, shape). Change one component and you get a different chart — a bar in polar coordinates becomes a pie. A grammar generates graphics the way grammar generates sentences.

**statement** — Wilkinson's grammar specifies a graphic as a composition of orthogonal constructs, commonly given as seven:

- **variables** — mapping data objects to values
- **algebra** — operators (cross, blend, nest) combining variables into the graph's dimensions
- **scales** — transforming variables onto measured dimensions
- **statistics** — functions (bin, smooth, count) applied before rendering
- **geometry** — the geometric elements/marks (point, line, bar, area)
- **coordinates** — the coordinate system (Cartesian, polar, map projections)
- **aesthetics** — sensory attributes of marks (position, color, size, shape, orientation — the Bertin channels, [[object.visual-variables]])

Wilkinson's central hypothesis: these constructs are **orthogonal**, and "virtually all known statistical charts can be generated relatively parsimoniously" from their combination — so charts are *derived*, not enumerated. This is a formal/compositional framework (a specification language), the most "formalized" of the field's keystones. **[confirmed]**

**basis** — the grammar reframed visualization tooling: it is the direct intellectual ancestor of **ggplot2** (Wickham's "Layered Grammar of Graphics," 2010, a refinement of Wilkinson's parameterization), **Tableau / VizQL** (via the Stanford Polaris system), and **Vega-Lite**. Its authority is both citational (the codifying text for grammar-based viz) and demonstrated (the tools that implement it dominate practice).

**lineage** — Leland Wilkinson, *The Grammar of Graphics* (Springer, Statistics and Computing series, 1999; 2nd ed. 2005, softcover reprint 2011) [[source.wilkinson-1999]]. Refined by Hadley Wickham, "A Layered Grammar of Graphics," *Journal of Computational and Graphical Statistics* (2010), implemented as ggplot2. Note: not to be confused with James H. Wilkinson of numerical analysis ([[source.wilkinson-1965]]) — same surname, different person.

**sources** — [[source.wilkinson-1999]]; [[https://en.wikipedia.org/wiki/Wilkinson's_Grammar_of_Graphics]]; [[https://link.springer.com/book/10.1007/0-387-28695-0]]; [[https://byrneslab.net/classes/biol607/readings/wickham_layered-grammar.pdf]] (Wickham layered grammar). **[confirmed]**
