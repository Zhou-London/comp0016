import { useEffect, useRef } from 'react'
import styles from '../App.module.css'
import SectionHeader from '../components/SectionHeader'

/* ── Scroll-reveal hook (shared pattern with RequirementsPage) ── */
function useScrollReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('revealed')
          observer.unobserve(el)
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return ref
}

function Reveal({ children, className = '', delay = 0, style = {} }) {
  const ref = useScrollReveal()
  return (
    <div ref={ref} className={`reveal-on-scroll ${className}`} style={{ ...style, transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

/* ── MoSCoW badge ── */
const moscowAccent = {
  must:   { bg: '#dcfce7', color: '#166534', border: '#86efac' },
  should: { bg: '#dbeafe', color: '#1e40af', border: '#93c5fd' },
  could:  { bg: '#fef9c3', color: '#854d0e', border: '#fde68a' },
  wont:   { bg: '#f3f4f6', color: '#4b5563', border: '#d1d5db' },
}

function MoscowBadge({ priority }) {
  const key = priority.toLowerCase().replace(/[^a-z]/g, '')
  const s = moscowAccent[key] || moscowAccent.could
  return (
    <span style={{
      display: 'inline-block', padding: '3px 10px', borderRadius: 20,
      fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.03em',
      background: s.bg, color: s.color, border: `1px solid ${s.border}`,
      whiteSpace: 'nowrap',
    }}>
      {priority}
    </span>
  )
}

/* ── Status badge ── */
const statusStyles = {
  completed:   { bg: '#dcfce7', color: '#166534', icon: '✓' },
  partial:     { bg: '#fef9c3', color: '#854d0e', icon: '◐' },
  'not planned': { bg: '#f3f4f6', color: '#6b7280', icon: '—' },
}

function StatusBadge({ status }) {
  const s = statusStyles[status] || statusStyles.partial
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 4,
      padding: '3px 10px', borderRadius: 20,
      fontSize: '0.78rem', fontWeight: 700,
      background: s.bg, color: s.color, whiteSpace: 'nowrap',
    }}>
      {s.icon} {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  )
}

/* ── Evaluation score bar ── */
function ScoreBar({ score, max = 10, color = '#488328' }) {
  const pct = (score / max) * 100
  return (
    <div style={{ marginBottom: '0.5rem' }}>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 4, fontSize: '0.82rem', fontWeight: 700, color: 'var(--green-900)' }}>
        <span>{score}/{max}</span>
      </div>
      <div style={{ height: 8, borderRadius: 4, background: '#e2e8f0', overflow: 'hidden' }}>
        <div style={{ height: '100%', width: `${pct}%`, borderRadius: 4, background: `linear-gradient(90deg, ${color}, ${color}cc)`, transition: 'width 1s ease' }} />
      </div>
    </div>
  )
}

/* ── Achievement table data ── */
const functionalReqs = [
  ['F1',  'Penalty Shootout minigame with power bar and directional shooting', 'Must', 'completed', 'Sunain, Mariha'],
  ['F2',  'Free Kick minigame with trajectory selection and spin mechanic', 'Must', 'completed', 'Sunain, Antony'],
  ['F3',  'Goalkeeping minigame with hand gesture diving', 'Must', 'completed', 'Sunain, William'],
  ['F4',  'Obstacle Course with diverse football skill challenges', 'Must', 'completed', 'Sunain, Mariha, Antony'],
  ['F5',  'MotionInput Engine integration for full-body gesture recognition', 'Must', 'completed', 'Sunain, William'],
  ['F6',  'Configurable difficulty levels (Normal / Hard) per minigame', 'Must', 'completed', 'Sunain, Antony'],
  ['F7',  'Adjustable game-speed setting with auto-speed option', 'Must', 'completed', 'Sunain'],
  ['F8',  'Simple, visually clear main menu with quick navigation', 'Must', 'completed', 'Mariha, Zhouzhou'],
  ['F9',  'Hands-only mode toggle for accessibility', 'Must', 'completed', 'Sunain'],
  ['F10', 'Simulated 5v5 full-match mode vs. AI', 'Should', 'completed', 'Sunain, Antony'],
  ['F11', 'Token-based reward system (1 coin per point scored)', 'Should', 'completed', 'Mariha'],
  ['F12', 'In-game shop with cosmetic items (avatars, footballs, stadiums)', 'Should', 'completed', 'Mariha, Zhouzhou'],
  ['F13', 'Clear, frequent, positive visual and audio feedback', 'Should', 'completed', 'Mariha, Sunain'],
  ['F14', 'Persistent classroom profile (tokens, items, settings)', 'Should', 'completed', 'Sunain'],
  ['F15', 'Full-match pauses at key moments for player actions', 'Should', 'completed', 'Sunain'],
  ['F16', 'Configurable match duration (score-based or action-based)', 'Could', 'partial', 'Sunain'],
  ['F17', 'High-score tracking per minigame', 'Could', 'partial', 'Mariha'],
  ['F18', 'Real-time free-flowing full-match gameplay', 'Won\u2019t', 'not planned', '\u2014'],
  ['F19', 'Online or offline multiplayer modes', 'Won\u2019t', 'not planned', '\u2014'],
]

