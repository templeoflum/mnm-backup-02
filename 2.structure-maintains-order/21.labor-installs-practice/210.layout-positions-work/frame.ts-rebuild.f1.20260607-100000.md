# Frame — instrument-rebuild — f1 — 20260607-100000 [float]

Instrument rebuild and integration into the lattice. Scope expanded from TS-only to TS + spline continuity — they may be two views of one instrument (measuring continuity of a trajectory). That question is part of the work, not a precondition. Promoted from intake frame chunk 1.

Source: frame.intake.f1 items 1.1, 1.2. Expanded after 0.0 inventory revealed spline continuity as sibling, not separate.

## 0 — Inventory and ground truth

### 0.0 — Inventory and characterize (single pass) — DONE

Full inventory of 200. 41 files across 5 streams. Instrument-scoped files identified:

**TS instruments (4):**
- TS_3D.html (2,689 lines) — frozen prior, 3D keystone
- TS_4D.html (2,763 lines) — frozen prior, 4D SE(4)
- TS_fingerprint.html (2,786 lines) — frozen prior, calibrated measurement
- TS_formulas.html (2,844 lines) — current working file, expression library

**Spline continuity (2):**
- spline_continuity_v2 (4).html — the keystone toy, derivative ladder + 4 modes
- spline_continuity_BRIEF.md (133 lines) — cold-start brief

**TS docs (5, 2 already placed):**
- findings.md (883 lines) — master TS chronological findings record
- ux_plan.md (179 lines) — TS instrument UI restructure plan
- HANDOFF.md (77 lines) — session manifest covering TS status
- TS_BRIEF.md — placed at 111 [settled]
- FINDINGS_ternary_TS.md — placed at 111 [settled]

### 0.1 — Vocabulary map

Drop all aspirational claims and scaffolding vocabulary. What do these instruments actually DO at the signal/math level, stripped to mechanism? TS sweeps trajectories through composed rotations + translations. Spline continuity measures where things break on the derivative ladder. The vocabulary rebuild starts from what the instruments ARE, not what they CLAIM. Sketch in discussion, confirm with user.

---

## 1 — Documents

### 1.0 — Triage docs

Which are current, which are archive, which are reference. Scope now includes spline_continuity_BRIEF.md alongside TS docs. The TS_BRIEF lists plan docs not present at 200 (pipeline_state, integration plans, apparatus_audit, changelog) — from a different project environment. Only what's HERE gets triaged.

Present at 200: findings.md, ux_plan.md, HANDOFF.md, spline_continuity_BRIEF.md.

### 1.1 — Place docs — PARTIAL

FINDINGS_ternary_TS.md and TS_BRIEF.md placed at 111. [settled]
Remaining docs need addresses.

### 1.2 — Remaining doc placement

After triage. Research/findings → 111. Archives → 020. Plans — TBD.

---

## 2 — Instruments

### 2.0 — Strip vocabulary to mechanism

Before rebuilding any instrument: drop the claims, the thesis language, the scaffolding. What does each instrument actually compute? What does it measure? What's the math, what's the signal flow? This is the ground for any vocabulary rebuild — you can't rename what you don't understand mechanically.

Applies to all 5 HTML instruments (4 TS + 1 spline continuity).

### 2.1 — Assess connection

Do TS and spline continuity connect at the mechanism level? Measuring continuity of a trajectory — is that what's happening, or is that a seductive rhyme? The instruments should answer this, not the vocabulary. If they connect: one rebuild, integrated. If they don't: two rebuilds, separate but parallel.

### 2.2 — Rebuild

Vocabulary update, notation update, verify. Scope and shape depends on 2.1.

---

## 3 — Addressing and integration

### 3.0 — Determine addresses

Where do the rebuilt instruments live? Depends on whether they're one device or two, and what they ARE after the vocabulary strip.

### 3.1 — Move and manifest

Three-point update: filesystem + instrument + manifest. Each move signed.

### 3.2 — Verify at destination

Instruments work at new addresses. Paths resolve. Nothing broken.

---

## Execution order

```
0.0 (inventory) — DONE
0.1 (vocabulary map) — next. strip to mechanism, sketch in discussion.
1.0 (triage docs) — after 0.1 or alongside
1.1 (place docs) — PARTIAL (2 of 5+ placed)
1.2 (remaining docs) — after 1.0
2.0 (strip vocabulary) — after 0.1 settled
2.1 (assess connection) — after 2.0, the key question
2.2 (rebuild) — after 2.1 settled
3.0 (determine addresses) — after 2.1
3.1 (move + manifest) — after 2.2 and 3.0
3.2 (verify) — after 3.1
```
