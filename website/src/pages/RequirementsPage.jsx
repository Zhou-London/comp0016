import styles from '../App.module.css'
import SectionHeader from '../components/SectionHeader'

/* ── Reusable style constants ── */
const accent = {
  must:   { bg: '#dcfce7', color: '#166534', border: '#86efac' },
  should: { bg: '#dbeafe', color: '#1e40af', border: '#93c5fd' },
  could:  { bg: '#fef9c3', color: '#854d0e', border: '#fde68a' },
  wont:   { bg: '#f3f4f6', color: '#4b5563', border: '#d1d5db' },
}

function MoscowBadge({ priority }) {
  const key = priority.toLowerCase().replace(/[^a-z]/g, '')
  const s = accent[key] || accent.could
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

/* ── Partner badge chip ── */
function PartnerChip({ icon, name, desc }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: '0.65rem',
      padding: '0.7rem 1rem', borderRadius: 10,
      background: 'linear-gradient(135deg, #f0f9ff 0%, #f0fdf4 100%)',
      border: '1px solid #e2e8f0',
    }}>
      <span style={{ fontSize: '1.5rem', lineHeight: 1 }}>{icon}</span>
      <div>
        <strong style={{ fontSize: '0.88rem', color: 'var(--green-900)' }}>{name}</strong>
        <p style={{ fontSize: '0.78rem', color: 'var(--slate-500)', margin: 0, lineHeight: 1.4 }}>{desc}</p>
      </div>
    </div>
  )
}

/* ── Goal card with number accent ── */
function GoalCard({ num, children }) {
  return (
    <div style={{
      display: 'flex', gap: '0.8rem', alignItems: 'flex-start',
      padding: '0.85rem 1rem', borderRadius: 10,
      background: '#fff', border: '1px solid #e2e8f0',
    }}>
      <span style={{
        flexShrink: 0, width: 32, height: 32, borderRadius: '50%',
        background: 'linear-gradient(135deg, #488328, #5f9f28)',
        color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '0.82rem', fontWeight: 800,
      }}>{num}</span>
      <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--slate-700)', lineHeight: 1.55 }}>{children}</p>
    </div>
  )
}

/* ── Gathering method pill ── */
function MethodTag({ icon, label }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      padding: '5px 12px', borderRadius: 8,
      background: '#eef5ff', border: '1px solid #c6ddf7',
      fontSize: '0.8rem', fontWeight: 600, color: '#1e3a5f',
    }}>
      <span style={{ fontSize: '1rem' }}>{icon}</span> {label}
    </span>
  )
}

