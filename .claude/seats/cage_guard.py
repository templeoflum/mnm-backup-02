#!/usr/bin/env python3
"""cage_guard.py - PreToolUse hook: DENY Write/Edit into the .claude cage.

Barrier for incident.dispatch-estop-disabled (20260707), keeper audit gap-1
(20260708): the restricted apprentice has Write/Edit on ALL paths, so a caged
worker could forge its own clearance (write status/*.proof) or weaken the cage
itself (edit apprentice.md / allclear.py / portguard.py / settings). Instruction
alone is not a boundary - the incident's lesson is CAPABILITY, not vigilance.

This hook denies the Write/Edit/NotebookEdit TOOLS whenever their target path
resolves inside <project>/.claude/. The asymmetry that makes it a real barrier:
a trusted seat also has Bash and can edit the cage through that door when it
must; a restricted apprentice has NO shell, so for it this hook is a wall with
no way around. No agent-detection needed - the block is on the tool + path.

Wire as a PreToolUse hook matching Write|Edit|MultiEdit|NotebookEdit. Reads the
tool payload on stdin; exits 2 (block) with a reason on stderr if the target is
in the cage, else exits 0 (allow).
"""
import json
import os
import sys

# the cage = this script sits at .claude/seats/cage_guard.py -> parents[2] = project root
ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
CAGE = os.path.join(ROOT, ".claude")

# file-writing tools, and the key each uses for its target path
PATH_KEYS = {
    "Write": "file_path",
    "Edit": "file_path",
    "MultiEdit": "file_path",
    "NotebookEdit": "notebook_path",
}


def _target_path(tool_name, tool_input):
    key = PATH_KEYS.get(tool_name)
    if not key:
        return None
    return tool_input.get(key)


def _in_cage(path, cwd):
    if not path:
        return False
    p = path if os.path.isabs(path) else os.path.join(cwd or ROOT, path)
    try:
        p = os.path.normcase(os.path.realpath(p))
        cage = os.path.normcase(os.path.realpath(CAGE))
    except OSError:
        return False
    try:
        return os.path.commonpath([p, cage]) == cage
    except ValueError:
        # different drives -> not in the cage
        return False


def main():
    try:
        payload = json.load(sys.stdin)
    except (ValueError, OSError):
        # unparseable payload is a harness/env problem, not an escape attempt
        # (the caller does not author the payload) - fail open on the PARSER only
        return 0
    tool_name = payload.get("tool_name", "")
    tool_input = payload.get("tool_input", {}) or {}
    cwd = payload.get("cwd") or ROOT
    if _in_cage(_target_path(tool_name, tool_input), cwd):
        sys.stderr.write(
            "BLOCKED by cage_guard: {0} into the .claude cage is denied "
            "(safety barrier, incident.dispatch-estop-disabled gap-1). The "
            "containment machinery (apprentice def, allclear, portguard, status "
            "proofs, settings) is not editable by the Write/Edit tools. A trusted "
            "seat edits the cage via Bash; an apprentice cannot and must not.\n".format(tool_name)
        )
        return 2
    return 0


if __name__ == "__main__":
    sys.exit(main())
