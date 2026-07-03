---
name: event-sourcing
type: object
object-type: pattern
essence: persist every state change as an immutable event; current state is a fold over the event log
field: ["[[field.event-sourcing]]"]
status: established
state: settled
attribution: named by Martin Fowler (2005), documenting pre-existing practice; codified by Greg Young (c. 2010)
formalized: false
source: ["[[source.fowler-2005]]", "[[source.young-cqrs]]", "[[source.kleppmann-2017]]", "[[source.vernon-2013]]", "[[source.helland-2015]]"]
depends-on: ["[[object.append-only-event-log]]"]
used-by: []
---

**statement (plain)** — instead of storing the current state of a thing and overwriting it on every change, you store every change itself as an event, in the order it happened. The current state is whatever you get by replaying all those events from the start. Nothing is overwritten; the log of what happened *is* the database.

**statement** — capture all changes to application state as a sequence of immutable [[object.append-only-event-log|events]]. Each change is recorded as an event object appended in the order applied; current state is derived by replaying (folding) the events. Three consequences Fowler names: **complete rebuild** (discard state, replay from an empty store), **temporal query** (replay up to time *t* to get state-as-of-*t*), and **event replay / correction** (recompute by reversing and re-applying corrected events). **[confirmed]**

**basis** — the event log is the source of truth; persisted state (if any) is a cache. Because events are immutable and ordered, any derived view is reproducible and auditable; the same log can build many read models (the bridge to [[object.cqrs]]). It is an engineering pattern, not a theorem — it trades write simplicity and full history for read complexity (rebuilds, projections, snapshots) and schema-evolution cost.

**lineage** — Martin Fowler, "Event Sourcing," martinfowler.com (12 Dec 2005) — explicitly *names and documents* an existing practice (he flags it as draft), not an invention [[source.fowler-2005]]. Greg Young codified it alongside [[object.cqrs]] (c. 2010) [[source.young-cqrs]]. Deep precursors: double-entry bookkeeping's append-only ledger and database transaction/write-ahead logs. Treatments in Vernon 2013 [[source.vernon-2013]] and Kleppmann 2017 [[source.kleppmann-2017]]. **[confirmed]** *(honesty flag: origin is a naming act, not a seminal theorem.)*

**sources** — [[source.fowler-2005]] [[source.young-cqrs]] [[source.kleppmann-2017]] [[source.vernon-2013]] [[source.helland-2015]]
