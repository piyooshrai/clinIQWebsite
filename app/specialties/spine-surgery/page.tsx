import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import s from '@/app/specialties/specialty-full.module.css'

export const metadata: Metadata = {
  title: 'clinIQ for Spine Surgery — Pre-Op Clearance and Post-Op Flow Without the Gaps',
  description:
    'Spine surgery practices lose weeks to pre-authorization delays, fragmented pre-op clearance coordination, and post-op follow-up scheduling that competes with new surgical consults. clinIQ coordinates the full surgical episode.',
  openGraph: {
    title: 'clinIQ for Spine Surgery — Pre-Op Clearance and Post-Op Flow Without the Gaps',
    description:
      'Pre-authorization tracking, pre-op coordination, and post-op follow-up management for spine surgery practices.',
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
      { '@type': 'ListItem', position: 3, name: 'Spine Surgery', item: 'https://cliniq.com/specialties/spine-surgery' },
    ],
  },
  service: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'clinIQ for Spine Surgery',
    description:
      'Clinic operations platform for spine surgery practices: pre-authorization tracking, pre-op clearance coordination, imaging orchestration, and post-op follow-up management.',
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
        name: 'Why is spine surgery pre-authorization so difficult?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Spine procedures — especially fusions, laminectomies, and disc replacements — consistently rank among the highest denial rates of any surgical specialty. Insurers require documented conservative treatment failure, specific imaging findings, and functional limitation evidence submitted in a precise format. The documentation requirements are extensive, the submission windows are narrow, and the review timelines are long. Most practice PA failures happen not because the case lacks clinical justification, but because the documentation package was incomplete or submitted too late to leave time for appeals.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does clinIQ help manage the pre-op clearance process?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Spine surgery pre-op clearance typically involves cardiology, primary care, anesthesia, and sometimes pulmonology — all of which need to complete their evaluations within a window that aligns with the surgical date. clinIQ tracks each clearance step with a live status board visible to the surgical coordinator, so nothing gets missed and the surgery date isn\'t lost to a clearance that was assumed complete but wasn\'t. When a clearance is pending, the board shows it — not the day before surgery.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does spine surgery post-op follow-up scheduling work with clinIQ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Post-op spine patients need structured follow-up at 2 weeks, 6 weeks, 3 months, and 12 months minimum. In busy practices, these follow-up slots compete with new surgical consults for limited appointment availability. clinIQ prioritizes post-op follow-up scheduling automatically and flags patients approaching their follow-up window who haven\'t yet scheduled — before the gap turns into a complication that arrives via ER.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can clinIQ track imaging orders between consult and surgery?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Spine surgery typically requires MRI, CT, and sometimes myelogram at various stages from initial consult through pre-surgical planning. clinIQ tracks each imaging order — ordered, scheduled, completed, results received — so the surgical coordinator and provider have a live view of where each patient stands in the pre-surgical workup without calling the imaging center or waiting for results to appear in the EHR.',
        },
      },
    ],
  },
}

const marqueeItems = [
  'Pre-Authorization Tracking', 'Pre-Op Clearance', 'Surgical Coordination',
  'Imaging Order Tracking', 'Post-Op Follow-Up', 'PA Denial Appeals',
  'Conservative Treatment Documentation', 'Anesthesia Clearance', 'OR Scheduling',
]

