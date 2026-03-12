import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import ContactForm from '@/components/ContactForm'
import s from '@/app/specialties/specialty-full.module.css'
import styles from './contact.module.css'

export const metadata: Metadata = {
  title: 'Contact clinIQ — Get in Touch',
  description:
    'Reach clinIQ for general questions, sales, support, or partnership inquiries. info@cliniqhealthcare.com | sales@cliniqhealthcare.com | support@cliniqhealthcare.com',
  alternates: { canonical: 'https://cliniqhealthcare.com/contact' },
  openGraph: {
    title: 'Contact clinIQ — Get in Touch',
    description:
      'Reach clinIQ for general questions, sales, support, or partnership inquiries.',
    type: 'website',
    url: 'https://cliniqhealthcare.com/contact',
  },
}

const CONTACTS = [
  {
    label: 'General Inquiries',
    email: 'info@cliniqhealthcare.com',
    note: 'Questions about clinIQ, pricing, or implementation.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M2 7l8 5 8-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: 'Sales',
    email: 'sales@cliniqhealthcare.com',
    note: 'New accounts, contract questions, enterprise pricing.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M3 14l4-4 3 3 4-5 3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 7h2v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: 'Support',
    email: 'support@cliniqhealthcare.com',
    note: 'Implementation support, integration issues, platform questions.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 13v-1a2 2 0 001.732-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="10" cy="15" r="0.75" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: 'Partnerships',
    email: 'partners@the-algo.com',
    note: 'White-label inquiries, EHR vendor partnerships, referral programs.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M7 10l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3.5 8.5A4 4 0 018 4h4a4 4 0 014 4v4a4 4 0 01-4 4H8a4 4 0 01-4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
]

export default function ContactPage() {
  return (
    <>
      <NavInner />
      <main>
        {/* ── Hero ── */}
        <section className={s.hero} style={{ minHeight: 'auto', padding: '7rem 0 5rem' }}>
          <div className={s.heroBg}>
            <div className={`${s.heroOrb} ${s.heroOrbTeal}`} />
            <div className={`${s.heroOrb} ${s.heroOrbBlue}`} />
            <div className={s.heroGrain} />
          </div>
          <div className={s.container}>
            <div className={s.heroContent}>
              <span className={s.badge}>Get in Touch</span>
              <h1 className={s.heroTitle}>
                Contact<br /><em>clinIQ</em>
              </h1>
              <p className={s.heroSubtitle}>
                We respond within one business day. Direct lines below — no ticket queue, no routing system.
              </p>
            </div>
          </div>
        </section>

        {/* ── Main two-column section ── */}
        <section className={styles.section}>
          <div className={s.container}>
            <div className={styles.layout}>
              {/* Left — contact method cards */}
              <div className={styles.infoCol}>
                <div className={styles.cardGrid}>
                  {CONTACTS.map((c) => (
                    <div key={c.label} className={styles.contactCard}>
                      <div className={styles.cardIcon}>{c.icon}</div>
                      <div>
                        <p className={styles.cardLabel}>{c.label}</p>
                        <a
                          href={`mailto:${c.email}`}
                          className={styles.cardEmail}
                        >
                          {c.email}
                        </a>
                        <p className={styles.cardNote}>{c.note}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <p className={styles.hoursNote}>
                  Colorado-based. Support hours Mon–Fri 8am–6pm MT.
                </p>
              </div>

              {/* Right — contact form */}
              <div className={styles.formCol}>
                <h2 className={styles.formTitle}>Send us a message</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterInner />
    </>
  )
}
