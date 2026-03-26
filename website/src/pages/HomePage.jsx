import styles from '../App.module.css'
import antonyPhoto from '../assets/team/antony.png'
import marihaPhoto from '../assets/team/mariha.JPG'
import sunainPhoto from '../assets/team/sunain.png'
import williamPhoto from '../assets/team/William.jpg'
import zhouzhouPhoto from '../assets/team/zhouzhou.jpg'
import ImageWithCaption from "../components/ImageWithCaption.jsx";

export default function HomePage() {
  const teamMembers = [
    {
      name: 'Mariha Subhan',
      email: 'mariha.subhan.24@ucl.ac.uk',
      roles: 'Team Lead, Client Liaison, Game Programmer',
      bio: 'Passionate about accessible technology, robotics, and UI/UX design.',
      linkedin: 'https://www.linkedin.com/in/mariha-subhan-ba0672324/',
      photo: marihaPhoto,
    },
    {
      name: 'Sunain Syed',
      email: 'sunain.syed.24@ucl.ac.uk',
      roles: 'Lead Game Developer, Systems Architect',
      bio: 'Interested in architecture design, scalability and systems level programming',
      linkedin: 'https://www.linkedin.com/in/sunain-syed/',
      photo: sunainPhoto,
    },
    {
      name: 'William Xing',
      email: 'weimin.xing.22@ucl.ac.uk',
      roles: 'Game Programmer, QA & Testing Lead',
      bio: 'Passionate and creative software engineer skilled in systems development',
      linkedin: 'https://www.linkedin.com/in/wangweimin-xing-2bb1b8300/',
      photo: williamPhoto,
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
      photo: antonyPhoto,
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
          <h3>Introduction Video (2-4 minutes)</h3>
          <div className={styles.placeholderBox}>Embed YouTube/Vimeo video here (minimum 2 minutes, clear narration,
            high resolution).
          </div>
        </div>

        <div className={styles.abstractPanel}>
          <h2>Abstract</h2>
          <h3>Problem Statement</h3>
          <p>
            Children with autism often face significant barriers to participating in physical sports. In a traditional
            football game, they may face sensory overload in a fast paced, competitive environment, or be left behind
            due to a lack of accessible training tools designed with neurodivergent children in mind. In many football
            video games, they are then faced with the complexities and fine motor control required of traditional
            control schemes, such as keyboard and mouse or controllers. This limits the opportunity for physical
            development, social connection, and enjoyment of one of the world’s most popular sports.</p>
          <h3>Our Solution</h3>
          <p>
            Our team developed MotionInput Football Practice, a camera-based football game with 4 minigames: Free Kick,
            Goalkeeping, Penalty Shootout, and Obstacle Course. Built in Unity and powered by MotionInput technology
            using OpenCV, our game lets you play through natural body movements. No controllers or specialist hardware
            is required. Our game design philosophy is based on decision making rather than reaction time, reducing
            pressure and creating a calmer, more accessible environment to experience football. The game was developed
            in collaboration with the National Autistic Society, with inclusivity and accessibility at the core of every
            design decision.</p>
          <h3>Achievement and Impact</h3>
          <p>
            MotionInput Football Practice successfully delivers a fun, sensory-friendly football experience that is
            accessible to children who would otherwise be excluded from the sport. We’ve turned physical movement into
            gameplay – our game supports the development of motor skills, coordination and confidence in autistic
            children, and it provides an exciting and meaningful way to participate in football.</p>
        </div>

        <div className={styles.abstractPanel}>
          <h3>Technical Video (8 minutes)</h3>
          <div className={styles.placeholderBox}>Embed YouTube/Vimeo video here (minimum 8 minutes, clear narration,
            high resolution).
          </div>
        </div>

        <div className={styles.abstractPanel} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <h3>Project Timeline</h3>
          <p style={{marginTop: '1rem', color: 'var(--slate-700)'}}>
            Breakdown of project phases over the 24 weeks.
          </p>
          <p style={{marginTop: '1rem', color: 'var(--slate-700)', textAlign: 'center'}}>
            This is a condensed version of our GANTT chart. Here is a{' '}
            <a href="https://liveuclac-my.sharepoint.com/:f:/g/personal/zcabsub_ucl_ac_uk/IgD_KmXZsjvDRIJ6ZzeEt_XSAbN2WabdC0uR119GdSg2Rcg?e=6xENEr" target="_blank" rel="noreferrer"
               style={{color: 'var(--green-700)', textDecoration: 'underline'}}>
              link to our OneDrive folder
            </a>
            , with a more detailed version in a few different formats. You can view our chart in PDF or image form, or
            for the best view, download either the .gantt or .csv file and upload to{' '}
            <a href="https://www.onlinegantt.com/#/gantt" target="_blank" rel="noreferrer"
               style={{color: 'var(--green-700)', textDecoration: 'underline'}}>
              onlinegantt.com
            </a>
            .
          </p>
          <div style={{width: '80%', borderRadius: '10px', marginTop: '1rem'}}><ImageWithCaption
              src="/project timeline/project timeline.png" caption="Main menu screen layout"/></div>
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
                            style={{color: 'var(--green-600)', textDecoration: 'underline'}}
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
