import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import s from '@/app/specialties/specialty-full.module.css'

export const metadata: Metadata = {
  title: 'clinIQ Features — Patient Flow, Check-In, RTM, Pre-Auth, Scheduling, Analytics',
  description:
    'clinIQ gives clinics six integrated tools: real-time patient flow, automated check-in, RTM billing, pre-authorization, scheduling, and analytics. One platform. Every patient, start to finish.',
  keywords: [
    'clinic patient flow software',
    'medical check-in system',
    'RTM billing software',
    'pre-authorization software',
    'clinic scheduling software',
    'healthcare analytics',
    'clinic operations platform',
    'real-time patient tracking',
  ],
  openGraph: {
    title: 'clinIQ Features — One Platform for Every Stage of the Visit',
    description:
      'Real-time patient flow. Automated check-in. RTM billing. Pre-authorization. Scheduling. Analytics. Built for clinics that need operational control from check-in to checkout.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://cliniqhealthcare.com/features',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cliniqhealthcare.com' },
    { '@type': 'ListItem', position: 2, name: 'Features', item: 'https://cliniqhealthcare.com/features' },
  ],
}

const FEATURES = [
  {
    number: '01',
    title: 'Patient Check-In',
    problem: 'Your front desk spends the day answering "how much longer?" instead of running the clinic.',
    solution:
      'Kiosk, tablet, or phone — no app downloads. Patients check in, receive a queue position, and see an honest estimated wait time. Capacity-aware rules mean you only accept what you can actually serve.',
    bullets: [
      'Works on any device — kiosk, tablet, phone',
      'Configurable cutoff rules tied to real queue depth',
      'Acuity flags surface to triage immediately',
      'Eliminates "how much longer?" at the front desk',
    ],
    href: '/features/check-in',
  },
  {
    number: '02',
    title: 'Real-Time Patient Flow',
    problem: 'Nobody has a live view. Providers interrupt front desk. Front desk interrupts MAs. Everyone interrupts everyone.',
    solution:
      "One board. Every patient's exact stage — waiting, intake, with provider, pending discharge. Room status, provider load, bottleneck alerts. The whole clinic shares one truth instead of six diverging mental models.",
    bullets: [
      'Live queue view, provider view, and room status board',
      'Bottleneck alerts before the lobby backs up',
      'Stage transitions triggered by staff — no false moves',
      'Works for multi-provider, multi-room clinics',
    ],
    href: '/features/patient-flow',
  },
  {
    number: '03',
    title: 'RTM Billing',
    problem: "Your clinic qualifies for RTM revenue and isn't capturing it — because no one built the tracking in.",
    solution:
      'Remote Therapeutic Monitoring built in. Automatic CPT 98975–98981 tracking and compliance alerts. Qualifying patients generate $120–$150 per month with zero additional charting from your providers.',
    bullets: [
      'Automatic CPT 98975–98981 compliance tracking',
      'Alerts when patients approach or miss thresholds',
      '$120–$150 per qualifying patient per month',
      'No additional charting required from providers',
    ],
    href: '/features/rtm',
  },
  {
    number: '04',
    title: 'Pre-Authorization',
    problem: 'PA denials delay treatment and consume hours of staff time on callbacks and resubmissions.',
    solution:
      'Smart PA forms auto-populate from the patient record. Payer-specific rules, document upload, and case status tracking in one place. Fewer denials, fewer callbacks, faster treatment starts.',
    bullets: [
      'Auto-populate from patient record data',
      'Payer-specific form rules built in',
      'Document upload and case status tracking',
      'Expiration alerts before authorizations lapse',
    ],
    href: '/features/pre-auth',
  },
  {
    number: '05',
    title: 'Scheduling',
    problem: "Cancellations leave empty slots. No-shows burn provider time. Waitlist management is a manual phone-call marathon.",
    solution:
      'Multi-provider, multi-location scheduling with online patient booking and automated reminders. Intelligent waitlist fills cancellations automatically — no staff follow-up calls required.',
    bullets: [
      'Multi-provider and multi-location support',
      'Online patient self-booking with automated reminders',
      'Intelligent waitlist fills cancellations automatically',
      'No-show tracking with configurable follow-up rules',
    ],
    href: '/features/scheduling',
  },
  {
    number: '06',
    title: 'Analytics',
    problem: "You know something is wrong. You can't prove it, can't pinpoint it, and can't make the case to fix it.",
    solution:
      'Wait times, throughput, provider utilization, no-show rates, LWBS — daily, weekly, monthly. The operational data your EHR never surfaces. Fix problems before they compound and make the case with numbers, not gut feeling.',
    bullets: [
      'Wait times and throughput by day and provider',
      'No-show and cancellation rate tracking',
      'LWBS and overtime accumulation data',
      'Exportable reports for ops and admin review',
    ],
    href: '/features/analytics',
  },
]

