import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import s from '@/app/specialties/specialty-full.module.css'

export const metadata: Metadata = {
  title: 'clinIQ for General Surgery — Clinic-to-OR Coordination Without the Phone Tag',
  description:
    'General surgery practices split their time between clinic and the OR. The gap between those two environments is where status gets lost, pre-op prep falls through, and post-op follow-up gets squeezed. clinIQ bridges them.',
  openGraph: {
    title: 'clinIQ for General Surgery — Clinic-to-OR Coordination Without the Phone Tag',
    description:
      'Real-time pre-op tracking, clinic-OR coordination, and post-op follow-up management for general surgery practices.',
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
      { '@type': 'ListItem', position: 3, name: 'General Surgery', item: 'https://cliniq.com/specialties/general-surgery' },
    ],
  },
  service: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'clinIQ for General Surgery',
    description:
      'Clinic operations platform for general surgery: pre-op clearance tracking, clinic-OR coordination, wound care workflow management, and post-op follow-up scheduling.',
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
        name: 'Why is clinic-to-OR coordination so difficult in general surgery?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'General surgeons operate in two completely different environments — the outpatient clinic and the hospital OR — each with its own scheduling system, staff, and information flow. The clinic doesn\'t have live visibility into OR status. The OR doesn\'t know what happened in clinic last week. Pre-op prep steps happen across both environments, and tracking them requires someone manually calling between two systems that don\'t talk to each other. That someone is usually the surgical coordinator — who is also managing new consults, referrals, and post-op follow-up simultaneously.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does clinIQ help with pre-surgical clearance tracking?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Pre-surgical clearance for general surgery involves labs, cardiac clearance, anesthesia pre-screening, and sometimes pulmonology or endocrine consultation — each with its own timeline and documentation requirement. clinIQ tracks each step with a live status board visible to the surgical coordinator. Missing clearances are flagged before the surgical date, not discovered the day before or the morning of.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does clinIQ handle wound care follow-up scheduling?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Wound checks, staple removals, and drain management visits have specific timing requirements — they need to happen at 1 week, 2 weeks, and sometimes 4-6 weeks post-op, and they require specific room setup, supplies, and staff preparation. clinIQ tracks these visits separately from standard follow-up appointments and signals rooming requirements before the patient arrives — so the room has what it needs when the patient is walked back, not after.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can clinIQ track patients who have been cleared for surgery but are waiting for a date?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Patients who complete pre-surgical clearance but are waiting for an OR date are a common source of confusion and patient frustration in general surgery. clinIQ maintains a clearance-complete queue with the date clearance was obtained and the estimated OR scheduling window — so the surgical coordinator can see who is ready, how long they have been waiting, and whether a PA approval window is approaching expiration.',
        },
      },
    ],
  },
}

const marqueeItems = [
  'Clinic-OR Coordination', 'Pre-Op Clearance Tracking', 'Wound Care Workflow',
  'Surgical Scheduling', 'Post-Op Follow-Up', 'PA Management',
  'Referral Tracking', 'Drain Management Visits', 'Consent Documentation',
]

