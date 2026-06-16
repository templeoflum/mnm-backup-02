---
name: representation-learning-embeddings
type: field
essence: learning features/representations of data (especially dense, distributed vectors — "embeddings") directly from data rather than hand-engineering them
canon: structure
grade: s
state: float
links: [field.linear-algebra, field.information-theory, field.numerical-optimization, source.bengio-2003, source.bengio-2013, source.mikolov-2013a, source.mikolov-2013b, source.fefferman-2016, source.goodfellow-2016]
---

**origin** — distributed representations enter neural language modeling with Bengio, Ducharme, Vincent & Jauvin, "A Neural Probabilistic Language Model," *Journal of Machine Learning Research* 3 (2003), 1137–1155, which learns a "distributed representation for words" jointly with a probability model of word sequences, fighting the curse of dimensionality. [[source.bengio-2003]] **[confirmed]** (Earlier roots: connectionist "distributed representations," Hinton, McClelland & Rumelhart, *Parallel Distributed Processing*, 1986 — carried as lineage, single-source here.)

**codification** — Bengio, Courville & Vincent, "Representation Learning: A Review and New Perspectives," *IEEE Transactions on Pattern Analysis and Machine Intelligence* 35(8) (2013), 1798–1828, names the field and its program: ML performance depends on data representation; good representations disentangle the explanatory factors of variation, learned via priors (smoothness, manifold, depth, disentanglement). [[source.bengio-2013]] **[confirmed]** The empirical breakthrough that popularized embeddings is word2vec: Mikolov, Chen, Corrado & Dean, "Efficient Estimation of Word Representations in Vector Space" (arXiv:1301.3781, ICLR Workshop 2013) and Mikolov, Sutskever, Chen, Corrado & Dean, "Distributed Representations of Words and Phrases and their Compositionality" (NeurIPS 2013). [[source.mikolov-2013a]] [[source.mikolov-2013b]] **[confirmed]**

**door** — Goodfellow, Bengio & Courville, *Deep Learning* (MIT Press, 2016; free at deeplearningbook.org); its "Representation Learning" chapter (Ch. 15) is the standard entry; the 2013 TPAMI review is the survey door. [[source.goodfellow-2016]] [[source.bengio-2013]] **[confirmed]**

*grade [s] — origin (Bengio 2003) + codification (Bengio 2013 / Mikolov 2013) + door (Goodfellow 2016) all present.*
