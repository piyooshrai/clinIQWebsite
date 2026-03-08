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

          <h2>Can a Practice Bill Both RTM and RPM?</h2>
          <p>
            Yes, with important caveats. A practice can legitimately bill both RTM and RPM for the
            same patient if the two monitoring programs address distinct clinical needs with distinct
            monitoring data. A patient with hypertension and a chronic musculoskeletal condition might
            have their blood pressure monitored under RPM (99454) while their physical therapy
            adherence and pain response are monitored under RTM (98977). The two programs are
            clinically and documentationally separate.
          </p>
          <p>
            What practices cannot do is bill RPM and RTM for overlapping clinical services for the
            same patient in the same period. If a practice is providing general health monitoring
            that could be characterized as either physiologic or therapeutic and bills both code sets
            for the same monitoring activity, that is a billing error with audit risk. The programs
            must address different clinical conditions or different monitoring objectives with
            separately documented consent, monitoring plans, and review records.
          </p>
          <p>
            In practice, dual RTM/RPM billing is most common in primary care and internal medicine
            practices with broad patient panels. These practices may have patients who are both
            managing chronic conditions requiring physiologic monitoring (hypertension, diabetes)
            and recovering from or managing conditions requiring therapeutic monitoring
            (post-surgical rehabilitation, chronic musculoskeletal pain). For each patient, the
            appropriate program depends on what is actually being monitored and why.
          </p>

          <h2>Reimbursement Comparison</h2>
          <p>
            RTM and RPM reimbursement rates are broadly comparable under Medicare, with some variation
            by code. For 2026, the comparable code pairs are:
          </p>
          <ul>
            <li>Setup: RTM 98975 (~$19) vs. RPM 99453 (~$18 to $20)</li>
            <li>Device supply: RTM 98977 (~$48 to $55/month) vs. RPM 99454 (~$55 to $65/month)</li>
            <li>Treatment management, first 20 min: RTM 98980 (~$48 to $62/month) vs. RPM 99457 (~$50 to $65/month)</li>
            <li>Treatment management, additional 20 min: RTM 98981 (~$38 to $45) vs. RPM 99458 (~$38 to $45)</li>
          </ul>
          <p>
            The monthly combined revenue per patient is comparable between the two programs at
            roughly $100 to $130 per patient per month for the baseline two-code combination.
            The difference in commercial payer coverage &mdash; where RPM coverage is more
            consistently established than RTM coverage for some payer-specialty combinations
            &mdash; can produce different effective blended rates depending on a practice&rsquo;s
            payer mix. Practices that have a high proportion of commercial patients should verify
            RTM coverage with each commercial payer before comparing the revenue opportunity.
          </p>

          <h2>The Supervision Requirement Difference</h2>
          <p>
            One practically significant difference between RTM and RPM is the supervision model
            for clinical staff time. For RPM (99457, 99458), the service must be provided by
            the billing practitioner or by clinical staff under direct or general physician supervision,
            and the physician must personally interact with the patient during the billing month.
            For RTM (98980, 98981), there is no requirement that the billing practitioner personally
            interact with the patient in every billing month &mdash; clinical staff can perform
            monitoring and management services under general supervision without requiring a monthly
            physician-patient interaction.
          </p>
          <p>
            This distinction matters significantly for high-volume RTM programs where the monitoring
            work is largely performed by clinical staff. Under RTM, a medical assistant or care
            coordinator can review monitoring data, document the review, interact with the patient
            as needed, and that time counts toward the 98980 threshold under general physician
            supervision &mdash; without requiring the physician to be present for each interaction.
            This is more operationally flexible than the RPM supervision model and is one reason
            that RTM is better suited to large panel monitoring programs in therapy and pain
            management settings.
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
