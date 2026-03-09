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
    slug: 'obgyn',
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
  {
    slug: 'allergy',
    name: 'Allergy & Immunology',
    tagline: 'Injection program management, vial tracking, biologic authorization, and RTM.',
  },
  {
    slug: 'rheumatology',
    name: 'Rheumatology',
    tagline: 'Disease activity tracking, biologic authorization, infusion coordination, and RTM.',
  },
  {
    slug: 'endocrinology',
    name: 'Endocrinology',
    tagline: 'CGM RTM billing, medication authorization, and chronic disease recall.',
  },
  {
    slug: 'gastroenterology',
    name: 'Gastroenterology',
    tagline: 'Procedure prep coordination, biologic authorization, and scope scheduling.',
  },
  {
    slug: 'pulmonology',
    name: 'Pulmonology',
    tagline: 'Spirometry tracking, CPAP compliance, biologic authorization, and RTM.',
  },
  {
    slug: 'nephrology',
    name: 'Nephrology',
    tagline: 'Dialysis coordination, CKD progression tracking, and transplant pipeline.',
  },
  {
    slug: 'oncology',
    name: 'Oncology',
    tagline: 'Infusion scheduling, prior auth, and chemotherapy protocol coordination.',
  },
  {
    slug: 'neurosurgery',
    name: 'Neurosurgery',
    tagline: 'Complex case coordination, LOMN generation, and post-operative RTM.',
  },
  {
    slug: 'sports-medicine',
    name: 'Sports Medicine',
    tagline: 'Injury RTM billing, return-to-play tracking, and concussion management.',
  },
  {
    slug: 'plastic-surgery',
    name: 'Plastic Surgery',
    tagline: 'Cosmetic patient experience, reconstructive coordination, and photography management.',
  },
  {
    slug: 'vascular-surgery',
    name: 'Vascular Surgery',
    tagline: 'Wound and limb salvage RTM, vascular lab coordination, and graft surveillance.',
  },
  {
    slug: 'wound-care',
    name: 'Wound Care',
    tagline: 'Wound measurement tracking, HBO coordination, and healing rate analytics.',
  },
  {
    slug: 'ent',
    name: 'ENT',
    tagline: 'Audiology coordination, allergy injection management, and surgical scheduling.',
  },
  {
    slug: 'ophthalmology',
    name: 'Ophthalmology',
    tagline: 'Dilation-aware patient tracking, timed alerts, and OCT coordination.',
  },
  {
    slug: 'podiatry',
    name: 'Podiatry',
    tagline: 'Diabetic foot care tracking, wound documentation, and surgical coordination.',
  },
  {
    slug: 'oral-surgery',
    name: 'Oral Surgery',
    tagline: 'Surgical case coordination, medical clearance, and post-op monitoring.',
  },
  {
    slug: 'infusion-centers',
    name: 'Infusion Centers',
    tagline: 'Chair utilization, prior authorization tracking, and drug preparation coordination.',
  },
]

// Deduplicate by slug (ophthalmology appeared twice in original)
const uniqueSpecialties = specialties.filter(
  (spec, idx, arr) => arr.findIndex((s) => s.slug === spec.slug) === idx
)

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
          <div className={s.container}>
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
          </div>
        </section>

        <section className={s.specialtiesSection}>
          <div className={s.container}>
            <p className={s.specialtiesCount}>{uniqueSpecialties.length} specialties</p>
            <div className={s.specialtiesGrid}>
              {uniqueSpecialties.map((spec) => (
                <a
                  key={spec.slug}
                  href={`/specialties/${spec.slug}`}
                  className={s.specialtyCard}
                >
                  <div className={s.specialtyName}>{spec.name}</div>
                  <div className={s.specialtyTagline}>{spec.tagline}</div>
                  <div className={s.specialtyLearn}>Learn more →</div>
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
