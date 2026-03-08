import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import BlogIndex from '@/components/BlogIndex'
import type { BlogPost } from '@/components/BlogIndex'
import styles from './blog.module.css'

export const metadata: Metadata = {
  title: 'Blog — clinIQ Operational Insights',
  description:
    'Operational insights for clinics that refuse to accept chaos. LWBS, RTM billing, front desk burnout, patient flow — written for practice operators.',
}

const posts: BlogPost[] = [
  // ── Operational Pain ─────────────────────────────────────────────────────
  {
    slug: 'reduce-lwbs-urgent-care',
    category: 'Urgent Care',
    title: '5 Operational Fixes That Cut Left-Without-Being-Seen Rates',
    date: 'March 2026',
    readTime: '6 min',
    excerpt:
      'Every patient who walks out before being seen costs $150–300 in lost revenue — plus the Google review. Here are five fixes that work.',
  },
  {
    slug: 'front-desk-burnout',
    category: 'Operations',
    title: "Why Your Front Desk Staff Keep Quitting (And What to Do About It)",
    date: 'March 2026',
    readTime: '7 min',
    excerpt:
      "You hire, train, and lose them in six months. The pattern is predictable — and so are the causes. Visibility and automation fix most of it.",
  },
  {
    slug: 'patient-flow-bottlenecks',
    category: 'Operations',
    title: "Where Patient Flow Breaks Down (And How to See It Coming)",
    date: 'March 2026',
    readTime: '5 min',
    excerpt:
      "A full lobby is a lagging indicator. The bottleneck that caused it happened 30 minutes ago. Here's how to catch it before it propagates.",
  },
  {
    slug: 'psychiatry-no-shows',
    category: 'Psychiatry',
    title: "Why 25% of Your New Psych Patients No-Show (And How to Cut It in Half)",
    date: 'March 2026',
    readTime: '6 min',
    excerpt:
      "New patient no-shows in psychiatry run 20–30% — double established rates. The reasons are specific and the fixes are systematic.",
  },
  {
    slug: 'who-is-next-problem',
    category: 'Operations',
    title: "The 'Who's Next?' Problem Is Costing You Money",
    date: 'March 2026',
    readTime: '5 min',
    excerpt:
      "Staff huddles to figure out the queue happen every 10–15 minutes. Each one costs 3–5 minutes of focus. Here's what that adds up to — and how to fix it.",
  },
  {
    slug: 'waiting-room-complaints',
    category: 'Patient Experience',
    title: "Why Patients Hate Waiting (And It's Not the Time)",
    date: 'March 2026',
    readTime: '6 min',
    excerpt:
      "Uncertainty is worse than the wait itself. Patients who don't know how long they'll wait leave earlier and complain louder. The fix is simpler than you think.",
  },
  {
    slug: 'whiteboard-patient-tracking',
    category: 'Compliance',
    title: 'Your Whiteboard Patient Tracker Is a Liability',
    date: 'March 2026',
    readTime: '5 min',
    excerpt:
      "Patient names on a whiteboard visible to other patients is a HIPAA exposure. Stale data is an operational failure. Here's what digital patient tracking looks like.",
  },
  {
    slug: 'procedure-day-chaos',
    category: 'Operations',
    title: "Procedure Days Don't Have to Be Chaos Days",
    date: 'March 2026',
    readTime: '6 min',
    excerpt:
      "High-volume procedure days create flow challenges that standard scheduling wasn't built for. Real-time room visibility changes how procedure days run.",
  },
  {
    slug: 'multi-department-clinic-flow',
    category: 'Operations',
    title: 'Running a Multi-Department Clinic Without Losing Patients',
    date: 'March 2026',
    readTime: '7 min',
    excerpt:
      "Multi-department clinics lose patients at every handoff. Lab, imaging, infusion — each transition is a visibility gap. Here's how to build a unified queue.",
  },
  {
    slug: 'check-in-bottleneck',
    category: 'Operations',
    title: 'Check-In Is Your First Bottleneck. Fix It First.',
    date: 'March 2026',
    readTime: '5 min',
    excerpt:
      "The patient experience starts at the door — not when they sit down. An 8-minute check-in process adds 8 minutes of perceived wait. Digital check-in compresses it to 90 seconds.",
  },
  {
    slug: 'staff-shortage-workflow',
    category: 'Operations',
    title: "You Can't Hire Your Way Out of Bad Workflow",
    date: 'March 2026',
    readTime: '6 min',
    excerpt:
      "The hiring crisis isn't solvable by hiring faster. The practices that survive staff shortages eliminate workflow waste. Here's what that looks like in practice.",
  },
  // ── RTM & Billing ─────────────────────────────────────────────────────────
  {
    slug: 'rtm-revenue-guide',
    category: 'Billing',
    title: "RTM Billing: The Revenue You're Leaving on the Table",
    date: 'March 2026',
    readTime: '8 min',
    excerpt:
      "$120–150 per patient per month. CPT 98975–98981. Most practices are eligible. Almost none are billing correctly. Here's what you need to know.",
  },
  {
    slug: 'rtm-vs-rpm-difference',
    category: 'Billing',
    title: 'RTM vs RPM: Which One Applies to Your Practice?',
    date: 'March 2026',
    readTime: '7 min',
    excerpt:
      "RTM monitors therapy adherence. RPM monitors physiologic data. Different CPT codes, different eligibility criteria, different specialties. Here's how to tell which one you qualify for.",
  },
  {
    slug: 'cpt-98977-musculoskeletal',
    category: 'Billing',
    title: 'CPT 98977: Musculoskeletal RTM Billing Explained',
    date: 'March 2026',
    readTime: '8 min',
    excerpt:
      "CPT 98977 covers the device supply for musculoskeletal RTM. Eligible conditions, documentation requirements, how to pair it with 98975 and 98981, and what payers cover in 2026.",
  },
  {
    slug: 'rtm-physical-therapy',
    category: 'Physical Therapy',
    title: 'RTM for Physical Therapy: Billing for Home Exercises',
    date: 'March 2026',
    readTime: '7 min',
    excerpt:
      "PT practices are the primary RTM opportunity. Home exercise program monitoring qualifies. Here's the setup, the 20-minute interaction requirement, and the revenue math.",
  },
  {
    slug: 'rtm-behavioral-health',
    category: 'Behavioral Health',
    title: 'RTM for Behavioral Health: What You Need to Know',
    date: 'March 2026',
    readTime: '6 min',
    excerpt:
      "CPT 98978 covers behavioral health RTM — mood tracking, medication adherence, therapy homework. Who can bill it, what gets monitored, and what payers cover it.",
  },
  {
    slug: 'rtm-pain-management',
    category: 'Pain Management',
    title: 'RTM for Pain Management: Beyond the Office Visit',
    date: 'March 2026',
    readTime: '7 min',
    excerpt:
      "Pain management practices have strong RTM eligibility. Monitor pain levels, medication adherence, and functional status between visits. The revenue math makes the case.",
  },
  {
    slug: 'rtm-implementation-mistakes',
    category: 'Billing',
    title: '5 RTM Implementation Mistakes That Kill Revenue',
    date: 'March 2026',
    readTime: '6 min',
    excerpt:
      "No patient consent, missing the 16-day threshold, unbilled 98981, low enrollment, undocumented interactions. Five specific mistakes — and the fix for each.",
  },
  {
    slug: 'rtm-patient-enrollment',
    category: 'Billing',
    title: 'Getting Patients to Enroll in RTM: What Actually Works',
    date: 'March 2026',
    readTime: '6 min',
    excerpt:
      "Most RTM programs fail at enrollment, not billing. The conversation, the timing, the technology — here's what actually moves patients from eligible to enrolled.",
  },
  {
    slug: 'rtm-documentation-requirements',
    category: 'Billing',
    title: 'RTM Documentation: What Payers Actually Need',
    date: 'March 2026',
    readTime: '7 min',
    excerpt:
      "RTM denials are mostly documentation failures. Code-by-code requirements, the 20-minute interaction note, audit red flags, and how to avoid them.",
  },
  {
    slug: 'rtm-roi-calculator',
    category: 'Billing',
    title: 'Calculate Your RTM Revenue: A Simple Framework',
    date: 'March 2026',
    readTime: '5 min',
    excerpt:
      "Eligible patients × enrollment rate × monthly reimbursement. The formula is simple. Running it against your panel changes the conversation about whether RTM is worth it.",
  },
]

export default function BlogPage() {
  return (
    <>
      <NavInner />
      <main>
        <section className={styles.hero}>
          <div className={styles.heroBg}>
            <div className={styles.heroOrb} />
            <div className={styles.heroGrain} />
          </div>
          <div className="container">
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>Blog</h1>
              <p className={styles.heroSubtitle}>
                Operational insights for clinics that refuse to accept chaos.
              </p>
            </div>
          </div>
        </section>
        <BlogIndex posts={posts} />
      </main>
      <FooterInner />
    </>
  )
}
