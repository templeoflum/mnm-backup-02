---
name: brown-2020
type: source
essence: GPT-3 paper — demonstrates that a 175B-parameter autoregressive LM performs many tasks from in-context examples alone, without gradient updates (in-context / few-shot learning)
kind: paper
author: Tom B. Brown, Benjamin Mann, Nick Ryder, Melanie Subbiah, Jared Kaplan, Prafulla Dhariwal, Arvind Neelakantan, Pranav Shyam, Girish Sastry, Amanda Askell, et al.
year: 2020
venue: Advances in Neural Information Processing Systems 33 (NeurIPS 2020)
state: settled
links: ["[[field.retrieval-augmented-generation]]", "[[object.in-context-learning]]"]
---

Verbatim citation: T. B. Brown, B. Mann, N. Ryder, M. Subbiah, J. Kaplan, P. Dhariwal, A. Neelakantan, P. Shyam, G. Sastry, A. Askell, et al., "Language Models are Few-Shot Learners," in *Advances in Neural Information Processing Systems* 33, 2020.

Contains: GPT-3, an autoregressive transformer LM with 175 billion parameters; the central result is that, given a natural-language task description and a few demonstrations placed in the prompt (the "context"), the model performs the task with no weight updates — zero-, one-, and few-shot "in-context learning." Evaluated across translation, QA, cloze, and on-the-fly reasoning tasks; documents both strong few-shot performance and remaining failure cases.

Access: arXiv:2005.14165; NeurIPS proceedings hash 1457c0d6bfcb4967418bfb8ac142f64a. Primary verified via NeurIPS proceedings and arXiv. **[confirmed]**
