// eye rig: working-signal END TO END - real turn file, real new-code server
// (port 8001), real staged client, no crafted data. Reads the clerk chip in
// the turn-open state, then fires stop and reads again.
import { execFileSync } from 'child_process';
import { chromium } from 'playwright';

const url = 'http://localhost:8001/2.structure-maintains-order/21.labor-installs-practice/211.motion-builds-form/lattice.dev.html';
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1920, height: 1000 } });
const errors = [];
page.on('pageerror', e => errors.push(String(e).slice(0, 200)));

const chip = () => page.evaluate(() => {
  const el = document.getElementById('d-seat-clerk');
  const c = el.querySelector('.d-posture');
  return { text: c.textContent, cls: c.className, title: c.title,
           breathing: el.classList.contains('breathing'),
           dots: !!el.querySelector('.d-typing') };
});

await page.goto(url);
await page.waitForTimeout(800);
await page.evaluate(() => switchView(3));
await page.waitForTimeout(2500);
const open = await chip();

execFileSync('python', ['.claude/seats/turn.py', 'clerk', 'stop']);
await page.waitForTimeout(6000);   // one 5s presence poll cycle
const closed = await chip();

console.log(JSON.stringify({ errors, open, closed }, null, 1));
await browser.close();