export default function GeneralSurgeryPage() {
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
            <span className={s.badge}>General Surgery</span>
            <h1 className={s.heroTitle}>
              Your surgical coordinator is calling the hospital to find out status they{' '}
              <em>should be able to see.</em>
            </h1>
            <p className={s.heroSubtitle}>
              General surgery lives in two worlds that don't talk to each other. Clinic manages
              consults, pre-op clearances, and post-op follow-ups. The OR has its own schedule,
              its own staff, and its own communication system. The gap between them is your
              surgical coordinator making phone calls for status that should be a screen glance.
              clinIQ bridges the two with live visibility across the entire surgical episode.
            </p>
            <div className={s.heroActions}>
              <a href="/demo" className={s.btnPrimary}>
                See clinIQ for general surgery
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
              <h2>Two scheduling systems, two environments, one person trying to hold them together.</h2>
              <p className={s.realityNarrative}>
                A general surgery practice sees new consults, pre-op visits, post-op wound checks,
                staple removals, drain management, and routine follow-ups — all in the same clinic
                schedule, often on the same day. Each visit type has different room requirements,
                different supply needs, and different staff preparation demands. None of those
                requirements are communicated to the room before the patient arrives.
              </p>
              <p className={s.realityNarrative}>
                Pre-surgical clearance is worse. Labs, cardiac consult, anesthesia screening,
                and sometimes three or four other specialty evaluations all have to complete
                within a window that keeps the surgical date viable. The surgical coordinator
                tracks each one by calling individual offices, waiting for callbacks, and trying
                to maintain a mental model of 20 patients in various stages of clearance
                simultaneously. When one step fails silently — a clearance that was scheduled
                but not completed, a PA that expired — the surgical date goes with it.
              </p>
            </div>
            <div className={s.realityRight}>
              <ul className={s.painList}>
                <li className={s.painItem}>
                  <span className={s.painDot} />
                  <span className={s.painText}>
                    OR-clinic coordination relies on phone calls — staff call the hospital
                    to confirm case status instead of seeing it in real time.
                  </span>
                </li>
                <li className={s.painItem}>
                  <span className={s.painDot} />
                  <span className={s.painText}>
                    Wound checks and staple removals need specific room setup and supplies
                    that are never signaled in advance — staff learn what's needed when the
                    patient is already in the room.
                  </span>
                </li>
                <li className={s.painItem}>
                  <span className={s.painDot} />
                  <span className={s.painText}>
                    Pre-surgical clearance paperwork gets lost between referring providers
                    and your office with no tracking — assumed complete until it isn't.
                  </span>
                </li>
                <li className={s.painItem}>
                  <span className={s.painDot} />
                  <span className={s.painText}>
                    Patients who've been cleared for surgery wait weeks for a callback
                    that should take hours — no visibility into where the bottleneck is.
                  </span>
                </li>
                <li className={s.painItem}>
                  <span className={s.painDot} />
                  <span className={s.painText}>
                    Post-op follow-up visits get squeezed into already packed clinic schedules
                    with no prioritization — wound complications compete with new consults
                    for the same 15-minute slots.
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
                A patient's pre-op clearance was assumed complete. The day before surgery,
                the coordinator discovers cardiac clearance was never finalized. Surgery pushed
                3 weeks. OR slot given to another case.
              </div>
              <div className={`${s.changeLabel} ${s.changeLabelAfter}`}>After</div>
              <div className={s.changeAfter}>
                clinIQ tracks each clearance step with a live board. Missing clearances
                are flagged two weeks before the surgical date — time enough to schedule,
                complete, and confirm before the OR slot is at risk.
              </div>
            </div>
            <div className={s.changeCard}>
              <div className={`${s.changeLabel} ${s.changeLabelBefore}`}>Before</div>
              <div className={s.changeBefore}>
                A wound check patient is walked back to Room 3. The MA discovers the
                wound care cart isn't set up and the provider needs specific supplies.
                Ten minutes lost while someone sets up the room.
              </div>
              <div className={`${s.changeLabel} ${s.changeLabelAfter}`}>After</div>
              <div className={s.changeAfter}>
                clinIQ surfaces visit type and rooming requirements before the patient
                arrives. Wound check signals: cart needed, wound care supplies, provider
                needs 30-minute slot. Room is ready when the patient walks in.
              </div>
            </div>
            <div className={s.changeCard}>
              <div className={`${s.changeLabel} ${s.changeLabelBefore}`}>Before</div>
              <div className={s.changeBefore}>
                A cleared-for-surgery patient calls at week 3 to ask why nobody has
                scheduled them. The coordinator has to look up their status, figure
                out where in the OR scheduling queue they are, and call back.
              </div>
              <div className={`${s.changeLabel} ${s.changeLabelAfter}`}>After</div>
              <div className={s.changeAfter}>
                clinIQ maintains a clearance-complete queue with clearance date and
                estimated scheduling window visible. The coordinator can answer the
                patient's question on the first call — or proactively reach out
                before the patient has to call.
              </div>
            </div>
            <div className={s.changeCard}>
              <div className={`${s.changeLabel} ${s.changeLabelBefore}`}>Before</div>
              <div className={s.changeBefore}>
                Post-op follow-up gets bumped for a new consult that needed the slot.
                The post-op patient rebooks for two weeks later. A drain issue that
                should have been caught at 2 weeks presents at the ER at week 4.
              </div>
              <div className={`${s.changeLabel} ${s.changeLabelAfter}`}>After</div>
              <div className={s.changeAfter}>
                Post-op visits are tracked separately and flagged if not scheduled
                within the appropriate window. The 2-week drain check happens at
                2 weeks — not when the patient becomes an ER visit.
              </div>
            </div>
          </div>
        </section>

        {/* ── MODULES ── */}
        <section className={s.modules}>
          <h2>The clinIQ modules built for the surgical episode.</h2>
          <div className={s.modulesGrid}>
            <div className={s.moduleCard}>
              <div className={s.moduleIcon}>⬛</div>
              <h3 className={s.moduleTitle}>Patient Flow</h3>
              <p className={s.moduleDesc}>
                Live status for every patient in the surgical pipeline: consult, clearance,
                scheduled, pre-op, post-op, wound check. Room requirements flagged before
                the patient arrives, not after they're roomed.
              </p>
              <a href="/features/patient-flow" className={s.moduleLink}>Learn more →</a>
            </div>
            <div className={s.moduleCard}>
              <div className={s.moduleIcon}>⬛</div>
              <h3 className={s.moduleTitle}>Pre-Authorization</h3>
              <p className={s.moduleDesc}>
                Track each PA from submission to approval with expiration alerts.
                Clearance status board shows every required step across every patient —
                visible to the entire coordinator team, not just the person who made
                the last phone call.
              </p>
              <a href="/features/pre-auth" className={s.moduleLink}>Learn more →</a>
            </div>
            <div className={s.moduleCard}>
              <div className={s.moduleIcon}>⬛</div>
              <h3 className={s.moduleTitle}>Scheduling</h3>
              <p className={s.moduleDesc}>
                Post-op follow-up windows tracked against procedure dates. Clearance-complete
                queue for patients waiting for OR scheduling. Wound check and drain management
                visits flagged with appropriate slot lengths and room requirements.
              </p>
              <a href="/features/scheduling" className={s.moduleLink}>Learn more →</a>
            </div>
            <div className={s.moduleCard}>
              <div className={s.moduleIcon}>⬛</div>
              <h3 className={s.moduleTitle}>Analytics</h3>
              <p className={s.moduleDesc}>
                Average days from consult to OR. Clearance completion rates and bottleneck
                points. Post-op follow-up adherence. PA denial rates by procedure.
                The data to run a surgical practice, not just a clinic.
              </p>
              <a href="/features/analytics" className={s.moduleLink}>Learn more →</a>
            </div>
          </div>
        </section>

        {/* ── WORKFLOW ── */}
        <section className={s.workflow}>
          <h2>How a surgical episode flows through clinIQ.</h2>
          <div className={s.stageRow}>
            {[
              { label: 'Consult', color: '#f59e0b' },
              { label: 'Pre-Op Clearance', color: '#8b5cf6' },
              { label: 'PA / Scheduling', color: '#ef4444' },
              { label: 'OR', color: '#3b82f6' },
              { label: 'Wound Check', color: '#f59e0b' },
              { label: 'Post-Op', color: '#22c55e' },
              { label: 'Discharge / Follow-Up', color: '#0d9488' },
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
            Pre-Op Clearance and PA/Scheduling are parallel tracks — both run simultaneously
            with expiration monitoring so neither collapses the surgical date silently.
          </p>
        </section>

        {/* ── STATS ── */}
        <section className={s.stats}>
          <div className={s.statsGrid}>
            <div className={s.stat}>
              <div className={s.statNumber}>3–5</div>
              <div className={s.statLabel}>separate pre-op clearance steps per complex general surgery case — each one a separate coordination dependency</div>
            </div>
            <div className={s.stat}>
              <div className={s.statNumber}>15–30%</div>
              <div className={s.statLabel}>of surgical cases experience delays attributable to pre-op clearance gaps or PA expiration, not clinical factors</div>
            </div>
            <div className={s.stat}>
              <div className={s.statNumber}>2 wks</div>
              <div className={s.statLabel}>typical time for a cleared-for-surgery patient to receive an OR scheduling call — most of that time is administrative, not clinical</div>
            </div>
            <div className={s.stat}>
              <div className={s.statNumber}>4 visits</div>
              <div className={s.statLabel}>minimum post-operative visits needed for standard general surgery cases — each one a scheduling dependency with clinical consequence if missed</div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className={s.faq}>
          <h2>General surgery operations, answered.</h2>
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
              Clinic and OR shouldn't be two systems your coordinator bridges manually.
            </h2>
            <p className={s.ctaDesc}>
              clinIQ gives general surgery practices live visibility across the entire surgical
              episode — from first consult to final follow-up — so nothing falls through the gap
              between your clinic schedule and the hospital.
            </p>
            <div className={s.ctaActions}>
              <a href="/demo" className={s.btnPrimary}>
                See clinIQ for general surgery
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
            <a href="/specialties/spine-surgery" className={s.relatedLink}>Spine Surgery</a>
            <a href="/specialties/orthopedic-surgery" className={s.relatedLink}>Orthopedic Surgery</a>
            <a href="/specialties/pain-management" className={s.relatedLink}>Pain Management</a>
            <a href="/specialties/cardiology" className={s.relatedLink}>Cardiology</a>
          </div>
        </section>
      </main>
      <FooterInner />
    </>
  )
}
