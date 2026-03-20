import styles from '../App.module.css'
import SectionHeader from '../components/SectionHeader'

export default function RequirementsPage() {
  return (
    <section className={styles.section}>
      <SectionHeader title="Requirements" subtitle="Partner context, goals, requirement gathering, personas, use cases, and MoSCoW tables." />
      <div className={styles.contentGrid}>
        <article className={styles.card}><h3>Partner Introduction and Project Background</h3><p>Placeholder content.</p></article>
        <article className={styles.card}><h3>Project Goals</h3><p>Placeholder content.</p></article>
        <article className={styles.card}><h3>Requirement Gathering</h3><p>Describe collection method, survey design, and data analysis.</p></article>
        <article className={styles.card}><h3>Personas</h3><p>Describe typical users and usage context.</p></article>
        <article className={styles.card}><h3>Use Cases</h3><p>Add use case diagram and complete use case list.</p></article>
      </div>

      <div className={styles.tableWrap}>
        <h3>MoSCoW Functional Requirements</h3>
        <table>
          <thead>
            <tr><th>ID</th><th>Requirement</th><th>MoSCoW</th><th>Rationale</th></tr>
          </thead>
          <tbody>
            <tr><td>F1</td><td>Placeholder requirement description</td><td>Must</td><td>Placeholder</td></tr>
            <tr><td>F2</td><td>Placeholder requirement description</td><td>Should</td><td>Placeholder</td></tr>
          </tbody>
        </table>
      </div>

      <div className={styles.tableWrap}>
        <h3>MoSCoW Non-Functional Requirements</h3>
        <table>
          <thead>
            <tr><th>ID</th><th>Category</th><th>Requirement</th><th>MoSCoW</th></tr>
          </thead>
          <tbody>
            <tr><td>NF1</td><td>Performance</td><td>Placeholder non-functional requirement</td><td>Must</td></tr>
            <tr><td>NF2</td><td>Maintainability</td><td>Placeholder non-functional requirement</td><td>Could</td></tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}
