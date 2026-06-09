# SKETCH — The Lattice as a Data Refinery (parked, dream-stage)

*Not a plan. A parked sketch so this can be picked up cold later. Status: dream-state, accumulating. The bet is real and falsifiable-cheaply; the details are deliberately loose. Do not over-build this — the discipline is to test small before believing.*

---

## The bet (one line)

Use the lattice as the **instrument that sorts, organizes, and condenses a public-commons corpus into a small, dense, high-integrity reasoning set** — distilled and hand-folded, not scraped — and show that a small model reasoning *through* that set outperforms the same model over flat (unsorted) material. The leverage is **curation quality, not scale.**

## Why this version and not the others (so we don't relitigate)

- **NOT** "lattice as architecture / train from scratch this way" — too expensive, unproven, and the spot where the structure's beauty could outrun evidence. Held as deeper dream, gated behind this cheaper test.
- **NOT** "lattice becomes the training data" — that phrase never cashed out concretely; it conflates schema with examples.
- **YES** "lattice as refinery": corpus is the fuel, lattice is the refinery, small model is the engine. The lattice does *curation*. This plays where the real frontier leverage is (small models on small excellent corpora beat scale), and it's falsifiable cheaply with classical ML.

## The pipeline (the shape, not the spec)

```
public-commons corpus  (math / science / ancient literature / first-principles texts)
        │
        ▼   walk it in, sort each piece to an address
lattice placement   (ground=0-ward / do=1-ward / document=2-ward; depth = how condensed)
        │
        ▼   audit + both-sign fold (condense in place, archive-not-delete, checkpoint-not-overwrite)
distilled reasoning set   (small, dense, navigable, hand-folded for integrity)
        │
        ▼   feed a small model
inference   (retrieval/reasoning THROUGH the folded set — fine-tune only if retrieval shows signal)
```

Every step inherits a discipline already earned: determined placement (no organizing overhead), the fold = `sign·hands·record` (GGG — audited, attested, passed forward), prune→compost (archive, never kill), advance→checkpoint (never overwrite). Lossless by construction: small working set, complete history.

## The method (how to build it — matches how we actually work)

- **Together, toys, smart constraints.** Classical ML is enough to start — embeddings, clustering, similarity, simple classifiers. No deep nets needed to test the core claim.
- **ML proposes placement, human signs off** (the propose-verify-WAIT pattern). The sorting *scales* via ML suggestion; the *integrity* comes from human sign-off on the fold. Both parties, same as the context-folding system.
- **Test small before believing.** The blade: lattice-folded set vs. flat control set of the same material — does reasoning over the folded set measurably do better? If no signal at small scale, the structure isn't earning its place — stop. If signal, scale the experiment.

## The smallest honest first toy (the real first move)

Pick the *tiniest* version that tests **"does lattice-folded data beat flat data for some reasoning task?"**

- **corpus**: a small, bounded, high-quality slice (e.g. one domain's first-principles — a few hundred short passages, public commons).
- **task**: a narrow reasoning/QA task answerable from that slice.
- **two sets, same material**:
  - *folded*: sorted to addresses (ML-proposed, human-signed), condensed via fold-discipline → retrieval base
  - *flat*: the same passages, unsorted, flat retrieval
- **measure**: does the model answer better reasoning *through* the folded set than the flat one? (accuracy, or reasoning quality on held-out questions)
- **cost**: a sitting or two; little/no compute; no fine-tuning required for the first pass (retrieval-only shows signal or doesn't).

This is the move that converts dream → toy. Everything past it waits on its result.

## Open parts (honest — pin these when it's picked up)

1. **What "potent reasoning set" concretely IS** — retrieval/reasoning base (model answers *through* it) vs. fine-tuning examples vs. a structured first-principles+worked-toys set. Lean: **retrieval base first** (cheapest to test, no fine-tune needed to show signal).
2. **The sorting mechanism** — ML-proposed-placement + human-sign-off is the scalable-but-high-integrity path. What features drive the auto-placement (embedding similarity to address-anchors? mode-classifier?) is unpinned.
3. **What "fold/condense" concretely does to text** — summarize? extract claims? link? The condensation step is the heart of "integrity" and is the least-specified. Needs its own small experiment.
4. **The control's fairness** — the flat set must be a *fair* baseline (same material, comparable retrieval), or the test proves nothing. Design the control carefully — this is where a sloppy test would falsely flatter the lattice.

## What would make it worth escalating (the gate)

Only if the smallest toy shows the **folded set measurably beats flat** does it become worth: bigger corpus → fine-tuning experiments → and only *then*, far later and still gated, the deeper "structure the architecture / train from scratch" dream. Each step earns the next. No step skipped.

## The one thing to stay suspicious of

The lattice is *so* generative-feeling that everything looks like it maps to it (the Eco hermetic-drift risk, surfaced in the research dives). The defense is the control set and the measurement: **the lattice earns its place only if the folded data does something flat data can't.** Beauty isn't evidence. The test is.

---

*Parked. Accumulating in the dream-state. Pick up at "the smallest honest first toy" when ready — that's the move that makes it real or kills it cheaply.*
