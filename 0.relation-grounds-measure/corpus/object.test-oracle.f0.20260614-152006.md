---
name: test-oracle
type: object
object-type: concept
essence: the mechanism that decides whether a program's output is correct — and the hard fact that often no such mechanism exists (the oracle problem)
field: [field.software-testing-n-version]
status: established
state: settled
attribution: term "test oracle" coined by Howden (1978); oracle assumption critiqued and "non-testable" programs named by Weyuker (1982)
formalized: false
source: [source.howden-1978, source.weyuker-1982]
depends-on: [object.test-case-coverage-criteria]
used-by: [object.n-version-programming]
aliases: ["object.test-oracle"]
---

**statement (plain)** — running a test only helps if you can tell whether the output was right. The thing that tells you — a person, a reference implementation, a spec, a known answer — is the **oracle**. The **oracle problem** is that for many programs there is no practical oracle: nobody knows the correct answer in advance (that's why the program was written), or checking it would cost far too much. Without an oracle, a test can be run but not judged.

**statement** — a **test oracle** is a source of expected behavior: given a test input (and starting state), it yields the correct output, or a predicate deciding whether observed output is acceptable. The **oracle assumption** is the (often tacit) premise that such an oracle is available. A program is **non-testable** when no oracle exists, or determining correctness demands extraordinary effort. A **pseudo-oracle** sidesteps this: an independently written implementation of the same spec, by different people / different methods, whose output is compared against the system under test. **[confirmed]**

**basis** — this is a *conceptual* keystone, not a theorem; "formalized: false" — there is no single canonical formula, the content is the distinction itself. Howden introduces "test oracle" as the deciding mechanism inside a testing strategy [[source.howden-1978]]. Weyuker makes the oracle's absence the central problem: she examines the reasonableness of the oracle assumption, finds it frequently unrealistic, names the class of non-testable programs, and proposes the pseudo-oracle as a partial answer [[source.weyuker-1982]]. **[confirmed]**

**lineage** — coinage of the term "test oracle" attributed to William E. Howden, "Theoretical and Empirical Studies of Program Testing," *IEEE TSE* 4(4), 1978 [[source.howden-1978]] **[confirmed as attribution]** (coinage asserted by secondary sources; original not opened). The oracle *problem* — assumption critique, non-testable programs, pseudo-oracle — is Elaine J. Weyuker, "On Testing Non-Testable Programs," *The Computer Journal* 25(4), 1982 [[source.weyuker-1982]] **[confirmed]**. The pseudo-oracle idea is the conceptual bridge to [[object.n-version-programming]] (independent versions cross-checking each other).

**sources** — [[source.howden-1978]], [[source.weyuker-1982]]. Cross-checked: Wikipedia/HandWiki "Test oracle" (definition, Howden coinage, Weyuker pseudo-oracle) + Oxford Academic record of Weyuker 1982 (venue/pages); IEEE TSE 2014 oracle-problem survey corroborates the framing.
