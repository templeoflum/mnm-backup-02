// one-off eye: capture the lattice HUD and probe the e-stop button's live DOM
import { chromium } from 'playwright';

const out = process.argv[2] || 'estop_shot.png';
const width = parseInt(process.argv[3] || '1400', 10);
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: width, height: 500 } });
await page.goto('http://localhost:8000/2.structure-maintains-order/21.labor-installs-practice/211.motion-builds-form/lattice.f2.20260609-102857.html');
await page.waitForTimeout(1500); // let refreshHalt() land
const probe = await page.evaluate(() => {
  const b = document.getElementById('estop-btn');
  if (!b) return null;
  const r = b.getBoundingClientRect();
  const onTop = document.elementFromPoint(r.x + r.width / 2, r.y + r.height / 2);
  return {
    text: b.textContent, pulled: b.classList.contains('pulled'),
    rect: { x: Math.round(r.x), y: Math.round(r.y), w: Math.round(r.width), h: Math.round(r.height) },
    covered: onTop !== b, coveredBy: onTop ? (onTop.id || onTop.className || onTop.tagName) : 'nothing'
  };
});
console.log(JSON.stringify(probe));
await page.screenshot({ path: out, clip: { x: 0, y: 0, width: width, height: 140 } });
await browser.close();
