---
name: gradient-descent
type: object
object-type: algorithm
essence: step downhill — repeatedly move in the direction of the negative gradient to minimize a function
field: ["[[field.numerical-optimization]]", "[[field.numerical-analysis]]"]
status: established
state: settled
attribution: A.-L. Cauchy (1847); independently J. Hadamard (1907); convergence first studied by H. B. Curry (1944)
formalized: true
source: ["[[source.cauchy-1847]]", "[[source.nocedal-wright-1999]]", "[[source.boyd-vandenberghe-2004]]"]
depends-on: []
used-by: ["[[object.kkt-conditions]]"]
---

**statement (plain)** — to find where a smooth function is smallest, start somewhere and keep stepping in the direction that goes downhill steepest — the opposite of the gradient. Each step lowers the value (if the step is small enough); repeat until the gradient is near zero. The simplest and oldest of the iterative descent methods, and the conceptual root of most unconstrained optimization.

**statement (formal)** — to minimize a differentiable f: ℝⁿ → ℝ, iterate
x_{k+1} = x_k − η_k ∇f(x_k),
where η_k > 0 is the step size (learning rate). The negative gradient −∇f(x_k) is the direction of steepest local decrease. If f is convex with L-Lipschitz gradient and η_k = 1/L (or a suitable line search is used), the iterates converge to a global minimizer; for general smooth f one obtains convergence to a stationary point. A step too small stalls; a step too large can overshoot and diverge. **[confirmed]**

**status** — established (standard algorithm; convergence guarantees proven under stated assumptions).

**method** — the descent direction is justified by the first-order observation that f decreases fastest along −∇f. Variants differ in step-size rule (fixed, exact line search, Armijo/Wolfe backtracking) and in stochastic/momentum/accelerated forms; the bare method is first-order (gradient only), in contrast to second-order [[object.newtons-method-optimization]].

**lineage** — introduced by A.-L. Cauchy in his note "Méthode générale pour la résolution des systèmes d'équations simultanées," *Comptes Rendus* 25 (1847):536–538 [[source.cauchy-1847]], as a way to attack nonlinear systems by following the negative gradient. Jacques Hadamard independently proposed a similar method in 1907; convergence for nonlinear problems was first studied by Haskell B. Curry in 1944. **[confirmed]**

**sources** — origin: [[source.cauchy-1847]]; codification/door: [[source.nocedal-wright-1999]] (Nocedal & Wright, *Numerical Optimization*, line-search methods); convex treatment: [[source.boyd-vandenberghe-2004]]. Cross-checked against Wikipedia "Gradient descent" and Springer/LBNL historical surveys. Distinct from the asymptotics-method object [[object.method-of-steepest-descent]] (saddle-point/Laplace), which shares the name but not the subject.
