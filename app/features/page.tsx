import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import s from '@/app/specialties/specialty-full.module.css'

export const metadata: Metadata = {
  title: 'Platform Features — clinIQ Clinic Operations',
  description:
    "clinIQ's 12 integrated modules: real-time patient flow, digital check-in, RTM billing (CPT 98975–98981), pre-authorization, scheduling, telehealth, secure messaging, analytics, and more.",
  alternates: {
    canonical: 'https://cliniqhealthcare.com/features',
  },
  openGraph: {
    title: 'Platform Features — clinIQ Clinic Operations',
    description: "clinIQ's 12 integrated modules: real-time patient flow, digital check-in, RTM billing, pre-authorization, scheduling, telehealth, secure messaging, analytics, and more.",
    type: 'website',
    url: 'https://cliniqhealthcare.com/features',
    images: [{ url: '/og-default.png', width: 1200, height: 630, alt: 'clinIQ Platform Features' }],
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

const CORE_WORKFLOW = [
  {
    slug: 'patient-flow',
    name: 'Patient Flow Management',
    desc: 'Real-time room status, patient queue visibility, and bottleneck identification before delays cascade.',
  },
  {
    slug: 'check-in',
    name: 'Patient Check-In',
    desc: 'Mobile app, kiosk, and web check-in. Average check-in time drops to 3 minutes. Front desk handles exceptions.',
  },
  {
    slug: 'scheduling',
    name: 'Scheduling',
    desc: 'Templates sized for each visit type, true same-day access, overbooking rules, and waitlist automation.',
  },
  {
    slug: 'pre-auth',
    name: 'Pre-Authorization',
    desc: 'Generate letters of medical necessity in 5 minutes. Track every authorization from submission through expiration.',
  },
]

const REVENUE_ENGAGEMENT = [
  {
    slug: 'rtm',
    name: 'RTM Billing',
    desc: 'CPT 98975–98981 tracking and billing automation. $100–$150 per qualifying patient per month.',
  },
  {
    slug: 'analytics',
    name: 'Analytics & Reporting',
    desc: 'Real-time dashboards and historical reports for wait times, throughput, provider utilization, and no-show rates.',
  },
  {
    slug: 'telehealth',
    name: 'Telehealth',
    desc: 'Native HD video visits integrated with scheduling and patient flow. No third-party apps, no separate logins.',
  },
  {
    slug: 'patient-satisfaction',
    name: 'Patient Satisfaction Surveys',
    desc: 'Automated post-visit surveys with real-time score dashboards by provider, location, and visit type.',
  },
  {
    slug: 'secure-messaging',
    name: 'Secure Messaging',
    desc: 'HIPAA-compliant patient-to-staff messaging documented in the patient record. 70% phone call reduction.',
  },
  {
    slug: 'wearable-integration',
    name: 'Wearable Device Integration',
    desc: 'Active data pull from Apple Health, Oura Ring, and Android Health Connect into the clinical record.',
  },
  {
    slug: 'secure-file-exchange',
    name: 'Secure File Exchange',
    desc: 'HIPAA-compliant bidirectional document sharing between patients and practice. No fax, no unsecured email.',
  },
  {
    slug: 'patient-app',
    name: 'Patient App & Portal',
    desc: 'One app for check-in, appointments, messaging, forms, file exchange, and telehealth. iOS, Android, and web.',
  },
]

const arrowSvg = (
  <svg className={s.btnIcon} viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M4 10h12m-4-4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

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
              <span className={s.badge}>Platform Features</span>
              <h1 className={s.heroTitle}>
                One platform.<br /><em>Every stage of the visit.</em>
              </h1>
              <p className={s.heroSubtitle}>
                12 integrated modules built to work together. No stitching tools together. No data
                sitting in silos. From patient arrival through RTM billing — clinIQ handles it.
              </p>
              <div className={s.heroActions}>
                <a href="/demo" className={s.btnPrimary}>
                  Book a Demo
                  {arrowSvg}
                </a>
                <a href="/pricing" className={s.btnGhost}>
                  See Pricing
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── CORE WORKFLOW ── */}
        <section className={s.modules}>
          <div className={s.container}>
            <div className={s.modulesHeader}>
              <span className={s.sectionLabel}>Core Workflow</span>
              <h2 className={s.sectionTitle}>
                The operational foundation<br /><em>every clinic needs.</em>
              </h2>
            </div>
            <div className={s.modulesGrid}>
              {CORE_WORKFLOW.map((feature) => (
                <a
                  key={feature.slug}
                  href={`/features/${feature.slug}`}
                  className={s.moduleCard}
                >
                  <h3 className={s.moduleTitle}>{feature.name}</h3>
                  <p className={s.moduleDesc}>{feature.desc}</p>
                  <span className={s.moduleLink}>
                    Learn more
                    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" width="14" height="14">
                      <path d="M4 10h12m-4-4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── REVENUE & ENGAGEMENT ── */}
        <section className={s.modules} style={{ background: 'var(--cream)' }}>
          <div className={s.container}>
            <div className={s.modulesHeader}>
              <span className={s.sectionLabel}>Revenue &amp; Engagement</span>
              <h2 className={s.sectionTitle}>
                Capture the revenue that falls<br /><em>through the gaps.</em>
              </h2>
            </div>
            <div className={s.modulesGrid}>
              {REVENUE_ENGAGEMENT.map((feature) => (
                <a
                  key={feature.slug}
                  href={`/features/${feature.slug}`}
                  className={s.moduleCard}
                >
                  <h3 className={s.moduleTitle}>{feature.name}</h3>
                  <p className={s.moduleDesc}>{feature.desc}</p>
                  <span className={s.moduleLink}>
                    Learn more
                    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" width="14" height="14">
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
                See it all working<br /><em>together.</em>
              </h2>
              <p className={s.ctaDesc}>
                A 15-minute demo shows more than any feature list. We&rsquo;ll configure clinIQ
                for your specialty and walk through the workflows that matter to your practice.
              </p>
              <div className={s.ctaActions}>
                <a href="/demo" className={s.btnPrimary}>
                  Book a Demo
                  {arrowSvg}
                </a>
                <a href="/pricing" className={s.btnGhost}>
                  See Pricing
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
