import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import ResourceHero from '@/components/ResourceHero'
import ResourcePreview from '@/components/ResourcePreview'
import ResourceForm from '@/components/ResourceForm'
import type { FormField } from '@/components/ResourceForm'
import s from '@/components/ResourceContent.module.css'

export const metadata: Metadata = {
  title: 'RTM Patient Consent Form Template — clinIQ Resources',
  description:
    'HIPAA-compliant RTM consent form template covering monitoring scope, data use, and opt-out rights. Ready to customize for your clinic.',
}

const previewItems = [
  'RTM program description in plain language',
  "Specific data collected and how it's used",
  'Patient rights and opt-out process',
  'Provider responsibilities under the program',
  'Billing disclosure (what insurance covers)',
  'Signature blocks and minor/guardian provisions',
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
    <p className={s.docTitle}>RTM Patient Consent Form Template</p>
    <p className={s.docMeta}>clinIQ Healthcare · March 2026 · Replace all [BRACKET] fields with your clinic information</p>

    <div className={s.infoBox}>
      <p className={s.infoBoxText}>
        Instructions for use: Replace every [BRACKET] field with your clinic's specific information before presenting to patients. Have your legal counsel or compliance officer review before deployment. This template is designed for compliance with HIPAA and CMS Remote Therapeutic Monitoring guidelines (CPT 98975–98981).
      </p>
    </div>

    <div className={s.section}>
      <p className={s.consentHeader}>[CLINIC NAME] — Remote Therapeutic Monitoring (RTM) Program</p>
      <p className={s.consentHeader}>Patient Consent and Authorization Form</p>
      <p className={s.p}>
        Patient Name: <span className={s.sigField}>_______________________________________________</span> &nbsp; Date of Birth: <span className={s.sigField}>_____________________</span>
      </p>
      <p className={s.p}>
        Medical Record Number: <span className={s.sigField}>________________________</span> &nbsp; Date: <span className={s.sigField}>_____________________</span>
      </p>
    </div>

    <div className={s.section}>
      <h2 className={s.sectionH2}>Section 1: What Is Remote Therapeutic Monitoring?</h2>
      <p className={s.p}>
        Remote Therapeutic Monitoring (RTM) is a program that allows your care team at [CLINIC NAME] to monitor your health status between office visits. Through a secure digital application on your smartphone or tablet, you will periodically report information about your symptoms, pain levels, medication adherence, and physical activity.
      </p>
      <p className={s.p}>
        RTM is different from Remote Physiologic Monitoring (RPM). RTM does not require you to use a medical device or collect biometric readings such as blood pressure or glucose. RTM is based on your self-reported health information.
      </p>
      <p className={s.p}>
        Your provider, [PROVIDER NAME, CREDENTIAL], has recommended RTM as part of your treatment plan for: [CONDITION/DIAGNOSIS].
      </p>
    </div>

    <div className={s.section}>
      <h2 className={s.sectionH2}>Section 2: What Information Will Be Collected?</h2>
      <p className={s.p}>Through the RTM program, [CLINIC NAME] will collect the following types of information from you:</p>
      <ul className={s.checklist}>
        <li className={s.checkItem}><span className={s.checkbox} />Daily or weekly symptom reports (pain level, mobility, function)</li>
        <li className={s.checkItem}><span className={s.checkbox} />Medication adherence responses (did you take your medication as prescribed?)</li>
        <li className={s.checkItem}><span className={s.checkbox} />Activity or exercise compliance (did you complete your prescribed exercises?)</li>
        <li className={s.checkItem}><span className={s.checkbox} />Patient-reported outcome measures (standardized questionnaires appropriate to your condition)</li>
        <li className={s.checkItem}><span className={s.checkbox} />Date and time stamps of each data submission</li>
      </ul>
      <p className={s.p}>
        All data is transmitted through [PLATFORM NAME], a HIPAA-compliant health technology platform. [CLINIC NAME] has a signed Business Associate Agreement (BAA) with [PLATFORM NAME] in compliance with 45 CFR 164.308(b).
      </p>
    </div>

    <div className={s.section}>
      <h2 className={s.sectionH2}>Section 3: How Your Information Will Be Used</h2>
      <p className={s.p}>
        Your monitoring data will be reviewed by your care team at [CLINIC NAME]. The purpose of this review is to:
      </p>
      <ul className={s.checklist}>
        <li className={s.checkItem}><span className={s.checkbox} />Track your progress and identify changes in your condition between visits</li>
        <li className={s.checkItem}><span className={s.checkbox} />Adjust your treatment plan based on your reported symptoms or adherence</li>
        <li className={s.checkItem}><span className={s.checkbox} />Contact you proactively if your data suggests a concerning trend</li>
        <li className={s.checkItem}><span className={s.checkbox} />Document clinical management activities required for RTM billing</li>
      </ul>
      <p className={s.p}>
        Your data will not be sold to third parties. Your data will not be used for marketing purposes. Your data will be retained in your medical record in accordance with [STATE] medical record retention laws, a minimum of [X] years from the date of service.
      </p>
    </div>

    <div className={s.section}>
      <h2 className={s.sectionH2}>Section 4: Billing and Insurance</h2>
      <p className={s.p}>
        RTM services are billed to your insurance using the following Medicare CPT codes. Coverage by commercial insurance varies. [CLINIC NAME] will verify your coverage before enrolling you.
      </p>
      <div className={s.tableWrap}>
        <table className={s.table}>
          <thead>
            <tr>
              <th>CPT Code</th>
              <th>Service Description</th>
              <th>Billing Frequency</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>98975</td>
              <td>Initial setup and patient education</td>
              <td>Once per patient enrollment</td>
            </tr>
            <tr>
              <td>98977</td>
              <td>Device supply, musculoskeletal (software/app)</td>
              <td>Once per 30-day period</td>
            </tr>
            <tr>
              <td>98978</td>
              <td>Device supply, respiratory (software/app)</td>
              <td>Once per 30-day period</td>
            </tr>
            <tr>
              <td>98980</td>
              <td>Treatment management, first 20 minutes</td>
              <td>Once per 30-day period</td>
            </tr>
            <tr>
              <td>98981</td>
              <td>Treatment management, each additional 20 minutes</td>
              <td>Per qualifying period</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className={s.p}>
        <strong>16-Day Threshold:</strong> RTM management codes (98980/98981) require that you submit monitoring data on at least 16 of 30 days in a billing period. If you submit fewer than 16 days of data, [CLINIC NAME] will not bill for management services for that period.
      </p>
      <p className={s.p}>
        <strong>Cost-Sharing:</strong> Like other medical services, RTM may be subject to your deductible, copayment, or coinsurance. Your estimated out-of-pocket cost per month is approximately [ESTIMATED AMOUNT], subject to your specific plan benefits. Contact [BILLING CONTACT NAME] at [PHONE NUMBER] with billing questions.
      </p>
    </div>

    <div className={s.section}>
      <h2 className={s.sectionH2}>Section 5: Your Rights and How to Opt Out</h2>
      <p className={s.p}>Participation in the RTM program is voluntary. You have the right to:</p>
      <ul className={s.checklist}>
        <li className={s.checkItem}><span className={s.checkbox} />Decline enrollment in RTM at any time without affecting the quality of your care</li>
        <li className={s.checkItem}><span className={s.checkbox} />Withdraw from the RTM program at any time by notifying your care team</li>
        <li className={s.checkItem}><span className={s.checkbox} />Request a copy of your monitoring data at any time</li>
        <li className={s.checkItem}><span className={s.checkbox} />Request deletion of your data from the RTM platform (subject to medical record retention requirements)</li>
        <li className={s.checkItem}><span className={s.checkbox} />Ask questions about this program before signing</li>
      </ul>
      <p className={s.p}>
        To opt out of RTM, contact [CLINIC NAME] at [PHONE NUMBER] or notify your provider at your next visit. Opting out will stop future RTM billing. Any services already rendered and billed will remain on your account.
      </p>
    </div>

    <div className={s.section}>
      <h2 className={s.sectionH2}>Section 6: For Patients Under 18</h2>
      <p className={s.p}>
        If the patient is under 18 years of age, a parent or legal guardian must sign this consent form. By signing, the parent or guardian confirms they have the legal authority to provide consent on behalf of the minor and agrees to supervise the minor's participation in the RTM program.
      </p>
      <p className={s.p}>
        Parent/Guardian Name: <span className={s.sigField}>_______________________________________________</span>
      </p>
      <p className={s.p}>
        Relationship to Patient: <span className={s.sigField}>________________________</span>
      </p>
    </div>

    <div className={s.section}>
      <h2 className={s.sectionH2}>Section 7: Acknowledgment and Signature</h2>
      <p className={s.p}>
        By signing below, I confirm that: (1) I have read and understand this consent form; (2) I have had the opportunity to ask questions and received satisfactory answers; (3) I voluntarily agree to participate in the RTM program at [CLINIC NAME]; and (4) I understand that I may withdraw consent at any time.
      </p>
      <div className={s.signatureLine}>
        <p className={s.p}>Patient or Authorized Representative Signature: <span className={s.sigField}>_______________________________________</span></p>
        <p className={s.p}>Printed Name: <span className={s.sigField}>_______________________________________</span> &nbsp; Date: <span className={s.sigField}>_____________</span></p>
      </div>
      <div className={s.signatureLine}>
        <p className={s.p}>Staff Witness Signature: <span className={s.sigField}>_______________________________________</span></p>
        <p className={s.p}>Printed Name: <span className={s.sigField}>_______________________________________</span> &nbsp; Date: <span className={s.sigField}>_____________</span></p>
      </div>
      <div className={s.signatureLine}>
        <p className={s.p}>Ordering Provider Signature: <span className={s.sigField}>_______________________________________</span></p>
        <p className={s.p}>NPI: <span className={s.sigField}>___________________</span> &nbsp; Date: <span className={s.sigField}>_____________</span></p>
      </div>
    </div>
  </div>
)

export default function RtmConsentTemplatePage() {
  return (
    <>
      <NavInner />
      <main>
        <ResourceHero
          type="Template"
          title="RTM Patient Consent Form Template"
          subtitle="HIPAA-compliant RTM consent form template covering monitoring scope, data use, and opt-out rights."
        />
        <ResourcePreview items={previewItems} />
        <ResourceForm
          resourceSlug="rtm-consent-template"
          resourceTitle="RTM Patient Consent Form Template"
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
