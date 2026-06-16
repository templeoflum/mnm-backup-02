---
name: realm-joint-retriever-pretraining
type: object
object-type: method
essence: pre-train a neural retriever jointly with a language model by backpropagating the masked-LM objective through the retrieval step
field: [field.retrieval-augmented-generation]
status: established
state: settled
attribution: Guu et al. 2020 (REALM)
formalized: true
source: [source.guu-2020, source.lewis-2020]
depends-on: [object.dense-passage-retrieval, object.retrieval-augmented-generation]
used-by: []
---

**statement (plain)** — instead of training a retriever from labelled question–passage pairs, train it from the language-modeling signal itself: the model retrieves documents to help predict masked tokens, and whether retrieval helped flows back as gradient into the retriever. The retriever learns what is worth fetching directly from unlabelled text. [[source.guu-2020]] **[confirmed]**

**statement (formal/formula)** — REALM models p(y|x) = Σ_z p(y|z,x) · p(z|x), marginalizing over retrieved documents z; the retriever p(z|x) ∝ exp(f(x)·g(z)) is a dense inner-product scorer and the masked-LM loss is backpropagated through this sum. Because the document index depends on the retriever's own parameters, it is asynchronously re-embedded and re-indexed during training (maximum inner-product search over millions of documents). [[source.guu-2020]] **[confirmed as attribution]**

**basis** — the support: Guu et al. (2020) show REALM, fine-tuned on open-domain QA, outperforms prior Open-QA methods, establishing that a retriever can be learned end-to-end from the LM objective; the same marginalize-over-retrieved-documents structure underlies Lewis et al.'s RAG (2020), which keeps the document encoder fixed and fine-tunes the query side. The limits: training is expensive and engineering-heavy (asynchronous index refresh, MIPS over millions of docs), demonstrated mainly on Wikipedia-scale corpora and QA; the design choices (cold-start retriever, salient-span masking) are empirical, not derived. [[source.guu-2020]] [[source.lewis-2020]] **[confirmed]**
