import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import s from '@/app/specialties/specialty-full.module.css'

export const metadata: Metadata = {
  title: 'Real-Time Patient Flow Software — Live Queue & Room Visibility | clinIQ',
  description:
    'clinIQ Patient Flow gives your clinic a live board showing every patient\'s exact stage — waiting, intake, with provider, pending discharge. No more "who\'s next?" huddles. No more radio silence.',
  keywords: [
    'patient flow software',
    'real-time patient tracking',
    'clinic queue management',
    'medical practice patient flow',
    'live patient board',
    'clinic operations software',
    'patient queue visibility',
    'provider patient tracking',
  ],
  openGraph: {
    title: 'Real-Time Patient Flow Software — Live Queue & Room Visibility | clinIQ',
    description:
      'One board. Every patient\'s exact stage. Bottleneck alerts before the lobby backs up. From check-in to discharge — zero radio silence.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://cliniq.io/features/patient-flow',
  },
}

const schemaData = {
  breadcrumb: {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cliniq.io' },
      { '@type': 'ListItem', position: 2, name: 'Features', item: 'https://cliniq.io/features' },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Patient Flow',
        item: 'https://cliniq.io/features/patient-flow',
      },
    ],
  },
  faq: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How is real-time patient flow different from a whiteboard or EHR tracker?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A whiteboard shows where patients were when someone last updated it. An EHR tracker shows appointment status, not real-time location or care stage. clinIQ Patient Flow shows where every patient is RIGHT NOW — which stage of care they\'re in, how long they\'ve been there, and when a stage has been running longer than expected. It\'s the difference between a lagging indicator and a live command center.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do staff need to actively update the board, or does it update automatically?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Staff trigger stage transitions with a single tap — moving a patient from "waiting" to "in room" to "with provider" to "pending discharge." This is intentional: automatic status updates from EHR events often lag or misfire. clinIQ\'s board reflects staff-confirmed reality, not inferred state. The tap takes under 2 seconds and eliminates the need for any verbal check-in or hallway walkthrough.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does Patient Flow handle multi-provider and multi-room clinics?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'clinIQ Patient Flow is built for multi-provider, multi-room operations. The board is configurable per location, showing rooms by provider or by patient stage. Each provider sees their own queue while admins see the full clinic picture. In a 4-provider clinic seeing 60 patients per day, the board gives every staff member — from front desk to MA to physician — a shared, accurate view of where everything stands.',
        },
      },
      {
        '@type': 'Question',
        name: 'What triggers a bottleneck alert?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You set the thresholds. A bottleneck alert fires when a patient has been in any single stage longer than the configured limit — e.g., "waiting for provider for more than 20 minutes" or "in intake for more than 15 minutes." Alerts appear on the flow board and can be sent to configured staff. This surfaces problems before the lobby overflows, not after patients start leaving.',
        },
      },
    ],
  },
}

const marqueeItems = [
  'Real-Time Queue Board',
  'Provider View',
  'Room Status',
  'Bottleneck Alerts',
  'Multi-Provider',
  'Stage Tracking',
  'Discharge Pipeline',
  'Live Wait Estimates',
  'No "Who\'s Next?" Huddles',
]

