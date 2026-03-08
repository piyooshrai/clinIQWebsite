'use client'

import { useState } from 'react'
import styles from './ContactForm.module.css'

export default function ContactForm() {
  const [values, setValues] = useState({ name: '', email: '', clinicName: '', message: '' })
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
      await fetch('/api/contact', {
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
        <p className={styles.successText}>Message sent &mdash; we&apos;ll be in touch within 24 hours.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form} noValidate>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="name">Name <span className={styles.req} aria-hidden="true">*</span></label>
        <input id="name" type="text" className={styles.input} value={values.name} onChange={(e) => set('name', e.target.value)} required placeholder="Your name" />
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="email">Work email <span className={styles.req} aria-hidden="true">*</span></label>
        <input id="email" type="email" className={styles.input} value={values.email} onChange={(e) => set('email', e.target.value)} required placeholder="you@yourclinic.com" />
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="clinicName">Clinic name</label>
        <input id="clinicName" type="text" className={styles.input} value={values.clinicName} onChange={(e) => set('clinicName', e.target.value)} placeholder="Your clinic" />
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="message">Message <span className={styles.req} aria-hidden="true">*</span></label>
        <textarea id="message" className={styles.textarea} value={values.message} onChange={(e) => set('message', e.target.value)} required placeholder="How can we help?" rows={5} />
      </div>

      {error && <p className={styles.error} role="alert">{error}</p>}

      <button type="submit" className={`btn-inner btn-inner-lg btn-inner-primary ${styles.submit}`} disabled={submitting}>
        {submitting ? 'Sending…' : 'Send Message'}
      </button>

      <p className={styles.privacy}>We respond within 24 hours. No spam.</p>
    </form>
  )
}
