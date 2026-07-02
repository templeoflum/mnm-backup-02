---
name: heine-borel-theorem
type: object
object-type: theorem
essence: a subset of R^n is compact (every open cover has a finite subcover) exactly when it is closed and bounded
field: [field.real-analysis-limits, field.point-set-topology]
status: proven
state: settled
attribution: covering idea in Dirichlet (1852) & Heine (1872, uniform continuity); first explicit statement/proof Borel (1895, countable covers); arbitrary covers Cousin (1895), Lebesgue (1898), Schoenflies (1900)
formalized: true
source: [source.heine-1872, source.borel-1895, source.rudin-1953]
depends-on: [object.completeness-axiom, object.bolzano-weierstrass-theorem]
used-by: []
aliases: ["object.heine-borel-theorem"]
---

**statement (plain)** — for a set of points in ordinary n-dimensional space, "compact" (any way you cover the set with open patches, finitely many of those patches already cover it) is the same thing as the set being both closed (it contains all its edge/limit points) and bounded (it fits inside some finite ball). In ℝⁿ, closed + bounded = compact.

**statement (formal)** — for S ⊆ ℝⁿ the following are equivalent: (i) S is compact — every open cover of S has a finite subcover; (ii) S is closed and bounded; (iii) S is sequentially compact. The base case is that any closed bounded interval [a, b] ⊂ ℝ is compact. **[confirmed]**

**status** — proven.

**proof** — for [a,b]: suppose an open cover with no finite subcover; bisect repeatedly, keeping a half with no finite subcover; by [[object.completeness-axiom]] the nested intervals shrink to a point p, which lies in some cover member, whose neighborhood already covers a small interval — contradiction. The closed-and-bounded ⇒ compact direction uses completeness; equivalence with sequential compactness ties to [[object.bolzano-weierstrass-theorem]]. Full proof in [[source.rudin-1953]] (Theorem 2.41, the Heine-Borel theorem). **[confirmed]**

**lineage (contested — Stigler's law)** — the covering/finite-subcover idea appears in Dirichlet's 1852 lectures (publ. 1904) and in E. Heine's 1872 proof that continuity on a closed bounded interval implies uniform continuity [[source.heine-1872]]. É. Borel (1895) first explicitly stated and proved a covering theorem, restricted to **countable** covers [[source.borel-1895]]. P. Cousin (1895), H. Lebesgue (1898), and A. Schoenflies (1900) extended it to **arbitrary** covers. The attachment of Heine's name (via Schoenflies) is historically thin — Lebesgue called it "ridiculous"; nLab cites this as an instance of Stigler's law of eponymy. Carried as lineage, not flattened. **[confirmed]**

**door** — Rudin ch. 2 (compactness, Theorem 2.41); nLab "Heine-Borel theorem." [[source.rudin-1953]]
