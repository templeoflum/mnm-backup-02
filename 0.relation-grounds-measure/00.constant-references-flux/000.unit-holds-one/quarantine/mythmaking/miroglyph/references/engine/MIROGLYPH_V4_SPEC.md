# MiroGlyph v4 — Engine Specification

*A physics engine for nonlinear mythic traversal.*

-----

## Design Premise

MiroGlyph is a physics engine for mythic space. It provides the forces, topology, and detection systems that govern how agents (players, readers, participants) move through and interact with narrative material. The design is medium-agnostic — the underlying model can drive a game, interactive fiction, music composition, tabletop play, or any medium that involves traversal through structured symbolic space.

Temple of Lum is the first interface built on MiroGlyph. But the engine has no opinion about what interface uses it. It provides physics. The interface provides substance and expression.

What follows is the mechanical specification.

-----

## Core Architecture

### The Three Lenses

MiroGlyph operates through three discrete interpretive lenses. These are modes of engagement — ways the agent interacts with the material. They are not phases, stages, or sequences. The agent is in one lens at a time, but the engine tracks engagement across all three simultaneously.

|Lens        |Operation                   |What It Does                                                                                                  |
|------------|----------------------------|--------------------------------------------------------------------------------------------------------------|
|**Fracture**|Break apart                 |Separates what was fused. Reveals components hidden inside apparent wholes. Finds the seams.                  |
|**Echo**    |Detect pattern              |Shows what repeats, what rhymes, what answers across distance. Reveals connections and resonance.             |
|**Fusion**  |Synthesize                  |Brings together what was separate. Combines, merges, bridges. Creates new wholes from discovered parts.       |

**Critical design principles:**

- **Lenses change the agent, not the world.** The world (topology, nodes, pressures) is constant. What changes is the agent's interaction vocabulary and perceptual emphasis. Same node, same world — different verbs, different discoveries.
- **Three discrete states.** The agent switches between lenses, not along a continuous spectrum. Each lens is a distinct mode with its own interaction vocabulary.
- **The engine tracks all three.** Even though the agent is in one lens at a time, the engine records which lenses have been used where, making the agent's pattern of engagement visible over time. This data drives detection systems.

### The Six Pressures

Six universal pressures operate across the topology. These are the forces that act on material — the thermodynamics of mythic space. They create the tension that makes traversal meaningful rather than arbitrary.

|Pressure     |Force                                 |What It Creates                                                                          |
|-------------|--------------------------------------|-----------------------------------------------------------------------------------------|
|**Threshold**|The boundary between known and unknown|The moment of entering. Cost of passage. What must be given up to cross.                 |
|**Gravity**  |The pull toward depth                 |Weight, consequence, sinking into material that resists surface treatment.               |
|**Friction** |Resistance to easy movement           |The places where the material pushes back. Where progress requires genuine work.         |
|**Resonance**|Sympathetic vibration across distance |The uncanny recognition. The rhyme between things that shouldn't rhyme.                  |
|**Tension**  |Opposing forces held without collapse |Contradiction that doesn't resolve. The productive discomfort of holding two true things.|
|**Silence**  |The absence that shapes               |What isn't present. The negative space that gives form to what is. The pause.            |

**Note:** The pressures are not story beats or game levels. They don't occur in order. They describe the forces present at any node. A single node might carry heavy Gravity and Silence with minimal Friction. Another might be pure Threshold. The pressure profile is discovered through traversal, not prescribed.

**Somatic expression:** In embodied interfaces (games, performance), pressures communicate through sensation rather than visual transformation. A high-Gravity zone doesn't look heavier — it feels heavier. Haptic patterns, audio frequency, color temperature, screen texture, rhythm. The body recognizes pressure before the mind names it. This somatic channel is the primary way the world communicates its character to the agent.

### Nodes

A **node** is a point in the topology where pressures are active and lenses can operate. Nodes are the locations in mythic space.

Each node has:

