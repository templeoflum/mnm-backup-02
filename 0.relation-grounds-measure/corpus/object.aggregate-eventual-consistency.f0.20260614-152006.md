---
name: aggregate-eventual-consistency
type: object
object-type: concept
essence: the aggregate is the unit of transactional consistency; everything outside it reconciles eventually
field: [field.event-sourcing-append-only-architecture]
status: established
state: settled
attribution: aggregate from Eric Evans (DDD, 2003), refined by Vaughn Vernon (2013); eventual consistency from Werner Vogels (2007–09), on Brewer's CAP (2000)
formalized: false
source: [source.evans-2003, source.vernon-2013, source.vogels-2009, source.kleppmann-2017, source.helland-2015]
depends-on: []
used-by: []
aliases: ["object.aggregate-eventual-consistency"]
---

**statement (plain)** — group closely-related objects into a cluster (an "aggregate") with one object as its gateway, and keep that cluster always-correct in a single transaction. Anything *between* clusters does not have to be in sync immediately — it catches up shortly after, on its own. So you get strong consistency in the small and eventual consistency in the large.

**statement** — an **aggregate** is a cluster of entities and value objects treated as one unit for data changes, with a single **aggregate root** as the only external reference point and a **consistency boundary** inside which invariants hold. The refined rule (Vernon): modify **one aggregate per transaction**; coordinate across aggregates by **eventual consistency** (e.g. domain events triggering separate transactions). **Eventual consistency** (Vogels): if no new updates are made, eventually all reads return the last written value. **[confirmed]**

**basis** — the aggregate draws the line between what must be consistent *now* (one transaction, one boundary) and what may be consistent *later* (across boundaries). This is what makes [[object.event-sourcing]] and [[object.cqrs]] practical at scale: the write side commits one aggregate's events atomically, while read models and other aggregates converge afterward. The trade is forced by distribution — Brewer's CAP (2000) says you cannot have consistency, availability, and partition tolerance all at once, so cross-boundary work accepts an inconsistency window.

**lineage** — **aggregate / aggregate root / consistency boundary**: Eric Evans, *Domain-Driven Design* (Addison-Wesley, 2003) [[source.evans-2003]]; the one-aggregate-per-transaction + eventual-consistency-across-boundaries refinement: Vaughn Vernon, "Effective Aggregate Design" / *Implementing DDD* (2013) [[source.vernon-2013]]. **eventual consistency**: Werner Vogels, "Eventually Consistent" (All Things Distributed 2007; ACM Queue 2008; CACM 2009), building on Eric Brewer's CAP theorem (PODC 2000) and the BASE framing [[source.vogels-2009]]. Immutable-data treatment in Helland 2015 [[source.helland-2015]]; "the log" / consistency in Kleppmann 2017 [[source.kleppmann-2017]]. **[confirmed]** *(honesty flag: aggregate and eventual consistency are named practitioner concepts; CAP is the one theorem in the lineage and is cited as background, not the keystone itself.)*

**sources** — [[source.evans-2003]] [[source.vernon-2013]] [[source.vogels-2009]] [[source.kleppmann-2017]] [[source.helland-2015]]
