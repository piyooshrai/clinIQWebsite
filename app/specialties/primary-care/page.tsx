import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import s from '@/app/specialties/specialty-full.module.css'

export const metadata: Metadata = {
  title: 'clinIQ for Primary Care — Same-Day Access Without the Phone Avalanche',
  description:
    'Primary care practices lose 2-3 hours a day to phone calls that should be 30-second status updates. clinIQ replaces the phone loop with live visibility — for check-in, flow, and same-day scheduling.',
  openGraph: {
    title: 'clinIQ for Primary Care — Same-Day Access Without the Phone Avalanche',
    description:
      'Patient flow, same-day scheduling, and real-time room status for primary care practices drowning in phone volume and reactive staffing.',
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
      { '@type': 'ListItem', position: 3, name: 'Primary Care', item: 'https://cliniq.com/specialties/primary-care' },
    ],
  },
  service: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'clinIQ for Primary Care',
    description:
      'Clinic operations platform for primary care: patient flow, same-day scheduling, and real-time visibility across high-volume, mixed-acuity practices.',
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
        name: 'Why does primary care have so much more phone volume than other specialties?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Primary care is the front door of healthcare. Patients call to ask if they should come in, to check if their prescription was sent, to find out if lab results are back, and to request same-day appointments. Each of those calls requires a staff member to look something up, make a judgment call, and relay the answer. A busy primary care practice handles 80-120 inbound calls per day — most of which are responding to questions whose answers already exist somewhere in the EHR but aren\'t surfaced proactively.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does clinIQ help with same-day scheduling?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'clinIQ gives front desk staff a live view of room availability, provider status, and current patient flow — so when someone calls for a same-day appointment, staff can see exactly where a slot exists rather than guessing, calling back, or overbooking speculatively. Practices that can answer same-day requests confidently on the first call see 30-40% fewer repeat same-day calls.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does clinIQ integrate with our EHR?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'clinIQ is built to layer on top of your existing EHR, not replace it. It pulls appointment and patient status data to build the live flow board, then surfaces that information in a format your front desk can actually use during a busy morning. Your clinical documentation stays in your EHR exactly as it does today.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can clinIQ help with chronic disease management follow-up scheduling?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. clinIQ\'s Scheduling module supports recall workflows — flagging patients due for A1C checks, blood pressure follow-ups, annual wellness visits, and other interval-based care. Practices using structured recall see 15-25% improvement in chronic disease quality metrics because patients who need follow-up actually get scheduled before their next acute visit.',
        },
      },
    ],
  },
}

const marqueeItems = [
  'Same-Day Scheduling', 'Phone Volume Reduction', 'Patient Flow',
  'Room Status', 'Chronic Disease Recalls', 'Walk-In Triage',
  'Check-In Automation', 'Provider Utilization', 'Staff Efficiency',
]

