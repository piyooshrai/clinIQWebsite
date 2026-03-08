import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import { getAllParams, getPageData } from '@/lib/feature-specialty-data'
import styles from './page.module.css'

// ─── Static generation — all 840 pages built at Vercel deploy time ────────────
export function generateStaticParams() {
  return getAllParams()
}

export async function generateMetadata({
  params,
}: {
  params: { featureSlug: string; specialtySlug: string }
}): Promise<Metadata> {
  const data = getPageData(params.featureSlug, params.specialtySlug)
  if (!data) return {}
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: {
      canonical: `/features/${params.featureSlug}/${params.specialtySlug}`,
    },
  }
}

export default function FeatureSpecialtyPage({
  params,
}: {
  params: { featureSlug: string; specialtySlug: string }
}) {
  const data = getPageData(params.featureSlug, params.specialtySlug)
  if (!data) notFound()

  const schemaOrg = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: data.breadcrumbs.map((bc, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: bc.label,
          item: `https://cliniq.health${bc.href}`,
        })),
      },
      {
        '@type': 'Service',
        name: `clinIQ ${data.featureName} for ${data.specialtyName}`,
        description: data.metaDescription,
        provider: {
          '@type': 'Organization',
          name: 'clinIQ',
          url: 'https://cliniq.health',
        },
        serviceType: data.featureName,
        areaServed: 'Worldwide',
        audience: {
          '@type': 'Audience',
          audienceType: `${data.specialtyName} clinic`,
        },
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />
      <NavInner />
      <main>
        {/* ── Hero ── */}
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            {/* Breadcrumb */}
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              {data.breadcrumbs.map((bc, i) => (
                <span key={bc.href} className={styles.breadcrumbItem}>
                  {i < data.breadcrumbs.length - 1 ? (
                    <>
                      <Link href={bc.href} className={styles.breadcrumbLink}>{bc.label}</Link>
                      <span className={styles.breadcrumbSep} aria-hidden="true">/</span>
                    </>
                  ) : (
                    <span className={styles.breadcrumbCurrent} aria-current="page">{bc.label}</span>
                  )}
                </span>
              ))}
            </nav>

            {/* Dual badges */}
            <div className={styles.badges}>
              <Link href={`/features/${data.featureSlug}`} className={styles.badge}>
                {data.featureName}
              </Link>
              <span className={styles.badgeSep}>×</span>
              <Link href={`/specialties/${data.specialtySlug}`} className={styles.badge}>
                {data.specialtyName}
              </Link>
            </div>

            <h1 className={styles.h1}>{data.h1}</h1>
            <p className={styles.subtitle}>{data.metaDescription}</p>

            <div className={styles.heroCta}>
              <Link href="/demo" className={styles.btnPrimary}>Request Demo</Link>
              <Link href={`/features/${data.featureSlug}`} className={styles.btnGhost}>
                Learn about {data.featureName} →
              </Link>
            </div>
          </div>
        </section>

        {/* ── Problem / Solution ── */}
        <section className={styles.twoCols}>
          <div className={styles.twoColsInner}>
            <div className={styles.col}>
              <div className={styles.colLabel}>The Problem</div>
              <h2 className={styles.colHeading}>{data.problemHeading}</h2>
              <p className={styles.colBody}>{data.problemStatement}</p>
            </div>
            <div className={`${styles.col} ${styles.colSolution}`}>
              <div className={`${styles.colLabel} ${styles.colLabelTeal}`}>The Solution</div>
              <h2 className={styles.colHeading}>{data.solutionHeading}</h2>
              <p className={styles.colBody}>{data.solutionStatement}</p>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaInner}>
            <h2 className={styles.ctaHeading}>
              Ready to fix {data.featureName.toLowerCase()} in your {data.specialtyName} practice?
            </h2>
            <p className={styles.ctaBody}>
              Get a live demo tailored to {data.specialtyName} workflows. No generic sales deck — just your clinic, in real time.
            </p>
            <Link href="/demo" className={styles.ctaBtnPrimary}>Request Demo</Link>
          </div>
        </section>
      </main>
      <FooterInner />
    </>
  )
}
