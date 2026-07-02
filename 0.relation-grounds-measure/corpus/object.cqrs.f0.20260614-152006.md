---
name: cqrs
type: object
object-type: pattern
essence: use separate models for writing (commands) and reading (queries) rather than one shared model
field: [field.event-sourcing-append-only-architecture]
status: established
state: settled
attribution: named by Greg Young (c. 2010), extending Bertrand Meyer's Command-Query Separation (1988); documented by Fowler
formalized: false
source: [source.young-cqrs, source.fowler-2005, source.meyer-1988, source.kleppmann-2017, source.vernon-2013]
depends-on: []
used-by: []
aliases: ["object.cqrs"]
---

**statement (plain)** — split the part of the system that changes data from the part that reads it, and let each have its own model. The write side handles commands ("do this"); the read side answers queries ("tell me this"), often from differently-shaped, pre-built views. One model no longer has to serve both jobs at once.

**statement** — **Command Query Responsibility Segregation**: use a different model to update information than the model used to read it. Writes go through a command model that enforces invariants; reads come from one or more query models (read/projection models) optimized for display. It keeps Meyer's command/query vocabulary but lifts the separation from the *method* level (CQS) to the *model/architecture* level. Pairs naturally with [[object.event-sourcing]]: the event log feeds the write side and projects the read models. **[confirmed]**

**basis** — separating the two responsibilities lets read and write scale, evolve, and be modeled independently — but at the cost of two models to keep in sync, usually via [[object.aggregate-eventual-consistency|eventual consistency]] between write and read sides. Fowler stresses CQRS adds significant complexity and should be applied only to the portions of a system where the payoff justifies the risk — not as a default. It is a design pattern, not a theorem.

**lineage** — coined by Greg Young (c. 2010), who explicitly built on Bertrand Meyer's **Command-Query Separation** (*Object-Oriented Software Construction*, 1988) — keeping Meyer's definitions of command and query and splitting the object into two [[source.young-cqrs]] [[source.meyer-1988]]. Martin Fowler documents it ("It's a pattern that I first heard described by Greg Young"), bliki CQRS [[source.fowler-2005]]. Treated in Vernon 2013 [[source.vernon-2013]] and Kleppmann 2017 [[source.kleppmann-2017]]. **[confirmed]** *(honesty flag: origin is a naming/extension act, not a theorem.)*

**sources** — [[source.young-cqrs]] [[source.fowler-2005]] [[source.meyer-1988]] [[source.kleppmann-2017]] [[source.vernon-2013]]
