# Frame — ts-rebuild — f0 — 20260607-100000 [float]

TS (Trajectoscope) rebuild and integration into the lattice. Promoted from intake frame chunk 1 — too much scope for two line items. 4 HTML instruments in a lineage chain, multiple plan/findings docs, vocabulary to reconcile, addresses to determine.

Source: frame.intake.f1 items 1.1 (TS rebuild) and 1.2 (TS naming/addressing).

## 0 — Inventory and ground truth

### 0.0 — Full file inventory at 200

All TS-related files at 200. Not just the 4 HTML + 2 docs from the intake frame — the TS_BRIEF lists additional plan docs, findings records, changelog, audit. Need the full count before planning work against them.

### 0.1 — Characterize each file

Read each instrument and doc. What does it do, what state is it in (frozen prior vs current working file vs archive), what vocabulary does it use, what are its dependencies.

### 0.2 — Vocabulary map

TS terms vs settled lattice terms. What translates directly, what diverges, what the TS project says that the lattice doesn't have words for yet. This is the ground for chunk 2 — can't rebuild vocabulary without knowing the full map.

---

## 1 — Documents

### 1.0 — Triage docs

Which are current, which are archive, which are reference. The TS_BRIEF lists: pipeline_state.md, integration_plan_formulas.md, integration_plan_fingerprint.md, integration_plan.md, findings.md, apparatus_audit.md, changelog.md. Each needs a read and a classification.

### 1.1 — Place docs — PARTIAL

FINDINGS_ternary_TS.md and TS_BRIEF.md placed at 111. [settled]
Remaining docs need addresses based on what they ARE.

### 1.2 — Remaining doc placement

Once triaged (1.0), place each doc at its address. Research → 111. Archives → 020. Plans and state docs — TBD based on triage.

---

## 2 — Instruments

The 4 HTML tools, in lineage order (oldest → newest). Each is a frozen prior except TS_formulas (current working file).

### 2.0 — TS_3D — the 3D keystone

Verified 3D instrument. Foundation of the chain. Assess what vocabulary needs updating, what notation maps to settled lattice terms. Rebuild where findings hold. Verify still works after changes.

### 2.1 — TS_4D — the 4D extension

Verified 4D SE(4) instrument. Extends 3D keystone. Same process: assess, rebuild, verify.

### 2.2 — TS_fingerprint — measurement tool

Calibrated fingerprint instrument. Shape signatures, identity discrimination. Assess, rebuild, verify.

### 2.3 — TS_formulas — current working file

The big one (~2845 lines). Expression library with pluggable formula bank. This is the active edge of TS development. Most complex, most vocabulary to reconcile. Assess, rebuild, verify.

---

## 3 — Addressing and integration

### 3.0 — Determine addresses

Where does each rebuilt instrument live in the lattice? Based on what it IS, not where it came from. The instruments are tools — 112 (workbench)? Or research tools at 111? Or something else entirely? This is a placement decision that needs discussion.

### 3.1 — Move and manifest

Move files to destinations. Three-point update: filesystem + instrument + manifest. Each move signed on the manifest at 201.

### 3.2 — Verify at destination

Instruments work at their new addresses. File paths, server paths, any internal references all resolve. Nothing broken by the move.

---

## Execution order

```
0.0 (inventory) — first, understand the full scope
0.1 (characterize) — with 0.0
0.2 (vocabulary map) — after 0.1, before any rebuild
1.0 (triage docs) — with 0.1
1.1 (place docs) — PARTIAL (FINDINGS + BRIEF at 111 [settled])
1.2 (remaining docs) — after 1.0
2.0 (TS_3D) — after 0.2 settled
2.1 (TS_4D) — after 2.0
2.2 (TS_fingerprint) — after 2.1
2.3 (TS_formulas) — after 2.2, biggest
3.0 (determine addresses) — can start alongside chunk 2
3.1 (move + manifest) — after 2.x and 3.0
3.2 (verify) — after 3.1
```
