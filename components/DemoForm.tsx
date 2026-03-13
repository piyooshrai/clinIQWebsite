'use client'

import { useState } from 'react'
import styles from './DemoForm.module.css'
import { trackDemoRequest } from '@/lib/analytics'

const SPECIALTIES = [
  'Physical Therapy',
  'Orthopedic Surgery',
  'Pain Management',
  'Behavioral Health / Psychiatry',
  'Primary Care',
  'Urgent Care',
  'Neurology',
  'Cardiology',
  'Dermatology',
  'Oncology',
  'Other',
]

const PROVIDERS = ['1–2', '3–5', '6–10', '11–25', '26–50', '50+']

const INTERESTS = [
  'Patient Check-In',
  'Real-Time Patient Flow',
  'RTM Billing',
  'Pre-Authorization',
  'Scheduling',
  'Secure Messaging',
  'Analytics',
]

const fieldStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.375rem',
  marginBottom: '1.25rem',
}

const labelStyle: React.CSSProperties = {
  fontSize: '0.75rem',
  fontWeight: 700,
  letterSpacing: '0.06em',
  textTransform: 'uppercase',
  color: 'var(--teal)',
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '0.5rem 0',
  fontFamily: 'var(--font-body)',
  fontSize: '0.9375rem',
  color: 'var(--text-primary)',
  background: 'transparent',
  border: 'none',
  borderBottom: '2px solid rgba(0,0,0,0.15)',
  outline: 'none',
  transition: 'border-color 0.15s',
}

const selectStyle: React.CSSProperties = {
  ...inputStyle,
  appearance: 'none',
  WebkitAppearance: 'none',
  cursor: 'pointer',
  backgroundImage:
    "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2 4l4 4 4-4' stroke='%237a7a75' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\")",
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right 0.25rem center',
  backgroundSize: '12px',
  paddingRight: '1.5rem',
}

const textareaStyle: React.CSSProperties = {
  ...inputStyle,
  resize: 'none',
  borderBottom: '2px solid rgba(0,0,0,0.15)',
}

