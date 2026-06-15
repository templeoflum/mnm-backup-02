---
name: hindu-arabic-numeral-system
type: object
object-type: system
essence: the base-10 positional system of ten digits 0–9 with a true zero — the modern numerals
field: [field.numeration-systems]
status: established
state: verified
attribution: developed by Indian mathematicians (1st–4th c. CE); transmitted via al-Khwārizmī (c. 825) and Fibonacci's Liber Abaci (1202)
formalized: true
family: addressing-spine
source: [source.brahmagupta-628, source.al-khwarizmi-825, source.fibonacci-1202, source.menninger-1958, source.ifrah]
depends-on: [object.positional-notation, object.base-radix, object.zero-as-number]
used-by: []
---

**statement (plain)** — the Hindu-Arabic system is the way we write numbers today: ten symbols, 0 through 9, in a base-10 place-value scheme where a column's value is ten times the column to its right, and a genuine zero fills empty columns. With only ten signs it writes every whole number, and it makes column arithmetic (carrying, long multiplication) straightforward — which is why it displaced Roman numerals.

**statement** — a base-10 positional numeral system using ten glyphs {0, 1, 2, 3, 4, 5, 6, 7, 8, 9}, in which a digit string dₙ₋₁ … d₀ denotes Σ dᵢ·10ⁱ, with 0 functioning as both an empty-column placeholder and a number in its own right. It is the synthesis of three keystones: [[object.positional-notation]], base-10 ([[object.base-radix]]), and [[object.zero-as-number]]. **[confirmed]**

**basis** — the system works because base-10 place value (value = Σ dᵢ·10ⁱ) gives every integer a unique representation, and a true zero closes the gaps so arithmetic algorithms (carry/borrow) operate column by column. It is a *system* (a concrete instantiation) rather than a *concept*: it is the particular base-10, ten-glyph realization of the general positional idea.

**lineage** — the glyphs descend from Indian **Brahmi numerals**; the system was developed by Indian mathematicians between the 1st and 4th centuries CE, with Aryabhata (c. 500 CE) using *kha* ("emptiness") for zero and Brahmagupta (628) giving zero its arithmetic [[source.brahmagupta-628]]; the first undisputed zero glyph is the Gwalior inscription (876 CE). It was carried into Arabic mathematics — described outside India first in al-Khwārizmī's *On the Calculation with Hindu Numerals* (c. 825) [[source.al-khwarizmi-825]] and al-Kindi's work (c. 830) — and into Latin Europe chiefly through Fibonacci's *Liber Abaci* (1202), which presented the *Modus Indorum* [[source.fibonacci-1202]]; it entered common European use from the 15th century, replacing Roman numerals. Synthesis and codification: [[source.menninger-1958]]; [[source.ifrah]] (**reliability flagged** — criticized by historians). **[confirmed as attribution]**

**sources** — [[source.brahmagupta-628]] (Indian origin, zero arithmetic); [[source.al-khwarizmi-825]] (Arabic transmission, c. 825); [[source.fibonacci-1202]] (European transmission, 1202); [[source.menninger-1958]] (codification); [[source.ifrah]] (door, flagged). Dates and definition cross-checked against the Wikipedia "Hindu–Arabic numeral system" / "History of the Hindu–Arabic numeral system" articles and a Britannica summary.
