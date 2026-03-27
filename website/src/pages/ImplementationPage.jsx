import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import styles from '../App.module.css'
import ImageWithCaption from '../components/ImageWithCaption'
import SectionHeader from '../components/SectionHeader'

const BASE = import.meta.env.BASE_URL
const resolveAsset = (path) => path.startsWith('/') ? BASE + path.slice(1) : path

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

function MediaCarousel({ items, width = '60%', height = '340px' }) {
    const [idx, setIdx] = useState(0)
    const [lightbox, setLightbox] = useState(null)
    const len = items.length

    const prev = () => setIdx((i) => (i - 1 + len) % len)
    const next = () => setIdx((i) => (i + 1) % len)

    const getCardStyle = (i) => {
        const diff = ((i - idx) % len + len) % len
        // 0 = current, 1 = next, len-1 = prev, others hidden
        if (diff === 0) {
            return {
                transform: 'translateX(0) scale(1)',
                opacity: 1,
                zIndex: 3,
                filter: 'none',
                pointerEvents: 'auto',
            }
        } else if (diff === 1) {
            return {
                transform: 'translateX(65%) scale(0.85)',
                opacity: 0.6,
                zIndex: 2,
                filter: 'brightness(0.8)',
                pointerEvents: 'none',
            }
        } else if (diff === len - 1) {
            return {
                transform: 'translateX(-65%) scale(0.85)',
                opacity: 0.6,
                zIndex: 2,
                filter: 'brightness(0.8)',
                pointerEvents: 'none',
            }
        } else if (diff === 2) {
            return {
                transform: 'translateX(85%) scale(0.72)',
                opacity: 0.25,
                zIndex: 1,
                filter: 'brightness(0.7)',
                pointerEvents: 'none',
            }
        } else if (diff === len - 2) {
            return {
                transform: 'translateX(-85%) scale(0.72)',
                opacity: 0.25,
                zIndex: 1,
                filter: 'brightness(0.7)',
                pointerEvents: 'none',
            }
        }
        return {
            transform: 'translateX(0) scale(0.6)',
            opacity: 0,
            zIndex: 0,
            filter: 'brightness(0.6)',
            pointerEvents: 'none',
        }
    }

    const renderMedia = (item, i) => {
        const cardPos = getCardStyle(i)
        const isCurrent = ((i - idx) % len + len) % len === 0
        const shared = {
            position: 'absolute',
            maxWidth: '75%', maxHeight: '90%',
            borderRadius: '10px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
            transition: 'transform 0.45s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.45s ease, filter 0.45s ease',
            cursor: isCurrent ? 'zoom-in' : 'pointer',
            ...cardPos,
        }

        const handleClick = () => {
            if (!isCurrent) { setIdx(i); return }
            if (item.type !== 'video') setLightbox(item)
        }

        if (item.type === 'video') {
            return (
                <video
                    key={item.src}
                    controls={isCurrent}
                    muted
                    preload="auto"
                    style={{...shared, display: 'block'}}
                    onClick={() => { if (!isCurrent) setIdx(i) }}
                >
                    <source src={resolveAsset(item.src)} type="video/mp4" />
                </video>
            )
        }
        return (
            <img
                key={item.src}
                src={resolveAsset(item.src)}
                alt={item.label}
                style={{...shared, display: 'block', objectFit: 'contain'}}
                onClick={handleClick}
            />
        )
    }

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '1rem', gap: '0.6rem'}}>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.8rem', width: '100%'}}>
                <button
                    onClick={prev}
                    style={{
                        width: '36px', height: '36px', borderRadius: '50%', border: '1px solid #dde7f3',
                        background: '#fff', cursor: 'pointer', fontSize: '1.1rem', color: 'var(--slate-600)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                        boxShadow: '0 2px 6px rgba(0,0,0,0.08)', zIndex: 10,
                        transition: 'background 0.2s, border-color 0.2s',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = '#f0f7ff'; e.currentTarget.style.borderColor = '#93c5fd' }}
                    onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.borderColor = '#dde7f3' }}
                    aria-label="Previous"
                >&#8249;</button>

                <div style={{
                    width, height, position: 'relative', overflow: 'visible',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                    {items.map((item, i) => renderMedia(item, i))}
                </div>

                <button
                    onClick={next}
                    style={{
                        width: '36px', height: '36px', borderRadius: '50%', border: '1px solid #dde7f3',
                        background: '#fff', cursor: 'pointer', fontSize: '1.1rem', color: 'var(--slate-600)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                        boxShadow: '0 2px 6px rgba(0,0,0,0.08)', zIndex: 10,
                        transition: 'background 0.2s, border-color 0.2s',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = '#f0f7ff'; e.currentTarget.style.borderColor = '#93c5fd' }}
                    onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.borderColor = '#dde7f3' }}
                    aria-label="Next"
                >&#8250;</button>
            </div>

            <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'opacity 0.3s ease'}}>
                <span style={{fontWeight: 600, fontSize: '0.85rem', color: 'var(--green-900)'}}>
                    {items[idx].label}
                </span>
                <span style={{fontSize: '0.78rem', color: 'var(--slate-500)'}}>
                    ({idx + 1} / {items.length})
                </span>
            </div>

            <div style={{display: 'flex', gap: '0.4rem'}}>
                {items.map((_, i) => (
                    <div
                        key={i}
                        onClick={() => setIdx(i)}
                        style={{
                            width: '8px', height: '8px', borderRadius: '50%', cursor: 'pointer',
                            background: i === idx ? 'var(--green-700)' : '#d1d5db',
                            transition: 'background 0.3s, transform 0.2s',
                            transform: i === idx ? 'scale(1.3)' : 'scale(1)',
                        }}
                    />
                ))}
            </div>

            {lightbox && createPortal(
                <div
                    onClick={() => setLightbox(null)}
                    style={{
                        position: 'fixed', inset: 0, zIndex: 9999,
                        background: 'rgba(0,0,0,0.85)',
                        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                        cursor: 'zoom-out', padding: '2rem',
                    }}
                >
                    <img
                        src={resolveAsset(lightbox.src)}
                        alt={lightbox.label}
                        style={{ maxWidth: '90vw', maxHeight: '80vh', borderRadius: '10px', boxShadow: '0 8px 40px rgba(0,0,0,0.5)' }}
                    />
                    {lightbox.label && (
                        <p style={{ marginTop: '1rem', color: '#fff', fontSize: '0.95rem', opacity: 0.85 }}>
                            {lightbox.label}
                        </p>
                    )}
                    <p style={{ marginTop: '0.5rem', color: '#aaa', fontSize: '0.8rem' }}>Click anywhere to close</p>
                </div>,
                document.body
            )}
        </div>
    )
}

