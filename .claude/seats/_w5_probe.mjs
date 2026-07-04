// eye rig: W5 body-render pass on the STAGED client - working chip, breath, raised hand
import { chromium } from 'playwright';

const url = 'http://localhost:8000/2.structure-maintains-order/21.labor-installs-practice/211.motion-builds-form/lattice.dev.html';
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1920, height: 1000 } });
const errors = [];
page.on('pageerror', e => errors.push(String(e).slice(0, 200)));
await page.goto(url);
await page.waitForTimeout(800);
await page.evaluate(() => switchView(3));
await page.waitForTimeout(2500);
const out = await page.evaluate(() => {
  const r = {};
  for (const seat of ['keeper', 'lantern', 'clerk']) {
    const el = document.getElementById('d-seat-' + seat);
    const chip = el && el.querySelector('.d-posture');
    r[seat] = {
      posture: chip ? chip.textContent : null,
      cls: chip ? chip.className : null,
      breathing: el ? el.classList.contains('breathing') : null,
      dots: el ? !!el.querySelector('.d-typing') : null,
    };
  }
  // no live approval pending, so stage a synthetic amber row and read its hand
  const card = document.getElementById('d-seat-clerk');
  const row = document.createElement('div');
  row.className = 'd-card-appr';
  row.textContent = 'probe';
  card.appendChild(row);
  const before = getComputedStyle(row, '::before');
  r.hand = { content: before.content, animation: before.animationName };
  const breathAnim = getComputedStyle(document.querySelector('.d-seat-card.breathing') || row).animationName;
  r.breathAnim = breathAnim;
  row.remove();
  return r;
});
await page.screenshot({ path: '.claude/seats/shots/w5_dispatch.png' });
console.log(JSON.stringify({ errors, out }, null, 1));
await browser.close();
