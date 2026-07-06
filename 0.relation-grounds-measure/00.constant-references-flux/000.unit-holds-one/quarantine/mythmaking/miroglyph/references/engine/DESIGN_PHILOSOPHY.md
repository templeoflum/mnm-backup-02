# MiroGlyph Engine — Design Philosophy

## The Six Pressures

Every node in a MiroGlyph topology carries a 6-dimensional pressure profile:

| Pressure | Force | What It Creates |
|----------|-------|-----------------|
| **Threshold** | The boundary between known and unknown | Cost of passage, the moment of entering |
| **Gravity** | The pull toward depth | Weight, consequence, resistance to surface treatment |
| **Friction** | Resistance to easy movement | Where the material pushes back |
| **Resonance** | Sympathetic vibration across distance | Recognition, rhyme between distant things |
| **Tension** | Opposing forces held without collapse | Productive discomfort, contradiction that doesn't resolve |
| **Silence** | The absence that shapes | Negative space, the pause, what isn't present |

These aren't game mechanics dressed as metaphor. They're structural forces that describe the character of any point in a topology. A node with high Gravity and Silence is genuinely heavy and quiet — in a game, a story, a musical composition, or any medium that maps onto MiroGlyph.

The pressures accumulate as you traverse. Each node you visit blends its pressure profile into your accumulated state. By step 50, your pressure signature is a record of everywhere you've been — not as a list of names, but as a felt weight.

## The Three Lenses

| Lens | Operation | What Changes |
|------|-----------|-------------|
| **Fracture** | Break apart | Reveals components, separates wholes into parts |
| **Echo** | Detect pattern | Shows repetition, resonance, connections across distance |
| **Fusion** | Synthesize | Combines what was separate, creates new wholes |

The lenses change the agent, not the world. The same node exists regardless of which lens you're using — but each lens opens different interaction verbs and different possibilities for what you discover there.

This is the crucial design choice: **the world is stable, perception shifts.** You don't change the topology by looking at it through Fracture. You change what actions are available to you. The topology tracks which lenses you've used where, making your perception pattern visible over time.

Three lenses, not two, not five. Three is the minimum number that creates genuine choice. Two lenses become binary opposition. Four or more dilute the distinctness. Three gives you: the analytical (Fracture), the connective (Echo), and the synthetic (Fusion) — modes that complement each other without overlap.

## The Four Captures

Captures are attractors in the traversal space — patterns where engagement stops being responsive and starts serving a fixed function:

| Capture | Pattern | What Calcified |
|---------|---------|----------------|
| **Comfort Loop** | Same nodes, same lens, low friction | Exploration collapsed into repetition |
| **Spectacle Spiral** | High tension without gravity or silence | Intensity without depth |
| **Framework Lock** | Single lens applied everywhere | Perception collapsed into system |
| **Stillness Grip** | Wide movement, no commitment | Surface diversity without engagement |

### Physics, Not Morality

When the engine detects a capture, it does not:
- Warn the agent
- Display a message
- Suggest a different path
- Penalize the behavior

It shifts the topology. Comfort Loop increases Friction on revisited nodes. Spectacle Spiral reduces Tension and increases Silence near high-tension areas. Framework Lock boosts underrepresented pressures. Stillness Grip increases Gravity at surface-visited nodes.

The agent may notice the shift or may not. They may adjust or may not. The engine creates conditions. It doesn't prescribe outcomes. This is physics — the topology responds to how you move through it, the way a landscape erodes under traffic.

### Why Four Captures?

Each capture maps to a different failure mode of engagement:

- **Comfort Loop** = repetition without risk
- **Spectacle Spiral** = stimulation without substance
- **Framework Lock** = understanding without flexibility
- **Stillness Grip** = movement without commitment

These are structurally complete: they cover the axes of depth (comfort vs. spectacle) and breadth (framework vs. stillness). Any pattern of rigid engagement maps onto one or more of these four.

## Fluidity

Fluidity is the positive counterpart to captures. Where captures detect rigidity, fluidity measures responsive engagement — the quality of moving through material rather than getting stuck in it.

Five weighted signals:

| Signal | Weight | Measures |
|--------|--------|----------|
| Lens responsiveness | 0.25 | Switches happen at pressure boundaries, not from habit |
| Pressure diversity | 0.20 | Agent encounters varied pressure profiles |
| Resolution rhythm | 0.20 | Interaction rate is balanced (not zero, not compulsive) |
| Capture absence | 0.20 | No single capture pattern dominates |
| Engagement depth | 0.15 | Convergences and depth unlocks happen naturally |

A fluidity of 1.0 is nearly impossible by design — it requires perfect responsiveness across all signals. The practical ceiling is 0.65-0.80. This isn't a target the agent optimizes for. It's a measurement the engine takes.

**When fluidity is high, the topology expands.** New nodes appear between existing ones, blending pressures from their neighbors and the agent's accumulated state. The world grows when you're moving well through it. This isn't a reward — it's structural. Fluid engagement generates more structure to engage with.

