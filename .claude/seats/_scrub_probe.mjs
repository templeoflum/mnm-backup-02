// eye rig: the fold pill scrubs with the pointer, not a timer
import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1920, height: 1000 } });
page.on('pageerror', e => console.log('PAGEERROR: ' + String(e).slice(0, 160)));
await page.goto('http://localhost:8000/2.structure-maintains-order/21.labor-installs-practice/211.motion-builds-form/lattice.dev.html');
await page.waitForTimeout(800);
await page.evaluate(() => switchView(3));
await page.waitForTimeout(1500);
await page.evaluate(() => dDocOpen(0, '210/frame.window-hands-floor.f2.20260703-160153.live.md'));
await page.waitForTimeout(1500);
const pill = page.locator('#d-doc-0 .d-fold-pill');
const box = await pill.boundingBox();
const startText = await pill.textContent();
// drag LEFT ~70px (should step back ~2 folds: f2 -> f0)
await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
await page.mouse.down();
await page.mouse.move(box.x + box.width / 2 - 70, box.y + box.height / 2, { steps: 8 });
await page.waitForTimeout(200);
const midText = await pill.textContent();
await page.mouse.up();
await page.waitForTimeout(300);
const landedTitle = await page.evaluate(() => document.querySelector('#d-doc-0 .d-doc-name')?.textContent || '');
console.log(JSON.stringify({ startText, midText, landedTitle }));
await browser.close();
