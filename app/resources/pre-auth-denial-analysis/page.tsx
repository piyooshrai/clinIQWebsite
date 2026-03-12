import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import ResourceHero from '@/components/ResourceHero'
import ResourcePreview from '@/components/ResourcePreview'
import ResourceForm from '@/components/ResourceForm'
import type { FormField } from '@/components/ResourceForm'
import s from '@/components/ResourceContent.module.css'

export const metadata: Metadata = {
  title: 'Pre-Auth Denial Analysis Template — clinIQ Resources',
  description:
    'Track prior authorization denial patterns by payer, procedure, and denial reason. Identify what fails and why — then fix first-pass rates systematically.',
}

const previewItems = [
  'Denial tracking worksheet — log every denial by date, payer, procedure code, denial reason, and appeal outcome',
  'Payer denial rate matrix — calculate your first-pass approval rate by payer to identify your most problematic relationships',
  'Denial reason taxonomy — 14 standardized denial categories to make pattern identification consistent across staff',
  'Procedure-level denial analysis — which CPT codes get denied most and what documentation fixes would address each',
  'Appeal success rate tracker — measure which denial reasons you win on appeal vs. which to avoid billing in the first place',
  'Monthly denial trend chart — visualize whether your overall denial rate is improving or worsening over time',
  'Staff accountability matrix — track which team members handle which payers and flag training needs',
  'Root cause action log — document process changes made in response to denial patterns and measure their impact',
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
      'Orthopedics / Spine',
      'Pain Management',
      'Rheumatology',
      'Cardiology',
      'Behavioral Health',
      'Oncology',
      'Other',
    ],
    required: true,
  },
  {
    name: 'monthlyPAVolume',
    label: 'Monthly PA requests (approx.)',
    type: 'select',
    options: ['Under 25', '25–75', '75–150', '150–300', 'Over 300'],
    required: false,
  },
]

