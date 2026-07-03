---
name: meyer-1988
type: source
essence: Meyer's "Object-Oriented Software Construction" — Command-Query Separation, the principle CQRS extends
kind: book
author: Bertrand Meyer
year: 1988
venue: Prentice Hall, *Object-Oriented Software Construction* (1st ed. 1988; 2nd ed. 1997)
state: settled
links: ["[[field.event-sourcing]]"]
---

Bertrand Meyer, *Object-Oriented Software Construction*, Prentice Hall (1st ed. 1988; expanded 2nd ed. 1997).

Citation — states the **Command-Query Separation (CQS)** principle: every method is either a *command* that changes state and returns nothing, or a *query* that returns a value and causes no side effects — never both.

Role — lineage source for CQRS; Greg Young (and Fowler) keep Meyer's command/query vocabulary and lift the separation from the method level to the model/architecture level.

Access — book (paid).

**[confirmed as attribution]** *(CQS attribution is standard and uncontested; citation not opened directly.)*
