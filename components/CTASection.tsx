import Link from 'next/link'
import styles from './CTASection.module.css'

interface CTASectionProps {
  headline?: string
  body?: string
  primaryLabel?: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
  variant?: 'dark' | 'teal' | 'cream'
}

function ArrowIcon() {
  return (
    <svg
      className={styles.btnIcon}
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 10h12m-4-4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function CTASection({
  headline = 'See clinIQ in your clinic',
  body = 'Book a 15-minute demo. No deck, no pitch — just clinIQ in action with your specialty and your workflow.',
  primaryLabel = 'Book a Demo',
  primaryHref = '/demo',
  secondaryLabel = 'See Pricing',
  secondaryHref = '/pricing',
  variant = 'dark',
}: CTASectionProps) {
  return (
    <section className={`${styles.section} ${styles[variant]}`}>
      <div className="container">
        <div className={styles.inner}>
          <h2 className={styles.headline}>{headline}</h2>
          <p className={styles.body}>{body}</p>
          <div className={styles.actions}>
            <Link href={primaryHref} className={styles.btnPrimary}>
              {primaryLabel}
              <ArrowIcon />
            </Link>
            <Link href={secondaryHref} className={styles.btnSecondary}>
              {secondaryLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
