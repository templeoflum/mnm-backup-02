# frame — shelf · seeds · submission — f0 — [settled spec at build-go · triad blessed (operator, 20260702)]

The public hub for SF02: a visitor is dealt seeds, cracks them open, consciously takes
one, and submits their piece — which lands in the operator's SF02 tree tagged, named,
and sorted at the door. The dream-side is closed ([[dream.sf02-zine]] hub thread,
20260702-065800); the walk that settled this spec ran in-session, 20260702. Event:
**July 24** — the clock that put the hub at the front of the line.

## §1 — agreement · at a glance

- **the experience (operator-authored, firm):** two literal shelves stacked, three
  literal seeds each — top shelf WORD seeds, bottom shelf IMAGE seeds, that exact
  imagery. A seed = one prompt + one same-family fragment from the pools; closed, it
  wears its prompt as label; clicked, it SPROUTS open and reveals its fragment (the
  tuning-fork beside the ask). Open freely; **TAKING a seed is a conscious act** — the
  agreement that tags the submission. Then the submission page (ours, our register, no
  Google chrome): piece in (file or pasted writing) · **sign or stay anonymous** · send.
  **The receipt** closes the walk: confirmation code + run data (seeds cracked, rerolls,
  families touched) + a response line (placeholder words v1; per-prompt responses open).
- **reroll allowed** (per shelf, re-deal 3) — unenforceable anyway; counts feed the receipt.
- **rerolls LEARN (v1 journey-seed):** deal weighted toward families the visitor cracks
  open — the cheap, honest seed of the choose-your-own-adventure walk. **The full
  adaptive journey = its own v2 frame**, designed on event evidence, collected not cut.
- **intake = OUR ENDPOINT** (operator, 20260702 — supersedes the Form-v1 call in the
  dream): an Apps Script web app in the operator's account; the hub posts piece + tags;
  the script writes the file **into the existing SF02 tree** (text / imagery, per-family
  submission folders — the tree as he built it), named by the convention. No visitor
  sign-in; the Forms name-leak dies; the submission surface never leaves our register.
  Fallback if deployment fights us: one Form as dumb inbox + a local sorter script.
- **naming convention = the spine** (the operator's own instinct — content sorts itself,
  like the lattice): `sf02.<mode>.<family>.<prompt-id>.<stamp>.<author>.<ext>` — author
  at the very end (operator, 20260702): the entered signature as a filename-safe slug
  (raw signature kept in the ledger), or the generic handle for the undeclared —
  "anonymous" is too cliché; candidates `a-hand` (by an unknown hand) / `unsigned`,
  **operator's word picks it**.
- **the visitor never chooses a category** — mode + prompt id → family, derived; even an
  ignored prompt is tagged by the prompt that stirred it.
- **hosting:** developed in-lattice as a unit at `zine-builder/hub/`; deployed STATIC to
  GitHub Pages, **own repo per project** (granularity called, 20260702); the deployer
  stays a dumb push — infra never eats the hub's clock.
- **standing from the dream (not reopened):** deal-don't-pick · prompt = tuning-fork not
  gate · never explain the voice · hub never shows submissions back (v1) · deck stays
  big, only dead prompts cut · seeds re-deal always random (within the learned weights).
- **stack:** buildless browser JS ([[buildless-unit-default]]), kit controls where they
  fit; proofs + windowless captures as the net.

## §2 — plan · chunks & slices
status marks: ○ todo · ▸ doing · ✓ done

**chunk A — the map & the material** *(nothing works without one vocabulary)*
- **slice A1 — the family map**  ○ — ONE family vocabulary across the 122 prompts, the
  288 lines / 7 registers, and the 314 images / 13 families. Drafted mechanically from
  the pools' existing groupings; **operator's light eye blesses it** (his prune = what
  faces public). Output: `families.json` — the single source the decks, seeds, naming,
  and endpoint all read.
- **slice A2 — decks + seed pools packaged**  ○ — the two decks split from the 122
  (word / image), each prompt family-tagged; seed fragments paired per family;
  `seeds.json` shipped inside the unit. Deal + pairing pure and proofed.

**chunk B — the shelf** *(the front room)*
- **slice B1 — two shelves, six seeds**  ○ — the literal imagery: stacked shelves, three
  seeds each, prompt-labeled; click → sprout open (fragment reveals); take-this-seed =
  the agreement act; per-shelf reroll. Deterministic-seeded RNG for the rig; live = true
  random.
- **slice B2 — learning rerolls**  ○ — family weights from cracks; weighted deal; run
  stats accumulate (cracked, rerolls, families) for the receipt.

**chunk C — submission & receipt** *(the back room)*
- **slice C1 — the submission page**  ○ — our register: the taken seed shown, piece in
  (file or pasted writing), sign-or-anonymous, send → posts to the endpoint with tags.
- **slice C2 — the receipt**  ○ — confirmation code (short hash of tag+stamp) + run data
  + response line (placeholder). Its own unique thing — never another prompt.

**chunk D — the plumbing** *(the only outward seams)*
- **slice D1 — the endpoint**  ○ — Apps Script web app: receives piece + tags, writes
  into the SF02 tree per family, applies the naming convention, returns the confirmation
  code. I write the script; **operator deploys it from his account** (short walkthrough
  at this rung — replaces the retired Form walkthrough). Quota + size ceiling (~50MB
  post) named and accepted for the friends-round.
- **slice D2 — the deploy**  ○ — minimal lattice→Pages push, own repo (`zine-hub` or
  operator's name), static output only; the public repo is a deploy target, never a
  workplace.

**collected (v2+, not this frame):** the full adaptive journey (decision-designed walk)
· per-prompt receipt responses · showing work back / the afterlife · Apps-Script-free
self-hosting. The event teaches first.

## §3 — trace · DAG & status
```
A1 map ○ ─→ A2 decks/seeds ○ ─→ B1 shelf ○ ─→ B2 learning ○ ─→ C1 submit ○ ─→ C2 receipt ○
                                                     D1 endpoint ○ (parallel from A1) ─→ C1
                                                     D2 deploy ○ (last, gates nothing)
```
- **status:** f0 = the settled spec, frozen at build-go; fold to f1.live at the first
  build-tracking update. Build order: A1 first (the map gates everything).
- **builds on:** [[dream.sf02-zine]] (hub thread closed + corrections) ·
  [[dream.sf02-zine-sift]] (I-knobs, H-prompts) · [[note.zine-builder-walk.f0]] (two
  surfaces; Fork A) · the editor's kit stack. Editor frame PAUSED at f2 (m2.3).
- **operator-gated rungs, named early:** A1 family-map bless · D1 script deploy (his
  account) · D2 first push (his repo).
- mode: clerk · framing at 210, build on this spec · 20260702.
