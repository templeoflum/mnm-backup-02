---
name: closed-loop-control-system
type: object
object-type: method
essence: regulate by acting on the measured error between desired and actual output — the PID controller is its canonical form
field: [field.cybernetics-control-theory]
status: established
state: verified
attribution: feedback regulator mathematized by Maxwell (1868); first formal three-term (PID) control law by Nicolas Minorsky (1922); Ziegler–Nichols tuning (1942)
formalized: true
source: [source.maxwell-1868, source.minorsky-1922]
depends-on: [object.feedback-loop]
used-by: []
---

**statement (plain)** — a closed-loop (feedback) control system steers a process by continuously measuring its actual output, comparing it to the desired value, and adjusting the input to shrink the difference. The most common form is the PID controller, which sets its correction from three readings of the error: how big it is now (P), how much it has accumulated (I), and how fast it is changing (D).

**statement** — for a process with output (process variable) y(t), reference (setpoint) r(t), and error e(t) = r(t) − y(t), the closed loop chooses the control input u(t) as a function of the measured error. The **PID** control law is
u(t) = K_p·e(t) + K_i·∫₀ᵗ e(τ)dτ + K_d·de(t)/dt,
with proportional, integral, and derivative gains K_p, K_i, K_d. The integral term removes steady-state error; the derivative term anticipates and damps overshoot. This contrasts with **open-loop** control, which commands without measuring the output. **[confirmed]**

**basis** — closed-loop control is the engineering realization of negative [[object.feedback-loop]]: stability and accuracy come from acting on the error rather than on a fixed plan. Maxwell's "On Governors" (1868) gave the first mathematical stability analysis of such a regulator [[source.maxwell-1868]]; Nicolas Minorsky (1922), analyzing how a helmsman steers, derived the first explicit three-term (PID) control law for automatic ship steering [[source.minorsky-1922]]. **[confirmed]**

**lineage** — Elmer Sperry built early autopilots (~1911) intuitively, before the math **[confirmed as attribution]**. Minorsky (1922) gave the first theoretical PID law [[source.minorsky-1922]] **[confirmed]**. Ziegler & Nichols (1942) introduced the standard heuristic tuning rules **[confirmed as attribution]** (original not opened here).

**sources** — [[source.maxwell-1868]] (governor / first stability analysis); [[source.minorsky-1922]] (first PID law). Cross-checked against Wikipedia "PID controller." **[confirmed]**
