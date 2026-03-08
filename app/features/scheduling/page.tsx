import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import s from '@/app/specialties/specialty-full.module.css'

export const metadata: Metadata = {
  title: 'Clinic Scheduling Software — Multi-Provider, No-Show Reduction, Recall | clinIQ',
  description:
    'clinIQ Scheduling reduces no-shows, fills cancellations from a waitlist automatically, and tracks recall for chronic disease and follow-up care — without adding staff time.',
  openGraph: {
    title: 'Clinic Scheduling Software — Multi-Provider, No-Show Reduction | clinIQ',
    description:
      'Beyond booking: scheduling that reduces no-shows, fills cancellations from a waitlist, and tracks recall for chronic disease and follow-up care.',
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
      { '@type': 'ListItem', position: 3, name: 'Scheduling', item: 'https://cliniq.com/features/scheduling' },
    ],
  },
  faq: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How does clinIQ reduce no-show rates?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'clinIQ reduces no-shows through three mechanisms. First, in-room scheduling at discharge — booking the next appointment before the patient leaves captures commitment when intent is highest. Second, a structured multi-touchpoint reminder cadence at 72 hours, 24 hours, and day-of — each making it easy to confirm, reschedule, or cancel rather than just confirming. Third, automated waitlist backfill: when a patient cancels, the next waitlisted patient is notified with a direct booking link, converting a cancellation into a filled slot without any staff phone calls.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is recall scheduling and which specialties use it?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Recall scheduling automatically flags patients due for follow-up based on a defined interval from their last visit or a clinical trigger. Primary care uses it for annual wellness visits and chronic disease management. Pediatrics uses it for well-visit milestones and immunization schedules. Dermatology uses it for post-biopsy follow-up. Physical therapy tracks treatment plan completion. Any specialty where patients need to return on a defined schedule benefits from automated recall rather than relying on patients to remember to call.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does waitlist management work in clinIQ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'When a cancellation occurs, clinIQ identifies the highest-priority waitlisted patient matching the appointment type, provider preference, and availability window. That patient receives an automated notification with a self-scheduling link. If they don\'t respond within a configurable window, the next waitlisted patient is notified. The process fills cancellations without any staff time — offer, claim, and confirm without a phone call.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can clinIQ handle variable-length appointments across specialties?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. clinIQ supports variable appointment lengths by appointment type, provider, and day of week. New patient consultations can be 60 minutes while follow-ups are 20 minutes on the same provider\'s schedule. Behavioral health practices with 30-, 50-, and 90-minute session types configure each independently. ABA practices tracking simultaneous block sessions manage each session separately on the same board.',
        },
      },
    ],
  },
}

const marqueeItems = [
  'No-Show Reduction', 'Waitlist Backfill', 'Recall Management',
  'Multi-Provider Scheduling', 'Automated Reminders', 'In-Room Booking',
  'Variable Slot Lengths', 'Same-Day Capacity', 'Treatment Plan Tracking',
]

