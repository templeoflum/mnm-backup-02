---
name: rlhf
type: object
object-type: method
essence: train a reward model from human preference comparisons, then optimize a policy against it — letting humans steer behavior they can judge but can't specify
field: ["[[field.ai-alignment]]"]
status: established
state: settled
attribution: Christiano, Leike et al. (2017, "Deep RL from Human Preferences"); scaled to LLMs by Ouyang et al. (2022, InstructGPT)
formalized: true
source: ["[[source.christiano-2017]]", "[[source.ouyang-2022]]", "[[source.amodei-2016]]"]
depends-on: ["[[object.alignment-problem]]", "[[object.reward-hacking]]"]
used-by: ["[[object.scalable-oversight]]"]
---

**statement (plain)** — RLHF (reinforcement learning from human feedback) is how you train an AI toward goals you can recognize but can't write down. Instead of hand-coding a reward, you show people pairs of the system's behaviors and ask which they prefer; those comparisons train a "reward model" that predicts human judgment; then you use reinforcement learning to make the system score well on that learned reward. It is the standard alignment fine-tuning step behind modern chat assistants.

**statement** — **RLHF** is a three-part method: (1) collect human preference comparisons over model outputs/trajectories; (2) fit a reward model to those preferences (typically a Bradley–Terry / logistic model over pairwise comparisons); (3) optimize the policy against the reward model with RL (commonly PPO), usually with a KL penalty to the base model. It targets the specification problem [[object.alignment-problem]] by replacing a hand-written objective with a learned proxy — which itself can be reward-hacked [[object.reward-hacking]]. The field is **living**: variants (DPO, RLAIF, Constitutional AI) now compete with the PPO recipe. **[confirmed]**

**status** — established; industry-standard practice.

**lineage** — deep-RL form introduced by Christiano, Leike, Brown, Martic, Legg & Amodei, "Deep reinforcement learning from human preferences," arXiv:1706.03741 / NeurIPS 2017 — solving Atari and simulated locomotion from preference comparisons on <1% of interactions [[source.christiano-2017]]. Earlier preference/feedback-learning lineage (Knox & Stone TAMER 2009; Akrour et al.) carried informally. Brought to large language models by Ouyang et al., "Training language models to follow instructions with human feedback" (InstructGPT), NeurIPS 2022 [[source.ouyang-2022]], the recipe underlying ChatGPT. Framed as an answer to the supervision problems of "Concrete Problems" [[source.amodei-2016]]. **[confirmed]**

**sources** — [[source.christiano-2017]] · [[source.ouyang-2022]] · [[source.amodei-2016]]
