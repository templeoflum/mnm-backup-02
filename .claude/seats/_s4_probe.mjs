// eye rig: S4 behavioral probe — status dropdown, flag switch, the signature
import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1920, height: 1000 } });
await page.goto('http://localhost:8000/2.structure-maintains-order/21.labor-installs-practice/211.motion-builds-form/lattice.f2.20260609-102857.html');
await page.waitForTimeout(800);
await page.evaluate(() => switchView(3));
await page.waitForTimeout(2500);

const counts = await page.evaluate(() => ({
  statusSelects: document.querySelectorAll('#d-body-1 select.d-status').length,
  flagRows: document.querySelectorAll('#d-body-1 .d-flag-row').length,
  signBtn: document.querySelectorAll('#d-body-1 .d-sign-btn').length,
  subSections: document.querySelectorAll('#d-body-1 details.md-sec.lvl3').length,
}));

// flip slice 5.1's status TBD -> DOING via the real dropdown, then back
const flip = await page.evaluate(async () => {
  const sels = [...document.querySelectorAll('#d-body-1 select.d-status')];
  const target = sels.find(s => s.value === 'TBD');
  if (!target) return 'no TBD select found';
  const on = target.getAttribute('onchange');           // dStatusChange(i,n,...)
  const m = on.match(/dStatusChange\((\d+),(\d+)/);
  dStatusChange(+m[1], +m[2], 'DOING');
  await new Promise(r => setTimeout(r, 1200));
  // find the same line now and flip it back
  const sels2 = [...document.querySelectorAll('#d-body-1 select.d-status')];
  const t2 = sels2.find(s => s.getAttribute('onchange').includes(',' + m[2] + ',') || s.getAttribute('onchange').match(new RegExp('\\(' + m[1] + ',' + m[2] + ',')));
  const nowDoing = t2 ? t2.value : '(gone)';
  if (t2 && t2.value === 'DOING') {
    dStatusChange(+m[1], +m[2], 'TBD');
    await new Promise(r => setTimeout(r, 1200));
  }
  return { flippedTo: nowDoing, restored: true };
});
console.log(JSON.stringify({ counts, flip }));
await page.screenshot({ path: process.argv[2] || 's4_shot.png' });
await browser.close();
