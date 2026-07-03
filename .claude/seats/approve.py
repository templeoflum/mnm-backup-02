#!/usr/bin/env python3
"""approve.py - permission requests answered from the dispatch window
(dispatch S4 extension; operator board memos 20260703-144906 / -145222).

PermissionRequest hook, wired per seat. When a seat's tool call would raise
a CLI permission prompt, this hook first offers it to the dispatch window:

  1. writes .claude/approvals/<id>.json  (seat, tool, preview)
  2. polls for <id>.decision  (written by POST /approve - the window's
     approve/deny buttons, or the operator by hand)
  3. decision -> emits the permissionDecision JSON and the prompt never
     appears; timeout (~50s) -> emits nothing and the normal CLI prompt
     shows as before. Fail-open to the prompt, never to silence.

The window polls GET /approvals. Files are transient control state
(gitignored); the record is the D row op_approve writes at 222.
"""
import json
import os
import sys
import time

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
APPROVALS = os.path.join(ROOT, '.claude', 'approvals')

POLL_S = 0.5
WAIT_S = 50


def main():
    seat = sys.argv[1] if len(sys.argv) > 1 else 'unknown'
    try:
        raw = sys.stdin.buffer.read().decode('utf-8-sig', 'replace')
        i = raw.find('{')
        data = json.loads(raw[i:]) if i >= 0 else {}
    except Exception:
        return  # unreadable request - fall through to the CLI prompt

    tool = data.get('tool_name', '?')
    ti = data.get('tool_input') or {}
    preview = (ti.get('command') or ti.get('file_path') or
               json.dumps(ti, ensure_ascii=False))
    preview = ' '.join(str(preview).split())[:200]

    req_id = time.strftime('%Y%m%d-%H%M%S') + '-' + str(os.getpid())
    os.makedirs(APPROVALS, exist_ok=True)
    req_path = os.path.join(APPROVALS, req_id + '.json')
    dec_path = os.path.join(APPROVALS, req_id + '.decision')
    try:
        with open(req_path, 'w', encoding='utf-8') as f:
            json.dump({'seat': seat, 'tool': tool, 'preview': preview,
                       'command': str(ti.get('command') or ''),
                       'ts': req_id}, f, ensure_ascii=False)
    except OSError:
        return  # can't offer it - fall through to the CLI prompt

    decision = None
    deadline = time.time() + WAIT_S
    while time.time() < deadline:
        if os.path.exists(dec_path):
            try:
                with open(dec_path, encoding='utf-8-sig') as f:
                    decision = json.load(f)
            except Exception:
                decision = None
            break
        time.sleep(POLL_S)

    # consume the exchange either way - nothing lingers
    for p in (req_path, dec_path):
        try:
            os.remove(p)
        except OSError:
            pass

    if not decision or decision.get('decision') not in ('allow', 'deny', 'always'):
        return  # timeout / unreadable - the CLI prompt takes over

    verdict = decision['decision']
    # 'always' = allow + persist an EXACT-command rule (ruleToApply, guide
    # consult 20260703) so the same ask never prompts again. Exact, never a
    # machine-invented wildcard - over-broad rules are the operator's to
    # write by hand. Command tools only; anything else degrades to allow.
    behavior = 'allow' if verdict == 'always' else verdict
    out = {'behavior': behavior}
    if verdict == 'always' and tool in ('Bash', 'PowerShell'):
        cmd = str(ti.get('command') or '').strip()
        if cmd:
            out['ruleToApply'] = '{}({})'.format(tool, cmd)

    # documented PermissionRequest contract = decision.behavior (guide consult
    # 20260703); the flat permissionDecision fields ride beside it for any
    # harness version that reads the PreToolUse-style shape
    print(json.dumps({
        'hookSpecificOutput': {
            'hookEventName': 'PermissionRequest',
            'decision': out,
            'permissionDecision': behavior,
            'permissionDecisionReason':
                'operator via dispatch ({})'.format(decision.get('by', 'operator')),
        }
    }))


if __name__ == '__main__':
    main()
