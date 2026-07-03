---
name: dense-passage-retrieval
type: object
object-type: method
essence: retrieve passages by learned dense-vector similarity (a dual-encoder + maximum inner-product search) rather than sparse term overlap
field: ["[[field.information-retrieval]]"]
status: established
state: settled
attribution: Karpukhin et al. 2020
formalized: true
source: ["[[source.karpukhin-2020]]", "[[source.lewis-2020]]", "[[source.gao-2024]]"]
depends-on: []
used-by: ["[[object.retrieval-augmented-generation]]", "[[object.realm-joint-retriever-pretraining]]"]
---

**statement (plain)** — encode questions and passages into dense vectors with two separately-trained BERT encoders, so that a relevant question–passage pair has high similarity; pre-index all passage vectors and answer a query by nearest-neighbour search. Learned semantics let it match passages that share meaning but not words, where sparse term-matching (BM25) fails. [[source.karpukhin-2020]] [[source.gao-2024]] **[confirmed]**

**statement (formal/formula)** — similarity is the dot product sim(q,p) = E_Q(q)·E_P(p) of the two encoder outputs; training minimizes the negative log-likelihood of the positive passage against in-batch negatives (a contrastive softmax over candidates); retrieval is maximum inner-product search over the pre-computed passage index (FAISS). [[source.karpukhin-2020]] **[confirmed as attribution]**

**basis** — the support: Karpukhin et al. (2020) report top-20 retrieval accuracy 9–19 percentage points above a Lucene-BM25 baseline across several open-domain QA datasets, and DPR is the retriever Lewis et al. (2020) build RAG on; the RAG survey treats dense dual-encoder retrieval as the default RAG retriever (Gao et al. 2024). The limits: trained encoders can underperform BM25 on out-of-distribution corpora and on rare entities / exact lexical matches; the index must be rebuilt when the corpus changes; gains depend on training-pair quality and negatives. [[source.karpukhin-2020]] [[source.lewis-2020]] [[source.gao-2024]] **[confirmed]**
