import styles from './Testimonial.module.css'

const TESTIMONIALS = [
  {
    quote:
      'We went from chaos to complete control in a week. Should have done this years ago.',
    em: 'complete control',
    initials: 'JH',
    name: 'Dr. James Harrison',
    role: 'Medical Director, Valley Pain Management',
  },
  {
    quote:
      "Our front desk used to spend half the day answering 'how much longer?' clinIQ killed that question entirely. Wait times dropped 22% in the first month.",
    em: null,
    initials: 'SM',
    name: 'Sarah Mendez',
    role: 'Practice Manager, Chicago Urgent Care Group',
  },
  {
    quote:
      "RTM billing alone pays for the platform ten times over. We're capturing revenue we were just leaving on the table before — without any extra charting.",
    em: null,
    initials: 'KP',
    name: 'Dr. Kevin Park',
    role: 'Director, Pacific Addiction Medicine Centers',
  },
]

export default function Testimonial() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.label}>
          <span className={styles.labelLine} />
          <span className={styles.labelText}>From the clinics</span>
        </div>
        <h2 className={styles.heading}>What clinics say after switching</h2>
        <div className={styles.grid}>
          {TESTIMONIALS.map((t) => (
            <div key={t.initials} className={styles.card}>
              <p className={styles.quote}>
                &ldquo;
                {t.em
                  ? (() => {
                      const parts = t.quote.split(t.em)
                      return (
                        <>
                          {parts[0]}
                          <em className={styles.quoteEm}>{t.em}</em>
                          {parts[1]}
                        </>
                      )
                    })()
                  : t.quote}
                &rdquo;
              </p>
              <div className={styles.author}>
                <div className={styles.avatar} aria-hidden="true">
                  {t.initials}
                </div>
                <div>
                  <div className={styles.name}>{t.name}</div>
                  <div className={styles.role}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
