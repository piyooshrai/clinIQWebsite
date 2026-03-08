import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import s from '@/app/specialties/specialty-full.module.css'

export const metadata: Metadata = {
  title: 'clinIQ for Pediatrics — Sick Walk-Ins, Vaccine Clinics, and Worried Parents Without the Chaos',
  description:
    'Pediatric practices absorb sick walk-ins, vaccine clinic surges, and anxious parents — all while running a scheduled appointment day. clinIQ gives your front desk live visibility to manage all three without losing control.',
  openGraph: {
    title: 'clinIQ for Pediatrics — Sick Walk-Ins, Vaccine Clinics, and Worried Parents Without the Chaos',
    description:
      'Patient flow, sick visit triage, and vaccine clinic management for pediatric practices navigating high-demand, mixed-acuity days.',
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
      { '@type': 'ListItem', position: 3, name: 'Pediatrics', item: 'https://cliniq.com/specialties/pediatrics' },
    ],
  },
  service: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'clinIQ for Pediatrics',
    description:
      'Clinic operations platform for pediatric practices: sick walk-in management, vaccine clinic coordination, well-visit scheduling, and real-time patient flow for high-volume, mixed-acuity days.',
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
        name: 'Why is pediatric scheduling more complex than adult primary care?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Pediatric practices manage three simultaneous patient streams that adult primary care rarely sees together: scheduled well visits, acute sick walk-ins, and vaccine clinic appointments — each with different urgency levels, different room requirements, and different parent expectations. A fever walk-in can displace a 12-month well visit. A vaccine clinic morning can stack 15 families in the lobby while the provider is still finishing rounds. And parents of sick children are anxious in a way that amplifies every wait. The operational demand is higher than the appointment count suggests.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does clinIQ help with sick walk-in surge management?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'clinIQ gives front desk staff a live view of current patient flow: how many scheduled patients are ahead of a walk-in, which rooms are occupied vs. available, and how long the current provider wait is. When a sick child walks in, staff can give the parent a realistic time estimate — not a guess — and triage the walk-in into the flow without displacing scheduled patients unnecessarily. Practices with live flow visibility see significantly fewer parent complaints about wait time transparency.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does clinIQ support vaccine clinic days?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Vaccine clinic mornings stack back-to-back short appointments with specific supply requirements — syringes, specific vaccine lots, and post-injection observation time. clinIQ tracks each vaccine appointment through check-in, rooming, injection, and the mandatory 15-20 minute observation period before discharge. Staff see in real time which families are in observation vs. ready to leave — preventing both premature discharge and unnecessarily long waits in the lobby.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can clinIQ track immunization schedule compliance for well visits?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. clinIQ\'s Scheduling module integrates well-visit recalls based on the child\'s age and the CDC immunization schedule. Families due for 2-month, 4-month, 6-month, and 12-month visits appear in the recall queue automatically. Practices using structured well-visit recall see better immunization completion rates and fewer gaps in preventive care that lead to missed vaccines and late intervention.',
        },
      },
    ],
  },
}

const marqueeItems = [
  'Sick Walk-In Triage', 'Vaccine Clinic Flow', 'Well-Visit Recalls',
  'Parent Communication', 'Room Status', 'Observation Tracking',
  'Multi-Provider Coordination', 'Same-Day Access', 'Immunization Schedule',
]

