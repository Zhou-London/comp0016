import styles from '../App.module.css'
import SectionHeader from '../components/SectionHeader'

export default function AppendicesPage() {
  return (
    <section className={styles.sectionAlt}>
      <SectionHeader title="Appendices" subtitle="Manuals, legal topics, dependencies, contributions, and credits." />
      <ul className={styles.linkList}>
        <li>User Manual (with screenshots)</li>
        <li>Deployment Manual (step-by-step)</li>
        <li>GDPR and Privacy of Data</li>
        <li>Dependencies</li>
        <li>Contributions</li>
        <li>Credits</li>
      </ul>
      <div className={styles.noteCard}>
        If authentication is needed for deployment, include live URL and test credentials for each user type.
      </div>
    </section>
  )
}
