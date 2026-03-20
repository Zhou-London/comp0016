import styles from '../App.module.css'
import SectionHeader from '../components/SectionHeader'

export default function ImplementationPage() {
  return (
    <section className={styles.section}>
      <SectionHeader title="Implementation" subtitle="Key features and technical breakdown by game systems." />
      <div className={styles.contentGrid}>
        <article className={styles.card}><h3>Game Scenes and Flow</h3><p>Use the content from project docs as high-level architecture narrative.</p></article>
        <article className={styles.card}><h3>Minigames Overview</h3><p>Freekick, Goalkeeping, Penalty Shootout, Obstacle Course + shared systems.</p></article>
        <article className={styles.card}><h3>Difficulty and Mode Variants</h3><p>Easy/hard and endless/limited mode descriptions.</p></article>
        <article className={styles.card}><h3>Graphics</h3><p>Placeholder for rendering pipeline and assets.</p></article>
        <article className={styles.card}><h3>Audio System</h3><p>Placeholder for mixer/events/music and effects architecture.</p></article>
        <article className={styles.card}><h3>Settings</h3><p>Placeholder for configuration and persistence implementation.</p></article>
        <article className={styles.card}><h3>Motion Input</h3><p>Placeholder for camera/input processing flow and integration points.</p></article>
      </div>
    </section>
  )
}
