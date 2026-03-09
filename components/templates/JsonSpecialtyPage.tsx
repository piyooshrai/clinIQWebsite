import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import FaqAccordion from '@/components/FaqAccordion'
import s from '@/app/specialties/specialty-full.module.css'
import css from './JsonSpecialtyPage.module.css'

// ── Types ────────────────────────────────────────────────────────────────────

interface SpecialtySection {
  id: string
  h2: string
  content: string
}

interface SpecialtyData {
  slug: string
  name: string
  meta: { title: string; description: string }
  hero: { h1: string; subhead: string }
  sections: SpecialtySection[]
  workflow: { stages: string[]; note: string }
  features: string[]
  pricing: {
    show: boolean
    starter: string
    professional: string
    implementation: string
    integration: string
  }
  faqs: { q: string; a: string }[]
  cta: {
    headline: string
    subhead: string
    primaryButton: { label: string; href: string }
    secondaryButton: { label: string; href: string }
  }
  proof: {
    stats: { value: string; label: string }[]
    testimonial: { quote: string; attribution: string; location: string }
  }
  resource: { title: string; description: string; href: string }
}

// ── Content renderer ─────────────────────────────────────────────────────────
// Converts newline-delimited text into paragraphs and bullet lists.
// • Double newline (\n\n) = new block
// • Lines starting with • = bullet item
// • Everything else = paragraph text

function renderContent(content: string) {
  const blocks = content.split('\n\n')
  return blocks.map((block, blockIdx) => {
    const lines = block.split('\n')
    const bulletLines = lines.filter((l) => l.trimStart().startsWith('•'))
    const textLines = lines.filter((l) => !l.trimStart().startsWith('•'))

    if (bulletLines.length > 0) {
      const introText = textLines.join(' ').trim()
      return (
        <div key={blockIdx} className={css.contentBlock}>
          {introText && <p className={css.contentP}>{introText}</p>}
          <ul className={css.contentUL}>
            {bulletLines.map((bullet, j) => (
              <li key={j} className={css.contentLI}>
                {bullet.replace(/^[•\s]+/, '')}
              </li>
            ))}
          </ul>
        </div>
      )
    }

    return (
      <p key={blockIdx} className={css.contentP}>
        {block}
      </p>
    )
  })
}

// Stage colours cycle through this palette
const STAGE_COLORS = [
  '#f59e0b',
  '#8b5cf6',
  '#3b82f6',
  '#ef4444',
  '#0d9488',
  '#ec4899',
  '#22c55e',
  '#6366f1',
]

// ── Component ────────────────────────────────────────────────────────────────

export default function JsonSpecialtyPage({ data }: { data: SpecialtyData }) {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cliniq.com' },
      { '@type': 'ListItem', position: 2, name: 'Specialties', item: 'https://cliniq.com/specialties' },
      {
        '@type': 'ListItem',
        position: 3,
        name: data.name,
        item: `https://cliniq.com/specialties/${data.slug}`,
      },
    ],
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `clinIQ for ${data.name} Clinics`,
    description: data.meta.description,
    provider: { '@type': 'Organization', name: 'clinIQ', url: 'https://cliniq.com' },
    serviceType: 'Healthcare Operations Software',
    areaServed: 'US',
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <NavInner />
      <main>

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
              <div className={s.heroActions}>
                <a href={data.cta.primaryButton.href} className={s.btnPrimary}>
                  {data.cta.primaryButton.label}
                  <svg
                    className={s.btnIcon}
                    viewBox="0 0 20 20"
                    fill="none"
                    aria-hidden="true"
                  >
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
                <span className={css.testimonialLoc}>
                  {' '}— {data.proof.testimonial.location}
                </span>
              </figcaption>
            </figure>
          </div>
        </section>

        {/* ── CONTENT SECTIONS ── */}
        {data.sections.map((section, i) => (
          <section
            key={section.id}
            id={section.id}
            className={`${css.contentSection} ${i % 2 !== 0 ? css.contentSectionAlt : ''}`}
          >
            <div className={css.contentInner}>
              <h2 className={css.contentH2}>{section.h2}</h2>
              <div className={css.content}>{renderContent(section.content)}</div>
            </div>
          </section>
        ))}

        {/* ── WORKFLOW ── */}
        <section className={s.workflow}>
          <div className={s.container}>
            <div className={s.workflowHeader}>
              <span className={s.sectionLabel}>Patient Flow</span>
              <h2 className={s.sectionTitle}>How the {data.name} visit flows.</h2>
            </div>
            <div
              className={s.stageRow}
              role="list"
              aria-label={`${data.name} visit flow stages`}
            >
              {data.workflow.stages.map((stage, i, arr) => (
                <span key={stage} style={{ display: 'contents' }}>
                  <span className={s.stage} role="listitem">
                    <span
                      className={s.stageDot}
                      style={{ background: STAGE_COLORS[i % STAGE_COLORS.length] }}
                      aria-hidden="true"
                    />
                    {stage}
                  </span>
                  {i < arr.length - 1 && (
                    <span className={s.stageArrow} aria-hidden="true">
                      →
                    </span>
                  )}
                </span>
              ))}
            </div>
            {data.workflow.note && (
              <div className={s.workflowNote}>{data.workflow.note}</div>
            )}
          </div>
        </section>

        {/* ── PRICING ── */}
        {data.pricing.show && (
          <section className={css.pricing}>
            <div className={s.container}>
              <div className={css.pricingHeader}>
                <span className={s.sectionLabel}>Pricing</span>
                <h2 className={s.sectionTitle}>
                  Simple pricing for {data.name} practices.
                </h2>
              </div>
              <div className={css.pricingGrid}>
                <div className={css.pricingCard}>
                  <span className={css.pricingTier}>Starter</span>
                  <p className={css.pricingDesc}>{data.pricing.starter}</p>
                </div>
                <div className={`${css.pricingCard} ${css.pricingCardHighlight}`}>
                  <span className={css.pricingTier}>Professional</span>
                  <p className={css.pricingDesc}>{data.pricing.professional}</p>
                </div>
                <div className={css.pricingCard}>
                  <span className={css.pricingTier}>Implementation</span>
                  <p className={css.pricingDesc}>{data.pricing.implementation}</p>
                </div>
              </div>
              <p className={css.pricingIntegration}>
                <strong>Integrations:</strong> {data.pricing.integration}
              </p>
            </div>
          </section>
        )}

        {/* ── RESOURCE ── */}
        <section className={css.resourceSection}>
          <div className={s.container}>
            <div className={css.resourceCard}>
              <span className={s.sectionLabel}>Free Resource</span>
              <h3 className={css.resourceTitle}>{data.resource.title}</h3>
              <p className={css.resourceDesc}>{data.resource.description}</p>
              <a href={data.resource.href} className={css.resourceLink}>
                Download the kit
                <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path
                    d="M4 10h12m-4-4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className={css.faqSection}>
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
                  <svg
                    className={s.btnIcon}
                    viewBox="0 0 20 20"
                    fill="none"
                    aria-hidden="true"
                  >
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
