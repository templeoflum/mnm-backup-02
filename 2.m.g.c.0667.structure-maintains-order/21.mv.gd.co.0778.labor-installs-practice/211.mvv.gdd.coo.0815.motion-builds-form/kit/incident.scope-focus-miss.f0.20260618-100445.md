# incident — scope focus/channels miss — f0

home: `kit` (project) · kind: incident / post-mortem (audit-family, 221 — verified against expectation, not reality) · status: **work HALTED pending remediation** · raised by operator 20260618

## what broke (operator-reported)

1. **The pad shows 1 channel; it should show 2.** The `pad` part emits x→chA and y→chB — it needs 2 channels.
2. **Releasing the pad snaps focus back to the smart param.** Focus doesn't latch to what you touched — it gets yanked back. Happens with every part, not just the pad.
3. Root symptom that started this: "other parts don't connect to the scope anymore."

## the correct design (operator)

- **Channel count is the scope's PROPERTIES setting (manual). It is NOT tied to focus.**
- **Focus LATCHES to the last-touched part. It does not snap back.**

## what actually went wrong

**The real bug — emission-driven focus (latent, pre-existing).**
`workbench.js:300` — `node.out.subscribe(() => { if (mode === 'interact') focus(node); })`. Every value
*emission* re-focuses that node. A continuously-emitting node (a driven param, the heart-fed params)
fires this **every frame**, so focus is yanked back to it. Touch the pad → focus moves to it for one
frame → next frame the driven param emits → focus snaps back. The scope then never holds the part you
touched. That is the "parts don't connect" symptom. The original intent (header comment: "touching a
param points the scope at it; it stays until the next one") was last-touched-latches — the subscribe
silently violated it once a param emits continuously.

**My miss — misdiagnosis + a wrong fix + a false-green check.**
- I diagnosed the symptom as *channel persistence* (auto-2ch staying on) and "fixed" it by tying the
  channel count to part **type on focus** (`focus()` sets 2ch for params, 1ch for others, `:223–224`).
- That fix: (a) did **not** address the snap-back (the actual cause); (b) **broke the pad** — forced its
  legitimate 2 channels down to 1; (c) **contradicted the design** — channels must be the manual scope
  property, not focus-derived. (The operator had also already said this; I overrode it.)
- I wrote a rig check (`partScope`) that asserted *my* invented behavior (slider → channels === 1) and
  it **passed** — manufacturing confidence in the wrong model.

## why it slipped

- **I reproduced a proxy, not the report.** My probe touched a slider *alone* — no emitting param present —
  so the snap-back never manifested, and I concluded "parts connect fine, must be cosmetic channels." The
  operator's scenario has an emitting (driven/heart) param on the floor. **I tested a simplified case, not
  the reported repro.**
- **I encoded behavior never asked for.** Channels-by-focus was my invention. When the intended design was
  unclear (manual vs auto channels — and I'd had that signal before), I built instead of asking.
- **The rig check asserted my hypothesis, not the requirement.** A test that confirms the change I just made
  is confirmation bias mechanized — it passes by construction. It tested *presence of my behavior*, not the
  operator's actual requirement. (This is the carried lesson — verify intent/quality, not presence — failed
  again, in a new shape: the test itself carried the wrong spec.)

## remediation (PENDING — not yet done, awaiting word to continue)

1. **Focus latches to interaction, not emission.** Remove/replace the `out.subscribe → focus` so emissions
   never steal focus; focus is set only by touching/selecting a part (`onNodeDown`, addNode). The scope keeps
   sampling `focused` — which now stays put.
2. **Channels are manual only.** Remove the channel-setting from `focus()` (both the param-2ch and my
   non-param-1ch). Channel count comes solely from the scope-properties selector (`:437`). The pad then shows
   2ch when you set the scope to 2ch.
3. **Revert / rewrite `partScope`** — it encodes the wrong spec. Replace with a check that reproduces the
   *real* repro (an emitting param on the floor + touch another part) and asserts focus **latches** to the
   touched part (does not snap back), and that channel count follows the scope property, not focus.
4. The bad fix is committed on `main` (`scope channels track part type on focus`) — the regression is live
   on the floor until remediated.

## prevention

- **Reproduce the operator's exact scenario before diagnosing** — not a simplified proxy. If the report
  involves "while using X," the repro must include X in the state that triggers it (here: an emitting param).
- **For "Y doesn't work," find the mechanism that makes it not work** before proposing a fix. Don't pattern-
  match to a plausible cause (channels) when the cause is elsewhere (emission-driven focus).
- **Don't encode un-asked-for behavior.** If the intended design is unclear, ask — a "?" / design fork halts.
  The operator had already stated channels are a property; I should not have coupled them to focus.
- **A rig check must encode the operator's requirement, not my change.** Write the assertion from the spec,
  ideally before the fix. A green check on my-own-behavior is not verification.
