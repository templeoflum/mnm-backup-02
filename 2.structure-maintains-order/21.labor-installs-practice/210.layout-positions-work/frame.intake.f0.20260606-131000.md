# Frame — intake — f0 — 260606-131000 [settled]

First intake frame. Source: schedule.lattice.f2.260606.md. Three chunks: research grounding, carry-forward, interface.

## 0 — Research grounding

### 0.0 — Survey (I1)

Read all 12 grounding compilations + 3 existing research docs at 200. For each: what it contains, what addresses it informs, what's verified vs speculative. Output: survey document with attribution map.

Compilations:
01 grounding reference, 02 minimal ops→structure, 03 intrinsic dimension/spacetime/grammar-ontology, 04 mind/memory/external hold, 05 self-similar recursive grammar, 06 making/craft/tacit knowledge, 07 relational architecture/esoteric systems, 08 traversal/initiation/transmission, 09 the shadow/unconstrained relation, 10 structured-vs-flat experiment design, 11 data-curation pipeline methods, 12 comparison/distillation/staging-handoff.

Existing: RESEARCH_actionable.md, RESEARCH_OPERATION_mind_not_map.md, observations.txt.

### 0.1 — Extract (I2)

For each compilation, pull verified findings and note which addresses they inform. Separate verified from speculative. Output: extracted findings per address, tagged.

### 0.2 — Cross-reference (I4)

Compare existing research docs (actionable, operation plan, observations) against new compilations. What overlaps, what contradicts, what extends. The existing docs use old notation (I/D/G) — translate to current vocabulary where findings hold.

---

## 1 — Carry forward

### 1.0 — Source policy (F1) — SETTLED

Leave legacy files alone completely. No annotation, no headers, no fixing. Take what's in them and rebuild forward with settled vocabulary and current vision. The old files are what they were — the new work is what they become.

### 1.1 — TS rebuild (K1)

Rebuild TS tools with current ground — settled vocabulary, addressing, keystone as addressing system. 4 TS HTML files + 2 docs at 200. Give them proper addresses. Update notation where the underlying findings still hold.

### 1.2 — TS naming and addressing

Determine correct addresses for TS files based on what they ARE and what they inform. Place at destination, update manifest. This pulls from G1 (file distribution) for the TS subset specifically.

---

## 2 — Interface

### 2.0 — State persistence (B3)

Fix go() state persistence — minimap clicks change address without saving. Add saveState() call in go(). Verify minimap click persists across refresh.

### 2.1 — Dynamic FILES (B8)

Replace static FILES object with filesystem read or manifest connection. Determine approach (fetch directory listing, read manifest, or hybrid). Build dynamic file discovery. Remove hardcoded FILES.

### 2.2 — Keyboard nav for V0 (B5)

Define key bindings for V0 selector (arrows navigate, enter select, space fold). Add keydown handler gated to activeView===0. Test interaction with existing V1 keys.

---

## Execution order

```
0.0 (survey) — read first, everything depends on this
0.1 (extract) — follows 0.0
0.2 (cross-reference) — follows 0.0, can parallel 0.1
1.0 (source policy) — can start anytime, but informs 1.1
1.1 (TS rebuild) — after 0.1 grounds findings, after 1.0 decides policy
1.2 (TS naming) — with 1.1
2.0 (persistence) — independent, anytime
2.1 (dynamic FILES) — independent, anytime
2.2 (keyboard nav) — independent, anytime
```

Chunk 2 is fully independent — can interleave with 0 and 1. Chunk 0 must precede chunk 1.

---

## Research routing (new — first time)

```
200 (receiving) → branch 2 (sort, audit, clean) → branch 1 guides (working knowledge) → branch 0 (ground, when solid)
```

Research arrives unsigned at 200. Gets cleaned and sorted through branch 2. Moves to branch 1 as guides — operational knowledge to pour through and work with. What proves solid enough eventually moves to branch 0 as ground truth. This is the first test of that flow.