export default function FeaturesPage() {
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
              <div className={s.badge}>Features</div>
              <h1 className={s.heroTitle}>
                Six tools. One platform.<br />
                <em>Every patient, start to finish.</em>
              </h1>
              <p className={s.heroSubtitle}>
                clinIQ is not a point solution. It is the operational layer that runs your clinic
                from the moment a patient walks in to the moment they check out — and captures the
                revenue that falls through the gaps between your other systems.
              </p>
              <div className={s.heroActions}>
                <a href="/demo" className={s.btnPrimary}>
                  See clinIQ in action
                  <svg className={s.btnIcon} viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M4 10h12m-4-4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a href="/compare" className={s.btnGhost}>
                  Compare to alternatives
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── FEATURE CARDS ── */}
        <section className={s.modules}>
          <div className={s.container}>
            <div className={s.modulesHeader}>
              <span className={s.sectionLabel}>All Features</span>
              <h2 className={s.sectionTitle}>Built for every stage of the visit.</h2>
              <p className={s.sectionDesc}>
                Each module solves a specific operational problem. Together, they give your clinic
                the real-time control that no EHR, check-in kiosk, or scheduling tool provides alone.
              </p>
            </div>
            <div className={s.modulesGrid}>
              {FEATURES.map(({ number, title, problem, solution, bullets, href }) => (
                <div key={number} className={s.moduleCard}>
                  <div
                    style={{
                      fontSize: '13px',
                      fontWeight: 600,
                      letterSpacing: '0.08em',
                      color: 'var(--teal)',
                      marginBottom: '12px',
                    }}
                  >
                    {number}
                  </div>
                  <h2 className={s.moduleTitle}>{title}</h2>
                  <p
                    style={{
                      fontSize: '13px',
                      fontWeight: 500,
                      color: 'var(--gray-500, #6b7280)',
                      marginBottom: '12px',
                      fontStyle: 'italic',
                    }}
                  >
                    The problem: {problem}
                  </p>
                  <p className={s.moduleDesc}>{solution}</p>
                  <ul
                    style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: '20px 0 0',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px',
                    }}
                  >
                    {bullets.map((b) => (
                      <li
                        key={b}
                        style={{
                          fontSize: '14px',
                          color: 'var(--gray-700, #374151)',
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '8px',
                        }}
                      >
                        <span
                          style={{
                            display: 'inline-block',
                            width: '6px',
                            height: '6px',
                            borderRadius: '50%',
                            background: 'var(--teal)',
                            marginTop: '6px',
                            flexShrink: 0,
                          }}
                          aria-hidden="true"
                        />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <a href={href} className={s.moduleLink} style={{ marginTop: '24px' }}>
                    Deep dive into {title}
                    <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                      <path d="M4 10h12m-4-4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── STATS STRIP ── */}
        <section className={s.stats}>
          <div className={s.container}>
            <div className={s.statsGrid}>
              {[
                { number: '30%', label: 'Faster patient check-in on average' },
                { number: '25%', label: 'Reduction in patient wait times' },
                { number: '$150', label: 'Average RTM revenue per qualifying patient monthly' },
                { number: '1 week', label: 'From signup to fully operational' },
              ].map(({ number, label }) => (
                <div key={label} className={s.stat}>
                  <span className={s.statNumber}>{number}</span>
                  <span className={s.statLabel}>{label}</span>
                </div>
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
                Your EHR handles the chart.<br />
                <em>clinIQ handles everything else.</em>
              </h2>
              <p className={s.ctaDesc}>
                See clinIQ configured for your clinic size, specialty, and EHR. We&rsquo;ll walk
                through your workflow and show you exactly how the operational layer fits.
              </p>
              <div className={s.ctaActions}>
                <a href="/demo" className={s.btnPrimary}>
                  Request a demo
                  <svg className={s.btnIcon} viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M4 10h12m-4-4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a href="/specialties" className={s.btnGhost}>
                  Browse by specialty
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
