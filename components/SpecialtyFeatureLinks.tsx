import { FEATURES, SPECIALTIES } from '@/lib/feature-specialty-data'
import { INDEXED_FEATURE_SPECIALTY_PAGES } from '@/lib/indexed-feature-pages'
import styles from './SpecialtyFeatureLinks.module.css'

/**
 * Pillar specialty slug -> feature x specialty slugs that belong on that page.
 * Only indexed combinations are linked (see lib/indexed-feature-pages.ts).
 */
const RELATED: Record<string, string[]> = {
  'ob-gyn': ['obstetrics-gynecology'],
  oncology: ['medical-oncology'],
  cardiology: ['preventive-cardiology'],
  psychiatry: ['mental-health'],
  'behavioral-health': ['behavioral-health', 'mental-health'],
  'physical-therapy': ['occupational-therapy', 'vestibular-therapy'],
  'oral-surgery': ['dentistry', 'orthodontics'],
}

export function getSpecialtyFeatureLinks(pillarSlug: string) {
  const targets = RELATED[pillarSlug] ?? [pillarSlug]
  const links: { href: string; label: string }[] = []
  for (const key of Array.from(INDEXED_FEATURE_SPECIALTY_PAGES)) {
    const [featureSlug, specialtySlug] = key.split('/')
    if (!targets.includes(specialtySlug)) continue
    const feature = FEATURES.find((f) => f.slug === featureSlug)
    const specialty = SPECIALTIES.find((s) => s.slug === specialtySlug)
    if (!feature || !specialty) continue
    links.push({ href: `/features/${key}`, label: `${feature.name} for ${specialty.name}` })
  }
  return links
}

export default function SpecialtyFeatureLinks({ slug, name }: { slug: string; name: string }) {
  const links = getSpecialtyFeatureLinks(slug)
  if (links.length === 0) return null
  return (
    <section className={styles.section} aria-labelledby="specialty-feature-links">
      <div className="container">
        <h2 id="specialty-feature-links" className={styles.title}>clinIQ features for {name}</h2>
        <ul className={styles.list}>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href}>
                {l.label}
                <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" width="14" height="14">
                  <path d="M4 10h12m-4-4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
