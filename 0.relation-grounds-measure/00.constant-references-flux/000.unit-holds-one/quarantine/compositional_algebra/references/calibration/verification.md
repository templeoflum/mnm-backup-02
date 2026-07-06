# Verification

Claims-and-methods checklist for Compositional Algebra. Each claim maps to a verifiable condition observable when *Calibration* is run end-to-end through the framework's composition passes (1–10) with Pass 0 dependencies satisfied and Pass 11 tracking applied.

A claim passes if its verification method produces the expected result. A claim fails if the expected result is absent or contradicted. Failures indicate framework drift or vocabulary gaps.

---

## Verification discipline — two levels

Claims about prompt construction, translation discipline, voice translation sufficiency, cold-start prompts, and reproducibility cannot be verified honestly from within the same conversation that authored the prompts. The authoring context contains framework vocabulary, prior outputs, content layer references, and prior runs — all of which can leak into "generation" without showing up in the prompt. The prompt may be deeply insufficient and the generated output may still look correct because it was drawn from authoring context.

**Two levels of verification:**

**Level 1 — In-conversation discipline (fast iteration, partial verification):**
- Generate from prompts only; explicitly disregard prior outputs and authoring context
- Declare what's being used and what's not when generating
- Useful for: catching obvious framework drift, vocabulary leaks visible in prompt text, structural problems in prompt assembly, signal-flow violations, spec-level coherence
- Cannot verify: actual prompt sufficiency, true cold-start behavior, translation discipline robustness, reproducibility-by-others

**Level 2 — External generator isolation (slow iteration, full verification):**
- Cold-start prompt handed to a separate conversation, separate model instance, or another operator
- The receiving context has no access to authoring context, prior runs, or framework references
- Required for: verifying prompt sufficiency, reproducibility, translation discipline robustness, generator-facing voice translation quality
- Reserved for milestone verification once Level 1 is clean

**Per-claim verification level is noted on each claim below.** Claims marked "L1" are testable in-conversation with discipline. Claims marked "L2" require external generator isolation. Claims marked "L1+L2" are partially testable at L1 with stronger verification reserved for L2.

---

## Claim 1: Shape produces predictable continuity grades [L1+L2]

**Method:** Compare the 1→2 join (declared C¹) and 2→3 join (declared C²) in any realization's output.

**Expected:**
- 1→2 reads as *shift* — the arrival is felt as a redirect; the rhythm shifts from walking to breath; the room recedes as the window foregrounds
- 2→3 reads as *unfold* — the opening emerges from within the held state; no felt boundary between movements; the held drone carries into the opening

**Fails if:** both joins feel identical (Shape rules not differentiating), or 1→2 feels smoother than 2→3 (rules inverted).

---

## Claim 2: Signals flow correctly through the dependency graph [L1]

**Method:** Trace each spline signal through to its consuming layers in a constructed realization. Verify dependency ordering: audio surface before visual surface; voice after both.

**Expected:**
- Identity (including Shape) read by all six layer references (Voice, Medium, Visual World, Audio Aesthetic, Math Visual, Math Audio)
- Math vocabulary read by Math Audio then Math Visual
- Audio signal read by Audio Aesthetic (composes first as temporal substrate)
- Visual signal read by Medium and Visual World (composes second; reads audio surface output as upstream)
- Voice signal read by Voice (composes last; reads audio surface then visual surface)
- Transition signal read by Transition Reference (informs Pass 6 substitution and Pass 7 outline cross-modally for all three prompts)

**Fails if:** any layer's output cannot be traced to its declared inputs; if surface composes in wrong order (visual before audio); if voice composes before either surface.

---

## Claim 3: The same spline yields multiple valid realizations [L1+L2]

**Method:** Construct Realization A (preset-based) and Realization B (atomic-override). Compare outputs.

**Expected:**
- Both honor spline invariants (Figure crosses, arrives, opens window)
- Both differ at flexibility points (voice register, medium, visual world, affect)
- Both produce coherent end-to-end artifacts

**Fails if:** either realization violates invariants; or both realizations produce indistinguishable outputs (no actual variation).

---

## Claim 4: Voice modulates correctly across the five sub-functions [L1+L2]

**Method:** Compare Realization A's voice (Intimate first-person preset, Affect=Composed) against Realization B's voice (Scientist × Empirical × Testimonial × Solo × Stricken).

**Expected:**
- A reads as warm, addressed-to-someone, present-tense intimate
- B reads as observational, testimonial, the speaker bearing what they've seen
- Same source material; different voice character throughout

**Fails if:** voice character is indistinguishable between realizations; if Affect doesn't actually modulate output (Stricken reads same as Composed).

---

## Claim 5: Locks function as refinement constraints [L1]

**Method:** Realization A uses *Intimate first-person* preset (locked at Positioning=Intimate, Configuration=Solo). Document what overriding the locks would require.

**Expected:**
- Realization A respects the locked parameters without override
- A documented note about what would change if the locks were overridden (e.g., "Configuration override to Layered would make this a different preset — closer to a Voice-memo sibling")

**Fails if:** the locks are violated silently; or if no realization in the test suite exercises a locked preset.

---

## Claim 6: Continuity grades constrain transition output [L1+L2]

**Method:** Inspect transition output for 1→2 and 2→3 joins.

