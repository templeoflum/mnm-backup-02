// eye rig: behavioral probe — collapse toggle + view regression sweep
import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1920, height: 1000 } });
await page.goto('http://localhost:8000/2.structure-maintains-order/21.labor-installs-practice/211.motion-builds-form/lattice.f2.20260609-102857.html');
await page.waitForTimeout(800);
await page.evaluate(() => switchView(3));
await page.waitForTimeout(2500);

// collapse toggle: click the first section summary in pane 1, check state flips
const before = await page.evaluate(() => {
  const d = document.querySelector('#d-body-1 details.md-sec');
  return d ? d.open : null;
});
await page.click('#d-body-1 details.md-sec > summary');
const after = await page.evaluate(() => {
  const d = document.querySelector('#d-body-1 details.md-sec');
  return d ? d.open : null;
});

// regression sweep: each view renders without throwing, container non-empty
const views = {};
for (const v of [0, 1, 2, 3]) {
  const ok = await page.evaluate(async (v) => {
    try {
      switchView(v);
      await new Promise(r => setTimeout(r, 400));
      const el = document.getElementById('view-' + v);
      return el && el.classList.contains('active') && el.textContent.trim().length > 0;
    } catch (e) { return 'ERR: ' + e.message; }
  }, v);
  views['view' + v] = ok;
}
console.log(JSON.stringify({ collapseBefore: before, collapseAfter: after, views }));
await browser.close();
