# Translation discipline (at boundaries)

**The rule:** framework-internal vocabulary — sub-function names, layer abstractions, preset names, motif names, primitive names — does not appear in generator-facing prompts. Every framework abstraction is translated to concrete sensory or structural specification at the prompt boundary.

**Why:** generators (image, audio, narrative) do not have access to the framework's vocabulary. A prompt that says "Mythic preset" or "Register: Mathematician" is asking the generator to make a claim it cannot redeem; the generator either fails silently or invents a meaning. Translation at the boundary forces the framework's abstractions to deliver concrete content rather than to hide behind labels.

**How it shows up:**
- Prompt construction is a translation step, not a vocabulary handoff. See [`../references/prompt_construction.md`](../references/prompt_construction.md).
- Voice translation produces a generator-facing description of voice, constant across movements (unless affect varies), with no framework labels in the description.
- The four-block prompt template (Identity-block / Scene / Length / Avoid) explicitly disallows framework vocabulary in the prompt body.
- Audits of generated prompts check for leaks; leaks are patched at the prompt template, not the prompt.

**Anti-pattern:** including "Voice atomic configuration: Solo, Register: Scientist, Affect: Held" in a narrative prompt; using preset names ("Mythic", "Liturgical") in image prompts as if the generator could read them; assuming any framework shorthand is generator-legible.

**Dev-log incident:** "Prompt construction leaked framework-internal vocabulary into generator prompts" (open finding, then patched). The four-block template was the structural fix.

---

## Related

- [Vocabulary discipline](vocabulary.md) — managing names internally; translation manages how they reach external generators
- [Root-cause patches](root_cause_patches.md) — leaks get patched at the prompt template, not the prompt

## See also

- [`../references/prompt_construction.md`](../references/prompt_construction.md) — the operational detail (four-block template, voice translation)
- [`../../see/CRITIQUE.md`](../../see/CRITIQUE.md) — the open critique: discipline asserted but mechanically unenforced beyond the validator's partial check
- [`../../do/projects/workbench/tools/validate.py`](../../do/projects/workbench/tools/validate.py) — partial mechanical witness
