'use client'

import { useState, useEffect, useCallback } from 'react'
import styles from './LobbyViewDemo.module.css'

type PatientStatus = 'waiting' | 'check-in' | 'vitals' | 'provider' | 'checkout'

interface Patient {
  id: number
  queueNumber: string
  status: PatientStatus
  elapsed: number
}

const STATUS_LABELS: Record<PatientStatus, string> = {
  'waiting': 'Waiting',
  'check-in': 'Check-In',
  'vitals': 'Vitals',
  'provider': 'With Provider',
  'checkout': 'Checkout',
}

const STATUS_ORDER: PatientStatus[] = ['waiting', 'check-in', 'vitals', 'provider', 'checkout']

function getNextStatus(current: PatientStatus): PatientStatus | null {
  const idx = STATUS_ORDER.indexOf(current)
  return idx < STATUS_ORDER.length - 1 ? STATUS_ORDER[idx + 1] : null
}

function generateQueueNumber(id: number): string {
  return `A${String(id).padStart(3, '0')}`
}

const INITIAL_PATIENTS: Patient[] = [
  { id: 1, queueNumber: 'A001', status: 'provider', elapsed: 18 },
  { id: 2, queueNumber: 'A002', status: 'vitals', elapsed: 9 },
  { id: 3, queueNumber: 'A003', status: 'check-in', elapsed: 4 },
  { id: 4, queueNumber: 'A004', status: 'waiting', elapsed: 2 },
  { id: 5, queueNumber: 'A005', status: 'waiting', elapsed: 1 },
]

export default function LobbyViewDemo() {
  const [patients, setPatients] = useState<Patient[]>(INITIAL_PATIENTS)
  const [nextId, setNextId] = useState(6)
  const [lastAdvanced, setLastAdvanced] = useState<number | null>(null)

  // Tick elapsed times every minute (simulated every 5s for demo)
  useEffect(() => {
    const interval = setInterval(() => {
      setPatients((prev) => prev.map((p) => ({ ...p, elapsed: p.elapsed + 1 })))
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const advancePatient = useCallback((id: number) => {
    setPatients((prev) => {
      return prev
        .map((p) => {
          if (p.id !== id) return p
          const next = getNextStatus(p.status)
          if (!next) return p
          setLastAdvanced(id)
          return { ...p, status: next }
        })
        .filter((p) => p.status !== 'checkout' || p.id !== id)
    })
    setLastAdvanced(id)
    setTimeout(() => setLastAdvanced(null), 1500)
  }, [])

  const addPatient = useCallback(() => {
    const id = nextId
    setNextId((n) => n + 1)
    setPatients((prev) => [
      ...prev,
      { id, queueNumber: generateQueueNumber(id), status: 'waiting', elapsed: 0 },
    ])
  }, [nextId])

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <div className={styles.dot} />
          <span className={styles.headerLabel}>LobbyView Live Queue</span>
        </div>
        <button className={styles.addBtn} onClick={addPatient} aria-label="Add patient to queue">
          + Add Patient
        </button>
      </div>

      <div className={styles.columns}>
        {STATUS_ORDER.filter((s) => s !== 'checkout').map((status) => {
          const inStatus = patients.filter((p) => p.status === status)
          return (
            <div key={status} className={styles.column}>
              <div className={styles.columnHeader}>
                <span className={`${styles.statusDot} ${styles[status.replace('-', '')]}`} />
                <span className={styles.columnLabel}>{STATUS_LABELS[status]}</span>
                <span className={styles.columnCount}>{inStatus.length}</span>
              </div>
              <div className={styles.cards}>
                {inStatus.map((p) => (
                  <div
                    key={p.id}
                    className={`${styles.card} ${lastAdvanced === p.id ? styles.cardFlash : ''}`}
                  >
                    <div className={styles.cardTop}>
                      <span className={styles.queueNum}>{p.queueNumber}</span>
                      <span className={styles.elapsed}>{p.elapsed}m</span>
                    </div>
                    <button
                      className={styles.advanceBtn}
                      onClick={() => advancePatient(p.id)}
                      aria-label={`Advance ${p.queueNumber} to next step`}
                    >
                      Advance →
                    </button>
                  </div>
                ))}
                {inStatus.length === 0 && (
                  <div className={styles.emptyCard}>Empty</div>
                )}
              </div>
            </div>
          )
        })}
      </div>

      <p className={styles.disclaimer}>
        Queue numbers only — no patient names displayed. HIPAA-safe by design.
      </p>
    </div>
  )
}
