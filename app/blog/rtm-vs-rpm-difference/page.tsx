import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import BlogHero from '@/components/BlogHero'
import BlogContent from '@/components/BlogContent'
import BlogCTA from '@/components/BlogCTA'

export const metadata: Metadata = {
  title: 'RTM vs RPM: Which One Applies to Your Practice?',
  description:
    'RTM and RPM are different CPT code sets with different eligibility criteria. Most PT, OT, and pain management practices qualify for RTM, not RPM. Here is the difference.',
  keywords: ['RTM vs RPM difference', 'remote therapeutic monitoring vs remote patient monitoring', 'CPT 98975 vs 99457'],
}

export default function RtmVsRpmDifferencePage() {
  return (
    <>
      <NavInner />
      <main>
        <BlogHero
          category="Billing"
          title="RTM vs RPM: Which One Applies to Your Practice?"
          date="March 2026"
          readTime="7 min"
        />
        <BlogContent>
          <p>
            Remote Therapeutic Monitoring (RTM) and Remote Patient Monitoring (RPM) are both
            valuable reimbursement pathways for practices that monitor patients between visits &mdash;
            but they apply to fundamentally different clinical situations, cover different types of
            data, and use completely different CPT code sets. Confusing the two is one of the most
            common mistakes practices make when exploring remote monitoring billing, and the
            confusion tends to resolve in one of two unhelpful directions: either the practice
            bills incorrectly and faces denials, or it concludes it doesn&rsquo;t qualify for
            anything and leaves significant revenue uncaptured. Understanding the actual distinction
            is the starting point for billing either program correctly.
          </p>

          <h2>The Key Difference</h2>
          <p>
            The foundational difference between RTM and RPM is the type of data being monitored.
            RPM monitors physiologic data &mdash; objective, device-measured health metrics like
            blood pressure, heart rate, blood glucose, oxygen saturation, and weight. RTM monitors
            therapeutic data &mdash; information about how patients are responding to and adhering
            to their treatment plan, including musculoskeletal function, pain levels, therapy
            adherence, medication adherence, and behavioral health metrics.
          </p>
          <p>
            This distinction has significant clinical implications. RPM is designed for patients
            with chronic conditions where physiologic measurement is the central monitoring need
            &mdash; hypertension, diabetes, heart failure, COPD. RTM is designed for patients
            undergoing active therapeutic treatment where adherence and functional response are the
            central monitoring needs &mdash; post-surgical rehabilitation, chronic pain management,
            physical therapy, occupational therapy, behavioral health treatment.
          </p>
          <p>
            A patient recovering from knee replacement surgery does not need their blood pressure
            monitored remotely &mdash; their surgeon needs to know whether they are doing their
            home exercises, how their pain is responding to activity, and whether their functional
            range of motion is improving on trajectory. That is an RTM use case. A patient with
            hypertension does not need their therapy adherence monitored &mdash; their cardiologist
            needs to see their daily blood pressure readings. That is an RPM use case.
          </p>

          <h2>What RTM Covers</h2>
          <p>
            Remote Therapeutic Monitoring (RTM) was established as a distinct billing category in
            2022 and covers the monitoring of non-physiologic therapeutic data. The covered data
            categories include musculoskeletal system status, respiratory system status, therapy
            adherence, and therapy response. In practice, this translates to monitoring programs
            built around home exercise compliance, pain level tracking, functional outcome measures,
            medication adherence for therapeutic regimens, and behavioral health metric tracking.
          </p>
          <p>
            RTM is billed using CPT codes 98975 through 98981. Code 98975 covers initial setup and
            patient education on the use of the RTM equipment. Code 98976 covers the device supply
            for respiratory system monitoring. Code 98977 covers the device supply for
            musculoskeletal system monitoring. Codes 98980 and 98981 cover the clinical staff and
            practitioner time spent reviewing data and interacting with the patient &mdash; 98980
            for the first 20 minutes of monthly interaction, and 98981 for each additional 20-minute
            increment.
          </p>
          <p>
            A key point about RTM is that clinical staff &mdash; not just physicians &mdash; can
            perform the monitoring and interaction under RTM. Physical therapists, occupational
            therapists, speech-language pathologists, and other qualified healthcare professionals
            can bill RTM under their own NPI, which is not the case for all RPM codes.
          </p>

          <h2>What RPM Covers</h2>
          <p>
            Remote Patient Monitoring (RPM) has been available since 2019 and covers the collection,
            transmission, and clinical management of physiologic data. The code set runs from
            99453 through 99458. Code 99453 covers setup and patient education. Code 99454 covers
            the supply of the monitoring device. Codes 99457 and 99458 cover practitioner time
            spent reviewing data and communicating with the patient &mdash; 99457 for the first 20
            minutes monthly, and 99458 for each additional 20-minute increment.
          </p>
          <p>
            RPM applies to patients with diagnosed chronic conditions where ongoing physiologic
            measurement adds clinical value. The most common RPM applications are hypertension
            (blood pressure monitoring), diabetes (glucose monitoring), heart failure (weight and
            fluid status), and COPD (oxygen saturation). Primary care practices, cardiologists,
            endocrinologists, and pulmonologists are the primary RPM billing specialties.
          </p>

          <h2>CPT Code Comparison</h2>
          <p>
            For practices evaluating which program applies, the code comparison breaks down as
            follows. RTM setup is billed under 98975; RPM setup under 99453. RTM device supply
            uses 98976 or 98977 depending on the system monitored; RPM device supply uses 99454.
            RTM practitioner time uses 98980 and 98981; RPM practitioner time uses 99457 and
            99458. The reimbursement rates are broadly comparable across the two code sets, though
            specific rates vary by payer, year, and geographic region.
          </p>
          <p>
            The critical distinction in payer coverage is that Medicare covers both RTM and RPM,
            but commercial payer coverage varies significantly. Many commercial payers that cover
            RPM have been slower to cover RTM, though coverage has expanded substantially since
            2023. Before implementing either program, verifying payer-specific coverage for your
            patient population is essential.
          </p>

          <h2>Which Specialties Qualify for Which</h2>
          <p>
            Physical therapy, occupational therapy, and speech-language pathology practices almost
            exclusively qualify for RTM. They do not generate the physiologic monitoring data
            required for RPM, but they are perfectly positioned for RTM&rsquo;s therapeutic
            monitoring framework. Pain management practices similarly qualify primarily for RTM
            when monitoring functional outcomes and medication adherence for musculoskeletal
            conditions. Behavioral health practices qualify for RTM under the behavioral health
            monitoring codes.
          </p>
          <p>
            Primary care, cardiology, endocrinology, and pulmonology practices are the natural
            home of RPM. These specialties manage the chronic conditions &mdash; hypertension,
            diabetes, heart failure, COPD &mdash; where physiologic remote monitoring adds clear
            clinical value and has the strongest reimbursement support.
          </p>
          <p>
            Some specialties can legitimately bill both. A family medicine practice might bill
            RPM for a hypertensive patient and RTM for a patient recovering from a musculoskeletal
            injury. An internal medicine practice managing a patient with both diabetes and chronic
            low back pain might use both monitoring programs for different aspects of that patient&rsquo;s
            care.
          </p>

          <h2>Common Misconceptions</h2>
          <p>
            The most common misconception is that RPM is the &ldquo;real&rdquo; remote monitoring
            program and RTM is newer and less supported. In practice, RTM has strong Medicare
            coverage and growing commercial coverage, and it applies to a broader range of outpatient
            practices than RPM does. The practices that dismiss RTM because they&rsquo;ve heard
            more about RPM are often leaving more revenue on the table than the practices that
            dismiss RPM because they assume remote monitoring doesn&rsquo;t apply to them.
          </p>
          <p>
            A second misconception is that remote monitoring requires expensive, clinic-supplied
            devices. While device supply is part of the billing equation for both RTM and RPM,
            many RTM applications use patient smartphones and simple app-based monitoring rather
            than dedicated medical devices &mdash; which lowers the program startup cost
            significantly and improves patient participation rates.
          </p>
          <p>
            If you are a physical therapist, occupational therapist, pain management specialist,
            or behavioral health provider, RTM is almost certainly the right program for your
            practice. If you are a primary care physician managing chronic disease, RPM is likely
            the better fit. And if you are still unsure, the answer is usually in the data: what
            are you monitoring, and why? Physiologic data points to RPM. Therapeutic data points
            to RTM.
          </p>
        </BlogContent>
        <BlogCTA
          ctaLabel="Start Your RTM Program"
          description="ClinIQ helps therapy and pain management practices implement RTM correctly &mdash; from patient enrollment through monthly billing."
        />
      </main>
      <FooterInner />
    </>
  )
}
