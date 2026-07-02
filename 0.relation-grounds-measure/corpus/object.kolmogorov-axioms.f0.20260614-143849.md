---
name: kolmogorov-axioms
type: object
object-type: definition
essence: the three axioms that make probability a normalized, countably-additive measure on a sigma-algebra of events
field: ["[[field.probability-theory]]"]
status: established
state: settled
attribution: A. N. Kolmogorov, Grundbegriffe der Wahrscheinlichkeitsrechnung (1933); built on Lebesgue/Borel measure theory and Fréchet
formalized: true
source: ["[[source.kolmogorov-1933]]", "[[source.borel-1909]]"]
depends-on: []
used-by: ["[[object.law-of-large-numbers]]", "[[object.central-limit-theorem]]", "[[object.bayes-theorem]]", "[[object.conditional-expectation]]", "[[object.martingale]]"]
---

**statement (plain)** — probability is defined not by what chance "really is" but by three rules any sensible assignment must obey. Take a set of all possible outcomes and a collection of "events" (subsets) you can ask about. (1) Every event has a probability that is a number ≥ 0. (2) The whole outcome set has probability 1 (something happens). (3) If events are mutually exclusive (no two can happen together), the probability of "at least one of them" is the sum of their probabilities — and this holds even for a countably infinite list of events. Everything else in probability follows from these.

**statement (formal)** — a *probability space* is a triple (Ω, F, P) where Ω is a sample space, F is a σ-algebra of subsets of Ω (the events), and P : F → ℝ is a *probability measure* satisfying:
1. **Non-negativity**: P(A) ≥ 0 for every A ∈ F.
2. **Normalization**: P(Ω) = 1.
3. **Countable (σ-) additivity**: for any countable collection {Aᵢ} of pairwise-disjoint events, P(⋃ᵢ Aᵢ) = Σᵢ P(Aᵢ).
Immediate consequences: P(∅) = 0, P(Aᶜ) = 1 − P(A), monotonicity, and continuity from below/above. **[confirmed]**

**status** — definition (the axiomatic foundation); proven framework in the sense that all of measure-theoretic probability is built on it.

**proof / role** — these are axioms, not a theorem; their justification is that they make probability a special case of [[field.point-set-topology|measure theory]] (a measure of total mass 1), so the whole machinery of Lebesgue integration applies. The σ-additivity axiom is the modern, non-trivial one — it is what Borel's countable-probability work [[source.borel-1909]] needed and what distinguishes Kolmogorov's framework from finitely-additive predecessors.

**lineage** — the measure-theoretic viewpoint was prepared by Borel (countable probabilities, 1909) and Lebesgue's integration; Kolmogorov's *Grundbegriffe* [[source.kolmogorov-1933]] brought it to definitive axiomatic form in 1933, the conventional birth of modern probability theory. **[confirmed]**

**sources** — [[source.kolmogorov-1933]] (primary); [[source.borel-1909]] (measure-theoretic precursor). Corroborated across nLab/Encyclopedia of Mathematics ("Probability theory", "Axioms of probability theory") and Wikipedia ("Probability axioms"). **[confirmed]**

**door** — [[source.blitzstein-hwang]] (axioms, ch. 1); [[source.grimmett-stirzaker]].
