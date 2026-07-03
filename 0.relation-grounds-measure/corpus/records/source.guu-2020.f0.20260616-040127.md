---
name: guu-2020
type: source
essence: REALM — augments language-model pre-training with a learned neural retriever, trained jointly through the masked-LM objective by backpropagating through retrieval over millions of documents
kind: paper
author: Kelvin Guu, Kenton Lee, Zora Tung, Panupong Pasupat, Ming-Wei Chang
year: 2020
venue: Proceedings of the 37th International Conference on Machine Learning (ICML 2020), PMLR vol. 119
state: settled
links: ["[[field.information-retrieval]]", "[[object.retrieval-augmented-generation]]", "[[object.in-context-learning]]"]
---

Verbatim citation: K. Guu, K. Lee, Z. Tung, P. Pasupat, and M.-W. Chang, "REALM: Retrieval-Augmented Language Model Pre-Training," in *Proceedings of the 37th International Conference on Machine Learning (ICML)*, PMLR 119, 2020.

Contains: a pre-training framework that inserts a latent neural knowledge retriever between input and prediction; the retriever fetches documents from a textual corpus (Wikipedia) and the masked-LM training signal is backpropagated through the retrieval step, which marginalizes over millions of candidate documents (via maximum inner-product search with periodic index refresh). Fine-tuned on open-domain QA, REALM outperforms prior methods and adds interpretability and modularity. The earliest of the 2020 retrieve-then-predict systems to train the retriever from the LM objective.

Access: arXiv:2002.08909; PMLR proceedings.mlr.press/v119/guu20a; reference code at google-research/language (realm). Primary verified via PMLR and arXiv. **[confirmed]**
