---
name: bounded-gaps-theorem
type: object
object-type: theorem
essence: infinitely many consecutive primes differ by a bounded amount — liminf of prime gaps is finite (≤ 246 unconditionally)
field: [field.prime-gap-statistics, field.analytic-number-theory, field.sieve-methods]
status: proven
state: settled
attribution: Yitang Zhang (2013, bound 70 million); James Maynard and (independently) Terence Tao (2013–14, ≤ 600); Polymath8 (2014, ≤ 246)
formalized: false
source: [source.zhang-2014, source.maynard-2015, source.polymath8b-2014]
depends-on: [object.twin-prime-conjecture]
used-by: []
---

**statement (plain)** — there is some finite number N such that infinitely many pairs of consecutive primes are no more than N apart. The gap of size 2 (twin primes) isn't yet known to recur forever, but SOME bounded gap does. The smallest N currently proven is 246.

**statement (formal)** — liminf_{n→∞} (p_{n+1} − p_n) < ∞. Quantitatively, liminf_{n→∞} (p_{n+1} − p_n) ≤ 246 (unconditional). Under the generalized Elliott–Halberstam conjecture, ≤ 6. **[confirmed]**

**status** — proven (2013). A finite bound is a theorem; the value 246 is the current record, and 2 (the twin prime conjecture [[object.twin-prime-conjecture]]) is the target the method cannot yet reach.

**proof / lineage** — a three-stage breakthrough:
1. **Yitang Zhang** (announced April 2013; *Annals of Mathematics* 179 (2014)) proved liminf (p_{n+1} − p_n) < 7×10⁷ — the FIRST finite bound — by refining Goldston–Pintz–Yıldırım (GPY) with a stronger Bombieri–Vinogradov estimate over smooth moduli. [[source.zhang-2014]] **[confirmed]**
2. **James Maynard** and, **independently and contemporaneously, Terence Tao** (late 2013; Maynard, *Annals* 181 (2015)) introduced a multidimensional Selberg sieve giving the far smaller ≤ 600, plus liminf (p_{n+m} − p_n) < ∞ for every m. [[source.maynard-2015]] **[confirmed]**
3. **Polymath8** (D.H.J. Polymath, 2014) optimized the Maynard–Tao sieve to the record ≤ 246. (The earlier Polymath8a stage had pushed Zhang's own argument to ~4680.) [[source.polymath8b-2014]] **[confirmed]**

**relation to GPY** — Goldston, Pintz & Yıldırım (2005/2009) proved liminf (p_{n+1} − p_n)/log p_n = 0 (gaps infinitely often much smaller than average) but could not get a finite bound; Zhang's and Maynard's work is built on their sieve. **[confirmed]**

**door** — Zhang (2014), Maynard (2015), and the open Polymath8 papers on arXiv; the Polymath8 retrospective (Tao).