export default function PediatricsPage() {
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
            <span className={s.badge}>Pediatrics</span>
            <h1 className={s.heroTitle}>
              A sick child in the waiting room doesn't care about your{' '}
              <em>scheduled patient queue.</em>
            </h1>
            <p className={s.heroSubtitle}>
              Pediatric practices run three patient streams simultaneously: scheduled well visits,
              acute sick walk-ins, and vaccine clinic appointments. Each one has different urgency,
              different room setup, and a parent attached who is either anxious, impatient, or both.
              clinIQ gives your front desk real-time visibility to manage all three without the lobby
              turning into a pressure cooker by 10am.
            </p>
            <div className={s.heroActions}>
              <a href="/demo" className={s.btnPrimary}>
                See clinIQ for pediatrics
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
              <h2>Pediatrics is the only specialty where the patient's advocate is in the waiting room judging everything.</h2>
              <p className={s.realityNarrative}>
                Adult patients can wait 45 minutes in relative silence. Parents of sick children
                cannot. Every minute of unexplained delay is interpreted as indifference. When
                there's no information about wait time, parents fill the gap themselves — and
                they fill it with the worst-case interpretation. Front desk staff spend their
                morning managing parental anxiety rather than actually moving patients forward,
                because there's nothing to tell a parent until someone physically checks.
              </p>
              <p className={s.realityNarrative}>
                Vaccine clinic mornings compound the problem. Fifteen families arrive in a
                90-minute window with short appointments that require specific supplies, specific
                vaccine lots, and a mandatory 15-20 minute post-injection observation period.
                Staff can't tell which families are in observation vs. ready to leave without
                walking the floor. Families ready to go stand up at the reception desk repeatedly.
                The observation period — clinically required — becomes a customer service disaster
                because nobody has visibility into who is actually ready for discharge.
              </p>
            </div>
            <div className={s.realityRight}>
              <ul className={s.painList}>
                <li className={s.painItem}>
                  <span className={s.painDot} />
                  <span className={s.painText}>
                    Sick walk-ins disrupt the scheduled day with no triage logic — patients
                    are absorbed into the queue by arrival order rather than urgency, and
                    the well-visit family that's been waiting 30 minutes watches the walk-in
                    go back first.
                  </span>
                </li>
                <li className={s.painItem}>
                  <span className={s.painDot} />
                  <span className={s.painText}>
                    Vaccine clinic observation periods are invisible to staff — families
                    completing the mandatory 15-20 minute wait aren't tracked, leading to
                    both premature discharge and unnecessary over-waiting.
                  </span>
                </li>
                <li className={s.painItem}>
                  <span className={s.painDot} />
                  <span className={s.painText}>
                    Well-visit recalls are managed manually or not at all — families
                    miss the 6-month or 12-month visit because nobody flagged them
                    as due before the window passed.
                  </span>
                </li>
                <li className={s.painItem}>
                  <span className={s.painDot} />
                  <span className={s.painText}>
                    Parents can't see what front desk staff can barely see — wait times,
                    provider location, and room availability are all invisible, driving
                    repeat front desk interruptions that slow everything down further.
                  </span>
                </li>
                <li className={s.painItem}>
                  <span className={s.painDot} />
                  <span className={s.painText}>
                    School forms, sports physicals, and ADHD medication checks create
                    short-slot demand that competes with standard appointments in schedules
                    not designed to accommodate mixed visit lengths.
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
                A parent asks "how much longer?" Front desk has no answer. Goes to check.
                Comes back with "just a few more minutes." Parent asks again 10 minutes later.
                Staff frustration builds on both sides.
              </div>
              <div className={`${s.changeLabel} ${s.changeLabelAfter}`}>After</div>
              <div className={s.changeAfter}>
                clinIQ shows real-time wait position and provider status. Staff gives
                the parent a specific answer on the first ask — "one patient ahead of you,
                about 12 minutes" — and the question doesn't get asked again.
              </div>
            </div>
            <div className={s.changeCard}>
              <div className={`${s.changeLabel} ${s.changeLabelBefore}`}>Before</div>
              <div className={s.changeBefore}>
                Vaccine clinic morning. Three families are in the observation area but
                staff can't tell which ones have completed their 15 minutes. Two families
                approach the desk simultaneously asking if they can leave.
              </div>
              <div className={`${s.changeLabel} ${s.changeLabelAfter}`}>After</div>
              <div className={s.changeAfter}>
                clinIQ tracks observation start time for each patient. The board shows
                who has cleared the observation window. Staff can discharge the right
                families in order without walking to the observation area to check.
              </div>
            </div>
            <div className={s.changeCard}>
              <div className={`${s.changeLabel} ${s.changeLabelBefore}`}>Before</div>
              <div className={s.changeBefore}>
                A child is due for their 15-month well visit. The family hasn't called to
                schedule. Nobody reaches out. The child shows up at 18 months — and missed
                vaccines have to be given outside the ideal schedule window.
              </div>
              <div className={`${s.changeLabel} ${s.changeLabelAfter}`}>After</div>
              <div className={s.changeAfter}>
                clinIQ flags the child as due for their 15-month visit when the window opens.
                Outreach goes out before the gap happens. Immunizations stay on schedule.
                The family feels taken care of, not chased down.
              </div>
            </div>
            <div className={s.changeCard}>
              <div className={`${s.changeLabel} ${s.changeLabelBefore}`}>Before</div>
              <div className={s.changeBefore}>
                A sick walk-in with a 103-degree fever arrives. Two scheduled patients
                are ahead on the board. Walk-in gets triaged to the bottom by arrival order.
                Gets seen last. Parent complaint filed.
              </div>
              <div className={`${s.changeLabel} ${s.changeLabelAfter}`}>After</div>
              <div className={s.changeAfter}>
                clinIQ shows urgency flag for the walk-in at check-in. Staff can move
                the patient up in queue with a note to the affected scheduled families —
                transparent triage that patients and parents understand.
              </div>
            </div>
          </div>
        </section>

        {/* ── MODULES ── */}
        <section className={s.modules}>
          <h2>The clinIQ modules that keep pediatric days from collapsing by 10am.</h2>
          <div className={`${s.modulesGrid} ${s.threeCol}`}>
            <div className={s.moduleCard}>
              <div className={s.moduleIcon}>⬛</div>
              <h3 className={s.moduleTitle}>Patient Flow</h3>
              <p className={s.moduleDesc}>
                Live board showing every patient: checked in, roomed, in observation,
                with provider, or ready to discharge. Sick walk-ins and scheduled patients
                tracked on the same board with urgency flags visible to all staff.
              </p>
              <a href="/features/patient-flow" className={s.moduleLink}>Learn more →</a>
            </div>
            <div className={s.moduleCard}>
              <div className={s.moduleIcon}>⬛</div>
              <h3 className={s.moduleTitle}>Scheduling</h3>
              <p className={s.moduleDesc}>
                Well-visit recalls by age milestone. Vaccine clinic block management.
                Same-day sick visit capacity visible in real time. Short-slot appointments
                for sports physicals and school forms that don't blow up the schedule.
              </p>
              <a href="/features/scheduling" className={s.moduleLink}>Learn more →</a>
            </div>
            <div className={s.moduleCard}>
              <div className={s.moduleIcon}>⬛</div>
              <h3 className={s.moduleTitle}>Analytics</h3>
              <p className={s.moduleDesc}>
                Sick walk-in volume by day and season. Well-visit recall completion rates.
                Immunization schedule adherence across your patient panel. The data that
                shows you when to staff up and where care gaps exist in your population.
              </p>
              <a href="/features/analytics" className={s.moduleLink}>Learn more →</a>
            </div>
          </div>
        </section>

        {/* ── WORKFLOW ── */}
        <section className={s.workflow}>
          <h2>How a pediatric visit flows through clinIQ.</h2>
          <div className={s.stageRow}>
            {[
              { label: 'Arrival / Check-In', color: '#0d9488' },
              { label: 'Waiting Room', color: '#8b5cf6' },
              { label: 'Roomed / Vitals', color: '#f59e0b' },
              { label: 'With Provider', color: '#3b82f6' },
              { label: 'Vaccine / Procedure', color: '#ef4444' },
              { label: 'Observation', color: '#f59e0b' },
              { label: 'Discharge / Next Appt', color: '#22c55e' },
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
            Observation stage tracks elapsed time with alerts — staff see exactly when each
            patient has cleared the post-vaccine observation window without walking the floor.
          </p>
        </section>

        {/* ── STATS ── */}
        <section className={s.stats}>
          <div className={s.statsGrid}>
            <div className={s.stat}>
              <div className={s.statNumber}>30–40%</div>
              <div className={s.statLabel}>of daily visits in a typical pediatric practice are acute sick or walk-in — not on the morning schedule at 7am</div>
            </div>
            <div className={s.stat}>
              <div className={s.statNumber}>15–20 min</div>
              <div className={s.statLabel}>mandatory post-vaccine observation period — currently untracked in most practices, leading to both early and late discharge</div>
            </div>
            <div className={s.stat}>
              <div className={s.statNumber}>6 wks</div>
              <div className={s.statLabel}>average delay when well-visit recalls are manual vs. automated — enough to push a child outside their optimal immunization window</div>
            </div>
            <div className={s.stat}>
              <div className={s.statNumber}>3×</div>
              <div className={s.statLabel}>more front-desk interruptions per hour during unmanaged vaccine clinic mornings vs. standard scheduled days</div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className={s.faq}>
          <h2>Pediatric operations, answered.</h2>
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
              Parents want information. Your staff has it. The gap between them is your waiting room.
            </h2>
            <p className={s.ctaDesc}>
              clinIQ gives pediatric practices real-time patient flow visibility so front desk staff
              can answer "how much longer?" with an actual number, manage vaccine clinic observation
              without walking the floor, and triage sick walk-ins without blowing up the scheduled day.
            </p>
            <div className={s.ctaActions}>
              <a href="/demo" className={s.btnPrimary}>
                See clinIQ for pediatrics
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
            <a href="/specialties/primary-care" className={s.relatedLink}>Primary Care</a>
            <a href="/specialties/urgent-care" className={s.relatedLink}>Urgent Care</a>
            <a href="/specialties/ob-gyn" className={s.relatedLink}>OB-GYN</a>
            <a href="/specialties/behavioral-health" className={s.relatedLink}>Behavioral Health</a>
          </div>
        </section>
      </main>
      <FooterInner />
    </>
  )
}
