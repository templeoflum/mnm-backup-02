---
name: newtons-method
type: object
object-type: method
essence: follow the tangent to the root — iterate x ← x − f(x)/f′(x), correct digits roughly double each step
field: ["[[field.numerical-analysis]]"]
status: established
state: settled
attribution: Newton (1669, pub. 1711) & Raphson (1690) for polynomials; Simpson (1740) gave the calculus/derivative form for general equations and systems
formalized: true
source: ["[[source.suli-mayers-2003]]", "[[source.trefethen-bau-1997]]"]
depends-on: []
used-by: []
aliases: ["object.newtons-method"]
---

**statement (plain)** — to find where a smooth function crosses zero, start with a guess, draw the tangent line there, and take the point where that tangent hits the x-axis as your next guess. Repeat. Near a simple root it converges very fast — the number of correct digits roughly doubles each step.

**statement (formal)** — given f differentiable with a simple root r (f(r) = 0, f′(r) ≠ 0), iterate
x_{n+1} = x_n − f(x_n)/f′(x_n).
If x₀ is sufficiently close to r, the iterates converge **quadratically**: |x_{n+1} − r| ≤ C |x_n − r|² for some constant C, where C relates to f″(r)/(2 f′(r)). **[confirmed]**

**method/derivation** — the iteration is the first-order Taylor model of f at x_n: solving the linear approximation f(x_n) + f′(x_n)(x − x_n) = 0 for x gives the update. Generalizes to systems F(x) = 0 by replacing f′ with the Jacobian J: x_{n+1} = x_n − J(x_n)⁻¹ F(x_n) (Newton's method in several variables). Caveats: needs a good starting guess; quadratic rate degrades to linear at multiple roots; can diverge or cycle (its basins of attraction are fractal).

**lineage** — Isaac Newton applied a version to polynomials in *De analysi* (written 1669, published 1711); first published account in Wallis's *Treatise of Algebra* (1685). Joseph Raphson gave a simplified iterative form for polynomials in *Analysis aequationum universalis* (1690) — hence "Newton–Raphson." Thomas Simpson (1740) was first to state it as a calculus-based iteration (using the derivative) for general nonlinear equations and to extend it to systems; the common "Newton's method of approximation" attribution to its modern form is, per the history-of-science literature, partly a Simpson myth. **[confirmed]** [[object.epsilon-delta-limit]] underpins the convergence statement.

**sources** — [[source.suli-mayers-2003]] (door, root-finding chapter); [[source.trefethen-bau-1997]]; corroborated by MacTutor / Wikipedia history and the British Journal for the History of Science (Simpson myth). **[confirmed]**
