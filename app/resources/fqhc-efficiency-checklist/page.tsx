import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import ResourceHero from '@/components/ResourceHero'
import ResourcePreview from '@/components/ResourcePreview'
import ResourceForm from '@/components/ResourceForm'
import type { FormField } from '@/components/ResourceForm'
import s from '@/components/ResourceContent.module.css'

export const metadata: Metadata = {
  title: 'FQHC Operations Efficiency Checklist — clinIQ Resources',
  description:
    '20-point checklist for FQHC operations: UDS reporting readiness, sliding-fee schedule accuracy, grant compliance documentation, and operational throughput.',
}

const previewItems = [
  'UDS reporting readiness — 12 data fields most FQHCs submit incorrectly and how to fix them before HRSA review',
  'Sliding-fee schedule accuracy audit — verification steps for income documentation, discount tiers, and annual update cycles',
  'Grant compliance documentation — operational records required for Section 330 grant renewals and site visits',
  'Patient throughput benchmarks for community health centers by clinic size and service type',
  'Front desk workflow gaps that inflate per-visit administrative cost above FQHC benchmarks',
  'Health IT requirements for UDS electronic submission and meaningful use attestation',
  'Credentialing and privileging documentation requirements specific to FQHC deemed status',
  'Board governance records that frequently trigger HRSA findings during operational reviews',
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
    options: ['CEO / Executive Director', 'COO / Operations Director', 'CFO', 'Clinical Director', 'Practice Manager', 'Other'],
    required: true,
  },
  {
    name: 'fqhcSize',
    label: 'Annual patient visits',
    type: 'select',
    options: ['Under 5,000', '5,000–15,000', '15,000–30,000', '30,000–75,000', 'Over 75,000'],
    required: true,
  },
]

