import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import s from '@/app/specialties/specialty-full.module.css'

export const metadata: Metadata = {
  title: 'clinIQ vs Generic Scheduling Tools — Fill the Calendar vs Run the Clinic',
  description:
    'Calendly, Acuity, and Zocdoc fill appointment slots. clinIQ manages what happens after the patient arrives — live patient flow, RTM billing, pre-authorization tracking, and clinical scheduling built for outpatient specialty clinics.',
  keywords: [
    'medical scheduling software comparison',
    'clinic scheduling beyond generic tools',
    'Calendly alternative healthcare',
    'Acuity Scheduling alternative clinic',
    'Zocdoc alternative specialty clinic',
  ],
  openGraph: {
    title: 'clinIQ vs Generic Scheduling — After the Booking Is Where It Gets Hard',
    description:
      'Generic scheduling tools fill your calendar. clinIQ manages the operational reality that begins the moment the patient walks in — and captures the revenue that depends on it.',
    type: 'website',
    url: 'https://cliniqhealthcare.com/compare/generic-scheduling',
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
      name: 'clinIQ vs Generic Scheduling',
      item: 'https://cliniqhealthcare.com/compare/generic-scheduling',
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can a clinic use Calendly or Acuity instead of clinIQ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Generic scheduling tools like Calendly and Acuity handle the booking transaction — they put an appointment on a calendar. clinIQ handles everything that comes after: self-service check-in that feeds a live queue, real-time room status, RTM billing threshold tracking, pre-authorization management, and waitlist fill. These are fundamentally different categories of software. Many clinics use a basic scheduling tool for online booking and clinIQ for everything that happens once the patient arrives.',
      },
    },
    {
      '@type': 'Question',
      name: 'What about Zocdoc — how does clinIQ compare?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Zocdoc is a patient acquisition and booking marketplace — it helps new patients find and book with your clinic. It has no operational capabilities after the booking event. clinIQ is an operational platform that manages the clinical day: check-in, patient flow, room status, RTM billing, pre-authorization, and analytics. The two tools address completely different problems.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is clinIQ\'s scheduling HIPAA-compliant?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. clinIQ is built for healthcare and is HIPAA-compliant with a Business Associate Agreement (BAA) available. Generic scheduling tools like Calendly vary in their HIPAA status — some offer a BAA on specific paid tiers, but they are not purpose-built for protected health information. clinIQ collects clinical context (appointment type, insurance, provider preference) that generic tools cannot handle without significant customization.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does clinIQ include multi-provider scheduling for specialty clinics?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. clinIQ includes multi-provider scheduling with recall management, waitlist fill, and specialty-specific appointment type logic. Generic tools handle time blocks — clinIQ handles the clinical nuance of PT initial evaluations vs. follow-ups, provider-specific panel constraints, recall intervals by diagnosis, and waitlist prioritization by urgency.',
      },
    },
  ],
}

const tableRows = [
  {
    feature: 'Online appointment booking',
    cliniq: 'Clinical scheduling with insurance, provider, and appointment type',
    competitor: 'Generic time-block booking only',
  },
  {
    feature: 'Self-service check-in',
    cliniq: 'Kiosk + mobile, feeds directly into live clinical queue',
    competitor: 'No check-in capability — booking only',
  },
  {
    feature: 'Live room & queue status',
    cliniq: 'Real-time floor map, patient stage, time-in-stage',
    competitor: 'Not available — ends at the calendar event',
  },
  {
    feature: 'Patient-facing lobby display',
    cliniq: 'LobbyView — privacy-forward wait time display',
    competitor: 'Not available',
  },
  {
    feature: 'RTM billing (CPT 98975–98981)',
    cliniq: 'Automated 16-day threshold alerts, time capture',
    competitor: 'Not in scope — billing entirely outside these tools',
  },
  {
    feature: 'Pre-authorization tracking',
    cliniq: 'PA status, expiration alerts, denial appeal workflow',
    competitor: 'No — no clinical authorization awareness',
  },
  {
    feature: 'Waitlist fill & recall',
    cliniq: 'Automated waitlist SMS, diagnosis-based recall campaigns',
    competitor: 'Basic cancellation notifications only',
  },
  {
    feature: 'HIPAA compliance',
    cliniq: 'Built for healthcare, BAA available',
    competitor: 'Varies — not purpose-built for PHI',
  },
  {
    feature: 'Multi-provider specialty logic',
    cliniq: 'PT evals vs follow-ups, panel constraints, recall intervals',
    competitor: 'Generic time blocks — no clinical appointment type logic',
  },
]

