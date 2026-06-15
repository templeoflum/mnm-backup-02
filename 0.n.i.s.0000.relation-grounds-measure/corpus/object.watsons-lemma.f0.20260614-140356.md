---
name: watsons-lemma
type: object
object-type: lemma
essence: the small-t behaviour of phi fixes the large-x asymptotics of its Laplace integral, term by term via the Gamma function
field: [field.asymptotic-analysis]
status: proven
state: verified
attribution: G. N. Watson (1918)
formalized: true
source: [source.watson-1918, source.de-bruijn-1958, source.bender-orszag]
depends-on: [object.asymptotic-expansion, object.laplaces-method, object.landau-notation]
used-by: []
---

**statement (plain)** — for an integral of e^{−xt} times a function φ(t), only the behaviour of φ near t = 0 matters when x is large. So if you expand φ near zero as a series of powers of t, you can read off the whole large-x asymptotic series of the integral, term by term, each power of t contributing a Gamma-function coefficient over a power of x.

**statement (formal)** — let φ(t) = t^λ g(t) with λ > −1, g infinitely differentiable near 0 with g(0) ≠ 0, and either |φ(t)| < K e^{bt} for all t > 0 or ∫₀ᵀ |φ(t)| dt < ∞. Then, with the small-t expansion φ(t) ∼ Σ_{n≥0} aₙ t^{λ+n} (so aₙ = g^{(n)}(0)/n!),
  ∫₀ᵀ e^{−xt} φ(t) dt ∼ Σ_{n=0}^∞ aₙ · Γ(λ + n + 1) / x^{λ+n+1}   as x → ∞ (x > 0).
(Equivalently for a full Laplace transform ∫₀^∞.) **[confirmed]**

**proof** — substitute the small-t expansion and integrate term by term against ∫₀^∞ e^{−xt} t^{λ+n} dt = Γ(λ+n+1)/x^{λ+n+1}; the tail t ≥ T and the remainder after N terms are exponentially / lower-order small under the growth hypotheses, giving the asymptotic (not generally convergent) series. It is the rigorous engine behind [[object.laplaces-method]]. Full proof in [[source.de-bruijn-1958]]; original in [[source.watson-1918]] (p. 133). **[confirmed]**

**lineage** — proved by G. N. Watson (1918), "The harmonic functions associated with the parabolic cylinder," *Proc. London Math. Soc.* (2) 17, 116–148 [[source.watson-1918]]. **[confirmed as attribution]**

**door** — [[source.bender-orszag]] §6.3; [[source.de-bruijn-1958]] ch. 4.
