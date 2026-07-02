---
name: lee-2022
type: source
essence: Lee et al., deduplicating training data — shows near-duplicate removal improves language models and cuts memorization
kind: paper
author: Katherine Lee, Daphne Ippolito, Andrew Nystrom, Chiyuan Zhang, Douglas Eck, Chris Callison-Burch, Nicholas Carlini
year: 2022
venue: Proceedings of the 60th Annual Meeting of the Association for Computational Linguistics (ACL 2022), Vol. 1: Long Papers, pp. 8424–8445
state: settled
links: [field.data-curation, object.training-data-deduplication, object.data-quality-principle]
aliases: ["source.lee-2022"]
---

Katherine Lee, Daphne Ippolito, Andrew Nystrom, Chiyuan Zhang, Douglas Eck, Chris Callison-Burch, and Nicholas Carlini, "Deduplicating Training Data Makes Language Models Better," in *Proceedings of the 60th Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers)*, Dublin, Ireland, 2022, 8424–8445. ACL Anthology 2022.acl-long.577. Preprint arXiv:2107.06499.

Finds that common language-modeling corpora (e.g. C4) contain extensive near-duplicates and long repeated substrings; ~3% of C4 is near-duplicate text, with one cluster of 250,933 examples and a single 61-word sentence repeated over 60,000 times. Introduces two deduplication tools: exact-substring removal via suffix arrays, and approximate (MinHash) document-level deduplication. Deduplication causes models to emit memorized training text roughly ten times less often, requires fewer training steps for equal or better accuracy, and does not hurt perplexity.

access — open access at ACL Anthology and arXiv. **[confirmed]**
