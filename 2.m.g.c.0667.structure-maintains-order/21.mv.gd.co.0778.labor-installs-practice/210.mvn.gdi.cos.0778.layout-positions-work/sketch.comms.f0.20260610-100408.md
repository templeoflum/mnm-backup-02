# Sketch — comms — f0 — 20260610-100408

The communication triad: freight, mail, memo. Parked here as a sketch (proto-frame) until the schedule gives it a slot. Status [float] — shape agreed in discussion (operator + 2, 20260610), wants a frame before any build. First sketch cut under the domain shift: sketching is branch-2 packaging work, not branch-1 dreaming.

## The triad

| channel | speed | carries | medium |
|---------|-------|---------|--------|
| freight | scheduled (pull rounds, frame.freight.f0) | work product | git: commit → pull round → pull at session start |
| mail | scheduled — rides the freight | documents ABOUT the work: packing slips, task lists, frames, briefs | files traveling with their delivery |
| memo | instant | words and pointers only, never cargo | POST through the running server → lands on main's floor live |

Relay (operator passing messages by hand) stays as the fourth, informal channel — human, fun, and a drift check in itself. Not protocolized on purpose.

## Rules (the constitution)

1. Memos carry no cargo. A memo that ships work product is pushing with extra steps.
2. Deliveries deserve packing slips. Evidence from practice, same day: TS handoff 1 arrived WITH a report; batch 2 arrived without one, and "it should all be there" turned out 33-of-46 — the containment surprise a packing slip exists to prevent. Mail makes receiving-is-not-endorsing cheap.
3. All agent-to-agent communication is on the books at main. Memos are rowed when the server writes them; mail is rowed at intake with its freight. The operator can stand in the lattice and read every word — drift has nowhere to hide. (This kills the off-tree mailbox idea: a channel reconcile can't see is where drift would go.)
4. Each channel has a medium. The CLI clipboard is not a medium.

## Why memo-via-server works from any tree

The server always writes into the tree it is rooted in (main). Any wing can reach localhost from inside its own worktree, so a memo posted mid-session lands on main's floor instantly — no freight lag — and the freshness sweep shows it in the lattice within ~2.5s. It is the one sanctioned "write into main from elsewhere," acceptable exactly because it is mail-room, not freight dock.

## Open floats (frame-time decisions)

- memo home address: 222 (sign·hands·record — a signed message changing hands, recorded) vs 200 (it is an arrival). lean 222.
- mail: not a new location — a typed document that travels inside its delivery and lands at 200 with it. needs only the type.
- naming/threading: msg/memo.{from}-to-{to}.fN? do replies fold or append? (fold discipline: accumulation is free — a thread probably appends within one file until consolidation earns a fold.)
- new document types `memo` and `mail` — registration blocked on the type-index extraction (keystone → index, its own gated work; keystone edits go sketch → joint review → install).
- instrument support: a comms view/badge, post-from-CLI helper — H-chunk slot when framed.
- server-down behavior for memos: queue as file in own tree + mail it on next freight? or just wait? undecided.

## Adjacent decisions this sketch leans on (made in discussion, not yet installed)

- sketches and parked are branch-2 domain (packaging and staging). their homes (now 100) re-home in a deliberate pass, not casually.
- parked docs carry reason + wake condition.
- the keystone stops holding the type table; it points to an index on the floor (201 has a claim). no new type without an index entry.
