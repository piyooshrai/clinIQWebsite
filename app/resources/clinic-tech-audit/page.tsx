import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import ResourceHero from '@/components/ResourceHero'
import ResourcePreview from '@/components/ResourcePreview'
import ResourceForm from '@/components/ResourceForm'
import type { FormField } from '@/components/ResourceForm'
import s from '@/components/ResourceContent.module.css'

export const metadata: Metadata = {
  title: 'Clinic Technology Stack Audit — clinIQ Resources',
  description:
    'Evaluate your EHR, scheduling, check-in, billing, and patient engagement tools. Identify gaps, redundancies, and integration opportunities.',
}

const previewItems = [
  'EHR assessment — API availability, integration maturity, and data export capabilities that determine what you can add on top',
  'Patient check-in audit — paper vs. digital, insurance capture accuracy rates, and check-in time benchmarks by method',
  'Scheduling system evaluation — online booking availability, reminder automation, and no-show rate by current method',
  'Billing and revenue cycle gaps — denial rate benchmarks, claim scrubbing quality, and A/R aging red flags',
  'Patient communication tools — secure messaging, portal engagement rates, and missed communication opportunities',
  'RTM and remote monitoring readiness — whether your current stack supports compliant RTM billing or blocks it',
  'Integration map — which tools talk to each other, which require manual data re-entry, and where staff time is lost',
  'Technology cost-per-patient analysis — how to calculate your current spend and identify consolidation opportunities',
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
    options: ['CEO / Medical Director', 'Operations Manager', 'IT / Health IT', 'Practice Administrator', 'Billing Manager', 'Other'],
    required: true,
  },
  {
    name: 'currentEHR',
    label: 'Primary EHR',
    type: 'text',
    placeholder: 'e.g. Epic, Athena, eClinicalWorks…',
    required: false,
  },
]

