import { getTranslations } from 'next-intl/server'
import s from './HomeSections.module.css'

const STEP_KEYS = ['connect', 'configure', 'checkin', 'flow', 'revenue'] as const

export default async function HomeHowItWorks() {
  const t = await getTranslations('howItWorks')

  const steps = STEP_KEYS.map((key) => ({
    n: t(`steps.${key}.num`),
    h3: t(`steps.${key}.title`),
    text: t(`steps.${key}.desc`),
  }))

  return (
    <section className={s.section} id="how-it-works">
      <div className={s.container}>
        <div className={s.label}>
          <span className={s.labelLine} />
          <span>{t('badge')}</span>
        </div>
        <h2 className={s.title}>{t('heading')}</h2>

        <div className={s.steps}>
          {steps.map((step) => (
            <div key={step.n} className={s.step}>
              <div className={s.stepNum}>{step.n}</div>
              <div className={s.stepBody}>
                <h3 className={s.stepH3}>{step.h3}</h3>
                <p className={s.stepText}>{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