const nonFunctionalReqs = [
  ['NF1',  'Performance',   '\u226530 FPS on standard classroom PCs', 'Must', 'completed', 'Sunain'],
  ['NF2',  'Performance',   'Gesture recognition latency \u2264100ms', 'Must', 'completed', 'Sunain, William'],
  ['NF3',  'Usability',     'Sensory-friendly UI design principles', 'Must', 'completed', 'Mariha, Zhouzhou'],
  ['NF4',  'Usability',     'New user can start playing within 2 minutes', 'Must', 'completed', 'Mariha'],
  ['NF5',  'Accessibility', 'WCAG 2.2 compliance where applicable', 'Must', 'completed', 'All'],
  ['NF6',  'Accessibility', 'Customisable visual and audio feedback', 'Must', 'completed', 'Sunain, Mariha'],
  ['NF7',  'Security',      'No personal data collection or transmission', 'Must', 'completed', 'All'],
  ['NF8',  'Reliability',   'Graceful handling of MotionInput failures', 'Must', 'completed', 'Sunain'],
  ['NF9',  'Maintainability','Modular architecture with composition roots', 'Should', 'completed', 'Sunain'],
  ['NF10', 'Maintainability','Automated unit and integration tests', 'Should', 'completed', 'William, Sunain'],
  ['NF11', 'Extensibility', 'Add new minigames without modifying core', 'Should', 'completed', 'Sunain'],
  ['NF12', 'Portability',   'Runs on standard Windows PCs with camera', 'Must', 'completed', 'All'],
  ['NF13', 'Sustainability','Local processing only, energy-efficient rendering', 'Should', 'completed', 'Sunain'],
  ['NF14', 'Open Source',   'Public source code and documentation', 'Could', 'partial', 'All'],
]

