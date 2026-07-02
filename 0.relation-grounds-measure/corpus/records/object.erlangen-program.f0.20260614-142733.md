---
name: erlangen-program
type: object
object-type: principle
essence: a geometry IS a transformation group plus the properties it leaves invariant — the emphasis moves from the space to its symmetries
field: ["[[field.coordinate-systems-erlangen-program]]", "[[field.group-theory]]", "[[field.projective-geometry]]"]
status: foundational
state: settled
attribution: Felix Klein, "Vergleichende Betrachtungen über neuere geometrische Forschungen" (Erlangen, 1872)
formalized: true
source: ["[[source.klein-1872]]", "[[source.lie-1873]]", "[[source.sharpe-1997]]"]
depends-on: []
used-by: ["[[object.klein-geometry-homogeneous-space]]"]
---

**statement (plain)** — to specify a geometry, pick a space and a group of transformations acting on it; the geometry is then the study of exactly those properties of figures that no transformation in the group can change (its invariants). Different choices of group give different geometries on the same underlying set — Euclidean, affine, projective, conformal — and they nest as the groups nest. The slogan: geometry = group + invariants.

**statement (formal)** — given a set (manifold) X and a transformation group G acting on X, the geometry of (X, G) is the study of those properties of subsets/configurations of X that are invariant under every g ∈ G. A larger group sees fewer invariants (a coarser geometry); a subgroup sees more invariants (a finer geometry), giving a hierarchy of geometries by inclusion of groups. Klein's stated theme: *"Given a manifold and a transformation group acting on it, to investigate those properties of figures on that manifold which are invariant under all transformations of that group."* **[confirmed]**

**status** — a foundational organizing principle / research program, not a theorem.

**attribution** — Felix Klein, *Vergleichende Betrachtungen über neuere geometrische Forschungen* ("Comparative Considerations on Recent Geometrical Research"), his 1872 inaugural program at Erlangen (Erlangen: Deichert, 1872); reprinted in *Mathematische Annalen* 43 (1893) [[source.klein-1872]]. **[confirmed]**

**lineage** — the program grew out of Klein's collaboration with [[source.lie-1873|Sophus Lie]] on continuous transformation groups; the group-theoretic viewpoint and the role of Lie's transformation groups are part of its genesis. It recast projective, affine, and Euclidean geometry as a single hierarchy and supplied the language later used for general covariance; Élie Cartan generalized it to curved "espaces généralisés" (see [[object.klein-geometry-homogeneous-space]]). **[confirmed]**

**door** — Klein's program in English at math.ucr.edu (Baez) and arXiv:0807.3161 [[source.klein-1872]]; modern treatment in Sharpe, *Cartan's Generalization of Klein's Erlangen Program* [[source.sharpe-1997]].

**sources** — [[source.klein-1872]], [[source.lie-1873]], [[source.sharpe-1997]]; cross-confirmed against nLab "Erlangen program" and Wikipedia "Erlangen program."
