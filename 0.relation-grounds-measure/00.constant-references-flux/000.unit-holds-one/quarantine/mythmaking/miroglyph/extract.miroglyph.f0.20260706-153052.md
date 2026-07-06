# extract — miroglyph — f0  · the deep brief

address: 000 — unit · holds · one  (quarantine shelf — unvetted)

*the deep pass on the vein's anchor. miroglyph is the operator's headline — designed 4-5 times over. this reconciles those attempts into one grounded picture for the rebuild (lantern dreams it, clerk builds it). untrusted false-body material: the design is coherent and worth rebuilding, but the code (JS app + Godot engine) is husk, and nothing here is a record. companion to [[survey.mythmaking-vein]].*

**raw source (heap, untouched):** `../mythic library/miroglyph` (v4 + JS app) · `../mythos` (the engine) · `../0_master sketch docs/…/parsed_output/game_design` (the lineage)
**composted:** 20260706-153052 · keeper

---

## what miroglyph is (plain)

A **navigation topology for mythic transformation** — a fixed skeleton of positions you move through to structure a journey, in any medium (story / ritual / divination / game / performance). *"Myth is not discovered, it is navigated."* Structure without prescription: it gives you the positions and their relationships; you choose the path.

**The skeleton (stable across every version): 19 points.**
- **18 nodes = 3 arcs × 6 conditions.**
  - 3 arcs (thematic modes): **Descent/Shadow (D)** · **Resonance/Mirror (R)** · **Emergence/Mythogenesis (E)**
  - 6 conditions (phases): Dawn/Initiation · Immersion/Encounter · Crucible/Crisis · Alignment/Harmony · Unveiling/Wisdom · Return/Integration
- **1 center: Nontion (∅)** — the pause/reset; integration-in-absence; traversable but not a node.
- Each node: dual naming (functional + evocative) + code (D1…E6) + title ("D1 = The Catalyst Shard") + role + tone.
- Relationships make structure *visible*: **polarity pairs** (conditions 1↔4, 2↔5, 3↔6), **condition-resonance** (D1/R1/E1 share initiation across arcs), an optional **motif/evidence-marker** system (6 categories O/A/Q/B/F/M; primary locked by condition, secondary by arc — so polarity and resonance are geometrically evident, not conceptual).
- **Fractal**: the same topology nests at any scale (beat ⊂ scene ⊂ chapter ⊂ book).

## the reconciliation — one skeleton, TWO realizations

This is the crux, and the thing the rebuild must decide. The same 3×6+center skeleton exists in two incompatible-on-the-surface framings:

| | **Authoring map** (`references/v4/`, the mythic-library version) | **Physics engine** (`references/engine/`, the mythos/Temple-of-Lum version) |
|---|---|---|
| the 3 | **arcs** — Descent · Resonance · Emergence (narrative *modes/lenses of experience*) | **lenses** — Fracture · Echo · Fusion (interaction *verbs*: break-apart / detect-pattern / synthesize) |
| the 6 | **conditions** — Dawn…Return (narrative *phases*, where you are) | **pressures** — Threshold · Gravity · Friction · Resonance · Tension · Silence (*forces* acting on material, 0–1 per node) |
| the model | a **static map** you author with — draw connections, save paths, apply to your medium | a **dynamical system** — traverse, accumulate pressure, the engine detects patterns (4 captures, fluidity, avoidance) and *perturbs the topology in response*; no win condition |
| Nontion | the pause between movements | the fluidity metric itself (responsive non-rigid engagement) |
| the artifact | a path library (named traversals) | behavioral snapshots crystallizing the full traversal state |

They are **not contradictory** — the engine spec calls its 18 nodes (3 lenses × 6 pressures) "training wheels" on the same skeleton. But the semantics differ (Descent ≠ Fracture; Dawn ≠ Threshold). **The rebuild's first design decision: is canonical miroglyph the authoring-map, the physics-engine, or a unified thing where the map's positions carry the engine's pressures?** My read: they're two faces of one object — *positions* (map) that each carry *forces* (engine) — and the lattice is well-suited to hold exactly that (a node = a position with a pressure-profile + typed relationships). But that's the operator's call, not mine.

## where it sits — mythOS is the umbrella

"MythOS" is not a sibling project; it's the **7-layer stack** miroglyph lives in (from the engine spec):

1. **Mythic Library** — empirical corpus (~132 texts) · 2. **ACP** — archetype coordinate system · 3. **MiroForge** — world generation · 4. **MiroGlyph** — traversal physics (this) · 5. **Narrator Protocol** — media translation · 6. **Artifice** — visual rendering · 7. **Experience** — games/performance/ritual.

Two consequences: (a) the heap's **`Artifice` / `Artifice v3`** folders are layer 6 of *this vein* — fold them into the vein map. (b) the stack is built **bottom-up from Temple of Lum**, not top-down — so the "OS" is aspirational scaffolding, same honesty-caveat as comp_alg's "algebra."

## the lineage (v1 → v4)

Preserved in `references/lineage/`. The through-line is **prescriptive → topological** (rules dropped, agency added), exactly the design maturation worth learning from:
- **v1** Traversal Grid (12 tiles, letter-coded phases) → **v2** Architecture Primer (archetypes, 6-cat 3-layer motif) → **v3** Narrative Architecture (conditions renamed Dawn…, 2-motif, tool schemas) → **v4** Minimal Core (navigation rules *removed*, dual naming, topology-not-prescription, tool-ready).
- Plus the big lore/system docs: **Filamentum Miroglyphica** (76KB, the fullest), Universe-Forge Manual, Universal Node Schematic, narrative primer.

## honest state — trust nothing

- **v4 is the mature core** and it is genuinely coherent — the philosophy (topology-over-rules, Nontion, fractal, evidence-markers) holds together and is worth rebuilding.
- **Two realizations sit unreconciled** (map vs engine) — the real design work.
- **All code is husk**: the JS "journey" app (`mythic library/miroglyph/js/`) and the Godot engine (`mythos/`, `MG*` classes). Both show the realized data model; neither is trusted or carried — rebuilt from the design, not adopted.
- The v4 skeleton (18 nodes with titles/roles/tones) is in `references/v4/miroglyph_v4_technical_spec.json` — the concrete data the rebuild starts from.

## what carries forward — for the rebuild

For **lantern** (the storyteller — this is his instrument) + **clerk** (build):
1. the **19-point skeleton** with dual naming + polarity/resonance relationships + Nontion — the fixed core.
2. the **two realizations to reconcile** (positions-carrying-forces is my read; operator decides).
3. the **motif/evidence system** (makes structure visible) + **fractal scaling** — the two features that most distinguish it from Hero's-Journey-style templates.
4. its **place in mythOS** — it queries ACP (archetypes) and seeds MiroForge (worlds); build the seams, don't silo it.
5. open questions the rebuild inherits (from the engine spec): convergence calibration, capture-detection sensitivity, return-mechanics granularity, multi-agent topology — all "tune through use," not solvable on paper.

## not taken (husk, stays in heap)

The JS app, the Godot engine + assets, the .docx binaries (parsed-JSON kept instead), the sprites. Reproducible/untrusted — left in the heap.
