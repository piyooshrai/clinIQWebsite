import Link from 'next/link'
import { FEATURES, SPECIALTIES } from '@/lib/feature-specialty-data'
import FeatureSpecialtySearch from './FeatureSpecialtySearch'
import css from './FeatureSpecialtyDirectory.module.css'

export default function FeatureSpecialtyDirectory({ featureSlug }: { featureSlug: string }) {
  const feature = FEATURES.find((f) => f.slug === featureSlug)
  if (!feature) return null

  const categories = Array.from(new Set(SPECIALTIES.map((s) => s.category)))
  const midpoint = Math.ceil(categories.length / 2)
  // Two fixed stacks, so opening a category never moves the other column.
  const columns = [categories.slice(0, midpoint), categories.slice(midpoint)]
  const items = SPECIALTIES.map(({ slug, name, category }) => ({ slug, name, category }))

  return (
    <section aria-labelledby="by-specialty" className={css.section}>
      <div className="container">
        <FeatureSpecialtySearch featureName={feature.name} featureSlug={feature.slug} items={items}>
          <div className={css.columns}>
            {columns.map((column, columnIndex) => (
              <div key={columnIndex} className={css.column}>
                {column.map((category) => {
                  const specialties = SPECIALTIES.filter((s) => s.category === category)
                  return (
                    <details key={category} className={css.category}>
                      <summary className={css.summary}>
                        <h3 className={css.categoryName}>{category}</h3>
                        <span className={css.count}>{specialties.length}</span>
                      </summary>
                      <ul className={css.links}>
                        {specialties.map((s) => (
                          <li key={s.slug}>
                            <Link href={`/features/${feature.slug}/${s.slug}`} className={css.link}>
                              <span className={css.srOnly}>{feature.name} for </span>
                              {s.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </details>
                  )
                })}
              </div>
            ))}
          </div>
        </FeatureSpecialtySearch>
      </div>
    </section>
  )
}
