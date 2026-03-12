'use client'

import { useState } from 'react'
import Link from 'next/link'
import styles from './AssessmentTool.module.css'

interface Question {
  id: string
  domain: string
  text: string
}

const questions: Question[] = [
  // Patient Access
  { id: 'q1', domain: 'Patient Access', text: 'Patients can schedule appointments online 24/7 without calling the front desk.' },
  { id: 'q2', domain: 'Patient Access', text: 'Appointment reminders go out automatically via text or email at least 48 hours before the visit.' },
  { id: 'q3', domain: 'Patient Access', text: 'You have a defined waitlist process — when a slot opens, it is offered to waiting patients before going unfilled.' },
  { id: 'q4', domain: 'Patient Access', text: 'Your new patient intake (forms, insurance, consent) is completed before arrival — not at the front desk.' },
  // Check-In & Registration
  { id: 'q5', domain: 'Check-In & Registration', text: 'Patients can check in digitally (kiosk, tablet, or phone) without staff assistance for routine visits.' },
  { id: 'q6', domain: 'Check-In & Registration', text: 'Insurance eligibility is verified automatically before appointments — not manually the day of.' },
  { id: 'q7', domain: 'Check-In & Registration', text: 'Front desk staff spend less than 3 minutes per patient on check-in for established patients.' },
  // Patient Flow
  { id: 'q8', domain: 'Patient Flow', text: 'Staff have real-time visibility into the lobby, which rooms are occupied, and where each patient is in their visit.' },
  { id: 'q9', domain: 'Patient Flow', text: 'You track actual vs. expected wait times by provider and by day of week — and act on the data.' },
  { id: 'q10', domain: 'Patient Flow', text: 'Room turnover time is measured and within acceptable benchmarks for your specialty.' },
  // Revenue Capture
  { id: 'q11', domain: 'Revenue Capture', text: 'Your practice bills for all eligible between-visit care — remote monitoring, care management, or telehealth — not just face-to-face visits.' },
  { id: 'q12', domain: 'Revenue Capture', text: 'Prior authorization is tracked systematically — nothing falls through the cracks or expires without action.' },
  { id: 'q13', domain: 'Revenue Capture', text: 'Your clean claim rate is above 95% and your denial rate is below 5% for first submissions.' },
  // Analytics & Improvement
  { id: 'q14', domain: 'Analytics & Improvement', text: 'You review operational metrics (wait times, no-show rate, check-in completion) at least monthly — not just quarterly or annually.' },
  { id: 'q15', domain: 'Analytics & Improvement', text: 'When a metric is off-benchmark, you can trace it to a root cause and have a process to address it.' },
  { id: 'q16', domain: 'Analytics & Improvement', text: 'Your staff uses data from your tools to improve performance — they are not just entering data and ignoring the reports.' },
]

type Answer = 'yes' | 'partial' | 'no' | null
const SCORE = { yes: 2, partial: 1, no: 0 }
const domains = ['Patient Access', 'Check-In & Registration', 'Patient Flow', 'Revenue Capture', 'Analytics & Improvement']

const LEVELS = [
  { min: 28, label: 'Optimized', color: '#0d9488', description: 'Your clinic operations are mature. You have automated workflows, real-time visibility, and data-driven decision making. Focus on fine-tuning and revenue expansion.' },
  { min: 20, label: 'Managed', color: '#0ea5e9', description: 'You have solid operational foundations with specific gaps. Address your lowest-scoring domain to unlock the next tier of efficiency.' },
  { min: 12, label: 'Developing', color: '#f59e0b', description: 'Key automation and visibility tools are missing. Fixing your top 2 weakest domains will have significant impact on staff time and patient experience.' },
  { min: 0, label: 'Initial', color: '#ef4444', description: 'Your operations are largely manual and reactive. Start with patient access and check-in automation — these have the fastest ROI and lowest implementation complexity.' },
]

