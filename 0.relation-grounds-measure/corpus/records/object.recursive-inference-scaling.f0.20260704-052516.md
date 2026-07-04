---
name: recursive-inference-scaling
type: object
object-type: method
essence: RINS — loop a network's first depth-block r times before the second, a scale-invariant decoding that exploits language's fractal self-similarity
field: ["[[field.representation-learning]]"]
status: established
state: float
attribution: Alabdulmohsin & Zhai (2025)
formalized: true
source: ["[[source.alabdulmohsin-zhai-2025]]"]
depends-on: ["[[object.self-similarity-of-language]]"]
used-by: []
---

**statement (plain)** — if language is self-similar, a network can exploit that by reusing depth: split the layers into two halves, and run the first half in a loop several times before handing off to the second. The looping mirrors language's recursive, scale-invariant structure — and it beats dozens of other weight-sharing tricks at matched compute.

**statement (formal)** — RINS = architectures of degree 1 and signature A^rB (r>1): partition depth into equal blocks A, B; apply A recursively on its own output r times, then B. A form of parameter sharing (cf. Universal Transformers, ALBERT). Improves data-scaling exponents; optimal r grows with training compute; a "no-regret" strategy with linear adapters. **[confirmed]**

**basis** — Alabdulmohsin & Zhai (2025, NeurIPS); motivated explicitly by the fractal geometry of language ([[object.self-similarity-of-language]]). Domain-specificity is the key evidence: RINS helps language and multimodal systems but "does not help in the pure vision domain." [[source.alabdulmohsin-zhai-2025]]