## Convergence and Depth

**Convergence** occurs when all three lenses have been used at a single node with meaningful engagement. It's the engine's measure of thorough encounter — you've broken something apart (Fracture), found what it echoes (Echo), and synthesized something new (Fusion) at the same place.

**Depth unlocks** are hidden thresholds on nodes that require specific interactions across multiple lenses. Meeting the requirements reveals data — amplified pressure signatures, hidden connections, pressure snapshots — but never changes the topology directly. Depth is discovered, not forced.

Both convergence and depth feed into fluidity measurement. The engine doesn't tell you to converge. It measures whether convergence happens naturally as part of responsive engagement.

## The Feedback Loop

The complete engine cycle:

1. You move through the topology, accumulating pressure
2. The engine detects your engagement pattern (captures, avoidance, fluidity)
3. The topology shifts in response (perturbation, expansion)
4. You continue moving through the shifted topology

This is a dynamical system, not a scoring system. There's no win condition. The topology evolves with the agent's engagement, and the agent's engagement evolves with the topology. The engine provides the physics that makes this possible.

## Labyrinths, Not Dungeons

Generated worlds are labyrinths. The player walks them. The loop is the return — rewalking a labyrinth you've walked before. You enter knowing you'll reach the center. The question is what happens to you on the way.

The game is still structurally a roguelite — procedural generation, meta-progression, permadeath of the walk's state — but the framing and vocabulary shift completely. There are no "dungeon runs." There are walks through labyrinths. A walk has a beginning (leaving the temple), a middle (traversal, discovery, pressure), and an end (return). What you bring back is an artifact — a crystallized moment.

## Artifacts as Behavioral Snapshots

Artifacts are not loot. They are not stat sticks. They are crystallized moments — a snapshot of the full traversal state at the moment of discovery:

- **Lens**: Which lens was active
- **Pressure accumulation**: The 6D pressure signature built up to that point
- **Fluidity**: How responsively you'd been moving
- **Capture scores**: Which captures were active, how strongly
- **Lens distribution**: How evenly you'd engaged across all three lenses
- **Convergence history**: What convergences had occurred
- **Topology seed**: Which labyrinth this was (enabling revisit with the same seed)
- **Node context**: The specific node and its pressure profile at discovery

Value comes from depth of engagement at the moment of earning, not from rarity or stats. An artifact earned during fluid, multi-lens engagement with several convergences carries a richer behavioral signature than one picked up while comfort-looping. The player may not see these numbers directly — but the artifact's character is shaped by them.

The artifact lets you revisit the same seed — the same labyrinth, but you've changed. What was heavy may now feel light. What you missed the first time is still there.

**Engine note:** `MGTraversalState.to_dict()` already captures most of this snapshot (lens, pressure, history, nodes_visited, convergence_events, depth_unlocks, lens_at_node). Additional state needed for full artifact capture: `topology_seed`, `generator_config`, `capture_scores` (computed on demand via MGDetection), `fluidity_score` (computed on demand via MGFluidity), and `node_pressure_snapshot` (the discovery node's pressure profile after any perturbation).

## The Temple as Living Space

The temple is not an inventory screen. It is a space the player composes — a personal mythology library that changes with you and that you can rearrange. You curate which stories sit where, which artifacts you foreground, how your journey is organized. The temple reflects your patterns back to you over time.

The temple does NOT directly influence labyrinth generation — that's handled by artifact slots (see below). The temple is long-term curation and self-reflection. Its architecture will likely be a topology itself (artifacts as nodes, spatial relationships as edges), but the specifics are Phase 3 design.

## Artifact Slots for Labyrinth Generation

Before entering a labyrinth, the player has a small number of optional modifier slots (start with 3, tunable). Each slot can hold one artifact or be left empty. Slotted artifacts feed their pressure snapshots into the generator as constraints, biasing what topology gets built. Empty slots = pure seed generation.

Three natural play modes emerge with no mode selection UI:

- **Clean walk** — all slots empty. Fresh encounter. The labyrinth is shaped only by its seed.
- **Seeded return** — slot an artifact from a previous walk. Same seed, different you. The labyrinth is the same one you walked before.
- **Shaped walk** — slot artifacts from different walks. Combined pressure constraints produce new configurations. Labyrinths shaped by where you've been.

This is the only mechanism by which artifacts influence generation. The temple is for curation. The slots are for shaping.

## What This Is Not

- Not a morality engine. Captures aren't punishments. Fluidity isn't virtue.
- Not a plot generator. The engine provides forces, not narrative.
- Not a diagnostic tool. Capture patterns are structural features, not psychological profiles.
- Not a reward system. Topology expansion is physics, not a dopamine lever.

## What This Is

A space with physics. You bring the material. The engine provides forces, lenses, and topology. What you discover is yours.
