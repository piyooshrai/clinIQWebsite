import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import type { SpecialtyPageData } from '@/lib/feature-specialty-data'
import s from '@/app/specialties/specialty-full.module.css'

interface Props {
  data: SpecialtyPageData
}

export default function SpecialtyPage({ data }: Props) {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: data.breadcrumbs.map((bc, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: bc.label,
      item: `https://cliniqhealthcare.com${bc.href}`,
    })),
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `clinIQ for ${data.specialtyName} Clinics`,
    description: data.metaDescription,
    provider: { '@type': 'Organization', name: 'clinIQ', url: 'https://cliniqhealthcare.com' },
    serviceType: 'Healthcare Operations Software',
    areaServed: 'US',
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.faqs.map(faq => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  }

  const marqueeAll = [...data.marqueeItems, ...data.marqueeItems]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
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
              <div className={s.badge}>{data.specialtyName}</div>
              <h1 className={s.heroTitle}>
                {data.heroH1Lines.map((line, i) => (
                  i === 0 ? (
                    <span key={i}>{line}</span>
                  ) : i === data.heroH1Lines.length - 1 ? (
                    <><br key={`br-${i}`} /><em>{line}</em></>
                  ) : (
                    <><br key={`br-${i}`} />{line}</>
                  )
                ))}
              </h1>
              <p className={s.heroSubtitle}>{data.heroSubtitle}</p>
              <div className={s.heroActions}>
                <a href="/contact" className={s.btnPrimary}>
                  See clinIQ for {data.specialtyName}
                  <svg className={s.btnIcon} viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M4 10h12m-4-4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a href="/features/patient-flow" className={s.btnGhost}>
                  How Patient Flow Works
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── MARQUEE ── */}
        <div className={s.marquee} aria-hidden="true">
          <div className={s.marqueeTrack}>
            {marqueeAll.reduce<React.ReactNode[]>((acc, item, i) => {
              if (i > 0) acc.push(<span key={`dot-${i}`} className={s.marqueeDot} />)
              acc.push(<span key={`item-${i}`}>{item}</span>)
              return acc
            }, []).map((node, i) => (
              <span key={i}>{node}</span>
            ))}
          </div>
        </div>

        {/* ── THE REALITY ── */}
        <section className={s.reality}>
          <div className={s.container}>
            <div className={s.realityGrid}>
              <div className={s.realityLeft}>
                <span className={s.sectionLabel}>The Reality</span>
                <h2 className={s.sectionTitle}>
                  The {data.specialtyName} operational challenge<br />
                  isn&rsquo;t clinical.<br />
                  <em>It&rsquo;s coordination.</em>
                </h2>
                <div className={s.realityNarrative}>
                  {data.realityNarrative.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>
              <div className={s.realityRight}>
                <ul className={s.painList} aria-label={`${data.specialtyName} clinic operational pain points`}>
                  {data.painPoints.map((point, i) => (
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

        {/* ── WHAT CHANGES ── */}
        <section className={s.changes}>
          <div className={s.container}>
            <div className={s.changesHeader}>
              <span className={s.sectionLabel}>What Changes</span>
              <h2 className={s.sectionTitle}>Three problems fixed.<br />Dozens of minutes recovered daily.</h2>
              <p className={s.sectionDesc}>
                The {data.specialtyName} clinic&rsquo;s operational failures are coordination failures. clinIQ connects the pieces.
              </p>
            </div>
            <div className={s.changesGrid}>
              {data.changes.map(({ before, after }, i) => (
                <div key={i} className={s.changeCard}>
                  <div className={s.changeBefore}>
                    <span className={`${s.changeLabel} ${s.changeLabelBefore}`}>Before</span>
                    <p className={s.changeText}>{before}</p>
                  </div>
                  <div className={s.changeAfter}>
                    <span className={`${s.changeLabel} ${s.changeLabelAfter}`}>After clinIQ</span>
                    <p className={s.changeText}>{after}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── MODULES ── */}
        <section className={s.modules}>
          <div className={s.container}>
            <div className={s.modulesHeader}>
              <span className={s.sectionLabel}>Built For This</span>
              <h2 className={s.sectionTitle}>The clinIQ tools built for {data.specialtyName}.</h2>
              <p className={s.sectionDesc}>
                Not a general patient flow tool adapted from hospital software. Specific modules
                addressing the specific coordination problems of {data.specialtyName} clinic days.
              </p>
            </div>
            <div className={`${s.modulesGrid} ${s.threeCol}`}>
              {data.featureModules.map(({ name, title, desc, href }) => (
                <div key={name} className={s.moduleCard}>
                  <div className={s.moduleIcon}>
                    <ModuleIcon slug={name} />
                  </div>
                  <h3 className={s.moduleTitle}>{title}</h3>
                  <p className={s.moduleDesc}>{desc}</p>
                  <a href={href} className={s.moduleLink}>
                    Learn more
                    <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                      <path d="M4 10h12m-4-4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WORKFLOW ── */}
        <section className={s.workflow}>
          <div className={s.container}>
            <div className={s.workflowHeader}>
              <span className={s.sectionLabel}>How It Flows</span>
              <h2 className={s.sectionTitle}>Every stage. Every handoff. All connected.</h2>
              <p className={s.workflowDesc}>
                The {data.specialtyName} visit moves through predictable stages with real coordination
                requirements at each transition. clinIQ tracks every stage in real time.
              </p>
            </div>
            <div className={s.stageRow} role="list" aria-label={`${data.specialtyName} visit flow stages`}>
              {data.workflowStages.map(({ label, color }, i, arr) => (
                <span key={label} style={{ display: 'contents' }}>
                  <span className={s.stage} role="listitem">
                    <span className={s.stageDot} style={{ background: color }} aria-hidden="true" />
                    {label}
                  </span>
                  {i < arr.length - 1 && <span className={s.stageArrow} aria-hidden="true">→</span>}
                </span>
              ))}
            </div>
            <div className={s.workflowNote}>{data.workflowNote}</div>
          </div>
        </section>

        {/* ── STATS ── */}
        <section className={s.stats}>
          <div className={s.container}>
            <div className={s.statsHeader}>
              <h2 className={s.statsHeaderTitle}>What coordination failures cost {data.specialtyName} clinics.</h2>
              <p className={s.statsHeaderDesc}>
                Most practices don&rsquo;t measure the cost of hallway checks, phone-tag, and unfilled gaps.
                They just experience it every day.
              </p>
            </div>
            <div className={s.statsGrid}>
              {data.stats.map(({ number, label }) => (
                <div key={label} className={s.stat}>
                  <span className={s.statNumber}>{number}</span>
                  <span className={s.statLabel}>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className={s.faq}>
          <div className={s.container}>
            <div className={s.faqHeader}>
              <span className={s.sectionLabel}>Common Questions</span>
              <h2 className={s.sectionTitle}>What {data.specialtyName} practice managers ask first.</h2>
            </div>
            <div className={s.faqList}>
              {data.faqs.map(({ q, a }) => (
                <div key={q} className={s.faqItem}>
                  <h3 className={s.faqQ}>{q}</h3>
                  <p className={s.faqA}>{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className={s.cta}>
          <div className={s.ctaBg}><div className={s.ctaOrb} aria-hidden="true" /></div>
          <div className={s.container}>
            <div className={s.ctaContent}>
              <h2 className={s.ctaTitle}>
                {data.ctaH2Lines[0]}<br />
                <em>{data.ctaH2Lines[1]}</em>
              </h2>
              <p className={s.ctaDesc}>{data.ctaDesc}</p>
              <div className={s.ctaActions}>
                <a href="/contact" className={s.btnPrimary}>
                  See clinIQ for {data.specialtyName}
                  <svg className={s.btnIcon} viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M4 10h12m-4-4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a href="/features/patient-flow" className={s.btnGhost}>
                  How Patient Flow Works
                </a>
              </div>
              <span className={s.ctaNote}>No commitment. We&rsquo;ll walk through your clinic layout and show you exactly how clinIQ maps to your workflow.</span>
            </div>
          </div>
        </section>

        {/* ── RELATED ── */}
        <section className={s.related}>
          <div className={s.container}>
            <p className={s.relatedTitle}>Related resources and pages</p>
            <div className={s.relatedLinks}>
              {data.relatedLinks.map(({ label, href }) => (
                <a key={href} href={href} className={s.relatedLink}>
                  {label}
                  <svg width="12" height="12" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M4 10h12m-4-4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </section>

      </main>
      <FooterInner />
    </>
  )
}

function ModuleIcon({ slug }: { slug: string }) {
  if (slug === 'patient-flow') return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  )
  if (slug === 'check-in') return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
  )
  if (slug === 'scheduling') return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  )
  if (slug === 'rtm') return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  )
  if (slug === 'pre-auth') return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  )
  if (slug === 'analytics') return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  )
  if (slug === 'lobbyview') return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  )
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  )
}
