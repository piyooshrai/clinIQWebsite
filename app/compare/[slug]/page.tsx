import { notFound } from 'next/navigation'
import { promises as fs } from 'fs'
import path from 'path'
import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import FaqAccordion from '@/components/FaqAccordion'
import { renderContent } from '@/lib/renderContent'
import s from '@/app/specialties/specialty-full.module.css'
import css from '@/components/templates/PillarSpecialtyPage.module.css'

// ── Types ─────────────────────────────────────────────────────────────────────

interface CompareStat {
  value: string
  label: string
}

interface TocItem {
  id: string
  title: string
}

interface CompareSection {
  id: string
  h2: string
  content: string
}

interface CompareFaq {
  q: string
  a: string
}

interface RelatedItem {
  slug: string
  title: string
}

interface CompareData {
  slug: string
  name: string
  publishDate?: string
  pageType: string
  meta: {
    title: string
    description: string
    keywords: string[]
  }
  hero: {
    h1: string
    subhead: string
    stats: CompareStat[]
  }
  gatedContent: {
    title: string
    description: string
    format: string
    placeholder: boolean
  }
  tableOfContents: TocItem[]
  sections: CompareSection[]
  faqs: CompareFaq[]
  relatedContent: {
    features: RelatedItem[]
    specialties: RelatedItem[]
    competitors: RelatedItem[]
  }
}

// ── Static slugs ──────────────────────────────────────────────────────────────

const SLUGS = [
  'phreesia',
  'clearwave',
  'athenahealth',
  'eclinicalworks',
  'simplepractice',
  'nextgen',
  'advancedmd',
  'tebra',
  'qless',
  'waitwhile',
  'spreadsheets',
  'whiteboards',
  'paper-signin',
  'ehr-only',
  'generic-scheduling',
]

// ── Data loader ───────────────────────────────────────────────────────────────

async function getData(slug: string): Promise<CompareData | null> {
  try {
    const filePath = path.join(process.cwd(), 'content', 'compare', `${slug}.json`)
    const raw = await fs.readFile(filePath, 'utf-8')
    return JSON.parse(raw) as CompareData
  } catch {
    return null
  }
}

// ── Static generation ─────────────────────────────────────────────────────────

export function generateStaticParams() {
  return SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const data = await getData(params.slug)
  if (!data) return {}
  const url = `https://cliniqhealthcare.com/compare/${data.slug}`
  return {
    title: data.meta.title,
    description: data.meta.description,
    keywords: data.meta.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: data.meta.title,
      description: data.meta.description,
      type: 'article',
      url,
      ...(data.publishDate ? { publishedTime: data.publishDate } : {}),
    },
  }
}

// ── Content classes for renderContent ─────────────────────────────────────────

