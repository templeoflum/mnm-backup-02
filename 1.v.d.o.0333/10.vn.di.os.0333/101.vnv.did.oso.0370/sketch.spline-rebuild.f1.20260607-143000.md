# sketch — spline-rebuild — f1 — 20260607-143000

working copy. f0 has the raw inventory. this fold proposes changes. everything still floating.

---

## what it actually does (unchanged from f0)

1. **build a curve**: place values at joins. fit polynomials between them. the order determines how many derivatives match.
2. **walk the derivative stack**: evaluate each derivative order at every point. where left/right limits disagree at a join = a break.
3. **route to outputs**: map derivative values to perceptible channels. a break appears wherever the broken order is routed.
4. **three modes**: independent, coupled, single. a spectrum from fully local to fully global.

---

## proposed vocabulary

### construction

| current | proposed | why |
|---------|----------|-----|
| order | **order** (keep) | standard spline terminology. C0, C1, C2. unambiguous within this instrument. |
| segment | **segment** (keep) | one piece between two joins. standard, correct. |
| knot | **join** | "knot" is standard spline vocabulary, but within this system it does something specific: it's where two segments MEET and where continuity is tested. "join" says what it IS — the meeting point. also: "knot" has other mathematical meanings (topology) that don't apply here. the user drags joins. breaks happen at joins. |
| mode | drop the word, name the things | three modes are three construction strategies. name them directly: **independent** (segments don't know about each other), **coupled** (globally solved, tension-blended), **single** (one polynomial, no joins). the mode selector becomes a strategy selector. |
| tension | **tension** (keep) | within coupled mode: how much global coupling vs local independence. 0 = loose (fully coupled), 1 = taut (behaves like independent). the word is standard and grounded. |
| periodic | **periodic** (keep) | the curve loops. the seam obeys the same order as every other join. standard term, correctly used. |

### measurement

| current | proposed | why |
|---------|----------|-----|
| derivative ladder | **ladder** (keep, but just "ladder") | the instrument's core display. "derivative" is implied — the ladder IS the derivative stack. saying "the ladder" is enough. it's native to this instrument (unlike "rung" which was borrowed). |
| break | **break** (keep) | a discontinuity at a join. clear, short, accurate. the instrument's fundamental observation: where things break. |
| continuous | **continuous** (keep) | the complement of break. standard term. |
| reach zone | **reach** | how far a join's influence extends. drop "zone" — "the reach of this join" is enough. verified by probing: displace the join, see where the curve moves. |
| influence | **influence** (keep) | how much a drag changed things. grounded — it's measured as |current - baseline| at each point. |
| baseline | **baseline** (keep) | snapshot before a change. the reference. standard term. |

### output

| current | proposed | why |
|---------|----------|-----|
| medium / domain | **channel** | "medium" is the page title but the code says "domain." both are overloaded. what these actually are: output channels. a channel receives a derivative value and renders it as something perceptible. position channel, hue channel, pitch channel. simple, accurate, not aspirational. |
| driver | **source** | which derivative order feeds a channel. "driver" implies force/cause. "source" says where the signal comes from. source: f'' means the channel reads the second derivative. |
| unipolar / bipolar | keep | [0,1] vs [-1,1]. clear, standard signal terminology. |
| gate | **gate** (keep) | a discrete event. fires when the playhead crosses a feature. standard synthesis term, correctly used. |
| fused voice | **voice** (drop "fused") | three oscillators sharing a fundamental. they aren't fused — they share a frequency. "voice" is what you hear. the fusion claim is aspirational; the voice is real. |

### dropped (not structural)

| word | verdict |
|------|---------|
| playhead | animation timing. stays in code, not in vocabulary. |
| combs | rendering option. stays in code. |
| ghost / heat / tug | visualization modes for drag feedback. stays in code. |
| detail | rendering density toggle. stays in code. |

---

## naming the unnamed

### 1. the routing

the configurable mapping from derivative orders to output channels. each channel has a source picker (d:N). change the source and the channel reads a different derivative. route a channel to the broken order and the break becomes perceptible in that channel.

proposed: **the routing**. it's literally signal routing — source (derivative) → destination (channel). the routing is what makes the instrument useful: same curve, same breaks, visible/audible through different channels. you configure the routing.

### 2. the perceptibility boundary

at C0 the break is in value — you see/hear a jump. at C1 it's in slope — you feel a corner. at C2 it's in curvature — you sense a change in bend. at C3+ it's in jerk, snap, crackle — derivatives nobody perceives directly. but the instrument can route those imperceptible breaks to perceptible channels. that's its trick: it makes breaks you can't feel become breaks you can see.

proposed: **the threshold**. below the threshold (low order), breaks are perceptible. above it (high order), they're not — unless you route them down. the instrument's whole point is to move things across the threshold. the exact threshold depends on the channel (visual position has a lower threshold than audio timbre).

this might be too abstract. the word is floating. the phenomenon is real: at some order, breaks stop mattering to human perception. the instrument ignores that boundary and makes everything visible.

### 3. the mode spectrum

independent → coupled → single isn't three discrete modes. it's a spectrum. independent: segments know nothing about each other. coupled with tension=1: same as independent. coupled with tension=0: fully dependent. single: maximally dependent (one polynomial, no joins at all, C-infinity but oscillates).

the tension slider already IS the spectrum within coupled mode. the mode selector jumps between strategies. together they cover: fully independent → tension-blended → fully coupled → single polynomial.

proposed: not a new word. just acknowledge the spectrum. the three modes ARE the vocabulary. independent, coupled, single. tension slides within coupled. that's enough.

---

## instrument structure

the spline instrument has three layers:

1. **the curve** — built from joins, order, and mode. this is the signal source. one function of t.
2. **the ladder** — the derivative stack. shows what the curve is doing at every order. detects breaks.
3. **the routing** — maps derivative orders to output channels. makes breaks perceptible.

curve → ladder → routing. build → observe → output.

compare to the trajectoscope: composition → scope. build → measure.

the spline instrument has an extra layer — the routing. the trajectoscope measures but doesn't route to arbitrary output channels. the spline instrument does. that's the genuine structural difference beyond the math.

---

## summary of changes from f0

**renamed:** knot → join, medium/domain → channel, driver → source, fused voice → voice

**dropped from vocab:** playhead, combs, ghost, heat, tug, detail (all rendering/UI, stay in code)

**kept:** order, segment, tension, periodic, ladder, break, continuous, influence, baseline, unipolar/bipolar, gate

**named modes:** local → independent, coupled (keep), global → single

**named the unnamed:** the routing (derivative→channel mapping), the threshold (perceptibility boundary), the mode spectrum (acknowledged, not named)

**instrument layers:** curve → ladder → routing

---
