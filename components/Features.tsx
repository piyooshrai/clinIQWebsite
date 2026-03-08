import styles from './Features.module.css';

const features = [
  {
    number: '01',
    title: 'Patient Check-In',
    description:
      'Kiosk, tablet, or phone. No app downloads. Patients get a queue number and estimated wait instantly.',
  },
  {
    number: '02',
    title: 'Real-Time Flow',
    description:
      'See every patient\'s stage. Queue view, provider view, room status. Bottleneck alerts before they happen.',
  },
  {
    number: '03',
    title: 'RTM Billing',
    description:
      'Remote Therapeutic Monitoring built in. CPT 98975-98981 tracking. $120-150 per patient monthly.',
  },
  {
    number: '04',
    title: 'Pre-Authorization',
    description:
      'Smart PA forms with auto-suggest. Document upload, case tracking. Fewer denials, faster approvals.',
  },
  {
    number: '05',
    title: 'Scheduling',
    description:
      'Multi-provider, multi-location. Online booking, automated reminders, intelligent waitlist management.',
  },
  {
    number: '06',
    title: 'Analytics',
    description:
      'Wait times, throughput, utilization. Daily, weekly, monthly. Identify problems before patients do.',
  },
];

export default function Features() {
  return (
    <section className={styles.features} id="features">
      <div className={styles.featuresContainer}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionLabel}>
            <span className={styles.sectionLabelLine} />
            <span className={styles.sectionLabelText}>Capabilities</span>
          </div>
          <h2 className={styles.sectionTitle}>
            Everything your clinic needs. Nothing it doesn&apos;t.
          </h2>
        </div>

        <div className={styles.featuresGrid}>
          {features.map((feature) => (
            <div key={feature.number} className={styles.featureCard}>
              <div className={styles.featureNumber}>{feature.number}</div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
