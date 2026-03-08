import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import s from '@/app/specialties/specialty-full.module.css'

export const metadata: Metadata = {
  title: 'Digital Patient Check-In Software — Self-Service & Privacy-Forward | clinIQ',
  description:
    'clinIQ Check-In replaces the paper clipboard and front-desk bottleneck with self-service arrival that signals staff instantly, captures intake data, and respects patient privacy.',
  openGraph: {
    title: 'Digital Patient Check-In Software — Self-Service & Privacy-Forward | clinIQ',
    description:
      'Self-service check-in that triggers your patient flow workflow instantly. No paper. No announcing names. No front-desk bottleneck.',
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
      { '@type': 'ListItem', position: 3, name: 'Check-In', item: 'https://cliniq.com/features/check-in' },
    ],
  },
  faq: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is digital check-in HIPAA compliant?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. clinIQ Check-In is designed with HIPAA compliance as a core requirement. Patient names are never displayed on shared screens. Check-in kiosks use session-isolated flows that clear after each patient. All data in transit and at rest is encrypted. For behavioral health and psychiatry practices with heightened privacy sensitivity, clinIQ supports anonymous lobby display modes where patients are identified by code rather than name.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does digital check-in replace front desk staff?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. clinIQ Check-In frees front desk staff from processing each arrival individually — which typically consumes 3-5 minutes per patient during peak morning hours. Staff handle exceptions, escalations, and patient questions rather than routine arrival processing. In practices with high morning volume, this reallocation of attention is the difference between a front desk that is available and one that is perpetually overloaded.',
        },
      },
      {
        '@type': 'Question',
        name: 'What intake information does Check-In capture?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'clinIQ Check-In captures arrival confirmation, appointment verification, insurance and demographic updates, reason for visit, and any pre-visit questionnaires configured for your specialty. For urgent care practices, it captures chief complaint and triage screening questions. For behavioral health, it captures mood and symptom check-ins. The intake form is configurable per appointment type and specialty.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does Check-In integrate with Patient Flow?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Check-In is the entry point to the Patient Flow board. The moment a patient completes check-in, they appear on the live flow board with their arrival time, appointment type, and provider assignment. Staff don\'t need to manually add the patient to the queue — the check-in event triggers the queue entry automatically.',
        },
      },
    ],
  },
}

const marqueeItems = [
  'Self-Service Arrival', 'HIPAA-Compliant', 'Privacy-Forward',
  'Instant Flow Trigger', 'Intake Forms', 'Insurance Capture',
  'Behavioral Health Mode', 'Walk-In Queue', 'No Paper Clipboard',
]

