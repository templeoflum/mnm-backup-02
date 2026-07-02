---
name: circuits-feature
type: object
object-type: framework
essence: the circuits hypothesis — features are meaningful directions in activation space, and the weights connecting features form interpretable circuits (sub-algorithms) that recur across models
field: ["[[field.mechanistic-interpretability-probing]]"]
status: empirical
state: settled
attribution: Olah, Cammarata, Schubert, Goh, Petrov & Carter (2020), "Zoom In"; precursor feature visualization Olah, Mordvintsev & Schubert (2017)
formalized: false
source: ["[[source.olah-2020]]", "[[source.olah-2017]]", "[[source.bereska-2024]]"]
depends-on: []
used-by: ["[[object.superposition]]", "[[object.induction-heads]]"]
---

**statement (plain)** — the circuits framework treats a neural network as decomposable into **features** — directions in activation space that respond to human-interpretable patterns (e.g. curve detectors, dog-head detectors) — and **circuits** — the weighted connections between features that implement meaningful algorithms readable directly in the weights. Feature visualization (optimizing an input to maximize an activation) is the primary tool for seeing what a feature responds to.

**statement (claims)** — "Zoom In" frames three speculative claims: (1) **Features** are the fundamental unit and correspond to directions; (2) **Circuits** are formed by the weights wiring features together and constitute meaningful algorithms; (3) **Universality** — analogous features and circuits recur across different models and tasks. [[source.olah-2020]]

**basis** — empirical, demonstrated rather than proved. **Support:** worked circuit-level case studies in vision models (curve detectors, high-low frequency detectors, oriented dog-head circuits in InceptionV1) [[source.olah-2020]]; feature visualization established as a reliable read-out method [[source.olah-2017]]; carried forward as the organizing frame of the field in reviews [[source.bereska-2024]]. **[confirmed]** **Limits:** the three claims are explicitly hypotheses, not theorems; universality is partial and contested; the clean feature/circuit decomposition is complicated by **superposition** (see [[object.superposition]]), where features do not align with neurons. Not formalized into a general theory. **[confirmed]**
