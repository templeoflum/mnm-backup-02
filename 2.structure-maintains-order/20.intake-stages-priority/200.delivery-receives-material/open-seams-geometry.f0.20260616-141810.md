# Open Seams in the Geometry Lineage
### Combinations the grammar already permits and the structure is leaning toward

*A companion to* The Lineage of Geometry. *This report looks for the obvious holes — not new ideas, but pairings of existing machinery that the field is visibly leaning into and has not yet closed. Each seam is rated by what already exists, what is missing, and the known obstruction.*

---

## How to read a "seam"

A seam is not a conjecture or a new object. It is a place where two mature constructions describe the same kind of structure from different sides, where the connecting grammar is already written, and where the only thing absent is the act of building the bridge. The test applied throughout is threefold: the ingredients exist independently; the connecting language exists; and the community has already *noticed* the adjacency, usually leaving it as an aside rather than a program. Where a seam fails that test — because someone has quietly built it already — it is demoted or dropped. Honesty about partial existence is the whole point; a seam that turns out to be filled is not a seam.

The organizing frame carried over from the lineage report is the **three axes**: (1) the transformation group, Klein's "what may move"; (2) method or tool, the epistemic axis; (3) local structure, Riemann's "patch by patch." Axes 1 and 3 were fused by Cartan in the 1920s; axis 2 is dissolving into category- and topos-theoretic language. The seams below are mostly about carrying those century-old or decade-old fusions up to the **current** canopy, where they do not yet live.

---

## Seam 1 — Cohesion over the condensed/analytic world

*(higher Cartan geometry native to the Clausen–Scholze foundations)*

**The shape of the hole.** Cartan's move was to let a Klein homogeneous model *G/H* curve locally like a Riemannian space, fusing axes 1 and 3. That fusion has already been lifted to the frontier — but on one side only.

**What already exists.** On the smooth side, Schreiber's *Differential cohomology in a cohesive ∞-topos* formulates connections, curvature, Chern–Weil theory, and gauge fields abstractly inside a class of higher toposes called *cohesive*; higher principal bundles with connection are classified there. This is higher Cartan geometry with everything attached, living in an ∞-topos. It has even been made synthetic: Cartan geometry has been formalized in modal homotopy type theory. So the smooth/differential branch already possesses its "all three axes in one object" — Cartan (axes 1 and 3) inside a cohesive ∞-topos with homotopy type theory as the internal language (axis 2 folded in). Separately, on the analytic side, the Clausen–Scholze program supplies condensed mathematics, analytic rings, and analytic stacks (circa 2024), a foundation that places archimedean and non-archimedean geometry on equal footing.

**What is missing.** The smooth construction runs entirely on **cohesion** — Lawvere's axioms, the adjoint string Π ⊣ Disc ⊣ Γ ⊣ coDisc encoding "local structure" for the smooth world. The condensed/analytic frontier solved the *same* underlying problem — what local structure even is, once topology and algebra are forced to cohere — by an entirely different mechanism (the pro-étale / condensed replacement of the point). No one has carried the cohesive, higher-Cartan apparatus over the condensed base: connections, curvature, gauge structure, and curved *G/H* models built over analytic stacks rather than over smooth manifolds.

**The obstruction (why it is a seam and not a done deal).** The adjacency was noticed explicitly — the "pyknoticity versus cohesiveness" discussion (2020) observed that doing condensed mathematics means asking for cohesiveness *relative to condensed sets* instead of relative to sets, and flagged the technical snag: the right adjoints that cohesion needs generally fail to exist in the pyknotic setting. That observation stayed an observation. The grammar is fully written — principal ∞-bundles, the de Rham / infinitesimal-shape modality, condensed groups and their classifying stacks, analytic stacks as homogeneous models — and the missing piece is precisely the bridge: the adjoint structure, or an honest replacement for it, that lets cohesion-style local structure run over a condensed base.

