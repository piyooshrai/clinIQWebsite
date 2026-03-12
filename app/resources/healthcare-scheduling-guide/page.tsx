import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import ResourceHero from '@/components/ResourceHero'
import ResourcePreview from '@/components/ResourcePreview'
import ResourceForm from '@/components/ResourceForm'
import type { FormField } from '@/components/ResourceForm'
import s from '@/components/ResourceContent.module.css'

export const metadata: Metadata = {
  title: 'Healthcare Scheduling That Reduces No-Shows — clinIQ Resources',
  description:
    'Scheduling strategies that cut no-show rates by 30–40% without adding staff. Reminder cadence, overbooking, same-day fill protocols, and waitlist management.',
}

const previewItems = [
  'No-show rate benchmarks by specialty',
  'Reminder cadence that actually works (SMS vs email vs call)',
  "Overbooking strategies that don't backfire",
  'Same-day cancellation fill protocols',
  'Waitlist management that patients actually join',
  'Measuring scheduling efficiency',
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
    name: 'currentNoShowRate',
    label: 'Current no-show rate',
    type: 'select',
    options: ['Under 5%', '5–10%', '10–20%', 'Over 20%', "Don't track"],
    required: true,
  },
]

const content = (
  <div className={s.doc}>
    <p className={s.docTitle}>Healthcare Scheduling That Reduces No-Shows</p>
    <p className={s.docMeta}>clinIQ Healthcare · March 2026</p>

    <div className={s.section}>
      <p className={s.p}>
        A 10% no-show rate on a 20-provider clinic running 400 appointments per week represents 40 empty slots — approximately $12,000–$20,000 in lost weekly revenue. Reducing this to 5% is achievable within 60 days using the reminder cadence, waitlist, and scheduling design changes in this guide.
      </p>
    </div>

    <div className={s.section}>
      <h2 className={s.sectionH2}>No-Show Rate Benchmarks by Specialty</h2>
      <div className={s.tableWrap}>
        <table className={s.table}>
          <thead>
            <tr>
              <th>Specialty</th>
              <th>Average No-Show Rate</th>
              <th>High-Risk Factors</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Primary Care</td>
              <td>8–12%</td>
              <td>Medicaid patients, long scheduling lead times, first appointments with new providers</td>
            </tr>
            <tr>
              <td>Behavioral Health</td>
              <td>18–25% <span className={`${s.tag} ${s.tagRed}`}>Highest risk</span></td>
              <td>Stigma, symptom-related avoidance, transportation, crisis episodes, medication side effects</td>
            </tr>
            <tr>
              <td>Physical Therapy</td>
              <td>10–15%</td>
              <td>Symptom improvement mid-course, out-of-pocket cost burden, return-to-work scheduling conflicts</td>
            </tr>
            <tr>
              <td>Pain Management</td>
              <td>12–18%</td>
              <td>Insurance barriers, polypharmacy complexity, transportation for mobility-impaired patients</td>
            </tr>
            <tr>
              <td>Urgent Care</td>
              <td>3–5% <span className={`${s.tag} ${s.tagGreen}`}>Lowest risk</span></td>
              <td>Symptom resolution before appointment, alternative care access</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className={s.p}>
        Know your specialty's baseline before setting improvement targets. A behavioral health clinic that reduces no-shows from 22% to 15% has made a larger operational improvement than a primary care clinic that goes from 10% to 9%.
      </p>
    </div>

    <div className={s.section}>
      <h2 className={s.sectionH2}>The Reminder Cadence That Works</h2>
      <div className={s.tableWrap}>
        <table className={s.table}>
          <thead>
            <tr>
              <th>Channel</th>
              <th>Timing</th>
              <th>Confirmation Response Rate</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Email</td>
              <td>72 hours before appointment</td>
              <td>22%</td>
              <td>Best for including intake forms and directions; lower response rate but good open rate</td>
            </tr>
            <tr>
              <td>SMS</td>
              <td>48 hours before appointment</td>
              <td>38%</td>
              <td>Include a one-tap confirmation reply; high read rate within 3 minutes of delivery</td>
            </tr>
            <tr>
              <td>SMS with reschedule link</td>
              <td>24 hours before appointment</td>
              <td>41%</td>
              <td>Including a reschedule link captures patients who would otherwise simply not show; recovers the slot</td>
            </tr>
            <tr>
              <td>Phone call (staff or automated)</td>
              <td>24–48 hours before, high-risk patients only</td>
              <td>55%</td>
              <td>Highest confirmation rate; only feasible for high-value or high-risk appointments due to staff time</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={s.infoBox}>
        <p className={s.infoBoxText}>
          <strong>Recommended Sequence for Most Clinics:</strong> Email at 7 days before (include intake link) → SMS at 3 days before (one-tap confirm) → SMS at 24 hours before (confirm or reschedule link). This three-touch sequence reduces no-shows by 30–40% compared to a single reminder.
        </p>
      </div>
    </div>

    <div className={s.section}>
      <h2 className={s.sectionH2}>Waitlist Management</h2>
      <p className={s.p}>
        A functioning waitlist converts cancellations into filled slots rather than empty time. The key is automation — manual waitlist management (staff calling patients one by one) rarely succeeds because the time between cancellation and slot re-fill is too long.
      </p>
      <ol className={s.steps}>
        <li className={s.step}>
          <span className={s.stepNum}>1</span>
          <div className={s.stepBody}>
            <p className={s.stepTitle}>Cancellation received</p>
            <p className={s.stepDesc}>
              When a patient cancels — online, by call, or by no-responding to a confirmation request — your system immediately identifies the open slot. The slot is held for the automated waitlist process, not immediately opened for new scheduling.
            </p>
          </div>
        </li>
        <li className={s.step}>
          <span className={s.stepNum}>2</span>
          <div className={s.stepBody}>
            <p className={s.stepTitle}>System texts waitlist patients in priority order</p>
            <p className={s.stepDesc}>
              Your scheduling system sends an automated text to the first patient on the waitlist for that provider and time window: "A same-day appointment has opened with [Provider] at [Time]. Reply YES to claim it." Priority order should be: patients who requested that specific provider, then patients waiting longest.
            </p>
          </div>
        </li>
        <li className={s.step}>
          <span className={s.stepNum}>3</span>
          <div className={s.stepBody}>
            <p className={s.stepTitle}>First response gets the slot</p>
            <p className={s.stepDesc}>
              The first patient to respond affirmatively is booked automatically. The slot is immediately removed from availability. No staff time required. If no patient responds within 30 minutes, the slot opens for new scheduling.
            </p>
          </div>
        </li>
        <li className={s.step}>
          <span className={s.stepNum}>4</span>
          <div className={s.stepBody}>
            <p className={s.stepTitle}>Confirmation sent automatically</p>
            <p className={s.stepDesc}>
              The newly booked patient receives an automated confirmation with appointment time, location, and any intake instructions. The front desk is notified of the booking addition but does not need to take any action.
            </p>
          </div>
        </li>
      </ol>
    </div>

    <div className={s.section}>
      <h2 className={s.sectionH2}>Overbooking Guidelines</h2>
      <p className={s.p}>
        Overbooking compensates for expected no-shows but creates provider and staff stress when over-applied. Use specialty-specific guidelines:
      </p>
      <div className={s.tableWrap}>
        <table className={s.table}>
          <thead>
            <tr>
              <th>Specialty</th>
              <th>Recommended Overbook Rate</th>
              <th>Maximum Safe Overbook</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Primary Care</td>
              <td>5–8% above schedule capacity</td>
              <td>12%</td>
            </tr>
            <tr>
              <td>Behavioral Health</td>
              <td>10–15% above capacity</td>
              <td>20%</td>
            </tr>
            <tr>
              <td>Physical Therapy</td>
              <td>8–12% above capacity</td>
              <td>15%</td>
            </tr>
            <tr>
              <td>Urgent Care (scheduled)</td>
              <td>2–4% above capacity</td>
              <td>6%</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className={s.p}>
        Overbooking above the maximum safe threshold creates same-day patient experience failures that are more costly than the no-show revenue loss you are trying to recover. Calibrate your overbook rate monthly based on actual no-show data, not historical estimates.
      </p>
    </div>

    <div className={s.section}>
      <h2 className={s.sectionH2}>No-Show Policy Template</h2>
      <div className={s.infoBox}>
        <p className={s.infoBoxText}>
          <strong>Sample No-Show Policy (adapt for your clinic):</strong> "[CLINIC NAME] asks patients to cancel or reschedule at least [24/48] hours before their appointment. Patients who miss [2] appointments without advance notice may be required to prepay for future visits or may be discharged from the practice. We understand that emergencies occur and handle exceptions on a case-by-case basis. To cancel or reschedule, call [PHONE] or use the link in your appointment reminder."
        </p>
      </div>
      <p className={s.p}>
        A posted no-show policy reduces no-show rates by approximately 15% on its own, independent of reminder cadence, simply by establishing clear expectations. Display the policy at check-in, include it in new patient intake forms, and reference it in appointment confirmation communications.
      </p>
    </div>
  </div>
)

export default function HealthcareSchedulingGuidePage() {
  return (
    <>
      <NavInner />
      <main>
        <ResourceHero
          type="Guide"
          title="Healthcare Scheduling That Reduces No-Shows"
          subtitle="Scheduling strategies that cut no-show rates by 30–40% without adding staff."
        />
        <ResourcePreview items={previewItems} />
        <ResourceForm
          resourceSlug="healthcare-scheduling-guide"
          resourceTitle="Healthcare Scheduling That Reduces No-Shows"
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
