import styles from '../App.module.css'
import SectionHeader from '../components/SectionHeader'

export default function TestingPage() {
  return (
    <section className={styles.sectionAlt}>
      <SectionHeader title="Testing" subtitle="Strategy, automation, user acceptance testing, and outcomes." />
      <div className={styles.contentGrid}>
        <article className={styles.card}><h3>Testing Strategy</h3><p>Explain rationale, tools, process, result, and conclusion for each test.</p></article>
        <article className={styles.card}><h3>Unit and Integration Testing</h3><p>Add automated tests and key coverage summary.</p></article>
        <article className={styles.card}><h3>Compatibility and Performance Testing</h3><p>Add platform/device and stress/performance findings.</p></article>
        <article className={styles.card}><h3>User Acceptance Testing</h3><p>Include simulated testers, test cases, partner feedback, and analysis.</p></article>
      </div>
    </section>
  )
}
