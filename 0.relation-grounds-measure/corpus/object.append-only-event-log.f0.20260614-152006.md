---
name: append-only-event-log
type: object
object-type: concept
essence: an immutable, ordered store where events are only ever appended, never updated or deleted
field: ["[[field.event-sourcing-append-only-architecture]]"]
status: established
state: settled
attribution: lineage from double-entry ledgers (Pacioli 1494) and DB write-ahead logging (Gray); framed for distributed data by Helland (2015) and Kleppmann (2017)
formalized: false
source: ["[[source.helland-2015]]", "[[source.kleppmann-2017]]", "[[source.pacioli-1494]]", "[[source.gray-transaction]]"]
depends-on: []
used-by: ["[[object.event-sourcing]]"]
---

**statement (plain)** — a place to keep data where you can only add new records to the end. You never change or erase what is already written. If something was wrong, you write a new record that corrects it; the original stays. Because nothing moves, the whole history is preserved and the log reads the same way every time.

**statement** — an **append-only, immutable, ordered** event store: once an event is written it is never mutated or deleted; corrections are themselves appended as new events (with their own timestamp). Entity state at any point is reconstructed by replaying the contributing events in sequence; objects are not stored as such but instantiated on the fly by traversing event history. (Snapshots are an optimization layered on top, not part of the core concept.) **[confirmed]**

**basis** — immutability + ordering give the log its two load-bearing properties: **auditability** (the full causal history is intact) and **reproducibility** (any derived state is a deterministic fold of a fixed sequence). This is the substrate [[object.event-sourcing]] persists onto and the source [[object.cqrs]] projects read models from. Append-only is also what makes the log a natural integration point — a single ordered stream many consumers can replay independently.

**lineage** — deep precursor: Luca Pacioli's codification of double-entry bookkeeping (*Summa de arithmetica*, 1494), an append-only ledger of unalterable entries [[source.pacioli-1494]]. Database write-ahead / transaction logs (Gray et al.) carry the same append-only discipline into systems [[source.gray-transaction]]. Pat Helland, "Immutability Changes Everything," CIDR 2015, argues immutable append-only data is the cheap, scalable default for distributed systems [[source.helland-2015]]. Treated as "the log" in Kleppmann 2017 [[source.kleppmann-2017]]. **[confirmed as attribution]** *(precursor citations stand by attribution; Helland/Kleppmann opened.)*

**sources** — [[source.helland-2015]] [[source.kleppmann-2017]] [[source.pacioli-1494]] [[source.gray-transaction]]
