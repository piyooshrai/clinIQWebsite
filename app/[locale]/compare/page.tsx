import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import s from '@/app/specialties/specialty-full.module.css'

export const metadata: Metadata = {
  title: 'clinIQ vs Competitors — Full Comparison Hub',
  description:
    'How clinIQ compares to Phreesia, Clearwave, Athenahealth, eClinicalWorks, Prevounce, TimeDoc, and more. Real-time patient flow vs. tools that don\'t manage what\'s happening now.',
  alternates: {
    canonical: 'https://cliniqhealthcare.com/compare',
  },
  openGraph: {
    title: 'clinIQ vs Competitors — Full Comparison Hub',
    description: 'How clinIQ compares to Phreesia, Clearwave, Athenahealth, eClinicalWorks, Prevounce, TimeDoc, and more.',
    type: 'website',
    url: 'https://cliniqhealthcare.com/compare',
    images: [{ url: '/og-compare-template.png', width: 1200, height: 630, alt: 'clinIQ vs Competitors' }],
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cliniqhealthcare.com' },
    { '@type': 'ListItem', position: 2, name: 'Compare', item: 'https://cliniqhealthcare.com/compare' },
  ],
}

const INTAKE = [
  {
    slug: 'phreesia',
    name: 'clinIQ vs Phreesia',
    desc: 'Phreesia handles check-in. clinIQ handles check-in plus real-time patient flow, RTM billing, pre-authorization, and the rest of the visit.',
  },
  {
    slug: 'clearwave',
    name: 'clinIQ vs Clearwave',
    desc: 'Clearwave handles kiosk check-in. clinIQ handles check-in plus real-time patient flow, RTM billing, and pre-authorization — no hardware required.',
  },
  {
    slug: 'qless',
    name: 'clinIQ vs QLess',
    desc: 'QLess manages waiting lines. clinIQ manages clinic operations — real-time patient flow through every stage, RTM billing, and healthcare-specific workflows.',
  },
  {
    slug: 'waitwhile',
    name: 'clinIQ vs Waitwhile',
    desc: 'Waitwhile manages a queue. clinIQ manages a clinic — real-time patient flow beyond the waiting room, RTM billing, and pre-authorization tracking.',
  },
]

const EHR_PM = [
  {
    slug: 'athenahealth',
    name: 'clinIQ vs athenahealth',
    desc: "clinIQ is not an EHR replacement for athenahealth. It's the operations layer athenahealth doesn't provide — real-time patient flow, RTM billing, and LobbyView displays.",
  },
  {
    slug: 'eclinicalworks',
    name: 'clinIQ vs eClinicalWorks',
    desc: 'clinIQ adds real-time patient flow to eClinicalWorks. Not a replacement — the operations layer eCW doesn\'t provide, alongside your existing system.',
  },
  {
    slug: 'nextgen',
    name: 'clinIQ vs NextGen',
    desc: 'clinIQ adds real-time operations to NextGen Healthcare. The patient flow, RTM billing, and pre-authorization layer that NextGen EHR does not provide.',
  },
  {
    slug: 'advancedmd',
    name: 'clinIQ vs AdvancedMD',
    desc: 'clinIQ adds real-time operations to AdvancedMD. The patient flow, RTM billing, and pre-authorization layer that AdvancedMD does not provide.',
  },
  {
    slug: 'tebra',
    name: 'clinIQ vs Tebra',
    desc: "Tebra markets your practice. clinIQ runs it — real-time patient flow, RTM billing automation, and pre-authorization tracking that Tebra's platform does not provide.",
  },
  {
    slug: 'simplepractice',
    name: 'clinIQ vs SimplePractice',
    desc: 'SimplePractice handles notes and scheduling for behavioral health. clinIQ adds real-time patient flow, RTM billing at $110–150/patient/month, and multi-provider operations.',
  },
]

const RTM_RPM = [
  {
    slug: 'prevounce',
    name: 'clinIQ vs Prevounce',
    desc: 'Prevounce focuses on chronic care management. clinIQ provides RTM billing plus real-time patient flow, pre-authorization tracking, and full clinic operations.',
  },
  {
    slug: 'timedoc',
    name: 'clinIQ vs TimeDoc Health',
    desc: 'TimeDoc focuses on CCM and RPM billing. clinIQ provides RTM billing plus real-time patient flow, check-in, pre-authorization, and full clinic operations.',
  },
  {
    slug: 'optimize-health',
    name: 'clinIQ vs Optimize Health',
    desc: 'Optimize Health provides RPM device logistics and monitoring. clinIQ provides RTM billing plus real-time patient flow and full clinic operations — no device distribution required.',
  },
  {
    slug: 'chroniccareiq',
    name: 'clinIQ vs ChronicCareIQ',
    desc: 'ChronicCareIQ focuses on CCM and RPM billing. clinIQ provides RTM plus real-time patient flow, check-in, pre-authorization, and full clinic operations in one platform.',
  },
]

