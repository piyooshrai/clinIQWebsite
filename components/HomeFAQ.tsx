import { getTranslations } from 'next-intl/server'
import FaqAccordion from './FaqAccordion'
import s from './HomeSections.module.css'

const FAQ_NUMS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as const

export default async function HomeFAQ() {
  const t = await getTranslations('faq')

  const faqs = FAQ_NUMS.map((n) => ({
    q: t(`items.q${n}`),
    a: t(`items.a${n}`),
  }))

  return (
    <section className={s.section} id="faq">
      <div className={s.container}>
        <div className={s.label}>
          <span className={s.labelLine} />
          <span>{t('heading')}</span>
        </div>
        <h2 className={s.title}>{t('heading')}</h2>
        <div className={s.faqWrapper}>
          <FaqAccordion faqs={faqs} />
        </div>
      </div>
    </section>
  )
}
