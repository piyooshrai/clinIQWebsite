import { promises as fs } from 'fs'
import path from 'path'
import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import s from '@/app/specialties/specialty-full.module.css'

export const metadata: Metadata = {
  title: 'Markets We Serve | clinIQ Clinic Operations Platform',
  description:
    'clinIQ adapts to the unique operational needs of FQHCs, rural health clinics, concierge and DPC practices, and ambulatory surgery centers. See how real-time patient flow and RTM billing serve each setting.',
  keywords: [
    'FQHC software',
    'rural health clinic software',
    'concierge practice management',
    'DPC clinic operations',
    'ambulatory surgery center software',
    'clinic operations platform',
  ],
  openGraph: {
    title: 'Markets We Serve | clinIQ',
    description:
      'Real-time patient flow and RTM billing built for the operational realities of each healthcare setting.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://cliniqhealthcare.com/markets',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cliniqhealthcare.com' },
    { '@type': 'ListItem', position: 2, name: 'Markets', item: 'https://cliniqhealthcare.com/markets' },
  ],
}

interface MarketEntry {
  slug: string
  name: string
  meta: { description: string }
  hero: { stats: { value: string; label: string }[] }
}

async function getAllMarkets(): Promise<MarketEntry[]> {
  const marketsDir = path.join(process.cwd(), 'content', 'markets')
  const files = await fs.readdir(marketsDir)
  const entries = await Promise.all(
    files
      .filter((f) => f.endsWith('.json'))
      .map(async (f) => {
        const raw = await fs.readFile(path.join(marketsDir, f), 'utf-8')
        return JSON.parse(raw) as MarketEntry
      }),
  )
  return entries
}

// Canonical order for display
const ORDER = [
  'fqhc-community-health',
  'rural-health',
  'concierge-dpc',
  'ambulatory-surgery-centers',
]

export default async function MarketsPage() {
  const markets = await getAllMarkets()
  const sorted = ORDER.map((slug) => markets.find((m) => m.slug === slug)).filter(Boolean) as MarketEntry[]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
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
              <div className={s.badge}>Markets</div>
              <h1 className={s.heroTitle}>
                Built for how<br />
                <em>your setting actually works.</em>
              </h1>
              <p className={s.heroSubtitle}>
                An FQHC running sliding-scale visits and an ambulatory surgery center
                managing pre-op flow have different operational realities. clinIQ adapts
                to both — real-time patient flow, RTM billing, and pre-authorization
                built for the constraints of each care setting.
              </p>
            </div>
          </div>
        </section>

        {/* ── MARKET CARDS ── */}
        <section className={s.modules} style={{ background: 'var(--cream, #f5f3ef)' }}>
          <div className={s.container}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                gap: '20px',
              }}
            >
              {sorted.map((market) => (
                <a
                  key={market.slug}
                  href={`/markets/${market.slug}`}
                  className={s.moduleCard}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <h2 className={s.moduleTitle} style={{ fontSize: '18px' }}>
                    {market.name}
                  </h2>
                  <p className={s.moduleDesc} style={{ fontSize: '15px' }}>
                    {market.meta.description}
                  </p>
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '1.5rem',
                      marginTop: '1.25rem',
                      marginBottom: '0.5rem',
                    }}
                  >
                    {market.hero.stats.slice(0, 2).map((stat) => (
                      <div key={stat.label}>
                        <span
                          style={{
                            display: 'block',
                            fontWeight: 700,
                            fontSize: '1.25rem',
                            color: 'var(--teal)',
                          }}
                        >
                          {stat.value}
                        </span>
                        <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                          {stat.label}
                        </span>
                      </div>
                    ))}
                  </div>
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '14px',
                      fontWeight: 500,
                      color: 'var(--teal)',
                      marginTop: '8px',
                    }}
                  >
                    Full guide
                    <svg width="12" height="12" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                      <path d="M4 10h12m-4-4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className={s.cta}>
          <div className={s.ctaBg}><div className={s.ctaOrb} aria-hidden="true" /></div>
          <div className={s.container}>
            <div className={s.ctaContent}>
              <h2 className={s.ctaTitle}>
                Not sure which guide fits<br />
                <em>your practice?</em>
              </h2>
              <p className={s.ctaDesc}>
                Book a demo and we will walk through how clinIQ applies to your specific
                care setting, patient volume, and EHR.
              </p>
              <div className={s.ctaActions}>
                <a href="/demo" className={s.btnPrimary}>
                  Book a Demo
                  <svg className={s.btnIcon} viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M4 10h12m-4-4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a href="/specialties" className={s.btnGhost}>Browse by Specialty</a>
              </div>
            </div>
          </div>
        </section>

      </main>
      <FooterInner />
    </>
  )
}
