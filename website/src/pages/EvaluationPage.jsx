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


/* ── Achievement table data ── */
const functionalReqs = [
  ['F1',  'Penalty Shootout minigame with power bar and directional shooting', 'Must', 'completed', 'Antony', ''],
  ['F2',  'Free Kick minigame with trajectory selection and spin mechanic', 'Must', 'completed', 'Sunain', ''],
  ['F3',  'Goalkeeping minigame with hand gesture diving', 'Must', 'completed', 'William', ''],
  ['F4',  'Obstacle Course with diverse football skill challenges', 'Must', 'completed', 'Mariha', ''],
  ['F5',  'MotionInput Engine integration for full-body gesture recognition', 'Must', 'completed', 'Mariha', ''],
  ['F6',  'Configurable difficulty levels (Normal / Hard) per minigame', 'Must', 'completed', 'Mariha, Sunain, William, Antony', ''],
  ['F7',  'Adjustable game-speed setting with auto-speed option', 'Must', 'completed', 'Mariha, Sunain, William, Antony', ''],
  ['F8',  'Simple, visually clear main menu with quick navigation', 'Must', 'completed', 'Mariha', ''],
  ['F9',  'Hands-only mode toggle for accessibility', 'Must', 'completed', 'Mariha', ''],
  ['F10', 'Simulated 5v5 full-match mode vs. AI', 'Should', 'partial', 'William', 'Started development on a turn-based match minigame however ran out of time.'],
  ['F11', 'Token-based reward system (1 coin per point scored)', 'Should', 'partial', 'Mariha, Sunain, William, Antony', 'Score systems have been implemented in each minigame but not coins.'],
  ['F12', 'In-game shop with cosmetic items (avatars, footballs, stadiums)', 'Should', 'Not completed', '\u2014', ''],
  ['F13', 'Clear, frequent, positive visual and audio feedback', 'Should', 'completed', 'Mariha, Sunain', ''],
  ['F14', 'Persistent classroom profile (tokens, items, settings)', 'Should', 'partial', 'Mariha', 'Game settings that persist between sessions have been implemented, however items/coins have not.'],
  ['F15', 'Full-match pauses at key moments for player actions', 'Should', 'partial', 'William', 'Started development on a turn-based match minigame however ran out of time.'],
  ['F16', 'Configurable match duration (score-based or action-based)', 'Could', 'completed', 'Mariha, Sunain, William, Antony', ''],
  ['F17', 'High-score tracking per minigame', 'Could', 'partial', 'Mariha, Sunain, William, Antony', 'We found out that high score tracking counts as storing data about the children and so we were advised not to implement this. Instead, we implemented "best streak" that only displays for that session.'],
  ['F18', 'Real-time free-flowing full-match gameplay', 'Won\u2019t', 'not planned', '\u2014', ''],
  ['F19', 'Online or offline multiplayer modes', 'Won\u2019t', 'not planned', '\u2014', ''],
]

const nonFunctionalReqs = [
  ['NF1',  'Performance',   '\u226530 FPS on standard classroom PCs', 'Must', 'completed', 'All'],
  ['NF2',  'Performance',   'Gesture recognition latency \u2264100ms', 'Must', 'completed', 'All'],
  ['NF3',  'Usability',     'Sensory-friendly UI design principles', 'Must', 'completed', 'Mariha, Zhouzhou'],
  ['NF4',  'Usability',     'New user can start playing within 2 minutes', 'Must', 'completed', 'Mariha'],
  ['NF5',  'Accessibility', 'WCAG 2.2 compliance where applicable', 'Must', 'completed', 'All'],
  ['NF6',  'Accessibility', 'Customisable visual and audio feedback', 'Must', 'completed', 'Sunain, Mariha'],
  ['NF7',  'Security',      'No personal data collection or transmission', 'Must', 'completed', 'All'],
  ['NF8',  'Reliability',   'Graceful handling of MotionInput failures', 'Must', 'completed', 'Mariha'],
  ['NF9',  'Maintainability','Modular architecture with composition roots', 'Should', 'completed', 'Sunain'],
  ['NF10', 'Maintainability','Automated unit and integration tests', 'Should', 'completed', 'William'],
  ['NF11', 'Extensibility', 'Add new minigames without modifying core', 'Should', 'completed', 'All'],
  ['NF12', 'Portability',   'Runs on standard Windows PCs with camera', 'Must', 'completed', 'All'],
  ['NF13', 'Sustainability','Local processing only, energy-efficient rendering', 'Should', 'completed', 'All'],
  ['NF14', 'Legal & Compliance',   'Closed source code and documentation', 'Must', 'completed', 'All'],
]

