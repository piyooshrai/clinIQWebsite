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
  // API & Integration
  { id: 'q1', domain: 'API & Connectivity', text: 'Your EHR supports FHIR R4 APIs and you have credentials or know how to obtain them.' },
  { id: 'q2', domain: 'API & Connectivity', text: 'You have an IT contact (internal or vendor) who can assist with API configuration and troubleshooting.' },
  { id: 'q3', domain: 'API & Connectivity', text: 'You have successfully connected a third-party tool (patient portal, billing software, or analytics) to your EHR in the past.' },
  // Data Quality
  { id: 'q4', domain: 'Data Quality', text: 'Patient demographics in your EHR are verified and updated at check-in — less than 5% of records have known address or phone errors.' },
  { id: 'q5', domain: 'Data Quality', text: 'Your clinical staff document consistently using structured fields (problem lists, medication lists, coded diagnoses) rather than free-text notes.' },
  { id: 'q6', domain: 'Data Quality', text: 'Duplicate patient records are rare — your practice has a process to prevent or merge duplicates.' },
  // Staff Readiness
  { id: 'q7', domain: 'Staff Readiness', text: 'Frontline staff (front desk, MAs, billing) are comfortable learning new software with minimal resistance.' },
  { id: 'q8', domain: 'Staff Readiness', text: 'You have a designated person who can champion a new technology implementation and hold staff accountable for adoption.' },
  { id: 'q9', domain: 'Staff Readiness', text: 'Your EHR training is current — staff are using the features available to them, not working around the system.' },
  // Workflow & Process
  { id: 'q10', domain: 'Workflow & Process', text: 'Your current patient check-in, scheduling, and billing workflows are documented or well-understood by leadership.' },
  { id: 'q11', domain: 'Workflow & Process', text: 'You can identify the top 3 workflow pain points you want a new tool to solve — and you have leadership alignment on those priorities.' },
  { id: 'q12', domain: 'Workflow & Process', text: 'Your practice has successfully implemented and sustained a new operational process or technology in the past 2 years.' },
]

type Answer = 'yes' | 'partial' | 'no' | null
const SCORE = { yes: 2, partial: 1, no: 0 }
const domains = ['API & Connectivity', 'Data Quality', 'Staff Readiness', 'Workflow & Process']

const LEVELS = [
  { min: 20, label: 'Integration Ready', color: '#0d9488', description: 'Your EHR environment is well-positioned for new integrations. You can proceed with confidence and expect a smooth implementation.' },
  { min: 14, label: 'Mostly Ready', color: '#0ea5e9', description: 'You have a solid foundation with a few gaps to address. Resolve your lowest-scoring domain before going live with new tools.' },
  { min: 8, label: 'Preparation Needed', color: '#f59e0b', description: 'Several readiness gaps exist that will slow down or complicate integrations. Address data quality and staff readiness first.' },
  { min: 0, label: 'Not Yet Ready', color: '#ef4444', description: 'Significant groundwork is required before adding new integrations. Start with EHR optimization and staff training.' },
]

export default function EHRReadinessAssessment() {
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

  const weakest = [...domainScores].sort((a, b) => a.pct - b.pct)[0]

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
                <p className={styles.focusLabel}>Address this first</p>
                <p className={styles.focusArea}>{weakest.domain}</p>
                <p className={styles.focusScore}>Scored {weakest.score}/{weakest.max} ({weakest.pct}%)</p>
              </div>
              <div className={styles.resultsCTA}>
                <Link href="/demo" className="btn-inner btn-inner-primary">
                  See how clinIQ integrates with your EHR →
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
              {allAnswered ? 'See my readiness score' : `Answer all ${total - answered} remaining questions`}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
