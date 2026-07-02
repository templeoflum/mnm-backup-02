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
    pageChips: Array.from(document.querySelectorAll('#pages .pchip')).map((c) =>          // default = 2 cover leaves
      ({ label: c.querySelector('.plabel').textContent, sides: Array.from(c.querySelectorAll('.pside')).map((s) => s.textContent) })),
    readout: document.getElementById('readout').textContent,
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

// slice 12: double-click the text atom → edit in the overlay → commit on click-away.
// (target the box's visible top — the text element's bbox center sits in the clipped
//  overflow region where page-bg intercepts; a real user clicks the visible text.)
const boxRect = await page.evaluate(() => {
  const r = document.querySelector('#stage svg.page .atom-text .atom-box').getBoundingClientRect();
  return { x: r.x, y: r.y, w: r.width };
});
await page.mouse.click(boxRect.x + boxRect.w / 2, boxRect.y + 8);   // two quick clicks → manual dbl-click → edit
await page.mouse.click(boxRect.x + boxRect.w / 2, boxRect.y + 8);
await page.waitForTimeout(80);
const hadEditor = await page.locator('textarea.edit-overlay').count();
let text12 = { hadEditor };
if (hadEditor) {
  await page.screenshot({ path: join(SHOTS, 'text12-editing.png') });
  await page.locator('textarea.edit-overlay').fill('Edited in place — type, then click away to commit.');
  await page.mouse.click(100, 400);                     // click the controls panel → blur → commit (no stray place)
  await page.waitForTimeout(80);
  text12 = await page.evaluate(() => {
    const t = document.querySelector('#stage svg.page .atom-text text');
    return { hadEditor: 1, stillEditor: document.querySelectorAll('textarea.edit-overlay').length, firstLine: t ? t.querySelector('tspan').textContent : null };
  });
  await page.screenshot({ path: join(SHOTS, 'text12.png') });
}
console.log('text12:', JSON.stringify(text12));

// slice 15: select the text frame → the story panel opens with the FULL text; type in the
// panel → the story updates and the page frame reflows live (clipped to what fits).
await page.mouse.click(boxRect.x + boxRect.w / 2, boxRect.y + 8);    // single click → select
await page.waitForTimeout(120);
let story15 = { panelOpen: await page.evaluate(() => document.getElementById('story').classList.contains('open')) };
if (story15.panelOpen) {
  const long = 'The story lives OUTSIDE the frame now. This full text is edited in the panel; the box on the page is a frame showing only what fits, reflowing live as the story grows and grows and grows beyond the visible clip.';
  await page.locator('#storyText').fill(long);
  await page.waitForTimeout(150);
  story15 = await page.evaluate(() => {
    const t = document.querySelector('#stage svg.page .atom-text text');
    return {
      panelOpen: true,
      meta: document.getElementById('storyMeta').textContent,
      tspans: t ? t.querySelectorAll('tspan').length : 0,
      firstLine: t ? t.querySelector('tspan').textContent : null,
      panelChars: document.getElementById('storyText').value.length,
    };
  });
  await page.screenshot({ path: join(SHOTS, 'story15.png') });
}
console.log('story15:', JSON.stringify(story15));

// m2.2: type controls — with the frame still selected, click 'mono' and bump size ▶.
// The rendered text's font-family flips; its scale transform grows with the size
// (tspans render at a 64px master, scaled back — scale = size/64).
// assert the RENDERED family (getComputedStyle), never the attribute — a CSS rule
// silently beats the font-family attribute, and asserting the attribute green-lit
// exactly that bug (operator-caught, 20260702).
const renderedType = () => page.evaluate(() => {
  const t = document.querySelector('#stage svg.page .atom-text text');
  const g = t.closest('g[clip-path]').querySelector('g[transform]');
  return { fam: getComputedStyle(t).fontFamily, scale: g.getAttribute('transform'), tspans: t.querySelectorAll('tspan').length };
});
const typeBefore = await renderedType();
await page.locator('#typeCtl .ksel .opt', { hasText: 'mono' }).click();
for (let i = 0; i < 5; i++) await page.locator('#typeCtl .scrub .ar.r').click();
await page.waitForTimeout(120);
const typeAfter = await renderedType();
if (!/courier/i.test(typeAfter.fam) || /courier/i.test(typeBefore.fam)) console.log('type(m2.2): RENDERED FAMILY FAIL');
await page.screenshot({ path: join(SHOTS, 'type-m22.png') });
console.log('type(m2.2):', JSON.stringify({ typeBefore, typeAfter }));

