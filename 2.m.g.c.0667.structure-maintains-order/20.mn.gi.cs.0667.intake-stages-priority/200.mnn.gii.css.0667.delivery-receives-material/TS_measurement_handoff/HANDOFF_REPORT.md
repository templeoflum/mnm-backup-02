# TS MEASUREMENT SUITE — HANDOFF REPORT
*Compiled to continue the work: new measurement lenses, the integration that didn't land, and the FLT/modularity insight that reframes "what equality means" for these objects.*

This package is a working handoff, not a finished product. It contains every standalone toy (the running TS instrument itself is **deliberately excluded** — that file is yours, and the Stage-2 changes to it regressed; see §3.1). The intent is that you can pick up the two new lenses, fold them into TS *properly*, and build the two designed-but-unbuilt features, with the verification scaffolding intact so the bench stays trustable.

**Honesty ledger** (tags used throughout): `[IDENTITY]` = an equality that holds exactly; `[RE-PRESENT]` = the same thing in new coordinates; `[LENS]` = an interpretive framing, not a result; `[OBSERVATION]` = a measured fact; `[OPEN]` = unresolved; `[FAILED]` = tried and didn't work.

---

## 1. WHAT'S VERIFIED AND WORKING

Two new standalone measurement toys, each verified headless (Python/numpy) against ground truth I can compute by hand, then re-verified in the exact JavaScript that ships:

- **`toys/signal-lens.html`** — reads a loaded form as a time-signal z(t)=axis₁+i·axis₂, shows its windowed-FFT spectrum + the integer-combination lattice Σnₖωₖ + exact line amplitudes by projection. `[OBSERVATION]` Torus ground truth recovered to **0.0000%**: lines at {ω₀−ω₁, ω₀, ω₀+ω₁} = {0.6817, 1.0, 1.3183} with amplitudes {16.8, 72, 16.8} (D=80, ratio=π).
- **`toys/symmetry-probe.html`** — measures the form's point-cloud against mirrors (per PCA plane), point inversion, and rotational orders C2–C6 about each PCA axis; score = chamfer residual ÷ the cloud's own nearest-neighbour baseline (self-calibrating to sampling noise). `[OBSERVATION]` Sphere ≈1 on all ops; ellipsoid ≈1 on mirrors/inversion/180° but **3.78 on 120°** (correctly catches C2-not-C3); a +x-lump cloud scores **4.5 on mirror⟂x and inversion** (correctly fails the absent symmetry) while staying ≈1 on the intact mirror.

