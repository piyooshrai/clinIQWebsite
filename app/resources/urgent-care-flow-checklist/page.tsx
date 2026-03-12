import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import ResourceHero from '@/components/ResourceHero'
import ResourcePreview from '@/components/ResourcePreview'
import ResourceForm from '@/components/ResourceForm'
import type { FormField } from '@/components/ResourceForm'
import s from '@/components/ResourceContent.module.css'

export const metadata: Metadata = {
  title: 'Urgent Care Flow Checklist — clinIQ Resources',
  description:
    '23-point checklist to cut LWBS, reduce wait times, and stop front desk chaos in urgent care.',
}

const previewItems = [
  'Pre-arrival flow check — online scheduling, reminder cadence, digital intake setup',
  'Check-in optimization — kiosk vs window tradeoffs, data sync, queue assignment logic',
  'Triage flow — real-time visibility thresholds, alert triggers, staffing decision trees',
  'Provider flow — room status tracking, handoff protocols, documentation timing',
  'Discharge flow — checkout speed, follow-up scheduling, patient feedback capture',
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
    <p className={s.docTitle}>Urgent Care Patient Flow Optimization Checklist</p>
    <p className={s.docMeta}>clinIQ Healthcare · March 2026 · 23-Point Checklist</p>

    <div className={s.section}>
      <p className={s.p}>
        Use this checklist as a quarterly audit of your urgent care patient flow. Each item represents a measurable operational standard. Items marked as missing or failing are your highest-leverage improvement opportunities. Complete this audit with your clinic manager, front desk lead, and at least one clinical staff member.
      </p>
    </div>

    <div className={s.section}>
      <div className={s.phase}>
        <p className={s.phaseTitle}>Phase 1: Pre-Arrival (5 Items)</p>
      </div>
      <ul className={s.checklist}>
        <li className={s.checkItem}>
          <span className={s.checkbox} />
          <div>
            <strong>1. Online scheduling available 24/7</strong>
            <br />Patients can book appointments or join a virtual queue at any hour without calling the clinic. Scheduling availability outside business hours captures patients who would otherwise present as walk-ins during peak hours or go to a competitor.
          </div>
        </li>
        <li className={s.checkItem}>
          <span className={s.checkbox} />
          <div>
            <strong>2. Digital intake available before arrival</strong>
            <br />Patients who schedule online receive a link to complete registration forms, insurance information, and chief complaint before arriving. Pre-arrival intake reduces in-clinic check-in time from an average of 10–12 minutes to under 2 minutes for completing patients.
          </div>
        </li>
        <li className={s.checkItem}>
          <span className={s.checkbox} />
          <div>
            <strong>3. Insurance pre-verification automated</strong>
            <br />Your system runs an automated eligibility check on scheduled patients at least 24 hours before their appointment. Staff are alerted to coverage issues before the patient arrives, not after they are already in the waiting room.
          </div>
        </li>
        <li className={s.checkItem}>
          <span className={s.checkbox} />
          <div>
            <strong>4. Appointment reminders sent 24 hours before</strong>
            <br />Automated SMS or email reminders are sent to all scheduled patients 24 hours before their appointment. Reminders include the clinic address, parking information, and a link to complete or update their intake forms.
          </div>
        </li>
        <li className={s.checkItem}>
          <span className={s.checkbox} />
          <div>
            <strong>5. Estimated wait time visible online</strong>
            <br />Your website or scheduling page displays a real-time or regularly updated estimated wait time so patients can make informed decisions about when to arrive. This single feature measurably reduces LWBS by setting expectations before patients commit to waiting.
          </div>
        </li>
      </ul>
    </div>

    <div className={s.section}>
      <div className={s.phase}>
        <p className={s.phaseTitle}>Phase 2: Arrival and Registration (5 Items)</p>
      </div>
      <ul className={s.checklist}>
        <li className={s.checkItem}>
          <span className={s.checkbox} />
          <div>
            <strong>6. Check-in time under 3 minutes for established patients</strong>
            <br />Patients who have completed pre-arrival intake and are returning patients should complete check-in in under 3 minutes. Time this monthly. Established patient check-in exceeding 3 minutes is a signal that pre-arrival intake is not being used or that EHR data is not being preserved between visits.
          </div>
        </li>
        <li className={s.checkItem}>
          <span className={s.checkbox} />
          <div>
            <strong>7. Digital check-in available at arrival</strong>
            <br />Patients who did not complete pre-arrival intake can complete check-in on a tablet or their own phone at arrival. This option does not require front desk interaction for the initial registration step.
          </div>
        </li>
        <li className={s.checkItem}>
          <span className={s.checkbox} />
          <div>
            <strong>8. Insurance scanned, not manually typed</strong>
            <br />Insurance card information is captured by camera or OCR, not manually typed by front desk staff. Manual entry is the leading cause of insurance verification errors and clean claim failures. If your system still requires manual insurance entry, this is your highest-priority check-in fix.
          </div>
        </li>
        <li className={s.checkItem}>
          <span className={s.checkbox} />
          <div>
            <strong>9. Patient notified of wait time at check-in</strong>
            <br />Every patient is told an estimated wait time at the moment check-in is complete. This can be verbal, on a display screen, or via SMS. Patients who know they have a 45-minute wait are far less likely to leave without being seen than patients who have no information about their wait.
          </div>
        </li>
        <li className={s.checkItem}>
          <span className={s.checkbox} />
          <div>
            <strong>10. LWBS-risk patients flagged in queue</strong>
            <br />Your patient flow system identifies patients who have been waiting longer than your LWBS threshold (typically 30 minutes) and surfaces them on the staff dashboard. Staff proactively re-engage these patients rather than waiting for them to approach the desk or leave silently.
          </div>
        </li>
      </ul>
    </div>

    <div className={s.section}>
      <div className={s.phase}>
        <p className={s.phaseTitle}>Phase 3: Triage and Rooming (5 Items)</p>
      </div>
      <ul className={s.checklist}>
        <li className={s.checkItem}>
          <span className={s.checkbox} />
          <div>
            <strong>11. Real-time lobby visibility on staff dashboard</strong>
            <br />Clinical staff can see who is in the waiting room, how long each patient has been waiting, and each patient's triage status without asking the front desk or walking to the waiting room. This eliminates the most common source of triage delay: staff not knowing the queue state.
          </div>
        </li>
        <li className={s.checkItem}>
          <span className={s.checkbox} />
          <div>
            <strong>12. ESI triage completed within 5 minutes of arrival</strong>
            <br />The Emergency Severity Index (ESI) triage assessment is completed within 5 minutes for all arriving patients. Measure this weekly. Triage-to-start times exceeding 5 minutes during busy periods are associated with significantly elevated LWBS rates.
          </div>
        </li>
        <li className={s.checkItem}>
          <span className={s.checkbox} />
          <div>
            <strong>13. Room assignment visible to all staff</strong>
            <br />When a patient is roomed, this status updates immediately in the shared patient flow dashboard. All clinical staff — MA, provider, charge nurse — can see room assignments without calling or texting each other.
          </div>
        </li>
        <li className={s.checkItem}>
          <span className={s.checkbox} />
          <div>
            <strong>14. Patients approaching 30-minute wait flagged automatically</strong>
            <br />Your system generates an automatic alert when any patient's lobby wait time approaches your LWBS threshold. This alert reaches both front desk and clinical staff so intervention can occur before the patient reaches the threshold.
          </div>
        </li>
        <li className={s.checkItem}>
          <span className={s.checkbox} />
          <div>
            <strong>15. MA knows next patient before provider finishes current visit</strong>
            <br />Your rooming workflow is designed so that the MA can begin preparing the next room while the provider is completing documentation for the current patient. Parallel workflows of this type can reduce provider-to-next-patient time by 8–12 minutes per visit.
          </div>
        </li>
      </ul>
    </div>

    <div className={s.section}>
      <div className={s.phase}>
        <p className={s.phaseTitle}>Phase 4: Provider and Treatment (4 Items)</p>
      </div>
      <ul className={s.checklist}>
        <li className={s.checkItem}>
          <span className={s.checkbox} />
          <div>
            <strong>16. Provider notified of roomed patient via dashboard</strong>
            <br />When an MA completes rooming, the provider is automatically notified through the flow dashboard — not by phone call or physical interruption. The notification includes the patient name, room number, chief complaint, and triage ESI level.
          </div>
        </li>
        <li className={s.checkItem}>
          <span className={s.checkbox} />
          <div>
            <strong>17. Room status updates without phone calls</strong>
            <br />Providers, MAs, and front desk staff communicate room status changes through the shared dashboard. "Ready to room," "Provider in room," "Awaiting results," and "Ready for discharge" are all visible in real time. Phone calls to communicate room status are a workflow inefficiency and should be exception-only.
          </div>
        </li>
        <li className={s.checkItem}>
          <span className={s.checkbox} />
          <div>
            <strong>18. Test and imaging results visible in flow dashboard</strong>
            <br />Lab and imaging results are visible in the patient flow dashboard in real time. Providers do not need to navigate to a separate system to check whether results are back. Result availability is surfaced in the same interface used to track room status.
          </div>
        </li>
        <li className={s.checkItem}>
          <span className={s.checkbox} />
          <div>
            <strong>19. Provider documents at point of care</strong>
            <br />Providers complete documentation during or immediately after each patient encounter, not at the end of a shift. Batched documentation is associated with higher error rates, incomplete notes, and billing delays. Measure the average time between encounter completion and note sign-off.
          </div>
        </li>
      </ul>
    </div>

    <div className={s.section}>
      <div className={s.phase}>
        <p className={s.phaseTitle}>Phase 5: Discharge and Checkout (4 Items)</p>
      </div>
      <ul className={s.checklist}>
        <li className={s.checkItem}>
          <span className={s.checkbox} />
          <div>
            <strong>20. Discharge instructions available digitally</strong>
            <br />Patients receive discharge instructions via the patient-facing app or email rather than only on paper. Digital instructions have been shown to improve patient compliance and reduce callbacks. Paper instructions are supplemental, not the primary delivery channel.
          </div>
        </li>
        <li className={s.checkItem}>
          <span className={s.checkbox} />
          <div>
            <strong>21. Follow-up appointment bookable at checkout</strong>
            <br />If the provider recommends a follow-up visit, front desk staff can schedule it before the patient leaves. Online or self-scheduling availability for follow-up reduces the number of patients who are told to "call later" and never return.
          </div>
        </li>
        <li className={s.checkItem}>
          <span className={s.checkbox} />
          <div>
            <strong>22. Patient satisfaction capture before leaving</strong>
            <br />A brief satisfaction survey (2–3 questions) is offered to patients via SMS or kiosk before they exit. Real-time feedback enables same-day issue resolution and captures satisfaction data that correlates with operational bottlenecks.
          </div>
        </li>
        <li className={s.checkItem}>
          <span className={s.checkbox} />
          <div>
            <strong>23. LWBS and wait time data captured for review</strong>
            <br />All LWBS events are logged with the patient's arrival time, wait duration at time of departure, and reason if known. Wait time averages are captured daily and reviewed at least weekly by clinic leadership. Without measurement, LWBS reduction efforts cannot be targeted or validated.
          </div>
        </li>
      </ul>
    </div>
  </div>
)

export default function UrgentCareChecklistPage() {
  return (
    <>
      <NavInner />
      <main>
        <ResourceHero
          type="Checklist"
          title="Urgent Care Patient Flow Optimization Checklist"
          subtitle="23-point checklist to cut LWBS, reduce wait times, and stop front desk chaos."
        />
        <ResourcePreview items={previewItems} />
        <ResourceForm
          resourceSlug="urgent-care-flow-checklist"
          resourceTitle="Urgent Care Patient Flow Optimization Checklist"
          fields={fields}
          submitLabel="View the checklist"
          successMessage=""
          revealContent={content}
        />
      </main>
      <FooterInner />
    </>
  )
}
