---
name: reactive-document
type: object
object-type: concept
essence: prose with live, spreadsheet-like variables — the reader changes the author's assumptions inline and sees the consequences update
field: ["[[field.explorable-explanations]]", "[[field.human-computer-interaction]]"]
status: established
state: settled
attribution: Bret Victor (2011), in "Explorable Explanations"
formalized: false
source: ["[[source.victor-2011]]"]
depends-on: ["[[object.explorable-explanation]]", "[[object.active-reader]]"]
used-by: []
aliases: ["object.reactive-document"]
---

**statement (plain)** — a reactive document is authored text with embedded, adjustable variables: the model behind the prose is live, so when the reader changes an assumption the rest of the text and its figures recompute and update in place. It reads as ordinary prose for a passive reader, but a curious reader can play with the numbers and see how the conclusions shift.

**statement** — Victor: a form that "allows the reader to play with the author's assumptions and analyses, and see the consequences." It integrates "spreadsheet-like models into authored text," readable at multiple levels — the casual reader takes the prose, the curious reader adjusts the author's scenario, the engaged reader explores scenarios of their own. **[confirmed]**

**basis** — a concrete realization of the [[object.explorable-explanation]] idea, serving the [[object.active-reader]]. Victor's worked example in the 2011 essay is a California Proposition 21 budget argument whose underlined quantities (tax rate, park revenue) are reader-adjustable, cascading through the conclusion. The reference implementation is the JavaScript library **Tangle**, released by Victor alongside the essay. **[confirmed]**

**lineage** — introduced by **Bret Victor** in "Explorable Explanations" (2011) [[source.victor-2011]] **[confirmed]**. Shares the active-reading goal with Adler & Van Doren's "active reading" (1940), but the reactive-document mechanism — live inline variables — is Victor's. **[confirmed]**

**field note** — young practitioner field; flag on card.

**door** — [[source.victor-2011]] (worrydream.com/ExplorableExplanations).

**sources** — [[source.victor-2011]].
