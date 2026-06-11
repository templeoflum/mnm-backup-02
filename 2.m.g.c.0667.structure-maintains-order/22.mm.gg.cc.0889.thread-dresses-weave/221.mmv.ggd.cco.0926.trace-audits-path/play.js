// play.js — Playwright PLAY rig: one living page, a sequence of states, screenshots per state.
// Sibling of bench.js (which is one-shot). Shots go to 110 (watches), named play.<toy>.<step>.<stamp>.png
// Usage:
//   node play.js <toy.html> probe                 dump scrub keys, select options, checkbox ids
//   node play.js <toy.html> script <steps.json>   walk the steps in ONE page session
// Step shape (all fields optional):
//   { "name":"L2",                      // shot/step label
//     "apply":{"__level":2,"cpf":40},   // scrub data-k -> value, via el.__apply
//     "check":{"overlaysMasterChk":false}, // checkbox id -> bool (change event dispatched)
//     "select":{"rateRatio":"irrational_4"}, // select id -> value (change event dispatched)
//     "click":["freezeBtn"],            // button ids
//     "wait":4000,                      // ms to let the instrument live
//     "shot":"canvas"|"page",           // canvas = .cwrap clip (the form), page = full page
//     "read":true }                     // dump the full recipe (all scrubs/selects/checks) as JSON
// Output per step: one line "STEP <name>" + optional RECIPE json + SHOT path. Console/pageerrors at the end.

const fs = require('fs');
const path = require('path');
const { chromium } = require('C:/Users/User/Documents/0000000/mind not map/node_modules/playwright');

const SHOT_DIR = path.join(__dirname, '..', '..', '..',
  '1.v.d.o.0333.presence-minds-awareness', '11.vv.dd.oo.0444.focus-discerns-difference',
  '110.vvn.ddi.oos.0444.attention-watches-knot');

function stamp() {
  const d = new Date();
  const p = (n) => String(n).padStart(2, '0');
  return `${d.getUTCFullYear()}${p(d.getUTCMonth() + 1)}${p(d.getUTCDate())}-${p(d.getUTCHours())}${p(d.getUTCMinutes())}${p(d.getUTCSeconds())}`;
}

async function readRecipe(page) {
  return page.evaluate(() => {
    const out = { scrubs: {}, selects: {}, checks: {}, level: null };
    document.querySelectorAll('.scrub').forEach(el => { if (el.__key && el.__read) out.scrubs[el.__key] = el.__read(); });
    document.querySelectorAll('select').forEach(el => { if (el.id) out.selects[el.id] = el.value; });
    document.querySelectorAll('input[type=checkbox]').forEach(el => { if (el.id) out.checks[el.id] = el.checked; });
    const lc = document.getElementById('lvlCount'); if (lc) out.level = lc.textContent.trim();
    return out;
  });
}

async function main() {
  const [toyPath, mode, arg] = process.argv.slice(2);
  if (!toyPath || !mode) { console.error('usage: node play.js <toy.html> probe|script <steps.json>'); process.exit(1); }
  const toyName = path.basename(toyPath, '.html');
  const browser = await chromium.launch({ headless: true });
  const page = await (await browser.newContext({ viewport: { width: 1280, height: 900 } })).newPage();

  const consoleLines = [];
  page.on('console', (m) => consoleLines.push(`[console:${m.type()}] ${m.text()}`));
  page.on('pageerror', (e) => consoleLines.push(`[PAGEERROR] ${e.message}`));

  await page.goto('file:///' + path.resolve(toyPath).replace(/\\/g, '/'), { waitUntil: 'load' });
  await page.waitForTimeout(2500);

  if (mode === 'probe') {
    const inv = await page.evaluate(() => {
      const scrubs = [...document.querySelectorAll('.scrub')].map(el => ({ k: el.__key || el.dataset.k, v: el.__read ? el.__read() : null }));
      const selects = [...document.querySelectorAll('select')].map(el => ({ id: el.id, value: el.value, options: [...el.options].map(o => o.value) }));
      const checks = [...document.querySelectorAll('input[type=checkbox]')].map(el => ({ id: el.id, checked: el.checked }));
      const buttons = [...document.querySelectorAll('button')].map(el => el.id || el.textContent.trim()).filter(Boolean);
      return { scrubs, selects, checks, buttons };
    });
    console.log(JSON.stringify(inv, null, 1));
  } else if (mode === 'script') {
    const steps = JSON.parse(fs.readFileSync(arg, 'utf8'));
    for (const step of steps) {
      const name = step.name || 'step';
      console.log(`STEP ${name}`);
      if (step.check) for (const [id, val] of Object.entries(step.check)) {
        await page.evaluate(([id, val]) => { const el = document.getElementById(id); if (el && el.checked !== val) { el.checked = val; el.dispatchEvent(new Event('change', { bubbles: true })); } }, [id, val]);
      }
      if (step.select) for (const [id, val] of Object.entries(step.select)) {
        await page.evaluate(([id, val]) => { const el = document.getElementById(id); if (el) { el.value = val; el.dispatchEvent(new Event('change', { bubbles: true })); } }, [id, val]);
      }
      if (step.apply) for (const [k, v] of Object.entries(step.apply)) {
        const ok = await page.evaluate(([k, v]) => { const el = [...document.querySelectorAll('.scrub')].find(e => e.__key === k); if (el) { el.__apply(v); return true; } return false; }, [k, v]);
        if (!ok) console.log(`  [apply miss] no scrub ${k}`);
      }
      if (step.click) for (const id of step.click) {
        // direct dispatch: zone-collapsed (hidden) controls still receive the click
        const ok = await page.evaluate((id) => { const el = document.getElementById(id); if (el) { el.click(); return true; } return false; }, id);
        if (!ok) console.log(`  [click miss] no element ${id}`);
        await page.waitForTimeout(300);
      }
      if (step.wait) await page.waitForTimeout(step.wait);
      if (step.eval) console.log('EVAL ' + JSON.stringify(await page.evaluate(step.eval)));
      if (step.read) console.log('RECIPE ' + JSON.stringify(await readRecipe(page)));
      if (step.shot) {
        const file = path.join(SHOT_DIR, `play.${toyName}.${name}.${stamp()}.png`);
        if (step.shot === 'canvas') await page.locator('.cwrap').screenshot({ path: file });
        else await page.screenshot({ path: file, fullPage: true });
        console.log('SHOT ' + file);
      }
    }
  }

  console.log('=== CONSOLE ===');
  console.log(consoleLines.length ? consoleLines.join('\n') : '(clean)');
  await browser.close();
}

main().catch(e => { console.error('play failed:', e); process.exit(1); });