// imposition preview: drop an atom on page 1, grow to 8 pages (→ 2 sheets), toggle impose.
const stageBox = await page.locator('#stage svg.page').boundingBox();
await page.mouse.click(stageBox.x + stageBox.width / 2, stageBox.y + stageBox.height / 2);  // place a text atom on the front cover
for (let i = 0; i < 2; i++) await page.getByRole('button', { name: '+ leaf' }).click();    // 2 cover + 2 interior leaves = 8 pages
const leafStack = await page.evaluate(() => Array.from(document.querySelectorAll('#pages .pchip')).map((c) =>
  c.querySelector('.plabel').textContent + '(' + Array.from(c.querySelectorAll('.pside')).map((s) => s.textContent).join('') + ')'));
console.log('leafStack(8pp):', JSON.stringify(leafStack));   // expect C1(ab) L1(ab) L2(ab) C2(ab)
await page.getByRole('button', { name: 'impose' }).click();
await page.waitForTimeout(300);
await page.screenshot({ path: join(SHOTS, 'impose.png') });
const impo = await page.evaluate(() => ({
  readout: document.getElementById('readout').textContent,
  sheets: document.querySelectorAll('.impo .sheet').length,
  sides: document.querySelectorAll('.impo svg.sheet-svg').length,
  watermarks: Array.from(document.querySelectorAll('.impo .pnum')).map((t) => t.textContent),   // leaf-address watermarks
  atomsInPreview: document.querySelectorAll('.impo .atom').length,
  textTspansInPreview: document.querySelectorAll('.impo .atom-text text tspan').length,  // >0 = text renders in preview
}));
console.log('impo:', JSON.stringify(impo, null, 2));
console.log('errs2:', JSON.stringify(errs));

// m2.1: the reader view — cover alone, then a facing spread; click-right flips forward.
await page.getByRole('button', { name: 'read', exact: true }).click();
await page.waitForTimeout(150);
const readCover = await page.evaluate(() => ({
  reading: document.getElementById('stage').classList.contains('reading'),
  pagesShown: document.querySelectorAll('#stage svg.page').length,
  readout: document.getElementById('readout').textContent,
}));
const sb = await page.locator('#stage').boundingBox();
await page.mouse.click(sb.x + sb.width * 0.85, sb.y + sb.height / 2);   // right half → next view
await page.waitForTimeout(120);
const readSpread = await page.evaluate(() => ({
  pagesShown: document.querySelectorAll('#stage svg.page').length,
  readout: document.getElementById('readout').textContent,
}));
await page.screenshot({ path: join(SHOTS, 'read-view.png') });
console.log('read(m2.1):', JSON.stringify({ readCover, readSpread }));
await page.getByRole('button', { name: '← editing' }).click();          // exit read mode
await page.waitForTimeout(100);

// m1.1: the print path — stub the dialog, press print, check the staged print DOM:
// one side per printed page at true physical size, artifact clean of preview aids.
await page.evaluate(() => { window.print = () => {}; });
await page.getByRole('button', { name: 'print' }).click();
await page.waitForTimeout(150);
const printCheck = await page.evaluate(() => {
  const root = document.getElementById('printRoot');
  const svgs = root.querySelectorAll('svg.sheet-svg');
  return {
    sides: root.querySelectorAll('.psheet').length,
    svgWidth: svgs[0] ? svgs[0].getAttribute('width') : null,
    svgHeight: svgs[0] ? svgs[0].getAttribute('height') : null,
    atPage: (root.querySelector('style') || {}).textContent,
    previewAidsInPrint: root.querySelectorAll('.pnum, .fold, .sheet-edge, .blank').length,
    atomsInPrint: root.querySelectorAll('.atom').length,
    readout: document.getElementById('readout').textContent,
  };
});
console.log('print(m1.1):', JSON.stringify(printCheck, null, 2));
await page.emulateMedia({ media: 'print' });
await page.waitForTimeout(150);
await page.screenshot({ path: join(SHOTS, 'print-m1.png'), fullPage: true });
console.log('print-media shot: dev/shots/print-m1.png');
console.log('errs3:', JSON.stringify(errs));
await browser.close(); server.close();
