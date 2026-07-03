---
name: logarithmic-spiral
type: object
object-type: definition
essence: the equiangular spiral r = a·e^{bθ} — self-similar: scaling it reproduces the same curve (scaling is equivalent to rotation), cutting every radial line at a constant angle
field: ["[[field.differential-geometry]]"]
status: established
state: float
attribution: Dürer (1525); Descartes (1638); Jacob Bernoulli (1692, Spira mirabilis)
formalized: true
source: ["[[source.bernoulli-1692]]", "[[source.durer-1525]]"]
depends-on: []
used-by: []
---

**statement (plain)** — a logarithmic spiral grows by multiplying: each quarter-turn scales it by a fixed ratio, so a small piece and a large piece are the same shape. Zooming in looks exactly like rotating — the curve is self-similar under scaling. It meets every ray from the center at the same angle, which is why it is also called equiangular. It is the canonical geometric picture of scale-invariance (nautilus shells, galaxy arms, the golden spiral).

**statement (formal)** — in polar coordinates r = a·e^{bθ} (a>0); scaling r → e^{2πb} r maps the spiral onto itself (a scaling ≡ a rotation by 2π). The tangent makes a constant angle arccot(b) with the radius; distinct from the Archimedean spiral r = aθ (arithmetic, constant turn-spacing). **[confirmed]**

**basis** — Bernoulli's *Spira mirabilis* (1692); precursors Dürer (1525), Descartes (1638), Torricelli (rectification). Door: E. H. Lockwood, *A Book of Curves* (1961).