- **Pressure profile**: Which pressures are active and at what intensity (0.0–1.0)
- **Interaction map**: What each lens can do at this node (Fracture verbs, Echo verbs, Fusion verbs)
- **Edge conditions**: What must be true for traversal to/from this node
- **Archetypal coordinates**: Optional ACP 8D spectral position, linking to the mythic library
- **Visit history**: How many times traversed, when, with which lenses, what accumulated pressure existed at the time

The system provides **18 template nodes** (3 lenses × 6 pressures) as starting scaffolding, but these are training wheels. Actual topologies generate their own nodes based on seed parameters and pressure configurations. In Temple of Lum, topology generation creates unique node arrangements for each labyrinth walk.

### Traversal

Movement through the topology follows mythic physics. The rules:

1. **No prescribed path.** There is no correct order. The engine offers possible movements based on pressure compatibility and edge conditions. The agent chooses.

2. **Pressure cost.** Moving between nodes has a cost determined by the pressure differential. Moving from a high-Gravity node to a high-Silence node requires traversing distance in pressure space. The engine makes this cost available but doesn't prevent the movement.

3. **Lens switching.** At any node, the agent can switch active lens. This doesn't change the node — it changes what interactions are available. Same material, different verbs. The engine tracks which lenses have been used where, making the agent's engagement pattern visible over time.

4. **Return mechanics.** Revisiting a node is not repetition. The engine tracks what has changed since the last visit — which other nodes have been traversed, which pressures have accumulated, which lens switches have occurred. The "same" node offers different return context based on everything that happened in between.

5. **Pressure accumulation.** As the agent traverses, pressures accumulate. Each node visited adds a fraction of its pressure profile to the agent's accumulated state. This isn't a resource — it's resonance. Material encountered later carries the weight of everything that came before. The accumulated pressure profile becomes a signature of how you've moved.

6. **Convergence.** When traversal creates a configuration where all three lenses have been used at a single node with meaningful engagement across each, the engine marks this as a convergence. Convergence strength is based on interaction depth and lens distribution evenness. The engine does not tell the agent what convergence means. It only records that it has occurred.

-----

## Detection Systems

### Fluidity (Nontion)

The engine continuously calculates a fluidity metric — a measure of responsive, non-rigid engagement. This is the quality the system nurtures. High fluidity means the agent is:

- Switching lenses in response to what nodes present (not from habit)
- Engaging diverse pressure profiles (not staying in one zone)
- Mixing resolved and unresolved material (not forcing closure or avoiding it)
- Achieving some convergences and depth without forcing them
- Not captured by any of the four patterns below

Fluidity is measured from 0.0 (completely rigid/captured) to 1.0 (fully fluid/responsive). A fluidity of 1.0 is very difficult to achieve by design — it represents near-perfect responsiveness.

**When fluidity is high, the topology responds by expanding.** New nodes appear. New edges connect previously distant regions. Interactions deepen. The world grows when you're moving well through it. This is not a reward mechanic — it's structural. Fluid engagement generates more structure to engage with.

### The Four Captures

The engine detects four specific patterns that indicate structural rigidity — moments where traversal has stopped being responsive and has begun serving a fixed function. These are not errors. They are attractors that every topology contains.

|Capture              |Pattern                                                  |What It Looks Like                                                                                            |
|---------------------|---------------------------------------------------------|--------------------------------------------------------------------------------------------------------------|
|**Comfort Loop**     |Repeated low-friction, low-threshold traversals          |Circling back to what's familiar. Material stops being tested. Resolution comes too easily.                   |
|**Spectacle Spiral** |High-tension nodes without gravity or silence             |Dramatic engagement without weight. Things happen but nothing costs anything. Intensity without depth.        |
|**Framework Lock**   |Single lens dominance across many nodes                   |One mode of engagement applied everywhere. Everything starts looking the same. Richness collapses into system.|
|**Stillness Grip**   |Persistent non-resolution; avoidance of convergence       |Wide movement, frequent lens switching, but no commitment. High surface diversity with no depth anywhere.     |

