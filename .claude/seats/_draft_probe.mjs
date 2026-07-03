// eye rig: drafts survive reloads (incident.compose-loss.f0 F1)
import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1920, height: 1000 } });
await page.goto('http://localhost:8000/2.structure-maintains-order/21.labor-installs-practice/211.motion-builds-form/lattice.f2.20260609-102857.html');
await page.waitForTimeout(800);
await page.evaluate(() => switchView(3));
await page.waitForTimeout(1500);
await page.click('#d-pane-0');
await page.keyboard.type('this draft must survive the reload');
await page.waitForTimeout(200);
await page.reload();                       // the incident, reproduced
await page.waitForTimeout(800);
await page.evaluate(() => switchView(3));
await page.waitForTimeout(1500);
await page.click('#d-pane-0');
await page.waitForTimeout(300);
const after = await page.evaluate(() => document.getElementById('d-compose-input').value);
console.log(JSON.stringify({ survived: after === 'this draft must survive the reload', value: after }));
await browser.close();
