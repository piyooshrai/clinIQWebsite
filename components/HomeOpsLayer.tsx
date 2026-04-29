import s from './HomeSections.module.css'

const EHRS = [
  'athenahealth',
  'eClinicalWorks',
  'NextGen',
  'AdvancedMD',
  'Tebra',
  'SimplePractice',
  'Epic',
  'Any EHR',
]

export default function HomeOpsLayer() {
  return (
    <section className={s.sectionDark} id="ops-layer">
      <div className={s.container}>
        <div className={s.label}>
          <span className={s.labelLine} />
          <span style={{ color: 'rgba(255,255,255,0.7)' }}>Healthcare Operations Layer</span>
        </div>
        <h2 className={s.title}>
          Why Smart Clinics Add a Healthcare Operations Layer{' '}
          <em className={s.titleEm}>on Top of Their EHR</em>
        </h2>

        <div className={s.opsLayer}>
          <div className={s.opsBody}>
            <p>
              Your EHR was built for documentation. It was never built to manage a
              waiting room, track a patient through six stages, auto-file a prior auth,
              or flag a missed RTM threshold. That&apos;s not a flaw — it&apos;s a gap.
              clinIQ is the healthcare operations layer that fills it.
            </p>
            <p>
              Connect it to athenahealth, eClinicalWorks, NextGen, AdvancedMD, or any
              EHR you already run. Your providers keep their workflow. Your front desk
              gets clinic workflow software that actually matches how your day moves.
              Your admin gets revenue tools — RTM billing software, pre-authorization
              automation — that run without touching clinical documentation.
            </p>
            <p>
              <strong style={{ color: 'var(--white)' }}>One platform. Zero rip-and-replace. Operational control from day one.</strong>
            </p>
          </div>
          <div className={s.ehrGrid} aria-label="Supported EHRs">
            {EHRS.map((e) => (
              <div key={e} className={s.ehrChip}>{e}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
