import styles from '../App.module.css'
import SectionHeader from '../components/SectionHeader'

export default function EvaluationPage() {
  return (
    <section className={styles.section}>
      <SectionHeader title="Evaluation" subtitle="Achievement summary, critical assessment, and future work." />
      <div className={styles.contentGrid}>
        <article className={styles.card}><h3>Summary of Achievements</h3><p>Include MoSCoW completion table, known bugs, and contribution tables.</p></article>
        <article className={styles.card}><h3>Critical Evaluation</h3><p>Evaluate UI/UX, functionality, stability, efficiency, compatibility, maintainability, and project management.</p></article>
        <article className={styles.card}><h3>Future Work</h3><p>Detailed and prioritised extension roadmap placeholder.</p></article>
      </div>
    </section>
  )
}