/* ── Critical evaluation data ── */
const evaluationAreas = [
  {
    title: 'User Interface / User Experience',
    icon: '\uD83C\uDFA8',
    score: 8,
    strengths: [
      'Clean, sensory-friendly design with calming colour palette and consistent layout',
      'Simple navigation structure lets new users start playing within 2 minutes',
      'Clear visual feedback with celebration effects and score updates after each action',
    ],
    improvements: [
      'Menu transitions could benefit from smoother animations',
      'Some UI elements could be larger for younger children with motor difficulties',
    ],
  },
  {
    title: 'Functionality',
    icon: '\u2699\uFE0F',
    score: 9,
    strengths: [
      'All four core minigames fully implemented with both difficulty modes',
      'Full-match mode successfully combines minigame elements into a cohesive experience',
      'Token economy and shop system provide effective positive reinforcement',
    ],
    improvements: [
      'High-score tracking only partially implemented',
      'Match duration configuration limited to score-based mode only',
    ],
  },
  {
    title: 'Stability',
    icon: '\uD83D\uDEE1\uFE0F',
    score: 8,
    strengths: [
      'Graceful fallback when MotionInput Engine encounters errors',
      'No critical crashes observed during extended playtesting sessions',
      'State machine architecture prevents invalid game states',
    ],
    improvements: [
      'Occasional frame drops during complex Obstacle Course segments',
      'Edge cases in gesture recognition can cause momentary unresponsiveness',
    ],
  },
  {
    title: 'Efficiency',
    icon: '\u26A1',
    score: 8,
    strengths: [
      'Consistent 30+ FPS maintained on target hardware',
      'Gesture recognition latency within 100ms target threshold',
      'Unity URP rendering optimisations reduce GPU workload',
    ],
    improvements: [
      'Memory usage could be further optimised for lower-spec classroom machines',
      'Initial loading time could be reduced with asset streaming',
    ],
  },
  {
    title: 'Compatibility',
    icon: '\uD83D\uDD0C',
    score: 7,
    strengths: [
      'Runs on standard Windows classroom PCs without specialised hardware',
      'Works with multiple webcam models tested across different environments',
      'No cloud dependencies \u2014 fully offline operation',
    ],
    improvements: [
      'macOS and Linux support not currently available',
      'Limited testing on very low-end hardware configurations',
    ],
  },
  {
    title: 'Maintainability',
    icon: '\uD83D\uDD27',
    score: 9,
    strengths: [
      'Modular architecture with composition roots and adapter patterns',
      'Automated test suite covers core game logic and state machines',
      'Clear separation between minigame modules and shared systems',
    ],
    improvements: [
      'Some minigame-specific scripts could benefit from further refactoring',
      'Documentation for the MotionInput integration layer could be expanded',
    ],
  },
  {
    title: 'Project Management',
    icon: '\uD83D\uDCCB',
    score: 8,
    strengths: [
      'Consistent weekly meetings with all partners and the UCL supervisor',
      'Iterative development cycle aligned with partner feedback',
      'Clear task allocation and regular progress tracking via Gantt chart',
    ],
    improvements: [
      'Earlier integration testing with NAS classroom environments would have been beneficial',
      'More formal sprint retrospectives could have been conducted',
    ],
  },
]

/* ── Future work items ── */
const futureWork = [
  {
    title: 'Multiplayer Support',
    icon: '\uD83D\uDC65',
    description: 'Introduce local and online multiplayer modes where children can play cooperatively or competitively. This would encourage social interaction and collaborative play in both classroom and home settings. The architecture already supports multiple player inputs through MotionInput, so the primary work involves game state synchronisation and UI modifications for split-screen or shared-screen modes.',
    priority: 'High',
  },
  {
    title: 'Additional Minigames',
    icon: '\uD83C\uDFAE',
    description: 'Develop new football skill challenges such as dribbling drills, corner kick practice, and heading accuracy games. The modular architecture and composition root pattern make it straightforward to add new minigames without modifying core systems. Each new minigame would follow the existing template of service classes, adapters, and log categories.',
    priority: 'High',
  },
  {
    title: 'Progress Analytics Dashboard',
    icon: '\uD83D\uDCCA',
    description: 'Build a teacher-facing analytics dashboard that tracks individual and class-wide progress over time. Metrics could include session duration, scores per minigame, improvement trends, and motor skill development indicators. This would help teachers tailor their use of the game to each child\'s needs and provide evidence for educational reviews.',
    priority: 'Medium',
  },
  {
    title: 'Cross-Platform Support',
    icon: '\uD83D\uDCBB',
    description: 'Port the game to macOS and potentially web browsers (via WebGL) to expand accessibility beyond Windows-only classroom environments. Some families and schools use Chromebooks or Macs, and a web-based version would remove installation barriers entirely.',
    priority: 'Medium',
  },
  {
    title: 'AI-Adaptive Difficulty',
    icon: '\uD83E\uDD16',
    description: 'Implement machine learning-based difficulty adjustment that automatically adapts game parameters (ball speed, timing windows, number of distractors) based on the player\'s performance patterns. This would provide a truly personalised experience where the game learns each child\'s comfort zone and gently pushes them to improve.',
    priority: 'Medium',
  },
  {
    title: 'Haptic and Audio Feedback Enhancements',
    icon: '\uD83D\uDD0A',
    description: 'Explore integration with haptic feedback devices and spatial audio to provide richer sensory experiences for children who respond well to tactile and auditory cues. This would include customisable sound profiles (e.g., nature sounds vs. stadium atmosphere) and optional vibration feedback through compatible controllers for children who benefit from it.',
    priority: 'Low',
  },
]

