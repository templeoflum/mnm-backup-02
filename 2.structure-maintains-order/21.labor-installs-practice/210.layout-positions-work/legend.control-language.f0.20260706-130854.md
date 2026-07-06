# legend — control-language — f0

address: 210 — layout · positions · work

the agreed key to the dispatch's non-verbal language — colour, motion, position,
glyph, tone. a control panel for precision work: no tooltips, this card is the
tooltip. read once, then the panel speaks. **its settled ancestor is the andon
board** — mostly dark, light means *attend*.

**float** — authored together; nothing here is law until all three seats + the
operator read it the same. entries append; the doc folds only on a format change
or when it settles. STATE tags (LIVE / PROPOSED / OPEN) are the current read.
*grounded by the round 20260706 — keeper (HMI + corpus) + lantern (dream + toys);
two catches fixed, every discipline anchored to a settled corpus ancestor.*

---

## the discipline — what keeps it precision-grade, not decoration

each rule has a settled corpus ancestor (keeper's grounding, the round):

1. **redundant coding** — no cue rides one channel alone; colour + shape +
   position, so no single-channel failure loses it. [[object.defense-in-depth]]
2. **signal economy** — a cue always-on is silence; each fires from a real state
   change, rare, one meaning, and carries a DEFINED RESPONSE or it is noise.
   mostly-dark panel, light = attend. [[object.alarm-management]] [[object.andon]]
3. **state at a glance** — deep state made directly perceptible, no inference;
   text only where a name is unavoidable. [[object.ecological-interface-design]]
4. **ground-truth** — every cue is a fact the body produces (a dial, a commit, a
   flag-line, a real line-pull), never a timer-guess or an auto-green.
   [[object.andon]] [[object.deadman-switch]] [[signals-need-ground-truth]]
5. **poka-yoke** — the control's shape makes the wrong move self-evident;
   reserved meanings stay reserved. [[object.poka-yoke]] (Shingo mistake-proofing)
6. **reachability** — safety controls large and always-reachable (the e-stop).
   [[object.fitts-law]]
7. **agreed & written** — a cue means what THIS card says; new cues enter here
   first, by agreement — never invented per-use at the screen.

---

## the channels

### colour — identity, reserved (never decorative)
- **0 blue · 1 green · 2 orange** — branch / seat identity — **LIVE**
- **white outline** — selected / focused — **LIVE**
- **red** — stop · danger (cord, e-stop) — **LIVE**
- **amber** — waiting (a *redundant/secondary* marker only; the PRIMARY carrier
  is position/context) — **LIVE** (gait-hold) / **PROPOSED** (W1 unheard)
- *why reserved, empirically:* colour is read by SURROUND, not absolutely — the
  same grey or hue shifts with its neighbours, so a decorative colour misreads
  elsewhere. the toys prove it: [[object.simultaneous-contrast]]
  [[object.cornsweet]] [[object.chevreul-illusion]] (lantern, signed 20260706).

### motion — reserved, one meaning
- **pulse** — needs you NOW (a request waits on your hand) — **LIVE**
- **steady glow** — active · has-it · waiting — **PROPOSED** (the dial, W1)
- **still** — at rest — **LIVE**
- *pulse is urgency ONLY* — a waiting signature is not urgent, so it sits STEADY,
  never pulses (the round's resolution of the amber overload).

### position — the primary carrier of "whose court"
- **top / always-on-top** — safety, unmissable (e-stop stacks above all) —
  **LIVE** [[object.fitts-law]]
- **your court vs the seat's court** — whose move it is; the PRIMARY channel of
  the W1 handshake (amber is only its redundant echo) — **PROPOSED**

### symbol / glyph — the weakest channel, kept light
- seat identity rides **colour 0/1/2 + position** (strong, LIVE) — NOT the glyph.
- **emoji (🦺 🏔️ 🧠)** render inconsistently across platform/font, lean
  decorative, fail redundant-coding + poka-yoke — **demoted: not load-bearing**
  (keeper's catch).
- if a drawn mark stays, a distinct **geometric glyph** reads faster and survives
  rendering; a light / flame could read *lantern* by name — **OPEN**.
- **doc-type glyph** (proposal · frame · legend · …) — **OPEN**.

### sound / tone — the new channel, held light, OPEN
- a **distinct tone per rare event** — obeys signal-economy or it is noise.
- honest state (lantern's check): met3or HAS an audio engine (triangle
  oscillators, 6 voices, colour-param → frequency) — a tone channel is
  *buildable* — BUT it carries **no grounded wavelength(nm) → pitch(Hz) map**;
  the "wavelength → tone" is aspirational, not built.
- when it enters: perceived intensity is logarithmic — steps must be RATIO-spaced
  (equal ratios, not equal increments) or they blur. [[object.fechners-law]]
  (Weber). the real map wants a small derivation (visible nm → octave-folded
  audible pitch, Fechner-spaced) — buildable as a toy when the channel is greenlit.

---

## the signals we already speak (composed from the channels)

- **gait** — a seat's state: work = green · hold = amber-steady · halted =
  red-pulse — **LIVE** (this IS andon)
- **the dial** — a seat declares *"I have this"*: `active.py on <file>` —
  **LIVE** (mechanism) / **PROPOSED** (glow at the paper)
- **the cord / e-stop** — red · top · one meaning: STOP — **LIVE** (poka-yoke + fitts)
- **the paper handshake (W1)** — the states ride POSITION (whose court), amber
  redundant, motion steady: awaiting (your court) → signed·unheard (the seat's
  court, not yet taken) → heard (the seat dialed on) → done — **PROPOSED**

---

## open slots — need our agreement

- the geometric glyph set (or confirm colour + position alone carries identity)
- the doc-type glyphs
- the tone set + the nm → pitch derivation (when sound is greenlit)
- (append as we find them)

## what the round closed (20260706)

- **amber overload** → position-primary + amber-redundant, steady-not-pulse
  (keeper caught, lantern resolved from the W1 source, keeper confirmed)
- **seat emoji** → demoted to non-load-bearing; identity = colour + position
- **every discipline** anchored to a settled corpus ancestor
- **tone** honestly OPEN — the engine exists, the grounded map does not yet

---

*companion to [[frame.dispatch]] — the frame says what the window IS, the legend
says what its cues MEAN. two of three seats read it the same (keeper + lantern,
20260706); waiting on the operator's settle-word to close the round.*
