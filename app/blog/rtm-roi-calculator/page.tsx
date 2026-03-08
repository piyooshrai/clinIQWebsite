import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import BlogHero from '@/components/BlogHero'
import BlogContent from '@/components/BlogContent'
import BlogCTA from '@/components/BlogCTA'

export const metadata: Metadata = {
  title: 'Calculate Your RTM Revenue: A Simple Framework',
  description:
    'A step-by-step framework for calculating RTM revenue potential for your practice. Eligible patients, enrollment rate, monthly reimbursement, and annual revenue with real numbers.',
  keywords: ['RTM revenue calculator', 'RTM ROI practice', 'remote therapeutic monitoring revenue per patient'],
}

export default function RtmRoiCalculatorPage() {
  return (
    <>
      <NavInner />
      <main>
        <BlogHero
          category="Billing"
          title="Calculate Your RTM Revenue: A Simple Framework"
          date="March 2026"
          readTime="5 min"
        />
        <BlogContent>
          <p><strong>Most practices that evaluate RTM underestimate their revenue potential because they start with the wrong number.</strong> They look at the per-code reimbursement rate &mdash; $50 for a device supply code, $70 for a treatment management code &mdash; and conclude the return is modest. The calculation that actually captures the RTM opportunity is multiplicative, not additive, and it looks entirely different when you run it correctly. Here is the framework, with real numbers, that practice administrators can apply to their own patient panels in about 15 minutes.</p>

          <h2>Step 1: Identify Your Eligible Patient Panel</h2>
          <p>RTM eligibility depends on diagnosis category and active treatment status. For musculoskeletal RTM under CPT 98977, the eligible population is patients with active musculoskeletal diagnoses under treatment &mdash; this includes post-surgical rehabilitation patients, chronic pain patients, and patients in active physical or occupational therapy programs. For behavioral health RTM under CPT 98978, the eligible population is patients in active behavioral health treatment with a qualifying diagnosis. For respiratory RTM under CPT 98976, patients with monitored respiratory conditions qualify.</p>
          <p>In most outpatient practices, the RTM-eligible fraction of the active patient panel falls between 40% and 70%. A physical therapy practice is close to 100% eligible, since virtually every PT patient has a qualifying musculoskeletal condition. A pain management practice typically sees 60% to 80% of its active panel as eligible. A behavioral health practice may see 50% to 70% eligibility depending on diagnosis mix and treatment intensity.</p>
          <p>For this calculation, use your active patient panel &mdash; patients seen at least once in the past 90 days &mdash; as your starting number. If you have 300 active patients and estimate 60% eligibility, your eligible panel is 180 patients. Write that number down. It is the ceiling from which every other calculation flows.</p>

          <h2>Step 2: Estimate Your Enrollment Rate</h2>
          <p>Not every eligible patient will enroll in RTM. The enrollment rate depends on how the program is presented, the simplicity of the technology, and how consistently the enrollment conversation happens across providers and staff. For a practice launching RTM for the first time, a realistic first-six-month enrollment target is 35% to 50% of the eligible panel. Practices with strong patient communication infrastructure and simple app-based monitoring can achieve 50% to 60%. Practices with technology friction or inconsistent provider engagement typically land at 20% to 30%.</p>
          <p>Use 45% as your baseline estimate if you have no prior data. Applying 45% to an eligible panel of 180 patients gives you 81 enrolled patients. This is the number that generates monthly billing. Every percentage point of enrollment improvement is worth approximately two additional patients in the panel at this scale &mdash; about $280 in additional monthly revenue per point of enrollment improvement, or $3,360 annually.</p>

          <h2>Step 3: Calculate Monthly Reimbursement Per Patient</h2>
          <p>Monthly RTM reimbursement per enrolled patient comes from two primary codes billed each month: the device supply code (98977 for musculoskeletal, 98978 for behavioral health) and the treatment management code (98980). A third code, 98981, applies in months where more than 20 minutes of treatment management is documented for that patient.</p>
          <p>Under Medicare in 2026, 98977 reimburses approximately $48 per month and 98980 reimburses approximately $62 per month. The combination of these two codes generates roughly $110 per enrolled patient per month as a baseline. In months where 98981 is also billed, the per-patient total rises to approximately $160. Averaging across months with and without the additional increment, a realistic per-patient monthly average is $130 to $145 under Medicare.</p>
          <p>Commercial payer reimbursement varies significantly. Major commercial payers that cover RTM generally reimburse at rates comparable to or slightly higher than Medicare. Some payers require prior authorization, which adds administrative overhead. A blended rate of $140 per patient per month is a conservative estimate for a practice with a mixed Medicare and commercial payer mix where RTM coverage is confirmed for the majority of enrolled patients.</p>

          <h2>Step 4: Run the Full Calculation</h2>
          <p>With the three inputs established, the monthly RTM revenue calculation is straightforward. Using the numbers from the example above: 300 active patients, 60% eligible, 45% enrollment rate, $140 per patient per month. That is 300 multiplied by 0.60 to get 180 eligible patients, multiplied by 0.45 to get 81 enrolled patients, multiplied by $140 to get $11,340 per month in RTM revenue. At that run rate, annual RTM revenue is $136,080.</p>
          <p>The startup cost for an RTM program is minimal relative to this revenue. A software subscription for an RTM platform typically runs $500 to $1,500 per month depending on the vendor and the size of the enrolled panel. There is no capital equipment investment required for app-based RTM. The payback period is typically within the first month of billing, because the monthly revenue from even a small enrolled panel exceeds the monthly platform cost.</p>

          <h2>What Staffing Is Required</h2>
          <p>The most common staffing question from practices evaluating RTM is how much clinical staff time the program actually requires. For a panel of 81 enrolled patients, the monthly treatment management time requirement is approximately 81 patients multiplied by an average of 25 minutes per patient (allowing for some months with additional management time), which equals roughly 34 hours of staff time per month. At a fully-loaded clinical staff cost of $30 per hour, that is $1,020 in labor cost against $11,340 in monthly revenue.</p>
          <p>In practice, many practices assign RTM monitoring to a part-time RTM coordinator &mdash; a role that combines patient engagement, data review, and billing workflow management. At 80 enrolled patients, this role typically requires 15 to 20 hours per week. Some practices assign this work to an existing medical assistant or clinical coordinator as a defined portion of their weekly responsibilities rather than creating a new position.</p>

          <h2>Revenue Leak Points and How to Avoid Them</h2>
          <p>Several common revenue leak points reduce RTM revenue below the theoretical maximum. The first is the 16-day compliance gap: patients who fall below the 16-day data threshold in a given month cannot be billed for that month&rsquo;s device supply code. Practices that do not actively monitor daily compliance and re-engage patients who are falling behind lose 10% to 20% of device supply revenue to this leak. Active engagement with patients who fall behind on data logging reduces the leak to below 5%.</p>
          <p>The second leak point is missed codes. Failing to bill 98975 in the enrollment month, consistently missing 98981 in months where additional management time is documented, or billing only one code in the series instead of all eligible codes reduces per-patient revenue significantly. A billing checklist run at the end of each billing period closes this gap.</p>
          <p>The third and largest leak point is stagnant enrollment. A panel that reaches 45% enrollment in month 3 and stays there for the rest of the year leaves the revenue potential of the remaining eligible patients permanently uncaptured. RTM enrollment is not a one-time campaign &mdash; it is an ongoing operational process. New patients entering the practice are eligible immediately. Patients who declined initially should be re-offered enrollment when their clinical circumstances change. Treating enrollment as a living metric with a monthly target, rather than a launch initiative that ends, is what separates high-revenue RTM programs from stagnant ones.</p>

          <h2>Phasing the Rollout</h2>
          <p>Practices that try to launch RTM for their entire eligible panel simultaneously typically underperform compared to practices that phase the rollout. A phased approach starts with 20 to 30 patients &mdash; ideally the most engaged and tech-comfortable subset of the eligible panel &mdash; and uses the first 60 days to validate the workflow, identify documentation gaps, and confirm billing processes are functioning correctly. After validating with the initial cohort, enrollment expands in waves of 20 to 30 patients per month until the target enrollment rate is reached.</p>
          <p>The phased approach produces better outcomes because the practice enters the high-volume enrollment phase with a workflow that has already been tested and refined. A practice that enrolls 80 patients in month one with an untested workflow spends months one through three fixing process problems while those patients generate inconsistent data and documentation. A practice that enrolls 25 patients and refines the workflow before scaling has a consistent, auditable program by the time it reaches scale.</p>
          <p>Run your own numbers. The inputs are your active panel size, your eligibility estimate, a realistic enrollment rate, and the reimbursement rate for your payer mix. Whatever number you arrive at, it represents revenue your practice is currently generating zero dollars from. The investment to capture it is a software subscription and a part-time coordinator role. That math works at almost any practice size with a qualifying patient population.</p>
        </BlogContent>
        <BlogCTA
          ctaLabel="Calculate Your RTM Revenue Potential"
          description="clinIQ helps practices launch RTM programs that hit enrollment targets, close revenue leaks, and scale to full panel coverage within six months."
        />
      </main>
      <FooterInner />
    </>
  )
}
