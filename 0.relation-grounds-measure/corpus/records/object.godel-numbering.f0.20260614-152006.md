---
name: godel-numbering
type: object
object-type: concept
essence: a reversible encoding that assigns each symbol, formula, and proof a unique natural number — addressing syntax by arithmetic
field: ["[[field.naming-and-addressing]]", "[[field.computability-theory]]"]
status: established
state: settled
attribution: Kurt Gödel (1931)
formalized: true
source: ["[[source.godel-1931]]", "[[source.nagel-newman-1958]]", "[[source.hofstadter-1979]]"]
depends-on: ["[[object.fundamental-theorem-of-arithmetic]]"]
used-by: []
---

**statement (plain)** — Gödel numbering is a way to turn pieces of a formal language — symbols, formulas, whole proofs — into plain whole numbers, so that each one gets its own number and the number can always be decoded back. Once statements *are* numbers, talk about statements becomes ordinary arithmetic. It is the original "encode a structured thing as a single address."

**statement** — fix a formal language. Assign each primitive symbol a distinct natural number. Encode a finite sequence of symbols x₁,x₂,…,xₙ as the single number 2^x₁ · 3^x₂ · 5^x₃ · … · pₙ^xₙ (pₖ the k-th prime). The map from sequences to numbers is **injective and effectively invertible**, so a formula or a proof corresponds to exactly one Gödel number and is mechanically recoverable from it. Metamathematical predicates ("is a proof of") thereby become arithmetical predicates over Gödel numbers.

**basis** — recoverability rests on the [[object.fundamental-theorem-of-arithmetic]]: every positive integer has a unique prime factorization, so the exponents — and hence the original sequence — can always be read back off. Prime-power exponents are one concrete coding scheme; any injective, computable encoding serves the same role, which is why the construction generalizes far beyond Gödel's proof.

**lineage** — introduced by Kurt Gödel in his 1931 incompleteness paper [[source.godel-1931]] as the engine that lets a formal system talk about its own statements. It is the conceptual ancestor of encoding-as-number throughout computing: source code as data, address-as-content, and (by extension) hashing structured data to a single key. **[confirmed]**

**sources** — [[source.godel-1931]] (origin); doors [[source.nagel-newman-1958]] (*Gödel's Proof*), [[source.hofstadter-1979]] (*GEB*); Wikipedia "Gödel numbering." **[confirmed]**