**Expected:**
- 1→2 transition spec shows direction-only-match bridging (rhythm shifts, Figure's pose changes); felt quality = shift
- 2→3 transition spec shows direction-and-magnitude match (held drone carries, gesture continues); felt quality = unfold

**Fails if:** transition specs are interchangeable; if neither join exercises the magnitude distinction.

---

## Claim 7: Tier system allows composition at any granularity [L1]

**Method:** Realization A composes at Tier 2 (presets wholesale); Realization B composes at Tier 1 (atomic overrides). Both produce valid output.

**Expected:**
- A names presets and reads cleanly (Voice preset: Intimate first-person; Medium preset: Watercolor; etc.)
- B specifies atomic configurations and reads cleanly (Voice: Scientist × Empirical × Testimonial × Solo × Stricken)
- Both produce realizations that satisfy the spline's invariants

**Fails if:** atomic composition produces invalid output; or if preset-based composition cannot be honestly described without atomic detail.

---

## Claim 8: Content layers compose correctly and feed downstream [L1]

**Method:** Trace character (Figure), object (Window), and motif (Approach-and-Arrive) into surface layer outputs. Verify Math Audio composes before Math Visual; character/object/motif compose in parallel with each other.

**Expected:**
- Math Audio output composed before Math Visual output (sonic primitives establish temporal substrate first)
- Character/object/motif compose in parallel with each other (no dependency between them)
- The Figure appears in audio surface (footfall, breath) and visual surface (per-movement pose)
- The Window appears in audio surface (latch sound in M3) and visual surface (per-movement state)
- The Approach-and-Arrive motif's phase shapes script pacing per movement

**Fails if:** Math Visual composes before Math Audio (ordering violated); or content layer outputs are not visibly read by surface layers; or character/object/motif show artificial dependencies between each other.

---

## Claim 9: The work is constructable in finite time [L1]

**Method:** Run a full twelve-pass construction (Pass 0 through Pass 11) of one realization (preset-based, fastest path).

**Expected:** All ten passes complete with verifiable outputs.

**Fails if:** any pass cannot complete given the spline's inputs and the framework's references.

---

## Claim 10: Cold-start prompts are sufficient [L2]

**Method:** Hand each of a realization's Pass 5 prompts (image, audio, narrative — for each movement) to an isolated generator with no access to the authoring context, the spline reference, content layer references, prior runs, or framework documentation. Generate output from prompt alone.

**Expected:** Generated output coheres with the realization spec's intent. Image prompt (after Pass 7) shows the specified medium, visual world, and trajectory. Audio prompt (after Pass 7) shows the specified aesthetic and sonic arc. Narrative output (after Pass 8) shows the specified voice, scene, and continuity (substituted at Pass 6, outlined at Pass 7).

**Fails if:** isolated generator produces output that diverges substantially from realization spec; if the generator asks for context the prompt should have contained; if the output reveals framework vocabulary leaks (the prompt told the generator something it shouldn't have known how to use).

**Cannot be tested at L1.** In-conversation generation is contaminated by authoring context.

---

## Claim 11: Translation discipline holds at the prompt boundary [L1+L2]

**Method (L1):** Read each prompt as text. Scan for:
- Framework-internal vocabulary: sub-function names ("Everyman," "Realist," "Stricken"), motif names ("Approach-and-Arrive"), primitive names ("threshold primitive"), layer abstractions, preset names ("Watercolor preset")
- Shorthand references between prompts: "as above," "see M1," "[voice translation, as above]," or any other gesture pointing at content not present in the current prompt
- Cross-movement carry-over framing: "continuous with previous," "carrying from movement N"

Any such terms or references appearing inside a prompt are translation-discipline violations.

**Method (L2):** Hand the prompt to an isolated generator. If the generator asks "what does X mean" or "what voice translation are you referring to," the prompt violates cold-start sufficiency.

**Expected (L1):** No framework vocabulary in any prompt text. No shorthand references. No cross-movement framing. All voice qualities described in behavior terms ("the speaker reports what's seen without metaphor reach"). All motif content described in pattern terms ("forward motion that has not yet arrived"). All preset content described in sensory terms. Voice translation text fully populated verbatim in every narrative prompt.

**Expected (L2):** Generator produces sensible output without asking for vocabulary clarification or reference resolution.

**Fails (L1) if:** any framework vocabulary appears inside a prompt; any shorthand reference appears; any prompt is incomplete relative to cold-start requirements.
**Fails (L2) if:** isolated generator cannot produce output without further explanation.

---

## Claim 12: Realizations are reproducible-by-others [L2]

**Method:** Hand the realization spec (including all preset choices, locks, voice translation, and references to the spline) to a different operator or model instance. Have them run Pass 5 onward through Pass 9. Compare their output to the original realization run.

**Expected:** The other operator produces a realization recognizably the same realization — same voice character, same surface aesthetic, same scene anchors, same continuity — while differing in prose specifics, image specifics, audio specifics. The spec is the invariant; the rendering is the variation.

**Fails if:** the other operator produces output that diverges in voice character, surface aesthetic, or continuity; if the spec is ambiguous enough that two valid runs feel like different realizations rather than the same realization performed differently.

**Cannot be tested at L1.** Requires actual other operator.

---

## Overall pass/fail

A framework version passes **Level 1 verification** iff all L1-testable claims pass for at least one realization. This is the in-conversation iteration threshold.

A framework version passes **Level 2 verification** iff all L2 claims additionally pass under generator-isolation. This is the milestone-verification threshold reached periodically rather than per-iteration.

Mixed results indicate which subsystem needs work.

Failures should be added to `DEV_LOG.md` Open Findings with their verification trace and the level at which they failed.
