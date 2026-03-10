import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import s from '@/app/specialties/specialty-full.module.css'

export const metadata: Metadata = {
  title: 'Your EHR vs clinIQ — Document What Happened vs Manage What Is Happening',
  description:
    'EHRs document what happened. They were never designed to manage what is happening right now. clinIQ is the operational layer that every EHR leaves empty — live patient flow, RTM billing automation, check-in, and real-time analytics.',
  keywords: [
    'EHR patient flow management',
    'clinic operations beyond EHR',
    'EHR operational layer',
    'clinic operations software',
    'EHR limitations patient flow',
  ],
  openGraph: {
    title: 'Your EHR Was Built for Yesterday. clinIQ Manages Today.',
    description:
      'Every EHR documents what happened. None of them manage what is happening right now — room status, live queues, RTM billing windows, PA expirations. That is clinIQ.',
    type: 'website',
    url: 'https://cliniqhealthcare.com/compare/ehr-only',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cliniqhealthcare.com' },
    { '@type': 'ListItem', position: 2, name: 'Compare', item: 'https://cliniqhealthcare.com/compare' },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'clinIQ vs EHR-only',
      item: 'https://cliniqhealthcare.com/compare/ehr-only',
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why can\'t my EHR handle patient flow management?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'EHRs are architected around the patient record — a document that captures what happened during an encounter. Real-time operational management requires a fundamentally different data model: continuous state tracking, live event streams, threshold monitoring, and broadcast displays. No EHR — Epic, athenahealth, eCW, NextGen, or otherwise — was designed to be a real-time operations system. That is a separate category of software.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which EHRs does clinIQ work with?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'clinIQ works with any EHR. It is designed as an EHR-agnostic operational layer — it deploys on top of Epic, athenahealth, eClinicalWorks, NextGen, AdvancedMD, Tebra, Kareo, Modernizing Medicine, and any other EHR without requiring integration or data migration. Your clinical documentation stays exactly where it is.',
      },
    },
    {
      '@type': 'Question',
      name: 'What revenue am I missing by running EHR-only?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most quantifiable gap is RTM billing. CPT codes 98975–98981 require tracking 16-day intervals per patient — a workflow most EHRs do not automate. Practices that add clinIQ typically recover $100–125 per enrolled patient per month in RTM billing alone. Additional revenue is recovered through pre-authorization management (fewer denials), waitlist fill (fewer empty slots), and recall campaigns (higher return visit rates).',
      },
    },
    {
      '@type': 'Question',
      name: 'How does clinIQ deploy without disrupting my EHR workflows?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'clinIQ is an operational layer that runs alongside your EHR — not inside it. It does not modify your clinical documentation workflows, your billing configurations, or your EHR data. Staff continue using their EHR exactly as they always have. clinIQ adds a separate operational interface that the front desk, MAs, and administrators use to manage the live clinic day. Deployment typically takes less than one week.',
      },
    },
  ],
}

const tableRows = [
  {
    feature: 'Live room & queue status',
    cliniq: 'Real-time floor map with time-in-stage per patient',
    competitor: 'Appointment schedule only — no live operational view',
  },
  {
    feature: 'Patient-facing lobby display',
    cliniq: 'LobbyView — privacy-forward wait time display',
    competitor: 'No patient-facing operational display',
  },
  {
    feature: 'Self-service check-in',
    cliniq: 'Kiosk + mobile, feeds directly into live queue',
    competitor: 'Check-in modules vary; rarely connected to live flow',
  },
  {
    feature: 'RTM billing (CPT 98975–98981)',
    cliniq: 'Automated 16-day threshold alerts, time capture per patient',
    competitor: 'Manual documentation required — inconsistent capture',
  },
  {
    feature: 'Pre-authorization tracking',
    cliniq: 'PA status, expiration alerts, denial appeal workflow',
    competitor: 'PA tracked separately — not surfaced in live patient flow',
  },
  {
    feature: 'Bottleneck detection',
    cliniq: 'Auto-alerts when any stage exceeds time threshold',
    competitor: 'No proactive alerting — staff must notice delays manually',
  },
  {
    feature: 'Waitlist fill & recall',
    cliniq: 'Automated waitlist SMS, recall campaigns',
    competitor: 'Manual recall, no automated waitlist management',
  },
  {
    feature: 'Analytics',
    cliniq: 'Real-time throughput, stage-level bottleneck, revenue trends',
    competitor: 'Historical reporting only — no real-time operational analytics',
  },
  {
    feature: 'Works with any EHR',
    cliniq: 'Yes — EHR-agnostic, deploys in days',
    competitor: 'n/a — this is the EHR being supplemented',
  },
]