// bug list
const bugs = [
  ['B1', 'Medium', 'JumpAnimScript instances are found via FindObjectsByType on every save/task completion, causing potential performance cost in scenes with large crowds', 'Goalkeeping, Obstacle Course', 'Open'],
  ['B2', 'Medium', 'Ball out-of-bounds detection in Obstacle Course uses distance from spawn rather than pitch bounds, which may behave unexpectedly in edge regions', 'Obstacle Course', 'Open'],
  ['B3', 'Low',    'Glove model extraction from FBX sub-meshes (Group001/Group002) is fragile and will break if the model asset changes', 'Goalkeeping', 'Open'],
  ['B4', 'Low',    'GoalkeeperBallCurve (Magnus effect) component exists in Entities but is unused in the current trajectory path', 'Goalkeeping', 'Open'],
  ['B5', 'Low',    'Shot timeout fallback can classify unresolved shots as misses even when the ball is still in play', 'Penalty Shootout', 'Open'],
  ['B6', 'Low',    'Task sequence shuffle has a 100-attempt cap; very constrained pools could produce consecutive duplicate tasks in rare cases', 'Obstacle Course', 'Open'],
  ['B7', 'Low',    'Menu-music and ambient audio transitions depend on correct menu state transitions; incorrect ordering can cause audio overlap', 'Freekick', 'Open'],
  ['B8', 'Low',    'Some fallback scene discovery still exists alongside composition roots, creating two parallel wiring paths', 'All Minigames', 'Open'],
]

