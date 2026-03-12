import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import ResourceHero from '@/components/ResourceHero'
import ResourcePreview from '@/components/ResourcePreview'
import ResourceForm from '@/components/ResourceForm'
import type { FormField } from '@/components/ResourceForm'
import s from '@/components/ResourceContent.module.css'

export const metadata: Metadata = {
  title: 'MAT Clinic Workflow Template — clinIQ Resources',
  description:
    'Medication-assisted treatment clinic workflow template from intake to medication dispensing. Covers buprenorphine induction, monitoring visits, and insurance pre-auth.',
}

const previewItems = [
  'New patient MAT intake workflow',
  'Buprenorphine induction visit sequence',
  'Weekly and monthly monitoring visit flow',
  'Group therapy session coordination',
  'Urine drug screen workflow integration',
  'Insurance pre-auth for MAT medications',
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
  {
    name: 'clinicType',
    label: 'Clinic type',
    type: 'select',
    options: [
      'Outpatient MAT Clinic',
      'Primary Care with MAT',
      'Hospital-Based MAT',
      'Other',
    ],
    required: true,
  },
]

const content = (
  <div className={s.doc}>
    <p className={s.docTitle}>MAT Clinic Workflow Template</p>
    <p className={s.docMeta}>clinIQ Healthcare · March 2026 · Medication-Assisted Treatment</p>

    <div className={s.section}>
      <p className={s.p}>
        This template covers the operational workflow for an outpatient medication-assisted treatment clinic from initial patient inquiry through stable ongoing monitoring. Adapt the specific timing and documentation requirements to your state regulations and payer requirements. All clinical protocols should be reviewed and approved by your medical director before implementation.
      </p>
    </div>

    <div className={s.section}>
      <h2 className={s.sectionH2}>New Patient Intake Workflow</h2>
      <ol className={s.steps}>
        <li className={s.step}>
          <span className={s.stepNum}>1</span>
          <div className={s.stepBody}>
            <p className={s.stepTitle}>Pre-screening phone call</p>
            <p className={s.stepDesc}>
              Conducted by intake coordinator or nurse. Collect: chief complaint and substance(s) of use, brief withdrawal symptom assessment (verbal COWS screening questions), insurance information and coverage verification, ID requirements, and contact information. Assess immediate safety — patients in active severe withdrawal or medical crisis should be directed to emergency services. Schedule intake appointment within 24–72 hours for motivated patients.
            </p>
          </div>
        </li>
        <li className={s.step}>
          <span className={s.stepNum}>2</span>
          <div className={s.stepBody}>
            <p className={s.stepTitle}>Intake appointment</p>
            <p className={s.stepDesc}>
              The intake appointment includes: biopsychosocial assessment (substance use history, mental health history, trauma history, social supports, employment, housing), urine drug screen (point-of-care and confirmatory), PDMP check in all applicable states, vital signs, medical history review, and completion of all consent forms (treatment consent, HIPAA, medication agreement, toxicology authorization). This visit is typically 60–90 minutes. Complete or assign ICD-10 diagnosis codes before the patient leaves.
            </p>
          </div>
        </li>
        <li className={s.step}>
          <span className={s.stepNum}>3</span>
          <div className={s.stepBody}>
            <p className={s.stepTitle}>Insurance pre-authorization for buprenorphine</p>
            <p className={s.stepDesc}>
              Most commercial payers and many Medicaid plans require prior authorization for buprenorphine products. Submit the PA before the induction appointment is scheduled. Required documentation typically includes: opioid use disorder diagnosis (F11.20/F11.21), PDMP documentation, substance use disorder evaluation note, treatment plan, and evidence of counseling enrollment or referral. Timeline: allow 3–5 business days for commercial payers and up to 10 days for some Medicaid plans.
            </p>
          </div>
        </li>
        <li className={s.step}>
          <span className={s.stepNum}>4</span>
          <div className={s.stepBody}>
            <p className={s.stepTitle}>Induction appointment scheduling</p>
            <p className={s.stepDesc}>
              Schedule the induction appointment only after PA is confirmed (or when PA exception is documented). Confirm with the patient the night before: remind them to be in mild to moderate withdrawal before arriving (COWS ≥8 for sublingual buprenorphine induction). Provide written instructions on what to expect. Confirm that a responsible adult can drive the patient home post-induction if needed per your clinical protocol.
            </p>
          </div>
        </li>
      </ol>
    </div>

    <div className={s.section}>
      <h2 className={s.sectionH2}>Buprenorphine Induction Visit</h2>
      <ol className={s.steps}>
        <li className={s.step}>
          <span className={s.stepNum}>1</span>
          <div className={s.stepBody}>
            <p className={s.stepTitle}>Confirm COWS score ≥8 (moderate withdrawal)</p>
            <p className={s.stepDesc}>
              Administer the Clinical Opiate Withdrawal Scale (COWS) at arrival. Document the score in the medical record. If COWS is below 8, the patient has not waited long enough since last opioid use. Options: reschedule, have patient wait in clinic if monitoring capacity exists, or proceed under explicit physician order with documented clinical rationale. Do not initiate buprenorphine with COWS &lt;8 except under specific physician-directed protocols.
            </p>
          </div>
        </li>
        <li className={s.step}>
          <span className={s.stepNum}>2</span>
          <div className={s.stepBody}>
            <p className={s.stepTitle}>Administer initial dose</p>
            <p className={s.stepDesc}>
              Initial dose is per the prescribing provider's order, typically 2–4mg sublingual buprenorphine/naloxone. Document administration time, dose, and lot number in the medical record. Patient remains in clinic for observation period.
            </p>
          </div>
        </li>
        <li className={s.step}>
          <span className={s.stepNum}>3</span>
          <div className={s.stepBody}>
            <p className={s.stepTitle}>2-hour observation</p>
            <p className={s.stepDesc}>
              Monitor for: withdrawal symptom response (expect improvement within 45–60 minutes), precipitated withdrawal (acute worsening, requires immediate provider intervention), adverse reactions, and patient-reported effect. Document COWS score at 60 minutes and at end of observation period. Patient should not leave the clinic during this period.
            </p>
          </div>
        </li>
        <li className={s.step}>
          <span className={s.stepNum}>4</span>
          <div className={s.stepBody}>
            <p className={s.stepTitle}>Dose adjustment if needed</p>
            <p className={s.stepDesc}>
              Based on the 60-minute COWS assessment, the provider may administer a second dose (typically 2–4mg) if withdrawal symptoms persist. Document second dose administration. Total first-day dose should generally not exceed 8–12mg without specific clinical justification and documentation.
            </p>
          </div>
        </li>
        <li className={s.step}>
          <span className={s.stepNum}>5</span>
          <div className={s.stepBody}>
            <p className={s.stepTitle}>Schedule Day 3 follow-up</p>
            <p className={s.stepDesc}>
              Before the patient leaves, schedule the Day 3 return visit. The Day 3 visit confirms dose adequacy, assesses for side effects, and allows dose titration. Do not dispense a full week's supply without the Day 3 check. Provide the patient with a take-home dose for Day 2 only at the initial induction if protocol supports, or confirm next-day return.
            </p>
          </div>
        </li>
        <li className={s.step}>
          <span className={s.stepNum}>6</span>
          <div className={s.stepBody}>
            <p className={s.stepTitle}>Document in EHR and transmit prescription</p>
            <p className={s.stepDesc}>
              Buprenorphine prescriptions must be transmitted electronically in most states (check your state's current requirements). Document: dose, frequency, quantity dispensed, days supply, and next appointment. Complete required PDMP entry at time of prescribing.
            </p>
          </div>
        </li>
        <li className={s.step}>
          <span className={s.stepNum}>7</span>
          <div className={s.stepBody}>
            <p className={s.stepTitle}>Provide patient education packet</p>
            <p className={s.stepDesc}>
              Before discharge, provide written materials covering: how to take the medication, what to expect in the first week, side effects to watch for, when to call the clinic, medication storage and security, and the clinic's no-diversion policy. Review the materials verbally and document that education was provided.
            </p>
          </div>
        </li>
      </ol>
    </div>

    <div className={s.section}>
      <h2 className={s.sectionH2}>Monitoring Visit Schedule</h2>
      <div className={s.tableWrap}>
        <table className={s.table}>
          <thead>
            <tr>
              <th>Visit Type</th>
              <th>Frequency</th>
              <th>Key Tasks</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Early stabilization</strong></td>
              <td>Weeks 1–4 (weekly)</td>
              <td>UDS (point-of-care + confirm), prescription refill, symptom and side effect check, COWS if indicated, counseling referral status confirmation, treatment plan review</td>
            </tr>
            <tr>
              <td><strong>Stabilization</strong></td>
              <td>Months 2–3 (biweekly)</td>
              <td>UDS, prescription refill (2-week supply), treatment plan review, functional status assessment, counseling attendance verification</td>
            </tr>
            <tr>
              <td><strong>Maintenance</strong></td>
              <td>Month 4+ (monthly)</td>
              <td>UDS, prescription refill (monthly supply), annual treatment plan update, functional and social status review, discussion of long-term treatment goals</td>
            </tr>
            <tr>
              <td><strong>Step-down consideration</strong></td>
              <td>Per clinical criteria</td>
              <td>6+ months continuous sobriety, stable employment or housing, completed or ongoing counseling, patient-expressed readiness, provider-directed taper plan</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div className={s.section}>
      <h2 className={s.sectionH2}>Insurance Pre-Authorization Checklist for MAT Medications</h2>
      <p className={s.p}>Complete all items before submitting PA request for buprenorphine:</p>
      <ul className={s.checklist}>
        <li className={s.checkItem}><span className={s.checkbox} />Primary diagnosis code confirmed: F11.20 (OUD, uncomplicated) or F11.21 (OUD, in early remission) as appropriate</li>
        <li className={s.checkItem}><span className={s.checkbox} />PDMP report printed and included — dated within the last 30 days</li>
        <li className={s.checkItem}><span className={s.checkbox} />Substance use disorder evaluation note completed and signed by provider</li>
        <li className={s.checkItem}><span className={s.checkbox} />Initial treatment plan signed by provider — includes treatment goals, frequency of visits, and counseling plan</li>
        <li className={s.checkItem}><span className={s.checkbox} />Evidence of counseling enrollment or referral documented (many payers require concurrent counseling as PA condition)</li>
        <li className={s.checkItem}><span className={s.checkbox} />Prescribing provider's DATA 2000 waiver number (DEA-X number) included in PA submission where required</li>
        <li className={s.checkItem}><span className={s.checkbox} />Specific buprenorphine formulation identified (Suboxone film, Subutex, generic, or Sublocade injection — payer formulary coverage varies by formulation)</li>
        <li className={s.checkItem}><span className={s.checkbox} />PA submitted with complete package — missing any element above is the primary cause of first-submission PA denials for MAT medications</li>
      </ul>
    </div>
  </div>
)

export default function MatClinicWorkflowTemplatePage() {
  return (
    <>
      <NavInner />
      <main>
        <ResourceHero
          type="Template"
          title="MAT Clinic Workflow Template"
          subtitle="Medication-assisted treatment clinic workflow from intake to medication dispensing."
        />
        <ResourcePreview items={previewItems} />
        <ResourceForm
          resourceSlug="mat-clinic-workflow-template"
          resourceTitle="MAT Clinic Workflow Template"
          fields={fields}
          submitLabel="View the template"
          successMessage=""
          revealContent={content}
        />
      </main>
      <FooterInner />
    </>
  )
}
