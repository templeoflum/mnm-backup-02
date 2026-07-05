---
name: alabdulmohsin-zhai-2025
type: source
essence: RINS — recursive inference scaling: loop a model's first block r times to exploit language's fractal geometry; helps language + multimodal, not pure vision
kind: paper
author: I. Alabdulmohsin; X. Zhai
year: 2025
venue: arXiv:2502.07503; NeurIPS 2025
state: settled
links: ["[[object.recursive-inference-scaling]]", "[[field.representation-learning]]"]
---

I. Alabdulmohsin & X. Zhai (Google DeepMind), "Recursive Inference Scaling: A Winning Path to Scalable Inference in Language and Multimodal Systems," arXiv:2502.07503 (v1 Feb 2025, titled "Harnessing Language's Fractal Geometry…"; NeurIPS 2025).

Role — "Inspired by recent findings on the fractal geometry of language," RINS partitions a net depthwise into equal blocks A, B and applies A recursively r times before B (signature A^rB) — a scale-invariant decoding / parameter-sharing scheme. Outperforms 55+ recursion variants at compute-matched training; improves data-scaling exponents. Domain-specificity: "RINS does not help in the pure vision domain, but it can still improve performance in multimodal systems that also process language." **[confirmed]**
