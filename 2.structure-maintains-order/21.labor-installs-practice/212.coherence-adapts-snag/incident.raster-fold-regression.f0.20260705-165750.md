# incident — raster-fold regression — f0 — coherence·adapts·snag

stamp: 20260705-165750 UTC · status: **caught by the operator, not by me** · the met3or workbench render (met3or-kit/workbench.html, commit 3e9a053) shipped a regression: the θ grammar-weave jumbles at mid-slider, and the render lost the old character. Operator: "big miss... the mirror is all messed up and so is the slider, totally lost a lot of its character."

## what happened

Folding the faithful raster render + the θ grammar-weave into the workbench, I:
1. dev-probed the render at a **single static θ** (−30°, the document end — which looks clean),
2. saw a correct wordmark + reticule + reflection, zero JS errors,
3. **declared it green and shipped it.**

I never swept the slider. The failure lives in the MIDDLE of the slider, exactly where I didn't look.

## what's actually broken

- **The θ-weave is a jumble, not an interlace.** I implemented the weave as a golden-ratio dither that picks document-vs-mirror per scanline. At θ≈0.5 that draws BOTH the document (MET∃OR) and its horizontal mirror OVERLAID, dithered line-by-line → an illegible overlap. The ends (θ=0 document, θ=1 mirror) are clean; the transition is garbage.
- **A working mechanism was replaced by a guess.** The old render already had a clean "ink-only interlace" (vertical strips of document-vs-mirror, width driven by θ — each strip is one grammar OR the other, never overlaid). It read cleanly and carried character. I threw it out and invented the dither without grounding against the thing that already worked.
- **Character lost.** The old living-wordmark render (beam trace, hue leaning, contact events, the vesica eye) flattened into the raster fold; the operator felt the loss immediately.

## root cause

**Green-on-one-static-frame treated as verified.** A windowless static probe cannot judge a DYNAMIC, feel-based mechanism (a slider that sweeps a transition). I have this exact lesson already — eye-the-ui, and co-run for operator-facing interactive flows — and I still shipped a slider's behavior on one frame at one end of its travel. The probe answered "does it render?" (yes) and I let that stand in for "does the mechanism work across its range?" (no) and "does it feel right?" (his eye only).

Secondary: I designed the θ-weave from a phrase ("interlace the shift") without reproducing it against the old, working interlace — inventing where I should have grounded.

## remedy direction (to discuss, not yet applied)

- **Verification:** any control that sweeps a transition gets probed ACROSS its range (capture at several points), never one end; and the feel is the operator's eye / a co-run, never a green static probe. Fold this into the eye-the-ui habit explicitly: sweep sliders.
- **The θ-weave:** restore a CLEAN interlace where each region is document XOR mirror (no overlap) — the old vertical-strip mechanism, or a clean wipe — grounded against what read well before.
- **Line thickness:** add the stroke/beam-thickness setting the operator asked for.

## landing

212 coherence·adapts·snag → the snag is a verification gap, not a code typo: I can make a thing render and still not have looked at what it DOES. Nothing was lost (the old render is in git history; the study is intact), but the operator caught a regression I should have caught by dragging the slider once.
