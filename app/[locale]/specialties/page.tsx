import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import s from '@/app/specialties/specialty-full.module.css'

export const metadata: Metadata = {
  title: 'Specialties — clinIQ Clinic Operations by Specialty',
  description:
    'clinIQ adapts to the operational and billing workflows of every specialty. Physical therapy, orthopedics, pain management, behavioral health, primary care, urgent care, and more.',
  alternates: {
    canonical: 'https://cliniqhealthcare.com/specialties',
  },
  openGraph: {
    title: 'Specialties — clinIQ Clinic Operations by Specialty',
    description: 'clinIQ adapts to the operational and billing workflows of every specialty. Physical therapy, orthopedics, pain management, behavioral health, primary care, urgent care, and more.',
    type: 'website',
    url: 'https://cliniqhealthcare.com/specialties',
    images: [{ url: '/og-specialty-template.png', width: 1200, height: 630, alt: 'clinIQ by Specialty' }],
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cliniqhealthcare.com' },
    { '@type': 'ListItem', position: 2, name: 'Specialties', item: 'https://cliniqhealthcare.com/specialties' },
  ],
}

const SPECIALTIES = [
  { slug: 'urgent-care', name: 'Urgent Care', tagline: 'Stop leaving without being seen. Real-time lobby visibility and triage flow.' },
  { slug: 'primary-care', name: 'Primary Care', tagline: 'Same-day access, phone volume reduction, and chronic disease recall.' },
  { slug: 'pediatrics', name: 'Pediatrics', tagline: 'Sick walk-ins, vaccine clinic flow, and well-visit recalls without the lobby chaos.' },
  { slug: 'ob-gyn', name: 'OB-GYN', tagline: 'Prenatal sequencing, call volume reduction, and split OB/GYN scheduling.' },
  { slug: 'cardiology', name: 'Cardiology', tagline: 'Multi-stage diagnostic coordination: echo, stress test, device interrogation.' },
  { slug: 'orthopedic-surgery', name: 'Orthopedic Surgery', tagline: 'Imaging prep, dilation-style flow coordination, and post-op follow-up.' },
  { slug: 'spine-surgery', name: 'Spine Surgery', tagline: 'Pre-op clearance tracking, PA expiration alerts, and surgical pipeline visibility.' },
  { slug: 'general-surgery', name: 'General Surgery', tagline: 'Clinic-to-OR coordination without the phone calls and clearance gaps.' },
  { slug: 'pain-management', name: 'Pain Management', tagline: 'PA pipeline failures, prescription expiration alerts, and procedure board.' },
  { slug: 'physical-therapy', name: 'Physical Therapy', tagline: 'RTM billing capture, treatment plan adherence, and no-show management.' },
  { slug: 'chiropractic', name: 'Chiropractic', tagline: 'High-volume room coordination, no-show fill, and PI case tracking.' },
  { slug: 'psychiatry', name: 'Psychiatry', tagline: 'Privacy-forward check-in, in-room scheduling, and portal overload reduction.' },
  { slug: 'behavioral-health', name: 'Behavioral Health', tagline: 'ABA block scheduling, crisis walk-in flow, and variable session tracking.' },
  { slug: 'addiction-medicine', name: 'Addiction Medicine', tagline: 'UDS chain-of-custody, Sublocade/Vivitrol coordination, and injection observation.' },
  { slug: 'dermatology', name: 'Dermatology', tagline: 'Schedule override governance, biopsy follow-up tracking, and MA burnout reduction.' },
  { slug: 'ophthalmology', name: 'Ophthalmology', tagline: 'Dilation-aware patient tracking, timed alerts, and OCT coordination.' },
  { slug: 'neurology', name: 'Neurology', tagline: 'Referral pipeline visibility, EEG/EMG sequencing, and chronic disease follow-up.' },
  { slug: 'allergy', name: 'Allergy', tagline: 'Injection program management, vial tracking, biologic authorization, and RTM.' },
  { slug: 'allergy-immunology', name: 'Allergy & Immunology', tagline: 'Immunotherapy vial tracking, injection scheduling, testing coordination, and biologic authorization.' },
  { slug: 'rheumatology', name: 'Rheumatology', tagline: 'Disease activity tracking, biologic authorization, infusion coordination, and RTM.' },
  { slug: 'endocrinology', name: 'Endocrinology', tagline: 'CGM RTM billing, medication authorization, and chronic disease recall.' },
  { slug: 'gastroenterology', name: 'Gastroenterology', tagline: 'Procedure prep coordination, biologic authorization, and scope scheduling.' },
  { slug: 'pulmonology', name: 'Pulmonology', tagline: 'Spirometry tracking, CPAP compliance, biologic authorization, and RTM.' },
  { slug: 'nephrology', name: 'Nephrology', tagline: 'Dialysis coordination, CKD progression tracking, and transplant pipeline.' },
  { slug: 'oncology', name: 'Oncology', tagline: 'Infusion scheduling, prior auth, and chemotherapy protocol coordination.' },
  { slug: 'neurosurgery', name: 'Neurosurgery', tagline: 'Complex case coordination, LOMN generation, and post-operative RTM.' },
  { slug: 'sports-medicine', name: 'Sports Medicine', tagline: 'Injury RTM billing, return-to-play tracking, and concussion management.' },
  { slug: 'plastic-surgery', name: 'Plastic Surgery', tagline: 'Cosmetic patient experience, reconstructive coordination, and photography management.' },
  { slug: 'vascular-surgery', name: 'Vascular Surgery', tagline: 'Wound and limb salvage RTM, vascular lab coordination, and graft surveillance.' },
  { slug: 'wound-care', name: 'Wound Care', tagline: 'Wound measurement tracking, HBO coordination, and healing rate analytics.' },
  { slug: 'ent', name: 'ENT', tagline: 'Audiology coordination, allergy injection management, and surgical scheduling.' },
  { slug: 'podiatry', name: 'Podiatry', tagline: 'Diabetic foot care tracking, wound documentation, and surgical coordination.' },
  { slug: 'oral-surgery', name: 'Oral Surgery', tagline: 'Surgical case coordination, medical clearance, and post-op monitoring.' },
  { slug: 'infusion-centers', name: 'Infusion Centers', tagline: 'Chair utilization, prior authorization tracking, and drug preparation coordination.' },
]

