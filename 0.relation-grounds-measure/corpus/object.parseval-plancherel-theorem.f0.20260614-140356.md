---
name: parseval-plancherel-theorem
type: object
object-type: theorem
essence: the Fourier transform preserves energy — the L² norm of a function equals the L² norm of its transform (Fourier is a unitary isometry)
field: ["[[field.harmonic-fourier-analysis]]", "[[field.real-analysis-limits]]"]
status: proven
state: settled
attribution: Parseval (series identity, presented 1799, pub. 1806); Plancherel (L² Fourier transform, 1910)
formalized: false
source: ["[[source.parseval-1806]]", "[[source.plancherel-1910]]", "[[source.stein-shakarchi-2003]]"]
depends-on: ["[[object.fourier-series]]", "[[object.fourier-transform]]"]
used-by: []
aliases: ["object.parseval-plancherel-theorem"]
---

**statement (plain)** — the Fourier transform does not lose or create "energy": the total squared size of a function equals the total squared size of its frequency content. For a periodic function (Parseval), the integral of the square equals the sum of the squares of its Fourier coefficients; for a function on the line (Plancherel), the integral of the square of the function equals the integral of the square of its transform. The transform is an isometry — and on L² a unitary map.

**statement (formal)** —
*Parseval (Fourier series)* — for f ∈ L²(−π, π) with coefficients a_k, b_k,
  (1/π) ∫_{−π}^{π} |f(x)|² dx = a₀²/2 + Σ_{k≥1} (a_k² + b_k²);
equivalently (1/2π) ∫ |f|² = Σ_n |c_n|². **[confirmed]**
*Plancherel (Fourier transform)* — if f ∈ L¹(ℝ) ∩ L²(ℝ) then f̂ ∈ L²(ℝ) and
  ∫_{−∞}^{∞} |f(x)|² dx = ∫_{−∞}^{∞} |f̂(ξ)|² dξ;
the map F extends uniquely to a **unitary operator on L²(ℝ)** (the *Parseval–Plancherel formula*). **[confirmed]**

**status** — proven.

**proof** — Parseval's identity follows from the orthonormality/completeness of the trigonometric system (Bessel + completeness ⇒ equality). Plancherel's theorem is proved by establishing the norm equality on the dense subspace L¹ ∩ L² (or the Schwartz class) and extending F by continuity to a unitary operator on L²; see [[source.stein-shakarchi-2003]] and [[source.plancherel-1910]]. **[confirmed]**

**lineage** — Marc-Antoine Parseval stated his series identity to the Académie des Sciences in Paris on **5 April 1799** (published **1806**) [[source.parseval-1806]] — predating Fourier's systematic theory; it was only later read as an identity about [[object.fourier-series]]. The L²-Fourier-transform statement and the unitarity were established by Michel Plancherel in **1910** [[source.plancherel-1910]]. The combined result is conventionally the **Parseval–Plancherel theorem**. **[confirmed]**

**door** — Stein & Shakarchi, *Fourier Analysis: An Introduction* (Parseval in ch. 3, Plancherel in ch. 5) [[source.stein-shakarchi-2003]].

**sources** — [[source.parseval-1806]], [[source.plancherel-1910]], [[source.stein-shakarchi-2003]]; statements cross-checked against the Encyclopedia of Mathematics article "Plancherel theorem" and the Wikipedia "Parseval's theorem" / "Plancherel theorem" articles (independent confirmation of formula, dates 1799/1806/1910).
