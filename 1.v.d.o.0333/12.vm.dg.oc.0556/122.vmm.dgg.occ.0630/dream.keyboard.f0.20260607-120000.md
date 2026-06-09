# dream — keyboard — 260607

we came into this with a frame slice that said "define key bindings for V0 selector" and three words in parentheses: arrows navigate, enter select, space fold. that's a trail marker. we read it as a build order and started writing code immediately. tree-walk navigation, focus tracking, visible node traversal — file browser logic applied to a lattice. wrong metaphor entirely but we didn't see that yet because we never stopped to look at what V0 actually is.

V0 is the overview. the library. the whole tree visible at once. you don't walk a library shelf by shelf with arrow keys — you reach for what you want. V1 walks. V0 jumps. that distinction didn't surface until we were already building. we built the tree-walk, showed it, and the first real question was "what keyboard controls do you actually want?" — which is the question we should have started with.

so we started dreaming. first thought was the matrix itself applied to keyboard: three modifier keys, three digit values, three depths. ctrl/shift/alt as the triad. ctrl is noun, shift is verb, alt is modifier. that felt structurally perfect — the keyboard navigation mirrors the lattice addressing. 3×3×3 mapped to modifier×value×depth. but "structurally perfect" and "feels right under your hands" are different things and we didn't know that yet.

we played with which modifier maps to which position. ctrl+0/1/2 for digit 0, shift for digit 1, alt for digit 2. then noticed: if bare digits (no modifier) set the last digit, then one modifier is always redundant with bare at every depth. three modifiers minus bare's coverage leaves two. do we only need two modifiers? that question sat there while other streams ran.

arrows came up next. left/right for cycling through digit values, up/down for depth. but that's step-by-step thinking again — V1 thinking leaking into V0. if you have modifier+value for precise jumping, arrows are redundant too. stripped them out. V0 gets no arrows. V1 keeps them. clean separation.

then the actual build. put in ctrl/shift/alt + 0/1/2, bare digits, space for shallow. tested it. shift didn't work. shift+0 produces ) not 0 because shift transforms the character. didn't diagnose it — just guessed. changed to e.code instead of e.key. pushed it. "is it working?" "no." tried ctrl+shift instead of shift. pushed it. "still no." tried e.code again with different parsing. pushed it. three rounds of guessing. the problem was obvious in hindsight: we couldn't see what the browser was actually receiving. we were coding blind.

that's when the real insight hit: we need eyes. can't fix what you can't see. stopped trying to fix the keyboard and built the debug overlay instead. key event log showing exactly what the browser receives — key, code, modifiers, what action fired or didn't. then playwright so we could send keys programmatically and screenshot the result. then hot reload so changes actually reach the browser without manual refresh.

built all three. ran the diagnostic. everything worked in playwright. every key combo fired correctly. the shift issue was the browser cache — the server was serving the right file but the browser wasn't loading it. three rounds of code changes for a caching problem. that's what happens when you can't see.

but then hands hit keyboard for real testing. ctrl works. alt works. shift doesn't work from the numpad. diagnosed with playwright — numpad without NumLock sends Insert/End/ArrowDown instead of 0/1/2. the e.code is Numpad0 but the e.key is Insert. added parseDigitKey to handle both patterns.

and then the real dream started. the user put hands on keyboard and the theoretical mapping collapsed. right hand on numpad, left hand free. ctrl and shift are on the left edge — awkward reach when your thumb wants to be on alt and spacebar. the keyboard has physical geography. modifiers aren't abstract tokens, they're specific keys at specific distances from specific fingers.

alt and space are the natural thumb modifiers. ctrl and shift are edge reaches. so ctrl drops out. shift drops out. alt stays. space stays. but space isn't a native modifier — the browser treats it as a key, not a modifier. holding space and pressing a digit is a chord, not a modified keypress. implementation needs held-state tracking via keydown/keyup.

then the digit-position question flipped. we'd been thinking: modifier selects which digit position to set. but bare digits always set the last digit. and the last digit is always the deepest one — digit 2 at depth 3, digit 1 at depth 2, digit 0 at depth 1. so the last digit doesn't need a modifier. it's the OTHER digits that need modifiers — the ones that aren't last.

