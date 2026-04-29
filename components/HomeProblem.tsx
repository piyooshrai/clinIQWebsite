import Link from 'next/link'
import s from './HomeSections.module.css'

const PAINS = [
  {
    h3: 'Long Wait Times Are Not a Staffing Problem — They\'re a Visibility Problem',
    body:
      'When no one can see where every patient is in real time, wait times stretch, front desk phones ring nonstop, and patients leave before they\'re seen. A proper patient queue management system doesn\'t just track waits — it eliminates the blind spots that cause them. Clinics on clinIQ see a 22% drop in wait times within the first month.',
  },
  {
    h3: 'You\'re Leaving $120–$150 Per Patient Monthly on the Table Right Now',
    body:
      'If your clinic qualifies for Remote Therapeutic Monitoring and you\'re not running RTM billing software that tracks it automatically, that revenue is gone — not deferred, gone. No EHR flags this for you. clinIQ does.',
  },
  {
    h3: 'Pre-Auth Denials Are Draining Your Staff and Delaying Patient Care',
    body:
      'Manual prior authorization means your staff is on hold with payers, rebuilding the same form three times, and watching treatment start dates slip. Pre-authorization automation that pulls from the patient record, applies payer rules, and tracks case status doesn\'t just save time — it saves the patient relationship.',
  },
  {
    h3: 'Your Check-In Process Is the First Impression — And It\'s Probably Broken',
    body:
      'Paper forms, front desk bottlenecks, and a waiting room full of people who have no idea how long they\'ll wait — that\'s not a minor inconvenience. It\'s a signal to your patients that the rest of the visit will feel the same way. Automated patient intake software fixes this before they sit down.',
  },
  {
    h3: 'Your EHR Was Never Built to Run Your Clinic — It Was Built to Document It',
    body:
      'Documentation and operations are two different problems. Your EHR solves one. clinIQ is the healthcare operations layer that solves the other — sitting on top of athenahealth, eClinicalWorks, NextGen, or any system you already run, without replacing a single thing your providers depend on.',
  },
]

export default function HomeProblem() {
  return (
    <section className={s.section} id="why-cliniq">
      <div className={s.container}>
        <div className={s.label}>
          <span className={s.labelLine} />
          <span>The Hidden Cost</span>
        </div>
        <h2 className={s.title}>
          Your Clinic Is Losing Time, Revenue, and Patients —{' '}
          <em className={s.titleEm}>And Your EHR Won&apos;t Tell You</em>
        </h2>
        <p className={s.intro}>
          You didn&apos;t open a clinic to manage a waiting room fire drill every morning.
          But that&apos;s what happens when your patient flow software is a whiteboard,
          your intake process is a clipboard, and your RTM billing depends on someone
          remembering to chart it. Here&apos;s what that actually costs:
        </p>

        <div className={s.painList}>
          {PAINS.map((p) => (
            <article key={p.h3} className={s.painItem}>
              <h3 className={s.painH3}>{p.h3}</h3>
              <p className={s.painBody}>{p.body}</p>
            </article>
          ))}
        </div>

        <div className={s.midCta}>
          <p className={s.midCtaText}>
            Every day without a real clinic operations platform is a day of revenue you
            won&apos;t recover. The fix takes one week.
          </p>
          <div className={s.midCtaActions}>
            <Link href="/demo" className={s.btnPrimary}>Request Demo</Link>
            <Link href="/features" className={s.btnGhost}>See How It Works</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
