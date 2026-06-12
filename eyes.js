// eyes.js — Playwright test harness for the lattice
// Screenshots go to 110 (watches)
// Naming: eyes.{digits}.{YYMMDD-HHMMSS}.png

const { chromium } = require('playwright');
const path = require('path');

const SCREENSHOT_DIR = path.join(__dirname, '1.v.d.o.0333', '11.vv.dd.oo.0444', '110.vvn.ddi.oos.0444');
const LATTICE_URL = 'http://localhost:8000/2.m.g.c.0667/20.mn.gi.cs.0667/200.mnn.gii.css.0667/lattice.f0.260606-122128.html';

function timestamp() {
  const d = new Date();
  const yy = String(d.getUTCFullYear()).slice(2);
  const mm = String(d.getUTCMonth() + 1).padStart(2, '0');
  const dd = String(d.getUTCDate()).padStart(2, '0');
  const hh = String(d.getUTCHours()).padStart(2, '0');
  const mi = String(d.getUTCMinutes()).padStart(2, '0');
  const ss = String(d.getUTCSeconds()).padStart(2, '0');
  return `${yy}${mm}${dd}-${hh}${mi}${ss}`;
}

async function screenshot(page, label) {
  const addr = await page.evaluate(() => currentAddr);
  const name = `eyes.${label || addr}.${timestamp()}.png`;
  const filepath = path.join(SCREENSHOT_DIR, name);
  await page.screenshot({ path: filepath, fullPage: true });
  console.log(`screenshot: ${name}`);
  return filepath;
}

async function getState(page) {
  return page.evaluate(() => ({
    currentAddr,
    activeView,
    depth: currentAddr.length,
    v0Open: { ...v0Open },
    v0Collapsed,
    fileCache: Object.keys(_fileCache).length,
    filePending: Object.keys(_filePending).length
  }));
}

async function getDebugLog(page) {
  return page.evaluate(() => _debugLog.slice(0, 20));
}

// Main test runner — pass a function that receives { page, browser, screenshot, getState, getDebugLog }
async function run(testFn) {
  const browser = await chromium.launch({ headless: true });
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  const page = await ctx.newPage();

  // collect console messages
  page.on('console', msg => console.log(`[browser] ${msg.text()}`));
  page.on('pageerror', err => console.log(`[browser error] ${err.message}`));

  await page.goto(LATTICE_URL, { waitUntil: 'networkidle' });

  // wait for initial render
  await page.waitForFunction(() => typeof currentAddr !== 'undefined');

  try {
    await testFn({ page, browser, screenshot: (l) => screenshot(page, l), getState: () => getState(page), getDebugLog: () => getDebugLog(page) });
  } finally {
    await browser.close();
  }
}

// If run directly, do a diagnostic test
if (require.main === module) {
  run(async ({ page, screenshot, getState, getDebugLog }) => {
    console.log('=== LATTICE DIAGNOSTIC ===');

    // initial state
    let state = await getState();
    console.log('initial state:', JSON.stringify(state));
    await screenshot('init');

    // open debug overlay
    await page.click('#debug-toggle');
    await screenshot('debug-open');

    // test bare digit: press 0
    await page.keyboard.press('0');
    state = await getState();
    console.log('after bare 0:', state.currentAddr);
    await screenshot('bare-0');

    // test ctrl+2: set digit 0
    await page.keyboard.press('Control+2');
    state = await getState();
    console.log('after ctrl+2:', state.currentAddr);
    await screenshot('ctrl-2');

    // test ctrl+shift+1: set digit 1
    await page.keyboard.press('Control+Shift+1');
    state = await getState();
    console.log('after ctrl+shift+1:', state.currentAddr);
    await screenshot('ctrl-shift-1');

    // test alt+0: set digit 2
    await page.keyboard.press('Alt+0');
    state = await getState();
    console.log('after alt+0:', state.currentAddr);
    await screenshot('alt-0');

    // test space: shallow
    await page.keyboard.press(' ');
    state = await getState();
    console.log('after space:', state.currentAddr);
    await screenshot('space');

    // dump debug log
    const log = await getDebugLog();
    console.log('debug log:', JSON.stringify(log, null, 2));

    console.log('=== DIAGNOSTIC COMPLETE ===');
  }).catch(err => {
    console.error('Test failed:', err);
    process.exit(1);
  });
}

module.exports = { run, screenshot, getState, getDebugLog, SCREENSHOT_DIR, LATTICE_URL };
