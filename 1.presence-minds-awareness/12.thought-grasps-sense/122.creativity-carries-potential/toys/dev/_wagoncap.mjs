// _wagoncap.mjs — wagon-wheel: frames across strobe ticks to check the marked spoke steps.
import { mkdir } from 'fs/promises';
import { fileURLToPath, pathToFileURL } from 'url';
import { dirname, join } from 'path';
import { chromium } from 'playwright';

const HERE = dirname(fileURLToPath(import.meta.url));
const TOYS = join(HERE, '..');
const SHOTS = join(HERE, 'shots');
await mkdir(SHOTS, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 500, height: 720 } });
await page.goto(pathToFileURL(join(TOYS, 'wagon-wheel.html')).href);
await page.waitForTimeout(300);
const set = async (id, v) => {
  await page.locator('#' + id).evaluate((el, val) => {
    el.value = val; el.dispatchEvent(new Event('input', { bubbles: true }));
  }, v);
  await page.waitForTimeout(60);
};
const shot = async (tag) => { await page.screenshot({ path: join(SHOTS, tag + '.png'), fullPage: true }); console.log('shot ' + tag); };

// strobed (default): three frames one strobe-tick apart — marked spoke should barely move / step back
await shot('ww_a');
await page.waitForTimeout(120);
await shot('ww_b');
await page.waitForTimeout(120);
await shot('ww_c');
// smooth: two frames apart — marked spoke should clearly advance forward
await set('strobe', 0);
await shot('ww_smooth_a');
await page.waitForTimeout(200);
await shot('ww_smooth_b');

await browser.close();
