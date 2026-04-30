import { getTranslations } from 'next-intl/server'
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

export default async function HomeOpsLayer() {
  const t = await getTranslations('opsLayer')

  return (
    <section className={s.sectionDark} id="ops-layer">
      <div className={s.container}>
        <div className={s.label}>
          <span className={s.labelLine} />
          <span style={{ color: 'rgba(255,255,255,0.7)' }}>{t('badge')}</span>
        </div>
        <h2 className={s.title}>{t('heading')}</h2>

        <div className={s.opsLayer}>
          <div className={s.opsBody}>
            <p>{t('subheading')}</p>
          </div>
          <div className={s.ehrGrid} aria-label={t('works')}>
            {EHRS.map((e) => (
              <div key={e} className={s.ehrChip}>{e}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
