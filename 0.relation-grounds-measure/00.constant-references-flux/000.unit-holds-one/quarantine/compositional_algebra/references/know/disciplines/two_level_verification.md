# Two-level verification discipline

**The rule:** verification claims are tagged as Level 1 (in-conversation, structural) or Level 2 (independent operator, cold-start, external generator). Do not claim L2 properties on the basis of L1 evidence.

**Why:** L1 verification catches structural problems (signal flow, vocabulary leaks, dependency violations) but cannot catch problems that only appear under cold-start — where an external operator runs the assembled prompt with no in-context history. The most important framework claims (cold-start prompt sufficiency, reproducibility-by-others, translation discipline robustness) require L2 evidence. Conflating them produces false confidence.

**How it shows up:**
- Framework claims are labeled L1 (e.g., "structural coherence verified in-conversation") or L2 (e.g., "cold-start prompt sufficiency verified by independent operator").
- L1 verification supports fast iteration. L2 is reserved for milestone verification.
- L2 has not yet been exercised. The framework does not claim L2 properties hold.

**Anti-pattern:** declaring "the prompts are cold-start sufficient" on the basis of in-conversation generation. Claiming reproducibility on the basis of two same-spec generations within one session.

**Dev-log incident:** the "Generator-isolation requirement for verification" entry made the L1/L2 distinction explicit. Before that, structural verification was being implicitly read as cold-start sufficiency.

---

## Related

- [Honesty discipline](honesty.md) — the larger frame (don't claim more than is delivered)
- [Anti-sycophancy](anti_sycophancy.md) — applies the same standard to conversation responses

## See also

- [`../../see/CRITIQUE.md`](../../see/CRITIQUE.md) — open critique: L2 never run; the L1→L2 confidence claim is asserted not tested
