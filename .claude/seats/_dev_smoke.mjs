// eye rig: smoke the STAGED client (lattice.dev.html) - errors, panes, restore
import { chromium } from 'playwright';

const url = 'http://localhost:8000/2.structure-maintains-order/21.labor-installs-practice/211.motion-builds-form/lattice.dev.html';
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1920, height: 1000 } });
const errors = [];
page.on('pageerror', e => errors.push(String(e).slice(0, 200)));
await page.goto(url);
await page.waitForTimeout(800);
await page.evaluate(() => switchView(3));
await page.waitForTimeout(2500);
const panes = await page.evaluate(() =>
  [0, 1, 2].map(i => (document.getElementById('d-body-' + i)?.textContent || '').length));
// simulate a post-deploy restore: open doc marked in dSurface, reload
await page.evaluate(() => {
  localStorage.setItem('dSurface', JSON.stringify({
    openDocs: [null, null, '210/frame.window-hands-floor.f2.20260703-160153.live.md'],
    memosOpen: false, memosExpanded: false, paneScrolls: [] }));
});
await page.reload();
await page.waitForTimeout(1200);
await page.evaluate(() => switchView(3));
await page.waitForTimeout(2000);
const docRestored = await page.evaluate(() =>
  document.getElementById('d-doc-2')?.classList.contains('open') || false);
console.log(JSON.stringify({ errors, panes, docRestored }));
await browser.close();
