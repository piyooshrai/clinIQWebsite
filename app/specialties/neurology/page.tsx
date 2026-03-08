import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import s from '@/app/specialties/specialty-full.module.css'

export const metadata: Metadata = {
  title: 'clinIQ for Neurology — 4-Month Wait Lists and One-Way Referrals Without the Black Hole',
  description:
    'Neurology practices are overwhelmed with demand and invisible to the patients waiting. Referrals arrive and disappear. Wait lists run 4-14 months. Patients call to find out where they are. clinIQ makes the pipeline visible.',
  openGraph: {
    title: 'clinIQ for Neurology — 4-Month Wait Lists and One-Way Referrals Without the Black Hole',
    description:
      'Referral pipeline tracking, new patient queue management, and EEG/EMG study coordination for neurology practices drowning in demand and invisible to patients waiting for care.',
    type: 'website',
  },
}

const schemaData = {
  breadcrumb: {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cliniq.com' },
      { '@type': 'ListItem', position: 2, name: 'Specialties', item: 'https://cliniq.com/specialties' },
      { '@type': 'ListItem', position: 3, name: 'Neurology', item: 'https://cliniq.com/specialties/neurology' },
    ],
  },
  service: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'clinIQ for Neurology',
    description:
      'Clinic operations platform for neurology practices: referral pipeline tracking, new patient queue management, EEG/EMG study coordination, and follow-up care for chronic neurological conditions.',
    provider: { '@type': 'Organization', name: 'clinIQ' },
    areaServed: 'US',
    serviceType: 'Clinic Operations Software',
  },
  faq: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Why are neurology wait times so much longer than other specialties?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Neurology faces a structural supply-demand imbalance that other specialties don\'t. The number of neurologists per capita is lower than demand requires, and the conditions neurologists treat — epilepsy, MS, Parkinson\'s, migraine, neuropathy — generate ongoing follow-up need from an aging patient population that compounds year over year. New patient wait times of 4-14 months are common, not exceptional. The waiting patients call repeatedly to ask where they are in the queue, which consumes staff time without moving a single patient forward.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does clinIQ improve referral management for neurology?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Neurology referrals arrive from primary care, urgent care, and emergency departments — sometimes with complete records, sometimes with a fax that requires four follow-up calls to complete. clinIQ tracks each referral from receipt through scheduling, flagging incomplete records and following up before the gap reaches the provider at the visit. Practices that manage referral intake systematically reduce the no-show rate at new patient appointments — because patients who complete intake paperwork and receive proactive communication show up.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does clinIQ coordinate EEG and EMG studies with clinic appointments?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'EEG and EMG studies require coordination between the study appointment and the provider interpretation visit — typically scheduled 1-2 weeks after the study. The study has to be read before the interpretation visit is useful, which means the scheduling sequence matters. clinIQ tracks the study order, study completion, and interpretation appointment as a linked sequence — if the study hasn\'t been completed and read before the interpretation appointment, the flag appears with enough lead time to reschedule rather than discovering the gap when the patient arrives.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does clinIQ help with neurology chronic disease follow-up?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Neurology manages large panels of chronic disease patients — epilepsy, MS, Parkinson\'s, migraine — who need quarterly to annual follow-up depending on disease stability. These patients compete for the same appointment slots as new referrals, and practices without recall management often discover that chronic patients fall out of follow-up entirely when they get displaced by new patient demand. clinIQ tracks follow-up windows by condition and disease stability level, ensuring established patients stay in care rather than returning via ER when their condition deteriorates.',
        },
      },
    ],
  },
}

const marqueeItems = [
  'Referral Pipeline Tracking', 'New Patient Queue', 'EEG/EMG Coordination',
  'Chronic Disease Follow-Up', 'Epilepsy Monitoring', 'MS Infusion Scheduling',
  'Wait List Management', 'Intake Records', 'Interpretation Visits',
]

