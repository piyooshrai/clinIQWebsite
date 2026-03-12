import type { Metadata } from 'next'
import Link from 'next/link'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import s from '@/app/specialties/specialty-full.module.css'

export const metadata: Metadata = {
  title: 'The Algorithm LLC — Healthcare Technology Company',
  description:
    'The Algorithm LLC is a Colorado-based healthcare technology company. Products: clinIQ (clinic operations), Claire (AI voice/chat), Vizier (healthcare analytics).',
  alternates: { canonical: 'https://cliniqhealthcare.com/about/the-algorithm' },
  openGraph: {
    title: 'The Algorithm LLC — Healthcare Technology Company',
    description:
      'The Algorithm LLC is a Colorado-based healthcare technology company. Products: clinIQ (clinic operations), Claire (AI voice/chat), Vizier (healthcare analytics).',
    type: 'website',
    url: 'https://cliniqhealthcare.com/about/the-algorithm',
  },
}

export default function TheAlgorithmPage() {
  return (
    <>
      <NavInner />
      <main>

        {/* ── HERO ── */}
        <section className={s.hero}>
          <div className={s.heroBg}>
            <div className={`${s.heroOrb} ${s.heroOrbTeal}`} />
            <div className={`${s.heroOrb} ${s.heroOrbBlue}`} />
            <div className={s.heroGrain} />
          </div>
          <div className={s.container}>
            <div className={s.heroContent}>
              <span className={s.badge}>The Company</span>
              <h1 className={s.heroTitle}>
                The Algorithm<br /><em>LLC</em>
              </h1>
              <p className={s.heroSubtitle}>
                Healthcare technology company building tools for clinic operations, AI orchestration, and analytics. Colorado-based. Focused on the 5–50 provider specialty clinic market.
              </p>
            </div>
          </div>
        </section>

        {/* ── WHO WE ARE ── */}
        <section className={s.reality} style={{ background: 'var(--cream)' }}>
          <div className={s.container}>
            <div className={s.realityGrid}>
              <div className={s.realityLeft}>
                <span className={s.sectionLabel}>Who We Are</span>
                <h2 className={s.sectionTitle}>
                  Built in Colorado.<br /><em>Built for clinics.</em>
                </h2>
                <div className={s.realityNarrative}>
                  <p>
                    The Algorithm LLC is a healthcare technology company based in Colorado, focused on building software for the operational realities of specialty clinics. We are bootstrapped, client-funded, and structured around direct relationships with the practices we serve — no venture capital, no enterprise sales motion, no 18-month implementation timelines.
                  </p>
                  <p>
                    Our focus is the 5 to 50 provider specialty practice — independent groups large enough to have real operational complexity but too small to be served well by enterprise healthcare IT vendors. These practices run on thin administrative margins, carry significant prior authorization burden, and are sitting on RTM billing revenue they&rsquo;re not capturing. We build the software that changes that.
                  </p>
                  <p>
                    Every product we build is EHR-agnostic. We do not ask clinics to replace their existing clinical systems. We build the operational layer that works alongside whatever EHR is already deployed — Epic, athenahealth, eClinicalWorks, NextGen, or anything else.
                  </p>
                </div>
              </div>
              <div className={s.realityRight}>
                <ul className={s.painList}>
                  <li className={s.painItem}>
                    <span className={s.painDot} />
                    <span className={s.painText}>EHR-agnostic — works with any clinical system without replacement.</span>
                  </li>
                  <li className={s.painItem}>
                    <span className={s.painDot} />
                    <span className={s.painText}>Client-funded development — roadmap driven by clinic needs, not investor roadmaps.</span>
                  </li>
                  <li className={s.painItem}>
                    <span className={s.painDot} />
                    <span className={s.painText}>Colorado-based with US-based implementation and support.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── OUR PRODUCTS ── */}
        <section className={s.modules} style={{ background: 'var(--black)' }}>
          <div className={s.container}>
            <div className={s.modulesHeader}>
              <span className={s.sectionLabel}>Our Products</span>
              <h2 className={s.sectionTitle} style={{ color: 'var(--white)' }}>
                Three products.<br /><em>One healthcare stack.</em>
              </h2>
            </div>
            <div className={`${s.modulesGrid} ${s.threeCol}`}>
              <div className={s.moduleCard} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <h3 className={s.moduleTitle} style={{ color: 'var(--white)' }}>clinIQ</h3>
                <p className={s.moduleDesc} style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8125rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Clinic Operations Platform</p>
                <p className={s.moduleDesc} style={{ color: 'rgba(255,255,255,0.6)' }}>Patient flow, check-in, RTM billing, pre-authorization, scheduling, analytics, and secure messaging. The complete operational layer for specialty practices.</p>
                <Link href="/" className={s.moduleLink}>View clinIQ →</Link>
              </div>
              <div className={s.moduleCard} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <h3 className={s.moduleTitle} style={{ color: 'var(--white)' }}>Claire</h3>
                <p className={s.moduleDesc} style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8125rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>AI Voice &amp; Chat Orchestration</p>
                <p className={s.moduleDesc} style={{ color: 'rgba(255,255,255,0.6)' }}>AI-powered voice and chat automation for healthcare. Appointment scheduling, patient intake, follow-up reminders, and care coordination — handled by AI trained on clinical workflows.</p>
                <span className={s.moduleLink} style={{ cursor: 'default', opacity: 0.5 }}>Coming soon</span>
              </div>
              <div className={s.moduleCard} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <h3 className={s.moduleTitle} style={{ color: 'var(--white)' }}>Vizier</h3>
                <p className={s.moduleDesc} style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8125rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Healthcare Analytics</p>
                <p className={s.moduleDesc} style={{ color: 'rgba(255,255,255,0.6)' }}>Operational and clinical analytics for specialty practices. RTM compliance dashboards, patient flow metrics, revenue analytics, and pre-authorization tracking.</p>
                <span className={s.moduleLink} style={{ cursor: 'default', opacity: 0.5 }}>Integrated with clinIQ</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── HOW WE WORK ── */}
        <section className={s.modules} style={{ background: 'var(--cream)' }}>
          <div className={s.container}>
            <div className={s.modulesHeader}>
              <span className={s.sectionLabel}>How We Work</span>
              <h2 className={s.sectionTitle}>
                Direct relationships.<br /><em>No enterprise overhead.</em>
              </h2>
            </div>
            <div className={s.modulesGrid}>
              <div className={s.moduleCard}>
                <h3 className={s.moduleTitle}>Direct Relationships</h3>
                <p className={s.moduleDesc}>We work directly with practice administrators, operations directors, and clinic owners. No third-party implementation partners. No resellers. You get our team.</p>
              </div>
              <div className={s.moduleCard}>
                <h3 className={s.moduleTitle}>EHR-Agnostic</h3>
                <p className={s.moduleDesc}>We do not ask you to replace your EHR. clinIQ sits alongside whatever clinical system you already use. Integration is additive, not disruptive.</p>
              </div>
              <div className={s.moduleCard}>
                <h3 className={s.moduleTitle}>White-Label Available</h3>
                <p className={s.moduleDesc}>clinIQ can be white-labeled for health system deployments, insurance carrier partner programs, or specialty network distribution. Contact us.</p>
              </div>
              <div className={s.moduleCard}>
                <h3 className={s.moduleTitle}>Client-Funded Development</h3>
                <p className={s.moduleDesc}>Our roadmap is driven by what our clinic clients need next. If a feature is critical to your operations and not yet built, we have a structured process for client-funded development.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className={s.cta}>
          <div className={s.ctaBg}>
            <div className={s.ctaOrb} />
          </div>
          <div className={s.container}>
            <div className={s.ctaContent}>
              <h2 className={s.ctaTitle}>
                Work with us.<br /><em>No enterprise contract required.</em>
              </h2>
              <p className={s.ctaDesc}>
                Request a demo or reach out directly. We respond within one business day.
              </p>
              <div className={s.ctaActions}>
                <Link href="/demo" className={s.btnPrimary}>Request Demo</Link>
                <Link href="/contact" className={s.btnGhost}>Contact Us</Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <FooterInner />
    </>
  )
}
