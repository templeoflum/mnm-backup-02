---
name: fisher-rao-metric
type: object
object-type: metric
essence: the Riemannian metric on statistical manifolds — g_ij(θ) = E[∂_i log p · ∂_j log p], unique under sufficient statistics (Čencov)
field: ["[[field.information-geometry]]"]
status: established
state: settled
attribution: C. R. Rao (1945), on Fisher's information; uniqueness N. N. Čencov (1972/1982)
formalized: true
source: ["[[source.rao-1945]]", "[[source.cencov-1982]]", "[[source.amari-2016]]", "[[source.matsueda-2013]]"]
depends-on: []
used-by: []
---

**statement (plain)** — treat every probability distribution in a family as a point, and measure the distance between nearby points by how *distinguishable* the distributions are from data. That distinguishability metric turns statistics into geometry — distance is statistical resolution.

**statement (formal)** — on a statistical manifold p(x|θ): g_ij(θ) = E[∂_i log p(x|θ) · ∂_j log p(x|θ)] = ∫ p ∂_i log p ∂_j log p dx. Čencov's theorem: the unique (up to scale) Riemannian metric invariant under sufficient statistics. **[confirmed]**

**basis** — Rao (1945) introduced the metric (the same paper as the Cramér–Rao bound); Čencov proved its canonicity; Amari built the field on it (dual connections, divergences). [[source.rao-1945]] [[source.cencov-1982]] [[source.amari-2016]] **Speculative extension** (per the signed FLAG 2.4, `[candidate]`): the emergent-spacetime reading — Fisher geometry on entanglement spectra as the effective GR metric ([[source.matsueda-2013]]); a time-dependent distribution gives its parameter space a spacetime interpretation. Instanton-moduli information metrics (Blau–Thompson; Miyamoto–Yahikozawa arXiv:1205.3211) are the same line's precedent — prose reference only.
