// _cap.mjs — capture the sketches for eyeing. sketches are look-only; this is the eye.
import { mkdir } from 'fs/promises';
import { fileURLToPath, pathToFileURL } from 'url';
import { dirname, join } from 'path';
import { chromium } from 'playwright';

const HERE = dirname(fileURLToPath(import.meta.url));
const SK = join(HERE, '..');
const SHOTS = join(HERE, 'shots');
await mkdir(SHOTS, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1180, height: 760 } });
const shot = async (file, name) => {
  await page.goto(pathToFileURL(join(SK, file)).href);
  await page.waitForTimeout(250);
  await page.screenshot({ path: join(SHOTS, name + '.png'), fullPage: false });
  console.log('shot ' + name);
};

await shot('zine-editor.html', 'zine-editor');
await shot('submission-hub.html', 'submission-hub');

await browser.close();
