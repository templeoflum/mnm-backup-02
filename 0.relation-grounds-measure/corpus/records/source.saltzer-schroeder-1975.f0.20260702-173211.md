---
name: saltzer-schroeder-1975
type: source
essence: Saltzer & Schroeder, "The Protection of Information in Computer Systems" — the eight canonical security design principles, incl. fail-safe defaults and separation of privilege
kind: paper
author: Jerome H. Saltzer; Michael D. Schroeder
year: 1975
venue: Proceedings of the IEEE, 63(9), 1278–1308
state: float
links: ["[[object.fail-safe-defaults]]", "[[field.high-reliability-orgs-safety-engineering]]"]
---

Jerome H. Saltzer and Michael D. Schroeder, "The Protection of Information in Computer Systems," *Proceedings of the IEEE* 63, no. 9 (1975): 1278–1308.

Contains — the tutorial half codifies **eight design principles** for secure systems that have held up for fifty years: economy of mechanism, **fail-safe defaults**, complete mediation, open design, **separation of privilege**, least privilege, least common mechanism, and psychological acceptability. Fail-safe defaults — "base access decisions on permission rather than exclusion" — argues the default must be *no access*, so that a design or implementation error fails by *refusing* permission (a safe state) rather than granting it. Separation of privilege — a mechanism requiring two independent keys is more robust than one accepting a single key.

Access — DOI 10.1109/PROC.1975.9939; open PDF widely mirrored (MIT, UNSW). Citation web-corroborated 20260702. **[confirmed]**
