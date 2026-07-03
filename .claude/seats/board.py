#!/usr/bin/env python3
"""board.py - the memo board from the command line (dispatch S2 slice 2.1).

    python .claude/seats/board.py                  -> read the last 15 (board)
    python .claude/seats/board.py 40               -> read the last 40
    python .claude/seats/board.py post <words...>  -> post (handle = git author)
    python .claude/seats/board.py mentions <seat>  -> memos mentioning @seat
    python .claude/seats/board.py -c <channel> ... -> same verbs, any channel
                                                      (comms/<channel>.md)

Two doors, one op: posts go through the running server (POST /memo) when it
is up; if it is down, falls back to direct import - op_memo lands through the
shared cross-process lock either way, so the doors never race. Words and
pointers only, no cargo; @mention to aim.
"""
import json
import os
import sys
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
sys.path.insert(0, str(ROOT))

SERVER = 'http://localhost:8000'


def _http(path, payload=None, timeout=4):
    req = urllib.request.Request(
        SERVER + path,
        data=json.dumps(payload).encode('utf-8') if payload is not None else None,
        headers={'Content-Type': 'application/json'} if payload is not None else {},
    )
    with urllib.request.urlopen(req, timeout=timeout) as r:
        return json.loads(r.read().decode('utf-8'))


def read_board(channel='board'):
    try:
        return _http('/channel/' + channel)
    except Exception:
        import server
        return server.op_channel(channel)


def post(handle, body, channel='board'):
    try:
        return _http('/post', {'channel': channel, 'handle': handle, 'body': body})
    except Exception:
        import server
        return server.op_post(channel, handle, body)


def show(entries):
    for e in entries:
        print('{0} | {1:>8} | {2}'.format(e['ts'], e['from'], e['memo']))


def main():
    args = sys.argv[1:]
    channel = 'board'
    if len(args) >= 2 and args[0] == '-c':
        channel = args[1]
        args = args[2:]
    if args and args[0] == 'post':
        body = ' '.join(args[1:]).strip()
        if not body:
            print('nothing to post')
            return 1
        handle = os.environ.get('GIT_AUTHOR_NAME', '').strip() or 'operator'
        result = post(handle, body, channel)
        if 'error' in result:
            print('error: ' + result['error'])
            return 1
        print('posted to {0} as {1} -> {2}'.format(channel, result['from'],
              ' '.join('@' + m for m in result['mentions']) or '(no mentions)'))
        return 0
    if args and args[0] == 'mentions':
        seat = args[1] if len(args) > 1 else ''
        if not seat:
            print('mentions of whom?')
            return 1
        entries = [e for e in read_board(channel)['entries'] if ('@' + seat) in e['memo']]
        show(entries)
        return 0
    n = int(args[0]) if args and args[0].isdigit() else 15
    entries = read_board(channel)['entries']
    show(entries[-n:])
    return 0


if __name__ == '__main__':
    sys.exit(main())
