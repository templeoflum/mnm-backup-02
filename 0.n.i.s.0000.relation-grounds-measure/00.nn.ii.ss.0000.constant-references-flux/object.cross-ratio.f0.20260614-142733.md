---
name: cross-ratio
type: object
object-type: definition
essence: the one numerical invariant of four collinear points — unchanged by any projection
field: [field.projective-geometry]
status: standard
state: verified
attribution: implicit in Pappus (c. 320 CE); projective invariance rediscovered by Desargues (17th c.); independent invariance proofs Möbius (1827), Steiner (1832), Chasles (1837); term "cross-ratio" Clifford (1878)
formalized: true
source: [source.pappus-collection, source.mobius-1832, source.steiner-1832, source.chasles-1837, source.coxeter-projective]
depends-on: [object.projective-space]
used-by: []
---

**statement (plain)** — given four points in a row on a line, you can form one special number from them. Its remarkable feature: if you photograph those four points from any angle — project them onto another line from any viewpoint — the number stays exactly the same. It is the single quantity that projection cannot change, even though it changes all the individual distances and ratios. This is what lets perspective drawing and projective geometry have any measurable invariant at all.

**statement (formal)** — for four distinct collinear points A, B, C, D (with signed distances along the line), the cross-ratio is
  (A, B; C, D) = (AC · BD) / (BC · AD) = (AC/BC) / (AD/BD).
In homogeneous / one-dimensional projective coordinates, for points with parameters z₁, z₂, z₃, z₄ on a projective line,
  (z₁, z₂; z₃, z₄) = ((z₁ − z₃)(z₂ − z₄)) / ((z₂ − z₃)(z₁ − z₄)).
**Key property:** the cross-ratio is invariant under every projective transformation (collineation) of the line, and over the complex line under every Möbius transformation z ↦ (az+b)/(cz+d). It is, up to relabeling, the *only* projective invariant of four collinear points. **[confirmed]**

**proof / status** — definition plus its invariance theorem. Invariance follows because a projective map of the line is a linear fractional transformation, and the cross-ratio expression is unchanged by substituting (az+b)/(cz+d) for each argument (the linear factors cancel). The four-point cross-ratio takes 6 values under the 24 permutations (the anharmonic group); permuting the four points permutes {λ, 1−λ, 1/λ, …}. See [[source.coxeter-projective]]. **[confirmed]**

**lineage** — the **anharmonic ratio** appears implicitly in [[object.pappus-hexagon-theorem]]'s author, Pappus of Alexandria (*Collection*, c. 320 CE) [[source.pappus-collection]]; its **projective invariance** was rediscovered in the 17th century by Girard Desargues. Three near-simultaneous **independent invariance proofs**: A. F. Möbius (1827; *Doppelverhältnis*) — author of [[source.mobius-1832]] in another context — Jakob Steiner (1832) [[source.steiner-1832]], and Michel Chasles (1837; coined *rapport anharmonique*) [[source.chasles-1837]]. The English name "cross-ratio" was introduced by W. K. Clifford (1878). **[confirmed]**

*name-trap note:* the **[[source.clifford-1878]]** record in this DB is Clifford's geometric-algebra paper ("Applications of Grassmann's Extensive Algebra"); the cross-ratio terminology coinage (Clifford, 1878) is a *different* work by the same author and same year — not linked here to avoid conflation. Möbius's 1827 invariance proof is likewise distinct from his 1832 number-theory paper held under [[source.mobius-1832]]; the handle is reused for the author, the work differs.

**sources** — Wikipedia "Cross-ratio"; arXiv "A Survey of the Development of Geometry up to 1870"; [[source.coxeter-projective]]. **[confirmed]**