/* ── Persona Card ── */
function PersonaCard({ name, role, age, quote, bio, motivations, idealFeatures, painPoints, accentColor }) {
  const c = accentColor || '#2980b9'
  return (
    <article className={styles.card} style={{ gridColumn: 'span 3', borderLeft: `4px solid ${c}`, position: 'relative', overflow: 'hidden' }}>
      {/* subtle gradient corner */}
      <div style={{ position: 'absolute', top: 0, right: 0, width: 160, height: 160, background: `radial-gradient(circle at top right, ${c}10, transparent 70%)`, pointerEvents: 'none' }} />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', position: 'relative' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', marginBottom: '0.3rem' }}>
            <span style={{
              width: 42, height: 42, borderRadius: '50%',
              background: `${c}18`, border: `2px solid ${c}40`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '1.2rem',
            }}>{role.includes('Teacher') ? '\ud83d\udc69\u200d\ud83c\udfeb' : '\ud83d\udc68\u200d\ud83d\udc66'}</span>
            <div>
              <h4 style={{ fontSize: '1.1rem', color: 'var(--green-900)', margin: 0 }}>{name}</h4>
              <p style={{ fontSize: '0.78rem', color: 'var(--slate-500)', margin: 0 }}>{role} &middot; {age}</p>
            </div>
          </div>
          <p style={{ fontSize: '0.88rem', color: 'var(--slate-700)', lineHeight: 1.6, marginTop: '0.6rem' }}>{bio}</p>
          <blockquote style={{
            marginTop: '0.8rem', fontStyle: 'italic', color: c,
            borderLeft: `3px solid ${c}`, paddingLeft: '0.7rem', fontSize: '0.88rem',
            background: `${c}08`, padding: '0.5rem 0.7rem', borderRadius: '0 6px 6px 0',
          }}>
            {quote}
          </blockquote>
        </div>
        <div>
          {[
            { title: 'Motivations', icon: '\ud83c\udfaf', items: motivations },
            { title: 'Ideal Features', icon: '\u2728', items: idealFeatures },
            { title: 'Pain Points', icon: '\u26a0\ufe0f', items: painPoints },
          ].map((section) => (
            <div key={section.title} style={{ marginBottom: '0.7rem' }}>
              <p style={{ fontWeight: 700, fontSize: '0.85rem', color: 'var(--green-800)', marginBottom: '0.25rem' }}>
                {section.icon} {section.title}
              </p>
              <ul style={{ paddingLeft: '1.1rem', fontSize: '0.85rem', color: 'var(--slate-700)', margin: 0 }}>
                {section.items.map((item, i) => <li key={i} style={{ marginBottom: 3, lineHeight: 1.45 }}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </article>
  )
}

/* ── inline SVG use-case diagram ── */
function UseCaseDiagram() {
  const useCases = [
    { cx: 450, cy: 85,  label: 'Play Penalty Shootout' },
    { cx: 450, cy: 140, label: 'Play Free Kick' },
    { cx: 450, cy: 195, label: 'Play Goalkeeping' },
    { cx: 450, cy: 250, label: 'Play Obstacle Course' },
    { cx: 450, cy: 305, label: 'Play Full Match' },
    { cx: 450, cy: 365, label: 'Adjust Difficulty / Speed' },
    { cx: 450, cy: 420, label: 'Interact via Body Tracking' },
    { cx: 450, cy: 475, label: 'Purchase Items in Shop' },
    { cx: 450, cy: 530, label: 'Configure Accessibility Settings' },
    { cx: 450, cy: 575, label: 'Navigate Game Menu' },
  ]

  return (
    <div style={{ background: '#fafcff', borderRadius: 12, padding: '1rem', border: '1px solid #e2e8f0' }}>
      <svg viewBox="0 0 900 620" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: 880, display: 'block', margin: '0 auto' }}>
        <defs>
          <linearGradient id="ucGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#e0f2fe" />
            <stop offset="100%" stopColor="#f0fdf4" />
          </linearGradient>
          <filter id="ucShadow"><feDropShadow dx="0" dy="1" stdDeviation="2" floodOpacity="0.08" /></filter>
        </defs>
        {/* System boundary */}
        <rect x="200" y="20" width="500" height="580" rx="18" fill="url(#ucGrad)" stroke="#3b82f6" strokeWidth="2" strokeDasharray="8 4" />
        <text x="450" y="50" textAnchor="middle" fontWeight="700" fontSize="14" fill="#1e3a5f">MotionInput Football Practice System</text>

        {/* Player */}
        <g>
          <circle cx="80" cy="200" r="18" fill="#e0f2fe" stroke="#1f4f93" strokeWidth="2" />
          <line x1="80" y1="218" x2="80" y2="270" stroke="#1f4f93" strokeWidth="2" />
          <line x1="80" y1="235" x2="55" y2="255" stroke="#1f4f93" strokeWidth="2" />
          <line x1="80" y1="235" x2="105" y2="255" stroke="#1f4f93" strokeWidth="2" />
          <line x1="80" y1="270" x2="55" y2="300" stroke="#1f4f93" strokeWidth="2" />
          <line x1="80" y1="270" x2="105" y2="300" stroke="#1f4f93" strokeWidth="2" />
          <text x="80" y="320" textAnchor="middle" fontSize="12" fill="#1f4f93" fontWeight="700">Player</text>
        </g>

        {/* Teacher / Caregiver */}
        <g>
          <circle cx="80" cy="440" r="18" fill="#f0fdf4" stroke="#1f4f93" strokeWidth="2" />
          <line x1="80" y1="458" x2="80" y2="510" stroke="#1f4f93" strokeWidth="2" />
          <line x1="80" y1="475" x2="55" y2="495" stroke="#1f4f93" strokeWidth="2" />
          <line x1="80" y1="475" x2="105" y2="495" stroke="#1f4f93" strokeWidth="2" />
          <line x1="80" y1="510" x2="55" y2="540" stroke="#1f4f93" strokeWidth="2" />
          <line x1="80" y1="510" x2="105" y2="540" stroke="#1f4f93" strokeWidth="2" />
          <text x="80" y="560" textAnchor="middle" fontSize="12" fill="#1f4f93" fontWeight="700">Teacher /</text>
          <text x="80" y="575" textAnchor="middle" fontSize="12" fill="#1f4f93" fontWeight="700">Caregiver</text>
        </g>

        {/* MotionInput Engine */}
        <rect x="775" y="245" width="110" height="55" rx="8" fill="#fff" stroke="#1f4f93" strokeWidth="2" filter="url(#ucShadow)" />
        <text x="830" y="268" textAnchor="middle" fontSize="10.5" fill="#1f4f93" fontWeight="700">&laquo;system&raquo;</text>
        <text x="830" y="284" textAnchor="middle" fontSize="10.5" fill="#1f4f93" fontWeight="600">MotionInput</text>

        {/* Use case ellipses */}
        {useCases.map((uc, i) => (
          <g key={i}>
            <ellipse cx={uc.cx} cy={uc.cy} rx="140" ry="22" fill="#fff" stroke="#3b82f6" strokeWidth="1.5" filter="url(#ucShadow)" />
            <text x={uc.cx} y={uc.cy + 5} textAnchor="middle" fontSize="11.5" fill="#1e3a5f" fontWeight="500">{uc.label}</text>
          </g>
        ))}

        {/* Player associations */}
        {[85, 140, 195, 250, 305, 365, 420, 475, 575].map((cy, i) => (
          <line key={`p${i}`} x1="110" y1={cy < 350 ? 230 : 470} x2="310" y2={cy} stroke="#94a3b8" strokeWidth="1" />
        ))}
        {/* Teacher associations */}
        {[365, 475, 530, 575].map((cy, i) => (
          <line key={`t${i}`} x1="110" y1="470" x2="310" y2={cy} stroke="#94a3b8" strokeWidth="1" />
        ))}
        {/* MotionInput association */}
        <line x1="775" y1="275" x2="590" y2="420" stroke="#94a3b8" strokeWidth="1" />
        {/* Include relationships */}
        {[85, 140, 195, 250].map((cy, i) => (
          <line key={`inc${i}`} x1="450" y1="283" x2="450" y2={cy + 22} stroke="#94a3b8" strokeWidth="1" strokeDasharray="6 3" />
        ))}
        <text x="480" y="267" fontSize="9" fill="#64748b" fontStyle="italic">&laquo;include&raquo;</text>
      </svg>
    </div>
  )
}

export default function RequirementsPage() {
  return (
    <section className={styles.section}>
      <SectionHeader title="Requirements" subtitle="Partner context, goals, requirement gathering, personas, use cases, and MoSCoW prioritised requirements." />

      {/* ────────── Partner Introduction & Project Background ────────── */}
      <div className={styles.contentGrid}>
        <article className={styles.card} style={{ gridColumn: 'span 3' }}>
          <h3>Partner Introduction and Project Background</h3>

          {/* Partner chips */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.6rem', marginBottom: '1rem', marginTop: '0.5rem' }}>
            <PartnerChip icon={'\ud83e\udde9'} name="National Autistic Society" desc="Domain expertise on autism & accessibility" />
            <PartnerChip icon={'\ud83c\udfae'} name="MotionInput Games Ltd" desc="Body-tracking engine & gesture recognition" />
            <PartnerChip icon={'\ud83d\udcbb'} name="Intel" desc="Hardware expertise & MPU technology" />
            <PartnerChip icon={'\u26bd'} name="Coca-Cola" desc="2026 FIFA World Cup partnership" />
          </div>

          <p>
            This project is a collaboration between UCL Computer Science and four external partners.
            The <strong>National Autistic Society (NAS)</strong> advises on the needs of autistic children, accessibility, and sensory design.
            <strong> MotionInput Games Ltd</strong> supplies the MotionInput Engine for full-body gesture recognition.
            <strong> Intel</strong> contributes hardware expertise with MPU technology, and <strong>Coca-Cola</strong> supports the project in the context of the upcoming 2026 FIFA World Cup.
          </p>
          <div style={{ marginTop: '0.8rem', padding: '0.8rem 1rem', borderRadius: 10, background: 'linear-gradient(135deg, #fef9c3 0%, #fefce8 100%)', border: '1px solid #fde68a' }}>
            <p style={{ margin: 0, fontSize: '0.9rem', color: '#713f12', lineHeight: 1.6 }}>
              <strong>The Problem:</strong> Children with autism spectrum disorder often face challenges with physical coordination, social interaction, and sensory processing. Traditional sports environments can be overwhelming, and existing sports video games rely on standard controllers that may not be accessible.
            </p>
          </div>
          <p style={{ marginTop: '0.6rem' }}>
            The MotionInput Football Practice project addresses this gap by developing an interactive, motion-controlled football training game. Children practise football through natural body movements &mdash; kicking with their feet and saving goals with their hands &mdash; in a structured, sensory-friendly environment. While designed primarily for autistic children, the game is inclusive and suitable for all players who enjoy football.
          </p>
        </article>
      </div>

      {/* ────────── Project Goals ────────── */}
      <div className={styles.contentGrid} style={{ marginTop: '1rem' }}>
        <article className={styles.card} style={{ gridColumn: 'span 3' }}>
          <h3>Project Goals</h3>
          <div style={{ display: 'grid', gap: '0.5rem', marginTop: '0.5rem' }}>
            <GoalCard num="1">Develop an accessible, motion-controlled football game that uses full-body tracking and gesture recognition to interact with gameplay elements, removing the barrier of traditional input methods.</GoalCard>
            <GoalCard num="2">Design engaging football minigames (penalty shootout, free kicks, goalkeeping, obstacle course) that target coordination, reaction time, and motor skill development in autistic children.</GoalCard>
            <GoalCard num="3">Create a sensory-friendly and adaptable user interface with customisable visual and audio feedback to accommodate different sensitivities and preferences, helping children gain confidence and enjoy sport.</GoalCard>
            <GoalCard num="4">Encourage physical activity and social inclusion by providing a safe, structured environment where children can practise football skills at their own pace without overwhelming social pressure.</GoalCard>
            <GoalCard num="5">Showcase the system in alignment with the 2026 FIFA World Cup, promoting inclusion and accessibility in sports through interactive technology.</GoalCard>
          </div>
        </article>
      </div>

      {/* ────────── Requirement Gathering ────────── */}
      <div className={styles.contentGrid} style={{ marginTop: '1rem' }}>
        <article className={styles.card} style={{ gridColumn: 'span 3' }}>
          <h3>Requirement Gathering</h3>

          <h4 style={{ color: 'var(--green-700)', fontSize: '0.95rem', marginTop: '0.6rem', marginBottom: '0.4rem' }}>How did we collect the requirements?</h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.7rem' }}>
            <MethodTag icon={'\ud83d\udcca'} label="Partner Presentations" />
            <MethodTag icon={'\ud83d\udcdd'} label="Documented Feedback" />
            <MethodTag icon={'\ud83d\udd04'} label="Iterative Refinement" />
            <MethodTag icon={'\ud83e\udd1d'} label="In-person & Online Meetings" />
          </div>
          <p>
            Requirements were gathered through a series of well-prepared presentations and meetings with our project partners, conducted both online and in-person. Each session was carefully documented, capturing detailed notes and partner feedback. The feedback was then systematically reviewed and used to iteratively refine the game design, features, and accessibility settings.
          </p>
          <p style={{ marginTop: '0.5rem' }}>
            Key meetings included sessions with our NAS contact (Marius, a school teacher working with autistic children), our MotionInput technical mentor (Peter Ling), and our UCL supervisor (Prof. Dean Mohamedally). These recurring touchpoints ensured requirements stayed grounded in real classroom needs and technical feasibility.
          </p>

          <h4 style={{ color: 'var(--green-700)', fontSize: '0.95rem', marginTop: '0.9rem', marginBottom: '0.4rem' }}>Survey design and data analysis</h4>
          <div style={{ padding: '0.7rem 1rem', borderRadius: 10, background: '#f0fdf4', border: '1px solid #bbf7d0' }}>
            <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--slate-700)', lineHeight: 1.6 }}>
              Feedback collected from partner presentations was analysed using a <strong>qualitative analysis</strong> approach. Open-ended responses and verbal feedback from each session were reviewed for recurring themes and patterns, including accessibility concerns, desired game features, sensory preferences, and classroom constraints. These themes were then mapped to concrete functional and non-functional requirements, ensuring every requirement traces back to real stakeholder input.
            </p>
          </div>
        </article>
      </div>

      {/* ────────── Personas ────────── */}
      <div className={styles.contentGrid} style={{ marginTop: '1rem' }}>
        <article className={styles.card} style={{ gridColumn: 'span 3' }}>
          <h3>Personas</h3>
          <p style={{ marginBottom: '0.5rem' }}>Below are two representative user personas that guided our design decisions.</p>
        </article>
        <PersonaCard
          name="Sara Howard"
          role="SEND Teacher"
          age="Female, 37"
          accentColor="#2563eb"
          bio="Sara is a SEND teacher at a school in the UK with 9 years of experience working with autistic children. She wants engaging games that let children enjoy sports without the overwhelming chaos of physical games. Sara says these will help the children exercise key motor skills in an enjoyable way. She has some experience playing games, but in a classroom does not have time to learn and then teach complex controls to children. She needs clear and quick-to-understand games so that the focus is on the children playing."
          quote="&ldquo;I want the kids to enjoy playing sports and games.&rdquo;"
          motivations={[
            'Use innovative technology to improve students\u2019 learning experience',
            'Help autistic children enjoy playing sports',
            'Help children develop motor skills and exercise through movement',
          ]}
          idealFeatures={[
            'Easy-to-understand and use controls',
            'Visual supports and interactions that give frequent and clear positive feedback',
            'Simple and quick to navigate game menu',
          ]}
          painPoints={[
            'Time-pressure situations that may cause anxiety and overwhelm children',
            'Sensory overload and complex decision-making',
          ]}
        />
        <PersonaCard
          name="James Chen"
          role="Parent / Caregiver"
          age="Male, 42, father of Leo (autistic, age 9)"
          accentColor="#16a34a"
          bio="James is the father of Leo, a 9-year-old autistic boy who loves watching football on TV. James wants Leo to be more physically active but traditional sports clubs are too overwhelming for him. James has heard about MotionInput games and is looking for a safe, accessible way for Leo to enjoy football at home using body movements."
          quote="&ldquo;I just want my son to have fun and feel confident &mdash; without me worrying about what&rsquo;s on screen.&rdquo;"
          motivations={[
            'Help Leo build confidence and enjoy sports from home',
            'Encourage physical activity without overwhelming social settings',
            'Find inclusive games that Leo can play independently or with family',
            'Reduce screen-time guilt by combining gaming with exercise',
          ]}
          idealFeatures={[
            'Quick and simple setup that does not require technical expertise',
            'Safe content with no unexpected loud sounds or flashing visuals',
            'Progress tracking so he can see Leo\u2019s improvement over time',
            'Ability to adjust difficulty and sensory settings for Leo\u2019s comfort',
          ]}
          painPoints={[
            'Complicated setup processes that require reading lengthy instructions',
            'Games with unpredictable sensory stimuli that could trigger Leo\u2019s anxiety',
            'Lack of parental controls or visibility into what Leo is experiencing',
            'Most sports games assume neurotypical motor skills and reaction times',
          ]}
        />
      </div>

      {/* ────────── Use Cases ────────── */}
      <div className={styles.contentGrid} style={{ marginTop: '1rem' }}>
        <article className={styles.card} style={{ gridColumn: 'span 3' }}>
          <h3>Use Case Diagram</h3>
          <p style={{ marginBottom: '0.8rem' }}>The diagram below follows standard UML use-case notation showing actors, use cases, and their relationships within the MotionInput Football Practice system.</p>
          <UseCaseDiagram />
        </article>
      </div>

      <div className={styles.tableWrap} style={{ marginTop: '1rem' }}>
        <h3>List of Use Cases</h3>
        <table>
          <thead>
            <tr><th style={{ width: 50 }}>ID</th><th style={{ width: 150 }}>Use Case</th><th style={{ width: 140 }}>Actor(s)</th><th>Description</th></tr>
          </thead>
          <tbody>
            {[
              ['UC1', 'Play Penalty Shootout', 'Player', 'The player selects the Penalty Shootout minigame and uses kicking gestures to shoot the ball past the AI goalkeeper. A power bar mechanism determines shot strength, and the player chooses to shoot left, middle, or right.'],
              ['UC2', 'Play Free Kick', 'Player', 'The player selects the Free Kick minigame and chooses from pre-planned trajectories to curve the ball around a wall of defenders. In hard mode, the player can add spin by timing a cursor on screen.'],
              ['UC3', 'Play Goalkeeping', 'Player', 'The player selects the Goalkeeping minigame and uses hand gestures to dive left, middle, or right to save incoming shots. In hard mode, the player is locked into their decision and balls curve more frequently.'],
              ['UC4', 'Play Obstacle Course', 'Player', 'The player completes a series of football skill challenges including dribbling, passing to targets, and footwork tasks, using body movements tracked by the MotionInput Engine.'],
              ['UC5', 'Play Full Match', 'Player', 'The player engages in a simulated 5v5 football match (singleplayer vs. AI) that combines all minigames with additional match actions such as kick-off, passing, running, corners, and headers.'],
              ['UC6', 'Adjust Difficulty / Speed', 'Player, Teacher/Caregiver', 'The user switches between Normal and Hard difficulty modes, affecting minigame complexity. An option to adjust game speed is also available for accessibility.'],
              ['UC7', 'Interact via Body Tracking', 'Player', 'The MotionInput Engine captures full-body gestures in real time and translates them into in-game commands (e.g., foot kick to shoot, hand dive to save).'],
              ['UC8', 'Purchase Items in Shop', 'Player, Teacher/Caregiver', 'The user spends tokens earned through gameplay to unlock cosmetic items including player avatars, footballs, and stadium backgrounds.'],
              ['UC9', 'Configure Accessibility Settings', 'Teacher/Caregiver', 'The teacher or caregiver configures sensory accessibility options such as sound volume, visual intensity, motion-input mode, and speed multiplier.'],
              ['UC10', 'Navigate Game Menu', 'Player, Teacher/Caregiver', 'The user navigates the main menu to select minigames, access settings, view the shop, or start a full match with clear visual cues.'],
            ].map(([id, name, actors, desc], i) => (
              <tr key={id} style={{ background: i % 2 === 0 ? '#fff' : '#f8fafc' }}>
                <td><strong>{id}</strong></td><td>{name}</td><td>{actors}</td><td>{desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ────────── MoSCoW Functional Requirements ────────── */}
      <div className={styles.tableWrap} style={{ marginTop: '1rem' }}>
        <h3>MoSCoW Functional Requirements</h3>
        <table>
          <thead>
            <tr><th style={{ width: 40 }}>ID</th><th>Requirement</th><th style={{ width: 80 }}>MoSCoW</th><th style={{ width: '28%' }}>Rationale</th></tr>
          </thead>
          <tbody>
            {[
              ['F1',  'The system shall provide a Penalty Shootout minigame where the player uses kicking gestures to shoot the ball, with a power bar that moves from 0 to 10 and back, requiring the player to time their shot. The player chooses to shoot left, middle, or right.', 'Must', 'Core minigame that demonstrates motion-controlled football interaction; directly supports the project\u2019s primary objective of accessible football practice.'],
              ['F2',  'The system shall provide a Free Kick minigame where the player selects from pre-planned trajectories to curve the ball around a wall of defenders, with an optional spin mechanic in hard mode.', 'Must', 'Core minigame offering varied gameplay; trains decision-making and timing skills.'],
              ['F3',  'The system shall provide a Goalkeeping minigame where the player uses hand gestures to dive left, middle, or right to save incoming shots that slowly fly towards them.', 'Must', 'Core minigame that exercises upper-body coordination and reaction time through hand-tracking gestures.'],
              ['F4',  'The system shall provide an Obstacle Course minigame featuring football skill challenges such as dribbling, passing to targets, three-target tasks, swivel-target tasks, defender tasks, balloon tasks, and colour-match tasks.', 'Must', 'Provides variety in motor-skill training and keeps players engaged with diverse challenges.'],
              ['F5',  'The system shall integrate with the MotionInput Engine to capture real-time full-body gestures (foot kicks, hand dives, running motions) and translate them into in-game commands without traditional controllers.', 'Must', 'Fundamental to the project\u2019s core value proposition of controller-free, body-tracked interaction for accessibility.'],
              ['F6',  'The system shall offer configurable difficulty levels (Normal and Hard) for each minigame, adjusting parameters such as required power thresholds, spin mechanics, position locking, and ball-curve frequency.', 'Must', 'Essential for accommodating different ability levels and allowing children to progress at their own pace.'],
              ['F7',  'The system shall provide an adjustable game-speed setting that controls how fast game elements move (e.g., ball speed), with an option for automatic speed adjustment based on player success rate.', 'Must', 'Critical accessibility feature recommended by NAS to prevent overwhelming autistic players with fast-paced gameplay.'],
              ['F8',  'The system shall provide a main menu interface that is simple, visually clear, and quick to navigate, allowing players to select minigames, access settings, view the shop, or start a full match.', 'Must', 'Teacher persona (Sara) identified that complex menus waste classroom time and shift focus away from children playing.'],
              ['F9',  'The system shall support a hands-only mode toggle in settings so that children who cannot use foot gestures can still interact with the game using only hand movements.', 'Must', 'Ensures inclusivity for children with different physical abilities or mobility constraints.'],
              ['F10', 'The system shall provide a simulated 5v5 full-match mode (singleplayer vs. AI) that combines all minigame elements with additional match actions: kick-off, running, passing, corners, side throws, and headers.', 'Should', 'Extends the game beyond isolated minigames into a more immersive football experience; uses 5v5 to avoid overwhelming children.'],
              ['F11', 'The system shall implement a token-based reward system where players earn one coin per point scored, which can be spent in an in-game shop to unlock cosmetic items.', 'Should', 'Provides positive reinforcement and sustained motivation, encouraging repeated play and skill development.'],
              ['F12', 'The system shall provide an in-game shop where tokens can be used to purchase cosmetic items including player avatars, footballs, and stadium backgrounds (e.g., playground, park, beach, underwater, space).', 'Should', 'Offers personalisation and a sense of accomplishment; the variety of fantastical backgrounds adds appeal for children.'],
              ['F13', 'The system shall provide clear, frequent, and positive visual and audio feedback during gameplay, such as crowd reactions, celebration effects, and score updates, to motivate and reassure the player.', 'Should', 'Identified by the teacher persona as essential for autistic children who benefit from predictable, affirming responses.'],
              ['F14', 'The system shall persist a single shared classroom profile storing cumulative tokens, purchased items, and accessibility settings across sessions, using local JSON files or Unity PlayerPrefs.', 'Should', 'Ensures continuity between classroom sessions without requiring individual user accounts or personal data collection.'],
              ['F15', 'In the full-match mode, the system shall pause at key moments to allow the player to complete actions (e.g., tackle, pass, shoot), then simulate the outcome before continuing.', 'Should', 'A structured, turn-based approach reduces the unpredictability and sensory overload of continuous real-time gameplay.'],
              ['F16', 'The system shall allow the match duration to be configured either by score (first to N goals) or by a fixed number of actions, targeting approximately 10-minute sessions.', 'Could', 'Provides flexibility for classroom scheduling; ~10-minute sessions fit well within typical lesson breaks.'],
              ['F17', 'The system shall implement a high-score tracking feature that records and displays best scores for each minigame to encourage self-competition and improvement.', 'Could', 'Encourages repeated play and gives the parent/caregiver persona a way to observe the child\u2019s progress.'],
              ['F18', 'The system shall support real-time, free-flowing full-match gameplay with continuous player control, tactics, and formations.', 'Won\u2019t', 'Out of scope for this phase. Real-time match play significantly increases complexity and may overwhelm autistic players.'],
              ['F19', 'The system shall support online or offline multiplayer modes.', 'Won\u2019t', 'Explicitly out of scope per project specification; the focus is on single-player, self-paced practice in classroom settings.'],
            ].map(([id, req, moscow, rationale], i) => (
              <tr key={id} style={{ background: i % 2 === 0 ? '#fff' : '#f8fafc' }}>
                <td><strong>{id}</strong></td>
                <td>{req}</td>
                <td style={{ textAlign: 'center' }}><MoscowBadge priority={moscow} /></td>
                <td style={{ fontSize: '0.84rem' }}>{rationale}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ────────── MoSCoW Non-Functional Requirements ────────── */}
      <div className={styles.tableWrap} style={{ marginTop: '1rem' }}>
        <h3>MoSCoW Non-Functional Requirements</h3>
        <table>
          <thead>
            <tr><th style={{ width: 40 }}>ID</th><th style={{ width: 110 }}>Category</th><th>Requirement</th><th style={{ width: 80 }}>MoSCoW</th><th style={{ width: '24%' }}>Rationale</th></tr>
          </thead>
          <tbody>
            {[
              ['NF1',  'Performance',       'The system shall maintain a frame rate of at least 30 FPS during gameplay on standard classroom PCs or laptops with compatible GPUs, ensuring smooth visual feedback for players.', 'Must', 'Low frame rates cause visual stuttering that can disorient players and degrade the motion-tracking experience.'],
              ['NF2',  'Performance',       'Gesture recognition latency between the player\u2019s physical movement and the corresponding in-game action shall not exceed 100 milliseconds.', 'Must', 'High latency breaks the connection between body movement and on-screen response, reducing engagement and accessibility.'],
              ['NF3',  'Usability',         'The user interface shall follow sensory-friendly design principles: no rapid flashing visuals, calming colour palettes, clear typography, and consistent layout patterns suitable for autistic users.', 'Must', 'Sensory overload is a primary pain point identified by both personas; the UI must be predictable and non-overwhelming.'],
              ['NF4',  'Usability',         'A new user (teacher or child) shall be able to understand how to start and play a minigame within 2 minutes of first interaction, without external instructions.', 'Must', 'Teachers have limited classroom time and cannot spend it learning complex controls; identified by Sara Howard persona.'],
              ['NF5',  'Accessibility',     'The system shall comply with WCAG 2.2 accessibility guidelines where applicable, and the UK Equality Act 2010, ensuring equitable participation for neurodiverse users.', 'Must', 'Legal and ethical requirement; ensures the game is genuinely inclusive as intended.'],
              ['NF6',  'Accessibility',     'All visual and audio feedback shall be customisable (volume, intensity, enabling/disabling) to accommodate different sensory sensitivities and preferences.', 'Must', 'Different autistic children have different sensory thresholds; one-size-fits-all feedback could cause distress.'],
              ['NF7',  'Security / Privacy','The system shall not collect, store, or transmit any personal data or biometric identifiers. Only aggregate gameplay data (tokens, settings) is retained locally.', 'Must', 'Compliance with UK Data Protection Act 2018 and GDPR principles of data minimisation; no user profiles are required.'],
              ['NF8',  'Reliability',       'The system shall gracefully handle MotionInput Engine failures by falling back to a safe state (e.g., displaying a message and returning to the menu) without crashing.', 'Must', 'Classroom environments may have unreliable hardware; crashes would disrupt lessons and frustrate teachers.'],
              ['NF9',  'Maintainability',   'The codebase shall follow a modular architecture with composition roots, adapter patterns, and separated service classes, allowing individual minigames to be modified or extended without affecting other modules.', 'Should', 'Enables future contributors and partners to add new minigames or modify existing ones with minimal risk of regressions.'],
              ['NF10', 'Maintainability',   'The project shall include automated unit and integration tests covering composition root wiring, session state machine behaviour, shared adapters, and minigame gameplay rules.', 'Should', 'Automated tests provide confidence during refactoring and ensure behaviour consistency across code changes.'],
              ['NF11', 'Extensibility',     'The system architecture shall support adding new minigames by following existing patterns (composition root, service classes, log category) without modifying the core shared systems.', 'Should', 'The project may be extended with additional football activities (e.g., dribbling drills) in future iterations.'],
              ['NF12', 'Portability',       'The system shall run on standard classroom hardware (Windows PCs/laptops) with no specialised hardware required beyond a compatible GPU and camera for the MotionInput Engine.', 'Must', 'Schools have limited budgets; requiring specialist equipment would restrict adoption.'],
              ['NF13', 'Sustainability',    'The system shall use local processing only (no cloud services) and energy-efficient Unity URP rendering settings to minimise environmental impact.', 'Should', 'Aligns with UCL sustainability guidelines and reduces operational costs for schools.'],
              ['NF14', 'Open Source',       'The project source code and documentation shall be publicly available to allow educational institutions and researchers to study, modify, and extend the system.', 'Could', 'Supports knowledge sharing and aligns with UCL\u2019s commitment to open research; enables future student groups to build on the work.'],
            ].map(([id, category, req, moscow, rationale], i) => (
              <tr key={id} style={{ background: i % 2 === 0 ? '#fff' : '#f8fafc' }}>
                <td><strong>{id}</strong></td>
                <td><span style={{ fontWeight: 600, fontSize: '0.84rem' }}>{category}</span></td>
                <td>{req}</td>
                <td style={{ textAlign: 'center' }}><MoscowBadge priority={moscow} /></td>
                <td style={{ fontSize: '0.84rem' }}>{rationale}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
