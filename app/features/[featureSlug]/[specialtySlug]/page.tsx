import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import { getAllParams, getPageData } from '@/lib/feature-specialty-data'
import { isIndexedFeatureSpecialty } from '@/lib/indexed-feature-pages'
import { getFeatureSpecialtyContent } from '@/lib/feature-specialty-content'
import { renderInline } from '@/lib/renderContent'
import FAQSection from '@/components/FAQSection'
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
  const extra = getFeatureSpecialtyContent(params.featureSlug, params.specialtySlug)
  return {
    title: extra?.metaTitle ?? data.metaTitle,
    description: extra?.metaDescription ?? data.metaDescription,
    alternates: {
      canonical: `/features/${params.featureSlug}/${params.specialtySlug}`,
    },
    // Thin combinations stay live for visitors but out of Google's index.
    ...(isIndexedFeatureSpecialty(params.featureSlug, params.specialtySlug)
      ? {}
      : { robots: { index: false, follow: true } }),
  }
}

export default function FeatureSpecialtyPage({
  params,
}: {
  params: { featureSlug: string; specialtySlug: string }
}) {
  const base = getPageData(params.featureSlug, params.specialtySlug)
  if (!base) notFound()
  const extra = getFeatureSpecialtyContent(params.featureSlug, params.specialtySlug)
  const data = extra
    ? {
        ...base,
        h1: extra.h1,
        metaDescription: extra.metaDescription,
        problemHeading: extra.problemHeading,
        problemStatement: extra.problemStatement,
        solutionHeading: extra.solutionHeading,
        solutionStatement: extra.solutionStatement,
      }
    : base

  const schemaOrg = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: data.breadcrumbs.map((bc, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: bc.label,
          item: `https://www.cliniqhealthcare.com${bc.href}`,
        })),
      },
      {
        '@type': 'Service',
        name: `clinIQ ${data.featureName} for ${data.specialtyName}`,
        description: data.metaDescription,
        provider: {
          '@type': 'Organization',
          name: 'clinIQ',
          url: 'https://www.cliniqhealthcare.com',
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
            <p className={styles.subtitle}>{extra?.subtitle ?? data.metaDescription}</p>

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
              <p className={styles.colBody}>{renderInline(data.problemStatement, styles.inlineLink)}</p>
            </div>
            <div className={`${styles.col} ${styles.colSolution}`}>
              <div className={`${styles.colLabel} ${styles.colLabelTeal}`}>The Solution</div>
              <h2 className={styles.colHeading}>{data.solutionHeading}</h2>
              <p className={styles.colBody}>{renderInline(data.solutionStatement, styles.inlineLink)}</p>
            </div>
          </div>
        </section>

        {extra && (
          <>
            <section className={styles.detail}>
              <div className={styles.detailInner}>
                <h2 className={styles.detailH2}>{extra.workflow.h2}</h2>
                <p className={styles.detailIntro}>{renderInline(extra.workflow.intro, styles.inlineLink)}</p>
                <ol className={styles.steps}>
                  {extra.workflow.steps.map((step, i) => (
                    <li key={step.title} className={styles.step}>
                      <span className={styles.stepNum} aria-hidden="true">{i + 1}</span>
                      <div>
                        <h3 className={styles.stepTitle}>{step.title}</h3>
                        <p className={styles.stepBody}>{renderInline(step.body, styles.inlineLink)}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </section>

            <section className={`${styles.detail} ${styles.detailAlt}`}>
              <div className={styles.detailInner}>
                <h2 className={styles.detailH2}>{extra.capabilities.h2}</h2>
                <div className={styles.capGrid}>
                  {extra.capabilities.items.map((item) => (
                    <div key={item.title} className={styles.capCard}>
                      <h3 className={styles.capTitle}>{item.title}</h3>
                      <p className={styles.capBody}>{renderInline(item.body, styles.inlineLink)}</p>
                    </div>
                  ))}
                </div>
                <div className={styles.midCta}>
                  <Link
                    href="/demo"
                    className={styles.btnPrimary}
                    data-cta-location={`feature_specialty:${params.featureSlug}/${params.specialtySlug}`}
                  >
                    See it for {data.specialtyName}
                  </Link>
                </div>
              </div>
            </section>

            <FAQSection
              headline={`${data.featureName} for ${data.specialtyName}: FAQs`}
              items={extra.faqs.map((f) => ({ question: f.q, answer: f.a }))}
            />

            {extra.related.length > 0 && (
              <section className={styles.detail}>
                <div className={styles.detailInner}>
                  <h2 className={styles.detailH2}>Related guides</h2>
                  <ul className={styles.relatedList}>
                    {extra.related.map((r) => (
                      <li key={r.href}>
                        <Link href={r.href} className={styles.relatedLink}>{r.title} →</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}
          </>
        )}

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
