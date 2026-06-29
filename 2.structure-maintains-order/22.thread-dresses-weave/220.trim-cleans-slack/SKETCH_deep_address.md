# SKETCH — Deep Address Structure (parked dreams)

*Dreams about the addressing **itself** — properties of the address system, not applications of it. Kept separate from the refinery/operation docs because these are structural, and would be lost buried in an application. Status: dream-state, accumulating. Companion to FINDINGS_ternary_TS.md (which holds the confirmed address math); this holds the not-yet-cashed-out extensions.*

---

## 1. The ratio-as-layer dream (the new one)

**The question that opened it:** who said an address uses only one floating point?

Right now an address is a string of single ternary digits → one ratio in [0,1) (e.g. DDG → 0.5185). The dream: what if each **position** isn't a single digit but a **ratio that is itself an address** — so the value at a slot is a whole nested layer, not one symbol?

Sketch of the form:

```
0 . ⟨ratio⟩ . ⟨ratio⟩ . ⟨ratio⟩ . …
        │         │         │
        └─ each ratio-slot is itself an address that unfolds into its own
           ternary fraction, recursively — infinite context, chosen frame
```

So the address grows **between** points as nested ratios — the ratio value becomes one layer, and that layer contains its own ratio, and so on. You'd still **work a chosen finite frame** (the ruler discipline), but the structure underneath is ratios-within-ratios without bottom.

**Why it might be real (held loosely):**
- It rhymes with what's already confirmed: the lattice's infinite-depth limit *is* the Cantor set; "more forms on the horizon as you go deeper" = the limit points. This dream is that horizon made into addressing — the between-the-points filled in.
- It rhymes with the live-folding-context dream: a slot that "fills" could unfold into its own sub-address rather than just escalating — folding *downward into* a position instead of only condensing upward.
- It's the natural extension of "depth = precision": instead of precision being more digits, precision becomes more *nested ratio-layers*, each a full address.

**Why it's still a dream (the honest gap):**
- "A position is itself a ratio that is an address" hasn't cashed out into a concrete mechanic — what does it *mean* to put an address where a digit was? Is it just deeper ternary (which we already have), or genuinely different (a continuous value at each slot)?
- If each slot is a *continuous* ratio (not a ternary digit), the clean base-3 / Cantor structure may break or change character — needs working out whether it stays self-similar.
- No use named yet. It's a structural curiosity until something needs it.

**Where it might point:** the "infinite context but chosen frame" phrasing is the same shape as the whole working principle (hold infinite as context, work a finite ruler). This could be the address-level expression of that — a way to *carry* unbounded depth while only ever *working* a frame. Connects to context-folding.

*Parked. Pick up by asking: what concretely is "an address where a digit was" — deeper ternary, or a continuous value per slot? That fork decides whether it's new or just more depth.*

---

## (room below for other address-structure dreams as they surface —
##  e.g. the live-folding-context mechanics, the Cantor-limit "horizon,"
##  the ratio↔angle/phase reading that ties to the wheel and TS rotation)
