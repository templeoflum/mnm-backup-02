#!/usr/bin/env python3
"""Seat presence line for the lattice (Q2).

Args: <seat> <address-label>
Reads Claude Code's statusline JSON on stdin for the model name.
Output one line: seat - address - model

Minimal by design (operator word 20260614): seat and address are static per
seat (passed as args), model comes from the harness. No lattice server calls —
fold-meter / health stay in the lattice UI where they already live.
"""
import sys
import json

try:
    sys.stdout.reconfigure(encoding="utf-8")  # the · separator must land as UTF-8
except Exception:
    pass


def main():
    seat = sys.argv[1] if len(sys.argv) > 1 else "?"
    addr = sys.argv[2] if len(sys.argv) > 2 else "?"
    model = "?"
    try:
        data = json.load(sys.stdin)
        model = (data.get("model") or {}).get("display_name") or model
    except Exception:
        pass
    print(f"{seat} · {addr} · {model}")


if __name__ == "__main__":
    main()
