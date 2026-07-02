# Cross-System Instruments for the Riemann Zeros and the Trajectoscope

### A comparison atlas — methods, findings, and reproduction

*No claims are made or attempted in this report. It records a body of interactive measurement instruments built to let several systems of measurement, coordinates, and analysis be applied to one object and compared — observing where they agree, where they diverge, and what each reading costs. Every quantitative statement below was verified against an independent high-precision computation before any instrument was built; the verification recipe is given so the work can be repeated.*

---

## 0. What this is, and what it is not

This is a record of an exploration, not a result. The organizing question was never "is the Riemann Hypothesis true" and never "does system A reduce to system B." It was narrower and, we think, more tractable:

> Given a single mathematical object, can we apply genuinely different systems of measurement — geometric, analytic, statistical, signal-processing, topological, projective — and make them *talk*: read the same object in each, then compare what survives the translation and what does not?

Three commitments held throughout, and they are the reason the report contains no claims:

- **Comparison, not proof.** None of these instruments can prove anything about the infinitely many zeros above a finite window. They are diagnostic and observational. They show whether a feature *would be visible*; they do not certify its universal truth.
- **Accuracy over assertion.** Every number was checked against `mpmath` (or an exact identity) before it was drawn. Where a measurement contradicted an earlier verbal intuition, the measurement won and the intuition was corrected (see §3.2, §4 negatives).
- **Mark interpretation as interpretation.** Each instrument carries an honesty tag: `IDENTITY` (a genuine same-object correspondence), `RE-PRESENT` (true content shown in a system's native view), `LENS` (a fair interpretive framing, flagged as such), `OBSERVATION` (a measured fact about a finite sample), or `OPEN` (a real but conjectural bridge). The distinction between a true cross-system identity and a seductive false rhyme is the central discipline.

---

## 1. The two systems

**The Riemann zeta function and its zeros (RH/ζ).** ζ(s) is defined for complex `s = σ + it`. Its nontrivial zeros lie in the strip `0 < σ < 1`; all computed zeros lie on the line `σ = ½`. The Riemann Hypothesis is the statement that they all do. The zeros are dual to the prime numbers through the *explicit formula*: the fluctuation of the prime-counting staircase about its smooth trend is an exact sum of waves, one per zero, each wave's frequency set by a zero's height `γ` and its amplitude law by the zero's real part `β`. RH ⇔ every `β = ½` ⇔ every wave shares the same `√x` amplitude law.

**The Trajectoscope (TS).** A standalone generative-geometry instrument (the author's) that builds forms by sweeping cycles of `[rotate, rotate, translate]` with a self-scaling displacement

```
d = k · (k+1)^(C−1) · D
```

which holds a central proportion constant as the form grows. TS was conceived as an instrument-as-argument that *dimension is relational*, held claim-free. In this report TS is treated as the **comparison instrument** — the frame into which the ζ measurements are brought to be compared — rather than as a system to be proved. *Caveat: TS was available to this analysis only through the author's written briefs and a pasted source file; TS-side measurements below rest on that secondhand reading and would need the author's confirmation against the live instrument.*

---

## 2. Method

### 2.1 Verify before building

Every instrument was built in the same order, without exception:

1. **Ground-truth in Python.** Implement the quantity using `mpmath` (arbitrary precision) as the reference.
2. **Port the kernel to a browser-portable form** and confirm it matches the reference across the whole range the instrument will explore — not at one point, but on a dense sweep.
3. **Build the instrument** in self-contained HTML/JS using the verified kernel.
4. **Validate the build**: confirm it parses, that every interface reference resolves, that no forbidden browser-storage API is used, and — critically — that the *embedded* math reproduces the reference numbers in the browser engine (a parse check cannot catch a transcription error in a recurrence).

This caught real errors (see §4). It also repeatedly taught the structure: the bug was often the lesson.

### 2.2 The honesty ledger

Each instrument and each cross-system correspondence is tagged. The tags are not decoration; they are the report's claim-control. An `IDENTITY` is something we verified is literally the same object. A `LENS` is something that reads well and is faithful but is an interpretation we could have framed otherwise. `OBSERVATION`s are finite-sample measurements. `OPEN` marks the deep bridges (random-matrix statistics, the spectral interpretation of the zeros) that are supported by overwhelming numerics but remain conjectural — these are cited as context, never as established fact.

### 2.3 Report negatives

Where the Euler product fails to converge on the critical line, where an instrument's naive framing was wrong, where a transcription dropped a data point — these are recorded in place rather than smoothed over. A clean exploration is an honest one, not a flattering one.

---

## 3. Findings, by theme

### 3.1 One seam runs through every lens

A single structural boundary reappeared in every system we applied, always separating the same two kinds of quantity:

| System / lens | One side of the seam | Other side of the seam |
|---|---|---|
| TS lattice correspondence | radial / scaling | angular / rotational |
| Complex dynamics of `x^ρ` | magnitude `x^β` | rotation `e^{iγ log x}` |
| Every RH geometric toy | `β` (real part) | `γ` (height) |
| RF / signal lens | gain | frequency |
| Noise-floor (structure factor) | amplitude (equal on the line) | arrangement (spacing) |
| Group-theoretic reading | commutative / abelian | order-sensitive / non-abelian |

The seam is best understood as a **fixed point of a symmetry** (§3.4) and as a **boundary between an abelian and a non-abelian structure** (§6). That the *same* boundary recurs across genuinely unrelated systems — a generative-art instrument and ζ — is recorded here as the most persistent structural feature of the whole body of work. It is an `OBSERVATION` about the recurrence, not a claim that the systems are "the same."

### 3.2 The texture of the zeros: stiffer than white

Treating the zero heights as a point process and applying the standard "what kind of noise is this" battery (`OBSERVATION`, ≈400 computed zeros):

- **Pair correlation:** zeros forbid close neighbours — R₂(r) → 0 as r → 0 (level repulsion). A random (Poisson) surrogate sits flat at 1; a rigid lattice is empty then spikes.
- **Structure factor:** zeros' low-frequency power is suppressed (the *ramp*); random is flat at ~1; rigid shows Bragg spikes.
- **Number variance:** zeros' fluctuations are nearly frozen (≈0.3 at window L=40, growing only logarithmically); random grows as Σ²=L exactly (≈31 at L=40); rigid is ~0.

**Recorded correction.** An earlier verbal framing called the RH texture "flat / white." The measurement contradicted this and it was corrected: *white noise is the random surrogate.* The zeros are **stiffer than white** — hyperuniform, with the long-range rigidity that, through the explicit formula, is what bounds the prime fluctuations. In signal-processing terms the zeros are a **blue-noise** point process (power suppressed at low frequency). This is the same GUE-like character seen in spacing-domain statistics, here read in the frequency domain.

### 3.3 The dual object has the opposite texture

The identical battery applied to the **primes** as a point process (≈148,765 primes near 10⁶, unfolded by gap⁄log p; `OBSERVATION`):

- **Spacing at s→0:** primes *pile up* (≈16% of gaps below 0.3) where the zeros leave a hole (≈1%). Primes ride the Poisson curve e^(−s); zeros ride Wigner.
- **Number variance:** primes climb the diagonal Σ²≈L (white); zeros stay frozen (stiff).

The two objects, which fully determine each other through the explicit formula, sit at **opposite ends** of the crystal↔white texture axis: the frequencies (zeros) are maximally ordered, the events (primes) maximally disordered. Recorded as an `OBSERVATION` about two linked objects — the explicit formula relates them but inverts their textures — not a theorem. *Caveats:* the primes' Poisson character is the Gallagher / Hardy–Littlewood heuristic, and the small-gap pile-up is genuine arithmetic structure (twin and cousin primes), not smooth randomness.

### 3.4 ½ is the fixed point of ζ's self-duality

ζ carries a reflection: the functional equation pairs `s` with `1−s`, and the completed function ξ satisfies `ξ(s) = ξ(1−s)` exactly (verified `|ξ(s)| = |ξ(1−s)|` to ratio 1.000000). For any such pair the real parts sum to exactly 1 — a conserved unit. Recentering to `u = s − ½` turns the pairing into the plain mirror `u ↔ −u`, and the strip folds onto itself about `a = 0`; the verified fold symmetry `|ξ(½+a+ib)| = |ξ(½−a+ib)|` holds to machine precision.

The reading recorded here (author's framing, sharpened): **½ is the balance point of the conserved unit** — the one real part where a point equals its own reflection (`σ = 1−σ`). Because it is defined by the symmetry rather than by the numbers on the axis, it is *coordinate-free*: relabel the plane and the mirror point stays the mirror point. This is why the §3.1 seam survives every faithful re-coordinatization — a fixed point of a symmetry is a structural fact, not a numerical one. The honest boundary of the idea: ½ is forced by *this* reflection and its conserved 1, not by ½ being special in the abstract; the reading is load-bearing only while tied to `s ↔ 1−s`.

### 3.5 Invariants sort by which group they survive — a trade-off

Two coordinate-free invariants were built and compared. They sit at opposite extremes of a single trade-off between robustness and information.

| | Winding number | Cross-ratio |
|---|---|---|
| Survives | any continuous invertible deformation (all homeomorphisms) | Möbius (projective) maps only |
| Symmetry group | the largest there is | small, rigid |
| Value | integer | real number |
| What it remembers | how many — nothing else | the actual arrangement |
| Verified behaviour | stays **5** across ellipse/star/squiggle/blob; jumps to 6 only when the contour grows past a zero | stays **1.5738** under translate/scale/rotate/inversion (Δ ~ 10⁻¹⁵); shifts under squaring (Δ = 0.029) and under unfolding (Δ = 0.034) |

The winding number is maximally robust and minimally informative (a topological count that cannot tell two five-zero configurations apart). The cross-ratio is fragile but carries memory (it encodes the configuration, distinguishing arrangements a count cannot). 

A consequence worth recording: **the unfolding used throughout the statistical instruments is not a Möbius map** — so it preserves the winding number but changes the cross-ratio. This gives a litmus test for the whole atlas: a quantity that must survive unfolding has to be topological or statistical, not projective. Knowing which group a transformation belongs to predicts in advance which invariants will survive it.

### 3.6 The RF / electrical-engineering lens: what is identity, what is lens

The complex variable `s = σ + jω` in ζ *is* the engineer's complex-frequency plane; this is not analogy. Sorting the lens's contents by honesty tag:

- **`IDENTITY` — the prime filter bank.** Each Euler factor `1/(1−p^{−s})` is exactly a feedback comb filter with loop delay `log p`; its resonant teeth land every `2π/log p` (verified exact for p = 2, 3, 5: spacings 9.06, 5.72, 3.90). The Euler product is these combs in cascade.
  - *Recorded limit (a negative):* the cascade converges only for σ > 1, where there are **no zeros**. On the critical line at a zero the product gives 0.115 → 0.090 → 0.039 for 25 → 100 → 400 primes and never reaches the true value 0. The zeros are beyond the product's reach — they live in the analytically-continued region. The filter-bank picture explains ζ's magnitude landscape on the right and shows *why* the zeros are not buildable by multiplying combs.
- **`IDENTITY` — the Nyquist loop.** The Nyquist stability criterion (encirclements of the origin) is the argument principle. ζ traced around a box winds the origin once per enclosed zero (verified box counts: 10, 5, 1, 9 — exact integers, with no preference for the line).
- **`IDENTITY` (duality) + `LENS` (the name) — the matched filter.** `−ζ′/ζ(s) = Σ Λ(n) n^{−s}` is, along the frequency axis, a comb of tones at frequencies `log n`; transforming it makes primes and prime-powers light up at delay `log p` (verified). The primes↔zeros duality is the identity; "matched filter" is a faithful but interpretive name (there is no noise to be optimal against), flagged as a lens.
- **`RE-PRESENT` — the Bode plot.** `|ζ(½+jω)|` in dB with phase and group delay; zeros appear as bottomless magnitude notches with phase flips. Pulling σ off ½ lifts the notches to finite dips — the analyzer's way of seeing the Hypothesis.
- **`IDENTITY` (measure) — the hyperuniformity dial.** The number-variance growth rate places any point process on one crystal↔white axis (zeros near crystal, random at white).
- **`RE-PRESENT` (vocabulary) — the s-plane.** Left half-plane decays, right grows, the jω axis is pure oscillation; ζ's pole at s=1 and the critical line read in the same chart.

**Deliberately not built as fact** (rhymes with no load-bearing identity, listed so others avoid them): a Smith-chart reading of the functional equation; VSWR / standing-wave framings; "a phase-locked loop locks onto the zeros." Worth building only as cautionary "here is where the rhyme breaks," never as correspondence.

---

## 4. Recorded negatives and corrections

These are kept because the discipline depends on them.

- **"Flat / white" was wrong.** §3.2. The zeros are stiffer than white; white is the random surrogate. Corrected by the number-variance and structure-factor measurements.
- **The Euler-product cascade diverges on the line.** §3.6. Recorded rather than papered over; it became the honest content of that instrument.
- **A winding-count of "3" exposed an enclosure subtlety.** During verification, "wild" contour shapes returned 3 and 4 instead of the expected 5 because inward bumps had crossed zeros near the line. This was not a failure of invariance — it was the invariant working: a contour that encloses a different set returns a different integer. The fix (outward-only bumps from a clearance ellipse) made the demonstration honest, and the episode is itself the clearest statement of what "topological" means.
- **Transcription drift.** The portable-ζ term-count rule was found to degrade at large height with a fixed term count (error 5×10⁻² at γ=50) and was corrected to a height-scaled rule (worst error 7×10⁻¹³ to γ=160) before any instrument relied on it. Separately, an embedded zero list contained 398 values where 400 were intended; the prose was reconciled to the data rather than the number asserted.

---

## 5. Instrument catalog

All instruments are self-contained single HTML files using the verified kernel (§6). Tags as in §2.2.

**Foundations — teaching the object from first principles**
- `plane-transformer` — holomorphic maps as local turn-and-scale (angle honesty). `RE-PRESENT`
- `analytic-continuation` — rigidity; singularities as walls. `RE-PRESENT`
- `argument-principle` — winding counts zeros minus poles. `IDENTITY`
- `functional-equation` — completed ξ, mirror symmetry across Re=½. `IDENTITY`
- `explicit-formula` — the prime staircase as trend minus a sum of waves (keystone). `IDENTITY`
- `zero-statistics` — GUE level repulsion vs Poisson. `OBSERVATION` / `OPEN` (the GUE bridge)
- `hilbert-polya` — self-adjoint ⇒ real eigenvalues ⇒ on the line. `OPEN`
- `zeros-from-primes` — `−ζ′/ζ`; the primes↔zeros duality. `IDENTITY`
- `prime-orchestra` / `euler-product` — each prime a string; the Euler product as the orchestra. `IDENTITY` (with the σ>1 convergence caveat)

**The measurement suite**
- `critical-instrument` — one object (the zeros) embedded three ways (strip/ribbon/coil), projected, and measured against the unit; the off-plane β-extent is the embedding-independent invariant (verified identical across embeddings: 0 at RH, 0.169 off-line), the fingerprint is the embedding-dependent body. `IDENTITY` (the invariant) + `RE-PRESENT` (the embeddings)
- `zeta-derived` — ζ computed across the strip (phase portrait), zeros counted by the argument-principle contour and located by 2-D Newton; off-line seeds fall back to β=0.5000. The honest "derived, not loaded" view. `OBSERVATION`
- `noise-floor` — the §3.2 battery: pair correlation, structure factor, number variance. `OBSERVATION`

**The RF / EE lens** (see §3.6 for tags)
- `rf-1-splane`, `rf-2-filter-bank`, `rf-3-bode`, `rf-4-nyquist`, `rf-5-matched-filter`, `rf-6-hyperuniformity-dial`
- `rf-lens-roadmap.md` — the lens's own build plan and skip-list.

**The comparisons**
- `dual-textures` — primes vs zeros through one instrument (§3.3). `OBSERVATION`
- `the-fold` — recentering to u = s−½; the conserved unit folding to its midpoint (§3.4). `IDENTITY`
- `inv-1-winding` — the winding number as topological invariant (§3.5). `IDENTITY`
- `inv-2-crossratio` — the cross-ratio as projective invariant; breaks under non-Möbius maps (§3.5). `IDENTITY`

---

## 6. The TS ↔ RH comparison: status

This is where the atlas was always pointed. The cross-domain comparison split cleanly along the §3.1 seam.

**The radial axis matches.** TS and ζ are both *epicyclic synthesizers*. Each zero's contribution `x^ρ = x^β · e^{iγ log x}` factors into a self-scaling magnitude composed with a rotation — exactly TS's translate-and-rotate primitives. The radial/scaling axis corresponds predictively (the ×3 / ÷3 scaling of the lattice analysis matched at 3.0). Recorded as a genuine shared **structure**; the magnitude side is the side that maps.

**The angular axis is where they measurably differ — and that is the content, not a wall.** TS's rotations do not commute: the staged-vs-freed construction gap *is* the commutator content of the rotation generators — verified exactly zero for disjoint planes (e.g. XY, ZW) and growing for overlapping ones (e.g. XY, YZ). ζ's structure is abelian: the Euler product becomes the explicit formula precisely because `log ∏ = Σ log` and everything commutes. ζ is therefore the **abelian (zero-gap) instance** of "compose then superpose"; TS is the **non-abelian instance**.

A predictive *map* of TS's angular structure onto ζ's is obstructed for a real reason — the commutator content is information an abelian structure cannot represent (one cannot embed a non-abelian group into an abelian one). This was earlier recorded as "provably impossible," and as a statement about the *map* it stands.

**The reframing (the planned next build).** A comparison instrument does not need the two sides to map; it needs to measure the *same quantity* in both and report the gap. The quantity is already in hand — the **commutator / holonomy** (the staged−freed gap). ζ reads zero; TS reads nonzero. Adding angular measurement to TS therefore does **not** dissolve the impossibility and is not an attempt to recover the map; it converts the obstruction into the **most informative axis of comparison** — the axis along which the two systems genuinely, measurably differ. This is the §3.5 lesson applied: the question is not "can A map to B" but "which group does each feature's structure live in" — ζ's lives in the commutative world, TS's does not, and the angular instrument is what reads which. The planned TS extension is a holonomy/commutator measurement that returns a number for any configuration, so that TS-as-comparison-instrument reports, on one dial, "how non-abelian is this" — ζ at zero, TS away from it.

**An open, framed-as-question item:** whether TS possesses its own fixed-point-of-a-symmetry analogous to ζ's ½ (§3.4) — a forced mirror point — or whether TS's seam is a parameter choice rather than a forced fixed point. This is stated as a question to be measured, with the explicit note that it is the kind of question that "wants" a yes; the discipline is to let the measurement say no if it is no.

---

## 7. Limitations

- **Finite and non-probative.** Every ζ instrument works in a bounded window; none bears on the infinitude of zeros above it. The "derived" instruments compute ζ and find its roots — they do not predict the zeros from the primes, which is the genuinely hard direction.
- **Conjectural bridges cited as context only.** The random-matrix (GUE) statistics of the zeros and the spectral / Hilbert–Pólya interpretation are supported by overwhelming numerics but remain conjectural; they appear here as `OPEN` context, never as established fact.
- **Heuristic on the prime side.** §3.3's Poisson characterization is the Gallagher / Hardy–Littlewood heuristic; the smallest-gap structure is genuine arithmetic, not randomness.
- **TS seen secondhand.** §1, §6. The TS-side measurements rest on the author's written briefs and a pasted source; they need confirmation against the live instrument.
- **Sample sizes are modest.** ~400 zeros and ~150k primes are enough to show the qualitative separations robustly (number variance and pair correlation especially), but the finite-sample structure factor is noisy and should be read for trend, not jitter.

---

## 8. Open directions

- **Build the TS angular / holonomy instrument** (§6): measure commutator content as a single number, so TS reports "how non-abelian is this configuration" and ζ's zero reading becomes one point on that scale.
- **A third specimen to triangulate.** Run the same invariant battery (which features are topological, which projective, which fixed-point; what texture on the crystal↔white dial) on an independent system — a crystal's diffraction pattern, a real random-matrix spectrum — so RH stops being the only specimen and the atlas becomes a comparative instrument rather than a portrait.
- **The hyperuniformity exponent as a universal coordinate.** Place arbitrary point processes (primes, zeros, lattices, jittered lattices, other L-function zeros) on the single number-variance axis and compare.
- **A question, not a program:** whether the on-line configuration is, in a signal-processing sense, an extremal / maximally-stabilizing setting (the "blue-noise dither you would design for stability"). Stated as a question to be measured, flagged for its seductiveness.

---

## Appendix A — The computational kernel (reproduction)

The browser-portable kernel below was verified against `mpmath` before use. It is sufficient to reproduce every ζ-based instrument. JavaScript, manual complex arithmetic as `[re, im]`.

**ζ via accelerated η (Cohen–Villegas–Zagier), height-scaled term count.** Verified vs `mpmath.zeta` to worst error 7×10⁻¹³ across 0<σ<1, γ ≤ 160.

```javascript
function cdiv(a,b){const d=b[0]*b[0]+b[1]*b[1];return [(a[0]*b[0]+a[1]*b[1])/d,(a[1]*b[0]-a[0]*b[1])/d];}
function powNegS(base,sr,si){const L=Math.log(base);const m=Math.pow(base,-sr);const a=-si*L;return [m*Math.cos(a),m*Math.sin(a)];}
function nFor(g){ return Math.max(24, Math.ceil(0.9*Math.abs(g)) + 18); }   // term count scales with height
function zeta(sr,si){
  let n=nFor(si), d=Math.pow(3+Math.sqrt(8),n); d=(d+1/d)/2;
  let b=-1, c=-d, er=0, ei=0;
  for(let k=0;k<n;k++){ c=b-c; const t=powNegS(k+1,sr,si); er+=c*t[0]; ei+=c*t[1];
    b=b*((k+n)*(k-n))/((k+0.5)*(k+1)); }
  const eta=[er/d, ei/d], p=powNegS(2,sr,si);
  return cdiv(eta, [1-2*p[0], -2*p[1]]);           // zeta = eta / (1 - 2^{1-s})
}
```

**Complex Γ (Lanczos g=7, with reflection) and the completed ξ.** Γ verified to ~10⁻¹⁶; `|ξ(s)|=|ξ(1−s)|` to ratio 1.000000.

```javascript
const GC=[0.99999999999980993,676.5203681218851,-1259.1392167224028,771.32342877765313,
  -176.61502916214059,12.507343278686905,-0.13857109526572012,9.9843695780195716e-6,1.5056327351493116e-7];
function cmul(a,b){return [a[0]*b[0]-a[1]*b[1], a[0]*b[1]+a[1]*b[0]];}
function cexp(z){const e=Math.exp(z[0]);return [e*Math.cos(z[1]),e*Math.sin(z[1])];}
function clog(z){return [Math.log(Math.hypot(z[0],z[1])), Math.atan2(z[1],z[0])];}
function cpow(z,w){return cexp(cmul(clog(z),w));}
function cgamma(z){
  if(z[0]<0.5){ const piz=[Math.PI*z[0],Math.PI*z[1]];
    const sinz=[Math.sin(piz[0])*Math.cosh(piz[1]), Math.cos(piz[0])*Math.sinh(piz[1])];
    return cdiv([Math.PI,0], cmul(sinz, cgamma([1-z[0],-z[1]]))); }
  let zz=[z[0]-1,z[1]], x=[GC[0],0];
  for(let i=1;i<9;i++){ const dr=zz[0]+i, di=zz[1], dn=dr*dr+di*di; x=[x[0]+GC[i]*dr/dn, x[1]-GC[i]*di/dn]; }
  const t=[zz[0]+7.5, zz[1]];
  return cmul(cmul([Math.sqrt(2*Math.PI),0], cpow(t,[zz[0]+0.5,zz[1]])), cmul(cexp([-t[0],-t[1]]), x));
}
function xiMag(sr,si){            // |xi(s)| = |1/2 s(s-1) pi^{-s/2} Gamma(s/2) zeta(s)|
  const s=[sr,si];
  const a=cmul([0.5,0], cmul(s,[sr-1,si]));
  const pim=cpow([Math.PI,0],[-sr/2,-si/2]);
  const r=cmul(cmul(a,pim), cmul(cgamma([sr/2,si/2]), zeta(sr,si)));
  return Math.hypot(r[0],r[1]);
}
```

**Argument principle (zero count in a box, no line bias).** Verified box counts 10, 5, 1, 9.

```javascript
function windingCount(b0,b1,g0,g1,M){          // integer = zeros inside the box
  const pts=[];
  for(let i=0;i<M;i++)pts.push([b0+(b1-b0)*i/M, g0]);
  for(let i=0;i<M;i++)pts.push([b1, g0+(g1-g0)*i/M]);
  for(let i=0;i<M;i++)pts.push([b1-(b1-b0)*i/M, g1]);
  for(let i=0;i<M;i++)pts.push([b0, g1-(g1-g0)*i/M]);
  pts.push(pts[0]);
  let tot=0, z0=zeta(pts[0][0],pts[0][1]), prev=Math.atan2(z0[1],z0[0]);
  for(let i=1;i<pts.length;i++){ const z=zeta(pts[i][0],pts[i][1]); let a=Math.atan2(z[1],z[0]);
    let d=a-prev; while(d>Math.PI)d-=2*Math.PI; while(d<-Math.PI)d+=2*Math.PI; tot+=d; prev=a; }
  return Math.round(tot/(2*Math.PI));
}
```

**Statistics kernel** — unfolding, number variance, cross-ratio.

```javascript
const TAU=2*Math.PI;
function unfold(g){ return (g/TAU)*(Math.log(g/TAU)-1) + 7/8; }   // mean spacing -> 1
function numberVariance(pos, L){                                   // pos = sorted unfolded positions
  const span=pos[pos.length-1]-pos[0], c=[];
  for(let s=0;s<80;s++){ const x0=pos[0]+(span-L)*s/79; let n=0;
    for(const x of pos){ if(x>=x0 && x<x0+L)n++; } c.push(n); }
  const m=c.reduce((a,b)=>a+b,0)/c.length;
  return c.reduce((a,b)=>a+(b-m)*(b-m),0)/c.length;
}
function crossRatio(P){                                            // P = four [re,im] points
  const sub=(a,b)=>[a[0]-b[0],a[1]-b[1]];
  return cdiv(cmul(sub(P[0],P[2]),sub(P[1],P[3])), cmul(sub(P[0],P[3]),sub(P[1],P[2])));
}
```

## Appendix B — Verification protocol (how the numbers were checked)

1. Implement the quantity in Python with `mpmath` at ≥15 digits (the reference).
2. Implement the same quantity with the kernel above (the candidate).
3. Compare on a **dense sweep** across the instrument's full range, recording the worst error — not a single spot check.
4. For point-process statistics, compute the quantity for the object and for two surrogates (random/Poisson, rigid/crystal) and confirm the three separate in the expected directions.
5. After building, extract the instrument's embedded script and re-run its math in a clean engine to confirm the in-browser numbers match the reference (a parse pass does not test a recurrence).
6. Record any discrepancy in place (§4) and fix the kernel before the instrument relies on it.

*Reference precision used throughout: `mpmath` at 15 decimal places. Zeros computed via `mpmath.zetazero`. Primes via a sieve.*
