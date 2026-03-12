import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import ResourceHero from '@/components/ResourceHero'
import ResourcePreview from '@/components/ResourcePreview'
import ResourceForm from '@/components/ResourceForm'
import type { FormField } from '@/components/ResourceForm'
import s from '@/components/ResourceContent.module.css'

export const metadata: Metadata = {
  title: 'RTM Payer Coverage Matrix 2026 — clinIQ Resources',
  description:
    'Which payers cover RTM codes in 2026 — and what each requires for reimbursement. Medicare, commercial, and Medicaid coverage with denial prevention checklists.',
}

const previewItems = [
  'Medicare RTM coverage and 2025 national average rates for CPT 98975–98981',
  'Top 10 commercial payer RTM policies — UHC, Anthem, Aetna, Cigna, BCBS, Humana, and more',
  'State Medicaid RTM coverage status by region',
  'Documentation requirements that differ by payer',
  'Denial prevention checklist — what each payer requires on first submission',
  'Appeals guidance for the most common RTM denial reasons',
]

const fields: FormField[] = [
  { name: 'email', label: 'Work email', type: 'email', placeholder: 'you@yourclinic.com', required: true },
  { name: 'role', label: 'Your role', type: 'select', options: ['Administrator', 'Office Manager', 'Provider', 'Billing / Coding', 'Other'], required: true },
  { name: 'clinicSize', label: 'Clinic size', type: 'select', options: ['1–5 providers', '6–15 providers', '16+ providers'], required: true },
  { name: 'primaryPayer', label: 'Primary payer mix', type: 'select', options: ['Medicare', 'Medicaid', 'Commercial (BCBS/Aetna/UHC)', 'Multiple payers', 'Self-pay'], required: true },
]

