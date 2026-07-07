# survey.model-routing.f0

Research report on model-routing for the multi-agent house. Route task-kinds to
model tiers by the cost/capability tradeoff. All figures web-verified against
Anthropic's official docs (July 2026); each claim carries a source URL. Nothing
here is stated from memory — where memory and the live docs disagreed, the live
docs won (see the drift note at the end).

Sources (authoritative, both fetched 2026-07-07):
- MODELS — https://platform.claude.com/docs/en/about-claude/models/overview.md
- PRICING — https://platform.claude.com/docs/en/about-claude/pricing

Confidence key: [high] = both pages agree, exact figures quoted · [med] =
single-source or relative-only · [unconfirmed] = could not verify.

---

## 1. Current model lineup (July 2026)

Prices are USD per million tokens (MTok). "Cache hit" = cache read/refresh.
Batch = Batch API (async, 50% discount). Latency labels are Anthropic's own
comparative words — no published tokens/sec figures exist [unconfirmed].

### Claude Fable 5 — `claude-fable-5`
- Tier: most capable widely-released model; "next-generation intelligence for long-running agents". GA on the Claude API June 9, 2026. [high — MODELS]
- Capability: highest of the lineup. [high — MODELS]
- Speed: latency "Slower" (slowest of the four). [high — MODELS]
- Context / max output: 1M tokens / 128k tokens. [high — MODELS]
- Base price: $10 input / $50 output per MTok. [high — MODELS + PRICING]
- Cache: 5-min write $12.50 · 1-hour write $20 · cache hit $1 per MTok. [high — PRICING]
- Batch: $5 input / $25 output per MTok. [high — PRICING]
- Thinking: adaptive, always on. [high — MODELS]

Sibling — Claude Mythos 5 (`claude-mythos-5`): shares Fable 5's specs and
pricing; invitation-only (Project Glasswing), defensive-cybersecurity use, no
self-serve. Not a routing target for us. [high — MODELS + PRICING]

### Claude Opus 4.8 — `claude-opus-4-8`
- Tier: "for complex agentic coding and enterprise work"; Anthropic's recommended default for complex agentic/enterprise. [high — MODELS]
- Capability: second-highest (below Fable 5). [high — MODELS]
- Speed: latency "Moderate". [high — MODELS]
- Context / max output: 1M / 128k tokens. [high — MODELS]
- Base price: $5 input / $25 output per MTok. [high — MODELS + PRICING]
- Cache: 5-min write $6.25 · 1-hour write $10 · cache hit $0.50 per MTok. [high — PRICING]
- Batch: $2.50 input / $12.50 output per MTok. [high — PRICING]
- Thinking: adaptive. `effort` defaults to `high` on all surfaces. [high — MODELS]

### Claude Sonnet 5 — `claude-sonnet-5`
- Tier: "the best combination of speed and intelligence". [high — MODELS]
- Capability: third (strong mid-tier). [high — MODELS]
- Speed: latency "Fast". [high — MODELS]
- Context / max output: 1M / 128k tokens. [high — MODELS]
- Base price — INTRODUCTORY through Aug 31, 2026: $2 input / $10 output per MTok. [high — MODELS + PRICING]
- Base price — STANDARD from Sep 1, 2026: $3 input / $15 output per MTok. [high — PRICING]
- Cache (intro): 5-min write $2.50 · 1-hour write $4 · cache hit $0.20 per MTok. [high — PRICING]
- Cache (standard, from Sep 1): 5-min write $3.75 · 1-hour write $6 · cache hit $0.30 per MTok. [high — PRICING]
- Batch (intro): $1 input / $5 output; (standard) $1.50 input / $7.50 output per MTok. [high — PRICING]
- Thinking: adaptive. `effort` defaults to `high` on the Claude API and Claude Code. [high — MODELS]

### Claude Haiku 4.5 — `claude-haiku-4-5` (pinned ID `claude-haiku-4-5-20251001`)
- Tier: "the fastest model with near-frontier intelligence". [high — MODELS]
- Capability: fourth (near-frontier for its speed class). [high — MODELS]
- Speed: latency "Fastest". [high — MODELS]
- Context / max output: 200k / 64k tokens (smaller window than the 1M-tier models). [high — MODELS]
- Base price: $1 input / $5 output per MTok. [high — MODELS + PRICING]
- Cache: 5-min write $1.25 · 1-hour write $2 · cache hit $0.10 per MTok. [high — PRICING]
- Batch: $0.50 input / $2.50 output per MTok. [high — PRICING]
- Thinking: extended thinking = Yes; adaptive thinking = No (the only current model without adaptive). [high — MODELS]

