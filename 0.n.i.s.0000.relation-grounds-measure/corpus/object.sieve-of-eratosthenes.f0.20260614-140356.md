---
name: sieve-of-eratosthenes
type: object
object-type: algorithm
essence: cross out multiples of each prime in turn; what survives below n is exactly the primes
field: [field.sieve-methods, field.analytic-number-theory]
status: established
state: settled
attribution: Eratosthenes of Cyrene (c. 276–194 BC); earliest surviving description in Nicomachus of Gerasa, Introduction to Arithmetic (c. 100 CE)
formalized: false
source: [source.nicomachus-arithmetic, source.cojocaru-murty-2005]
depends-on: []
used-by: [object.brun-theorem, object.selberg-sieve]
---

**statement (plain)** — to find every prime up to n, list the integers 2, 3, …, n. Take the first unmarked number (2), call it prime, and cross out all of its multiples. Move to the next unmarked number, call it prime, cross out its multiples. Repeat. When you reach a prime p with p² > n you may stop — every remaining unmarked number is prime.

**statement (formal)** — for the set {2, …, n}, iteratively for each p that survives in increasing order, delete {2p, 3p, 4p, …} ≤ n. The survivors are exactly the primes ≤ n. The optimization: when processing p, deletion may begin at p² (every smaller multiple kp with k < p was already deleted by a smaller prime factor of k); hence the outer loop runs only while p ≤ √n. Running time is O(n log log n) bit-/word-operations and O(n) space. **[confirmed]**

**proof (correctness)** — a number m ∈ {2, …, n} is composite iff it has a prime factor p ≤ √m ≤ √n; the procedure deletes m exactly when it reaches that p. Conversely a prime is divisible by no smaller integer > 1, so it is never deleted. The log log n factor follows from Mertens' estimate Σ_{p ≤ √n} 1/p ∼ log log n (see [[object.mertens-theorems]]). **[confirmed]**

**lineage** — attributed to Eratosthenes of Cyrene (c. 276–194 BC), chief librarian at Alexandria. Eratosthenes' own account does not survive; the earliest surviving description and the attribution come from [[source.nicomachus-arithmetic]] (*Introduction to Arithmetic*, c. 100 CE). **[confirmed as attribution]** — the name and method are uncontested, but the chain rests on a later secondary witness, not Eratosthenes' own text.

**place** — the ancient namesake of the field. The modern combinatorial sieve ([[object.brun-theorem|Brun]], [[object.selberg-sieve|Selberg]]) generalizes its inclusion–exclusion logic from listing primes to *counting* primes and almost-primes. Door: [[source.cojocaru-murty-2005]].

**sources** — [[source.nicomachus-arithmetic]] (attribution); [[source.cojocaru-murty-2005]] (door text). Statement and complexity cross-checked against Wikipedia (Sieve of Eratosthenes) and standard algorithms references. **[confirmed]**