export default function PatientFlowFeaturePage() {
  return (
    <>
      <NavInner />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData.breadcrumb) }}
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
            <span className={s.badge}>Patient Flow</span>
            <h1 className={s.heroTitle}>
              Every patient. Every stage. Every room.{' '}
              <em>In real time.</em>
            </h1>
            <p className={s.heroSubtitle}>
              Your clinic runs on six different people&rsquo;s mental models of what&rsquo;s
              happening — none of which agree after 10am. clinIQ Patient Flow replaces all of
              them with one live board that every staff member, provider, and admin reads from
              the same source of truth.
            </p>
            <div className={s.heroActions}>
              <a href="/demo" className={s.btnPrimary}>
                See Patient Flow live
                <span className={s.btnIcon}>→</span>
              </a>
              <a href="/features" className={s.btnGhost}>All features</a>
            </div>
          </div>
        </section>

        {/* ── MARQUEE ── */}
        <div className={s.marquee}>
          <div className={s.marqueeTrack}>
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} className={s.marqueeContent}>
                {item}
                {i < marqueeItems.length * 2 - 1 && (
                  <span className={s.marqueeDot}>·</span>
                )}
              </span>
            ))}
          </div>
        </div>

        {/* ── THE REALITY ── */}
        <section className={s.reality}>
          <div className={s.realityGrid}>
            <div className={s.realityLeft}>
              <h2>
                You&rsquo;re managing a $2M operation on six different people&rsquo;s guesses
                about what&rsquo;s happening.
              </h2>
              <p className={s.realityNarrative}>
                At 11:15am on a Tuesday, your front desk thinks Room 3 is in use. Your MA
                thinks Room 3 is being cleaned. Your provider thinks Room 3 is ready. One of
                them is right. Nobody has a way to know which. The only way to resolve it is
                a hallway walkthrough — which the provider does themselves, interrupting the
                MA, who was about to room the next patient. The next patient waits 8 more
                minutes for a room that was actually empty.
              </p>
              <p className={s.realityNarrative}>
                This happens dozens of times per day in every clinic that doesn&rsquo;t have
                a live flow board. The aggregate cost — in provider time, in wait times, in
                staff interruptions, in patient frustration — is enormous. And it&rsquo;s
                entirely preventable. The information already exists. It just isn&rsquo;t
                visible to the people who need it.
              </p>
            </div>
            <div className={s.realityRight}>
              <ul className={s.painList}>
                {[
                  '"Who\'s next?" called out by providers every 8 minutes. Front desk interrupted constantly. Nobody has a live view of the board.',
                  'Whiteboards show where patients were when someone last updated them — which was 45 minutes ago in a 60-patient day.',
                  'Providers walk from room to room to assess their own queue. Every hallway walkthrough is 3-5 minutes of clinical time that doesn\'t produce a bill.',
                  'MAs don\'t know when a patient is ready to be roomed until they physically check the waiting room — which delays the next patient and the one after.',
                  'Discharge is invisible. A patient ready to leave sits waiting while a clean room sits empty and the next patient sits in the lobby.',
                  'Bottlenecks are discovered after they become problems — when a provider has been waiting 25 minutes and the lobby is full.',
                ].map((point, i) => (
                  <li key={i} className={s.painItem}>
                    <span className={s.painDot} aria-hidden="true" />
                    <span className={s.painText}>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── BEFORE / AFTER ── */}
        <section className={s.changes}>
          <h2>Before and after clinIQ Patient Flow.</h2>
          <div className={s.changesGrid}>
            <div className={s.changeCard}>
              <div className={`${s.changeLabel} ${s.changeLabelBefore}`}>Before</div>
              <div className={s.changeBefore}>
                A provider finishes with a patient at 2:17pm. They walk to the front desk
                to ask who&rsquo;s next. Front desk checks the paper schedule. The next
                patient checked in 22 minutes ago but nobody told the MA. The provider
                waits in the hallway.
              </div>
              <div className={`${s.changeLabel} ${s.changeLabelAfter}`}>After</div>
              <div className={s.changeAfter}>
                The provider marks the patient discharged with one tap. The flow board
                updates. The MA sees the room is available and rooms the next patient —
                who has been staged and ready. The provider walks into a room where the
                patient is already there.
              </div>
            </div>
            <div className={s.changeCard}>
              <div className={`${s.changeLabel} ${s.changeLabelBefore}`}>Before</div>
              <div className={s.changeBefore}>
                The lobby has 9 people. Three are waiting for rooms that are technically
                empty but nobody confirmed them clean. The front desk thinks all rooms
                are occupied. Nobody knows. Patients start leaving.
              </div>
              <div className={`${s.changeLabel} ${s.changeLabelAfter}`}>After</div>
              <div className={s.changeAfter}>
                Room status is live on the flow board. Clean rooms show as available
                the moment a room is marked clean. Front desk and MAs see capacity in
                real time. No phantom backlog. No preventable walkouts.
              </div>
            </div>
            <div className={s.changeCard}>
              <div className={`${s.changeLabel} ${s.changeLabelBefore}`}>Before</div>
              <div className={s.changeBefore}>
                A patient has been in the waiting room for 35 minutes. Nobody noticed
                because the front desk was processing arrivals and the MA was in the
                back. The bottleneck is discovered when the patient flags someone down.
              </div>
              <div className={`${s.changeLabel} ${s.changeLabelAfter}`}>After</div>
              <div className={s.changeAfter}>
                A bottleneck alert fires at 20 minutes — the threshold you configured.
                A staff member addresses it before the patient becomes frustrated,
                before the lobby backs up, and before you lose the visit to an angry
                Google review.
              </div>
            </div>
            <div className={s.changeCard}>
              <div className={`${s.changeLabel} ${s.changeLabelBefore}`}>Before</div>
              <div className={s.changeBefore}>
                Your 3pm provider huddle exists to align everyone on what&rsquo;s
                happening in the clinic. It takes 8-12 minutes and happens twice a day.
                By the time it&rsquo;s over, half the information is already outdated.
              </div>
              <div className={`${s.changeLabel} ${s.changeLabelAfter}`}>After</div>
              <div className={s.changeAfter}>
                The huddle doesn&rsquo;t happen. Everyone already knows what&rsquo;s
                happening because they can see it. The 8-12 minutes get returned to
                clinical work, every shift, every day.
              </div>
            </div>
          </div>
        </section>

        {/* ── STATS ── */}
        <section className={s.stats}>
          <div className={s.statsGrid}>
            {[
              {
                number: '8–12 min',
                label: 'per provider per day lost to "who\'s next?" huddles and hallway walkthroughs — eliminated',
              },
              {
                number: '25%',
                label: 'average reduction in patient wait times in clinics using real-time flow visibility',
              },
              {
                number: '1 board',
                label:
                  'replaces 6 different staff mental models of the current clinic state — and doesn\'t diverge by 10am',
              },
              {
                number: 'Instant',
                label:
                  'stage transition update when a staff member taps to move a patient — visible to every authorized device simultaneously',
              },
            ].map(({ number, label }) => (
              <div key={number} className={s.stat}>
                <div className={s.statNumber}>{number}</div>
                <div className={s.statLabel}>{label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className={s.faq}>
          <h2>Patient Flow, answered.</h2>
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
            <div className={s.ctaOrb} aria-hidden="true" />
          </div>
          <div className={s.ctaContent}>
            <h2 className={s.ctaTitle}>
              Stop running your clinic on six different guesses.
              <br />
              Run it on one live board.
            </h2>
            <p className={s.ctaDesc}>
              See clinIQ Patient Flow configured for your clinic layout, provider count,
              and specialty. We&rsquo;ll show you exactly how the board works — and what
              changes on day one.
            </p>
            <div className={s.ctaActions}>
              <a href="/demo" className={s.btnPrimary}>
                See Patient Flow live
                <span className={s.btnIcon}>→</span>
              </a>
            </div>
            <p className={s.ctaNote}>No commitment. Setup in under a week.</p>
          </div>
        </section>

        {/* ── RELATED ── */}
        <section className={s.related}>
          <h3>Related features and pages</h3>
          <div className={s.relatedLinks}>
            <a href="/features/check-in" className={s.relatedLink}>Check-In</a>
            <a href="/features/analytics" className={s.relatedLink}>Analytics</a>
            <a href="/features/scheduling" className={s.relatedLink}>Scheduling</a>
            <a href="/specialties/urgent-care" className={s.relatedLink}>Urgent Care</a>
            <a href="/compare/phreesia" className={s.relatedLink}>clinIQ vs Phreesia</a>
            <a href="/compare/whiteboards" className={s.relatedLink}>clinIQ vs Whiteboards</a>
          </div>
        </section>
      </main>
      <FooterInner />
    </>
  )
}
