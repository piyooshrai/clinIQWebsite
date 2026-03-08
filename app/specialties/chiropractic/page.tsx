import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import s from '@/app/specialties/specialty-full.module.css'

export const metadata: Metadata = {
  title: 'clinIQ for Chiropractic — High-Volume Adjustments Without the Wait List Chaos',
  description:
    'Chiropractic offices run 30-60 visits a day across multiple providers. Without real-time room visibility, patients stack up, MAs scramble, and high no-show rates drain revenue daily. clinIQ fixes the flow.',
  openGraph: {
    title: 'clinIQ for Chiropractic — High-Volume Adjustments Without the Wait List Chaos',
    description:
      'Patient flow, no-show management, and multi-provider room coordination for high-volume chiropractic practices.',
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
      { '@type': 'ListItem', position: 3, name: 'Chiropractic', item: 'https://cliniq.com/specialties/chiropractic' },
    ],
  },
  service: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'clinIQ for Chiropractic',
    description:
      'Clinic operations platform for chiropractic practices: patient flow, no-show reduction, multi-provider room coordination, and treatment plan adherence tracking.',
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
        name: 'Why is chiropractic scheduling more complex than it looks?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Chiropractic practices run very high visit volumes — 30 to 60 visits per day per provider — with short appointment slots of 10-20 minutes. When a patient no-shows, a provider can be standing idle for 20 minutes with nobody to fill the slot. When a visit runs long, patients back up quickly. And when multiple providers share rooms and equipment, real-time coordination becomes critical. Add personal injury (PI) and workers\' comp cases requiring documentation at every visit, and the operational demands exceed what a simple scheduler can handle.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the financial impact of no-shows in chiropractic?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Chiropractic no-show rates typically run 15-25%. At an average adjustment fee of $60-80, even 5 no-shows per day represents $300-400 in lost revenue daily — over $75,000 per year. More importantly, patients who no-show frequently are the ones most at risk of not completing their treatment plan, which affects both outcomes and total visit volume. Proactive confirmation and no-show pattern tracking can reduce rates by 30-40%.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does clinIQ help with multi-provider chiropractic practices?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'clinIQ shows each provider\'s patient queue in real time — who has checked in, who is being roomed, who is waiting for a specific provider, and which rooms are available. When practices share rooms, equipment, or support staff across providers, the live board eliminates the coordination guesswork that causes patients to wait in the wrong place or staff to walk the floor looking for their next patient.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can clinIQ help with treatment plan adherence tracking?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. clinIQ\'s Analytics module tracks visit completion rates against prescribed treatment plans. Patients who are falling behind their plan appear on a dashboard, allowing front desk staff to proactively reach out before gaps become abandonment. Better adherence means better outcomes and higher total revenue per patient — both of which matter for chiropractic practices managing large PI and workers\' comp caseloads.',
        },
      },
    ],
  },
}

const marqueeItems = [
  'Multi-Provider Flow', 'No-Show Reduction', 'Treatment Plan Adherence',
  'Room Coordination', 'High-Volume Scheduling', 'PI & Workers Comp',
  'Check-In Automation', 'Provider Queues', 'Same-Day Fill',
]

