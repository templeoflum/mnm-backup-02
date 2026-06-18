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
  const speed = page.locator('.heartgrid .scrub').first();
  await speed.dblclick();
  const inp = page.locator('.heartgrid .scrub input').first();
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

  // right-click the value resets it to the default; the value-zone drag changes it first.
  async valueReset(page) {
    await dropPart(page, 'param');
    await mode(page, 'interact');
    const num = page.locator('.sparam .sp-num b').first();
    const before = parseFloat(await num.textContent());
    const vz = page.locator('.sparam .sp-value').first();
    const box = await vz.boundingBox();
    const cy = box.y + box.height / 2;
    await page.mouse.move(box.x + box.width * 0.5, cy);
    await page.mouse.down(); await page.mouse.move(box.x + box.width * 0.5 + 120, cy, { steps: 8 }); await page.mouse.up();
    await page.waitForTimeout(80);
    const moved = parseFloat(await num.textContent());
    await page.mouse.click(box.x + box.width * 0.5, cy, { button: 'right' });   // reset
    await page.waitForTimeout(80);
    const after = parseFloat(await num.textContent());
    await shot(page, 'valueReset');
    return { pass: moved !== before && Math.abs(after - 0.5) < 1e-6, detail: `before ${before} · dragged ${moved} · reset ${after} (default 0.5)` };
  },

  // the smart param's feel knobs are exposed in the properties panel.
  async feel(page) {
    await dropPart(page, 'param');               // auto-selected in edit mode
    await page.waitForTimeout(150);
    const txt = await page.locator('#inspector').textContent();
    const want = ['feel', 'pad size', 'fine ramp', 'ramp px', 'sat base', 'sat span', 'debug pad'];
    const missing = want.filter((w) => !txt.includes(w));
    await shot(page, 'feel');
    return { pass: missing.length === 0, detail: missing.length ? `missing knobs: ${missing.join(', ')}` : 'all feel knobs exposed' };
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
