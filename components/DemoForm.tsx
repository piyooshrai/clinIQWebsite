'use client'

import { useState } from 'react'
import { captureIntakeContext } from '@/lib/intake-context'
import { useTranslations } from 'next-intl'
import styles from './DemoForm.module.css'
import { trackDemoRequest } from '@/lib/analytics'

const SPECIALTY_KEYS = ['pt', 'ortho', 'pain', 'behavioral', 'primary', 'urgent', 'neuro', 'cardio', 'derm', 'onco', 'other'] as const

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
  fontFamily: 'var(--font-sans)',
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

// Four fields only: every extra question costs demo requests.
export default function DemoForm() {
  const t = useTranslations('demo')
  const tc = useTranslations('common')

  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [practice, setPractice] = useState('')
  const [specialty, setSpecialty] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitting(true)
    setError('')
    const [firstName, ...rest] = fullName.trim().split(/\s+/)
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          intakeContext: captureIntakeContext(),
          formType: 'demo',
          firstName,
          lastName: rest.join(' '),
          email,
          practice,
          specialty,
        }),
      })
      if (!response.ok) throw new Error('Inquiry was not accepted')
      trackDemoRequest(specialty)
      setSubmitted(true)
    } catch {
      setError(tc('errorGeneric'))
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
        <p className={styles.successTitle}>{tc('successTitle')}</p>
        <p className={styles.successBody}>{tc('successBody')}</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} data-form="demo">
      <div style={fieldStyle}>
        <label style={labelStyle} htmlFor="demoFullName">
          {tc('fullName')} <span style={{ color: 'var(--teal)' }} aria-hidden="true">{tc('required')}</span>
        </label>
        <input
          id="demoFullName"
          type="text"
          autoComplete="name"
          style={inputStyle}
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
          placeholder={t('form.fullNamePlaceholder')}
        />
      </div>

      <div style={fieldStyle}>
        <label style={labelStyle} htmlFor="demoEmail">
          {tc('workEmail')} <span style={{ color: 'var(--teal)' }} aria-hidden="true">{tc('required')}</span>
        </label>
        <input
          id="demoEmail"
          type="email"
          autoComplete="email"
          style={inputStyle}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder={t('form.emailPlaceholder')}
        />
      </div>

      <div style={fieldStyle}>
        <label style={labelStyle} htmlFor="demoPractice">
          {tc('practiceName')} <span style={{ color: 'var(--teal)' }} aria-hidden="true">{tc('required')}</span>
        </label>
        <input
          id="demoPractice"
          type="text"
          autoComplete="organization"
          style={inputStyle}
          value={practice}
          onChange={(e) => setPractice(e.target.value)}
          required
          placeholder={t('form.practicePlaceholder')}
        />
      </div>

      <div style={fieldStyle}>
        <label style={labelStyle} htmlFor="demoSpecialty">
          {tc('specialty')} <span style={{ color: 'var(--teal)' }} aria-hidden="true">{tc('required')}</span>
        </label>
        <select
          id="demoSpecialty"
          style={selectStyle}
          value={specialty}
          onChange={(e) => setSpecialty(e.target.value)}
          required
        >
          <option value="" disabled>{t('form.select')}</option>
          {SPECIALTY_KEYS.map((key) => (
            <option key={key} value={t(`specialties.${key}`)}>
              {t(`specialties.${key}`)}
            </option>
          ))}
        </select>
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
          fontFamily: 'var(--font-sans)',
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
        {submitting ? t('formSending') : t('formCta')}
      </button>
    </form>
  )
}
