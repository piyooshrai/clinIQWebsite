import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import ResourceHero from '@/components/ResourceHero'
import ResourcePreview from '@/components/ResourcePreview'
import ResourceForm from '@/components/ResourceForm'
import type { FormField } from '@/components/ResourceForm'
import s from '@/components/ResourceContent.module.css'

export const metadata: Metadata = {
  title: 'Patient Check-In Solutions Comparison Guide — clinIQ Resources',
  description:
    'Compare kiosk, iPad, web, and paper check-in across HIPAA compliance, cost, and patient experience. Includes a decision matrix for your clinic size.',
}

const previewItems = [
  'Four check-in modalities compared side by side',
  'HIPAA compliance scorecard for each',
  'Implementation cost and timeline estimates',
  'Patient satisfaction data by check-in type',
  'Integration requirements by EHR',
  'Decision matrix for your clinic size',
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
    name: 'currentCheckIn',
    label: 'Current check-in method',
    type: 'select',
    options: [
      'Paper forms',
      'Front desk manual entry',
      'Tablet/iPad kiosk',
      'Existing digital solution',
      'None',
    ],
    required: true,
  },
]

const content = (
  <div className={s.doc}>
    <p className={s.docTitle}>Patient Check-In Solutions Comparison Guide</p>
    <p className={s.docMeta}>clinIQ Healthcare · March 2026</p>

    <div className={s.section}>
      <p className={s.p}>
        The check-in method you choose affects patient experience, staff workload, insurance accuracy, and HIPAA risk simultaneously. This guide compares the four most common approaches so you can make an evidence-based decision for your clinic's volume, budget, and patient demographics.
      </p>
    </div>

    <div className={s.section}>
      <h2 className={s.sectionH2}>Method Comparison</h2>
      <div className={s.tableWrap}>
        <table className={s.table}>
          <thead>
            <tr>
              <th>Method</th>
              <th>Check-in Time</th>
              <th>Staff Required</th>
              <th>Insurance Accuracy</th>
              <th>HIPAA Considerations</th>
              <th>Upfront Cost</th>
              <th>Best For</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Staff-assisted manual</strong></td>
              <td>8–12 min</td>
              <td>1 FTE dedicated</td>
              <td>87–90%</td>
              <td>Standard (verbal PHI at desk)</td>
              <td>$0</td>
              <td>Very low volume (&lt;15 pts/day)</td>
            </tr>
            <tr>
              <td><strong>Tablet/iPad kiosk</strong></td>
              <td>3–5 min</td>
              <td>0.25 FTE (oversight only)</td>
              <td>92–96% with OCR</td>
              <td>BAA required with kiosk vendor</td>
              <td>$800–$2,000/device</td>
              <td>Moderate volume, established patient-heavy</td>
            </tr>
            <tr>
              <td><strong>Web/phone pre-arrival</strong></td>
              <td>1–2 min day-of</td>
              <td>0.1 FTE (exception handling)</td>
              <td>94–97% with eligibility check</td>
              <td>BAA required; encrypted data transmission</td>
              <td>Varies by vendor ($0–$500/mo SaaS)</td>
              <td>All clinic types with scheduled appointments</td>
            </tr>
            <tr>
              <td><strong>Paper forms</strong></td>
              <td>10–15 min</td>
              <td>1 FTE (scanning/entry)</td>
              <td>75–80%</td>
              <td>No digital transmission risk; physical storage risk</td>
              <td>$0 (print costs only)</td>
              <td>Rural/low-tech patient populations</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div className={s.section}>
      <h2 className={s.sectionH2}>Decision Matrix by Clinic Size and Volume</h2>
      <div className={s.twoCol}>
        <div className={s.colCard}>
          <p className={s.colCardTitle}>Small Clinics (1–5 providers, &lt;40 pts/day)</p>
          <p className={s.p}>
            Web/phone pre-arrival check-in delivers the highest return for small clinics. The upfront cost is lowest, the implementation timeline is under two weeks, and it eliminates the need for dedicated check-in staff during slow periods. Supplement with paper forms for patients who cannot use digital intake.
          </p>
          <p className={s.p}>
            <span className={`${s.tag} ${s.tagGreen}`}>Recommended: Web pre-arrival</span>
          </p>
        </div>
        <div className={s.colCard}>
          <p className={s.colCardTitle}>Mid-Size Clinics (6–15 providers, 40–120 pts/day)</p>
          <p className={s.p}>
            A combination of web pre-arrival (for scheduled patients) and tablet kiosks (for walk-ins and non-compliant pre-arrivals) typically performs best. The kiosk handles overflow and maintains fast check-in times during peak hours. Plan for 1 kiosk per 30 anticipated daily walk-in patients.
          </p>
          <p className={s.p}>
            <span className={`${s.tag} ${s.tagGreen}`}>Recommended: Web pre-arrival + kiosk hybrid</span>
          </p>
        </div>
      </div>
      <div className={s.twoCol}>
        <div className={s.colCard}>
          <p className={s.colCardTitle}>Large Clinics (16+ providers, 120+ pts/day)</p>
          <p className={s.p}>
            Large-volume clinics require end-to-end digital check-in with EHR integration. Pre-arrival completion rates above 70% are achievable with proper patient communication. Remaining patients use kiosks. Manual staff-assisted check-in at this volume creates unmanageable bottlenecks and is not a viable primary method.
          </p>
          <p className={s.p}>
            <span className={`${s.tag} ${s.tagGreen}`}>Recommended: Full digital with kiosk fallback</span>
          </p>
        </div>
        <div className={s.colCard}>
          <p className={s.colCardTitle}>Rural or Low-Technology Populations</p>
          <p className={s.p}>
            Paper check-in remains appropriate as a primary method when your patient population has low smartphone adoption rates (&lt;60%), limited broadband access, or significant language barriers. Layer in a simple phone-based check-in option for patients who do have mobile access. Do not force digital check-in on populations not ready for it.
          </p>
          <p className={s.p}>
            <span className={`${s.tag} ${s.tagYellow}`}>Recommended: Paper primary, phone secondary</span>
          </p>
        </div>
      </div>
    </div>

    <div className={s.section}>
      <h2 className={s.sectionH2}>EHR Integration Requirements</h2>
      <div className={s.tableWrap}>
        <table className={s.table}>
          <thead>
            <tr>
              <th>EHR</th>
              <th>Native Check-in Feature</th>
              <th>API Integration Available</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Epic</td>
              <td>MyChart pre-arrival</td>
              <td>Yes (SMART on FHIR)</td>
              <td>MyChart covers most use cases; third-party integrations via App Orchard</td>
            </tr>
            <tr>
              <td>Athenahealth</td>
              <td>Phreesia integration standard</td>
              <td>Yes (athenaCommunicator)</td>
              <td>Strong pre-arrival workflow; API partners available in Marketplace</td>
            </tr>
            <tr>
              <td>eClinicalWorks</td>
              <td>Healow patient portal</td>
              <td>Yes (healow APIs)</td>
              <td>Healow kiosk option available; third-party kiosk integration requires custom work</td>
            </tr>
            <tr>
              <td>Kareo/Tebra</td>
              <td>Limited native check-in</td>
              <td>Yes (REST API)</td>
              <td>Third-party digital check-in tools typically required for full functionality</td>
            </tr>
            <tr>
              <td>NextGen</td>
              <td>Patient portal check-in</td>
              <td>Yes (NextGen APIs)</td>
              <td>Solid EHR integration; pre-arrival workflows require configuration</td>
            </tr>
            <tr>
              <td>DrChrono</td>
              <td>iPad kiosk native</td>
              <td>Yes (DrChrono API)</td>
              <td>Strong iPad kiosk experience out of the box</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div className={s.section}>
      <h2 className={s.sectionH2}>Implementation Timeline Comparison</h2>
      <div className={s.tableWrap}>
        <table className={s.table}>
          <thead>
            <tr>
              <th>Method</th>
              <th>Decision to Live</th>
              <th>Staff Training Time</th>
              <th>Patient Communication Required</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Paper forms</td>
              <td>Same day</td>
              <td>1 hour</td>
              <td>None</td>
            </tr>
            <tr>
              <td>Staff-assisted manual (EHR)</td>
              <td>1–2 weeks</td>
              <td>4–8 hours</td>
              <td>Minimal</td>
            </tr>
            <tr>
              <td>Tablet/iPad kiosk</td>
              <td>2–4 weeks</td>
              <td>2–4 hours</td>
              <td>Lobby signage and brief verbal instruction</td>
            </tr>
            <tr>
              <td>Web/phone pre-arrival</td>
              <td>1–3 weeks</td>
              <td>2 hours</td>
              <td>Appointment confirmation message, 1-week advance notice email</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className={s.p}>
        The implementation timeline for web or tablet check-in is primarily driven by EHR integration testing, not staff training. If your chosen solution has a native EHR integration, plan for 2–3 weeks. If custom API integration is required, plan for 6–10 weeks.
      </p>
    </div>
  </div>
)

export default function CheckInComparisonGuidePage() {
  return (
    <>
      <NavInner />
      <main>
        <ResourceHero
          type="Guide"
          title="Patient Check-In Solutions Comparison Guide"
          subtitle="Compare kiosk, iPad, web, and paper check-in across HIPAA compliance, cost, and patient experience."
        />
        <ResourcePreview items={previewItems} />
        <ResourceForm
          resourceSlug="check-in-comparison-guide"
          resourceTitle="Patient Check-In Solutions Comparison Guide"
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
