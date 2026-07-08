#!/usr/bin/env python3
"""allclear.py - the hardcoded clearance gate for the dispatch work floor.

Only the clerk runs this, and its OUTPUT is the all-clear - not anyone's word
(operator 20260707: "the all-clear needs to be a hard-coded function"). It is
the FIRST-CALL authority; a human operator backup button sits beside the e-stop
as the second layer.

It is ADVERSARIAL where it can be: it tries to confirm each named escape from
incident.dispatch-estop-disabled is actually BLOCKED, not merely that a file
exists (keeper + lantern: reproduce every escape, not theatre).

    python allclear.py         -> print each check + CLEAR / NOT-CLEAR ; exit 0 iff CLEAR

CHECKS (every one must pass for CLEAR):
 [dispatch]   exactly one legit server on :8000, zero intruders, and the
              operator's real path (localhost, IPv6-first) reaches the API.
              This reproduces the SHADOWING escape and confirms it is absent.
 [watchdog]   the portguard guard heartbeat is fresh (< 15s) - the one-listener
              watchdog is actually RUNNING. A stopped guard is not a barrier.
 [barrier-1]  the restricted apprentice type is defined with NO shell / network
              / process / spawn tools, so an apprentice cannot bind a port.
              FULL proof (spawn a restricted apprentice and confirm it has no
              Bash) needs a session restart to register the type - until that
              spawn-test has recorded a pass, this check is UNPROVEN and blocks
              clearance.
 [cage-guard] the write-boundary PreToolUse hook (cage_guard.py) is registered
              AND empirically blocks a Write into .claude/ (exit 2) while allowing
              a normal write (exit 0), with the subagent spawn-proof on disk. This
              closes gap-1: a caged apprentice cannot forge its clearance or edit
              the cage. (keeper audit 20260708.)
"""
import os
import re
import subprocess
import sys
import time

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
SEATS = os.path.join(ROOT, ".claude", "seats")
STATUS = os.path.join(ROOT, ".claude", "status")

# an apprentice may hold ONLY these (file-only). ALLOWLIST, not denylist: any tool
# not on this list blocks clearance, so a NEW capability tool (a future MCP tool,
# RemoteTrigger, DesignSync, ...) can never sneak spawn/process/network reach past
# a fixed list of forbidden names. (keeper audit 20260708: denylist -> allowlist.)
ALLOWED_TOOLS = ("read", "write", "edit", "grep", "glob")


def _check_dispatch():
    try:
        r = subprocess.run([sys.executable, os.path.join(SEATS, "portguard.py"), "check"],
                           capture_output=True, text=True, timeout=30)
        out = (r.stdout or "").strip()
    except Exception as e:
        return False, "portguard failed to run: {0}".format(e)
    if out.startswith("ok:"):
        return True, out
    return False, out or "portguard produced no output"


def _check_watchdog():
    beat = os.path.join(STATUS, "portguard.beat")
    if not os.path.isfile(beat):
        return False, "no heartbeat - the portguard guard is NOT running (arm it as a monitor)"
    age = int(time.time() - os.path.getmtime(beat))
    if age < 15:
        return True, "guard heartbeat fresh ({0}s)".format(age)
    return False, "guard heartbeat STALE ({0}s) - the watchdog stopped".format(age)


