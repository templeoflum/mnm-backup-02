---
name: data-quality-principle
type: object
object-type: principle
essence: for a fixed model, improving the data yields larger and more reliable gains than tuning the model
field: ["[[field.data-curation]]"]
status: empirical
state: settled
attribution: Andrew Ng / DeepLearning.AI (data-centric AI framing, 2021); reinforced by Sambasivan et al. (2021) and Lee et al. (2022)
formalized: false
source: ["[[source.ng-2021]]", "[[source.sambasivan-2021]]", "[[source.lee-2022]]"]
depends-on: ["[[object.data-curation]]"]
used-by: ["[[object.training-data-deduplication]]"]
aliases: ["object.data-quality-principle"]
---

**statement (plain)** — because high-performance model architectures are now widely available and easily reused, the largest remaining gains in many ML systems come from systematically improving the data — fixing labels, removing duplicates and noise, covering edge cases, documenting provenance — rather than from further model tuning. Conversely, neglected data quality propagates downstream as compounding failures.

**statement (data-centric framing)** — hold the model fixed and improve the dataset; treat data engineering as the primary lever. Operationalized in the 2021 Data-Centric AI Competition, where competitors improve a fixed-model dataset to raise accuracy. [[source.ng-2021]]

**basis** — convergent empirical support from independent threads: Sambasivan et al. found data cascades affected 92% of surveyed practitioners and traced poor outcomes to undervalued data work [[source.sambasivan-2021]]; Lee et al. showed a single curation operation (deduplication) measurably improves models and reduces memorization [[source.lee-2022]]; Ng's competition framing demonstrated dataset-only improvements moving model performance under a fixed architecture [[source.ng-2021]]. **Limits** — this is a heuristic, context-dependent emphasis, not a proven universal law; for some problems model or compute scaling still dominates, and "better data beats better models" holds in regimes where architectures are mature and data is the bottleneck. **[confirmed]**
