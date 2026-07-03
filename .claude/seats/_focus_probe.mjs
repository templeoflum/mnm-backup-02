// eye rig: the keyboard lives in the compose bar - verify focus behavior
import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1920, height: 1000 } });
await page.goto('http://localhost:8000/2.structure-maintains-order/21.labor-installs-practice/211.motion-builds-form/lattice.f2.20260609-102857.html');
await page.waitForTimeout(800);
await page.evaluate(() => switchView(3));
await page.waitForTimeout(2500);
const afterEnter = await page.evaluate(() => document.activeElement?.id || document.activeElement?.tagName);
await page.click('#d-seat-keeper');   // click a card - not a select
await page.waitForTimeout(300);
const afterCardClick = await page.evaluate(() => document.activeElement?.id || document.activeElement?.tagName);
await page.click('#d-pane-1');        // select a pane
await page.waitForTimeout(300);
const afterPaneClick = await page.evaluate(() => document.activeElement?.id || document.activeElement?.tagName);
const typed = await page.evaluate(() => {
  const i = document.getElementById('d-compose-input');
  return { focused: document.activeElement === i, disabled: i.disabled };
});
console.log(JSON.stringify({ afterEnter, afterCardClick, afterPaneClick, typed }));
await browser.close();
