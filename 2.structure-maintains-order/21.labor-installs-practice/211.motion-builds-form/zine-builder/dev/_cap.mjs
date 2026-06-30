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
await browser.close(); server.close();
