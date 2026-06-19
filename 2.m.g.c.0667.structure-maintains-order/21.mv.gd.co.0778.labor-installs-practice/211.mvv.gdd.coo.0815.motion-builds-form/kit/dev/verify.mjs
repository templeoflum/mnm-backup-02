// verify.mjs — the kit's VERIFICATION RIG. Serves the kit on localhost, drives it in
// headless Chrome, runs behaviour checks, and screenshots. Persistent + reusable: add a
// check to CHECKS and it becomes a regression test.
//
//   node verify.mjs            run every check
//   node verify.mjs steppers   run one check by name
//
// Run from anywhere — node resolves playwright from the repo's node_modules. Screenshots
// land in dev/shots/ (gitignored). Exit code is non-zero if any check fails.
//
// CORRECTNESS lives here (quantitative, headless). FEEL stays with the operator (live) —
// drag sensitivity, the depth-menu reveal, immersion. A rig can't feel; it can only measure.

import http from 'http';
import { readFile, mkdir } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, extname, join } from 'path';
import { chromium } from 'playwright';

const HERE = dirname(fileURLToPath(import.meta.url));
const KIT = join(HERE, '..');                 // dev/ sits inside kit/
const SHOTS = join(HERE, 'shots');
const PORT = 8917;
const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.md': 'text/plain' };

// ── static server ──────────────────────────────────────────────────────────
function serve(root = KIT, port = PORT) {
  const server = http.createServer(async (req, res) => {
    let p = decodeURIComponent(req.url.split('?')[0]);
    if (p === '/') p = '/index.html';
    if (p === '/favicon.ico') { res.writeHead(204); return res.end(); }
    try {
      const data = await readFile(join(root, p));
      res.writeHead(200, { 'Content-Type': MIME[extname(p)] || 'application/octet-stream' });
      res.end(data);
    } catch { res.writeHead(404); res.end('not found'); }
  });
  return new Promise((r) => server.listen(port, () => r(server)));
}

// ── drivers (reusable building blocks for checks) ────────────────────────────
async function launch() {
  const browser = await chromium.launch({ channel: 'chrome' });
  const page = await browser.newPage({ viewport: { width: 1280, height: 760 } });
  const errs = [];
  page.on('console', (m) => { if (m.type() === 'error' && !/favicon/.test(m.text())) errs.push(m.text()); });
  page.on('pageerror', (e) => errs.push('PAGEERR: ' + e.message));
  page.__errs = errs;
  return { browser, page };
}
// each check starts on a CLEAN floor: load once for the origin, wipe the autosave, reload empty.
// (autosave persists across reloads, so without this an earlier check's parts would rehydrate.)
async function fresh(page) {
  await page.goto(`http://localhost:${PORT}/`, { waitUntil: 'load' });
  await page.evaluate(() => localStorage.clear());
  await page.reload({ waitUntil: 'load' });
  await page.waitForTimeout(450);
}
const dropPart = (page, type) => page.click(`.pitem:text-is("${type}")`);
const mode = (page, m) => page.click(`.tbtn:text-is("${m}")`);
async function setHeart(page, freq) {
  // speed is the first heart smart param; double-click its value, type the Hz (mapped units)
  const vz = page.locator('.heartparams-grid .sparam .sp-value').first();
  await vz.dblclick();
  const inp = page.locator('.heartparams-grid .sparam input').first();
  await inp.fill(String(freq)); await inp.press('Enter'); await page.waitForTimeout(120);
}
// right-drag the name to open a menu. side 'right' → animation (ratio·mult·offset),
// 'left' → properties (min·max·default). levels 1–3 set by drag distance.
async function openMenu(page, side = 'right', levels = 3) {
  const name = page.locator('.sparam .sp-name').first();
  const box = await name.boundingBox();
  const cx = box.x + box.width * (side === 'right' ? 0.75 : 0.25), cy = box.y + box.height / 2;
  const dy = [0, 24, 60, 96][levels];
  await page.mouse.move(cx, cy);
  await page.mouse.down({ button: 'right' });
  await page.mouse.move(cx, cy + dy, { steps: 10 });
  await page.mouse.up({ button: 'right' });
  await page.waitForTimeout(120);
}
async function shot(page, name) { await mkdir(SHOTS, { recursive: true }); await page.screenshot({ path: join(SHOTS, name + '.png') }); }
// the value zone is click-to-LOCK: click to lock, move to adjust (no button held), click to unlock.
async function lockDragValue(page, dxPx) {
  const vz = page.locator('.sparam .sp-value').first();
  const box = await vz.boundingBox();
  const cx = box.x + box.width * 0.5, cy = box.y + box.height / 2;
  await page.mouse.move(cx, cy);
  await page.mouse.click(cx, cy);                       // lock
  await page.mouse.move(cx + dxPx, cy, { steps: 10 });  // adjust x (movementX flows while locked)
  await page.mouse.click(cx + dxPx, cy);                // unlock
  await page.waitForTimeout(60);
}

