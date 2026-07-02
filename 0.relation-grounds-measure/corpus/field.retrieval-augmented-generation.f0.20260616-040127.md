---
name: retrieval-augmented-generation
type: field
essence: conditioning language-model generation on retrieved external documents, and learning from examples placed in context
canon: structure
grade: s
state: settled
links: [field.information-theory, source.lewis-2020, source.karpukhin-2020, source.brown-2020, source.guu-2020, source.gao-2024]
aliases: ["field.retrieval-augmented-generation"]
---

**origin** — the modern formulation arrives in 2020 with two parallel retrieve-then-generate systems: Guu et al.'s REALM (a retriever pre-trained jointly with a masked-language-model, ICML 2020) and Lewis et al.'s RAG (a parametric seq2seq generator conditioned on documents fetched by a learned dense retriever, NeurIPS 2020). [[source.guu-2020]] [[source.lewis-2020]] **[confirmed]**

**codification** — Lewis et al., "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks" (NeurIPS 2020) names the framework and sets the template — a dense dual-encoder retriever (Karpukhin et al.'s DPR) feeding a pre-trained generator, trained end-to-end. The parallel capability, in-context / few-shot learning, is codified the same year by Brown et al.'s GPT-3. [[source.lewis-2020]] [[source.karpukhin-2020]] [[source.brown-2020]] **[confirmed]**

**door** — Gao et al., "Retrieval-Augmented Generation for Large Language Models: A Survey" (arXiv:2312.10997, 2024) — the standard survey, organizing the field into Naive / Advanced / Modular RAG over the retrieval–generation–augmentation tripartite. [[source.gao-2024]] **[confirmed]**

**lineage** — founding is shared, not singular: REALM and RAG appear independently in 2020 over a common substrate (dense passage retrieval, pre-trained generators). In-context learning enters the same lineage as the non-retrieval route to the same goal — supplying knowledge at inference rather than baking it into parameters.

*grade [s] — origin, codification, and door all present.*
