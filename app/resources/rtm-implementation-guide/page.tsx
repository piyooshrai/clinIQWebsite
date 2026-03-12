import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import ResourceHero from '@/components/ResourceHero'
import ResourcePreview from '@/components/ResourcePreview'
import ResourceForm from '@/components/ResourceForm'
import type { FormField } from '@/components/ResourceForm'
import s from '@/components/ResourceContent.module.css'

export const metadata: Metadata = {
  title: 'RTM Implementation Guide — clinIQ Resources',
  description:
    'Step-by-step guide to launching RTM billing from scratch. CPT codes, documentation requirements, payer rules, and revenue projections.',
}

const previewItems = [
  'RTM vs RPM — which codes apply, which patients qualify, and the key legal distinction',
  'CPT 98975–98981 breakdown with 2026 Medicare reimbursement rates per code',
  'Documentation requirements that survive a payer audit — timestamps, staff logs, review records',
  'Patient enrollment scripts and consent workflows your front desk can actually use',
  'Billing timeline and cash flow projection — when to expect first reimbursement',
  'Common implementation mistakes and exactly how to avoid each one',
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
    name: 'specialty',
    label: 'Your specialty',
    type: 'select',
    options: [
      'Pain Management',
      'Physical Therapy',
      'Orthopedics',
      'Pulmonology',
      'Behavioral Health',
      'Other',
    ],
    required: true,
  },
  {
    name: 'currentEHR',
    label: 'Current EHR',
    type: 'text',
    placeholder: 'e.g. Epic, Athena, eClinicalWorks…',
    required: false,
  },
]

