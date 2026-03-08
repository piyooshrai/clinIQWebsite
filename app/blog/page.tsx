import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import BlogIndex from '@/components/BlogIndex'
import type { BlogPost } from '@/components/BlogIndex'
import styles from './blog.module.css'

export const metadata: Metadata = {
  title: 'Blog — clinIQ Operational Insights',
  description:
    'Operational insights for clinics that refuse to accept chaos. LWBS, RTM billing, front desk burnout, patient flow — written for practice operators.',
}

const posts: BlogPost[] = [
  {
    slug: 'reduce-lwbs-urgent-care',
    category: 'Urgent Care',
    title: '5 Operational Fixes That Cut Left-Without-Being-Seen Rates',
    date: 'March 2026',
    readTime: '6 min',
    excerpt:
      'Every patient who walks out before being seen costs $150–300 in lost revenue — plus the Google review. Here are five fixes that work.',
  },
  {
    slug: 'front-desk-burnout',
    category: 'Operations',
    title: 'Why Your Front Desk Staff Keep Quitting (And What to Do About It)',
    date: 'March 2026',
    readTime: '7 min',
    excerpt:
      'You hire, train, and lose them in six months. The pattern is predictable — and so are the causes. Visibility and automation fix most of it.',
  },
  {
    slug: 'rtm-revenue-guide',
    category: 'Billing',
    title: 'RTM Billing: The Revenue You\'re Leaving on the Table',
    date: 'March 2026',
    readTime: '8 min',
    excerpt:
      '$120–150 per patient per month. CPT 98975–98981. Most practices are eligible. Almost none are billing correctly. Here\'s what you need to know.',
  },
  {
    slug: 'patient-flow-bottlenecks',
    category: 'Operations',
    title: 'Where Patient Flow Breaks Down (And How to See It Coming)',
    date: 'March 2026',
    readTime: '5 min',
    excerpt:
      'A full lobby is a lagging indicator. The bottleneck that caused it happened 30 minutes ago. Here\'s how to catch it before it propagates.',
  },
  {
    slug: 'psychiatry-no-shows',
    category: 'Psychiatry',
    title: 'Why 25% of Your New Psych Patients No-Show (And How to Cut It in Half)',
    date: 'March 2026',
    readTime: '6 min',
    excerpt:
      'New patient no-shows in psychiatry run 20–30% — double established rates. The reasons are specific and the fixes are systematic.',
  },
]

export default function BlogPage() {
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
              <h1 className={styles.heroTitle}>Blog</h1>
              <p className={styles.heroSubtitle}>
                Operational insights for clinics that refuse to accept chaos.
              </p>
            </div>
          </div>
        </section>
        <BlogIndex posts={posts} />
      </main>
      <FooterInner />
    </>
  )
}
