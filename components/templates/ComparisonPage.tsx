import type { ReactNode } from 'react'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import ComparisonHero from '@/components/ComparisonHero'
import ComparisonTable from '@/components/ComparisonTable'
import ComparisonDifferences from '@/components/ComparisonDifferences'
import ComparisonCTA from '@/components/ComparisonCTA'
import type { TableRow } from '@/components/ComparisonTable'
import type { Difference } from '@/components/ComparisonDifferences'
import styles from './ComparisonPage.module.css'

export interface ComparisonPageProps {
  competitor: string
  competitorSlug: string
  title: string
  subtitle: string
  targetTerms?: string[]
  tableRows: TableRow[]
  differences: [Difference, Difference, Difference]
  ctaLabel?: string
  ctaDescription?: string
}

export default function ComparisonPage({
  competitor,
  competitorSlug,
  title,
  subtitle,
  targetTerms,
  tableRows,
  differences,
  ctaLabel,
  ctaDescription,
}: ComparisonPageProps) {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cliniqhealthcare.com' },
      { '@type': 'ListItem', position: 2, name: 'Compare', item: 'https://cliniqhealthcare.com/compare' },
      {
        '@type': 'ListItem',
        position: 3,
        name: `clinIQ vs ${competitor}`,
        item: `https://cliniqhealthcare.com/compare/${competitorSlug}`,
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <NavInner />
      <main>
        <div className={styles.breadcrumbBar}>
          <div className="container">
            <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
              <a href="/">Home</a>
              <span aria-hidden="true">/</span>
              <a href="/compare">Compare</a>
              <span aria-hidden="true">/</span>
              <span aria-current="page">clinIQ vs {competitor}</span>
            </nav>
          </div>
        </div>
        <ComparisonHero
          competitor={competitor}
          title={title}
          subtitle={subtitle}
          targetTerms={targetTerms}
        />
        <ComparisonTable competitorName={competitor} rows={tableRows} />
        <ComparisonDifferences differences={differences} />
        <ComparisonCTA
          ctaLabel={ctaLabel ?? `See Why clinIQ Beats ${competitor}`}
          description={ctaDescription}
        />
      </main>
      <FooterInner />
    </>
  )
}