**Why this is the obvious one.** It is the only candidate where all three axes would meet at the *current* canopy rather than at the 1920s one. Cartan unified axes 1 and 3 for smooth manifolds; cohesive ∞-topoi plus type theory did it again one layer up; neither has crossed into the world where the genuinely new objects — analytic stacks, the archimedean/non-archimedean fusion — actually live. The unification "for now" already exists; it is simply stranded on the smooth trunk and has not crossed to the analytic one.

**Status.** Ingredients: present on both sides. Bridge: named, not built. Confidence that the seam is real: high.

---

## Seam 2 — Condensed-analytic tropical geometry

**The shape of the hole.** Tropicalization is, in essence, the skeleton of a non-archimedean (Berkovich) space — a combinatorial, piecewise-linear shadow of an algebraic variety. Condensed analytic geometry is the framework that puts archimedean and non-archimedean geometry on the same footing.

**What already exists.** Tropical geometry is a mature field with its own foundations and applications. Berkovich spaces and the tropicalization map are well developed. Condensed/analytic foundations now exist with the explicit aim of unifying the two analytic regimes.

**What is missing.** A tropical geometry built *natively* over the condensed/analytic foundation — one in which the archimedean and non-archimedean sides are tropicalized by the *same* operation, rather than tropicalization being a non-archimedean-only phenomenon with archimedean amoebas treated as a separate analogy. The pieces (Berkovich skeleta, condensed analytic spaces, the equal-footing treatment of both norms) sit adjacent; the unifying tropicalization functor over the condensed base appears not to be assembled.

**Status.** Ingredients: present. Bridge: plausible, less clearly demanded by the literature than Seam 1. Confidence: moderate; this one most needs a literature check before being treated as open.

---

## Seam 3 — An Erlangen Program for the frontier objects

**The shape of the hole.** Klein's classifying move was to characterize a geometry by its symmetry group — recover the geometry from the group of transformations whose invariants define it. We now have a zoo of new "geometries" (derived, condensed, analytic-stack-theoretic) but no Klein-style classification *of them* by transformation group.

**What already exists.** The grammar for "recover the symmetry group from the category of representations" is the Tannakian and motivic-Galois machinery — well established, and exactly the modern descendant of the Erlangen idea. The frontier objects themselves (analytic stacks, derived and condensed categories of sheaves) are in hand.

**What is missing.** Pointing that machinery *at the newest trunk*: asking what transformation ∞-group's invariants actually constitute condensed or analytic geometry, and classifying the frontier geometries along a rigidity-spectrum analogue defined by their ∞-groups. This is the untried application of the oldest unifier (axis 1) to the most recent objects.

**Caveat.** This neighborhood is more likely to be in-progress than untouched — recent "(∞,∞)-categorical universal motives" work gestures at exactly this terrain. Treat this seam as "watch closely," not "wide open."

**Status.** Ingredients: present. Bridge: partially underway. Confidence that it is fully open: lower.

---

## The pattern these share

All three seams are the same structural event seen three times: a unifier that matured on an older trunk has not been carried across to the current canopy, even though the connecting grammar now exists. Seam 1 strands Cartan's axis-1-and-3 fusion on the smooth trunk. Seam 2 strands tropicalization on the non-archimedean side. Seam 3 strands Klein's classify-by-symmetry move below the frontier objects. This is the cycle from the lineage report viewed from the inside: each summit's tools become available exactly when a newer summit has already moved the interesting objects out of their reach, and the seam is the lag between the two.

If only one is worth a closer technical sketch, it is Seam 1 — both because the obstruction is concrete and nameable (which adjoint fails, and what could replace it) and because closing it would put all three axes together at the present canopy, which is the unification this whole trace has been circling.

---

*Confidence is graded, not asserted. "Missing" means I did not find the combination assembled as of 2024–2025 searches, not that it is provably absent; for Seams 2 and 3 in particular a deeper literature pass could move them. The three-axis / cycle framing is one organizing lens carried from the companion report, not a standard textbook division. Named works — Schreiber on cohesive ∞-topoi, the modal-HoTT formalization of Cartan geometry, Clausen–Scholze on condensed mathematics and analytic stacks, and the pyknoticity-versus-cohesiveness discussion — are landmarks for orientation, paraphrased rather than quoted.*
