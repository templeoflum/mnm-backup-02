---
name: mechanistic-interpretability-probing
type: field
essence: reverse-engineering the internal representations and computations of neural networks into human-understandable features, circuits, and algorithms — and the probing methods used to read those representations
canon: structure
grade: s
state: float
links: [field.ai-alignment-praxis, source.alain-2016, source.olah-2020, source.olah-2017, source.elhage-2022, source.olsson-2022, source.bereska-2024]
---

*living, fast-moving field — claims and definitions still forming; flag on card.*

**origin (probing)** — Alain & Bengio, "Understanding intermediate layers using linear classifier probes," arXiv:1610.01644 (2016) — established the linear-probe protocol: train an independent linear classifier on a frozen layer's activations to read out what information that layer makes linearly available. [[source.alain-2016]] **[confirmed]**

**codification (circuits / mech interp)** — Olah, Cammarata, Schubert, Goh, Petrov & Carter, "Zoom In: An Introduction to Circuits," Distill (2020) — laid out the circuits program (features as directions, circuits as the weights connecting them, universality), building on Olah, Mordvintsev & Schubert, "Feature Visualization," Distill (2017). The transformer era is anchored by Elhage et al., "Toy Models of Superposition" (2022) and Olsson et al., "In-context Learning and Induction Heads" (2022). [[source.olah-2020]] [[source.olah-2017]] [[source.elhage-2022]] [[source.olsson-2022]] **[confirmed]**

**door** — Bereska & Gavves, "Mechanistic Interpretability for AI Safety — A Review," arXiv:2404.14082 (2024) — survey covering features, superposition, circuits, and causal methods; the Distill circuits thread and Transformer Circuits Thread are the open primary entry points. [[source.bereska-2024]] [[source.olah-2020]] **[confirmed]**

**lineage** — the field has two converging roots: a *representation-reading* lineage (probing classifiers, Alain & Bengio 2016) and a *mechanism-tracing* lineage (feature visualization → circuits → transformer circuits, Olah et al. 2017–2022). Both are recent and the framing remains contested.

*grade [s] — origin, codification, and door all present.*