export default function DemoForm() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [practice, setPractice] = useState('')
  const [specialty, setSpecialty] = useState('')
  const [providers, setProviders] = useState('')
  const [interests, setInterests] = useState<string[]>([])
  const [message, setMessage] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  function toggleInterest(item: string) {
    setInterests((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    )
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitting(true)
    setError('')
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'demo',
          firstName,
          lastName,
          email,
          phone,
          practice,
          specialty,
          providers,
          interests,
          message,
        }),
      })
      trackDemoRequest(specialty, providers)
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
            <path
              d="M7 12l3.5 3.5L17 8"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <p className={styles.successTitle}>You&apos;re on the list.</p>
        <p className={styles.successBody}>
          We&apos;ll be in touch within 24 hours. Check your email for confirmation.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      {/* First + Last Name */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
        <div style={fieldStyle}>
          <label style={labelStyle} htmlFor="demoFirstName">
            First Name <span style={{ color: 'var(--teal)' }} aria-hidden="true">*</span>
          </label>
          <input
            id="demoFirstName"
            type="text"
            style={inputStyle}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            placeholder="Jane"
          />
        </div>
        <div style={fieldStyle}>
          <label style={labelStyle} htmlFor="demoLastName">
            Last Name <span style={{ color: 'var(--teal)' }} aria-hidden="true">*</span>
          </label>
          <input
            id="demoLastName"
            type="text"
            style={inputStyle}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            placeholder="Smith"
          />
        </div>
      </div>

      {/* Email */}
      <div style={fieldStyle}>
        <label style={labelStyle} htmlFor="demoEmail">
          Email <span style={{ color: 'var(--teal)' }} aria-hidden="true">*</span>
        </label>
        <input
          id="demoEmail"
          type="email"
          style={inputStyle}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="you@yourclinic.com"
        />
      </div>

      {/* Phone */}
      <div style={fieldStyle}>
        <label style={labelStyle} htmlFor="demoPhone">
          Phone
        </label>
        <input
          id="demoPhone"
          type="tel"
          style={inputStyle}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="(555) 000-0000"
        />
      </div>

      {/* Practice Name */}
      <div style={fieldStyle}>
        <label style={labelStyle} htmlFor="demoPractice">
          Practice Name <span style={{ color: 'var(--teal)' }} aria-hidden="true">*</span>
        </label>
        <input
          id="demoPractice"
          type="text"
          style={inputStyle}
          value={practice}
          onChange={(e) => setPractice(e.target.value)}
          required
          placeholder="Your clinic or practice"
        />
      </div>

      {/* Specialty */}
      <div style={fieldStyle}>
        <label style={labelStyle} htmlFor="demoSpecialty">
          Specialty <span style={{ color: 'var(--teal)' }} aria-hidden="true">*</span>
        </label>
        <select
          id="demoSpecialty"
          style={selectStyle}
          value={specialty}
          onChange={(e) => setSpecialty(e.target.value)}
          required
        >
          <option value="" disabled>
            Select…
          </option>
          {SPECIALTIES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      {/* Number of Providers */}
      <div style={fieldStyle}>
        <label style={labelStyle} htmlFor="demoProviders">
          Number of Providers <span style={{ color: 'var(--teal)' }} aria-hidden="true">*</span>
        </label>
        <select
          id="demoProviders"
          style={selectStyle}
          value={providers}
          onChange={(e) => setProviders(e.target.value)}
          required
        >
          <option value="" disabled>
            Select…
          </option>
          {PROVIDERS.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
      </div>

      {/* Interests */}
      <div style={{ ...fieldStyle, marginBottom: '1.5rem' }}>
        <span style={labelStyle}>Interests</span>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.625rem',
            marginTop: '0.5rem',
          }}
        >
          {INTERESTS.map((item) => {
            const checked = interests.includes(item)
            return (
              <button
                key={item}
                type="button"
                onClick={() => toggleInterest(item)}
                style={{
                  padding: '0.375rem 0.875rem',
                  fontSize: '0.8125rem',
                  fontWeight: 500,
                  borderRadius: '100px',
                  border: checked
                    ? '1px solid var(--teal)'
                    : '1px solid rgba(0,0,0,0.15)',
                  background: checked ? 'rgba(13,148,136,0.08)' : 'transparent',
                  color: checked ? 'var(--teal)' : 'var(--text-secondary)',
                  cursor: 'pointer',
                  transition: 'all 0.15s',
                }}
                aria-pressed={checked}
              >
                {item}
              </button>
            )
          })}
        </div>
      </div>

      {/* Message */}
      <div style={fieldStyle}>
        <label style={labelStyle} htmlFor="demoMessage">
          Message / Notes
        </label>
        <textarea
          id="demoMessage"
          style={textareaStyle}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Anything specific you'd like to see?"
          rows={4}
        />
      </div>

      {error && (
        <p
          role="alert"
          style={{
            fontSize: '0.875rem',
            color: '#dc2626',
            padding: '0.75rem 1rem',
            background: '#fef2f2',
            border: '1px solid #fecaca',
            borderRadius: '8px',
            marginBottom: '1rem',
          }}
        >
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        style={{
          display: 'block',
          width: '100%',
          padding: '1rem 2rem',
          fontFamily: 'var(--font-body)',
          fontSize: '0.9375rem',
          fontWeight: 600,
          textAlign: 'center',
          borderRadius: '100px',
          background: submitting ? 'var(--teal-light)' : 'var(--teal)',
          color: '#ffffff',
          border: 'none',
          cursor: submitting ? 'wait' : 'pointer',
          boxShadow: '0 2px 12px rgba(13,148,136,0.3)',
          transition: 'all 0.25s',
          marginTop: '0.5rem',
        }}
      >
        {submitting ? 'Sending…' : 'Request Demo →'}
      </button>
    </form>
  )
}
