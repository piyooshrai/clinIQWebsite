import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import s from '@/app/specialties/specialty-full.module.css'

export const metadata: Metadata = {
  title: 'Replace Patient Tracking Spreadsheets with clinIQ — Live Clinic Operations',
  description:
    'Spreadsheets are where patient flow data goes to be wrong. clinIQ gives your clinic real-time tracking, automatic alerts, and operational intelligence — no manual updates required.',
  keywords: [
    'replace patient tracking spreadsheet',
    'clinic scheduling spreadsheet alternative',
    'Excel patient flow alternative',
    'Google Sheets clinic operations',
    'spreadsheet vs clinic software',
  ],
  openGraph: {
    title: 'Replace Patient Tracking Spreadsheets with clinIQ — Live Clinic Operations',
    description:
      'Spreadsheets are where patient flow data goes to be wrong.',
    type: 'website',
  },
}

const schemaData = {
  breadcrumb: {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cliniqhealthcare.com' },
      { '@type': 'ListItem', position: 2, name: 'Compare', item: 'https://cliniqhealthcare.com/compare' },
      { '@type': 'ListItem', position: 3, name: 'Spreadsheet Alternative', item: 'https://cliniqhealthcare.com/compare/spreadsheets' },
    ],
  },
  faq: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What\'s wrong with using Excel or Google Sheets to track patients?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Spreadsheets require manual entry — which means they are always behind reality. In a busy clinic, staff don\'t have time to open a shared spreadsheet, find the right row, and update a cell every time a patient status changes. The spreadsheet reflects what someone last entered, not what\'s actually happening. Compounding this: spreadsheets have no alert capability, no mobile-friendly interface, no access controls for different staff roles, and no integration with your EHR or scheduling system. They also create HIPAA risks when shared via email or stored in personal Google Drive accounts.',
        },
      },
      {
        '@type': 'Question',
        name: 'Our practice manager built a complex spreadsheet that mostly works. Why change?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Complex spreadsheets are a sign that your practice needs real operations software, not more spreadsheet engineering. Every hour spent building formulas, fixing broken macros, and training new staff on a custom spreadsheet is an hour not spent on patient care. More critically, a spreadsheet has a single point of failure: when the person who built it leaves, the institutional knowledge and fragile logic leave with them. clinIQ gives you a purpose-built platform that doesn\'t break when staff turn over.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does clinIQ handle the data my spreadsheet currently tracks?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'clinIQ covers every common spreadsheet use case in clinic operations: daily patient lists, room assignments, status tracking, wait time logging, and scheduling. It also pulls appointment data directly from your EHR, so you\'re not manually entering the day\'s schedule. Anything you currently track in a spreadsheet, clinIQ tracks automatically — with real-time updates, no manual entry, and built-in alerts when something needs attention.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is patient data in spreadsheets a HIPAA risk?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, in most implementations. Patient data in Google Sheets or shared Excel files often lives in personal Google accounts, on local desktops without encryption, or gets emailed between staff without secure transmission. These are real HIPAA exposure points. clinIQ stores all patient operational data in a HIPAA-compliant environment with access controls, audit logs, and no patient-identifiable data floating in personal cloud accounts.',
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

export default function SpreadsheetsPage() {
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
            <div className={s.badge}>Spreadsheet Replacement</div>
            <h1 className={s.heroTitle}>
              Spreadsheets are where<br />
              patient flow data goes<br />
              to be wrong.
            </h1>
            <p className={s.heroSubtitle}>
              Excel and Google Sheets require manual updates, have no alert capability, break when
              the person who built them leaves, and create daily HIPAA exposure. clinIQ gives you
              live operational data with zero manual entry required.
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
              <h2>The spreadsheet trap</h2>
              <div className={s.realityNarrative}>
                <p>
                  Every clinic that runs on spreadsheets has a similar story. It started as one
                  simple file — maybe a daily patient list, maybe a room assignment tracker. Then
                  someone added a formula. Then a macro. Then a second tab, then a third. Then a
                  dedicated person whose job is partly "keeping the spreadsheet working."
                </p>
                <p>
                  Spreadsheets are a symptom of operational complexity that has outgrown ad hoc
                  tooling. The reason they persist is inertia: they're free (seemingly), everyone
                  knows Excel, and nobody wants to rip out a system that kind of works. But the
                  hidden cost accumulates. Staff spend minutes per patient manually updating cells.
                  Decisions get made on stale data. When two people update the same row
                  simultaneously, a conflict silently loses one update. There are no alerts. There
                  is no mobile interface. There is no integration with your EHR.
                </p>
                <p>
                  The HIPAA exposure is real and often unacknowledged. Patient names, room numbers,
                  and status notes in a shared Google Sheet mean that data lives in personal Google
                  accounts. Emailed Excel files with patient data traverse unsecured channels.
                  These are not theoretical risks — they are daily operational practices in many
                  clinics that would not survive a compliance audit.
                </p>
                <p>
                  clinIQ was built specifically to replace the operational spreadsheet layer. It
                  connects to your EHR, populates the day's schedule automatically, and updates
                  patient status through simple tap interactions. No manual cells. No broken
                  formulas. No single person keeping the whole thing running.
                </p>
              </div>
            </div>
            <div className={s.realityRight}>
              <h3>What spreadsheet operations actually cost</h3>
              <ul className={s.painList}>
                <li className={s.painItem}>
                  <span className={s.painDot} />
                  <span className={s.painText}>
                    3–5 minutes per patient per day in manual status updates across staff — easily
                    1–2 hours of labor in a 30-patient day
                  </span>
                </li>
                <li className={s.painItem}>
                  <span className={s.painDot} />
                  <span className={s.painText}>
                    No real-time visibility — the spreadsheet always reflects the past, not
                    the present
                  </span>
                </li>
                <li className={s.painItem}>
                  <span className={s.painDot} />
                  <span className={s.painText}>
                    Zero alert capability — bottlenecks form silently while staff are focused
                    elsewhere
                  </span>
                </li>
                <li className={s.painItem}>
                  <span className={s.painDot} />
                  <span className={s.painText}>
                    Single point of failure — when the spreadsheet architect leaves, institutional
                    knowledge disappears
                  </span>
                </li>
                <li className={s.painItem}>
                  <span className={s.painDot} />
                  <span className={s.painText}>
                    HIPAA exposure — patient data in personal cloud accounts, emailed files,
                    and unsecured local storage
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
              Spreadsheet vs clinIQ
            </h2>
            <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.07)' }}>
              <thead>
                <tr style={{ background: '#1a1a1a', color: '#fff' }}>
                  <th style={{ ...thStyle, color: '#fff', borderBottom: 'none' }}>Capability</th>
                  <th style={{ ...thStyle, color: '#fff', borderBottom: 'none', textAlign: 'center' }}>Excel / Google Sheets</th>
                  <th style={{ ...thStyle, color: '#0a9e6e', borderBottom: 'none', textAlign: 'center' }}>clinIQ</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Patient status tracking', '✓ With manual updates', '✓ Automatic, real-time'],
                  ['EHR schedule import', '✗ Manual entry required', '✓ Auto-pulls from EHR'],
                  ['Real-time visibility for all staff', '✗ Refresh/sync issues', '✓ Instant, simultaneous'],
                  ['Bottleneck alerts', '✗ Not available', '✓ Threshold-based'],
                  ['Mobile access', '✗ Unusable on mobile', '✓ Any device'],
                  ['HIPAA-compliant data storage', '✗ Personal cloud risk', '✓ Compliant environment'],
                  ['LobbyView patient display', '✗ Not available', '✓ Branded TV display'],
                  ['RTM billing management', '✗ Not available', '✓ CPT 98975–98981'],
                  ['Pre-authorization tracking', '✗ Not available', '✓ Pipeline + expiry alerts'],
                  ['Role-based access controls', '✗ No native role control', '✓ Per-role views'],
                  ['Historical analytics', '✗ Manual aggregation', '✓ Built-in dashboards'],
                  ['Update method', 'Manual cell entry', 'One tap on any device'],
                ].map(([feature, sheet, cliniq], i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? '#fff' : '#fafaf8' }}>
                    <td style={tdStyle}>{feature}</td>
                    <td style={{ ...tdStyle, textAlign: 'center' }}>
                      <span style={sheet.startsWith('✗') ? crossStyle : (sheet.startsWith('✓') ? checkStyle : {})}>
                        {sheet}
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
              <div className={s.statLabel}>manual cell updates required</div>
            </div>
            <div className={s.stat}>
              <div className={s.statNumber}>Real-time</div>
              <div className={s.statLabel}>status without polling or refreshing</div>
            </div>
            <div className={s.stat}>
              <div className={s.statNumber}>HIPAA</div>
              <div className={s.statLabel}>compliant from day one</div>
            </div>
            <div className={s.stat}>
              <div className={s.statNumber}>Days</div>
              <div className={s.statLabel}>to go live, connected to your EHR</div>
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
            <h2 className={s.ctaTitle}>Close the spreadsheet. Open real-time operations.</h2>
            <p className={s.ctaDesc}>
              clinIQ replaces your patient tracking spreadsheets with live, automatic, HIPAA-compliant
              operational intelligence — connected to your EHR and live in days.
            </p>
            <div className={s.ctaActions}>
              <a href="/demo" className={s.btnPrimary}>
                Book a Demo <span className={s.btnIcon}>→</span>
              </a>
              <a href="/pricing" className={s.btnGhost}>
                See Pricing
              </a>
            </div>
            <p className={s.ctaNote}>Flat monthly pricing. No per-patient fees. No spreadsheets.</p>
          </div>
        </section>
      </main>
      <FooterInner />
    </>
  )
}
