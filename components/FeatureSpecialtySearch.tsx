'use client'

import { useState, type ReactNode } from 'react'
import Link from 'next/link'
import css from './FeatureSpecialtyDirectory.module.css'

interface Props {
  featureName: string
  featureSlug: string
  items: { slug: string; name: string; category: string }[]
  children: ReactNode
}

export default function FeatureSpecialtySearch({ featureName, featureSlug, items, children }: Props) {
  const [query, setQuery] = useState('')
  const term = query.trim().toLowerCase()
  const matches = term
    ? items.filter((s) => s.name.toLowerCase().includes(term) || s.category.toLowerCase().includes(term))
    : []

  return (
    <>
      <div className={css.header}>
        <div>
          <h2 id="by-specialty" className={css.title}>{featureName} by specialty</h2>
          <p className={css.subtitle}>
            Find your specialty to see how {featureName} works in your kind of practice.
          </p>
        </div>
        <div className={css.searchWrap}>
          <label htmlFor="specialty-search" className={css.srOnly}>Search {items.length} specialties</label>
          <input
            id="specialty-search"
            type="search"
            className={css.search}
            placeholder={`Search ${items.length} specialties`}
            autoComplete="off"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>

      <div hidden={Boolean(term)}>{children}</div>

      {term && (
        <div aria-live="polite">
          {matches.length > 0 ? (
            <ul className={css.results}>
              {matches.map((s) => (
                <li key={s.slug}>
                  <Link href={`/features/${featureSlug}/${s.slug}`} className={css.resultLink}>
                    <span className={css.srOnly}>{featureName} for </span>
                    {s.name}
                    <span className={css.resultCategory}>{s.category}</span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className={css.empty}>
              No specialty matches &ldquo;{query.trim()}&rdquo;.{' '}
              <Link href="/demo" className={css.emptyLink}>Tell us about your practice</Link>
            </p>
          )}
        </div>
      )}
    </>
  )
}
