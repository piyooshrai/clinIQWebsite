import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import ResourceHero from '@/components/ResourceHero'
import ResourcePreview from '@/components/ResourcePreview'
import ResourceForm from '@/components/ResourceForm'
import type { FormField } from '@/components/ResourceForm'
import s from '@/components/ResourceContent.module.css'

export const metadata: Metadata = {
  title: 'Prior Auth Denial Playbook: Win More Appeals — clinIQ Resources',
  description:
    'The documentation, timing, and language that reverses prior auth denials. Peer-to-peer review protocols, appeal scripts, and payer-specific timing rules.',
}

const previewItems = [
  'Common denial reason codes and what they mean',
  'Peer-to-peer review request protocol',
  'Clinical documentation that supports appeal',
  "Timing rules for each payer's appeals process",
  'Scripts for physician-to-physician calls',
  'Tracking denial rates and appeal success',
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
    name: 'denialRate',
    label: 'Current denial rate',
    type: 'select',
    options: ['Under 10%', '10-20%', '20-30%', 'Over 30%', "Don't track"],
    required: true,
  },
]

const content = (
  <div className={s.doc}>
    <p className={s.docTitle}>Prior Auth Denial Playbook: Win More Appeals</p>
    <p className={s.docMeta}>clinIQ Healthcare · March 2026</p>

    <div className={s.section}>
      <p className={s.p}>
        Practices that approach prior auth denials systematically — with documented protocols, tracked appeal deadlines, and prepared providers for peer-to-peer reviews — achieve appeal reversal rates of 55–70% compared to the industry average of 30–40% for practices without a structured process. This playbook gives you that structure.
      </p>
    </div>

    <div className={s.section}>
      <h2 className={s.sectionH2}>Denial Reason Categories and Win Rates</h2>
      <div className={s.tableWrap}>
        <table className={s.table}>
          <thead>
            <tr>
              <th>Denial Reason</th>
              <th>Frequency</th>
              <th>Appeal Win Rate</th>
              <th>Best Response Strategy</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Medical necessity not established</td>
              <td>35% of denials</td>
              <td><span className={`${s.tag} ${s.tagYellow}`}>67%</span></td>
              <td>Submit comprehensive clinical documentation + request peer-to-peer review with treating provider</td>
            </tr>
            <tr>
              <td>Insufficient documentation</td>
              <td>25% of denials</td>
              <td><span className={`${s.tag} ${s.tagGreen}`}>78%</span></td>
              <td>Resubmit with complete clinical package; highest win rate because the underlying case is usually strong</td>
            </tr>
            <tr>
              <td>Step therapy not met</td>
              <td>15% of denials</td>
              <td><span className={`${s.tag} ${s.tagRed}`}>45%</span></td>
              <td>Document contraindications, intolerances, or clinical failures with each required step-therapy agent</td>
            </tr>
            <tr>
              <td>Experimental or investigational</td>
              <td>10% of denials</td>
              <td><span className={`${s.tag} ${s.tagRed}`}>35%</span></td>
              <td>Cite current clinical practice guidelines, FDA approval status, and published evidence of clinical utility</td>
            </tr>
            <tr>
              <td>Coding error</td>
              <td>10% of denials</td>
              <td><span className={`${s.tag} ${s.tagGreen}`}>91%</span></td>
              <td>Correct the code and resubmit immediately; virtually all corrected-code resubmissions are approved</td>
            </tr>
            <tr>
              <td>Timely filing exceeded</td>
              <td>5% of denials</td>
              <td><span className={`${s.tag} ${s.tagRed}`}>40%</span></td>
              <td>Provide submission proof (fax confirmation, portal timestamp); preventable with proper submission tracking</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div className={s.section}>
      <h2 className={s.sectionH2}>Standard Appeal Process: 5 Steps with Timing</h2>
      <ol className={s.steps}>
        <li className={s.step}>
          <span className={s.stepNum}>1</span>
          <div className={s.stepBody}>
            <p className={s.stepTitle}>Receive denial and document reason — Day 1</p>
            <p className={s.stepDesc}>
              The moment a denial arrives, log: denial date, payer name, denial reason code, specific criteria cited, and the appeal deadline (calculate from denial date immediately). Add the appeal deadline to your practice management calendar with a 7-day advance reminder. Denials not acted upon within deadline are permanently forfeited — this is non-negotiable.
            </p>
          </div>
        </li>
        <li className={s.step}>
          <span className={s.stepNum}>2</span>
          <div className={s.stepBody}>
            <p className={s.stepTitle}>Determine appeal type — Days 1–2</p>
            <p className={s.stepDesc}>
              Identify which appeal path is appropriate: first-level internal appeal (standard for most denials), expedited appeal (for urgent clinical situations — payer must respond within 72 hours), or external independent review (applicable after internal appeals are exhausted or for specific denial types). Expedited appeal is appropriate when the patient's health would be seriously jeopardized by a delay.
            </p>
          </div>
        </li>
        <li className={s.step}>
          <span className={s.stepNum}>3</span>
          <div className={s.stepBody}>
            <p className={s.stepTitle}>Gather additional documentation — Days 2–5</p>
            <p className={s.stepDesc}>
              Pull the full clinical record relevant to the denial. For medical necessity denials: prior treatment notes, diagnostic results, functional assessments, and specialist consult notes. For step therapy denials: prescription history, adverse reaction documentation, clinical rationale for bypassing required agents. For experimental denials: peer-reviewed literature, society guidelines (AMA, ACC, AAFP), and FDA status documents.
            </p>
          </div>
        </li>
        <li className={s.step}>
          <span className={s.stepNum}>4</span>
          <div className={s.stepBody}>
            <p className={s.stepTitle}>Write the appeal letter — Days 3–7</p>
            <p className={s.stepDesc}>
              The appeal letter must be specific, clinical, and reference the payer's own stated criteria. Generic appeal letters are denied at high rates. Address each denial reason point-by-point. Reference clinical guidelines by name and publication. Connect the patient's specific clinical presentation to the requested service's necessity. The treating provider should write or substantially contribute to this letter — not just sign it.
            </p>
          </div>
        </li>
        <li className={s.step}>
          <span className={s.stepNum}>5</span>
          <div className={s.stepBody}>
            <p className={s.stepTitle}>Submit with deadline tracking — By Day 7 (at latest)</p>
            <p className={s.stepDesc}>
              Submit the appeal with all supporting documentation. Record the confirmation number and submission date. Calendar a follow-up date 14 days post-submission. If the appeal deadline is approaching, prioritize submission over perfecting the appeal letter — a submitted appeal can be supplemented; a missed deadline cannot be recovered.
            </p>
          </div>
        </li>
      </ol>
    </div>

    <div className={s.section}>
      <h2 className={s.sectionH2}>Peer-to-Peer Review Protocol</h2>
      <p className={s.p}>
        For medical necessity denials, a peer-to-peer review between the treating provider and the payer's medical director is often the single highest-return action available. Practices with structured P2P protocols report reversal rates of 50–70% for well-prepared calls.
      </p>
      <div className={s.infoBox}>
        <p className={s.infoBoxText}>
          <strong>When to request:</strong> Request the P2P within 24–48 hours of receiving a medical necessity denial. Most payers allow P2P requests for 5–14 days post-denial, but requesting early signals urgency and gets the appointment scheduled while the clinical details are fresh.
        </p>
      </div>
      <p className={s.p}><strong>Preparation for the P2P call (3 things the provider should have ready):</strong></p>
      <ul className={s.checklist}>
        <li className={s.checkItem}><span className={s.checkbox} />3 specific clinical talking points about why this patient, with this presentation, needs this specific service rather than an alternative</li>
        <li className={s.checkItem}><span className={s.checkbox} />2 guideline citations (e.g., "According to the American College of Pain Medicine 2024 guidelines, patients with [diagnosis] who have failed [X] conservative treatments are appropriate candidates for [procedure]")</li>
        <li className={s.checkItem}><span className={s.checkbox} />Patient-specific factors that make alternative treatments insufficient (comorbidities, prior treatment failures, functional limitations)</li>
      </ul>
      <div className={s.infoBox}>
        <p className={s.infoBoxText}>
          <strong>Opening script for the P2P call:</strong> "I'm calling to discuss a denial for [procedure/service] for my patient [initials or MRN]. I'd like to review the specific criteria used for the denial and share clinical information that I believe supports medical necessity for this patient. I understand you reviewed our original submission — can you tell me which specific criteria were not met so I can address each one directly?"
        </p>
      </div>
    </div>

    <div className={s.section}>
      <h2 className={s.sectionH2}>Payer-Specific Timing Rules</h2>
      <div className={s.tableWrap}>
        <table className={s.table}>
          <thead>
            <tr>
              <th>Payer</th>
              <th>First-Level Appeal Deadline</th>
              <th>Expedited Appeal Deadline</th>
              <th>P2P Request Window</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Medicare (Part B/Advantage)</td>
              <td>120 days from denial</td>
              <td>72-hour response required for urgent</td>
              <td>Not standardized; request immediately</td>
            </tr>
            <tr>
              <td>UnitedHealthcare</td>
              <td>180 days from denial</td>
              <td>72-hour response required</td>
              <td>Within 14 days of denial</td>
            </tr>
            <tr>
              <td>Anthem/BCBS</td>
              <td>60–180 days (varies by state)</td>
              <td>72-hour response required</td>
              <td>Within 5 business days</td>
            </tr>
            <tr>
              <td>Aetna</td>
              <td>180 days from denial</td>
              <td>72-hour response required</td>
              <td>Within 14 days of denial</td>
            </tr>
            <tr>
              <td>Cigna</td>
              <td>180 days from denial</td>
              <td>72-hour response required</td>
              <td>Within 14 days of denial</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className={s.p}>
        Note: Payer policies change. Verify current deadlines directly from the denial letter or the payer's provider manual at the time of each denial. Do not rely on historical records for deadline calculation.
      </p>
    </div>

    <div className={s.section}>
      <h2 className={s.sectionH2}>Appeal Letter Template Framework</h2>
      <p className={s.p}>Use this paragraph structure for every formal appeal letter:</p>
      <div className={s.infoBox}>
        <p className={s.infoBoxText}>
          <strong>Paragraph 1 — Patient Identification:</strong> "This appeal is submitted on behalf of [Patient Name], DOB [XX/XX/XXXX], Member ID [XXXX], for services rendered on [Date] at [Facility/Practice Name], NPI [XXXXXXXX]."
        </p>
      </div>
      <div className={s.infoBox}>
        <p className={s.infoBoxText}>
          <strong>Paragraph 2 — Denial Reference:</strong> "We are appealing the denial issued on [Denial Date], Reference Number [XXXX], citing [specific denial reason as stated on denial notice]. We respectfully disagree with this determination for the following reasons."
        </p>
      </div>
      <div className={s.infoBox}>
        <p className={s.infoBoxText}>
          <strong>Paragraph 3 — Clinical Summary:</strong> Provide 3–5 sentences summarizing the patient's diagnosis, relevant history, prior treatments attempted, and current functional status. Be specific and clinical. This is the core of the appeal and should be written by or with the treating provider.
        </p>
      </div>
      <div className={s.infoBox}>
        <p className={s.infoBoxText}>
          <strong>Paragraph 4 — Supporting Documentation List:</strong> "Attached to this appeal are the following supporting documents: [List each document by name]. These documents demonstrate that [requested service] meets your plan's criteria for [medical necessity/coverage]."
        </p>
      </div>
      <div className={s.infoBox}>
        <p className={s.infoBoxText}>
          <strong>Paragraph 5 — Closing Request:</strong> "We respectfully request that [Payer Name] reverse the denial and authorize [procedure/service] for this patient. Please contact [Name] at [Phone/Email] with any questions or to schedule a peer-to-peer review with the treating provider."
        </p>
      </div>
    </div>
  </div>
)

export default function PreAuthDenialPlaybookPage() {
  return (
    <>
      <NavInner />
      <main>
        <ResourceHero
          type="Guide"
          title="Prior Auth Denial Playbook: Win More Appeals"
          subtitle="The documentation, timing, and language that reverses prior auth denials."
        />
        <ResourcePreview items={previewItems} />
        <ResourceForm
          resourceSlug="pre-auth-denial-playbook"
          resourceTitle="Prior Auth Denial Playbook: Win More Appeals"
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
