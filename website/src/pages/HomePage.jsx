import styles from '../App.module.css'
import zhouzhouPhoto from '../assets/team/zhouzhou.jpg'

export default function HomePage() {
  const teamMembers = [
    {
      name: 'Mariha Subhan',
      email: 'mariha.subhan.24@ucl.ac.uk',
      roles: 'Team Lead, Client Liaison, Game Programmer',
      bio: 'Bio / background placeholder',
      linkedin: 'https://www.linkedin.com/in/mariha-subhan-ba0672324/',
    },
    {
      name: 'Sunain Syed',
      email: 'sunain.syed.24@ucl.ac.uk',
      roles: 'Lead Game Developer, Systems Architect',
      bio: 'Bio / background placeholder',
      linkedin: 'https://www.linkedin.com/in/sunain-syed/',
    },
    {
      name: 'William Xing',
      email: 'weimin.xing.22@ucl.ac.uk',
      roles: 'Game Programmer, QA & Testing Lead',
      bio: 'Bio / background placeholder',
      linkedin: 'https://www.linkedin.com/in/wangweimin-xing-2bb1b8300/',
    },
    {
      name: 'Zhouzhou Zhang',
      email: 'zhouzhou.zhang.24@ucl.ac.uk',
      roles: 'Graphics & Visual Design',
      bio: 'CS Student at UCL passionate about performance engineering',
      linkedin: 'https://www.linkedin.com/in/zhouzhou-zhang-aa16b0282/',
      photo: zhouzhouPhoto,
    },
    {
      name: 'Antony Wiles',
      email: 'antony.wiles.24@ucl.ac.uk',
      roles: 'Game Programmer',
      bio: 'Bio / background placeholder',
      linkedin: 'https://www.linkedin.com/in/antony-wiles-8432892b8/',
    }
  ]

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
            {teamMembers.map((member) => (
              <article key={member.name} className={styles.teamCard}>
                {member.photo ? (
                  <img
                    src={member.photo}
                    alt={member.name}
                    style={{
                      width: '100%',
                      aspectRatio: '4 / 3',
                      objectFit: 'cover',
                      borderRadius: 10,
                      marginBottom: '0.6rem',
                    }}
                  />
                ) : (
                  <div className={styles.avatarPlaceholder}>Photo</div>
                )}
                <h3>{member.name}</h3>
                <p>Email: {member.email}</p>
                <p>Role(s): {member.roles}</p>
                <p>{member.bio}</p>
                {member.linkedin ? (
                  <p>
                    LinkedIn:{' '}
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: 'var(--green-600)', textDecoration: 'underline' }}
                    >
                      {member.name}
                    </a>
                  </p>
                ) : (
                  <p>LinkedIn: add profile link</p>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