const content = (
  <div className={s.doc}>
    <p className={s.docTitle}>Clinic Technology Stack Audit</p>
    <p className={s.docMeta}>clinIQ Healthcare · Evaluate your full tech stack against operational benchmarks</p>

    <div className={s.section}>
      <h2 className={s.sectionH2}>How to Use This Audit</h2>
      <p className={s.p}>Work through each section and rate your current setup. <span className={s.tag + ' ' + s.tagGreen}>Strong</span> means it works well and requires no near-term action. <span className={s.tag + ' ' + s.tagYellow}>Gap</span> means it works but has meaningful room for improvement. <span className={s.tag + ' ' + s.tagRed}>Missing</span> means you lack this capability or it regularly fails. Focus on any domain where you mark two or more items as Missing.</p>
    </div>

    <div className={s.section}>
      <h2 className={s.sectionH2}>EHR Foundation</h2>
      <p className={s.p}>Your EHR determines what every other tool in your stack can do. API availability and data quality are the most important factors when evaluating add-ons.</p>
      <div className={s.tableWrap}>
        <table className={s.table}>
          <thead><tr><th>Capability</th><th>What to check</th><th>Your rating</th></tr></thead>
          <tbody>
            <tr>
              <td>API / integration access</td>
              <td>Does your EHR have a published API (HL7 FHIR preferred)? Can third-party tools read and write data without manual export?</td>
              <td><span className={s.tag + ' ' + s.tagYellow}>Strong / Gap / Missing</span></td>
            </tr>
            <tr>
              <td>Discrete data capture</td>
              <td>Are clinical data points (vitals, diagnoses, medications) in structured fields — or mostly free-text notes?</td>
              <td><span className={s.tag + ' ' + s.tagYellow}>Strong / Gap / Missing</span></td>
            </tr>
            <tr>
              <td>Reporting and analytics</td>
              <td>Can you pull population reports (e.g., diabetics with HbA1c &gt;9) without IT involvement?</td>
              <td><span className={s.tag + ' ' + s.tagYellow}>Strong / Gap / Missing</span></td>
            </tr>
            <tr>
              <td>Patient portal</td>
              <td>Do patients actively use the portal? What is your active portal user percentage?</td>
              <td><span className={s.tag + ' ' + s.tagYellow}>Strong / Gap / Missing</span></td>
            </tr>
            <tr>
              <td>Mobile access</td>
              <td>Can providers access charts and complete notes on mobile without VPN issues?</td>
              <td><span className={s.tag + ' ' + s.tagYellow}>Strong / Gap / Missing</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div className={s.section}>
      <h2 className={s.sectionH2}>Patient Check-In</h2>
      <div className={s.tableWrap}>
        <table className={s.table}>
          <thead><tr><th>Method</th><th>Avg. check-in time</th><th>Insurance capture accuracy</th><th>Staff required</th></tr></thead>
          <tbody>
            <tr><td>Paper forms (clipboard)</td><td>10–15 min</td><td>60–70% (transcription errors)</td><td>1 FTE minimum</td></tr>
            <tr><td>Staff-entered at window</td><td>6–10 min</td><td>75–85%</td><td>1 FTE minimum</td></tr>
            <tr><td>Kiosk / tablet check-in</td><td>3–5 min</td><td>85–92%</td><td>Minimal (escalation only)</td></tr>
            <tr><td>Mobile pre-check-in (before arrival)</td><td>Under 2 min at window</td><td>92–97%</td><td>Minimal</td></tr>
          </tbody>
        </table>
      </div>
      <ul className={s.checklist}>
        <li className={s.checkItem}><span className={s.checkbox} /> Insurance eligibility is verified electronically before or at check-in — not discovered at billing</li>
        <li className={s.checkItem}><span className={s.checkbox} /> Patient demographics are confirmed at every visit — not just at enrollment</li>
        <li className={s.checkItem}><span className={s.checkbox} /> Co-pay and patient balance are collected at check-in — not after the visit</li>
        <li className={s.checkItem}><span className={s.checkbox} /> Check-in data flows directly into EHR — no manual transcription step</li>
        <li className={s.checkItem}><span className={s.checkbox} /> Consent forms are captured digitally — not re-printed and scanned</li>
      </ul>
    </div>

    <div className={s.section}>
      <h2 className={s.sectionH2}>Scheduling System</h2>
      <ul className={s.checklist}>
        <li className={s.checkItem}><span className={s.checkbox} /> Patients can book appointments online without calling — 24/7 self-scheduling available</li>
        <li className={s.checkItem}><span className={s.checkbox} /> Automated appointment reminders are sent via SMS and/or email — not manual staff calls</li>
        <li className={s.checkItem}><span className={s.checkbox} /> No-show rate is tracked per provider and appointment type — not just overall</li>
        <li className={s.checkItem}><span className={s.checkbox} /> Waitlist management is automated — cancellations auto-fill from a digital waitlist</li>
        <li className={s.checkItem}><span className={s.checkbox} /> Scheduling rules enforce correct visit types and provider restrictions</li>
        <li className={s.checkItem}><span className={s.checkbox} /> Double-booking behavior is intentional and controlled — not accidental</li>
      </ul>
    </div>

    <div className={s.section}>
      <h2 className={s.sectionH2}>Billing and Revenue Cycle</h2>
      <ul className={s.checklist}>
        <li className={s.checkItem}><span className={s.checkbox} /> First-pass claim acceptance rate is above 95% — below this indicates coding or eligibility issues</li>
        <li className={s.checkItem}><span className={s.checkbox} /> Denial rate by payer is tracked monthly — you know which payers deny most often and why</li>
        <li className={s.checkItem}><span className={s.checkbox} /> A/R over 90 days is below 15% of total A/R</li>
        <li className={s.checkItem}><span className={s.checkbox} /> Claims are scrubbed before submission — not submitted and corrected after denial</li>
        <li className={s.checkItem}><span className={s.checkbox} /> ERA (Electronic Remittance Advice) posts automatically — no manual ERA entry</li>
        <li className={s.checkItem}><span className={s.checkbox} /> Patient statements are generated and delivered electronically</li>
      </ul>
    </div>

    <div className={s.section}>
      <h2 className={s.sectionH2}>RTM / Remote Monitoring Readiness</h2>
      <p className={s.p}>If you have chronic-condition patients and bill (or want to bill) RTM codes 98975–98981, your current tech stack either enables or blocks compliant billing.</p>
      <ul className={s.checklist}>
        <li className={s.checkItem}><span className={s.checkbox} /> You have a platform that tracks 16+ days of patient data per month per patient</li>
        <li className={s.checkItem}><span className={s.checkbox} /> RTM data is structured — day counts are automatically generated, not manually tracked</li>
        <li className={s.checkItem}><span className={s.checkbox} /> Provider review time for RTM is documented in minutes within the platform</li>
        <li className={s.checkItem}><span className={s.checkbox} /> Interactive communication with RTM patients is logged and timestamped</li>
        <li className={s.checkItem}><span className={s.checkbox} /> Billing triggers are automated — you know which patients hit the 16-day threshold each month</li>
      </ul>
    </div>

    <div className={s.section}>
      <h2 className={s.sectionH2}>Integration Map — Where Staff Time Is Lost</h2>
      <p className={s.p}>For each tool pair below, mark whether data flows automatically or requires manual re-entry. Any manual step costs approximately 2–5 minutes of staff time per patient encounter.</p>
      <div className={s.tableWrap}>
        <table className={s.table}>
          <thead><tr><th>Tool A</th><th>Tool B</th><th>Status</th><th>Time cost if manual</th></tr></thead>
          <tbody>
            <tr><td>Check-in system</td><td>EHR</td><td><span className={s.tag + ' ' + s.tagYellow}>Integrated / Manual / N/A</span></td><td>3–5 min per patient</td></tr>
            <tr><td>Scheduling system</td><td>EHR</td><td><span className={s.tag + ' ' + s.tagYellow}>Integrated / Manual / N/A</span></td><td>2–3 min per appointment</td></tr>
            <tr><td>Eligibility verification</td><td>Billing system</td><td><span className={s.tag + ' ' + s.tagYellow}>Integrated / Manual / N/A</span></td><td>4–6 min per patient</td></tr>
            <tr><td>Lab results</td><td>EHR</td><td><span className={s.tag + ' ' + s.tagYellow}>Integrated / Manual / N/A</span></td><td>2–4 min per result</td></tr>
            <tr><td>RTM platform</td><td>EHR / billing</td><td><span className={s.tag + ' ' + s.tagYellow}>Integrated / Manual / N/A</span></td><td>5–10 min per patient/month</td></tr>
            <tr><td>Patient communication</td><td>EHR</td><td><span className={s.tag + ' ' + s.tagYellow}>Integrated / Manual / N/A</span></td><td>2–3 min per message thread</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
)

export default function ClinicTechAuditPage() {
  return (
    <>
      <NavInner />
      <main>
        <ResourceHero
          type="Checklist"
          title="Clinic Technology Stack Audit"
          subtitle="Evaluate every tool in your clinic tech stack — EHR, scheduling, check-in, billing, and patient engagement. Find the gaps that are costing you time and revenue."
        />
        <ResourcePreview items={previewItems} />
        <ResourceForm
          resourceSlug="clinic-tech-audit"
          resourceTitle="Clinic Technology Stack Audit"
          fields={fields}
          submitLabel="Get the audit checklist"
          successMessage=""
          revealContent={content}
        />
      </main>
      <FooterInner />
    </>
  )
}
