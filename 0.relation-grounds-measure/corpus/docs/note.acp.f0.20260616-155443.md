# note — acp — f0 · the archetypal context protocol, walked

opened 20260616-155443 · keeper · gait [walk] · companion to [[note.mythic-library.f1]]
subject: `mythic library/ACP/` — the concept layer. Walked the design docs + schema + a live archetype to locate what's groundable vs. fabricated, and what it tells us about the corpus format.

**Still quarantined.** Read the self-description (CLAUDE.md/README) as *claims*. This note records structure observed in the data (the Zeus record), not the project's verdicts.

> **WITHDRAWN 20260616 (operator).** The "what it answers for the corpus format" + "scope reframe" sections below are **premature and parked.** They adopted the ACP's own ontology (primordials, the instantiation hierarchy) as scaffolding — importing its claims, the exact allure-of-cohesion trap. **"Primordial" is the ACP's own derived guess, not ground; set it aside.** No record format until we've vetted what actually bears weight. What stands from this note: the *observation* that the coordinates/metrics are fabricated, and that the ACP is a mix of established archetypes + a lot pulled-from-the-texts — to be vetted figure by figure, **adopted as a set: nothing.** The source texts are the load-bearing layer; the ACP is not leaned on. ([[dont-adopt-the-materials-ontology]])

---

## what the ACP is

A relational graph of **997 archetypes** across four domains — mythological (399) · divination (401) · psychology (194) · modern (57) — plus **~22 primordials** (meta-archetypes all specific archetypes instantiate: Creator, Destroyer, Trickster, Hero, Great Mother/Father, Sovereign, Psychopomp…). Stored as JSON-LD. Called **ORAS** — "relationships are first-class citizens."

Each archetype node carries: `name` · `description` · `keywords` · `aliases` (cross-cultural) · `belongsToSystem` · `instantiates` (→ primordials, weighted) · `spectralCoordinates` (8 axes) · typed `relationships` (17 kinds: POLAR_OPPOSITE, SHADOW, COMPLEMENT, EVOLUTION/DEVOLUTION, CULTURAL_ECHO, SYNTHESIS, CONTAINS, MIRRORS, TENSION, CONSTELLATION…).

The 8 axes: order-chaos · creation-destruction · light-shadow · active-receptive · individual-collective · ascent-descent · stasis-transformation · voluntary-fated.

## the structural rhyme (and its real source)

The ACP's self-description of its own nature — *"relational… the links between records are the grounding, the dependency graph is the point"* — is almost verbatim root 0's nature (relation·grounds·measure) and the corpus schema's own words. This is **not** convergence to be marveled at: the operator authored both, so the same instinct surfaced twice ([[one-author-three-faces]]). The practical consequence: **the ACP is already shaped like our corpus** — a graph of grounded entities with typed links — so it re-expresses into `field/source/object` with little force.

---

## the contamination boundary (located precisely, in the Zeus record)

| ACP field | verdict | why |
|-----------|---------|-----|
| System `primarySources` (Hesiod, Homer, Orphic…) | **GROUND** | real scholarship; maps to `texts/` |
| archetype `name` / `description` / `keywords` | **GROUND** (doctrinal) | attested figures, faithful descriptions |
| `aliases` (Zeus→Jupiter, Dyaus Pita, Indra) | **GROUND** (the mapping) | real comparative mythology |
| `instantiates` → primordial | **ground as interpretation** | defensible reading, label it interpretive |
| `relationships` (typed) | **mixed** | real ones attested; "+951 reverse / +558 correspondences" were script-generated — verify each |
| `spectralCoordinates` (8 decimals) | **BRACKET / DROP** | fabricated precision; validation showed 1D culture beat the full 8D |
| `elementalComposition`, `fidelity`/`weight` decimals | **BRACKET / DROP** | interpretation dressed as measurement |
| "88% complete / 84.5% mean score" / completeness tiers | **DROP** | self-scored process metrics, not content |

**One-line rule:** keep the *entities, their descriptions, their attestations, and their named relationships*; strip the *numbers*. The archetypes are real; the coordinates are a story told about them.

---

## what it answers for the corpus format (PROPOSED — for the operator to settle)

The ACP resolves the granularity questions [[list.mythic-library]] left open:

- **object grain = one per archetype** (~997 candidate objects: a deity, a hero, a tarot card, a Jungian type), with **primordials (~22) as a meta-object layer above** (object-type `primordial`).
- **object-type vocabulary (myth):** `primordial` · `deity` · `hero` · `creature` · `myth/narrative` · `motif` · and the divination/psychology kinds where we take those domains (`tarot-card`, `hexagram`, `rune`, `jungian-archetype`…). Joins the open list on use.
- **the source↔object spine:** the **texts ground the archetypes.** A `source` (text) attests `object`s (archetypes); a System's `primarySources` is the wiring. This is the relational grounding root 0 is for.
- **typed relationships:** the myth/archetype layer wants richer links than `depends-on`/`used-by` — the ACP's POLAR_OPPOSITE / CULTURAL_ECHO / SHADOW etc. May warrant a typed-relationship extension to the object schema (a real schema question, deferred).

### scope reframe
The four ACP domains are not equal priority. **Mythological (399)** is the half that pairs with the library texts — the natural first object layer. **Divination / psychology / modern (598)** are separate symbolic systems with thinner textual attestation; later, by their own merits. The **primordials** are the conceptual keystone and likely ground first as the spine.

---

## open / deferred
- exact source-record shape for a myth text (extend [[template.corpus-records]] §source) — needs the operator's settle.
- whether the object schema gains typed relationships for the myth layer.
- the fabricated coordinates: drop entirely, or preserve once as "ACP v0.3 proposed coordinates, unverified" for the record? (lean: drop; they mislead more than they hold.)
- divination/psychology/modern domains: parked until the mythological half is grounded.
- `legacy/` (original ~1200-archetype sketches) and `calibration/` not yet walked.

next: settle the source-record shape on a real text, ground a first tradition end-to-end (proof slice), let the format settle through use.
