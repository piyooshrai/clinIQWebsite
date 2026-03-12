import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import ResourceHero from '@/components/ResourceHero'
import ResourcePreview from '@/components/ResourcePreview'
import ResourceForm from '@/components/ResourceForm'
import type { FormField } from '@/components/ResourceForm'
import s from '@/components/ResourceContent.module.css'

export const metadata: Metadata = {
  title: 'RTM Billing Code Reference Card — clinIQ Resources',
  description: 'Quick-reference card for all RTM CPT codes — descriptions, 2025 Medicare rates, documentation requirements, and billing rules.',
}

const previewItems = [
  'Full RTM code set CPT 98975–98981 with plain-English descriptions',
  '2025 Medicare national average reimbursement rates per code',
  'Documentation requirements per code that survive audit',
  '16-day data transmission rule — what counts and how to track it',
  'Billing combinations that work vs. those that trigger automatic denials',
  'Provider type eligibility — which staff can bill which codes',
]

const fields: FormField[] = [
  { name: 'email', label: 'Work email', type: 'email', placeholder: 'you@yourclinic.com', required: true },
  { name: 'specialty', label: 'Your specialty', type: 'select', options: ['Pain Management', 'Physical Therapy', 'Orthopedics', 'Pulmonology / Respiratory', 'Behavioral Health / Psychiatry', 'Primary Care', 'Other'], required: true },
]