const arrowSvg = (
  <svg className={s.btnIcon} viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M4 10h12m-4-4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function SpecialtiesIndex() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
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
              <span className={s.badge}>Specialties</span>
              <h1 className={s.heroTitle}>
                Solutions by<br /><em>Specialty</em>
              </h1>
              <p className={s.heroSubtitle}>
                Every specialty has different patient flow patterns, payer rules, and RTM
                opportunities. clinIQ adapts to the operational reality of your specific
                practice — not a generic clinic.
              </p>
              <div className={s.heroActions}>
                <a href="/features" className={s.btnPrimary}>
                  View All Features
                  {arrowSvg}
                </a>
                <a href="/locations" className={s.btnGhost}>
                  Browse Locations
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── SPECIALTIES GRID ── */}
        <section className={s.modules}>
          <div className={s.container}>
            <div className={s.modulesHeader}>
              <span className={s.sectionLabel}>All Specialties</span>
              <h2 className={s.sectionTitle}>
                Every specialty.<br /><em>One platform.</em>
              </h2>
            </div>
            <div className={s.modulesGrid}>
              {SPECIALTIES.map((spec) => (
                <a
                  key={spec.slug}
                  href={`/specialties/${spec.slug}`}
                  className={s.moduleCard}
                >
                  <h3 className={s.moduleTitle}>{spec.name}</h3>
                  <p className={s.moduleDesc}>{spec.tagline}</p>
                  <span className={s.moduleLink}>
                    View workflows
                    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" width="14" height="14">
                      <path d="M4 10h12m-4-4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className={s.cta}>
          <div className={s.ctaBg}>
            <div className={s.ctaOrb} aria-hidden="true" />
          </div>
          <div className={s.container}>
            <div className={s.ctaContent}>
              <h2 className={s.ctaTitle}>
                Don&rsquo;t see your specialty?<br /><em>We cover them all.</em>
              </h2>
              <p className={s.ctaDesc}>
                clinIQ works across all outpatient specialties. If your specialty isn&rsquo;t
                listed, book a demo and we&rsquo;ll show you how it maps to your workflow.
              </p>
              <div className={s.ctaActions}>
                <a href="/demo" className={s.btnPrimary}>
                  Book a Demo
                  {arrowSvg}
                </a>
                <a href="/contact" className={s.btnGhost}>
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
      <FooterInner />
    </>
  )
}
