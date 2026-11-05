import Link from 'next/link'
import { FEATURES, SPECIALTIES } from '@/lib/feature-specialty-data'

export default function FeatureSpecialtyDirectory({ featureSlug }: { featureSlug: string }) {
  const feature = FEATURES.find((f) => f.slug === featureSlug)
  if (!feature) return null
  const categories = Array.from(new Set(SPECIALTIES.map((s) => s.category)))
  return (
    <section aria-labelledby="by-specialty" style={{ padding: 'var(--space-section) 0', background: 'var(--bg-primary, #fafaf8)' }}>
      <div className="container">
        <h2 id="by-specialty" style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', marginBottom: '0.5rem' }}>
          {feature.name} by specialty
        </h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
          See how {feature.name} works for your type of practice.
        </p>
        {categories.map((category) => (
          <div key={category} style={{ marginBottom: '1.75rem' }}>
            <h3 style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--teal)', marginBottom: '0.625rem' }}>{category}</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(190px, 1fr))', gap: '0.375rem 1.25rem' }}>
              {SPECIALTIES.filter((s) => s.category === category).map((s) => (
                <li key={s.slug}>
                  <Link href={`/features/${feature.slug}/${s.slug}`} style={{ fontSize: '0.875rem', color: 'var(--text-primary)' }}>
                    {feature.name} for {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