**Detection output:** Each capture produces a confidence score (0.0–1.0). The engine reports these scores and identifies which, if any, exceeds the activation threshold. Detection is signal, not judgment.

**Topology perturbation:** When a capture is detected, the engine does not warn the agent or suggest correction. It shifts the topology itself — subtly altering pressure profiles of nearby nodes to make the captured pattern less comfortable to sustain.

- **Comfort Loop** → increase Friction on revisited nodes; small random pressure shifts
- **Spectacle Spiral** → reduce Tension slightly; increase Silence near high-drama areas
- **Framework Lock** → boost interactions for underused lenses; diminish dominant lens yields
- **Stillness Grip** → increase Gravity at surface-visited nodes; ease convergence conditions

The agent may notice this or may not. They may adjust or may not. The engine creates conditions. It does not prescribe outcomes.

### Avoidance Topology

*(Name TBD — the concept is defined, the name will emerge through use.)*

When an agent's traversal pattern shows them consistently avoiding a particular pressure, lens, or region of the topology, the engine makes the gap visible. Not as judgment. Not as suggestion. As topology.

The obstacle and the reflection are the same surface. You cannot traverse it without encountering what you've been avoiding. But the engine never names what that is. It outputs the shape of the avoidance — the pressures underengaged, the lenses underused, the reachable nodes never visited — and lets the interface layer decide how to present that data.

**Implementation:** Track lens distribution and pressure engagement across traversal history. When statistical deviation exceeds threshold, output avoidance data: avoided pressures, avoided lenses, avoided nodes, and the overall avoidance shape. The interface (game, story tool, etc.) decides how to render this — as visible but unexplored terrain, as a gap in a map, as a silence in a score.

-----

## Integration Points

### ACP (Archetypal Codex Protocol)

Nodes can be linked to ACP archetypes via their 8D spectral coordinates. This allows the agent to ground their material in cross-cultural mythic patterns — to discover that the forces they're working with have structural siblings across 60+ traditions.

**Key principle:** ACP integration is optional and query-based. The engine does not automatically assign archetypes. The agent (or interface) can query: "What in the mythic library resonates with this node's pressure profile?" The engine returns candidates. The agent decides if the resonance is meaningful.

This prevents the engine from becoming a myth-assignment system. Resonance is discovered, not classified.

### Mythic Library

The 132-text corpus and pattern database provide empirical grounding. When a traversal generates a structural configuration that matches patterns found across multiple traditions, the library can surface the textual evidence. Not as "your story matches the hero's journey." As: "Here are moments across traditions where this pressure configuration appears."

### MiroForge (World Generation)

MiroGlyph provides traversal physics. MiroForge provides the world substrate. A topology created in MiroGlyph can seed a MiroForge world — pressure profiles and lens configurations translate into cosmological parameters, cultural tensions, and environmental features.

### Interface Layer (Temple of Lum and Beyond)

A MiroGlyph topology can be expressed through any interface that supports traversal. Temple of Lum is the first: a roguelite where topology maps to explorable zones, lenses map to player states with distinct interaction verbs, pressures map to somatic sensation, and the temple you build from collected artifacts is the visible record of your traversal history.

But the engine doesn't know or care about the interface. It accepts traversal inputs (move to node, switch lens, execute interaction) and outputs state (current position, pressure accumulation, detection scores, fluidity, avoidance data, topology perturbations). What the interface does with that data is the interface's concern.

-----

## What This Is Not

- **Not a plot generator.** It does not produce story beats or suggest "what happens next."
- **Not a template system.** The Hero's Journey is not encoded here. Neither is any other prescribed path.
- **Not an AI content engine.** It does not generate narrative material. It provides the physics within which material operates.
- **Not a diagnostic tool.** The captures and avoidance topology are structural features, not psychological assessments.
- **Not a reward/punishment system.** Captures are not punished. Fluidity is not rewarded. The topology responds to engagement patterns by shifting conditions. That's physics, not morality.

