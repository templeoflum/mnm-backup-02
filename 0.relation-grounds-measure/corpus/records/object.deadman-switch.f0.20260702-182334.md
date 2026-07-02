---
name: deadman-switch
type: object
object-type: concept
essence: a control whose safe state is the released state — the operator must actively hold it to keep the hazardous function running, so letting go stops it
field: ["[[field.high-reliability-orgs-safety-engineering]]"]
status: established
state: float
attribution: classic de-energize-to-safe control device
formalized: false
source: []
depends-on: []
used-by: []
---

**statement (plain)** — a dead man's switch flips the usual polarity of control: the default, do-nothing state is *safe*, and keeping the dangerous function alive requires continuous, active effort. Release the lawnmower bar, take your hand off the train driver's control, let go of the chainsaw trigger — the machine stops. It assumes the operator may become unable to act (fall, faint, die), and makes that incapacity resolve to safe.

**statement (mechanism)** — a physical realization of de-energize-to-safe [[object.fail-safe-vs-fail-secure]]: safety is the un-powered, un-held state. Note the design choice of *which* state is the held one — a deadman holds *go* (right when the running machine is the hazard); an andon-style stop signal instead holds *stop* (right when the work itself is the dangerous, hard-to-reverse act).

**basis** — standard safety-control doctrine across rail, power tools, and heavy equipment; often legally required. *Support* — ubiquitous. *Limits* — invites defeat devices (operators wedging the control) when the "hold" is burdensome — a culture/ergonomics failure, not a mechanism one. **[confirmed]**

**sources** — standard safety-engineering practice (primary reference to add before settling). **[confirmed]**
