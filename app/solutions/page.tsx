import type { Metadata } from 'next'
import Link from 'next/link'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import s from '@/app/specialties/specialty-full.module.css'

export const metadata: Metadata = {
  title: 'Solutions by Practice Type — clinIQ',
  description:
    'clinIQ adapts to the operational realities of FQHCs, rural health clinics, concierge practices, and ambulatory surgery centers. See how.',
  alternates: { canonical: 'https://cliniqhealthcare.com/solutions' },
  openGraph: {
    title: 'Solutions by Practice Type — clinIQ',
    description:
      'clinIQ adapts to the operational realities of FQHCs, rural health clinics, concierge practices, and ambulatory surgery centers. See how.',
    type: 'website',
    url: 'https://cliniqhealthcare.com/solutions',
  },
}

const PRACTICE_TYPES = [
  {
    title: 'FQHCs & Community Health Centers',
    desc: 'Sliding-scale billing, Medicaid managed care complexity, and patient volumes that require real-time flow management. clinIQ helps FQHCs reduce check-in time, track RTM compliance across large patient panels, and automate prior authorization for the payer mix that community health serves.',
    href: '/markets/fqhc-community-health',
    linkText: 'View FQHC guide →',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 21h18M6 21V7l6-4 6 4v14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 21v-4h6v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 10h6M9 14h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Rural Health Clinics',
    desc: 'Small teams serving large geographic areas. Every administrative hour matters. clinIQ reduces prior authorization time by 80%, automates digital check-in for walk-in and scheduled patients, and surfaces RTM revenue that rural clinics typically leave on the table.',
    href: '/markets/rural-health',
    linkText: 'View Rural Health guide →',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 12a9 9 0 1018 0 9 9 0 00-18 0z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M3.6 9h16.8M3.6 15h16.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Concierge & Direct Primary Care',
    desc: 'Membership model operations with high patient expectations. clinIQ\'s digital check-in, secure messaging, and between-visit engagement tools are built for the premium patient experience concierge and DPC practices promise — and the lean team that delivers it.',
    href: '/markets/concierge-dpc',
    linkText: 'View Concierge guide →',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Ambulatory Surgery Centers',
    desc: 'Pre-op intake, real-time procedure flow tracking, and post-op follow-up coordination. clinIQ maps to the surgical patient journey from pre-authorization through discharge — reducing admin burden while improving throughput visibility for surgical coordinators.',
    href: '/markets/ambulatory-surgery-centers',
    linkText: 'View ASC guide →',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M8 6h13M8 12h13M8 18h13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M3 6h.01M3 12h.01M3 18h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
]

export default function SolutionsPage() {
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
              <span className={s.badge}>Solutions</span>
              <h1 className={s.heroTitle}>
                Solutions by<br /><em>Practice Type</em>
              </h1>
              <p className={s.heroSubtitle}>
                An FQHC running sliding-scale visits and an ambulatory surgery center managing pre-op flow have fundamentally different operational realities. clinIQ adapts to both.
              </p>
            </div>
          </div>
        </section>

        {/* ── Practice Types ── */}
        <section className={s.changes} style={{ background: 'var(--cream)' }}>
          <div className={s.container}>
            <div className={s.changesHeader}>
              <span className={s.sectionLabel}>Practice Types</span>
              <h2 className={s.sectionTitle}>
                Built for how<br /><em>you actually operate</em>
              </h2>
              <p className={s.sectionDesc}>
                Different care settings have different administrative realities. clinIQ is configured — not just customized — for each.
              </p>
            </div>

            <div className={s.modulesGrid}>
              {PRACTICE_TYPES.map((pt) => (
                <div key={pt.title} className={s.moduleCard}>
                  <div className={s.moduleIcon}>{pt.icon}</div>
                  <h3 className={s.moduleTitle}>{pt.title}</h3>
                  <p className={s.moduleDesc}>{pt.desc}</p>
                  <Link href={pt.href} className={s.moduleLink}>
                    {pt.linkText}
                  </Link>
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
                Not sure which fits<br /><em>your practice?</em>
              </h2>
              <p className={s.ctaDesc}>
                Book a demo and we&apos;ll walk through how clinIQ applies to your specific care setting, patient volume, and EHR.
              </p>
              <div className={s.ctaActions}>
                <Link href="/demo" className={s.btnPrimary}>
                  Book a Demo
                </Link>
                <Link href="/specialties" className={s.btnGhost}>
                  Browse by Specialty
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterInner />
    </>
  )
}
