---
name: fail-safe-vs-fail-secure
type: object
object-type: concept
essence: on loss of power or signal a device must fall to one default — fail-safe (unlock, protect life) or fail-secure (lock, protect assets); which is "safe" depends on what you guard
field: ["[[field.high-reliability-orgs-safety-engineering]]"]
status: established
state: float
attribution: standard safety/security engineering doctrine; the "de-energize-to-safe" convention
formalized: false
source: ["[[source.saltzer-schroeder-1975]]"]
depends-on: []
used-by: []
---

**statement (plain)** — when a device loses power or its control signal, it falls to a default state, and the designer must choose which. **Fail-safe** (fail-open): on power loss it goes to the state that protects life — electric door locks *unlock* so people can escape a fire. **Fail-secure** (fail-closed): on power loss it *locks* to protect assets. They are opposite resolutions of the same failure; which counts as "safe" depends on what is being protected. The deeper convention is **de-energize-to-safe**: engineer things so the safe state needs no energy and no signal, and removing the active command drops the system to safe.

**statement (mechanism)** — the physical-engineering cousin of fail-safe *defaults* in software [[object.fail-safe-defaults]] (default-deny): both make the *absence* of a positive signal resolve to the protected state. The deadman's switch [[object.deadman-switch]] is de-energize-to-safe made into a control.

**basis** — standard doctrine across electrical, mechanical, and security engineering (building/fire codes for door locks; interlock design). The software analogue is codified in [[source.saltzer-schroeder-1975]]; the physical convention is engineering common practice rather than a single primary text. **[confirmed]**

**sources** — [[source.saltzer-schroeder-1975]] (the software analogue, fail-safe defaults). Physical de-energize-to-safe convention: standard engineering practice (primary reference to add before settling). **[confirmed]**
