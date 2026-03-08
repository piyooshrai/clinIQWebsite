import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import s from '@/app/specialties/specialty-full.module.css'

export const metadata: Metadata = {
  title: 'Remote Therapeutic Monitoring Software — CPT 98975-98981 Billing | clinIQ',
  description:
    'clinIQ RTM automates CPT 98975-98981 billing for physical therapy, pain management, and behavioral health — tracking the 16-day threshold, logging interaction time, and generating compliant documentation.',
  openGraph: {
    title: 'RTM Software — Automate CPT 98975-98981 Billing | clinIQ',
    description:
      'Remote Therapeutic Monitoring billing automation: 16-day compliance tracking, interaction time logging, and documentation for PT, pain management, and behavioral health.',
    type: 'website',
  },
}

const schemaData = {
  breadcrumb: {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cliniq.com' },
      { '@type': 'ListItem', position: 2, name: 'Features', item: 'https://cliniq.com/features' },
      { '@type': 'ListItem', position: 3, name: 'RTM Billing', item: 'https://cliniq.com/features/rtm' },
    ],
  },
  faq: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What are the RTM CPT codes and what do they pay?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Remote Therapeutic Monitoring uses four CPT codes. 98975 covers initial setup and patient education (~$19 Medicare, billed once per episode). 98977 covers device supply for musculoskeletal monitoring (~$55/month). 98980 covers treatment management for the first 20 minutes of clinical staff time in a calendar month (~$48). 98981 covers each additional 20-minute increment (~$38). For a physical therapy patient meeting all thresholds, the monthly revenue per patient is approximately $100-125. Across a panel of 50 RTM-enrolled patients, that represents $5,000-6,250 in monthly revenue — mostly for monitoring and documentation that PT practices are already doing.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the 16-day RTM threshold?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'To bill CPT 98977 (device supply) in a calendar month, the patient must transmit data on at least 16 of the 30 days in the billing period. This is the most commonly missed threshold in RTM programs. clinIQ tracks each patient\'s transmission days in real time and alerts staff when a patient is falling behind pace — at day 10 with fewer than 6 transmissions, or day 20 with fewer than 13 — so there\'s time to intervene before the month closes.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which specialties can bill RTM?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Physical therapists, occupational therapists, and speech-language pathologists can bill RTM under their own NPI without a physician order — making PT the primary RTM opportunity. Pain management practices billing musculoskeletal monitoring for home exercise or pain tracking qualify. Behavioral health practices monitoring therapeutic data between sessions qualify for the non-musculoskeletal RTM pathway. Physicians and non-physician practitioners monitoring relevant therapeutic responses also qualify.',
        },
      },
      {
        '@type': 'Question',
        name: 'What documentation does RTM require to support billing?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'RTM documentation must establish four things: enrollment (patient consent, diagnosis, monitoring plan), data receipt (evidence of transmission on 16+ days), clinical review (notes showing the data was reviewed and interpreted), and interaction time (a log of time spent on RTM services supporting the 20-minute minimum). clinIQ generates this documentation automatically as staff work through their monitoring queue — the interaction time log, data receipt record, and clinical review prompts are built into the workflow.',
        },
      },
    ],
  },
}

const marqueeItems = [
  'CPT 98975', 'CPT 98977', 'CPT 98980', 'CPT 98981',
  '16-Day Tracking', 'Interaction Time Log', 'PT RTM Billing',
  'Pain Management RTM', 'Behavioral Health RTM', 'Documentation',
]

