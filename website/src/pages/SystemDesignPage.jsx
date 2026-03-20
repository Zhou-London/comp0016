import styles from '../App.module.css'
import SectionHeader from '../components/SectionHeader'

export default function SystemDesignPage() {
  return (
    <section className={styles.sectionAlt}>
      <SectionHeader title="System Design" subtitle="Architecture, diagrams, data storage model, packages, and APIs." />
      <div className={styles.contentGrid}>
        <article className={styles.card}><h3>System Architecture Diagram</h3><div className={styles.placeholderBox}>Add architecture diagram and component descriptions.</div></article>
        <article className={styles.card}><h3>Site Map</h3><p>Placeholder content (if applicable).</p></article>
        <article className={styles.card}><h3>Sequence Diagrams</h3><p>Placeholder content (if applicable).</p></article>
        <article className={styles.card}><h3>Design Patterns</h3><p>Placeholder content (if applicable).</p></article>
        <article className={styles.card}><h3>Class Diagrams</h3><p>Placeholder content (if applicable).</p></article>
        <article className={styles.card}><h3>Data Storage and Schema</h3><p>Placeholder content with ER diagram slot (if applicable).</p></article>
        <article className={styles.card}><h3>Packages and APIs</h3><p>List defined packages/APIs and usage.</p></article>
      </div>
    </section>
  )
}