## What This Is

A space with physics. You bring the material. The engine provides forces, lenses, and topology. What you discover is yours.

-----

## MythOS Context

MiroGlyph is one component within MythOS — the larger ecosystem for mythic universe generation, cataloging, and iteration. The seven-layer stack:

|Layer|System               |Function                                                            |
|-----|---------------------|--------------------------------------------------------------------|
|1    |**Mythic Library**   |Empirical corpus — what myths actually look like                    |
|2    |**ACP**              |Archetypal coordinate system — the periodic table of mythic elements|
|3    |**MiroForge**        |World generation — cosmology from seed                              |
|4    |**MiroGlyph**        |Traversal physics — the space agents move through                   |
|5    |**Narrator Protocol**|Media translation — carrying structure across forms                 |
|6    |**Artifice**         |Visual rendering — representation of symbolic structure             |
|7    |**Experience**       |Participatory engagement — games, performance, ritual               |

MythOS is not being built top-down. Temple of Lum is being built first, and MythOS emerges from what works in practice. The stack above is the architectural vision; the implementation order is bottom-up, driven by concrete needs.

-----

## Open Questions

1. **Convergence calibration** — What exactly constitutes convergence? How much interaction per lens qualifies as "meaningful engagement"? This needs empirical tuning through actual play. The mythic library could provide baseline convergence signatures from attested material.

2. **Capture detection sensitivity** — Too sensitive and the topology intervenes prematurely. Too insensitive and captures calcify before response occurs. Central calibration challenge. Start with Comfort Loop (simplest signal), add others incrementally.

3. **Return mechanics granularity** — How much traversal history should inform the return context? Full history? Last N nodes? Pressure delta only? Needs prototyping to find the right balance between meaningful return and computational weight.

4. **Interaction vocabulary** — The current verb sets (Fracture: break_open, reveal_seam, separate, etc.) are starting points. Real interaction vocabulary will emerge from what feels meaningful during Phase 2 prototyping. The engine is verb-agnostic — it tracks that an interaction occurred, with which lens, at which node. What the verbs are called is an interface decision.

5. **Multi-agent topology** — When multiple agents traverse the same topology, their pressure accumulations interact. One agent's Gravity at a node affects the next agent's experience there. This is where collaborative myth-making becomes interesting — and where the most important design decisions live. Deferred until single-agent system is proven.

-----

## Technical Notes

### Scene-Tree Independence

The engine core is implemented in GDScript (Godot 4) with strict architectural separation. All core classes extend `RefCounted` — no Godot scene tree dependencies, no signals, no rendering. This scene-tree independence buys testability (all classes instantiate in headless CLI), architecture hygiene (core logic has no UI coupling), and separation of concerns (a Godot binding layer wraps core classes for scene tree integration). GDScript runs only in Godot — the separation is architectural, not cross-platform.

### Engine I/O

**Inputs the engine accepts:**
- Initialize traversal (topology, starting node, starting lens)
- Move to node
- Switch lens
- Execute interaction (verb at current node with current lens)

**Outputs the engine provides:**
- Current state (position, lens, accumulated pressure, history)
- Available moves (traversable neighbors with costs)
- Available interactions (verbs for current lens at current node)
- Detection scores (four captures, fluidity, avoidance data)
- Topology perturbations (what changed and why)
- Convergence events (where, when, strength)
- Artifacts discovered — behavioral snapshots crystallizing the full traversal state at the moment of discovery (lens, accumulated pressure, fluidity, capture scores, lens distribution, convergence history, topology seed, node context). Richer engagement at discovery produces richer artifacts.

The interface translates these inputs and outputs into whatever medium it serves.

### Class Prefix

All engine classes use the `MG` prefix: MGPressure, MGLens, MGNodeData, MGEdge, MGTopology, MGTraversalState, MGTraversalEngine, MGDetection, MGFluidity, MGPerturbation, MGTopologyGenerator.

-----

*This is a specification. The engine breathes through implementation. Refine through use.*
