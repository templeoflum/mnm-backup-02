---
name: test-case-coverage-criteria
type: object
object-type: concept
essence: a test exercises the program with chosen inputs; a coverage criterion is the rule that says when enough has been exercised
field: [field.software-testing-n-version]
status: established
state: verified
attribution: test-case design popularized by Myers (1979); adequacy/coverage theory framed by Goodenough & Gerhart (1975); structural coverage (statement/branch/path) older folklore of control-flow testing
formalized: true
source: [source.myers-1979, source.goodenough-gerhart-1975]
depends-on: []
used-by: [object.regression-testing, object.test-oracle]
---

**statement (plain)** — a test case is a specific input (plus the state it runs in) paired with the result you expect, run to expose faults. Because you can never try every input, a coverage criterion is the stopping rule: it names what parts of the program must be exercised — every statement, every branch, every path — before testing is "adequate." Coverage measures how much of that target the test suite actually hit.

**statement** — let P be a program and T a finite test set. A **coverage / adequacy criterion** C is a predicate (or a fraction in [0,1]) over (P, T) stating which structural elements T must exercise. Canonical control-flow criteria, in increasing strength: **statement coverage** (every statement executed at least once) ⊂ **branch/decision coverage** (every branch outcome taken) ⊂ **path coverage** (every executable control path traversed). For structured programs branch coverage subsumes statement coverage; full path coverage is generally infeasible (loops give unboundedly many paths). **[confirmed]**

**basis** — there is no proof here; the content is the *framing*. Myers fixes the discipline's stance — "testing is the process of executing a program with the intent of finding errors" — and treats test-case design (equivalence partitioning, boundary-value analysis, black-box vs. white-box) as the core craft, asking which subset of all possible cases is likeliest to find the most errors [[source.myers-1979]]. Goodenough & Gerhart give the theoretical scaffold: a *theory of test data selection* built on test **reliability** and **validity**, and the observation that exercising all statements, predicates, or paths does not by itself make a test reliable [[source.goodenough-gerhart-1975]]. **[confirmed]**

**lineage** — the psychological/practical framing of test cases is Glenford J. Myers, *The Art of Software Testing* (Wiley, 1979) [[source.myers-1979]]; the field had earlier roots in the 1972 Chapel Hill symposium and Bill Hetzel [[source.hetzel-1972]]. The adequacy-criterion theory is John B. Goodenough & Susan L. Gerhart, "Toward a Theory of Test Data Selection," *IEEE Transactions on Software Engineering* 1(2), June 1975, pp. 156–173 [[source.goodenough-gerhart-1975]]. Statement/branch/path coverage are older control-flow-testing folklore with no single coiner; carried here as established practice, not pinned to one author. **[confirmed]**

**sources** — [[source.myers-1979]], [[source.goodenough-gerhart-1975]], [[source.hetzel-1972]]. Cross-checked: Myers definition + ScienceDirect/academic surveys on coverage criteria (statement ⊂ branch ⊂ path, path infeasibility); Goodenough–Gerhart venue/pages via IEEE/Semantic Scholar.
