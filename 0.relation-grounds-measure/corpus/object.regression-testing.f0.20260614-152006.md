---
name: regression-testing
type: object
object-type: concept
essence: re-run prior tests after a change to catch features that used to work and now don't
field: [field.software-testing-n-version]
status: established
state: settled
attribution: practice rooted in software maintenance (1960s–70s); cost framed by Brooks (1975); no single coiner
formalized: false
source: [source.brooks-1975, source.myers-1979]
depends-on: [object.test-case-coverage-criteria]
used-by: []
---

**statement (plain)** — every time you change software — fix a bug, add a feature, swap a config — you risk breaking something that already worked. That breakage is a "regression." Regression testing is the discipline of re-running your earlier tests (especially ones that previously caught bugs) after each change, to confirm the old behavior still holds. As the test suite grows, you can't always re-run everything, so you select, minimize, or prioritize which tests to run.

**statement** — **regression testing**: the practice of re-executing previously passing functional and non-functional tests after a modification, to confirm that existing behavior is preserved. A **regression** is functionality that worked before a change and fails after it. Because exhaustive re-execution gets costly, three strategies temper it: **retest-all** (run the whole suite), **regression test selection** (run a behavior-relevant subset), and **test-case prioritization** (order tests to surface faults earliest); these combine. **[confirmed]**

**basis** — a *practice*, not a theorem ("formalized: false"). Its rationale is the maintenance-cost observation: fixing one fault has a real chance of introducing another, and maintenance demands far more system testing per statement than fresh development [[source.brooks-1975]]. Good practice records the test that exposed a bug and re-runs it after later changes — making regression testing an accumulating, version-spanning activity. It rests on the test-case/coverage machinery (see [[object.test-case-coverage-criteria]]): the suite re-run is the body of test cases, and selection/prioritization are coverage-driven choices. **[confirmed]**

**lineage** — no single coiner. The practice grew out of software maintenance in the 1960s–70s as systems and change rates rose; "regression" carries the Latin *regressus* ("a going back") — the program reverting to a worse state. Frederick P. Brooks Jr., *The Mythical Man-Month* (1975), is the named early articulation of the cost that motivates it [[source.brooks-1975]] **[confirmed as attribution]**. Glenford J. Myers, *The Art of Software Testing* (1979), sits in the same door of the discipline [[source.myers-1979]]. Selection/minimization/prioritization research matured through the 1990s–2000s; carried here as established practice, attribution diffuse. **[confirmed]**

**sources** — [[source.brooks-1975]], [[source.myers-1979]]. Cross-checked: Wikipedia "Regression testing" (definition, regression = "going back," Brooks p. 122, retest-all / selection / prioritization taxonomy) + multiple industry/IBM/GitHub glossaries corroborating the definition and strategies. No single-origin claim is made.
