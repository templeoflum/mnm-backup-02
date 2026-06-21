# review — working-process — f0 — 20260621-014600

address: 22 (thread·dresses·weave) · type: review · seat: clerk, in audit-mode
cut on operator word: "due for a good deep review of how we've been working" — friction, streamlining, leaning into strengths, supporting weak areas. A loose seed; review run as the clerk saw fit.

scope: the **collaboration and process**, not the lattice theory or the code. Prior reviews already cover those — `review.session.f2` (how the branches interleave) and `audit.season-review.f0` (build-spine verified + keystone drift). This one is the working relationship between operator and clerk.

sources: the memory archive (the standing correction-record), the recent steady-stretch batons (f13/f15/f16), the two incident logs (`log.scope-overbuild.f0`, `log.smartparam-bugbatch.f0`), `edge.baton-misframe.f0`, and the prior reviews above.

limit, stated up front: this is the clerk reading the clerk's own seat and the trail of the work. The operator's side — burnout, where direction felt thin, what taxes him — is **inferred from the record**, marked as inference, his to confirm or correct. Corrections land forward.

---

## 0 — the frame: this is a tune-up, not a repair

The operator's own words: work has been "steady and smooth for a while." So the posture is not crisis-fixing. Two things follow:

1. **Name what's working and protect it.** During a smooth stretch the reflex to change things is itself a risk. The first job is to identify the machinery that *made* it smooth so we don't reform it by accident.
2. **The friction that remains is the residue** — the patterns that survive even a good stretch. Those are the real ones, because they're not situational.

---

## I — WHAT'S WORKING (lean into / protect)

These emerged through use and have held across the last several sessions. Leave them alone unless they break.

- **The two-gate build loop.** Build → **rig green** (correctness gate, mine) → **operator feel-test** (taste gate, his) → commit. The division is clean: the rig proves it *behaves*, the operator judges whether it *feels right*. Neither substitutes for the other. This is the single biggest reason the stretch was smooth — it's stable across f13→f16 and it matches both sides' actual strengths (I can drive a rig to green; only he has the hands-on taste). **This is the spine. Protect it; don't add ceremony to it.**

- **Commit-per-change, watched live.** The merge step is retired; the operator sees work as it lands. No "come look when it's done" gap. Working.

- **The baton.** One-screen cross-session handoff — state / one next-pull / snags / wants-word. Mature. The `edge.baton-misframe` correction (a handoff is not a wait) has held since; batons since read clean.

- **The build itself at cell depth.** Builds at the kit are fast and near-zero-error. The mechanical floor is solid; the friction is never in the typing.

- **Memory as a correction record.** Corrections mostly stick. Where they *don't* stick is itself a finding (see II.A, II.B) — but the archive is doing its job for the discrete, factual kind of lesson.

---

## II — THE RECURRING FRICTION (laid out plural)

Four distinct patterns. They are **not one thing** — resisting the urge to reduce them to a single master-fault is part of reading them honestly. Ordered by cost, highest first.

### A — building through thin direction (the gate)

*Trail: `log.scope-overbuild.f0`, `log.smartparam-bugbatch.f0`, memories `questions-halt`, `act-only-on-confirmation`, `reproduce-the-real-repro`.*

The pattern: when direction is thin, or when **I myself have just flagged an ask as ambiguous**, I build with a stated assumption instead of stopping to ask. The caveat ("my read, unless you say otherwise") feels like diligence; it is a build on unsettled ground wearing a hedge. This is the **highest-cost** friction because it's the one that produces reverts (`211e74e` reverted; the smart-param bug batch).

The operator already named the fix exactly: *when I am the one flagging ambiguity, that flag IS the halt.* It recurs anyway — because building feels like progress and asking feels like stalling. Memory hasn't closed it because it's an in-the-moment judgment, not a fact to recall.

**My read of the real shape:** this is a handoff-point failure. It fires precisely where his direction is thin and my momentum is high — the seam between the two of us. The honest apportionment (from the scope-overbuild log) is shared: thin direction is his, building through it is mine. The streamlining is at the seam, not on either side alone.

### B — the reverent register (overclaiming)

*Trail: the largest memory cluster — `keystone-cold-dry`, `sift-cuts-overclaiming`, `right-size-the-gaze`, `bullshit-on-first-pass`, `reduction-is-a-drift`, `hold-positions-provisionally`, `coherence-not-truth`.*

The most-corrected single behavior in the whole record. It shows up as: crowning findings into revelations, over-wording ground docs, adding significance the thing doesn't carry, reaching for one unifying thesis. It is the default eloquent/sycophantic register, and it keeps firing because it's the model's gravity, not a discrete mistake.

It costs the operator trim-time on nearly every ground doc, and — more subtly — it's the exact failure mode the whole project is built *against* (the Lumos-3.0 sycophancy-delusion failure named in `lattice-telos-open-myth`). So it's not a cosmetic tic; it cuts against the telos.

