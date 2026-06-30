// _cap.mjs — throwaway: serve the 211 floor (so ../kit imports resolve), load the
// zine-builder, screenshot it. Plain DOM (no WebGPU) → windowless capture is valid here.
import http from 'http';
import { readFile, mkdir } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, extname, join } from 'path';
import { chromium } from 'playwright';
const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = join(HERE, '..', '..');            // 211 floor (zine-builder + kit are siblings)
const SHOTS = join(HERE, 'shots'); const PORT = 8932;
const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.md': 'text/plain' };
const server = http.createServer(async (req, res) => {
  let p = decodeURIComponent(req.url.split('?')[0]); if (p === '/') p = '/zine-builder/index.html';
  if (p === '/favicon.ico') { res.writeHead(204); return res.end(); }
  try { const d = await readFile(join(ROOT, p)); res.writeHead(200, { 'Content-Type': MIME[extname(p)] || 'application/octet-stream' }); res.end(d); }
  catch { res.writeHead(404); res.end('nf'); }
});
await new Promise((r) => server.listen(PORT, r));
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1100, height: 760 } });
const errs = []; page.on('pageerror', (e) => errs.push('PAGEERR ' + e.message)); page.on('console', (m) => { if (m.type() === 'error') errs.push(m.text()); });
await page.goto(`http://localhost:${PORT}/zine-builder/index.html`, { waitUntil: 'networkidle' });
await page.waitForTimeout(400);
await mkdir(SHOTS, { recursive: true });
await page.screenshot({ path: join(SHOTS, 'editor.png') });
const diag = await page.evaluate(() => {
  const c = document.getElementById('controls');
  const probe = (sel) => { const el = document.querySelector(sel); if (!el) return sel + ': MISSING'; const r = el.getBoundingClientRect(); const cs = getComputedStyle(el); return `${sel}: ${Math.round(r.width)}x${Math.round(r.height)} bg=${cs.backgroundColor} display=${cs.display}`; };
  return {
    controls: `scrollH=${c.scrollHeight} clientH=${c.clientHeight} (overflow ${c.scrollHeight > c.clientHeight ? 'YES — clipped' : 'no'})`,
    scrub: probe('.scrub'),
    sval: probe('.scrub .sval'),
    scrubText: (document.querySelector('.scrub') || {}).textContent,
    selector: probe('.ksel'),
    selText: (document.querySelector('.ksel') || {}).textContent,
    showDirectoryPicker: typeof window.showDirectoryPicker,
    pileLoadButtons: Array.from(document.querySelectorAll('#pileLoad button')).map((b) => b.textContent),
  };
});
console.log('errs:', JSON.stringify(errs));
console.log('diag:', JSON.stringify(diag, null, 2));

// slice 11: load a paragraph via the pile (a text file), place it, confirm it wraps as tspans.
const para = 'The quick brown fox jumps over the lazy dog, again and again, until this line has no choice but to wrap inside its little box across several readable lines.';
await page.locator('#pileLoad input[type=file]').setInputFiles({ name: 'body.txt', mimeType: 'text/plain', buffer: Buffer.from(para) });
await page.waitForTimeout(120);                          // FileReader
await page.locator('#pile .row').first().click();        // arm the pile item
const tb = await page.locator('#stage svg.page').boundingBox();
await page.mouse.click(tb.x + tb.width / 2, tb.y + tb.height / 2);   // place the paragraph text atom
const text11 = await page.evaluate(() => {
  const ed = document.querySelector('#stage svg.page .atom-text text');
  return { found: !!ed, tspans: ed ? ed.querySelectorAll('tspan').length : 0, firstLine: ed ? ed.querySelector('tspan').textContent : null };
});
await page.screenshot({ path: join(SHOTS, 'text11.png') });
console.log('text11:', JSON.stringify(text11));

// imposition preview: drop an atom on page 1, grow to 8 pages (→ 2 sheets), toggle impose.
const stageBox = await page.locator('#stage svg.page').boundingBox();
await page.mouse.click(stageBox.x + stageBox.width / 2, stageBox.y + stageBox.height / 2);  // place a text atom on pg1
for (let i = 0; i < 7; i++) await page.getByRole('button', { name: '+ page' }).click();
await page.getByRole('button', { name: 'impose' }).click();
await page.waitForTimeout(300);
await page.screenshot({ path: join(SHOTS, 'impose.png') });
const impo = await page.evaluate(() => ({
  readout: document.getElementById('readout').textContent,
  sheets: document.querySelectorAll('.impo .sheet').length,
  sides: document.querySelectorAll('.impo svg.sheet-svg').length,
  atomsInPreview: document.querySelectorAll('.impo .atom').length,
  textTspansInPreview: document.querySelectorAll('.impo .atom-text text tspan').length,  // >0 = text renders in preview
}));
console.log('impo:', JSON.stringify(impo, null, 2));
console.log('errs2:', JSON.stringify(errs));
await browser.close(); server.close();
