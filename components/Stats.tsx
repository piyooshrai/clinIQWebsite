'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './Stats.module.css'

const STATS = [
  { prefix: '', value: 30, suffix: '%', text: 'Faster patient check-in on average' },
  { prefix: '', value: 25, suffix: '%', text: 'Reduction in patient wait times' },
  { prefix: '$', value: 150, suffix: '', text: 'Average RTM revenue per patient monthly' },
  { prefix: '', value: 1, suffix: 'wk', text: 'From signup to fully operational' },
]

function useCountUp(target: number, active: boolean, duration = 1500) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) return
    const startTime = performance.now()
    const step = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      // ease-out cubic
      const ease = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(ease * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [active, target, duration])

  return count
}

function StatItem({ prefix, value, suffix, text }: (typeof STATS)[0]) {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)
  const count = useCountUp(value, active)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); observer.disconnect() } },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div className={styles.item} ref={ref}>
      <div className={styles.number}>
        {prefix && <span className={styles.accent}>{prefix}</span>}
        {count}
        {suffix && <span className={styles.accent}>{suffix}</span>}
      </div>
      <p className={styles.text}>{text}</p>
    </div>
  )
}

export default function Stats() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {STATS.map((s, i) => (
            <StatItem key={i} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}
