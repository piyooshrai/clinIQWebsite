import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import s from '@/app/specialties/specialty-full.module.css'

export const metadata: Metadata = {
  title: 'clinIQ vs Qless — Virtual Queues Don\'t Track What Happens Inside',
  description:
    'Qless reduces lobby crowding with virtual queues. clinIQ tracks patients through every room, automates RTM billing, and manages pre-authorizations. See why clinics need more than a queue.',
  keywords: [
    'Qless for clinics',
    'Qless alternative healthcare',
    'Qless vs clinIQ',
    'virtual queue medical office',
    'clinic patient flow beyond queue',
  ],
  openGraph: {
    title: 'clinIQ vs Qless — Virtual Queues Don\'t Track What Happens Inside',
    description:
      'Virtual queues reduce lobby crowding. They don\'t track what happens inside the clinic.',
    type: 'website',
  },
}

const schemaData = {
  breadcrumb: {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cliniqhealthcare.com' },
      { '@type': 'ListItem', position: 2, name: 'Compare', item: 'https://cliniqhealthcare.com/compare' },
      { '@type': 'ListItem', position: 3, name: 'clinIQ vs Qless', item: 'https://cliniqhealthcare.com/compare/qless' },
    ],
  },
  faq: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What does Qless do and where does it fall short for medical clinics?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Qless is a virtual queue management platform originally built for government agencies and high-volume service locations. It allows people to join a queue remotely and receive notifications when it\'s their turn. For reducing physical lobby crowding, it works. Where it falls short for medical clinics: it has no clinical workflow awareness. It doesn\'t track patients through exam rooms, doesn\'t understand multi-provider scheduling, doesn\'t manage insurance authorizations, and has no billing integration. Qless sees one transition — lobby to "called in" — and stops there.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does clinIQ handle the lobby experience differently from Qless?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Both clinIQ and Qless can reduce lobby crowding. But clinIQ\'s LobbyView display gives waiting patients real context — estimated wait information, queue visibility, and status updates — without showing other patients\' names on a shared screen. More importantly, clinIQ\'s lobby experience is connected to the actual clinical workflow: when a room is ready for a patient, that triggers the lobby display, not just a timer.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can clinIQ work with our existing scheduling and EHR systems?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. clinIQ layers on top of your existing EHR — Epic, Athenahealth, eClinicalWorks, ModMed, and others — through read integrations that don\'t touch clinical records. It reads appointment data to drive patient flow, then adds operational tracking, RTM billing management, and pre-authorization pipelines on top. You don\'t change your EHR or rebuild your scheduling workflows.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is Qless designed for healthcare or general use?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Qless is a general-purpose queue platform that has been adopted by some healthcare facilities, but it was not designed for healthcare. It has no native understanding of clinical roles, exam room states, prior authorization workflows, or billing cycles. clinIQ was purpose-built for outpatient specialty clinics and includes HIPAA-native design, clinical workflow stages, and healthcare-specific billing features from the ground up.',
        },
      },
    ],
  },
}

const tdStyle: React.CSSProperties = {
  padding: '0.85rem 1rem',
  borderBottom: '1px solid #e5e2db',
  fontSize: '0.95rem',
  verticalAlign: 'top',
}
const thStyle: React.CSSProperties = {
  padding: '0.85rem 1rem',
  textAlign: 'left',
  fontWeight: 700,
  fontSize: '0.85rem',
  textTransform: 'uppercase',
  letterSpacing: '0.06em',
  borderBottom: '2px solid #1a1a1a',
}
const checkStyle: React.CSSProperties = { color: '#0a9e6e', fontWeight: 700 }
const crossStyle: React.CSSProperties = { color: '#c0392b', fontWeight: 700 }

