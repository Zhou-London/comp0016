import styles from '../App.module.css'
import SectionHeader from '../components/SectionHeader'

export default function BlogPage() {
  return (
    <section className={styles.section}>
      <SectionHeader title="Development Blog and Monthly Video" subtitle="Track weekly/monthly progress snapshots and demo recordings." />
      <div className={styles.contentGrid}>
        <article className={styles.card}><h3>Weekly Blog Entries</h3><p>Placeholder list for week-by-week updates.</p></article>
        <article className={styles.card}><h3>Monthly Video Logs</h3><p>Placeholder embeds for monthly progress videos.</p></article>
      </div>
    </section>
  )
}
