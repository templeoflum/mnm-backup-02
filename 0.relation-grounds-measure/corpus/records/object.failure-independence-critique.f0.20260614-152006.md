---
name: failure-independence-critique
type: object
object-type: principle
essence: independently written versions do not fail independently — coincident faults occur more than chance predicts, so N-version reliability gains are overstated
field: ["[[field.software-testing-n-version]]"]
status: established
state: settled
attribution: John C. Knight & Nancy G. Leveson (1986)
formalized: false
source: ["[[source.knight-leveson-1986]]", "[[source.avizienis-chen-1977]]"]
depends-on: ["[[object.n-version-programming]]"]
used-by: []
---

**statement (plain)** — N-version programming only pays off if the separate versions fail on *different* inputs. Knight and Leveson tested that. They had many programmers independently write the same program, then ran all the versions against a million test inputs. The versions did share faults: they failed together on the same inputs far more often than chance would predict. So the independence assumption is false in general, and the reliability you can claim from N versions is less than the theory promises.

**statement** — the **failure-independence critique**: in N-version programming the versions' failures are *not* statistically independent. Knight & Leveson collected 27 programs written independently from one specification (a simple anti-missile / launch-interceptor problem) and ran each against ~1,000,000 random test cases. Although individual programs were of high quality (few faults), faults recurred across versions and a statistical test rejected the hypothesis of independent failures at high significance. Consequence: models that compute N-version reliability assuming independence overestimate it. **[confirmed]**

**basis** — an empirical/statistical result framed as a standing *principle*, not a theorem ("formalized: false"). It does not prove NVP worthless; it falsifies the **independence conjecture** that NVP's reliability arithmetic rests on (see [[object.n-version-programming]]). The mechanism: humans tend to make the same mistakes on the same hard parts of a problem, so "hard" inputs induce correlated failures regardless of independent effort. The finding provoked a long methodological debate (replies, re-analyses, defenses of design diversity), which is why it is carried as a contested-but-confirmed lineage rather than a closed verdict. **[confirmed]**

**lineage** — John C. Knight & Nancy G. Leveson, "An Experimental Evaluation of the Assumption of Independence in Multiversion Programming," *IEEE Transactions on Software Engineering*, Vol. 12, No. 1 (January 1986), pp. 96–109 [[source.knight-leveson-1986]] **[confirmed]**. Directly contests the conjecture of [[source.avizienis-chen-1977]]. Subsequent exchange — Knight & Leveson's own "A Reply to the Criticisms of the Knight & Leveson Experiment" — is part of the lineage; the core statistical finding has held. **[confirmed]**

**sources** — [[source.knight-leveson-1986]], [[source.avizienis-chen-1977]]. Cross-checked: Wikipedia "N-version programming" (title, venue Vol. 12 No. 1, Jan 1986, pp. 96–109, "failed statistically") + the paper PDF / Semantic Scholar record (27 programs, ~1M test cases, lack of independence); MIT sunnyday.mit.edu reply paper corroborates the debate.
