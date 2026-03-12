import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import ResourceHero from '@/components/ResourceHero'
import ResourcePreview from '@/components/ResourcePreview'
import ResourceForm from '@/components/ResourceForm'
import type { FormField } from '@/components/ResourceForm'
import s from '@/components/ResourceContent.module.css'

export const metadata: Metadata = {
  title: 'LWBS Reduction Playbook for Urgent Care — clinIQ Resources',
  description:
    'A 30-day action plan to cut left-without-being-seen rates in urgent care clinics. Week-by-week protocol with measurement framework.',
}

const previewItems = [
  'Week 1: Baseline measurement protocol',
  'Week 2: Triage visibility implementation',
  'Week 3: Lobby communication changes',
  'Week 4: Bottleneck alert configuration',
  'Measurement framework (pre/post)',
  'Staff communication script for LWBS reduction',
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
    name: 'currentLWBS',
    label: 'Current LWBS rate',
    type: 'select',
    options: ['Under 2%', '2–4%', '4–6%', 'Over 6%', "Don't track"],
    required: true,
  },
]

const content = (
  <div className={s.doc}>
    <p className={s.docTitle}>LWBS Reduction Playbook for Urgent Care</p>
    <p className={s.docMeta}>clinIQ Healthcare · March 2026 · 30-Day Action Plan</p>

    <div className={s.section}>
      <p className={s.p}>
        Left-without-being-seen (LWBS) is simultaneously a patient safety risk, a revenue loss, and an operational signal. Every patient who leaves is approximately $150–$400 in lost revenue and a potential adverse outcome. Clinics that reduce LWBS from 4% to 1% on a 100-patient-per-day volume recover $45,000–$120,000 annually. This playbook gives you a concrete 30-day path to that outcome.
      </p>
    </div>

    <div className={s.section}>
      <h2 className={s.sectionH2}>Week 1: Measure and Diagnose</h2>
      <ol className={s.steps}>
        <li className={s.step}>
          <span className={s.stepNum}>1</span>
          <div className={s.stepBody}>
            <p className={s.stepTitle}>Calculate baseline LWBS rate</p>
            <p className={s.stepDesc}>
              Pull the last 30 days of LWBS data from your EHR or patient flow system. Calculate using the formula: LWBS rate = LWBS patients ÷ total arrivals × 100. If you do not currently capture LWBS events in your system, begin manual tracking immediately using a paper log at the front desk. Record: patient arrival time, departure time, reason for departure (if known), and estimated wait at time of departure.
            </p>
          </div>
        </li>
        <li className={s.step}>
          <span className={s.stepNum}>2</span>
          <div className={s.stepBody}>
            <p className={s.stepTitle}>Time-stamp audit</p>
            <p className={s.stepDesc}>
              For 5 consecutive business days, manually record times at each patient flow stage: door-to-triage start, triage-to-room assignment, room assignment-to-provider entry. Calculate averages for each interval. The interval with the highest average time is your primary bottleneck. Most clinics find that the triage-to-room or room-to-provider intervals are the largest contributors to LWBS, not the front-end check-in.
            </p>
          </div>
        </li>
        <li className={s.step}>
          <span className={s.stepNum}>3</span>
          <div className={s.stepBody}>
            <p className={s.stepTitle}>Identify peak LWBS hours and days</p>
            <p className={s.stepDesc}>
              Break down your LWBS events by hour of day and day of week. Most urgent care clinics have two LWBS peaks: late morning (10am–12pm) and early evening (4pm–7pm). Knowing your specific peak windows allows you to target staffing and operational changes precisely rather than applying changes clinic-wide.
            </p>
          </div>
        </li>
        <li className={s.step}>
          <span className={s.stepNum}>4</span>
          <div className={s.stepBody}>
            <p className={s.stepTitle}>Survey staff on perceived bottlenecks</p>
            <p className={s.stepDesc}>
              Distribute a brief 5-question anonymous survey to your front desk, MA, and clinical staff asking: "What is the single most common reason patients wait longer than necessary?" Staff perception of bottlenecks often reveals process failures that do not show up in data logs. Common answers: "We don't know when a room is clean," "We can't tell who is next in the queue," "The provider doesn't know the patient is ready."
            </p>
          </div>
        </li>
      </ol>
    </div>

    <div className={s.section}>
      <h2 className={s.sectionH2}>Week 2: Lobby Visibility and Communication</h2>
      <ol className={s.steps}>
        <li className={s.step}>
          <span className={s.stepNum}>5</span>
          <div className={s.stepBody}>
            <p className={s.stepTitle}>Install or configure real-time lobby dashboard visible to staff</p>
            <p className={s.stepDesc}>
              Every clinical staff member should be able to see the current lobby state — patient names, wait times, triage status, and room assignments — without leaving their current task or making a phone call. If you use a patient flow platform, this view should be on every workstation screen and on a tablet at the nursing station. If you do not have a flow platform, a shared whiteboard with patient initials and wait-time markers is a starting point, but will not scale.
            </p>
          </div>
        </li>
        <li className={s.step}>
          <span className={s.stepNum}>6</span>
          <div className={s.stepBody}>
            <p className={s.stepTitle}>Implement wait time disclosure to patients at check-in</p>
            <p className={s.stepDesc}>
              Every patient receives an estimated wait time at the moment check-in is complete. This single change typically reduces LWBS by 20–35% on its own by managing expectations. Patients who receive no wait time information leave at higher rates than patients who are told "approximately 40 minutes." Research consistently shows patients are more willing to wait a defined amount of time than an undefined one.
            </p>
          </div>
        </li>
        <li className={s.step}>
          <span className={s.stepNum}>7</span>
          <div className={s.stepBody}>
            <p className={s.stepTitle}>Add lobby check-in status updates every 15 minutes for waits over 30 minutes</p>
            <p className={s.stepDesc}>
              For any patient who has been waiting over 30 minutes, a staff member (or automated system) proactively contacts them — in person, by lobby display, or by SMS if your system supports it — to provide a status update. The content matters less than the contact. Patients who receive any acknowledgment during a long wait leave at significantly lower rates than those who wait in silence.
            </p>
          </div>
        </li>
        <li className={s.step}>
          <span className={s.stepNum}>8</span>
          <div className={s.stepBody}>
            <p className={s.stepTitle}>Post signage with expected wait times</p>
            <p className={s.stepDesc}>
              Place a display in the lobby showing the current estimated wait time. This can be a TV screen, a whiteboard, or a digital display — the format matters less than whether it is current and accurate. Update the display every 15 minutes. An inaccurate wait time display is worse than no display, as it creates a trust deficit with waiting patients.
            </p>
          </div>
        </li>
      </ol>
    </div>

    <div className={s.section}>
      <h2 className={s.sectionH2}>Week 3: Operational Changes</h2>
      <ol className={s.steps}>
        <li className={s.step}>
          <span className={s.stepNum}>9</span>
          <div className={s.stepBody}>
            <p className={s.stepTitle}>Adjust staffing to match peak LWBS hours</p>
            <p className={s.stepDesc}>
              Using the peak hour data from Week 1, adjust your MA and triage staffing schedule to add capacity during the identified peak windows. Even adding a single MA for a 2-hour peak window can meaningfully reduce triage bottlenecks. If hiring is not an option, restructure breaks and lunch schedules so peak hours have full staffing coverage.
            </p>
          </div>
        </li>
        <li className={s.step}>
          <span className={s.stepNum}>10</span>
          <div className={s.stepBody}>
            <p className={s.stepTitle}>Streamline triage documentation to reduce triage time</p>
            <p className={s.stepDesc}>
              Review your triage intake form and EHR documentation template. Remove any fields that are not clinically required for urgent care triage. Each unnecessary field adds 30–60 seconds to the triage encounter. Converting free-text fields to structured click-through fields can reduce triage documentation time by 2–3 minutes per patient.
            </p>
          </div>
        </li>
        <li className={s.step}>
          <span className={s.stepNum}>11</span>
          <div className={s.stepBody}>
            <p className={s.stepTitle}>Implement provider notification system when rooming is complete</p>
            <p className={s.stepDesc}>
              Eliminate the hallway tap-on-the-shoulder or room-to-room phone call as the primary mechanism for telling a provider that a patient is ready. Implement a dashboard-based notification so providers can see rooming completions in real time. Providers who know instantly when a room is ready eliminate the 5–8 minute gap between room availability and provider entry that drives patient frustration.
            </p>
          </div>
        </li>
        <li className={s.step}>
          <span className={s.stepNum}>12</span>
          <div className={s.stepBody}>
            <p className={s.stepTitle}>Identify and fix the single highest-impact bottleneck</p>
            <p className={s.stepDesc}>
              Based on your Week 1 time-stamp audit and staff survey, select the single highest-impact bottleneck and implement a targeted fix this week. Do not attempt to fix all bottlenecks simultaneously. Focused improvement on one stage typically produces a 20–40% reduction in wait time for that stage alone.
            </p>
          </div>
        </li>
      </ol>
    </div>

    <div className={s.section}>
      <h2 className={s.sectionH2}>Week 4: Measurement and Sustainability</h2>
      <ol className={s.steps}>
        <li className={s.step}>
          <span className={s.stepNum}>13</span>
          <div className={s.stepBody}>
            <p className={s.stepTitle}>Measure post-change LWBS rate vs. baseline</p>
            <p className={s.stepDesc}>
              Calculate the LWBS rate for Days 22–30 using the same methodology as your Week 1 baseline. Compare directly. Document the delta. If the rate has not improved, return to the bottleneck data and identify what was missed. If the rate has improved, quantify the revenue impact: LWBS reduction × average visit revenue.
            </p>
          </div>
        </li>
        <li className={s.step}>
          <span className={s.stepNum}>14</span>
          <div className={s.stepBody}>
            <p className={s.stepTitle}>Configure automated alerts when wait times exceed threshold</p>
            <p className={s.stepDesc}>
              Set an automated alert in your patient flow system that fires when any patient's lobby wait exceeds 25 minutes. This alert should reach the charge nurse or clinic manager directly. Automated alerts remove the dependency on manual monitoring and ensure that high-wait-time situations are always caught before they become LWBS events.
            </p>
          </div>
        </li>
        <li className={s.step}>
          <span className={s.stepNum}>15</span>
          <div className={s.stepBody}>
            <p className={s.stepTitle}>Document the changes that worked for staff training</p>
            <p className={s.stepDesc}>
              Write a 1-page protocol document covering the LWBS interventions that produced measurable improvement. This document becomes the onboarding material for new staff and the reference for future operations reviews. LWBS reduction is not a one-time project — it requires consistent execution of a documented protocol.
            </p>
          </div>
        </li>
      </ol>
    </div>

    <div className={s.section}>
      <h2 className={s.sectionH2}>Measurement Framework</h2>
      <div className={s.tableWrap}>
        <table className={s.table}>
          <thead>
            <tr>
              <th>Metric</th>
              <th>Baseline (Week 1)</th>
              <th>Target (Day 30)</th>
              <th>Tracking Method</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>LWBS rate (%)</td>
              <td>Record your baseline here</td>
              <td>&lt;2%</td>
              <td>EHR or manual log; daily calculation</td>
            </tr>
            <tr>
              <td>Average door-to-triage time (min)</td>
              <td>Record your baseline here</td>
              <td>&lt;5 min</td>
              <td>Time-stamp audit; triage workflow log</td>
            </tr>
            <tr>
              <td>Average triage-to-room time (min)</td>
              <td>Record your baseline here</td>
              <td>&lt;10 min</td>
              <td>Time-stamp audit; room assignment log</td>
            </tr>
            <tr>
              <td>Average room-to-provider time (min)</td>
              <td>Record your baseline here</td>
              <td>&lt;8 min</td>
              <td>Provider notification system timestamps</td>
            </tr>
            <tr>
              <td>% patients receiving wait time at check-in</td>
              <td>Record your baseline here</td>
              <td>100%</td>
              <td>Staff audit; mystery patient observation</td>
            </tr>
            <tr>
              <td>% peak-hour waits exceeding 30 min</td>
              <td>Record your baseline here</td>
              <td>&lt;10%</td>
              <td>Patient flow dashboard; automated reporting</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
)

export default function LwbsReductionPlaybookPage() {
  return (
    <>
      <NavInner />
      <main>
        <ResourceHero
          type="Guide"
          title="LWBS Reduction Playbook for Urgent Care"
          subtitle="A 30-day action plan to cut left-without-being-seen rates in urgent care clinics."
        />
        <ResourcePreview items={previewItems} />
        <ResourceForm
          resourceSlug="lwbs-reduction-playbook"
          resourceTitle="LWBS Reduction Playbook for Urgent Care"
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
