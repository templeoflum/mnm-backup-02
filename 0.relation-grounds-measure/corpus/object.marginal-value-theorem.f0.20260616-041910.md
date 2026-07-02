---
name: marginal-value-theorem
type: object
object-type: theorem
essence: an optimal forager should leave a depleting patch when its marginal intake rate falls to the habitat's long-term average rate
field: [field.explore-exploit-cognitive-search]
status: proven
state: settled
attribution: Eric L. Charnov (1976)
formalized: 1976
source: [source.charnov-1976, source.hills-2015]
depends-on: [object.explore-exploit-tradeoff]
used-by: []
aliases: ["object.marginal-value-theorem"]
---

**statement (plain)** — a forager exploiting patches that deplete as it feeds, and that must travel between patches, maximises its long-run intake rate by leaving each patch at the moment its instantaneous (marginal) intake rate drops to the average intake rate it could achieve over the whole habitat. Richer environments or shorter travel times imply earlier leaving; longer travel implies staying longer.

**statement (formal)** — with gain function g(t) in a patch and average travel time τ between patches, the optimal residence time t* satisfies
  g'(t*) = g(t*) / (τ + t*),
i.e. the marginal gain rate at leaving equals the overall rate (gain per patch divided by total time per patch including travel).

**proof/derivation** — derived by maximising the long-run average intake rate R = g(t)/(τ + t) over residence time t, yielding the tangent (marginal-value) condition above [[source.charnov-1976]] **[confirmed]**. The result is treated as the foundational patch-leaving rule of optimal foraging and as a template for the explore–exploit / patch-leaving structure in cognitive search [[source.hills-2015]] **[confirmed]**.

**limits** — assumes a rate-maximising forager with deterministic, smoothly decelerating gain functions and a homogeneous habitat; stochastic patches, information about patch quality, predation risk, and state-dependent currencies (e.g. survival rather than rate) require extensions or alter the prediction.
