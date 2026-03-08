import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import BlogHero from '@/components/BlogHero'
import BlogContent from '@/components/BlogContent'
import BlogCTA from '@/components/BlogCTA'

export const metadata: Metadata = {
  title: 'Getting Patients to Enroll in RTM: What Actually Works',
  description:
    'Most RTM programs fail at enrollment, not billing. Scripts for introducing RTM to patients, what to say and what not to say, and how to eliminate technology friction.',
  keywords: ['RTM patient enrollment', 'RTM consent', 'remote therapeutic monitoring patient engagement'],
}

export default function RtmPatientEnrollmentPage() {
  return (
    <>
      <NavInner />
      <main>
        <BlogHero
          category="Billing"
          title="Getting Patients to Enroll in RTM: What Actually Works"
          date="March 2026"
          readTime="6 min"
        />
        <BlogContent>
          <p>
            The most common reason RTM programs underperform is not billing errors. It is not
            documentation failures or payer denials. The most common reason is that most eligible
            patients never enroll. A practice that has correctly identified its RTM-eligible
            population, built a compliant billing workflow, and trained its clinical staff on
            documentation may still be capturing less than 15% of its potential RTM revenue because
            the enrollment rate is low. The good news is that low enrollment is not a patient
            problem &mdash; it is a conversation problem. And conversations can be scripted,
            trained, and improved.
          </p>

          <h2>Why Patients Decline (and How to Address It)</h2>
          <p>
            Patients decline RTM enrollment for a small number of reasons that come up consistently
            across practice types and patient demographics. The most common is privacy concern: they
            worry they are being &ldquo;tracked&rdquo; in a way that feels surveillance-like. The
            second is technology anxiety: they don&rsquo;t think they can figure out the app. The
            third is skepticism about value: they don&rsquo;t see why they would benefit from
            logging information for the clinic. The fourth is simple inertia: they don&rsquo;t say
            no, they just never complete enrollment, and the practice never follows up.
          </p>
          <p>
            Each of these objections has a specific response. Privacy concern responds to framing
            RTM as a clinical care tool rather than a monitoring tool &mdash; and to making it
            clear that the data is private, used only by their care team, and not shared with
            anyone else. Technology anxiety responds to a live demonstration of the app at the
            point of enrollment, showing the patient that the interface is simple enough for anyone.
            Value skepticism responds to a concrete explanation of how the monitoring benefits them:
            the practice will catch problems earlier, they will be able to communicate with the
            team between visits, and their provider will have more information when they do come in.
            Inertia responds to a structured follow-up process that doesn&rsquo;t let incomplete
            enrollments fall through the cracks.
          </p>

          <h2>The Enrollment Conversation Script</h2>
          <p>
            The enrollment conversation matters more than any other variable in RTM program success.
            Practices where every provider and clinical staff member introduces RTM the same way have
            higher enrollment rates than practices where RTM is discussed inconsistently, because
            consistency ensures every eligible patient hears the ask.
          </p>
          <p>
            An effective RTM introduction sounds something like this: &ldquo;One of the things we
            do for patients we&rsquo;re actively treating is a program called Remote Therapeutic
            Monitoring. Basically, it&rsquo;s a simple app on your phone that lets you log your
            progress between visits &mdash; things like how your exercises are going, your pain
            levels, how you&rsquo;re feeling. Our team reviews that information regularly, and if
            anything looks like it needs attention before your next appointment, we&rsquo;ll reach
            out. It&rsquo;s covered by your insurance, so there&rsquo;s no extra cost to you.
            Would you like to try it?&rdquo;
          </p>
          <p>
            Notice what this script does and does not do. It leads with patient benefit, not
            clinical monitoring. It emphasizes insurance coverage to remove cost as an objection.
            It ends with a direct, low-pressure ask. It does not use clinical jargon like
            &ldquo;CPT 98977&rdquo; or &ldquo;remote therapeutic monitoring program.&rdquo; It
            does not present RTM as optional in a way that suggests the right answer is no.
          </p>
          <p>
            What not to say: &ldquo;We have this billing program for remote monitoring if you
            want to participate.&rdquo; This frames RTM as something that serves the practice&rsquo;s
            billing needs rather than the patient&rsquo;s care needs, and it invites the patient
            to say no. &ldquo;It&rsquo;s totally optional, no big deal if you don&rsquo;t want to&rdquo;
            similarly signals that declining is the path of least resistance.
          </p>

          <h2>Timing the Ask</h2>
          <p>
            When the enrollment conversation happens matters almost as much as how it happens.
            The highest-conversion moments are at the start of a new treatment episode &mdash;
            the first therapy visit, the post-procedure follow-up appointment, the initial
            evaluation. At these moments, the patient is engaged with their care, motivated to
            improve, and open to tools that will help them get better. Introducing RTM as
            part of the treatment program from the beginning normalizes it as standard of care.
          </p>
          <p>
            The worst time to introduce RTM is as an afterthought at the end of an appointment
            when the patient is mentally already out the door. Patients who are distracted, in a
            hurry, or simply tired from the appointment are unlikely to engage meaningfully with
            an enrollment conversation. If RTM is introduced at all in that context, it should
            be a brief mention with a follow-up: &ldquo;I want to tell you about something we do
            for our patients between visits. I&rsquo;ll have someone follow up with you about it
            before your next appointment.&rdquo;
          </p>
          <p>
            Pre-visit enrollment is the highest-efficiency approach when achievable. Sending a
            brief message before the appointment &mdash; &ldquo;Before your visit, we&rsquo;d like
            to get you set up on our between-visit monitoring program. Here&rsquo;s a link to
            learn more and download the app&rdquo; &mdash; allows patients to review it at their
            own pace and arrive at the appointment already familiar with it.
          </p>

          <h2>Technology Friction Is the Silent Killer</h2>
          <p>
            Even patients who agree to enroll will abandon RTM if the technology is hard to use.
            The most common technology friction points are: an enrollment flow that requires more
            than 3 steps, an app that is not mobile-first or that requires a desktop login, a
            monitoring interface that is confusing or visually overwhelming, and notification
            settings that bombard patients with alerts. Any of these friction points will cause
            patients who are nominally enrolled to stop engaging within the first two weeks.
          </p>
          <p>
            The benchmark for RTM technology usability is that a patient should be able to complete
            a monitoring check-in in under 90 seconds. If it takes longer than that, the check-in
            frequency will drop. A patient who checks in every day in week 1 and every other day
            in week 2 and twice in week 3 is on a trajectory to fall below the 16-day threshold
            &mdash; not because they are non-compliant, but because the friction exceeded the
            motivation.
          </p>
          <p>
            Before selecting an RTM platform, test the patient-facing flow with someone who is not
            technically inclined. If they find it confusing, your patients will too. The clinical
            team&rsquo;s comfort with the platform is secondary to the patient&rsquo;s ease of use,
            because the patient&rsquo;s data collection is what makes the billing possible.
          </p>

          <h2>Tracking Enrollment Rate</h2>
          <p>
            RTM enrollment rate should be a visible operational metric in any practice running an
            RTM program. The metric is simple: eligible patients divided by enrolled patients, tracked
            monthly. A practice that is identifying 50 RTM-eligible patients per month and enrolling
            12 has an enrollment rate of 24%. That rate should be a discussion item in monthly
            operations meetings until it reaches a target of 40% to 60%.
          </p>
          <p>
            Enrollment rate is also a provider-level metric. When practices track enrollment by
            provider, they consistently find significant variance &mdash; some providers present
            RTM to nearly every eligible patient, others almost never mention it. Bringing this
            data to provider attention is not punitive; it is informative. The provider with a 10%
            enrollment rate probably doesn&rsquo;t know their rate is that low, and seeing the
            comparison often motivates a behavioral change without requiring a formal policy
            intervention.
          </p>
          <p>
            RTM enrollment is ultimately a sales and communication problem, not a clinical problem.
            The patients who need it are there. The coverage is in place. The workflow is set up.
            The only gap is the conversation that turns an eligible patient into an enrolled one.
            That conversation can be scripted, trained, measured, and improved &mdash; and the
            revenue impact of improving it compounds every month.
          </p>
        </BlogContent>
        <BlogCTA
          ctaLabel="Improve Your RTM Enrollment Rate"
          description="ClinIQ includes enrollment workflows, patient communication templates, and enrollment rate tracking to help practices hit 50%+ RTM adoption."
        />
      </main>
      <FooterInner />
    </>
  )
}
