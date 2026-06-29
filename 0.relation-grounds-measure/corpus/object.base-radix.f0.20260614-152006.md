---
name: base-radix
type: object
object-type: definition
essence: the radix (base) of a positional system is the count of distinct digits, including zero
field: [field.numeration-systems]
status: established
state: settled
attribution: standard definition (Latin radix, "root"); no single originator
formalized: true
family: addressing-spine
source: [source.menninger-1958, source.ifrah, source.mactutor-babylonian-numerals]
depends-on: []
used-by: [object.positional-notation, object.hindu-arabic-numeral-system]
---

**statement (plain)** — the base (or radix) of a counting system is how many different single-digit symbols it uses, counting zero. Decimal has base 10 (digits 0–9), binary has base 2 (digits 0 and 1), the Babylonian system had base 60. The base is the number that gets raised to powers as you move from one column to the next.

**statement** — in a positional numeral system the radix (base) b is the number of unique digits, including zero, used to represent numbers; the allowable digits are exactly the integers d with 0 ≤ d < b, and b > 1. A digit string dₙ₋₁ … d₀ in base b denotes Σ dᵢ·bⁱ. "Radix" is the Latin word for "root," used as a synonym for base. **[confirmed]**

**basis** — the base is the parameter of the place-value scheme (see [[object.positional-notation]]): it fixes both the digit alphabet {0, 1, …, b−1} and the column weights {b⁰, b¹, b², …}. Every integer has a unique representation in base b under the constraint 0 ≤ dᵢ < b, which is what makes the base a well-posed definition rather than a convention.

**lineage** — the choice of base is conventional, not mathematical: Babylonian base 60 (highly composite — many integer fractions) [[source.mactutor-babylonian-numerals]]; decimal base 10 (the [[object.hindu-arabic-numeral-system]]); base 2 in computing. No single originator; the term and modern definition are standard across the literature. Historical synthesis: [[source.menninger-1958]]; [[source.ifrah]] (**reliability flagged**). **[confirmed]**

**sources** — [[source.menninger-1958]] (history of bases and number words); [[source.ifrah]] (door, flagged); cross-checked against the Wikipedia "Radix" article (definition: count of unique digits including zero; value formula d₁bⁿ⁻¹ + … + dₙb⁰).
