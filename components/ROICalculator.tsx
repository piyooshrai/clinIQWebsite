'use client'

import { useState } from 'react'
import Link from 'next/link'
import styles from './ROICalculator.module.css'

interface Inputs {
  patientVolume: number
  avgWaitTime: number
  frontDeskStaff: number
  billingRTM: boolean
}

function calcOutputs(inputs: Inputs) {
  const waitReduction = Math.round(inputs.avgWaitTime * 0.25)
  const hoursSaved = Math.round((inputs.patientVolume * 2) / 60)
  const rtmRevenue = inputs.billingRTM
    ? 0
    : Math.round(inputs.patientVolume * 0.3 * 135)
  return { waitReduction, hoursSaved, rtmRevenue }
}

function fmt(n: number) {
  return n.toLocaleString('en-US')
}

export default function ROICalculator() {
  const [inputs, setInputs] = useState<Inputs>({
    patientVolume: 500,
    avgWaitTime: 25,
    frontDeskStaff: 3,
    billingRTM: false,
  })

  const out = calcOutputs(inputs)

  function setNum(key: keyof Inputs, value: string) {
    const n = parseInt(value, 10)
    if (!isNaN(n) && n >= 0) {
      setInputs((prev) => ({ ...prev, [key]: n }))
    }
  }

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.layout}>
          {/* Inputs */}
          <div className={styles.inputsCard}>
            <h2 className={styles.cardTitle}>Your clinic</h2>

            <div className={styles.inputGroup}>
              <label className={styles.inputLabel} htmlFor="patientVolume">
                Monthly patient volume
              </label>
              <div className={styles.inputRow}>
                <input
                  id="patientVolume"
                  type="number"
                  min="1"
                  className={styles.numInput}
                  value={inputs.patientVolume}
                  onChange={(e) => setNum('patientVolume', e.target.value)}
                />
                <span className={styles.inputUnit}>patients/mo</span>
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.inputLabel} htmlFor="avgWaitTime">
                Average current wait time
              </label>
              <div className={styles.inputRow}>
                <input
                  id="avgWaitTime"
                  type="number"
                  min="1"
                  className={styles.numInput}
                  value={inputs.avgWaitTime}
                  onChange={(e) => setNum('avgWaitTime', e.target.value)}
                />
                <span className={styles.inputUnit}>minutes</span>
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.inputLabel} htmlFor="frontDeskStaff">
                Front desk staff
              </label>
              <div className={styles.inputRow}>
                <input
                  id="frontDeskStaff"
                  type="number"
                  min="1"
                  className={styles.numInput}
                  value={inputs.frontDeskStaff}
                  onChange={(e) => setNum('frontDeskStaff', e.target.value)}
                />
                <span className={styles.inputUnit}>staff</span>
              </div>
            </div>

            <div className={styles.inputGroup}>
              <span className={styles.inputLabel}>Currently billing RTM?</span>
              <div className={styles.toggleRow}>
                <button
                  type="button"
                  className={`${styles.toggleBtn} ${!inputs.billingRTM ? styles.toggleActive : ''}`}
                  onClick={() => setInputs((p) => ({ ...p, billingRTM: false }))}
                  aria-pressed={!inputs.billingRTM}
                >
                  No
                </button>
                <button
                  type="button"
                  className={`${styles.toggleBtn} ${inputs.billingRTM ? styles.toggleActive : ''}`}
                  onClick={() => setInputs((p) => ({ ...p, billingRTM: true }))}
                  aria-pressed={inputs.billingRTM}
                >
                  Yes
                </button>
              </div>
            </div>
          </div>

          {/* Outputs */}
          <div className={styles.outputsCard}>
            <h2 className={styles.cardTitle}>Your opportunity</h2>

            <div className={styles.outputGrid}>
              <div className={styles.outputItem}>
                <span className={styles.outputValue}>
                  {out.waitReduction} min
                </span>
                <span className={styles.outputLabel}>Estimated wait time reduction</span>
              </div>

              <div className={styles.outputItem}>
                <span className={styles.outputValue}>
                  {fmt(out.hoursSaved)} hrs
                </span>
                <span className={styles.outputLabel}>Staff hours saved per month</span>
              </div>

              <div className={`${styles.outputItem} ${!inputs.billingRTM ? styles.outputHighlight : styles.outputDimmed}`}>
                <span className={styles.outputValue}>
                  {inputs.billingRTM ? '—' : `$${fmt(out.rtmRevenue)}`}
                </span>
                <span className={styles.outputLabel}>
                  {inputs.billingRTM
                    ? 'RTM already captured'
                    : 'RTM revenue opportunity / month'}
                </span>
              </div>

              <div className={styles.outputItem}>
                <span className={styles.outputValue}>{'<'}90 days</span>
                <span className={styles.outputLabel}>Estimated payback period</span>
              </div>
            </div>

            <div className={styles.outputCTA}>
              <p className={styles.outputCTANote}>
                These are conservative estimates based on clinics similar to yours.
              </p>
              <Link href="/demo" className="btn-inner btn-inner-lg btn-inner-primary">
                See It In Action
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
