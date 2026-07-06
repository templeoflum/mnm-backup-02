# Charter

The posture: refusal. What this work commits to *not* be, and the affirmations beneath those refusals.

A charter is not a vision or a roadmap or a list of features. It is a list of *gates* — the things this work has decided about itself, against the pull of other shapes it could take. The gates are kept here so they don't have to be re-decided every session, and so that when a decision wants to slip through one of them, the slipping is visible.

---

## The work, as it has decided about itself

The work is trying to make the best possible thing the best possible way. That's the whole frame. Everything else here descends from it.

This means:

- **No shipping.** No release date. No version-1.0 milestone. The discipline against scope sprawl comes from the work itself, not from a market or deadline.
- **No product.** This is not a product. There is nothing being optimized for consumption, retention, conversion, or delivery.
- **There are no users, only all.** There is no separate user class — no audience waiting downstream, no target to serve. Anyone engaging with the work is part of the work, not a recipient of it. The user is not a stage in the funnel; the user is just part of the process itself.
- **No single voice.** The framework separates score from performance precisely so other voices can realize what others have authored. A single-voice framework would be a personal style, not a framework.
- **The framework serves the work, not itself.** Frameworks that become important to themselves drift. The framework exists so that the math is felt; if a framework feature stops serving that, it goes.

---

## What this work refuses

**No new formal-vocabulary gestures.** Existing borrowed vocabulary (functor, dependent product, refinement type, etc.) is grandfathered because removing it would destabilize too much. New formal claims must be earned before being made. See [../know/formalization_roadmap.md](../know/formalization_roadmap.md).

**No Level 2 claims on Level 1 evidence.** In-conversation structural verification is L1; independent-operator cold-start generation is L2. L2 has not been run. The framework does not assert L2 properties (cold-start sufficiency, reproducibility-by-others) until L2 has produced evidence.

**No vocabulary leaks at boundaries.** Framework-internal vocabulary does not appear in generator-facing prompts. No exceptions for convenience. See [../know/references/prompt_construction.md](../know/references/prompt_construction.md).

**No invented operator state.** Profile content, working-style claims, and personal characterizations of operators are written by operators or with their explicit confirmation, not by inference from session text. AI-written self-portraiture of an operator without review is rejected.

**No new disciplines without dev-log incidents.** A discipline earns a section in [../know/disciplines/](../know/disciplines/) only when it has at least one concrete incident where it held or had to be re-asserted. Disciplines are observed, not invented.

**No output patches when the description is the problem.** Bad outputs trace to bad descriptions; the patch is at the description, not the output.

---

## What this work commits to

**Making the math felt.** The framework exists so that mathematical structure becomes perceivable. Every framework decision is checked against that.

**Earning what we name.** Borrowed vocabulary is marked gestural until the formal content has been delivered. The formalization roadmap is the path.

**Honest accounting.** When the framework's claim exceeds the framework's delivery, the gap is named. See [CRITIQUE.md](CRITIQUE.md).

**Lineage acknowledgment.** Borrowed ideas are credited; their sources tracked. See [LINEAGE.md](LINEAGE.md).

**Audit-after-change.** When something lands, the rest of the framework gets walked through for what's affected.

**Operator agency.** The operator authors and chooses; the framework's discipline keeps the authoring rigorous, not the framework's preferences.

**Direct disagreement when warranted.** No sycophancy. Empty assent is not output.

---

## Why a charter

A charter is what keeps a piece of work coherent across many sessions, many operators, and the inevitable pull of *"what if we also..."* Without one, the work drifts toward whatever shape is easiest to add a feature to. With one, every proposed addition gets checked against the gates.

The framework's discipline against scope sprawl is the charter. The charter's discipline against drift is being read.

---

## How to use this document

- **Before proposing a feature or expansion:** check it against the refusals. If it crosses a gate, the gate wins by default — only an explicit, deliberate decision moves the gate.
- **When the work feels like it's drifting toward product-shape:** re-read the first section.
- **When tempted to write something about the operator without their input:** re-read "No invented operator state."
- **When tempted to claim more than has been delivered:** re-read "Honest accounting" and visit [CRITIQUE.md](CRITIQUE.md).
