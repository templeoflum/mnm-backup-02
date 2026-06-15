---
name: bayes-theorem
type: object
object-type: theorem
essence: how to invert a conditional probability — update the probability of a cause given observed evidence
field: [field.probability-theory]
status: proven
state: verified
attribution: Thomas Bayes (essay 1763, communicated by Richard Price); independently Pierre-Simon Laplace (1774)
formalized: true
source: [source.bayes-1763, source.laplace-1774, source.laplace-1812]
depends-on: [object.kolmogorov-axioms]
used-by: []
---

**statement (plain)** — it tells you how to flip a conditional probability. If you know how likely the evidence is under each possible cause, and how likely each cause was to begin with, Bayes's rule combines them into the probability of a cause *given* the evidence you actually saw. It is the engine of learning from data: prior belief × likelihood of the evidence, renormalized, gives the updated (posterior) belief.

**statement (formal)** — for events A and B with P(B) ≠ 0,
P(A | B) = P(B | A) · P(A) / P(B).
With a partition {Aᵢ} of the sample space (law of total probability in the denominator):
P(Aⱼ | B) = P(B | Aⱼ) P(Aⱼ) / Σᵢ P(B | Aᵢ) P(Aᵢ).
Continuous form: posterior density π(θ | x) ∝ f(x | θ) π(θ). **[confirmed]**

**status** — proven (an elementary consequence of the definition of conditional probability, P(A∩B) = P(A|B)P(B) = P(B|A)P(A)).

**proof** — immediate from the definition of conditional probability under the [[object.kolmogorov-axioms]]: P(A|B) = P(A∩B)/P(B) and P(A∩B) = P(B|A)P(A); substitute. The depth is interpretive (inverse probability / inference), not in the one-line derivation.

**lineage (attribution)** — first stated in Thomas Bayes's "An Essay towards solving a Problem in the Doctrine of Chances," written in the late 1740s, edited and communicated posthumously by **Richard Price**, read to the Royal Society **23 December 1763**, published in *Philosophical Transactions* **53** (1763) [[source.bayes-1763]]. Pierre-Simon Laplace **independently** developed the principle of inverse probability in his "Mémoire sur la probabilité des causes par les événements" (1774) [[source.laplace-1774]] and systematized it (general statement, applications) in *Théorie analytique des probabilités* (1812) [[source.laplace-1812]]; Laplace later credited Bayes with priority. For ~150 years the result was largely propagated through Laplace's formulation. **[confirmed]**

**sources** — primaries above; corroborated by Wikipedia ("Bayes' theorem"), MacTutor ("Thomas Bayes"), Encyclopedia of Mathematics ("Bayes formula"), and Stigler, *The History of Statistics*. **[confirmed]** ([[source.laplace-1774]] — the *probabilité des causes* memoir — is distinct from [[source.laplace-1812]].)

**door** — [[source.blitzstein-hwang]] (ch. 2, conditional probability & Bayes); [[source.grimmett-stirzaker]].