export default function ChiropracticPage() {
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
            <span className={s.badge}>Chiropractic</span>
            <h1 className={s.heroTitle}>
              When you run 40 patients a day, one no-show at 10am{' '}
              <em>shouldn't idle your provider for 20 minutes.</em>
            </h1>
            <p className={s.heroSubtitle}>
              High-volume chiropractic practices live and die by throughput. Short adjustment slots
              mean no-shows hit harder and recovery takes longer. When patients back up, providers
              idle, and staff scramble — your whole day compresses. clinIQ gives you live visibility
              into every queue, every room, and every patient status so gaps get filled and
              patients move without anyone walking the floor to find out what's happening.
            </p>
            <div className={s.heroActions}>
              <a href="/demo" className={s.btnPrimary}>
                See clinIQ for chiropractic
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
              <h2>40 visits a day looks manageable. The gaps between them are where revenue goes.</h2>
              <p className={s.realityNarrative}>
                A chiropractic practice running 40 visits a day across two providers has an average
                of 12 minutes between patient arrivals. When someone no-shows, that gap extends to
                24 minutes — not because the next patient can't come earlier, but because nobody
                reached out to move them up. When a visit runs long, the next patient is already
                waiting in a room that the previous patient hasn't vacated.
              </p>
              <p className={s.realityNarrative}>
                Multi-provider practices add another layer: patients arrive unsure of which room
                to go to, staff aren't always visible, and the live status of each provider's
                patient queue is only in someone's head. Personal injury and workers' comp cases
                require visit documentation at every appointment — if a patient gets roomed before
                the previous visit notes are cleared, the provider starts the visit without full
                context and someone scrambles to reconcile it after.
              </p>
            </div>
            <div className={s.realityRight}>
              <ul className={s.painList}>
                <li className={s.painItem}>
                  <span className={s.painDot} />
                  <span className={s.painText}>
                    No-show rates of 15-25% mean 6-10 empty slots per provider per day —
                    each one a missed $60-80 adjustment that's unrecoverable without a
                    same-day fill system.
                  </span>
                </li>
                <li className={s.painItem}>
                  <span className={s.painDot} />
                  <span className={s.painText}>
                    Multi-provider room allocation happens verbally or not at all —
                    patients assigned to Provider A end up in Provider B's room and
                    staff sort it out in front of the patient.
                  </span>
                </li>
                <li className={s.painItem}>
                  <span className={s.painDot} />
                  <span className={s.painText}>
                    Treatment plan drop-off is invisible — patients who skip appointments
                    don't appear on anyone's radar until they've already abandoned care.
                  </span>
                </li>
                <li className={s.painItem}>
                  <span className={s.painDot} />
                  <span className={s.painText}>
                    High-volume mornings compress without room status visibility — staff
                    stack patients in waiting room chairs because they can't see which
                    rooms have cleared.
                  </span>
                </li>
                <li className={s.painItem}>
                  <span className={s.painDot} />
                  <span className={s.painText}>
                    PI and workers' comp documentation requirements create a per-visit
                    admin burden that compounds when patient flow and documentation
                    timelines are misaligned.
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
                A 10:30am patient no-shows. Provider sees the gap at 10:32. Front desk
                looks through the schedule for someone to move up. By the time they reach
                a patient, the slot is half gone.
              </div>
              <div className={`${s.changeLabel} ${s.changeLabelAfter}`}>After</div>
              <div className={s.changeAfter}>
                clinIQ flags the no-show at 10:15 when check-in doesn't occur. Front desk
                immediately offers the slot to a waitlisted patient. Provider's day continues
                without a gap.
              </div>
            </div>
            <div className={s.changeCard}>
              <div className={`${s.changeLabel} ${s.changeLabelBefore}`}>Before</div>
              <div className={s.changeBefore}>
                Two providers share three treatment rooms. Which room gets which patient
                depends on who the front desk happens to ask. Patients roomed for Provider A
                end up in Provider B's preferred room.
              </div>
              <div className={`${s.changeLabel} ${s.changeLabelAfter}`}>After</div>
              <div className={s.changeAfter}>
                clinIQ shows every room's status and each provider's queue in real time.
                Patients are directed to the correct room without front desk guesswork —
                and the board updates instantly when a room clears.
              </div>
            </div>
            <div className={s.changeCard}>
              <div className={`${s.changeLabel} ${s.changeLabelBefore}`}>Before</div>
              <div className={s.changeBefore}>
                A PI patient on a 24-visit plan completes 11 visits over 3 months, then
                stops showing. Nobody notices until the attorney calls asking about the
                treatment record.
              </div>
              <div className={`${s.changeLabel} ${s.changeLabelAfter}`}>After</div>
              <div className={s.changeAfter}>
                clinIQ's treatment plan tracker flags the drop-off after missed visit 2.
                Front desk reaches out. The patient returns, completes the plan, and the
                attorney gets a complete record.
              </div>
            </div>
            <div className={s.changeCard}>
              <div className={`${s.changeLabel} ${s.changeLabelBefore}`}>Before</div>
              <div className={s.changeBefore}>
                Morning rush peaks at 9am. Five patients arrive in 15 minutes.
                All five are seated in the waiting room because nobody can see
                which of the four rooms have opened.
              </div>
              <div className={`${s.changeLabel} ${s.changeLabelAfter}`}>After</div>
              <div className={s.changeAfter}>
                Real-time room status on the clinIQ board shows cleared rooms instantly.
                MAs room the next patient the moment a room opens — no waiting room
                backup, no provider standing idle between patients.
              </div>
            </div>
          </div>
        </section>

        {/* ── MODULES ── */}
        <section className={s.modules}>
          <h2>The clinIQ modules that run high-volume chiropractic smoothly.</h2>
          <div className={`${s.modulesGrid} ${s.threeCol}`}>
            <div className={s.moduleCard}>
              <div className={s.moduleIcon}>⬛</div>
              <h3 className={s.moduleTitle}>Patient Flow</h3>
              <p className={s.moduleDesc}>
                Live view of every patient across all providers and rooms. See who has checked in,
                who is being roomed, who is with which provider, and which rooms have cleared —
                on one board visible to every staff member simultaneously.
              </p>
              <a href="/features/patient-flow" className={s.moduleLink}>Learn more →</a>
            </div>
            <div className={s.moduleCard}>
              <div className={s.moduleIcon}>⬛</div>
              <h3 className={s.moduleTitle}>Scheduling</h3>
              <p className={s.moduleDesc}>
                No-show alerts before the slot is wasted. Waitlist management that fills gaps
                proactively. Treatment plan adherence tracking that flags patients drifting
                off their prescribed visit schedule before they disappear entirely.
              </p>
              <a href="/features/scheduling" className={s.moduleLink}>Learn more →</a>
            </div>
            <div className={s.moduleCard}>
              <div className={s.moduleIcon}>⬛</div>
              <h3 className={s.moduleTitle}>Analytics</h3>
              <p className={s.moduleDesc}>
                No-show rates by provider and time slot. Treatment plan completion rates.
                Room utilization by hour. The data that shows you where your practice
                is leaking revenue and exactly which changes will recover it.
              </p>
              <a href="/features/analytics" className={s.moduleLink}>Learn more →</a>
            </div>
          </div>
        </section>

        {/* ── WORKFLOW ── */}
        <section className={s.workflow}>
          <h2>How a chiropractic visit flows through clinIQ.</h2>
          <div className={s.stageRow}>
            {[
              { label: 'Arrival / Check-In', color: '#0d9488' },
              { label: 'Roomed', color: '#8b5cf6' },
              { label: 'Provider Notified', color: '#f59e0b' },
              { label: 'Adjustment', color: '#3b82f6' },
              { label: 'Therapy / Modalities', color: '#ef4444' },
              { label: 'Checkout / Rebook', color: '#22c55e' },
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
            Room cleared status triggers automatically when checkout is recorded — the next
            patient can be roomed immediately without staff manually checking.
          </p>
        </section>

        {/* ── STATS ── */}
        <section className={s.stats}>
          <div className={s.statsGrid}>
            <div className={s.stat}>
              <div className={s.statNumber}>15–25%</div>
              <div className={s.statLabel}>typical chiropractic no-show rate — each empty slot is a direct revenue loss</div>
            </div>
            <div className={s.stat}>
              <div className={s.statNumber}>$75K+</div>
              <div className={s.statLabel}>annual revenue loss from unmanaged no-shows in a practice running 40 visits/day</div>
            </div>
            <div className={s.stat}>
              <div className={s.statNumber}>30–40%</div>
              <div className={s.statLabel}>no-show rate reduction when proactive confirmation and waitlist fill systems are in place</div>
            </div>
            <div className={s.stat}>
              <div className={s.statNumber}>40–60</div>
              <div className={s.statLabel}>visits per day per provider — the throughput level where flow visibility has outsized impact</div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className={s.faq}>
          <h2>Chiropractic operations, answered.</h2>
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
              You run 40 visits a day. Every gap that fills itself is revenue you keep.
            </h2>
            <p className={s.ctaDesc}>
              clinIQ gives chiropractic practices real-time room status, provider queues,
              no-show alerts, and treatment plan tracking — so high-volume days run at full
              efficiency instead of lurching through gaps.
            </p>
            <div className={s.ctaActions}>
              <a href="/demo" className={s.btnPrimary}>
                See clinIQ for chiropractic
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
            <a href="/specialties/physical-therapy" className={s.relatedLink}>Physical Therapy</a>
            <a href="/specialties/orthopedic-surgery" className={s.relatedLink}>Orthopedic Surgery</a>
            <a href="/specialties/pain-management" className={s.relatedLink}>Pain Management</a>
            <a href="/specialties/spine-surgery" className={s.relatedLink}>Spine Surgery</a>
          </div>
        </section>
      </main>
      <FooterInner />
    </>
  )
}