/* ── Critical evaluation data — per requirement ── */
const functionalEvals = [
  { id: 'F1', evaluation: 'Fully implemented. The Penalty Shootout minigame includes a power meter that oscillates for the player to time their shot in hard mode, with directional shooting (left, middle, right). Easy mode bypasses the power bar and uses a fixed force. Shot outcomes are resolved through physics-based collision and trigger detection, with goal, save, miss, and timeout paths all working correctly.' },
  { id: 'F2', evaluation: 'Fully implemented. The Freekick minigame allows the player to select a shot lane, and the trajectory is computed by FreekickTrajectoryPlanner with randomised shot profiles (intent, execution, target). Wall and goalkeeper setups vary by spawn position. The spin mechanic is handled through lateral acceleration applied during ball flight. Fallback behaviour exists for planning failure.' },
  { id: 'F3', evaluation: 'Fully implemented. The Goalkeeping minigame uses keyboard or hand-tracking input to move the goalkeeper between three snap positions. Incoming shots follow quadratic Bezier curve trajectories. Save detection is handled through both collider-based collision and distance-based judgement, with a ball timeout fallback counting as a save (benefit of the doubt).' },
  { id: 'F4', evaluation: 'Fully implemented. The Obstacle Course features eight tasks per round across eight pitch regions, including three-target, swivel-target, defender, dribble, balloon pop, and colour-match tasks. Each task type has a dedicated executor. Easy and Hard pools produce different task sets, and the sequence is shuffled to avoid consecutive duplicates.' },
  { id: 'F5', evaluation: 'Fully implemented. MotionInput integration is handled through MotionInputManager, which manages the external process lifecycle and mode switching. Each minigame sets the appropriate MotionInput mode (e.g. football/goalkeeping-easy, football/kicking-easy-right). Config updates use structured JSON serialisation rather than line-based file edits.' },
  { id: 'F6', evaluation: 'Fully implemented. All four minigames offer Easy and Hard difficulty modes. In Freekick, difficulty affects wall behaviour and shot randomisation. In Goalkeeping, Hard mode targets outer positions with curved paths. In Penalty Shootout, Hard mode enables the power meter. In Obstacle Course, Hard mode introduces swivel targets, harder defenders, more balloons, and colour-match tasks.' },
  { id: 'F7', evaluation: 'Fully implemented. GameSettings exposes a gameSpeedMultiplier read by all minigames to scale ball speed and obstacle speeds. The setting is persisted via PlayerPrefs and accessible through the shared settings UI.' },
  { id: 'F8', evaluation: 'Fully implemented. The main menu provides a simple, visually clear layout with navigation to minigames, settings, credits, and tutorials. The scene flow is MainMenuScene \u2192 MinigamesMenuScene \u2192 selected minigame. Navigation is quick and requires minimal interaction to reach gameplay.' },
  { id: 'F9', evaluation: 'Fully implemented. A hands-only mode toggle exists in GameSettings, persisted via PlayerPrefs. When enabled, minigames switch to a hand-gesture MotionInput mode (e.g. Obstacle Course switches from kicking to goalkeeping-easy mode) so children who cannot use foot gestures can still play.' },
  { id: 'F10', evaluation: 'Partially implemented. Development of a turn-based 5v5 match mode was started but could not be completed within the project timeline. The architectural foundation (session flow, shared systems) could support this in future, but no playable match mode is available in the current build.' },
  { id: 'F11', evaluation: 'Partially implemented. Each minigame tracks scores and streaks during gameplay, but the token-based reward system (1 coin per point) was not implemented. There is no persistent coin balance or spending mechanism.' },
  { id: 'F12', evaluation: 'Not completed. No in-game shop exists in the current build. This was dependent on the token system (F11) being completed first.' },
  { id: 'F13', evaluation: 'Fully implemented. All minigames provide visual and audio feedback: crowd jump animations on successful actions (via JumpAnimScript), score/streak HUD updates, outcome popups (Save!/Goal!), kick and block sound effects, ambient crowd audio, and celebration effects through GlobalGameAudio.' },
  { id: 'F14', evaluation: 'Partially implemented. Game settings (audio volumes, game speed, MotionInput toggles, hands-only mode) persist across sessions via PlayerPrefs. However, there is no token balance, purchased items, or profile data persisted, as the token/shop system was not completed.' },
  { id: 'F15', evaluation: 'Partially implemented. This was tied to the 5v5 match mode (F10), which was started but not completed. The turn-based pause-and-act structure was part of the design but is not available in the current build.' },
  { id: 'F16', evaluation: 'Fully implemented. All minigames support configurable match duration: Endless mode (play until quit) and TargetScore mode (play until reaching N goals/saves/rounds). The Obstacle Course additionally supports single-round, multi-round (1\u201310), and endless configurations.' },
  { id: 'F17', evaluation: 'Partially implemented. We discovered that persistent high-score tracking would constitute storing data about individual children, which raised privacy concerns under our data minimisation policy (NF7). Instead, each minigame tracks "best streak" within the current session only. This data is not persisted between sessions.' },
  { id: 'F18', evaluation: 'Not planned. Real-time free-flowing match gameplay was explicitly out of scope for this project phase, as continuous real-time play significantly increases complexity and could overwhelm autistic players.' },
  { id: 'F19', evaluation: 'Not planned. Multiplayer modes were explicitly out of scope per the project specification. The focus remains on single-player, self-paced practice in classroom settings.' },
]

