---
name: retrieval-augmented-generation
type: object
object-type: framework
essence: condition a pre-trained generator on documents fetched from an external corpus at inference, so knowledge is retrieved rather than stored only in parameters
field: ["[[field.retrieval-augmented-generation]]"]
status: established
state: settled
attribution: Lewis et al. 2020 (RAG); parallel founding Guu et al. 2020 (REALM)
formalized: true
source: ["[[source.lewis-2020]]", "[[source.guu-2020]]", "[[source.gao-2024]]"]
depends-on: ["[[object.dense-passage-retrieval]]"]
used-by: ["[[object.realm-joint-retriever-pretraining]]"]
aliases: ["object.retrieval-augmented-generation"]
---

**statement (plain)** — given a query, a retriever selects relevant documents from an external corpus and a generator produces the output conditioned on both the query and the retrieved documents. Knowledge lives in a swappable index, not solely in the model's weights, which improves factuality and lets the knowledge be updated without retraining. [[source.lewis-2020]] [[source.gao-2024]] **[confirmed]**

**statement (formal/formula)** — Lewis et al. marginalize the generator over retrieved passages. RAG-Sequence: p(y|x) ≈ Σ_{z ∈ top-k(p(·|x))} p_η(z|x) · p_θ(y|x,z), where p_η is the retriever (a DPR dual-encoder) and p_θ the seq2seq generator; RAG-Token applies the marginalization per output token. Training backpropagates into the query encoder and generator with the document encoder / index held fixed. [[source.lewis-2020]] **[confirmed as attribution]**

**basis** — the support: RAG (Lewis et al. 2020) and REALM (Guu et al. 2020) both report state-of-the-art open-domain QA in 2020 by retrieving before generating, and the approach is now the standard mitigation for hallucination and stale parametric knowledge (Gao et al. 2024). The limits: quality is bounded by the retriever — irrelevant or missing passages cause errors, and the generator can still ignore or contradict retrieved evidence; gains are corpus- and task-dependent, and the survey frames open problems in retrieval quality, integration, and evaluation rather than a solved method. [[source.lewis-2020]] [[source.guu-2020]] [[source.gao-2024]] **[confirmed]**
