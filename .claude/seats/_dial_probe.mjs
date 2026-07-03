// eye rig: verify the ACTIVE-dial pane shows the current frame
import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1920, height: 1000 } });
await page.goto('http://localhost:8000/2.structure-maintains-order/21.labor-installs-practice/211.motion-builds-form/lattice.f2.20260609-102857.html');
await page.waitForTimeout(800);
await page.evaluate(() => { localStorage.removeItem('dispatchPanes'); });
await page.reload();
await page.waitForTimeout(800);
await page.evaluate(() => switchView(3));
await page.waitForTimeout(2500);
const probe = await page.evaluate(() => ({
  bar1: document.getElementById('d-bar-1')?.textContent.trim().slice(0, 140),
  body1Head: document.getElementById('d-body-1')?.textContent.trim().slice(0, 120),
}));
console.log(JSON.stringify(probe));
await page.locator('#d-pane-1').screenshot({ path: process.argv[2] || 'dial_shot.png' });
await browser.close();
