---
name: kanban
type: object
object-type: concept
essence: a card (or bin, or ticket) that travels back upstream when a container empties, authorizing replenishment — the pull signal that runs just-in-time
field: ["[[field.toyota-production-system]]"]
status: established
state: settled
attribution: Taiichi Ohno at Toyota, inspired by American supermarket restocking; the mechanism of just-in-time
formalized: false
source: ["[[source.ohno-1988]]"]
depends-on: ["[[object.just-in-time]]"]
used-by: []
---

**statement (plain)** — kanban (Japanese for "signboard") is the shop-floor signal that makes a pull system work. A card attached to a container of parts travels back upstream when the container empties, authorizing exactly one replenishment — so production is triggered by *actual downstream consumption*, never a central forecast. The fixed number of cards is the built-in work-in-progress limit, capping inventory and exposing problems.

**statement (mechanism)** — the concrete implementation of just-in-time [[object.just-in-time]]; in stigmergy terms it is textbook **qualitative marker-based** stigmergy [[object.sematectonic-vs-sign-based-stigmergy]] — a dedicated signal (the card) deposited in a shared workflow that coordinates upstream and downstream stages with minimal talk.

**basis** — developed by Ohno at Toyota [[source.ohno-1988]]; standard across lean production and adapted to software (kanban boards, WIP limits). *Support* — foundational to pull-based flow. *Limits* — a stale or lost card misroutes the system; tightly-coupled pull is fragile to demand spikes without buffer. **[confirmed]**

**sources** — [[source.ohno-1988]] (the mechanism, first-hand). **[confirmed]**
