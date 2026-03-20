import styles from '../App.module.css'

export default function HomePage() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <p className={styles.heroBadge}>COMP0016 Report Website · Static Version</p>
        <h1 className={styles.heroTitle}>MotionInput Football Practice</h1>
        <p className={styles.heroSub}>
          Camera-based football training minigames designed to support accessible and engaging movement practice.
        </p>

        <div className={styles.abstractPanel}>
          <h2>Abstract</h2>
          <h3>Problem Statement</h3>
          <p>
            Placeholder paragraph. Explain the real-world problem and project motivation in detail, including the gap in current
            football accessibility/training experiences and why this audience needs a tailored solution.
          </p>
          <h3>Our Solution</h3>
          <p>
            Placeholder paragraph. Summarise the application solution delivered in MotionInput Football Practice,
            including core architecture and key experiences delivered across minigames and settings.
          </p>
          <h3>Achievement and Impact</h3>
          <p>
            Placeholder paragraph. Describe major outcomes, user value, measurable improvements, and expected long-term impact.
          </p>
        </div>

        <div className={styles.mediaGrid}>
          <div className={styles.mediaCard}>
            <h3>Introduction Video (8 minutes)</h3>
            <div className={styles.placeholderBox}>Embed YouTube/Vimeo video here (minimum 8 minutes, clear narration, high resolution).</div>
          </div>
          <div className={styles.mediaCard}>
            <h3>Project Management Gantt Chart</h3>
            <div className={styles.placeholderBox}>Add readable chart image for Oct 20 2025 - Mar 27 2026.</div>
          </div>
        </div>

        <div className={styles.teamBlock}>
          <h2>The Development Team</h2>
          <div className={styles.teamGrid}>
            {['Team Member 1', 'Team Member 2', 'Team Member 3', 'Team Member 4', 'Team Member 5'].map((name) => (
              <article key={name} className={styles.teamCard}>
                <div className={styles.avatarPlaceholder}>Photo</div>
                <h3>{name}</h3>
                <p>Email: name@ucl.ac.uk</p>
                <p>Role(s): Client liaison, UI design, researcher, programmer, report editor, tester</p>
                <p>Bio / background placeholder</p>
                <p>LinkedIn: add profile link</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
