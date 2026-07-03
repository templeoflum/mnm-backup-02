// eye rig: the ternary aim chord - 1->lantern(1), 2->clerk(2), 1+2->keeper(0)
import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1920, height: 1000 } });
page.on('pageerror', e => console.log('PAGEERROR: ' + String(e).slice(0, 160)));
await page.goto('http://localhost:8000/2.structure-maintains-order/21.labor-installs-practice/211.motion-builds-form/lattice.dev.html');
await page.waitForTimeout(800);
await page.evaluate(() => switchView(3));
await page.waitForTimeout(1500);
await page.evaluate(() => { const i = document.getElementById('d-compose-input'); i.focus(); i.value = 'aim test'; });

async function fire(keys) {  // keys: array fired with altKey, near-together
  await page.evaluate((ks) => {
    ks.forEach(k => document.getElementById('view-3').dispatchEvent(
      new KeyboardEvent('keydown', { key: k, altKey: true, bubbles: true })));
  }, keys);
  await page.waitForTimeout(220);
  return page.evaluate(() => dSelected);
}
const single1 = await fire(['1']);          // expect 1 (lantern)
const single2 = await fire(['2']);          // expect 2 (clerk)
const chord = await fire(['1', '2']);       // expect 0 (keeper)
const textKept = await page.evaluate(() => document.getElementById('d-compose-input').value);
console.log(JSON.stringify({ single1, single2, chord, textKept }));
await browser.close();