export default function RtmFeaturePage() {
  return (
    <>
      <NavInner />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData.breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData.faq) }} />
      <main>
        <section className={s.hero}>
          <div className={s.heroBg}>
            <div className={`${s.heroOrb} ${s.heroOrbTeal}`} />
            <div className={`${s.heroOrb} ${s.heroOrbBlue}`} />
            <div className={s.heroGrain} />
          </div>
          <div className={s.heroContent}>
            <span className={s.badge}>RTM Billing</span>
            <h1 className={s.heroTitle}>
              Most PT practices are doing RTM. Almost none are{' '}
              <em>billing for it.</em>
            </h1>
            <p className={s.heroSubtitle}>
              If your physical therapists monitor home exercise compliance, review patient-reported
              outcomes between visits, and call patients who aren't progressing — they are already
              doing Remote Therapeutic Monitoring. Medicare has paid for it since 2022.
              The average PT practice is leaving $100-125 per enrolled patient per month on the table,
              every month, because the 16-day threshold tracking and interaction time documentation
              aren't being managed. clinIQ automates both.
            </p>
            <div className={s.heroActions}>
              <a href="/demo" className={s.btnPrimary}>See RTM Billing live<span className={s.btnIcon}>→</span></a>
              <a href="/features" className={s.btnGhost}>All features</a>
            </div>
          </div>
        </section>

        <div className={s.marquee}>
          <div className={s.marqueeTrack}>
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} className={s.marqueeContent}>
                {item}{i < marqueeItems.length * 2 - 1 && <span className={s.marqueeDot}>·</span>}
              </span>
            ))}
          </div>
        </div>

        <section className={s.reality}>
          <div className={s.realityGrid}>
            <div className={s.realityLeft}>
              <h2>RTM is one of the only billing codes that pays for work practices are already doing.</h2>
              <p className={s.realityNarrative}>
                Physical therapy has always operated on the theory that what happens between visits
                determines outcomes. Home exercise adherence, pain response to movement, functional
                recovery between sessions — the clinical value of PT depends on what the patient
                does when they're not in your clinic. For the first time, Medicare has a billing
                mechanism for monitoring that between-visit activity. CPT codes 98975-98981 cover
                patient setup, device supply, and treatment management time — the data review,
                clinical decision-making, and patient communication that PTs were already doing
                and couldn't bill for.
              </p>
              <p className={s.realityNarrative}>
                The two reasons most practices aren't billing RTM: the 16-day threshold and the
                20-minute documentation requirement. The 16-day threshold requires patients to
                transmit monitoring data on at least 16 of the 30 days in the billing period.
                Without a system tracking each patient's transmission days in real time, staff
                discover a patient missed the threshold on day 31 — after the billing period
                has closed. The 20-minute requirement needs a timestamped log of clinical staff
                time spent on RTM activities. Without automated logging, it's reconstructed
                retroactively, which auditors flag as compliance risk.
              </p>
            </div>
            <div className={s.realityRight}>
              <ul className={s.painList}>
                <li className={s.painItem}><span className={s.painDot} /><span className={s.painText}>A PT practice with 50 eligible patients not enrolled in RTM is leaving $5,000-6,250 per month in Medicare reimbursement uncaptured — over $60,000 per year.</span></li>
                <li className={s.painItem}><span className={s.painDot} /><span className={s.painText}>The 16-day threshold is invisible without tracking — practices discover patients missed it on day 31, after the billing window has closed.</span></li>
                <li className={s.painItem}><span className={s.painDot} /><span className={s.painText}>20-minute interaction time must be logged with timestamps — retroactive reconstruction is an audit risk that most practices can't defend.</span></li>
                <li className={s.painItem}><span className={s.painDot} /><span className={s.painText}>Commercial payer coverage is expanding — Aetna, Cigna, UnitedHealthcare have published RTM coverage policies, but verification is required per plan.</span></li>
                <li className={s.painItem}><span className={s.painDot} /><span className={s.painText}>Patient enrollment is the primary barrier — practices that present RTM as a core therapy component (not an optional add-on) see 3× higher enrollment rates.</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── CPT CODES TABLE ── */}
        <section style={{ padding: '5rem 1.5rem', background: 'var(--cream, #f5f3ef)' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: '2.25rem', marginBottom: '2rem' }}>
              The RTM CPT codes clinIQ tracks.
            </h2>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9375rem' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #0d0d0c' }}>
                  <th style={{ textAlign: 'left', padding: '0.75rem 1rem', width: '15%' }}>Code</th>
                  <th style={{ textAlign: 'left', padding: '0.75rem 1rem', width: '45%' }}>What it covers</th>
                  <th style={{ textAlign: 'left', padding: '0.75rem 1rem', width: '20%' }}>Medicare rate</th>
                  <th style={{ textAlign: 'left', padding: '0.75rem 1rem' }}>Frequency</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { code: '98975', desc: 'Initial setup and patient education — enrollment, device orientation, monitoring plan', rate: '~$19', freq: 'Once per episode' },
                  { code: '98977', desc: 'Device supply for musculoskeletal monitoring — requires 16-day transmission threshold', rate: '~$55/mo', freq: 'Monthly' },
                  { code: '98980', desc: 'Treatment management — first 20 minutes of clinical staff RTM time in calendar month', rate: '~$48/mo', freq: 'Monthly' },
                  { code: '98981', desc: 'Treatment management — each additional 20-minute increment beyond the first', rate: '~$38/mo', freq: 'Per increment' },
                ].map((row, i) => (
                  <tr key={row.code} style={{ borderBottom: '1px solid #e5e5e5', background: i % 2 === 0 ? '#fff' : 'transparent' }}>
                    <td style={{ padding: '0.75rem 1rem', fontWeight: 700, color: '#0d9488', fontFamily: 'monospace', fontSize: '0.875rem' }}>{row.code}</td>
                    <td style={{ padding: '0.75rem 1rem' }}>{row.desc}</td>
                    <td style={{ padding: '0.75rem 1rem', fontWeight: 600 }}>{row.rate}</td>
                    <td style={{ padding: '0.75rem 1rem', color: '#555' }}>{row.freq}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p style={{ marginTop: '1rem', fontSize: '0.8125rem', color: '#888' }}>
              Rates are approximate 2026 Medicare national payment amounts. Commercial payer rates vary by plan.
            </p>
          </div>
        </section>

        <section className={s.changes}>
          <h2>Before and after clinIQ RTM.</h2>
          <div className={s.changesGrid}>
            <div className={s.changeCard}>
              <div className={`${s.changeLabel} ${s.changeLabelBefore}`}>Before</div>
              <div className={s.changeBefore}>A PT reviews a patient's home exercise data on day 31. The patient only transmitted on 13 days. The 16-day threshold wasn't met. The billing window has closed. $55 in 98977 revenue gone.</div>
              <div className={`${s.changeLabel} ${s.changeLabelAfter}`}>After</div>
              <div className={s.changeAfter}>clinIQ alerts at day 15 — patient is at 7 transmissions, needs 9 more in 15 days. Staff reaches out. Patient re-engages. 16-day threshold met. $55 billed, $103 total for the month.</div>
            </div>
            <div className={s.changeCard}>
              <div className={`${s.changeLabel} ${s.changeLabelBefore}`}>Before</div>
              <div className={s.changeBefore}>A PT does 25 minutes of RTM work in January — data review, a phone call, a note update. She estimates the time at the end of the month. The estimate doesn't have timestamps. Audit risk.</div>
              <div className={`${s.changeLabel} ${s.changeLabelAfter}`}>After</div>
              <div className={s.changeAfter}>Each RTM interaction is logged in clinIQ with timestamp, duration, and activity description as it happens. The 20-minute threshold documentation is generated automatically. Audit-ready.</div>
            </div>
            <div className={s.changeCard}>
              <div className={`${s.changeLabel} ${s.changeLabelBefore}`}>Before</div>
              <div className={s.changeBefore}>A pain management practice has 80 patients on home exercise monitoring. Nobody is enrolled in RTM. The monitoring happens. The billing doesn't. $8,000/month in eligible revenue uncaptured.</div>
              <div className={`${s.changeLabel} ${s.changeLabelAfter}`}>After</div>
              <div className={s.changeAfter}>clinIQ identifies the 80 eligible patients, supports enrollment conversations, and begins tracking transmissions. By month 3, 60 are enrolled and meeting thresholds. $6,000/month captured.</div>
            </div>
            <div className={s.changeCard}>
              <div className={`${s.changeLabel} ${s.changeLabelBefore}`}>Before</div>
              <div className={s.changeBefore}>An RTM claim is flagged for audit. The practice needs to produce 16-day transmission logs, interaction time records, and clinical review notes for 15 patients. The data exists in 4 different places.</div>
              <div className={`${s.changeLabel} ${s.changeLabelAfter}`}>After</div>
              <div className={s.changeAfter}>clinIQ generates a complete RTM documentation package per patient: transmission log, interaction time record, clinical review notes. Audit response is a single export, not a multi-week reconstruction.</div>
            </div>
          </div>
        </section>

        <section className={s.stats}>
          <div className={s.statsGrid}>
            <div className={s.stat}><div className={s.statNumber}>$100–125</div><div className={s.statLabel}>per enrolled patient per month in Medicare RTM reimbursement — for monitoring most practices are already doing</div></div>
            <div className={s.stat}><div className={s.statNumber}>16 days</div><div className={s.statLabel}>minimum transmission threshold per 30-day billing period — the most commonly missed RTM compliance requirement</div></div>
            <div className={s.stat}><div className={s.statNumber}>$60K+</div><div className={s.statLabel}>annual uncaptured RTM revenue in a PT practice with 50 eligible patients not enrolled</div></div>
            <div className={s.stat}><div className={s.statNumber}>2022</div><div className={s.statLabel}>year Medicare RTM billing was established — most practices have left 3+ years of eligible revenue on the table</div></div>
          </div>
        </section>

        <section className={s.faq}>
          <h2>RTM Billing, answered.</h2>
          <div className={s.faqList}>
            {schemaData.faq.mainEntity.map((item) => (
              <div key={item.name} className={s.faqItem}>
                <div className={s.faqQ}>{item.name}</div>
                <div className={s.faqA}>{item.acceptedAnswer.text}</div>
              </div>
            ))}
          </div>
        </section>

        <section className={s.cta}>
          <div className={s.ctaBg}><div className={s.ctaOrb} /></div>
          <div className={s.ctaContent}>
            <h2 className={s.ctaTitle}>You're already doing RTM. Start getting paid for it.</h2>
            <p className={s.ctaDesc}>clinIQ handles enrollment, 16-day threshold tracking, interaction time logging, and billing documentation — so RTM revenue flows automatically from the monitoring you're already doing.</p>
            <div className={s.ctaActions}><a href="/demo" className={s.btnPrimary}>See RTM Billing live<span className={s.btnIcon}>→</span></a></div>
            <p className={s.ctaNote}>No commitment. Setup in one day.</p>
          </div>
        </section>

        <section className={s.related}>
          <h3>Related specialties &amp; features</h3>
          <div className={s.relatedLinks}>
            <a href="/specialties/physical-therapy" className={s.relatedLink}>Physical Therapy</a>
            <a href="/specialties/pain-management" className={s.relatedLink}>Pain Management</a>
            <a href="/specialties/behavioral-health" className={s.relatedLink}>Behavioral Health</a>
            <a href="/features/analytics" className={s.relatedLink}>Analytics</a>
          </div>
        </section>
      </main>
      <FooterInner />
    </>
  )
}
