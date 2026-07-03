// eye rig: capture the dispatch view (S3) and probe its panes
import { chromium } from 'playwright';

const out = process.argv[2] || 'dispatch_shot.png';
const width = parseInt(process.argv[3] || '1920', 10);
const height = parseInt(process.argv[4] || '1000', 10);
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width, height } });
await page.goto('http://localhost:8000/2.structure-maintains-order/21.labor-installs-practice/211.motion-builds-form/lattice.f2.20260609-102857.html');
await page.waitForTimeout(800);
await page.evaluate(() => switchView(3));
await page.waitForTimeout(2500); // panes fetch + render
const probe = await page.evaluate(() => {
  const out = { panes: [], seats: [] };
  for (let i = 0; i < 3; i++) {
    const bar = document.getElementById('d-bar-' + i);
    const body = document.getElementById('d-body-' + i);
    out.panes.push({
      i,
      bar: bar ? bar.textContent.trim().slice(0, 80) : null,
      chars: body ? body.textContent.length : 0,
      sections: body ? body.querySelectorAll('details.md-sec').length : 0,
    });
  }
  for (const s of ['keeper', 'lantern', 'clerk']) {
    const el = document.getElementById('d-seat-' + s);
    out.seats.push({ seat: s, chars: el ? el.textContent.length : 0 });
  }
  return out;
});
console.log(JSON.stringify(probe, null, 1));
await page.screenshot({ path: out });
await browser.close();
