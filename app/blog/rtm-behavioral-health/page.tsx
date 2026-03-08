import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import BlogHero from '@/components/BlogHero'
import BlogContent from '@/components/BlogContent'
import BlogCTA from '@/components/BlogCTA'

export const metadata: Metadata = {
  title: 'RTM for Behavioral Health: What You Need to Know',
  description:
    'Behavioral health practices can bill RTM for mood tracking, therapy adherence, and behavioral monitoring using CPT 98978. Here is how to structure the program and bill correctly.',
  keywords: ['RTM behavioral health', 'remote therapeutic monitoring psychiatry', 'behavioral health billing 2026'],
}

export default function RtmBehavioralHealthPage() {
  return (
    <>
      <NavInner />
      <main>
        <BlogHero
          category="Behavioral Health"
          title="RTM for Behavioral Health: What You Need to Know"
          date="March 2026"
          readTime="6 min"
        />
        <BlogContent>
          <p>
            Behavioral health practices have long operated in a clinical context where what happens
            between appointments matters enormously and is almost entirely invisible. A patient&rsquo;s
            mood trajectory between sessions, their adherence to therapy homework, the quality of
            their sleep, the frequency of their panic attacks &mdash; these data points are clinically
            significant, but in a traditional outpatient behavioral health model, the clinician only
            learns about them in the next scheduled session, if the patient accurately recalls and
            reports them. Remote Therapeutic Monitoring offers behavioral health providers a
            reimbursed pathway for monitoring these metrics between visits &mdash; and CPT 98978
            exists specifically for this purpose.
          </p>

          <h2>Behavioral Health RTM Eligibility</h2>
          <p>
            Behavioral health practices &mdash; including psychiatry, psychology, licensed clinical
            social work, licensed professional counseling, and marriage and family therapy practices
            &mdash; are eligible to bill RTM when they are providing ongoing therapeutic monitoring
            of behavioral health conditions for enrolled patients. The key eligibility requirements
            are that the practice has an active treatment relationship with the patient, that the
            patient has a behavioral health diagnosis that warrants monitoring, and that the practice
            has implemented a structured monitoring program with the patient&rsquo;s consent.
          </p>
          <p>
            Diagnoses that commonly qualify for behavioral health RTM include major depressive
            disorder, generalized anxiety disorder, bipolar disorder, post-traumatic stress disorder,
            obsessive-compulsive disorder, panic disorder, eating disorders, and substance use
            disorders in treatment. The practice does not need to use every available monitoring
            metric for every diagnosis &mdash; the monitoring plan should be tailored to the
            specific clinical needs of the individual patient.
          </p>
          <p>
            An important eligibility nuance: behavioral health RTM under 98978 can be billed
            alongside traditional psychotherapy or evaluation and management services in the same
            month. The RTM billing covers the monitoring and management work done between sessions
            &mdash; it does not replace or duplicate the in-session billing.
          </p>

          <h2>CPT 98978 Explained</h2>
          <p>
            CPT 98978 is the device supply code for behavioral health remote therapeutic monitoring.
            It is billable once per 30-day period when a device or software tool has been supplied
            to the patient for behavioral health monitoring, the patient has transmitted data on at
            least 16 of the 30 days, and the data has been reviewed by clinical staff or the
            practitioner. The reimbursement rate under Medicare for 98978 is comparable to 98977
            (musculoskeletal), in the range of $45 to $55 per month depending on geographic
            adjustment.
          </p>
          <p>
            As with other RTM device supply codes, 98978 pairs with 98980 and 98981 for treatment
            management services. The 20-minute monthly interaction threshold applies identically to
            behavioral health RTM: at least 20 minutes of staff or practitioner time must be spent
            on RTM services &mdash; data review, clinical decision-making, and patient interaction
            &mdash; to bill 98980 in a given month. The combination of 98978 and 98980 generates
            the baseline monthly RTM revenue for behavioral health patients.
          </p>

          <h2>What Gets Monitored</h2>
          <p>
            The monitoring menu for behavioral health RTM is wide and should be configured to match
            the specific therapeutic goals for each patient. Common monitoring domains include mood
            tracking (daily mood ratings using validated scales like PHQ-2 or GAD-2 items), sleep
            quality and duration self-report, medication adherence for psychiatric medications,
            therapy homework completion, behavioral activation tracking, and symptom-specific
            monitoring (panic attack frequency, obsessive thought intrusions, substance use episodes).
          </p>
          <p>
            The monitoring tool does not need to be a sophisticated medical device. Many behavioral
            health RTM implementations use validated questionnaire platforms or smartphone apps
            that prompt patients to complete brief daily or weekly check-ins. The key requirements
            are that the tool captures and transmits data in a way that the practice can review,
            that the patient uses it consistently enough to meet the 16-day threshold, and that the
            data collected is clinically meaningful to the treating provider.
          </p>
          <p>
            Validated instruments that patients complete digitally &mdash; the PHQ-9, GAD-7, PC-PTSD-5,
            mood diaries &mdash; are natural fits for behavioral health RTM because they generate
            structured, comparable data that practitioners can review quickly and interpret against
            established clinical benchmarks. A patient whose weekly PHQ-9 scores are trending upward
            between sessions is generating an early warning signal that a traditional outpatient model
            would miss entirely.
          </p>

          <h2>The Documentation Requirement</h2>
          <p>
            Documentation for behavioral health RTM follows the same framework as other RTM
            specialties: enrollment consent and plan, evidence of 16-day data collection, clinical
            review notes, and time tracking for treatment management services. The clinical review
            note for behavioral health RTM should reflect that the practitioner or clinical staff
            reviewed the monitoring data, interpreted it in the context of the patient&rsquo;s
            treatment goals, and made a clinical determination &mdash; even if that determination
            is that no intervention is indicated.
          </p>
          <p>
            A note that reads &ldquo;Reviewed patient&rsquo;s mood tracking data for the period. PHQ-2
            scores ranged from 2 to 4, consistent with mild to moderate symptoms. No significant
            change from prior period. Patient reported two nights of disrupted sleep, discussed in
            upcoming session.&rdquo; is a complete, defensible behavioral health RTM review note.
            It shows data was received, reviewed, and clinically interpreted without meeting a
            billing threshold that required a separate interaction.
          </p>
          <p>
            When a patient&rsquo;s monitoring data prompts an outreach &mdash; a call, a message,
            an early session &mdash; that interaction should be documented separately with the time
            spent, as it contributes to the 20-minute treatment management threshold.
          </p>

          <h2>Payer Coverage for BH RTM</h2>
          <p>
            Medicare covers behavioral health RTM under CPT 98978 for psychiatrists, psychologists,
            and licensed clinical social workers who meet Medicare enrollment requirements. Coverage
            for other behavioral health provider types depends on Medicare enrollment status and
            clinical role.
          </p>
          <p>
            Commercial payer coverage for behavioral health RTM is more variable than for
            musculoskeletal or respiratory RTM. Some major commercial payers have published specific
            behavioral health RTM coverage policies; others have not yet issued explicit guidance.
            In the absence of explicit guidance, some practices have successfully billed behavioral
            health RTM under existing telehealth and remote monitoring policies. Checking with each
            payer directly before enrolling commercial patients is the most reliable approach.
          </p>

          <h2>Common Questions</h2>
          <p>
            Can a practice bill behavioral health RTM and Collaborative Care Management (CoCM) in
            the same month for the same patient? CMS guidance indicates that practices should not
            bill both RTM and CoCM for the same patient in the same period, as the services overlap
            significantly. If a patient is enrolled in CoCM, that program should take precedence.
          </p>
          <p>
            Can RTM be billed during months when the patient has no scheduled therapy sessions?
            Yes. RTM billing is independent of the in-session billing cycle. A patient who is between
            therapy sessions but still enrolled in active RTM monitoring can generate billable RTM
            claims in months with no face-to-face sessions, provided the monitoring and management
            thresholds are met.
          </p>
          <p>
            Behavioral health RTM is not yet universally adopted, which means the practices that
            implement it correctly in 2026 have a significant revenue advantage over their peers.
            The clinical case is clear: better between-session visibility leads to earlier
            intervention, better outcomes, and stronger therapeutic relationships. The financial
            case is equally clear: $120 to $160 per enrolled patient per month, from work you are
            already doing, paid by Medicare and a growing list of commercial payers. The question is
            not whether behavioral health RTM makes sense. It is whether you are set up to capture it.
          </p>
        </BlogContent>
        <BlogCTA
          ctaLabel="Start Your BH RTM Program"
          description="ClinIQ helps behavioral health practices implement RTM with compliant documentation, 16-day tracking, and automated monthly billing."
        />
      </main>
      <FooterInner />
    </>
  )
}
