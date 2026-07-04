---
name: id-genre-stratification
type: object
object-type: law
essence: text intrinsic dimension stratifies by genre — scientific ~8, encyclopedic ~9, creative ~10.5 across models — domain-relative, not a universal constant
field: ["[[field.representation-learning]]"]
status: empirical
state: float
attribution: Pedashenko et al. (arXiv:2511.15210, 2025; EACL 2026)
formalized: false
source: ["[[source.pedashenko-2025]]", "[[source.tulchinskii-2023]]", "[[source.valeriani-2023]]", "[[source.baroni-2026]]"]
depends-on: []
used-by: []
---

**statement (plain)** — the intrinsic dimension of text representations is not one number for language: scientific prose needs the fewest degrees of freedom (~8), encyclopedic writing more (~9), creative and opinion writing the most (~10.5), consistently across the models tested. LLMs find scientific text "representationally simple" while fiction takes extra room.

**basis** — Pedashenko et al. (2025): the stratification is robust across models; ID is complementary to entropy-based metrics (uncorrelated after length control — geometric complexity orthogonal to prediction quality); sparse-autoencoder steering moves ID in the predicted direction ("scientific" features reduce it, narrative/personalization features raise it). Kin evidence that ID carries signal in text representations: AI-text detection by ID (Tulchinskii et al. 2023), the layerwise ID profile of transformers (Valeriani et al. 2023), per-phenomenon linguistic complexity profiles (Baroni et al. 2026). Conceptual frame: dimension as local/domain-relative — [[object.local-intrinsic-dimensionality]], Pestov's axiomatic ID. **[candidate, partially confirmed]** (2025–26 preprint line; per the dive's own caveat the figures are not yet fully peer-reviewed/replicated)

**limits** — measured on LLM representation spaces; the stratification is a property of texts-under-a-model-family, and replication beyond the tested models is pending.
