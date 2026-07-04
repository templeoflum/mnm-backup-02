# proposal — the working signal (real turn-state) — f0

From clerk, 20260704. Replaces the pulled timer chip. The harness fires real
events at the turn's true edges — turn opens, each tool act, agent finishes
responding, session ends. A small turn.py on those hooks writes each seat's
turn-state; the server serves it; the card renders WORKING only while a turn
is actually open. No clock decides truth. Configure and sign.

FLAG intended function — the chip claims "mid-turn RIGHT NOW," true from turn-open until the reply lands, never inferred from report age: agree | re-cut in thread = agree

FLAG the safety net — a seat killed mid-turn would stick 'working', so with no act for this long the chip falls to UNKNOWN (grey question, never green): 5m | 10m = this sint a solution its another guess freamwork, not accebatle rwe ned real verifiable signal this is a precsion insturment so we need someway to esatblish wether aocnneciton is active or not

FLAG per-act backstop — also stamp turn-state on every tool act (covers wakeups that may not fire turn-open; costs one tiny extra process per tool call, every seat): y | n = y

FLAG rollout — hooks land at a seat's next launch: clerk pilot first, others after the co-run passes | all three seats at once = clerk pilot first

FLAG the gate — the four-check co-run, your eyes: flip-up on your message ~2s, flip-down the moment the reply lands, goodnight reads asleep, kill-mid-turn falls to UNKNOWN inside the net: agree | edit in thread = agree

SIGNED: hedawn 20260704-042310