const content = (
  <div className={s.doc}>
    <p className={s.docTitle}>RTM Implementation Guide: From Setup to First Bill</p>
    <p className={s.docMeta}>clinIQ Healthcare · March 2026</p>

    <div className={s.section}>
      <h2 className={s.sectionH2}>Phase 1: Identify Eligible Patients</h2>
      <p className={s.p}>
        RTM (Remote Therapeutic Monitoring) applies to musculoskeletal and respiratory conditions — distinct from RPM (Remote Physiologic Monitoring), which requires physiologic data collection via a device. RTM covers therapeutic response, adherence, and pain level reporting through patient-facing apps or interactive questionnaires. No medical device is required.
      </p>
      <p className={s.p}>Eligible patient criteria for RTM:</p>
      <ul className={s.checklist}>
        <li className={s.checkItem}><span className={s.checkbox} />Patient has a musculoskeletal or respiratory chronic condition</li>
        <li className={s.checkItem}><span className={s.checkbox} />Patient has a treatment plan that benefits from between-visit monitoring</li>
        <li className={s.checkItem}><span className={s.checkbox} />Patient is able to use a smartphone or web-based reporting tool</li>
        <li className={s.checkItem}><span className={s.checkbox} />Patient's insurance covers RTM (verify with payer before enrollment)</li>
        <li className={s.checkItem}><span className={s.checkbox} />Physician, PA, or NP will provide the ordering and management services</li>
      </ul>
      <p className={s.p}>
        Start by pulling your panel for pain management, physical therapy, orthopedics, or pulmonology patients. Any patient you are already seeing every 4–8 weeks for a chronic musculoskeletal condition is a candidate for enrollment.
      </p>
    </div>

    <div className={s.section}>
      <h2 className={s.sectionH2}>Phase 2: Select RTM Platform</h2>
      <p className={s.p}>
        Your RTM platform must be able to collect patient-reported data (symptoms, adherence, pain scores), generate timestamps on all data transmissions, and produce a data log sufficient for audit documentation. Evaluate vendors on these criteria:
      </p>
      <div className={s.tableWrap}>
        <table className={s.table}>
          <thead>
            <tr>
              <th>Criteria</th>
              <th>What to Ask</th>
              <th>Why It Matters</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>16-day data threshold tracking</td>
              <td>Does the platform alert you when patients hit 16 days of data?</td>
              <td>CPT 98977/98978 requires 16 days of data per 30-day period</td>
            </tr>
            <tr>
              <td>EHR integration</td>
              <td>Does patient data flow into your EHR notes automatically?</td>
              <td>Eliminates manual documentation and reduces audit risk</td>
            </tr>
            <tr>
              <td>BAA availability</td>
              <td>Will the vendor sign a Business Associate Agreement?</td>
              <td>Required for HIPAA compliance</td>
            </tr>
            <tr>
              <td>Payer support</td>
              <td>Has the vendor helped other practices bill Medicare and commercial payers?</td>
              <td>Reduces first-claim denial risk</td>
            </tr>
            <tr>
              <td>Patient-facing app</td>
              <td>Is the app available for iOS and Android? What is the login flow?</td>
              <td>Patient adoption drives your 16-day compliance rate</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div className={s.section}>
      <h2 className={s.sectionH2}>Phase 3: Build Documentation Workflow</h2>
      <p className={s.p}>
        The RTM billing workflow requires four distinct documentation elements. Each must be captured in your EHR with appropriate timestamps. Missing any one of these will result in a claim denial or audit recoupment.
      </p>
      <ol className={s.steps}>
        <li className={s.step}>
          <span className={s.stepNum}>1</span>
          <div className={s.stepBody}>
            <p className={s.stepTitle}>Written Order</p>
            <p className={s.stepDesc}>
              The ordering provider must create a written order for RTM in the patient's chart before enrollment. The order should specify: monitoring modality (musculoskeletal or respiratory), duration of monitoring program, and the treatment goals being monitored. This order must exist prior to billing CPT 98975 (initial setup).
            </p>
          </div>
        </li>
        <li className={s.step}>
          <span className={s.stepNum}>2</span>
          <div className={s.stepBody}>
            <p className={s.stepTitle}>Patient Consent</p>
            <p className={s.stepDesc}>
              A signed consent form documenting the patient's understanding of the RTM program, data collection practices, billing implications, and opt-out rights is required. Keep the signed consent in the chart. Use a HIPAA-compliant consent template (see our RTM Consent Template resource for a ready-to-use version).
            </p>
          </div>
        </li>
        <li className={s.step}>
          <span className={s.stepNum}>3</span>
          <div className={s.stepBody}>
            <p className={s.stepTitle}>16-Day Compliance Evidence</p>
            <p className={s.stepDesc}>
              The platform must generate a data log showing the patient transmitted data on at least 16 of the 30 days in the billing period. This log — with timestamps — is your primary audit defense. Do not bill CPT 98977 or 98978 unless this log confirms 16 days. Your platform should auto-generate this report.
            </p>
          </div>
        </li>
        <li className={s.step}>
          <span className={s.stepNum}>4</span>
          <div className={s.stepBody}>
            <p className={s.stepTitle}>Treatment Management Note</p>
            <p className={s.stepDesc}>
              Each month in which you bill CPT 98980 or 98981 (interactive communication), the provider must document a treatment management service. This is a note in the patient's chart reflecting: review of monitoring data, clinical interpretation, and any adjustments to the treatment plan. Time-based billing requires the provider to document the total time spent on RTM activities for the month.
            </p>
          </div>
        </li>
      </ol>
    </div>

    <div className={s.section}>
      <h2 className={s.sectionH2}>Phase 4: Enroll First Patients</h2>
      <p className={s.p}>
        Begin with 10–20 patients. High-compliance candidates are patients who already use smartphones, are motivated by self-monitoring, and have conditions where between-visit symptom variability is high (chronic pain, COPD, post-surgical rehab).
      </p>
      <div className={s.infoBox}>
        <p className={s.infoBoxText}>
          <strong>Enrollment Script for Front Desk:</strong> "As part of your care plan, Dr. [Name] would like to enroll you in our remote monitoring program. Through a short daily check-in on your phone, we track how you're doing between visits so we can adjust your treatment if needed. There's no extra cost to you beyond your normal copay or coinsurance. Can I tell you more about how it works?"
        </p>
      </div>
      <p className={s.p}>
        After verbal agreement, complete the written consent, place the RTM order in the EHR, and guide the patient through app download before they leave the office. Patients who set up the app in-office have significantly higher 30-day retention than those who are sent home with instructions.
      </p>
    </div>

    <div className={s.section}>
      <h2 className={s.sectionH2}>Phase 5: Monthly Billing Cycle</h2>
      <div className={s.tableWrap}>
        <table className={s.table}>
          <thead>
            <tr>
              <th>Timing</th>
              <th>Action</th>
              <th>Who</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Day 1 of enrollment</td>
              <td>Bill CPT 98975 (initial setup and patient education, 1 unit lifetime)</td>
              <td>Billing staff</td>
            </tr>
            <tr>
              <td>Day 1–30</td>
              <td>Monitor patient data submissions; flag patients below 16-day pace</td>
              <td>RTM coordinator</td>
            </tr>
            <tr>
              <td>Day 16 confirmed</td>
              <td>Run compliance report; confirm 16-day threshold met</td>
              <td>RTM coordinator</td>
            </tr>
            <tr>
              <td>Within 30-day period</td>
              <td>Provider documents treatment management note (minimum 20 min for 98980)</td>
              <td>Provider</td>
            </tr>
            <tr>
              <td>End of billing period</td>
              <td>Bill CPT 98977 or 98978 (device supply) + 98980 or 98981 (management)</td>
              <td>Billing staff</td>
            </tr>
            <tr>
              <td>Following month</td>
              <td>Repeat monitoring cycle; re-verify patient is still engaged</td>
              <td>RTM coordinator</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div className={s.section}>
      <h2 className={s.sectionH2}>Common Mistakes to Avoid</h2>
      <ul className={s.checklist}>
        <li className={s.checkItem}><span className={s.checkbox} /><strong>Billing before the written order exists.</strong> The order must precede enrollment. Backdating orders is a compliance violation.</li>
        <li className={s.checkItem}><span className={s.checkbox} /><strong>Billing CPT 98977/98978 without confirming 16 days.</strong> Pull the data log before billing, every month, without exception.</li>
        <li className={s.checkItem}><span className={s.checkbox} /><strong>Missing provider management note.</strong> CPT 98980 requires documented provider time. A note that says "data reviewed, no changes" is insufficient without time documentation.</li>
        <li className={s.checkItem}><span className={s.checkbox} /><strong>Using RTM codes for physiologic monitoring (RPM).</strong> Blood pressure and glucose monitors are RPM. Symptom questionnaires and pain scales are RTM. Do not mix the code sets.</li>
        <li className={s.checkItem}><span className={s.checkbox} /><strong>Not verifying payer coverage before enrollment.</strong> Medicare covers RTM under final CY2022 rules. Commercial payer policies vary. Verify coverage before spending time on enrollment.</li>
      </ul>
    </div>

    <div className={s.section}>
      <h2 className={s.sectionH2}>Revenue Projection: 50 Enrolled Patients</h2>
      <div className={s.tableWrap}>
        <table className={s.table}>
          <thead>
            <tr>
              <th>CPT Code</th>
              <th>Description</th>
              <th>2026 Medicare Rate</th>
              <th>Monthly × 50 Patients</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>98975</td>
              <td>Initial setup (one-time per patient)</td>
              <td>$19.33</td>
              <td>$966 (one-time)</td>
            </tr>
            <tr>
              <td>98977</td>
              <td>Device supply, musculoskeletal (per 30 days)</td>
              <td>$55.78</td>
              <td>$2,789/month</td>
            </tr>
            <tr>
              <td>98980</td>
              <td>Treatment management, first 20 min</td>
              <td>$50.18</td>
              <td>$2,509/month</td>
            </tr>
            <tr>
              <td>98981</td>
              <td>Treatment management, each additional 20 min</td>
              <td>$40.84</td>
              <td>$1,021/month (at 50% add-on rate)</td>
            </tr>
            <tr>
              <td colSpan={3}><strong>Estimated Monthly Recurring Revenue (50 patients)</strong></td>
              <td><strong>~$6,300/month</strong></td>
            </tr>
            <tr>
              <td colSpan={3}><strong>Estimated Annual Revenue (50 patients, 80% compliance)</strong></td>
              <td><strong>~$60,500/year</strong></td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className={s.p}>
        Rates shown are 2026 Medicare physician fee schedule estimates. Commercial rates vary by payer and contract. First reimbursement typically arrives 30–45 days after first claim submission.
      </p>
    </div>
  </div>
)

export default function RTMImplementationGuidePage() {
  return (
    <>
      <NavInner />
      <main>
        <ResourceHero
          type="Guide"
          title="RTM Implementation Guide: From Setup to First Bill"
          subtitle="Step-by-step guide to launching RTM billing. CPT codes, documentation, payer rules, and revenue math."
        />
        <ResourcePreview items={previewItems} />
        <ResourceForm
          resourceSlug="rtm-implementation-guide"
          resourceTitle="RTM Implementation Guide: From Setup to First Bill"
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
