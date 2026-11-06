import { SPECIALTIES as GENERATED } from '@/lib/feature-specialty-data'
import specialtiesTen from '@/data/specialties.json'
import specialtiesTwenty from '@/data/specialties-20-value-first.json'

// Specialty pillar slugs — must match pillarPages keys in app/specialties/[slug]/page.tsx
export const PILLAR_SPECIALTY_SLUGS = [
  'pain-management', 'spine-surgery', 'neurology', 'addiction-medicine', 'urgent-care',
  'psychiatry', 'orthopedic-surgery', 'dermatology', 'cardiology', 'primary-care',
  'pulmonology', 'gastroenterology', 'endocrinology', 'nephrology', 'oncology',
  'ob-gyn', 'pediatrics', 'ent', 'ophthalmology', 'podiatry', 'oral-surgery',
  'infusion-centers', 'allergy', 'neurosurgery', 'sports-medicine', 'physical-therapy',
  'plastic-surgery', 'rheumatology', 'vascular-surgery', 'wound-care', 'general-surgery',
  'chiropractic', 'behavioral-health', 'allergy-immunology',
]

const ACRONYMS: Record<string, string> = { ent: 'ENT', 'ob-gyn': 'OB-GYN', dbt: 'DBT', adhd: 'ADHD' }

function titleCase(slug: string): string {
  if (ACRONYMS[slug]) return ACRONYMS[slug]
  return slug
    .split('-')
    .map((w) => ACRONYMS[w] ?? w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
}

export interface SpecialtyLink {
  slug: string
  name: string
}

/** Every specialty that has a /specialties/[slug] page, in sitemap order. */
export function getAllSpecialties(): SpecialtyLink[] {
  const names = new Map<string, string>()
  for (const s of GENERATED) names.set(s.slug, s.name)
  for (const s of [...(specialtiesTen as { slug: string; name: string }[]), ...(specialtiesTwenty as { slug: string; name: string }[])]) {
    if (s.slug && s.name) names.set(s.slug, s.name)
  }

  const seen = new Set<string>()
  const out: SpecialtyLink[] = []
  const add = (slug: string) => {
    if (!slug || seen.has(slug)) return
    seen.add(slug)
    out.push({ slug, name: names.get(slug) ?? titleCase(slug) })
  }
  PILLAR_SPECIALTY_SLUGS.forEach(add)
  ;(specialtiesTen as { slug: string }[]).forEach((s) => add(s.slug))
  ;(specialtiesTwenty as { slug: string }[]).forEach((s) => add(s.slug))
  GENERATED.forEach((s) => add(s.slug))
  return out
}