const MANUAL_LEGACY = [
  {
    slug: 'spreadsheets',
    name: 'clinIQ vs Spreadsheets',
    desc: "Spreadsheets track history. clinIQ tracks what's happening now — real-time patient flow, automatic RTM billing, pre-authorization alerts, and operational intelligence.",
  },
  {
    slug: 'whiteboards',
    name: 'clinIQ vs Whiteboards',
    desc: 'Whiteboards show where patients were. clinIQ shows where they are now — real-time patient flow, automatic time tracking, mobile visibility, and analytics.',
  },
  {
    slug: 'paper-signin',
    name: 'clinIQ vs Paper Sign-In',
    desc: 'Paper sign-in captures a name. clinIQ captures a workflow — digital check-in, real-time patient flow, automatic time tracking, and RTM billing.',
  },
  {
    slug: 'ehr-only',
    name: 'clinIQ vs EHR-Only Workflow',
    desc: "EHRs document what happened. clinIQ manages what's happening now — real-time patient flow, RTM billing, and pre-authorization tracking alongside any EHR.",
  },
  {
    slug: 'generic-scheduling',
    name: 'clinIQ vs Generic Scheduling',
    desc: 'Scheduling software fills the calendar. clinIQ manages what happens after patients arrive — real-time patient flow, RTM billing, and pre-authorization tracking.',
  },
]

const arrowSvg = (
  <svg className={s.btnIcon} viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M4 10h12m-4-4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

function ComparisonSection({
  label,
  title,
  items,
  bg,
}: {
  label: string
  title: ReactNode
  items: { slug: string; name: string; desc: string }[]
  bg?: string
}) {
  return (
    <section className={s.modules} style={bg ? { background: bg } : undefined}>
      <div className={s.container}>
        <div className={s.modulesHeader}>
          <span className={s.sectionLabel}>{label}</span>
          <h2 className={s.sectionTitle}>{title}</h2>
        </div>
        <div className={s.modulesGrid}>
          {items.map((item) => (
            <a
              key={item.slug}
              href={`/compare/${item.slug}`}
              className={s.moduleCard}
            >
              <h3 className={s.moduleTitle}>{item.name}</h3>
              <p className={s.moduleDesc}>{item.desc}</p>
              <span className={s.moduleLink}>
                Full comparison
                <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" width="14" height="14">
                  <path d="M4 10h12m-4-4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function ComparePage() {
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
              <span className={s.badge}>Compare</span>
              <h1 className={s.heroTitle}>
                How clinIQ<br /><em>compares.</em>
              </h1>
              <p className={s.heroSubtitle}>
                Most clinic tools solve one problem. Phreesia handles check-in. Athenahealth runs
                billing. Spreadsheets track the rest. clinIQ replaces all of it — one platform,
                every patient, every stage.
              </p>
              <div className={s.heroActions}>
                <a href="/features" className={s.btnPrimary}>
                  See All Features
                  {arrowSvg}
                </a>
                <a href="/demo" className={s.btnGhost}>
                  Book a Demo
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── COMPARISON SECTIONS ── */}
        <ComparisonSection
          label="Patient Intake"
          title={<>vs Patient Intake<br /><em>Platforms</em></>}
          items={INTAKE}
        />

        <ComparisonSection
          label="EHR &amp; PM"
          title={<>vs EHR / Practice<br /><em>Management</em></>}
          items={EHR_PM}
          bg="var(--cream)"
        />

        <ComparisonSection
          label="RTM &amp; RPM"
          title={<>vs RTM<br /><em>Platforms</em></>}
          items={RTM_RPM}
        />

        <ComparisonSection
          label="Manual &amp; Legacy"
          title={<>vs Manual &amp; Legacy<br /><em>Workflows</em></>}
          items={MANUAL_LEGACY}
          bg="var(--cream)"
        />

        {/* ── CTA ── */}
        <section className={s.cta}>
          <div className={s.ctaBg}>
            <div className={s.ctaOrb} aria-hidden="true" />
          </div>
          <div className={s.container}>
            <div className={s.ctaContent}>
              <h2 className={s.ctaTitle}>
                See how clinIQ fits<br /><em>your current stack.</em>
              </h2>
              <p className={s.ctaDesc}>
                Book a demo and we&rsquo;ll show you exactly what clinIQ replaces, what it works
                alongside, and how the transition works for your specific practice.
              </p>
              <div className={s.ctaActions}>
                <a href="/demo" className={s.btnPrimary}>
                  Book a Demo
                  {arrowSvg}
                </a>
                <a href="/pricing" className={s.btnGhost}>
                  View Pricing
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
