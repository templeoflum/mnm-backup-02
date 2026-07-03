// eye rig: click the sign button, report what the file line becomes
import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1920, height: 1000 } });
await page.goto('http://localhost:8000/2.structure-maintains-order/21.labor-installs-practice/211.motion-builds-form/lattice.f2.20260609-102857.html');
await page.waitForTimeout(800);
await page.evaluate(() => switchView(3));
await page.waitForTimeout(2500);
const had = await page.evaluate(() => document.querySelectorAll('#d-body-1 .d-sign-btn').length);
await page.click('#d-body-1 .d-sign-btn');
await page.waitForTimeout(1500);
const after = await page.evaluate(() => ({
  signBtns: document.querySelectorAll('#d-body-1 .d-sign-btn').length,
  signedText: (document.querySelector('#d-body-1') || {}).textContent?.match(/SIGNED:[^\n<]*/)?.[0] || null,
}));
console.log(JSON.stringify({ had, after }));
await browser.close();
