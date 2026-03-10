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
      {faqs.map(({ q, a }, i) => {
        const panelId = `faq-panel-${i}`
        const isOpen = openIndex === i
        return (
          <div key={i} className={css.item}>
            <button
              className={css.question}
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              aria-controls={panelId}
            >
              <span>{q}</span>
              <svg
                className={`${css.chevron} ${isOpen ? css.chevronOpen : ''}`}
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
            {/* Panel stays in DOM so aria-controls always resolves; hidden attr handles visibility */}
            <div
              id={panelId}
              className={css.answer}
              role="region"
              aria-labelledby={undefined}
              hidden={!isOpen}
            >
              <p>{a}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