export default function PrimaryCarePage() {
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
            <span className={s.badge}>Primary Care</span>
            <h1 className={s.heroTitle}>
              Your staff is spending half the morning answering calls that{' '}
              <em>should be a screen glance.</em>
            </h1>
            <p className={s.heroSubtitle}>
              "Is the doctor running behind?" "Can I get in today?" "Was my prescription called in?"
              Those questions have answers that already exist somewhere. Your staff is just the bridge
              between the patient and a system that doesn't surface them proactively. clinIQ changes
              that — live room status, same-day capacity visibility, and check-in that doesn't
              require a phone call to confirm.
            </p>
            <div className={s.heroActions}>
              <a href="/demo" className={s.btnPrimary}>
                See clinIQ for primary care
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
              <h2>Primary care is high-volume, mixed-acuity, and completely reactive.</h2>
              <p className={s.realityNarrative}>
                A primary care practice on a normal day sees scheduled wellness visits, chronic disease
                follow-ups, acute sick calls, walk-ins, and same-day urgent slots — simultaneously.
                Each of those appointment types has different rooming needs, different staff requirements,
                and a different expected duration. None of that information is visible to your front
                desk in real time without someone manually looking it up.
              </p>
              <p className={s.realityNarrative}>
                The phone rings because patients can't see what you can barely see. They don't know
                if the doctor is running behind because you don't know either until someone walks
                to the back to check. They call to confirm a same-day slot because the last time
                they assumed one was available, it wasn't. Primary care practices don't have a
                demand problem — they have a visibility problem. And visibility problems feel like
                staffing problems until you fix the actual cause.
              </p>
            </div>
            <div className={s.realityRight}>
              <ul className={s.painList}>
                <li className={s.painItem}>
                  <span className={s.painDot} />
                  <span className={s.painText}>
                    Primary care practices handle 80-120 inbound calls per day — most are
                    status questions whose answers exist but aren't surfaced proactively.
                  </span>
                </li>
                <li className={s.painItem}>
                  <span className={s.painDot} />
                  <span className={s.painText}>
                    Same-day scheduling requires manual back-and-forth: staff checks, calls back,
                    confirms — a 30-second question becomes a 10-minute phone loop.
                  </span>
                </li>
                <li className={s.painItem}>
                  <span className={s.painDot} />
                  <span className={s.painText}>
                    Providers run behind in rooms invisible to front desk staff — patients
                    in the lobby wait with no information until someone physically checks.
                  </span>
                </li>
                <li className={s.painItem}>
                  <span className={s.painDot} />
                  <span className={s.painText}>
                    Chronic disease patients due for follow-up fall through the cracks between
                    visits — no structured recall means gaps in care and lower quality metrics.
                  </span>
                </li>
                <li className={s.painItem}>
                  <span className={s.painDot} />
                  <span className={s.painText}>
                    Walk-in patients and scheduled patients compete for the same rooms with no
                    triage logic — whoever gets roomed first wins, regardless of urgency.
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
                A patient calls at 9:15am to ask if there's a same-day slot. Staff puts them on
                hold, checks the schedule, calls back 20 minutes later to offer one — by which
                point the patient has called another practice.
              </div>
              <div className={`${s.changeLabel} ${s.changeLabelAfter}`}>After</div>
              <div className={s.changeAfter}>
                Staff sees live same-day capacity on the flow board. They answer the question
                on the first call, offer a specific time, and the slot is confirmed before the
                patient hangs up.
              </div>
            </div>
            <div className={s.changeCard}>
              <div className={`${s.changeLabel} ${s.changeLabelBefore}`}>Before</div>
              <div className={s.changeBefore}>
                Provider is running 45 minutes behind. Patients in the lobby don't know.
                Front desk staff don't know. Someone eventually walks to the back to check.
              </div>
              <div className={`${s.changeLabel} ${s.changeLabelAfter}`}>After</div>
              <div className={s.changeAfter}>
                clinIQ shows real-time room status and visit duration. Front desk staff can
                see delays forming and proactively communicate to waiting patients without
                leaving the desk.
              </div>
            </div>
            <div className={s.changeCard}>
              <div className={`${s.changeLabel} ${s.changeLabelBefore}`}>Before</div>
              <div className={s.changeBefore}>
                A diabetic patient's A1C is due. Nobody follows up. They come in 6 months
                later for an acute visit and the provider discovers the gap at the bedside.
              </div>
              <div className={`${s.changeLabel} ${s.changeLabelAfter}`}>After</div>
              <div className={s.changeAfter}>
                clinIQ flags overdue recalls automatically. Staff reaches out before the gap
                becomes a missed quality metric — and before the patient becomes a preventable
                complication.
              </div>
            </div>
            <div className={s.changeCard}>
              <div className={`${s.changeLabel} ${s.changeLabelBefore}`}>Before</div>
              <div className={s.changeBefore}>
                A walk-in with a URI and a scheduled patient with hypertension follow-up
                both need Room 2. First come, first served — no logic applied.
              </div>
              <div className={`${s.changeLabel} ${s.changeLabelAfter}`}>After</div>
              <div className={s.changeAfter}>
                clinIQ surfaces visit type and urgency flags on the flow board. Staff can
                triage room assignments by acuity, not arrival order, without needing
                a separate triage system.
              </div>
            </div>
          </div>
        </section>

        {/* ── MODULES ── */}
        <section className={s.modules}>
          <h2>The clinIQ modules built for primary care volume.</h2>
          <div className={s.modulesGrid}>
            <div className={s.moduleCard}>
              <div className={s.moduleIcon}>⬛</div>
              <h3 className={s.moduleTitle}>Patient Flow</h3>
              <p className={s.moduleDesc}>
                Live view of every patient in your practice: checked in, roomed, with provider,
                awaiting labs, ready for discharge. Front desk and clinical staff see the same
                board without phone calls to sync.
              </p>
              <a href="/features/patient-flow" className={s.moduleLink}>Learn more →</a>
            </div>
            <div className={s.moduleCard}>
              <div className={s.moduleIcon}>⬛</div>
              <h3 className={s.moduleTitle}>Check-In</h3>
              <p className={s.moduleDesc}>
                Self-service check-in that captures arrival, confirms appointment details,
                and signals the MA that a patient is ready — without a staff member managing
                each arrival individually during the morning rush.
              </p>
              <a href="/features/check-in" className={s.moduleLink}>Learn more →</a>
            </div>
            <div className={s.moduleCard}>
              <div className={s.moduleIcon}>⬛</div>
              <h3 className={s.moduleTitle}>Scheduling</h3>
              <p className={s.moduleDesc}>
                Same-day capacity visible at a glance. Recall workflows for chronic disease
                follow-ups. Walk-in queue management integrated with the scheduled day —
                not a separate system nobody updates.
              </p>
              <a href="/features/scheduling" className={s.moduleLink}>Learn more →</a>
            </div>
            <div className={s.moduleCard}>
              <div className={s.moduleIcon}>⬛</div>
              <h3 className={s.moduleTitle}>Analytics</h3>
              <p className={s.moduleDesc}>
                Phone call volume by hour, no-show rates by appointment type, provider
                utilization, and same-day fill rates. The data that tells you whether your
                staffing matches your actual demand curve.
              </p>
              <a href="/features/analytics" className={s.moduleLink}>Learn more →</a>
            </div>
          </div>
        </section>

        {/* ── WORKFLOW ── */}
        <section className={s.workflow}>
          <h2>How a primary care visit flows through clinIQ.</h2>
          <div className={s.stageRow}>
            {[
              { label: 'Arrival / Check-In', color: '#0d9488' },
              { label: 'Waiting Room', color: '#8b5cf6' },
              { label: 'Roomed / Vitals', color: '#f59e0b' },
              { label: 'With Provider', color: '#3b82f6' },
              { label: 'Labs / Imaging', color: '#ef4444' },
              { label: 'Provider Review', color: '#f59e0b' },
              { label: 'Checkout / Next', color: '#22c55e' },
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
            Walk-in patients enter after Arrival/Check-In with an urgency flag visible on the
            board — staff can triage room assignment by acuity without a separate intake form.
          </p>
        </section>

        {/* ── STATS ── */}
        <section className={s.stats}>
          <div className={s.statsGrid}>
            <div className={s.stat}>
              <div className={s.statNumber}>80–120</div>
              <div className={s.statLabel}>inbound calls per day in a busy primary care practice — mostly status questions</div>
            </div>
            <div className={s.stat}>
              <div className={s.statNumber}>2–3 hrs</div>
              <div className={s.statLabel}>staff time consumed daily by phone inquiries that live visibility would eliminate</div>
            </div>
            <div className={s.stat}>
              <div className={s.statNumber}>30–40%</div>
              <div className={s.statLabel}>reduction in same-day call volume when practices can answer same-day requests on the first call</div>
            </div>
            <div className={s.stat}>
              <div className={s.statNumber}>15–25%</div>
              <div className={s.statLabel}>improvement in chronic disease quality metrics when recall workflows are automated vs. manual</div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className={s.faq}>
          <h2>Primary care operations, answered.</h2>
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
              Your staff knows the answers. They're just spending all morning relaying them.
            </h2>
            <p className={s.ctaDesc}>
              clinIQ surfaces patient status, room availability, and same-day capacity in real time —
              so your front desk spends less time on the phone and more time on the patients
              who are actually standing in front of them.
            </p>
            <div className={s.ctaActions}>
              <a href="/demo" className={s.btnPrimary}>
                See clinIQ for primary care
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
            <a href="/specialties/urgent-care" className={s.relatedLink}>Urgent Care</a>
            <a href="/specialties/behavioral-health" className={s.relatedLink}>Behavioral Health</a>
            <a href="/specialties/pediatrics" className={s.relatedLink}>Pediatrics</a>
            <a href="/specialties/ob-gyn" className={s.relatedLink}>OB-GYN</a>
          </div>
        </section>
      </main>
      <FooterInner />
    </>
  )
}