export default function SpineSurgeryPage() {
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
            <span className={s.badge}>Spine Surgery</span>
            <h1 className={s.heroTitle}>
              A surgery date gets set. Then it gets lost in{' '}
              <em>the clearance maze that nobody is tracking.</em>
            </h1>
            <p className={s.heroSubtitle}>
              Spine surgery is the most documentation-intensive surgical specialty. Pre-authorization
              denials run higher than almost any other procedure. Pre-op clearance involves three to
              five specialists who aren't coordinating with each other. Post-op follow-up competes
              with new consults for the same limited slots. clinIQ gives your surgical coordinator
              live visibility into every step — so the surgery date you scheduled actually happens.
            </p>
            <div className={s.heroActions}>
              <a href="/demo" className={s.btnPrimary}>
                See clinIQ for spine surgery
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
              <h2>Spine is the specialty where the pre-surgical process is as complex as the surgery.</h2>
              <p className={s.realityNarrative}>
                The average spine surgery patient takes 3-6 months from initial consult to OR date —
                not because of clinical complexity, but because of the documentation gauntlet
                between them. Conservative treatment documentation has to be complete before the
                PA is submitted. The PA has to be approved before the surgical date is set.
                Cardiology clearance, anesthesia pre-screening, and primary care sign-off all have
                to be coordinated within a window that doesn't shift the OR date.
              </p>
              <p className={s.realityNarrative}>
                When any of those steps falls through — a clearance not obtained, an imaging
                result not received, a PA that was approved last quarter but expired — the surgery
                gets pushed. The patient waits another 4-6 weeks. The OR slot goes to someone else.
                The revenue disappears. And the surgical coordinator who was supposed to be tracking
                it all was also managing 30 other patients in the same fragmented status state.
              </p>
            </div>
            <div className={s.realityRight}>
              <ul className={s.painList}>
                <li className={s.painItem}>
                  <span className={s.painDot} />
                  <span className={s.painText}>
                    Spine procedures have some of the highest PA denial rates in surgery —
                    often because documentation packages are incomplete, not because the
                    case lacks clinical justification.
                  </span>
                </li>
                <li className={s.painItem}>
                  <span className={s.painDot} />
                  <span className={s.painText}>
                    Pre-op clearance involves 3-5 specialists who are not coordinating
                    directly with each other — surgical coordinator manages it manually
                    with phone calls and callback expectations.
                  </span>
                </li>
                <li className={s.painItem}>
                  <span className={s.painDot} />
                  <span className={s.painText}>
                    A PA that was approved but has a 90-day window expires before the
                    surgery date — no alert, just a denial at pre-certification that
                    pushes the case.
                  </span>
                </li>
                <li className={s.painItem}>
                  <span className={s.painDot} />
                  <span className={s.painText}>
                    Post-op patients need structured follow-up at specific intervals —
                    but those slots compete with new consults, and a missed 6-week
                    post-op can become an undetected hardware complication.
                  </span>
                </li>
                <li className={s.painItem}>
                  <span className={s.painDot} />
                  <span className={s.painText}>
                    Imaging ordered at consult doesn't always reach the surgeon before
                    surgery — the imaging was done, but nobody tracked receipt of results
                    and the provider finds out at the pre-op visit.
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
                A PA was submitted 6 weeks ago. Nobody tracked the 90-day approval window.
                The surgery date is set for week 10. Pre-certification fails. Case pushed 4-6 weeks.
              </div>
              <div className={`${s.changeLabel} ${s.changeLabelAfter}`}>After</div>
              <div className={s.changeAfter}>
                clinIQ tracks PA approval dates and flags expiration windows proactively.
                Resubmission happens at week 8 — before the window closes, not after the
                pre-certification call reveals the problem.
              </div>
            </div>
            <div className={s.changeCard}>
              <div className={`${s.changeLabel} ${s.changeLabelBefore}`}>Before</div>
              <div className={s.changeBefore}>
                Surgery is scheduled for Thursday. On Wednesday, the surgical coordinator
                discovers cardiology clearance was never completed because nobody followed up
                after the referral was sent.
              </div>
              <div className={`${s.changeLabel} ${s.changeLabelAfter}`}>After</div>
              <div className={s.changeAfter}>
                Every pre-op clearance step is tracked on the board: referred, scheduled,
                completed. Missing steps are flagged weeks before they become day-before
                surgery emergencies.
              </div>
            </div>
            <div className={s.changeCard}>
              <div className={`${s.changeLabel} ${s.changeLabelBefore}`}>Before</div>
              <div className={s.changeBefore}>
                An MRI ordered at consult was completed two weeks ago. The results are
                in radiology's system. The surgeon's pre-op planning session is today —
                and nobody retrieved the images yet.
              </div>
              <div className={`${s.changeLabel} ${s.changeLabelAfter}`}>After</div>
              <div className={s.changeAfter}>
                clinIQ tracks imaging orders through to result receipt. The board shows
                ordered → completed → results received. Missing results surface before
                the pre-op appointment, not during it.
              </div>
            </div>
            <div className={s.changeCard}>
              <div className={`${s.changeLabel} ${s.changeLabelBefore}`}>Before</div>
              <div className={s.changeBefore}>
                A patient's 6-week post-op visit gets bumped because a new consult
                needed the slot. The patient calls two weeks later with concerning symptoms
                that should have been caught at the follow-up.
              </div>
              <div className={`${s.changeLabel} ${s.changeLabelAfter}`}>After</div>
              <div className={s.changeAfter}>
                Post-op follow-up slots are protected and tracked separately. Patients
                approaching their follow-up window who haven't scheduled are flagged
                automatically — before the gap becomes a clinical event.
              </div>
            </div>
          </div>
        </section>

        {/* ── MODULES ── */}
        <section className={s.modules}>
          <h2>The clinIQ modules that protect the surgical episode from consult to recovery.</h2>
          <div className={`${s.modulesGrid} ${s.threeCol}`}>
            <div className={s.moduleCard}>
              <div className={s.moduleIcon}>⬛</div>
              <h3 className={s.moduleTitle}>Pre-Authorization</h3>
              <p className={s.moduleDesc}>
                Track every PA from submission to approval with expiration alerts built in.
                Documentation completeness checklists before submission. Denial-to-appeal
                workflows that don't lose track of the case while it's in review.
              </p>
              <a href="/features/pre-auth" className={s.moduleLink}>Learn more →</a>
            </div>
            <div className={s.moduleCard}>
              <div className={s.moduleIcon}>⬛</div>
              <h3 className={s.moduleTitle}>Patient Flow</h3>
              <p className={s.moduleDesc}>
                Live status tracking for every patient in the surgical pipeline: pre-op
                clearances, imaging orders, surgical scheduling, and post-op follow-up —
                all on one board your surgical coordinator can actually use.
              </p>
              <a href="/features/patient-flow" className={s.moduleLink}>Learn more →</a>
            </div>
            <div className={s.moduleCard}>
              <div className={s.moduleIcon}>⬛</div>
              <h3 className={s.moduleTitle}>Analytics</h3>
              <p className={s.moduleDesc}>
                PA denial rates by insurer and procedure code. Average days from consult
                to surgery. Post-op follow-up completion rates. The data that shows you
                where your pipeline is losing cases and revenue.
              </p>
              <a href="/features/analytics" className={s.moduleLink}>Learn more →</a>
            </div>
          </div>
        </section>

        {/* ── WORKFLOW ── */}
        <section className={s.workflow}>
          <h2>How a spine surgery episode moves through clinIQ.</h2>
          <div className={s.stageRow}>
            {[
              { label: 'Consult', color: '#0d9488' },
              { label: 'Conservative Tx', color: '#8b5cf6' },
              { label: 'PA Submission', color: '#f59e0b' },
              { label: 'Pre-Op Clearance', color: '#ef4444' },
              { label: 'Surgical Date', color: '#3b82f6' },
              { label: 'Post-Op', color: '#22c55e' },
              { label: 'Follow-Up Series', color: '#0d9488' },
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
            PA Submission and Pre-Op Clearance run with expiration tracking — both stages
            have time windows that can collapse the surgical date if not monitored actively.
          </p>
        </section>

        {/* ── STATS ── */}
        <section className={s.stats}>
          <div className={s.statsGrid}>
            <div className={s.stat}>
              <div className={s.statNumber}>3–6 mo</div>
              <div className={s.statLabel}>average time from spine consult to OR — most of it spent in administrative coordination, not clinical preparation</div>
            </div>
            <div className={s.stat}>
              <div className={s.statNumber}>Top 5</div>
              <div className={s.statLabel}>spine procedures consistently rank in the top 5 highest PA denial rates across all surgical specialties</div>
            </div>
            <div className={s.stat}>
              <div className={s.statNumber}>90 days</div>
              <div className={s.statLabel}>typical PA approval window — the expiration most commonly missed when surgical dates shift</div>
            </div>
            <div className={s.stat}>
              <div className={s.statNumber}>5 steps</div>
              <div className={s.statLabel}>average number of pre-op clearances required for a complex spine case — each one a separate coordination dependency</div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className={s.faq}>
          <h2>Spine surgery operations, answered.</h2>
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
              A surgery date pushed for a missed clearance is revenue that doesn't come back.
            </h2>
            <p className={s.ctaDesc}>
              clinIQ tracks every step of the spine surgery pipeline — from PA submission to
              post-op follow-up — so your surgical coordinator has a live view of every case,
              not a pile of phone calls to make.
            </p>
            <div className={s.ctaActions}>
              <a href="/demo" className={s.btnPrimary}>
                See clinIQ for spine surgery
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
            <a href="/specialties/general-surgery" className={s.relatedLink}>General Surgery</a>
            <a href="/specialties/orthopedic-surgery" className={s.relatedLink}>Orthopedic Surgery</a>
            <a href="/specialties/pain-management" className={s.relatedLink}>Pain Management</a>
            <a href="/specialties/chiropractic" className={s.relatedLink}>Chiropractic</a>
          </div>
        </section>
      </main>
      <FooterInner />
    </>
  )
}
