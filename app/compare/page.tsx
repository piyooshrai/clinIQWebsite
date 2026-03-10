import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import s from '@/app/specialties/specialty-full.module.css'

export const metadata: Metadata = {
  title: 'clinIQ vs Competitors — Full Comparison Hub | clinIQ',
  description:
    'See how clinIQ compares to Phreesia, athenahealth, eClinicalWorks, AdvancedMD, NextGen, Tebra, Qless, WaitWhile, and more. Real-time patient flow vs. tools that don\'t manage what\'s happening now.',
  keywords: [
    'clinIQ vs Phreesia',
    'clinIQ vs athenahealth',
    'clinIQ vs eClinicalWorks',
    'clinic operations software comparison',
    'patient flow software comparison',
    'EHR alternative',
    'Phreesia alternative',
    'patient check-in software comparison',
  ],
  openGraph: {
    title: 'clinIQ vs Competitors — Full Comparison Hub',
    description:
      'EHRs document what happened. Kiosks collect a signature. Scheduling fills the calendar. clinIQ manages what\'s happening now — across every comparison, that\'s the difference.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://cliniqhealthcare.com/compare',
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

const COMPARISONS = [
  {
    slug: 'phreesia',
    name: 'clinIQ vs Phreesia',
    tagline: 'Phreesia collects intake data. clinIQ manages what happens after check-in.',
    category: 'Patient Intake',
  },
  {
    slug: 'clearwave',
    name: 'clinIQ vs Clearwave',
    tagline: 'Clearwave automates check-in. clinIQ orchestrates what follows.',
    category: 'Patient Intake',
  },
  {
    slug: 'qless',
    name: 'clinIQ vs Qless',
    tagline: 'Qless manages a line. clinIQ manages a clinic.',
    category: 'Queue Management',
  },
  {
    slug: 'waitwhile',
    name: 'clinIQ vs Waitwhile',
    tagline: 'Waitwhile tracks the wait. clinIQ tracks every stage of the visit.',
    category: 'Queue Management',
  },
  {
    slug: 'athenahealth',
    name: 'clinIQ vs athenahealth',
    tagline: 'Great EHR, no idea who\'s in Room 3.',
    category: 'EHR',
  },
  {
    slug: 'eclinicalworks',
    name: 'clinIQ vs eClinicalWorks',
    tagline: 'eCW manages the record. clinIQ manages the day.',
    category: 'EHR',
  },
  {
    slug: 'advancedmd',
    name: 'clinIQ vs AdvancedMD',
    tagline: 'Built to maximize billing. clinIQ built to maximize throughput.',
    category: 'EHR',
  },
  {
    slug: 'nextgen',
    name: 'clinIQ vs NextGen',
    tagline: 'NextGen customizes the chart. clinIQ customizes the operation.',
    category: 'EHR',
  },
  {
    slug: 'tebra',
    name: 'clinIQ vs Tebra',
    tagline: 'Tebra markets your practice. clinIQ runs it.',
    category: 'EHR',
  },
  {
    slug: 'simplepractice',
    name: 'clinIQ vs SimplePractice',
    tagline: 'SimplePractice handles the note. clinIQ handles the room.',
    category: 'Practice Management',
  },
  {
    slug: 'ehr-only',
    name: 'clinIQ vs EHR-Only Workflow',
    tagline: 'EHRs document what happened. clinIQ manages what\'s happening now.',
    category: 'Workflow Type',
  },
  {
    slug: 'generic-scheduling',
    name: 'clinIQ vs Generic Scheduling',
    tagline: 'Scheduling fills the calendar. clinIQ manages after the patient arrives.',
    category: 'Workflow Type',
  },
  {
    slug: 'whiteboards',
    name: 'clinIQ vs Whiteboards',
    tagline: 'A whiteboard shows where patients were. clinIQ shows where they are.',
    category: 'Manual Workflow',
  },
  {
    slug: 'spreadsheets',
    name: 'clinIQ vs Spreadsheets',
    tagline: 'Spreadsheets track history. clinIQ tracks the present.',
    category: 'Manual Workflow',
  },
  {
    slug: 'paper-signin',
    name: 'clinIQ vs Paper Sign-In',
    tagline: 'Paper captures a name. clinIQ captures a workflow.',
    category: 'Manual Workflow',
  },
]

const CATEGORIES = ['Patient Intake', 'Queue Management', 'EHR', 'Practice Management', 'Workflow Type', 'Manual Workflow']

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
              <div className={s.badge}>Comparisons</div>
              <h1 className={s.heroTitle}>
                How clinIQ compares to<br />
                <em>every alternative you&rsquo;re already using.</em>
              </h1>
              <p className={s.heroSubtitle}>
                EHRs document what happened. Kiosks collect a signature. Scheduling software fills
                the calendar. Whiteboards tell you where the patient was an hour ago. None of them
                manage what&rsquo;s happening in your clinic right now. That&rsquo;s what clinIQ
                does — and it&rsquo;s the same answer across every comparison below.
              </p>
            </div>
          </div>
        </section>

        {/* ── COMPARISONS BY CATEGORY ── */}
        <section className={s.modules} style={{ background: 'var(--cream, #f5f3ef)' }}>
          <div className={s.container}>
            {CATEGORIES.map((cat) => {
              const items = COMPARISONS.filter((c) => c.category === cat)
              return (
                <div key={cat} style={{ marginBottom: '64px' }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      marginBottom: '24px',
                    }}
                  >
                    <span
                      style={{
                        display: 'block',
                        width: '28px',
                        height: '2px',
                        background: 'var(--teal)',
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{
                        fontSize: '12px',
                        fontWeight: 600,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: 'var(--teal)',
                      }}
                    >
                      {cat}
                    </span>
                  </div>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                      gap: '20px',
                    }}
                  >
                    {items.map((comp) => (
                      <a
                        key={comp.slug}
                        href={`/compare/${comp.slug}`}
                        className={s.moduleCard}
                        style={{ textDecoration: 'none', color: 'inherit' }}
                      >
                        <h2 className={s.moduleTitle} style={{ fontSize: '18px' }}>
                          {comp.name}
                        </h2>
                        <p className={s.moduleDesc} style={{ fontSize: '15px' }}>
                          {comp.tagline}
                        </p>
                        <span
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                            fontSize: '14px',
                            fontWeight: 500,
                            color: 'var(--teal)',
                            marginTop: '16px',
                          }}
                        >
                          Full comparison
                          <svg width="12" height="12" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                            <path d="M4 10h12m-4-4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* ── THE THROUGH-LINE ── */}
        <section className={s.reality}>
          <div className={s.container}>
            <div className={s.realityGrid}>
              <div className={s.realityLeft}>
                <span className={s.sectionLabel}>The Pattern</span>
                <h2 className={s.sectionTitle}>
                  Every alternative<br />
                  <em>manages the record. Not the room.</em>
                </h2>
                <div className={s.realityNarrative}>
                  <p>
                    Your EHR is good at storing what happened. Your check-in kiosk is good at
                    capturing a signature and a chief complaint. Your scheduling software is good at
                    filling appointment slots. Your whiteboard is good at showing where a patient
                    was when someone last updated it.
                  </p>
                  <p>
                    None of them manage what&rsquo;s happening right now. None of them tell your
                    provider that Room 4 has been waiting 38 minutes. None of them alert the front
                    desk before the lobby tips into chaos. None of them surface the pre-auth that
                    expires Friday. None of them track the RTM minutes your clinic is legally
                    entitled to bill but isn&rsquo;t.
                  </p>
                  <p>
                    clinIQ is the operational layer that runs parallel to your EHR — not replacing
                    it, but doing the job it was never designed to do.
                  </p>
                </div>
              </div>
              <div className={s.realityRight}>
                <ul className={s.painList} aria-label="What competitors don't do">
                  {[
                    'EHRs excel at documentation. They have no real-time view of which patient is where in your clinic right now.',
                    'Check-in kiosks collect intake data. They do not track what happens after the patient sits down.',
                    'Queue tools manage a line. They do not orchestrate the care workflow that follows.',
                    'Scheduling software fills the calendar. It cannot tell you the visit is about to run 45 minutes over.',
                    'Whiteboards show the last update. They cannot send an alert when a provider has been idle for 20 minutes.',
                    'Spreadsheets store historical data. They cannot surface a pre-auth that expired yesterday.',
                  ].map((point, i) => (
                    <li key={i} className={s.painItem}>
                      <span className={s.painDot} aria-hidden="true" />
                      <span className={s.painText}>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className={s.cta}>
          <div className={s.ctaBg}><div className={s.ctaOrb} aria-hidden="true" /></div>
          <div className={s.container}>
            <div className={s.ctaContent}>
              <h2 className={s.ctaTitle}>
                Stop patching together<br />
                <em>tools that weren&rsquo;t built to work together.</em>
              </h2>
              <p className={s.ctaDesc}>
                clinIQ gives you patient flow, check-in, RTM billing, pre-authorization, and
                analytics in one platform — built for clinics that need operational control, not
                just another system of record.
              </p>
              <div className={s.ctaActions}>
                <a href="/demo" className={s.btnPrimary}>
                  See clinIQ in action
                  <svg className={s.btnIcon} viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M4 10h12m-4-4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a href="/features/patient-flow" className={s.btnGhost}>
                  How real-time flow works
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
