import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import s from '@/app/specialties/specialty-full.module.css'

export const metadata: Metadata = {
  title: 'Replace Your Medical Whiteboard with clinIQ — Real-Time Patient Tracking',
  description:
    'The nursing station whiteboard tells you what was true when someone last updated it. clinIQ tells you what is true right now — with live room status, alerts, and zero manual updates.',
  keywords: [
    'replace medical whiteboard',
    'digital patient tracking instead of whiteboard',
    'clinic whiteboard alternative',
    'real-time patient flow tracking',
    'nursing station whiteboard replacement',
  ],
  openGraph: {
    title: 'Replace Your Medical Whiteboard with clinIQ — Real-Time Patient Tracking',
    description:
      'Whiteboards tell you what was true when it was written. clinIQ tells you what\'s true right now.',
    type: 'website',
  },
}

const schemaData = {
  breadcrumb: {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cliniq.com' },
      { '@type': 'ListItem', position: 2, name: 'Compare', item: 'https://cliniq.com/compare' },
      { '@type': 'ListItem', position: 3, name: 'Whiteboard Alternative', item: 'https://cliniq.com/compare/whiteboards' },
    ],
  },
  faq: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Why is the nursing station whiteboard a problem beyond just being outdated?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The whiteboard\'s core flaw is that it requires manual updates — which means it\'s almost never current. When an MA rooms a patient, they often don\'t update the board immediately. When a provider leaves a room, the board might still show that patient as "with provider." Staff make decisions based on stale data, leading to patients waiting in rooms without knowing what\'s happening and providers wasting time tracking down room status. The whiteboard also exposes patient names and room numbers in the open nursing station — a HIPAA risk when visitors can walk by.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does clinIQ update without requiring manual entry?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'clinIQ updates are triggered by simple staff actions: a tap on a mobile device or workstation when a patient is roomed, when a provider enters, when a room is ready for the next patient. These micro-interactions take seconds and automatically push updates to the dashboard, the lobby display, and any staff with visibility. There is no separate whiteboard to walk to and update. The whole team sees the same real-time state.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does clinIQ work for all staff, or just nurses?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'clinIQ is designed for the entire care team — front desk, MAs, providers, care coordinators, and practice managers. Each role sees a view appropriate to their responsibilities. Front desk sees check-in status and lobby queue. MAs see room assignments and patient readiness. Providers see their schedule and current room states. Managers see the full operational dashboard with bottleneck alerts and throughput metrics.',
        },
      },
      {
        '@type': 'Question',
        name: 'What happens to the patient data on our whiteboard during a transition to clinIQ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'clinIQ goes live within days and pulls patient appointment data from your existing EHR. On the day of launch, the whiteboard simply stops being the source of truth. There is no data migration from the whiteboard itself — it was never a data system. clinIQ connects to your EHR, populates the day\'s schedule, and staff begin using the digital dashboard. Most clinics fully stop using the whiteboard within the first week.',
        },
      },
    ],
  },
}

const tdStyle: React.CSSProperties = {
  padding: '0.85rem 1rem',
  borderBottom: '1px solid #e5e2db',
  fontSize: '0.95rem',
  verticalAlign: 'top',
}
const thStyle: React.CSSProperties = {
  padding: '0.85rem 1rem',
  textAlign: 'left',
  fontWeight: 700,
  fontSize: '0.85rem',
  textTransform: 'uppercase',
  letterSpacing: '0.06em',
  borderBottom: '2px solid #1a1a1a',
}
const checkStyle: React.CSSProperties = { color: '#0a9e6e', fontWeight: 700 }
const crossStyle: React.CSSProperties = { color: '#c0392b', fontWeight: 700 }