at depth 3: bare sets digit 2 (last), alt sets digit 0, space sets digit 1. all three positions covered.
at depth 2: bare sets digit 1 (last), alt sets digit 0. two positions, one modifier. space would set digit 1 which is the same as bare — convergence.
at depth 1: bare sets digit 0 (last). one position, no modifier needed. alt would also set digit 0 — convergence.

the convergence at shallow depths isn't redundancy. it's the same pattern as the lattice itself — 0 and 000 both exist at the origin. the system collapses gracefully at shallower depths.

how do you extend depth? alt+digit when digit 1 doesn't exist yet — creates it. space+digit when digit 2 doesn't exist yet — creates it. auto-fill with 0 for any skipped positions. 0 is the origin, not arbitrary.

how do you shallow? backspace removes the last digit. clean, no combo needed, no ambiguity with space-as-modifier.

right-alt came up as a possible dedicated setter for something but the stream got interrupted. there's a sense that the right side of the keyboard (right-alt, right-ctrl) could map to something different from the left side, giving more keys without more cognitive load. unexplored.

then the process observations started surfacing. we'd been dreaming and building simultaneously without keeping the paper trail. multiple streams running at once — modifiers, arrows, ergonomics, implementation, shift debugging — switching between them, most incomplete, some abandoned, some converging. that's the right creative mode. you can't dream linearly. but the trace was getting lost.

the threshold: too much logging kills flow, too little loses the trace. too much theory never contacts reality, too much building without testing creates invisible bugs. the keyboard design needed both — we theorized too long on the tree-walk (built it, threw it away), then built too fast on the hotkeys (three blind fixes for a cache problem).

the insight about routing: we should have been sketching on a copy of the lattice, not editing the live file. dream in branch 1, test at 100, sort at branch 2, install at branch 0 when solid. we collapsed the route — went from dream straight to install. the misstep pattern is collapsing the routing, skipping the intermediate steps.

then the moment that actually mattered. everything before was theory — smart-sounding theory, structurally elegant theory, but theory. the user put hands on the keyboard. right hand on numpad. left hand free. and the whole theoretical mapping just died. ctrl is on the bottom-left edge. shift is above it. to press either one while your right hand is on the numpad you have to reach deliberately, curl your pinky down, hold an awkward position while your thumb or another finger finds a number key. it's clunky. it fights the hand.

but alt sits right under the left thumb. spacebar sits right under the left thumb. they're the resting position. you don't reach for them, you're already on them. the hand naturally wants to use alt and space as its modifiers because that's where the thumb lives. ctrl and shift are for the pinky, and the pinky is busy or awkward when the other hand is on the numpad.

this completely redefined which modifiers we should use. not from theory — from the physical fact of where fingers rest. alt and space became the primary targets. ctrl and shift became clunky afterthoughts. the whole elegant triad mapping (ctrl=noun, shift=verb, alt=mod) was wrong not because the logic was wrong but because the logic didn't account for the body. the keyboard has geography and the geography doesn't care about your abstraction.

from there the design restructured around what the thumb can do. alt+digit for one position, space+digit for another, bare digit for the last. backspace to shallow. two thumb modifiers plus bare plus one escape key. the hand doesn't have to move, just the thumb shifts between alt and space while the other hand picks digits. that's the feel we're chasing — the hands already know where to go, the system just needs to match what they want to do.

and now here we are at 122 — logic describes state — writing down the dream before it dissipates. the keyboard mapping is forming: alt=digit 0, space=digit 1, bare=last, backspace=shallow. not settled. needs hands on it more. needs the space-as-modifier chord implementation. needs real numpad testing with debug overlay open.

the bigger pattern: we built the eyes (debug + playwright + screenshots at 100) before we settled the thing we were building the eyes to see. that's actually right. you need sight before you need the thing you're looking at. 100 before 112. the eyes serve everything that comes after.

the addr bar living across all views — that emerged naturally. it's the keystone of the interface, the constant reference point. doesn't matter what view you're in, you always know where you are. that felt right immediately and hasn't needed correction. settled.

the compaction readout — we're at 11% and we can feel it. need that number visible so we know when to fold. where does it live? in the debug overlay? in the addr bar? somewhere you can always see it without opening anything.
