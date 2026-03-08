import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import s from '@/app/specialties/specialty-full.module.css'

export const metadata: Metadata = {
  title: 'clinIQ for OB-GYN — Phone Volume, Scheduling Roles, and Patient Flow Without the Chaos',
  description:
    'OB-GYN practices field 100+ calls per day, manage split scheduling roles between OB and GYN, and run prenatal visits that stack faster than any other specialty. clinIQ replaces the phone loop with real-time visibility.',
  openGraph: {
    title: 'clinIQ for OB-GYN — Phone Volume, Scheduling Roles, and Patient Flow Without the Chaos',
    description:
      'Patient flow, prenatal visit coordination, and scheduling role management for OB-GYN practices managing high call volume and mixed patient populations.',
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
      { '@type': 'ListItem', position: 3, name: 'OB-GYN', item: 'https://cliniq.com/specialties/ob-gyn' },
    ],
  },
  service: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'clinIQ for OB-GYN',
    description:
      'Clinic operations platform for OB-GYN practices: prenatal visit management, GYN scheduling coordination, call volume reduction, and real-time patient flow across high-demand, mixed-acuity practices.',
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
        name: 'Why do OB-GYN practices have such high phone volume?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'OB-GYN practices generate call volume from multiple distinct patient populations simultaneously. Obstetric patients call with pregnancy concerns that require clinical triage — is this normal, or do I need to come in? GYN patients call for appointment scheduling, medication refills, and lab result follow-up. And the fragmented scheduling structure of most OB-GYN practices — where one scheduler handles OB and another handles GYN — means patients who call with mixed needs bounce between staff members. The result is 100-150 inbound calls per day in a busy practice, most of which could be reduced with better proactive communication and self-service check-in.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does clinIQ help with prenatal visit scheduling and flow?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Prenatal care involves a structured visit sequence from 8 weeks through delivery — typically 12-14 visits with specific timing requirements, lab draws, ultrasounds, and GBS testing windows. clinIQ tracks each prenatal patient through their expected visit sequence, flagging upcoming visits for recall scheduling and tracking completion. The live flow board shows prenatal patients at each stage of the clinic visit — waiting for vitals, with provider, waiting for ultrasound — so staff can coordinate the multi-step prenatal visit without phone calls between departments.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does clinIQ handle the split between OB and GYN scheduling?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'clinIQ supports separate scheduling workflows for OB and GYN within the same practice, with a shared live flow board that both scheduling teams can see. OB coordinators see prenatal visits, ultrasound scheduling, and delivery prep. GYN coordinators see annual exams, procedure scheduling, and colposcopy follow-up. Both teams see the same patient flow board, so rooming, provider status, and room availability are shared information rather than siloed by scheduling role.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can clinIQ reduce the volume of after-hours calls in OB-GYN?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Many after-hours OB-GYN calls come from patients who couldn\'t get through during business hours or who weren\'t given clear instructions about what to expect at each prenatal stage. Practices that proactively communicate prenatal milestones — what symptoms are normal at 20 weeks, when to call immediately vs. wait until morning — see measurable reductions in after-hours call volume. clinIQ\'s patient communication tools support structured prenatal education messaging at each visit interval, reducing the "is this normal?" call before it happens.',
        },
      },
    ],
  },
}

const marqueeItems = [
  'Prenatal Visit Tracking', 'OB-GYN Scheduling Roles', 'Call Volume Reduction',
  'Ultrasound Coordination', 'GBS Testing Windows', 'GYN Procedure Scheduling',
  'Patient Flow', 'Colposcopy Follow-Up', 'Delivery Prep',
]

