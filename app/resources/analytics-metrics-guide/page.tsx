import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import ResourceHero from '@/components/ResourceHero'
import ResourcePreview from '@/components/ResourcePreview'
import ResourceForm from '@/components/ResourceForm'
import type { FormField } from '@/components/ResourceForm'
import s from '@/components/ResourceContent.module.css'

export const metadata: Metadata = {
  title: 'Clinic Analytics: The Metrics That Actually Matter — clinIQ Resources',
  description:
    'The 12 operational metrics every clinic operator should track weekly — benchmarks, thresholds, and what to do when they go off.',
}

const previewItems = [
  '12 key metrics with benchmarks and thresholds',
  'Daily vs weekly vs monthly reporting cadences',
  'How to calculate cost-per-visit and revenue-per-hour',
  'Bottleneck detection using flow metrics',
  "Staff productivity measurement that doesn't create resentment",
  'Building your first operational dashboard',
]

const fields: FormField[] = [
  {
    name: 'email',
    label: 'Work email',
    type: 'email',
    placeholder: 'you@yourclinic.com',
    required: true,
  },
  {
    name: 'role',
    label: 'Your role',
    type: 'select',
    options: ['Administrator', 'Office Manager', 'Provider', 'Front Desk', 'Other'],
    required: true,
  },
  {
    name: 'clinicSize',
    label: 'Clinic size',
    type: 'select',
    options: ['1–5 providers', '6–15 providers', '16+ providers'],
    required: true,
  },
]

