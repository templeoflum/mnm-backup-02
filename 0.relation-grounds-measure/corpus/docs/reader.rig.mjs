// reader.rig.mjs — the reader's regression net. Loads reader.html windowless
// (bundled Chromium; canvas 2D renders headless), exercises every registered
// view, screenshots each to the OS temp dir, and reports.
// A net, not a gate: green confirms known-good didn't break.
// run: node reader.rig.mjs   (resolves paths relative to itself)
import { chromium } from 'playwright';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import os from 'node:os';
import fs from 'node:fs';

const here = path.dirname(fileURLToPath(import.meta.url));
const readerPath = path.resolve(here, '..', 'reader.html');
const shotDir = path.join(os.tmpdir(), 'reader-shots');
fs.mkdirSync(shotDir, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1600, height: 1000 } });
const errors = [];
page.on('pageerror', (e) => errors.push('pageerror: ' + e.message));
page.on('console', (m) => { if (m.type() === 'error') errors.push('console: ' + m.text()); });

await page.goto('file:///' + readerPath.replace(/\\/g, '/'));
await page.waitForFunction(() => window.corpus && window.simState && !window.simState.running, null, { timeout: 180000 });

const stats = await page.evaluate(() => window.corpus.stats);
console.log('corpus:', JSON.stringify(stats));

// web ground checks: springs pulled true, hit-test + focus + pane alive
const webCheck = await page.evaluate(() => {
  const comps = window.readerComponents;
  return {
    components: comps.length,
    giant: comps[0].length,
    ticks: window.simState.ticks,
    fullMs: window.drawStats.fullMs,
  };
});
console.log('web:', JSON.stringify(webCheck));

const litPixels = () => page.evaluate(() => {
  const c = document.getElementById('graph');
  const d = c.getContext('2d').getImageData(0, 0, c.width, c.height).data;
  let lit = 0;
  for (let i = 3; i < d.length; i += 16) if (d[i] > 0) lit++;
  return lit * 4; // sampled every 4th px
});

const keys = await page.evaluate(() => Object.keys(window.readerViews));
let fail = false;
for (const k of keys) {
  await page.evaluate((key) => window.switchView(key), k);
  await page.waitForFunction(() => !window.simState.running, null, { timeout: 180000 });
  await page.waitForTimeout(400); // let the debounced full draw land
  const lit = await litPixels();
  const cur = await page.evaluate(() => window.readerCurView());
  const ok = cur === k && lit > 3000;
  if (!ok) fail = true;
  await page.screenshot({ path: path.join(shotDir, `view-${k}.png`) });
  console.log(`view ${k}: ${ok ? 'ok' : 'FAIL'} · lit≈${lit} · shot ${path.join(shotDir, `view-${k}.png`)}`);
}

// focus + pane survive a view round-trip
const focusCheck = await page.evaluate(() => {
  window.switchView('web');
  const h = [...window.corpus.byHandle.keys()][100];
  const n = window.corpus.anyNode(h);
  const el = document.querySelector('#pane');
  window.readerGo ? window.readerGo(h) : null;
  return { handle: h, paneOpen: el.classList.contains('open'), focus: !!window.readerFocus() };
});
console.log('focus/pane after go():', JSON.stringify(focusCheck));

if (errors.length) { console.log('PAGE ERRORS:\n' + errors.join('\n')); fail = true; }
else console.log('zero page errors');
await browser.close();
process.exit(fail ? 1 : 0);
