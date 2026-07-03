---
name: induction-heads
type: object
object-type: concept
essence: attention heads that complete sequences by prefix-matching and copying ([A][B]…[A]→[B]) — hypothesized as the main mechanism of in-context learning in transformers
field: ["[[field.mechanistic-interpretability]]"]
status: empirical
state: settled
attribution: Olsson et al. (2022), "In-context Learning and Induction Heads"; builds on Elhage et al. "A Mathematical Framework for Transformer Circuits" (2021)
formalized: false
source: ["[[source.olsson-2022]]", "[[source.bereska-2024]]"]
depends-on: ["[[object.circuits-feature]]"]
used-by: []
---

**statement (plain)** — an induction head is an attention head (typically working with one earlier head as a two-head circuit) that, on seeing the current token A, looks back for the previous occurrence of A, attends to whatever token B followed it, and copies B forward — implementing the pattern [A][B]…[A]→[B]. This lets a transformer continue repeated patterns it has seen earlier in its context.

**statement (mechanism)** — a "previous-token" head writes information about each token's predecessor; the induction head then does **prefix matching** (attend to tokens preceded by the current token) via its query-key circuit and **copying** via its output-value circuit, raising the logit of the matched continuation. Olsson et al. give six lines of evidence that induction heads underlie most in-context learning, noting they emerge at the same training step as a sharp rise in in-context-learning ability. [[source.olsson-2022]]

**basis** — empirical. **Support:** in small attention-only models the formation and function of induction heads is shown with strong causal evidence (ablation, the co-timed loss bump); for larger models with MLPs the link to in-context learning is correlational across six convergent measures [[source.olsson-2022]]; treated as a canonical discovered circuit in mech-interp reviews [[source.bereska-2024]]. **[confirmed]** **Limits:** the central claim — that induction heads are *the* mechanism for the majority of in-context learning in large models — is explicitly preliminary and indirect for models with MLPs; the authors flag it as a hypothesis with correlational support, not a proof. Rests on the transformer-circuits / features view (see [[object.circuits-feature]]). **[confirmed]**
