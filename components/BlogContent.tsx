import type { ReactNode } from 'react'
import styles from './BlogContent.module.css'

interface BlogContentProps {
  children: ReactNode
}

export default function BlogContent({ children }: BlogContentProps) {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.prose}>{children}</div>
      </div>
    </section>
  )
}
