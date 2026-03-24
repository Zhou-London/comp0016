import { useEffect, useRef } from 'react'
import styles from '../App.module.css'
import ImageWithCaption from '../components/ImageWithCaption'
import SectionHeader from '../components/SectionHeader'

/* ── Scroll-reveal animation hook ── */
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
            { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
        )
        observer.observe(el)
        return () => observer.disconnect()
    }, [])
    return ref
}

function RevealSection({ children, className = '', style = {}, delay = 0 }) {
    const ref = useScrollReveal()
    return (
        <div
            ref={ref}
            className={`reveal-on-scroll ${className}`}
            style={{ ...style, transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    )
}

export default function ImplementationPage() {
    return (
        <section className={styles.section}>
            <SectionHeader title="Implementation" subtitle="Key features and technical breakdown by game systems." />

            <div
                style={{maxWidth: '1100px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>

                {/* Architecture & Scene Flow */}
                <RevealSection className={styles.abstractPanel}>
                    <h3>Architecture & Scene Flow</h3>

                    <h3 style={{marginTop: '2rem'}}>Project Structure</h3>
                    <p style={{marginTop: '1rem'}}>
                        The project is a Unity football practice game with four minigames and a shared application shell.
                        The architecture uses a hybrid approach: Unity scene-driven behaviour for gameplay objects, shared
                        service layers for cross-cutting concerns, explicit composition roots per minigame for dependency
                        wiring, and adapter interfaces around globally shared systems.
                    </p>
                    <p style={{marginTop: '1rem'}}>
                        Minigame assemblies are fully isolated — they never depend on each other directly. Each minigame
                        has its own assembly definition and communicates with shared systems through contracts and adapters
                        in <code>SharedCore</code>. This ensures that adding or modifying one minigame cannot break another.
                    </p>

                    <div className={styles.tableWrap} style={{margin: '1rem 0 0', border: 'none', padding: 0}}>
                        <table>
                            <thead>
                                <tr>
                                    <th>Layer</th>
                                    <th>Responsibility</th>
                                    <th>Key Scripts</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td><b>Application Shell</b></td><td>Main menu navigation, minigame selection, MotionInput mode switching</td><td><code>Assets/Main game/Scripts</code></td></tr>
                                <tr><td><b>Minigame Modules</b></td><td>Per-game scene logic, gameplay components, composition roots</td><td><code>Assets/Minigames/&lt;game&gt;/Scripts</code></td></tr>
                                <tr><td><b>Shared Runtime</b></td><td>Settings, logging, audio, session flow, completion UI, animation</td><td><code>Assets/Shared/</code></td></tr>
                                <tr><td><b>External</b></td><td>MotionInput runtime, Unity packages (URP, TextMeshPro), asset packs</td><td><code>StreamingAssets/MotionInput/</code></td></tr>
                            </tbody>
                        </table>
                    </div>

                    <h3 style={{marginTop: '2rem'}}>Scene Inventory & Navigation</h3>
                    <p style={{marginTop: '1rem'}}>
                        The game consists of nine scenes. The player enters through <code>MainMenuScene</code>, navigates
                        to <code>MinigamesMenuScene</code> as the central hub, and then enters any of the four minigame scenes.
                        Each minigame provides three exit points back to the hub: a back button before the game starts, a
                        quit button in the pause menu during gameplay, and a quit button on the completion screen.
                    </p>

                    <pre style={{
                        marginTop: '0.8rem', padding: '1rem', background: '#f4f7fa', borderRadius: '8px',
                        fontSize: '0.82rem', color: 'var(--slate-700)', overflowX: 'auto', lineHeight: 1.7
                    }}>{`Launch
  └── MainMenuScene
        ├── Play        → MinigamesMenuScene
        │                   ├── Free Kick         → FreekickScene
        │                   ├── Goalkeeping       → GoalkeepingScene
        │                   ├── Penalty Shootout  → PenaltyShootoutScene
        │                   ├── Obstacle Course   → ObstacleCourseScene
        │                   └── Tutorials         → TutorialsScene
        ├── Settings    → SettingsScene
        ├── Credits     → CreditsScene
        └── Quit        → Application exits`}</pre>

                    <h3 style={{marginTop: '2rem'}}>Persistent Singletons</h3>
                    <p style={{marginTop: '1rem'}}>
                        Three objects persist across all scene loads via <code>DontDestroyOnLoad</code>, ensuring consistent
                        state throughout the entire play session:
                    </p>
                    <div className={styles.tableWrap} style={{margin: '0.5rem 0 0', border: 'none', padding: 0}}>
                        <table>
                            <thead>
                                <tr>
                                    <th>Object</th>
                                    <th>Script</th>
                                    <th>Created In</th>
                                    <th>Purpose</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td>GlobalAudioSystem</td><td><code>GlobalGameAudio</code></td><td>Before any scene (auto-bootstrap)</td><td>Centralised audio playback and volume management</td></tr>
                                <tr><td>GameSettings</td><td><code>GameSettings</code></td><td>MainMenuScene</td><td>Game speed, MotionInput toggles, PlayerPrefs persistence</td></tr>
                                <tr><td>MotionInputManager</td><td><code>MotionInputManager</code></td><td>MainMenuScene</td><td>External MI process lifecycle and mode switching</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <h3 style={{marginTop: '2rem'}}>Composition Roots & Dependency Wiring</h3>
                    <p style={{marginTop: '1rem'}}>
                        Each minigame provides a composition root that centralises all scene dependency wiring in <code>Awake()</code>.
                        This pattern replaces scattered <code>FindObjectOfType</code> calls with explicit injection, making
                        dependencies visible and testable. Key interface seams include <code>ISettingsService</code> (read-only
                        game settings), <code>IAudioService</code> (audio playback), and <code>SessionFlow&lt;TState&gt;</code> (typed
                        lifecycle state machine).
                    </p>
                    <div className={styles.tableWrap} style={{margin: '0.5rem 0 0', border: 'none', padding: 0}}>
                        <table>
                            <thead>
                                <tr>
                                    <th>Minigame</th>
                                    <th>Composition Root</th>
                                    <th>Main Controller</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td>Free Kick</td><td><code>FreekickCompositionRoot</code></td><td><code>FreekickController</code></td></tr>
                                <tr><td>Goalkeeping</td><td><code>GoalkeeperCompositionRoot</code></td><td><code>GoalkeeperGameManager</code></td></tr>
                                <tr><td>Penalty Shootout</td><td><code>PenaltyCompositionRoot</code></td><td><code>PenaltyController</code></td></tr>
                                <tr><td>Obstacle Course</td><td><code>ObstacleCourseCompositionRoot</code></td><td><code>ObstacleCourseGameManager</code></td></tr>
                            </tbody>
                        </table>
                    </div>
                </RevealSection>

                {/* Free Kick */}
                <RevealSection className={styles.abstractPanel}>
                    <h3>Free Kick Minigame</h3>
                    <p style={{marginTop: '1rem'}}>
                        A session-based minigame where the player selects a shot lane and executes a kick against a
                        wall-goalkeeper-goal setup. The player uses keyboard input or MotionInput foot tracking to aim
                        at different sections of the goal. The core challenge lies in reading wall position patterns and
                        timing shots to beat the goalkeeper.
                    </p>

                    <h3 style={{marginTop: '2rem'}}>Session & Round Lifecycle</h3>
                    <p style={{marginTop: '1rem'}}>
                        Free Kick runs two coordinated state layers. The session flow manages the high-level
                        progression (Menu → Active → Completed), while the round flow handles individual shot
                        sequences. Supports Easy/Hard difficulty and Endless or TargetScore session types.
                    </p>
                    <div className={styles.tableWrap} style={{margin: '0.5rem 0 0', border: 'none', padding: 0}}>
                        <table>
                            <thead>
                                <tr>
                                    <th>Round Phase</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td><b>Setup</b></td><td>Select next freekick position, switch camera, spawn ball, build wall, determine blocked lanes</td></tr>
                                <tr><td><b>Aiming</b></td><td>Wait for player lane input via keyboard or MotionInput</td></tr>
                                <tr><td><b>Kick</b></td><td>Play kick SFX, randomise shot profile, plan trajectory via <code>FreekickTrajectoryPlanner</code></td></tr>
                                <tr><td><b>InFlight</b></td><td>Apply lateral acceleration, monitor out-of-bounds, timeout, and surface collisions</td></tr>
                                <tr><td><b>Resolving</b></td><td>Determine outcome: goal (trigger detection), block (wall collision), or miss (OOB/timeout)</td></tr>
                                <tr><td><b>Resetting</b></td><td>Reset wall, goalkeeper, ball state; start next round or trigger completion</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <h3 style={{marginTop: '2rem'}}>Shot Planning & Trajectory</h3>
                    <p style={{marginTop: '1rem'}}>
                        Shot planning is coordinated by <code>FreekickShotPlanningCoordinator</code> through a multi-stage
                        pipeline: determine shot lane from player input → evaluate block constraints for the current wall
                        configuration → randomise shot selection (intent, execution, target) using <code>FreekickShotRandomizer</code> →
                        build a <code>FreekickShotRequest</code> from tuning parameters → solve the trajectory arc
                        via <code>FreekickTrajectoryPlanner</code> → apply initial velocity and spin → apply per-frame lateral
                        acceleration during flight. A fallback direct-kick path exists if planning fails.
                    </p>

                    <h3 style={{marginTop: '2rem'}}>Service Decomposition</h3>
                    <p style={{marginTop: '1rem'}}>
                        Free Kick uses a thin-controller pattern where <code>FreekickController</code> owns only Unity lifecycle
                        and serialised references, while domain logic is delegated to focused services through narrow
                        host interfaces:
                    </p>
                    <div className={styles.tableWrap} style={{margin: '0.5rem 0 0', border: 'none', padding: 0}}>
                        <table>
                            <thead>
                                <tr>
                                    <th>Service</th>
                                    <th>Responsibility</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td><code>FreekickShotPlanningCoordinator</code></td><td>Shot selection, trajectory solving, and execution</td></tr>
                                <tr><td><code>FreekickRoundManager</code></td><td>Position selection, camera switching, ball spawning, wall building, reset orchestration</td></tr>
                                <tr><td><code>FreekickSessionLifecycleService</code></td><td>Mode/session transitions, completion UI via <code>SharedCompletionScreenController</code></td></tr>
                                <tr><td><code>FreekickScoreTracker</code></td><td>Score, streak, and best streak tracking</td></tr>
                                <tr><td><code>FreekickAudioDirector</code></td><td>Ambient crowd, reaction SFX, fade-to-silence before completion</td></tr>
                            </tbody>
                        </table>
                    </div>
                </RevealSection>

                {/* Goalkeeping */}
                <RevealSection className={styles.abstractPanel}>
                    <h3>Goalkeeping Minigame</h3>
                    <p style={{marginTop: '1rem'}}>
                        A first-person minigame where the player controls a goalkeeper's hands to block incoming shots.
                        The player uses keyboard input or MotionInput hand tracking to move gloves into the path of balls
                        launched on curved trajectories. Supports Easy/Hard difficulty and Endless or TargetScore modes.
                    </p>

                    <h3 style={{marginTop: '2rem'}}>Bezier Curve Ball Flight</h3>
                    <p style={{marginTop: '1rem'}}>
                        <code>GoalkeeperBallCurvePath</code> implements quadratic Bezier movement for realistic curved ball
                        trajectories: <b>B(t) = (1-t)²P0 + 2(1-t)tP1 + t²P2</b>. Time is normalised from 0 to 1 over the
                        flight duration. After the curve completes, the ball continues in a straight line using the Bezier
                        derivative at t=1 to ensure it crosses the goal line. The ball is kinematic — transform position
                        is updated directly with no physics forces involved.
                    </p>
                    <p style={{marginTop: '1rem'}}>
                        <code>GoalkeeperBallShooter</code> spawns balls at the <code>ShootPoint</code> transform and attaches the
                        curve path component. Ball speed is a base value multiplied by the game speed setting.
                        An <code>IRandomSource</code> interface is injected so targeting can be made deterministic in tests.
                    </p>

                    <h3 style={{marginTop: '2rem'}}>Hand & Glove Tracking</h3>
                    <p style={{marginTop: '1rem'}}>
                        <code>GoalkeeperFPSController</code> provides three snap positions for the goalkeeper body (centre,
                        left, right) with corresponding hand target positions. Hands are offset forward and spread slightly
                        apart. Movement uses smooth interpolation between positions. <code>GoalkeeperGloveSetup</code> loads
                        the glove FBX model from resources, extracts two sub-meshes (<code>Group001</code> for right,
                        <code> Group002</code> for left), and parents them to hand GameObjects.
                    </p>

                    <h3 style={{marginTop: '2rem'}}>Save & Goal Detection</h3>
                    <p style={{marginTop: '1rem'}}>
                        Two detection mechanisms work together: <code>GoalkeeperSaveDetector</code> fires on glove collision
                        contact, and <code>GoalkeeperGoalDetector</code> uses a trigger behind the goal line as fallback.
                        The game manager also performs distance-based judgement — in Easy mode at the hand plane, in Hard
                        mode at the goal line. Balls outside the goal frame count as saves. A <code>ballJudged</code> flag
                        prevents double-counting.
                    </p>

                    <h3 style={{marginTop: '2rem'}}>Difficulty Differences</h3>
                    <div className={styles.tableWrap} style={{margin: '0.5rem 0 0', border: 'none', padding: 0}}>
                        <table>
                            <thead>
                                <tr>
                                    <th>Aspect</th>
                                    <th>Easy Mode</th>
                                    <th>Hard Mode</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td>Ball trajectory</td><td>Straight-line paths to hand positions</td><td>Curved paths with random deflection</td></tr>
                                <tr><td>Target positions</td><td>Centre-top, left, right</td><td>Edge-left, edge-right, top-centre</td></tr>
                                <tr><td>Judgement point</td><td>Hand plane</td><td>Goal line</td></tr>
                                <tr><td>Shooter position</td><td>Fixed centre</td><td>Randomised left/right</td></tr>
                            </tbody>
                        </table>
                    </div>
                </RevealSection>

                {/* Penalty Shootout */}
                <RevealSection className={styles.abstractPanel}>
                    <h3>Penalty Shootout Minigame</h3>
                    <p style={{marginTop: '1rem'}}>
                        A round-based minigame where the player attempts to score penalties against a goalkeeper. In Hard
                        mode, each shot is controlled using a power meter; in Easy mode, a fixed force is used. The ball
                        is simulated using Unity physics, and outcomes are determined through collision and trigger detection.
                    </p>

                    <h3 style={{marginTop: '2rem'}}>Shot Lifecycle</h3>
                    <p style={{marginTop: '1rem'}}>
                        Each penalty follows a consistent sequence managed by <code>PenaltyController</code>:
                    </p>
                    <div className={styles.tableWrap} style={{margin: '0.5rem 0 0', border: 'none', padding: 0}}>
                        <table>
                            <thead>
                                <tr>
                                    <th>Phase</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td><b>Preparation</b></td><td>Reset round state, enable goalkeeper movement, re-arm power meter</td></tr>
                                <tr><td><b>Power Selection</b></td><td>In Hard mode, <code>PenaltyPowerMeter</code> oscillates until the player shoots. Easy mode uses fixed force</td></tr>
                                <tr><td><b>Kick</b></td><td>Ball launched using a physics impulse based on selected power</td></tr>
                                <tr><td><b>InFlight</b></td><td>Timeout coroutine armed (4s default). Goal/miss/save handlers can resolve before timeout</td></tr>
                                <tr><td><b>Resolution</b></td><td>Goal (<code>PenaltyGoalTrigger</code>), Save (goalkeeper collider), Miss (<code>PenaltyMissTrigger</code>), or Timeout</td></tr>
                                <tr><td><b>Reset</b></td><td>Ball and goalkeeper reset, next shot prepared</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <h3 style={{marginTop: '2rem'}}>Goalkeeper Behaviour</h3>
                    <p style={{marginTop: '1rem'}}>
                        <code>PenaltyGoalkeeperMovement</code> handles horizontal oscillation along the goal line.
                        <code> PenaltyGoalkeeperSave</code> detects saves via collision contact. Difficulty settings affect
                        movement speed and horizontal save reach multiplier — the goalkeeper covers more ground in Hard mode.
                    </p>

                    <h3 style={{marginTop: '2rem'}}>Scoring</h3>
                    <p style={{marginTop: '1rem'}}>
                        <code>PenaltyScore</code> tracks total score, current streak, and best streak, updating the HUD
                        in real time. Goals increase score and extend the streak; misses and saves reset the streak. In
                        TargetScore mode, reaching the target triggers completion with an ambient audio fade and the shared
                        completion panel. Session states: Menu → ActiveRound → ResolvingRound → Completed.
                    </p>
                </RevealSection>

                {/* Obstacle Course */}
                <RevealSection className={styles.abstractPanel}>
                    <h3>Obstacle Course Minigame</h3>
                    <p style={{marginTop: '1rem'}}>
                        A sequential task minigame where the player completes eight challenges across eight pitch regions.
                        Each task requires kicking or dribbling a ball to hit targets, avoid defenders, pop balloons, or
                        match colours. The player character moves automatically between regions as tasks are completed.
                    </p>

                    <h3 style={{marginTop: '2rem'}}>Task System & Sequence Generation</h3>
                    <p style={{marginTop: '1rem'}}>
                        <code>ObstacleTaskCatalog</code> defines task descriptors paired with dedicated executor classes.
                        Each difficulty has a fixed pool of eight tasks, shuffled using Fisher-Yates until no two consecutive
                        tasks share the same type (capped at 100 attempts). Each task type has its own <code>IObstacleTaskExecutor</code> that
                        handles spawning, completion detection, input routing, and cleanup.
                    </p>
                    <div className={styles.tableWrap} style={{margin: '0.5rem 0 0', border: 'none', padding: 0}}>
                        <table>
                            <thead>
                                <tr>
                                    <th>Task</th>
                                    <th>Executor</th>
                                    <th>What it Spawns</th>
                                    <th>Difficulty</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td>Three Targets</td><td><code>ThreeTargetsTaskExecutor</code></td><td>Ball + 3 standard targets</td><td>Easy</td></tr>
                                <tr><td>Three Targets Swivel</td><td><code>ThreeTargetsTaskExecutor(swivel)</code></td><td>Ball + rotating arrow target</td><td>Hard</td></tr>
                                <tr><td>Defender</td><td><code>DefenderTaskExecutor</code></td><td>Ball + 1 defender + goal</td><td>Easy</td></tr>
                                <tr><td>Defender Hard</td><td><code>DefenderTaskExecutor(hard)</code></td><td>Ball + 2 defenders + goal</td><td>Hard</td></tr>
                                <tr><td>Dribble</td><td><code>DribbleTaskExecutor</code></td><td>Ball + cone course + finish line</td><td>Both</td></tr>
                                <tr><td>Balloon Pop</td><td><code>BalloonPopTaskExecutor</code></td><td>Ball + 1 balloon</td><td>Easy</td></tr>
                                <tr><td>Balloon Pop Hard</td><td><code>BalloonPopTaskExecutor(hard)</code></td><td>Ball + 3 balloons</td><td>Hard</td></tr>
                                <tr><td>Colour Match</td><td><code>ColorMatchTaskExecutor</code></td><td>Colour targets + colour ball sequence</td><td>Hard</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <h3 style={{marginTop: '2rem'}}>Region Layout & Player Movement</h3>
                    <p style={{marginTop: '1rem'}}>
                        <code>ObstacleCoursePitchManager</code> divides the pitch into an 8-region grid (2 columns × 4 rows).
                        Regions 1–4 run bottom to top in the left column; regions 5–8 run top to bottom in the right column,
                        forming a continuous S-shaped path. When crossing the region 4→5 boundary, the player rotates 180°
                        before the next task begins. All spawning managers use the pitch manager for world position calculations.
                    </p>

                    <h3 style={{marginTop: '2rem'}}>Ball Interactions</h3>
                    <p style={{marginTop: '1rem'}}>
                        <code>ObstacleCourseBall</code> handles three interaction modes: <b>ground kick</b> (flat velocity in
                        the player-relative direction), <b>air kick</b> (angled velocity with custom gravity for balloon tasks),
                        and <b>dribble</b> (smooth <code>MoveTowards</code> to a calculated position). Out-of-bounds is detected
                        by distance from spawn; on OOB or defender collision, a miss is reported and the ball respawns.
                    </p>

                    <h3 style={{marginTop: '2rem'}}>Scoring & Streaks</h3>
                    <p style={{marginTop: '1rem'}}>
                        <code>ObstacleCourseObstacleManager</code> awards points per task type with first-try and streak bonuses.
                        Streaks persist across tasks (resetting on miss) and are tracked separately from the score.
                        Sessions can run as a single round, multiple rounds (1–10), or endless mode. On round completion,
                        the player returns to region 1 for a new shuffled sequence.
                    </p>
                </RevealSection>

                {/* Game Controllers */}
                <RevealSection className={styles.abstractPanel}>
                    <h3>Game Controllers</h3>
                    <p style={{marginTop: '1rem'}}>
                        Each minigame has its own control scheme, initially implemented using keyboard inputs and then
                        mapped to MotionInput gesture controls. The game uses Unity's legacy <code>Input.GetKeyDown</code> / <code>Input.GetKey</code> API
                        throughout. All minigames support keyboard fallback when MotionInput is unavailable.
                    </p>

                    <h3 style={{marginTop: '2rem'}}>Free Kick / Penalty Shootout / Obstacle Course Controls</h3>
                    <p style={{marginTop: '1rem'}}>
                        These three minigames share the kicking gesture mode (<code>football/kicking-easy-right</code>):
                    </p>
                    <div className={styles.tableWrap} style={{margin: '0.5rem 0 0', border: 'none', padding: 0}}>
                        <table>
                            <thead>
                                <tr>
                                    <th>Keybind</th>
                                    <th>Action</th>
                                    <th>MotionInput Equivalent</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td><b>A</b></td><td>Kick left / select left lane</td><td>Left foot triggers left football icon</td></tr>
                                <tr><td><b>W</b></td><td>Kick centre / select centre lane</td><td>Either foot triggers centre football icon</td></tr>
                                <tr><td><b>D</b></td><td>Kick right / select right lane</td><td>Right foot triggers right football icon</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <h3 style={{marginTop: '2rem'}}>Goalkeeping Controls</h3>
                    <p style={{marginTop: '1rem'}}>
                        Goalkeeping uses the hands-only gesture mode (<code>football/goalkeeping-easy</code>):
                    </p>
                    <div className={styles.tableWrap} style={{margin: '0.5rem 0 0', border: 'none', padding: 0}}>
                        <table>
                            <thead>
                                <tr>
                                    <th>Keybind</th>
                                    <th>Action</th>
                                    <th>MotionInput Equivalent</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td><b>A / Left Arrow</b></td><td>Dive left</td><td>Left hand triggers left glove icon</td></tr>
                                <tr><td><b>W / Up Arrow</b></td><td>Raise hands to centre-top</td><td>Either hand triggers centre glove icon</td></tr>
                                <tr><td><b>D / Right Arrow</b></td><td>Dive right</td><td>Right hand triggers right glove icon</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <h3 style={{marginTop: '2rem'}}>Hands-Only Mode</h3>
                    <p style={{marginTop: '1rem'}}>
                        A global <b>Hands Only Mode</b> toggle in the settings overrides all minigames to use
                        the <code>football/goalkeeping-easy</code> gesture mode, allowing players to use hand gestures
                        instead of kicking for Free Kick, Penalty Shootout, and Obstacle Course. This improves
                        accessibility for players who may have difficulty with full-body movements.
                    </p>
                </RevealSection>

                {/* MotionInput */}
                <RevealSection className={styles.abstractPanel}>
                    <h3>MotionInput Integration</h3>
                    <p style={{marginTop: '1rem'}}>
                        MotionInput is an external Windows application that translates physical gestures into input
                        events via a camera feed. It runs alongside the Unity process as a separate window, providing
                        motion-based controls across all four minigames. Virtual button icons are displayed on the
                        camera feed window, and their activation is triggered when the player's body part (foot or hand)
                        enters the designated area.
                    </p>

                    <h3 style={{marginTop: '2rem'}}>Gesture Modes</h3>
                    <div className={styles.tableWrap} style={{margin: '0.5rem 0 0', border: 'none', padding: 0}}>
                        <table>
                            <thead>
                                <tr>
                                    <th>Mode</th>
                                    <th>Config Path</th>
                                    <th>Used By</th>
                                    <th>Icons</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td>Kicking</td><td><code>football/kicking-easy-right</code></td><td>Free Kick, Penalty Shootout, Obstacle Course</td><td>Football icons for left/centre/right kick</td></tr>
                                <tr><td>Goalkeeping</td><td><code>football/goalkeeping-easy</code></td><td>Goalkeeping (and all games in Hands Only Mode)</td><td>Glove icons for left/centre/right save</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <h3 style={{marginTop: '2rem'}}>Runtime Lifecycle</h3>
                    <p style={{marginTop: '1rem'}}>
                        <code>MotionInputManager</code> is a singleton that persists for the full session. On startup, it
                        checks for an existing MI window:
                    </p>
                    <ul style={{marginTop: '0.5rem', paddingLeft: '1.5rem', color: 'var(--slate-700)', lineHeight: 1.8}}>
                        <li><b>Window found, correct mode:</b> reuses the existing instance immediately</li>
                        <li><b>Window found, different mode:</b> writes new mode to config, sends Shift+R to trigger reload (~300ms switch)</li>
                        <li><b>Window not found:</b> launches <code>motioninput.exe</code> on a background thread, polls for the window every 0.5s for up to 10s</li>
                    </ul>
                    <p style={{marginTop: '1rem'}}>
                        Once detected, the window chrome is removed, the window is positioned over the scene's
                        <code> MotionInput Preview</code> panel, and Unity is refocused. If detection fails after 10 seconds,
                        the game falls back to keyboard controls automatically.
                    </p>

                    <h3 style={{marginTop: '2rem'}}>Configuration Model</h3>
                    <p style={{marginTop: '1rem'}}>
                        The bundled config in <code>StreamingAssets/MotionInput/data/config.json</code> is copied to
                        <code> Application.persistentDataPath</code> on first run (with version-based upgrades and automatic backup).
                        Mode switching writes only the <code>mode</code> field via structured JSON serialisation — StreamingAssets
                        is never modified at runtime. Mode files are validated against the <code>modes/</code> folder before any
                        write is attempted.
                    </p>

                    <h3 style={{marginTop: '2rem'}}>Window Positioning</h3>
                    <p style={{marginTop: '1rem'}}>
                        Each scene has a <code>MotionInputTransformRegistrar</code> attached to a UI panel that defines where
                        the MI window should appear. <code>MotionInputWindowAdapter.ApplyTransform()</code> uses Win32 APIs
                        (<code>DllImport("user32.dll")</code>) to calculate the desktop position from the Unity panel's world
                        corners. The MI window is repositioned whenever a scene loads or mode switches.
                    </p>
                </RevealSection>

                {/* Graphics */}
                <RevealSection className={styles.abstractPanel}>
                    <h3>Graphics & Visual Pipeline</h3>
                    <p style={{marginTop: '1rem'}}>
                        The game runs on <b>Unity 6 with Universal Render Pipeline (URP)</b>. Visual style is achieved
                        through a combination of toon shading, a unified colour palette, and FSR upscaling.
                    </p>

                    <h3 style={{marginTop: '2rem'}}>Toon Shader</h3>
                    <p style={{marginTop: '1rem'}}>
                        Unity Toon Shader replaces the default Lit shader to produce a cartoon-like shading effect
                        that fits the game's visual style. When applying the shader to a material, the 1st and 2nd shadow
                        maps share the same texture with different brightness levels. Shadow distance is adjusted per material
                        for natural shadow transitions. The shader only works with directional light sources.
                    </p>

                    <h3 style={{marginTop: '2rem'}}>Materials & Assets</h3>
                    <div className={styles.tableWrap} style={{margin: '0.5rem 0 0', border: 'none', padding: 0}}>
                        <table>
                            <thead>
                                <tr>
                                    <th>Material / Pack</th>
                                    <th>Usage</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td><b>Football_ColorPalette</b></td><td>Primary material for nearly all meshes — players, stadium, football. Uses RGB offsets and saturation values</td></tr>
                                <tr><td><b>Football_Field</b></td><td>Pitch surface material</td></tr>
                                <tr><td><b>Football Mini</b></td><td>Most widely-used mesh collection — stadium, football, and player models</td></tr>
                                <tr><td><b>Hyper Casual Mega Football</b></td><td>Supplementary football-related meshes</td></tr>
                                <tr><td><b>GoalPopup / SavePopup</b></td><td>Animated prefabs for goal/save outcome feedback</td></tr>
                                <tr><td><b>Crowd Sprites</b></td><td>2D textures for stadium crowd, animated via <code>JumpAnimScript</code></td></tr>
                            </tbody>
                        </table>
                    </div>

                    <h3 style={{marginTop: '2rem'}}>Rendering & Performance</h3>
                    <p style={{marginTop: '1rem'}}>
                        <b>FSR 1.0</b> upscaling renders at 75% resolution for improved GPU performance while maintaining
                        visual quality. The framerate is locked to 60 fps via <code>QualitySettings.vSyncCount = 0</code> and
                        <code> Application.targetFrameRate = 60</code>. The font <b>Need for Font SDF</b> is used consistently
                        across all UI with a global customisation for readability. Each minigame scene is equipped with a
                        full football stadium, directional light, players, and football components.
                    </p>
                </RevealSection>

                {/* Audio */}
                <RevealSection className={styles.abstractPanel}>
                    <h3>Audio System</h3>
                    <p style={{marginTop: '1rem'}}>
                        Audio is centralised in <code>GlobalGameAudio</code>, a singleton that bootstraps automatically
                        before any scene loads and persists across all scenes. All minigames and menus consume this
                        shared system rather than creating scene-local audio logic.
                    </p>

                    <h3 style={{marginTop: '2rem'}}>Audio Channels & Routing</h3>
                    <div className={styles.tableWrap} style={{margin: '0.5rem 0 0', border: 'none', padding: 0}}>
                        <table>
                            <thead>
                                <tr>
                                    <th>Channel</th>
                                    <th>Purpose</th>
                                    <th>Key Methods</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td><b>UI</b></td><td>Menu clicks and button hover feedback</td><td><code>PlayUiClick</code>, <code>PlayUiHover</code></td></tr>
                                <tr><td><b>SFX</b></td><td>Gameplay one-shots</td><td><code>PlayKick</code>, <code>PlayWhistle</code>, <code>PlayBallBlock</code>, <code>PlayGoalScored</code></td></tr>
                                <tr><td><b>CrowdOneShot</b></td><td>Reaction clips</td><td><code>PlayShotMissOrSavedReaction</code>, <code>PlaySaveCelebration</code></td></tr>
                                <tr><td><b>CrowdAmbient</b></td><td>Looping ambient noise</td><td><code>StartAmbientCrowd</code>, <code>StopAmbientCrowd</code></td></tr>
                                <tr><td><b>MenuMusic</b></td><td>Persistent looping music</td><td><code>StartMenuMusic</code>, <code>PauseMenuMusic</code></td></tr>
                            </tbody>
                        </table>
                    </div>
                    <p style={{marginTop: '1rem'}}>
                        All sources are 2D (spatialBlend = 0). Menu music pauses (not stops) when entering minigames,
                        retaining playback position for seamless resume. <code>GlobalUIButtonSfxHook</code> automatically
                        scans for button components and attaches click sound listeners without manual wiring.
                    </p>

                    <h3 style={{marginTop: '2rem'}}>Volume & Preference Model</h3>
                    <p style={{marginTop: '1rem'}}>
                        Volume and toggle preferences persist via <code>PlayerPrefs</code> with separate sliders for SFX,
                        crowd, and music. The SFX slider scales base volumes for all gameplay sounds; the crowd slider
                        scales one-shot reactions and ambient noise; the music slider controls menu music. Changes in
                        <code> SettingsUI</code> take effect immediately and persist across sessions.
                    </p>

                    <h3 style={{marginTop: '2rem'}}>Clip Resolution</h3>
                    <p style={{marginTop: '1rem'}}>
                        <code>GlobalGameAudio.ResolveClip</code> follows a priority chain: existing serialised AudioClip field →
                        <code> Resources/EditedSound/&#123;ClipName&#125;</code> → <code>Resources/&#123;ClipName&#125;</code> → lowercase
                        variants → editor AssetDatabase fallback. Runtime clip names include UIClick, FootballKick, BallBlock,
                        CrowdCheer, CrowdCelebrate, AmbientCrowd, MenuMusic, and Whistle.
                    </p>
                </RevealSection>

                {/* Configuration */}
                <RevealSection className={styles.abstractPanel}>
                    <h3>Configuration & Settings</h3>
                    <p style={{marginTop: '1rem'}}>
                        Configuration flows through four channels: <code>PlayerPrefs</code> for user-facing settings,
                        shared singletons for runtime state, inspector serialised fields for gameplay tuning, and
                        <code> StreamingAssets</code> for MotionInput configuration.
                    </p>

                    <h3 style={{marginTop: '2rem'}}>Player-Facing Settings</h3>
                    <div className={styles.tableWrap} style={{margin: '0.5rem 0 0', border: 'none', padding: 0}}>
                        <table>
                            <thead>
                                <tr>
                                    <th>Setting</th>
                                    <th>PlayerPrefs Key</th>
                                    <th>Type</th>
                                    <th>Default</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td>SFX Volume</td><td><code>GlobalAudio.SfxVolume</code></td><td>float (0–1)</td><td>1.0</td></tr>
                                <tr><td>Crowd Volume</td><td><code>GlobalAudio.CrowdVolume</code></td><td>float (0–1)</td><td>1.0</td></tr>
                                <tr><td>Music Volume</td><td><code>GlobalAudio.MusicVolume</code></td><td>float (0–1)</td><td>1.0</td></tr>
                                <tr><td>SFX Enabled</td><td><code>GlobalAudio.SfxEnabled</code></td><td>int (0/1)</td><td>1</td></tr>
                                <tr><td>Crowd Enabled</td><td><code>GlobalAudio.CrowdEnabled</code></td><td>int (0/1)</td><td>1</td></tr>
                                <tr><td>Game Speed</td><td>—</td><td>float (0.5–1.5)</td><td>1.0</td></tr>
                                <tr><td>MotionInput Enabled</td><td><code>MotionInputEnabled</code></td><td>int (0/1)</td><td>1</td></tr>
                                <tr><td>Hands Only Mode</td><td><code>HandsOnlyMode</code></td><td>int (0/1)</td><td>0</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <h3 style={{marginTop: '2rem'}}>Inspector-Driven Gameplay Tuning</h3>
                    <p style={{marginTop: '1rem'}}>
                        Several systems rely on serialised inspector values for developer-only tuning that is not exposed
                        to the player. These values are saved in the scene file and must be committed with the scene.
                    </p>
                    <div className={styles.tableWrap} style={{margin: '0.5rem 0 0', border: 'none', padding: 0}}>
                        <table>
                            <thead>
                                <tr>
                                    <th>System</th>
                                    <th>Key Tunable Values</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td><code>FreekickController</code></td><td>Trajectory tuning (apex height, curve strength, wall clearance), kick force, camera distance, wall block chances</td></tr>
                                <tr><td><code>GoalkeeperGameManager</code></td><td>Save distance threshold, goal dimensions, reset delay, ball timeout duration</td></tr>
                                <tr><td><code>GoalkeeperBallShooter</code></td><td>Ball speed, shot angle, hard mode behaviour</td></tr>
                                <tr><td><code>PenaltyController</code></td><td>Kick force range, goalkeeper speed per difficulty, shot timeout, reset delay</td></tr>
                                <tr><td><code>ObstacleCourseGameManager</code></td><td>Player move speed, rotation speed, player height and Z offset</td></tr>
                                <tr><td><code>ObstacleCourseBall</code></td><td>Kick speed, air kick speed/angle, dribble speed, out-of-bounds distance</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <h3 style={{marginTop: '2rem'}}>Environment Requirements</h3>
                    <ul style={{marginTop: '0.5rem', paddingLeft: '1.5rem', color: 'var(--slate-700)', lineHeight: 1.8}}>
                        <li><b>Platform:</b> Windows only — MotionInput uses <code>DllImport("user32.dll")</code> for window management</li>
                        <li><b>Engine:</b> Unity 6 with Universal Render Pipeline, verified on Windows 10 and Windows 11</li>
                        <li><b>MotionInput files:</b> must be present in <code>StreamingAssets/MotionInput/</code> at build time (not included in repository)</li>
                        <li><b>Singleton load order:</b> GameSettings and MotionInputManager require starting from MainMenuScene; direct scene entry in the editor falls back to defaults</li>
                    </ul>
                </RevealSection>

            </div>
        </section>
    )
}
