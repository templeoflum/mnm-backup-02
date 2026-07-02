---
name: classification-of-finite-simple-groups
type: object
object-type: theorem
essence: every finite simple group is on one explicit list — 18 families plus 26 sporadics
field: ["[[field.group-theory]]"]
status: proven
state: settled
attribution: collaborative (~100 authors, ~1955–2004); milestones Feit–Thompson (1963), Gorenstein program, Aschbacher–Smith (2004)
formalized: false
source: ["[[source.feit-thompson-1963]]", "[[source.aschbacher-smith-2004]]", "[[source.dummit-foote]]"]
depends-on: ["[[object.sylow-theorems]]"]
used-by: []
aliases: ["object.classification-of-finite-simple-groups"]
---

**statement (plain)** — finite simple groups are the "atoms" of finite group theory: the pieces every finite group is built from, that cannot be broken down further. This theorem says the complete list of atoms is known. Each one is either a member of a handful of regular infinite families or one of exactly 26 strange exceptions. There are no others — the periodic table of finite groups is complete.

**statement (formal)** — every finite simple group is isomorphic to one of:
1. a cyclic group ℤ/pℤ of prime order;
2. an alternating group Aₙ for n ≥ 5;
3. a group of Lie type (16 infinite families — classical and exceptional Chevalier/twisted groups over finite fields);
4. one of 26 sporadic groups (the largest being the Monster); the Tits group is sometimes counted as a 27th sporadic rather than a group of Lie type.
Counting (1)–(3) as 18 infinite families plus the 26 sporadics. **[confirmed]**

**status** — proven (the "enormous theorem"); not formalized — the proof is a corpus of journal articles, not yet machine-checked (though the Feit–Thompson step has been formalized in Coq, 2012).

**proof (reference, not reproduced)** — the proof spans tens of thousands of pages across several hundred journal articles by roughly 100 authors, mostly 1955–2004. Key milestones: the **Feit–Thompson odd-order theorem** (1963) — every group of odd order is solvable, so non-abelian finite simple groups have even order [[source.feit-thompson-1963]]; Daniel Gorenstein's 16-step program (1972); a **premature completion announcement (1983)** that overlooked the quasithin case; and the gap finally closed by **Aschbacher and Smith's ~1221-page quasithin classification (2004)** [[source.aschbacher-smith-2004]], the date usually cited for the completed (first-generation) proof. **[confirmed]**

**second-generation proof** — an ongoing simplified, self-contained reproof by Gorenstein, Lyons, and Solomon (GLS), projected at roughly 5,000 pages; multiple volumes published from 1994 onward. **[confirmed]**

**relations** — the Sylow theory ([[object.sylow-theorems]]) is among the foundational tools used throughout. **[confirmed]**

**sources** — Wikipedia ("Classification of finite simple groups," "List of finite simple groups," "Sporadic group"), plus.maths.org ("An enormous theorem"); secondary surveys (Solomon, "On finite simple groups and their classification"). Counts (18 families, 26 sporadics) and the 1963 / 1983 / 2004 timeline confirmed across these. **[confirmed]**
