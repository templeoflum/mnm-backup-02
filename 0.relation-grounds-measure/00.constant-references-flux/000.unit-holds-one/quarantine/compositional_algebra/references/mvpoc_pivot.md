# Plan — MVPoC Pivot

**Status:** persistent — **paused** 2026-05-28 while [calibration_completeness.md](calibration_completeness.md) rebuilds calibration as a proper stress-test bed. Resumes from MVPoC #3 against the redesigned calibration when that plan retires.
**Source:** operator reframe (2026-05-28 session, mid-session pivot)
**Posture:** guiding-light. This plan governs which kinds of work are on-track and which are drift, for as long as load-bearing claims remain unproven.

---

## Pause context

MVPoC #1 (math-drives-Trajectory) is verified. MVPoC #2 (Identity/Trajectory split) was attempted and retired as moot — the split is constitutive of framework structure, not at risk. The attempt also surfaced a deeper problem: MVPoC #2 was sourced from framework-level preset bundles authored against a now-removed prior work. The whole pipeline was leaning on inherited vocabulary that no calibration realization had purpose-built.

Per the operator's reframe: framework should be pure direction on construction (no presets); calibration is the only work and should hold its own presets as MVPoC-style archetypes. The strip + redesign is scoped in [`calibration_completeness.md`](calibration_completeness.md).

When that plan retires, the MVPoC pivot resumes — next candidate is MVPoC #3 (translation-discipline audit) sourced from calibration's actual rewritten realizations.

---

## Premise

The framework has accumulated structure faster than it has accumulated proof. Eight load-bearing claims (below) have been *named* — Identity/Trajectory split, math drives Trajectories, three-tier composition, spline as score, translation discipline, signal flow as typed pipeline, layer decomposition, generation tracking — and only fragments of any of them have been actually demonstrated. Calibration A is the closest integrated test and stalled at "fourth attempt."

Recent sessions (N+4 through N+6) drifted into meta-work: posture documents, see/know/do reorganization, atomic-discipline split, plans posture, network map V1, friction-set reframes. Each was honest and load-bearing for the project's *organizing structure* — but none was a proof of a *framework* claim. The framework's compositional logic is still mostly aspirational.

The pivot: **switch from scaffolding work to MVPoC work.** Pick one unproven load-bearing claim at a time, design the smallest possible proof, build the verification surface the operator needs to be convinced, complete both. Repeat. Per [CHARTER.md](../../../see/CHARTER.md) there is no shipping and no users — MVPoCs serve the operator's own coherence, sanity, and the framework's teachability to anyone who later joins the practice.

---

## The method

Every MVPoC is two things, built together:

1. **The proof** — the smallest artifact that, if it works, demonstrates the load-bearing claim. Not the cleanest or most general version; the *smallest viable* version.
2. **The verification surface** — the workbench view through which the operator looks at the proof and confirms it does what's claimed. Without this surface, the proof is a private artifact between author and AI; nothing has been *seen*.

**Pairing is non-negotiable.** A proof without a verification surface isn't in place — nothing has been seen, so nothing has been verified. A verification surface without a proof to verify is generic workbench-building (drift).

**Verification surfaces accumulate.** Each one is built specifically for its MVPoC, but persists into the workbench afterward. Over time the workbench becomes a museum of pressure-tested views, each one earned by having proven a claim. This replaces the generic F2 → F3 → F4 build order.

---

## What's load-bearing (claims to prove)

Per the structural / calibration / fine-tuning split discussed mid-session:

1. **Identity/Trajectory split** — Identity and Trajectory are separable. Two realizations of the same spline can share Trajectories under different Identities.
2. **Math drives all Trajectories** — Trajectory derives from spline math (knots + continuity grades + felt-quality function `f_n`); not hand-authored.
3. **Three-tier composition** — Tier 1 sub-functions compose into Tier 2 presets compose into Tier 3 realizations, with abstraction barriers that don't leak.
4. **Spline as score** — knots + per-movement signals + continuity grades + `f_n` is *the* authoring artifact; realizations derive from it.
5. **Translation discipline** — framework vocabulary never appears in generator-facing prompts.
6. **Signal flow as typed pipeline** — output of pass N feeds input of pass N+1 with type discipline holding. (The *existence* of typed flow, not the specific 12-pass shape — that's calibration.)
7. **Layer decomposition** — there is a layer partition over the work's content. (The *existence* of layers, not the specific twelve — that's calibration.)
8. **Generation tracking + framework versioning** — IDs and version pins; anything reproduces.

