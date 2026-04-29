'use client'

import { useState } from 'react'
import Link from 'next/link'
import styles from './Hero.module.css'

export default function Hero() {
  const [email, setEmail] = useState('')
  const [practice, setPractice] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          practice,
          subject: 'Hero quick inquiry',
          message: `Quick inquiry from homepage hero. Practice: ${practice || 'not provided'}`,
          formType: 'contact',
        }),
      })
      setStatus(res.ok ? 'sent' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className={styles.hero}>
      <div className={`${styles.orb} ${styles.orb1}`} aria-hidden="true" />
      <div className={`${styles.orb} ${styles.orb2}`} aria-hidden="true" />
      <div className={`${styles.orb} ${styles.orb3}`} aria-hidden="true" />

      <div className={styles.layout}>
        <div className={styles.content}>
          <div className={styles.label}>
            <span className={styles.labelLine} />
            <span className={styles.labelText}>Clinic Operations Software</span>
          </div>

          <h1 className={styles.title}>
            <span className={styles.titleLine}>
              <span className={styles.titleWord}>Patient Flow Software</span>
            </span>
            <span className={styles.titleLine}>
              <span className={styles.titleWord}>
                Built for <em className={styles.titleEm}>Real Clinics.</em>
              </span>
            </span>
          </h1>

          <p className={styles.description}>
            clinIQ is the clinic operations platform that brings real-time patient queue
            management, digital patient check-in, RTM billing, and pre-authorization
            automation together — sitting on top of your existing EHR. Capture $120–$150
            per RTM patient monthly. Cut wait times 22% in the first month.
          </p>

          <div className={styles.ctaRow}>
            <Link href="/demo" className={`${styles.btnBase} ${styles.btnPrimary}`}>
              Request Demo
            </Link>
            <Link href="/features" className={`${styles.btnBase} ${styles.btnSecondary}`}>
              See How It Works
            </Link>
          </div>

          <form className={styles.quickForm} onSubmit={onSubmit} aria-label="Quick inquiry">
            <div className={styles.quickFormRow}>
              <input
                type="email"
                required
                placeholder="Work email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.quickFormInput}
                aria-label="Work email"
                disabled={status === 'sending' || status === 'sent'}
              />
              <input
                type="text"
                placeholder="Practice name"
                value={practice}
                onChange={(e) => setPractice(e.target.value)}
                className={styles.quickFormInput}
                aria-label="Practice name"
                disabled={status === 'sending' || status === 'sent'}
              />
              <button
                type="submit"
                className={styles.quickFormBtn}
                disabled={status === 'sending' || status === 'sent'}
              >
                {status === 'sending' ? 'Sending…' : status === 'sent' ? 'Got it ✓' : 'Get a 15-min walkthrough'}
              </button>
            </div>
            {status === 'sent' && (
              <p className={styles.quickFormNote}>Thanks — we'll reach out within one business day.</p>
            )}
            {status === 'error' && (
              <p className={styles.quickFormNoteError}>Something went wrong. Try again, email info@cliniqhealthcare.com, or call 720.334.7249.</p>
            )}
            {status === 'idle' && (
              <p className={styles.quickFormNote}>No demo deck. We walk through your exact workflow.</p>
            )}
          </form>
        </div>

        <div className={styles.visual} aria-hidden="true">
          <div className={styles.dashboard}>
            <div className={styles.dashHeader}>
              <span className={`${styles.dot} ${styles.dotRed}`} />
              <span className={`${styles.dot} ${styles.dotYellow}`} />
              <span className={`${styles.dot} ${styles.dotGreen}`} />
            </div>

            <div className={styles.dashStats}>
              <div className={styles.statCard}>
                <div className={`${styles.statValue} ${styles.teal}`}>12</div>
                <div className={styles.statLabel}>In Clinic</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statValue}>4</div>
                <div className={styles.statLabel}>Waiting</div>
              </div>
              <div className={styles.statCard}>
                <div className={`${styles.statValue} ${styles.blue}`}>8</div>
                <div className={styles.statLabel}>Completed</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statValue}>11m</div>
                <div className={styles.statLabel}>Avg Wait</div>
              </div>
            </div>

            <div className={styles.queue}>
              <div className={styles.queueHeader}>
                <span className={styles.queueTitle}>Patient Queue</span>
                <span className={styles.queueLive}>
                  <span className={styles.liveDot} />
                  Live
                </span>
              </div>

              <div className={styles.queueItems}>
                <div className={styles.queueItem}>
                  <div className={styles.queuePatient}>
                    <div className={styles.avatar}>ET</div>
                    <div>
                      <div className={styles.patientName}>E. Til</div>
                      <div className={styles.patientDept}>General</div>
                    </div>
                  </div>
                  <span className={`${styles.statusBadge} ${styles.statusProvider}`}>
                    With Provider
                  </span>
                </div>

                <div className={styles.queueItem}>
                  <div className={styles.queuePatient}>
                    <div className={styles.avatar}>KJ</div>
                    <div>
                      <div className={styles.patientName}>K. Joh</div>
                      <div className={styles.patientDept}>Addiction</div>
                    </div>
                  </div>
                  <span className={`${styles.statusBadge} ${styles.statusIntake}`}>
                    Intake
                  </span>
                </div>

                <div className={styles.queueItem}>
                  <div className={styles.queuePatient}>
                    <div className={styles.avatar}>RG</div>
                    <div>
                      <div className={styles.patientName}>R. Gar</div>
                      <div className={styles.patientDept}>Urine</div>
                    </div>
                  </div>
                  <span className={`${styles.statusBadge} ${styles.statusWaiting}`}>
                    Waiting
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.scrollIndicator} aria-hidden="true">
        <span className={styles.scrollText}>Scroll</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  )
}
