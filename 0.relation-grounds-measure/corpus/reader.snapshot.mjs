// reader.snapshot.mjs — regenerate reader.data.js, the snapshot the reader auto-loads.
// Run from anywhere: node reader.snapshot.mjs   (or double-click reader.refresh.cmd)
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const HERE = path.dirname(fileURLToPath(import.meta.url))
const RECORDS = path.join(HERE, 'records')
const OUT = path.join(HERE, 'reader.data.js')
const RECORD = /^(field|source|object)\..+\.f\d+\.\d{8}-\d{4,6}\.md$/

const files = []
for (const name of fs.readdirSync(RECORDS)) {
  if (!RECORD.test(name)) continue
  files.push({ name, text: fs.readFileSync(path.join(RECORDS, name), 'utf8') })
}
const stamp = new Date().toISOString().replace(/[-:]/g, '').replace('T', '-').slice(0, 15)
const payload = JSON.stringify({ generated: stamp, count: files.length, files })
fs.writeFileSync(OUT, 'window.CORPUS_DATA = ' + payload + ';\n')
console.log(`reader.data.js — ${files.length} records, ${(payload.length / 1048576).toFixed(1)} MB, stamp ${stamp}`)
