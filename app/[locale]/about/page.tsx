import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import Link from 'next/link'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import s from '@/app/specialties/specialty-full.module.css'

export const metadata: Metadata = {
  title: 'About clinIQ — The Operating System for Modern Clinics',
  description:
    'clinIQ is the operational layer between your EHR and daily clinic operations. Patient flow, check-in, RTM billing, pre-authorization, scheduling, messaging, and analytics — unified.',
  alternates: { canonical: 'https://cliniqhealthcare.com/about' },
  openGraph: {
    title: 'About clinIQ — The Operating System for Modern Clinics',
    description:
      'clinIQ is the operational layer between your EHR and daily clinic operations. Patient flow, check-in, RTM billing, pre-authorization, scheduling, messaging, and analytics — unified.',
    type: 'website',
    url: 'https://cliniqhealthcare.com/about',
    images: [{ url: '/og-about.png', width: 1200, height: 630, alt: 'About clinIQ' }],
  },
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
                <span className={s.sectionLabel}>The Problem</span>
                <h2 className={s.sectionTitle}>
                  Clinic operations are<br /><em>fragmented by design.</em>
                </h2>
                <div className={s.realityNarrative}>
                  <p>
                    Most clinics run on five or six disconnected tools. One system for check-in, another for scheduling, spreadsheets for tracking patient flow, paper clipboards for intake forms, and whatever workaround the front desk invented to keep things moving. Each tool solves one problem and creates three more.
                  </p>
                  <p>
                    Revenue leaks through the gaps. RTM codes go unbilled because nobody has time to track compliance. Pre-authorization requests sit in purgatory while surgical revenue evaporates. Staff spend 13 to 15 hours per week on prior auth paperwork alone — time that should go to patients.
                  </p>
                  <p>
                    Patient experience suffers too. Check-in takes eight minutes instead of three. Wait times stretch because nobody knows who&rsquo;s actually in the lobby. Patients leave without scheduling follow-ups because the process is too painful. And everyone — staff and patients — feels the friction.
                  </p>
                </div>
              </div>
              <div className={s.realityRight}>
                <ul className={s.painList}>
                  <li className={s.painItem}>
                    <span className={s.painDot} />
                    <span className={s.painText}>13–15 hrs/week lost to prior auth paperwork at the average specialty practice.</span>
                  </li>
                  <li className={s.painItem}>
                    <span className={s.painDot} />
                    <span className={s.painText}>$144K/year in RTM revenue most practices are not billing.</span>
                  </li>
                  <li className={s.painItem}>
                    <span className={s.painDot} />
                    <span className={s.painText}>8 minutes average check-in time. clinIQ cuts it to under 3.</span>
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
                ACO in a<br /><em>Box.</em>
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
              <span className={s.sectionLabel}>The Platform</span>
              <h2 className={s.sectionTitle} style={{ color: 'var(--white)' }}>
                Six tools. One platform.<br /><em>Every patient, start to finish.</em>
              </h2>
            </div>
            <div className={`${s.modulesGrid} ${s.threeCol}`} style={{ gridTemplateColumns: undefined }}>
              {[
                { title: 'Patient Check-In', desc: 'Kiosk and mobile check-in that cuts intake time from eight minutes to under three. Digital consent, insurance verification, and intake forms — complete before patients walk in.' },
                { title: 'Real-Time Patient Flow', desc: "Live visibility into who's in your lobby, who's in rooms, and where the bottlenecks are. No more verbal status checks. No more guessing." },
                { title: 'RTM Billing', desc: 'Therapy adherence tracking under CPT codes 98975–98981. $100–164 per patient per month. Automated compliance logging and billing code generation.' },
                { title: 'Pre-Authorization', desc: 'Automated payer submission and tracking. Saves 13–15 hours per week. Catches documentation gaps before submission. Real-time status across all pending cases.' },
                { title: 'Secure Messaging', desc: 'HIPAA-compliant patient communication between visits. Reduces no-shows. Supports RTM engagement. Replaces informal email and text workflows.' },
                { title: 'Analytics', desc: 'Operational dashboards: RTM compliance rates, patient flow throughput, revenue per provider, pre-auth approval timelines. Powered by Vizier.' },
              ].map((m) => (
                <div key={m.title} className={s.moduleCard} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <h3 className={s.moduleTitle} style={{ color: 'var(--white)' }}>{m.title}</h3>
                  <p className={s.moduleDesc} style={{ color: 'rgba(255,255,255,0.6)' }}>{m.desc}</p>
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
                See clinIQ in action.<br /><em>Live in days.</em>
              </h2>
              <p className={s.ctaDesc}>
                No rip-and-replace. No enterprise contract. Works with your existing EHR and goes live in days, not months.
              </p>
              <div className={s.ctaActions}>
                <Link href="/demo" className={s.btnPrimary}>{t('cta.demo')}</Link>
                <Link href="/pricing" className={s.btnGhost}>See Pricing</Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <FooterInner />
    </>
  )
}
