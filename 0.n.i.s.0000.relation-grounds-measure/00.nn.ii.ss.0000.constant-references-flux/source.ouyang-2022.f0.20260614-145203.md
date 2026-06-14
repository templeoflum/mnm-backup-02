---
name: ouyang-2022
type: source
essence: Ouyang et al., "Training language models to follow instructions with human feedback" (InstructGPT) — RLHF applied to LLM alignment
kind: paper
author: Ouyang et al. (OpenAI)
year: 2022
venue: NeurIPS 2022; arXiv:2203.02155
state: float
links: [field.ai-alignment-praxis]
---

Ouyang, L., et al., "Training language models to follow instructions with human feedback," *NeurIPS 2022*; arXiv:2203.02155 (2022).

Role: brings RLHF to large language models — three-stage recipe (supervised fine-tuning → reward-model training on human preference comparisons → RL via PPO against the reward model). The InstructGPT method underlies ChatGPT (Nov 2022) and became the industry-standard alignment fine-tuning step. Builds on the RLHF method of [[source.christiano-2017]].

Access — free, arXiv / NeurIPS proceedings.

**[confirmed]** (authors/id/venue/year confirmed against arXiv and NeurIPS proceedings).