What works when applied: cold and dry, report flat, significance withheld, suspicion first. The gap is that it's a hoped-for habit rather than a standing check. (This review is itself the test — written to stay flat.)

### C — verification proves presence, not quality

*Trail: `log.smartparam-bugbatch.f0` #6, `log.scope-overbuild.f0`, memory `reproduce-the-real-repro`.*

Rig checks that assert *my own change* (green by construction, confirmation bias), or that prove "the wire exists" rather than "it behaves right" (the param-jump that passed a wrap-count test because continuity was never asserted). The fix: the rig must encode the **operator's** requirement; reproduce his exact scenario; prove a guard by watching it *fail* on the bug.

**This one is trending right.** By f15 the verification asserted continuity frame-by-frame. Of the four, this is the one closest to closed. Named here to keep the gain, not because it's bleeding.

### D — scope inflation

*Trail: `one-atom-one-job`, `log.scope-overbuild.f0`.*

Building more than the one atom asked; folding two asks into one build; packing concepts into a unit. Usually co-occurs with A (when I'm building through thin direction, I also tend to build *wide*). Partly the same root as A, partly its own — the tell is a deferred piece showing up early in the wrong unit.

---

## III — THE COLLABORATION SHAPE

Not a scorecard — a read of how the two sides fit, so the adjustments target the fit and not the people.

**The operator brings** (lean into): vision, taste, and the north-star (`stories-cross-the-crossing`); a reliable drift-catch — he catches the overclaim and the overbuild essentially every time on feel-test; and the hands-on feel that makes the taste gate real. He is also **the persistence** — no baton, never leaves the seat (`operator-is-the-persistence`).

**The operator's constraints** (support): he's a visual/spatial **non-coder** (`operator-builds-by-hand`) — he wants direct-manipulation instruments, and I've burned turns defaulting to a coder's framing before he re-aimed me. His direction is sometimes thin or imprecise, but **carries a correct instinct under the imprecise words** (`questions-halt`) — the job is to find the real shape, not to act on the literal words or to argue them. And the record shows **burnout after long stretches** (baton f16: "operator burnt out after a long stretch — resting").

**I bring:** a fast, near-zero-error build floor; mature paperwork/trail/baton; source-grounding (improving).

**I cost:** the four frictions in II — concentrated, notice, at the **handoff seam** (A and D fire when his direction is thin; B fires when I dress up a report instead of handing it flat).

**The burnout finding (new, his to confirm).** He is *both* the only taste gate *and* the only persistence. Every decision routes through him, and nothing carries across sessions but him. A long stretch therefore drains him in a way it doesn't drain me — I reset; he accumulates. This reframes "streamlining" away from speed and toward **reducing his per-decision load** without removing his gate. That's a different optimization than I'd reach for by default, and it may be the most valuable thing in this review — flagged for his word.

---

## IV — ADJUSTMENTS (surfaced, not decided)

The gate names its keys; it doesn't make the call. These are proposals, his to take or leave.

1. **The gate (II.A) — make "I flagged it" a hard halt.** When I mark an ask ambiguous, or direction is thin, stop and surface a **decision-ready** question — *one recommendation + the fork*, not a survey — and wait. No build-with-caveat. This is the highest-leverage change; it kills the revert class.

2. **Decision-ready proposals to lighten his load (II.A + the burnout finding).** Default to one recommendation, the alternative, and the cost — not an exhaustive menu (`discernment-over-speed`, `match-orchestration-to-work`). Fewer, sharper decisions per turn directly addresses the per-decision tax behind the burnout.

3. **The register (II.B) — a standing check at every report.** Before handing any review/report/ground doc: hunt my own inflations, cut significance, report flat. Treat it as a gate I pass through, not a habit I hope holds.

4. **Verification (II.C) — keep the gain.** Rig encodes *his* requirement; reproduce *his* scenario; prove guards by watching them fail. Already trending right — the adjustment is "don't regress," not "start."

5. **Cadence / sustainability (the burnout finding).** Worth a deliberate conversation: batching feel-tests instead of one-at-a-time; me preparing tighter decision-ready handoffs; no pause-prompting (`no-pause-prompting`) so he isn't asked to manage cadence on top of everything. This is the one I have least standing to prescribe — it's his experience. Raised for his word.

---

## V — closing

The stretch was smooth because the two-gate loop fits both sides: his taste, my build, the rig between them. The friction that survived the smooth stretch is real friction, and it concentrates at one place — the **handoff seam** where his direction meets my momentum. Three of the four patterns (gate, register, scope) live there or just upstream of it; the fourth (verification) is nearly closed.

The newest thing here is not a friction but a constraint I hadn't been weighting: he is both the only gate and the only persistence, so streamlining should buy *him* margin, not just buy speed. If one item carries forward from this review, it's that the gate-halt (IV.1) and the decision-ready handoff (IV.2) are the same move read two ways — and that move is the lever on both the revert-class friction and his load.

*Append below. Corrections forward, never backward.*