Two **Stage-1 edits to TS itself succeeded and validated** (they are *not* in this zip since TS is excluded, but they're documented in §6 and the code lives in your working file):
- vocab rename **fingerprint → signature** (every identifier, string, comment, and the three delegation button-IDs renamed in lockstep);
- **tolerance fix**: the old hardcoded tiers (`<0.003 identical`, etc., which were only tooltip text — nothing computed them) replaced by a comparison against the signature's own **measured noise floor** (its frame-to-frame breathing via the existing `rollStat` machinery), with a per-component delta showing *which* axis differs.

---

## 2. THE CORE METHOD (keep this — it's what makes the bench trustable)

Every measurement claim in this thread cleared the same bar, in order:
1. **Verify headless** in Python against a case whose answer is known analytically (torus spectrum, sphere symmetry) — *before* any UI.
2. **Port the verified kernel to JS verbatim.**
3. **Build the self-contained HTML.**
4. **Validate the build**: parse + every `getElementById`/`$('id')` target resolves + no `localStorage`/`sessionStorage` + **re-run the embedded math in node** to confirm the in-browser numbers match the headless reference (a syntax check cannot catch a wrong recurrence).

`/verification/` holds the actual harnesses: `verify_toys.py`, `verify_toyA2.py` (headless ground truth), `kernel.js` + `test_kernel.js` (the shared kernel, node-verified), `test_lensblock.js`/`test_spliced.js` (integration tests), `validate.js` (the build validator), and `runtest.js`/`runtest2.js` (the regression-diagnosis harnesses from §3.1).

---

## 3. FEATURES WE TRIED AND FAILED

### 3.1 `[FAILED]` Folding both lenses into TS (Stage 2) — REGRESSION, not root-caused
This is the big one. After folding the lenses into TS the instrument **regressed**: the **freeze button stopped working and the new lens checkboxes did nothing.** The work was abandoned (the real TS file is safe elsewhere; this was an experiment).

**What was changed during the fold-in** (all of this is in `integration/lensblock.js` + the four hook-points):
- inserted the lens kernel block before `function frame()`;
- `meas.cloud = pts;` added in `analyzeLocus` to expose the Weyl cloud (so the symmetry probe reuses the *same* cloud PCA uses);
- `lensTick();` called once per frame, just before `updatePanel()`;
- two conditional appends inside `updatePanel` (`el.innerHTML += symHTML()` / `signalLinesHTML()`), gated on the new toggles;
- HTML: two checkboxes + a signal-axes select + lattice/log toggles added to the tier-3 readout header; a `<canvas id="specCanvas">` added inside tier-3.

**What was verified and is NOT the problem:**
- `[OBSERVATION]` The lens **math is correct** — both in isolation (`test_lensblock.js`) and *as spliced into the file* (`test_spliced.js`, extracted straight from `ts.html`): torus → 72/16.8/16.8, sphere symmetry → ~1.
- Static checks all passed: full-script `node --check` (syntax OK), no duplicate element IDs, all 81 DOM-id references resolve, every new function defined exactly once (no collision), the recomputes are gated to parameter changes.
- **Ruled out:** `initLodzone` (it only counts `.tier` elements; the canvas sits *inside* tier-3 and adds no tier) and `initScrub` (only touches `.scrub` elements; the canvas/toggles aren't). So the new DOM did **not** break those init routines.

**Why it broke — leading hypotheses `[OPEN]`** (none confirmed; I had no browser console, which is exactly where the real error + line number would be):
- The symptom pattern — *both* freeze and the polled checkboxes dead at once — is the signature of **the frame loop dying** (an exception thrown in `frame()` halts before `requestAnimationFrame(frame)`, so animation stops → freeze has nothing to freeze → `lensTick`'s checkbox polling never runs) **or** an **init-time throw before `frame()` is first called** (line ~3006), which would also leave the freeze handler attached-but-inert (it binds earlier, at ~2762) with a dead loop.
- The **unconditional** part of `lensTick()` (runs even with toggles off) is the prime suspect for a per-frame throw: it reads `currentFormula`, `rung`, `kHole`, `rateRatioId` and toggles `specWrap.style.display`. These are module-level globals initialized before `frame()`, so static reasoning says it's safe — but the node mock couldn't execute past the DOM-heavy init (`initScrub` manipulates real `childNodes` my stubs lack), so the in-browser frame path was never exercised under test. **This gap is the lesson: a node mock is not a browser; the suite needs an actual headless browser (jsdom/Playwright) to catch integration runtime errors.**

**Recommended way to re-attempt the fold-in** (incremental, browser-checked):
1. Open the regressed file in a browser with devtools — the console will name the exact error and line. *Start there.* Everything below is a guess until you have that.
2. Re-fold **one lens at a time**, testing freeze after each step, so the breaking change is isolated.
3. Wrap `lensTick()` in a `try/catch` that logs once and disables the lens, so a lens bug can never take down the loop/freeze again. (Defensive isolation is the right architecture for an add-on to a trusted bench.)
4. Consider moving the spectrum **canvas out of the `.lodzone` tier** entirely (its own element below the section, or a floating panel) — fewer structural assumptions to violate.
5. Attach the lens toggles with **explicit handlers** (`onchange`) that trigger recompute, rather than only polling them inside `lensTick` — less coupling to the frame loop.

### 3.2 `[FAILED]` Autocorrelation as a commensurability / closure read
The signal lens originally tried to read whether an orbit "closes" (commensurate) vs "fills" (incommensurate) from the autocorrelation of z(t). It **could not discriminate** — π, φ, and 1:2 all read "re-peaks." Cause: in epicyclic forms the first tone dominates (amplitude halves each level), so |autocorrelation| never decorrelates regardless of commensurability. Dropped.

### 3.3 `[FAILED]` Spectral integer-lattice harmonic test for commensurability
Second attempt: classify commensurability by whether the spectral peaks are integer multiples of a common fundamental (harmonic) vs not. Also **failed** — π and φ both read "harmonic." Cause is **fundamental, not a bug**: on finite data every irrational sits within a small distance of *some* low-denominator rational (Diophantine approximation), so no spectral heuristic can separate "near-rational" from "rational."
**Resolution `[IDENTITY]`:** the continued fraction (already in TS's rotation/resonance readout) is the *correct* tool, precisely because it measures **how** close (the size of the CF terms quantifies the Diophantine quality). The signal lens therefore does **spectrum only** and explicitly defers commensurability to the CF. *Don't re-add a spectral commensurability test; it cannot work.*

---

## 4. FEATURES DESIGNED BUT NOT YET BUILT (the roadmap)

### 4.1 `#3` Two-specimen comparator — *now sharpened by the FLT/modularity insight (§7)*
Beam-2 in TS is currently a *transform* of beam-1 or the *same* staged construction; you cannot run `staged` against `torus`, or against a `zeta-explicit` specimen, and read their distance live. Build "beam 2 = any formula" → a two-specimen comparator on a shared spine.
**The criterion for "the same" — this is the FLT contribution:** not "shape-numbers are close," but **same spectrum** (same set of {frequency, scaling-rate} lines from the signal lens). See §7.4. The signal lens already measures exactly this; the comparator is the missing plumbing plus a `zeta-explicit` specimen formula (per-term frequency = γₙ, amplitude = 1/|ρₙ| — structurally an epicyclic sum the bench can load directly).

### 4.2 `#4` True-4D signature + a "4D-ness" readout
TS's signature is the *projected-3D* one (the code flags this). For staged (genuinely SE(4)), compute the 4×4 covariance of the **pre-projection** [x,y,z,w] cloud → four eigenvalues → a real 4D signature, plus the **w-share of variance λ₄/Σλ** as a clean discriminator: ≈0 for a 3D-native formula, nonzero for staged. The pre-projection point already exists inside `buildRaw` before `project4to3` — capture it there. This also makes staged-vs-3D comparison *fair* (right now you compare a 4D form's shadow to a 3D form).

### 4.3 Tuning the chosen thresholds
The symmetry cuts (green<1.6 / amber<2.4) and the signature verdict (within 1× / 3× noise floor) are **chosen multiples**. They're principled now (relative to *measured* quantities, not absolute constants), but pin them empirically once you've watched many real forms.

---

## 5. THE TWO NEW TOYS — full specs (so they can be rebuilt/extended)

### 5.1 Signal Lens
- **Signal:** z(t)=axis₁+i·axis₂, sampled at the cascade rates ωₖ = (1/ratio)^k, N=4096, dt=0.4 (Nyquist ω≈7.85 ≫ the ~1.3 max signal frequency).
- **Spectrum:** windowed FFT (Hann window, divided by coherent gain = mean of window). `[OBSERVATION]` Peak **locations** are exact; peak **heights leak** — the dominant line reads to 0.66%, weaker neighbours ~10% low — because the tones don't land on exact FFT bins. So the FFT is the *picture*; the **exact amplitudes** come from a separate least-squares projection onto the snapped lattice frequencies (leakage-immune; this is what reads 16.8/72/16.8).
- **Lattice overlay:** the integer combinations Σnₖωₖ (|n|≤3). **Capped to the first 4 base rates** — higher cascade rates are near-zero frequency, and without the cap a high-level staged form generates ~7^level lattice lines (the density problem). The cap is honest, not just performance.
- **Does NOT judge commensurability** (see §3.3).

### 5.2 Symmetry Probe
- **Cloud:** Weyl-sequence sampling (each phase advances by an independent √prime increment) so the points fill the torus uniformly and the centroid lands at the true center. (In TS this is `analyzeLocus`'s cloud; the probe reuses it.)
- **Score:** chamfer residual (mean distance from each transformed point to the nearest original) ÷ the cloud's own mean nearest-neighbour distance. A symmetric form scores ≈1 (every moved point lands on an original); a broken one plateaus at the real geometric mismatch. The **noise floor IS the baseline** — self-calibrating, the same philosophy as the §6 signature fix.
- **Ops:** mirror ⟂ each PCA eigenvector, point inversion, rotation by 2π/n about each PCA axis (n=2..6; reports the highest n that passes).
- **Cost:** O(N²); run on parameter-change only, not per frame. Subsample to ~600 points.

---

## 6. THE STAGE-1 TS FIXES (succeeded — documented for the record)
- **Vocab `fingerprint → signature`:** "fingerprint" wrongly implies *uniqueness*; the whole point is that two different forms can share one — it's a scale-free, frame-free **class descriptor** you match against. "Signature" carries that. Renamed everywhere including the three delegation button-IDs (renamed in lockstep with the handler so the buttons keep firing — that was the silent-break risk).
- **Tolerance `[OBSERVATION]`:** the old "tiers" were tooltip text only; nothing thresholded on them. Now the three signature components are pushed into `rollStat`; the rolling std-dev **is** the noise floor. "Set ref" reports the distance both absolutely and as a **multiple of that noise floor** (within 1× = same / <3× = same class / else distinct), with the per-component delta [λ2/λ1, λ3/λ1, hole]. A perfectly stable (frozen) form falls back to a resolution floor of 1e-4. *Principled because the threshold is now relative to a measured quantity, not a magic number.*

---

## 7. THE FLT / MODULARITY INSIGHT — what equality *means* for these objects

We took stock of Fermat's Last Theorem and its proof in isolation, then asked how it informs the measurement work. The result is a genuine reframing — but only after clearing a trap.

### 7.1 `[FAILED as stated]` The false rhyme — "TS builds modular forms"
**It does not.** "Modular" in the Wiles sense is **not** "built from repeating/epicyclic parts." A modular form is a function on the upper half-plane invariant under the modular group SL(2,ℤ) acting by z↦(az+b)/(cz+d) — the "modular" names *that symmetry group*. A modular form *has* a Fourier (q-)expansion, but having a Fourier series is the cheap part; the SL(2,ℤ) invariance is the content, and an arbitrary epicyclic sum does **not** have it. Do not sell this pun as a connection.

### 7.2 `[IDENTITY]` What the proof actually is
FLT is **bait**; **modularity is the real catch.** Wiles didn't attack aⁿ+bⁿ=cⁿ. A hypothetical solution builds a "too-clean" elliptic curve (Frey); Ribet showed such a curve, if modular, forces a modular form in a provably empty space; Wiles proved the relevant curves **are** modular (Taniyama–Shimura–Weil). The trap snaps: the Frey curve must be modular and cannot be — so no solution exists. The technical heart is an identity of structures: a deformation ring equals a Hecke algebra (R = T) — the space of all Galois representations of a prescribed shape *is* the space of modular ones.

### 7.3 `[IDENTITY]` The real chain to our work (it runs through ζ, not FLT)
- An elliptic curve and a modular form emit the **same L-function** (a Dirichlet series Σaₙ/nˢ). "Modular" cashes out as: *the two objects share one L-function.* The L-function is the lingua franca; the proof is that two structures speaking it are one.
- ζ is the prototype L-function (all aₙ=1). RH is about *where its zeros sit.* Modular forms carry their own L-functions with their own Riemann hypotheses (GRH). Same genus of object, same question about zeros.
- **The link to TS:** the explicit-formula work already showed ζ's prime staircase as Σ waves, **one wave per zero**, each term x^ρ = a self-scaling magnitude (x^β) ∘ a rotation (e^{iγ log x}). **That is an epicyclic decomposition of an L-function** — frequency = γ (imaginary part of the zero), scaling-rate = β. So the honest statement is not "TS builds modular forms," it is: **TS's primitive (scaling∘rotation, summed) is exactly the primitive an L-function decomposes into via its explicit formula.** An L-function is *natively epicyclic* read through its zeros — which is the thing TS can load and measure.

### 7.4 `[LENS]` The measurement upgrade (the transferable insight)
Two distinct notions of "systems talking":
- **TS today = agreement-of-readings:** one invariant, several rulers, the numbers concur (the cross-system caliper).
- **Modularity = identity-of-structures:** two whole families are the *same* family, **certified by sharing one invariant** (the L-function / its zero-spectrum), with a contradiction harvested from any object that violates the translation.

The criterion that falls out, and which the `#3` comparator was missing: for two epicyclic specimens, **"the same" means same zero-spectrum** — the same set of {frequency, scaling-rate} lines — *not* numerically-close shape-numbers. That's a **spectral identity**, and it's precisely what the signal lens measures. Modularity tells you *what equality should be* for these objects.

### 7.5 `[RE-PRESENT]` RH in TS's own terms
RH says every one of ζ's epicyclic terms has its scaling exponent pinned to exactly ½ — **every wave breathes at the same radial rate, only the frequency differs.** In the "the-fold" language: the zero-spectrum is the modular-style invariant, and RH is the claim that this invariant lives entirely on the mirror line (½, the coordinate-free fixed point of s↔1−s).

### 7.6 The boundary (so this isn't oversold)
FLT *itself* contributes **nothing directly** — no exponent equation, no Frey curve, no descent. The transferable insight is one level up, from **modularity**: (1) the right notion of "same" is *same L-function = same zero-spectrum*, an identity not an approximation; (2) the strongest cross-system result is a *structural identity certified by a shared spectral invariant*. This is a real upgrade to the measurement *philosophy*. It is **not** a route to proving anything, and "TS uses modular curves" stays false.

---

## 8. FILE MANIFEST

```
HANDOFF_REPORT.md           ← this document
research-report.md          ← prior capstone (full ~25-toy catalog, verified kernel appendix, verification protocol)
rf-lens-roadmap.md          ← prior RF/EE-lens roadmap

toys/                       ← every standalone toy (TS_formulas.html deliberately excluded)
  signal-lens.html          ← NEW this session, verified (§5.1)
  symmetry-probe.html       ← NEW this session, verified (§5.2)
  the-fold.html, dual-textures.html, inv-1-winding.html, inv-2-crossratio.html   ← final comparison/invariant toys
  critical-instrument.html, zeta-derived.html, noise-floor.html                  ← RH instrument suite
  rf-1..rf-6 *.html                                                              ← RF/EE lens
  plane-transformer / analytic-continuation / argument-principle / functional-equation
    / explicit-formula / zero-statistics / hilbert-polya / zeros-from-primes
    / prime-orchestra / euler-product .html                                      ← nine RH teaching toys
  rh-balance / rh-flatness / rh-flatness-3d / rh-mirror / rh-spacing .html        ← plain-language RH toys

integration/               ← the Stage-2 fold-in code (math verified; WIRING regressed — §3.1)
  kernel.js                 ← shared pure-math kernel, node-verified
  lensblock.js              ← the lens code intended for TS (fold in PROPERLY per §3.1 steps)
  spliced_block.js          ← the block exactly as it was spliced into TS (for diffing)

verification/              ← re-run these to keep the bench trustable (§2)
  verify_toys.py, verify_toyA2.py        ← headless ground truth
  test_kernel.js                         ← node-verifies kernel.js
  test_lensblock.js, test_spliced.js     ← integration math checks
  validate.js                            ← build validator (parse / IDs / storage / embedded math)
  runtest.js, runtest2.js                ← regression-diagnosis harnesses (note their mock limits, §3.1)
```

---

## 9. ONE-LINE STATE OF PLAY
Two new lenses are **built and verified standalone**; the Stage-1 TS fixes **landed**; the Stage-2 fold-in **regressed and was not root-caused** (start with the browser console); the comparator and 4D-signature are **designed, not built**; and the FLT detour delivered the real prize — **"the same" for these objects means same zero-spectrum, a spectral identity, which is the criterion the comparator needs and the lens already measures.**