/* ── Priority badge ── */
const priorityStyles = {
  High:   { bg: '#fef2f2', color: '#991b1b', border: '#fecaca' },
  Medium: { bg: '#fef9c3', color: '#854d0e', border: '#fde68a' },
  Low:    { bg: '#f0fdf4', color: '#166534', border: '#bbf7d0' },
}

function PriorityBadge({ priority }) {
  const s = priorityStyles[priority] || priorityStyles.Medium
  return (
    <span style={{
      display: 'inline-block', padding: '2px 10px', borderRadius: 12,
      fontSize: '0.75rem', fontWeight: 700,
      background: s.bg, color: s.color, border: `1px solid ${s.border}`,
    }}>
      {priority} Priority
    </span>
  )
}

/* ══════════════════════════════════════════ */
export default function EvaluationPage() {
  const allReqs = [...functionalReqs, ...nonFunctionalReqs]
  const completed = allReqs.filter(r => r.includes('completed')).length
  const partial = allReqs.filter(r => r.includes('partial')).length
  const notPlanned = allReqs.filter(r => r.includes('not planned')).length
  const total = allReqs.length

  return (
    <section className={styles.section}>
      <SectionHeader title="Evaluation" subtitle="Achievement summary, critical assessment, and future work." />

      {/* ────────── Summary Stats ────────── */}
      <Reveal>
        <div style={{
          maxWidth: 1100, margin: '0 auto 1rem', display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.8rem',
        }}>
          {[
            { label: 'Total Requirements', value: total, color: '#1e3a5f', bg: '#eef5ff', icon: '\uD83D\uDCCB' },
            { label: 'Completed', value: completed, color: '#166534', bg: '#dcfce7', icon: '\u2705' },
            { label: 'Partially Done', value: partial, color: '#854d0e', bg: '#fef9c3', icon: '\uD83D\uDD36' },
            { label: 'Not Planned', value: notPlanned, color: '#6b7280', bg: '#f3f4f6', icon: '\u2014' },
          ].map((stat) => (
            <div key={stat.label} style={{
              textAlign: 'center', padding: '1.2rem 1rem', borderRadius: 12,
              background: stat.bg, border: `1px solid ${stat.color}20`,
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
            }}>
              <div style={{ fontSize: '1.2rem', marginBottom: '0.2rem' }}>{stat.icon}</div>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: stat.color }}>{stat.value}</div>
              <div style={{ fontSize: '0.82rem', fontWeight: 600, color: stat.color, opacity: 0.8 }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </Reveal>

      {/* ────────── MoSCoW Achievement Table — Functional ────────── */}
      <Reveal delay={100}>
        <div className={styles.tableWrap}>
          <h3>Functional Requirements — Achievement Summary</h3>
          <table>
            <thead>
              <tr>
                <th style={{ width: 40 }}>ID</th>
                <th>Requirement</th>
                <th style={{ width: 80 }}>MoSCoW</th>
                <th style={{ width: 100 }}>Status</th>
                <th style={{ width: 140 }}>Contributors</th>
              </tr>
            </thead>
            <tbody>
              {functionalReqs.map(([id, req, moscow, status, contributors], i) => (
                <tr key={id} style={{ background: i % 2 === 0 ? '#fff' : '#f8fafc' }}>
                  <td><strong>{id}</strong></td>
                  <td>{req}</td>
                  <td style={{ textAlign: 'center' }}><MoscowBadge priority={moscow} /></td>
                  <td style={{ textAlign: 'center' }}><StatusBadge status={status} /></td>
                  <td style={{ fontSize: '0.82rem' }}>{contributors}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>

      {/* ────────── MoSCoW Achievement Table — Non-Functional ────────── */}
      <Reveal delay={100}>
        <div className={styles.tableWrap} style={{ marginTop: '1rem' }}>
          <h3>Non-Functional Requirements — Achievement Summary</h3>
          <table>
            <thead>
              <tr>
                <th style={{ width: 40 }}>ID</th>
                <th style={{ width: 110 }}>Category</th>
                <th>Requirement</th>
                <th style={{ width: 80 }}>MoSCoW</th>
                <th style={{ width: 100 }}>Status</th>
                <th style={{ width: 110 }}>Contributors</th>
              </tr>
            </thead>
            <tbody>
              {nonFunctionalReqs.map(([id, category, req, moscow, status, contributors], i) => (
                <tr key={id} style={{ background: i % 2 === 0 ? '#fff' : '#f8fafc' }}>
                  <td><strong>{id}</strong></td>
                  <td><span style={{ fontWeight: 600, fontSize: '0.84rem' }}>{category}</span></td>
                  <td>{req}</td>
                  <td style={{ textAlign: 'center' }}><MoscowBadge priority={moscow} /></td>
                  <td style={{ textAlign: 'center' }}><StatusBadge status={status} /></td>
                  <td style={{ fontSize: '0.82rem' }}>{contributors}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>

      {/* ────────── Known Bugs ────────── */}
      <Reveal delay={100}>
        <div className={styles.tableWrap} style={{ marginTop: '1rem' }}>
          <h3>Known Bugs</h3>
          <p style={{ fontSize: '0.88rem', color: 'var(--slate-500)', marginBottom: '0.5rem' }}>
            The following known issues have been identified and documented for future resolution.
          </p>
          <table>
            <thead>
              <tr>
                <th style={{ width: 40 }}>ID</th>
                <th style={{ width: 90 }}>Severity</th>
                <th>Description</th>
                <th style={{ width: 130 }}>Affected Area</th>
                <th style={{ width: 110 }}>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={5} style={{ textAlign: 'center', color: 'var(--slate-400)', fontStyle: 'italic', padding: '1.5rem' }}>
                  Bug details to be added — awaiting documentation from team.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Reveal>

      {/* ── section divider ── */}
      <div style={{ maxWidth: 1100, margin: '1.5rem auto 0.5rem', borderTop: '2px solid #e2e8f0' }} />

      {/* ────────── Individual Contribution — System Development ────────── */}
      <Reveal delay={100}>
        <div className={styles.tableWrap} style={{ marginTop: '1rem' }}>
          <h3>Individual Contribution — System Development</h3>
          <table>
            <thead>
              <tr>
                <th>Team Member</th>
                <th>Key Contributions</th>
                <th style={{ width: 100 }}>Share (%)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Mariha Subhan', 'Team lead, client liaison, menu UI, shop system, reward mechanics'],
                ['Sunain Syed',  'Lead game developer, systems architect, all minigames, MotionInput integration, state machines'],
                ['William Xing', 'QA & testing lead, gesture recognition testing, integration tests'],
                ['Zhouzhou Zhang', 'Graphics & visual design, UI assets, stadium backgrounds'],
                ['Antony Wiles', 'Game programmer, Free Kick mechanics, Obstacle Course tasks, difficulty system'],
              ].map(([name, contribs], i) => (
                <tr key={name} style={{ background: i % 2 === 0 ? '#fff' : '#f8fafc' }}>
                  <td><strong>{name}</strong></td>
                  <td style={{ fontSize: '0.86rem' }}>{contribs}</td>
                  <td style={{ textAlign: 'center', fontWeight: 600, color: 'var(--slate-400)' }}>&mdash;</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>

      {/* ────────── Individual Contribution — Report Website ────────── */}
      <Reveal delay={100}>
        <div className={styles.tableWrap} style={{ marginTop: '1rem' }}>
          <h3>Individual Contribution — Report Website</h3>
          <table>
            <thead>
              <tr>
                <th>Team Member</th>
                <th>Key Contributions</th>
                <th style={{ width: 100 }}>Share (%)</th>
              </tr>
            </thead>
            <tbody>
              {['Mariha Subhan', 'Sunain Syed', 'William Xing', 'Zhouzhou Zhang', 'Antony Wiles'].map((name, i) => (
                <tr key={name} style={{ background: i % 2 === 0 ? '#fff' : '#f8fafc' }}>
                  <td><strong>{name}</strong></td>
                  <td style={{ fontSize: '0.86rem', color: 'var(--slate-400)', fontStyle: 'italic' }}>To be filled in</td>
                  <td style={{ textAlign: 'center', fontWeight: 600, color: 'var(--slate-400)' }}>&mdash;</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>

      {/* ── section divider ── */}
      <div style={{ maxWidth: 1100, margin: '1.5rem auto 0.5rem', borderTop: '2px solid #e2e8f0' }} />

      {/* ────────── Critical Evaluation ────────── */}
      <Reveal>
        <div className={styles.contentGrid} style={{ marginTop: '1.5rem' }}>
          <article className={styles.card} style={{ gridColumn: 'span 3' }}>
            <h3>Critical Evaluation of the Project</h3>
            <p style={{ color: 'var(--slate-600)' }}>
              Each area is assessed on a 1&ndash;10 scale based on team self-evaluation, partner feedback, and testing results.
            </p>
          </article>
        </div>
      </Reveal>

      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.8rem' }}>
        {evaluationAreas.map((area, idx) => {
          const isLastOdd = idx === evaluationAreas.length - 1 && evaluationAreas.length % 2 !== 0
          return (
          <Reveal key={area.title} delay={idx * 80} style={isLastOdd ? { gridColumn: '1 / -1' } : {}}>
            <div style={{
              background: '#fff', borderRadius: 12, padding: '1.1rem 1.2rem',
              border: '1px solid var(--color-border)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.6rem' }}>
                <span style={{ fontSize: '1.3rem' }}>{area.icon}</span>
                <h4 style={{ margin: 0, color: 'var(--green-900)', fontSize: '1rem' }}>{area.title}</h4>
              </div>
              <ScoreBar score={area.score} />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem', marginTop: '0.5rem' }}>
                <div>
                  <p style={{ fontSize: '0.78rem', fontWeight: 700, color: '#166534', marginBottom: '0.3rem' }}>{'\u2713'} Strengths</p>
                  <ul style={{ paddingLeft: '1rem', margin: 0, fontSize: '0.82rem', color: 'var(--slate-700)' }}>
                    {area.strengths.map((s, i) => <li key={i} style={{ marginBottom: 3, lineHeight: 1.4 }}>{s}</li>)}
                  </ul>
                </div>
                <div>
                  <p style={{ fontSize: '0.78rem', fontWeight: 700, color: '#854d0e', marginBottom: '0.3rem' }}>{'\u25B3'} Areas for Improvement</p>
                  <ul style={{ paddingLeft: '1rem', margin: 0, fontSize: '0.82rem', color: 'var(--slate-700)' }}>
                    {area.improvements.map((s, i) => <li key={i} style={{ marginBottom: 3, lineHeight: 1.4 }}>{s}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
          )
        })}
      </div>

      {/* ── section divider ── */}
      <div style={{ maxWidth: 1100, margin: '1.5rem auto 0.5rem', borderTop: '2px solid #e2e8f0' }} />

      {/* ────────── Future Work ────────── */}
      <Reveal>
        <div className={styles.contentGrid} style={{ marginTop: '1.5rem' }}>
          <article className={styles.card} style={{ gridColumn: 'span 3' }}>
            <h3>Future Work</h3>
            <p style={{ color: 'var(--slate-600)' }}>
              The following extensions are prioritised based on partner feedback, technical feasibility, and potential impact on the target audience.
            </p>
          </article>
        </div>
      </Reveal>

      <div style={{ maxWidth: 1100, margin: '0.5rem auto 0', display: 'grid', gap: '0.7rem' }}>
        {futureWork.map((item, idx) => (
          <Reveal key={item.title} delay={idx * 80}>
            <div style={{
              background: '#fff', borderRadius: 12, padding: '1rem 1.2rem',
              border: '1px solid var(--color-border)',
              display: 'flex', gap: '1rem', alignItems: 'flex-start',
            }}>
              <span style={{
                flexShrink: 0, width: 44, height: 44, borderRadius: 10,
                background: 'linear-gradient(135deg, #eef5ff, #f0fdf4)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.4rem', border: '1px solid #e2e8f0',
              }}>
                {item.icon}
              </span>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.3rem', flexWrap: 'wrap' }}>
                  <h4 style={{ margin: 0, color: 'var(--green-900)', fontSize: '0.95rem', whiteSpace: 'nowrap' }}>{item.title}</h4>
                  <PriorityBadge priority={item.priority} />
                </div>
                <p style={{ margin: 0, fontSize: '0.87rem', color: 'var(--slate-700)', lineHeight: 1.55 }}>
                  {item.description}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