const content = (
  <div className={s.doc}>
    <p className={s.docTitle}>RTM Billing Code Reference Card</p>
    <p className={s.docMeta}>clinIQ Healthcare · 2025 Medicare Physician Fee Schedule · CPT codes 98975–98981</p>

    <div className={s.section}>
      <h2 className={s.sectionH2}>Complete RTM Code Set</h2>
      <div className={s.tableWrap}>
        <table className={s.table}>
          <thead><tr><th>CPT</th><th>Full Description</th><th>2025 Medicare Rate</th><th>Bills Per</th><th>Required Documentation</th></tr></thead>
          <tbody>
            <tr>
              <td><span className={s.tealText}>98975</span></td>
              <td>Remote therapeutic monitoring; initial set-up and patient education on use of equipment</td>
              <td>~$18</td>
              <td>Once per episode</td>
              <td>Date of education; topics covered; patient acknowledgment; ordering provider</td>
            </tr>
            <tr>
              <td><span className={s.tealText}>98976</span></td>
              <td>Device supply with scheduled recordings/alerts — respiratory system (e.g., fitting of mouthpiece, cough-assist device)</td>
              <td>~$47/mo</td>
              <td>Monthly</td>
              <td>16+ days of data transmission; respiratory condition ICD-10; device/app type</td>
            </tr>
            <tr>
              <td><span className={s.tealText}>98977</span></td>
              <td>Device supply with scheduled recordings/alerts — musculoskeletal system (e.g., joint pain, motion, gait)</td>
              <td>~$47/mo</td>
              <td>Monthly</td>
              <td>16+ days of data transmission; MSK condition ICD-10; device/app type</td>
            </tr>
            <tr>
              <td><span className={s.tealText}>98978</span></td>
              <td>Device supply with scheduled recordings/alerts — cognitive behavioral therapy (e.g., anxiety, depression, insomnia)</td>
              <td>~$47/mo</td>
              <td>Monthly</td>
              <td>16+ days of data transmission; behavioral health ICD-10 (F-codes); app/platform used</td>
            </tr>
            <tr>
              <td><span className={s.tealText}>98980</span></td>
              <td>Treatment management services; first 20 minutes of qualified provider time in a calendar month</td>
              <td>~$50/mo</td>
              <td>Monthly</td>
              <td>Provider name + credentials; dates of review; total time; clinical summary; one interactive communication documented</td>
            </tr>
            <tr>
              <td><span className={s.tealText}>98981</span></td>
              <td>Treatment management services; each additional 20 minutes (list separately, in addition to 98980)</td>
              <td>~$40/mo</td>
              <td>Monthly (with 98980)</td>
              <td>Same as 98980; additional 20 min must be documented separately; cannot bill without 98980</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div className={s.section}>
      <h2 className={s.sectionH2}>16-Day Data Transmission Rule</h2>
      <p className={s.p}>Device supply codes (98976, 98977, 98978) require that the patient transmit data on at least 16 separate days within the calendar month. This does not mean 16 consecutive days — it is 16 separate calendar days. Data submitted twice in one day counts as one day.</p>
      <div className={s.infoBox}>
        <p className={s.infoBoxText}><strong>What counts as a day of transmission:</strong> Any structured data entry through the RTM platform — pain scores, mood ratings, exercise logs, symptom reports, medication adherence logs. Passive wearable data (steps, heart rate) counts when collected through the RTM app as a scheduled recording. Unsolicited patient messages do not count unless they contain structured health data through the RTM system.</p>
      </div>
    </div>

    <div className={s.section}>
      <h2 className={s.sectionH2}>Valid Billing Combinations</h2>
      <div className={s.tableWrap}>
        <table className={s.table}>
          <thead><tr><th>Combination</th><th>Valid?</th><th>Notes</th></tr></thead>
          <tbody>
            <tr><td>98975 + 98977 + 98980</td><td><span className={s.tag + ' ' + s.tagGreen}>Valid</span></td><td>Setup month for MSK patient — setup, device supply, and management</td></tr>
            <tr><td>98977 + 98980</td><td><span className={s.tag + ' ' + s.tagGreen}>Valid</span></td><td>Ongoing monthly billing for MSK patient (no 98975 after first month)</td></tr>
            <tr><td>98977 + 98980 + 98981</td><td><span className={s.tag + ' ' + s.tagGreen}>Valid</span></td><td>Monthly billing when provider spent 40+ minutes on RTM management</td></tr>
            <tr><td>98976 + 98977 (same patient, same month)</td><td><span className={s.tag + ' ' + s.tagRed}>Invalid</span></td><td>Only one device supply code per patient per month</td></tr>
            <tr><td>98980 without device supply code</td><td><span className={s.tag + ' ' + s.tagRed}>Invalid</span></td><td>Management code requires concurrent device supply code</td></tr>
            <tr><td>98981 without 98980</td><td><span className={s.tag + ' ' + s.tagRed}>Invalid</span></td><td>98981 is add-on to 98980; cannot bill alone</td></tr>
            <tr><td>RTM + RPM (same patient, same month)</td><td><span className={s.tag + ' ' + s.tagRed}>Invalid</span></td><td>Cannot bill both RTM and RPM for the same patient in the same month</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <div className={s.section}>
      <h2 className={s.sectionH2}>Provider Eligibility by Code</h2>
      <div className={s.tableWrap}>
        <table className={s.table}>
          <thead><tr><th>Provider Type</th><th>98975–98978 (Setup + Supply)</th><th>98980–98981 (Management)</th></tr></thead>
          <tbody>
            <tr><td>Physician (MD/DO)</td><td><span className={s.tag + ' ' + s.tagGreen}>Eligible</span></td><td><span className={s.tag + ' ' + s.tagGreen}>Eligible</span></td></tr>
            <tr><td>Nurse Practitioner</td><td><span className={s.tag + ' ' + s.tagGreen}>Eligible</span></td><td><span className={s.tag + ' ' + s.tagGreen}>Eligible</span></td></tr>
            <tr><td>Physician Assistant</td><td><span className={s.tag + ' ' + s.tagGreen}>Eligible</span></td><td><span className={s.tag + ' ' + s.tagGreen}>Eligible</span></td></tr>
            <tr><td>Physical / Occupational Therapist</td><td><span className={s.tag + ' ' + s.tagGreen}>Eligible</span></td><td><span className={s.tag + ' ' + s.tagGreen}>Eligible (within scope)</span></td></tr>
            <tr><td>Clinical Psychologist / Social Worker</td><td><span className={s.tag + ' ' + s.tagGreen}>Eligible (98978)</span></td><td><span className={s.tag + ' ' + s.tagGreen}>Eligible (within scope)</span></td></tr>
            <tr><td>Medical Assistant</td><td><span className={s.tag + ' ' + s.tagYellow}>Setup only (under supervision)</span></td><td><span className={s.tag + ' ' + s.tagRed}>Not eligible — time does not count</span></td></tr>
            <tr><td>RN / LPN</td><td><span className={s.tag + ' ' + s.tagYellow}>Setup only (under supervision)</span></td><td><span className={s.tag + ' ' + s.tagRed}>Not eligible — time does not count</span></td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <div className={s.section}>
      <h2 className={s.sectionH2}>Monthly Billing Timeline</h2>
      <ol className={s.steps}>
        <li className={s.step}><span className={s.stepNum}>1</span><div className={s.stepBody}><p className={s.stepTitle}>Days 1–28: Monitor data submission</p><p className={s.stepDesc}>Track each patient's submission count daily. Flag patients below 12 days with 5+ days remaining — outreach can recover the month.</p></div></li>
        <li className={s.step}><span className={s.stepNum}>2</span><div className={s.stepBody}><p className={s.stepTitle}>End of month: Run compliance report</p><p className={s.stepDesc}>Pull the full list of patients who hit 16+ days. This is your billable cohort for device supply codes.</p></div></li>
        <li className={s.step}><span className={s.stepNum}>3</span><div className={s.stepBody}><p className={s.stepTitle}>Provider review and note completion</p><p className={s.stepDesc}>Qualified provider reviews data for each compliant patient, documents time, findings, and any patient communication. Note must be completed before billing 98980.</p></div></li>
        <li className={s.step}><span className={s.stepNum}>4</span><div className={s.stepBody}><p className={s.stepTitle}>Days 1–5 of following month: Submit claims</p><p className={s.stepDesc}>Bill device supply + management codes. Attach compliance report and time log to claim record (not submitted with claim, but retained for audit).</p></div></li>
        <li className={s.step}><span className={s.stepNum}>5</span><div className={s.stepBody}><p className={s.stepTitle}>30–45 days: First Medicare payment received</p><p className={s.stepDesc}>Commercial payer timelines vary (30–90 days). Track by payer to identify slow payers.</p></div></li>
      </ol>
    </div>
  </div>
)

export default function RTMCodeReferencePage() {
  return (
    <>
      <NavInner />
      <main>
        <ResourceHero type="Reference" title="RTM Billing Code Reference Card" subtitle="Every RTM CPT code in one place — descriptions, Medicare rates, documentation rules, billing combinations, and provider eligibility." />
        <ResourcePreview items={previewItems} />
        <ResourceForm resourceSlug="rtm-code-reference" resourceTitle="RTM Billing Code Reference Card" fields={fields} submitLabel="View the reference card" successMessage="" revealContent={content} />
      </main>
      <FooterInner />
    </>
  )
}
