import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import s from '@/app/specialties/specialty-full.module.css'

export const metadata: Metadata = {
  title: 'Replace Paper Sign-In Sheet — Digital Check-In for Clinics | clinIQ',
  description:
    'Paper sign-in sheets expose patient names to every person who walks by, require manual transcription, and provide zero analytics. clinIQ replaces them with privacy-forward digital check-in that goes live in days.',
  keywords: [
    'replace paper sign-in sheet clinic',
    'digital check-in replace paper',
    'paper sign-in HIPAA',
    'clinic check-in digital alternative',
    'paper clipboard waiting room alternative',
  ],
  openGraph: {
    title: 'Replace Paper Sign-In Sheet — Digital Check-In for Clinics | clinIQ',
    description:
      'Paper sign-in tells you who arrived. It doesn\'t tell you if the privacy violations are worth it.',
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
      { '@type': 'ListItem', position: 3, name: 'Paper Sign-In Alternative', item: 'https://cliniqhealthcare.com/compare/paper-signin' },
    ],
  },
  faq: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is a paper sign-in sheet a HIPAA violation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The OCR (HHS Office for Civil Rights) has issued guidance acknowledging that sign-in sheets are a recognized practice but that they create real privacy risks. A paper sign-in sheet that displays multiple patients\' names is an incidental disclosure — patients can see each other\'s names and appointment reasons. If the sheet includes diagnosis information, appointment type, or provider name, the risk increases significantly. OCR recommends limiting information visible on sign-in sheets and has cited clinics for violations. Digital check-in eliminates the exposure entirely: each patient sees only their own information.',
        },
      },
      {
        '@type': 'Question',
        name: 'What information does clinIQ\'s check-in capture that a paper sheet cannot?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'clinIQ\'s digital check-in captures arrival time with millisecond precision, insurance information, consent forms, updated demographics, reason for visit, and pre-visit questionnaires — all flowing directly into the operational dashboard without manual transcription. A paper sheet captures a signature and an arrival time, then requires a staff member to manually re-enter that data. clinIQ eliminates the transcription step entirely and enriches the check-in with structured data your EHR and operations system can use.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does clinIQ check-in work for patients who are less comfortable with technology?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'clinIQ\'s check-in is designed to be accessible. Patients can check in via QR code on their phone before arrival, from a lobby tablet, or with staff assistance at the front desk. The flow is designed for minimal steps — typically 3–4 screens — with large text and simple navigation. For patients who need help, the front desk can complete check-in on their behalf in under 30 seconds. The goal is privacy-forward and efficient, not technology-first.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does removing the paper sign-in sheet slow down check-in?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'In practice, digital check-in is faster than paper for established patients. Pre-visit check-in (via link sent before appointment) means patients who arrive have already completed the process before they walk in. For new patients, digital forms capture more information in the same or less time than paper — without the staff time to transcribe handwritten notes. Most clinics see front desk workload decrease within the first week of going digital.',
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

export default function PaperSignInPage() {
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
            <div className={s.badge}>Paper Sign-In Replacement</div>
            <h1 className={s.heroTitle}>
              Paper sign-in tells you<br />
              who arrived. Not if the<br />
              privacy risk is worth it.
            </h1>
            <p className={s.heroSubtitle}>
              The clipboard in the waiting room exposes patient names to everyone who walks in,
              requires manual transcription, and produces zero operational data. clinIQ replaces
              it with privacy-forward digital check-in that captures everything — and goes live
              in days.
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
              <h2>The clipboard problem no one talks about</h2>
              <div className={s.realityNarrative}>
                <p>
                  The paper sign-in sheet has been in waiting rooms so long that most clinics don't
                  think of it as a choice — it's just how things work. But it is a choice, and it's
                  one that creates daily risk without most practices realizing it.
                </p>
                <p>
                  When patient #6 walks up to the clipboard to sign in, they can read everything
                  that patients #1 through #5 wrote. Names, appointment times, sometimes reason for
                  visit if staff have asked for it. The HHS Office for Civil Rights has explicitly
                  flagged sign-in sheets as a privacy risk and has cited practices under HIPAA when
                  those sheets contain sensitive information visible to other patients.
                </p>
                <p>
                  Beyond the privacy issue, paper sign-in is operationally primitive. A staff
                  member has to read the sheet, find the matching appointment, mark the patient
                  arrived in the EHR, and file or shred the paper. Every step is manual. The
                  information captured is minimal — usually just a name and time — which means
                  there's no intake data, no consent confirmation, and no insurance verification
                  happening at that moment.
                </p>
                <p>
                  And then there's what paper sign-in can't do at all: it cannot display wait
                  context to patients sitting in the lobby. It cannot alert staff when a patient
                  has been waiting beyond an acceptable threshold. It cannot feed operational
                  analytics. It cannot trigger room assignment workflows. It is a passive record,
                  not an operational tool.
                </p>
                <p>
                  clinIQ's digital check-in is not just a digital version of the paper sheet. It's
                  a full intake and operational trigger: structured data flowing into your EHR,
                  consent captured, insurance confirmed, and the patient's arrival status
                  automatically populating the real-time flow dashboard for every member of your
                  care team.
                </p>
              </div>
            </div>
            <div className={s.realityRight}>
              <h3>What paper sign-in costs every day</h3>
              <ul className={s.painList}>
                <li className={s.painItem}>
                  <span className={s.painDot} />
                  <span className={s.painText}>
                    Every incoming patient can read the names and arrival times of everyone who
                    signed in before them — a daily privacy exposure
                  </span>
                </li>
                <li className={s.painItem}>
                  <span className={s.painDot} />
                  <span className={s.painText}>
                    Staff manually transcribe sign-in data into the EHR — typically 1–2 minutes
                    per patient, every patient, every day
                  </span>
                </li>
                <li className={s.painItem}>
                  <span className={s.painDot} />
                  <span className={s.painText}>
                    Zero operational intelligence — no way to know how long patients have been
                    waiting, or trigger alerts when wait times exceed targets
                  </span>
                </li>
                <li className={s.painItem}>
                  <span className={s.painDot} />
                  <span className={s.painText}>
                    No pre-visit intake captured — every patient completes paper forms on arrival
                    instead of ahead of time
                  </span>
                </li>
                <li className={s.painItem}>
                  <span className={s.painDot} />
                  <span className={s.painText}>
                    Paper sheets must be shredded or securely disposed — another compliance
                    obligation that adds time and cost
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Comparison table */}
        <section style={{ padding: '5rem 1.5rem', background: 'var(--cream, #f5f3ef)' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', overflowX: 'auto' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '2rem', textAlign: 'center' }}>
              Paper sign-in vs clinIQ
            </h2>
            <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.07)' }}>
              <thead>
                <tr style={{ background: '#1a1a1a', color: '#fff' }}>
                  <th style={{ ...thStyle, color: '#fff', borderBottom: 'none' }}>Capability</th>
                  <th style={{ ...thStyle, color: '#fff', borderBottom: 'none', textAlign: 'center' }}>Paper Sign-In Sheet</th>
                  <th style={{ ...thStyle, color: '#0a9e6e', borderBottom: 'none', textAlign: 'center' }}>clinIQ</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Patient arrival recording', '✓ Manual signature', '✓ Automatic digital'],
                  ['Patient privacy at check-in', '✗ Names visible to all', '✓ Privacy-forward, individual'],
                  ['EHR integration', '✗ Manual transcription', '✓ Automatic sync'],
                  ['Pre-visit intake forms', '✗ Paper on arrival only', '✓ Digital, before visit'],
                  ['Insurance verification', '✗ Not captured', '✓ Real-time at check-in'],
                  ['Wait time tracking & alerts', '✗ Not available', '✓ Real-time threshold alerts'],
                  ['LobbyView patient display', '✗ Not available', '✓ Branded TV display'],
                  ['Operational analytics', '✗ Not available', '✓ Built-in dashboards'],
                  ['RTM billing management', '✗ Not available', '✓ CPT 98975–98981'],
                  ['Pre-authorization tracking', '✗ Not available', '✓ Pipeline + expiry alerts'],
                  ['HIPAA disposal requirement', 'Shredding required', 'No paper to dispose'],
                  ['Staff transcription time', '1–2 min per patient', 'Zero'],
                ].map(([feature, paper, cliniq], i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? '#fff' : '#fafaf8' }}>
                    <td style={tdStyle}>{feature}</td>
                    <td style={{ ...tdStyle, textAlign: 'center' }}>
                      <span style={paper.startsWith('✗') ? crossStyle : (paper.startsWith('✓') ? checkStyle : {})}>
                        {paper}
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
              <div className={s.statLabel}>patient names exposed to other patients</div>
            </div>
            <div className={s.stat}>
              <div className={s.statNumber}>Zero</div>
              <div className={s.statLabel}>manual transcription steps</div>
            </div>
            <div className={s.stat}>
              <div className={s.statNumber}>Pre-visit</div>
              <div className={s.statLabel}>intake captured before patients arrive</div>
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
            <h2 className={s.ctaTitle}>Retire the clipboard. Start with privacy.</h2>
            <p className={s.ctaDesc}>
              clinIQ replaces paper sign-in with digital check-in that's faster, HIPAA-forward,
              and connected to your EHR — with no hardware purchase required.
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
