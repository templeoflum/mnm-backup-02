---
name: cartesian-coordinates
type: object
object-type: construction
essence: locate a point by its signed distances to perpendicular axes — the bridge that turns geometry into algebra
field: [field.coordinate-systems-erlangen-program]
status: foundational
state: verified
attribution: René Descartes, La Géométrie (1637); independently Pierre de Fermat (manuscript c. 1636, pub. 1679)
formalized: true
source: [source.descartes-1637, source.fermat-ad-locos]
depends-on: []
used-by: [object.homogeneous-coordinates]
---

**statement (plain)** — fix two perpendicular lines (axes) crossing at an origin. Every point in the plane is named by an ordered pair (x, y): its signed distance along each axis. This makes a point into a pair of numbers, so geometric curves become algebraic equations and vice versa. The same idea extends to three coordinates (x, y, z) in space and to n coordinates in general.

**statement (formal)** — a Cartesian coordinate system on an n-dimensional real affine space is determined by an origin O and an ordered orthonormal basis (e₁,…,eₙ); a point P is assigned the n-tuple (x₁,…,xₙ) ∈ ℝⁿ where the position vector P − O = Σ xᵢ eᵢ. The map P ↦ (x₁,…,xₙ) is a bijection onto ℝⁿ. In the Erlangen reading, the relevant geometry is fixed by the group acting on these tuples (e.g. the Euclidean group of rotations/reflections/translations for Euclidean geometry). **[confirmed]**

**status** — foundational construction, not a theorem.

**lineage (co-invention)** — René Descartes published the method in *La Géométrie* (1637, appendix to *Discours de la méthode*) [[source.descartes-1637]]. Pierre de Fermat developed the same correspondence independently in *Ad Locos Planos et Solidos Isagoge* (manuscript c. 1636, printed posthumously 1679) [[source.fermat-ad-locos]]; Descartes's printed work carried priority in influence. **[confirmed]**

**historical nuance** — neither Descartes nor Fermat used the modern pair of perpendicular axes with negative coordinates: Descartes worked from a single reference axis with a variable length, and the orthogonal-axes, four-quadrant form crystallized later (van Schooten's Latin editions and successors). Nicole Oresme used coordinate-like constructions earlier. The name "Cartesian" is from Descartes's Latinized name *Cartesius* and was applied later. The system underpinned the calculus of Newton and Leibniz. **[confirmed]**

**relation** — Cartesian coordinates are the affine/Euclidean special case; [[object.homogeneous-coordinates]] extend them to projective space by adding a scale-free extra coordinate that also names points at infinity.

**sources** — [[source.descartes-1637]], [[source.fermat-ad-locos]]; cross-confirmed against Wikipedia "Cartesian coordinate system," Britannica "Cartesian coordinates," and MacTutor-aligned histories.
