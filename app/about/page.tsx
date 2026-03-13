import type { Metadata } from 'next'
import Link from 'next/link'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import s from '@/app/specialties/specialty-full.module.css'

export const metadata: Metadata = {
  title: 'About clinIQ — The Operating System for Modern Clinics',
  description:
    'clinIQ is the operational layer between your EHR and daily clinic operations. Patient flow, check-in, RTM billing, pre-authorization, scheduling, messaging, and analytics — unified.',
  alternates: { canonical: 'https://cliniqhealthcare.com/about' },
  openGraph: {
    title: 'About clinIQ — The Operating System for Modern Clinics',
    description:
      'clinIQ is the operational layer between your EHR and daily clinic operations. Patient flow, check-in, RTM billing, pre-authorization, scheduling, messaging, and analytics — unified.',
    type: 'website',
    url: 'https://cliniqhealthcare.com/about',
    images: [{ url: '/og-about.png', width: 1200, height: 630, alt: 'About clinIQ' }],
  },
}

export default function AboutPage() {
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
              <span className={s.badge}>About clinIQ</span>
              <h1 className={s.heroTitle}>
                The Operating System for<br /><em>Modern Clinics</em>
              </h1>
              <p className={s.heroSubtitle}>
                clinIQ is the layer between your EHR and your daily operations. Patient flow, check-in, RTM billing, pre-authorization, scheduling, messaging, and analytics — unified in one platform that works the way clinics actually work.
              </p>
              <div className={s.heroActions}>
                <Link href="/demo" className={s.btnPrimary}>See clinIQ in action</Link>
                <Link href="/pricing" className={s.btnGhost}>View Pricing</Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── THE PROBLEM ── */}
        <section className={s.reality} style={{ background: 'var(--cream)' }}>
          <div className={s.container}>
            <div className={s.realityGrid}>
              <div className={s.realityLeft}>
                <span className={s.sectionLabel}>The Problem</span>
                <h2 className={s.sectionTitle}>
                  Clinic operations are<br /><em>fragmented by design.</em>
                </h2>
                <div className={s.realityNarrative}>
                  <p>
                    Most clinics run on five or six disconnected tools. One system for check-in, another for scheduling, spreadsheets for tracking patient flow, paper clipboards for intake forms, and whatever workaround the front desk invented to keep things moving. Each tool solves one problem and creates three more.
                  </p>
                  <p>
                    Revenue leaks through the gaps. RTM codes go unbilled because nobody has time to track compliance. Pre-authorization requests sit in purgatory while surgical revenue evaporates. Staff spend 13 to 15 hours per week on prior auth paperwork alone — time that should go to patients.
                  </p>
                  <p>
                    Patient experience suffers too. Check-in takes eight minutes instead of three. Wait times stretch because nobody knows who&rsquo;s actually in the lobby. Patients leave without scheduling follow-ups because the process is too painful. And everyone — staff and patients — feels the friction.
                  </p>
                </div>
              </div>
              <div className={s.realityRight}>
                <ul className={s.painList}>
                  <li className={s.painItem}>
                    <span className={s.painDot} />
                    <span className={s.painText}>13–15 hrs/week lost to prior auth paperwork at the average specialty practice.</span>
                  </li>
                  <li className={s.painItem}>
                    <span className={s.painDot} />
                    <span className={s.painText}>$144K/year in RTM revenue most practices are not billing.</span>
                  </li>
                  <li className={s.painItem}>
                    <span className={s.painDot} />
                    <span className={s.painText}>8 minutes average check-in time. clinIQ cuts it to under 3.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── THE VISION ── */}
        <section className={s.modules} style={{ background: 'var(--black)' }}>
          <div className={s.container}>
            <div className={s.modulesHeader}>
              <span className={s.sectionLabel}>The Vision</span>
              <h2 className={s.sectionTitle} style={{ color: 'var(--white)' }}>
                ACO in a<br /><em>Box.</em>
              </h2>
            </div>
            <div style={{ maxWidth: '720px' }}>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: 'rgba(255,255,255,0.65)', marginBottom: '1.5rem' }}>
                You don&rsquo;t need to join a formal Accountable Care Organization to operate like one. ACO in a Box is our philosophy: give independent clinics the same operational infrastructure that large health systems take for granted — unified patient flow, billing optimization, care coordination, and analytics — without the overhead, contracts, or enterprise pricing.
              </p>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: 'rgba(255,255,255,0.65)', marginBottom: '1.5rem' }}>
                This means one vendor replacing five. Check-in system, RTM platform, scheduling tool, messaging app, analytics dashboard — all working together because they were built together. Data flows between modules instead of sitting in silos. Staff train on one interface instead of six. And clinics capture revenue they&rsquo;re already earning but not billing.
              </p>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: 'rgba(255,255,255,0.65)' }}>
                ACO in a Box isn&rsquo;t a product SKU you buy. It&rsquo;s how we think about what clinIQ should be: the complete operational layer for any clinic that wants value-based care readiness without the infrastructure burden.
              </p>
            </div>
          </div>
        </section>

        {/* ── WHAT WE BUILD ── */}
        <section className={s.modules} style={{ background: 'var(--black)', paddingTop: '0' }}>
          <div className={s.container}>
            <div className={s.modulesHeader}>
              <span className={s.sectionLabel}>The Platform</span>
              <h2 className={s.sectionTitle} style={{ color: 'var(--white)' }}>
                Six tools. One platform.<br /><em>Every patient, start to finish.</em>
              </h2>
            </div>
            <div className={`${s.modulesGrid} ${s.threeCol}`} style={{ gridTemplateColumns: undefined }}>
              <div className={s.moduleCard} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <h3 className={s.moduleTitle} style={{ color: 'var(--white)' }}>Patient Check-In</h3>
                <p className={s.moduleDesc} style={{ color: 'rgba(255,255,255,0.6)' }}>Kiosk and mobile check-in that cuts intake time from eight minutes to under three. Digital consent, insurance verification, and intake forms — complete before patients walk in.</p>
              </div>
              <div className={s.moduleCard} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <h3 className={s.moduleTitle} style={{ color: 'var(--white)' }}>Real-Time Patient Flow</h3>
                <p className={s.moduleDesc} style={{ color: 'rgba(255,255,255,0.6)' }}>Live visibility into who&rsquo;s in your lobby, who&rsquo;s in rooms, and where the bottlenecks are. No more verbal status checks. No more guessing.</p>
              </div>
              <div className={s.moduleCard} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <h3 className={s.moduleTitle} style={{ color: 'var(--white)' }}>RTM Billing</h3>
                <p className={s.moduleDesc} style={{ color: 'rgba(255,255,255,0.6)' }}>Therapy adherence tracking under CPT codes 98975–98981. $100–164 per patient per month. Automated compliance logging and billing code generation.</p>
              </div>
              <div className={s.moduleCard} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <h3 className={s.moduleTitle} style={{ color: 'var(--white)' }}>Pre-Authorization</h3>
                <p className={s.moduleDesc} style={{ color: 'rgba(255,255,255,0.6)' }}>Automated payer submission and tracking. Saves 13–15 hours per week. Catches documentation gaps before submission. Real-time status across all pending cases.</p>
              </div>
              <div className={s.moduleCard} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <h3 className={s.moduleTitle} style={{ color: 'var(--white)' }}>Secure Messaging</h3>
                <p className={s.moduleDesc} style={{ color: 'rgba(255,255,255,0.6)' }}>HIPAA-compliant patient communication between visits. Reduces no-shows. Supports RTM engagement. Replaces informal email and text workflows.</p>
              </div>
              <div className={s.moduleCard} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <h3 className={s.moduleTitle} style={{ color: 'var(--white)' }}>Analytics</h3>
                <p className={s.moduleDesc} style={{ color: 'rgba(255,255,255,0.6)' }}>Operational dashboards: RTM compliance rates, patient flow throughput, revenue per provider, pre-auth approval timelines. Powered by Vizier.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHO WE SERVE ── */}
        <section className={s.modules} style={{ background: 'var(--cream)' }}>
          <div className={s.container}>
            <div className={s.modulesHeader}>
              <span className={s.sectionLabel}>Who We Serve</span>
              <h2 className={s.sectionTitle}>
                Built for the<br /><em>5 to 50 provider practice.</em>
              </h2>
              <p className={s.sectionDesc}>
                clinIQ is purpose-built for independent specialty practices — the clinics large enough to need operational infrastructure but too small to afford enterprise healthcare IT. Physical therapy groups, orthopedic practices, pain management clinics, behavioral health centers, primary and urgent care — any specialty with real patient volume and real administrative burden.
              </p>
            </div>
            <div className={`${s.modulesGrid} ${s.threeCol}`}>
              <div className={s.moduleCard}>
                <h3 className={s.moduleTitle}>Capturing RTM Revenue</h3>
                <p className={s.moduleDesc}>Practices with PT, orthopedics, or behavioral health patient panels who are not yet billing remote therapeutic monitoring codes.</p>
              </div>
              <div className={s.moduleCard}>
                <h3 className={s.moduleTitle}>Drowning in Pre-Auth</h3>
                <p className={s.moduleDesc}>Specialty clinics losing 13+ hours per week to manual prior authorization workflows across multiple insurer portals.</p>
              </div>
              <div className={s.moduleCard}>
                <h3 className={s.moduleTitle}>Value-Based Care Ready</h3>
                <p className={s.moduleDesc}>Independent practices exploring ACO participation or commercial payer quality contracts who need the outcomes data infrastructure to compete.</p>
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
                See clinIQ in action.<br /><em>Live in days.</em>
              </h2>
              <p className={s.ctaDesc}>
                No rip-and-replace. No enterprise contract. Works with your existing EHR and goes live in days, not months.
              </p>
              <div className={s.ctaActions}>
                <Link href="/demo" className={s.btnPrimary}>Book a Demo</Link>
                <Link href="/pricing" className={s.btnGhost}>See Pricing</Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <FooterInner />
    </>
  )
}