const nonFunctionalEvals = [
  { id: 'NF1', evaluation: 'Met. The game maintains 30+ FPS on standard classroom PCs during gameplay. Unity URP rendering settings are used to reduce GPU workload. However, FindObjectsByType calls on every save/task completion (for crowd animations) could become a performance concern in scenes with very large crowds.' },
  { id: 'NF2', evaluation: 'Met. Gesture recognition latency is within the 100ms target. MotionInput processes gestures locally with no network round-trip, and in-game responses to input are immediate within the Unity update loop.' },
  { id: 'NF3', evaluation: 'Met. The UI uses a calming colour palette, clear typography, and consistent layout patterns. There are no rapid flashing visuals. Menu structures are predictable and follow the same pattern across all minigames (mode selection \u2192 gameplay \u2192 completion panel).' },
  { id: 'NF4', evaluation: 'Met. The navigation flow from main menu to gameplay requires only 3\u20134 clicks (Main Menu \u2192 Minigames \u2192 Select Game \u2192 Choose Mode \u2192 Play). Mode menus present simple difficulty and session type choices with sensible defaults.' },
  { id: 'NF5', evaluation: 'Met where applicable. The game follows WCAG 2.2 principles in its UI design: sufficient colour contrast, keyboard navigability as fallback, and customisable audio/visual feedback. Full WCAG compliance is limited by the nature of a Unity-based game (not a web application).' },
  { id: 'NF6', evaluation: 'Met. Audio volume and toggles are customisable through the shared settings UI and persisted via PlayerPrefs. Individual audio channels (music, SFX, ambient) can be adjusted independently. Visual feedback (celebration effects, popups) is present across all minigames.' },
  { id: 'NF7', evaluation: 'Met. The system collects no personal data or biometric identifiers. Only aggregate gameplay settings (audio volumes, game speed, MotionInput preferences) are stored locally via PlayerPrefs. Session scores and streaks are held in memory only and discarded when the session ends.' },
  { id: 'NF8', evaluation: 'Met. When MotionInput fails or is unavailable, the system falls back to keyboard input. MotionInputManager handles process lifecycle errors gracefully. Each minigame provides full keyboard controls (e.g. A/D/W for Goalkeeping, arrow keys for Freekick lane selection) as a reliable fallback.' },
  { id: 'NF9', evaluation: 'Met. The codebase uses dedicated assembly definitions per minigame, composition roots for explicit scene wiring, adapter patterns (ISettingsService, IGoalkeeperMovementController), and service class decomposition. Minigame assemblies do not depend on each other. However, some fallback FindObjectsByType paths still exist alongside composition roots.' },
  { id: 'NF10', evaluation: 'Met. The project includes edit-mode and play-mode test suites covering trajectory planning, shot mechanics, goal zone detection, session state transitions, composition root wiring, and scoring logic. Tests exist for Freekick, Goalkeeping, Penalty Shootout, and shared systems.' },
  { id: 'NF11', evaluation: 'Met. New minigames can be added by creating a folder under Assets/Minigames, adding an asmdef, implementing a composition root, and using SharedCore session flow and adapters. The existing four minigames demonstrate this pattern. No changes to core shared systems are required.' },
  { id: 'NF12', evaluation: 'Met. The system runs on standard Windows PCs with a compatible GPU and camera. No specialised hardware is required beyond what is typically available in classroom environments. MotionInput uses the built-in webcam for gesture capture.' },
  { id: 'NF13', evaluation: 'Met. All processing is local with no cloud services. Unity URP rendering reduces GPU power consumption compared to the built-in render pipeline. No network calls are made during gameplay.' },
  { id: 'NF14', evaluation: 'Met. The source code and documentation are maintained as closed source. The repository is private, with access limited to the project team and authorised partners.' },
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
              <th style={{width: 40}}>ID</th>
              <th>Requirement</th>
              <th style={{width: 80}}>MoSCoW</th>
              <th style={{width: 100}}>Status</th>
              <th style={{width: 140}}>Contributors</th>
              <th style={{width: 160}}>Notes</th>
            </tr>
            </thead>
            <tbody>
            {functionalReqs.map(([id, req, moscow, status, contributors, notes], i) => (
                <tr key={id} style={{ background: i % 2 === 0 ? '#fff' : '#f8fafc' }}>
                  <td><strong>{id}</strong></td>
                  <td>{req}</td>
                  <td style={{ textAlign: 'center' }}><MoscowBadge priority={moscow} /></td>
                  <td style={{ textAlign: 'center' }}><StatusBadge status={status} /></td>
                  <td style={{ fontSize: '0.82rem' }}>{contributors}</td>
                  <td style={{ fontSize: '0.82rem', color: notes ? 'var(--slate-700)' : 'var(--slate-400)', fontStyle: notes ? 'normal' : 'italic' }}>
                    {notes || '—'}
                  </td>
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
              {bugs.map(([id, severity, description, area, status], i) => (
                  <tr key={id} style={{ background: i % 2 === 0 ? '#fff' : '#f8fafc' }}>
                    <td><strong>{id}</strong></td>
                    <td>{severity}</td>
                    <td>{description}</td>
                    <td>{area}</td>
                    <td>{status}</td>
                  </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>

      {/* ── section divider ── */}
      <div style={{ maxWidth: 1100, margin: '1.5rem auto 0.5rem', borderTop: '2px solid #e2e8f0' }} />

      {/* ────────── Individual Contribution — System Development ────────── */}
      <Reveal delay={100} className="table-reveal">
        <div className={styles.tableWrap} style={{ marginTop: '1rem' }}>
          <h3>Individual Contribution — System Development</h3>
          <table>
            <thead>
            <tr>
              <th>Work Package</th>
              <th>Mariha Subhan</th>
              <th>Sunain Syed</th>
              <th>William Xing</th>
              <th>Zhouzhou Zhang</th>
              <th>Antony Wiles</th>
            </tr>
            </thead>
            <tbody>
            {[
              'Research and Experiments',
              'UI Design',
              'Coding',
              'Testing',
              'Overall Contribution',
            ].map((pkg, i) => (
                <tr key={pkg} style={{ background: i % 2 === 0 ? '#fff' : '#f8fafc' }}>
                  <td><strong>{pkg}</strong></td>
                  {[0,1,2,3,4].map(j => (
                      <td key={j} style={{ textAlign: 'center', color: 'var(--slate-400)', fontStyle: 'italic' }}>—</td>
                  ))}
                </tr>
            ))}
            </tbody>
          </table>
        </div>
      </Reveal>

      {/* ────────── Individual Contribution — Report Website ────────── */}
      <Reveal delay={100} className="table-reveal">
        <div className={styles.tableWrap} style={{ marginTop: '1rem' }}>
          <h3>Individual Contribution — Report Website</h3>
          <table>
            <thead>
            <tr>
              <th>Work Package</th>
              <th>Mariha Subhan</th>
              <th>Sunain Syed</th>
              <th>William Xing</th>
              <th>Zhouzhou Zhang</th>
              <th>Antony Wiles</th>
            </tr>
            </thead>
            <tbody>
            {[
              'Website template and setup',
              'Home',
              'Video',
              'Requirements',
              'Research',
              'UI Design',
              'System Design',
              'Implementation',
              'Testing',
              'Evaluation and Future Work',
              'User and Deployment Manuals',
              'Legal Issues',
              'Blog and Monthly Video',
              'Overall Contribution',
            ].map((pkg, i) => (
                <tr key={pkg} style={{ background: i % 2 === 0 ? '#fff' : '#f8fafc' }}>
                  <td><strong>{pkg}</strong></td>
                  {[0,1,2,3,4].map(j => (
                      <td key={j} style={{ textAlign: 'center', color: 'var(--slate-400)', fontStyle: 'italic' }}>—</td>
                  ))}
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
              Each requirement from the Requirements page is evaluated against its implementation in the final system.
            </p>
          </article>
        </div>
      </Reveal>

      <Reveal delay={100}>
        <div className={styles.tableWrap}>
          <h3>Functional Requirements — Critical Evaluation</h3>
          <table>
            <thead>
              <tr>
                <th style={{ width: 40 }}>ID</th>
                <th style={{ width: 80 }}>MoSCoW</th>
                <th style={{ width: 100 }}>Status</th>
                <th>Evaluation</th>
              </tr>
            </thead>
            <tbody>
              {functionalEvals.map((item, i) => {
                const req = functionalReqs.find(r => r[0] === item.id)
                return (
                  <tr key={item.id} style={{ background: i % 2 === 0 ? '#fff' : '#f8fafc' }}>
                    <td><strong>{item.id}</strong></td>
                    <td style={{ textAlign: 'center' }}><MoscowBadge priority={req?.[2] || ''} /></td>
                    <td style={{ textAlign: 'center' }}><StatusBadge status={req?.[3] || ''} /></td>
                    <td style={{ fontSize: '0.85rem', lineHeight: 1.55, color: 'var(--slate-700)' }}>{item.evaluation}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </Reveal>

      <Reveal delay={100}>
        <div className={styles.tableWrap} style={{ marginTop: '1rem' }}>
          <h3>Non-Functional Requirements — Critical Evaluation</h3>
          <table>
            <thead>
              <tr>
                <th style={{ width: 40 }}>ID</th>
                <th style={{ width: 110 }}>Category</th>
                <th style={{ width: 80 }}>MoSCoW</th>
                <th style={{ width: 100 }}>Status</th>
                <th>Evaluation</th>
              </tr>
            </thead>
            <tbody>
              {nonFunctionalEvals.map((item, i) => {
                const req = nonFunctionalReqs.find(r => r[0] === item.id)
                return (
                  <tr key={item.id} style={{ background: i % 2 === 0 ? '#fff' : '#f8fafc' }}>
                    <td><strong>{item.id}</strong></td>
                    <td><span style={{ fontWeight: 600, fontSize: '0.84rem' }}>{req?.[1] || ''}</span></td>
                    <td style={{ textAlign: 'center' }}><MoscowBadge priority={req?.[3] || ''} /></td>
                    <td style={{ textAlign: 'center' }}><StatusBadge status={req?.[4] || ''} /></td>
                    <td style={{ fontSize: '0.85rem', lineHeight: 1.55, color: 'var(--slate-700)' }}>{item.evaluation}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </Reveal>

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
