# audit — kit-rig — f0 — the full reckoning on all 33 checks

address: 221 (trace·audits·path) · type: audit · seat: clerk, audit-mode
cut on operator word: "do the full reckoning on all 33." Subject: `211/kit/dev/verify.mjs`.

**the question being answered:** is the rig real verification, or is it the "400-test, confidently-wrong" pattern — a green count that manufactures false confidence? Read all 33 checks (not the rig's own header — that claims "CORRECTNESS lives here," which is the self-claim under audit).

**operator's framing, taken as the lens (and confirmed below):** the checks aren't the problem; *framing them as "correct" is.* All they do is confirm we didn't regress on **what we already know can break.** A slight signal that nothing previously-working broke — and even that is error-prone. So the rig is **not a proceed-gate.** Green ≠ correct ≠ permission to proceed.

---

## METHOD

Each check classified on three axes:
- **kind** — BEHAVIOR (asserts a real computed/rendered outcome: a value, a pixel spread, a position) · MATH (pure-function, exact expected) · LAYOUT (geometry/overflow) · PRESENCE (asserts text/labels/existence only).
- **bug-born** — does it encode a documented real bug it was seen to fail on? (★ = yes, traceable to an incident log.)
- **can-go-red** — could a plausible break actually turn it red? (the test of whether it's more than tautology.)

PRESENCE is the weak class: it passes whether or not the thing *works*, as long as the label is on the page. That's the theater kind.

---

## THE 33

| # | check | kind | bug-born | can-go-red | verdict |
|---|-------|------|----------|-----------|---------|
| 1 | steppers | LAYOUT | ~ (bug-batch #5 clip) | yes (scrub clips) | keep |
| 2 | menuSplit | PRESENCE | no | partial (labels swap) | **downgrade** — labels present ≠ menus work |
| 3 | valueReset | BEHAVIOR | no | yes | keep |
| 4 | feel | PRESENCE | no | weak (label list) | **cut/upgrade** — pure presence |
| 5 | panelOutput | PRESENCE+ | no | partial (no-clock is real) | **downgrade** — keep the "clock removed" half |
| 6 | resizeParam | BEHAVIOR | no | yes | keep |
| 7 | debugOverlay | BEHAVIOR/geom | no | yes | keep |
| 8 | menuFit | LAYOUT | ~ (bug-batch #4 overhang) | yes | keep |
| 9 | sliderDrag | BEHAVIOR | no | yes | keep (strong) |
| 10 | drivenStop | BEHAVIOR | ★ "value stuck at 0" | yes | **keep (gold)** |
| 11 | persist | BEHAVIOR | no | yes | keep |
| 12 | heartParams | PRESENCE+ | no | partial | **downgrade** — labels + unit text |
| 13 | focusLatch | BEHAVIOR | ★ scope-focus-miss | yes | **keep (gold)** |
| 14 | channelsManual | BEHAVIOR (pixels) | ★ scope-focus-miss | yes | **keep (gold)** |
| 15 | scrubJog | BEHAVIOR | no | yes | keep |
| 16 | heartParamSelect | PRESENCE | no | weak | **cut/upgrade** — pure presence |
| 17 | smoothDrive | BEHAVIOR (frame sample) | ★ bug-batch #6 jump | yes | **keep (gold)** — *this check exists because the rig failed before* |
| 18 | readoutBank | PRESENCE+ | no | partial (count+dead-const) | **downgrade** — mostly count/labels |
| 19 | readoutScope | BEHAVIOR-lite | no | yes (head retargets) | keep |
| 20 | readoutLatch | BEHAVIOR | ★ emission-focus rule | yes | **keep (gold)** |
| 21 | readoutTwoCh | BEHAVIOR (pixels) | no | yes | keep (strong) |
| 22 | scopeResolution | BEHAVIOR | no | yes | keep |
| 23 | scopeFollow | BEHAVIOR (pixels) | no | yes | keep (strong) |
| 24 | scopeZoom | BEHAVIOR | no | yes | keep |
| 25 | scopeClear | BEHAVIOR (pixels) | no | yes | keep |
| 26 | heartDrive | BEHAVIOR | no | yes | keep |
| 27 | ratioMath | MATH (pure) | no | yes (exact) | keep (strong) |
| 28 | ratioPart | BEHAVIOR+presence | no | yes (φ moves) | keep |
| 29 | ratioInput | BEHAVIOR | no | yes | keep |
| 30 | ratioLink | BEHAVIOR | no | yes | keep |
| 31 | scrubDrag | BEHAVIOR | ★ scrub-dead-drag | yes | **keep (gold)** |
| 32 | ratioConfigMenu | BEHAVIOR | no | yes | keep |
| 33 | ratioStep | BEHAVIOR | no | yes | keep |

---

## TALLY

- **6 gold** — bug-born, provably go red, encode a real past failure: `drivenStop`, `focusLatch`, `channelsManual`, `smoothDrive`, `readoutLatch`, `scrubDrag`. These are the suite's spine. Notably, **most exist *because the rig (or a hand-test) missed the bug first*** — they are scar tissue, added after live use caught what the rig didn't.
- **~21 solid behavioral/math** — assert real outcomes (values, geometry, **canvas pixels** for the scope/channel checks, exact pure-math for `ratioMath`). Hard to fake-pass; would go red on a real break. Not bug-born, so unproven-red, but genuine.
- **6 weak/presence** — assert labels exist, not behavior: `feel`, `heartParamSelect`, and the presence-portions of `menuSplit`, `panelOutput`, `heartParams`, `readoutBank`. These are the theater fraction — they pass whether the feature works or not.

**So: this is NOT the 400-test theater suite.** Most checks read real rendered output. The fear was bigger than the reality.

## BUT — the operator's framing holds regardless of quality

Check quality changes how *trustworthy each green is*. It does **not** change the **category of confidence** the suite provides. Every check here — gold included — only confirms **a known behavior still holds.** By nature the whole suite is **retrospective**: it encodes what we already learned can break. None of it can catch a *new* class of bug. That is exactly the operator's point: a regression net, not a correctness oracle.

And it stays **error-prone even as a net:**
- the 6 presence checks pass with the feature dead (label still on the page);
- `waitForTimeout`-based steps are timing-flaky — green/red can flip on load speed, not correctness;
- pixel-color thresholds are brittle both ways (a palette tweak reds a working trace; a subtly-broken one can slip under the threshold);
- one headless viewport/dpr — feel, real hardware, real interaction are uncovered, and feel is where the real bugs have lived.

## CONCLUSION — how the rig should be framed and used

1. **Not a proceed-gate.** Green means "no *known* regression and no gross breakage." It never means "correct" or "safe to proceed." The proceed-gate is the operator's feel + real use. Stop reporting "33/33" as if it clears the work.
2. **Report it as what it is** — "regressions green / no gross breakage," not "verified."
3. **Prune toward the spine** (cycle-close reduce work): upgrade or cut the 6 presence checks — a presence check earns its place only by becoming a behavior check or by guarding a real removal.
4. **New checks are bug-born or they don't enter** — written from the operator's requirement or a real repro, and seen to go *red* on the break before they're trusted green.
5. **Where it IS legitimately useful** — gross-breakage detection (a bad refactor/file-move 404s a module → the page throws → checks can't even run). That failure mode is total, not subtle, so the net catches it. (Relevant to the pending kit reorg: a sound use of the rig — paired with eyes on the loaded page, not green alone.)

*Append below. Corrections forward. The prune (point 3) lands in the cycle-close reduce pass, not now.*
