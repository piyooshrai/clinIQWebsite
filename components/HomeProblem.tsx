import Link from 'next/link'
import { getTranslations } from 'next-intl/server'
import s from './HomeSections.module.css'

const PAIN_KEYS = ['whiteboards', 'checkin', 'rtm', 'preauth', 'reporting'] as const

export default async function HomeProblem() {
  const t = await getTranslations('problem')

  const pains = PAIN_KEYS.map((key) => ({
    h3: t(`pains.${key}.title`),
    body: t(`pains.${key}.desc`),
  }))

  return (
    <section className={s.section} id="why-cliniq">
      <div className={s.container}>
        <div className={s.label}>
          <span className={s.labelLine} />
          <span>{t('badge')}</span>
        </div>
        <h2 className={s.title}>{t('heading')}</h2>
        <p className={s.intro}>{t('subheading')}</p>

        <div className={s.painList}>
          {pains.map((p) => (
            <article key={p.h3} className={s.painItem}>
              <h3 className={s.painH3}>{p.h3}</h3>
              <p className={s.painBody}>{p.body}</p>
            </article>
          ))}
        </div>

        <div className={s.midCta}>
          <div className={s.midCtaActions}>
            <Link href="/demo" className={s.btnPrimary}>{t('cta')}</Link>
            <Link href="/features" className={s.btnGhost}>See How It Works</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
