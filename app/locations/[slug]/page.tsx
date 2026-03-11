import { notFound } from 'next/navigation'
import { promises as fs } from 'fs'
import path from 'path'
import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import s from '@/app/specialties/specialty-full.module.css'

// ── Types ─────────────────────────────────────────────────────────────────────

interface LocationData {
  slug: string
  name: string
  abbr?: string
  meta: {
    title: string
    description: string
  }
  hero: {
    h1: string
    subhead: string
    cities?: string[]
  }
}

// ── Data loader ───────────────────────────────────────────────────────────────

async function getData(slug: string): Promise<LocationData | null> {
  try {
    const filePath = path.join(process.cwd(), 'data', 'locations', `${slug}.json`)
    const raw = await fs.readFile(filePath, 'utf-8')
    return JSON.parse(raw) as LocationData
  } catch {
    return null
  }
}

// ── Static generation ─────────────────────────────────────────────────────────

export async function generateStaticParams() {
  const dir = path.join(process.cwd(), 'data', 'locations')
  const files = await fs.readdir(dir)
  return files
    .filter((f) => f.endsWith('.json'))
    .map((f) => ({ slug: f.replace('.json', '') }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const data = await getData(params.slug)
  if (!data) return {}
  return {
    title: data.meta.title,
    description: data.meta.description,
    alternates: { canonical: `https://cliniqhealthcare.com/locations/${data.slug}` },
    openGraph: {
      title: data.meta.title,
      description: data.meta.description,
      type: 'website',
    },
  }
}

// ── Page ──────────────────────────────────────────────────────────────────────

const SPECIALTIES = [
  { slug: 'primary-care',       name: 'Primary Care' },
  { slug: 'orthopedic-surgery', name: 'Orthopedic Surgery' },
  { slug: 'pain-management',    name: 'Pain Management' },
  { slug: 'physical-therapy',   name: 'Physical Therapy' },
  { slug: 'behavioral-health',  name: 'Behavioral Health' },
  { slug: 'cardiology',         name: 'Cardiology' },
  { slug: 'urgent-care',        name: 'Urgent Care' },
  { slug: 'spine-surgery',      name: 'Spine Surgery' },
]

const FEATURES = [
  { slug: 'patient-flow',      name: 'Patient Flow',       desc: 'Real-time queue tracking' },
  { slug: 'check-in',          name: 'Patient Check-In',   desc: 'Digital intake & verification' },
  { slug: 'rtm',               name: 'RTM Billing',        desc: 'CPT 98975–98981 automation' },
  { slug: 'pre-auth',          name: 'Pre-Authorization',  desc: 'Payer approval workflows' },
  { slug: 'scheduling',        name: 'Scheduling',         desc: 'Multi-provider calendar' },
  { slug: 'telehealth',        name: 'Telehealth',         desc: 'Virtual visit workflows' },
  { slug: 'secure-messaging',  name: 'Secure Messaging',   desc: 'HIPAA-compliant messaging' },
  { slug: 'analytics',         name: 'Analytics',          desc: 'Bottleneck detection' },
]

export default async function LocationSlugPage({
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
      { '@type': 'ListItem', position: 1, name: 'Home',      item: 'https://cliniqhealthcare.com' },
      { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://cliniqhealthcare.com/locations' },
      { '@type': 'ListItem', position: 3, name: data.name,   item: `https://cliniqhealthcare.com/locations/${data.slug}` },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
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
              <div className={s.badge}>
                {data.abbr ? `${data.abbr} · Locations` : 'Locations'}
              </div>
              <h1 className={s.heroTitle}>{data.hero.h1}</h1>
              <p className={s.heroSubtitle}>{data.hero.subhead}</p>
              {data.hero.cities && data.hero.cities.length > 0 && (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1.5rem' }}>
                  {data.hero.cities.map((city) => (
                    <span
                      key={city}
                      style={{
                        fontSize: '0.8125rem',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '999px',
                        background: 'rgba(255,255,255,0.08)',
                        border: '1px solid rgba(255,255,255,0.15)',
                        color: 'rgba(255,255,255,0.75)',
                      }}
                    >
                      {city}
                    </span>
                  ))}
                </div>
              )}
              <div className={s.heroActions}>
                <a href="/demo" className={s.btnPrimary}>
                  Schedule a Demo
                  <svg className={s.btnIcon} viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M4 10h12m-4-4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a href="/locations" className={s.btnGhost}>All Locations</a>
              </div>
            </div>
          </div>
        </section>

        {/* ── SPECIALTIES ── */}
        <section className={s.modules} style={{ background: 'var(--cream, #f5f3ef)' }}>
          <div className={s.container}>
            <div className={s.modulesHeader}>
              <span className={s.sectionLabel}>Specialties</span>
              <h2 className={s.sectionTitle}>
                Solutions by specialty<br />
                <em>in {data.name}</em>
              </h2>
              <p className={s.sectionDesc}>
                clinIQ adapts to the clinical and operational workflows of every major specialty.
              </p>
            </div>
            <div className={s.modulesGrid}>
              {SPECIALTIES.map((spec) => (
                <a
                  key={spec.slug}
                  href={`/specialties/${spec.slug}`}
                  className={s.moduleCard}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <h3 className={s.moduleTitle}>{spec.name}</h3>
                  <span className={s.moduleLink}>
                    View workflows
                    <svg width="12" height="12" viewBox="0 0 20 20" fill="none" aria-hidden="true" style={{ display: 'inline', marginLeft: '4px' }}>
                      <path d="M4 10h12m-4-4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── FEATURES ── */}
        <section className={s.modules} style={{ background: 'var(--white)' }}>
          <div className={s.container}>
            <div className={s.modulesHeader}>
              <span className={s.sectionLabel}>Platform</span>
              <h2 className={s.sectionTitle}>
                Every tool your clinic needs<br />
                <em>in one platform.</em>
              </h2>
            </div>
            <div className={s.modulesGrid}>
              {FEATURES.map((feat) => (
                <a
                  key={feat.slug}
                  href={`/features/${feat.slug}`}
                  className={s.moduleCard}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <h3 className={s.moduleTitle}>{feat.name}</h3>
                  <p className={s.moduleDesc}>{feat.desc}</p>
                  <span className={s.moduleLink}>
                    Learn more
                    <svg width="12" height="12" viewBox="0 0 20 20" fill="none" aria-hidden="true" style={{ display: 'inline', marginLeft: '4px' }}>
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
          <div className={s.ctaBg}>
            <div className={s.ctaOrb} aria-hidden="true" />
          </div>
          <div className={s.container}>
            <div className={s.ctaContent}>
              <h2 className={s.ctaTitle}>
                Ready to transform your<br />
                <em>{data.name} practice?</em>
              </h2>
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
