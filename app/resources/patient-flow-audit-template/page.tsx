import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import ResourceHero from '@/components/ResourceHero'
import ResourcePreview from '@/components/ResourcePreview'
import ResourceForm from '@/components/ResourceForm'
import type { FormField } from '@/components/ResourceForm'
import s from '@/components/ResourceContent.module.css'

export const metadata: Metadata = {
  title: 'Patient Flow Audit Template — clinIQ Resources',
  description:
    'Measure your current patient flow, identify bottlenecks, and prioritize fixes. Includes time-motion study sheets, bottleneck scoring, and a 90-day roadmap.',
}

const previewItems = [
  'Current state flow mapping worksheet',
  'Bottleneck scoring matrix (1–5 severity)',
  'Time-motion study data collection sheet',
  'Staff role and responsibility audit',
  'Technology gap analysis',
  '90-day improvement roadmap template',
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
    <p className={s.docTitle}>Patient Flow Audit Template</p>
    <p className={s.docMeta}>clinIQ Healthcare · March 2026 · Complete all four steps over 1–2 weeks</p>

    <div className={s.section}>
      <p className={s.p}>
        This audit is designed to be completed by a clinic manager or operations lead over one to two weeks. Steps 1 and 2 require direct observation and data collection. Steps 3 and 4 are analysis and planning steps that can be completed at a desk. The output is a prioritized list of improvement projects and a 90-day roadmap.
      </p>
    </div>

    <div className={s.section}>
      <h2 className={s.sectionH2}>Step 1: Current State Measurement</h2>
      <p className={s.p}>
        For each stage of your patient flow, record the current average time, your internal target, the staff involved, and what technology (if any) is used. Observe and time at least 20 patient encounters across different times of day and days of the week for accurate averages.
      </p>
      <div className={s.tableWrap}>
        <table className={s.table}>
          <thead>
            <tr>
              <th>Stage</th>
              <th>Current Average Time</th>
              <th>Target Time</th>
              <th>Staff Involved</th>
              <th>Technology Used</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Arrival to check-in start</td>
              <td className={s.tealText}>Record here _____ min</td>
              <td>&lt;2 min</td>
              <td>Front desk</td>
              <td>Kiosk / portal / paper</td>
            </tr>
            <tr>
              <td>Check-in to rooming</td>
              <td className={s.tealText}>Record here _____ min</td>
              <td>&lt;15 min</td>
              <td>MA / triage nurse</td>
              <td>EHR / queue system</td>
            </tr>
            <tr>
              <td>Rooming to provider</td>
              <td className={s.tealText}>Record here _____ min</td>
              <td>&lt;8 min</td>
              <td>Provider</td>
              <td>Dashboard notification</td>
            </tr>
            <tr>
              <td>Provider to discharge</td>
              <td className={s.tealText}>Record here _____ min</td>
              <td>Specialty-specific</td>
              <td>Provider + MA</td>
              <td>EHR documentation</td>
            </tr>
            <tr>
              <td>Discharge to checkout</td>
              <td className={s.tealText}>Record here _____ min</td>
              <td>&lt;5 min</td>
              <td>Front desk / MA</td>
              <td>Scheduling system</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className={s.p}>
        Add the current average times together to get your total patient visit time. Compare this to your scheduled appointment slot length. If the total observed time consistently exceeds the scheduled slot by more than 10%, you have a systemic throughput problem that will not resolve without workflow changes.
      </p>
    </div>

    <div className={s.section}>
      <h2 className={s.sectionH2}>Step 2: Bottleneck Scoring Matrix</h2>
      <p className={s.p}>
        Rate each common bottleneck on four dimensions using a 1–5 scale (1 = low, 5 = high). Add the four scores. Bottlenecks scoring 15 or above are your highest-priority improvement targets.
      </p>
      <div className={s.tableWrap}>
        <table className={s.table}>
          <thead>
            <tr>
              <th>Bottleneck</th>
              <th>Frequency (1–5)</th>
              <th>Patient Impact (1–5)</th>
              <th>Staff Impact (1–5)</th>
              <th>Ease to Fix (1–5)</th>
              <th>Total Score</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Check-in wait</td>
              <td className={s.tealText}>____</td>
              <td className={s.tealText}>____</td>
              <td className={s.tealText}>____</td>
              <td className={s.tealText}>____</td>
              <td className={s.tealText}>____</td>
            </tr>
            <tr>
              <td>Insurance verification failure</td>
              <td className={s.tealText}>____</td>
              <td className={s.tealText}>____</td>
              <td className={s.tealText}>____</td>
              <td className={s.tealText}>____</td>
              <td className={s.tealText}>____</td>
            </tr>
            <tr>
              <td>Room availability delay</td>
              <td className={s.tealText}>____</td>
              <td className={s.tealText}>____</td>
              <td className={s.tealText}>____</td>
              <td className={s.tealText}>____</td>
              <td className={s.tealText}>____</td>
            </tr>
            <tr>
              <td>Provider notification delay</td>
              <td className={s.tealText}>____</td>
              <td className={s.tealText}>____</td>
              <td className={s.tealText}>____</td>
              <td className={s.tealText}>____</td>
              <td className={s.tealText}>____</td>
            </tr>
            <tr>
              <td>Documentation during visit</td>
              <td className={s.tealText}>____</td>
              <td className={s.tealText}>____</td>
              <td className={s.tealText}>____</td>
              <td className={s.tealText}>____</td>
              <td className={s.tealText}>____</td>
            </tr>
            <tr>
              <td>Checkout and next scheduling</td>
              <td className={s.tealText}>____</td>
              <td className={s.tealText}>____</td>
              <td className={s.tealText}>____</td>
              <td className={s.tealText}>____</td>
              <td className={s.tealText}>____</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className={s.p}>
        Scoring guide: Frequency = how often per day does this bottleneck occur (1 = rarely, 5 = multiple times per hour). Patient Impact = how much does this delay affect patient experience (1 = minor inconvenience, 5 = causes LWBS or patient complaints). Staff Impact = how much cognitive load or frustration does this create for staff (1 = minor, 5 = major source of burnout). Ease to Fix = how addressable is this with existing tools or low-cost changes (1 = requires major technology investment, 5 = solvable with process change only).
      </p>
    </div>

    <div className={s.section}>
      <h2 className={s.sectionH2}>Step 3: Root Cause Analysis</h2>
      <p className={s.p}>
        For each bottleneck scoring 15 or above in Step 2, identify the root cause by category. Most bottlenecks have causes in more than one category.
      </p>
      <div className={s.twoCol}>
        <div className={s.colCard}>
          <p className={s.colCardTitle}>People Causes</p>
          <ul className={s.checklist}>
            <li className={s.checkItem}><span className={s.checkbox} />Role unclear (who is responsible for this step?)</li>
            <li className={s.checkItem}><span className={s.checkbox} />Insufficient training on existing tools</li>
            <li className={s.checkItem}><span className={s.checkbox} />Staffing insufficient for peak volume</li>
            <li className={s.checkItem}><span className={s.checkbox} />Communication gap between roles (front desk, MA, provider)</li>
          </ul>
        </div>
        <div className={s.colCard}>
          <p className={s.colCardTitle}>Process Causes</p>
          <ul className={s.checklist}>
            <li className={s.checkItem}><span className={s.checkbox} />No documented standard workflow for this step</li>
            <li className={s.checkItem}><span className={s.checkbox} />Sequential steps that could be parallel</li>
            <li className={s.checkItem}><span className={s.checkbox} />Unnecessary approval or sign-off steps</li>
            <li className={s.checkItem}><span className={s.checkbox} />Handoff with no clear trigger or notification</li>
          </ul>
        </div>
      </div>
      <div className={s.twoCol}>
        <div className={s.colCard}>
          <p className={s.colCardTitle}>Technology Causes</p>
          <ul className={s.checklist}>
            <li className={s.checkItem}><span className={s.checkbox} />No tool exists for this workflow step</li>
            <li className={s.checkItem}><span className={s.checkbox} />Tool exists but is not being used</li>
            <li className={s.checkItem}><span className={s.checkbox} />Tool is poorly configured for this clinic's flow</li>
            <li className={s.checkItem}><span className={s.checkbox} />Multiple disconnected systems create manual data transfer</li>
          </ul>
        </div>
        <div className={s.colCard}>
          <p className={s.colCardTitle}>Environment Causes</p>
          <ul className={s.checklist}>
            <li className={s.checkItem}><span className={s.checkbox} />Physical layout requires unnecessary staff movement</li>
            <li className={s.checkItem}><span className={s.checkbox} />Insufficient exam rooms for scheduled volume</li>
            <li className={s.checkItem}><span className={s.checkbox} />Signage or wayfinding causes patient confusion</li>
            <li className={s.checkItem}><span className={s.checkbox} />Waiting area capacity does not match peak arrival patterns</li>
          </ul>
        </div>
      </div>
    </div>

    <div className={s.section}>
      <h2 className={s.sectionH2}>Step 4: 90-Day Improvement Roadmap</h2>
      <p className={s.p}>
        Assign your highest-scoring bottleneck fixes to the three-month improvement sequence below. Month 1 should focus on process-only changes (no technology investment required). Month 2 can include low-cost technology adjustments. Month 3 addresses improvements requiring vendor decisions or capital investment.
      </p>
      <div className={s.tableWrap}>
        <table className={s.table}>
          <thead>
            <tr>
              <th>Improvement Area</th>
              <th>Month 1 Action</th>
              <th>Month 2 Action</th>
              <th>Month 3 Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Check-in speed</td>
              <td>Document standard check-in protocol; train all staff</td>
              <td>Configure or launch pre-arrival digital intake</td>
              <td>Evaluate kiosk ROI and implement if justified</td>
            </tr>
            <tr>
              <td>Insurance verification</td>
              <td>Standardize 24-hour-before eligibility check process</td>
              <td>Configure automated eligibility alerts for exceptions</td>
              <td>Integrate automated eligibility into scheduling workflow</td>
            </tr>
            <tr>
              <td>Room availability</td>
              <td>Create room status whiteboard protocol for all staff</td>
              <td>Configure room status in patient flow software</td>
              <td>Real-time room assignment dashboard for all stations</td>
            </tr>
            <tr>
              <td>Provider notification</td>
              <td>Define and communicate rooming-complete hand-off signal</td>
              <td>Configure dashboard alert for rooming completion</td>
              <td>Automate provider notification through patient flow system</td>
            </tr>
            <tr>
              <td>Documentation burden</td>
              <td>Identify 3 note templates that can be shortened</td>
              <td>Restructure templates to structured input vs. free text</td>
              <td>Evaluate AI scribe or documentation assist tools</td>
            </tr>
            <tr>
              <td>Checkout and scheduling</td>
              <td>Add follow-up scheduling to checkout checklist</td>
              <td>Enable online follow-up scheduling for patients</td>
              <td>Integrate automated follow-up scheduling into after-visit summary</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className={s.p}>
        Measure your target metrics (from Step 1) at the end of each month. Document what changed and by how much. Share results with your team — visible progress is a major driver of sustained improvement effort.
      </p>
    </div>
  </div>
)

export default function PatientFlowAuditTemplatePage() {
  return (
    <>
      <NavInner />
      <main>
        <ResourceHero
          type="Template"
          title="Patient Flow Audit Template"
          subtitle="Measure your current patient flow, identify bottlenecks, and prioritize fixes."
        />
        <ResourcePreview items={previewItems} />
        <ResourceForm
          resourceSlug="patient-flow-audit-template"
          resourceTitle="Patient Flow Audit Template"
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