export default function CheckInFeaturePage() {
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
            <span className={s.badge}>Check-In</span>
            <h1 className={s.heroTitle}>
              The paper clipboard is a HIPAA risk, a bottleneck, and{' '}
              <em>completely unnecessary.</em>
            </h1>
            <p className={s.heroSubtitle}>
              Every patient who signs their name on a shared paper list has just announced their
              presence to everyone in your waiting room. Every front desk staff member who processes
              each arrival manually during a packed morning rush is doing something a kiosk can do
              in 90 seconds. clinIQ Check-In replaces both problems — self-service arrival that
              captures intake data and triggers your patient flow workflow the moment the patient walks in.
            </p>
            <div className={s.heroActions}>
              <a href="/demo" className={s.btnPrimary}>See Check-In live<span className={s.btnIcon}>→</span></a>
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
              <h2>Paper sign-in is a patient privacy liability dressed up as a process.</h2>
              <p className={s.realityNarrative}>
                The paper sign-in sheet in a waiting room is a HIPAA concern that most practices
                have simply accepted. Every patient who signs in sees the names and arrival times
                of everyone who arrived before them. In a psychiatry practice, addiction medicine
                clinic, or any specialty where patient presence is itself sensitive health
                information, that shared list is a disclosure patients didn't consent to.
              </p>
              <p className={s.realityNarrative}>
                Beyond privacy, manual check-in is a front desk bottleneck that compounds at
                exactly the wrong time. Morning rushes bring 6-10 patients in the same 20-minute
                window. Each one needs 3-5 minutes of front desk attention — insurance verification,
                demographic confirmation, form collection. While the front desk processes arrivals,
                they're unavailable for phone calls, scheduling, and the patients who actually have
                questions. Self-service check-in doesn't eliminate the front desk — it frees it.
              </p>
            </div>
            <div className={s.realityRight}>
              <ul className={s.painList}>
                <li className={s.painItem}><span className={s.painDot} /><span className={s.painText}>Paper sign-in exposes patient names to every person in the waiting room — a correctable HIPAA privacy issue most practices ignore.</span></li>
                <li className={s.painItem}><span className={s.painDot} /><span className={s.painText}>Manual check-in consumes 3-5 minutes per patient — during morning rush, this creates a line that cascades delays through the entire day.</span></li>
                <li className={s.painItem}><span className={s.painDot} /><span className={s.painText}>Paper intake forms require MA transcription into the EHR — a redundant data entry step that costs time and introduces errors.</span></li>
                <li className={s.painItem}><span className={s.painDot} /><span className={s.painText}>Walk-in patients join the queue with no structured intake — no chief complaint, no urgency flag, no insurance capture before rooming.</span></li>
                <li className={s.painItem}><span className={s.painDot} /><span className={s.painText}>Patient arrival isn't visible to clinical staff until someone walks to the front — the MA doesn't know the patient is ready to be roomed.</span></li>
              </ul>
            </div>
          </div>
        </section>

        <section className={s.changes}>
          <h2>Before and after clinIQ Check-In.</h2>
          <div className={s.changesGrid}>
            <div className={s.changeCard}>
              <div className={`${s.changeLabel} ${s.changeLabelBefore}`}>Before</div>
              <div className={s.changeBefore}>7 patients arrive between 8:00 and 8:20am. Front desk processes each individually. By 8:25, there's a line and the 8:30 patients start their wait before the day is officially behind.</div>
              <div className={`${s.changeLabel} ${s.changeLabelAfter}`}>After</div>
              <div className={s.changeAfter}>All 7 check in at the kiosk in under 2 minutes each, appearing on the flow board immediately. The front desk is available for the two who have actual questions. No line.</div>
            </div>
            <div className={s.changeCard}>
              <div className={`${s.changeLabel} ${s.changeLabelBefore}`}>Before</div>
              <div className={s.changeBefore}>A psychiatry patient signs in on a shared paper sheet. The name below theirs is someone they know. Their presence at a psychiatric clinic is now visible to an acquaintance.</div>
              <div className={`${s.changeLabel} ${s.changeLabelAfter}`}>After</div>
              <div className={s.changeAfter}>Check-in is on a personal kiosk screen. No shared list. No names visible to other patients. The lobby display shows only anonymous queue position. Privacy maintained by default.</div>
            </div>
            <div className={s.changeCard}>
              <div className={`${s.changeLabel} ${s.changeLabelBefore}`}>Before</div>
              <div className={s.changeBefore}>A patient fills out a paper intake form. The MA transcribes it into the EHR. Handwriting is unclear in two fields. The MA guesses. The provider corrects it during the visit.</div>
              <div className={`${s.changeLabel} ${s.changeLabelAfter}`}>After</div>
              <div className={s.changeAfter}>Intake is captured digitally at check-in and flows directly into the patient record. No transcription. No errors. No corrections consuming provider time mid-visit.</div>
            </div>
            <div className={s.changeCard}>
              <div className={`${s.changeLabel} ${s.changeLabelBefore}`}>Before</div>
              <div className={s.changeBefore}>A walk-in with a 103° fever sits in the waiting room for 25 minutes before an MA notices them. Nobody notified clinical staff that a walk-in had arrived.</div>
              <div className={`${s.changeLabel} ${s.changeLabelAfter}`}>After</div>
              <div className={s.changeAfter}>Walk-in check-in creates an instant queue entry with chief complaint and urgency flag. Clinical staff see the arrival on the flow board within seconds — not 25 minutes later.</div>
            </div>
          </div>
        </section>

        <section className={s.stats}>
          <div className={s.statsGrid}>
            <div className={s.stat}><div className={s.statNumber}>3–5 min</div><div className={s.statLabel}>front desk time per patient for manual check-in — eliminated by self-service for routine arrivals</div></div>
            <div className={s.stat}><div className={s.statNumber}>90 sec</div><div className={s.statLabel}>average patient self-check-in time at a configured clinIQ kiosk</div></div>
            <div className={s.stat}><div className={s.statNumber}>100%</div><div className={s.statLabel}>of paper sign-in sheets expose patient names to other waiting room patients — a correctable privacy issue</div></div>
            <div className={s.stat}><div className={s.statNumber}>Instant</div><div className={s.statLabel}>patient flow board update on check-in — no manual queue entry, no delay between arrival and staff visibility</div></div>
          </div>
        </section>

        <section className={s.faq}>
          <h2>Check-In, answered.</h2>
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
            <h2 className={s.ctaTitle}>Replace the clipboard. Free your front desk. Know who arrived the moment they arrive.</h2>
            <p className={s.ctaDesc}>clinIQ Check-In captures arrival, intake, and insurance in 90 seconds — and triggers your patient flow workflow before the patient sits down.</p>
            <div className={s.ctaActions}><a href="/demo" className={s.btnPrimary}>See Check-In live<span className={s.btnIcon}>→</span></a></div>
            <p className={s.ctaNote}>No commitment. Setup in one day.</p>
          </div>
        </section>

        <section className={s.related}>
          <h3>Related features</h3>
          <div className={s.relatedLinks}>
            <a href="/features/patient-flow" className={s.relatedLink}>Patient Flow</a>
            <a href="/features/scheduling" className={s.relatedLink}>Scheduling</a>
            <a href="/features/analytics" className={s.relatedLink}>Analytics</a>
          </div>
        </section>
      </main>
      <FooterInner />
    </>
  )
}
