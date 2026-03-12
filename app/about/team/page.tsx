import type { Metadata } from 'next'
import Link from 'next/link'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import s from '@/app/specialties/specialty-full.module.css'

export const metadata: Metadata = {
  title: 'Team & Support — clinIQ Implementation & Integration',
  description:
    'clinIQ implementation specialists, EHR integration engineers, and ongoing support. Standard implementation $750, 1–2 weeks. Works with Epic, athenahealth, NextGen, eClinicalWorks, and more.',
  alternates: { canonical: 'https://cliniqhealthcare.com/about/team' },
  openGraph: {
    title: 'Team & Support — clinIQ Implementation & Integration',
    description:
      'clinIQ implementation specialists, EHR integration engineers, and ongoing support. Standard implementation $750, 1–2 weeks. Works with Epic, athenahealth, NextGen, eClinicalWorks, and more.',
    type: 'website',
    url: 'https://cliniqhealthcare.com/about/team',
  },
}

const EHR_SYSTEMS = [
  'Epic',
  'Athenahealth',
  'NextGen',
  'eClinicalWorks',
  'DrChrono',
  'AdvancedMD',
  'SimplePractice',
  'Ritten',
  'Oscar EMR',
  'Kareo',
  'Cerner',
  'Allscripts',
]

export default function TeamPage() {
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
              <span className={s.badge}>Team &amp; Support</span>
              <h1 className={s.heroTitle}>
                Your Healthcare<br /><em>Technology Team</em>
              </h1>
              <p className={s.heroSubtitle}>
                Implementation specialists, EHR integration engineers, and ongoing clinical support — from go-live through your first RTM billing cycle and beyond.
              </p>
            </div>
          </div>
        </section>

        {/* ── IMPLEMENTATION ── */}
        <section className={s.modules} style={{ background: 'var(--black)' }}>
          <div className={s.container}>
            <div className={s.modulesHeader}>
              <span className={s.sectionLabel}>Implementation</span>
              <h2 className={s.sectionTitle} style={{ color: 'var(--white)' }}>
                Live in days.<br /><em>Not months.</em>
              </h2>
              <p className={s.sectionDesc} style={{ color: 'rgba(255,255,255,0.6)' }}>
                Standard clinIQ implementation is a one-time $750 setup fee. Our team handles EHR integration configuration, staff training, and go-live support. Most practices are fully operational within one to two weeks of signing.
              </p>
            </div>
            <div className={`${s.modulesGrid} ${s.threeCol}`} style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))' }}>
              <div className={s.moduleCard} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <h3 className={s.moduleTitle} style={{ color: 'var(--white)' }}>Standard Implementation — $750</h3>
                <p className={s.moduleDesc} style={{ color: 'rgba(255,255,255,0.6)' }}>Includes: EHR integration setup, digital check-in configuration, patient flow dashboard setup, staff training (up to 4 sessions), 30-day go-live support, and RTM enrollment walkthrough.</p>
              </div>
              <div className={s.moduleCard} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <h3 className={s.moduleTitle} style={{ color: 'var(--white)' }}>Custom EHR Integration</h3>
                <p className={s.moduleDesc} style={{ color: 'rgba(255,255,255,0.6)' }}>For practices using less common EHR platforms or requiring custom data mapping, we offer custom integration scopes. Pricing on request — typically $1,500–$3,500 depending on EHR API complexity.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── EHR INTEGRATIONS ── */}
        <section className={s.reality} style={{ background: 'var(--cream)' }}>
          <div className={s.container}>
            <div style={{ maxWidth: '720px', marginBottom: '3rem' }}>
              <span className={s.sectionLabel}>EHR Integrations</span>
              <h2 className={s.sectionTitle}>
                Works with<br /><em>your existing system.</em>
              </h2>
              <p className={s.sectionDesc}>
                clinIQ integrates with all major EHR platforms without requiring replacement. Our integration layer reads scheduling, patient, and clinical data — and writes back RTM documentation and billing codes where the EHR supports it.
              </p>
            </div>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.75rem',
            }}>
              {EHR_SYSTEMS.map((ehr) => (
                <span
                  key={ehr}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: '0.625rem 1.25rem',
                    background: 'var(--white)',
                    border: '1px solid var(--border-light, #e5e3de)',
                    borderRadius: '100px',
                    fontSize: '0.9375rem',
                    fontWeight: 500,
                    color: 'var(--text-primary, #0d0d0c)',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                  }}
                >
                  {ehr}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── ONGOING SUPPORT ── */}
        <section className={s.modules} style={{ background: 'var(--black)' }}>
          <div className={s.container}>
            <div className={s.modulesHeader}>
              <span className={s.sectionLabel}>Ongoing Support</span>
              <h2 className={s.sectionTitle} style={{ color: 'var(--white)' }}>
                Not a ticket queue.<br /><em>A direct line.</em>
              </h2>
            </div>
            <div className={s.modulesGrid}>
              <div className={s.moduleCard} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <h3 className={s.moduleTitle} style={{ color: 'var(--white)' }}>Direct Access</h3>
                <p className={s.moduleDesc} style={{ color: 'rgba(255,255,255,0.6)' }}>Your implementation specialist&rsquo;s direct contact — not a generic support inbox. Reach the person who knows your setup.</p>
              </div>
              <div className={s.moduleCard} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <h3 className={s.moduleTitle} style={{ color: 'var(--white)' }}>Monthly Check-ins</h3>
                <p className={s.moduleDesc} style={{ color: 'rgba(255,255,255,0.6)' }}>Scheduled monthly calls to review RTM compliance rates, patient flow metrics, and upcoming feature releases relevant to your specialty.</p>
              </div>
              <div className={s.moduleCard} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <h3 className={s.moduleTitle} style={{ color: 'var(--white)' }}>Platform Updates</h3>
                <p className={s.moduleDesc} style={{ color: 'rgba(255,255,255,0.6)' }}>All platform updates — new features, payer rule changes, RTM code updates — deployed automatically with release notes sent directly to your admin contact.</p>
              </div>
              <div className={s.moduleCard} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <h3 className={s.moduleTitle} style={{ color: 'var(--white)' }}>Response Times</h3>
                <p className={s.moduleDesc} style={{ color: 'rgba(255,255,255,0.6)' }}>Same-business-day response for active issues. Next-business-day for configuration questions. Emergency escalation path for go-live support.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── CUSTOMIZATION ── */}
        <section className={s.modules} style={{ background: 'var(--cream)' }}>
          <div className={s.container}>
            <div style={{ maxWidth: '720px' }}>
              <span className={s.sectionLabel}>Customization</span>
              <h2 className={s.sectionTitle}>
                Built for your<br /><em>workflow, not ours.</em>
              </h2>
              <div className={s.realityNarrative}>
                <p>
                  clinIQ is designed to adapt to your clinical workflow rather than forcing your workflow to adapt to clinIQ. Digital check-in forms, patient flow stages, RTM enrollment criteria, and messaging templates are all configurable without custom development.
                </p>
                <p>
                  White-label deployment is available for health systems, specialty networks, or insurance carrier partner programs that want to offer clinIQ under their own brand. Pricing and SLA on request.
                </p>
                <p>
                  For features not yet on the standard roadmap — custom integrations, specialty-specific workflows, or analytics dashboards tied to your specific quality metrics — we offer a structured client-funded development process. You fund the build; you own the roadmap priority.
                </p>
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
                Ready to get started?<br /><em>Talk to our team.</em>
              </h2>
              <p className={s.ctaDesc}>
                Implementation typically begins within one week of agreement. We&rsquo;ll scope your integration, configure your workflow, and have your team trained before go-live.
              </p>
              <div className={s.ctaActions}>
                <Link href="/contact" className={s.btnPrimary}>Talk to our team</Link>
                <Link href="/demo" className={s.btnGhost}>Request Demo</Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <FooterInner />
    </>
  )
}