export default function EHROnlyPage() {
  return (
    <>
      <NavInner />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main>
        {/* Hero */}
        <section className={s.hero}>
          <div className={s.heroBg}>
            <div className={`${s.heroOrb} ${s.heroOrbTeal}`} />
            <div className={`${s.heroOrb} ${s.heroOrbBlue}`} />
            <div className={s.heroGrain} />
          </div>
          <div className={s.heroContent}>
            <span className={s.badge}>EHR-only vs clinIQ</span>
            <h1 className={s.heroTitle}>
              EHRs document what happened. clinIQ manages what&apos;s happening right now.
            </h1>
            <p className={s.heroSubtitle}>
              Every EHR on the market — Epic, athenahealth, eClinicalWorks, NextGen, AdvancedMD, Tebra — was designed around a single core function: capturing the clinical record of what occurred during a patient encounter. Not one of them was designed to show your front desk who is in Room 3 right now, alert your MA when a patient has been waiting 30 minutes, or fire an RTM billing reminder when a patient crosses the 16-day threshold. That capability requires a different kind of software entirely.
            </p>
            <div className={s.heroActions}>
              <a href="/demo" className={s.btnPrimary}>
                See clinIQ in action<span className={s.btnIcon}>→</span>
              </a>
              <a href="/compare" className={s.btnGhost}>All comparisons</a>
            </div>
          </div>
        </section>

        {/* Reality */}
        <section className={s.reality}>
          <div className={s.realityGrid}>
            <div className={s.realityLeft}>
              <h2>What your EHR was designed to do</h2>
              <div className={s.realityNarrative}>
                <p>
                  EHRs are fundamentally record-keeping systems. Their data model is organized around encounters — discrete events with a start time, an end time, clinical notes, diagnoses, and billing codes. This architecture is excellent for what it was designed to do: create a durable, auditable record of the care that was delivered. The best EHRs also layer on scheduling, billing workflow, e-prescribing, and population health tools — all of which extend the record-keeping model in useful directions.
                </p>
                <p>
                  But the record-keeping architecture has a fundamental blind spot: the present moment. An EHR records what happened. It has no native concept of &quot;happening right now.&quot; It cannot track that Patient A has been in Triage for 22 minutes, Patient B&apos;s room has been empty for 15 minutes, and Patient C&apos;s RTM billing window closes in 2 days. These are real-time operational states — and no EHR on the market was built to manage them.
                </p>
              </div>
            </div>
            <div className={s.realityRight}>
              <h2>What the operational layer provides</h2>
              <div className={s.realityNarrative}>
                <p>
                  clinIQ exists in a category that EHRs deliberately left empty: clinic operations management. It tracks the live state of every patient, every room, and every care stage in real time — not as a historical record, but as a continuous operational dashboard that every staff member can see and act on. When Bay 2 has been occupied for 45 minutes, clinIQ tells you. When a patient checks in from the parking lot, clinIQ places them in the queue before they reach the front desk.
                </p>
                <p>
                  Beyond flow, clinIQ captures the operational revenue that EHR-only practices consistently miss. RTM billing (CPT 98975–98981) is the clearest example: $100–125 per enrolled patient per month that requires no additional clinical effort — just the operational tracking of 16-day intervals that clinIQ provides automatically. Pre-authorization expirations, waitlist fill, and recall campaigns all follow the same pattern: operational intelligence that creates revenue, none of which any EHR was designed to surface.
                </p>
              </div>
              <ul className={s.painList}>
                <li className={s.painItem}>
                  <span className={s.painDot} />
                  <span className={s.painText}>Works with every EHR — Epic, athenahealth, eCW, NextGen, AdvancedMD, and more</span>
                </li>
                <li className={s.painItem}>
                  <span className={s.painDot} />
                  <span className={s.painText}>Deploys in days — no EHR migration, no clinical documentation changes</span>
                </li>
                <li className={s.painItem}>
                  <span className={s.painDot} />
                  <span className={s.painText}>RTM billing automation alone typically offsets the full clinIQ cost</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Before / After */}
        <section className={s.changes}>
          <div className={s.changesGrid}>
            <div className={s.changeCard}>
              <div className={`${s.changeLabel} ${s.changeLabelBefore}`}>EHR-only clinic day</div>
              <div className={s.changeBefore}>
                Staff checks the appointment list to guess who is where. MA walks to the back to see which rooms are free. RTM billing captured inconsistently — or not at all. PA expirations discovered during visits. Lobby patients wait with no information. Canceled slots stay empty.
              </div>
            </div>
            <div className={s.changeCard}>
              <div className={`${s.changeLabel} ${s.changeLabelAfter}`}>With clinIQ added</div>
              <div className={s.changeAfter}>
                Live floor map on every staff screen. LobbyView shows patients their position. RTM alert fires at day 14 for every eligible patient. PA dashboard shows 30-day expiration window. Waitlist SMS fills cancellations automatically. EHR workflows untouched.
              </div>
            </div>
          </div>
        </section>

        {/* Feature Table */}
        <section style={{ padding: '5rem 1.5rem', background: 'var(--cream, #f5f3ef)' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2
              style={{
                fontFamily: "'Instrument Serif', Georgia, serif",
                fontSize: '2rem',
                marginBottom: '2rem',
              }}
            >
              What EHR-only leaves empty
            </h2>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9375rem' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #0d0d0c' }}>
                  <th style={{ textAlign: 'left', padding: '0.75rem 1rem', width: '40%' }}>Capability</th>
                  <th style={{ textAlign: 'left', padding: '0.75rem 1rem', color: '#0d9488' }}>clinIQ</th>
                  <th style={{ textAlign: 'left', padding: '0.75rem 1rem' }}>EHR-only</th>
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row, i) => (
                  <tr
                    key={i}
                    style={{
                      borderBottom: '1px solid #e5e5e5',
                      background: i % 2 === 0 ? '#fff' : 'transparent',
                    }}
                  >
                    <td style={{ padding: '0.75rem 1rem', fontWeight: 500 }}>{row.feature}</td>
                    <td style={{ padding: '0.75rem 1rem', color: '#0d9488' }}>✓ {row.cliniq}</td>
                    <td style={{ padding: '0.75rem 1rem', color: '#666' }}>{row.competitor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Stats */}
        <section className={s.stats}>
          <div className={s.statsGrid}>
            <div className={s.stat}>
              <div className={s.statNumber}>$100–125</div>
              <div className={s.statLabel}>Per RTM-enrolled patient per month — missed without clinIQ</div>
            </div>
            <div className={s.stat}>
              <div className={s.statNumber}>Any EHR</div>
              <div className={s.statLabel}>Epic, athenahealth, eCW, NextGen, AdvancedMD — clinIQ works with all</div>
            </div>
            <div className={s.stat}>
              <div className={s.statNumber}>&lt;1 week</div>
              <div className={s.statLabel}>Typical deployment time — no EHR migration required</div>
            </div>
            <div className={s.stat}>
              <div className={s.statNumber}>Day 1</div>
              <div className={s.statLabel}>When your team gains live floor visibility after deployment</div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className={s.faq}>
          <h2>Frequently asked questions</h2>
          <ul className={s.faqList}>
            {faqSchema.mainEntity.map((item, i) => (
              <li key={i} className={s.faqItem}>
                <div className={s.faqQ}>{item.name}</div>
                <div className={s.faqA}>{item.acceptedAnswer.text}</div>
              </li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <section className={s.cta}>
          <div className={s.ctaBg}>
            <div className={s.ctaOrb} />
          </div>
          <div className={s.ctaContent}>
            <h2 className={s.ctaTitle}>Your EHR documents care. clinIQ delivers it.</h2>
            <p className={s.ctaDesc}>
              clinIQ works on top of any EHR. No migration, no disruption to clinical workflows — just the operational layer your EHR was never designed to provide, live in days.
            </p>
            <div className={s.ctaActions}>
              <a href="/demo" className={s.btnPrimary}>
                Book a demo<span className={s.btnIcon}>→</span>
              </a>
              <a href="/pricing" className={s.btnGhost}>See pricing</a>
            </div>
            <p className={s.ctaNote}>Flat monthly pricing. Works with your current EHR on day one.</p>
          </div>
        </section>

        {/* Related */}
        <section className={s.related}>
          <div className={s.relatedLinks}>
            <a href="/compare/athenahealth" className={s.relatedLink}>clinIQ vs athenahealth</a>
            <a href="/compare/eclinicalworks" className={s.relatedLink}>clinIQ vs eClinicalWorks</a>
            <a href="/compare/nextgen" className={s.relatedLink}>clinIQ vs NextGen</a>
            <a href="/compare/generic-scheduling" className={s.relatedLink}>clinIQ vs generic scheduling tools</a>
          </div>
        </section>
      </main>
      <FooterInner />
    </>
  )
}
