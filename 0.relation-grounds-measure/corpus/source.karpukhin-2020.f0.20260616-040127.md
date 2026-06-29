---
name: karpukhin-2020
type: source
essence: introduces Dense Passage Retrieval (DPR) — a dual-encoder dense retriever trained from question–passage pairs that outperforms BM25 on open-domain QA
kind: paper
author: Vladimir Karpukhin, Barlas Oğuz, Sewon Min, Patrick Lewis, Ledell Wu, Sergey Edunov, Danqi Chen, Wen-tau Yih
year: 2020
venue: Proceedings of the 2020 Conference on Empirical Methods in Natural Language Processing (EMNLP), pp. 6769–6781, ACL
state: settled
links: [field.retrieval-augmented-generation, object.dense-passage-retrieval]
---

Verbatim citation: V. Karpukhin, B. Oğuz, S. Min, P. Lewis, L. Wu, S. Edunov, D. Chen, and W. Yih, "Dense Passage Retrieval for Open-Domain Question Answering," in *Proceedings of the 2020 Conference on Empirical Methods in Natural Language Processing (EMNLP)*, 2020, pp. 6769–6781.

Contains: a dual-encoder (separate BERT question and passage encoders) trained with an in-batch negatives contrastive objective so that relevant question–passage pairs have high dot-product similarity; passage embeddings are pre-indexed and queried by maximum inner-product search (FAISS). Reports top-20 retrieval accuracy 9–19 percentage points above a Lucene-BM25 baseline across open-domain QA datasets, with downstream end-to-end QA gains.

Access: arXiv:2004.04906; ACL Anthology 2020.emnlp-main.550; reference implementation at facebookresearch/DPR. Primary verified via ACL Anthology and arXiv. **[confirmed]**
