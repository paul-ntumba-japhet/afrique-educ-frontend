import fs from 'node:fs'

const cssPath = 'c:/wamp64/www/afric-educ/frontend/app/assets/css/tailwind.css'
const partialPath = 'c:/wamp64/www/afric-educ/frontend/app/assets/css/pod-page.partial.css'
const marker = '  /* ─── Impression à la demande (POD) ─────────────────────────── */'

const source = fs.readFileSync(cssPath, 'utf8')
const index = source.indexOf(marker)
if (index < 0) {
  console.error('marker not found')
  process.exit(1)
}

const partial = fs.readFileSync(partialPath, 'utf8')
fs.writeFileSync(cssPath, `${source.slice(0, index)}${partial}`)
console.log('rewrote pod css', partial.length)
