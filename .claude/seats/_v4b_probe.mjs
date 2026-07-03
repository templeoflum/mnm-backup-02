// eye rig: fold scrubber + one-window compose (dev)
import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1920, height: 1000 } });
page.on('pageerror', e => console.log('PAGEERROR: ' + String(e).slice(0, 160)));
await page.goto('http://localhost:8000/2.structure-maintains-order/21.labor-installs-practice/211.motion-builds-form/lattice.dev.html');
await page.waitForTimeout(800);
await page.evaluate(() => switchView(3));
await page.waitForTimeout(2000);

// open a multi-fold doc (frame.window-hands-floor has f0/f1/f2) in col 0
await page.evaluate(() => dDocOpen(0, '210/frame.window-hands-floor.f2.20260703-160153.live.md'));
await page.waitForTimeout(1500);
const pill = await page.evaluate(() => {
  const p = document.querySelector('#d-doc-0 .d-fold-pill');
  return p ? p.textContent : 'no pill';
});

// compose: aim via key 2 (clerk) then check target; shared draft
const compose = await page.evaluate(() => {
  const i = document.getElementById('d-compose-input');
  i.focus(); i.value = 'shared draft text';
  document.getElementById('view-3').dispatchEvent(new KeyboardEvent('keydown', { key: '2', altKey: true, bubbles: true }));
  return { target: document.getElementById('d-compose-target').textContent,
           textKept: document.getElementById('d-compose-input').value,
           selected: dSelected };
});
console.log(JSON.stringify({ pill, compose }));
await browser.close();
