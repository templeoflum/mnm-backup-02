// eye rig: scroll pane 1 to the S4 proposal block and shoot the pane
import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1920, height: 1000 } });
await page.goto('http://localhost:8000/2.structure-maintains-order/21.labor-installs-practice/211.motion-builds-form/lattice.f2.20260609-102857.html');
await page.waitForTimeout(800);
await page.evaluate(() => switchView(3));
await page.waitForTimeout(2500);
await page.evaluate(() => {
  const row = document.querySelector('#d-body-1 .d-sign-btn');
  if (row) row.scrollIntoView({ block: 'center' });
});
await page.waitForTimeout(300);
await page.locator('#d-pane-1').screenshot({ path: process.argv[2] || 's4_visual.png' });
await browser.close();