function VideoCarousel({ videos }) {
    const [idx, setIdx] = useState(0)

    const prev = () => setIdx((i) => (i - 1 + videos.length) % videos.length)
    const next = () => setIdx((i) => (i + 1) % videos.length)

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '1rem', gap: '0.6rem'}}>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.8rem', width: '100%'}}>
                <button
                    onClick={prev}
                    style={{
                        width: '36px', height: '36px', borderRadius: '50%', border: '1px solid #dde7f3',
                        background: '#fff', cursor: 'pointer', fontSize: '1.1rem', color: 'var(--slate-600)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                        boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
                        transition: 'background 0.2s, border-color 0.2s',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = '#f0f7ff'; e.currentTarget.style.borderColor = '#93c5fd' }}
                    onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.borderColor = '#dde7f3' }}
                    aria-label="Previous video"
                >&#8249;</button>

                <div style={{width: '60%', overflow: 'hidden', borderRadius: '10px', border: '1px solid #dde7f3', position: 'relative'}}>
                    {videos.map((v, i) => (
                        <video
                            key={v.src}
                            controls={i === idx}
                            muted
                            preload="auto"
                            style={{
                                width: '100%', display: 'block', borderRadius: '9px',
                                position: i === idx ? 'relative' : 'absolute',
                                top: 0, left: 0,
                                opacity: i === idx ? 1 : 0,
                                pointerEvents: i === idx ? 'auto' : 'none',
                                transition: 'opacity 0.4s ease',
                            }}
                        >
                            <source src={resolveAsset(v.src)} type="video/mp4" />
                        </video>
                    ))}
                </div>

                <button
                    onClick={next}
                    style={{
                        width: '36px', height: '36px', borderRadius: '50%', border: '1px solid #dde7f3',
                        background: '#fff', cursor: 'pointer', fontSize: '1.1rem', color: 'var(--slate-600)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                        boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
                        transition: 'background 0.2s, border-color 0.2s',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = '#f0f7ff'; e.currentTarget.style.borderColor = '#93c5fd' }}
                    onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.borderColor = '#dde7f3' }}
                    aria-label="Next video"
                >&#8250;</button>
            </div>

            <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'opacity 0.3s ease'}}>
                <span style={{fontWeight: 600, fontSize: '0.85rem', color: 'var(--green-900)'}}>
                    {videos[idx].label}
                </span>
                <span style={{fontSize: '0.78rem', color: 'var(--slate-500)'}}>
                    ({idx + 1} / {videos.length})
                </span>
            </div>

            <div style={{display: 'flex', gap: '0.4rem'}}>
                {videos.map((_, i) => (
                    <div
                        key={i}
                        onClick={() => setIdx(i)}
                        style={{
                            width: '8px', height: '8px', borderRadius: '50%', cursor: 'pointer',
                            background: i === idx ? 'var(--green-700)' : '#d1d5db',
                            transition: 'background 0.3s, transform 0.2s',
                            transform: i === idx ? 'scale(1.3)' : 'scale(1)',
                        }}
                    />
                ))}
            </div>
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
                    <h2>Architecture & Scene Flow</h2>

                    <div style={{marginTop: '1.5rem'}}>
                        <ImageWithCaption src="/implementation/flowchart.png" caption="Architecture and scene flow overview" />
                    </div>

                    <h3 style={{marginTop: '2rem'}}>Project Structure</h3>
                    <p style={{marginTop: '1rem'}}>
                        The project is a Unity football practice game with four minigames and a shared application shell.
                        The architecture uses a hybrid approach: Unity scene-driven behaviour for gameplay objects, shared
                        service layers for cross-cutting concerns, explicit composition roots per minigame for dependency
                        wiring, and adapter interfaces around globally shared systems. Shared assemblies include <code>SharedGameSettings</code>
                         (settings and PlayerPrefs persistence), <code>SharedLogging</code> (category-based logging with channel filtering), <code>GlobalAudioShared</code> (audio bootstrap and routing), <code>SharedCore</code> (contracts, adapters, session flow, completion UI), and <code>SharedAnimation</code> (animation utilities).
                    </p>
                    <p style={{marginTop: '1rem'}}>
                        Minigame assemblies are fully isolated — they never depend on each other directly. Each minigame
                        has its own assembly definition and communicates with shared systems through contracts and adapters
                        in <code>SharedCore</code>. This ensures that adding or modifying one minigame cannot break another. Adapter and interface seams around shared systems and platform-specific integrations allow for testable, decoupled code.
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
                    <p style={{marginTop: '1rem'}}>Singleton creation order is: frame rate lock, audio system, game settings, then other services as needed.</p>

                    <h3 style={{marginTop: '2rem'}}>Composition Roots & Dependency Wiring</h3>
                    <p style={{marginTop: '1rem'}}>
                        Each minigame provides a composition root that centralises all scene dependency wiring in <code>Awake()</code>.
                        This pattern replaces scattered <code>FindObjectOfType</code> calls with explicit injection, making
                        dependencies visible and testable. Key interface seams include <code>ISettingsService</code> (read-only
                        game settings, via <code>GameSettingsServiceAdapter</code>), <code>IAudioService</code> (audio playback, via <code>GlobalAudioServiceAdapter</code>), and <code>SessionFlow&lt;TState&gt;</code> (typed
                        lifecycle state machine for minigame progression). <code>SessionFlow</code> provides typesafe registration and transition logic for each minigame's session states, while <code>SharedCompletionScreenController</code> and <code>ModeMenuComponents</code> offer reusable UI builders for completion and pause menus.
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
                    <h2>Free Kick Minigame</h2>
                    <p style={{marginTop: '1rem'}}>
                        A session-based minigame where the player selects a shot lane and executes a kick against a
                        wall-goalkeeper-goal setup. The player uses keyboard input or MotionInput foot tracking to aim
                        at different sections of the goal. The core challenge lies in reading wall position patterns and
                        timing shots to beat the goalkeeper.
                    </p>

                    <VideoCarousel videos={[
                        { src: '/implementation/freekick.mp4', label: 'Easy Mode' },
                        { src: '/implementation/freekick_hard.mp4', label: 'Hard Mode' },
                    ]} />

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
                    <h2>Goalkeeping Minigame</h2>
                    <p style={{marginTop: '1rem'}}>
                        A first-person minigame where the player controls a goalkeeper's hands to block incoming shots.
                        The player uses keyboard input or MotionInput hand tracking to move gloves into the path of balls
                        launched on curved trajectories. Supports Easy/Hard difficulty and Endless or TargetScore modes.
                    </p>

                    <VideoCarousel videos={[
                        { src: '/implementation/goalkeeping.mp4', label: 'Easy Mode' },
                        { src: '/implementation/goalkeeping_hard.mp4', label: 'Hard Mode' },
                    ]} />

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
                    <h2>Penalty Shootout Minigame</h2>
                    <p style={{marginTop: '1rem'}}>
                        A round-based minigame where the player attempts to score penalties against a goalkeeper. In Hard
                        mode, each shot is controlled using a power meter; in Easy mode, a fixed force is used. The ball
                        is simulated using Unity physics, and outcomes are determined through collision and trigger detection.
                    </p>

                    <VideoCarousel videos={[
                        { src: '/implementation/penalty.mp4', label: 'Easy Mode' },
                        { src: '/implementation/penalty_hard.mp4', label: 'Hard Mode' },
                    ]} />

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
                    <h2>Obstacle Course Minigame</h2>
                    <p style={{marginTop: '1rem'}}>
                        A sequential task minigame where the player completes eight challenges across eight pitch regions.
                        Each task requires kicking or dribbling a ball to hit targets, avoid defenders, pop balloons, or
                        match colours. The player character moves automatically between regions as tasks are completed.
                    </p>

                    <VideoCarousel videos={[
                        { src: '/implementation/obastacle.mp4', label: 'Easy Mode' },
                        { src: '/implementation/obstacle_hard.mp4', label: 'Hard Mode' },
                    ]} />

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

                {/* Football Match */}
                <RevealSection className={styles.abstractPanel}>
                    <h3>Football Match Mode (Beta)</h3>
                    <p style={{marginTop: '1rem'}}>
                        <i>This feature is currently in early development and has not yet been included in the released version of the game.</i>
                    </p>

                    <div style={{display: 'flex', justifyContent: 'center', marginTop: '1rem'}}>
                        <video controls style={{width: '55%', borderRadius: '10px', border: '1px solid #dde7f3'}}>
                            <source src={`${import.meta.env.BASE_URL}implementation/whole-match.mp4`} type="video/mp4" />
                        </video>
                    </div>

                    <p style={{marginTop: '1rem'}}>
                        The Football Match mode is a full 90-minute football simulation where the player participates
                        in a complete match against an opponent team. Unlike the isolated minigames, this mode chains
                        together multiple football phases — dribbling, passing, shooting, defending, and goalkeeping — into
                        a continuous match experience with alternating possession, AI team formations, and dynamic camera transitions.
                        The full 90-minute in-game match is compressed into approximately 3 minutes of real time (180 seconds),
                        with each half representing 45 in-game minutes in roughly 90 real-time seconds.
                    </p>

                    <h3 style={{marginTop: '2rem'}}>Match Phases</h3>
                    <p style={{marginTop: '1rem'}}>
                        The match is driven by a 12-state state machine managed by <code>MatchManager</code>. The player
                        progresses through phases depending on possession, with each phase requiring directional input
                        (left/centre/right) within a time limit that varies by difficulty.
                    </p>
                    <div className={styles.tableWrap} style={{margin: '0.5rem 0 0', border: 'none', padding: 0}}>
                        <table>
                            <thead>
                                <tr>
                                    <th>Phase</th>
                                    <th>Description</th>
                                    <th>Player Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td><b>Kickoff</b></td><td>Start of play with 1.5s delay before possession begins</td><td>—</td></tr>
                                <tr><td><b>Dribbling</b></td><td>Player moves the ball forward through 3 lanes; opponents block 2 of 3</td><td>Choose lane (A/W/D)</td></tr>
                                <tr><td><b>Passing</b></td><td>Player passes to open teammates; one teammate is highlighted as the target</td><td>Select pass direction</td></tr>
                                <tr><td><b>Shooting</b></td><td>Player shoots at goal with 3 target zones at different heights</td><td>Aim at goal zone</td></tr>
                                <tr><td><b>Free Kick</b></td><td>Special shooting situation from a set-piece position</td><td>Aim at goal zone</td></tr>
                                <tr><td><b>Defending</b></td><td>Player blocks incoming attacks by choosing a tackle lane</td><td>Select tackle lane</td></tr>
                                <tr><td><b>Goalkeeping</b></td><td>Player saves shots by diving to a target corner</td><td>Choose dive direction</td></tr>
                                <tr><td><b>Half Time</b></td><td>45-minute interval with 3s display</td><td>—</td></tr>
                                <tr><td><b>Full Time</b></td><td>Match end with result screen (Win/Lose/Draw)</td><td>Play Again or Quit</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <h3 style={{marginTop: '2rem'}}>AI Team Formations</h3>
                    <p style={{marginTop: '1rem'}}>
                        <code>MatchFormation</code> manages the positioning of 2 AI teammates, 3 opponents, and 2 persistent
                        goalkeepers. Formations adapt dynamically to each phase — teammates flank the player when attacking,
                        spread for rebounds when shooting, and form a defensive line when defending. Opponents use lane-blocking
                        logic during dribbling and simulate attacks during defending phases. All characters have idle sway
                        animations for visual presence.
                    </p>

                    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1.5rem'}}>
                        <ImageWithCaption src="/implementation/AI Team Formations (1).png" caption="AI team formation — attacking phase" />
                        <ImageWithCaption src="/implementation/AI Team Formations (2).png" caption="AI team formation — defending phase" />
                    </div>

                    <h3 style={{marginTop: '2rem'}}>Dynamic Camera</h3>
                    <p style={{marginTop: '1rem'}}>
                        <code>MatchCameraController</code> provides phase-specific camera offsets with smooth damped transitions
                        (1.2s smoothTime). The camera starts high and overhead for dribbling, lowers for shooting accuracy,
                        and drops very close during goalkeeping with forward look-ahead to track the incoming ball.
                    </p>

                    <div style={{display: 'flex', justifyContent: 'center', marginTop: '1rem'}}>
                        <div style={{width: '50%'}}>
                            <ImageWithCaption src="/implementation/whole-matchcameracontroller.png" caption="Match Camera Controller" />
                        </div>
                    </div>

                    <h3 style={{marginTop: '2rem'}}>Visual Feedback</h3>
                    <p style={{marginTop: '1rem'}}>
                        <code>MatchVisuals</code> provides real-time visual guidance for each phase: highlighted dribble lanes
                        with blocked-lane indicators, shooting target zones at goal, tackle lane markers during defending,
                        dive zones during goalkeeping, and chevron indicators for passing targets. A colour-coded decision
                        timer bar (green → yellow → red) counts down the time available for each input.
                    </p>

                    <h3 style={{marginTop: '2rem'}}>Difficulty Settings</h3>
                    <div className={styles.tableWrap} style={{margin: '0.5rem 0 0', border: 'none', padding: 0}}>
                        <table>
                            <thead>
                                <tr>
                                    <th>Parameter</th>
                                    <th>Easy</th>
                                    <th>Hard</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td>Decision time limit</td><td>5 seconds</td><td>2 seconds</td></tr>
                                <tr><td>Opponent move speed</td><td>2 m/s</td><td>4.5 m/s</td></tr>
                                <tr><td>Shot force</td><td>14 units</td><td>18 units</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <h3 style={{marginTop: '2rem'}}>Core Scripts</h3>
                    <MediaCarousel width="50%" height="340px" items={[
                        { type: 'image', src: '/implementation/whole-matchmanager.png', label: 'MatchManager in Unity Editor' },
                        { type: 'image', src: '/implementation/whole-matchscriptstructure.png', label: 'Match Script Structure' },
                    ]} />
                    <div className={styles.tableWrap} style={{margin: '0.5rem 0 0', border: 'none', padding: 0}}>
                        <table>
                            <thead>
                                <tr>
                                    <th>Script</th>
                                    <th>Responsibility</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td><code>MatchManager</code></td><td>Primary orchestrator — state machine, scoring, timer, phase transitions, possession switching</td></tr>
                                <tr><td><code>MatchInputHandler</code></td><td>Routes A/W/D input to the active phase handler</td></tr>
                                <tr><td><code>MatchBall</code></td><td>Ball physics, trajectory arcs, goal detection via trigger colliders</td></tr>
                                <tr><td><code>MatchFormation</code></td><td>AI teammate/opponent positioning, keeper management, adaptive formations</td></tr>
                                <tr><td><code>MatchCameraController</code></td><td>Phase-specific camera offsets with smooth damped transitions</td></tr>
                                <tr><td><code>MatchUI</code></td><td>Runtime HUD (score, timer, phase text, decision timer bar), menu, and end screen</td></tr>
                                <tr><td><code>MatchVisuals</code></td><td>Action zone indicators, lane highlights, target markers, pulse/lean effects</td></tr>
                                <tr><td><code>MatchSceneSetup</code></td><td>Optional auto-setup for pitch, goals, positions, and ball at runtime</td></tr>
                            </tbody>
                        </table>
                    </div>
                </RevealSection>

                {/* Game Controllers */}
                <RevealSection className={styles.abstractPanel}>
                    <h2>Game Controllers</h2>
                    <p style={{marginTop: '1rem'}}>
                        Each minigame has its own control scheme, initially implemented using keyboard inputs and then
                        mapped to MotionInput gesture controls. The game uses Unity's legacy <code>Input.GetKeyDown</code> / <code>Input.GetKey</code> API
                        throughout. All minigames support keyboard fallback when MotionInput is unavailable.
                    </p>

                    <h3 style={{marginTop: '2rem'}}>Control Schemes</h3>
                    <p style={{marginTop: '1rem'}}>
                        Free Kick, Penalty Shootout, and Obstacle Course share the kicking gesture
                        mode (<code>football/kicking-easy-right</code>). Goalkeeping uses the hands-only
                        mode (<code>football/goalkeeping-easy</code>).
                    </p>
                    <div className={styles.tableWrap} style={{margin: '0.5rem 0 0', border: 'none', padding: 0}}>
                        <table>
                            <thead>
                                <tr>
                                    <th>Minigame</th>
                                    <th>Keybind</th>
                                    <th>Action</th>
                                    <th>MotionInput Equivalent</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td rowSpan="3"><b>Free Kick / Penalty / Obstacle Course</b></td><td>A</td><td>Kick left / select left lane</td><td>Left foot triggers left football icon</td></tr>
                                <tr><td>W</td><td>Kick centre / select centre lane</td><td>Either foot triggers centre football icon</td></tr>
                                <tr><td>D</td><td>Kick right / select right lane</td><td>Right foot triggers right football icon</td></tr>
                                <tr><td rowSpan="3"><b>Goalkeeping</b></td><td>A</td><td>Dive left</td><td>Left hand triggers left glove icon</td></tr>
                                <tr><td>W</td><td>Raise hands to centre-top</td><td>Either hand triggers centre glove icon</td></tr>
                                <tr><td>D</td><td>Dive right</td><td>Right hand triggers right glove icon</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <MediaCarousel width="50%" height="300px" items={[
                        { type: 'image', src: '/implementation/gamecontroller (2).png', label: 'Free Kick Controller' },
                        { type: 'image', src: '/implementation/gamecontroller (1).png', label: 'Penalty Shootout Controller' },
                        { type: 'image', src: '/implementation/gamecontroller (3).png', label: 'Goalkeeping Controller' },
                        { type: 'image', src: '/implementation/gamecontroller (4).png', label: 'Obstacle Course Controller' },
                    ]} />

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
                    <h2>MotionInput Integration</h2>
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

                    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1.5rem'}}>
                        <ImageWithCaption src="/implementation/foot.png" caption="MotionInput — kicking mode" />
                        <ImageWithCaption src="/implementation/hands.png" caption="MotionInput — hands-only mode" />
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
                        Once detected, the window chrome is removed, the window is positioned over the 
                        scene's <code>MotionInput Preview</code> panel, and Unity is refocused. 
                        If detection fails after 10 seconds, the game falls back to keyboard controls automatically.
                    </p>

                    <h3 style={{marginTop: '2rem'}}>Configuration Model</h3>
                    <p style={{marginTop: '1rem'}}>
                        The MotionInput build files are not included in the repository due to their size — they
                        must be downloaded separately and placed into <code>Assets/StreamingAssets/MotionInput/</code> before
                        building. On first run, the bundled <code>config.json</code> is copied
                        to <code>Application.persistentDataPath</code>, with automatic version-based upgrades and backup of
                        previous configs. All runtime reads and writes use this persistent copy — StreamingAssets is
                        never modified. Mode switching updates only the <code>mode</code> field via structured JSON
                        serialisation, and mode files are validated against the <code>modes/</code> folder before any write
                        is attempted.
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
                    <h2>Graphics & Visual Pipeline</h2>
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

                    <MediaCarousel width="50%" items={[
                        { type: 'image', src: '/implementation/toonshader_and_footballmini.png', label: 'Toon Shader & Football Mini Assets' },
                        { type: 'image', src: '/implementation/color material.png', label: 'Football_ColorPalette Material' },
                        { type: 'image', src: '/implementation/asset_structure.png', label: 'Asset Structure' },
                        { type: 'image', src: '/implementation/popup.png', label: 'Goal/Save Popup Animation Prefabs' },
                        { type: 'image', src: '/implementation/2D_crowd.jpg', label: '2D Crowd Sprites' },
                    ]} />

                    <h3 style={{marginTop: '2rem'}}>Rendering & Performance</h3>
                    <p style={{marginTop: '1rem'}}>
                        <b>FSR 1.0</b> upscaling renders at 75% resolution for improved GPU performance while maintaining
                        visual quality. The framerate is locked to 60 fps via <code>QualitySettings.vSyncCount = 0</code> and
                        <code> Application.targetFrameRate = 60</code>. The font <b>Need for Font SDF</b> is used consistently
                        across all UI with a global customisation for readability. Each minigame scene is equipped with a
                        full football stadium, directional light, players, and football components.
                    </p>
                </RevealSection>

                {/* Crowd Generation */}
                <RevealSection className={styles.abstractPanel}>
                    <h2>Crowd Generation</h2>
                    <p style={{marginTop: '1rem'}}>
                        The stadium crowd is procedurally generated at runtime by <code>CrowdSpawner</code>, which
                        populates every stand in the scene with crowd member instances when the scene loads. A key design
                        constraint was performance — the game targets standard classroom laptops with modest GPUs, so the crowd
                        needed to be visually convincing without contributing significant polygon cost. <code>SharedAnimation</code> provides the <code>JumpAnimScript</code> utility for animating crowd reactions, and is used across scenes for consistent, efficient jump effects.
                    </p>

                    <h3 style={{marginTop: '2rem'}}>2D Billboard Sprites</h3>
                    <p style={{marginTop: '1rem'}}>
                        Rather than using 3D character models for crowd members (which would each carry hundreds or
                        thousands of polygons), the crowd is made up of <b>2D billboard sprites</b>. Each sprite is a
                        flat quad — only two triangles — making the per-member polygon cost negligible regardless of
                        crowd size. To maintain the illusion of depth, each crowd member uses <code>CrowdMember</code>,
                        which runs every frame to rotate the sprite to face the camera on the Y axis only, ignoring
                        pitch. This billboard effect ensures crowd members always face the player without ever revealing
                        that they are flat. This effect can be found in many games, for example, Paper Mario and Don't
                        Starve. In our Goalkeeping and Penalty Shootout minigames, this is less relevant as the player
                        and camera are in a fixed position. However, in Free Kick, there are 3 different angles to shoot
                        from, and in Obstacle Course, the player will move around the entire pitch, so this billboard
                        effect is essential.
                    </p>

                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        marginTop: '1.5rem',
                        gap: '0.5rem'
                    }}>
                        <p style={{color: 'var(--slate-600)', fontSize: '0.92rem'}}>Close up on the crowd in Obstacle
                            Course - crowd rotates to follow the player as they move around the pitch.</p>
                        <video controls style={{width: '70%', borderRadius: '10px'}}>
                            <source src={`${import.meta.env.BASE_URL}implementation/crowd movement.mp4`} type="video/mp4"/>
                        </video>
                    </div>

                    <p style={{marginTop: '2rem'}}>
                        All crowd member sprites were digitally hand-drawn, featuring a diverse range of characters
                        across different genders and skin tones to reflect an inclusive stadium atmosphere that mirrors
                        the game's broader accessibility values. The designs of these sprites were inspired by Miis and
                        the Animal Crossing series – sharing the same base but having different variations in the eyes,
                        nose, mouth, hair, colour, etc. While we only had time to create 6 sprites, many more can be
                        made in this simplistic style easily, and the more sprites that are added the less repetitive
                        the crowd will appear to be.

                    </p>

                    <div style={{marginTop: '1.5rem', width: '30%', margin: '1.5rem auto 0'}}>
                        <ImageWithCaption src="/implementation/2D_crowd.jpg"
                                          caption="All 6 crowd member sprites"/>
                    </div>

                    <h3 style={{marginTop: '2rem'}}>Stadium Layout & Stand Types</h3>
                    <p style={{marginTop: '1rem'}}>
                        The stadium prefab is composed of several distinct stand sections, each tagged accordingly so
                        <code> CrowdSpawner</code> can locate and populate them independently at runtime. The spawner
                        supports
                        four stand configurations:
                    </p>
                    <div className={styles.tableWrap} style={{margin: '0.5rem 0 0', border: 'none', padding: 0}}>
                        <table>
                            <thead>
                            <tr>
                                <th>Tag</th>
                                <th>Layout</th>
                                <th>Description</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td><code>CrowdStand5x5</code></td>
                                <td>5 columns × 5 rows</td>
                                <td>Main straight stands along the sides of the pitch</td>
                            </tr>
                            <tr>
                                <td><code>CrowdStand1x5</code></td>
                                <td>1 column × 5 rows</td>
                                <td>Narrow side stands or end-section fillers</td>
                            </tr>
                            <tr>
                                <td><code>CrowdCornerBottom</code></td>
                                <td>5 rows, 9 seats, arc layout</td>
                                <td>Corner stands using a curved arc arrangement at a tighter radius</td>
                            </tr>
                            <tr>
                                <td><code>CrowdCornerTop</code></td>
                                <td>5 rows, 15 seats, arc layout</td>
                                <td>Corner stands at a wider radius with more seats per row</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '1rem',
                        margin: '1.5rem auto 0',
                        width: '70%'
                    }}>
                        <ImageWithCaption src="/implementation/stadium boxes.png"
                                          caption="Overhead view of the stadium showing the box stands"/>
                        <ImageWithCaption src="/implementation/stadium corners.png"
                                          caption="Overhead view of the stadium showing the corner stands"/>
                    </div>

                    <h3 style={{marginTop: '2rem'}}>Spawn Algorithm</h3>
                    <p style={{marginTop: '1rem'}}>
                        Straight stands use a grid-based layout: positions are calculated by iterating over rows and
                        columns,
                        with each seat offset by configurable step height and step depth to follow the tiered geometry
                        of the
                        stand. Corner stands use a <b>quadratic arc</b> layout — seat positions are computed by
                        interpolating
                        an angle across the arc span, converting to Cartesian coordinates, and applying a pivot rotation
                        to
                        align the arc with the corner geometry. All positions are then transformed from local stand
                        space into
                        world space using <code>TransformPoint</code>.
                    </p>
                    <p style={{marginTop: '1rem'}}>
                        A configurable <code>seatFillChance</code> (0–1) randomly skips seats, producing a natural,
                        uneven
                        crowd distribution rather than a perfectly uniform fill. Small random X/Z offsets
                        (<code>randomSpread</code>)
                        and scale variation (<code>scaleMin</code>/<code>scaleMax</code>) are also applied per member to
                        break
                        visual repetition.
                    </p>

                    <h3 style={{marginTop: '2rem'}}>Crowd Animation</h3>
                    <p style={{marginTop: '1rem'}}>
                        When the player scores a point, the crowd reacts by
                        jumping. <code>JumpAnimScript</code> implements
                        a smooth parabolic jump using the formula <b>y = jumpHeight × 4t(1−t)</b>, where <em>t</em> is
                        normalised elapsed time over the jump duration. This produces a natural arc — fast rise, gradual
                        fall — entirely through transform manipulation with no physics involvement.
                    </p>
                    <p style={{marginTop: '1rem'}}>
                        The jump is triggered by calling <code>Jump()</code> on all
                        active <code>JumpAnimScript</code> instances,
                        located via <code>FindObjectsByType</code> at the point of each score event. This approach is
                        simple and
                        effective, but carries a known performance consideration: <code>FindObjectsByType</code> scans
                        all active
                        objects in the scene on every call. In scenes with large crowds this introduces a non-trivial
                        cost each
                        time a point is scored, and caching the results at scene load would be a straightforward
                        optimisation
                        for future iterations.
                    </p>

                    <div style={{margin: '1.5rem auto 0', width: '80%'}}>
                        <ImageWithCaption src="/blog pics/added crowd.png"
                                          caption="Generated crowd populating the stadium stands at runtime"/>
                    </div>
                </RevealSection>

                {/* Audio */}
                <RevealSection className={styles.abstractPanel}>
                    <h2>Audio System</h2>
                    <p style={{marginTop: '1rem'}}>
                        Audio is centralised in <code>GlobalGameAudio</code>, a singleton that bootstraps automatically
                        before any scene loads and persists across all scenes. All minigames and menus consume this
                        shared system rather than creating scene-local audio logic. The system manages five dedicated audio channels (UI, SFX, CrowdOneShot, CrowdAmbient, MenuMusic), each implemented as a separate <code>AudioSource</code> for clear routing and volume control. All sources are 2D (spatialBlend = 0) and are created as children of a persistent root object, ensuring consistent playback and seamless transitions between scenes. Duplicate instances are prevented by self-destruction in <code>Awake</code>.
                    </p>

                    <div style={{display: 'flex', justifyContent: 'center', marginTop: '1.5rem'}}>
                        <div style={{width: '50%'}}>
                            <ImageWithCaption src="/implementation/globalaudio.png" caption="GlobalGameAudio singleton in Unity Inspector" />
                        </div>
                    </div>

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
                        Menu music is designed to pause (not stop) when entering minigames, retaining playback position for seamless resume. <code>GlobalUIButtonSfxHook</code> automatically scans for button components and attaches click sound listeners without manual wiring, while hover sounds can be added by attaching <code>GlobalUIButtonHoverRelay</code> to UI elements. Crowd audio is split into ambient and one-shot channels, with global toggles and volume controls. Disabling crowd audio immediately stops all playback. All gameplay SFX (kick, whistle, block, goal, checkpoint) are routed through shared methods and reused across minigames for consistency.
                    </p>

                    <h3 style={{marginTop: '2rem'}}>Volume & Preference Model</h3>
                    <p style={{marginTop: '1rem'}}>
                        Volume and toggle preferences persist via <code>PlayerPrefs</code> with separate sliders for SFX,
                        crowd, and music. The SFX slider scales base volumes for all gameplay sounds; the crowd slider
                        scales one-shot reactions and ambient noise; the music slider controls menu music. Changes in
                        <code> SettingsUI</code> take effect immediately and persist across sessions. The system uses keys like <code>GlobalAudio.SfxEnabled</code>, <code>GlobalAudio.CrowdEnabled</code>, <code>GlobalAudio.SfxVolume</code>, <code>GlobalAudio.CrowdVolume</code>, and <code>GlobalAudio.MusicVolume</code> to store user preferences, ensuring that audio settings are restored on every launch.
                    </p>

                    <h3 style={{marginTop: '2rem'}}>Clip Resolution</h3>
                    <p style={{marginTop: '1rem'}}>
                        <code>GlobalGameAudio.ResolveClip</code> follows a priority chain: existing serialised AudioClip field →
                        <code> Resources/EditedSound/&#123;ClipName&#125;</code> → <code>Resources/&#123;ClipName&#125;</code> → lowercase
                        variants → editor AssetDatabase fallback. Runtime clip names include UIClick, FootballKick, BallBlock,
                        CrowdCheer, CrowdCelebrate, AmbientCrowd, MenuMusic, and Whistle. This approach ensures that audio assets are loaded efficiently and consistently, with fallback mechanisms for missing or misnamed clips.
                    </p>

                    <p style={{marginTop: '1rem'}}>
                        <b>Note:</b> While all audio is currently routed through the <code>GlobalGameAudio</code> singleton, the project also implements an <code>IAudioService</code> interface and <code>GlobalAudioServiceAdapter</code>. These are not yet used in the main flow, but they are designed for future extension and maintainability—enabling dependency injection, improved testability, and easier decoupling of audio logic from the singleton pattern as the project evolves.
                    </p>
                </RevealSection>

                {/* Configuration */}
                <RevealSection className={styles.abstractPanel}>
                    <h2>Configuration & Settings</h2>
                    <p style={{marginTop: '1rem'}}>
                        Configuration flows through four channels: <code>PlayerPrefs</code> for user-facing settings,
                        shared singletons for runtime state, inspector serialised fields for gameplay tuning, and
                        <code> StreamingAssets</code> for MotionInput configuration. <code>GameSettings</code> loads and saves settings such as <code>motionInputEnabled</code> and <code>handsOnlyMode</code> using PlayerPrefs, and exposes them via singleton and adapter interfaces. <code>MotionInputConfigRepository</code> manages external config files for the MotionInput runtime, copying bundled config to persistent storage and updating mode fields as needed.
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
                        to the player.                    </p>
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

                </RevealSection>

            </div>
        </section>
    )
}
