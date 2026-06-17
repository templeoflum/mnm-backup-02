# frame — lineage-map — f0

opened 20260617-054040 · keeper · gait [float] · spec for a corpus-derived lineage/descent map

> **ownership correction (20260617):** the **build is seat 2's** (clerk/build) — designing the generator is system work, not keeper's. And **no external dependencies** — the DOT→graphviz render path is retired (graphviz is a dep); render the house way (a buildless browser-rendered unit or hand-authored SVG). Keeper's part is only this spec's *ground knowledge*: what the corpus encodes (the concept-`depends-on` DAG, not field-lineage) and the render-only-ground discipline. The v1 generator + DOT keeper built were reverted as an overstep; this frame stays as the handoff for seat 2.

**What.** A static, committed map that renders a field's (or branch's) descent and dependency structure **from the corpus's own records** — repeatable per field/branch. Not the build seats' interactive viewer (that renders the live lattice); a flat artifact that reads the corpus and draws only what it verifiably holds. Triggered by the hand-drawn `lineage-of-geometry-diagram.svg` at the 200 dock — kept here as a **look-and-feel target**, not a content source.

**Why a frame, not a build.** The map idea forces a question the corpus answers with numbers, and the answer splits the work in two. Settle the fork (below) before anything is built.

---

## the ground reality (measured, geometry as the case)

Across the 9 geometry fields (`coordinate-systems-erlangen-program`, `differential-geometry`, `projective-geometry`, `point-set-topology`, `lie-theory`, `group-theory`, `geometric-algebra`, `linear-algebra`, `category-theory`):

- **concept-dependency DAG is real:** 39 objects, **57 `object → object` `depends-on` edges** (the graph cleaned in the 20260616 reciprocity pass). Dense enough to draw.
- **field-to-field lineage is NOT in the data:** field records carry only `canon · essence · grade · links · name · state · type`. **No structured predecessor edge.** The descent the SVG draws (Euclid→non-Euclidean, Descartes→algebraic, the Klein/Cartan/Lurie unification ties, the temporal cycle) lives only in field-body **prose** (`origin → codification → door`), never as edges.
- the famous Klein node (`coordinate-systems-erlangen-program`) holds **1 object, 0 edges** — thin on ground despite its weight in the narrative.

**The line this draws:** what the corpus encodes as data is a **concept-dependency graph**. The SVG is a **historical-lineage narrative**. They are different artifacts, not two views of one.

---

## the two maps

**Map v1 — concept-dependency (buildable now, fully from ground).**
Render the `depends-on` DAG per field: nodes = objects, edges = `depends-on`, grouped by field, sources attached by citation. Honest, verified, already-clean data. It will look *unlike* the SVG — finer-grained, concept-level, no trunk story, no temporal unification cycle. It renders what we hold.

**Map v2 — historical-lineage (the SVG-like tree; blocked on a schema decision).**
The trunk-and-unification tree needs **structured lineage edges between records** that the schema does not have. Two ways to get them, one acceptable:
- *(reject)* parse the descent out of field-body prose — interpretive, fragile, and it would re-import a narrative as if it were ground (the quarantine-ontology mistake).
- *(the real option)* **extend the schema** with an explicit lineage edge (e.g. a `precedes`/`descends-from` relation between fields or objects, reciprocal like `depends-on`/`used-by`), authored deliberately and verified. Then v2 renders ground too.

v2 is the thing the SVG makes you want. We cannot build it faithfully until the schema carries lineage as data. That decision is the fork.

---

## the discipline (non-negotiable)

The map renders **only what the records hold** — no node, edge, or grouping absent from the corpus. Where the records lack an edge the narrative asserts, the map **shows the gap** (a thin/absent region is information: it marks where ground is yet to be laid). Drawn from our edges, the map *is* ground; drawn from an essay's framing, it imports a thesis. This is the same line as the quarantine-ontology rule: vet before lean, render last.

---

## draws-from (exact)

- `field:` (membership → grouping) · `depends-on` / `used-by` (the DAG, both directions) · `source:` and `links:` (citation edges) · `status` / `object-type` (node styling) · source `year` (temporal ordering where it exists — sources have years; objects do not, so the DAG is *not* inherently temporal).

---

## scope (chunk × slice × rung)

- **chunk:** {extractor + layout + render} producing a per-field static map.
- **slice:** (1) **extract** — read frontmatter → in-memory graph (pure, deterministic; keeper-owned, this is corpus knowledge); (2) **layout** — graph → positioned nodes; (3) **render** — → static output.
- **rung:** geometry field first → compare the generated v1 against the hand-drawn SVG to *see exactly where ground and narrative diverge* → generalize to any field → branch-level.

---

## forks (wants-word — settle before build)

1. **Scope: v1 only, or commit to v2?** v1 is buildable now and fully honest. v2 needs the schema extension (a `descends-from` lineage relation). Recommend: **build v1 first** (it's real ground and it test-drives the layout), and treat v2's schema-enrichment as a separate, deliberate decision once v1 shows what's missing.
2. **Output format.** SVG (matches the hand-drawn look, but a generator emitting tuned SVG is real work) · Graphviz/DOT→SVG (generatable, less bespoke) · Mermaid (cheap, in-markdown) · ASCII tree (cheapest, lowest fidelity). The look-and-feel target is the SVG; the honest-generated path is DOT→SVG.
3. **Who builds.** The **extract layer is keeper's** (corpus structure). The **render layer is a build-seat candidate** (they own rendering tech) — a handoff, parallel work, not an in-line dependency.
4. **Where it lives.** Generator = corpus equipment (with the corpus unit or this 000 cell); outputs = committed static maps on the ground side.

---

*float — this is a proposal of the shape, not a build. The v1/v2 fork and the schema question are the operator's to settle. The SVG is the aesthetic target; the corpus is the only content source.*
