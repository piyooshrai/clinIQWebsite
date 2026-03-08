import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import ResourceIndex from '@/components/ResourceIndex'
import type { ResourceItem } from '@/components/ResourceIndex'
import styles from './resources.module.css'

export const metadata: Metadata = {
  title: 'Resources — clinIQ Guides, Checklists & Tools',
  description:
    'Free guides, checklists, and tools to fix your clinic operations. RTM billing, patient flow, urgent care optimization.',
}

const resources: ResourceItem[] = [
  {
    slug: 'urgent-care-flow-checklist',
    type: 'Checklist',
    title: 'Urgent Care Patient Flow Optimization Checklist',
    description:
      '23-point checklist to cut LWBS, reduce wait times, and stop front desk chaos. Covers every stage from pre-arrival to discharge.',
  },
  {
    slug: 'rtm-implementation-guide',
    type: 'Guide',
    title: 'RTM Implementation Guide: From Setup to First Bill',
    description:
      'Step-by-step guide to launching RTM billing. CPT codes, documentation requirements, payer rules, and revenue math.',
  },
  {
    slug: 'roi-calculator',
    type: 'Calculator',
    title: 'Calculate Your clinIQ ROI',
    description:
      'See your potential time savings, revenue opportunity, and payback period based on your clinic\'s patient volume and current workflows.',
  },
]

export default function ResourcesPage() {
  return (
    <>
      <NavInner />
      <main>
        <section className={styles.hero}>
          <div className={styles.heroBg}>
            <div className={styles.heroOrb} />
            <div className={styles.heroGrain} />
          </div>
          <div className="container">
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>Resources</h1>
              <p className={styles.heroSubtitle}>
                Guides, checklists, and tools to fix your clinic operations.
              </p>
            </div>
          </div>
        </section>
        <ResourceIndex resources={resources} />
      </main>
      <FooterInner />
    </>
  )
}
