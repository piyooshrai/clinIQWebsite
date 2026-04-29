import FaqAccordion from './FaqAccordion'
import s from './HomeSections.module.css'

export const HOME_FAQS = [
  {
    q: 'What is clinic operations software and how is it different from an EHR?',
    a: 'Clinic operations software manages the real-time flow of patients through your clinic — check-in, queue tracking, room status, provider load, and discharge — while an EHR manages clinical documentation. clinIQ is a clinic management platform that sits on top of your existing EHR and handles everything the EHR was never designed to manage.',
  },
  {
    q: 'What is patient flow software used for in a clinic?',
    a: 'Patient flow software gives your front desk and providers a live view of every patient\'s stage — from check-in to discharge. It replaces whiteboards and hallway check-ins with real-time data, cutting wait times and eliminating the "how much longer?" question entirely.',
  },
  {
    q: 'How does RTM billing software work with clinIQ?',
    a: 'clinIQ\'s RTM billing software automatically tracks CPT codes 98975–98981, monitors compliance thresholds, and sends alerts when a patient is approaching or missing qualifying activity. Clinics typically add $120–$150 per qualifying patient per month without any additional charting.',
  },
  {
    q: 'Can clinIQ work alongside my existing EHR?',
    a: 'Yes. clinIQ is built as a healthcare operations layer that integrates with athenahealth, eClinicalWorks, NextGen, AdvancedMD, Tebra, SimplePractice, and other major EHR platforms. You keep your existing clinical workflows and add real-time operations on top.',
  },
  {
    q: 'What is a patient queue management system?',
    a: 'A patient queue management system tracks every patient from the moment they check in to the moment they leave — showing their current stage, estimated wait time, assigned provider, and room status in real time. clinIQ\'s queue management is built specifically for healthcare environments, unlike generic queue tools.',
  },
  {
    q: 'Does clinIQ support pre-authorization automation?',
    a: 'Yes. clinIQ\'s pre-authorization automation auto-populates PA forms from the patient record, applies payer-specific rules, manages document uploads, and tracks case status — reducing denials and speeding up treatment authorization.',
  },
  {
    q: 'Is clinIQ suitable for behavioral health clinic software needs?',
    a: 'Absolutely. clinIQ includes workflows built for behavioral health, including therapeutic flow management, no-show reduction, RTM billing for mental health CPT codes, and HIPAA-compliant secure messaging — making it one of the most complete behavioral health clinic software options available.',
  },
  {
    q: 'How does clinIQ help urgent care management?',
    a: 'For urgent care, clinIQ reduces left-without-being-seen (LWBS) rates by giving the front desk and triage team live visibility into wait times, queue depth, and room availability. Automated check-in and real-time bottleneck alerts are built for high-volume same-day environments.',
  },
  {
    q: 'How long does it take to implement clinic workflow software like clinIQ?',
    a: 'Most clinics are fully operational within one week. clinIQ\'s onboarding is built to be fast — no rip-and-replace, no EHR migration, no lengthy IT project. You connect it to your existing systems and your team starts using it within days.',
  },
  {
    q: 'What makes clinIQ different from standard healthcare scheduling software?',
    a: 'Most healthcare scheduling software stops at the calendar. clinIQ goes further — managing the entire patient visit from digital intake and real-time queue tracking through RTM billing and analytics. It\'s not a scheduling tool with extras; it\'s a complete clinic operations platform that includes scheduling as one of six integrated capabilities.',
  },
] as const

export default function HomeFAQ() {
  return (
    <section className={s.section} id="faq">
      <div className={s.container}>
        <div className={s.label}>
          <span className={s.labelLine} />
          <span>Frequently Asked</span>
        </div>
        <h2 className={s.title}>
          Common Questions About <em className={s.titleEm}>Clinic Operations Software</em>
        </h2>
        <div className={s.faqWrapper}>
          <FaqAccordion faqs={HOME_FAQS} />
        </div>
      </div>
    </section>
  )
}