export default function SchedulingFeaturePage() {
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
            <span className={s.badge}>Scheduling</span>
            <h1 className={s.heroTitle}>
              A full schedule isn't luck.{' '}
              <em>It's a system that fills gaps before they cost you.</em>
            </h1>
            <p className={s.heroSubtitle}>
              No-shows cost the average outpatient practice $75,000-150,000 per year in lost revenue.
              Not because patients are unreliable — because most scheduling systems confirm appointments
              but don't manage them. clinIQ Scheduling reduces no-shows, fills cancellations automatically,
              and tracks the patients who need to come back before they fall through the cracks.
            </p>
            <div className={s.heroActions}>
              <a href="/demo" className={s.btnPrimary}>See Scheduling live<span className={s.btnIcon}>→</span></a>
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
              <h2>Your schedule has three problems a booking system wasn't designed to solve.</h2>
              <p className={s.realityNarrative}>
                The first is no-shows. New patients no-show at 20-30% in psychiatry and behavioral
                health. General rates of 10-20% are common across primary care and specialty
                practices. Most scheduling systems send a single confirmation. That's not a
                no-show reduction strategy — it's hoping the patient remembers. The second
                problem is cancellation recovery: when a patient cancels with 24 hours notice,
                that slot can still be filled — but only if someone is actively managing a
                waitlist in real time.
              </p>
              <p className={s.realityNarrative}>
                The third is recall. Chronic disease patients, post-op follow-ups, and treatment
                plan completions need to come back on a schedule — and they won't schedule
                themselves. Without a structured recall system, care gaps accumulate silently
                until they show up as preventable complications or emergency visits that could
                have been managed in a scheduled follow-up six months earlier.
              </p>
            </div>
            <div className={s.realityRight}>
              <ul className={s.painList}>
                <li className={s.painItem}><span className={s.painDot} /><span className={s.painText}>New patient no-show rates of 20-30% in psychiatry and behavioral health represent thousands of dollars in weekly lost revenue per provider.</span></li>
                <li className={s.painItem}><span className={s.painDot} /><span className={s.painText}>A single reminder at 24 hours doesn't change behavior — patients who can't make it need an easy rescheduling path, not just a confirmation.</span></li>
                <li className={s.painItem}><span className={s.painDot} /><span className={s.painText}>Manual waitlist fill requires 3-5 phone calls per slot — most practices don't have the staff bandwidth, so cancellations become lost revenue.</span></li>
                <li className={s.painItem}><span className={s.painDot} /><span className={s.painText}>Chronic disease patients due for follow-up fall off radar between visits — no recall system means care gaps that surface as preventable complications.</span></li>
                <li className={s.painItem}><span className={s.painDot} /><span className={s.painText}>Post-op follow-up competes with new patients for slots — without priority protection, surgical patients get pushed to windows that create clinical risk.</span></li>
              </ul>
            </div>
          </div>
        </section>

        <section className={s.changes}>
          <h2>Before and after clinIQ Scheduling.</h2>
          <div className={s.changesGrid}>
            <div className={s.changeCard}>
              <div className={`${s.changeLabel} ${s.changeLabelBefore}`}>Before</div>
              <div className={s.changeBefore}>A new psych patient books 3 weeks out during a crisis moment. By appointment day, the acute episode has passed. The 25% no-show plays out. The slot is empty.</div>
              <div className={`${s.changeLabel} ${s.changeLabelAfter}`}>After</div>
              <div className={s.changeAfter}>A 3-touchpoint sequence goes out at 1 week, 3 days, and 24 hours — each making rescheduling easy. The patient who can't make it reschedules instead of ghosting. The slot stays filled.</div>
            </div>
            <div className={s.changeCard}>
              <div className={`${s.changeLabel} ${s.changeLabelBefore}`}>Before</div>
              <div className={s.changeBefore}>A patient cancels Tuesday's 10am slot Monday at 4pm. Staff leaves voicemails for 3 waitlisted patients. Two don't call back. One calls back Wednesday. Slot was empty Tuesday.</div>
              <div className={`${s.changeLabel} ${s.changeLabelAfter}`}>After</div>
              <div className={s.changeAfter}>Monday 4pm: cancellation received. Automated notification goes to first waitlisted patient with a direct booking link. Slot is claimed by 5pm. No staff time. No empty Tuesday.</div>
            </div>
            <div className={s.changeCard}>
              <div className={`${s.changeLabel} ${s.changeLabelBefore}`}>Before</div>
              <div className={s.changeBefore}>A diabetic patient is due for their 3-month A1C check. Nobody flags it. They come in 7 months later for an unrelated visit. The provider discovers the gap. A1C is out of range.</div>
              <div className={`${s.changeLabel} ${s.changeLabelAfter}`}>After</div>
              <div className={s.changeAfter}>clinIQ flags the patient as due for A1C at the 3-month mark. Outreach goes out before the window lapses. They're seen at 3 months. The provider has current data, not a 7-month gap.</div>
            </div>
            <div className={s.changeCard}>
              <div className={`${s.changeLabel} ${s.changeLabelBefore}`}>Before</div>
              <div className={s.changeBefore}>A post-op patient's 6-week follow-up gets bumped for a new consult. Rebooks 3 weeks later. Shows up with a drain issue that should have been caught at 6 weeks.</div>
              <div className={`${s.changeLabel} ${s.changeLabelAfter}`}>After</div>
              <div className={s.changeAfter}>Post-op follow-up slots are protected by visit type priority. New consults book around the protected window — not instead of it. The 6-week check happens at 6 weeks.</div>
            </div>
          </div>
        </section>

        <section className={s.stats}>
          <div className={s.statsGrid}>
            <div className={s.stat}><div className={s.statNumber}>20–30%</div><div className={s.statLabel}>new patient no-show rate in psychiatry and behavioral health — highest of any specialty</div></div>
            <div className={s.stat}><div className={s.statNumber}>30–40%</div><div className={s.statLabel}>no-show rate reduction with structured reminder sequences plus automated waitlist backfill</div></div>
            <div className={s.stat}><div className={s.statNumber}>$75K+</div><div className={s.statLabel}>annual revenue loss from unmanaged no-shows in a practice running 20 patients/day per provider</div></div>
            <div className={s.stat}><div className={s.statNumber}>30–40%</div><div className={s.statLabel}>lower follow-up no-show rate when appointments are booked in-room vs. at the front desk on the way out</div></div>
          </div>
        </section>

        <section className={s.faq}>
          <h2>Scheduling, answered.</h2>
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
            <h2 className={s.ctaTitle}>Every no-show is revenue you already earned and lost. Let's stop losing it.</h2>
            <p className={s.ctaDesc}>clinIQ Scheduling reduces no-shows, fills cancellations automatically, and tracks the patients who need to come back — without adding staff time to any of it.</p>
            <div className={s.ctaActions}><a href="/demo" className={s.btnPrimary}>See Scheduling live<span className={s.btnIcon}>→</span></a></div>
            <p className={s.ctaNote}>No commitment. Setup in one day.</p>
          </div>
        </section>

        <section className={s.related}>
          <h3>Related features</h3>
          <div className={s.relatedLinks}>
            <a href="/features/patient-flow" className={s.relatedLink}>Patient Flow</a>
            <a href="/features/check-in" className={s.relatedLink}>Check-In</a>
            <a href="/features/analytics" className={s.relatedLink}>Analytics</a>
            <a href="/features/pre-auth" className={s.relatedLink}>Pre-Authorization</a>
          </div>
        </section>
      </main>
      <FooterInner />
    </>
  )
}
