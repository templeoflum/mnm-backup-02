---
name: p-vs-np
type: object
object-type: conjecture
essence: is verifying an answer fundamentally easier than finding one? — the open question whether P = NP
field: [field.algorithms, field.computability-theory]
status: open
state: settled
attribution: posed independently by Stephen Cook (1971) and Leonid Levin (1973); precursor in Gödel's 1956 letter to von Neumann; Clay Millennium Prize Problem (2000)
formalized: true
source: [source.cook-1971, source.levin-1973]
depends-on: [object.np-completeness-cook-levin-theorem, object.landau-notation]
used-by: []
aliases: ["object.p-vs-np"]
---

**statement (plain)** — if you can *check* a proposed solution quickly, can you also *find* one quickly? P is the class of problems solvable quickly (in polynomial time); NP is the class whose solutions can be verified quickly. P vs NP asks whether these two classes are the same. Almost everyone believes P ≠ NP, but no one has proved it.

**statement (formal)** — P is the class of decision problems decidable by a deterministic Turing machine in time O(n^k) for some constant k. NP is the class of decision problems for which a "yes" instance admits a certificate verifiable by a deterministic Turing machine in polynomial time (equivalently, decidable by a nondeterministic Turing machine in polynomial time). Clearly P ⊆ NP. The question: **does P = NP?** **[confirmed]**

**status** — open. One of the seven Clay Mathematics Institute Millennium Prize Problems (2000), carrying a US$1,000,000 prize. Widely conjectured P ≠ NP. **[confirmed]**

**method / significance** — by the [[object.np-completeness-cook-levin-theorem]], if any single NP-complete problem (e.g. SAT) were in P, then P = NP; so the entire question reduces to the tractability of one NP-complete problem. A proof of P ≠ NP would establish that some problems are inherently easy to verify yet hard to solve — the asymmetry underlying modern cryptography. **[confirmed]**

**lineage** — the precise problem was introduced by Stephen Cook in 1971 ("The Complexity of Theorem-Proving Procedures") [[source.cook-1971]] and independently by Leonid Levin in 1973 ("Universal Search Problems") [[source.levin-1973]]. **[confirmed]** A historical precursor is Kurt Gödel's 1956 letter to John von Neumann, asking whether theorem-proving could be done in linear or quadratic time — essentially the P vs NP question avant la lettre. **[candidate, attribution as precursor: documented but the letter did not frame P/NP formally]**

**door** — [[source.clrs]] ch. 34 (NP-completeness); [[source.erickson-algorithms]] (NP-hardness chapter); Clay Institute official problem description by S. Cook.

**sources** — [[source.cook-1971]], [[source.levin-1973]]; Wikipedia "P versus NP problem"; Clay Mathematics Institute Millennium Problems.
