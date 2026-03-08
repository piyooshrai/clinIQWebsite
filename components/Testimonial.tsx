import styles from './Testimonial.module.css'

export default function Testimonial() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.quote}>
          &ldquo;We went from chaos to{' '}
          <em className={styles.quoteEm}>complete control</em> in a week.
          Should have done this years ago.&rdquo;
        </p>
        <div className={styles.author}>
          <div className={styles.avatar} aria-hidden="true">JH</div>
          <span className={styles.name}>Dr. James Harrison</span>
          <span className={styles.role}>Medical Director, Valley Pain Management</span>
        </div>
      </div>
    </section>
  )
}
