import Link from 'next/link'
import { getTranslations } from 'next-intl/server'
import s from './HomeSections.module.css'

const SPEC_HREFS: Record<string, string> = {
  behavioral: '/specialties/behavioral-health',
  orthopedic: '/specialties/orthopedic-surgery',
  physical: '/specialties/physical-therapy',
}

export default async function HomeSpecialties() {
  const t = await getTranslations('specialtiesSection')

  const specs = (['behavioral', 'orthopedic', 'physical'] as const).map((key) => ({
    tag: t(`cards.${key}.title`),
    h3: t(`cards.${key}.title`),
    body: t(`cards.${key}.desc`),
    href: SPEC_HREFS[key],
  }))

  return (
    <section className={s.section} id="specialties">
      <div className={s.container}>
        <div className={s.label}>
          <span className={s.labelLine} />
          <span>{t('badge')}</span>
        </div>
        <h2 className={s.title}>{t('heading')}</h2>

        <div className={s.specGrid}>
          {specs.map((spec) => (
            <Link key={spec.tag} href={spec.href} className={s.specCard}>
              <span className={s.specTag}>{spec.tag}</span>
              <h3 className={s.specH3}>{spec.h3}</h3>
              <p className={s.specBody}>{spec.body}</p>
              <span className={s.specLink}>{t('viewAll')} →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
