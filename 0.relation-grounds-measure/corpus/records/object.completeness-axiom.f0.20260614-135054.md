---
name: completeness-axiom
type: object
object-type: axiom
essence: the real line has no gaps — every nonempty set bounded above has a least upper bound in R
field: ["[[field.real-analysis]]"]
status: proven
state: settled
attribution: importance recognized by Bolzano (1817); rigorous construction by Dedekind (1872, cuts) and Cantor (1872, Cauchy sequences)
formalized: true
source: ["[[source.dedekind-1872]]", "[[source.bolzano-1817]]", "[[source.rudin-1953]]"]
depends-on: []
used-by: ["[[object.bolzano-weierstrass-theorem]]", "[[object.intermediate-value-theorem]]", "[[object.heine-borel-theorem]]"]
---

**statement (plain)** — the real number line has no holes. If you take any nonempty collection of real numbers that does not run off to infinity above (it has some ceiling), then among all its ceilings there is a smallest one, and that smallest ceiling is itself a real number. The rationals fail this — {x ∈ ℚ : x² < 2} has rational ceilings but no smallest rational ceiling, because √2 is missing.

**statement (formal)** — least-upper-bound (Dedekind-completeness) property: for every nonempty S ⊆ ℝ that is bounded above, sup S exists and sup S ∈ ℝ. Equivalently: every Dedekind cut of ℚ is produced by exactly one real number; equivalently, every Cauchy sequence in ℝ converges in ℝ (Cauchy-completeness) together with the Archimedean property. **[confirmed]**

**status** — proven (a theorem in any construction of ℝ; taken as the defining axiom in axiomatic developments — ℝ is *the* complete ordered field, unique up to isomorphism).

**axiom vs. theorem** — in the synthetic/axiomatic approach (e.g. Rudin's "ordered field with the least-upper-bound property") this is an **axiom**; in a construction of ℝ from ℚ it is a **theorem**. Either way it is the load-bearing property distinguishing ℝ from ℚ.

**lineage** — B. Bolzano (1817) first recognized the property's importance and used it implicitly [[source.bolzano-1817]]. R. Dedekind (1872) gave the cut construction making continuity precise [[source.dedekind-1872]]; G. Cantor (1872) gave the independent Cauchy-sequence construction. Modern codification in Rudin [[source.rudin-1953]]. **[confirmed]**

**proof / reference** — construction and equivalences in [[source.rudin-1953]] (ch. 1, the real field; Dedekind cuts in the appendix) and [[source.dedekind-1872]]. **[confirmed]**
