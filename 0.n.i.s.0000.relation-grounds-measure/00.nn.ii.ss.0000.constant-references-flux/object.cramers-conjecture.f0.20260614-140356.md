---
name: cramers-conjecture
type: object
object-type: conjecture
essence: prime gaps are at most about (log p)² — the conjectured upper limit on how large gaps get, from a probabilistic model of the primes
field: [field.prime-gap-statistics, field.analytic-number-theory]
status: open
state: float
attribution: Harald Cramér (1936)
formalized: false
source: [source.cramer-1936, source.granville-1995]
depends-on: [object.prime-number-theorem]
used-by: []
---

**statement (plain)** — the gaps between consecutive primes never grow much faster than the square of the logarithm of the prime. Big gaps exist, but they are bounded: near a prime p, the next prime is never more than roughly (log p)² further on. The conjecture comes from treating the primes as if each integer n were "prime" at random with probability 1/log n (the Cramér random model).

**statement (formal)** — Cramér (1936) conjectured p_{n+1} − p_n = O((log p_n)²). His heuristic supports the stronger form
lim sup_{n→∞} (p_{n+1} − p_n)/(log p_n)² = 1,
and this stronger statement is often what is meant by "Cramér's conjecture." **[confirmed]**

**status** — **open** (none of the forms proven or disproven). Moreover the strong constant 1 is now widely doubted (see below) — but no form has been refuted.

**the Cramér random model** — assume each integer n is independently "prime" with probability 1/log n. Under this model, the maximal gap up to x is (log x)² with probability one, giving the conjecture. The model is heuristic, not a theorem about the actual primes. [[source.cramer-1936]] **[confirmed]**

**contest (Cramér–Granville)** — A. Granville (1995) argued, via Maier's theorem (1985, on the failure of the model in short intervals), that the constant should be larger than 1: the refined heuristic predicts lim sup (p_{n+1} − p_n)/(log p_n)² ≥ 2e^{−γ} ≈ 1.1229. So the strong form (= 1) is widely believed FALSE, though unproven either way [[source.granville-1995]]. **[confirmed]**

**what is known** — the best proven UPPER bound on gaps is far weaker than (log p)²: there is a prime in [x − x^{0.525}, x] for large x, so g_n ≪ p_n^{0.525} (Baker–Harman–Pintz, "The difference between consecutive primes, II," *Proc. LMS* 83 (2001), 532–562). On the LOWER side, the maximal gap is much smaller than (log p)²: Ford–Green–Konyagin–Tao and, independently, Maynard (2014; refined jointly with the same authors, 2016 — settling Erdős's $10,000 problem, methods of Erdős–Rankin) gave the current record large-gap lower bound. The conjecture's (log p)² scale sits far above both proven bounds, unreached from either side. **[confirmed]**

**door** — Soundararajan's survey; Granville (1995); Cramér (1936).
