import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import BlogHero from '@/components/BlogHero'
import BlogContent from '@/components/BlogContent'
import BlogCTA from '@/components/BlogCTA'

export const metadata: Metadata = {
  title: 'CPT 98977: Musculoskeletal RTM Billing Explained',
  description:
    'A deep dive into CPT 98977 for musculoskeletal RTM device supply billing. Covered conditions, documentation requirements, payer coverage, and how to pair with the full RTM code set.',
  keywords: ['CPT 98977', 'musculoskeletal RTM billing', 'remote therapeutic monitoring orthopedic'],
}

export default function Cpt98977MusculoskeletalPage() {
  return (
    <>
      <NavInner />
      <main>
        <BlogHero
          category="Billing"
          title="CPT 98977: Musculoskeletal RTM Billing Explained"
          date="March 2026"
          readTime="8 min"
        />
        <BlogContent>
          <p>
            CPT 98977 is the Remote Therapeutic Monitoring code for the supply of a device used
            to monitor musculoskeletal system status. It is one of the most valuable codes in the
            RTM series for orthopedic, physical therapy, and pain management practices &mdash;
            and one of the most frequently underbilled. Most practices that run RTM programs for
            musculoskeletal patients either fail to bill 98977 at all, bill it without pairing
            it correctly with the other RTM codes, or apply it to patients who don&rsquo;t meet
            the documentation requirements. Understanding what 98977 covers, who qualifies, and
            how to build a compliant billing workflow around it is worth real money to any
            practice treating musculoskeletal conditions.
          </p>

          <h2>What CPT 98977 Covers</h2>
          <p>
            CPT 98977 covers the supply of a medical device used for remote monitoring of
            musculoskeletal system status, including the transmission of data to the billing
            practitioner or their clinical staff. It is billable once per 30-day period per
            patient and requires that the device actually be used &mdash; meaning data must
            have been collected and transmitted during the billing period.
          </p>
          <p>
            The &ldquo;device&rdquo; in this context does not require a traditional medical
            device in all implementations. CMS guidance on RTM device supply allows for
            software-based monitoring tools, including smartphone applications, that collect
            and transmit musculoskeletal data. This means a patient using a validated app to
            log home exercise completion, pain levels, and functional activity can generate
            billable 98977 data without a clinic-supplied hardware device &mdash; a significant
            practical advantage for practices managing large RTM panels.
          </p>
          <p>
            The data that qualifies as musculoskeletal system monitoring includes range of motion
            tracking, functional activity data, pain and symptom self-report, home exercise program
            adherence, and response to therapeutic interventions. The monitoring must be ongoing
            and must generate data that the practitioner or clinical staff reviews &mdash; not
            merely collected data that sits unreviewed.
          </p>

          <h2>Eligible Conditions and Diagnoses</h2>
          <p>
            CPT 98977 applies to patients with musculoskeletal system conditions being managed
            under an active therapeutic plan. The most common qualifying diagnoses include
            post-surgical rehabilitation following orthopedic procedures (total knee replacement,
            total hip replacement, rotator cuff repair, ACL reconstruction), chronic musculoskeletal
            pain conditions (low back pain, neck pain, shoulder pain, chronic joint pain), acute
            musculoskeletal injuries managed non-surgically, and inflammatory arthritis affecting
            musculoskeletal function.
          </p>
          <p>
            The diagnosis alone is not sufficient for billing eligibility. The patient must also
            be enrolled in an active RTM program with a defined monitoring plan, have provided
            consent for remote monitoring, and actually be generating and transmitting data during
            the billing period. A patient with a qualifying diagnosis who was enrolled in RTM
            but never used the monitoring device does not generate a billable 98977 claim for
            that period.
          </p>
          <p>
            The 16-day data collection requirement is the specific threshold: data must be collected
            and transmitted on at least 16 of the 30 days in the billing period for the device
            supply code to be billable. This threshold exists to ensure the monitoring is actually
            ongoing rather than a one-time data collection. Practices that bill 98977 without
            confirming the 16-day threshold has been met are a common audit finding.
          </p>

          <h2>Documentation Requirements</h2>
          <p>
            Documentation for CPT 98977 must support three elements: that a qualifying device was
            supplied, that the patient used the device to collect and transmit musculoskeletal data,
            and that the data was reviewed by the billing practitioner or clinical staff. The medical
            record should show the RTM enrollment, the device or software supplied, the dates of
            data transmission, and documentation that data was reviewed during the billing period.
          </p>
          <p>
            The patient enrollment record should include the signed consent for remote monitoring,
            the diagnosis being monitored, the monitoring plan, and the patient education provided
            regarding device use. This enrollment documentation serves as the foundation for all
            subsequent RTM billing for that patient and should be retained as part of the medical
            record.
          </p>
          <p>
            Data review documentation is particularly important and frequently incomplete in audit
            situations. The record should show that a staff member reviewed the patient&rsquo;s
            transmitted data and that the review was clinically meaningful &mdash; not just a
            notation that data was received, but a brief clinical note reflecting what was observed
            and whether any action was taken. This review note is the evidence that the monitoring
            program is functioning as intended.
          </p>

          <h2>Pairing with Other RTM Codes</h2>
          <p>
            CPT 98977 does not stand alone. It is part of a code series that, when billed correctly,
            generates significantly more revenue per patient than the device supply code alone.
            The full musculoskeletal RTM billing sequence for an established patient in a given
            month includes 98977 (device supply), plus 98980 (first 20 minutes of RTM treatment
            management services), plus 98981 if additional 20-minute increments of treatment
            management are documented.
          </p>
          <p>
            CPT 98975 (initial setup and patient education) is billable once per patient at
            enrollment and should be billed in the first month. This code is frequently missed
            in practices that start billing RTM without a complete understanding of the code series,
            representing revenue that cannot be recovered retroactively.
          </p>
          <p>
            The combination of 98975 (enrollment month only), 98977, 98980, and 98981 where
            applicable generates the full RTM revenue per patient per month. Practices that bill
            only 98977 and 98980, for example, are leaving the 98981 additional interaction time
            revenue on the table in months where their clinical staff document more than 20 minutes
            of treatment management.
          </p>

          <h2>Payer Coverage in 2026</h2>
          <p>
            Medicare covers CPT 98977 under the physician fee schedule, with reimbursement rates
            varying by locality. As of 2026, Medicare reimbursement for 98977 is in the range
            of $45 to $55 per patient per month depending on geographic adjustment. This rate
            is additive to the treatment management codes, so the full RTM revenue per patient
            per month under Medicare is typically $120 to $160 when all eligible codes are billed.
          </p>
          <p>
            Commercial payer coverage for 98977 has expanded significantly over the past two years.
            Major commercial payers including Aetna, UnitedHealthcare, Cigna, and Blue Cross Blue
            Shield plans in most markets now cover musculoskeletal RTM. However, coverage policies
            vary at the plan level, and prior authorization requirements differ by payer. Verifying
            coverage before enrolling a commercial patient in RTM is essential to avoid unbillable
            claims.
          </p>
          <p>
            Some Medicaid plans cover musculoskeletal RTM, but coverage is highly variable by
            state. State Medicaid programs that have adopted value-based care arrangements are more
            likely to cover RTM than those still operating on traditional fee-for-service models.
            Checking your state Medicaid fee schedule for 98977 is the fastest way to determine
            Medicaid eligibility in your market.
          </p>

          <h2>Billing Workflow Step by Step</h2>
          <p>
            A compliant 98977 billing workflow starts at enrollment: identify the eligible patient,
            obtain written consent, document the diagnosis and monitoring plan, provide device or
            software setup, and bill 98975 for the setup visit. During each 30-day monitoring
            period, confirm that data is being collected on at least 16 days, conduct staff review
            of transmitted data, document the review in the medical record, and track the total
            time spent on treatment management services.
          </p>
          <p>
            At the end of each billing period, generate claims for 98977 (confirming 16-day data
            threshold), 98980 (confirming at least 20 minutes of treatment management time is
            documented), and 98981 for any additional 20-minute increments. Attach the supporting
            documentation &mdash; data receipt records, review notes, time log &mdash; to the
            claim or retain it in the record for audit purposes.
          </p>
          <p>
            The practices that maximize 98977 revenue are the ones that build the workflow into their
            monthly billing cycle rather than treating it as an add-on. Assigned staff responsibility
            for tracking 16-day compliance, a documentation template for data review notes, and a
            monthly billing trigger for the RTM code set are the operational components that make
            consistent, compliant RTM billing achievable at scale.
          </p>
        </BlogContent>
        <BlogCTA
          ctaLabel="Build Your RTM Billing Workflow"
          description="ClinIQ tracks 16-day data thresholds, documents interactions, and triggers billing for the full RTM code series &mdash; automatically."
        />
      </main>
      <FooterInner />
    </>
  )
}
