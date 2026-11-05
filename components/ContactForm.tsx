'use client'

import { useState } from 'react'
import { captureIntakeContext } from '@/lib/intake-context'
import { useTranslations } from 'next-intl'
import styles from './ContactForm.module.css'
import { trackContactSubmit } from '@/lib/analytics'

const SUBJECTS = [
  { key: 'general', value: 'General Question' },
  { key: 'demo', value: 'Demo Request' },
  { key: 'support', value: 'Support' },
  { key: 'partnership', value: 'Partnership' },
  { key: 'press', value: 'Press / Media' },
  { key: 'other', value: 'Other' },
] as const

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
}

const fieldStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.375rem',
  marginBottom: '1.25rem',
}

export default function ContactForm() {
  const t = useTranslations('contactForm')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitting(true)
    setError('')
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          intakeContext: captureIntakeContext(),
          formType: 'contact',
          firstName: name,
          email,
          subject,
          message,
        }),
      })
      if (!response.ok) throw new Error('Inquiry was not accepted')
      trackContactSubmit(subject)
      setSubmitted(true)
    } catch {
      setError(t('error'))
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
        <p className={styles.successText}>
          {t('success')}
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Name */}
      <div style={fieldStyle}>
        <label style={labelStyle} htmlFor="contactName">
          {t('name')} <span style={{ color: 'var(--teal)' }} aria-hidden="true">*</span>
        </label>
        <input
          id="contactName"
          type="text"
          style={inputStyle}
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder={t('namePlaceholder')}
        />
      </div>

      {/* Email */}
      <div style={fieldStyle}>
        <label style={labelStyle} htmlFor="contactEmail">
          {t('email')} <span style={{ color: 'var(--teal)' }} aria-hidden="true">*</span>
        </label>
        <input
          id="contactEmail"
          type="email"
          style={inputStyle}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder={t('emailPlaceholder')}
        />
      </div>

      {/* Subject */}
      <div style={fieldStyle}>
        <label style={labelStyle} htmlFor="contactSubject">
          {t('subject')} <span style={{ color: 'var(--teal)' }} aria-hidden="true">*</span>
        </label>
        <select
          id="contactSubject"
          style={selectStyle}
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        >
          <option value="" disabled>
            {t('select')}
          </option>
          {SUBJECTS.map((s) => (
            <option key={s.key} value={s.value}>
              {t(`subjects.${s.key}`)}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div style={fieldStyle}>
        <label style={labelStyle} htmlFor="contactMessage">
          {t('message')} <span style={{ color: 'var(--teal)' }} aria-hidden="true">*</span>
        </label>
        <textarea
          id="contactMessage"
          style={textareaStyle}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          placeholder={t('messagePlaceholder')}
          rows={5}
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
        }}
      >
        {submitting ? t('sending') : t('submit')}
      </button>
    </form>
  )
}
