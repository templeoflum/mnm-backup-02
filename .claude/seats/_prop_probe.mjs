// eye rig: does the keeper proposal popup raise + does his desk chip open?
import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1920, height: 1000 } });
page.on('pageerror', e => console.log('PAGEERROR: ' + String(e).slice(0, 150)));
await page.goto('http://localhost:8000/2.structure-maintains-order/21.labor-installs-practice/211.motion-builds-form/lattice.f2.20260609-102857.html');
await page.waitForTimeout(800);
await page.evaluate(() => { localStorage.removeItem('dPropDismissed'); switchView(3); });
await page.waitForTimeout(3000);
const prop = await page.evaluate(() => ({
  open: document.getElementById('d-proposal')?.classList.contains('open'),
  title: document.getElementById('d-prop-title')?.textContent,
  bodyLen: (document.getElementById('d-prop-body')?.textContent || '').length,
}));
// keeper's desk chip -> doc popup col 0
const chip = await page.evaluate(() => {
  const c = document.querySelector('#d-seat-keeper .d-chip');
  if (!c) return 'no chip';
  c.click();
  return c.title;
});
await page.waitForTimeout(1500);
const doc0 = await page.evaluate(() => ({
  open: document.getElementById('d-doc-0')?.classList.contains('open'),
  title: document.querySelector('#d-doc-0 .d-doc-title')?.textContent,
}));
console.log(JSON.stringify({ prop, chip, doc0 }));
await browser.close();
