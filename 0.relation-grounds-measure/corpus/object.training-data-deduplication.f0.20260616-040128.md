---
name: training-data-deduplication
type: object
object-type: method
essence: removing exact and near-duplicate text from training corpora to improve models and reduce memorization
field: ["[[field.data-curation]]"]
status: empirical
state: settled
attribution: Lee, Ippolito, Nystrom, Zhang, Eck, Callison-Burch, Carlini (ACL 2022)
formalized: true
source: ["[[source.lee-2022]]", "[[source.zha-2023]]"]
depends-on: ["[[object.data-curation]]", "[[object.data-quality-principle]]"]
used-by: []
aliases: ["object.training-data-deduplication"]
---

**statement (plain)** — language-modeling corpora contain large amounts of repeated and near-duplicate text. Removing those duplicates before training produces better models: they memorize and emit training text far less often, reach equal or better accuracy in fewer steps, and lose no perplexity. Deduplication is therefore a standard curation step in modern LLM data pipelines.

**statement (method)** — two complementary techniques: **ExactSubstr**, which uses a suffix array to find and remove exact duplicate substrings above a length threshold; and **NearDup**, approximate document-level deduplication using MinHash signatures over n-gram (e.g. 5-gram) shingles, bucketed so documents colliding in any bucket are flagged as near-duplicates. [[source.lee-2022]]

**basis** — empirical results on C4 and other corpora: ~3% of C4 is near-duplicate text, including a cluster of 250,933 examples and a 61-word sentence repeated >60,000 times; deduplicating cuts verbatim memorized emission by roughly 10x and does not hurt downstream quality. Independently surveyed as a representative data-reduction/maintenance technique in data-centric AI. **Limits** — thresholds (n-gram size, MinHash bucket parameters) are heuristic and corpus-dependent; aggressive deduplication can remove legitimately repeated content, and "near-duplicate" is an approximate, tunable notion rather than an exact one. [[source.lee-2022]] [[source.zha-2023]] **[confirmed]**
