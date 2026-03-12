import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import ResourceHero from '@/components/ResourceHero'
import ResourcePreview from '@/components/ResourcePreview'
import ResourceForm from '@/components/ResourceForm'
import type { FormField } from '@/components/ResourceForm'
import s from '@/components/ResourceContent.module.css'

export const metadata: Metadata = {
  title: 'Specialty-Specific Patient Flow Templates — clinIQ Resources',
  description:
    'Pre-built patient flow templates for 10 specialties — ready to configure in your clinic. Urgent care, pain management, physical therapy, behavioral health, and more.',
}

const previewItems = [
  'Urgent care high-volume flow template',
  'Pain management procedure day template',
  'Physical therapy multi-patient simultaneous template',
  'Behavioral health discreet queue template',
  'Orthopedic surgery pre-op/post-op template',
  'Plus 5 more specialty templates',
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
    name: 'specialty',
    label: 'Specialty',
    type: 'select',
    options: [
      'Urgent Care',
      'Pain Management',
      'Physical Therapy',
      'Behavioral Health',
      'Orthopedics',
      'Psychiatry',
      'Other',
    ],
    required: true,
  },
]

const content = (
  <div className={s.doc}>
    <p className={s.docTitle}>Specialty-Specific Patient Flow Templates</p>
    <p className={s.docMeta}>clinIQ Healthcare · March 2026 · 10 Specialty Templates</p>

    <div className={s.section}>
      <p className={s.p}>
        Each template below defines the standard patient flow for that specialty, including who is responsible at each stage, what action is taken, and the time target to hit. Use these as the starting configuration for your patient flow system or as a benchmark against your current workflow. All time targets are achievable benchmarks — not minimums.
      </p>
    </div>

    <div className={s.section}>
      <h2 className={s.sectionH2}>1. Urgent Care</h2>
      <p className={s.p}><span className={`${s.tag} ${s.tagRed}`}>High volume</span> <span className={`${s.tag} ${s.tagYellow}`}>Walk-in primary</span></p>
      <div className={s.tableWrap}>
        <table className={s.table}>
          <thead>
            <tr><th>Stage</th><th>Who</th><th>Action</th><th>Time Target</th></tr>
          </thead>
          <tbody>
            <tr><td>Arrival</td><td>Front desk</td><td>Check-in via kiosk or window; assign queue position; communicate wait time</td><td>&lt;3 min</td></tr>
            <tr><td>Triage</td><td>Triage nurse / MA</td><td>ESI assessment, vitals, chief complaint documentation; room or continue waiting</td><td>&lt;5 min from queue call</td></tr>
            <tr><td>Rooming</td><td>MA</td><td>Room patient, collect history, update dashboard to "Roomed — Provider Ready"</td><td>&lt;8 min from triage</td></tr>
            <tr><td>Provider evaluation</td><td>Provider</td><td>Enters room within 5 min of rooming notification; evaluates and orders</td><td>&lt;5 min from notification</td></tr>
            <tr><td>Testing and treatment</td><td>MA + provider</td><td>Results visible in dashboard; treatment initiated; discharge plan communicated</td><td>Per clinical need</td></tr>
            <tr><td>Discharge</td><td>MA + front desk</td><td>Digital discharge instructions sent; follow-up scheduled; satisfaction survey triggered</td><td>&lt;5 min from provider sign-off</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <div className={s.section}>
      <h2 className={s.sectionH2}>2. Pain Management</h2>
      <p className={s.p}><span className={`${s.tag} ${s.tagYellow}`}>Scheduled primary</span> <span className={`${s.tag} ${s.tagYellow}`}>Procedure days</span></p>
      <div className={s.tableWrap}>
        <table className={s.table}>
          <thead>
            <tr><th>Stage</th><th>Who</th><th>Action</th><th>Time Target</th></tr>
          </thead>
          <tbody>
            <tr><td>Pre-arrival</td><td>Billing / front desk</td><td>Verify insurance, confirm PA for procedures, send intake forms via portal</td><td>24–48 hr before visit</td></tr>
            <tr><td>Check-in</td><td>Front desk</td><td>Verify ID and insurance, collect copay, confirm prescription drug agreement</td><td>&lt;5 min</td></tr>
            <tr><td>Rooming and vitals</td><td>MA</td><td>Vitals, pain scale (0–10), medication reconciliation, urine drug screen if protocol</td><td>&lt;10 min</td></tr>
            <tr><td>Provider visit</td><td>Provider</td><td>Review UDS results, adjust treatment plan, order procedures or prescriptions, PDMP check</td><td>Per schedule</td></tr>
            <tr><td>Procedure (if applicable)</td><td>Provider + MA</td><td>Pre-procedure timeout, informed consent confirmed, post-procedure observation</td><td>Per procedure type</td></tr>
            <tr><td>Checkout</td><td>Front desk</td><td>Schedule follow-up, prescription routing, RTM enrollment if appropriate</td><td>&lt;5 min</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <div className={s.section}>
      <h2 className={s.sectionH2}>3. Physical Therapy</h2>
      <p className={s.p}><span className={`${s.tag} ${s.tagGreen}`}>Multi-patient simultaneous</span> <span className={`${s.tag} ${s.tagYellow}`}>RTM eligible</span></p>
      <div className={s.tableWrap}>
        <table className={s.table}>
          <thead>
            <tr><th>Stage</th><th>Who</th><th>Action</th><th>Time Target</th></tr>
          </thead>
          <tbody>
            <tr><td>Arrival</td><td>Front desk</td><td>Self-check-in via kiosk; update insurance if needed; copay collection</td><td>&lt;2 min</td></tr>
            <tr><td>Intake (initial visit)</td><td>PT / PTA</td><td>Functional assessment, outcome measures (DASH, LEFS, etc.), goal setting, home exercise plan introduction</td><td>45–60 min initial</td></tr>
            <tr><td>Treatment</td><td>PT / PTA</td><td>Therapeutic exercise, manual therapy, modalities; simultaneous management of 2–3 patients per PT</td><td>Per plan of care</td></tr>
            <tr><td>RTM check-in (ongoing)</td><td>Patient + PT</td><td>Daily symptom report via app; PT reviews 2× weekly; management note monthly</td><td>Continuous between visits</td></tr>
            <tr><td>Discharge planning</td><td>PT + patient</td><td>Review progress vs. goals, home program finalization, follow-up visit or RTM-only plan</td><td>Final session</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <div className={s.section}>
      <h2 className={s.sectionH2}>4. Behavioral Health</h2>
      <p className={s.p}><span className={`${s.tag} ${s.tagRed}`}>Privacy-sensitive queue</span> <span className={`${s.tag} ${s.tagRed}`}>Highest no-show rate</span></p>
      <div className={s.tableWrap}>
        <table className={s.table}>
          <thead>
            <tr><th>Stage</th><th>Who</th><th>Action</th><th>Time Target</th></tr>
          </thead>
          <tbody>
            <tr><td>Pre-arrival</td><td>Front desk</td><td>Send intake PHQ-9/GAD-7 via secure portal; confirm appointment by name only (not by condition)</td><td>48–72 hr before</td></tr>
            <tr><td>Discreet check-in</td><td>Front desk</td><td>Patient checks in without condition visible on display; waiting area configured for privacy</td><td>&lt;3 min</td></tr>
            <tr><td>Pre-session screening</td><td>MA / care coordinator</td><td>Review PHQ-9 score, safety screening, medication check if applicable</td><td>&lt;5 min</td></tr>
            <tr><td>Session</td><td>Therapist / prescriber</td><td>Therapy or medication management; document session note within 24 hours</td><td>50–60 min</td></tr>
            <tr><td>Checkout</td><td>Front desk</td><td>Schedule next appointment; provide crisis resources; discreet billing (no condition visible on receipt)</td><td>&lt;3 min</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <div className={s.section}>
      <h2 className={s.sectionH2}>5. Orthopedics</h2>
      <p className={s.p}><span className={`${s.tag} ${s.tagYellow}`}>Pre-op and post-op flows</span> <span className={`${s.tag} ${s.tagYellow}`}>High PA volume</span></p>
      <div className={s.tableWrap}>
        <table className={s.table}>
          <thead>
            <tr><th>Stage</th><th>Who</th><th>Action</th><th>Time Target</th></tr>
          </thead>
          <tbody>
            <tr><td>Pre-visit PA</td><td>Billing / auth coordinator</td><td>Verify PA for imaging, procedure, or surgery; confirm network status of surgical facility</td><td>72+ hr before visit</td></tr>
            <tr><td>Check-in and imaging review</td><td>Front desk + radiology</td><td>Confirm imaging available in system before rooming; flag missing images to MA</td><td>&lt;5 min</td></tr>
            <tr><td>Rooming</td><td>MA</td><td>Vitals, functional assessment (ROM, pain scale), pre-op or post-op checklist per protocol</td><td>&lt;10 min</td></tr>
            <tr><td>Provider evaluation</td><td>Orthopedic provider</td><td>Review imaging, physical exam, surgical planning or post-op assessment, PA initiation if needed</td><td>Per schedule</td></tr>
            <tr><td>Surgical scheduling (if applicable)</td><td>Surgical coordinator</td><td>Schedule surgery, confirm facility PA, patient education on pre-op requirements</td><td>Before patient leaves</td></tr>
            <tr><td>RTM enrollment (post-op)</td><td>MA + billing</td><td>Enroll eligible post-surgical patients in RTM; complete consent and written order</td><td>At post-op visit 1</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <div className={s.section}>
      <h2 className={s.sectionH2}>6. Psychiatry</h2>
      <p className={s.p}><span className={`${s.tag} ${s.tagRed}`}>Safety screening required</span> <span className={`${s.tag} ${s.tagYellow}`}>Medication management</span></p>
      <div className={s.tableWrap}>
        <table className={s.table}>
          <thead>
            <tr><th>Stage</th><th>Who</th><th>Action</th><th>Time Target</th></tr>
          </thead>
          <tbody>
            <tr><td>Pre-visit screening</td><td>Care coordinator</td><td>PHQ-9, Columbia Suicide Severity Rating Scale, medication adherence check via pharmacy</td><td>24 hr before</td></tr>
            <tr><td>Check-in</td><td>Front desk</td><td>Discreet check-in; flag any elevated safety screening scores to clinical staff immediately</td><td>&lt;3 min</td></tr>
            <tr><td>Nursing assessment</td><td>RN or care coordinator</td><td>Vitals, medication side effect review, lab result review (lithium, clozapine levels if applicable)</td><td>&lt;8 min</td></tr>
            <tr><td>Prescriber visit</td><td>Psychiatrist / PMHNP</td><td>Mental status exam, medication management, safety planning if indicated, lab orders</td><td>20–45 min</td></tr>
            <tr><td>Checkout and Rx</td><td>Front desk + prescriber</td><td>E-prescribe; schedule follow-up; provide crisis line information; document safety plan if created</td><td>&lt;5 min</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <div className={s.section}>
      <h2 className={s.sectionH2}>7. Primary Care</h2>
      <p className={s.p}><span className={`${s.tag} ${s.tagGreen}`}>High volume</span> <span className={`${s.tag} ${s.tagYellow}`}>Preventive and chronic care mix</span></p>
      <div className={s.tableWrap}>
        <table className={s.table}>
          <thead>
            <tr><th>Stage</th><th>Who</th><th>Action</th><th>Time Target</th></tr>
          </thead>
          <tbody>
            <tr><td>Pre-arrival</td><td>Front desk / system</td><td>Send intake form via portal; automated eligibility check; pre-visit orders if AWV or preventive visit</td><td>48–72 hr before</td></tr>
            <tr><td>Check-in</td><td>Front desk / kiosk</td><td>Confirm demographics, insurance, pharmacy, and reason for visit; copay collection</td><td>&lt;4 min</td></tr>
            <tr><td>Rooming and MA prep</td><td>MA</td><td>Vitals, height/weight, medication reconciliation, preventive care due alerts, chief complaint note</td><td>&lt;8 min</td></tr>
            <tr><td>Provider visit</td><td>PCP</td><td>Acute or chronic care, preventive counseling, order entry, care gap closure, referral if needed</td><td>Per appointment type</td></tr>
            <tr><td>Checkout</td><td>Front desk</td><td>Schedule follow-up or referral; route lab or imaging orders; patient education handout</td><td>&lt;4 min</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <div className={s.section}>
      <h2 className={s.sectionH2}>8. Cardiology</h2>
      <p className={s.p}><span className={`${s.tag} ${s.tagYellow}`}>Diagnostic-heavy</span> <span className={`${s.tag} ${s.tagYellow}`}>High PA volume</span></p>
      <div className={s.tableWrap}>
        <table className={s.table}>
          <thead>
            <tr><th>Stage</th><th>Who</th><th>Action</th><th>Time Target</th></tr>
          </thead>
          <tbody>
            <tr><td>Pre-visit PA and imaging</td><td>Auth coordinator</td><td>PA for echo, stress test, Holter; confirm prior imaging loaded in system</td><td>72+ hr before</td></tr>
            <tr><td>Check-in</td><td>Front desk</td><td>Verify insurance; confirm device data available (pacemaker interrogations, remote monitoring downloads)</td><td>&lt;5 min</td></tr>
            <tr><td>Diagnostic testing (if same day)</td><td>Cardiac tech / MA</td><td>EKG, echo, or monitoring device check performed before or after provider visit per workflow</td><td>Per test type</td></tr>
            <tr><td>Provider evaluation</td><td>Cardiologist / APP</td><td>Review test results in context of visit; medication management; care plan documentation</td><td>Per appointment type</td></tr>
            <tr><td>Checkout and care coordination</td><td>Care coordinator</td><td>Schedule follow-up tests or procedures; confirm medication fills; patient education on warning signs</td><td>&lt;5 min</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <div className={s.section}>
      <h2 className={s.sectionH2}>9. Chiropractic</h2>
      <p className={s.p}><span className={`${s.tag} ${s.tagGreen}`}>High visit frequency</span> <span className={`${s.tag} ${s.tagGreen}`}>RTM eligible</span></p>
      <div className={s.tableWrap}>
        <table className={s.table}>
          <thead>
            <tr><th>Stage</th><th>Who</th><th>Action</th><th>Time Target</th></tr>
          </thead>
          <tbody>
            <tr><td>Check-in (return visit)</td><td>Front desk / self</td><td>Self-check-in via kiosk or app; copay or package visit count tracked automatically</td><td>&lt;1 min</td></tr>
            <tr><td>Pre-treatment assessment</td><td>CA or chiropractor</td><td>Pain scale update, treatment response since last visit, x-ray review if applicable</td><td>&lt;3 min</td></tr>
            <tr><td>Adjustment and treatment</td><td>Chiropractor</td><td>Spinal or extremity adjustment, soft tissue work, e-stim or traction per plan of care</td><td>10–20 min</td></tr>
            <tr><td>Post-treatment education</td><td>CA or chiropractor</td><td>Home care instructions, exercise compliance check, RTM pain tracking review</td><td>&lt;3 min</td></tr>
            <tr><td>Checkout</td><td>Front desk</td><td>Schedule next visit; collect payment; automated reminder for next appointment</td><td>&lt;2 min</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <div className={s.section}>
      <h2 className={s.sectionH2}>10. Wound Care</h2>
      <p className={s.p}><span className={`${s.tag} ${s.tagRed}`}>Weekly visit cadence</span> <span className={`${s.tag} ${s.tagYellow}`}>High documentation burden</span></p>
      <div className={s.tableWrap}>
        <table className={s.table}>
          <thead>
            <tr><th>Stage</th><th>Who</th><th>Action</th><th>Time Target</th></tr>
          </thead>
          <tbody>
            <tr><td>Pre-arrival supply verification</td><td>MA / coordinator</td><td>Confirm wound care supplies available for scheduled patients; PA confirmed for advanced dressings</td><td>Day before visit</td></tr>
            <tr><td>Check-in</td><td>Front desk</td><td>Check-in, insurance verification, wheelchair or mobility accommodation confirmed</td><td>&lt;4 min</td></tr>
            <tr><td>Wound assessment</td><td>Wound care nurse or provider</td><td>Measure wound dimensions, photograph, assess tissue type, exudate, peri-wound skin; document in wound care template</td><td>&lt;10 min</td></tr>
            <tr><td>Treatment and dressing</td><td>Provider + MA</td><td>Debridement if indicated, advanced dressing application, patient education on home care</td><td>Per wound complexity</td></tr>
            <tr><td>Checkout and next visit</td><td>Front desk + provider</td><td>Schedule next weekly visit; order dressing supplies to ship to patient if applicable; referral if not healing per trajectory</td><td>&lt;4 min</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
)

export default function SpecialtyFlowTemplatesPage() {
  return (
    <>
      <NavInner />
      <main>
        <ResourceHero
          type="Template"
          title="Specialty-Specific Patient Flow Templates"
          subtitle="Pre-built patient flow templates for 10 specialties — ready to configure in your clinic."
        />
        <ResourcePreview items={previewItems} />
        <ResourceForm
          resourceSlug="specialty-flow-templates"
          resourceTitle="Specialty-Specific Patient Flow Templates"
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