// ── checks — each returns { pass, detail } ───────────────────────────────────
const CHECKS = {
  // every scrub must fit its box: no horizontal overflow → both ◀ ▶ steppers visible.
  async steppers(page) {
    await dropPart(page, 'param');
    await mode(page, 'interact');
    await openMenu(page, 'right', 3);            // surfaces ratio/mult/offset scrubs
    const bad = await page.$$eval('.scrub', (els) =>
      els.map((e, i) => ({ i, over: e.scrollWidth - e.clientWidth, txt: e.textContent.trim().slice(0, 16) }))
         .filter((s) => s.over > 1));
    await shot(page, 'steppers');
    return { pass: bad.length === 0, detail: bad.length ? `${bad.length} scrubs clip: ${JSON.stringify(bad)}` : 'all scrubs fit (both steppers visible)' };
  },

  // the name's right-drag opens TWO menus by side: right → animation (ratio·mult·offset),
  // left → properties (min·max·default). each shows its own three rows, not the other's.
  async menuSplit(page) {
    await dropPart(page, 'param');
    await mode(page, 'interact');
    await openMenu(page, 'right', 3);
    const animTxt = (await page.locator('.sparam .sp-menu.right.open').textContent().catch(() => '')) || '';
    await openMenu(page, 'left', 3);            // opening the other side auto-closes this one
    const propTxt = (await page.locator('.sparam .sp-menu.left.open').textContent().catch(() => '')) || '';
    await shot(page, 'menuSplit');
    const animOk = ['ratio', 'mult', 'offset'].every((w) => animTxt.includes(w)) && !/min|max|default/.test(animTxt);
    const propOk = ['min', 'max', 'default'].every((w) => propTxt.includes(w)) && !/ratio|mult|offset/.test(propTxt);
    return { pass: animOk && propOk, detail: `animation[${animTxt.replace(/\s+/g, ' ').trim().slice(0, 40)}] · properties[${propTxt.replace(/\s+/g, ' ').trim().slice(0, 40)}]` };
  },

  // lock-drag the value to change it; right-click resets it to the default.
  async valueReset(page) {
    await dropPart(page, 'param');
    await mode(page, 'interact');
    const num = page.locator('.sparam .sp-num b').first();
    const before = parseFloat(await num.textContent());
    await lockDragValue(page, 120);                       // click-lock, move +120px, click-unlock
    const moved = parseFloat(await num.textContent());
    const vz = page.locator('.sparam .sp-value').first();
    const box = await vz.boundingBox();
    await page.mouse.click(box.x + box.width * 0.5, box.y + box.height / 2, { button: 'right' });   // reset
    await page.waitForTimeout(80);
    const after = parseFloat(await num.textContent());
    await shot(page, 'valueReset');
    return { pass: moved !== before && Math.abs(after - 0.5) < 1e-6, detail: `before ${before} · lock-dragged ${moved} · reset ${after} (default 0.5)` };
  },

  // the smart param's feel knobs are exposed in the properties panel.
  async feel(page) {
    await dropPart(page, 'param');               // auto-selected on drop
    await page.waitForTimeout(150);
    const txt = await page.locator('#inspector').textContent();
    const want = ['feel', 'pad size', 'fine ramp', 'ramp px', 'sat readout', 'sat base', 'sat span'];
    const missing = want.filter((w) => !txt.includes(w));
    await shot(page, 'feel');
    return { pass: missing.length === 0, detail: missing.length ? `missing knobs: ${missing.join(', ')}` : 'all feel knobs exposed' };
  },

  // the reworked panel: an OUTPUT section (out min/max/log/unit), no clock section, and it shows
  // in interact mode (properties follow focus — the dropped param is selected on add).
  async panelOutput(page) {
    await dropPart(page, 'param');                    // interact is default; addNode selects it
    await page.waitForTimeout(120);
    const txt = await page.locator('#inspector').textContent();
    const hasOut = ['output', 'out min', 'out max', 'log', 'unit'].every((w) => txt.includes(w));
    const noClock = !txt.includes('clock');
    await shot(page, 'panelOutput');
    return { pass: hasOut && noClock, detail: `output-section ${hasOut} · clock-removed ${noClock}` };
  },

  // the smart param resizes with its node (not locked to 128px): drag the grip → width grows.
  async resizeParam(page) {
    await dropPart(page, 'param');
    await mode(page, 'move');                          // move mode shows the grip
    const sp = page.locator('.sparam').first();
    const w0 = (await sp.boundingBox()).width;
    const node = page.locator('.node').first();
    await node.hover();
    const grip = page.locator('.node .nhandle').first();
    const gb = await grip.boundingBox();
    await page.mouse.move(gb.x + gb.width / 2, gb.y + gb.height / 2);
    await page.mouse.down(); await page.mouse.move(gb.x + 120, gb.y + 60, { steps: 10 }); await page.mouse.up();
    await page.waitForTimeout(120);
    const w1 = (await sp.boundingBox()).width;
    await shot(page, 'resizeParam');
    return { pass: w1 > w0 + 40, detail: `width ${Math.round(w0)} → ${Math.round(w1)} after grip-resize` };
  },

  // the toolbar 'debug' toggle shows a SQUARE (value,grain) overlay (+ dot) on the focused param.
  async debugOverlay(page) {
    await dropPart(page, 'param');                    // focused on drop
    await page.click('.tbtn:text-is("debug")');       // global debug on
    await page.waitForTimeout(100);
    const o = await page.$$eval('.sp-debug', (els) => {   // pick the VISIBLE overlay (heart params also have one, hidden)
      const e = els.find((x) => getComputedStyle(x).display !== 'none') || els[els.length - 1];
      const r = e.getBoundingClientRect();
      return { shown: getComputedStyle(e).display !== 'none', dot: !!e.querySelector('.sp-debug-dot'), w: Math.round(r.width), h: Math.round(r.height) };
    });
    await shot(page, 'debugOverlay');
    const square = Math.abs(o.w - o.h) <= 1;
    return { pass: o.shown && o.dot && square, detail: `shown ${o.shown} · dot ${o.dot} · ${o.w}×${o.h}${square ? ' (square)' : ' (NOT square)'}` };
  },

  // the menu must sit within the param's own width — no overhang into the parts pane.
  async menuFit(page) {
    await dropPart(page, 'param');
    await mode(page, 'interact');
    await openMenu(page, 'right', 3);
    const pBox = await page.locator('.sparam').first().boundingBox();
    const mBox = await page.locator('.sparam .sp-menu.open').boundingBox();
    await shot(page, 'menuFit');
    const overL = pBox.x - mBox.x, overR = (mBox.x + mBox.width) - (pBox.x + pBox.width);
    return { pass: overL <= 1 && overR <= 1, detail: `param ${Math.round(pBox.width)}px · menu ${Math.round(mBox.width)}px · overhang L${overL.toFixed(0)} R${overR.toFixed(0)}` };
  },

  // the slider is a real track+thumb: clicking along the track sets the value by position.
  async sliderDrag(page) {
    await dropPart(page, 'slider');
    await mode(page, 'interact');
    const track = page.locator('.kslider .ksl-track').first();
    const box = await track.boundingBox();
    const cy = box.y + box.height / 2;
    const val = page.locator('.kslider .ksl-slab b').first();
    await page.mouse.click(box.x + box.width * 0.25, cy);   // ~0.25
    const a = parseFloat(await val.textContent());
    await page.mouse.click(box.x + box.width * 0.8, cy);    // ~0.80
    const b = parseFloat(await val.textContent());
    await shot(page, 'sliderDrag');
    return { pass: Math.abs(a - 0.25) < 0.08 && Math.abs(b - 0.8) < 0.08 && b > a, detail: `click .25→${a} · click .80→${b}` };
  },

  // a DRIVEN param follows the heart, not the hand: stop the heart (phase 0) and its value pins
  // to 0 — an x-drag can't move it. Toggle drive off and the x-drag works again. (This is the
  // "value stuck at 0" report: drive was on with the heart stopped, not a broken drag.)
  async drivenStop(page) {
    await dropPart(page, 'param');
    await mode(page, 'interact');
    await page.click('.sparam .sp-name');                 // drive on
    await page.click('.clockz .kbtn:has-text("stop")');   // stop → rewind heart to phase 0
    await page.waitForTimeout(200);
    const num = page.locator('.sparam .sp-num b').first();
    const stopped = parseFloat(await num.textContent());
    await lockDragValue(page, 120);
    const drivenDrag = parseFloat(await num.textContent());
    await page.click('.sparam .sp-name');                 // drive off
    await lockDragValue(page, 120);
    const freeDrag = parseFloat(await num.textContent());
    await shot(page, 'drivenStop');
    const pinned = stopped < 0.02 && Math.abs(drivenDrag - stopped) < 0.05;   // driven+stopped ignores x
    const freed = freeDrag > 0.1;                                              // drive off → x moves
    return { pass: pinned && freed, detail: `driven+stopped ${stopped}→drag ${drivenDrag} (pinned) · drive-off drag ${freeDrag} (moves)` };
  },

  // the floor survives a reload: parts dropped, autosaved, and rehydrated (no localStorage wipe).
  async persist(page) {
    await dropPart(page, 'param');
    await dropPart(page, 'slider');
    const before = await page.locator('.node').count();
    await page.waitForTimeout(900);              // let an autosave tick land
    await page.reload({ waitUntil: 'load' });    // NO clear — boot should rehydrate the floor
    await page.waitForTimeout(550);
    const after = await page.locator('.node').count();
    await shot(page, 'persist');
    return { pass: after === before && after >= 2, detail: `${before} parts → reload → ${after} parts restored` };
  },

  // the heart's four controls are smart params with output mapping (speed shows Hz/kHz).
  async heartParams(page) {
    await page.waitForTimeout(200);
    const labels = await page.$$eval('.heartparams-grid .sparam .sp-name', (els) => els.map((e) => e.textContent.trim()));
    const txt = (await page.locator('.heartparams-grid').textContent()) || '';
    const hasHz = /Hz|kHz/.test(txt);
    const hasX = /×/.test(txt);
    await shot(page, 'heartParams');
    return { pass: labels.length === 5 && hasHz && hasX, detail: `[${labels.join(', ')}] · Hz ${hasHz} · × ${hasX}` };   // 4 mapped + scrub
  },

  // focus LATCHES to the last-touched part, even with a driven param emitting every frame. (The
  // real repro of "parts don't connect": a continuously-emitting node must NOT steal focus.)
  async focusLatch(page) {
    await dropPart(page, 'param');
    await mode(page, 'interact');
    await page.click('.sparam .sp-name');                 // drive the param ON → it emits every frame
    await page.waitForTimeout(200);
    await mode(page, 'move'); await dropPart(page, 'slider'); await mode(page, 'interact');
    const track = page.locator('.kslider .ksl-track').first(); const box = await track.boundingBox();
    await page.mouse.click(box.x + box.width * 0.6, box.y + box.height / 2);   // touch the slider
    await page.waitForTimeout(450);                        // let many driven-param emits go by
    const chead = (await page.locator('.zone.center .zhead').textContent()) || '';
    await shot(page, 'focusLatch');
    return { pass: chead.includes('x') && !chead.includes('param'), detail: `driven param on floor + touched slider → scope "${chead}" (must latch to slider, no snap-back)` };
  },

  // channel count is the scope's PROPERTY, not focus-derived: set 2ch, focus a part, it stays 2ch.
  async channelsManual(page) {
    await page.click('.zone.center .zhead');              // select scope → its properties
    await page.waitForTimeout(80);
    await page.click('#inspector .ksel .opt:text-is("2 ch")');
    await page.waitForTimeout(80);
    await mode(page, 'move'); await dropPart(page, 'slider'); await mode(page, 'interact');
    const track = page.locator('.kslider .ksl-track').first(); const box = await track.boundingBox();
    await page.mouse.click(box.x + box.width * 0.6, box.y + box.height / 2);   // focus the slider
    await page.waitForTimeout(150);
    const channels = await page.locator('.zone.center canvas').evaluate((cv) => {   // 2ch draws a lane midline at QUARTER height
      const ctx = cv.getContext('2d'); const W = cv.width, H = cv.height; const d = ctx.getImageData(0, H >> 2, W, 1).data;
      let lit = 0; for (let i = 0; i < d.length; i += 4) if (d[i] + d[i + 1] + d[i + 2] > 90) lit++;
      return lit > W * 0.6 ? 2 : 1;
    });
    await shot(page, 'channelsManual');
    return { pass: channels === 2, detail: `set 2ch in scope properties, focused a slider → channels=${channels} (must stay 2 — focus must not override)` };
  },

  // the scrub jogs the heart's POSITION via movement (CDJ platter): stop the heart, drive a param
  // (pinned at phase 0), then scrub → the driven param moves (turns advanced, no skip).
  async scrubJog(page) {
    await dropPart(page, 'param');
    await mode(page, 'interact');
    await page.click('.sparam .sp-name');                  // drive the bench param
    await page.click('.clockz .kbtn:has-text("stop")');    // stop → driven param pinned at phase 0
    await page.waitForTimeout(150);
    const num = page.locator('.sparam .sp-num b').first();
    const before = parseFloat(await num.textContent());
    const vz = page.locator('.heartparams-grid .sparam').nth(4).locator('.sp-value');   // 5th = scrub
    const box = await vz.boundingBox(); const cx = box.x + box.width * 0.5, cy = box.y + box.height / 2;
    await page.mouse.move(cx, cy); await page.mouse.click(cx, cy);          // lock
    await page.mouse.move(cx + 150, cy, { steps: 12 }); await page.mouse.click(cx + 150, cy);   // jog forward
    await page.waitForTimeout(100);
    const after = parseFloat(await num.textContent());
    await shot(page, 'scrubJog');
    return { pass: Math.abs(after - before) > 0.05, detail: `driven param ${before} → ${after} after scrub (heart stopped)` };
  },

  // clicking a heart param's name selects it → its output properties show (range editable).
  async heartParamSelect(page) {
    await page.waitForTimeout(150);
    await page.locator('.heartparams-grid .sp-name', { hasText: 'speed' }).first().click();
    await page.waitForTimeout(100);
    const txt = (await page.locator('#inspector').textContent()) || '';
    const ok = txt.includes('heart') && txt.includes('out min') && txt.includes('out max') && txt.includes('output');
    await shot(page, 'heartParamSelect');
    return { pass: ok, detail: `inspector → ${txt.replace(/\s+/g, ' ').trim().slice(0, 56)}` };
  },

  // a driven param must stay SMOOTH across a heart-speed change (no jump that isn't a wrap)
  // and never leave [0,1].
  async smoothDrive(page) {
    await dropPart(page, 'param');
    await mode(page, 'interact');
    await page.click('.sparam .sp-name');        // drive on
    await setHeart(page, 2);
    await page.evaluate(() => {
      window.__samp = [];
      const el = document.querySelector('.sparam .sp-num b');
      const t0 = performance.now();
      (function tick() { window.__samp.push(parseFloat(el.textContent)); if (performance.now() - t0 < 3200) requestAnimationFrame(tick); })();
    });
    await page.waitForTimeout(1400);
    await setHeart(page, 5);                      // big change — the old wire jumped here
    await page.waitForTimeout(1700);
    const samp = await page.evaluate(() => window.__samp);
    let jumps = 0, wraps = 0, oor = 0;
    for (let i = 1; i < samp.length; i++) {
      const a = samp[i - 1], b = samp[i], d = b - a;
      if (b < -0.001 || b > 1.001) oor++;
      if (Math.abs(d) <= 0.18) continue;
      else if (d < -0.4 && a > 0.5) wraps++;
      else jumps++;
    }
    await shot(page, 'smoothDrive');
    return { pass: jumps === 0 && oor === 0, detail: `${samp.length} samples · wraps ${wraps} · JUMPS ${jumps} · out-of-[0,1] ${oor}` };
  },

  // the readout bank exists under the heart: a chip per heart reading (phase, cos, distance, …).
  async readoutBank(page) {
    await page.waitForTimeout(150);
    const n = await page.locator('.readout-bank .rdchip').count();
    const labels = await page.$$eval('.readout-bank .rdchip .lab', (els) => els.map((e) => e.textContent.trim()));
    await shot(page, 'readoutBank');
    const want = ['phase', 'cos', 'sin', 'distance', 'unit-pt', 'sec', 'sec-pt', 'radix', 'r-idx', 'r-cnt', 'turns', 'square'].every((w) => labels.includes(w));
    const dropped = !labels.includes('|pt|') && !labels.includes('v·r');     // dead constants removed
    return { pass: n >= 30 && want && dropped, detail: `${n} readout chips · [${labels.join(', ')}]` };
  },

  // clicking a readout chip points the scope at it — the scope head names the reading.
  async readoutScope(page) {
    await page.locator('.readout-bank .rdchip', { hasText: 'phase' }).click();
    await page.waitForTimeout(150);
    const chead = (await page.locator('.zone.center .zhead').textContent()) || '';
    await shot(page, 'readoutScope');
    return { pass: chead.includes('phase'), detail: `clicked phase readout → scope head "${chead}"` };
  },

  // a readout emits every frame but must NOT steal focus: focus a readout, then touch a part — focus
  // hands to the part and the per-frame readout emits never yank it back (the emission-focus rule).
  async readoutLatch(page) {
    await page.locator('.readout-bank .rdchip', { hasText: 'phase' }).click();   // focus a sweeping readout
    await page.waitForTimeout(120);
    await mode(page, 'move'); await dropPart(page, 'slider'); await mode(page, 'interact');
    const track = page.locator('.kslider .ksl-track').first(); const box = await track.boundingBox();
    await page.mouse.click(box.x + box.width * 0.6, box.y + box.height / 2);     // touch the slider → focus moves to it
    await page.waitForTimeout(500);                                              // many readout emits go by
    const chead = (await page.locator('.zone.center .zhead').textContent()) || '';
    await shot(page, 'readoutLatch');
    return { pass: chead.includes('x') && !chead.includes('phase'), detail: `readout focused → touched slider → scope "${chead}" (readout must not steal focus back)` };
  },

  // the 2-output readout (unit-pt: cos→A, sin→B) drives channel B: set 2ch, focus unit-pt, the amber
  // ch-B trace must SWEEP (sin), not sit flat — a vertical spread in the bottom lane proves outY feeds.
  async readoutTwoCh(page) {
    await page.click('.zone.center .zhead');                       // select scope → its properties
    await page.waitForTimeout(80);
    await page.click('#inspector .ksel .opt:text-is("2 ch")');
    await page.waitForTimeout(80);
    await page.locator('.readout-bank .rdchip', { hasText: 'unit-pt' }).click();
    await page.waitForTimeout(1200);                               // fill the rolling buffer with the sweep
    const spread = await page.locator('.zone.center canvas').evaluate((cv) => {
      const ctx = cv.getContext('2d'); const W = cv.width, H = cv.height; const rows = H >> 1;
      const d = ctx.getImageData(0, rows, W, rows).data;           // bottom half = ch B lane
      let minY = 1e9, maxY = -1e9, n = 0;
      for (let y = 0; y < rows; y++) for (let x = 0; x < W; x++) {
        const i = (y * W + x) * 4, r = d[i], g = d[i + 1], b = d[i + 2];
        if (r > 180 && g > 140 && g < 215 && b > 50 && b < 150) { if (y < minY) minY = y; if (y > maxY) maxY = y; n++; }  // amber #e8b765
      }
      return n ? maxY - minY : 0;
    });
    await shot(page, 'readoutTwoCh');
    return { pass: spread > 20, detail: `ch B (sin) amber trace vertical spread ${spread}px (must sweep, not flat)` };
  },

  // the scope is resolution-correct: backing store = displayed pixels × devicePixelRatio (one sample
  // per physical column, no CSS up-scale smear). If fit() didn't run it'd still be the 560px default.
  async scopeResolution(page) {
    await page.waitForTimeout(300);                  // let the ResizeObserver fit the canvas
    const r = await page.locator('.zone.center canvas').evaluate((cv) => {
      const rect = cv.getBoundingClientRect();
      return { w: cv.width, h: cv.height, cssW: Math.round(rect.width), cssH: Math.round(rect.height), dpr: Math.max(1, window.devicePixelRatio || 1) };
    });
    const exW = Math.round(r.cssW * r.dpr), exH = Math.round(r.cssH * r.dpr);
    await shot(page, 'scopeResolution');
    return { pass: Math.abs(r.w - exW) <= 2 && Math.abs(r.h - exH) <= 2 && r.w >= r.cssW, detail: `backing ${r.w}×${r.h} = css ${r.cssW}×${r.cssH} × dpr ${r.dpr} (expected ${exW}×${exH})` };
  },

  // FOLLOW: an accumulator (distance) climbs past its span (16) without pegging — the scope's range
  // slides so the trace keeps climbing (a diagonal with vertical spread), not a flat line at the top.
  async scopeFollow(page) {
    await page.locator('.readout-bank .rdchip', { hasText: 'distance' }).click();   // focus distance (follow on)
    await page.waitForTimeout(5800);                  // at default ~0.5Hz distance climbs past its span (16) in ~5s — a fixed [0,16] range would peg
    const r = await page.locator('.zone.center canvas').evaluate((cv) => {
      const ctx = cv.getContext('2d'); const W = cv.width, H = cv.height; const d = ctx.getImageData(0, 0, W, H).data;
      let minY = 1e9, maxY = -1e9, n = 0;
      for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
        const i = (y * W + x) * 4, R = d[i], g = d[i + 1], b = d[i + 2];
        if (g > 180 && R < 170 && b > 110) { if (y < minY) minY = y; if (y > maxY) maxY = y; n++; }   // green COL_A trace
      }
      return { spread: n ? maxY - minY : 0, h: H };
    });
    const dist = parseFloat((await page.locator('.readout-bank .rdchip', { hasText: 'distance' }).locator('.v').textContent()) || '0');
    await shot(page, 'scopeFollow');
    return { pass: r.spread > 20 && dist > 16, detail: `distance ${dist} (past span 16) · ch A trace spread ${r.spread}px/${r.h} (follow climbs, not pegged)` };
  },

  // scroll wheel over the scope zooms the X (time) axis: up → in (zoomX rises), down → out (falls).
  async scopeZoom(page) {
    const cv = page.locator('.zone.center canvas');
    const z0 = parseFloat(await cv.evaluate((c) => c.dataset.zoomx || '1'));
    const box = await cv.boundingBox();
    await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
    await page.mouse.wheel(0, -360); await page.waitForTimeout(60);           // scroll up → zoom in
    const zIn = parseFloat(await cv.evaluate((c) => c.dataset.zoomx || '1'));
    await page.mouse.wheel(0, 720); await page.waitForTimeout(60);            // scroll down → zoom out
    const zOut = parseFloat(await cv.evaluate((c) => c.dataset.zoomx || '1'));
    await shot(page, 'scopeZoom');
    return { pass: zIn > z0 && zOut < zIn, detail: `zoomX ${z0} → in ${zIn} → out ${zOut} (scroll zooms X)` };
  },

  // the clear button above the scope wipes the trace history: a filled trace's mid-band empties.
  async scopeClear(page) {
    await page.locator('.readout-bank .rdchip', { hasText: 'phase' }).click();   // phase sweeps 0→1 across the width
    await page.waitForTimeout(1500);
    // count x-COLUMNS with a mid-band crossing: a full sweep lights many, a cleared trace only the few
    // live samples on the right (the vertical connector inflates a pixel count, so count columns).
    const cols = () => page.locator('.zone.center canvas').evaluate((cv) => {
      const ctx = cv.getContext('2d'); const W = cv.width, H = cv.height;
      const y0 = Math.floor(H * 0.3), rows = Math.floor(H * 0.4);
      const d = ctx.getImageData(0, y0, W, rows).data; let c = 0;
      for (let x = 0; x < W; x++) {
        let lit = false;
        for (let y = 0; y < rows; y++) { const i = (y * W + x) * 4; if (d[i + 1] > 180 && d[i] < 170 && d[i + 2] > 110) { lit = true; break; } }
        if (lit) c++;
      }
      return c;
    });
    const before = await cols();
    await page.click('.zone.center .zhead .scope-clear');
    await page.waitForTimeout(30);
    const after = await cols();
    await shot(page, 'scopeClear');
    return { pass: before > 40 && after < before * 0.25, detail: `mid-band trace columns ${before} → after clear ${after}` };
  },

  // heart params are now FULL smart params: driving one modulates the clock itself. Drive radix and
  // its value sweeps off the heart over time (self-modulation) — name latches 'driven', value moves.
  async heartDrive(page) {
    await page.waitForTimeout(150);
    const radixSp = page.locator('.heartparams-grid .sparam').filter({ has: page.locator('.sp-name', { hasText: 'radix' }) });
    await radixSp.locator('.sp-name').click();                 // drive on (full smart param: name toggles drive)
    await page.waitForTimeout(40);
    const driven = await radixSp.locator('.sp-name').evaluate((e) => e.classList.contains('driven'));
    const v1 = parseFloat((await radixSp.locator('.sp-num b').textContent()) || '0');
    await page.waitForTimeout(800);                            // driven → its signal sweeps off the heart
    const v2 = parseFloat((await radixSp.locator('.sp-num b').textContent()) || '0');
    await shot(page, 'heartDrive');
    return { pass: driven && Math.abs(v2 - v1) > 0.01, detail: `radix drive ${driven} · value swept ${v1} → ${v2} (heart modulating itself)` };
  },

  // the ratio system's PURE MATH (ratio.js, imported in-page, no DOM): φ=fract(H·m·r+o),
  // reverse = the complement, cycles/turn = m·r, sync = reduced denominator (free for 1/φ).
  async ratioMath(page) {
    const r = await page.evaluate(async () => {
      const m = await import('/ratio.js');
      const eq = (a, b) => Math.abs(a - b) < 1e-9;
      return {
        wrap: eq(m.paramPhase(2, 1, 0.5, 0), 0),            // H·m·r = 1 → fract = 0
        off: eq(m.paramPhase(0, 1, 0.5, 0.25), 0.25),       // offset is the head-start
        fwd: m.paramPhase(0.5, 1, 0.5, 0),                  // 0.25
        rev: m.paramPhase(0.5, -1, 0.5, 0),                 // 0.75 — reverse is the complement
        cpt: m.cyclesPerTurn(2, 0.5),                       // 1
        s1: m.syncTurns(1, 1),                              // 1 — unison (the inert identity)
        s2: m.syncTurns(1, 0.5),                            // 2
        s3: m.syncTurns(1, 2 / 3),                          // 3
        sFree: m.syncTurns(1, 0.6180339887498949),          // null (1/φ runs free)
      };
    });
    const pass = r.wrap && r.off && Math.abs(r.fwd - 0.25) < 1e-9 && Math.abs(r.rev - 0.75) < 1e-9
      && r.cpt === 1 && r.s1 === 1 && r.s2 === 2 && r.s3 === 3 && r.sFree === null;
    return { pass, detail: `wrap/offset ${r.wrap}/${r.off} · fwd ${r.fwd} rev ${r.rev} · cpt ${r.cpt} · sync 1:1→${r.s1} .5→${r.s2} 2:3→${r.s3} 1/φ→${r.sFree}` };
  },

  // the standalone ratio part: drops with its controls + live readouts, φ advances off the
  // running heart, and a bookmark (2:3) makes the sync readout report "every 3 turns".
  async ratioPart(page) {
    await dropPart(page, 'ratio');
    await page.waitForTimeout(150);
    const txt = (await page.locator('.kratio').textContent()) || '';
    const phiV = page.locator('.kratio .krout .krd').nth(1).locator('.v');   // readouts: in · φ · m·r · sync
    const phi1 = parseFloat((await phiV.textContent()) || '0');
    await page.locator('.kratio .ksel .opt:text-is("2:3")').click();
    await page.waitForTimeout(350);
    const syncTxt = (await page.locator('.kratio .krout .krd').last().textContent()) || '';
    const phi2 = parseFloat((await phiV.textContent()) || '0');
    await shot(page, 'ratioPart');
    const hasControls = ['input', 'ratio', 'mult', 'offset', 'reverse', 'φ', 'sync'].every((w) => txt.includes(w));
    const moved = phi1 !== phi2;
    const sync3 = /every 3 turns/.test(syncTxt);
    return { pass: hasControls && moved && sync3, detail: `controls ${hasControls} · φ ${phi1}→${phi2} moved ${moved} · 2:3 sync "${syncTxt.trim()}"` };
  },

  // the input selector rewires which heart output node feeds the system: 'turns' is an
  // accumulator that climbs past 1, 'sin' is bounded [-1,1]. Switching it changes the 'in' value.
  async ratioInput(page) {
    await dropPart(page, 'ratio');
    const inV = page.locator('.kratio .krout .krd').first().locator('.v');   // 'in' is the first readout
    await page.waitForTimeout(2200);                       // default ~0.5Hz heart → turns climbs past 1
    const inTurns = parseFloat((await inV.textContent()) || '0');
    await page.locator('.kratio .ksel .opt:text-is("sin")').click();
    await page.waitForTimeout(150);
    const inSin = parseFloat((await inV.textContent()) || '0');
    await shot(page, 'ratioInput');
    const turnsClimbs = inTurns > 0.6;                     // accumulating (will exceed 1)
    const sinBounded = Math.abs(inSin) <= 1.0001;          // bipolar, never leaves [-1,1]
    return { pass: turnsClimbs && sinBounded, detail: `input turns→${inTurns} (climbs) · switched→sin→${inSin} (bounded [-1,1])` };
  },

  // the ratio scrub ↔ bookmark row are two-way linked: clicking a bookmark lights it exclusively;
  // typing a non-bookmark value into the scrub lights NONE (the bookmark row, not the input ksel).
  async ratioLink(page) {
    await dropPart(page, 'ratio');
    await page.waitForTimeout(120);
    const onBm = page.locator('.kratio .kr-bm .opt.on');
    await page.locator('.kratio .kr-bm .opt:text-is("3:4")').click();
    await page.waitForTimeout(80);
    const lit = await onBm.allTextContents();
    const sval = page.locator('.kratio .scrub .sval').first();   // ratio is the first scrub
    await sval.dblclick();
    await page.locator('.kratio .scrub input').first().fill('0.42');
    await page.locator('.kratio .scrub input').first().press('Enter');
    await page.waitForTimeout(80);
    const litAfter = await onBm.count();
    await shot(page, 'ratioLink');
    const exclusive = lit.length === 1 && lit[0] === '3:4';
    return { pass: exclusive && litAfter === 0, detail: `click 3:4 → lit [${lit.join(',')}] · type 0.42 → ${litAfter} lit (none on mismatch)` };
  },

  // a scrub's core job: DRAGGING it changes the value. (The scrub-dead-drag regression —
  // preventDefault suppressing mousemove — left this uncovered; this is the guard so it can't recur.)
  async scrubDrag(page) {
    await dropPart(page, 'ratio');
    await page.waitForTimeout(120);
    const multB = page.locator('.kratio .scrub', { hasText: 'mult' }).locator('b');
    const before = parseFloat((await multB.textContent()) || '0');
    const scrub = page.locator('.kratio .scrub', { hasText: 'mult' });
    const box = await scrub.boundingBox();
    const cy = box.y + box.height / 2;
    await page.mouse.move(box.x + box.width / 2, cy);
    await page.mouse.down();
    await page.mouse.move(box.x + box.width / 2 + 120, cy, { steps: 12 });   // drag right
    await page.mouse.up();
    await page.waitForTimeout(80);
    const after = parseFloat((await multB.textContent()) || '0');
    await shot(page, 'scrubDrag');
    return { pass: after !== before, detail: `mult scrub ${before} → ${after} after 120px drag (must change)` };
  },
};

// ── runner ───────────────────────────────────────────────────────────────────
const only = process.argv[2];
const server = await serve();
const { browser, page } = await launch();
const results = [];
for (const [name, fn] of Object.entries(CHECKS)) {
  if (only && name !== only) continue;
  await fresh(page);
  try { results.push({ name, ...(await fn(page)) }); }
  catch (e) { results.push({ name, pass: false, detail: 'threw: ' + e.message }); }
}
console.log('');
for (const r of results) console.log(`  ${r.pass ? 'PASS' : 'FAIL'}  ${r.name} — ${r.detail}`);
console.log(page.__errs.length ? `  console errors: ${JSON.stringify(page.__errs)}` : '  no console errors');
console.log('');
await browser.close(); server.close();
process.exit(results.every((r) => r.pass) ? 0 : 1);
