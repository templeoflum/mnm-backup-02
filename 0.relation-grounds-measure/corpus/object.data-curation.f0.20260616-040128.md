---
name: data-curation
type: object
object-type: concept
essence: the systematic construction, documentation, cleaning, and maintenance of datasets to improve ML outcomes
field: ["[[field.data-curation]]"]
status: established
state: settled
attribution: distributed founding — Gebru et al. (documentation, 2018/2021); Sambasivan et al. (data work, 2021); Ng / DeepLearning.AI (data-centric framing, 2021)
formalized: false
source: ["[[source.gebru-2021]]", "[[source.sambasivan-2021]]", "[[source.ng-2021]]", "[[source.zha-2023]]"]
depends-on: []
used-by: ["[[object.datasheets-for-datasets]]", "[[object.training-data-deduplication]]", "[[object.data-quality-principle]]"]
aliases: ["object.data-curation"]
---

**statement (plain)** — data curation is the deliberate, ongoing work of deciding what data to collect, how to label and document it, how to clean and deduplicate it, and how to maintain it over time, so that models train and run on high-quality, well-understood data rather than on whatever was conveniently scraped. It treats the dataset, not only the model, as an engineered artifact.

**statement (taxonomy)** — Zha et al. organize the practice into three goals: **training-data development** (collection, labeling, cleaning, reduction, augmentation), **inference-data development**, and **data maintenance** (quality assurance, storage, ongoing upkeep). [[source.zha-2023]]

**basis** — the field's empirical support is that data problems dominate ML failure modes in practice: Sambasivan et al. found 92% of surveyed AI practitioners experienced data cascades, with data work undervalued relative to model work [[source.sambasivan-2021]]; Gebru et al. established standardized documentation (datasheets) as the precondition for accountable dataset reuse [[source.gebru-2021]]; Ng's data-centric framing argues the largest remaining gains come from improving data under fixed models [[source.ng-2021]]. **Limits** — "curation" is an umbrella concept, not a single method; its effectiveness is task- and corpus-dependent, and most evidence is observational (practitioner studies, competition results, empirical pretraining experiments) rather than from controlled theory. **[confirmed]**