## What's calibration

The specific shape of each load-bearing structure. Don't propose MVPoCs for these — they're tuned by running the framework, not by isolated proofs. Examples:

- The specific 12 passes (boundaries, what goes where)
- The specific 12 layers (Math Visual / Math Audio split; Voice/Script/Presentation separation)
- The 18 math primitives (which are in; which are out — see [open question: math primitive gap](../../../see/handoff/OPEN_QUESTIONS.md#math-primitive-gap))
- Continuity grades C⁰/C¹/C² (whether to add C³+; whether Shape derivation matches declared grades)
- Voice sub-function set (Register / Stance / Positioning / Configuration / Affect)
- Pass-boundary calls (e.g., Pass 9 separate from Pass 10)

## What's fine-tuning

Work-specific or polish-level; no MVPoC needed. Examples:

- Specific preset content (Mythic, Architect, Notebook entry, Intimate page, etc.)
- Specific motifs / characters / objects within a particular work
- Spline scores themselves (the mathematical content of Calibration A)
- Prompt wording inside the translation envelope
- Documentation prose polish in `know/references/`

---

## MVPoC candidates and verification surfaces

| # | MVPoC | Claim proven | Verification surface | Status |
|---|---|---|---|---|
| 1 | **Math-drives-Trajectory derivation** | #2 | [`trajectory.html`](../workbench/trajectory.html) — knobs for 3 knot values + knot-1 position + continuity grade (C⁰/C¹/C²) + `f_n` gamma; bare spline and derived Trajectory rendered together; y-axis auto-fits so overshoot is honest. No control authors the Trajectory directly. | **in place — operator verified 2026-05-28** |
| 2 | **Identity/Trajectory split** | #1 | Side-by-side: same 1-movement spline, same derived Trajectory shape, two Identities (e.g., two Voice presets). Trajectory shape preserved across both; Identity is what's different. Reuses MVPoC #1's Trajectory tool; adds Identity selector + paired rendering. | next candidate |
| 3 | **Translation-discipline audit** | #5 | A view that loads any prompt text, scans it against framework vocabulary (sub-functions, preset names, layer names, internal terms), highlights leaks in red. Static vocabulary list; one prompt loaded; client-side regex. | pending |
| 4 | **Signal-flow trace** | #6 | A view that picks one signal (e.g., "intensity at beat 3"), shows its read/write state at every pass it touches. One signal; one spline; trace through 3–4 passes is enough. | pending |
| 5 | **Three-tier composition reuse** | #3 | Tier 2 preset selected; rendered in the context of two minimal toy Tier 3 realizations. Same preset, two outputs; abstraction barrier inspectable. | pending |
| 6 | **Generation-tracking + framework-version reproduction** | #8 | Pin a framework version, freeze a generation, regenerate from the spec at that version, verify identity. Mechanically implemented — needs a verification *view* and an actual rerun. | pending |
| 7 | **Calibration A end-to-end** | bundle of #4/#5/#6/#8 (integrated) | All 11 pass outputs viewable in sequence; final triplet voiced. Large. | deferred — after small proofs land |
| 8 | **Layer decomposition pressure test** | #7 | Take a work's content, render it broken into layer outputs; verify no content is in two layers or absent from all. One work; layer-by-layer content view. | pending |

**Ordering preference (subject to operator override at each step):**

1 → 2 → 3 (parallelizable) → 4 → 6 → 5 → 8 → 7.

Reasoning: 1 produces a reusable Trajectory tool that 2 needs; 3 is cheap and produces a long-lived audit tool; 4 and 6 give signal-typing and reproducibility; 5 and 8 require more existing artifacts; 7 integrates everything.

**Single in-flight rule.** One MVPoC at a time. The operator should be able to name *exactly which claim is being proven this session*. If they can't, the session has drifted.

---

## What this displaces

Items currently in QUEUE that become **demand-pulled** (touch them only when an MVPoC needs them) rather than scheduled:

- **Network map D1 reading pass.** A concept gets mapped when an MVPoC needs to reason about it.
- **Generic workbench friction order (F2 → F4 → F3).** Replaced by MVPoC-driven view build order. The friction list at `do/projects/workbench/frictions.md` stays as a posture document; build order comes from this plan.
- **Atomic file system reorg / micro-docs exploration.** Important but not load-bearing for proving claims. Pull in if an MVPoC's verification surface needs reference granularity.
- **First essential deep dives** (study pipeline). Parallel apparatus work; not the through-line.

Items that **remain on track** alongside MVPoC work:

- Framework version bumps when meaningful changes land
- Validator runs at session boundaries
- Session-starting / session-ending discipline
- Operator's separate authoring of operator profile, lineage population, etc.
- Resolving open questions when an MVPoC surfaces evidence for one

---

## What counts as drift

A working definition so future-Claude self-corrects. **The session has drifted if any of the following hold:**

- The operator can't name the load-bearing claim being proven this session.
- Work is on a posture document, a reorganization, or a new abstraction without a downstream MVPoC depending on it.
- The workbench is being built as a generic tool ("build F2 to completion") rather than as a specific verification surface for an in-flight MVPoC.
- Sessions are reading-pass-heavy with no proof artifact at the end.
- An exploration or open question is being expanded without integration plan.

Drift isn't catastrophic — sometimes it's the right call (e.g., the see/know/do reorganization in N+5 was drift by this definition and was still the right move). But it should be *named* as drift and consciously chosen, not slid into by default.

---

## Steps

1. **Land this plan.** This file becomes the through-line. Update `do/projects/plans/README.md` and the QUEUE accordingly.
2. **Commit to MVPoC #1.** Operator confirms scope of the math-drives-Trajectory MVPoC (1-movement spline, 1 Trajectory, knobs for `f_n` + knots, rendered curve).
3. **Build MVPoC #1.** Proof + verification surface in tandem. Likely artifact: a small spline encoded in JSON or markdown; a Python or JS script deriving the Trajectory; an HTML view rendering with live knobs. Probably lives at `do/projects/workbench/trajectory.html` + supporting files.
4. **Operator verifies.** Plays with the view; confirms the Trajectory deforms as the math says it should; confirms there's no hidden hand-authoring.
5. **Promote the view.** The trajectory tool becomes a permanent workbench surface (referenced from `do/projects/workbench/README.md`).
6. **Mark MVPoC #1 complete in this plan.** Operator selects next MVPoC.
7. **Repeat for each MVPoC** until enough load-bearing claims are proven that the framework can stand on its proofs rather than its scaffolding.

---

## Update cadence

- This plan updates at the end of each MVPoC (mark complete, surface what was learned, re-rank candidates).
- The candidate table grows or shrinks as proofs land or claims get re-decomposed.
- If a session drifts (per "What counts as drift" above), session-end notes the drift and the next session reads this plan first.

---

## Retirement condition

This plan retires when:

- All 8 load-bearing claims have at least one MVPoC in place that the operator has verified, *or*
- The operator decides the framework's proof base is sufficient to move to a different through-line.

Retirement is the operator's call against the claim coverage above. There is no external pressure to retire — per CHARTER, no shipping, no release.

---

## Out of scope

- Building MVPoCs for calibration items (specific 12 passes, etc.). Those tune through use, not isolated proof.
- Building generic workbench features outside a specific MVPoC's verification need.
- Producing a finished work as MVPoC. MVPoCs are *the smallest thing that demonstrates the claim*, not finished works.
- Trying to prove all 8 claims in one MVPoC. Bundles are forbidden until #7 (Calibration A integrated).
- Renaming, restructuring, or re-decomposing the load-bearing claim list once an MVPoC is in flight. Lock the target before building.

---

## Notes

- **The network map (`network_map.md`) is not displaced** — it's a different posture (positive structural picture vs. proof of claim). A1 + A2 already done; D1 becomes demand-pulled. The network map and the MVPoC plan run in parallel.
- **Calibration A is reframed.** It was "the fourth attempt at end-to-end" in QUEUE. It's now MVPoC #7 — the integrated big one that comes after smaller proofs land. The small proofs may *change* how Calibration A is constructed.
- **Workbench F1 (navigator.html) and the network view (network.html) are both retroactively MVPoCs in spirit** — they're verification surfaces, but for *organizing structure* rather than framework claims. Keep them; they're useful; just don't claim they prove framework claims.
- **The candidate table is a working list, not a contract.** Re-rank between MVPoCs as evidence accumulates.
- **Bias toward smaller.** Whenever an MVPoC starts feeling big, cut. The smallest version that proves the claim is the right version.

---

## Retrospective

*(To be added when the plan retires.)*
