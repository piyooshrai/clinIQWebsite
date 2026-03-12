import type { Metadata } from 'next'
import Link from 'next/link'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import s from '@/app/specialties/specialty-full.module.css'

export const metadata: Metadata = {
  title: 'Who We Serve — clinIQ',
  description:
    'clinIQ adapts to the operational realities of FQHCs, rural health clinics, concierge practices, surgery centers, and 30+ clinical specialties. Find your practice type.',
  alternates: { canonical: 'https://cliniqhealthcare.com/solutions' },
  openGraph: {
    title: 'Who We Serve — clinIQ',
    description:
      'clinIQ adapts to the operational realities of FQHCs, rural health clinics, concierge practices, surgery centers, and 30+ clinical specialties. Find your practice type.',
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
    desc: 'Small teams serving large geographic areas. Every administrative hour matters. clinIQ reduces prior authorization time, automates digital check-in for walk-in and scheduled patients, and surfaces RTM revenue that rural clinics typically leave on the table.',
    href: '/markets/rural-health',
    linkText: 'View Rural Health guide →',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 22V12h6v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Concierge & Direct Primary Care',
    desc: "Membership model operations with high patient expectations. clinIQ's digital check-in, secure messaging, and between-visit engagement tools are built for the premium patient experience concierge and DPC practices promise — and the lean team that delivers it.",
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
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

const SPECIALTY_GROUPS = [
  {
    heading: 'Behavioral Health',
    specialties: [
      { label: 'Addiction Medicine', href: '/specialties/addiction-medicine', desc: 'MAT protocol workflows' },
      { label: 'Psychiatry',         href: '/specialties/psychiatry',         desc: 'No-show reduction & RTM' },
      { label: 'Behavioral Health',  href: '/specialties/behavioral-health',  desc: 'Therapeutic flow management' },
    ],
  },
  {
    heading: 'Pain & Rehabilitation',
    specialties: [
      { label: 'Pain Management',  href: '/specialties/pain-management',  desc: 'High-volume procedure flow' },
      { label: 'Physical Therapy', href: '/specialties/physical-therapy', desc: 'Multi-patient room tracking' },
      { label: 'Chiropractic',     href: '/specialties/chiropractic',     desc: 'High-volume intake' },
      { label: 'Sports Medicine',  href: '/specialties/sports-medicine',  desc: 'Injury recovery + RTM' },
    ],
  },
  {
    heading: 'Surgery & Procedures',
    specialties: [
      { label: 'Orthopedic Surgery', href: '/specialties/orthopedic-surgery', desc: 'Pre-op & post-op flow' },
      { label: 'Spine Surgery',      href: '/specialties/spine-surgery',      desc: 'Conservative care tracking' },
      { label: 'General Surgery',    href: '/specialties/general-surgery',    desc: 'OR-clinic coordination' },
      { label: 'Oral Surgery',       href: '/specialties/oral-surgery',       desc: 'Procedure room efficiency' },
    ],
  },
  {
    heading: 'Primary & Chronic Care',
    specialties: [
      { label: 'Primary Care',  href: '/specialties/primary-care',  desc: 'Same-day demand management' },
      { label: 'Cardiology',    href: '/specialties/cardiology',    desc: 'Echo & device coordination' },
      { label: 'Endocrinology', href: '/specialties/endocrinology', desc: 'Chronic disease + RTM' },
      { label: 'Rheumatology',  href: '/specialties/rheumatology',  desc: 'Biologic PA workflows' },
    ],
  },
  {
    heading: 'Urgent & High-Volume',
    specialties: [
      { label: 'Urgent Care',      href: '/specialties/urgent-care',      desc: 'Cut LWBS, crush wait times' },
      { label: 'Ophthalmology',    href: '/specialties/ophthalmology',    desc: 'High-volume diagnostic flow' },
      { label: 'Dermatology',      href: '/specialties/dermatology',      desc: 'Medical & cosmetic flow' },
      { label: 'Infusion Centers', href: '/specialties/infusion-centers', desc: 'Chair utilization + PA' },
    ],
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
              <span className={s.badge}>Who We Serve</span>
              <h1 className={s.heroTitle}>
                Find your<br /><em>practice type</em>
              </h1>
              <p className={s.heroSubtitle}>
                An FQHC managing sliding-scale visits, a pain management practice fighting PA denials, and a concierge DPC with membership patients all have different operational realities. clinIQ adapts to each.
              </p>
            </div>
          </div>
        </section>

        {/* ── Care Settings ── */}
        <section className={s.changes} style={{ background: 'var(--cream)' }}>
          <div className={s.container}>
            <div className={s.changesHeader}>
              <span className={s.sectionLabel}>By Care Setting</span>
              <h2 className={s.sectionTitle}>
                Built for how<br /><em>you actually operate</em>
              </h2>
              <p className={s.sectionDesc}>
                Different care settings have different administrative realities — different payers, different compliance requirements, different staff-to-patient ratios.
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

        {/* ── By Specialty ── */}
        <section className={s.changes} style={{ background: 'var(--white)' }}>
          <div className={s.container}>
            <div className={s.changesHeader}>
              <span className={s.sectionLabel}>By Clinical Specialty</span>
              <h2 className={s.sectionTitle}>
                Configured for<br /><em>your clinical workflow</em>
              </h2>
              <p className={s.sectionDesc}>
                Every specialty has its own PA rules, RTM opportunity, flow patterns, and no-show dynamics. clinIQ is documented for each.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '2rem', marginTop: '2.5rem' }}>
              {SPECIALTY_GROUPS.map((group) => (
                <div key={group.heading}>
                  <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: '1rem' }}>
                    {group.heading}
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {group.specialties.map((sp) => (
                      <Link
                        key={sp.href}
                        href={sp.href}
                        style={{ display: 'flex', flexDirection: 'column', padding: '0.75rem 1rem', borderRadius: '10px', border: '1px solid var(--border-light)', textDecoration: 'none', background: 'var(--cream)', transition: 'border-color 0.15s' }}
                      >
                        <span style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--text-primary)' }}>{sp.label}</span>
                        <span style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', marginTop: '0.125rem' }}>{sp.desc}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
              <Link href="/specialties" className={s.btnGhost}>
                View all 30+ specialties →
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
                  Browse All Specialties
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
