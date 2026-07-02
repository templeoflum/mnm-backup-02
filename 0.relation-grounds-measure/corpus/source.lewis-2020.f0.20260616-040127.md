---
name: lewis-2020
type: source
essence: introduces Retrieval-Augmented Generation (RAG) — a pre-trained seq2seq generator conditioned on documents fetched by a learned dense retriever, trained end-to-end
kind: paper
author: Patrick Lewis, Ethan Perez, Aleksandra Piktus, Fabio Petroni, Vladimir Karpukhin, Naman Goyal, Heinrich Küttler, Mike Lewis, Wen-tau Yih, Tim Rocktäschel, Sebastian Riedel, Douwe Kiela
year: 2020
venue: Advances in Neural Information Processing Systems 33 (NeurIPS 2020), pp. 9459–9474, Curran Associates
state: settled
links: ["[[field.retrieval-augmented-generation]]", "[[object.retrieval-augmented-generation]]", "[[object.dense-passage-retrieval]]"]
---

Verbatim citation: P. Lewis, E. Perez, A. Piktus, F. Petroni, V. Karpukhin, N. Goyal, H. Küttler, M. Lewis, W. Yih, T. Rocktäschel, S. Riedel, and D. Kiela, "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks," in *Advances in Neural Information Processing Systems* 33, 2020, pp. 9459–9474.

Contains: the RAG framework, in two variants (RAG-Sequence and RAG-Token), combining a pre-trained BART generator with a DPR (Karpukhin et al.) dense retriever over a Wikipedia index; the retriever's document encoder is held fixed while query encoder and generator are fine-tuned end-to-end via marginalization over retrieved passages. Reports state-of-the-art results on open-domain QA and gains in factuality / reduced hallucination on knowledge-intensive generation.

Access: arXiv:2005.11401; NeurIPS proceedings hash 6b493230205f780e1bc26945df7481e5; ACL/DBLP indexed (conf/nips/LewisPPPKGKLYR020). Primary verified via NeurIPS proceedings and arXiv abstract. **[confirmed]**