export default function WhiteboardsPage() {
  return (
    <>
      <NavInner />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData.breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData.faq) }}
      />
      <main>
        {/* Hero */}
        <section className={s.hero}>
          <div className={s.heroBg}>
            <div className={s.heroOrb} />
            <div className={s.heroOrbTeal} />
            <div className={s.heroOrbBlue} />
            <div className={s.heroGrain} />
          </div>
          <div className={s.heroContent}>
            <div className={s.badge}>Whiteboard Replacement</div>
            <h1 className={s.heroTitle}>
              Whiteboards tell you<br />
              what was true when<br />
              it was written.
            </h1>
            <p className={s.heroSubtitle}>
              The nursing station whiteboard is manually updated, staff-only, and always behind.
              clinIQ gives every member of your care team a live view of every patient, every
              room, right now — with zero manual board updates.
            </p>
            <div className={s.heroActions}>
              <a href="/demo" className={s.btnPrimary}>
                See clinIQ Live <span className={s.btnIcon}>→</span>
              </a>
              <a href="/compare" className={s.btnGhost}>
                All Comparisons
              </a>
            </div>
          </div>
        </section>

        {/* Reality */}
        <section className={s.reality}>
          <div className={s.realityGrid}>
            <div className={s.realityLeft}>
              <h2>The whiteboard problem is not the whiteboard</h2>
              <div className={s.realityNarrative}>
                <p>
                  The whiteboard isn't the root problem. The root problem is that your clinic's
                  operational awareness depends on someone walking to a wall and writing on it. In
                  a busy clinic, that rarely happens in real time. An MA rooms a patient and heads
                  immediately to the next task. A provider steps out of a room and gets pulled into
                  a hallway conversation. The board doesn't get updated.
                </p>
                <p>
                  Within an hour of opening, the whiteboard is telling a different story than what's
                  actually happening in the rooms. Front desk staff field "where is my patient?"
                  calls without knowing the answer. Providers walk into a room that turned out to
                  be occupied. MAs discover that a patient who was marked "waiting" was actually
                  already discharged.
                </p>
                <p>
                  There's also the HIPAA dimension. A whiteboard in the nursing station shows
                  patient names and room numbers in plain sight — visible to visitors, delivery
                  personnel, and anyone who walks through the unit. That's a real privacy exposure
                  that many practices accept by habit rather than by design.
                </p>
                <p>
                  clinIQ replaces the whiteboard with a real-time digital dashboard that updates
                  with simple micro-interactions — a tap when a patient is roomed, a tap when a
                  provider enters, a tap when the room is clear. The entire care team sees the same
                  current state on their devices or workstations. No walking to the board. No stale
                  data. No exposed patient names.
                </p>
              </div>
            </div>
            <div className={s.realityRight}>
              <h3>The real cost of whiteboard operations</h3>
              <ul className={s.painList}>
                <li className={s.painItem}>
                  <span className={s.painDot} />
                  <span className={s.painText}>
                    Staff spend 5–10 minutes per day walking to and from the board — that's
                    30–60 minutes across a 6-person team
                  </span>
                </li>
                <li className={s.painItem}>
                  <span className={s.painDot} />
                  <span className={s.painText}>
                    Every room assignment decision is made on potentially stale information,
                    causing double-bookings and idle rooms
                  </span>
                </li>
                <li className={s.painItem}>
                  <span className={s.painDot} />
                  <span className={s.painText}>
                    Patient names visible on the nursing station board — a daily HIPAA privacy
                    exposure
                  </span>
                </li>
                <li className={s.painItem}>
                  <span className={s.painDot} />
                  <span className={s.painText}>
                    No historical data — when the board is erased, all operational intelligence is
                    lost
                  </span>
                </li>
                <li className={s.painItem}>
                  <span className={s.painDot} />
                  <span className={s.painText}>
                    Patients in rooms have no visibility into what's happening — anxiety and
                    dissatisfaction increase with every unacknowledged minute
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Comparison table */}
        <section style={{ padding: '5rem 1.5rem', background: 'var(--cream, #f5f3ef)' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '2rem', textAlign: 'center' }}>
              Whiteboard vs clinIQ
            </h2>
            <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.07)' }}>
              <thead>
                <tr style={{ background: '#1a1a1a', color: '#fff' }}>
                  <th style={{ ...thStyle, color: '#fff', borderBottom: 'none' }}>Capability</th>
                  <th style={{ ...thStyle, color: '#fff', borderBottom: 'none', textAlign: 'center' }}>Physical Whiteboard</th>
                  <th style={{ ...thStyle, color: '#0a9e6e', borderBottom: 'none', textAlign: 'center' }}>clinIQ</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Room status visibility', '✓ When manually updated', '✓ Real-time, automatic'],
                  ['Accessible to full care team', '✗ Nursing station only', '✓ Any device, anywhere'],
                  ['Patient-facing lobby display', '✗ Not available', '✓ LobbyView TV display'],
                  ['Bottleneck / delay alerts', '✗ Not available', '✓ Threshold-based alerts'],
                  ['HIPAA-compliant display', '✗ Names exposed on wall', '✓ Privacy-forward'],
                  ['Historical flow analytics', '✗ Erased daily', '✓ Trend data & reports'],
                  ['RTM billing tracking', '✗ Not available', '✓ CPT 98975–98981'],
                  ['Pre-authorization management', '✗ Not available', '✓ Pipeline + alerts'],
                  ['Mobile access', '✗ Not available', '✓ Any smartphone'],
                  ['Multi-provider scheduling', '✗ Not available', '✓ Full scheduling suite'],
                  ['Update mechanism', 'Walk to wall, write', 'One tap on any device'],
                  ['Cost', 'Markers + eraser', 'Flat monthly per provider'],
                ].map(([feature, wb, cliniq], i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? '#fff' : '#fafaf8' }}>
                    <td style={tdStyle}>{feature}</td>
                    <td style={{ ...tdStyle, textAlign: 'center' }}>
                      <span style={wb.startsWith('✗') ? crossStyle : (wb.startsWith('✓') ? checkStyle : {})}>
                        {wb}
                      </span>
                    </td>
                    <td style={{ ...tdStyle, textAlign: 'center' }}>
                      <span style={cliniq.startsWith('✓') ? checkStyle : crossStyle}>
                        {cliniq}
                      </span>
                    </td>
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
              <div className={s.statNumber}>Zero</div>
              <div className={s.statLabel}>walks to the board per day</div>
            </div>
            <div className={s.stat}>
              <div className={s.statNumber}>Real-time</div>
              <div className={s.statLabel}>room status on every device</div>
            </div>
            <div className={s.stat}>
              <div className={s.statNumber}>100%</div>
              <div className={s.statLabel}>of staff see the same current state</div>
            </div>
            <div className={s.stat}>
              <div className={s.statNumber}>Days</div>
              <div className={s.statLabel}>to go live, no hardware required</div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className={s.faq}>
          <div style={{ maxWidth: '780px', margin: '0 auto', padding: '0 1.5rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '2.5rem', textAlign: 'center' }}>
              Common questions
            </h2>
            <ul className={s.faqList}>
              {schemaData.faq.mainEntity.map((item, i) => (
                <li key={i} className={s.faqItem}>
                  <div className={s.faqQ}>{item.name}</div>
                  <div className={s.faqA}>{item.acceptedAnswer.text}</div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className={s.cta}>
          <div className={s.ctaBg}>
            <div className={s.ctaOrb} />
          </div>
          <div className={s.ctaContent}>
            <h2 className={s.ctaTitle}>Put down the marker. Pick up real-time visibility.</h2>
            <p className={s.ctaDesc}>
              clinIQ replaces your whiteboard with a live digital dashboard — accessible from
              every device, updated instantly, visible to every member of your care team.
            </p>
            <div className={s.ctaActions}>
              <a href="/demo" className={s.btnPrimary}>
                Book a Demo <span className={s.btnIcon}>→</span>
              </a>
              <a href="/pricing" className={s.btnGhost}>
                See Pricing
              </a>
            </div>
            <p className={s.ctaNote}>Live in days. Works with any EHR.</p>
          </div>
        </section>
      </main>
      <FooterInner />
    </>
  )
}
