import { renderInline, renderContent } from '@/lib/renderContent'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import FaqAccordion from '@/components/FaqAccordion'
import s from '@/app/specialties/specialty-full.module.css'
import css from './PillarSpecialtyPage.module.css'

// ── Types ─────────────────────────────────────────────────────────────────────

interface PillarSection {
  id: string
  h2: string
  content: string
}

interface TocItem {
  id: string
  title: string
}

interface RelatedItem {
  type: string
  title: string
  href: string
  description: string
}

export interface PillarData {
  slug: string
  name: string
  publishDate?: string
  meta: { title: string; description: string; keywords?: readonly string[] }
  hero: {
    h1: string
    subhead: string
    stats: readonly { value: string; label: string }[]
  }
  tableOfContents: readonly TocItem[]
  sections: readonly PillarSection[]
  faqs: readonly { q: string; a: string }[]
  cta: {
    headline: string
    subhead: string
    primaryButton: { label: string; href: string }
    secondaryButton: { label: string; href: string }
  }
  proof: {
    stats: readonly { value: string; label: string }[]
    testimonial: { quote: string; attribution: string; practice?: string; location: string }
  }
  relatedContent: readonly RelatedItem[]
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function PillarSpecialtyPage({ data }: { data: PillarData }) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  }

  const softwareSchema = data as unknown as {
    schema?: { type: string; applicationCategory: string }
  }

  const articleSchema = data.publishDate
    ? {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: data.meta.title,
        description: data.meta.description,
        datePublished: data.publishDate,
        author: { '@type': 'Organization', name: 'clinIQ' },
        publisher: { '@type': 'Organization', name: 'clinIQ', url: 'https://cliniqhealthcare.com' },
      }
    : null

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {articleSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      )}
      {softwareSchema.schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': softwareSchema.schema.type,
              name: data.meta.title,
              description: data.meta.description,
              applicationCategory: softwareSchema.schema.applicationCategory,
            }),
          }}
        />
      )}

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
              <div className={s.badge}>{data.name}</div>
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
                <a href={data.cta.primaryButton.href} className={s.btnPrimary}>
                  {data.cta.primaryButton.label}
                  <svg className={s.btnIcon} viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path
                      d="M4 10h12m-4-4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <a href={data.cta.secondaryButton.href} className={s.btnGhost}>
                  {data.cta.secondaryButton.label}
                </a>
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
                <span className={css.tocLabel}>In this guide</span>
                <ul className={css.tocList}>
                  {data.tableOfContents.map(({ id, title }) => (
                    <li key={id} className={css.tocItem}>
                      <a href={`#${id}`} className={css.tocLink}>
                        {title}
                      </a>
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
                  <div>{renderContent(section.content, {
                    contentBlock: css.contentBlock,
                    contentP: css.contentP,
                    contentUL: css.contentUL,
                    contentLI: css.contentLI,
                    relatedRef: css.relatedRef,
                    inlineLink: css.inlineLink,
                  })}</div>
                </section>
              ))}
            </div>

          </div>
        </div>

        {/* ── PROOF: STATS + TESTIMONIAL ── */}
        <section className={css.proof}>
          <div className={s.container}>
            <div className={css.proofStats}>
              {data.proof.stats.map(({ value, label }) => (
                <div key={label} className={css.proofStat}>
                  <span className={css.proofValue}>{value}</span>
                  <span className={css.proofLabel}>{label}</span>
                </div>
              ))}
            </div>
            <figure className={css.testimonial}>
              <blockquote className={css.testimonialQuote}>
                &ldquo;{data.proof.testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className={css.testimonialAttr}>
                {data.proof.testimonial.attribution}
                {data.proof.testimonial.practice && (
                  <span className={css.testimonialPractice}>
                    {data.proof.testimonial.practice}
                  </span>
                )}
              </figcaption>
            </figure>
          </div>
        </section>

        {/* ── RELATED CONTENT ── */}
        {data.relatedContent && data.relatedContent.length > 0 && (
          <section className={css.relatedSection}>
            <div className={s.container}>
              <div className={css.relatedHeader}>
                <span className={s.sectionLabel}>Keep Reading</span>
                <h2 className={s.sectionTitle}>Related guides &amp; tools</h2>
              </div>
              <div className={css.relatedGrid}>
                {data.relatedContent.map(({ type, title, href, description }) => (
                  <a key={href} href={href} className={css.relatedCard}>
                    <span className={css.relatedCardType}>{type}</span>
                    <span className={css.relatedCardTitle}>{title}</span>
                    <p className={css.relatedCardDesc}>{description}</p>
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
              <h2 className={s.sectionTitle}>What {data.name} practices ask.</h2>
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
              <h2 className={s.ctaTitle}>{data.cta.headline}</h2>
              <p className={s.ctaDesc}>{data.cta.subhead}</p>
              <div className={s.ctaActions}>
                <a href={data.cta.primaryButton.href} className={s.btnPrimary}>
                  {data.cta.primaryButton.label}
                  <svg className={s.btnIcon} viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path
                      d="M4 10h12m-4-4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <a href={data.cta.secondaryButton.href} className={s.btnGhost}>
                  {data.cta.secondaryButton.label}
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
      <FooterInner />
    </>
  )
}
