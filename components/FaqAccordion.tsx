'use client'

import { useState } from 'react'
import css from './FaqAccordion.module.css'

interface Props {
  faqs: readonly { q: string; a: string }[]
}

export default function FaqAccordion({ faqs }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className={css.list}>
      {faqs.map(({ q, a }, i) => (
        <div key={i} className={css.item}>
          <button
            className={css.question}
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            aria-expanded={openIndex === i}
          >
            <span>{q}</span>
            <svg
              className={`${css.chevron} ${openIndex === i ? css.chevronOpen : ''}`}
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M5 7.5l5 5 5-5"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          {openIndex === i && (
            <div className={css.answer}>
              <p>{a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
