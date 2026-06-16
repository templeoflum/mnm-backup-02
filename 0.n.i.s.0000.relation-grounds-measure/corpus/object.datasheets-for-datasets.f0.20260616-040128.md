---
name: datasheets-for-datasets
type: object
object-type: framework
essence: a standardized documentation record accompanying a dataset, covering motivation, composition, collection, uses, and maintenance
field: [field.data-curation]
status: established
state: settled
attribution: Gebru, Morgenstern, Vecchione, Vaughan, Wallach, Daumé III, Crawford (preprint 2018; CACM 2021)
formalized: false
source: [source.gebru-2021, source.zha-2023]
depends-on: [object.data-curation]
used-by: []
---

**statement (plain)** — every dataset should ship with a "datasheet," by analogy to the datasheet for an electronic component, that records why the dataset was created, what it contains, how it was collected and labeled, how it was preprocessed, its recommended and discouraged uses, how it is distributed, and how it will be maintained. The datasheet is a set of structured questions the dataset creator answers in prose.

**statement (structure)** — sections cover Motivation, Composition, Collection Process, Preprocessing/Cleaning/Labeling, Uses, Distribution, and Maintenance, each with a list of guiding questions. [[source.gebru-2021]]

**basis** — the proposal addresses the absence of any standardized dataset-documentation process in ML, which the authors argue causes mismatched dataset use, undetected bias, and irreproducible results in high-stakes domains. It is normative/qualitative (a documentation template and process) rather than an empirically validated algorithm; adoption has been broad (it seeded model cards, data cards, and Hugging Face / GEM dataset cards) and it is treated as a reference standard in the data-centric AI survey. **Limits** — completeness and honesty of a datasheet depend on the creator; the framework prescribes what to record, not how to verify it. [[source.gebru-2021]] [[source.zha-2023]] **[confirmed]**
