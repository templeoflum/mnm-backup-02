#!/usr/bin/env python3
"""Seat presence line + runtime HUD for the lattice (Q2 / U-5).

Args: <seat> <address-label>
Reads Claude Code's statusline JSON on stdin and prints a two-line HUD:
  line 1 — identity + live context:  seat · addr · model [effort] [+think] · NN% ctx
  line 2 — session economy:          $cost · dur · +adds/-dels · NN tok · 5h N% · 7d N%

seat + address are static per seat (args); everything else is read live from the
harness payload. Git fields are intentionally omitted (operator word 20260614).
Each segment is dropped gracefully when the harness omits its data.
"""
import sys
import json
import os
import time

try:
    sys.stdout.reconfigure(encoding="utf-8")  # the · separator must land as UTF-8
except Exception:
    pass


def fmt_dur(ms):
    s = int(ms // 1000)
    if s < 60:
        return f"{s}s"
    m, s = divmod(s, 60)
    if m < 60:
        return f"{m}m"
    h, m = divmod(m, 60)
    return f"{h}h{m}m"


def fmt_tok(n):
    return f"{n/1000:.1f}k" if n >= 1000 else str(n)


def fmt_cost(c):
    return f"${c:.3f}" if c < 0.10 else f"${c:.2f}"


def main():
    seat = sys.argv[1] if len(sys.argv) > 1 else "?"
    addr = sys.argv[2] if len(sys.argv) > 2 else "?"
    try:
        data = json.load(sys.stdin)
    except Exception:
        data = {}

    # --- line 1: identity + live context ---
    model = (data.get("model") or {}).get("display_name") or "?"
    line1 = f"{seat} · {addr} · {model}"
    eff = (data.get("effort") or {}).get("level")
    if eff:
        line1 += f" [{eff}]"
    if (data.get("thinking") or {}).get("enabled"):
        line1 += " +think"
    cw = data.get("context_window") or {}
    rem = cw.get("remaining_percentage")
    if rem is not None:
        line1 += f" · {rem}% ctx"

    # --- line 2: session economy ---
    parts = []
    cost = data.get("cost") or {}
    c = cost.get("total_cost_usd")
    if c is not None:
        parts.append(fmt_cost(c))
    dur = cost.get("total_duration_ms")
    if dur is not None:
        parts.append(fmt_dur(dur))
    add, rem_l = cost.get("total_lines_added"), cost.get("total_lines_removed")
    if add is not None or rem_l is not None:
        parts.append(f"+{add or 0}/-{rem_l or 0}")
    tok = cw.get("total_input_tokens")
    if tok is not None:
        parts.append(f"{fmt_tok(tok)} tok")
    rl = data.get("rate_limits") or {}
    fh = (rl.get("five_hour") or {}).get("used_percentage")
    if fh is not None:
        parts.append(f"5h {fh:.0f}%")
    sd = (rl.get("seven_day") or {}).get("used_percentage")
    if sd is not None:
        parts.append(f"7d {sd:.0f}%")

    print(line1)
    if parts:
        print(" · ".join(parts))

    # persist the HUD for the dispatch to read (additive; failures ignored).
    # the fields are already parsed above — this just mirrors them to a file per seat.
    try:
        hud_dir = os.path.join(
            os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))),
            ".claude", "hud")
        os.makedirs(hud_dir, exist_ok=True)
        with open(os.path.join(hud_dir, seat + ".json"), "w", encoding="utf-8") as f:
            json.dump({"seat": seat, "addr": addr,
                       # the literal statusline lines — the card mirrors these verbatim
                       "line1": line1, "line2": (" · ".join(parts) if parts else ""),
                       "model": model, "effort": eff,
                       "think": bool((data.get("thinking") or {}).get("enabled")),
                       "ctx": rem, "cost": c, "dur_ms": dur, "tokens": tok,
                       "five_h": fh, "seven_d": sd, "ts": time.time()}, f)
    except Exception:
        pass


if __name__ == "__main__":
    main()
