---
name: hierarchical-naming-dns-resolution
type: object
object-type: method
essence: a global namespace built as a tree of delegated zones, with names resolved by walking the hierarchy from the root downward
field: ["[[field.naming-and-addressing]]"]
status: established
state: settled
attribution: Paul Mockapetris (DNS, RFC 882/883 1983; RFC 1034/1035 1987)
formalized: false
source: ["[[source.mockapetris-rfc1034]]"]
depends-on: ["[[object.namespace]]"]
used-by: ["[[object.uri-generic-syntax]]"]
---

**statement (plain)** — DNS turns the whole internet's names into one big upside-down tree. The right-hand end of a name (like `.com`) sits near the root; each dot moves one step down a branch. No single computer holds the whole tree — each organization runs its own piece (a "zone") and can change it freely. To look a name up, you start at the root and follow the branches down, being handed off zone by zone until you reach the answer.

**statement** — the Domain Name System organizes names into a single rooted **tree**; a domain name is the path from a node up to the root, written right-to-left as labels separated by dots. Authority over subtrees is **delegated**: the namespace is partitioned into **zones**, each administered independently, with parent zones holding NS (name server) records that point at the children — a *cut* in the tree. **Resolution** walks this structure: a resolver queries the root, is referred down through each delegated zone, and follows referrals (iteratively or recursively) until an authoritative server returns the record. The design is **hierarchical, distributed, and autonomous** — local administrators control their zones without central coordination.

**basis** — hierarchy makes a global namespace scale: delegation keeps each authority's table small and lets names be locally unique while globally distinct (an instance of [[object.namespace]] uniqueness-within-scope applied recursively). Distribution removes the single bottleneck of a central host table; caching of resolved records makes the walk cheap in practice. The same tree-of-delegated-zones pattern recurs in file-system paths and organizational addressing.

**lineage** — designed by Paul Mockapetris in **RFC 882 & 883 (Nov 1983)**, superseded by **RFC 1034 & 1035 (Nov 1987)**, to replace the flat, centrally maintained `HOSTS.TXT` file [[source.mockapetris-rfc1034]]. The hierarchical file system (Daley & Neumann, 1965, [[source.daley-neumann-1965]]) is an earlier instance of the same delegated-tree-with-path-resolution method in a different medium. **[confirmed — RFC numbers/dates verified against the RFCs]**

**sources** — [[source.mockapetris-rfc1034]] (RFC 1034/1035, origin); Wikipedia "Domain Name System." **[confirmed]**