export default function QlessPage() {
  return (
    <>
      <NavInner />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData.breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData.faq) }}
      />
      <main>
        {/* Hero */}
        <section className={s.hero}>
          <div className={s.heroBg}>
            <div className={s.heroOrb} />
            <div className={s.heroOrbTeal} />
            <div className={s.heroOrbBlue} />
            <div className={s.heroGrain} />
          </div>
          <div className={s.heroContent}>
            <div className={s.badge}>clinIQ vs Qless</div>
            <h1 className={s.heroTitle}>
              Virtual queues reduce<br />
              lobby crowding. They don&apos;t<br />
              track what happens inside.
            </h1>
            <p className={s.heroSubtitle}>
              Qless was built for government service lines and high-volume retail. clinIQ was built
              for outpatient specialty clinics — where what happens inside the four walls matters
              just as much as the lobby experience.
            </p>
            <div className={s.heroActions}>
              <a href="/demo" className={s.btnPrimary}>
                See clinIQ Live <span className={s.btnIcon}>→</span>
              </a>
              <a href="/compare" className={s.btnGhost}>
                All Comparisons
              </a>
            </div>
          </div>
        </section>

        {/* Reality */}
        <section className={s.reality}>
          <div className={s.realityGrid}>
            <div className={s.realityLeft}>
              <h2>The inside of your clinic is invisible to Qless</h2>
              <div className={s.realityNarrative}>
                <p>
                  Qless built its reputation in places where the operational problem is literally a
                  line of people waiting: the DMV, a government benefits office, a busy retail
                  return counter. In those environments, a virtual queue is the whole solution.
                  The service interaction is simple, the workflow is linear, and once a person is
                  called in, the queue system's job is done.
                </p>
                <p>
                  A specialty clinic's visit is not linear. A patient who arrives for a 45-minute
                  pain management consultation might wait in the lobby, get roomed, wait for an MA
                  for vitals, wait again for the provider, have a procedure, wait for discharge
                  instructions, and finally check out. At each of those stages, different staff
                  members need different information. A virtual queue that tracks "position in line"
                  cannot model any of that.
                </p>
                <p>
                  Qless also came from a world with no concept of insurance authorizations,
                  remote therapeutic monitoring billing cycles, or recall lists. A clinic that tries
                  to solve its operations problem with Qless finds that it now has a nicer lobby
                  and exactly the same chaos once a patient crosses the threshold into the clinical
                  space.
                </p>
                <p>
                  clinIQ tracks patients through every stage of the visit, alerts staff when
                  rooms have been occupied beyond expected thresholds, displays wait context on a
                  patient-facing lobby screen, and generates actionable data about where time is
                  actually being lost. That's the difference between a queue tool and an
                  operations platform.
                </p>
              </div>
            </div>
            <div className={s.realityRight}>
              <h3>Where a queue tool leaves you on your own</h3>
              <ul className={s.painList}>
                <li className={s.painItem}>
                  <span className={s.painDot} />
                  <span className={s.painText}>
                    No room-by-room tracking — staff still use whiteboards and radio calls once
                    patients enter the clinical space
                  </span>
                </li>
                <li className={s.painItem}>
                  <span className={s.painDot} />
                  <span className={s.painText}>
                    No bottleneck detection — bottlenecks form at MA stations, with providers,
                    or at checkout without any alert
                  </span>
                </li>
                <li className={s.painItem}>
                  <span className={s.painDot} />
                  <span className={s.painText}>
                    No multi-provider coordination — when one provider runs late, there's no
                    cascading visibility across the care team
                  </span>
                </li>
                <li className={s.painItem}>
                  <span className={s.painDot} />
                  <span className={s.painText}>
                    No RTM billing or pre-auth management — revenue operations remain entirely
                    manual
                  </span>
                </li>
                <li className={s.painItem}>
                  <span className={s.painDot} />
                  <span className={s.painText}>
                    No analytics on where visit time is actually being spent across the clinic
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Comparison table */}
        <section style={{ padding: '5rem 1.5rem', background: 'var(--cream, #f5f3ef)' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '2rem', textAlign: 'center' }}>
              Feature comparison
            </h2>
            <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.07)' }}>
              <thead>
                <tr style={{ background: '#1a1a1a', color: '#fff' }}>
                  <th style={{ ...thStyle, color: '#fff', borderBottom: 'none' }}>Capability</th>
                  <th style={{ ...thStyle, color: '#fff', borderBottom: 'none', textAlign: 'center' }}>Qless</th>
                  <th style={{ ...thStyle, color: '#0a9e6e', borderBottom: 'none', textAlign: 'center' }}>clinIQ</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Virtual lobby queue', '✓ Core strength', '✓ Included'],
                  ['SMS / app wait notifications', '✓ Available', '✓ Included'],
                  ['Exam room status tracking', '✗ Not available', '✓ Real-time'],
                  ['Multi-stage visit tracking', '✗ Not available', '✓ Full visit lifecycle'],
                  ['Bottleneck alerts', '✗ Not available', '✓ Threshold-based'],
                  ['LobbyView patient display', '✗ Not available', '✓ Branded TV display'],
                  ['RTM billing automation', '✗ Not available', '✓ CPT 98975–98981'],
                  ['Pre-authorization management', '✗ Not available', '✓ Pipeline + alerts'],
                  ['Multi-provider scheduling', '✗ Not available', '✓ Full scheduling suite'],
                  ['EHR integration', '✗ No native EHR support', '✓ Any EHR'],
                  ['HIPAA-native design', 'Retrofitted BAA', '✓ Built for healthcare'],
                  ['Original target market', 'Government / retail', 'Outpatient specialty clinics'],
                ].map(([feature, qless, cliniq], i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? '#fff' : '#fafaf8' }}>
                    <td style={tdStyle}>{feature}</td>
                    <td style={{ ...tdStyle, textAlign: 'center' }}>
                      <span style={qless.startsWith('✗') ? crossStyle : (qless.startsWith('✓') ? checkStyle : {})}>
                        {qless}
                      </span>
                    </td>
                    <td style={{ ...tdStyle, textAlign: 'center' }}>
                      <span style={cliniq.startsWith('✓') ? checkStyle : crossStyle}>
                        {cliniq}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Stats */}
        <section className={s.stats}>
          <div className={s.statsGrid}>
            <div className={s.stat}>
              <div className={s.statNumber}>Full</div>
              <div className={s.statLabel}>visit lifecycle tracked, not just arrival</div>
            </div>
            <div className={s.stat}>
              <div className={s.statNumber}>Real-time</div>
              <div className={s.statLabel}>room status for every staff member</div>
            </div>
            <div className={s.stat}>
              <div className={s.statNumber}>~$112</div>
              <div className={s.statLabel}>avg RTM revenue per patient/month</div>
            </div>
            <div className={s.stat}>
              <div className={s.statNumber}>Days</div>
              <div className={s.statLabel}>to go live on any EHR</div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className={s.faq}>
          <div style={{ maxWidth: '780px', margin: '0 auto', padding: '0 1.5rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '2.5rem', textAlign: 'center' }}>
              Common questions
            </h2>
            <ul className={s.faqList}>
              {schemaData.faq.mainEntity.map((item, i) => (
                <li key={i} className={s.faqItem}>
                  <div className={s.faqQ}>{item.name}</div>
                  <div className={s.faqA}>{item.acceptedAnswer.text}</div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className={s.cta}>
          <div className={s.ctaBg}>
            <div className={s.ctaOrb} />
          </div>
          <div className={s.ctaContent}>
            <h2 className={s.ctaTitle}>Track every patient, not just their place in line.</h2>
            <p className={s.ctaDesc}>
              clinIQ gives you complete visibility from check-in to checkout — and the revenue
              operations that happen between visits.
            </p>
            <div className={s.ctaActions}>
              <a href="/demo" className={s.btnPrimary}>
                Book a Demo <span className={s.btnIcon}>→</span>
              </a>
              <a href="/pricing" className={s.btnGhost}>
                See Pricing
              </a>
            </div>
            <p className={s.ctaNote}>Flat monthly pricing. No per-visit fees. Live in days.</p>
          </div>
        </section>
      </main>
      <FooterInner />
    </>
  )
}
