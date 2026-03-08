'use client'

import { useState } from 'react'
import styles from './DemoForm.module.css'

const SPECIALTIES = [
  'Urgent Care',
  'Addiction Medicine',
  'Psychiatry',
  'Behavioral Health',
  'Pain Management',
  'Physical Therapy',
  'Orthopedics',
  'Primary Care',
  'Other',
]

export default function DemoForm() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    clinicName: '',
    specialty: '',
    currentEHR: '',
    challenge: '',
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  function set(key: string, value: string) {
    setValues((p) => ({ ...p, [key]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitting(true)
    setError('')
    try {
      await fetch('/api/demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
      setSubmitted(true)
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className={styles.success}>
        <div className={styles.successIcon} aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1.5" />
            <path d="M7 12l3.5 3.5L17 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p className={styles.successTitle}>Demo request received.</p>
        <p className={styles.successBody}>We&apos;ll reach out within 24 hours to schedule.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form} noValidate>
      <div className={styles.row}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="demoName">Name <span className={styles.req} aria-hidden="true">*</span></label>
          <input id="demoName" type="text" className={styles.input} value={values.name} onChange={(e) => set('name', e.target.value)} required placeholder="Your name" />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="demoEmail">Work email <span className={styles.req} aria-hidden="true">*</span></label>
          <input id="demoEmail" type="email" className={styles.input} value={values.email} onChange={(e) => set('email', e.target.value)} required placeholder="you@yourclinic.com" />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="demoClinic">Clinic name <span className={styles.req} aria-hidden="true">*</span></label>
          <input id="demoClinic" type="text" className={styles.input} value={values.clinicName} onChange={(e) => set('clinicName', e.target.value)} required placeholder="Your clinic" />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="demoSpecialty">Specialty <span className={styles.req} aria-hidden="true">*</span></label>
          <select id="demoSpecialty" className={styles.select} value={values.specialty} onChange={(e) => set('specialty', e.target.value)} required>
            <option value="" disabled>Select…</option>
            {SPECIALTIES.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="demoEHR">Current EHR</label>
        <input id="demoEHR" type="text" className={styles.input} value={values.currentEHR} onChange={(e) => set('currentEHR', e.target.value)} placeholder="e.g. Epic, Athena, eClinicalWorks…" />
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="demoChallenge">What&apos;s your biggest operational challenge?</label>
        <textarea id="demoChallenge" className={styles.textarea} value={values.challenge} onChange={(e) => set('challenge', e.target.value)} placeholder="Tell us what's breaking down…" rows={4} />
      </div>

      {error && <p className={styles.error} role="alert">{error}</p>}

      <button type="submit" className={`btn-inner btn-inner-lg btn-inner-primary ${styles.submit}`} disabled={submitting}>
        {submitting ? 'Sending…' : 'Request Demo'}
      </button>
    </form>
  )
}
