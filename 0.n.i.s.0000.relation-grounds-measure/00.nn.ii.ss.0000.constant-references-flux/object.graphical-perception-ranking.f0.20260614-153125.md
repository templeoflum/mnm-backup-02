---
name: graphical-perception-ranking
type: object
object-type: framework
essence: an empirical ordering of how accurately people decode the elementary perceptual tasks — position beats length beats angle beats area beats color
field: [field.data-visualization]
status: established
state: float
attribution: William S. Cleveland & Robert McGill (1984)
formalized: false
source: [source.cleveland-mcgill-1984]
depends-on: [object.visual-variables]
used-by: []
---

**statement (plain)** — when you read a chart you perform "elementary perceptual tasks" — judging a position, a length, an angle, an area, a shade. Cleveland and McGill measured how accurately people do each, then ranked them. People judge position along a common scale most accurately and color/shading least accurately. The design rule that follows: encode your most important data on the highest-ranked channel you can.

**statement** — Cleveland & McGill identify the elementary perceptual tasks a reader performs in extracting quantitative information, and order them from most to least accurate (their experimentally supported ordering):

1. Position along a common scale
2. Positions along non-aligned (identical, separated) scales
3. Length, direction, angle (grouped)
4. Area
5. Volume, curvature
6. Shading, color saturation

(Color *hue* sits at the bottom for quantitative judgments.) The applied principle: *graphs should encode data using tasks as high in this ordering as possible*, which is why they argue against pie charts and divided/stacked bar charts (angle/area, lower in the ranking) in favor of dot/bar charts on a common scale. It is an empirical ranking from controlled experiments, not a theorem; later replications (e.g. Heer & Bostock 2010 via crowdsourcing) broadly confirmed the ordering. **[confirmed]**

**basis** — the paper turned data-graphic design from taste into measurable science: it is the empirical pillar of the field's codification, cited alongside Bertin (1967) and Tufte (1983). Its authority rests on the experiments themselves and their subsequent replication; the ranking expresses measured accuracy of decoding, refining Bertin's qualitative claim that channels differ in their fitness for quantitative data ([[object.visual-variables]]).

**lineage** — William S. Cleveland & Robert McGill, "Graphical Perception: Theory, Experimentation, and Application to the Development of Graphical Methods," *Journal of the American Statistical Association* 79(387): 531–554 (1984) [[source.cleveland-mcgill-1984]]. Extended in Cleveland's *The Elements of Graphing Data* (1985) and replicated/updated by Heer & Bostock (2010). The grouping of "length, direction, angle" and exact tier boundaries are stated as in the original paper and are sometimes presented slightly differently in summaries (carried as lineage).

**sources** — [[source.cleveland-mcgill-1984]]; original paper PDF (JASA 1984, e.g. mirrored at math.pku.edu.cn and ResearchGate); [[https://priceonomics.com/how-william-cleveland-turned-data-visualization/]]. **[confirmed]**
