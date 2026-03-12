import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import ResourceHero from '@/components/ResourceHero'
import ResourcePreview from '@/components/ResourcePreview'
import ResourceForm from '@/components/ResourceForm'
import type { FormField } from '@/components/ResourceForm'
import s from '@/components/ResourceContent.module.css'

export const metadata: Metadata = {
  title: 'Prior Authorization Workflow Checklist — clinIQ Resources',
  description:
    '18-step checklist to reduce prior auth delays and denial rates. Covers eligibility checks, documentation, submission timing, and appeals.',
}

const previewItems = [
  'Patient eligibility pre-check workflow',
  'Documentation requirements by payer type',
  'Submission timing rules to avoid delays',
  'Denial response workflow',
  'Appeals process checklist',
  'RTM and specialist auth templates',
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
    name: 'specialty',
    label: 'Specialty',
    type: 'select',
    options: [
      'Pain Management',
      'Physical Therapy',
      'Behavioral Health',
      'Cardiology',
      'Orthopedics',
      'Other',
    ],
    required: true,
  },
]

const content = (
  <div className={s.doc}>
    <p className={s.docTitle}>Prior Authorization Workflow Checklist</p>
    <p className={s.docMeta}>clinIQ Healthcare · March 2026 · 18-Step Workflow</p>

    <div className={s.section}>
      <p className={s.p}>
        This checklist covers the complete prior authorization lifecycle from pre-submission through denial and appeal. Complete every step in sequence. Skipping steps is the primary cause of first-submission denials and authorization delays. Print one copy per authorization request and file with the patient record.
      </p>
    </div>

    <div className={s.section}>
      <div className={s.phase}>
        <p className={s.phaseTitle}>Phase 1: Pre-Submission (Steps 1–6)</p>
      </div>
      <ul className={s.checklist}>
        <li className={s.checkItem}>
          <span className={s.checkbox} />
          <div>
            <strong>Step 1: Verify patient eligibility</strong>
            <br />Confirm active insurance coverage, confirm the treating provider is in-network, and verify that the service being requested is a covered benefit. Run eligibility check on the day of or the day before submission — not at the time of scheduling.
          </div>
        </li>
        <li className={s.checkItem}>
          <span className={s.checkbox} />
          <div>
            <strong>Step 2: Identify PA requirements</strong>
            <br />Confirm whether a prior authorization is required for this specific procedure or service under this specific plan. Check the payer's online portal or call the provider services line. Document the name of the representative, date, and reference number if calling.
          </div>
        </li>
        <li className={s.checkItem}>
          <span className={s.checkbox} />
          <div>
            <strong>Step 3: Gather clinical documentation</strong>
            <br />Pull the relevant clinical records: diagnosis codes (ICD-10), procedure codes (CPT/HCPCS), relevant notes supporting medical necessity, lab results, imaging reports, prior treatment history, and any applicable clinical guidelines cited by the payer in their coverage policy.
          </div>
        </li>
        <li className={s.checkItem}>
          <span className={s.checkbox} />
          <div>
            <strong>Step 4: Prepare Letter of Medical Necessity (LOMN)</strong>
            <br />The LOMN must include: patient identification, diagnosis, description of requested service, explanation of why the service is medically necessary for this patient, clinical evidence or guidelines supporting the request, and a statement of why alternative or less-intensive services are insufficient. Provider signature required.
          </div>
        </li>
        <li className={s.checkItem}>
          <span className={s.checkbox} />
          <div>
            <strong>Step 5: Verify payer-specific submission requirements</strong>
            <br />Check whether the payer requires submission through their online portal, by fax, or by phone. Note any specific forms required (some payers have PA-specific forms for certain service categories). Confirm whether a clinical peer is required on the call.
          </div>
        </li>
        <li className={s.checkItem}>
          <span className={s.checkbox} />
          <div>
            <strong>Step 6: Confirm submission portal or fax number</strong>
            <br />Verify the correct fax number or portal URL for the payer. Do not use numbers from memory or outdated contact sheets. Payer portal URLs and fax numbers change frequently. Submitting to the wrong destination is equivalent to not submitting at all and restarts the clock.
          </div>
        </li>
      </ul>
    </div>

    <div className={s.section}>
      <div className={s.phase}>
        <p className={s.phaseTitle}>Phase 2: Submission (Steps 7–10)</p>
      </div>
      <ul className={s.checklist}>
        <li className={s.checkItem}>
          <span className={s.checkbox} />
          <div>
            <strong>Step 7: Submit with complete package</strong>
            <br />Include every required document in a single submission. Incomplete submissions cause the payer to place the request on hold — which is not a denial but restarts the processing clock. Double-check: referral form, LOMN, clinical notes, diagnosis and procedure codes, and provider NPI.
          </div>
        </li>
        <li className={s.checkItem}>
          <span className={s.checkbox} />
          <div>
            <strong>Step 8: Record confirmation number</strong>
            <br />Every submission — portal or fax — must generate a confirmation number or transmission report. Document this in your PA tracking log immediately. If submitting by fax, retain the fax confirmation page in the patient file. This is your proof of timely filing.
          </div>
        </li>
        <li className={s.checkItem}>
          <span className={s.checkbox} />
          <div>
            <strong>Step 9: Calendar follow-up date</strong>
            <br />Set a follow-up date for 5–7 business days from submission (or per payer's stated turnaround time, whichever is sooner). Add this date to your PA tracking system or task calendar. Do not wait for the payer to contact you.
          </div>
        </li>
        <li className={s.checkItem}>
          <span className={s.checkbox} />
          <div>
            <strong>Step 10: Notify provider of submission</strong>
            <br />Confirm to the ordering provider that the PA has been submitted and provide an estimated response date. This prevents the provider from scheduling the procedure before authorization is received, which can result in a non-covered claim.
          </div>
        </li>
      </ul>
    </div>

    <div className={s.section}>
      <div className={s.phase}>
        <p className={s.phaseTitle}>Phase 3: Follow-Up (Steps 11–14)</p>
      </div>
      <ul className={s.checklist}>
        <li className={s.checkItem}>
          <span className={s.checkbox} />
          <div>
            <strong>Step 11: Check status at Day 7</strong>
            <br />Log into the payer portal or call provider services on or before day 7 from submission. Document the status: pending, additional information requested, approved, or denied. If additional information is requested, gather and submit within 24 hours.
          </div>
        </li>
        <li className={s.checkItem}>
          <span className={s.checkbox} />
          <div>
            <strong>Step 12: Escalate if no response at Day 14</strong>
            <br />If the request is still pending at Day 14 with no status update, escalate to the payer's provider relations department. Reference your confirmation number. Request an expedited review if the clinical situation warrants it. Document the escalation call with representative name and call reference number.
          </div>
        </li>
        <li className={s.checkItem}>
          <span className={s.checkbox} />
          <div>
            <strong>Step 13: Document all payer communications</strong>
            <br />Every phone call, portal message, and status check must be logged with date, time, representative name, and content of the conversation. This documentation is essential for timely filing appeals and external review requests.
          </div>
        </li>
        <li className={s.checkItem}>
          <span className={s.checkbox} />
          <div>
            <strong>Step 14: Update tracking system</strong>
            <br />Record current authorization status in your PA tracking spreadsheet or system. Ensure the scheduled service date, authorization number (if approved), and authorization expiration date are logged. Expired authorizations are a common cause of post-service denials.
          </div>
        </li>
      </ul>
    </div>

    <div className={s.section}>
      <div className={s.phase}>
        <p className={s.phaseTitle}>Phase 4: Denial and Appeal (Steps 15–18)</p>
      </div>
      <ul className={s.checklist}>
        <li className={s.checkItem}>
          <span className={s.checkbox} />
          <div>
            <strong>Step 15: Document denial reason</strong>
            <br />Pull the Explanation of Benefits (EOB) or denial notice and identify the specific denial reason code. Common reasons: medical necessity not established, insufficient documentation, step therapy not met, service experimental or investigational, timely filing exceeded. The denial reason dictates your appeal strategy.
          </div>
        </li>
        <li className={s.checkItem}>
          <span className={s.checkbox} />
          <div>
            <strong>Step 16: Determine appeal eligibility window</strong>
            <br />Identify the first-level appeal deadline. This varies by payer: Medicare requires appeals within 120 days; most commercial payers require appeals within 60–180 days from denial date. Missing the appeal window permanently forfeits the right to appeal. Calendar the deadline the same day the denial arrives.
          </div>
        </li>
        <li className={s.checkItem}>
          <span className={s.checkbox} />
          <div>
            <strong>Step 17: Prepare appeal with additional documentation</strong>
            <br />Write a formal appeal letter citing: the specific denial reason, why the denial is incorrect based on the patient's clinical situation, supporting clinical evidence (literature, guidelines, specialist opinions), and any information not included in the original submission. Attach all supporting documentation.
          </div>
        </li>
        <li className={s.checkItem}>
          <span className={s.checkbox} />
          <div>
            <strong>Step 18: Schedule peer-to-peer review if applicable</strong>
            <br />For medical necessity denials, a peer-to-peer (P2P) review between the ordering provider and the payer's medical director is often the single most effective appeal strategy, with reversal rates of 50–70% for well-prepared physicians. Request the P2P within 24–48 hours of denial. The treating provider should lead this call.
          </div>
        </li>
      </ul>
    </div>
  </div>
)

export default function PriorAuthChecklistPage() {
  return (
    <>
      <NavInner />
      <main>
        <ResourceHero
          type="Checklist"
          title="Prior Authorization Workflow Checklist"
          subtitle="18-step checklist to reduce prior auth delays and denial rates."
        />
        <ResourcePreview items={previewItems} />
        <ResourceForm
          resourceSlug="prior-auth-checklist"
          resourceTitle="Prior Authorization Workflow Checklist"
          fields={fields}
          submitLabel="View the checklist"
          successMessage=""
          revealContent={content}
        />
      </main>
      <FooterInner />
    </>
  )
}
