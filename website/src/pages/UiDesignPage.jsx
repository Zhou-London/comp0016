import styles from '../App.module.css'
import SectionHeader from '../components/SectionHeader'

export default function UiDesignPage() {
  return (
    <section className={styles.section}>
      <SectionHeader title="UI Design" subtitle="Design principles, sketches, and high-fidelity wireframe links." />
      <div className={styles.contentGrid}>
        <article className={styles.card}><h3>Design Principles</h3><p>Simplicity, consistency, visibility, feedback, tolerance.</p></article>
        <article className={styles.card}><h3>Hand-Drawn Sketches</h3><div className={styles.placeholderBox}>Add sketches/screenshots here.</div></article>
        <article className={styles.card}><h3>Interactive Wireframe URL</h3><p>Add Figma/prototype link placeholder.</p></article>
      </div>
    </section>
  )
}
