'use client'

import { useState } from 'react'
import styles from './ResourceForm.module.css'

export interface FormField {
  name: string
  label: string
  type: 'email' | 'select' | 'text'
  placeholder?: string
  options?: string[]
  required?: boolean
}

interface ResourceFormProps {
  resourceSlug: string
  resourceTitle: string
  fields: FormField[]
  submitLabel: string
  successMessage: string
}

export default function ResourceForm({
  resourceSlug,
  resourceTitle,
  fields,
  submitLabel,
  successMessage,
}: ResourceFormProps) {
  const [values, setValues] = useState<Record<string, string>>({})
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  function handleChange(name: string, value: string) {
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitting(true)
    setError('')

    try {
      await fetch('/api/resource-download', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ resourceSlug, resourceTitle, ...values }),
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
      <section className={styles.section}>
        <div className="container">
          <div className={styles.successWrap}>
            <div className={styles.successIcon} aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1.5" />
                <path d="M7 12l3.5 3.5L17 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h2 className={styles.successTitle}>{successMessage}</h2>
            <p className={styles.successBody}>
              While you wait — explore how clinIQ handles this automatically.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.formWrap}>
            <h2 className={styles.formTitle}>Get instant access</h2>
            <p className={styles.formSubtitle}>
              Fill in your details and we&rsquo;ll send it straight to your inbox.
            </p>

            <form onSubmit={handleSubmit} className={styles.form} noValidate>
              {fields.map((field) => (
                <div key={field.name} className={styles.fieldGroup}>
                  <label className={styles.fieldLabel} htmlFor={field.name}>
                    {field.label}
                    {field.required !== false && <span className={styles.required} aria-hidden="true"> *</span>}
                  </label>

                  {field.type === 'select' ? (
                    <select
                      id={field.name}
                      name={field.name}
                      className={styles.select}
                      value={values[field.name] ?? ''}
                      onChange={(e) => handleChange(field.name, e.target.value)}
                      required={field.required !== false}
                    >
                      <option value="" disabled>Select…</option>
                      {field.options?.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  ) : (
                    <input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      className={styles.input}
                      value={values[field.name] ?? ''}
                      onChange={(e) => handleChange(field.name, e.target.value)}
                      placeholder={field.placeholder ?? ''}
                      required={field.required !== false}
                    />
                  )}
                </div>
              ))}

              {error && <p className={styles.errorMsg} role="alert">{error}</p>}

              <button
                type="submit"
                className={`btn-inner btn-inner-lg btn-inner-primary ${styles.submitBtn}`}
                disabled={submitting}
              >
                {submitting ? 'Sending…' : submitLabel}
              </button>

              <p className={styles.privacyNote}>
                No spam. No sales calls. Just the resource.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
