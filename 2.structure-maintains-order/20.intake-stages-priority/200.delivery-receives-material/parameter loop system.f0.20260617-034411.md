# Tab 1

\# Parameter Motion Protocol — Specification (Draft)

A host-agnostic system for driving animated parameters through ratio-based loop relationships, with smooth morphing between all states by construction.

This document specifies the mathematical foundation. The pattern library (Layer 2\) is a companion document. Value transformation (Layer 3), composition (Layer 5), and host binding are addressed separately.

\-----

\#\# Layer 1 — Phase Math

\#\#\# 1.1 Master Cycle

The system has a single master cycle whose state at any moment is a scalar \`M ∈ \[0, 1)\`. This is the phase position of the master, not a wall-clock time. Wall-clock time is the mechanism by which \`M\` advances; it is not the source of truth.

The master cycle has an associated \*\*period\*\* \`T\`, expressed in any unit (seconds, samples, beats). The period defines the rate at which \`M\` advances:

\`\`\`  
dM/dt \= 1 / T  
\`\`\`

When \`M\` reaches 1.0, it wraps to 0.0. One full traversal of \`M\` from 0 to 1 takes one period \`T\`.

\#\#\# 1.2 Master Phase as Source of Truth

All parameter state in the system derives from \`M\`. No parameter has independent time integration. This guarantees:

\- Determinism: identical \`M\` produces identical state across all parameters  
\- Speed-change immunity: changing \`T\` affects future advancement of \`M\` but does not alter the current value of \`M\` or any parameter derived from it  
\- Trivial save/recall: serialize \`M\` and the configuration to reconstruct full state

\#\#\# 1.3 Parameter Phase

Each parameter \`i\` has a configured \*\*ratio\*\* \`r\_i\` (any real number, including irrational) and a configured \*\*offset\*\* \`o\_i ∈ \[0, 1)\`. Its phase is:

\`\`\`  
φ\_i \= (M × r\_i \+ o\_i) mod 1.0  
\`\`\`

This produces a value in \`\[0, 1)\` at every moment, continuously.

\#\#\# 1.4 Master Advancement Modes

\`M\` may advance under different drivers:

\- \*\*Internal\*\*: \`M \+= dt / T\` per frame, where \`dt\` is wall-clock delta time  
\- \*\*External\*\*: a host sets \`M\` directly (e.g., from a DAW transport, MIDI clock, SMPTE)  
\- \*\*Hybrid\*\*: internal advancement with periodic external re-sync

The advancement mode is a host-level concern. The phase math is identical regardless.

\#\#\# 1.5 Speed Changes

Changing \`T\` mid-execution does not affect \`M\` or any parameter phase at the moment of change. It only changes how fast \`M\` advances forward from that moment.

If smooth speed transitions are required, \`T\` itself can be a function of time. The phase math accommodates any positive \`T\` value at any moment without discontinuity.

\#\#\# 1.6 Hierarchical Masters

A group may have its own sub-master \`M\_g\` derived from the global master:

\`\`\`  
M\_g \= (M × r\_g \+ o\_g) mod 1.0  
\`\`\`

Where \`r\_g\` is the group’s ratio relative to the global master and \`o\_g\` is the group’s offset. Parameters within the group reference \`M\_g\` instead of \`M\`.

Groups may alternately have independent masters with their own periods. In this case, the group’s master is not deterministically related to the global master. This is permitted but loses cross-group convergence guarantees.

\#\#\# 1.7 Pendulum Mode

Pendulum mode is not a separate computation. A parameter with ratio \`r\_i \= n\` where \`n\` is a positive integer completes exactly \`n\` cycles per master cycle and returns to its starting phase at every master wrap. No additional logic is required.

Pendulum mode is a UI distinction (the user thinks in cycle counts, not ratios) layered over the same underlying math.

\#\#\# 1.8 Irrational Ratios

A ratio \`r\_i\` may be any real number, including irrationals such as φ, √2, π. The phase computation is identical. Such parameters never re-sync with the master or with other parameters at rational ratios.

\#\#\# 1.9 Precision Requirements

Implementations must use 64-bit floating point for \`M\`, \`r\_i\`, \`o\_i\`, and all intermediate values. Downcasting to lower precision is permitted only at output (e.g., when assigning to a 32-bit shader uniform).

This precision is necessary to support extreme scale ranges (master periods from milliseconds to hours) and long-running compositions without accumulated drift.

\-----

\#\# Layer 4 — Resolver and Contributor Model

The phase math of Layer 1 produces continuous values per parameter. Layer 4 defines how those values combine with other inputs (base values, manual overrides, morphing states) into a single output, with all transitions guaranteed smooth.

\#\#\# 4.1 The Resolver Principle

For each parameter, there is exactly one resolver. The resolver produces the final output value every frame. No system “takes over” a parameter; all inputs to a parameter contribute through the resolver.

Discontinuities in the output are impossible by construction unless explicitly requested via zero-duration transitions.

\#\#\# 4.2 Contributors

A contributor is a source that produces a value for a parameter. Each contributor has:

\- A \*\*value function\*\* \`v(t)\` — produces a value at any moment  
\- A \*\*weight\*\* \`w ∈ \[0, 1\]\` — its current contribution to the resolver

Standard contributor types:

\- \*\*Base contributor\*\*: value is the parameter’s static base value (constant)  
\- \*\*Animation contributor\*\*: value is derived from the phase math (Layer 1\)  
\- \*\*Override contributor\*\*: value is set externally by user input or host  
\- \*\*Auxiliary contributors\*\*: any host-defined source (LFOs, audio analysis, external CV, etc.)

Multiple animation contributors may exist simultaneously (used during preset morphing — see 4.7).

\#\#\# 4.3 The Resolver Algorithm

The resolver computes output as a weighted sum:

\`\`\`  
output \= Σ (w\_i × v\_i(t))  
\`\`\`

Subject to the constraint:

\`\`\`  
Σ w\_i \= 1.0  
\`\`\`

This constraint is the \*\*weight budget\*\*. It is conserved at all times. Any transition that changes one contributor’s weight must change other contributors’ weights by the inverse amount.

\#\#\# 4.4 Weight Transitions

Weights do not change discontinuously. A weight transition has:

\- A \*\*target weight\*\* \`w\_target\`  
\- A \*\*transition function\*\* that produces \`w(t)\` smoothly from current value to target

The transition function may be any continuous interpolation: linear, eased, critically-damped spring, curve-driven, etc. The choice of transition function is a host or user setting.

The transition function must satisfy:

\- Continuity: \`w(t)\` is continuous in \`t\`  
\- Boundedness: \`w(t) ∈ \[0, 1\]\` for all \`t\`  
\- Convergence: \`w(t) → w\_target\` as \`t → ∞\` (or in finite time, depending on function)

\#\#\# 4.5 Re-targeting

A weight transition’s target may change at any time during the transition. The transition does not restart or jump. The transition function continues from the current weight value toward the new target.

This guarantees that no event can produce a discontinuity in any weight, regardless of how rapidly events occur or how they interleave.

\#\#\# 4.6 Operations as Weight Transitions

All system operations are weight transitions:

\*\*Animation onset\*\* — Base weight transitions toward 0, animation weight transitions toward 1\. Sum is conserved.

\*\*Neutralize\*\* — Animation weight transitions toward 0, base weight transitions toward 1\. Parameter returns to base value over the transition duration.

\*\*Restore from neutral\*\* — Reverse of neutralize.

\*\*Manual grab\*\* — All non-override weights transition toward 0, override weight transitions toward 1\. The override contributor’s value tracks the user’s input.

\*\*Manual release\*\* — Override weight transitions toward 0, animation weight transitions toward 1\. The animation contributor has been running throughout (at correct phase) — the parameter rejoins it smoothly.

\*\*Hard cut\*\* — A weight transition with duration 0\. The architecture is unchanged; only the timing parameter is zero. Hard cuts are user-specified transitions, not a separate mechanism.

\#\#\# 4.7 Preset Morphing

Morphing between two presets is handled by instantiating both presets’ animation contributors simultaneously.

The morph procedure:

1\. Instantiate the new preset’s animation contributor with weight 0  
1\. Transition the old contributor’s weight toward 0  
1\. Transition the new contributor’s weight toward 1  
1\. Both transitions complete simultaneously (or as scheduled)  
1\. The old contributor is destroyed when its weight reaches 0

During the morph, both contributors produce values continuously. The resolver blends them. The user perceives a smooth transition between two complete motion behaviors.

\*\*Output-crossfade vs ratio-morphing\*\*: Output-crossfade is the default (described above). Alternately, a single contributor’s ratio may be smoothly interpolated from the old value to the new value. This produces “one motion reshaping” rather than “two motions crossfading.” Both modes must be supported; the choice is per-morph.

\#\#\# 4.8 Re-sync After Manual Override

When a manual override releases and animation re-engages, three behaviors are available:

\- \*\*Snap to programmed\*\*: zero-duration weight transition (discontinuity by user choice)  
\- \*\*Smooth resume from held value\*\*: transition weights smoothly; the parameter moves from the held value to wherever the animation contributor currently is  
\- \*\*Schedule to next sync point\*\*: timing of the weight transition is set so it completes at the next master phase wrap. The parameter is back in correct relationship at a musically meaningful moment.

\#\#\# 4.9 Sequenced Cascades

Operations may be applied to multiple parameters with staggered timing. Each parameter receives a weight transition with its own start time:

\`\`\`  
parameter\_i starts transition at t\_0 \+ i × δ  
each transition has duration D  
\`\`\`

The cascade pattern (δ, ordering of parameters, easing per parameter) is a higher-level construct on top of the basic weight-transition primitive. The resolver does not need to know about cascades; it only sees its parameter’s individual transition.

\#\#\# 4.10 Neutral Values

Every parameter has a declared \*\*neutral value\*\* in its host binding. The neutral value is the value at which the parameter has no effect on the system being driven (0° for rotation, 1.0 for gain, etc.).

The base contributor’s value defaults to the neutral value unless explicitly set otherwise by the user.

Neutralization is not a separate operation. It is the weight transition that gives the base contributor full weight. The parameter’s output value at full base weight is the neutral value (unless the user has set the base value to something else).

\#\#\# 4.11 Modulation Depth vs Parameter Value

An animation contributor’s value function may be either:

\- \*\*Absolute\*\*: produces the parameter’s full output value directly  
\- \*\*Modulation around base\*\*: produces an offset added to the base value

In modulation mode, the contributor’s value function is \`base \+ depth × shape(φ)\`, where \`shape(φ)\` is the shape function (sine, triangle, etc.) applied to the parameter’s phase, and \`depth\` is a scaling factor.

In modulation mode, neutralizing animation means transitioning depth to zero rather than transitioning weight. Either approach is valid; they produce identical results when weight is the only contribution from the animation contributor.

The choice between absolute and modulation modes is per-parameter. Modulation mode is typically more musical (animation fades in and out of the base value smoothly without weight bookkeeping) and is recommended as the default.

\-----

\#\# Interlocking Properties

The phase math of Layer 1 and the resolver model of Layer 4 interlock cleanly:

\- \*\*Phase is always defined.\*\* Even when an animation contributor has weight 0, its phase is still being computed (a pure function of M). When weight ramps up, the parameter rejoins motion at the phase it would have been at all along — never “starts from zero.”  
\- \*\*No event invalidates the math.\*\* Speed changes affect T, which affects future M advancement, but not current M or any current phase. Weight transitions affect output blending but not phase computation. The two layers are independent.  
\- \*\*Determinism is preserved end-to-end.\*\* Given M, the configuration, the contributor set, and the current weights, the resolver’s output is fully determined. Save/recall is exact.  
\- \*\*Smoothness is structural, not enforced.\*\* Discontinuities require an explicit zero-duration transition. No code path can produce a jump by accident.

\-----

\#\# Open Items for Future Layers

\- \*\*Layer 3 — Value transformation\*\*: shape functions, range mapping, easing curves applied between phase and final value.  
\- \*\*Layer 5 — Composition\*\*: group hierarchies, cross-group relationships, composition patterns beyond single-master systems.  
\- \*\*Host binding contract\*\*: how logical parameters map to host-specific parameters, neutral value declaration, I/O modes.  
\- \*\*Conformance\*\*: test vectors and tolerance bounds for implementation verification.

# Tab 2

\# Pattern Library — Layer 2 of Parameter Motion Protocol

A catalog of ratio relationships, organized from tightest sync to no sync at all. Each section is a \*shell\* of relationship character — patterns within a shell share a sync behavior, patterns across shells produce different musical feels.

This catalog is scale-independent. The same 11:13 ratio means the same thing at audio rate, video rate, or structural rate — what changes is the master period the ratios are expressed against.

\-----

\#\# How Sync Works

Every rational ratio between two loop lengths re-syncs at its LCM. Simple ratios sync often, complex ratios sync rarely. Irrational ratios (φ, √2, π-based) don’t sync at all.

Two levers control sync frequency:

\- \*\*The ratio.\*\* Coprime numerators give large LCMs. 11:13 → LCM 143\. 17:19 → LCM 323\. 23:29 → LCM 667\.  
\- \*\*The anchor duration.\*\* A 5:7 ratio with a 1-second anchor syncs every 35 seconds. With a 30-second anchor, every 17.5 minutes.

\-----

\# RATIO CATALOG

\#\# 1\. Unison and Near-Unison

Loops nearly the same length. No counterpoint, just slow drift between two layers.

|Ratio   |Decimal|LCM   |Notes                   |  
|--------|-------|------|------------------------|  
|1:1     |1.000  |1     |Pure sync               |  
|999:1000|0.999  |999000|Imperceptible drift     |  
|100:101 |0.990  |10100 |Extremely slow          |  
|99:100  |0.990  |9900  |Same family             |  
|49:50   |0.980  |2450  |Drift becomes noticeable|  
|24:25   |0.960  |600   |Lesser diesis territory |  
|19:20   |0.950  |380   |Smooth but restless     |  
|15:16   |0.938  |240   |Diatonic semitone       |  
|14:15   |0.933  |210   |High tension            |  
|9:10    |0.900  |90    |Felt pulse              |  
|8:9     |0.889  |72    |Pythagorean major second|

\#\# 2\. Microtonal / Character Near-Unison

Close enough to feel related, far enough to create motion.

|Ratio|Decimal|LCM|Notes                   |  
|-----|-------|---|------------------------|  
|10:11|0.909  |110|Undecimal neutral second|  
|11:12|0.917  |132|Same family, wider      |  
|12:13|0.923  |156|Tridecimal              |  
|13:14|0.929  |182|Microtonal proper       |  
|29:30|0.967  |870|Macro drift             |

\#\# 3\. Simple Harmonic Ratios (Just Intonation)

The consonant backbone. Stable, fast-syncing, classical relationships.

\#\#\# Octave family

|Ratio|Decimal|LCM|Notes                    |  
|-----|-------|---|-------------------------|  
|1:2  |0.500  |2  |Octave                   |  
|1:3  |0.333  |3  |Octave \+ fifth           |  
|1:4  |0.250  |4  |Double octave            |  
|1:5  |0.200  |5  |Two octaves \+ major third|  
|1:6  |0.167  |6  |Two octaves \+ fifth      |  
|1:7  |0.143  |7  |Harmonic seventh         |  
|1:8  |0.125  |8  |Triple octave            |

\#\#\# Inside the octave

|Ratio|Decimal|LCM|Notes                    |  
|-----|-------|---|-------------------------|  
|2:3  |0.667  |6  |Perfect fifth            |  
|3:4  |0.750  |12 |Perfect fourth           |  
|3:5  |0.600  |15 |Major sixth              |  
|4:5  |0.800  |20 |Major third              |  
|5:6  |0.833  |30 |Minor third              |  
|5:8  |0.625  |40 |Minor sixth              |  
|8:15 |0.533  |120|Major seventh            |  
|9:16 |0.563  |144|Pythagorean minor seventh|

\#\# 4\. Septimal Ratios

Coherent but unsettled — never fully resolve to the ear’s expectations.

|Ratio|Decimal|LCM|Notes                       |  
|-----|-------|---|----------------------------|  
|3:7  |0.429  |21 |Septimal, off from familiar |  
|4:7  |0.571  |28 |Septimal minor seventh      |  
|5:7  |0.714  |35 |Septimal tritone            |  
|6:7  |0.857  |42 |Septimal minor third        |  
|7:8  |0.875  |56 |Septimal major second       |  
|7:9  |0.778  |63 |Septimal minor third variant|  
|7:10 |0.700  |70 |Septimal minor sixth        |  
|7:12 |0.583  |84 |Septimal major sixth        |  
|9:14 |0.643  |126|Septimal minor seventh      |

\#\# 5\. Undecimal & Tridecimal

Strange territory. Microtonally flavored, ambiguous.

|Ratio|Decimal|LCM|Notes                       |  
|-----|-------|---|----------------------------|  
|5:11 |0.455  |55 |Undecimal                   |  
|7:11 |0.636  |77 |Undecimal augmented fourth  |  
|8:11 |0.727  |88 |Undecimal major third       |  
|9:11 |0.818  |99 |Neutral third               |  
|11:15|0.733  |165|Undecimal augmented fifth   |  
|11:16|0.688  |176|Undecimal minor seventh     |  
|8:13 |0.615  |104|Tridecimal                  |  
|9:13 |0.692  |117|Tridecimal neutral sixth    |  
|10:13|0.769  |130|Tridecimal diminished fourth|  
|11:13|0.846  |143|Tridecimal neutral second   |  
|13:16|0.813  |208|Tridecimal neutral sixth    |

\#\# 6\. Coprime Primes

Two primes have no common factor, so their LCM is their product. Long sync periods.

|Ratio|LCM |At 1s anchor|At 10s|At 60s|  
|-----|----|------------|------|------|  
|2:3  |6   |6s          |1m    |6m    |  
|3:5  |15  |15s         |2.5m  |15m   |  
|5:7  |35  |35s         |5.8m  |35m   |  
|5:11 |55  |55s         |9.2m  |55m   |  
|7:11 |77  |1.3m        |12.8m |1.3h  |  
|7:13 |91  |1.5m        |15.2m |1.5h  |  
|11:13|143 |2.4m        |23.8m |2.4h  |  
|11:17|187 |3.1m        |31.2m |3.1h  |  
|13:17|221 |3.7m        |36.8m |3.7h  |  
|13:19|247 |4.1m        |41.2m |4.1h  |  
|17:19|323 |5.4m        |53.8m |5.4h  |  
|17:23|391 |6.5m        |1.1h  |6.5h  |  
|19:23|437 |7.3m        |1.2h  |7.3h  |  
|19:29|551 |9.2m        |1.5h  |9.2h  |  
|23:29|667 |11.1m       |1.9h  |11.1h |  
|23:31|713 |11.9m       |2.0h  |11.9h |  
|29:31|899 |15.0m       |2.5h  |15.0h |  
|31:37|1147|19.1m       |3.2h  |19.1h |  
|37:41|1517|25.3m       |4.2h  |1.05d |  
|41:43|1763|29.4m       |4.9h  |1.22d |  
|43:47|2021|33.7m       |5.6h  |1.40d |  
|47:53|2491|41.5m       |6.9h  |1.73d |

\#\# 7\. Fibonacci Ratios

Each consecutive pair approaches φ. Sync recedes as you climb the series.

|Ratio  |Decimal|LCM  |Approaches φ|  
|-------|-------|-----|------------|  
|1:2    |0.500  |2    |—           |  
|2:3    |0.667  |6    |1.500       |  
|3:5    |0.600  |15   |1.667       |  
|5:8    |0.625  |40   |1.600       |  
|8:13   |0.615  |104  |1.625       |  
|13:21  |0.619  |273  |1.615       |  
|21:34  |0.618  |714  |1.619       |  
|34:55  |0.618  |1870 |1.618       |  
|55:89  |0.618  |4895 |1.618       |  
|89:144 |0.618  |12816|1.618       |  
|144:233|0.618  |33552|1.618       |

\#\# 8\. Lucas Numbers

Same recurrence as Fibonacci, different seed. Also approaches φ.

|Ratio|Decimal|LCM |  
|-----|-------|----|  
|2:1  |2.000  |2   |  
|3:4  |0.750  |12  |  
|4:7  |0.571  |28  |  
|7:11 |0.636  |77  |  
|11:18|0.611  |198 |  
|18:29|0.621  |522 |  
|29:47|0.617  |1363|  
|47:76|0.618  |3572|

\#\# 9\. Powers of Two

Maximally simple, maximally locked.

|Ratio|Decimal|LCM|  
|-----|-------|---|  
|1:2  |0.500  |2  |  
|1:4  |0.250  |4  |  
|1:8  |0.125  |8  |  
|1:16 |0.063  |16 |  
|1:32 |0.031  |32 |  
|1:64 |0.016  |64 |  
|3:8  |0.375  |24 |  
|5:16 |0.313  |80 |  
|7:32 |0.219  |224|

\#\# 10\. Powers of Three

Triple subdivisions. Useful when triplet feels are desired.

|Ratio|Decimal|LCM|  
|-----|-------|---|  
|1:3  |0.333  |3  |  
|1:9  |0.111  |9  |  
|1:27 |0.037  |27 |  
|1:81 |0.012  |81 |  
|2:9  |0.222  |18 |  
|4:9  |0.444  |36 |  
|5:27 |0.185  |135|  
|7:27 |0.259  |189|

\#\# 11\. Cross-Base Powers (2 vs 3\)

Mixing binary and ternary feels.

|Ratio|Decimal|LCM |  
|-----|-------|----|  
|2:3  |0.667  |6   |  
|4:9  |0.444  |36  |  
|8:9  |0.889  |72  |  
|8:27 |0.296  |216 |  
|16:27|0.593  |432 |  
|32:81|0.395  |2592|  
|64:81|0.790  |5184|

\#\# 12\. Irrational Constants (No Sync)

Cannot be expressed as a fraction. No LCM. Use these for parameters that must never sync.

|Constant    |Value    |Notes                          |  
|------------|---------|-------------------------------|  
|φ (golden)  |1.618033…|Most common, balanced asymmetry|  
|1/φ         |0.618033…|Reciprocal                     |  
|φ²          |2.618033…|                               |  
|√2          |1.414213…|Silver-adjacent                |  
|√3          |1.732050…|                               |  
|√5          |2.236067…|Related to φ                   |  
|δ\_S (silver)|2.414213…|1 \+ √2                         |  
|δ\_B (bronze)|3.302775…|(3+√13)/2                      |  
|δ\_C (copper)|1.302775…|                               |  
|π           |3.141592…|                               |  
|π/2         |1.570796…|                               |  
|e           |2.718281…|                               |  
|e/2         |1.359140…|                               |  
|ln(2)       |0.693147…|                               |  
|ln(3)       |1.098612…|                               |

\#\#\# Metallic ratios

The general family. δₙ \= (n \+ √(n² \+ 4)) / 2\.

|n|Name  |Value|  
|-|------|-----|  
|1|Golden|1.618|  
|2|Silver|2.414|  
|3|Bronze|3.303|  
|4|Copper|4.236|  
|5|Nickel|5.193|

\#\# 13\. Continued Fraction Approximations of Irrationals

If your system requires rational values, these give rational approximations of irrationals with increasing precision.

\#\#\# Approximating φ

|Fraction|Decimal|Error |  
|--------|-------|------|  
|3/2     |1.500  |0.118 |  
|5/3     |1.667  |0.049 |  
|8/5     |1.600  |0.018 |  
|13/8    |1.625  |0.007 |  
|21/13   |1.615  |0.003 |  
|55/34   |1.618  |\<0.001|

\#\#\# Approximating √2

|Fraction|Decimal|Error  |  
|--------|-------|-------|  
|7/5     |1.400  |0.014  |  
|17/12   |1.417  |0.002  |  
|41/29   |1.414  |\<0.001 |  
|99/70   |1.414  |\<0.0001|

\#\#\# Approximating π

|Fraction|Decimal|Error    |  
|--------|-------|---------|  
|22/7    |3.143  |0.001    |  
|333/106 |3.142  |\<0.0001  |  
|355/113 |3.142  |\<0.000001|

\-----

\# COMPOUND STACKS (3+ Parameters)

Multi-way LCMs grow fast.

|Stack      |LCM  |  
|-----------|-----|  
|2:3:5      |30   |  
|3:5:7      |105  |  
|4:5:7      |140  |  
|3:5:7:11   |1155 |  
|5:7:11     |385  |  
|5:7:11:13  |5005 |  
|7:11:13:17 |17017|  
|11:13:17:19|46189|  
|13:17:19:23|96577|

\-----

\# PATTERN DEFINITIONS

Patterns are algorithms that assign ratio values to N parameters. Each pattern is a function \`(N, optional\_params) → \[r\_1, r\_2, ..., r\_N\]\`.

\#\# Ascending patterns

\#\#\# Fibonacci Ascent

Starting from index \`k\` (default 1), take N consecutive Fibonacci numbers, normalize so smallest \= 1\.  
Example (N=5, k=1): \`\[1, 2, 3, 5, 8\]\`  
Example (N=5, k=5): \`\[1, 1.625, 2.625, 4.25, 6.875\]\` (normalized from 8, 13, 21, 34, 55\)

\#\#\# Lucas Ascent

Same as Fibonacci but using Lucas numbers (2, 1, 3, 4, 7, 11, 18…).

\#\#\# Powers of Two

\`\[1, 2, 4, 8, ..., 2^(N-1)\]\`

\#\#\# Powers of Three

\`\[1, 3, 9, 27, ..., 3^(N-1)\]\`

\#\#\# Harmonic Series

\`\[1, 2, 3, 4, ..., N\]\`

\#\#\# Prime Ascent

Starting from prime index \`k\`, take N consecutive primes.  
Example (N=5, k=0): \`\[2, 3, 5, 7, 11\]\`  
Example (N=5, k=5): \`\[13, 17, 19, 23, 29\]\`

\#\# Spread / Coprime patterns

\#\#\# Coprime Primes

Take N primes spread far apart for maximum LCM.  
Example (N=5): \`\[5, 11, 17, 23, 31\]\`

\#\#\# Pendulum Wave (Consecutive Integers)

\`\[n, n+1, n+2, ..., n+N-1\]\`  
Example (N=7, n=17): \`\[17, 18, 19, 20, 21, 22, 23\]\`

\#\#\# Pendulum Wave (Stepped)

\`\[n, n+s, n+2s, ..., n+(N-1)s\]\`  
Example (N=7, n=15, s=2): \`\[15, 17, 19, 21, 23, 25, 27\]\`

\#\# Cluster patterns

\#\#\# Near-Unison Cluster

N values increasingly close to 1.0, controlled by tightness \`t ∈ (0, 1)\`.  
Example (N=4, t=0.95): \`\[1, 0.95, 0.9025, 0.857...\]\` or fractions like \`\[1, 99/100, 49/50, 24/25\]\`

\#\#\# Near-φ Cluster

N values clustered around φ using Fibonacci approximations.  
Example (N=5): \`\[1.500, 1.600, 1.615, 1.618, 1.618\]\`

\#\# Septimal / Coherent-Tension patterns

\#\#\# Septimal Triad

\`\[1, 5/3, 4/7\]\` — three parameters in inner, inner, septimal shells.

\#\#\# Septimal Spread

N values distributed across septimal ratio space.  
Example (N=5): \`\[1, 5/7, 4/7, 3/7, 2/7\]\`

\#\# Irrational patterns

\#\#\# Metallic Ascent

N values from the metallic ratio family.  
Example (N=5): \`\[1, φ, δ\_S, δ\_B, δ\_C\]\` \= \`\[1, 1.618, 2.414, 3.303, 4.236\]\`

\#\#\# Pure Irrationals

N distinct irrational constants.  
Example (N=4): \`\[φ, √2, √3, π/2\]\`

\#\# Hybrid patterns

\#\#\# Two-Shell Split

First half of parameters from inner shell (simple ratios), second half from outer shell (coprime primes). For when some parameters should feel coupled and others independent.  
Example (N=6): \`\[1, 2/3, 3/4, 11, 13, 17\]\`

\#\#\# Clustered Groups

M groups of N/M parameters, each group internally close, groups far apart.  
Example (N=6, M=2): \`\[1, 1.05, 1.1, 17, 17.8, 18.7\]\`

\-----

\# WINDOW SIZE GUIDELINES (Pendulum Mode)

When using pendulum mode (integer ratios that converge at master wrap), the master period sets the \*tempo of resolution\*.

|Master period|Convergence feel   |  
|-------------|-------------------|  
|4–8s         |Rhythmic, beat-like|  
|15–30s       |Phrase-level       |  
|60–120s      |Section-level      |  
|3–5m         |Structural         |  
|10m+         |Event, ceremonial  |

\-----

\# USING THE CATALOG

The catalog is organized so that the \*section number maps to a relationship character\*. When designing parameter motion, pick the shell that matches the feel you want, then pick a specific pattern or ratio within it.

For a typical multi-parameter shader:

1\. Identify parameter families (rotation, structure, color, etc.).  
1\. Assign each family a shell based on how related members should feel.  
1\. Within each family, pick a pattern (Pendulum Wave, Fibonacci Ascent, Coprime Primes, etc.).  
1\. Apply the pattern to generate ratios for all parameters in that family.  
1\. Set the master period appropriate to the scale of the piece.

Different families can use different patterns. The whole composition is the layered superposition of these choices.