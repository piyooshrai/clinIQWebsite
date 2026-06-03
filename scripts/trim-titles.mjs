// One-shot title trimmer for SEO Tier 2.
// Visits every data/**/*.json + content/**/*.json, reads meta.title, and
// trims it with deterministic rules until final-with-template length <= 60.
// Target: length(meta.title) + length(" | clinIQ") <= 60 (i.e. title <= 51).

import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs'
import { join, extname } from 'path'

const ROOTS = ['data', 'content']
const TEMPLATE_SUFFIX = ' | clinIQ'
const TARGET_FINAL = 60
const MAX_TITLE = TARGET_FINAL - TEMPLATE_SUFFIX.length

function walk(dir, acc = []) {
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry)
    const st = statSync(p)
    if (st.isDirectory()) walk(p, acc)
    else if (st.isFile() && extname(p) === '.json') acc.push(p)
  }
  return acc
}

/** Apply a sequence of trims and stop when the result is short enough. */
function trim(title) {
  let t = title.trim()
  if (t.length <= MAX_TITLE) return t

  // 1. Drop trailing " Software" word from "X Practice Software" → "X Practice"
  //    is too aggressive; instead drop the word "Practice " (keeps "Software").
  t = t.replace(/\bPractice Software\b/g, 'Software')
  if (t.length <= MAX_TITLE) return t

  // 2. Drop a trailing "& <one-or-two-words>" suffix in the last segment,
  //    e.g. "A, B & C" → "A, B" or "A & B" → "A".
  t = t.replace(/\s+&\s+[^|]+$/, '')
  if (t.length <= MAX_TITLE) return t

  // 3. Drop the second comma-segment in the last pipe-segment:
  //    "A | B, C" → "A | B".
  t = t.replace(/(\|[^|]*?),[^|]+$/, '$1')
  if (t.length <= MAX_TITLE) return t

  // 4. Drop the last pipe-segment entirely if there are 3+ segments left.
  const segs = t.split('|')
  if (segs.length >= 3) {
    t = segs.slice(0, -1).join('|').trim()
    if (t.length <= MAX_TITLE) return t
  }

  // 5. Specific patterns for location pages:
  //    "clinIQ for X Private Clinics | Y" → "clinIQ for X | Y"
  t = t.replace(/clinIQ for ([^|]+?) Private Clinics?/i, 'clinIQ for $1')
  t = t.replace(/clinIQ for ([^|]+?) Healthcare (Practices|Clinics?)/i, 'clinIQ for $1')
  t = t.replace(/Patient Flow & Remote Monitoring Software$/i, 'Patient Flow & RTM')
  t = t.replace(/Patient Flow & Remote Monitoring$/i, 'Patient Flow & RTM')
  if (t.length <= MAX_TITLE) return t

  // 6. Hard truncate at the last whole word before MAX_TITLE.
  if (t.length > MAX_TITLE) {
    const sliced = t.slice(0, MAX_TITLE)
    const lastSpace = sliced.lastIndexOf(' ')
    t = lastSpace > 20 ? sliced.slice(0, lastSpace).trimEnd() : sliced
  }
  return t
}

let scanned = 0
let trimmed = 0

for (const root of ROOTS) {
  for (const file of walk(root)) {
    let raw
    try {
      raw = readFileSync(file, 'utf8')
    } catch {
      continue
    }
    let doc
    try {
      doc = JSON.parse(raw)
    } catch {
      continue
    }
    const title = doc?.meta?.title
    if (typeof title !== 'string') continue
    scanned++
    if (title.length + TEMPLATE_SUFFIX.length <= TARGET_FINAL) continue
    const next = trim(title)
    if (next === title) continue
    doc.meta.title = next
    writeFileSync(file, JSON.stringify(doc, null, 2) + '\n', 'utf8')
    trimmed++
    console.log(`${file}\n  before(${title.length}): ${title}\n  after (${next.length}): ${next}\n`)
  }
}

console.log(`scanned ${scanned} files with meta.title; trimmed ${trimmed}`)
