import styles from './SpecialtyWorkflow.module.css'

export interface WorkflowStage {
  label: string
  color: string
  note?: string
}

interface SpecialtyWorkflowProps {
  stages: WorkflowStage[]
}

export default function SpecialtyWorkflow({ stages }: SpecialtyWorkflowProps) {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.sectionLabel}>Your Workflow</span>
          <h2 className={styles.sectionTitle}>Every stage. Every patient. One screen.</h2>
        </div>

        <div className={styles.stages}>
          {stages.map((stage, i) => (
            <div key={stage.label} className={styles.stageGroup}>
              <div className={styles.stage}>
                <span
                  className={styles.dot}
                  style={{ background: stage.color }}
                  aria-hidden="true"
                />
                <span className={styles.stageLabel}>{stage.label}</span>
              </div>
              {stage.note && (
                <span className={styles.stageNote}>{stage.note}</span>
              )}
              {i < stages.length - 1 && (
                <span className={styles.arrow} aria-hidden="true">→</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
