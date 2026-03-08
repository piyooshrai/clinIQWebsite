import Link from 'next/link'
import styles from './BlogIndex.module.css'

export interface BlogPost {
  slug: string
  category: string
  title: string
  date: string
  readTime: string
  excerpt: string
}

interface BlogIndexProps {
  posts: BlogPost[]
}

export default function BlogIndex({ posts }: BlogIndexProps) {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          {posts.map((post) => (
            <article key={post.slug} className={styles.card}>
              <Link href={`/blog/${post.slug}`} className={styles.cardLink} aria-label={post.title}>
                <span className={styles.categoryBadge}>{post.category}</span>
                <h2 className={styles.cardTitle}>{post.title}</h2>
                <p className={styles.cardExcerpt}>{post.excerpt}</p>
                <div className={styles.cardMeta}>
                  <span>{post.date}</span>
                  <span className={styles.metaDot} aria-hidden="true" />
                  <span>{post.readTime} read</span>
                </div>
                <span className={styles.readMore}>
                  Read article
                  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8h10m-4-4 4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
