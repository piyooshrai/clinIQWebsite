'use client'

import Link from 'next/link'
import { trackCTA } from '@/lib/analytics'
import s from '@/app/specialties/specialty-full.module.css'
import css from './templates/PillarSpecialtyPage.module.css'

interface Props {
  headline: string
  subhead: string
  buttonLabel: string
  href: string
  pageSlug: string
}

export default function PillarMidCta({ headline, subhead, buttonLabel, href, pageSlug }: Props) {
  return (
    <aside className={css.midCta} aria-label={headline}>
      <div className={css.midCtaText}>
        <p className={css.midCtaHeadline}>{headline}</p>
        <p className={css.midCtaSubhead}>{subhead}</p>
      </div>
      <Link
        href={href}
        className={s.btnPrimary}
        onClick={() => trackCTA(buttonLabel, `mid_article:${pageSlug}`)}
      >
        {buttonLabel}
      </Link>
    </aside>
  )
}
