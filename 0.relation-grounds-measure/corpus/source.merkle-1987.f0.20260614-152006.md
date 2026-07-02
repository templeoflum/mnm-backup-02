---
name: merkle-1987
type: source
essence: Merkle's hash tree — leaf=hash(data), node=hash(children); the structure Git's content-addressed store generalizes
kind: paper
author: Ralph C. Merkle
year: 1987
venue: "A Digital Signature Based on a Conventional Encryption Function," Advances in Cryptology — CRYPTO '87 (publ. 1988)
state: settled
links: [field.version-control-theory]
aliases: ["source.merkle-1987"]
---

Ralph C. Merkle, "A Digital Signature Based on a Conventional Encryption Function," *Advances in Cryptology — CRYPTO '87*, LNCS 293 (Springer, 1988):369–378. The hash tree ("Merkle tree") names him; he patented it 1979 (US Patent 4,309,569, "Method of providing digital signatures," issued Jan 5 1982, Stanford).

Definition — every leaf node is labelled with the cryptographic hash of a data block; every non-leaf node is labelled with the hash of the labels of its child nodes. The root hash content-addresses the whole tree.

Role — the data-structure ancestor of Git's content-addressed object graph (a Merkle DAG); also used by Bitcoin and IPFS.

Confidence — patent year (1979), patent number, and the CRYPTO '87 paper are confirmed across Wikipedia and patent records. **[confirmed]**