const content = (
  <div className={s.doc}>
    <p className={s.docTitle}>FQHC Operations Efficiency Checklist</p>
    <p className={s.docMeta}>clinIQ Healthcare · Section 330-funded FQHCs · HRSA UDS Reporting Year 2025</p>

    <div className={s.section}>
      <h2 className={s.sectionH2}>UDS Reporting Readiness</h2>
      <p className={s.p}>The Uniform Data System (UDS) report is submitted annually to HRSA and is the primary measure of FQHC performance. These are the data fields most frequently submitted incorrectly — review each before your submission window opens.</p>
      <div className={s.phase}>
        <p className={s.phaseTitle}>Patient and visit counts</p>
        <ul className={s.checklist}>
          <li className={s.checkItem}><span className={s.checkbox} /> Verify patient count uses unduplicated patients (not visit count) — one patient seen 12 times counts as one</li>
          <li className={s.checkItem}><span className={s.checkbox} /> Confirm best served population (BSP) designation is current and documented in the EHR</li>
          <li className={s.checkItem}><span className={s.checkbox} /> Review race/ethnicity data completeness — HRSA flags FQHCs where more than 20% of records are "unreported"</li>
          <li className={s.checkItem}><span className={s.checkbox} /> Verify income documentation was collected and poverty level calculated using current federal poverty guidelines</li>
          <li className={s.checkItem}><span className={s.checkbox} /> Confirm insurance type is captured at each visit (not just at enrollment) — payer mix changes affect grant calculations</li>
        </ul>
      </div>
      <div className={s.phase}>
        <p className={s.phaseTitle}>Clinical quality measures</p>
        <ul className={s.checklist}>
          <li className={s.checkItem}><span className={s.checkbox} /> Run EHR report for all UDS clinical quality measures (CQMs) 30+ days before submission deadline</li>
          <li className={s.checkItem}><span className={s.checkbox} /> Verify denominator logic for each CQM matches HRSA specifications — EHR defaults often differ</li>
          <li className={s.checkItem}><span className={s.checkbox} /> Check diabetes HbA1c control rate (CQM 122) — most commonly flagged measure in HRSA reviews</li>
          <li className={s.checkItem}><span className={s.checkbox} /> Confirm preventive care measures (child immunizations, cervical cancer screening) are pulling correctly</li>
          <li className={s.checkItem}><span className={s.checkbox} /> Document any data quality issues discovered and your correction methodology before submission</li>
        </ul>
      </div>
    </div>

    <div className={s.section}>
      <h2 className={s.sectionH2}>Sliding-Fee Schedule Accuracy Audit</h2>
      <p className={s.p}>Sliding-fee schedules must be updated annually using current federal poverty level (FPL) guidelines and applied consistently to all patients at or below 200% FPL. Inconsistent application is one of the most common findings in HRSA operational site visits.</p>
      <div className={s.phase}>
        <p className={s.phaseTitle}>Schedule structure</p>
        <ul className={s.checklist}>
          <li className={s.checkItem}><span className={s.checkbox} /> Confirm sliding-fee schedule was updated using the most recent HHS poverty guidelines (published annually in January)</li>
          <li className={s.checkItem}><span className={s.checkbox} /> Verify schedule has a minimum of two discount tiers below 100% FPL (nominal fee requirement)</li>
          <li className={s.checkItem}><span className={s.checkbox} /> Confirm no patient at or below 200% FPL is charged full fee — sliding scale must apply</li>
          <li className={s.checkItem}><span className={s.checkbox} /> Review that nominal fees are "nominal" — HRSA defines this as not creating a barrier to access</li>
        </ul>
      </div>
      <div className={s.phase}>
        <p className={s.phaseTitle}>Application and documentation</p>
        <ul className={s.checklist}>
          <li className={s.checkItem}><span className={s.checkbox} /> Verify income documentation is re-collected at least annually per patient (not just at initial enrollment)</li>
          <li className={s.checkItem}><span className={s.checkbox} /> Confirm income verification is performed at check-in or registration — not retrospectively applied</li>
          <li className={s.checkItem}><span className={s.checkbox} /> Check that EHR/billing system is applying the correct discount tier based on documented income</li>
          <li className={s.checkItem}><span className={s.checkbox} /> Audit 10–15 random patient accounts to confirm billing amounts match documented discount tier</li>
          <li className={s.checkItem}><span className={s.checkbox} /> Confirm sliding-fee schedule is posted in a visible location in the waiting room (HRSA requirement)</li>
        </ul>
      </div>
    </div>

    <div className={s.section}>
      <h2 className={s.sectionH2}>Grant Compliance Documentation</h2>
      <p className={s.p}>Section 330 grant compliance extends beyond clinical operations. HRSA site visitors review governance, financial, and operational records. The following are frequently missing or outdated in grant renewal packages.</p>
      <div className={s.phase}>
        <p className={s.phaseTitle}>Board governance</p>
        <ul className={s.checklist}>
          <li className={s.checkItem}><span className={s.checkbox} /> Confirm board composition meets the 51% patient majority requirement — verify patient status of each member annually</li>
          <li className={s.checkItem}><span className={s.checkbox} /> Verify board meeting minutes are recorded for all meetings within the grant period</li>
          <li className={s.checkItem}><span className={s.checkbox} /> Confirm board approved annual budget, audit, and strategic plan within the required timeframe</li>
          <li className={s.checkItem}><span className={s.checkbox} /> Verify board conducted CEO performance evaluation within the past 12 months</li>
          <li className={s.checkItem}><span className={s.checkbox} /> Confirm conflict-of-interest policies are current and signed by all board members</li>
        </ul>
      </div>
      <div className={s.phase}>
        <p className={s.phaseTitle}>Operational and financial records</p>
        <ul className={s.checklist}>
          <li className={s.checkItem}><span className={s.checkbox} /> Single Audit (A-133) completed and submitted if federal expenditures exceeded $750,000</li>
          <li className={s.checkItem}><span className={s.checkbox} /> Financial audit is current (within 9 months of fiscal year end per HRSA requirements)</li>
          <li className={s.checkItem}><span className={s.checkbox} /> Scope of project (SOP) documentation is current and reflects actual services delivered</li>
          <li className={s.checkItem}><span className={s.checkbox} /> FTCA (Federal Tort Claims Act) deeming documentation is current if applicable</li>
          <li className={s.checkItem}><span className={s.checkbox} /> Credentialing files are complete for all clinical staff — primary source verification documented</li>
        </ul>
      </div>
    </div>

    <div className={s.section}>
      <h2 className={s.sectionH2}>Patient Throughput Benchmarks</h2>
      <p className={s.p}>FQHC operational efficiency is measured partly through cost per patient and visits per FTE provider. Use these benchmarks to identify where your center may be operating below peer performance.</p>
      <div className={s.tableWrap}>
        <table className={s.table}>
          <thead>
            <tr><th>Metric</th><th>FQHC National Median</th><th>Top-Quartile FQHCs</th><th>Action if Below Median</th></tr>
          </thead>
          <tbody>
            <tr><td>Visits per FTE provider (annual)</td><td>2,200–2,600</td><td>2,800+</td><td>Review scheduling template fill rates and panel size management</td></tr>
            <tr><td>Patient no-show rate</td><td>18–22%</td><td>Under 12%</td><td>Implement automated reminders + same-day scheduling reserve</td></tr>
            <tr><td>Average check-in time</td><td>8–10 min</td><td>Under 5 min</td><td>Audit front desk workflow; consider digital check-in for established patients</td></tr>
            <tr><td>Per-visit administrative cost</td><td>$45–65</td><td>Under $38</td><td>Identify manual processes that can be automated or eliminated</td></tr>
            <tr><td>New patient access (days to 3rd available)</td><td>14–21 days</td><td>Under 7 days</td><td>Review panel capacity and add advanced-access scheduling slots</td></tr>
            <tr><td>Sliding-fee collection rate</td><td>22–35%</td><td>38%+</td><td>Review income documentation process and front-end collections workflow</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <div className={s.section}>
      <h2 className={s.sectionH2}>Front Desk Workflow Gaps</h2>
      <p className={s.p}>Front desk inefficiencies are the most common driver of inflated per-visit administrative cost in FQHCs. These checks identify the highest-impact issues.</p>
      <ul className={s.checklist}>
        <li className={s.checkItem}><span className={s.checkbox} /> Insurance eligibility is verified electronically before the patient arrives — not at the window</li>
        <li className={s.checkItem}><span className={s.checkbox} /> Income documentation is requested before the visit — not completed during check-in</li>
        <li className={s.checkItem}><span className={s.checkbox} /> Patient demographics (address, phone, emergency contact) are reviewed and updated at each visit</li>
        <li className={s.checkItem}><span className={s.checkbox} /> Sliding-fee calculation is performed by the system — not manually by front desk staff</li>
        <li className={s.checkItem}><span className={s.checkbox} /> Co-pay or patient balance collection occurs at check-in — not after the visit</li>
        <li className={s.checkItem}><span className={s.checkbox} /> Interpreter services are pre-arranged for patients with language needs — not improvised at arrival</li>
        <li className={s.checkItem}><span className={s.checkbox} /> No-show and cancellation workflow is documented — staff know exactly what steps to take and when</li>
      </ul>
    </div>

    <div className={s.section}>
      <h2 className={s.sectionH2}>Health IT Readiness</h2>
      <ul className={s.checklist}>
        <li className={s.checkItem}><span className={s.checkbox} /> EHR is certified for UDS electronic submission (HRSA Health Center Program requirement)</li>
        <li className={s.checkItem}><span className={s.checkbox} /> EHR captures all required UDS data elements in discrete, reportable fields (not free text)</li>
        <li className={s.checkItem}><span className={s.checkbox} /> Patient portal is active and portal enrollment rate is tracked (UDS Table 6B measure)</li>
        <li className={s.checkItem}><span className={s.checkbox} /> Electronic prescribing is in use for all providers (DEA compliance + meaningful use)</li>
        <li className={s.checkItem}><span className={s.checkbox} /> Lab and radiology results route directly into EHR with automated result notification workflow</li>
        <li className={s.checkItem}><span className={s.checkbox} /> Care management tools (panel management, population health) are in use — not relying on manual tracking</li>
      </ul>
    </div>
  </div>
)

export default function FQHCEfficiencyChecklistPage() {
  return (
    <>
      <NavInner />
      <main>
        <ResourceHero
          type="Checklist"
          title="FQHC Operations Efficiency Checklist"
          subtitle="20 operational checks every FQHC should run before the next HRSA review — UDS readiness, sliding-fee accuracy, grant compliance, and throughput benchmarks."
        />
        <ResourcePreview items={previewItems} />
        <ResourceForm
          resourceSlug="fqhc-efficiency-checklist"
          resourceTitle="FQHC Operations Efficiency Checklist"
          fields={fields}
          submitLabel="Get the checklist"
          successMessage=""
          revealContent={content}
        />
      </main>
      <FooterInner />
    </>
  )
}
