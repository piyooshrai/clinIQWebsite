import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import ContactForm from '@/components/ContactForm'
import s from '@/app/specialties/specialty-full.module.css'
import styles from '@/app/contact/contact.module.css'

export const metadata: Metadata = {
  title: 'Contact clinIQ — Get in Touch',
  description:
    'Reach clinIQ for general questions, sales, support, or partnership inquiries. info@cliniqhealthcare.com | sales@cliniqhealthcare.com | support@cliniqhealthcare.com',
  alternates: { canonical: 'https://cliniqhealthcare.com/contact' },
  openGraph: {
    title: 'Contact clinIQ — Get in Touch',
    description: 'Reach clinIQ for general questions, sales, support, or partnership inquiries.',
    type: 'website',
    url: 'https://cliniqhealthcare.com/contact',
  },
}

const CONTACT_EMAILS = [
  { key: 'demo',   email: null,                        href: '/demo' },
  { key: 'sales',  email: 'sales@cliniqhealthcare.com',  href: null },
  { key: 'support',email: 'support@cliniqhealthcare.com',href: null },
  { key: 'phone',  email: null,                        href: 'tel:7203347249' },
] as const

const ICONS = {
  demo: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M10 3L3 8v9h5v-5h4v5h5V8z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  ),
  sales: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M3 14l4-4 3 3 4-5 3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 7h2v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  support: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10 13v-1a2 2 0 001.732-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="10" cy="15" r="0.75" fill="currentColor" />
    </svg>
  ),
  phone: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M6.5 3.5c0 0 1 2 1 3s-1.5 1.5-1.5 3c0 2.5 4 6.5 6.5 6.5 1.5 0 1.5-1.5 3-1.5s3 1 3 1v2c0 .5-.5 1-1.5 1C13 19 1 7 1 3.5 1 2.5 1.5 2 2 2h2c.5 0 1.5.5 2.5 1.5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
}

export default async function ContactPage() {
  const t = await getTranslations('contact')

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
              <span className={s.badge}>{t('badge')}</span>
              <h1 className={s.heroTitle}>{t('title')}</h1>
              <p className={s.heroSubtitle}>{t('subtitle')}</p>
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
                  {CONTACT_EMAILS.map(({ key, email, href }) => (
                    <div key={key} className={styles.contactCard}>
                      <div className={styles.cardIcon}>{ICONS[key]}</div>
                      <div>
                        <p className={styles.cardLabel}>{t(`methods.${key}.title`)}</p>
                        {email ? (
                          <a href={`mailto:${email}`} className={styles.cardEmail}>{email}</a>
                        ) : href ? (
                          <a href={href} className={styles.cardEmail}>{t(`methods.${key}.cta`)}</a>
                        ) : null}
                        <p className={styles.cardNote}>{t(`methods.${key}.desc`)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — contact form */}
              <div className={styles.formCol}>
                <h2 className={styles.formTitle}>{t('formTitle')}</h2>
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
