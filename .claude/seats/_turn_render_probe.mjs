// eye rig: the working-signal render on the STAGED client - crafted /presence
// data driven straight through dLoadSeats via an in-page fetch override
import { chromium } from 'playwright';

const url = 'http://localhost:8000/2.structure-maintains-order/21.labor-installs-practice/211.motion-builds-form/lattice.dev.html';
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1920, height: 1000 } });
const errors = [];
page.on('pageerror', e => errors.push(String(e).slice(0, 200)));

const seat = (name, extra) => ({ seat: name, halted: false, status: 'probing', status_age: 5,
  act_age: 5, dial: [], last_commit: 'x', mentions: 0, last_mention: null, ...extra });

async function render(states) {
  const data = { seats: [seat('keeper', states.keeper), seat('lantern', states.lantern),
                         seat('clerk', states.clerk)], halted_all: false };
  return page.evaluate(async (d) => {
    if (!window._origFetch) window._origFetch = window.fetch.bind(window);
    window.fetch = (u, ...a) => String(u).includes('/presence')
      ? Promise.resolve({ json: () => Promise.resolve(d) })
      : window._origFetch(u, ...a);
    // let any pre-override in-flight /presence response land first - a late
    // real repaint after the crafted one was the probe's own race
    await new Promise(res => setTimeout(res, 900));
    _dSeatsSig = '';
    dLoadSeats();
    await new Promise(res => setTimeout(res, 300));
    const r = {};
    for (const s of ['keeper', 'lantern', 'clerk']) {
      const el = document.getElementById('d-seat-' + s);
      const chip = el.querySelector('.d-posture');
      r[s] = { text: chip.textContent, cls: chip.className.replace('d-posture ', ''),
               title: chip.title, breathing: el.classList.contains('breathing'),
               dots: !!el.querySelector('.d-typing') };
    }
    return r;
  }, data);
}

await page.goto(url);
await page.waitForTimeout(800);
await page.evaluate(() => switchView(3));
await page.waitForTimeout(1500);

const pass1 = await render({
  clerk:   { turn: 'open',   proc: 'alive' },     // -> working + dots + breath
  lantern: { turn: 'open',   proc: 'dead' },      // -> went dark
  keeper:  { turn: 'open',   proc: 'unknown' },   // -> unknown
});
const pass2 = await render({
  clerk:   { turn: 'closed', proc: 'alive' },     // -> awake (verified) + breath
  lantern: { turn: 'closed', proc: 'dead' },      // -> asleep
  keeper:  { turn: null,     proc: null },        // -> legacy: fresh status -> awake
});
console.log(JSON.stringify({ errors, pass1, pass2 }, null, 1));
await browser.close();
