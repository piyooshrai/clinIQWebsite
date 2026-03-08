'use client'

import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import s from './specialty-full.module.css'

const specialties = [
  {
    slug: 'urgent-care',
    name: 'Urgent Care',
    tagline: 'Stop leaving without being seen. Real-time lobby visibility and triage flow.',
  },
  {
    slug: 'primary-care',
    name: 'Primary Care',
    tagline: 'Same-day access, phone volume reduction, and chronic disease recall.',
  },
  {
    slug: 'pediatrics',
    name: 'Pediatrics',
    tagline: 'Sick walk-ins, vaccine clinic flow, and well-visit recalls without the lobby chaos.',
  },
  {
    slug: 'ob-gyn',
    name: 'OB-GYN',
    tagline: 'Prenatal sequencing, call volume reduction, and split OB/GYN scheduling.',
  },
  {
    slug: 'cardiology',
    name: 'Cardiology',
    tagline: 'Multi-stage diagnostic coordination: echo, stress test, device interrogation.',
  },
  {
    slug: 'orthopedic-surgery',
    name: 'Orthopedic Surgery',
    tagline: 'Imaging prep, dilation-style flow coordination, and post-op follow-up.',
  },
  {
    slug: 'spine-surgery',
    name: 'Spine Surgery',
    tagline: 'Pre-op clearance tracking, PA expiration alerts, and surgical pipeline visibility.',
  },
  {
    slug: 'general-surgery',
    name: 'General Surgery',
    tagline: 'Clinic-to-OR coordination without the phone calls and clearance gaps.',
  },
  {
    slug: 'pain-management',
    name: 'Pain Management',
    tagline: 'PA pipeline failures, prescription expiration alerts, and procedure board.',
  },
  {
    slug: 'physical-therapy',
    name: 'Physical Therapy',
    tagline: 'RTM billing capture, treatment plan adherence, and no-show management.',
  },
  {
    slug: 'chiropractic',
    name: 'Chiropractic',
    tagline: 'High-volume room coordination, no-show fill, and PI case tracking.',
  },
  {
    slug: 'psychiatry',
    name: 'Psychiatry',
    tagline: 'Privacy-forward check-in, in-room scheduling, and portal overload reduction.',
  },
  {
    slug: 'behavioral-health',
    name: 'Behavioral Health',
    tagline: 'ABA block scheduling, crisis walk-in flow, and variable session tracking.',
  },
  {
    slug: 'addiction-medicine',
    name: 'Addiction Medicine',
    tagline: 'UDS chain-of-custody, Sublocade/Vivitrol coordination, and injection observation.',
  },
  {
    slug: 'dermatology',
    name: 'Dermatology',
    tagline: 'Schedule override governance, biopsy follow-up tracking, and MA burnout reduction.',
  },
  {
    slug: 'ophthalmology',
    name: 'Ophthalmology',
    tagline: 'Dilation-aware patient tracking, timed alerts, and OCT coordination.',
  },
  {
    slug: 'neurology',
    name: 'Neurology',
    tagline: 'Referral pipeline visibility, EEG/EMG sequencing, and chronic disease follow-up.',
  },
]

const schemaData = {
  breadcrumb: {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cliniq.com' },
      { '@type': 'ListItem', position: 2, name: 'Specialties', item: 'https://cliniq.com/specialties' },
    ],
  },
}

export default function SpecialtiesIndex() {
  return (
    <>
      <NavInner />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData.breadcrumb) }}
      />
      <main>
        <section className={s.hero}>
          <div className={s.heroBg}>
            <div className={`${s.heroOrb} ${s.heroOrbTeal}`} />
            <div className={`${s.heroOrb} ${s.heroOrbBlue}`} />
            <div className={s.heroGrain} />
          </div>
          <div className={s.heroContent}>
            <span className={s.badge}>Specialties</span>
            <h1 className={s.heroTitle}>
              Built for how your specialty{' '}
              <em>actually works.</em>
            </h1>
            <p className={s.heroSubtitle}>
              Every specialty has its own operational reality — its own patient flow, its own
              scheduling complexity, its own failure modes. clinIQ is built for each of them
              specifically. Find yours below.
            </p>
          </div>
        </section>

        <section style={{ background: 'var(--cream, #f5f3ef)', padding: '5rem 1.5rem' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '1.5rem',
              }}
            >
              {specialties.map((spec) => (
                <a
                  key={spec.slug}
                  href={`/specialties/${spec.slug}`}
                  style={{
                    display: 'block',
                    background: '#fff',
                    border: '1px solid #e5e5e5',
                    borderRadius: '12px',
                    padding: '1.75rem',
                    textDecoration: 'none',
                    color: 'inherit',
                    transition: 'border-color 0.15s, box-shadow 0.15s',
                  }}
                  onMouseEnter={(e) => {
                    ;(e.currentTarget as HTMLAnchorElement).style.borderColor = '#0d9488'
                    ;(e.currentTarget as HTMLAnchorElement).style.boxShadow =
                      '0 4px 20px rgba(13,148,136,0.12)'
                  }}
                  onMouseLeave={(e) => {
                    ;(e.currentTarget as HTMLAnchorElement).style.borderColor = '#e5e5e5'
                    ;(e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none'
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Instrument Serif', Georgia, serif",
                      fontSize: '1.25rem',
                      fontWeight: 400,
                      color: '#0d0d0c',
                      marginBottom: '0.5rem',
                    }}
                  >
                    {spec.name}
                  </div>
                  <div
                    style={{
                      fontSize: '0.875rem',
                      color: '#555',
                      lineHeight: 1.5,
                      marginBottom: '1rem',
                    }}
                  >
                    {spec.tagline}
                  </div>
                  <div
                    style={{
                      fontSize: '0.875rem',
                      color: '#0d9488',
                      fontWeight: 500,
                    }}
                  >
                    Learn more →
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className={s.cta}>
          <div className={s.ctaBg}>
            <div className={s.ctaOrb} />
          </div>
          <div className={s.ctaContent}>
            <h2 className={s.ctaTitle}>
              Don't see your specialty? We built for the hard ones first.
            </h2>
            <p className={s.ctaDesc}>
              clinIQ works across every clinic type. If your specialty isn't listed, talk to us —
              the operational problems are probably ones we've already solved for a similar practice.
            </p>
            <div className={s.ctaActions}>
              <a href="/demo" className={s.btnPrimary}>
                Request a demo
                <span className={s.btnIcon}>→</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <FooterInner />
    </>
  )
}
