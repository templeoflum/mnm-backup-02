// Diagnose what numpad actually sends in the browser
const { run } = require('./eyes.js');

run(async ({ page, screenshot, getState }) => {
  console.log('=== NUMPAD DIAGNOSTIC ===');

  // Open debug overlay first
  await page.click('#debug-toggle');

  // Inject a raw key logger that captures everything
  await page.evaluate(() => {
    window._rawKeys = [];
    document.addEventListener('keydown', e => {
      window._rawKeys.push({
        key: e.key,
        code: e.code,
        keyCode: e.keyCode,
        ctrl: e.ctrlKey,
        shift: e.shiftKey,
        alt: e.altKey
      });
    }, true); // capture phase, fires before our handler
  });

  // Press numpad keys
  console.log('\nSending Numpad0...');
  await page.keyboard.press('Numpad0');

  console.log('Sending Numpad1...');
  await page.keyboard.press('Numpad1');

  console.log('Sending Numpad2...');
  await page.keyboard.press('Numpad2');

  // Also test regular digits for comparison
  console.log('Sending Digit0...');
  await page.keyboard.press('Digit0');

  console.log('Sending 0...');
  await page.keyboard.press('0');

  // Read what the browser actually received
  const rawKeys = await page.evaluate(() => window._rawKeys);
  console.log('\nRaw key events received by browser:');
  rawKeys.forEach((k, i) => {
    console.log(`  [${i}] key="${k.key}" code="${k.code}" keyCode=${k.keyCode} ctrl=${k.ctrl} shift=${k.shift} alt=${k.alt}`);
  });

  // Check debug log
  const log = await page.evaluate(() => _debugLog.slice(0, 10));
  console.log('\nDebug log entries:');
  log.forEach(e => console.log(`  ${e.msg}`));

  await screenshot('numpad-diag');
  console.log('\n=== DONE ===');
}).catch(err => {
  console.error('Failed:', err);
  process.exit(1);
});
