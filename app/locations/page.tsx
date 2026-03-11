import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import s from '@/app/specialties/specialty-full.module.css'

export const metadata: Metadata = {
  title: 'clinIQ Clinic Software by Location — US, UK, UAE, Saudi Arabia, Canada & More',
  description:
    'clinIQ clinic operations software serves clinics across North America, the Middle East, Europe, and Australia. Find your region for healthcare-specific implementation context.',
  keywords: [
    'clinic management software USA',
    'clinic software UK',
    'healthcare software UAE',
    'clinic operations platform Canada',
    'patient flow software Australia',
    'Saudi Arabia clinic software',
    'medical practice software by country',
  ],
  openGraph: {
    title: 'clinIQ by Location — Clinic Software Built for Your Healthcare Market',
    description:
      'Insurance complexity, payer rules, regulatory requirements, and clinical staffing realities differ by country. clinIQ is configured for each market — find yours.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://cliniqhealthcare.com/locations',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cliniqhealthcare.com' },
    { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://cliniqhealthcare.com/locations' },
  ],
}

const REGIONS = [
  {
    name: 'North America — Major Markets',
    locations: [
      { slug: 'united-states', name: 'United States', desc: 'Insurance complexity, prior auth burden, staff shortages, value-based care.' },
      { slug: 'canada', name: 'Canada', desc: 'Provincial billing, wait time management, public-private hybrid workflows.' },
      { slug: 'new-york', name: 'New York', desc: 'High volume, Medicaid complexity, multilingual intake across five boroughs.' },
      { slug: 'los-angeles', name: 'Los Angeles', desc: 'Multi-site operations, high-volume urgent care, MediCal complexity.' },
      { slug: 'chicago', name: 'Chicago', desc: 'Dense specialist market, high patient volume, competitive staffing.' },
      { slug: 'houston', name: 'Houston', desc: 'Large uninsured population, complex payer mix, rapid practice growth.' },
      { slug: 'miami', name: 'Miami', desc: 'Multilingual patient population, high Medicare Advantage penetration.' },
      { slug: 'phoenix', name: 'Phoenix', desc: 'Rapid population growth, urgent care saturation, high walk-in volume.' },
      { slug: 'atlanta', name: 'Atlanta', desc: 'Growing specialist market, Medicaid complexity, multi-site expansion.' },
      { slug: 'denver', name: 'Denver', desc: 'High-growth clinic market, RTM opportunity, concierge adjacent.' },
      { slug: 'toronto', name: 'Toronto', desc: 'OHIP billing, wait time pressures, high-volume urban primary care.' },
      { slug: 'vancouver', name: 'Vancouver', desc: 'BC provincial workflows, mixed public-private patient population.' },
      { slug: 'montreal', name: 'Montreal', desc: 'Bilingual intake, RAMQ billing, mixed French-English patient population.' },
    ],
  },
  {
    name: 'United States — All States',
    locations: [
      { slug: 'alabama',        name: 'Alabama',        desc: 'Rural health clinics, high chronic disease burden, Medicaid complexity.' },
      { slug: 'alaska',         name: 'Alaska',         desc: 'Remote care delivery, telehealth-first workflows, small team operations.' },
      { slug: 'arizona',        name: 'Arizona',        desc: 'Rapid growth, large Medicare Advantage market, multi-site expansion.' },
      { slug: 'arkansas',       name: 'Arkansas',       desc: 'Rural primary care, high uninsured rate, Medicaid managed care.' },
      { slug: 'california',     name: 'California',     desc: 'MediCal complexity, DMHC compliance, multi-location specialist groups.' },
      { slug: 'colorado',       name: 'Colorado',       desc: 'High-growth clinic market, RTM opportunity, concierge adjacent.' },
      { slug: 'connecticut',    name: 'Connecticut',    desc: 'Dense specialist market, high commercial insurance, academic affiliates.' },
      { slug: 'delaware',       name: 'Delaware',       desc: 'Small state, high specialist density, Mid-Atlantic payer mix.' },
      { slug: 'florida',        name: 'Florida',        desc: 'Large Medicare population, high-volume urgent care, multilingual intake.' },
      { slug: 'georgia',        name: 'Georgia',        desc: 'Rapid population growth, Georgia Medicaid CMO complexity.' },
      { slug: 'hawaii',         name: 'Hawaii',         desc: 'Island care delivery, HMSA workflows, tourism-season volume swings.' },
      { slug: 'idaho',          name: 'Idaho',          desc: 'Rural health access, fast-growing Treasure Valley market.' },
      { slug: 'illinois',       name: 'Illinois',       desc: 'Dense specialist market, high patient volume, competitive staffing.' },
      { slug: 'indiana',        name: 'Indiana',        desc: 'Large manufacturing workforce, occupational health, Medicaid complexity.' },
      { slug: 'iowa',           name: 'Iowa',           desc: 'Rural primary care access, agricultural workforce health needs.' },
      { slug: 'kansas',         name: 'Kansas',         desc: 'Rural health clinics, KanCare managed care, agricultural workforce.' },
      { slug: 'kentucky',       name: 'Kentucky',       desc: 'High chronic disease burden, Medicaid managed care, rural access.' },
      { slug: 'louisiana',      name: 'Louisiana',      desc: 'Bayou Health Medicaid, high chronic disease, post-disaster surge.' },
      { slug: 'maine',          name: 'Maine',          desc: 'Rural care, MaineCare complexity, aging population workflows.' },
      { slug: 'maryland',       name: 'Maryland',       desc: 'HSCRC rate setting, dense federal workforce, academic health systems.' },
      { slug: 'massachusetts',  name: 'Massachusetts',  desc: 'Near-universal coverage, ACO networks, high specialist density.' },
      { slug: 'michigan',       name: 'Michigan',       desc: 'Large Medicaid population, auto industry workforce, urban-rural divide.' },
      { slug: 'minnesota',      name: 'Minnesota',      desc: 'High-performing market, large integrated systems, value-based care.' },
      { slug: 'mississippi',    name: 'Mississippi',    desc: 'High uninsured rate, rural FQHCs, chronic disease management.' },
      { slug: 'missouri',       name: 'Missouri',       desc: 'Medicaid complexity, dual urban-rural market, multi-payer workflows.' },
      { slug: 'montana',        name: 'Montana',        desc: 'Remote care, telehealth-first, Native American health workflows.' },
      { slug: 'nebraska',       name: 'Nebraska',       desc: 'Agricultural workforce, rural access, growing Omaha specialist market.' },
      { slug: 'nevada',         name: 'Nevada',         desc: 'Tourism-sector workforce, Las Vegas high-volume urgent care.' },
      { slug: 'new-hampshire',  name: 'New Hampshire',  desc: 'Small market, high commercial coverage, New England payer mix.' },
      { slug: 'new-jersey',     name: 'New Jersey',     desc: 'Dense urban market, complex payer mix, high specialist volume.' },
      { slug: 'new-mexico',     name: 'New Mexico',     desc: 'High Medicaid rate, rural FQHCs, Native American health systems.' },
      { slug: 'north-carolina', name: 'North Carolina', desc: 'Fast-growing market, rural-urban divide, large academic systems.' },
      { slug: 'north-dakota',   name: 'North Dakota',   desc: 'Small market, energy sector workforce, rural primary care.' },
      { slug: 'ohio',           name: 'Ohio',           desc: 'Large Medicaid market, urban-rural mix, multi-site specialist groups.' },
      { slug: 'oklahoma',       name: 'Oklahoma',       desc: 'High uninsured rate, Native American health systems, rural access.' },
      { slug: 'oregon',         name: 'Oregon',         desc: 'CCO coordinated care, DMAP workflows, concierge-adjacent market.' },
      { slug: 'pennsylvania',   name: 'Pennsylvania',   desc: 'Large Medicaid market, dense specialist market, academic health.' },
      { slug: 'rhode-island',   name: 'Rhode Island',   desc: 'Small market, near-universal coverage, dense urban specialist care.' },
      { slug: 'south-carolina', name: 'South Carolina', desc: 'Growing retiree population, coastal urgent care, Medicaid complexity.' },
      { slug: 'south-dakota',   name: 'South Dakota',   desc: 'Rural care, Native American health systems, small specialist market.' },
      { slug: 'tennessee',      name: 'Tennessee',      desc: 'TennCare managed care, high chronic disease burden, rural access.' },
      { slug: 'texas',          name: 'Texas',          desc: 'Largest uninsured rate, Medicaid complexity, rapid clinic growth.' },
      { slug: 'utah',           name: 'Utah',           desc: 'Fast-growing population, young demographic, IHC-adjacent market.' },
      { slug: 'vermont',        name: 'Vermont',        desc: 'Green Mountain Care, near-universal coverage, small rural market.' },
      { slug: 'virginia',       name: 'Virginia',       desc: 'Federal workforce health, TRICARE workflows, NoVA specialist market.' },
      { slug: 'washington',     name: 'Washington',     desc: 'Apple Health Medicaid, tech workforce DPC, multi-site groups.' },
      { slug: 'west-virginia',  name: 'West Virginia',  desc: 'High chronic disease burden, rural FQHCs, opioid treatment programs.' },
      { slug: 'wisconsin',      name: 'Wisconsin',      desc: 'BadgerCare Medicaid, large integrated systems, dairy workforce.' },
      { slug: 'wyoming',        name: 'Wyoming',        desc: 'Small market, energy sector workforce, rural primary care access.' },
    ],
  },
  {
    name: 'Middle East',
    locations: [
      { slug: 'uae', name: 'UAE', desc: 'NABIDH compliance, medical tourism, expat patient populations.' },
      { slug: 'dubai', name: 'Dubai', desc: 'DHA licensing, premium private care, international patient concierge.' },
      { slug: 'abu-dhabi', name: 'Abu Dhabi', desc: 'HAAD/DOH compliance, Thiqa/DAMAN payer workflows.' },
      { slug: 'saudi-arabia', name: 'Saudi Arabia', desc: 'Vision 2030 digitalization, CCHI insurance, nationalization workforce.' },
      { slug: 'riyadh', name: 'Riyadh', desc: 'Large hospital-adjacent clinic networks, high-volume specialist care.' },
      { slug: 'jeddah', name: 'Jeddah', desc: 'High-volume private clinics, pilgrimage season surge planning.' },
      { slug: 'dammam', name: 'Dammam', desc: 'Industrial health clinic networks, occupational medicine workflows.' },
      { slug: 'qatar', name: 'Qatar', desc: 'Hamad Health workflows, expat population, NHIC insurance.' },
      { slug: 'kuwait', name: 'Kuwait', desc: 'MOH clinic workflows, public-private split, expat majority.' },
      { slug: 'bahrain', name: 'Bahrain', desc: 'Small market, high-density private clinic competition, NHRA compliance.' },
      { slug: 'oman', name: 'Oman', desc: 'MOH integration, growing private sector, regional hub clinics.' },
      { slug: 'egypt', name: 'Egypt', desc: 'Large private sector, Cairo specialty clinics, medical tourism.' },
      { slug: 'jordan', name: 'Jordan', desc: 'Medical tourism hub, private insurance complexity, regional referrals.' },
      { slug: 'lebanon', name: 'Lebanon', desc: 'Private-dominant market, medical tourism, multilingual patient population.' },
      { slug: 'israel', name: 'Israel', desc: 'HMO-based system, high tech adoption, military health workflows.' },
    ],
  },
  {
    name: 'Europe',
    locations: [
      { slug: 'united-kingdom', name: 'United Kingdom', desc: 'Private practice efficiency alongside NHS, CQC compliance.' },
      { slug: 'england', name: 'England', desc: 'NHS GP referral workflows, CQC compliance, private practice growth.' },
      { slug: 'scotland', name: 'Scotland', desc: 'NHS Scotland integration, private practice expansion, medical tourism.' },
      { slug: 'wales', name: 'Wales', desc: 'Welsh NHS workflows, rural health access, bilingual patient communication.' },
      { slug: 'northern-ireland', name: 'Northern Ireland', desc: 'HSC workflows, cross-border patient flows, private practice.' },
      { slug: 'london', name: 'London', desc: 'High-volume private clinics, medical tourism, international patients.' },
      { slug: 'manchester', name: 'Manchester', desc: 'Mixed NHS-private practice, high urban demand, GP referral workflows.' },
      { slug: 'birmingham', name: 'Birmingham', desc: 'Diverse patient population, high GP demand, urgent care pressure.' },
      { slug: 'edinburgh', name: 'Edinburgh', desc: 'Scottish NHS integration, private practice growth, medical tourism.' },
      { slug: 'ireland', name: 'Ireland', desc: 'HSE workflows, private insurance complexity, growing specialist demand.' },
      { slug: 'germany', name: 'Germany', desc: 'GKV/PKV dual insurance, Kassenärztliche billing, digital documentation.' },
      { slug: 'france', name: 'France', desc: 'CPAM workflows, carte vitale integration, private practice modernization.' },
      { slug: 'netherlands', name: 'Netherlands', desc: 'Huisarts referral networks, Zorgverzekeringswet compliance.' },
      { slug: 'austria', name: 'Austria', desc: 'ÖGK insurance, private Wahlarztsystem, German-language workflows.' },
      { slug: 'belgium', name: 'Belgium', desc: 'INAMI/RIZIV insurance, trilingual patient population, GP gatekeeping.' },
      { slug: 'spain', name: 'Spain', desc: 'Dual public-private system, regional healthcare autonomy, medical tourism.' },
      { slug: 'italy', name: 'Italy', desc: 'SSN regional complexity, private specialist demand, medical tourism.' },
      { slug: 'portugal', name: 'Portugal', desc: 'SNS workflows, growing private sector, medical tourism hub.' },
      { slug: 'switzerland', name: 'Switzerland', desc: 'Mandatory insurance complexity, multilingual patient population, premium care.' },
    ],
  },
  {
    name: 'Asia-Pacific',
    locations: [
      { slug: 'australia', name: 'Australia', desc: 'Medicare bulk billing, GP superclinic workflows, private health insurance.' },
    ],
  },
]

export default function LocationsPage() {
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
              <div className={s.badge}>Locations</div>
              <h1 className={s.heroTitle}>
                Clinic operations are local.<br />
                <em>clinIQ is built for each market.</em>
              </h1>
              <p className={s.heroSubtitle}>
                Insurance complexity, payer rules, regulatory requirements, and clinical
                staffing realities differ significantly by country and city. Find your region
                below for market-specific implementation context.
              </p>
            </div>
          </div>
        </section>

        {/* ── REGIONS ── */}
        <section className={s.modules} style={{ background: 'var(--cream, #f5f3ef)' }}>
          <div className={s.container}>
            {REGIONS.map((region) => (
              <div key={region.name} style={{ marginBottom: '72px' }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginBottom: '28px',
                  }}
                >
                  <span
                    style={{
                      display: 'block',
                      width: '28px',
                      height: '2px',
                      background: 'var(--teal)',
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      fontSize: '12px',
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--teal)',
                    }}
                  >
                    {region.name}
                  </span>
                </div>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                    gap: '16px',
                  }}
                >
                  {region.locations.map((loc) => (
                    <a
                      key={loc.slug}
                      href={`/locations/${loc.slug}`}
                      className={s.moduleCard}
                      style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                      <h2 className={s.moduleTitle} style={{ fontSize: '18px', marginBottom: '8px' }}>
                        {loc.name}
                      </h2>
                      <p
                        className={s.moduleDesc}
                        style={{ fontSize: '14px', margin: 0, lineHeight: 1.55 }}
                      >
                        {loc.desc}
                      </p>
                      <span
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px',
                          marginTop: '16px',
                          fontSize: '13px',
                          fontWeight: 500,
                          color: 'var(--teal)',
                        }}
                      >
                        View
                        <svg width="12" height="12" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                          <path d="M4 10h12m-4-4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── WHY LOCATION MATTERS ── */}
        <section className={s.reality}>
          <div className={s.container}>
            <div className={s.realityGrid}>
              <div className={s.realityLeft}>
                <span className={s.sectionLabel}>Why it matters</span>
                <h2 className={s.sectionTitle}>
                  Clinic software that ignores your market<br />
                  <em>adds friction instead of removing it.</em>
                </h2>
                <div className={s.realityNarrative}>
                  <p>
                    A clinic in Riyadh has CCHI insurance rules, Vision 2030 digitalization
                    mandates, and a workforce navigating nationalization requirements. A clinic
                    in New York has 800+ languages spoken, Medicaid enrollment among the highest
                    in the US, and front-desk turnover that runs 40% above the national average.
                    A clinic in London operates in the gap between NHS and private — different
                    billing, different patient expectations, different regulatory obligations.
                  </p>
                  <p>
                    Generic clinic software ignores all of this. clinIQ is built with market
                    context baked in — so the workflows, defaults, and support are calibrated
                    for the operational reality your team actually works in.
                  </p>
                </div>
              </div>
              <div className={s.realityRight}>
                <ul className={s.painList}>
                  {[
                    'Prior authorization rules differ by payer, by state, and by country — generic PA workflows add steps instead of removing them.',
                    'Intake form requirements vary by specialty and jurisdiction — a form that works in Chicago may not comply with London\'s private practice standards.',
                    'Staff communication norms differ — some markets require multilingual patient-facing interfaces as a baseline, not an add-on.',
                    'RTM billing (CPT 98975–98981) is US-specific — and most international clinics have equivalent reimbursement structures clinIQ can map to.',
                    'Implementation timelines and support hours need to match your timezone — not a US-centric support desk.',
                  ].map((point, i) => (
                    <li key={i} className={s.painItem}>
                      <span className={s.painDot} aria-hidden="true" />
                      <span className={s.painText}>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className={s.cta}>
          <div className={s.ctaBg}><div className={s.ctaOrb} aria-hidden="true" /></div>
          <div className={s.container}>
            <div className={s.ctaContent}>
              <h2 className={s.ctaTitle}>
                Don&rsquo;t see your city?<br />
                <em>clinIQ works everywhere clinics work.</em>
              </h2>
              <p className={s.ctaDesc}>
                If your market isn&rsquo;t listed above, talk to us. The operational problems
                are likely ones we&rsquo;ve already solved in a similar healthcare system.
              </p>
              <div className={s.ctaActions}>
                <a href="/demo" className={s.btnPrimary}>
                  Request a demo
                  <svg className={s.btnIcon} viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M4 10h12m-4-4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a href="/specialties" className={s.btnGhost}>
                  Browse by specialty
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
