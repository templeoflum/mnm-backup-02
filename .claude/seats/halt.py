#!/usr/bin/env python3
"""The stop spine (dispatch S1, slice 1.1).

PreToolUse on every tool, every seat. The cord is a flag file:

    .claude/halt/all      -- master: halts every seat
    .claude/halt/<seat>   -- halts one seat

If a flag covering this seat exists, the hook denies the tool call (exit 2)
and the seat stands down. The flag file's text is the reason, shown as
written. No flag, no cost: the check is two stat calls.

Discipline (frame.dispatch.f0 at 210):
  - anyone may pull the cord; only the operator clears it. A halted seat
    answers in words only -- no retries, no workarounds, no clearing.
  - a stop is normal and cheap; continuing-while-broken is the failure.
  - fail-open: an error in THIS check exits 0 -- a broken checker must not
    brick every seat. Known tradeoff, carried in the frame.
"""
import sys
from pathlib import Path

HALT_DIR = Path(__file__).resolve().parent.parent / 'halt'


def main():
    try:
        seat = sys.argv[1] if len(sys.argv) > 1 else ''
        for scope in ('all', seat):
            if not scope:
                continue
            flag = HALT_DIR / scope
            if flag.exists():
                try:
                    reason = flag.read_text(encoding='utf-8-sig').strip()
                except OSError:
                    reason = '(reason unreadable)'
                sys.stderr.write(
                    'HALT - the cord is pulled ({scope}). {reason}\n'
                    'All tool use stops now. Do not retry, work around, or '
                    'clear the flag. Answer the operator in words only; the '
                    'operator clears the halt.'.format(
                        scope='all seats' if scope == 'all' else 'this seat',
                        reason=reason or '(no reason written)'))
                sys.exit(2)
    except SystemExit:
        raise
    except Exception:
        pass  # fail-open: the checker must never brick the seats
    sys.exit(0)


if __name__ == '__main__':
    main()
