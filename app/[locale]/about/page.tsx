import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import Link from 'next/link'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import s from '@/app/specialties/specialty-full.module.css'
import { localizeMetadata } from '@/lib/localized-metadata'

const baseMetadata: Metadata = {
  title: 'About clinIQ — The Operating System for Modern Clinics',
  description:
    'clinIQ is the operational layer between your EHR and daily clinic operations. Patient flow, check-in, RTM billing, pre-authorization, scheduling, messaging, and analytics — unified.',
  alternates: { canonical: 'https://www.cliniqhealthcare.com/about' },
  openGraph: {
    title: 'About clinIQ — The Operating System for Modern Clinics',
    description:
      'clinIQ is the operational layer between your EHR and daily clinic operations. Patient flow, check-in, RTM billing, pre-authorization, scheduling, messaging, and analytics — unified.',
    type: 'website',
    url: 'https://www.cliniqhealthcare.com/about',
    images: [{ url: '/og-about.png', width: 1200, height: 630, alt: 'About clinIQ' }],
  },
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return localizeMetadata(baseMetadata, locale, '/about')
}

export default async function AboutPage() {
  const t = await getTranslations('about')

  return (
    <>
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
              <span className={s.badge}>{t('badge')}</span>
              <h1 className={s.heroTitle}>{t('title')}</h1>
              <p className={s.heroSubtitle}>{t('subtitle')}</p>
              <div className={s.heroActions}>
                <Link href="/demo" className={s.btnPrimary}>{t('cta.demo')}</Link>
                <Link href="/about/team" className={s.btnGhost}>{t('cta.team')}</Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── THE PROBLEM ── */}
        <section className={s.reality} style={{ background: 'var(--cream)' }}>
          <div className={s.container}>
            <div className={s.realityGrid}>
              <div className={s.realityLeft}>
                <span className={s.sectionLabel}>{t('page.problemLabel')}</span>
                <h2 className={s.sectionTitle}>
                  {t('page.problemTitle1')}<br /><em>{t('page.problemTitleEm')}</em>
                </h2>
                <div className={s.realityNarrative}>
                  <p>{t('page.problemP1')}</p>
                  <p>{t('page.problemP2')}</p>
                  <p>{t('page.problemP3')}</p>
                </div>
              </div>
              <div className={s.realityRight}>
                <ul className={s.painList}>
                  <li className={s.painItem}>
                    <span className={s.painDot} />
                    <span className={s.painText}>{t('page.pain1')}</span>
                  </li>
                  <li className={s.painItem}>
                    <span className={s.painDot} />
                    <span className={s.painText}>{t('page.pain2')}</span>
                  </li>
                  <li className={s.painItem}>
                    <span className={s.painDot} />
                    <span className={s.painText}>{t('page.pain3')}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── THE MISSION ── */}
        <section className={s.modules} style={{ background: 'var(--black)' }}>
          <div className={s.container}>
            <div className={s.modulesHeader}>
              <span className={s.sectionLabel}>{t('mission.heading')}</span>
              <h2 className={s.sectionTitle} style={{ color: 'var(--white)' }}>
                {t('page.acoTitle1')}<br /><em>{t('page.acoTitleEm')}</em>
              </h2>
            </div>
            <div style={{ maxWidth: '720px' }}>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: 'rgba(255,255,255,0.65)', marginBottom: '1.5rem' }}>
                {t('mission.body')}
              </p>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: 'rgba(255,255,255,0.65)' }}>
                {t('vision.body')}
              </p>
            </div>
          </div>
        </section>

        {/* ── WHAT WE BUILD ── */}
        <section className={s.modules} style={{ background: 'var(--black)', paddingTop: '0' }}>
          <div className={s.container}>
            <div className={s.modulesHeader}>
              <span className={s.sectionLabel}>{t('page.platformLabel')}</span>
              <h2 className={s.sectionTitle} style={{ color: 'var(--white)' }}>
                {t('page.platformTitle1')}<br /><em>{t('page.platformTitleEm')}</em>
              </h2>
            </div>
            <div className={`${s.modulesGrid} ${s.threeCol}`} style={{ gridTemplateColumns: undefined }}>
              {(['checkIn', 'flow', 'rtm', 'preAuth', 'messaging', 'analytics'] as const).map((key) => (
                <div key={key} className={s.moduleCard} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <h3 className={s.moduleTitle} style={{ color: 'var(--white)' }}>{t(`page.modules.${key}.title`)}</h3>
                  <p className={s.moduleDesc} style={{ color: 'rgba(255,255,255,0.6)' }}>{t(`page.modules.${key}.desc`)}</p>
                </div>
              ))}
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
                <Link href="/demo" className={s.btnPrimary}>{t('cta.demo')}</Link>
                <Link href="/pricing" className={s.btnGhost}>{t('page.ctaPricing')}</Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <FooterInner />
    </>
  )
}
