import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import ResourceHero from '@/components/ResourceHero'
import ResourcePreview from '@/components/ResourcePreview'
import ResourceForm from '@/components/ResourceForm'
import type { FormField } from '@/components/ResourceForm'
import s from '@/components/ResourceContent.module.css'

export const metadata: Metadata = {
  title: 'Preventing Front Desk Burnout: An Operational Approach — clinIQ Resources',
  description:
    'The workflow and technology changes that reduce cognitive load and improve front desk retention. 30-day implementation checklist included.',
}

const previewItems = [
  'The burnout-workflow connection (research summary)',
  '8 workflow changes that reduce cognitive load',
  'Automation that removes repetitive tasks',
  "Visibility tools that eliminate 'status hunt' interruptions",
  'Measuring staff satisfaction and burnout risk',
  '30-day implementation checklist',
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
    name: 'currentTurnoverRate',
    label: 'Current front desk turnover rate',
    type: 'select',
    options: ['Under 20%/yr', '20–40%/yr', 'Over 40%/yr', "Don't track"],
    required: true,
  },
]

const content = (
  <div className={s.doc}>
    <p className={s.docTitle}>Preventing Front Desk Burnout: An Operational Approach</p>
    <p className={s.docMeta}>clinIQ Healthcare · March 2026</p>

    <div className={s.section}>
      <h2 className={s.sectionH2}>The Burnout-Workflow Connection</h2>
      <p className={s.p}>
        Healthcare front desk burnout is rarely caused by patient volume alone. It is caused by cognitive load — the mental cost of constant context-switching, interrupted tasks, and working with systems that require more mental effort than they should. Research on administrative workflows in ambulatory care settings consistently shows that front desk staff context-switch 20–40 times per hour during peak periods.
      </p>
      <p className={s.p}>
        Each interruption carries a cognitive recovery cost of 15 or more minutes before full task focus is restored. When interruptions arrive faster than recovery is possible — which is the normal state of a busy front desk without workflow support tools — staff enter a state of chronic cognitive overload that produces the behavioral signs of burnout: errors, short temper, disengagement, and ultimately resignation.
      </p>
      <p className={s.p}>
        The solution is not resilience training, mindfulness programs, or recognition events — though those have their place. The solution is workflow design. Remove the tasks that should not exist. Automate the tasks that are purely repetitive. Provide visibility tools that eliminate the need to hunt for information. When the workload is redesigned to match what a human should actually do, burnout rates fall without any direct intervention on the staff member themselves.
      </p>
    </div>

    <div className={s.section}>
      <h2 className={s.sectionH2}>8 Workflow Changes That Reduce Cognitive Load</h2>
      <ol className={s.steps}>
        <li className={s.step}>
          <span className={s.stepNum}>1</span>
          <div className={s.stepBody}>
            <p className={s.stepTitle}>Digital check-in eliminates data entry</p>
            <p className={s.stepDesc}>
              When patients complete intake on their phone or a kiosk before check-in, the front desk role shifts from typing patient information to verifying and greeting. This saves approximately 8 minutes per patient — in a 60-patient day, that is 8 hours of data entry eliminated. Staff who previously spent the majority of their shift in heads-down data entry can now engage meaningfully with patients.
            </p>
          </div>
        </li>
        <li className={s.step}>
          <span className={s.stepNum}>2</span>
          <div className={s.stepBody}>
            <p className={s.stepTitle}>Real-time lobby dashboard eliminates status hunt interruptions</p>
            <p className={s.stepDesc}>
              Without a shared lobby visibility tool, front desk staff field approximately 25–35 calls per day from clinical staff asking "who is next?", "is [patient] checked in?", and "what room are they in?" Each call is a context interruption. A real-time dashboard visible to all staff eliminates this call volume entirely. Staff who report the highest burnout scores consistently work in environments with the least shared information visibility.
            </p>
          </div>
        </li>
        <li className={s.step}>
          <span className={s.stepNum}>3</span>
          <div className={s.stepBody}>
            <p className={s.stepTitle}>Automated eligibility verification eliminates manual portal checks</p>
            <p className={s.stepDesc}>
              Manual insurance eligibility checks require staff to log into each payer portal separately, navigate different interfaces, and manually interpret coverage information. Automated eligibility runs these checks overnight for next-day appointments and surfaces exceptions only — reducing this task from 3–4 minutes per patient to 30 seconds of exception review.
            </p>
          </div>
        </li>
        <li className={s.step}>
          <span className={s.stepNum}>4</span>
          <div className={s.stepBody}>
            <p className={s.stepTitle}>Appointment reminder automation eliminates outbound reminder calls</p>
            <p className={s.stepDesc}>
              Manual reminder calls take 2–4 minutes per patient when factoring in voicemails, callbacks, and no-answers. On a 40-patient schedule, that is 80–160 minutes of staff time daily for a task that automated SMS can accomplish in zero staff-minutes. Eliminating manual reminder calls is one of the highest-return individual workflow changes available.
            </p>
          </div>
        </li>
        <li className={s.step}>
          <span className={s.stepNum}>5</span>
          <div className={s.stepBody}>
            <p className={s.stepTitle}>Online scheduling reduces inbound call volume 40–60%</p>
            <p className={s.stepDesc}>
              The largest single source of front desk interruption is inbound scheduling calls. Practices that implement patient-facing online scheduling consistently report 40–60% reductions in scheduling call volume within 90 days. The remaining calls become higher-complexity situations that benefit from direct staff attention, improving the quality and meaning of the work.
            </p>
          </div>
        </li>
        <li className={s.step}>
          <span className={s.stepNum}>6</span>
          <div className={s.stepBody}>
            <p className={s.stepTitle}>Automated waitlist filling eliminates manual cancellation fill calls</p>
            <p className={s.stepDesc}>
              Manually calling waitlist patients after a cancellation is a multi-step, multi-call process that frequently takes 20–45 minutes per slot and still results in the slot going unfilled when patients are unavailable. Automated waitlist systems text patients in priority order and fill slots in under 5 minutes with zero staff involvement.
            </p>
          </div>
        </li>
        <li className={s.step}>
          <span className={s.stepNum}>7</span>
          <div className={s.stepBody}>
            <p className={s.stepTitle}>Digital intake forms eliminate paper scanning and data re-entry</p>
            <p className={s.stepDesc}>
              Paper-based intake workflows require staff to scan completed forms, verify legibility, manually enter data into the EHR, and file the physical paper. This process takes 5–10 minutes per new patient. Digital intake forms auto-populate into the EHR, reducing this to a single verification click. For a clinic seeing 15 new patients per week, this eliminates 1.25–2.5 hours of weekly administrative work.
            </p>
          </div>
        </li>
        <li className={s.step}>
          <span className={s.stepNum}>8</span>
          <div className={s.stepBody}>
            <p className={s.stepTitle}>Status updates via app instead of phone calls to clinical staff</p>
            <p className={s.stepDesc}>
              Front desk staff who must call the nursing station or clinical staff to communicate patient status — "your 2pm is here," "room 3 is ready" — are making calls that interrupt clinical staff and create reciprocal interruption patterns. Shared status dashboards push this information automatically, in real time, to every screen in the clinic. The calls become unnecessary.
            </p>
          </div>
        </li>
      </ol>
    </div>

    <div className={s.section}>
      <h2 className={s.sectionH2}>30-Day Implementation Checklist</h2>
      <div className={s.phase}>
        <p className={s.phaseTitle}>Days 1–10: Audit Current State</p>
      </div>
      <ul className={s.checklist}>
        <li className={s.checkItem}><span className={s.checkbox} />Survey front desk staff: "What are the 3 most frustrating parts of your daily workflow?"</li>
        <li className={s.checkItem}><span className={s.checkbox} />Count inbound call volume for one full week (scheduling, status, reminders, eligibility)</li>
        <li className={s.checkItem}><span className={s.checkbox} />Time the average new patient check-in from door to rooming</li>
        <li className={s.checkItem}><span className={s.checkbox} />Count how many times clinical staff interrupt front desk per hour during peak periods</li>
        <li className={s.checkItem}><span className={s.checkbox} />Identify which of the 8 workflow changes above are not yet in place</li>
      </ul>

      <div className={s.phase}>
        <p className={s.phaseTitle}>Days 11–20: Implement Top 3 Changes</p>
      </div>
      <ul className={s.checklist}>
        <li className={s.checkItem}><span className={s.checkbox} />Select the 3 highest-impact workflow changes based on your audit findings</li>
        <li className={s.checkItem}><span className={s.checkbox} />Configure and test each change before going live</li>
        <li className={s.checkItem}><span className={s.checkbox} />Train all front desk staff on the new workflow — live demonstration, not handout only</li>
        <li className={s.checkItem}><span className={s.checkbox} />Communicate changes to patients (new check-in process, online scheduling availability)</li>
        <li className={s.checkItem}><span className={s.checkbox} />Assign one staff member as point of contact for first-week questions</li>
      </ul>

      <div className={s.phase}>
        <p className={s.phaseTitle}>Days 21–30: Measure and Adjust</p>
      </div>
      <ul className={s.checklist}>
        <li className={s.checkItem}><span className={s.checkbox} />Re-survey front desk staff using same questions as Day 1–10 audit</li>
        <li className={s.checkItem}><span className={s.checkbox} />Compare call volume, check-in time, and interruption frequency to baseline</li>
        <li className={s.checkItem}><span className={s.checkbox} />Identify friction points in the new workflows and adjust</li>
        <li className={s.checkItem}><span className={s.checkbox} />Document what worked and what needs further change</li>
        <li className={s.checkItem}><span className={s.checkbox} />Plan next 3 workflow changes for the following 30-day cycle</li>
      </ul>
    </div>
  </div>
)

export default function StaffBurnoutPreventionGuidePage() {
  return (
    <>
      <NavInner />
      <main>
        <ResourceHero
          type="Guide"
          title="Preventing Front Desk Burnout: An Operational Approach"
          subtitle="The workflow and technology changes that reduce cognitive load and improve retention."
        />
        <ResourcePreview items={previewItems} />
        <ResourceForm
          resourceSlug="staff-burnout-prevention-guide"
          resourceTitle="Preventing Front Desk Burnout: An Operational Approach"
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
