---
name: visual-variables
type: object
object-type: framework
essence: the small alphabet of perceptual channels — position plus the retinal variables — into which any data attribute is encoded
field: [field.data-visualization]
status: established
state: float
attribution: Jacques Bertin, Sémiologie graphique (1967)
formalized: false
source: [source.bertin-1967]
depends-on: []
used-by: [object.graphical-perception-ranking, object.grammar-of-graphics]
---

**statement (plain)** — every mark on a graphic differs from its neighbors along a fixed, small set of visual channels. Bertin named seven: the two dimensions of the plane (horizontal and vertical position), plus six "retinal" variables that vary the mark itself — size, value (lightness/darkness), texture/grain, color (hue), orientation, and shape. To visualize data is to choose which data attribute rides on which channel.

**statement** — Bertin's *variables visuelles* comprise the two planar/positional dimensions (the x, y "imposition" of the plane) and the **retinal variables** layered on the marks: size, value, grain (texture), color (hue), orientation, and shape. Each variable has properties that fit certain data levels — Bertin classified channels by whether they convey **selective, associative, ordered, or quantitative** relations (e.g. position and size read as quantitative/ordered; hue and shape read as selective/associative but not ordered). The framework is descriptive (a typology of channels and their perceptual properties), not a theorem. **[confirmed]**

**count caveat** — the system is commonly summarized as "seven visual variables" by grouping the two planar dimensions as one "position" variable alongside six retinal ones, or as "two positional + retinal" depending on how planar position and grain/texture are counted. The retinal set is most often listed as size, value, texture/grain, color, orientation, shape. **[confirmed]** Carried as lineage rather than a single canonical number.

**basis** — Bertin's authority is foundational and definitional: *Sémiologie graphique* (1967) is generally credited as the first overarching theory of information graphics, and the visual-variable typology is its core. The channels and their selective/ordered/quantitative properties are the design vocabulary later frameworks build on.

**lineage** — Jacques Bertin, *Sémiologie graphique: les diagrammes, les réseaux, les cartes* (Gauthier-Villars, Paris, 1967) [[source.bertin-1967]]. English translation *Semiology of Graphics: Diagrams, Networks, Maps*, trans. William J. Berg (1983). The retinal/positional distinction and the channel typology are Bertin's; later work (MacEachren, Carpendale, and others) extended the variable set (adding e.g. crispness, resolution, transparency) and Cleveland & McGill turned channel *accuracy* into an empirical ranking ([[object.graphical-perception-ranking]]).

**sources** — [[source.bertin-1967]]; [[https://en.wikipedia.org/wiki/Visual_variable]]; [[https://www.historyofinformation.com/detail.php?id=3361]] (Bertin 1967 publication record); [[https://www.tandfonline.com/doi/full/10.1080/15230406.2019.1533784]] (Bertin's legacy in cartography). **[confirmed]**