export default function GenericSchedulingPage() {
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
            <span className={s.badge}>clinIQ vs Generic Scheduling Tools</span>
            <h1 className={s.heroTitle}>
              Scheduling fills the calendar. clinIQ manages what happens after the patient arrives.
            </h1>
            <p className={s.heroSubtitle}>
              Calendly, Acuity, Zocdoc, and their equivalents do one thing well: they put an appointment on a calendar. They have no concept of what happens when that patient walks in — no check-in, no room status, no queue management, no RTM billing threshold, no pre-authorization tracking. clinIQ is built for the full clinical encounter, not just the booking event.
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
              <h2>What generic scheduling tools do</h2>
              <div className={s.realityNarrative}>
                <p>
                  Tools like Calendly, Acuity Scheduling, and Zocdoc were designed to solve a specific problem: making it easy for someone to book a time slot. They handle availability display, booking confirmation, reminders, and calendar sync. For general business use — sales calls, consultations, personal services — they work extremely well. Zocdoc extends this with a patient discovery marketplace that drives new patient acquisition for healthcare providers.
                </p>
                <p>
                  The problem is that a medical appointment is not a calendar event — it is the beginning of a clinical workflow. Generic scheduling tools end their job at the booking confirmation. They have no awareness of insurance verification, prior authorization requirements, clinical appointment type differences (an initial PT evaluation is entirely different from a 15-minute follow-up visit), RTM billing eligibility, or what happens operationally once the patient arrives. For outpatient specialty clinics, the scheduling event is the least complex part of the day.
                </p>
              </div>
            </div>
            <div className={s.realityRight}>
              <h2>What happens after the booking</h2>
              <div className={s.realityNarrative}>
                <p>
                  clinIQ was built specifically for the clinical context that generic scheduling tools ignore. It starts where they end: when the patient walks in. Self-service check-in places the patient in a live queue. The floor map updates in real time. The lobby display sets wait expectations. The clinical team sees which room is ready, which patient is next, and where the day is backing up — all without a single phone call between front desk and the back.
                </p>
                <p>
                  But clinIQ also handles what generic tools cannot touch: the revenue layer. When a new patient books through clinIQ, the system begins tracking RTM eligibility, insurance verification status, and pre-authorization requirements before the visit happens. When the 16-day RTM billing threshold approaches, clinIQ fires an alert. When a PA is about to expire, the PA dashboard surfaces it 30 days out. When a slot cancels, the waitlist automation texts the next eligible patient within minutes. None of this is possible with a scheduling-only tool — and all of it translates directly into revenue.
                </p>
              </div>
              <ul className={s.painList}>
                <li className={s.painItem}>
                  <span className={s.painDot} />
                  <span className={s.painText}>Generic tools end at the calendar. clinIQ manages the encounter.</span>
                </li>
                <li className={s.painItem}>
                  <span className={s.painDot} />
                  <span className={s.painText}>RTM billing, PA tracking, and waitlist fill require clinical context no generic tool has</span>
                </li>
                <li className={s.painItem}>
                  <span className={s.painDot} />
                  <span className={s.painText}>HIPAA-compliant by design with BAA — not an afterthought add-on</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Before / After */}
        <section className={s.changes}>
          <div className={s.changesGrid}>
            <div className={s.changeCard}>
              <div className={`${s.changeLabel} ${s.changeLabelBefore}`}>Generic scheduling tool day</div>
              <div className={s.changeBefore}>
                Calendly confirms tomorrow&apos;s appointments. Patient arrives and stands at the front desk. Staff manually routes them. No one knows which room is ready. RTM billing is missed. PA expired last week — found out today. Canceled slot stays empty.
              </div>
            </div>
            <div className={s.changeCard}>
              <div className={`${s.changeLabel} ${s.changeLabelAfter}`}>With clinIQ</div>
              <div className={s.changeAfter}>
                Patient checks in from the parking lot. Enters queue automatically. LobbyView shows wait time. Staff sees live floor map — Room 4 is ready. RTM alert fired at day 14. PA dashboard flagged renewal 30 days out. Waitlist filled the canceled 2 PM slot at 11 AM.
              </div>
            </div>
          </div>
        </section>

        {/* Feature Table */}
        <section style={{ padding: '5rem 1.5rem', background: 'var(--cream, #f5f3ef)' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', overflowX: 'auto' }}>
            <h2
              style={{
                fontFamily: "'Instrument Serif', Georgia, serif",
                fontSize: '2rem',
                marginBottom: '2rem',
              }}
            >
              Feature by feature
            </h2>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9375rem' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #0d0d0c' }}>
                  <th style={{ textAlign: 'left', padding: '0.75rem 1rem', width: '40%' }}>Feature</th>
                  <th style={{ textAlign: 'left', padding: '0.75rem 1rem', color: '#0d9488' }}>clinIQ</th>
                  <th style={{ textAlign: 'left', padding: '0.75rem 1rem' }}>Calendly / Acuity / Zocdoc</th>
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
              <div className={s.statLabel}>Per RTM-enrolled patient per month — zero of this is possible with generic scheduling</div>
            </div>
            <div className={s.stat}>
              <div className={s.statNumber}>16 days</div>
              <div className={s.statLabel}>RTM billing window clinIQ tracks — no scheduling tool does this</div>
            </div>
            <div className={s.stat}>
              <div className={s.statNumber}>Day 1</div>
              <div className={s.statLabel}>When check-in connects to live queue after clinIQ deployment</div>
            </div>
            <div className={s.stat}>
              <div className={s.statNumber}>Zero</div>
              <div className={s.statLabel}>Clinical context generic scheduling tools carry after booking</div>
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
            <h2 className={s.ctaTitle}>Your scheduling tool booked the appointment. clinIQ takes it from there.</h2>
            <p className={s.ctaDesc}>
              clinIQ handles the clinical operational reality that begins when the patient arrives — check-in, live flow, room status, RTM billing, pre-authorization, and analytics. All of it built for outpatient specialty clinics, deployable in days.
            </p>
            <div className={s.ctaActions}>
              <a href="/demo" className={s.btnPrimary}>
                Book a demo<span className={s.btnIcon}>→</span>
              </a>
              <a href="/pricing" className={s.btnGhost}>See pricing</a>
            </div>
            <p className={s.ctaNote}>Flat monthly pricing. Works alongside your existing booking tools.</p>
          </div>
        </section>

        {/* Related */}
        <section className={s.related}>
          <div className={s.relatedLinks}>
            <a href="/compare/tebra" className={s.relatedLink}>clinIQ vs Tebra</a>
            <a href="/compare/athenahealth" className={s.relatedLink}>clinIQ vs athenahealth</a>
            <a href="/compare/ehr-only" className={s.relatedLink}>clinIQ vs EHR-only</a>
            <a href="/compare/eclinicalworks" className={s.relatedLink}>clinIQ vs eClinicalWorks</a>
          </div>
        </section>
      </main>
      <FooterInner />
    </>
  )
}
