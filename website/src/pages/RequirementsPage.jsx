import styles from '../App.module.css'
import SectionHeader from '../components/SectionHeader'

/* ── inline SVG use-case diagram ── */
function UseCaseDiagram() {
  return (
    <svg viewBox="0 0 900 620" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: 900, display: 'block', margin: '0 auto' }}>
      {/* System boundary */}
      <rect x="200" y="20" width="500" height="580" rx="18" fill="#f0f7ff" stroke="#3b82f6" strokeWidth="2" strokeDasharray="8 4" />
      <text x="450" y="50" textAnchor="middle" fontWeight="700" fontSize="15" fill="#1e3a5f">MotionInput Football Practice System</text>

      {/* ── Actors ── */}
      {/* Player */}
      <circle cx="80" cy="200" r="18" fill="none" stroke="#1f4f93" strokeWidth="2" />
      <line x1="80" y1="218" x2="80" y2="270" stroke="#1f4f93" strokeWidth="2" />
      <line x1="80" y1="235" x2="55" y2="255" stroke="#1f4f93" strokeWidth="2" />
      <line x1="80" y1="235" x2="105" y2="255" stroke="#1f4f93" strokeWidth="2" />
      <line x1="80" y1="270" x2="55" y2="300" stroke="#1f4f93" strokeWidth="2" />
      <line x1="80" y1="270" x2="105" y2="300" stroke="#1f4f93" strokeWidth="2" />
      <text x="80" y="320" textAnchor="middle" fontSize="12" fill="#1f4f93" fontWeight="600">Player</text>

      {/* Teacher / Caregiver */}
      <circle cx="80" cy="440" r="18" fill="none" stroke="#1f4f93" strokeWidth="2" />
      <line x1="80" y1="458" x2="80" y2="510" stroke="#1f4f93" strokeWidth="2" />
      <line x1="80" y1="475" x2="55" y2="495" stroke="#1f4f93" strokeWidth="2" />
      <line x1="80" y1="475" x2="105" y2="495" stroke="#1f4f93" strokeWidth="2" />
      <line x1="80" y1="510" x2="55" y2="540" stroke="#1f4f93" strokeWidth="2" />
      <line x1="80" y1="510" x2="105" y2="540" stroke="#1f4f93" strokeWidth="2" />
      <text x="80" y="560" textAnchor="middle" fontSize="12" fill="#1f4f93" fontWeight="600">Teacher /</text>
      <text x="80" y="575" textAnchor="middle" fontSize="12" fill="#1f4f93" fontWeight="600">Caregiver</text>

      {/* MotionInput Engine (secondary actor) */}
      <rect x="780" y="250" width="100" height="50" rx="6" fill="#fff" stroke="#1f4f93" strokeWidth="2" />
      <text x="830" y="270" textAnchor="middle" fontSize="10" fill="#1f4f93" fontWeight="600">MotionInput</text>
      <text x="830" y="284" textAnchor="middle" fontSize="10" fill="#1f4f93" fontWeight="600">Engine</text>

      {/* ── Use case ellipses ── */}
      {[
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
      ].map((uc, i) => (
        <g key={i}>
          <ellipse cx={uc.cx} cy={uc.cy} rx="140" ry="22" fill="#fff" stroke="#3b82f6" strokeWidth="1.5" />
          <text x={uc.cx} y={uc.cy + 5} textAnchor="middle" fontSize="11.5" fill="#1e3a5f">{uc.label}</text>
        </g>
      ))}

      {/* ── Associations (Player) ── */}
      {[85, 140, 195, 250, 305, 365, 420, 475, 575].map((cy, i) => (
        <line key={`p${i}`} x1="110" y1={cy < 350 ? 230 : 470} x2="310" y2={cy} stroke="#64748b" strokeWidth="1" />
      ))}

      {/* ── Associations (Teacher/Caregiver) ── */}
      {[365, 475, 530, 575].map((cy, i) => (
        <line key={`t${i}`} x1="110" y1="470" x2="310" y2={cy} stroke="#64748b" strokeWidth="1" />
      ))}

      {/* ── Association (MotionInput Engine) ── */}
      <line x1="780" y1="275" x2="590" y2="420" stroke="#64748b" strokeWidth="1" />

      {/* ── Include relationship: Full Match includes minigames ── */}
      {[85, 140, 195, 250].map((cy, i) => (
        <line key={`inc${i}`} x1="450" y1="283" x2="450" y2={cy + 22} stroke="#64748b" strokeWidth="1" strokeDasharray="6 3" />
      ))}
      <text x="480" y="267" fontSize="9" fill="#64748b" fontStyle="italic">&laquo;include&raquo;</text>
    </svg>
  )
}

