---
name: olsson-2022
type: source
essence: identifies "induction heads" — attention heads implementing prefix-match-and-copy ([A][B]…[A]→[B]) — and argues they drive most in-context learning in transformers
kind: website
author: Catherine Olsson, Nelson Elhage, Neel Nanda, Nicholas Joseph, Nova DasSarma, Tom Henighan, Ben Mann, Amanda Askell, Yuntao Bai, Anna Chen, Tom Conerly, Dawn Drain, Deep Ganguli, Zac Hatfield-Dodds, Danny Hernandez, Scott Johnston, Andy Jones, Jackson Kernion, Liane Lovitt, Kamal Ndousse, Dario Amodei, Tom Brown, Jack Clark, Jared Kaplan, Sam McCandlish, Chris Olah
year: 2022
venue: Transformer Circuits Thread (transformer-circuits.pub/2022/in-context-learning-and-induction-heads); also arXiv:2209.11895
state: settled
links: ["[[object.induction-heads]]", "[[field.mechanistic-interpretability-probing]]"]
---

**citation** — Catherine Olsson, Nelson Elhage, Neel Nanda, Nicholas Joseph, et al. "In-context Learning and Induction Heads." Transformer Circuits Thread, 2022. https://transformer-circuits.pub/2022/in-context-learning-and-induction-heads/index.html (also arXiv:2209.11895).

**contains** — defines **induction heads**: attention heads that complete sequences by prefix matching (attend to the token that previously followed the current token) and copying it, implementing [A][B]…[A]→[B]. Presents six complementary lines of evidence for the hypothesis that induction heads constitute the mechanism behind most in-context learning in transformers, noting they form at the same training step as a sharp jump in in-context-learning ability (a visible bump in the loss). Causal evidence is strong for small attention-only models and correlational for larger models with MLPs.

**access** — open access on the Transformer Circuits Thread and arXiv (abs/2209.11895). Title, lead authors, year, venue, and mechanism confirmed via arXiv and Semantic Scholar. **[confirmed]**