### Cross-cutting pricing rules
- Prompt-cache multipliers (relative to base input): 5-min write 1.25x · 1-hour write 2x · cache hit 0.1x. Cache pays off after one read (5-min) or two reads (1-hour). [high — PRICING]
- Batch API: flat 50% off input and output. Stacks with caching. [high — PRICING]
- 1M context billed at the standard per-token rate — no long-context premium — on Fable 5, Opus 4.8, Sonnet 5 (and legacy Opus 4.6/4.7, Sonnet 4.6). [high — PRICING]
- Tokenizer note: Fable 5, Opus 4.7+, and Sonnet 5 use a newer tokenizer that produces ~30% more tokens for the same text vs. older models — a real cost factor when comparing to prior generations. [high — MODELS + PRICING]

### Capability vs. speed ordering (for routing intuition)
- Intelligence (high→low): Fable 5 > Opus 4.8 > Sonnet 5 > Haiku 4.5. [high — MODELS]
- Speed (fast→slow): Haiku 4.5 (Fastest) > Sonnet 5 (Fast) > Opus 4.8 (Moderate) > Fable 5 (Slower). [high — MODELS]
- Output-price spread (the lever that matters most — output dominates agent cost): Haiku $5 · Sonnet 5 $10 (intro)/$15 · Opus 4.8 $25 · Fable 5 $50. A Haiku-vs-Opus swap is a 5x output-cost difference; Opus-vs-Fable is 2x. [high — PRICING]

---

## 2. Task-kind → model routing table

Rationale is the cost/capability tradeoff. Default cheap; escalate only where
judgment is the product. Output tokens dominate cost, so the routing lever is
"how much does this task-kind need to THINK and WRITE well" vs. "how mechanical
is it".

| Task-kind | Route to | Why (grounded in the tradeoff) |
|---|---|---|
| Mechanical / bounded / verifiable — grep, web-verify, write records, format, extract fields, classify | **Haiku 4.5** | Cheapest ($1/$5) and fastest. The work is checkable against a spec, so a weaker model's errors surface immediately — capability headroom is wasted spend. 200k window is ample for bounded units. [pricing + tiering: MODELS, PRICING] |
| Reasoning / analysis / vetting — synthesize a corpus, judge coherence, adversarial review | **Opus 4.8** (Fable 5 only if the vet is genuinely frontier-hard) | Judgment IS the deliverable; a wrong-but-confident answer is the expensive failure mode, so pay for capability. Opus 4.8 is the "complex/enterprise" tier at $5/$25 — 1/2 the output cost of Fable 5. Reserve Fable 5 ($50 output) for the rare vet where 4.8 visibly falls short. [MODELS positions 4.8 for complex work; PRICING for the 2x gap] |
| Decision-surfacing — lay out options + tradeoffs for the operator, never decide | **Opus 4.8** | This is high-value reasoning: the cost of a mis-framed decision propagates. But it's a framing task, not a frontier-capability task — 4.8 suffices; Fable 5's premium buys little here. [MODELS tiering; keystone 120 equal-ground surfacing] |
| Dreaming / ideation — generate, riff, open the space | **Fable 5** OR **Opus 4.8** | Ideation rewards the strongest generator, and this is where Fable 5's edge shows. BUT dreams are cheap in tokens and gated from building (memory: dream-sessions-no-building) — spend depends on volume. High-volume dreaming → Opus 4.8 to control the $50 output rate; a focused deep dream → Fable 5. [MODELS: Fable 5 = highest capability; PRICING: $50 output is the constraint] |
| Bulk / parallel throughput — many independent units at once | **Haiku 4.5 + Batch API** | Parallel-independent + latency-tolerant is the exact Batch profile: 50% off on top of Haiku's floor → $0.50/$2.50 per MTok. Add prompt caching on any shared prefix (0.1x hits) for a further cut. Escalate individual units to Sonnet 5 only if a unit needs mid-tier judgment. [PRICING batch + caching] |

