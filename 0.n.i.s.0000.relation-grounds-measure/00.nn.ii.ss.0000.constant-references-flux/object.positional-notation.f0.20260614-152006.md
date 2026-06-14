---
name: positional-notation
type: object
object-type: concept
essence: a digit's value depends on its position — value = sum of digit times base raised to its place
field: [field.numeration-systems, field.addressing-namespace-design]
status: established
state: float
attribution: first realized in the Babylonian sexagesimal (base-60) system, c. 2000 BCE
formalized: true
family: addressing-spine
source: [source.mactutor-babylonian-numerals, source.menninger-1958, source.ifrah]
depends-on: [object.base-radix]
used-by: [object.hindu-arabic-numeral-system]
---

**statement (plain)** — in a positional (place-value) system, the same symbol means different amounts depending on where it sits. The "2" in 20 is worth ten times the "2" in 2. A number's total value is found by multiplying each digit by a power of the base set by its column and adding the results. This is what lets a small fixed set of symbols write every number, and what makes column-by-column arithmetic possible.

**statement** — given a base (radix) b > 1 and a digit string dₙ₋₁ … d₁ d₀ with each 0 ≤ dᵢ < b, the value is
Σ dᵢ · bⁱ = dₙ₋₁·bⁿ⁻¹ + … + d₁·b¹ + d₀·b⁰.
Example (base 10): 465 = 4·10² + 6·10¹ + 5·10⁰. The contrast class is additive/sign-value systems (e.g. Roman numerals), where a symbol's value does not depend on position. **[confirmed]**

**basis** — the represented value is by definition the base-b expansion of the integer; uniqueness of that expansion (for 0 ≤ dᵢ < b) is what makes the notation well-defined. A true positional system additionally needs a zero to mark an empty column unambiguously (see [[object.zero-as-number]]).

**lineage** — the **first positional system** was the Babylonian sexagesimal (base-60) system, c. 2000 BCE, inheriting base 60 from the Sumerians and Akkadians (whose own systems were not positional); the positional advance was the Babylonians' own [[source.mactutor-babylonian-numerals]]. It initially lacked a zero placeholder, so 1 and 60 shared a representation and were disambiguated only by context; an empty-position symbol appeared in later Babylonian times. The fully positional decimal form with a zero digit is the [[object.hindu-arabic-numeral-system]]. Synthesis and codification: Karl Menninger, *Number Words and Number Symbols* [[source.menninger-1958]]; Georges Ifrah, *The Universal History of Numbers* (**reliability flagged** — criticized by historians) [[source.ifrah]]. **[confirmed]**

**sources** — [[source.mactutor-babylonian-numerals]] (Babylonian first-positional claim, base 60, c. 2000 BCE, no early zero); [[source.menninger-1958]] (codification); [[source.ifrah]] (door, flagged); cross-checked against the Wikipedia "Positional notation" article (definition and value formula).
