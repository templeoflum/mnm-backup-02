---
name: spectral-dimension
type: object
object-type: definition
essence: the dimension a random walker feels — how the return probability of diffusion on a graph or spacetime scales with diffusion time
field: ["[[field.quantum-gravity]]"]
status: established
state: settled
attribution: standard notion of diffusion on graphs/manifolds; in quantum gravity Ambjørn–Jurkiewicz–Loll (2005)
formalized: true
source: ["[[source.ambjorn-2005]]", "[[source.trugenberger-2023]]"]
depends-on: []
used-by: []
---

**statement (plain)** — drop a random walker on a space and ask how often it comes home. On a line it returns often, on a plane less, in 3D rarely — the falloff rate defines a dimension. Because it needs no coordinates, only connectivity, it works on graphs and quantum spacetimes where "dimension" is otherwise undefined.

**statement (formal)** — the spectral dimension d_s is defined by the scaling of the diffusion return probability P(σ) ~ σ^(−d_s/2) with diffusion time σ; distinct from the Hausdorff dimension d_h (volume-vs-radius scaling). **[confirmed]**

**basis** — the key quantum-gravity finding (CDT, Ambjørn–Jurkiewicz–Loll 2005, simulation): d_s runs from 4 at large scales to ≈2 near the Planck scale — "dynamical dimensional reduction," suggesting quantum gravity "self-renormalizing" at short distance; the same 4→2 flow appears in Hořava–Lifshitz gravity, and spectral-vs-Hausdorff decoupling is the diagnostic in graph-based emergent-geometry models (combinatorial QG, [[source.trugenberger-2023]]). Contrast object: `hausdorff-dimension` (fractal-geometry) — prose cross-reference.
