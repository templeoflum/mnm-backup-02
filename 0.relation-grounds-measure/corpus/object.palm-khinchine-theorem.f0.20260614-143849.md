---
name: palm-khinchine-theorem
type: object
object-type: theorem
essence: superposing many independent, individually-sparse renewal processes yields a Poisson process in the limit — the existence/justification of the Poisson model
field: ["[[field.point-process-statistics]]"]
status: proven
state: settled
attribution: C. Palm (1943) and A. Y. Khinchin (1955/1960); "Palm–Khinchine theorem"
formalized: true
source: ["[[source.palm-1943]]", "[[source.khinchin-1955]]", "[[source.daley-vere-jones-1988]]"]
depends-on: ["[[object.poisson-point-process]]"]
used-by: []
aliases: ["object.palm-khinchine-theorem"]
---

**statement (plain)** — pile together a large number of independent streams of events, where no single stream contributes much (each is "sparse"), and the combined stream behaves like a Poisson process — even though none of the individual streams need be Poisson. This is the deep reason the Poisson process is the default model for arrivals: a Poisson superposition limit. It is the point-process counterpart of the central-limit idea — a "law of small numbers / law of rare events" for streams of events.

**statement (formal)** — for each m, let N_{m,1},…,N_{m,m} be independent renewal (or more generally point) processes superposed into N_m = Σ_i N_{m,i}. Suppose
1. the total intensity stays bounded/convergent: Σ_i λ_{m,i} → λ ∈ (0,∞) as m → ∞;
2. uniform asymptotic negligibility: for every t > 0, max_i P(N_{m,i}((0,t]) ≥ 1) → 0 as m → ∞ (each component becomes individually sparse).
Then N_m converges (in distribution, as a point process) to a Poisson process of intensity λ as m → ∞. **[confirmed]**

**status** — proven (a limit theorem; the modern general statement is the Grigelionis / Poisson-convergence form of superposition).

**proof** — reference: Daley & Vere-Jones, *An Introduction to the Theory of Point Processes* (superposition / Poisson limit theorems) [[source.daley-vere-jones-1988]]; classical treatment in Khinchin's queueing monograph [[source.khinchin-1955]].

**lineage** — the result is jointly attributed to C. Palm (1943) [[source.palm-1943]] and A. Y. Khinchin, whose *Mathematical Methods in the Theory of Queueing* (Russian 1955; English translation 1960) gave the systematic treatment [[source.khinchin-1955]]; hence **Palm–Khinchine theorem** (also transliterated Palm–Khintchine). This is the keystone here called the "Khinchin existence theorem" — Khinchin's justification of the Poisson stream as the universal limit of sparse superpositions. **[confirmed as attribution]** (corroborated by Wikipedia "Palm–Khintchine theorem" + Daley & Vere-Jones; primary works not opened).

Note — distinct from the Wiener–Khinchin theorem (spectral density ↔ autocorrelation) and the Birkhoff–Khinchin ergodic theorem; same author, different results.

**sources** — [[source.palm-1943]], [[source.khinchin-1955]], [[source.daley-vere-jones-1988]].
