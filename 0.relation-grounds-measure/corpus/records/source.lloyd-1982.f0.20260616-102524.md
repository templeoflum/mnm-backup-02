---
name: lloyd-1982
type: source
essence: derives the least-squares optimal scalar quantizer by the alternating nearest-centroid / centroid-update iteration — "Lloyd's algorithm", the standard batch k-means step
kind: paper
author: Stuart P. Lloyd
year: 1982
venue: IEEE Transactions on Information Theory, vol. 28, no. 2, pp. 129–137
state: settled
links: ["[[object.k-means]]", "[[field.information-retrieval]]"]
---

**citation (verbatim)** — S. P. Lloyd, "Least Squares Quantization in PCM," *IEEE Transactions on Information Theory*, vol. 28, no. 2 (March 1982), pp. 129–137. DOI 10.1109/TIT.1982.1056489. (Work carried out at Bell Laboratories in 1957; published 1982.)

**what it contains** — derives the necessary conditions for an optimal least-squares quantizer: each quantization level is the centroid (mean) of the inputs assigned to it, and each input is assigned to its nearest level. The alternating procedure that enforces both conditions is **Lloyd's algorithm** — the batch iteration that, applied to vectors, is the standard k-means clustering step. A founding document of vector quantization.

**access** — IEEE Xplore (DOI above). Author/title/venue/volume/pages and the 1957-Bell-Labs / 1982-publication history **[confirmed]** (IEEE record + multiple indexes, verbatim).
