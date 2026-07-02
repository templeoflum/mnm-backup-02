---
name: verification-falsification-asymmetry
type: object
object-type: principle
essence: no finite observation can verify a universal law, but a single counter-instance can falsify it
field: ["[[field.popperian-falsificationism]]"]
status: established
state: settled
attribution: K. Popper (Logik der Forschung, 1934/1935)
formalized: true
source: ["[[source.popper-1935]]", "[[source.popper-1959]]"]
depends-on: []
used-by: ["[[object.falsifiability-demarcation]]", "[[object.conjecture-and-refutation]]"]
aliases: ["object.verification-falsification-asymmetry"]
---

**statement (plain)** — you can never prove "all swans are white" no matter how many white swans you see, but one black swan settles it as false. Confirming a universal law would take checking infinitely many cases; refuting it takes one counterexample. The two directions are not symmetric — and that gap is the engine of Popper's whole method.

**statement** — for a strictly universal statement ("for all x, Px → Qx"): no finite set of singular observation statements can entail it (verification by enumeration is logically impossible over an open domain), yet a single singular statement asserting an instance of "Px and not-Qx" entails its negation. The falsifying inference is deductively valid by *modus tollens*: if theory T entails prediction Q, and not-Q is observed, then not-T. This asymmetry holds at the level of logic, independent of the practical certainty of any observation. **[confirmed]**

**status** — established; the deductive (modus tollens) core is formally valid. Its *application* to real theories is qualified by the Duhem–Quine problem (see lineage of [[object.falsifiability-demarcation]]).

**basis** — this asymmetry is the logical ground beneath the demarcation criterion: because universal laws can be refuted but not verified, Popper makes refutability — not confirmability — the mark of the empirical, and rejects induction as science's method. [[field.popperian-falsificationism]]

**lineage** — connected to Popper's solution to Hume's problem of induction: the asymmetry lets science advance by elimination of error without ever needing inductive justification of universal laws. **[confirmed as attribution]**

**sources** — Popper, *Logik der Forschung* (1934/1935) [[source.popper-1935]]; *The Logic of Scientific Discovery* (1959) [[source.popper-1959]]. Cross-checked against the Stanford Encyclopedia of Philosophy entry on Popper and the Wikipedia entry on Falsifiability.
