// eye rig: two pending approvals in one card - approve one, does the other survive?
import { chromium } from 'playwright';
import fs from 'fs';

const AP = 'C:/Users/User/Documents/0000000/mind not map/.claude/approvals';
fs.mkdirSync(AP, { recursive: true });
fs.writeFileSync(AP + '/AAA-1.json', JSON.stringify({ seat: 'clerk', tool: 'PowerShell', preview: 'command AAA', command: 'echo AAA', ts: 'AAA-1' }));
fs.writeFileSync(AP + '/BBB-2.json', JSON.stringify({ seat: 'clerk', tool: 'PowerShell', preview: 'command BBB', command: 'echo BBB', ts: 'BBB-2' }));

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1920, height: 1000 } });
await page.goto('http://localhost:8000/2.structure-maintains-order/21.labor-installs-practice/211.motion-builds-form/lattice.dev.html');
await page.waitForTimeout(800);
await page.evaluate(() => switchView(3));
await page.waitForTimeout(2500);
const before = await page.evaluate(() => document.querySelectorAll('#d-seat-clerk .d-card-appr').length);
// click allow on the FIRST approval row
await page.evaluate(() => document.querySelector('#d-seat-clerk .d-card-appr .d-appr-allow').click());
await page.waitForTimeout(2500);
const after = await page.evaluate(() => ({
  rows: document.querySelectorAll('#d-seat-clerk .d-card-appr').length,
  texts: [...document.querySelectorAll('#d-seat-clerk .d-card-appr .d-appr-preview')].map(e => e.textContent),
}));
console.log(JSON.stringify({ before, after }));

for (const f of fs.readdirSync(AP)) fs.rmSync(AP + '/' + f);
await browser.close();
