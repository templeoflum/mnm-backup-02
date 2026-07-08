// _surface_cap.mjs — eye the miroglyph one-line surface through the ISOLATED capture.
// (lantern, first self-eye after escape#1 closed 20260708) uses _capguard so a rendered
// artifact cannot reach the network during capture.
import { mkdir } from 'fs/promises';
import { pathToFileURL } from 'url';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { chromium } from 'playwright';
import { isolatedContext } from './_capguard.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
const SHOTS = join(HERE, 'shots');
await mkdir(SHOTS, { recursive: true });
const SURFACE = join(HERE, '..', 'miroglyph-surface.html');

const browser = await chromium.launch();
const ctx = await isolatedContext(browser, { viewport: { width: 1400, height: 900 } });
const page = await ctx.newPage();
try {
  await page.goto(pathToFileURL(SURFACE).href, { waitUntil: 'load', timeout: 8000 });
} catch (e) { console.log('nav: ' + e.message + ' (capturing anyway)'); }
await page.waitForTimeout(500);
await page.screenshot({ path: join(SHOTS, 'miroglyph_surface.png'), fullPage: false });
console.log('shot miroglyph_surface');
await browser.close();
