import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import BlogHero from '@/components/BlogHero'
import BlogContent from '@/components/BlogContent'
import BlogCTA from '@/components/BlogCTA'

export const metadata: Metadata = {
  title: 'RTM Billing Guide 2026: CPT 98975–98981 — clinIQ Blog',
  description:
    'Remote Therapeutic Monitoring billing guidelines for 2026. CPT 98975, 98976, 98977, 98980, 98981 — who qualifies, what to document, and how to calculate your revenue opportunity.',
  keywords: [
    'RTM billing guidelines 2026',
    'CPT 98977 musculoskeletal',
    'RTM vs RPM billing differences',
    'remote therapeutic monitoring reimbursement',
  ],
}

export default function RTMRevenuePage() {
  return (
    <>
      <NavInner />
      <main>
        <BlogHero
          category="Billing"
          title="RTM Billing: The Revenue You're Leaving on the Table"
          date="March 2026"
          readTime="8 min"
        />
        <BlogContent>
          <p>
            <strong>$120–150 per eligible patient per month.</strong> CPT codes finalized in 2022. Reimbursement available across commercial payers and Medicare. Most practices that qualify are not billing correctly — or not billing at all.
          </p>
          <p>
            Remote Therapeutic Monitoring (RTM) is one of the most underutilized revenue opportunities in outpatient medicine. Here&rsquo;s what you need to know.
          </p>

          <h2>What Is RTM — And How Is It Different From RPM?</h2>
          <p>
            RTM stands for Remote Therapeutic Monitoring. It covers monitoring of therapeutic adherence and outcomes for musculoskeletal, respiratory, and cognitive behavioral conditions.
          </p>
          <p>
            It is <strong>not</strong> the same as Remote Patient Monitoring (RPM), which requires physiological measurement devices — blood pressure cuffs, glucometers, pulse oximeters. RPM (CPT 99453–99458) is device-dependent. RTM is not. RTM can be delivered through patient-reported outcomes, software-based tracking, and clinical staff engagement — no hardware required.
          </p>
          <p>
            This distinction matters because many practices assumed RTM required device investment and dismissed it. It doesn&rsquo;t. If you&rsquo;re already checking in on patients between visits, tracking adherence to therapy programs, or documenting patient-reported outcomes, you may already be doing the clinical work without the billing.
          </p>

          <h2>The RTM CPT Codes</h2>
          <ul>
            <li><strong>CPT 98975</strong> — Remote therapeutic monitoring setup and patient education. Billed once per episode of care. This covers onboarding the patient to the monitoring program.</li>
            <li><strong>CPT 98976</strong> — Device supply with scheduled (e.g., daily) recording for respiratory system. Monthly supply code.</li>
            <li><strong>CPT 98977</strong> — Device supply with scheduled recording for musculoskeletal system. Monthly supply code. This is the most commonly applicable code for PT, ortho, and pain management practices.</li>
            <li><strong>CPT 98980</strong> — Treatment management services, first 20 minutes of clinical staff time per calendar month. This is the primary ongoing billing code — requires 20 minutes documented per month per patient.</li>
            <li><strong>CPT 98981</strong> — Treatment management services, each additional 20 minutes per calendar month. Can be billed in addition to 98980 when time is documented.</li>
          </ul>
          <p>
            98980 and 98981 require a physician or NPP to review and participate in management — but the 20 minutes can be accumulated by clinical staff (including MAs and nurses) under general supervision.
          </p>

          <h2>Who Qualifies</h2>
          <p>
            RTM is applicable across a wide range of outpatient specialties. Eligible patient populations include:
          </p>
          <ul>
            <li>Musculoskeletal patients — physical therapy, orthopedics, pain management, sports medicine</li>
            <li>Respiratory patients — pulmonology, primary care managing COPD or asthma, sleep medicine</li>
            <li>Cognitive behavioral therapy patients — psychiatry, psychology, behavioral health</li>
            <li>Addiction medicine patients on medication-assisted treatment (MAT) — adherence monitoring qualifies</li>
            <li>Post-surgical patients requiring therapeutic monitoring during recovery</li>
          </ul>
          <p>
            The threshold for eligibility is lower than most practices assume. If you have a clinical reason to monitor therapeutic adherence between visits, and you&rsquo;re documenting that monitoring, you likely qualify.
          </p>

          <h2>The Math</h2>
          <p>
            Reimbursement rates vary by payer and geography, but typical combined monthly revenue per enrolled patient (98977 + 98980) runs $120–150 under Medicare and comparable commercial rates.
          </p>
          <ul>
            <li><strong>25 enrolled patients:</strong> $3,000–3,750/month</li>
            <li><strong>50 enrolled patients:</strong> $6,000–7,500/month</li>
            <li><strong>100 enrolled patients:</strong> $12,000–15,000/month</li>
            <li><strong>200 enrolled patients:</strong> $24,000–30,000/month</li>
          </ul>
          <p>
            This is revenue on top of existing visit-based billing. You&rsquo;re not replacing a revenue stream — you&rsquo;re adding one for care you&rsquo;re already delivering.
          </p>

          <h2>Common Billing Questions</h2>
          <p>
            <strong>Can I bill 98980 and 98981 in the same month?</strong> Yes — if you document time for both thresholds. First 20 minutes = 98980. Each additional 20 minutes = 98981. Document timestamps.
          </p>
          <p>
            <strong>Can non-physicians bill RTM?</strong> Yes. Nurse practitioners and physician assistants can bill under their own NPI with general physician supervision. Clinical staff time counts toward the 20-minute threshold.
          </p>
          <p>
            <strong>Does the patient need a physical device?</strong> Not necessarily. RTM covers software-based monitoring and patient-reported outcomes. A patient completing a digital pain scale or adherence questionnaire can qualify.
          </p>
          <p>
            <strong>Is RTM compatible with telehealth billing?</strong> Yes. RTM and telehealth are separate billing events and can coexist in the same month.
          </p>

          <h2>Implementation Steps</h2>
          <p>
            Getting RTM billing operational is a process, not a weekend project. Here&rsquo;s the sequence that works:
          </p>
          <ol>
            <li>Identify eligible patients in your current panel — start with musculoskeletal and respiratory if you have them.</li>
            <li>Enroll patients with documented consent and bill 98975 for setup. One per episode.</li>
            <li>Establish a monthly monitoring workflow — who touches the patient record, what they document, how time is recorded.</li>
            <li>Bill 98977 (or 98976) monthly for the supply component.</li>
            <li>Bill 98980 when 20 minutes of clinical staff time is documented. Add 98981 if you reach the second 20 minutes.</li>
            <li>Audit quarterly — review documentation, confirm billing accuracy, check denial rates by payer.</li>
          </ol>
          <p>
            The biggest implementation risk is inconsistent documentation. Time logs must be specific — start time, end time, type of activity. &ldquo;20 minutes of RTM&rdquo; without timestamps doesn&rsquo;t hold up to audit.
          </p>
        </BlogContent>
        <BlogCTA
          ctaLabel="Calculate your RTM opportunity"
          description="clinIQ includes built-in RTM tracking with CPT 98975–98981 documentation. We&apos;ll show you what your panel is worth."
        />
      </main>
      <FooterInner />
    </>
  )
}
