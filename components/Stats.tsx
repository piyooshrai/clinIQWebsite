'use client'

import { useEffect, useRef, useState } from 'react'
import { useTranslations } from 'next-intl'
import styles from './Stats.module.css'

const STAT_CONFIGS = [
  { key: 'waitTime',    prefix: '',  value: 22,  suffix: '%' },
  { key: 'rtmRevenue',  prefix: '$', value: 140, suffix: ''  },
  { key: 'checkIn',     prefix: '',  value: 3,   suffix: ' min' },
  { key: 'preAuth',     prefix: '',  value: 80,  suffix: '%' },
] as const

function useCountUp(target: number, active: boolean, duration = 1500) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) return
    const startTime = performance.now()
    const step = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(ease * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [active, target, duration])

  return count
}

function StatItem({
  prefix,
  value,
  suffix,
  label,
}: {
  prefix: string
  value: number
  suffix: string
  label: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)
  const count = useCountUp(value, active)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true)
          observer.disconnect()
        }
      },
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
      <div className={styles.label}>{label}</div>
    </div>
  )
}

export default function Stats() {
  const t = useTranslations('stats')

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>{t('heading')}</h2>
        <div className={styles.grid}>
          {STAT_CONFIGS.map((cfg) => (
            <StatItem
              key={cfg.key}
              prefix={cfg.prefix}
              value={cfg.value}
              suffix={cfg.suffix}
              label={t(`items.${cfg.key}.label`)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
