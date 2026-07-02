---
name: littles-law
type: object
object-type: theorem
essence: In steady state, the mean number in a queueing system equals arrival rate times mean sojourn time.
field: ["[[field.queueing-theory]]"]
status: proven
state: settled
attribution: John D. C. Little (1961); the relation was used earlier, Little gave the first general proof
formalized: 1961
source: ["[[source.little-1961]]", "[[source.gross-harris]]"]
depends-on: []
used-by: []
---

# object.littles-law

**Statement (plain):** For a queueing system in stationary operation, the long-run average number of items in the system equals the long-run average arrival rate multiplied by the average time an item spends in the system. The result holds regardless of the arrival-time or service-time distributions, the number of servers, or the queueing discipline. [confirmed]

**Statement (formal):** L = λW, where L is the mean number of units in the system, λ is the mean arrival rate, and W is the mean time a unit spends in the system. (Restricting "the system" to the waiting line alone gives the companion form L_q = λW_q.)

**Proof / derivation:** Little (1961) proved the relation under the assumptions that L, λ, and W are finite, the corresponding stochastic processes are strictly stationary, and the arrival process is metrically transitive with nonzero mean. The argument is distribution-free and discipline-free, depending only on stationarity, not on the internal structure of arrivals or service. [confirmed via [[source.little-1961]]] It is a genuine theorem — a proven mathematical result, not an empirical regularity — and is presented as such in standard texts. [confirmed via [[source.gross-harris]]]