export default function ObGynPage() {
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
            <span className={s.badge}>OB-GYN</span>
            <h1 className={s.heroTitle}>
              Your voicemail is full. Your hold queue is 15 minutes long.{' '}
              <em>Your patients are still trying to reach you.</em>
            </h1>
            <p className={s.heroSubtitle}>
              OB-GYN practices field more inbound calls per day than almost any other specialty —
              from pregnant patients asking if symptoms are normal, GYN patients scheduling
              procedures, and everyone in between. The phone volume isn't a staffing problem.
              It's a visibility problem. Patients call because they can't see their status,
              can't confirm their appointment, and can't get an answer without waiting on hold.
              clinIQ changes what patients can see — and what your staff has to manage.
            </p>
            <div className={s.heroActions}>
              <a href="/demo" className={s.btnPrimary}>
                See clinIQ for OB-GYN
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
              <h2>OB-GYN is two practices running in parallel, sharing one phone line.</h2>
              <p className={s.realityNarrative}>
                Most OB-GYN practices split operationally by service line: obstetrics runs on
                a prenatal visit calendar with structured milestones, ultrasounds, and lab windows.
                Gynecology runs on a mix of annual wellness, procedure scheduling, abnormal Pap
                follow-up, and contraceptive management. Both patient populations call the same
                number, reach the same staff, and compete for the same scheduling windows.
              </p>
              <p className={s.realityNarrative}>
                Prenatal patients are the highest-call-volume group in the practice. First-trimester
                anxiety generates "is this normal?" calls that require clinical triage, not just
                scheduling. Ultrasound scheduling adds coordination between the OB provider and the
                ultrasound technician — a two-step booking that often takes three phone calls to
                complete. And a patient who can't get through on hold doesn't stop calling — they
                call the after-hours line, the emergency line, or the nurse's direct extension.
                The phone volume is a symptom. The disease is invisible patient status.
              </p>
            </div>
            <div className={s.realityRight}>
              <ul className={s.painList}>
                <li className={s.painItem}>
                  <span className={s.painDot} />
                  <span className={s.painText}>
                    OB-GYN practices handle 100-150 inbound calls per day — among the
                    highest of any clinic specialty, with most calls being status questions
                    or appointment confirmations that don't require a clinical response.
                  </span>
                </li>
                <li className={s.painItem}>
                  <span className={s.painDot} />
                  <span className={s.painText}>
                    Prenatal visit sequencing requires 12-14 appointments with specific
                    timing — lab draws, ultrasounds, and GBS testing each have windows
                    that create cascading scheduling dependencies.
                  </span>
                </li>
                <li className={s.painItem}>
                  <span className={s.painDot} />
                  <span className={s.painText}>
                    Split OB/GYN scheduling creates patient confusion — patients scheduled
                    with OB coordinators get bounced to GYN staff for procedures, and
                    neither team has visibility into the other's board.
                  </span>
                </li>
                <li className={s.painItem}>
                  <span className={s.painDot} />
                  <span className={s.painText}>
                    Abnormal Pap and colposcopy follow-up gets lost between annual exam
                    and procedure scheduling — patients who need prompt follow-up wait
                    weeks because coordination between providers is manual.
                  </span>
                </li>
                <li className={s.painItem}>
                  <span className={s.painDot} />
                  <span className={s.painText}>
                    After-hours calls spike when patients can't reach the office during
                    the day — hold times of 15-30 minutes drive calls to on-call staff
                    for questions that should have been answered at 2pm.
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
                A prenatal patient at 20 weeks calls to confirm her anatomy scan. Hold time
                is 18 minutes. She hangs up and calls back. Gets voicemail. Calls the after-hours
                line. On-call staff handles a scheduling call at 8pm.
              </div>
              <div className={`${s.changeLabel} ${s.changeLabelAfter}`}>After</div>
              <div className={s.changeAfter}>
                clinIQ's prenatal sequence tracker surfaces the anatomy scan appointment
                confirmation proactively, before the patient has to call. Patients who
                need to confirm can do so without navigating the phone queue.
              </div>
            </div>
            <div className={s.changeCard}>
              <div className={`${s.changeLabel} ${s.changeLabelBefore}`}>Before</div>
              <div className={s.changeBefore}>
                A GYN patient with an abnormal Pap is told she needs colposcopy. The
                scheduler says "we'll call you to set that up." Nobody calls. Patient
                calls back 3 weeks later. The window for prompt follow-up has narrowed.
              </div>
              <div className={`${s.changeLabel} ${s.changeLabelAfter}`}>After</div>
              <div className={s.changeAfter}>
                clinIQ flags abnormal Pap patients needing colposcopy follow-up with
                an urgency flag and scheduling window. The outreach happens within 48
                hours — not when the patient follows up for themselves.
              </div>
            </div>
            <div className={s.changeCard}>
              <div className={`${s.changeLabel} ${s.changeLabelBefore}`}>Before</div>
              <div className={s.changeBefore}>
                Ultrasound scheduling requires coordinating provider availability,
                tech availability, and the right ultrasound machine — a three-party
                booking that takes 2-3 phone calls per appointment to complete.
              </div>
              <div className={`${s.changeLabel} ${s.changeLabelAfter}`}>After</div>
              <div className={s.changeAfter}>
                clinIQ's scheduling module shows provider, tech, and equipment
                availability together. Ultrasound appointments are booked once,
                on the first call, without calling back to confirm availability.
              </div>
            </div>
            <div className={s.changeCard}>
              <div className={`${s.changeLabel} ${s.changeLabelBefore}`}>Before</div>
              <div className={s.changeBefore}>
                An OB patient arriving for her 28-week visit needs her glucose tolerance
                test drawn. The MA rooms her, then realizes the lab draw instructions
                weren't communicated and the patient didn't fast. Visit rescheduled.
              </div>
              <div className={`${s.changeLabel} ${s.changeLabelAfter}`}>After</div>
              <div className={s.changeAfter}>
                clinIQ flags prep requirements at each prenatal visit milestone.
                The 28-week appointment triggers an automated reminder with glucose
                tolerance test fasting instructions 48 hours before — visit happens
                on schedule.
              </div>
            </div>
          </div>
        </section>

        {/* ── MODULES ── */}
        <section className={s.modules}>
          <h2>The clinIQ modules that manage the OB-GYN patient pipeline.</h2>
          <div className={s.modulesGrid}>
            <div className={s.moduleCard}>
              <div className={s.moduleIcon}>⬛</div>
              <h3 className={s.moduleTitle}>Patient Flow</h3>
              <p className={s.moduleDesc}>
                Live board showing every patient across OB and GYN — prenatal visits,
                ultrasound coordination, GYN procedures, and follow-up care on one
                screen shared by all staff. Room status visible without walking the floor.
              </p>
              <a href="/features/patient-flow" className={s.moduleLink}>Learn more →</a>
            </div>
            <div className={s.moduleCard}>
              <div className={s.moduleIcon}>⬛</div>
              <h3 className={s.moduleTitle}>Scheduling</h3>
              <p className={s.moduleDesc}>
                Prenatal visit sequencing with milestone-based recall. Ultrasound
                coordination with provider and tech availability. Colposcopy follow-up
                tracking with urgency flags. OB and GYN scheduling visible to both teams.
              </p>
              <a href="/features/scheduling" className={s.moduleLink}>Learn more →</a>
            </div>
            <div className={s.moduleCard}>
              <div className={s.moduleIcon}>⬛</div>
              <h3 className={s.moduleTitle}>Check-In</h3>
              <p className={s.moduleDesc}>
                Self-service check-in that reduces front desk phone and counter volume
                during peak morning hours. Prenatal patients confirm arrival and trigger
                rooming workflow without requiring a staff member to process each arrival.
              </p>
              <a href="/features/check-in" className={s.moduleLink}>Learn more →</a>
            </div>
            <div className={s.moduleCard}>
              <div className={s.moduleIcon}>⬛</div>
              <h3 className={s.moduleTitle}>Analytics</h3>
              <p className={s.moduleDesc}>
                Inbound call volume by hour and source. Prenatal visit completion rates
                by trimester. Colposcopy follow-up turnaround times. After-hours call
                volume patterns. The data that shows where your practice is losing
                patients and staff capacity.
              </p>
              <a href="/features/analytics" className={s.moduleLink}>Learn more →</a>
            </div>
          </div>
        </section>

        {/* ── WORKFLOW ── */}
        <section className={s.workflow}>
          <h2>How a prenatal visit sequence moves through clinIQ.</h2>
          <div className={s.stageRow}>
            {[
              { label: 'Initial OB Appt', color: '#0d9488' },
              { label: 'Prenatal Sequence', color: '#8b5cf6' },
              { label: 'Ultrasound / Labs', color: '#f59e0b' },
              { label: 'Specialist Consults', color: '#ef4444' },
              { label: 'GBS / Delivery Prep', color: '#3b82f6' },
              { label: 'Delivery', color: '#f59e0b' },
              { label: 'Post-Partum Follow-Up', color: '#22c55e' },
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
            Each prenatal stage has milestone-specific scheduling requirements and prep
            instructions — clinIQ tracks completion and triggers the next recall automatically.
          </p>
        </section>

        {/* ── STATS ── */}
        <section className={s.stats}>
          <div className={s.statsGrid}>
            <div className={s.stat}>
              <div className={s.statNumber}>100–150</div>
              <div className={s.statLabel}>inbound calls per day in a busy OB-GYN practice — among the highest call volumes of any clinic specialty</div>
            </div>
            <div className={s.stat}>
              <div className={s.statNumber}>15–30 min</div>
              <div className={s.statLabel}>average hold time in OB-GYN practices that haven't reduced call volume with proactive patient communication</div>
            </div>
            <div className={s.stat}>
              <div className={s.statNumber}>12–14</div>
              <div className={s.statLabel}>prenatal visits in a standard uncomplicated pregnancy — each with specific scheduling windows and prep requirements</div>
            </div>
            <div className={s.stat}>
              <div className={s.statNumber}>3 calls</div>
              <div className={s.statLabel}>average phone interactions needed to book a single OB ultrasound appointment when availability isn't visible in real time</div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className={s.faq}>
          <h2>OB-GYN operations, answered.</h2>
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
              Your patients are calling because they can't see what your staff can barely see.
            </h2>
            <p className={s.ctaDesc}>
              clinIQ gives OB-GYN practices live prenatal sequencing, real-time patient flow,
              and scheduling visibility that reduces inbound call volume and after-hours
              escalations — without adding staff.
            </p>
            <div className={s.ctaActions}>
              <a href="/demo" className={s.btnPrimary}>
                See clinIQ for OB-GYN
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
            <a href="/specialties/pediatrics" className={s.relatedLink}>Pediatrics</a>
            <a href="/specialties/behavioral-health" className={s.relatedLink}>Behavioral Health</a>
            <a href="/specialties/urgent-care" className={s.relatedLink}>Urgent Care</a>
          </div>
        </section>
      </main>
      <FooterInner />
    </>
  )
}