const contentClasses = {
  contentBlock: css.contentBlock,
  contentP: css.contentP,
  contentUL: css.contentUL,
  contentLI: css.contentLI,
  relatedRef: css.relatedRef,
  inlineLink: css.inlineLink,
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default async function CompareSlugPage({
  params,
}: {
  params: { slug: string }
}) {
  const data = await getData(params.slug)
  if (!data) notFound()

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cliniqhealthcare.com' },
      { '@type': 'ListItem', position: 2, name: 'Compare', item: 'https://cliniqhealthcare.com/compare' },
      { '@type': 'ListItem', position: 3, name: data.name, item: `https://cliniqhealthcare.com/compare/${data.slug}` },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  // Build flat related content list for cards
  const relatedCards = [
    ...data.relatedContent.features.map((r) => ({
      type: 'Feature',
      title: r.title,
      href: `/features/${r.slug}`,
    })),
    ...data.relatedContent.specialties.map((r) => ({
      type: 'Specialty',
      title: r.title,
      href: `/specialties/${r.slug}`,
    })),
    ...data.relatedContent.competitors.map((r) => ({
      type: 'Comparison',
      title: r.title,
      href: `/compare/${r.slug}`,
    })),
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <NavInner />
      <main id="main-content">

        {/* ── HERO ── */}
        <section className={s.hero}>
          <div className={s.heroBg}>
            <div className={`${s.heroOrb} ${s.heroOrbTeal}`} />
            <div className={`${s.heroOrb} ${s.heroOrbBlue}`} />
            <div className={s.heroGrain} />
          </div>
          <div className={s.container}>
            <div className={s.heroContent}>
              <div className={s.badge}>Comparison</div>
              <h1 className={s.heroTitle}>{data.hero.h1}</h1>
              <p className={s.heroSubtitle}>{data.hero.subhead}</p>
              <div className={css.heroStats}>
                {data.hero.stats.map(({ value, label }) => (
                  <div key={label} className={css.heroStat}>
                    <span className={css.heroStatValue}>{value}</span>
                    <span className={css.heroStatLabel}>{label}</span>
                  </div>
                ))}
              </div>
              <div className={s.heroActions}>
                <a href="/demo" className={s.btnPrimary}>
                  See clinIQ Live
                  <svg className={s.btnIcon} viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M4 10h12m-4-4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a href="/compare" className={s.btnGhost}>All Comparisons</a>
              </div>
            </div>
          </div>
        </section>

        {/* ── CONTENT (TOC + SECTIONS) ── */}
        <div className={css.contentOuter}>
          <div className={css.contentWrapper}>

            {/* Left: sticky TOC */}
            <nav aria-label="Page contents">
              <div className={css.toc}>
                <span className={css.tocLabel}>In this comparison</span>
                <ul className={css.tocList}>
                  {data.tableOfContents.map(({ id, title }) => (
                    <li key={id} className={css.tocItem}>
                      <a href={`#${id}`} className={css.tocLink}>{title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>

            {/* Right: content sections */}
            <div className={css.sections}>
              {data.sections.map((section) => (
                <section key={section.id} id={section.id} className={css.section}>
                  <h2 className={css.sectionH2}>{section.h2}</h2>
                  <div>{renderContent(section.content, contentClasses)}</div>
                </section>
              ))}
            </div>

          </div>
        </div>

        {/* ── RELATED CONTENT ── */}
        {relatedCards.length > 0 && (
          <section className={css.relatedSection}>
            <div className={s.container}>
              <div className={css.relatedHeader}>
                <span className={s.sectionLabel}>Keep Reading</span>
                <h2 className={s.sectionTitle}>Related features &amp; comparisons</h2>
              </div>
              <div className={css.relatedGrid}>
                {relatedCards.map(({ type, title, href }) => (
                  <a key={href} href={href} className={css.relatedCard}>
                    <span className={css.relatedCardType}>{type}</span>
                    <span className={css.relatedCardTitle}>{title}</span>
                    <span className={css.relatedCardArrow} aria-hidden="true">→</span>
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── FAQ ── */}
        <section className={css.faqSection} id="faqs">
          <div className={s.container}>
            <div className={s.faqHeader}>
              <span className={s.sectionLabel}>Common Questions</span>
              <h2 className={s.sectionTitle}>{data.name} — frequently asked</h2>
            </div>
            <FaqAccordion faqs={data.faqs} />
          </div>
        </section>

        {/* ── CTA ── */}
        <section className={s.cta}>
          <div className={s.ctaBg}>
            <div className={s.ctaOrb} aria-hidden="true" />
          </div>
          <div className={s.container}>
            <div className={s.ctaContent}>
              <h2 className={s.ctaTitle}>Ready to see what clinIQ can do?</h2>
              <p className={s.ctaDesc}>
                Live in days. No hardware required. Works with your existing EHR.
              </p>
              <div className={s.ctaActions}>
                <a href="/demo" className={s.btnPrimary}>
                  Book a Demo
                  <svg className={s.btnIcon} viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M4 10h12m-4-4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a href="/pricing" className={s.btnGhost}>See Pricing</a>
              </div>
            </div>
          </div>
        </section>

      </main>
      <FooterInner />
    </>
  )
}
