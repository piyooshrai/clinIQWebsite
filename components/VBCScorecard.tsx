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
  // Data Infrastructure
  { id: 'q1', domain: 'Data Infrastructure', text: 'Your EHR can export patient data in a structured format (FHIR, HL7, or CSV) without manual work.' },
  { id: 'q2', domain: 'Data Infrastructure', text: 'You track quality measure denominators and numerators in real time (not just at year-end reporting).' },
  { id: 'q3', domain: 'Data Infrastructure', text: 'You can produce a list of patients with a specific chronic condition and their last relevant lab value in under 10 minutes.' },
  // Care Coordination
  { id: 'q4', domain: 'Care Coordination', text: 'When a patient is discharged from a hospital, your practice receives timely notification and has a follow-up protocol.' },
  { id: 'q5', domain: 'Care Coordination', text: 'You have defined care pathways for your top 3 chronic conditions, and staff consistently follow them.' },
  { id: 'q6', domain: 'Care Coordination', text: 'Your practice uses care managers or health coaches for high-risk patient outreach between visits.' },
  // Quality Measurement
  { id: 'q7', domain: 'Quality Measurement', text: 'You participate in at least one value-based contract, MIPS, or alternative payment model today.' },
  { id: 'q8', domain: 'Quality Measurement', text: 'You review quality metric performance at least quarterly with clinical and operational staff.' },
  { id: 'q9', domain: 'Quality Measurement', text: 'You know your current HEDIS or MIPS composite score and the specific measures dragging it down.' },
  // Patient Engagement
  { id: 'q10', domain: 'Patient Engagement', text: 'Patients can complete health risk assessments or symptom check-ins digitally between visits.' },
  { id: 'q11', domain: 'Patient Engagement', text: 'You use secure messaging or patient portal messaging to communicate about care plan adherence.' },
  { id: 'q12', domain: 'Patient Engagement', text: 'You have a defined approach to identifying and addressing Social Determinants of Health (SDOH) for at-risk patients.' },
  // Financial Risk
  { id: 'q13', domain: 'Financial Risk Tolerance', text: 'Your practice has analyzed your payer mix and knows which contracts include quality or utilization incentives.' },
  { id: 'q14', domain: 'Financial Risk Tolerance', text: 'Leadership has discussed taking on downside financial risk (shared savings with clawback) in the next 3 years.' },
  { id: 'q15', domain: 'Financial Risk Tolerance', text: 'You have a clear picture of your total cost of care per patient per year for your highest-volume chronic conditions.' },
]

type Answer = 'yes' | 'partial' | 'no' | null

const SCORE = { yes: 2, partial: 1, no: 0 }

const LEVELS = [
  { min: 26, label: 'VBC Ready', color: '#0d9488', description: 'Your practice has the operational and data foundation to pursue value-based contracts now. Focus on payer relationships and contract terms.' },
  { min: 18, label: 'Developing', color: '#0ea5e9', description: 'You have meaningful VBC capabilities but gaps that will limit performance in risk-bearing contracts. Address your lowest-scoring domain first.' },
  { min: 10, label: 'Early Stage', color: '#f59e0b', description: 'Foundation work is needed before pursuing VBC contracts. Prioritize data infrastructure and care coordination before taking on financial risk.' },
  { min: 0, label: 'Pre-VBC', color: '#ef4444', description: 'Your practice is not yet positioned for value-based care. Start with basic operational improvements and EHR optimization before exploring VBC.' },
]

const domains = ['Data Infrastructure', 'Care Coordination', 'Quality Measurement', 'Patient Engagement', 'Financial Risk Tolerance']

export default function VBCScorecard() {
  const [answers, setAnswers] = useState<Record<string, Answer>>({})
  const [showResults, setShowResults] = useState(false)

  const answered = Object.values(answers).filter(Boolean).length
  const total = questions.length
  const allAnswered = answered === total

  function setAnswer(id: string, val: Answer) {
    setAnswers((p) => ({ ...p, [id]: val }))
  }

  const totalScore = questions.reduce((sum, q) => {
    const a = answers[q.id]
    return sum + (a ? SCORE[a] : 0)
  }, 0)

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
              <div className={styles.levelBadge} style={{ background: level.color }}>
                {level.label}
              </div>
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
                <p className={styles.focusLabel}>Highest-leverage area to address first</p>
                <p className={styles.focusArea}>{weakest.domain}</p>
                <p className={styles.focusScore}>Scored {weakest.score}/{weakest.max} ({weakest.pct}%)</p>
              </div>

              <div className={styles.resultsCTA}>
                <Link href="/demo" className="btn-inner btn-inner-primary">
                  See how clinIQ supports VBC readiness →
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
              {allAnswered ? 'See my VBC readiness score' : `Answer all ${total - answered} remaining questions`}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
