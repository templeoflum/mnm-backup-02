// bench.js — Playwright toy-running rig for the cell/build run-through
// Pattern inherited from eyes.js (main tree). Screenshots go to 110 (watches).
// Usage:
//   node bench.js <toy.html>                          load, inventory controls, dump readouts, screenshot
//   node bench.js <toy.html> set id=val id=val ...    set inputs/selects by id, dispatch input+change, wait, screenshot
//   node bench.js <toy.html> click id [id ...]        click buttons by id, wait, screenshot
//   node bench.js <toy.html> eval "js"                run js in page, print result, screenshot
// Always prints: console messages, page errors, control inventory, readout text.

const path = require('path');
const { chromium } = require('C:/Users/User/Documents/0000000/mind not map/node_modules/playwright');

const SHOT_DIR = path.join(__dirname, '..', '..', '..',
  '1.presence-minds-awareness', '11.focus-discerns-difference',
  '110.attention-watches-knot');

function stamp() {
  const d = new Date();
  const p = (n) => String(n).padStart(2, '0');
  return `${d.getUTCFullYear()}${p(d.getUTCMonth() + 1)}${p(d.getUTCDate())}-${p(d.getUTCHours())}${p(d.getUTCMinutes())}${p(d.getUTCSeconds())}`;
}

async function main() {
  const [toyPath, mode, ...rest] = process.argv.slice(2);
  if (!toyPath) { console.error('usage: node bench.js <toy.html> [set|click|eval] ...'); process.exit(1); }
  const toyName = path.basename(toyPath, '.html');
  const browser = await chromium.launch({ headless: true });
  const page = await (await browser.newContext({ viewport: { width: 1280, height: 900 } })).newPage();

  const consoleLines = [];
  page.on('console', (m) => consoleLines.push(`[console:${m.type()}] ${m.text()}`));
  page.on('pageerror', (e) => consoleLines.push(`[PAGEERROR] ${e.message}`));

  await page.goto('file:///' + path.resolve(toyPath).replace(/\\/g, '/'), { waitUntil: 'load' });
  await page.waitForTimeout(2500); // let init + first frames run

  if (mode === 'set') {
    for (const pair of rest) {
      const i = pair.indexOf('=');
      const id = pair.slice(0, i), val = pair.slice(i + 1);
      await page.evaluate(([id, val]) => {
        const el = document.getElementById(id);
        if (!el) return;
        el.value = val;
        el.dispatchEvent(new Event('input', { bubbles: true }));
        el.dispatchEvent(new Event('change', { bubbles: true }));
      }, [id, val]);
    }
    await page.waitForTimeout(2000);
  } else if (mode === 'click') {
    for (const id of rest) { await page.click('#' + id).catch(e => consoleLines.push(`[click fail] ${id}: ${e.message}`)); await page.waitForTimeout(400); }
    await page.waitForTimeout(1500);
  } else if (mode === 'eval') {
    const out = await page.evaluate(rest.join(' '));
    console.log('EVAL RESULT:', JSON.stringify(out));
    await page.waitForTimeout(1000);
  }

  const controls = await page.evaluate(() =>
    [...document.querySelectorAll('input,select,button')].map(el => ({
      tag: el.tagName.toLowerCase(), id: el.id || null, type: el.type || null,
      value: el.value !== undefined ? String(el.value).slice(0, 40) : null,
      min: el.min || null, max: el.max || null,
      label: (el.textContent || '').trim().slice(0, 40) || null,
    })));

  const text = await page.evaluate(() => document.body.innerText);

  const shot = path.join(SHOT_DIR, `bench.${toyName}${mode ? '.' + mode : ''}.${stamp()}.png`);
  await page.screenshot({ path: shot, fullPage: true });

  console.log('=== CONSOLE ===');
  console.log(consoleLines.length ? consoleLines.join('\n') : '(clean)');
  console.log('=== CONTROLS ===');
  console.log(JSON.stringify(controls, null, 1));
  console.log('=== PAGE TEXT ===');
  console.log(text);
  console.log('=== SCREENSHOT ===');
  console.log(shot);

  await browser.close();
}

main().catch(e => { console.error('bench failed:', e); process.exit(1); });
