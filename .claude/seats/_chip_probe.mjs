// eye rig: the operator's exact repro - click the desk chip on the clerk card,
// expect the doc popup to open with the frame in it
import { chromium } from 'playwright';

const url = 'http://localhost:8000/2.structure-maintains-order/21.labor-installs-practice/211.motion-builds-form/lattice.f2.20260609-102857.html';
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1920, height: 1000 } });
const errors = [];
page.on('pageerror', e => errors.push(String(e).slice(0, 200)));
await page.goto(url);
await page.waitForTimeout(800);
await page.evaluate(() => switchView(3));
await page.waitForTimeout(2500);
const chip = await page.$('#d-seat-clerk .d-chip');
const chipTitle = chip ? await chip.getAttribute('title') : null;
if (chip) await chip.click();
await page.waitForTimeout(1500);
const result = await page.evaluate(() => {
  const open = [0, 1, 2].map(c => {
    const el = document.getElementById('d-doc-' + c);
    return el && el.classList.contains('open')
      ? { col: c, name: el.querySelector('.d-doc-name')?.textContent, bodyLen: (el.querySelector('.d-doc-body')?.textContent || '').length }
      : null;
  }).filter(Boolean);
  return open;
});
console.log(JSON.stringify({ errors, chipTitle, opened: result }, null, 1));
await browser.close();
