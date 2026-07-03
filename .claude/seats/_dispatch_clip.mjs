// eye rig: clipped close-ups of the dispatch view
import { chromium } from 'playwright';

const out = process.argv[2] || 'clip.png';
const x = parseInt(process.argv[3] || '0', 10);
const y = parseInt(process.argv[4] || '0', 10);
const w = parseInt(process.argv[5] || '700', 10);
const h = parseInt(process.argv[6] || '500', 10);
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1920, height: 1000 } });
await page.goto('http://localhost:8000/2.structure-maintains-order/21.labor-installs-practice/211.motion-builds-form/lattice.f2.20260609-102857.html');
await page.waitForTimeout(800);
await page.evaluate(() => switchView(3));
await page.waitForTimeout(2500);
await page.screenshot({ path: out, clip: { x, y, width: w, height: h } });
await browser.close();