Design notes:
- **Sonnet 5 is the swing tier.** At intro $2/$10 it is barely above Haiku on input and half of Opus on output, while carrying 1M context and "Fast" latency. It's the right target for anything that's more than mechanical but less than frontier-judgment — mid-weight synthesis, long-context reads, interactive loops. Re-price this decision after Aug 31, 2026 when it moves to $3/$15. [PRICING intro window]
- **Caching is a routing input, not just a knob.** Any seat sharing a stable prefix (the keystone, a corpus, a system prompt) should place a cache breakpoint — a hit is 0.1x input. This can make a higher tier cheaper-in-practice than a lower tier that re-reads cold. [PRICING prompt-caching]
- **Haiku's adaptive-thinking gap:** Haiku 4.5 has no adaptive thinking (extended only). If a "mechanical" task quietly needs step-by-step reasoning, that's the signal it isn't mechanical — route up, don't force Haiku. [MODELS thinking columns]

---

## 3. The 3-LOD / slip-seed angle

The proposal: decompose ONE task across tiers. A cheap model builds the compact
FRAME (structure only — chunk × slice × rung, no content, no decisions), then
stronger models fold/expand the frame's cells.

Assessment — this is sound, and it maps cleanly onto our own ground:
- It mirrors the lattice's own depth structure (stem/leaf/cell) and the frame
  discipline (frame before build; the frame is scaffolding, the folding is the
  work). Framing is bounded and verifiable — a good fit for Haiku 4.5. Folding
  is judgment — a fit for Opus 4.8 / Fable 5. So the LODs align with the routing
  table above almost 1:1.
- It's cost-favorable: the cheap tier does the high-token structural sweep;
  the expensive tier only touches cells that need it. With a stable frame as a
  cached prefix, the expensive-tier reads are 0.1x. [PRICING caching]

The key design question — what TRIGGERS escalation:
- **Structural-by-phase (safe, recommended).** Escalation is wired to the
  PHASE of work, decided by the harness, not the model: "framing phase → Haiku;
  folding phase → Opus." The trigger is a property of the pipeline stage, known
  in advance and externally verifiable. This is the grounded choice — it's the
  same principle as the keystone's routing gate (1→2→gate): the gate names its
  keys structurally; it doesn't ask the worker to self-assess.
- **Model-self-assessment (unreliable, avoid as the primary trigger).** Asking
  the cheap model "is this beyond you? escalate if so" is unsound: a weak model
  cannot judge its own ceiling — the same limitation that makes it weak makes it
  a poor judge of its own weakness (a Dunning-Kruger failure at the tier level).
  It will confidently under-escalate on exactly the cases that need escalating.
  This is the checks-are-a-net-not-a-gate principle: a self-report is not a gate.
- **Honest caveat:** structural-by-phase can UNDER-escalate too — a cell that
  looks routine by phase but is actually hard gets left on the cheap tier. The
  mitigation is not model self-assessment but an EXTERNAL check: a deterministic
  verifier, a rubric/outcome grader on a stronger model, or the operator's eye —
  the same "outside play-test against intent" we already run. Escalation
  triggered by a failed external check is safe; escalation triggered by the
  worker's own confidence is not. Verified-frame → escalate; self-declared-stuck
  → distrust.

Bottom line: build the slip-seed with a phase-structural escalation ladder
(Haiku frames → Opus folds → Fable 5 only where an external check demands it),
cache the frame between tiers, and never let a model's self-report be the gate.

---

## Could NOT confirm (flat list)
- Absolute latency / throughput (tokens per second) for any model — docs give only relative words (Slower/Moderate/Fast/Fastest). [unconfirmed]
- Exact Sonnet 5 / Fable 5 GA-vs-availability nuances beyond "Fable 5 GA June 9, 2026" and Sonnet 5 intro-window dates. Sonnet 5's own release date is not stated on these pages. [unconfirmed]
- The dedicated pricing.md endpoint (`/docs/en/pricing.md` from the skill's live-sources list) returned HTTP 404; I used the authoritative `/docs/en/about-claude/pricing` page instead. Flagging in case the source list is stale. [source drift]
- Claude Mythos 5 / Mythos Preview details beyond "shares Fable 5 specs+pricing, invitation-only, defensive cyber" — not a routing target, not investigated further. [out of scope]

## Drift note (memory vs. live docs)
The reference skill bundled with this environment carried a cached model table
dated 2026-05-26 listing "Claude Sonnet 4.6" at $3/$15 as the current Sonnet.
The LIVE docs show the current tier is now **Claude Sonnet 5** (intro $2/$10),
with Sonnet 4.6 moved to legacy. Trusting the live docs over the cached table
is the reason this figure is right. Verify all figures against the two source
URLs above before relying on them.
