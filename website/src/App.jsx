import { useEffect, useRef } from 'react'
import { motion, useInView } from 'motion/react'
import styles from './App.module.css'

/* ─── Reusable fade-up wrapper ─── */
function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

/* ─── Nav ─── */
function Nav() {
  return (
    <nav className={styles.nav}>
      <a href="#" className={styles.navLogo}>
        <span className={styles.navLogoDot} />
        MotionInput<span className={styles.navLogoAccent}>Games</span>
      </a>
      <div className={styles.navLinks}>
        <a href="#about">About</a>
        <a href="#features">Features</a>
        <a href="#gallery">Gallery</a>
        <a href="#partners">Partners</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  )
}

/* ─── Hero ─── */
function Hero() {
  return (
    <header className={styles.hero}>
      <div className={styles.heroPattern} />
      <div className={styles.heroContent}>
        <motion.p
          className={styles.heroBadge}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          In collaboration with UCL &middot; Intel &middot; National Autistic Society &middot; Coca-Cola
        </motion.p>
        <motion.h1
          className={styles.heroTitle}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
        >
          Football is<br />
          for <span className={styles.heroTitleAccent}>Everyone</span>
        </motion.h1>
        <motion.p
          className={styles.heroSub}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
        >
          A camera-powered football game designed to help autistic children
          practise and play — no controllers needed, just move.
        </motion.p>
        <motion.div
          className={styles.heroCtas}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a href="#features" className={styles.btnPrimary}>Discover the Game</a>
          <a href="#contact" className={styles.btnOutline}>Get in Touch</a>
        </motion.div>
      </div>

      {/* Decorative football field lines */}
      <div className={styles.heroFieldLine} />
      <div className={styles.heroFieldCircle} />
    </header>
  )
}

/* ─── About ─── */
function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.aboutGrid}>
        <Reveal className={styles.aboutLeft}>
          <p className={styles.sectionLabel}>Our Mission</p>
          <h2 className={styles.sectionTitle}>Making football accessible through motion technology</h2>
        </Reveal>
        <Reveal className={styles.aboutRight} delay={0.15}>
          <p>
            MotionInput Games is a collaborative project with <strong>University College London (UCL)</strong>,
            the <strong>National Autistic Society</strong>, <strong>Intel</strong>, and <strong>Coca-Cola</strong>,
            united by the belief that sport should be inclusive.
          </p>
          <p>
            Our football game uses <strong>OpenCV-powered camera technology</strong> to capture players' real
            movements — hands, legs, and full body. No specialist hardware needed; just a standard webcam
            and the desire to play.
          </p>
          <p>
            We built this game to help <strong>autistic children</strong> develop coordination, confidence,
            and social connection through football — ahead of the <strong>FIFA World Cup 2026</strong>.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

/* ─── Features ─── */
const features = [
  {
    icon: '📷',
    title: 'Camera Motion Capture',
    desc: 'Using OpenCV and your webcam, the game tracks your hand and leg movements in real time. No controller or special equipment required.',
  },
  {
    icon: '⚽',
    title: 'Three Game Modes',
    desc: 'Choose from Penalty Shootout, Goal Keep, or Free Shot — each designed to develop different skills and keep the experience fresh.',
  },
  {
    icon: '🌍',
    title: 'Diverse Characters',
    desc: 'Select from a range of characters — male and female, representing different races and backgrounds. Everyone can see themselves on the pitch.',
  },
  {
    icon: '🧩',
    title: 'Designed for Inclusion',
    desc: 'Built in partnership with the National Autistic Society to ensure the experience is sensory-friendly, intuitive, and supportive.',
  },
]

function Features() {
  return (
    <section id="features" className={styles.features}>
      <Reveal>
        <p className={styles.sectionLabel}>The Game</p>
        <h2 className={styles.sectionTitle}>Play with your body,<br />not a controller</h2>
      </Reveal>
      <div className={styles.featureGrid}>
        {features.map((f, i) => (
          <Reveal key={f.title} delay={i * 0.1} className={styles.featureCard}>
            <span className={styles.featureIcon}>{f.icon}</span>
            <h3 className={styles.featureCardTitle}>{f.title}</h3>
            <p className={styles.featureCardDesc}>{f.desc}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

/* ─── Gallery ─── */
function Gallery() {
  const placeholders = [
    'Penalty Shootout Mode',
    'Goal Keep Mode',
    'Free Shot Mode',
    'Character Selection',
    'Motion Tracking in Action',
    'Multiplayer Session',
  ]
  return (
    <section id="gallery" className={styles.gallery}>
      <Reveal>
        <p className={styles.sectionLabel}>Gallery</p>
        <h2 className={styles.sectionTitle}>See it in action</h2>
      </Reveal>
      <div className={styles.galleryGrid}>
        {placeholders.map((label, i) => (
          <Reveal key={label} delay={i * 0.08} className={styles.galleryItem}>
            <div className={styles.galleryPlaceholder}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="m21 15-5-5L5 21" />
              </svg>
              <span>{label}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

/* ─── Partners ─── */
const partners = [
  { name: 'UCL', full: 'University College London' },
  { name: 'Intel', full: 'Intel Corporation' },
  { name: 'NAS', full: 'National Autistic Society' },
  { name: 'Coca-Cola', full: 'The Coca-Cola Company' },
]

function Partners() {
  return (
    <section id="partners" className={styles.partners}>
      <Reveal>
        <p className={styles.sectionLabel}>Our Partners</p>
        <h2 className={styles.sectionTitle}>Built together with</h2>
      </Reveal>
      <div className={styles.partnerGrid}>
        {partners.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.1} className={styles.partnerCard}>
            <div className={styles.partnerLogo}>
              {p.name}
            </div>
            <p className={styles.partnerFull}>{p.full}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

/* ─── Contact ─── */
function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.contactInner}>
        <Reveal>
          <p className={styles.sectionLabel}>Contact</p>
          <h2 className={styles.sectionTitleLight}>Let's connect</h2>
          <p className={styles.contactDesc}>
            Interested in our project, want to collaborate, or have questions?
            We'd love to hear from you.
          </p>
          <a href="mailto:info@motioninputgames.com" className={styles.contactEmail}>
            info@motioninputgames.com
          </a>
        </Reveal>
      </div>
    </section>
  )
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <p className={styles.footerBrand}>
          <span className={styles.navLogoDot} />
          MotionInput<span className={styles.navLogoAccent}>Games</span>
        </p>
        <p className={styles.footerCopy}>
          &copy; {new Date().getFullYear()} MotionInput Games &middot; A UCL Collaborative Project
        </p>
      </div>
    </footer>
  )
}

/* ─── App ─── */
export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Features />
      <Gallery />
      <Partners />
      <Contact />
      <Footer />
    </>
  )
}
