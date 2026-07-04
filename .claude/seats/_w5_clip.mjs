// eye rig: close clip of the clerk seat card mid-breath + a synthetic raised hand
import { chromium } from 'playwright';

const url = 'http://localhost:8000/2.structure-maintains-order/21.labor-installs-practice/211.motion-builds-form/lattice.dev.html';
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1920, height: 1000 } });
await page.goto(url);
await page.waitForTimeout(800);
await page.evaluate(() => switchView(3));
await page.waitForTimeout(2500);
await page.evaluate(() => {
  const card = document.getElementById('d-seat-clerk');
  const row = document.createElement('div');
  row.className = 'd-card-appr';
  row.innerHTML = '<span class="d-appr-tool">Bash</span><span class="d-appr-preview">probe: the raised hand</span>' +
    '<button class="d-appr-btn d-appr-allow">allow</button><button class="d-appr-btn d-appr-deny">deny</button>';
  card.insertBefore(row, card.children[1]);
});
await page.waitForTimeout(300);   // shoot before the next card repaint sweeps the synthetic row
const card = await page.$('#d-seat-clerk');
await card.screenshot({ path: '.claude/seats/shots/w5_card_clip.png' });
await browser.close();
console.log('clipped');
