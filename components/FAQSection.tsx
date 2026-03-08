'use client'

import { useState } from 'react'
import styles from './FAQSection.module.css'

export interface FAQItem {
  question: string
  answer: string
}

interface FAQSectionProps {
  headline?: string
  items: FAQItem[]
  variant?: 'cream' | 'white'
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={`${styles.chevron} ${open ? styles.chevronOpen : ''}`}
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 7.5l5 5 5-5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function FAQSection({
  headline = 'Frequently Asked Questions',
  items,
  variant = 'cream',
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <section className={`${styles.section} ${styles[variant]}`}>
        <div className="container">
          <h2 className={styles.headline}>{headline}</h2>
          <div className={styles.list}>
            {items.map((item, i) => {
              const isOpen = openIndex === i
              return (
                <div key={i} className={`${styles.item} ${isOpen ? styles.itemOpen : ''}`}>
                  <button
                    className={styles.question}
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${i}`}
                  >
                    <span>{item.question}</span>
                    <ChevronIcon open={isOpen} />
                  </button>
                  <div
                    id={`faq-answer-${i}`}
                    className={styles.answer}
                    role="region"
                    aria-hidden={!isOpen}
                  >
                    <div className={styles.answerInner}>{item.answer}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
