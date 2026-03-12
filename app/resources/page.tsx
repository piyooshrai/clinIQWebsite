import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import ResourceIndex from '@/components/ResourceIndex'
import type { ResourceItem } from '@/components/ResourceIndex'
import styles from './resources.module.css'

export const metadata: Metadata = {
  title: 'Resources — clinIQ Guides, Checklists & Tools',
  description:
    'Free guides, checklists, and tools to fix your clinic operations. RTM billing, patient flow, urgent care optimization.',
}

const resources: ResourceItem[] = [
  {
    slug: 'urgent-care-flow-checklist',
    type: 'Checklist',
    title: 'Urgent Care Patient Flow Optimization Checklist',
    description:
      '23-point checklist to cut LWBS, reduce wait times, and stop front desk chaos. Covers every stage from pre-arrival to discharge.',
  },
  {
    slug: 'rtm-implementation-guide',
    type: 'Guide',
    title: 'RTM Implementation Guide: From Setup to First Bill',
    description:
      'Step-by-step guide to launching RTM billing. CPT codes, documentation requirements, payer rules, and revenue math.',
  },
  {
    slug: 'roi-calculator',
    type: 'Calculator',
    title: 'Calculate Your clinIQ ROI',
    description:
      "See your potential time savings, revenue opportunity, and payback period based on your clinic's patient volume and current workflows.",
  },
  {
    slug: 'prior-auth-checklist',
    type: 'Checklist',
    title: 'Prior Authorization Workflow Checklist',
    description:
      '18-step checklist to reduce prior auth delays and denial rates. Covers eligibility checks, documentation requirements, submission timing, and appeals.',
  },
  {
    slug: 'mat-clinic-workflow-template',
    type: 'Template',
    title: 'MAT Clinic Workflow Template',
    description:
      'Medication-assisted treatment clinic workflow from intake to medication dispensing. Covers buprenorphine induction, monitoring visits, group therapy, and insurance pre-auth.',
  },
  {
    slug: 'patient-flow-audit-template',
    type: 'Template',
    title: 'Patient Flow Audit Template',
    description:
      'Measure your current patient flow, identify bottlenecks, and prioritize fixes. Includes flow mapping worksheet, bottleneck scoring matrix, and 90-day improvement roadmap.',
  },
  {
    slug: 'check-in-comparison-guide',
    type: 'Guide',
    title: 'Patient Check-In Solutions Comparison Guide',
    description:
      'Compare kiosk, iPad, web, and paper check-in across HIPAA compliance, cost, and patient experience. Includes decision matrix for your clinic size.',
  },
  {
    slug: 'analytics-metrics-guide',
    type: 'Guide',
    title: 'Clinic Analytics: The Metrics That Actually Matter',
    description:
      "The 12 operational metrics every clinic operator should track weekly — and what to do when they're off. Includes benchmarks, reporting cadences, and dashboard setup.",
  },
  {
    slug: 'lwbs-reduction-playbook',
    type: 'Guide',
    title: 'LWBS Reduction Playbook for Urgent Care',
    description:
      'A 30-day action plan to cut left-without-being-seen rates in urgent care clinics. Week-by-week implementation guide with measurement framework.',
  },
  {
    slug: 'rtm-consent-template',
    type: 'Template',
    title: 'RTM Patient Consent Form Template',
    description:
      'HIPAA-compliant RTM consent form template covering monitoring scope, data use, and opt-out rights. Includes minor/guardian provisions and billing disclosure.',
  },
  {
    slug: 'healthcare-scheduling-guide',
    type: 'Guide',
    title: 'Healthcare Scheduling That Reduces No-Shows',
    description:
      'Scheduling strategies that cut no-show rates by 30-40% without adding staff. Reminder cadence, overbooking strategies, waitlist management, and efficiency measurement.',
  },
  {
    slug: 'staff-burnout-prevention-guide',
    type: 'Guide',
    title: 'Preventing Front Desk Burnout: An Operational Approach',
    description:
      'The workflow and technology changes that reduce cognitive load and improve retention. 8 workflow changes, automation opportunities, and 30-day implementation checklist.',
  },
  {
    slug: 'rtm-payer-matrix',
    type: 'Guide',
    title: 'RTM Payer Coverage Matrix 2026',
    description:
      'Which payers cover RTM codes in 2026 — and what each requires for reimbursement. Medicare rates, top 10 commercial payer policies, state Medicaid status, and denial prevention.',
  },
  {
    slug: 'specialty-flow-templates',
    type: 'Template',
    title: 'Specialty-Specific Patient Flow Templates',
    description:
      'Pre-built patient flow templates for 10 specialties — ready to configure in your clinic. Urgent care, pain management, physical therapy, behavioral health, orthopedics, and more.',
  },
  {
    slug: 'pre-auth-denial-playbook',
    type: 'Guide',
    title: 'Prior Auth Denial Playbook: Win More Appeals',
    description:
      'The documentation, timing, and language that reverses prior auth denials. Peer-to-peer review protocols, appeal scripts, and payer-specific timing rules.',
  },
  {
    slug: 'rtm-revenue-workbook',
    type: 'Calculator',
    title: 'RTM Revenue Projection Workbook',
    description:
      'Project your RTM billing revenue by specialty, enrollment rate, and payer mix. See monthly and annual estimates across all billable CPT codes.',
  },
  {
    slug: 'rtm-code-reference',
    type: 'Reference',
    title: 'RTM Billing Code Reference Card',
    description:
      'Quick-reference card for all RTM CPT codes — descriptions, 2025 Medicare rates, documentation requirements, and billing rules for each code.',
  },
  {
    slug: 'fqhc-efficiency-checklist',
    type: 'Checklist',
    title: 'FQHC Operations Efficiency Checklist',
    description:
      '20-point checklist covering UDS reporting readiness, sliding-fee schedule accuracy, grant compliance documentation, and operational throughput for community health centers.',
  },
  {
    slug: 'clinic-tech-audit',
    type: 'Checklist',
    title: 'Clinic Technology Stack Audit',
    description:
      'Evaluate your current EHR, scheduling, check-in, billing, and patient engagement tools. Identify gaps, redundancies, and integration opportunities.',
  },
  {
    slug: 'pre-auth-denial-analysis',
    type: 'Template',
    title: 'Pre-Auth Denial Analysis Template',
    description:
      'Track denial patterns by payer, procedure, and denial reason. Identify which submissions fail and why — then systematically fix first-pass rates.',
  },
  {
    slug: 'value-based-care-scorecard',
    type: 'Assessment',
    title: 'Value-Based Care Readiness Scorecard',
    description:
      'Score your practice across 5 VBC domains: data infrastructure, care coordination, quality measurement, patient engagement, and financial risk tolerance.',
  },
  {
    slug: 'ehr-readiness-assessment',
    type: 'Assessment',
    title: 'EHR Integration Readiness Assessment',
    description:
      'Assess your EHR environment before adding new tools. Covers API access, data quality, staff adoption, and integration complexity across 12 readiness factors.',
  },
  {
    slug: 'operations-maturity-model',
    type: 'Assessment',
    title: 'Clinic Operations Maturity Model',
    description:
      'Benchmark your clinic operations across 5 domains. Get a maturity score, identify your highest-leverage improvement areas, and receive a prioritized action plan.',
  },
]

export default function ResourcesPage() {
  return (
    <>
      <NavInner />
      <main>
        <section className={styles.hero}>
          <div className={styles.heroBg}>
            <div className={styles.heroOrb} />
            <div className={styles.heroGrain} />
          </div>
          <div className="container">
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>Resources</h1>
              <p className={styles.heroSubtitle}>
                Guides, checklists, and tools to fix your clinic operations.
              </p>
            </div>
          </div>
        </section>
        <ResourceIndex resources={resources} />
      </main>
      <FooterInner />
    </>
  )
}
