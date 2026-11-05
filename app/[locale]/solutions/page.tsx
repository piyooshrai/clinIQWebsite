import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import Link from 'next/link'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import s from '@/app/specialties/specialty-full.module.css'
import { localizeMetadata } from '@/lib/localized-metadata'

const baseMetadata: Metadata = {
  title: 'Who We Serve — clinIQ',
  description:
    'clinIQ adapts to the operational realities of FQHCs, rural health clinics, concierge practices, surgery centers, and 30+ clinical specialties. Find your practice type.',
  alternates: { canonical: 'https://www.cliniqhealthcare.com/solutions' },
  openGraph: {
    title: 'Who We Serve — clinIQ',
    description:
      'clinIQ adapts to the operational realities of FQHCs, rural health clinics, concierge practices, surgery centers, and 30+ clinical specialties. Find your practice type.',
    type: 'website',
    url: 'https://www.cliniqhealthcare.com/solutions',
  },
}

const PRACTICE_TYPES = [
  {
    key: 'fqhc',
    href: '/markets/fqhc-community-health',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 21h18M6 21V7l6-4 6 4v14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 21v-4h6v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 10h6M9 14h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    key: 'rural',
    href: '/markets/rural-health',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 22V12h6v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    key: 'concierge',
    href: '/markets/concierge-dpc',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    key: 'asc',
    href: '/markets/ambulatory-surgery-centers',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

const SPECIALTY_GROUPS = [
  { key: 'behavioral', slugs: ['addiction-medicine', 'psychiatry', 'behavioral-health'] },
  { key: 'pain', slugs: ['pain-management', 'physical-therapy', 'chiropractic', 'sports-medicine'] },
  { key: 'surgery', slugs: ['orthopedic-surgery', 'spine-surgery', 'general-surgery', 'oral-surgery'] },
  { key: 'primary', slugs: ['primary-care', 'cardiology', 'endocrinology', 'rheumatology'] },
  { key: 'urgent', slugs: ['urgent-care', 'ophthalmology', 'dermatology', 'infusion-centers'] },
]

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return localizeMetadata(baseMetadata, locale, '/solutions')
}

export default async function SolutionsPage() {
  const t = await getTranslations('solutions')

  return (
    <>
      <NavInner />
      <main>
        {/* ── Hero ── */}
        <section className={s.hero}>
          <div className={s.heroBg}>
            <div className={`${s.heroOrb} ${s.heroOrbTeal}`} />
            <div className={`${s.heroOrb} ${s.heroOrbBlue}`} />
            <div className={s.heroGrain} />
          </div>
          <div className={s.container}>
            <div className={s.heroContent}>
              <span className={s.badge}>{t('badge')}</span>
              <h1 className={s.heroTitle}>
                {t('title')}
              </h1>
              <p className={s.heroSubtitle}>{t('subtitle')}</p>
            </div>
          </div>
        </section>

        {/* ── Care Settings ── */}
        <section className={s.changes} style={{ background: 'var(--cream)' }}>
          <div className={s.container}>
            <div className={s.changesHeader}>
              <span className={s.sectionLabel}>{t('page.settingsLabel')}</span>
              <h2 className={s.sectionTitle}>
                {t('page.settingsTitle1')}<br /><em>{t('page.settingsTitleEm')}</em>
              </h2>
              <p className={s.sectionDesc}>{t('page.settingsDesc')}</p>
            </div>

            <div className={s.modulesGrid}>
              {PRACTICE_TYPES.map((pt) => (
                <div key={pt.key} className={s.moduleCard}>
                  <div className={s.moduleIcon}>{pt.icon}</div>
                  <h3 className={s.moduleTitle}>{t(`page.types.${pt.key}.title`)}</h3>
                  <p className={s.moduleDesc}>{t(`page.types.${pt.key}.desc`)}</p>
                  <Link href={pt.href} className={s.moduleLink}>
                    {t(`page.types.${pt.key}.link`)}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── By Specialty ── */}
        <section className={s.changes} style={{ background: 'var(--white)' }}>
          <div className={s.container}>
            <div className={s.changesHeader}>
              <span className={s.sectionLabel}>{t('page.specialtiesLabel')}</span>
              <h2 className={s.sectionTitle}>
                {t('page.specialtiesTitle1')}<br /><em>{t('page.specialtiesTitleEm')}</em>
              </h2>
              <p className={s.sectionDesc}>{t('page.specialtiesDesc')}</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '2rem', marginTop: '2.5rem' }}>
              {SPECIALTY_GROUPS.map((group) => (
                <div key={group.key}>
                  <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: '1rem' }}>
                    {t(`page.groups.${group.key}`)}
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {group.slugs.map((slug) => (
                      <Link
                        key={slug}
                        href={`/specialties/${slug}`}
                        style={{ display: 'flex', flexDirection: 'column', padding: '0.75rem 1rem', borderRadius: '10px', border: '1px solid var(--border-light)', textDecoration: 'none', background: 'var(--cream)', transition: 'border-color 0.15s' }}
                      >
                        <span style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--text-primary)' }}>{t(`page.items.${slug}.label`)}</span>
                        <span style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', marginTop: '0.125rem' }}>{t(`page.items.${slug}.desc`)}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
              <Link href="/specialties" className={s.btnGhost}>
                {t('page.viewAll')}
              </Link>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className={s.cta}>
          <div className={s.ctaBg}>
            <div className={s.ctaOrb} />
          </div>
          <div className={s.container}>
            <div className={s.ctaContent}>
              <h2 className={s.ctaTitle}>
                {t('page.ctaTitle1')}<br /><em>{t('page.ctaTitleEm')}</em>
              </h2>
              <p className={s.ctaDesc}>{t('page.ctaDesc')}</p>
              <div className={s.ctaActions}>
                <Link href="/demo" className={s.btnPrimary}>{t('page.ctaBook')}</Link>
                <Link href="/specialties" className={s.btnGhost}>{t('page.ctaBrowse')}</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterInner />
    </>
  )
}
