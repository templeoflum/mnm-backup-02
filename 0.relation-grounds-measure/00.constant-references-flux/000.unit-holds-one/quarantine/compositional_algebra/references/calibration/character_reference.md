# Character Reference

One character. Minimum viable scope to exercise the character signal across three movements.

---

## The Figure

A person crossing a room toward a window.

> Per framework's Identity/Trajectory split: this section's **Identity invariants** and **Identity flexibility** are the Figure's Identity (what the Figure is, across the work). The **Per-movement behavior** below is the Figure's Trajectory (how the Figure moves through the work) — coordinated with the spline's math.

### Construction

- **Identity invariants:** a single human figure; present across all three movements; the agent of the crossing and the opening
- **Identity flexibility:** age, gender, appearance, dress, name — all open to realization-level choice
- **Continuity grade across movements:** C² (full continuity — same figure, no transformation)

### Per-movement behavior

**Movement 1 (Crossing):**
- **Position:** mid-room, moving toward the window
- **Gesture:** walking; body oriented forward
- **Attention:** on the window
- **Voice (if speaking):** forward-attentive; the speaker is moving

**Movement 2 (At the Window):**
- **Position:** at the window
- **Gesture:** still; body held at the threshold
- **Attention:** through the glass; on what's outside, or on the held quality itself
- **Voice (if speaking):** held-attentive; the speaker is at a threshold

**Movement 3 (Opening):**
- **Position:** at the open window
- **Gesture:** hand on the latch, the gesture of opening
- **Attention:** participating in the opening; receiving what comes through
- **Voice (if speaking):** opening; the speaker's voice releases with the window

### Voice attribution

When the Figure speaks, the voice configuration is set by the realization (see realization specs). The character itself does not commit to register or stance — the Figure can be voiced as a Scientist, a Caretaker, a Mythic voice, a Child, etc., depending on the realization. The character's identity is the *who is acting*, not *how they sound*.

### Cross-medium modulation

- **In narrative:** the Figure may be named or unnamed; first-person, second-person, or third-person; the realization chooses
- **In image:** the Figure must be visually consistent across the three movements (same body, same dress, same continuity); pose changes per movement as specified above
- **In audio:** the Figure's footfall (movement 1) and hand-on-latch (movement 3) are the character's sonic signatures; the held quality (movement 2) is the absence of footfall

### Connection to other layers

- **Spline:** receives the Figure's per-movement positioning and gesture as part of the Character signal
- **Audio surface:** reads the Figure's sonic signatures (footfall, latch) — audio is the temporal substrate the Figure moves within
- **Visual surface:** reads the Figure's gesture and pose; medium and visual world render the Figure within the audio substrate
- **Voice:** the Figure is the most-likely-voiced character if the realization commits to a voiced narrator
- **Pass 6 (substitution):** reads the Figure's continuity material (consistent attributes across movements) and weaves into all three prompts (image, audio, narrative) cross-modally — this is where same-Figure-across-modalities-and-movements becomes auditable. Pass 7 (outline) then applies Trajectory.
- **Pass 5 prompts:** receive the Figure's per-movement scene material (what's happening this movement); do not receive continuity material
- **Script:** the Figure's gestures provide stage direction; the Figure's voice (if applicable) provides voice cues