export default function OperationsMaturityModel() {
  const [answers, setAnswers] = useState<Record<string, Answer>>({})
  const [showResults, setShowResults] = useState(false)

  const answered = Object.values(answers).filter(Boolean).length
  const total = questions.length
  const allAnswered = answered === total

  function setAnswer(id: string, val: Answer) {
    setAnswers((p) => ({ ...p, [id]: val }))
  }

  const totalScore = questions.reduce((sum, q) => sum + (answers[q.id] ? SCORE[answers[q.id]!] : 0), 0)
  const maxScore = total * 2
  const level = LEVELS.find((l) => totalScore >= l.min) || LEVELS[LEVELS.length - 1]

  const domainScores = domains.map((domain) => {
    const qs = questions.filter((q) => q.domain === domain)
    const score = qs.reduce((s, q) => s + (answers[q.id] ? SCORE[answers[q.id]!] : 0), 0)
    const max = qs.length * 2
    return { domain, score, max, pct: Math.round((score / max) * 100) }
  })

  const sorted = [...domainScores].sort((a, b) => a.pct - b.pct)
  const weakest = sorted[0]
  const secondWeakest = sorted[1]

  if (showResults) {
    return (
      <section className={styles.section}>
        <div className="container">
          <div className={styles.resultsWrap}>
            <div className={styles.scoreCircleWrap}>
              <div className={styles.scoreCircle} style={{ borderColor: level.color }}>
                <span className={styles.scoreNum}>{totalScore}</span>
                <span className={styles.scoreOf}>/ {maxScore}</span>
              </div>
              <div className={styles.levelBadge} style={{ background: level.color }}>{level.label}</div>
            </div>
            <div className={styles.resultsContent}>
              <p className={styles.levelDesc}>{level.description}</p>
              <div className={styles.domainGrid}>
                {domainScores.map((d) => (
                  <div key={d.domain} className={styles.domainItem}>
                    <div className={styles.domainHeader}>
                      <span className={styles.domainName}>{d.domain}</span>
                      <span className={styles.domainScore}>{d.score}/{d.max}</span>
                    </div>
                    <div className={styles.barTrack}>
                      <div className={styles.barFill} style={{ width: `${d.pct}%`, background: d.pct >= 67 ? '#0d9488' : d.pct >= 33 ? '#f59e0b' : '#ef4444' }} />
                    </div>
                  </div>
                ))}
              </div>
              <div className={styles.focusBox}>
                <p className={styles.focusLabel}>Focus here first — highest leverage</p>
                <p className={styles.focusArea}>{weakest.domain}</p>
                <p className={styles.focusScore}>Scored {weakest.score}/{weakest.max} ({weakest.pct}%) — then address {secondWeakest.domain} ({secondWeakest.pct}%)</p>
              </div>
              <div className={styles.resultsCTA}>
                <Link href="/demo" className="btn-inner btn-inner-primary">
                  See clinIQ address your gaps →
                </Link>
                <button className={styles.retakeBtn} onClick={() => { setAnswers({}); setShowResults(false) }}>
                  Retake assessment
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.assessmentWrap}>
          <div className={styles.progressBar}>
            <div className={styles.progressFill} style={{ width: `${(answered / total) * 100}%` }} />
          </div>
          <p className={styles.progressLabel}>{answered} of {total} answered</p>

          {domains.map((domain) => (
            <div key={domain} className={styles.domainSection}>
              <h2 className={styles.domainTitle}>{domain}</h2>
              {questions.filter((q) => q.domain === domain).map((q) => (
                <div key={q.id} className={styles.questionCard}>
                  <p className={styles.questionText}>{q.text}</p>
                  <div className={styles.answerRow}>
                    {(['yes', 'partial', 'no'] as Answer[]).map((val) => (
                      <button
                        key={val!}
                        className={`${styles.answerBtn} ${answers[q.id] === val ? styles.answerSelected : ''}`}
                        onClick={() => setAnswer(q.id, val)}
                      >
                        {val === 'yes' ? 'Yes' : val === 'partial' ? 'Partially' : 'No'}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}

          <div className={styles.submitWrap}>
            <button
              className={`btn-inner btn-inner-lg btn-inner-primary ${!allAnswered ? styles.submitDisabled : ''}`}
              disabled={!allAnswered}
              onClick={() => setShowResults(true)}
            >
              {allAnswered ? 'See my maturity score' : `Answer all ${total - answered} remaining questions`}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
