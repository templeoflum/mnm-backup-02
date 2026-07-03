// eye rig: drag the memos header up in dispatch - thread reveals to half screen
import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1920, height: 1000 } });
await page.goto('http://localhost:8000/2.structure-maintains-order/21.labor-installs-practice/211.motion-builds-form/lattice.f2.20260609-102857.html');
await page.waitForTimeout(800);
await page.evaluate(() => switchView(3));
await page.waitForTimeout(1000);
await page.evaluate(() => { if (!memosOpen) toggleMemos(); });
await page.waitForTimeout(400);
const before = await page.evaluate(() => {
  const o = document.getElementById('memos-overlay');
  return { composeOnly: o.classList.contains('compose-only'), expanded: o.classList.contains('expanded') };
});
const hb = await page.locator('#memos-overlay .memos-header').boundingBox();
await page.mouse.move(hb.x + hb.width / 2, hb.y + hb.height / 2);
await page.mouse.down();
await page.mouse.move(hb.x + hb.width / 2, hb.y - 300, { steps: 10 });
await page.mouse.up();
await page.waitForTimeout(400);
const after = await page.evaluate(() => {
  const o = document.getElementById('memos-overlay');
  const t = o.querySelector('.memos-thread');
  return { expanded: o.classList.contains('expanded'), threadH: t.offsetHeight, hasRows: t.textContent.length > 50 };
});
console.log(JSON.stringify({ before, after }));
await page.screenshot({ path: process.argv[2] || 'memos_drag.png', clip: { x: 1280, y: 300, width: 640, height: 700 } });
await browser.close();
