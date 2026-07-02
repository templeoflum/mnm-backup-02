---
name: content-addressable-storage
type: object
object-type: model
essence: store objects under the cryptographic hash of their content, so the name IS the content's fingerprint and verifies integrity
field: ["[[field.version-control-theory]]", "[[field.addressing-namespace-design]]"]
status: established
state: settled
attribution: Merkle hash tree (Merkle 1979/1987); applied as Git's object model (Torvalds 2005; documented Chacon & Straub, Pro Git)
formalized: true
source: ["[[source.chacon-straub-pro-git]]", "[[source.torvalds-hamano-git-2005]]", "[[source.merkle-1987]]"]
depends-on: []
used-by: ["[[object.commit-snapshot]]", "[[object.commit-dag]]"]
---

**statement (plain)** — instead of giving each stored thing an arbitrary name, you name it by a cryptographic hash of its own contents. Identical content always lands at the same address (free deduplication), and you can re-hash any object to check it hasn't been corrupted or tampered with. Git is built on this: every file, directory snapshot, commit, and tag is stored and referenced by the hash of its content.

**statement** — a content-addressable store is a key-value store whose key for an object is a cryptographic hash of that object's bytes. Properties: (1) **immutability** — changing any byte changes the address, so an object at a given address is fixed; (2) **deduplication** — identical content shares one address; (3) **integrity** — re-hashing detects corruption. Git computes the hash over `<type> <size>\0<content>` and stores under it. Because Git objects reference other objects *by their hashes* (commit → tree → trees/blobs; commit → parent commits), the whole store is a **Merkle DAG**: every object's hash transitively covers everything it points to, so the top commit hash certifies the entire reachable history. **[confirmed]**

**statement (hash)** — Git originally used **SHA-1** as the hash; a transition to **SHA-256** is specified and implemented for new repositories. The model is hash-function-agnostic; the security/uniqueness rests on collision resistance of the chosen function. **[confirmed]**

**basis** — Pro Git, *Git Internals*: "Git is a content-addressable filesystem... a simple key-value data store. You can insert any kind of content into a Git repository, for which Git will hand you back a unique key you can use later to retrieve that content." The hash is computed over header + content; objects live in `.git/objects/<2>/<38>`. The Merkle-tree structure (leaf = hash(data), node = hash(child hashes), root content-addresses the whole) is Merkle's. Confirmed by git-scm internals and the Merkle-tree literature; the two reinforce each other (Git as an applied Merkle DAG). **[confirmed]**

**lineage** — the data structure originates with Ralph Merkle: hash tree patented 1979 (US 4,309,569), published in [[source.merkle-1987|"A Digital Signature Based on a Conventional Encryption Function," CRYPTO '87]]. Git (2005) applied content-addressing as a VCS storage model; the same idea underlies Bitcoin and IPFS. This is the storage layer beneath [[object.commit-snapshot]] and [[object.commit-dag]]. **[confirmed as attribution]** (Merkle's authorship per patent + Wikipedia; Git's application per Pro Git).

**sources** — [[source.chacon-straub-pro-git]], [[source.torvalds-hamano-git-2005]], [[source.merkle-1987]].
