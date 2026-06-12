// eyes-test.js — test shift and numpad fixes
const { run } = require('./eyes.js');

run(async ({ page, screenshot, getState, getDebugLog }) => {
  console.log('=== SHIFT + NUMPAD TEST ===');

  // start fresh at 11
  let state = await getState();
  console.log('start:', state.currentAddr);

  // test shift+1 (top row) — set digit 1
  await page.keyboard.press('Shift+Digit1');
  state = await getState();
  console.log('shift+1 (top row):', state.currentAddr, '(expected: 11)');

  // go to depth 2 first: ctrl+2 then need depth 2
  await page.keyboard.press('Control+Digit2');
  state = await getState();
  console.log('ctrl+2:', state.currentAddr, '(expected: 21)');

  // shift+0 — set digit 1 to 0
  await page.keyboard.press('Shift+Digit0');
  state = await getState();
  console.log('shift+0 (top row):', state.currentAddr, '(expected: 20)');

  // test numpad: bare numpad 1
  await page.keyboard.press('Numpad1');
  state = await getState();
  console.log('numpad 1 (bare):', state.currentAddr, '(expected: 21)');

  // ctrl + numpad 0
  await page.keyboard.press('Control+Numpad0');
  state = await getState();
  console.log('ctrl+numpad0:', state.currentAddr, '(expected: 01)');

  // shift + numpad 2
  await page.keyboard.press('Shift+Numpad2');
  state = await getState();
  console.log('shift+numpad2:', state.currentAddr, '(expected: 02)');

  // alt + numpad 1
  await page.keyboard.press('Alt+Numpad1');
  state = await getState();
  console.log('alt+numpad1:', state.currentAddr, '(expected: 021)');

  // open debug and screenshot
  await page.click('#debug-toggle');
  await screenshot('shift-numpad-test');

  const log = await getDebugLog();
  console.log('\ndebug log:');
  log.forEach(e => console.log(`  ${e.msg}`));

  console.log('\n=== TEST COMPLETE ===');
}).catch(err => {
  console.error('Test failed:', err);
  process.exit(1);
});
