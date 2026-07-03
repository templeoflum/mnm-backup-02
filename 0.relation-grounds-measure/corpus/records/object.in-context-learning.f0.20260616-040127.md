---
name: in-context-learning
type: object
object-type: concept
essence: a large language model performs a task from a description and a few demonstrations placed in its prompt, with no gradient updates to its weights
field: ["[[field.information-retrieval]]"]
status: empirical
state: settled
attribution: Brown et al. 2020 (GPT-3)
formalized: false
source: ["[[source.brown-2020]]", "[[source.guu-2020]]"]
depends-on: []
used-by: []
---

**statement (plain)** — supply the task as text in the context window — an instruction plus zero, one, or a few input–output examples — and the model infers the pattern and produces the answer for a new input, without any fine-tuning. Knowledge and task specification enter at inference through the prompt, the same inference-time conditioning that retrieval exploits; this is the non-retrieval route to giving a model new information. [[source.brown-2020]] **[confirmed]**

**statement (formal/formula)** — no closed-form definition; operationally, the model computes p_θ(y | C, x) where C is a context of k demonstrations (x_i, y_i) and θ is frozen — performance generally improves with k (zero- → one- → few-shot) at fixed weights, the defining empirical signature in Brown et al. (2020). [[source.brown-2020]] **[confirmed as attribution]**

**basis** — the support: Brown et al. (2020) demonstrate across many NLP benchmarks that few-shot prompting of GPT-3 (175B) approaches or beats fine-tuned baselines with no weight updates; the capability motivates inference-time knowledge injection generally, the same premise retrieval-augmented systems exploit (Guu et al. 2020 contrast retrieved-knowledge against in-parameter/in-context knowledge). The limits: it is an emergent empirical behaviour, not a proven mechanism — sensitive to prompt format, example order, and selection; unreliable on tasks needing precise or up-to-date facts, which is part of the motivation for retrieval augmentation. [[source.brown-2020]] [[source.guu-2020]] **[confirmed]**
