---
name: precision-recall
type: object
object-type: metric
essence: the two core retrieval-evaluation measures — precision is the fraction of retrieved documents that are relevant, recall the fraction of relevant documents that are retrieved
field: ["[[field.information-retrieval]]"]
status: established
state: settled
attribution: standardized in IR evaluation through the Cranfield experiments (Cleverdon) and codified in van Rijsbergen (1979); the precision-recall framing is the field's evaluation backbone
formalized: true
source: ["[[source.van-rijsbergen-1979]]", "[[source.manning-2008]]"]
depends-on: []
used-by: []
---

**statement (plain)** — to judge a retrieval system you need two numbers, because they trade off. Precision asks: of the documents the system returned, how many were actually relevant? Recall asks: of all the relevant documents that exist, how many did the system find? A system can be perfectly precise by returning one sure hit (low recall), or get full recall by returning everything (low precision). Evaluation therefore reports both, often as a precision-recall curve, or combines them into a single F-measure.

**statement (formal/formula)** — with relevant set R and retrieved set A:

precision = |R ∩ A| / |A|,  recall = |R ∩ A| / |R|.

In confusion-matrix terms, precision = TP/(TP+FP) and recall = TP/(TP+FN). The balanced F-measure is their harmonic mean F₁ = 2·precision·recall/(precision+recall); the general F_β weights recall β² times precision (van Rijsbergen's E = 1 − F is the complementary form). Ranked retrieval summarizes the tradeoff with the precision-recall curve, interpolated/average precision, and mean average precision (MAP). **[confirmed]**

**basis** — precision and recall are definitions, not empirical claims; their standing rests on adoption as the agreed evaluation language of IR, traceable to the Cranfield experiments and made canonical by van Rijsbergen (1979) and the TREC tradition. Limits noted in the same sources: recall is hard to measure on large collections (the full relevant set is unknown, requiring pooling); both depend on binary relevance judgments; and for ranked output single-cutoff precision/recall is replaced by curve- and rank-based aggregates (MAP, nDCG). Defined and discussed in van Rijsbergen (1979, Ch. 7) and Manning, Raghavan & Schütze (2008, Ch. 8). **[confirmed]**