const content = (
  <div className={s.doc}>
    <p className={s.docTitle}>Pre-Auth Denial Analysis Template</p>
    <p className={s.docMeta}>clinIQ Healthcare · Track, categorize, and systematically reduce prior authorization denials</p>

    <div className={s.section}>
      <h2 className={s.sectionH2}>Denial Tracking Worksheet</h2>
      <p className={s.p}>Log every prior authorization denial using the fields below. Consistent logging is the only way to identify patterns — one denial is noise, twenty is a process problem. Use this structure in a shared spreadsheet or your practice management system.</p>
      <div className={s.tableWrap}>
        <table className={s.table}>
          <thead>
            <tr><th>Field</th><th>What to record</th><th>Why it matters</th></tr>
          </thead>
          <tbody>
            <tr><td>Date of denial</td><td>Date the denial was received (not the submission date)</td><td>Tracks payer response time; flags if denials cluster around certain periods</td></tr>
            <tr><td>Payer name</td><td>Exact payer and plan name (UHC Commercial vs. UHC Medicare Advantage are different)</td><td>Identifies your highest-denial payer relationships</td></tr>
            <tr><td>CPT code(s)</td><td>The procedure code(s) on the denied auth request</td><td>Reveals procedure-specific denial patterns</td></tr>
            <tr><td>ICD-10 diagnosis</td><td>Primary diagnosis code submitted with the request</td><td>Identifies diagnosis-procedure mismatches</td></tr>
            <tr><td>Denial reason code</td><td>The payer&apos;s stated denial reason (see taxonomy below)</td><td>Drives root cause analysis</td></tr>
            <tr><td>Appeal filed?</td><td>Yes / No / Pending</td><td>Tracks appeal rate and workload</td></tr>
            <tr><td>Appeal outcome</td><td>Approved / Denied / Withdrawn</td><td>Calculates win rate by denial reason</td></tr>
            <tr><td>Staff owner</td><td>Name of person who submitted and is managing the appeal</td><td>Enables accountability and training targeting</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <div className={s.section}>
      <h2 className={s.sectionH2}>Denial Reason Taxonomy</h2>
      <p className={s.p}>Use these 14 standardized categories when logging denial reason. Consistent categorization across staff makes pattern identification accurate — avoid letting each staff member use their own language for the same denial type.</p>
      <div className={s.tableWrap}>
        <table className={s.table}>
          <thead><tr><th>#</th><th>Category</th><th>Payer language to look for</th><th>Most common fix</th></tr></thead>
          <tbody>
            <tr><td><span className={s.tealText}>1</span></td><td>Medical necessity — insufficient documentation</td><td>"Does not meet clinical criteria," "insufficient clinical information"</td><td>Add conservative treatment history, functional limitations, and supporting objective findings</td></tr>
            <tr><td><span className={s.tealText}>2</span></td><td>Medical necessity — wrong criteria applied</td><td>"Does not meet [payer] criteria for…"</td><td>Request the specific criteria used; resubmit mapping clinical notes to that criteria explicitly</td></tr>
            <tr><td><span className={s.tealText}>3</span></td><td>Step therapy / conservative care not completed</td><td>"Conservative therapy not documented," "step therapy required"</td><td>Document all prior treatments with dates, duration, and outcomes in the auth request</td></tr>
            <tr><td><span className={s.tealText}>4</span></td><td>Duplicate request</td><td>"Auth already on file," "duplicate submission"</td><td>Check for existing auth before submitting; confirm correct date range on active auths</td></tr>
            <tr><td><span className={s.tealText}>5</span></td><td>Eligibility — patient not covered</td><td>"Member not eligible," "coverage terminated"</td><td>Verify eligibility before submitting; check effective date vs. service date</td></tr>
            <tr><td><span className={s.tealText}>6</span></td><td>Wrong payer / plan</td><td>"Not a covered benefit under this plan"</td><td>Verify correct plan ID; confirm which plan requires auth (primary vs. secondary)</td></tr>
            <tr><td><span className={s.tealText}>7</span></td><td>Auth not required</td><td>"Authorization not required for this service"</td><td>Remove from tracking; confirm payer auth requirements are current in your reference list</td></tr>
            <tr><td><span className={s.tealText}>8</span></td><td>Timely filing — late submission</td><td>"Request received after deadline"</td><td>Map each payer&apos;s auth submission window; build earlier triggers into scheduling workflow</td></tr>
            <tr><td><span className={s.tealText}>9</span></td><td>Ordering provider not eligible</td><td>"Provider not in network," "not a covered provider type"</td><td>Verify ordering provider&apos;s network status with the specific plan before submission</td></tr>
            <tr><td><span className={s.tealText}>10</span></td><td>Missing or incorrect clinical documentation</td><td>"Incomplete request," "missing required fields"</td><td>Create a payer-specific documentation checklist; attach before submission</td></tr>
            <tr><td><span className={s.tealText}>11</span></td><td>Service not covered under benefit</td><td>"Excluded benefit," "not a covered service"</td><td>Verify benefit coverage before scheduling; inform patient of out-of-pocket responsibility</td></tr>
            <tr><td><span className={s.tealText}>12</span></td><td>Experimental / investigational</td><td>"Investigational," "not FDA approved for this indication"</td><td>Cite peer-reviewed literature and CMS/payer coverage determinations in appeal</td></tr>
            <tr><td><span className={s.tealText}>13</span></td><td>Coding error — wrong CPT or modifier</td><td>"Incorrect procedure code," "invalid modifier combination"</td><td>Review CPT selection; involve coder in pre-submission review for high-value procedures</td></tr>
            <tr><td><span className={s.tealText}>14</span></td><td>Other / unspecified</td><td>Vague or non-standard denial language</td><td>Call payer for clarification; document the explanation before deciding on appeal</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <div className={s.section}>
      <h2 className={s.sectionH2}>Payer Denial Rate Matrix</h2>
      <p className={s.p}>Calculate your first-pass approval rate for each major payer monthly. Any payer below 85% first-pass approval warrants a targeted process review. Any payer below 75% is a payer relationship issue — escalate to your provider relations contact.</p>
      <div className={s.tableWrap}>
        <table className={s.table}>
          <thead><tr><th>Payer</th><th>Auth requests submitted (month)</th><th>Approved 1st pass</th><th>Denied 1st pass</th><th>First-pass rate</th><th>Appeal win rate</th></tr></thead>
          <tbody>
            <tr><td>[Payer 1]</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>
            <tr><td>[Payer 2]</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>
            <tr><td>[Payer 3]</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>
            <tr><td>[Payer 4]</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>
            <tr><td><strong>Total / Average</strong></td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>
          </tbody>
        </table>
      </div>
      <div className={s.infoBox}>
        <p className={s.infoBoxText}><strong>Benchmark:</strong> High-performing practices average 92–95% first-pass auth approval rates. An overall rate below 88% indicates a systematic documentation or submission process issue — not bad luck.</p>
      </div>
    </div>

    <div className={s.section}>
      <h2 className={s.sectionH2}>Root Cause Action Log</h2>
      <p className={s.p}>For each pattern identified from the denial tracking data, document the root cause and the corrective action taken. Measure impact by comparing denial rates in the 60 days after the change to the 60 days before.</p>
      <div className={s.tableWrap}>
        <table className={s.table}>
          <thead><tr><th>Pattern identified</th><th>Root cause</th><th>Action taken</th><th>Date implemented</th><th>Denial rate before</th><th>Denial rate after</th></tr></thead>
          <tbody>
            <tr><td>High denial rate for [CPT] at [Payer]</td><td>[Documentation gap / wrong criteria / step therapy]</td><td>[Process change / template update / training]</td><td>—</td><td>—%</td><td>—%</td></tr>
            <tr><td>[Next pattern]</td><td>—</td><td>—</td><td>—</td><td>—%</td><td>—%</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <div className={s.section}>
      <h2 className={s.sectionH2}>Monthly Review Checklist</h2>
      <div className={s.phase}>
        <p className={s.phaseTitle}>First week of each month</p>
        <ul className={s.checklist}>
          <li className={s.checkItem}><span className={s.checkbox} /> Pull prior month denial log — calculate total denial rate and first-pass rate by payer</li>
          <li className={s.checkItem}><span className={s.checkbox} /> Identify the top 3 denial reasons by volume — these are your focus for the month</li>
          <li className={s.checkItem}><span className={s.checkbox} /> Review all pending appeals from prior month — confirm none have lapsed payer deadlines</li>
          <li className={s.checkItem}><span className={s.checkbox} /> Check appeal win rates by denial reason — update your appeal-vs.-write-off decision threshold</li>
        </ul>
      </div>
      <div className={s.phase}>
        <p className={s.phaseTitle}>Ongoing during the month</p>
        <ul className={s.checklist}>
          <li className={s.checkItem}><span className={s.checkbox} /> Log every denial within 24 hours of receipt — delayed logging loses pattern data</li>
          <li className={s.checkItem}><span className={s.checkbox} /> File appeals within payer deadline (most payers: 30–60 days from denial date)</li>
          <li className={s.checkItem}><span className={s.checkbox} /> Escalate peer-to-peer (P2P) requests for denials where clinical criteria are unambiguously met</li>
          <li className={s.checkItem}><span className={s.checkbox} /> Document any payer policy changes that affect auth requirements — update submission templates</li>
        </ul>
      </div>
    </div>
  </div>
)

export default function PreAuthDenialAnalysisPage() {
  return (
    <>
      <NavInner />
      <main>
        <ResourceHero
          type="Template"
          title="Pre-Auth Denial Analysis Template"
          subtitle="Stop guessing why your authorizations get denied. Track denials by payer, procedure, and reason — then act on the patterns."
        />
        <ResourcePreview items={previewItems} />
        <ResourceForm
          resourceSlug="pre-auth-denial-analysis"
          resourceTitle="Pre-Auth Denial Analysis Template"
          fields={fields}
          submitLabel="Get the template"
          successMessage=""
          revealContent={content}
        />
      </main>
      <FooterInner />
    </>
  )
}