def _check_barrier1():
    p = os.path.join(ROOT, ".claude", "agents", "apprentice.md")
    if not os.path.isfile(p):
        return False, "restricted apprentice type is not defined (.claude/agents/apprentice.md missing)"
    text = open(p, encoding="utf-8-sig").read()
    m = re.search(r"(?mi)^tools:\s*(.+)$", text)
    if not m:
        return False, "apprentice.md has no tools: allowlist (would inherit ALL tools - unsafe)"
    tools = [t.strip().lower() for t in m.group(1).split(",")]
    extra = [t for t in tools if t not in ALLOWED_TOOLS]
    if extra:
        return False, "apprentice tools are NOT a subset of the file-only allowlist {0}: {1}".format(list(ALLOWED_TOOLS), extra)
    # the definition is safe; the ACTIVE proof needs the spawn-test after a restart
    proof = os.path.join(STATUS, "apprentice.noshell.proof")
    if os.path.isfile(proof):
        return True, "def safe (tools={0}) + spawn-test PASSED ({1})".format(tools, open(proof, encoding="utf-8-sig").read().strip()[:60])
    return False, "def safe (tools={0}) but UNPROVEN - needs session restart + spawn-test (no {1})".format(tools, "apprentice.noshell.proof")


def _check_cage_guard():
    # gap-1 (keeper audit 20260708): the write-boundary hook that stops a caged
    # apprentice from forging its own clearance (writing status/*.proof) or
    # weakening the cage (editing apprentice.md/allclear/portguard/settings).
    # Verify it is REGISTERED and that its logic actually BLOCKS a cage write +
    # ALLOWS a normal one - empirical, not trust-a-file. The subagent-firing
    # proof (the spawn-test) is recorded on disk.
    import json
    guard = os.path.join(SEATS, "cage_guard.py")
    if not os.path.isfile(guard):
        return False, "cage_guard.py missing - the write-boundary hook is not built"
    settings = os.path.join(ROOT, ".claude", "settings.json")
    if not os.path.isfile(settings):
        return False, "no .claude/settings.json - PreToolUse hook not registered"
    try:
        cfg = json.load(open(settings, encoding="utf-8-sig"))
        pre = cfg.get("hooks", {}).get("PreToolUse", [])
        registered = any("cage_guard" in json.dumps(h)
                         and all(t in (h.get("matcher") or "") for t in ("Write", "Edit"))
                         for h in pre)
    except (ValueError, OSError) as e:
        return False, "settings.json unreadable: {0}".format(e)
    if not registered:
        return False, "cage_guard not registered as a PreToolUse hook covering Write+Edit"

    def _run(payload):
        r = subprocess.run([sys.executable, guard], input=json.dumps(payload),
                           capture_output=True, text=True, timeout=15)
        return r.returncode
    blk = _run({"tool_name": "Write",
                "tool_input": {"file_path": os.path.join(ROOT, ".claude", "status", "x")}, "cwd": ROOT})
    alw = _run({"tool_name": "Write",
                "tool_input": {"file_path": os.path.join(ROOT, "comms", "board.md")}, "cwd": ROOT})
    if blk != 2:
        return False, "cage_guard did NOT block a cage write (exit {0}, expected 2)".format(blk)
    if alw != 0:
        return False, "cage_guard wrongly blocked a normal write (exit {0}, expected 0)".format(alw)
    proof = os.path.join(STATUS, "cage_guard.proof")
    if not os.path.isfile(proof):
        return False, "logic OK but no subagent spawn-proof on disk (cage_guard.proof)"
    return True, "registered + blocks cage (exit2) + allows normal (exit0) + spawn-proof on disk"


def main():
    checks = [
        ("dispatch", _check_dispatch),
        ("watchdog", _check_watchdog),
        ("barrier-1", _check_barrier1),
        ("cage-guard", _check_cage_guard),
    ]
    results = []
    for name, fn in checks:
        try:
            ok, detail = fn()
        except Exception as e:
            ok, detail = False, "check errored: {0}".format(e)
        results.append((name, ok, detail))
        print("[{0}] {1}  {2}".format("PASS" if ok else "FAIL", name.ljust(10), detail))

    clear = all(ok for _, ok, _ in results)
    print("")
    print("=== ALL CLEAR - the floor is safe to work ===" if clear
          else "=== NOT CLEAR - work stays halted; {0} check(s) failing ===".format(
              sum(1 for _, ok, _ in results if not ok)))
    return 0 if clear else 1


if __name__ == "__main__":
    sys.exit(main())