const content = (
  <div className={s.doc}>
    <p className={s.docTitle}>RTM Payer Coverage Matrix 2026</p>
    <p className={s.docMeta}>clinIQ Healthcare · Updated March 2026 · Based on CMS 2025 PFS and payer policy publications</p>

    <div className={s.section}>
      <h2 className={s.sectionH2}>Medicare Coverage — CPT 98975–98981</h2>
      <p className={s.p}>Medicare covers all RTM codes under the Physician Fee Schedule when billed by eligible providers. Rates below are 2025 national averages before Geographic Practice Cost Index (GPCI) adjustments. Practices in high-cost markets typically receive 10–15% above these figures.</p>
      <div className={s.tableWrap}>
        <table className={s.table}>
          <thead>
            <tr>
              <th>CPT Code</th>
              <th>Description</th>
              <th>2025 Medicare Rate</th>
              <th>Billing Frequency</th>
              <th>Key Requirement</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span className={s.tealText}>98975</span></td>
              <td>Initial set-up and patient education</td>
              <td>~$18</td>
              <td>Once per episode of care</td>
              <td>Document education provided; billed separately from first supply code</td>
            </tr>
            <tr>
              <td><span className={s.tealText}>98976</span></td>
              <td>Device supply — respiratory system (monthly)</td>
              <td>~$47</td>
              <td>Monthly (one per 30 days)</td>
              <td>16+ days of data transmission in calendar month</td>
            </tr>
            <tr>
              <td><span className={s.tealText}>98977</span></td>
              <td>Device supply — musculoskeletal system (monthly)</td>
              <td>~$47</td>
              <td>Monthly (one per 30 days)</td>
              <td>16+ days of data transmission in calendar month</td>
            </tr>
            <tr>
              <td><span className={s.tealText}>98978</span></td>
              <td>Device supply — cognitive behavioral therapy (monthly)</td>
              <td>~$47</td>
              <td>Monthly (one per 30 days)</td>
              <td>16+ days of data transmission; qualifying behavioral health diagnosis required</td>
            </tr>
            <tr>
              <td><span className={s.tealText}>98980</span></td>
              <td>Treatment management — first 20 minutes</td>
              <td>~$50</td>
              <td>Monthly (one per 30 days)</td>
              <td>Qualified provider time; interactive communication with patient required at least once</td>
            </tr>
            <tr>
              <td><span className={s.tealText}>98981</span></td>
              <td>Treatment management — each additional 20 minutes</td>
              <td>~$40</td>
              <td>Monthly (with 98980)</td>
              <td>Cannot bill without 98980; requires documented additional 20 min of qualified provider time</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={s.infoBox}>
        <p className={s.infoBoxText}><strong>Device supply codes are mutually exclusive per patient per month.</strong> Bill only one of 98976, 98977, or 98978 per patient per billing period — the code that matches the primary monitoring condition. Billing multiple device supply codes for the same patient in the same month will result in denial.</p>
      </div>
    </div>

    <div className={s.section}>
      <h2 className={s.sectionH2}>Commercial Payer Coverage — Top 10 Payers</h2>
      <p className={s.p}>Commercial coverage for RTM varies significantly by payer and plan. The table below reflects published policies as of early 2026. Always verify with individual plan contracts before billing.</p>
      <div className={s.tableWrap}>
        <table className={s.table}>
          <thead>
            <tr>
              <th>Payer</th>
              <th>RTM Coverage</th>
              <th>Covered Codes</th>
              <th>Prior Auth Required</th>
              <th>Key Policy Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Medicare / CMS</strong></td>
              <td><span className={s.tag + ' ' + s.tagGreen}>Covered</span></td>
              <td>98975–98981</td>
              <td>No</td>
              <td>Follow CMS LCD guidelines; 16-day threshold strictly enforced on audit</td>
            </tr>
            <tr>
              <td><strong>UnitedHealthcare</strong></td>
              <td><span className={s.tag + ' ' + s.tagGreen}>Covered</span></td>
              <td>98975–98981</td>
              <td>No (most plans)</td>
              <td>Follows Medicare rules; some MA plans require notification within 30 days of enrollment</td>
            </tr>
            <tr>
              <td><strong>Anthem / Elevance</strong></td>
              <td><span className={s.tag + ' ' + s.tagGreen}>Covered</span></td>
              <td>98975–98981</td>
              <td>No</td>
              <td>Reimburses at Medicare-equivalent rates for most commercial plans; verify MA plan contracts</td>
            </tr>
            <tr>
              <td><strong>Aetna / CVS Health</strong></td>
              <td><span className={s.tag + ' ' + s.tagGreen}>Covered</span></td>
              <td>98975–98981</td>
              <td>No</td>
              <td>Clinical Policy Bulletin requires documented medical necessity for each enrolled patient</td>
            </tr>
            <tr>
              <td><strong>Cigna</strong></td>
              <td><span className={s.tag + ' ' + s.tagGreen}>Covered</span></td>
              <td>98975–98981</td>
              <td>No</td>
              <td>Coverage Medical Policy requires treating provider ordering; telehealth modifier may be needed for remote reviews</td>
            </tr>
            <tr>
              <td><strong>Humana</strong></td>
              <td><span className={s.tag + ' ' + s.tagGreen}>Covered</span></td>
              <td>98975–98981</td>
              <td>No</td>
              <td>MA plans: verify individual plan benefit; commercial plans follow Medicare LCD</td>
            </tr>
            <tr>
              <td><strong>BCBS (most plans)</strong></td>
              <td><span className={s.tag + ' ' + s.tagYellow}>Varies by plan</span></td>
              <td>98975–98981</td>
              <td>Some plans</td>
              <td>Coverage varies by Blue plan; BCBS Federal Employee Program covers RTM; local plan verification required</td>
            </tr>
            <tr>
              <td><strong>Molina Healthcare</strong></td>
              <td><span className={s.tag + ' ' + s.tagYellow}>Medicaid MA</span></td>
              <td>98976, 98977, 98980, 98981</td>
              <td>Some states</td>
              <td>Coverage primarily through Medicaid managed care contracts; varies by state</td>
            </tr>
            <tr>
              <td><strong>Centene / WellCare</strong></td>
              <td><span className={s.tag + ' ' + s.tagYellow}>Medicaid MA</span></td>
              <td>98976, 98977, 98980, 98981</td>
              <td>Some states</td>
              <td>State-specific Medicaid contracts; contact state plan for coverage confirmation</td>
            </tr>
            <tr>
              <td><strong>Kaiser Permanente</strong></td>
              <td><span className={s.tag + ' ' + s.tagYellow}>Internal review</span></td>
              <td>Varies</td>
              <td>Yes</td>
              <td>Integrated model — RTM billing through internal workflows; contact regional medical director</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div className={s.section}>
      <h2 className={s.sectionH2}>State Medicaid RTM Coverage</h2>
      <p className={s.p}>Fee-for-service Medicaid RTM coverage is determined state-by-state. Coverage has expanded significantly since 2023. The following represents the landscape as of early 2026 — always confirm with your state Medicaid agency or MAC.</p>
      <div className={s.twoCol}>
        <div className={s.colCard}>
          <p className={s.colCardTitle}><span className={s.tag + ' ' + s.tagGreen}>Generally Covered</span></p>
          <p className={s.p} style={{fontSize:'0.875rem'}}>California, Texas, Florida, New York, Pennsylvania, Ohio, Illinois, Michigan, Georgia, North Carolina, Virginia, Washington, Colorado, Oregon, Minnesota, Wisconsin, Arizona, Nevada</p>
        </div>
        <div className={s.colCard}>
          <p className={s.colCardTitle}><span className={s.tag + ' ' + s.tagYellow}>Verify Before Billing</span></p>
          <p className={s.p} style={{fontSize:'0.875rem'}}>All remaining states — coverage is expanding but state policies change frequently. Check your state Medicaid fee schedule or contact your MAC before enrolling Medicaid patients in RTM.</p>
        </div>
      </div>
    </div>

    <div className={s.section}>
      <h2 className={s.sectionH2}>Documentation Requirements by Payer</h2>
      <p className={s.p}>While the underlying documentation requirements are similar across payers, the following differences are worth noting for first-pass approval:</p>
      <div className={s.tableWrap}>
        <table className={s.table}>
          <thead>
            <tr><th>Requirement</th><th>Medicare</th><th>UHC / Anthem / Aetna / Cigna</th><th>BCBS (verify by plan)</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>Written order for RTM</td>
              <td><span className={s.tag + ' ' + s.tagGreen}>Required</span></td>
              <td><span className={s.tag + ' ' + s.tagGreen}>Required</span></td>
              <td><span className={s.tag + ' ' + s.tagGreen}>Required</span></td>
            </tr>
            <tr>
              <td>Patient consent documented</td>
              <td><span className={s.tag + ' ' + s.tagGreen}>Required</span></td>
              <td><span className={s.tag + ' ' + s.tagGreen}>Required</span></td>
              <td><span className={s.tag + ' ' + s.tagGreen}>Required</span></td>
            </tr>
            <tr>
              <td>16-day data threshold evidence</td>
              <td><span className={s.tag + ' ' + s.tagGreen}>Required</span></td>
              <td><span className={s.tag + ' ' + s.tagGreen}>Required</span></td>
              <td><span className={s.tag + ' ' + s.tagGreen}>Required</span></td>
            </tr>
            <tr>
              <td>Interactive communication with patient</td>
              <td><span className={s.tag + ' ' + s.tagGreen}>Required (98980)</span></td>
              <td><span className={s.tag + ' ' + s.tagGreen}>Required (98980)</span></td>
              <td><span className={s.tag + ' ' + s.tagGreen}>Required (98980)</span></td>
            </tr>
            <tr>
              <td>Qualified provider performing review</td>
              <td><span className={s.tag + ' ' + s.tagGreen}>Required</span></td>
              <td><span className={s.tag + ' ' + s.tagGreen}>Required</span></td>
              <td><span className={s.tag + ' ' + s.tagGreen}>Required</span></td>
            </tr>
            <tr>
              <td>Separate from CCM / RPM billing</td>
              <td><span className={s.tag + ' ' + s.tagGreen}>Required</span></td>
              <td><span className={s.tag + ' ' + s.tagYellow}>Some plans may allow concurrent</span></td>
              <td><span className={s.tag + ' ' + s.tagYellow}>Verify by plan</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div className={s.section}>
      <h2 className={s.sectionH2}>First-Submission Denial Prevention Checklist</h2>
      <p className={s.p}>The most common RTM denial reasons are preventable. Run this checklist before each billing cycle.</p>
      <div className={s.phase}>
        <p className={s.phaseTitle}>Before billing</p>
        <ul className={s.checklist}>
          <li className={s.checkItem}><span className={s.checkbox} /> Confirm patient had 16+ days of qualifying data transmission in the calendar month</li>
          <li className={s.checkItem}><span className={s.checkbox} /> Verify only one device supply code (98976, 98977, or 98978) is billed per patient per month</li>
          <li className={s.checkItem}><span className={s.checkbox} /> Confirm 98980 is present before billing 98981</li>
          <li className={s.checkItem}><span className={s.checkbox} /> Verify provider credentials — confirm billing provider is eligible for RTM under payer policy</li>
          <li className={s.checkItem}><span className={s.checkbox} /> Check that patient consent is documented in the chart</li>
          <li className={s.checkItem}><span className={s.checkbox} /> Verify RTM order is in the chart (written order from treating provider)</li>
        </ul>
      </div>
      <div className={s.phase}>
        <p className={s.phaseTitle}>Documentation in chart</p>
        <ul className={s.checklist}>
          <li className={s.checkItem}><span className={s.checkbox} /> Time log showing total minutes of qualified provider review for the month</li>
          <li className={s.checkItem}><span className={s.checkbox} /> Record of at least one interactive communication with patient or caregiver</li>
          <li className={s.checkItem}><span className={s.checkbox} /> Clinical note summarizing RTM findings and any actions taken</li>
          <li className={s.checkItem}><span className={s.checkbox} /> ICD-10 diagnosis code that supports RTM monitoring (chronic condition, active treatment)</li>
        </ul>
      </div>
    </div>
  </div>
)

export default function RtmPayerMatrixPage() {
  return (
    <>
      <NavInner />
      <main>
        <ResourceHero type="Guide" title="RTM Payer Coverage Matrix 2026" subtitle="Which payers cover RTM codes in 2026 — and what each requires for reimbursement." />
        <ResourcePreview items={previewItems} />
        <ResourceForm resourceSlug="rtm-payer-matrix" resourceTitle="RTM Payer Coverage Matrix 2026" fields={fields} submitLabel="View the matrix" successMessage="" revealContent={content} />
      </main>
      <FooterInner />
    </>
  )
}
