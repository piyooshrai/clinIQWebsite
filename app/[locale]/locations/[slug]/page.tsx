import { notFound } from 'next/navigation'
import { promises as fs } from 'fs'
import path from 'path'
import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import { renderContent } from '@/lib/renderContent'
import s from '@/app/specialties/specialty-full.module.css'
import css from '@/components/templates/PillarSpecialtyPage.module.css'

// ── Types ─────────────────────────────────────────────────────────────────────

interface LocationStat {
  value: string
  label: string
}

interface LocationSection {
  id: string
  h2: string
  content: string
}

interface SubLocation {
  slug: string
  name: string
  desc: string
}

interface LocationData {
  slug: string
  name: string
  abbr?: string
  region?: string
  meta: {
    title: string
    description: string
  }
  hero: {
    h1: string
    subhead: string
    cities?: string[]
  }
  stats?: LocationStat[]
  sections?: LocationSection[]
  subLocations?: SubLocation[]
  cta?: {
    headline: string
    body: string
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

// ── Content classes ───────────────────────────────────────────────────────────

const contentClasses = {
  contentBlock: css.contentBlock,
  contentP: css.contentP,
  contentUL: css.contentUL,
  contentLI: css.contentLI,
  relatedRef: css.relatedRef,
  inlineLink: css.inlineLink,
}

// ── Specialty links ───────────────────────────────────────────────────────────

const SPECIALTIES = [
  { slug: 'physical-therapy',   name: 'Physical Therapy' },
  { slug: 'orthopedic-surgery', name: 'Orthopedic Surgery' },
  { slug: 'pain-management',    name: 'Pain Management' },
  { slug: 'behavioral-health',  name: 'Behavioral Health' },
  { slug: 'primary-care',       name: 'Primary Care' },
  { slug: 'urgent-care',        name: 'Urgent Care' },
]

// ── Page ──────────────────────────────────────────────────────────────────────

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

  const hasSections = data.sections && data.sections.length > 0
  const hasStats = data.stats && data.stats.length > 0

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

              {/* City pills */}
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

              {/* Stats strip in hero */}
              {hasStats && (
                <div className={css.heroStats} style={{ marginTop: '2rem' }}>
                  {data.stats!.map(({ value, label }) => (
                    <div key={label} className={css.heroStat}>
                      <span className={css.heroStatValue}>{value}</span>
                      <span className={css.heroStatLabel}>{label}</span>
                    </div>
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

        {/* ── CONTENT SECTIONS (rich pages) ── */}
        {hasSections && (
          <div className={css.contentOuter}>
            <div className={css.contentWrapper}>

              {/* Left: sticky TOC */}
              <nav aria-label="Page contents">
                <div className={css.toc}>
                  <span className={css.tocLabel}>On this page</span>
                  <ul className={css.tocList}>
                    {data.sections!.map(({ id, h2 }) => (
                      <li key={id} className={css.tocItem}>
                        <a href={`#${id}`} className={css.tocLink}>{h2}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </nav>

              {/* Right: prose sections */}
              <div className={css.sections}>
                {data.sections!.map((section) => (
                  <section key={section.id} id={section.id} className={css.section}>
                    <h2 className={css.sectionH2}>{section.h2}</h2>
                    <div>{renderContent(section.content, contentClasses)}</div>
                  </section>
                ))}
              </div>

            </div>
          </div>
        )}

        {/* ── SUB-LOCATIONS ── */}
        {data.subLocations && data.subLocations.length > 0 && (
          <section className={s.modules} style={{ background: '#fff' }}>
            <div className={s.container}>
              <div className={s.modulesHeader}>
                <span className={s.sectionLabel}>In this region</span>
                <h2 className={s.sectionTitle}>
                  Locations in<br />
                  <em>{data.name}</em>
                </h2>
              </div>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
                  gap: '12px',
                }}
              >
                {data.subLocations.map((loc) => (
                  <a
                    key={loc.slug}
                    href={`/locations/${loc.slug}`}
                    style={{
                      display: 'block',
                      padding: '1rem 1.25rem',
                      borderRadius: '10px',
                      border: '1px solid rgba(0,0,0,0.07)',
                      textDecoration: 'none',
                      color: 'inherit',
                      background: 'var(--cream, #f5f3ef)',
                      transition: 'border-color 0.15s, box-shadow 0.15s',
                    }}
                  >
                    <span style={{ display: 'block', fontWeight: 600, fontSize: '0.9375rem', color: 'var(--black)', marginBottom: '0.25rem' }}>
                      {loc.name}
                    </span>
                    <span style={{ display: 'block', fontSize: '0.8125rem', color: 'var(--text-secondary, #666)', lineHeight: 1.45 }}>
                      {loc.desc}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── SPECIALTIES ── */}
        <section className={s.modules} style={{ background: 'var(--cream, #f5f3ef)' }}>
          <div className={s.container}>
            <div className={s.modulesHeader}>
              <span className={s.sectionLabel}>Specialties</span>
              <h2 className={s.sectionTitle}>
                Solutions by specialty<br />
                <em>in {data.name}</em>
              </h2>
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

        {/* ── CTA ── */}
        <section className={s.cta}>
          <div className={s.ctaBg}>
            <div className={s.ctaOrb} aria-hidden="true" />
          </div>
          <div className={s.container}>
            <div className={s.ctaContent}>
              <h2 className={s.ctaTitle}>
                {data.cta?.headline ?? `Ready to transform your ${data.name} practice?`}
              </h2>
              <p className={s.ctaDesc}>
                {data.cta?.body ?? 'Live in days. No hardware required. Works with your existing EHR.'}
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
