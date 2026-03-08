import Link from 'next/link'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import styles from './FeatureSpecialtyPage.module.css'

export interface FeatureSpecialtyPageProps {
  featureSlug: string
  featureName: string
  specialtySlug: string
  specialtyName: string
  h1: string
  problemStatement: string
  solutionStatement: string
  ctaLabel?: string
}

function ArrowIcon() {
  return (
    <svg className={styles.btnIcon} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M4 10h12m-4-4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function FeatureSpecialtyPage({
  featureSlug,
  featureName,
  specialtySlug,
  specialtyName,
  h1,
  problemStatement,
  solutionStatement,
  ctaLabel = 'Book a Demo',
}: FeatureSpecialtyPageProps) {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cliniq.com' },
      { '@type': 'ListItem', position: 2, name: 'Features', item: 'https://cliniq.com/features' },
      { '@type': 'ListItem', position: 3, name: featureName, item: `https://cliniq.com/features/${featureSlug}` },
      { '@type': 'ListItem', position: 4, name: specialtyName, item: `https://cliniq.com/features/${featureSlug}/${specialtySlug}` },
    ],
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${featureName} for ${specialtyName} — clinIQ`,
    description: h1,
    provider: { '@type': 'Organization', name: 'clinIQ', url: 'https://cliniq.com' },
    serviceType: 'Healthcare Software',
    areaServed: 'US',
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <NavInner />
      <main>
        <div className={styles.breadcrumbBar}>
          <div className="container">
            <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
              <a href="/">Home</a>
              <span aria-hidden="true">/</span>
              <a href="/features">Features</a>
              <span aria-hidden="true">/</span>
              <a href={`/features/${featureSlug}`}>{featureName}</a>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{specialtyName}</span>
            </nav>
          </div>
        </div>

        <section className={styles.hero}>
          <div className={styles.heroBg}>
            <div className={styles.heroOrbTeal} />
            <div className={styles.heroOrbBlue} />
            <div className={styles.heroGrain} />
          </div>
          <div className="container">
            <div className={styles.heroContent}>
              <div className={styles.badges}>
                <span className={styles.badge}>{featureName}</span>
                <span className={styles.badgeSep} aria-hidden="true">×</span>
                <span className={styles.badge}>{specialtyName}</span>
              </div>
              <h1 className={styles.heroTitle}>{h1}</h1>
              <div className={styles.heroActions}>
                <Link href="/demo" className={styles.btnPrimary}>
                  Book a Demo <ArrowIcon />
                </Link>
                <Link href={`/features/${featureSlug}`} className={styles.btnGhost}>
                  About {featureName}
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.problem}>
          <div className="container">
            <div className={styles.twoCol}>
              <div className={styles.colLabel}>
                <span className={styles.sectionTag}>The Problem</span>
              </div>
              <div className={styles.colContent}>
                <p className={styles.statement}>{problemStatement}</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.solution}>
          <div className="container">
            <div className={styles.twoCol}>
              <div className={styles.colLabel}>
                <span className={styles.sectionTag}>The Solution</span>
              </div>
              <div className={styles.colContent}>
                <p className={styles.statement}>{solutionStatement}</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.cta}>
          <div className="container">
            <div className={styles.ctaInner}>
              <h2 className={styles.ctaTitle}>
                See {featureName} for {specialtyName} in action.
              </h2>
              <p className={styles.ctaBody}>
                15-minute demo. We&apos;ll configure it for your {specialtyName.toLowerCase()} workflow. No pitch deck, no pressure.
              </p>
              <Link href="/demo" className={styles.ctaBtn}>
                {ctaLabel} <ArrowIcon />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <FooterInner />
    </>
  )
}
