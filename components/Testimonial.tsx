import styles from './Testimonial.module.css';

export default function Testimonial() {
  return (
    <section className={styles.testimonialSection}>
      <div className={styles.testimonialContainer}>
        <p className={styles.testimonialQuote}>
          &ldquo;We went from chaos to <em>complete control</em> in a week. Should have done this years ago.&rdquo;
        </p>
        <div className={styles.testimonialAuthor}>
          <div className={styles.testimonialAvatar}>JH</div>
          <span className={styles.testimonialName}>Dr. James Harrison</span>
          <span className={styles.testimonialRole}>Medical Director, Valley Pain Management</span>
        </div>
      </div>
    </section>
  );
}