const content = (
  <div className={s.doc}>
    <p className={s.docTitle}>Clinic Analytics: The 12 Metrics That Actually Matter</p>
    <p className={s.docMeta}>clinIQ Healthcare · March 2026</p>

    <div className={s.section}>
      <p className={s.p}>
        Most clinic dashboards track too many metrics or the wrong ones. This guide identifies the 12 operational metrics with the highest signal-to-noise ratio for ambulatory and specialty clinics. For each metric, you will find a precise definition, an industry benchmark target, a red-flag threshold that requires immediate action, the correct reporting cadence, and a concrete response when the metric falls off.
      </p>
    </div>

    <div className={s.section}>
      <h2 className={s.sectionH2}>The 12 Key Metrics</h2>
      <div className={s.tableWrap}>
        <table className={s.table}>
          <thead>
            <tr>
              <th>Metric</th>
              <th>Definition</th>
              <th>Target Benchmark</th>
              <th>Red Flag</th>
              <th>Reporting Cadence</th>
              <th>Action When Off</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>1. Patient wait time</strong></td>
              <td>Door-to-provider time (arrival to provider entering room)</td>
              <td>&lt;20 min</td>
              <td>&gt;30 min</td>
              <td>Daily</td>
              <td>Investigate rooming bottlenecks; audit triage-to-room and room-to-provider intervals separately</td>
            </tr>
            <tr>
              <td><strong>2. Check-in completion rate</strong></td>
              <td>% of scheduled patients who complete digital check-in before or at arrival</td>
              <td>&gt;85%</td>
              <td>&lt;60%</td>
              <td>Weekly</td>
              <td>Staff training on asking patients to pre-check; audit app friction and login difficulty</td>
            </tr>
            <tr>
              <td><strong>3. No-show rate</strong></td>
              <td>% of scheduled appointments where patient does not arrive and does not cancel in advance</td>
              <td>&lt;7%</td>
              <td>&gt;15%</td>
              <td>Weekly</td>
              <td>Review reminder cadence, reminder channel mix, and reschedule link accessibility</td>
            </tr>
            <tr>
              <td><strong>4. Left without being seen (LWBS)</strong></td>
              <td>% of arrived patients who depart before receiving clinical evaluation</td>
              <td>&lt;2%</td>
              <td>&gt;4%</td>
              <td>Daily</td>
              <td>Immediate operational review; audit wait time communication and triage staffing during peak hours</td>
            </tr>
            <tr>
              <td><strong>5. Room utilization</strong></td>
              <td>% of exam rooms occupied during scheduled operating hours</td>
              <td>&gt;75%</td>
              <td>&lt;50%</td>
              <td>Weekly</td>
              <td>Adjust schedule template; investigate documentation time consuming room after provider exits</td>
            </tr>
            <tr>
              <td><strong>6. RTM billing compliance</strong></td>
              <td>% of enrolled RTM patients who submit monitoring data on at least 16 of 30 days in the billing period</td>
              <td>&gt;75%</td>
              <td>&lt;50%</td>
              <td>Monthly</td>
              <td>Review patient engagement touchpoints; identify patients below 16-day pace mid-month and intervene</td>
            </tr>
            <tr>
              <td><strong>7. Clean claim rate</strong></td>
              <td>% of claims accepted by payer on first submission without correction or rejection</td>
              <td>&gt;96%</td>
              <td>&lt;90%</td>
              <td>Monthly</td>
              <td>Coding and documentation audit; identify the top 3 denial reason codes driving the gap</td>
            </tr>
            <tr>
              <td><strong>8. Denial rate</strong></td>
              <td>% of submitted claims initially denied by payer (prior to appeal)</td>
              <td>&lt;5%</td>
              <td>&gt;15%</td>
              <td>Monthly</td>
              <td>Payer-specific root cause analysis; separate prior-auth denials from coding denials and address each separately</td>
            </tr>
            <tr>
              <td><strong>9. Days in accounts receivable (A/R)</strong></td>
              <td>Average number of days from date of service to payment receipt</td>
              <td>&lt;35 days</td>
              <td>&gt;60 days</td>
              <td>Monthly</td>
              <td>Audit the follow-up workflow for unpaid claims at 30 days; identify payers with systematically slow payment</td>
            </tr>
            <tr>
              <td><strong>10. Prior auth first-pass rate</strong></td>
              <td>% of prior authorization requests approved on first submission without additional information request or denial</td>
              <td>&gt;85%</td>
              <td>&lt;65%</td>
              <td>Monthly</td>
              <td>Documentation template review; identify the step in submission where most requests fail and redesign that step</td>
            </tr>
            <tr>
              <td><strong>11. Patient satisfaction score</strong></td>
              <td>Average post-visit survey score (scale 1–5 or equivalent)</td>
              <td>&gt;4.2 / 5</td>
              <td>&lt;3.5 / 5</td>
              <td>Weekly</td>
              <td>Identify the survey question with the lowest individual score; address the corresponding operational or clinical element</td>
            </tr>
            <tr>
              <td><strong>12. Revenue per provider hour</strong></td>
              <td>Total collections divided by total clinical (patient-facing) hours worked by providers</td>
              <td>Specialty-specific benchmark</td>
              <td>20% below specialty benchmark</td>
              <td>Monthly</td>
              <td>Audit scheduling template density, E&M coding levels, and procedure capture rates</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div className={s.section}>
      <h2 className={s.sectionH2}>Building Your First Operational Dashboard</h2>
      <p className={s.p}>
        An effective operational dashboard does not require business intelligence software. A well-structured spreadsheet or basic EHR report view is sufficient for clinics under 10 providers. The key is consistency — the same metrics, measured the same way, on the same schedule.
      </p>
      <ol className={s.steps}>
        <li className={s.step}>
          <span className={s.stepNum}>1</span>
          <div className={s.stepBody}>
            <p className={s.stepTitle}>Choose your data sources</p>
            <p className={s.stepDesc}>
              Identify where each metric lives: patient flow metrics come from your scheduling or patient flow system; billing metrics come from your practice management software or clearinghouse; satisfaction metrics come from your survey tool. If a metric has no data source, build the data collection before tracking the metric.
            </p>
          </div>
        </li>
        <li className={s.step}>
          <span className={s.stepNum}>2</span>
          <div className={s.stepBody}>
            <p className={s.stepTitle}>Start with three metrics</p>
            <p className={s.stepDesc}>
              Do not build a 12-metric dashboard on day one. Choose wait time, no-show rate, and clean claim rate as your starting three. These three metrics cover patient flow, scheduling health, and billing health — the three operational pillars. Add metrics once you have stable data for the initial three.
            </p>
          </div>
        </li>
        <li className={s.step}>
          <span className={s.stepNum}>3</span>
          <div className={s.stepBody}>
            <p className={s.stepTitle}>Set a review cadence and stick to it</p>
            <p className={s.stepDesc}>
              A dashboard that is reviewed inconsistently is not a dashboard — it is a filing exercise. Daily metrics (wait time, LWBS) should be reviewed every morning by the clinic manager. Weekly metrics should anchor a 15-minute Friday operational review. Monthly metrics should be the centerpiece of your monthly leadership meeting.
            </p>
          </div>
        </li>
      </ol>
    </div>

    <div className={s.section}>
      <h2 className={s.sectionH2}>Reporting Cadence Summary</h2>
      <div className={s.tableWrap}>
        <table className={s.table}>
          <thead>
            <tr>
              <th>Cadence</th>
              <th>Metrics</th>
              <th>Reviewer</th>
              <th>Time Required</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span className={`${s.tag} ${s.tagRed}`}>Daily</span></td>
              <td>Patient wait time, LWBS rate</td>
              <td>Clinic manager</td>
              <td>5 minutes</td>
            </tr>
            <tr>
              <td><span className={`${s.tag} ${s.tagYellow}`}>Weekly</span></td>
              <td>Check-in completion rate, no-show rate, room utilization, patient satisfaction</td>
              <td>Operations lead</td>
              <td>15 minutes</td>
            </tr>
            <tr>
              <td><span className={`${s.tag} ${s.tagGreen}`}>Monthly</span></td>
              <td>RTM compliance, clean claim rate, denial rate, A/R days, prior auth first-pass, revenue per provider hour</td>
              <td>Administrator + billing lead</td>
              <td>30–45 minutes</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
)

export default function AnalyticsMetricsGuidePage() {
  return (
    <>
      <NavInner />
      <main>
        <ResourceHero
          type="Guide"
          title="Clinic Analytics: The Metrics That Actually Matter"
          subtitle="The 12 operational metrics every clinic operator should track weekly — and what to do when they're off."
        />
        <ResourcePreview items={previewItems} />
        <ResourceForm
          resourceSlug="analytics-metrics-guide"
          resourceTitle="Clinic Analytics: The Metrics That Actually Matter"
          fields={fields}
          submitLabel="View the guide"
          successMessage=""
          revealContent={content}
        />
      </main>
      <FooterInner />
    </>
  )
}