export default function NeurologyPage() {
  return (
    <>
      <NavInner />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData.breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData.service) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData.faq) }}
      />
      <main>
        {/* ── HERO ── */}
        <section className={s.hero}>
          <div className={s.heroBg}>
            <div className={`${s.heroOrb} ${s.heroOrbTeal}`} />
            <div className={`${s.heroOrb} ${s.heroOrbBlue}`} />
            <div className={s.heroGrain} />
          </div>
          <div className={s.heroContent}>
            <span className={s.badge}>Neurology</span>
            <h1 className={s.heroTitle}>
              Patients wait 4 months to be seen. They have no idea{' '}
              <em>where they are in your queue.</em>
            </h1>
            <p className={s.heroSubtitle}>
              Neurology has the longest new patient wait times in medicine — not because practices
              are disorganized, but because demand structurally exceeds supply. What makes it worse
              is that waiting patients call repeatedly asking where they are, consuming staff time
              without moving anyone forward. Referrals arrive incomplete. EEG studies need to be
              read before the interpretation visit. Chronic disease patients need quarterly follow-up
              in a schedule full of new referrals. clinIQ makes every part of that pipeline visible
              and manageable.
            </p>
            <div className={s.heroActions}>
              <a href="/demo" className={s.btnPrimary}>
                See clinIQ for neurology
                <span className={s.btnIcon}>→</span>
              </a>
              <a href="/specialties" className={s.btnGhost}>All specialties</a>
            </div>
          </div>
        </section>

        {/* ── MARQUEE ── */}
        <div className={s.marquee}>
          <div className={s.marqueeTrack}>
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} className={s.marqueeContent}>
                {item}
                {i < marqueeItems.length * 2 - 1 && <span className={s.marqueeDot}>·</span>}
              </span>
            ))}
          </div>
        </div>

        {/* ── REALITY ── */}
        <section className={s.reality}>
          <div className={s.realityGrid}>
            <div className={s.realityLeft}>
              <h2>Neurology demand is unlimited. The problem is managing what arrives.</h2>
              <p className={s.realityNarrative}>
                Every neurologist in the country has a full schedule. The waiting list isn't a
                new patient problem — it's a pipeline management problem. Referrals arrive from
                primary care, the ER, and urgent care with varying degrees of completeness.
                Some have imaging, labs, and a complete history. Some are a handwritten note.
                The ones without complete records create a choice: schedule the patient and
                risk an incomplete visit, or delay scheduling until records arrive — which
                can take weeks and is tracked by nobody.
              </p>
              <p className={s.realityNarrative}>
                Chronic disease management compounds the capacity problem. A neurologist
                managing 400 established epilepsy, MS, and Parkinson's patients needs to
                schedule those patients for follow-up while also absorbing new referrals.
                Without a structured recall system, established patients get displaced by
                new patient demand — and the chronic patient who missed two follow-ups
                returns via emergency department instead of clinic, at higher cost and
                lower clinical control.
              </p>
            </div>
            <div className={s.realityRight}>
              <ul className={s.painList}>
                <li className={s.painItem}>
                  <span className={s.painDot} />
                  <span className={s.painText}>
                    New patient wait times of 4-14 months generate repeated status calls
                    from patients and referring providers — each one a staff time cost
                    with no clinical value.
                  </span>
                </li>
                <li className={s.painItem}>
                  <span className={s.painDot} />
                  <span className={s.painText}>
                    Referrals arrive without complete records — imaging, prior medication
                    trials, previous neurology notes — and nobody tracks whether records
                    have been obtained before the appointment date.
                  </span>
                </li>
                <li className={s.painItem}>
                  <span className={s.painDot} />
                  <span className={s.painText}>
                    EEG and EMG studies need to be read before the interpretation visit,
                    but study scheduling and interpretation scheduling are managed
                    separately with no linked tracking.
                  </span>
                </li>
                <li className={s.painItem}>
                  <span className={s.painDot} />
                  <span className={s.painText}>
                    Chronic disease patients — epilepsy, MS, Parkinson's — need quarterly
                    follow-up but compete with new referrals for the same limited slots,
                    leading to gaps in follow-up that escalate to ER visits.
                  </span>
                </li>
                <li className={s.painItem}>
                  <span className={s.painDot} />
                  <span className={s.painText}>
                    MS infusion scheduling requires coordination between the clinic
                    visit and the infusion center — a two-step booking with no shared
                    visibility between the two environments.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── CHANGES ── */}
        <section className={s.changes}>
          <h2>Before and after clinIQ.</h2>
          <div className={s.changesGrid}>
            <div className={s.changeCard}>
              <div className={`${s.changeLabel} ${s.changeLabelBefore}`}>Before</div>
              <div className={s.changeBefore}>
                A patient referred 3 months ago calls to ask where they are in the queue.
                Staff looks up the referral, checks the schedule, puts the patient on hold,
                calls back with a date estimate. 20 minutes consumed. Patient still waiting.
              </div>
              <div className={`${s.changeLabel} ${s.changeLabelAfter}`}>After</div>
              <div className={s.changeAfter}>
                clinIQ maintains a referral queue with status visible to all staff. When
                a patient calls, the answer is a 15-second lookup — referral received
                date, current position, estimated scheduling window. Call ends in 2 minutes.
              </div>
            </div>
            <div className={s.changeCard}>
              <div className={`${s.changeLabel} ${s.changeLabelBefore}`}>Before</div>
              <div className={s.changeBefore}>
                A new patient arrives for their first neurology visit. Imaging from the ER
                three months ago was never received. Provider reviews what's available.
                The visit is 40% as useful as it should have been.
              </div>
              <div className={`${s.changeLabel} ${s.changeLabelAfter}`}>After</div>
              <div className={s.changeAfter}>
                clinIQ flags incomplete records at intake with a follow-up workflow.
                Missing imaging from ER visit triggers a records request two weeks
                before the appointment — provider has what they need when the patient arrives.
              </div>
            </div>
            <div className={s.changeCard}>
              <div className={`${s.changeLabel} ${s.changeLabelBefore}`}>Before</div>
              <div className={s.changeBefore}>
                A patient's EEG was completed last Tuesday. The interpretation appointment
                is tomorrow. The EEG hasn't been read yet. Provider discovers this when
                pulling the chart for tomorrow's schedule at 5pm today.
              </div>
              <div className={`${s.changeLabel} ${s.changeLabelAfter}`}>After</div>
              <div className={s.changeAfter}>
                clinIQ links EEG study and interpretation visit as a dependent sequence.
                If the study isn't marked read 5 days before the interpretation appointment,
                the flag appears — not at 5pm the day before.
              </div>
            </div>
            <div className={s.changeCard}>
              <div className={`${s.changeLabel} ${s.changeLabelBefore}`}>Before</div>
              <div className={s.changeBefore}>
                An epilepsy patient due for 3-month follow-up gets pushed by a new referral
                that needed the slot. Rescheduled 6 weeks later. Shows up in the ER with
                breakthrough seizure activity in month 5.
              </div>
              <div className={`${s.changeLabel} ${s.changeLabelAfter}`}>After</div>
              <div className={s.changeAfter}>
                Epilepsy patients flagged as high-risk follow-up are protected in the
                schedule. When a slot conflict arises, the system flags the priority —
                the new referral waits, not the established seizure patient.
              </div>
            </div>
          </div>
        </section>

        {/* ── MODULES ── */}
        <section className={s.modules}>
          <h2>The clinIQ modules that make the neurology pipeline manageable.</h2>
          <div className={`${s.modulesGrid} ${s.threeCol}`}>
            <div className={s.moduleCard}>
              <div className={s.moduleIcon}>⬛</div>
              <h3 className={s.moduleTitle}>Patient Flow</h3>
              <p className={s.moduleDesc}>
                Live view of the referral pipeline: received, records pending, scheduled,
                pre-visit, active, and follow-up. EEG/EMG studies tracked with linked
                interpretation appointments. Chronic disease follow-up queue visible
                separately from new patient pipeline.
              </p>
              <a href="/features/patient-flow" className={s.moduleLink}>Learn more →</a>
            </div>
            <div className={s.moduleCard}>
              <div className={s.moduleIcon}>⬛</div>
              <h3 className={s.moduleTitle}>Scheduling</h3>
              <p className={s.moduleDesc}>
                New patient referral queue with wait time transparency. Chronic disease
                follow-up recall by condition and stability tier. EEG/EMG study-to-interpretation
                sequencing with dependency tracking. MS infusion coordination with
                linked clinic visits.
              </p>
              <a href="/features/scheduling" className={s.moduleLink}>Learn more →</a>
            </div>
            <div className={s.moduleCard}>
              <div className={s.moduleIcon}>⬛</div>
              <h3 className={s.moduleTitle}>Analytics</h3>
              <p className={s.moduleDesc}>
                Referral-to-appointment conversion rates. Average wait time by referral
                source. Chronic disease follow-up adherence by condition. Study-to-interpretation
                completion rates. The data that shows your pipeline, not just your schedule.
              </p>
              <a href="/features/analytics" className={s.moduleLink}>Learn more →</a>
            </div>
          </div>
        </section>

        {/* ── WORKFLOW ── */}
        <section className={s.workflow}>
          <h2>How a neurology patient moves through clinIQ from referral to follow-up.</h2>
          <div className={s.stageRow}>
            {[
              { label: 'Referral Received', color: '#0d9488' },
              { label: 'Records Intake', color: '#8b5cf6' },
              { label: 'New Patient Appt', color: '#f59e0b' },
              { label: 'Study Ordered', color: '#ef4444' },
              { label: 'Study Completed', color: '#3b82f6' },
              { label: 'Interpretation Visit', color: '#f59e0b' },
              { label: 'Chronic Follow-Up', color: '#22c55e' },
            ].map((stage, i, arr) => (
              <>
                <div key={stage.label} className={s.stage}>
                  <div className={s.stageDot} style={{ background: stage.color }} />
                  <span>{stage.label}</span>
                </div>
                {i < arr.length - 1 && <div key={`arrow-${i}`} className={s.stageArrow}>→</div>}
              </>
            ))}
          </div>
          <p className={s.workflowNote}>
            Study Completed and Interpretation Visit are linked — if the study isn't read,
            the interpretation appointment flag appears automatically before it becomes
            a same-day discovery.
          </p>
        </section>

        {/* ── STATS ── */}
        <section className={s.stats}>
          <div className={s.statsGrid}>
            <div className={s.stat}>
              <div className={s.statNumber}>4–14 mo</div>
              <div className={s.statLabel}>typical new patient neurology wait time — creating continuous status-call volume from patients and referring providers</div>
            </div>
            <div className={s.stat}>
              <div className={s.statNumber}>30%</div>
              <div className={s.statLabel}>of neurology referrals arrive without complete records needed for a clinically useful first visit</div>
            </div>
            <div className={s.stat}>
              <div className={s.statNumber}>400+</div>
              <div className={s.statLabel}>established chronic disease patients a busy neurologist manages — each requiring regular follow-up competing with new referral demand</div>
            </div>
            <div className={s.stat}>
              <div className={s.statNumber}>2× ER</div>
              <div className={s.statLabel}>epilepsy patients who miss follow-up appointments are twice as likely to present via ER for breakthrough events within 6 months</div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className={s.faq}>
          <h2>Neurology operations, answered.</h2>
          <div className={s.faqList}>
            {schemaData.faq.mainEntity.map((item) => (
              <div key={item.name} className={s.faqItem}>
                <div className={s.faqQ}>{item.name}</div>
                <div className={s.faqA}>{item.acceptedAnswer.text}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className={s.cta}>
          <div className={s.ctaBg}>
            <div className={s.ctaOrb} />
          </div>
          <div className={s.ctaContent}>
            <h2 className={s.ctaTitle}>
              You can't see more patients. But you can manage the ones you have without a pipeline black hole.
            </h2>
            <p className={s.ctaDesc}>
              clinIQ gives neurology practices live visibility into every referral, every
              pending study, and every chronic disease follow-up — so nothing falls through
              the gap between your schedule and your waiting list.
            </p>
            <div className={s.ctaActions}>
              <a href="/demo" className={s.btnPrimary}>
                See clinIQ for neurology
                <span className={s.btnIcon}>→</span>
              </a>
            </div>
            <p className={s.ctaNote}>No commitment. Setup in one day.</p>
          </div>
        </section>

        {/* ── RELATED ── */}
        <section className={s.related}>
          <h3>Related specialties</h3>
          <div className={s.relatedLinks}>
            <a href="/specialties/psychiatry" className={s.relatedLink}>Psychiatry</a>
            <a href="/specialties/behavioral-health" className={s.relatedLink}>Behavioral Health</a>
            <a href="/specialties/cardiology" className={s.relatedLink}>Cardiology</a>
            <a href="/specialties/primary-care" className={s.relatedLink}>Primary Care</a>
          </div>
        </section>
      </main>
      <FooterInner />
    </>
  )
}
