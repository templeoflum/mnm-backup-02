---
name: lagrange-continued-fraction-theorem
type: object
object-type: theorem
essence: a real number has an eventually-periodic continued fraction iff it is a quadratic irrational
field: [field.continued-fractions, field.diophantine-approximation]
status: proven
state: verified
attribution: J.-L. Lagrange (1770) proved the "if" direction; converse due to Euler (1737/1744) — sometimes called the Euler–Lagrange theorem
formalized: false
source: [source.lagrange-1770, source.euler-1737-cf, source.khinchin-cf, source.perron-1913, source.hardy-wright-1938]
depends-on: [object.continued-fraction-expansion, object.convergents-best-approximation]
used-by: []
---

**statement (plain)** — the continued fraction of a number eventually repeats forever in a cycle exactly when that number is a quadratic irrational — a root of a quadratic equation with integer coefficients that isn't itself rational (for example √2 = [1; 2, 2, 2, …], or the golden ratio φ = [1; 1, 1, 1, …]). Repeating block ⟺ quadratic.

**statement (formal)** — let x ∈ ℝ be irrational with simple continued fraction [a₀; a₁, a₂, …]. Then the sequence (aₙ) is *eventually periodic* (there exist N and p with aₙ₊ₚ = aₙ for all n ≥ N) **if and only if** x is a *quadratic irrational*, i.e. x is irrational and satisfies αx² + βx + γ = 0 for some integers α, β, γ with α ≠ 0.
A sharpening (Galois, 1828): the expansion is *purely* periodic ([a₀; a₁, …, aₖ̄ ] with the bar from the start) iff x is a *reduced* quadratic irrational (x > 1 and its conjugate lies in (−1, 0)). **[confirmed]**

**proof** — two directions:
- **periodic ⟹ quadratic (Euler):** a purely periodic CF satisfies x = [a₀;…,a_{k-1}, x], i.e. x = (p_{k-1} x + p_{k-2})/(q_{k-1} x + q_{k-2}), a quadratic in x; an eventually periodic CF differs from a purely periodic one by a Möbius transform with integer coefficients, preserving the quadratic-irrational class. This direction is due to Euler. [[source.euler-1737-cf]]
- **quadratic ⟹ periodic (Lagrange):** if x solves a quadratic with integer coefficients, the complete quotients xₙ all solve quadratics whose integer coefficients stay bounded (using the error bracket for convergents); finitely many such triples means some complete quotient recurs, forcing periodicity. This is the hard direction, proved by Lagrange (1770). [[source.lagrange-1770]]
Full proofs in Khinchin §4 [[source.khinchin-cf]]; Hardy & Wright ch. X [[source.hardy-wright-1938]]; Perron [[source.perron-1913]]. **[confirmed]**

**lineage** — the converse ("only if": periodic ⟹ quadratic) was known to Euler (1737/1744); Lagrange (1770, Berlin Academy) supplied the direct theorem ("if": quadratic ⟹ periodic). Because both halves are needed for the biconditional, Encyclopedia of Mathematics labels it the **Euler–Lagrange theorem**; it is most commonly cited as **Lagrange's theorem**. [[source.euler-1737-cf]] [[source.lagrange-1770]] **[confirmed]**

**door** — Khinchin, *Continued Fractions* [[source.khinchin-cf]]; Hardy & Wright [[source.hardy-wright-1938]].

**sources** — Wolfram MathWorld, "Lagrange's Continued Fraction Theorem" (statement, 1770); Encyclopedia of Mathematics, "Continued fraction" (Euler–Lagrange theorem); MacTutor "Continued fractions" topic and Lagrange biography (1770 attribution). Cross-confirmed across MathWorld + Encyclopedia of Mathematics + MacTutor.
