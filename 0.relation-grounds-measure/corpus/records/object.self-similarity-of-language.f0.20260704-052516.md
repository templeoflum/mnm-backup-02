---
name: self-similarity-of-language
type: object
object-type: law
essence: linguistic complexity is self-similar and long-range dependent across scales — Hölder S≈0.59, Hurst H≈0.70 over token-level surprise
field: ["[[field.quantitative-linguistics]]"]
status: empirical
state: settled
attribution: Alabdulmohsin, Tran & Dehghani (2024); classical lineage Menzerath-Altmann / Ausloos
formalized: true
source: ["[[source.alabdulmohsin-2024]]", "[[source.gromov-2024]]", "[[source.ausloos-2012]]", "[[source.alabdulmohsin-steiner-2025]]"]
depends-on: []
used-by: ["[[object.recursive-inference-scaling]]"]
---

**statement (plain)** — zoom in on the surprise a language model assigns to text — word by word, then sentence by sentence, then paragraph by paragraph — and the statistical pattern looks the same at every zoom. Surprising paragraphs follow predictable ones just as surprising sentences follow predictable ones. Language has no single characteristic scale; its complexity is fractal.

**statement (formal)** — over the complexity sequence z_t = −log p(w_t | w_[t−1]): self-similarity via a power law p_ε(τ) ~ τ^(−S) with Hölder exponent S = 0.59±0.08; long-range dependence via rescaled-range analysis R(n)/S(n) ~ n^H with Hurst H = 0.70±0.09 (H>0.5 = predictability, 0.5 = noise). Robust across model scales (1B–500B+) and domains. Gromov et al. (2024) find non-integer intrinsic dimensions (~9) — a fractal-set signature. **[confirmed]**

**basis** — Alabdulmohsin-Tran-Dehghani (2024, NeurIPS); improves on rudimentary precursors (Ausloos 2012). `empirical` — a measured regularity of text-under-a-model, not a proven theorem; the follow-up (Alabdulmohsin-Steiner 2025) shows natural-language parameters sit in a narrow band usable for synthetic-text detection, and Hurst predicts model quality. Prose kin: the intrinsic-dimension line ([[object.id-genre-stratification]], research03) and `fractal-geometry`'s self-similarity. [[source.alabdulmohsin-2024]] [[source.gromov-2024]]