/* ── Persona Card component ── */
function PersonaCard({ name, role, age, quote, bio, motivations, idealFeatures, painPoints }) {
  return (
    <article className={styles.card} style={{ gridColumn: 'span 3' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
        <div>
          <h4 style={{ fontSize: '1.1rem', color: 'var(--green-900)', marginBottom: 2 }}>{name}</h4>
          <p style={{ fontSize: '0.82rem', color: 'var(--slate-500)', marginBottom: '0.6rem' }}>{role} &middot; {age}</p>
          <p style={{ fontSize: '0.9rem', color: 'var(--slate-700)', lineHeight: 1.6 }}>{bio}</p>
          <blockquote style={{ marginTop: '0.8rem', fontStyle: 'italic', color: '#2980b9', borderLeft: '3px solid #2980b9', paddingLeft: '0.6rem', fontSize: '0.9rem' }}>
            {quote}
          </blockquote>
        </div>
        <div>
          <p style={{ fontWeight: 700, fontSize: '0.88rem', color: 'var(--green-800)', marginBottom: '0.3rem' }}>Motivations</p>
          <ul style={{ paddingLeft: '1.1rem', fontSize: '0.88rem', color: 'var(--slate-700)', marginBottom: '0.7rem' }}>
            {motivations.map((m, i) => <li key={i} style={{ marginBottom: 3 }}>{m}</li>)}
          </ul>
          <p style={{ fontWeight: 700, fontSize: '0.88rem', color: 'var(--green-800)', marginBottom: '0.3rem' }}>Ideal Features</p>
          <ul style={{ paddingLeft: '1.1rem', fontSize: '0.88rem', color: 'var(--slate-700)', marginBottom: '0.7rem' }}>
            {idealFeatures.map((f, i) => <li key={i} style={{ marginBottom: 3 }}>{f}</li>)}
          </ul>
          <p style={{ fontWeight: 700, fontSize: '0.88rem', color: 'var(--green-800)', marginBottom: '0.3rem' }}>Pain Points</p>
          <ul style={{ paddingLeft: '1.1rem', fontSize: '0.88rem', color: 'var(--slate-700)' }}>
            {painPoints.map((p, i) => <li key={i} style={{ marginBottom: 3 }}>{p}</li>)}
          </ul>
        </div>
      </div>
    </article>
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
          <p>
            This project is a collaboration between UCL Computer Science and four external partners.
            The <strong>National Autistic Society (NAS)</strong> provides domain expertise on the needs of autistic children and advises on accessibility and sensory design.
            <strong> MotionInput Games Ltd</strong> supplies the MotionInput Engine, enabling full-body gesture recognition so players can interact with the game using natural movements instead of traditional controllers.
            <strong> Intel</strong> contributes hardware expertise with MPU technology, and <strong>Coca-Cola</strong> supports the project in the context of the upcoming 2026 FIFA World Cup, aligning with global efforts to make sports more inclusive and accessible.
          </p>
          <p style={{ marginTop: '0.6rem' }}>
            Children with autism spectrum disorder often face challenges with physical coordination, social interaction, and sensory processing. Traditional sports environments can be overwhelming due to unpredictable movements, noise, and social pressure. Existing sports video games typically rely on standard controllers or complex physical interactions that may not be comfortable or accessible for autistic players.
            The MotionInput Football Practice project addresses this gap by developing an interactive, motion-controlled football training game that allows children to practise football through natural body movements &mdash; kicking with their feet and saving goals with their hands &mdash; in a structured, sensory-friendly environment. While designed primarily for autistic children, the game is inclusive and suitable for all players who enjoy football. Our culture is inclusive and diverse; we hope everyone can enjoy the joy of football.
          </p>
        </article>
      </div>

      {/* ────────── Project Goals ────────── */}
      <div className={styles.contentGrid} style={{ marginTop: '1rem' }}>
        <article className={styles.card} style={{ gridColumn: 'span 3' }}>
          <h3>Project Goals</h3>
          <ol style={{ paddingLeft: '1.2rem', color: 'var(--slate-700)' }}>
            <li style={{ marginBottom: '0.4rem' }}>Develop an accessible, motion-controlled football game that uses full-body tracking and gesture recognition to interact with gameplay elements, removing the barrier of traditional input methods.</li>
            <li style={{ marginBottom: '0.4rem' }}>Design engaging football minigames (penalty shootout, free kicks, goalkeeping, obstacle course) that target coordination, reaction time, and motor skill development in autistic children.</li>
            <li style={{ marginBottom: '0.4rem' }}>Create a sensory-friendly and adaptable user interface with customisable visual and audio feedback to accommodate different sensitivities and preferences, helping children gain confidence and enjoy sport.</li>
            <li style={{ marginBottom: '0.4rem' }}>Encourage physical activity and social inclusion by providing a safe, structured environment where children can practise football skills at their own pace without overwhelming social pressure.</li>
            <li>Showcase the system in alignment with the 2026 FIFA World Cup, promoting inclusion and accessibility in sports through interactive technology.</li>
          </ol>
        </article>
      </div>

      {/* ────────── Requirement Gathering ────────── */}
      <div className={styles.contentGrid} style={{ marginTop: '1rem' }}>
        <article className={styles.card} style={{ gridColumn: 'span 3' }}>
          <h3>Requirement Gathering</h3>
          <h4 style={{ color: 'var(--green-700)', fontSize: '0.95rem', marginTop: '0.5rem' }}>How did we collect the requirements?</h4>
          <p>
            Requirements were gathered through a series of well-prepared presentations and meetings with our project partners, conducted both online and in-person. Each session was carefully documented, capturing detailed notes and partner feedback. The feedback was then systematically reviewed and used to iteratively refine the game design, features, and accessibility settings. We believe that building a high-quality game requires continuous learning from stakeholder feedback throughout the development process.
          </p>
          <p style={{ marginTop: '0.5rem' }}>
            Key meetings included sessions with our NAS contact (Marius, a school teacher working with autistic children), our MotionInput technical mentor (Peter Ling), and our UCL supervisor (Prof. Dean Mohamedally). These recurring touchpoints ensured requirements stayed grounded in real classroom needs and technical feasibility.
          </p>

          <h4 style={{ color: 'var(--green-700)', fontSize: '0.95rem', marginTop: '0.8rem' }}>Survey design and data analysis</h4>
          <p>
            Feedback collected from partner presentations was analysed using a <strong>qualitative analysis</strong> approach. Open-ended responses and verbal feedback from each session were reviewed for recurring themes and patterns, including accessibility concerns, desired game features, sensory preferences, and classroom constraints. These themes were then mapped to concrete functional and non-functional requirements, ensuring every requirement traces back to real stakeholder input.
          </p>
        </article>
      </div>

      {/* ────────── Personas ────────── */}
      <div className={styles.contentGrid} style={{ marginTop: '1rem' }}>
        <article className={styles.card} style={{ gridColumn: 'span 3' }}>
          <h3>Personas</h3>
          <p style={{ marginBottom: '0.8rem' }}>Below are two representative user personas that guided our design decisions.</p>
        </article>
        <PersonaCard
          name="Sara Howard"
          role="SEND Teacher"
          age="Female, 37"
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
            <tr><th>ID</th><th>Use Case</th><th>Actor(s)</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr><td>UC1</td><td>Play Penalty Shootout</td><td>Player</td><td>The player selects the Penalty Shootout minigame and uses kicking gestures to shoot the ball past the AI goalkeeper. A power bar mechanism determines shot strength, and the player chooses to shoot left, middle, or right.</td></tr>
            <tr><td>UC2</td><td>Play Free Kick</td><td>Player</td><td>The player selects the Free Kick minigame and chooses from pre-planned trajectories to curve the ball around a wall of defenders. In hard mode, the player can add spin by timing a cursor on screen.</td></tr>
            <tr><td>UC3</td><td>Play Goalkeeping</td><td>Player</td><td>The player selects the Goalkeeping minigame and uses hand gestures to dive left, middle, or right to save incoming shots. In hard mode, the player is locked into their decision and balls curve more frequently.</td></tr>
            <tr><td>UC4</td><td>Play Obstacle Course</td><td>Player</td><td>The player completes a series of football skill challenges including dribbling, passing to targets, and footwork tasks, using body movements tracked by the MotionInput Engine.</td></tr>
            <tr><td>UC5</td><td>Play Full Match</td><td>Player</td><td>The player engages in a simulated 5v5 football match (singleplayer vs. AI) that combines all minigames with additional match actions such as kick-off, passing, running, corners, and headers. The match pauses at key moments for player interaction.</td></tr>
            <tr><td>UC6</td><td>Adjust Difficulty / Speed</td><td>Player, Teacher/Caregiver</td><td>The user switches between Normal and Hard difficulty modes, affecting minigame complexity. An option to adjust game speed (e.g., slower ball movement) is also available for accessibility. The game can auto-adjust speed based on the player&rsquo;s success rate.</td></tr>
            <tr><td>UC7</td><td>Interact via Body Tracking</td><td>Player</td><td>The MotionInput Engine captures full-body gestures in real time and translates them into in-game commands (e.g., foot kick to shoot, hand dive to save). The player stands within the camera capture window and uses natural movements.</td></tr>
            <tr><td>UC8</td><td>Purchase Items in Shop</td><td>Player, Teacher/Caregiver</td><td>The user spends tokens earned through gameplay to unlock cosmetic items including player avatars, footballs, and stadium backgrounds (e.g., playground, park, beach, underwater, space).</td></tr>
            <tr><td>UC9</td><td>Configure Accessibility Settings</td><td>Teacher/Caregiver</td><td>The teacher or caregiver configures sensory accessibility options such as sound volume, visual intensity, motion-input mode (hands-only or full-body), and speed multiplier to suit the child&rsquo;s needs.</td></tr>
            <tr><td>UC10</td><td>Navigate Game Menu</td><td>Player, Teacher/Caregiver</td><td>The user navigates the main menu to select minigames, access settings, view the shop, or start a full match. The menu is designed to be simple and quick to navigate with clear visual cues.</td></tr>
          </tbody>
        </table>
      </div>

      {/* ────────── MoSCoW Functional Requirements ────────── */}
      <div className={styles.tableWrap} style={{ marginTop: '1rem' }}>
        <h3>MoSCoW Functional Requirements</h3>
        <table>
          <thead>
            <tr><th>ID</th><th>Requirement</th><th>MoSCoW</th><th>Rationale</th></tr>
          </thead>
          <tbody>
            <tr><td>F1</td><td>The system shall provide a Penalty Shootout minigame where the player uses kicking gestures to shoot the ball, with a power bar that moves from 0 to 10 and back, requiring the player to time their shot. The player chooses to shoot left, middle, or right.</td><td>Must</td><td>Core minigame that demonstrates motion-controlled football interaction; directly supports the project&rsquo;s primary objective of accessible football practice.</td></tr>
            <tr><td>F2</td><td>The system shall provide a Free Kick minigame where the player selects from pre-planned trajectories to curve the ball around a wall of defenders, with an optional spin mechanic in hard mode.</td><td>Must</td><td>Core minigame offering varied gameplay; trains decision-making and timing skills.</td></tr>
            <tr><td>F3</td><td>The system shall provide a Goalkeeping minigame where the player uses hand gestures to dive left, middle, or right to save incoming shots that slowly fly towards them.</td><td>Must</td><td>Core minigame that exercises upper-body coordination and reaction time through hand-tracking gestures.</td></tr>
            <tr><td>F4</td><td>The system shall provide an Obstacle Course minigame featuring football skill challenges such as dribbling, passing to targets, three-target tasks, swivel-target tasks, defender tasks, balloon tasks, and colour-match tasks.</td><td>Must</td><td>Provides variety in motor-skill training and keeps players engaged with diverse challenges.</td></tr>
            <tr><td>F5</td><td>The system shall integrate with the MotionInput Engine to capture real-time full-body gestures (foot kicks, hand dives, running motions) and translate them into in-game commands without traditional controllers.</td><td>Must</td><td>Fundamental to the project&rsquo;s core value proposition of controller-free, body-tracked interaction for accessibility.</td></tr>
            <tr><td>F6</td><td>The system shall offer configurable difficulty levels (Normal and Hard) for each minigame, adjusting parameters such as required power thresholds, spin mechanics, position locking, and ball-curve frequency.</td><td>Must</td><td>Essential for accommodating different ability levels and allowing children to progress at their own pace.</td></tr>
            <tr><td>F7</td><td>The system shall provide an adjustable game-speed setting that controls how fast game elements move (e.g., ball speed), with an option for automatic speed adjustment based on player success rate.</td><td>Must</td><td>Critical accessibility feature recommended by NAS to prevent overwhelming autistic players with fast-paced gameplay.</td></tr>
            <tr><td>F8</td><td>The system shall provide a main menu interface that is simple, visually clear, and quick to navigate, allowing players to select minigames, access settings, view the shop, or start a full match.</td><td>Must</td><td>Teacher persona (Sara) identified that complex menus waste classroom time and shift focus away from children playing.</td></tr>
            <tr><td>F9</td><td>The system shall support a hands-only mode toggle in settings so that children who cannot use foot gestures can still interact with the game using only hand movements.</td><td>Must</td><td>Ensures inclusivity for children with different physical abilities or mobility constraints.</td></tr>
            <tr><td>F10</td><td>The system shall provide a simulated 5v5 full-match mode (singleplayer vs. AI) that combines all minigame elements with additional match actions: kick-off, running, passing, corners, side throws, and headers.</td><td>Should</td><td>Extends the game beyond isolated minigames into a more immersive football experience; uses 5v5 format to avoid overwhelming children with too many players.</td></tr>
            <tr><td>F11</td><td>The system shall implement a token-based reward system where players earn one coin per point scored, which can be spent in an in-game shop to unlock cosmetic items.</td><td>Should</td><td>Provides positive reinforcement and sustained motivation, encouraging repeated play and skill development.</td></tr>
            <tr><td>F12</td><td>The system shall provide an in-game shop where tokens can be used to purchase cosmetic items including player avatars, footballs, and stadium backgrounds (e.g., playground, park, beach, underwater, space).</td><td>Should</td><td>Offers personalisation and a sense of accomplishment; the variety of fantastical backgrounds adds appeal for children.</td></tr>
            <tr><td>F13</td><td>The system shall provide clear, frequent, and positive visual and audio feedback during gameplay, such as crowd reactions, celebration effects, and score updates, to motivate and reassure the player.</td><td>Should</td><td>Identified by the teacher persona as essential for autistic children who benefit from predictable, affirming responses.</td></tr>
            <tr><td>F14</td><td>The system shall persist a single shared classroom profile storing cumulative tokens, purchased items, and accessibility settings across sessions, using local JSON files or Unity PlayerPrefs.</td><td>Should</td><td>Ensures continuity between classroom sessions without requiring individual user accounts or personal data collection.</td></tr>
            <tr><td>F15</td><td>In the full-match mode, the system shall pause at key moments to allow the player to complete actions (e.g., tackle, pass, shoot), then simulate the outcome before continuing, instead of requiring real-time free-flowing play.</td><td>Should</td><td>A structured, turn-based approach reduces the unpredictability and sensory overload of continuous real-time gameplay.</td></tr>
            <tr><td>F16</td><td>The system shall allow the match duration to be configured either by score (first to N goals) or by a fixed number of actions, targeting approximately 10-minute sessions.</td><td>Could</td><td>Provides flexibility for classroom scheduling; ~10-minute sessions fit well within typical lesson breaks.</td></tr>
            <tr><td>F17</td><td>The system shall implement a high-score tracking feature that records and displays best scores for each minigame to encourage self-competition and improvement.</td><td>Could</td><td>Encourages repeated play and gives the parent/caregiver persona a way to observe the child&rsquo;s progress.</td></tr>
            <tr><td>F18</td><td>The system shall support real-time, free-flowing full-match gameplay with continuous player control, tactics, and formations.</td><td>Won&rsquo;t</td><td>Out of scope for this phase. Real-time match play significantly increases complexity and may overwhelm autistic players; deferred to future work.</td></tr>
            <tr><td>F19</td><td>The system shall support online or offline multiplayer modes.</td><td>Won&rsquo;t</td><td>Explicitly out of scope per project specification; the focus is on single-player, self-paced practice in classroom settings.</td></tr>
          </tbody>
        </table>
      </div>

      {/* ────────── MoSCoW Non-Functional Requirements ────────── */}
      <div className={styles.tableWrap} style={{ marginTop: '1rem' }}>
        <h3>MoSCoW Non-Functional Requirements</h3>
        <table>
          <thead>
            <tr><th>ID</th><th>Category</th><th>Requirement</th><th>MoSCoW</th><th>Rationale</th></tr>
          </thead>
          <tbody>
            <tr><td>NF1</td><td>Performance</td><td>The system shall maintain a frame rate of at least 30 FPS during gameplay on standard classroom PCs or laptops with compatible GPUs, ensuring smooth visual feedback for players.</td><td>Must</td><td>Low frame rates cause visual stuttering that can disorient players and degrade the motion-tracking experience.</td></tr>
            <tr><td>NF2</td><td>Performance</td><td>Gesture recognition latency between the player&rsquo;s physical movement and the corresponding in-game action shall not exceed 100 milliseconds.</td><td>Must</td><td>High latency breaks the connection between body movement and on-screen response, reducing engagement and accessibility.</td></tr>
            <tr><td>NF3</td><td>Usability</td><td>The user interface shall follow sensory-friendly design principles: no rapid flashing visuals, calming colour palettes, clear typography, and consistent layout patterns suitable for autistic users.</td><td>Must</td><td>Sensory overload is a primary pain point identified by both personas; the UI must be predictable and non-overwhelming.</td></tr>
            <tr><td>NF4</td><td>Usability</td><td>A new user (teacher or child) shall be able to understand how to start and play a minigame within 2 minutes of first interaction, without external instructions.</td><td>Must</td><td>Teachers have limited classroom time and cannot spend it learning complex controls; identified by the Sara Howard persona.</td></tr>
            <tr><td>NF5</td><td>Accessibility</td><td>The system shall comply with WCAG 2.2 accessibility guidelines where applicable, and the UK Equality Act 2010, ensuring equitable participation for neurodiverse users.</td><td>Must</td><td>Legal and ethical requirement; ensures the game is genuinely inclusive as intended.</td></tr>
            <tr><td>NF6</td><td>Accessibility</td><td>All visual and audio feedback shall be customisable (volume, intensity, enabling/disabling) to accommodate different sensory sensitivities and preferences.</td><td>Must</td><td>Different autistic children have different sensory thresholds; one-size-fits-all feedback could cause distress.</td></tr>
            <tr><td>NF7</td><td>Security / Privacy</td><td>The system shall not collect, store, or transmit any personal data or biometric identifiers. Only aggregate gameplay data (tokens, settings) is retained locally.</td><td>Must</td><td>Compliance with UK Data Protection Act 2018 and GDPR principles of data minimisation; no user profiles are required.</td></tr>
            <tr><td>NF8</td><td>Reliability</td><td>The system shall gracefully handle MotionInput Engine failures by falling back to a safe state (e.g., displaying a message and returning to the menu) without crashing.</td><td>Must</td><td>Classroom environments may have unreliable hardware; crashes would disrupt lessons and frustrate teachers.</td></tr>
            <tr><td>NF9</td><td>Maintainability</td><td>The codebase shall follow a modular architecture with composition roots, adapter patterns, and separated service classes, allowing individual minigames to be modified or extended without affecting other modules.</td><td>Should</td><td>Enables future contributors and partners to add new minigames or modify existing ones with minimal risk of regressions.</td></tr>
            <tr><td>NF10</td><td>Maintainability</td><td>The project shall include automated unit and integration tests covering composition root wiring, session state machine behaviour, shared adapters, and minigame gameplay rules.</td><td>Should</td><td>Automated tests provide confidence during refactoring and ensure behaviour consistency across code changes.</td></tr>
            <tr><td>NF11</td><td>Extensibility</td><td>The system architecture shall support adding new minigames by following existing patterns (composition root, service classes, log category) without modifying the core shared systems.</td><td>Should</td><td>The project may be extended with additional football activities (e.g., dribbling drills, set-piece practice) in future iterations.</td></tr>
            <tr><td>NF12</td><td>Portability</td><td>The system shall run on standard classroom hardware (Windows PCs/laptops) with no specialised hardware required beyond a compatible GPU and camera for the MotionInput Engine.</td><td>Must</td><td>Schools have limited budgets; requiring specialist equipment would restrict adoption.</td></tr>
            <tr><td>NF13</td><td>Sustainability</td><td>The system shall use local processing only (no cloud services) and energy-efficient Unity URP rendering settings to minimise environmental impact.</td><td>Should</td><td>Aligns with UCL sustainability guidelines and reduces operational costs for schools.</td></tr>
            <tr><td>NF14</td><td>Open Source</td><td>The project source code and documentation shall be publicly available to allow educational institutions and researchers to study, modify, and extend the system.</td><td>Could</td><td>Supports knowledge sharing and aligns with UCL&rsquo;s commitment to open research; enables future student groups to build on the work.</td></tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}
