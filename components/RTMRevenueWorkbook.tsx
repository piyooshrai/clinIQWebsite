'use client'

import { useState } from 'react'
import Link from 'next/link'
import styles from './RTMRevenueWorkbook.module.css'

interface Inputs {
  monthlyPatients: number
  enrollmentPct: number
  medicarePct: number
  billingMgmtOnly: boolean
}

const RATES = {
  setup: 18,        // 98975 billed once at enrollment
  deviceSupply: 47, // 98976/98977/98978 per month
  mgmt20: 50,       // 98980 first 20 min
  mgmtAddl: 40,     // 98981 each addl 20 min
}

const COMMERCIAL_MULTIPLIER = 0.85 // commercial typically 85% of Medicare

function calcRevenue(inputs: Inputs) {
  const enrolled = Math.round(inputs.monthlyPatients * (inputs.enrollmentPct / 100))
  const medicarePt = Math.round(enrolled * (inputs.medicarePct / 100))
  const commercialPt = enrolled - medicarePt

  // Monthly per enrolled patient (device supply + 20 min mgmt)
  const monthlyPerMedicare = RATES.deviceSupply + RATES.mgmt20
  const monthlyPerCommercial = monthlyPerMedicare * COMMERCIAL_MULTIPLIER

  const monthlyRevenue = Math.round(
    medicarePt * monthlyPerMedicare + commercialPt * monthlyPerCommercial
  )
  const annualRevenue = monthlyRevenue * 12
  const setupRevenue = Math.round(enrolled * RATES.setup) // one-time when first enrolled

  return { enrolled, monthlyRevenue, annualRevenue, setupRevenue, monthlyPerMedicare }
}

function fmt(n: number) {
  return n.toLocaleString('en-US')
}

function fmtDollar(n: number) {
  return '$' + fmt(n)
}

export default function RTMRevenueWorkbook() {
  const [inputs, setInputs] = useState<Inputs>({
    monthlyPatients: 300,
    enrollmentPct: 30,
    medicarePct: 60,
    billingMgmtOnly: false,
  })

  const out = calcRevenue(inputs)

  function setNum(key: keyof Inputs, value: string) {
    const n = parseInt(value, 10)
    if (!isNaN(n) && n >= 0) setInputs((p) => ({ ...p, [key]: n }))
  }

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.layout}>

          {/* Inputs */}
          <div className={styles.inputsCard}>
            <h2 className={styles.cardTitle}>Your practice</h2>

            <div className={styles.inputGroup}>
              <label className={styles.inputLabel} htmlFor="monthlyPatients">
                Monthly active patients
              </label>
              <div className={styles.inputRow}>
                <input
                  id="monthlyPatients"
                  type="number"
                  min="1"
                  className={styles.numInput}
                  value={inputs.monthlyPatients}
                  onChange={(e) => setNum('monthlyPatients', e.target.value)}
                />
                <span className={styles.inputUnit}>patients</span>
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.inputLabel} htmlFor="enrollmentPct">
                Target RTM enrollment rate
              </label>
              <div className={styles.inputRow}>
                <input
                  id="enrollmentPct"
                  type="number"
                  min="1"
                  max="100"
                  className={styles.numInput}
                  value={inputs.enrollmentPct}
                  onChange={(e) => setNum('enrollmentPct', e.target.value)}
                />
                <span className={styles.inputUnit}>% of patients</span>
              </div>
              <p className={styles.inputHint}>Typical range: 20–40% of eligible chronic care patients</p>
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.inputLabel} htmlFor="medicarePct">
                Medicare / Medicare Advantage mix
              </label>
              <div className={styles.inputRow}>
                <input
                  id="medicarePct"
                  type="number"
                  min="0"
                  max="100"
                  className={styles.numInput}
                  value={inputs.medicarePct}
                  onChange={(e) => setNum('medicarePct', e.target.value)}
                />
                <span className={styles.inputUnit}>% Medicare</span>
              </div>
            </div>

            <div className={styles.noteBox}>
              <p className={styles.noteText}>
                Rates based on 2025 Medicare national averages. Commercial estimates use 85% of Medicare. Actual
                payments vary by geography and payer contract.
              </p>
            </div>
          </div>

          {/* Outputs */}
          <div className={styles.outputsCard}>
            <h2 className={styles.cardTitle}>Your RTM projection</h2>

            <div className={styles.outputGrid}>
              <div className={styles.outputItem}>
                <span className={styles.outputValue}>{fmt(out.enrolled)}</span>
                <span className={styles.outputLabel}>Enrolled patients</span>
              </div>
              <div className={`${styles.outputItem} ${styles.outputHighlight}`}>
                <span className={styles.outputValue}>{fmtDollar(out.monthlyRevenue)}</span>
                <span className={styles.outputLabel}>Monthly RTM revenue</span>
              </div>
              <div className={`${styles.outputItem} ${styles.outputHighlight}`}>
                <span className={styles.outputValue}>{fmtDollar(out.annualRevenue)}</span>
                <span className={styles.outputLabel}>Annual RTM revenue</span>
              </div>
              <div className={styles.outputItem}>
                <span className={styles.outputValue}>{fmtDollar(out.setupRevenue)}</span>
                <span className={styles.outputLabel}>One-time setup revenue (98975)</span>
              </div>
            </div>

            <div className={styles.codeBreakdown}>
              <h3 className={styles.breakdownTitle}>Monthly per enrolled patient</h3>
              <div className={styles.codeRow}>
                <span className={styles.codeNum}>98975</span>
                <span className={styles.codeName}>Initial setup</span>
                <span className={styles.codeRate}>~$18 (one-time)</span>
              </div>
              <div className={styles.codeRow}>
                <span className={styles.codeNum}>98976–98978</span>
                <span className={styles.codeName}>Device supply (monthly)</span>
                <span className={styles.codeRate}>~$47/mo</span>
              </div>
              <div className={styles.codeRow}>
                <span className={styles.codeNum}>98980</span>
                <span className={styles.codeName}>Treatment mgmt, first 20 min</span>
                <span className={styles.codeRate}>~$50/mo</span>
              </div>
              <div className={styles.codeRow}>
                <span className={styles.codeNum}>98981</span>
                <span className={styles.codeName}>Treatment mgmt, addl 20 min</span>
                <span className={styles.codeRate}>~$40/mo</span>
              </div>
            </div>

            <div className={styles.outputCTA}>
              <p className={styles.outputCTANote}>
                clinIQ achieves 75%+ patient compliance with RTM data submission — most programs fall well short of
                that. Higher compliance means more months you can actually bill.
              </p>
              <Link href="/demo" className="btn-inner btn-inner-sm btn-inner-primary">
                See how clinIQ captures this revenue →
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
