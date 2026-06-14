---
name: laurent-series
type: object
object-type: theorem
essence: a function holomorphic on an annulus expands as a doubly-infinite power series in positive and negative powers
field: [field.complex-analysis]
status: proven
state: float
attribution: P. A. Laurent (1843); independently K. Weierstrass (1841, published posthumously 1894)
formalized: true
source: [source.laurent-1843, source.weierstrass-1841, source.ahlfors-1953]
depends-on: [[object.cauchy-integral-formula], [object.cauchy-integral-theorem]]
used-by: [[object.residue-theorem], field.complex-analysis]
---

**statement (plain)** — a Taylor series expands a function in non-negative powers of (z − a) and works only where the function is holomorphic right up to the centre. But near a singularity, or on a ring-shaped (annular) region with a hole, you also need negative powers — terms like 1/(z−a), 1/(z−a)², and so on. The Laurent series provides exactly that: any function holomorphic on an annulus around a point can be written as a single doubly-infinite series running over all powers, positive and negative. The negative-power part is what encodes the singularity; its 1/(z−a) coefficient is the residue.

**statement (formal)** — let f be holomorphic on an annulus A = { z : r < |z − a| < R } (0 ≤ r < R ≤ ∞). Then on A,
f(z) = Σ_{n=−∞}^{∞} cₙ (z − a)ⁿ, with cₙ = (1 / 2πi) ∮_γ f(ζ)/(ζ − a)ⁿ⁺¹ dζ,
where γ is any positively-oriented simple closed curve in A around a. The series converges absolutely and uniformly on compact subsets of A; the expansion is unique. The coefficient c₋₁ is the residue of f at a. **[confirmed]**

**status** — proven.

**proof (reference)** — apply the [[object.cauchy-integral-formula]] on the annulus bounded by two concentric circles; expand the inner-circle kernel in negative powers and the outer in positive powers (geometric series), then combine. Standard treatment: Ahlfors, *Complex Analysis*, ch. 5 [[source.ahlfors-1953]]. **[confirmed]**

**lineage** — published by P. A. Laurent in an 1843 memoir submitted (late) to the Académie des Sciences Grand Prix; Cauchy reported on it and noted it followed from his 1840 work. K. Weierstrass had the result independently in an 1841 manuscript, unpublished until his 1894 collected works — so Laurent has publication priority and the name, Weierstrass the earlier (private) discovery. Carried as lineage. **[confirmed]**

**sources** — Wikipedia, "Laurent series" and "Pierre Alphonse Laurent"; MacTutor biography of Pierre Laurent (St Andrews); arXiv:2606.06542 (historical study of Laurent's series); Ahlfors, *Complex Analysis* [[source.ahlfors-1953]].
