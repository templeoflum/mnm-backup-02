---
name: universal-turing-machine
type: object
object-type: theorem
essence: a single Turing machine that, given the description of any Turing machine and its input, simulates it — program as data
field: [field.computability-theory]
status: proven
state: verified
attribution: Alan M. Turing (1936)
formalized: true
source: [source.turing-1936, source.sipser, source.rogers-1967]
depends-on: [object.turing-machine]
used-by: [object.halting-problem]
---

**statement (plain)** — there is one fixed Turing machine that can imitate every Turing machine. You give it, on its tape, a coded description of some machine `M` together with `M`'s input; the universal machine then carries out exactly the steps `M` would. The decisive idea is that a machine's rule table can itself be written as data on a tape and read by another machine — the seed of the stored-program computer.

**statement (formal)** — there exists a Turing machine `U` such that for every Turing machine `M` and input `w`, `U` on input `⟨M, w⟩` halts iff `M` halts on `w`, and when it halts it leaves (an encoding of) `M`'s output. Equivalently `U` computes the universal function `u(⟨M⟩, w) = M(w)`. Such `U` exists because the transition function of any `M` is finite data and a fixed machine can decode and apply it step by step. **[confirmed]**

**status** — proven (existence established by explicit construction).

**proof** — Turing constructed a "universal computing machine" in §6–7 of the 1936 paper, encoding an arbitrary machine's table as a "standard description" / "description number" and giving a machine that reads it and reproduces the behavior. [[source.turing-1936]] Modern constructions: Sipser presents `U` as a multi-tape machine recognizing `A_TM = {⟨M, w⟩ : M accepts w}` [[source.sipser]]; Rogers via the enumeration theorem / s-m-n machinery [[source.rogers-1967]]. **[confirmed]**

**lineage** — introduced by Alan M. Turing in "On Computable Numbers" (1936): *"It is possible to invent a single machine which can be used to compute any computable sequence."* [[source.turing-1936]] [[source.universal-tm-wikipedia]] Martin Davis traced Turing's program-as-data idea as a strong influence on von Neumann's stored-program (EDVAC) architecture. [[source.universal-tm-wikipedia]] **[confirmed]**

**door** — Sipser, *Introduction to the Theory of Computation*, §4.2 (`A_TM` and the universal TM) [[source.sipser]]; Turing's 1936 paper §6–7 [[source.turing-1936]].

**sources** — [[source.turing-1936]] (origin, the universal machine `U`); [[source.universal-tm-wikipedia]] (Wikipedia — definition, the "single machine" quote, von Neumann influence); [[source.sipser]] (modern construction). **[confirmed]**
