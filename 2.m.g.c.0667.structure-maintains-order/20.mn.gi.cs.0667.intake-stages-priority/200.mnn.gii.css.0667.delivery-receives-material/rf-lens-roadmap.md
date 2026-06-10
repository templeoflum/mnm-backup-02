# The RF / Electrical-Engineering Lens — Build Roadmap

*A focused track-list for porting the RH suite into the signal/RF coordinate system.*
*Premise that makes it native, not analogy: `s = σ + jω` in ζ **is** the EE complex-frequency plane.*
*`σ` = growth/damping · `ω` = frequency · critical strip = a vertical band · zeros = zeros-in-the-s-plane · one pole at s=1.*

---

## Honesty tags
- **[IDENTITY]** — a genuine mathematical identity; the same object, not a likeness.
- **[RE-PRESENT]** — true content, shown in the native EE instrument view.
- **[LENS]** — a fair interpretive framing; mark it as interpretation, not fact.

---

## To build

- [ ] **1. The s-plane** · vocabulary reset — LHP decays, RHP blows up, jω-axis = pure oscillation; locate strip, zeros, the s=1 pole. **[IDENTITY]**
  *Caveat to state: ∞ many zeros ⇒ infinite-order system, not a rational transfer function.*

- [ ] **2. The prime filter bank** · ★ highest value — each Euler factor `1/(1−p^−s)` = a feedback comb filter, loop delay `log p`, teeth every `2π/log p`; Euler product = combs in cascade; each prime a resonator with a real Q. Plugs straight into the existing prime-orchestra toy. **[IDENTITY]**

- [ ] **3. ζ on the analyzer (Bode)** · `|ζ(½+jω)|` in dB + phase + group delay; zeros = deep magnitude **notches** with 180° phase flips — how an engineer literally sees a zero. **[RE-PRESENT]**

- [ ] **4. The Nyquist loop** · the argument-principle counter, named correctly — Nyquist encirclements of the origin = zeros enclosed; ζ as a polar locus looping the origin once per zero. (We already built this; this names it.) **[IDENTITY]**

- [ ] **5. The matched filter** · correlate the zero-comb `−ζ'/ζ` against a test frequency → primes light up at `log p`; explicit formula as a correlation receiver. **[IDENTITY duality / LENS on the matched-filter framing]**

- [ ] **6. The hyperuniformity dial** · cap — number-variance exponent places any spectrum on one white↔crystal axis; zeros read **blue / hyperuniform**. Turns noise-floor into a one-number comparison ruler (primes, zeros, random, crystal). **[IDENTITY measure]**

## Already done in this lens
- [x] **Noise floor** (white vs blue vs crystal) — the secret RF entry point all along.

---

## Deliberately skip (rhymes with no load-bearing identity)
*Build only as a "here's where the rhyme breaks" cautionary — never as fact.*
- ✗ Smith chart / impedance-matching reading of the functional equation
- ✗ VSWR / standing-wave framings
- ✗ "a PLL locks onto the zeros"

---

## Suggested arc
**1 → 2 → 3 / 4 → 5**, with **6** capping.
Start **#2** (strongest identity, reuses the orchestra) — or **#1** first to lock the vocabulary.
