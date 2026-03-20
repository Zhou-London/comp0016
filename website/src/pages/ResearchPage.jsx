import styles from '../App.module.css'
import SectionHeader from '../components/SectionHeader'

export default function ResearchPage() {
  return (
    <section className={styles.sectionAlt}>
      <SectionHeader title="Research" subtitle="Related projects, technology comparison, device/algorithm choices, and references." />
      <div className={styles.contentGrid}>
        <article className={styles.card}><h3>Related Projects Review</h3><p>List similar projects with features and lessons learned.</p></article>
        <article className={styles.card}><h3>Technology Review</h3><p>Compare alternatives and explain selected stack.</p></article>
        <article className={styles.card}><h3>Technical Decision Summary</h3><p>Summarise chosen architecture and trade-offs.</p></article>
        <article className={styles.card}><h3>References (IEEE)</h3><p>Add numbered IEEE references and in-text citations.</p></article>
      </div>
    </section>
  )
}
