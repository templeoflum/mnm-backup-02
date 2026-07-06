# Vocabulary discipline

**The rule:** the framework's vocabulary is actively maintained as a coherent stack. New names are checked for collision with existing ones, for recursive prose problems, and for compatibility with the existing stack.

**Why:** a framework whose own vocabulary collides with itself produces unreadable documentation. Recursive prose ("Compositional Algebra composes a composition") makes the framework unusable in writing. Stack coherence makes the framework legible.

**How it shows up:**
- New names are tested in prose before being adopted. If a sentence using the new name produces a collision with an existing name, the new name is revised.
- The activity verb is distinct from the artifact noun. *Spline scoring* produces *a spline score*; *realization construction* produces *a realization*.
- Within-layer composition is preserved as "compose" (a voice composes a narrative; layers compose their output). Across-layer activity uses other verbs (*authoring*, *constructing*).
- The glossary is the authoritative vocabulary reference and is updated as part of any patch that introduces or modifies a name.

**Anti-pattern:** adopting "compose a composition" because no one noticed the recursion; adding a preset named "Atmosphere" when an existing sub-function is already called "Atmosphere"; introducing "render" as an activity when "construct" was already established.

**Dev-log incident:** Session 7's "Vocabulary discipline" subsection — the recursive-prose problem with "composing a realization" was caught and the active verb was changed to "constructing."

---

## Related

- [Define before reference](define_before_reference.md) — the discipline that requires definitions exist before reference
- [Translation discipline](translation.md) — vocabulary at the prompt boundary
- [Posture-naming](posture_naming.md) — file names are vocabulary too

## See also

- [`../glossary.md`](../glossary.md) — the authoritative vocabulary register
