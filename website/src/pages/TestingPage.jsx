import styles from '../App.module.css'
import ImageWithCaption from '../components/ImageWithCaption'
import SectionHeader from '../components/SectionHeader'

export default function TestingPage() {
    return (
        <section className={styles.section}>
            <SectionHeader title="Testing" subtitle="Strategy, automation, user acceptance testing, and outcomes." />

            <div
                style={{maxWidth: '1100px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>

                <div className={styles.abstractPanel}>
                    <h3>Approach</h3>
                    <p style={{marginTop: '1rem'}}>
                        Our football practice game combines MotionInput hand and body tracking with four distinct minigame
                        systems (Free Kick, Goalkeeping, Penalty Shootout, Obstacle Course), each with its own physics,
                        scoring, state management, and UI. This layered complexity, combined with the need to deliver an
                        accessible experience for children with Special Educational Needs and Disabilities (SEND),
                        required a rigorous testing approach that covers both internal correctness and real-world usability.
                    </p>
                    <p style={{marginTop: '1rem'}}>We adopted three complementary testing methods:</p>
                    <ul style={{marginTop: '0.5rem', paddingLeft: '1.5rem', color: 'var(--slate-700)', lineHeight: 1.8}}>
                        <li><b>Unit Testing</b> validates individual scripts and mathematical logic in isolation, catching regressions early and ensuring each component behaves correctly on its own.</li>
                        <li><b>Integration Testing</b> verifies that components work together — for example, that a ball launched by the shooter follows its trajectory, triggers the correct detection, updates the score, and transitions the game state.</li>
                        <li><b>User Acceptance Testing</b> confirms that the game is playable, intuitive, and engaging for its target audience through live playtesting with UCL-partnered clients.</li>
                    </ul>
                    <p style={{marginTop: '1rem'}}>
                        This combination ensures we cover technical correctness at every level while keeping the player
                        experience at the centre of development.
                    </p>
                </div>

                <div className={styles.abstractPanel}>
                    <h3>Unit Testing</h3>
                    <p style={{marginTop: '1rem'}}>
                        We used the <b>Unity Test Framework</b> to write automated unit tests across all four minigames
                        and the shared runtime systems. Tests are split into two categories supported by Unity's Test Runner:
                    </p>
                    <ul style={{marginTop: '0.5rem', paddingLeft: '1.5rem', color: 'var(--slate-700)', lineHeight: 1.8}}>
                        <li><b>EditMode tests</b> run without entering Play mode. They test pure logic, mathematical correctness, composition wiring, configuration defaults, and state machine transitions. These are fast to execute and form the backbone of our regression safety net.</li>
                        <li><b>PlayMode tests</b> run inside the Unity runtime, allowing us to test behavior that depends on MonoBehaviour lifecycle (<code>Awake</code>, <code>Start</code>), coroutine execution, and real-time component interaction.</li>
                    </ul>
                    <p style={{marginTop: '1rem'}}>
                        Our test suite contains <b>379 automated tests</b> across <b>24 test files</b> — 320 EditMode
                        and 59 PlayMode — covering all four minigames and shared infrastructure.
                    </p>

                    <h3 style={{marginTop: '2rem'}}>Coverage Breakdown</h3>

                    <div className={styles.tableWrap} style={{margin: '1rem 0 0', border: 'none', padding: 0}}>
                        <table>
                            <thead>
                                <tr>
                                    <th>Area</th>
                                    <th>EditMode</th>
                                    <th>PlayMode</th>
                                    <th>Focus</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Free Kick</td>
                                    <td>140</td>
                                    <td>21</td>
                                    <td>Trajectory planning, shot randomization, goal zone mapping, block chances, scoring streaks</td>
                                </tr>
                                <tr>
                                    <td>Goalkeeping</td>
                                    <td>62</td>
                                    <td>5</td>
                                    <td>Save/goal tracking, Bezier curve flight, FPS controller positions, difficulty modes</td>
                                </tr>
                                <tr>
                                    <td>Penalty Shootout</td>
                                    <td>54</td>
                                    <td>18</td>
                                    <td>Score/streak registration, power meter, goalkeeper scaling, goal/miss triggers</td>
                                </tr>
                                <tr>
                                    <td>Obstacle Course</td>
                                    <td>60</td>
                                    <td>3</td>
                                    <td>Task sequence generation, duplicate prevention, round progression, region layout</td>
                                </tr>
                                <tr>
                                    <td>Shared Systems</td>
                                    <td>50</td>
                                    <td>12</td>
                                    <td>Logging filters, settings adapters, audio adapters, session state machines, completion flow</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', marginTop: '1.5rem'}}>
                        <ImageWithCaption src="/testing/editmode-tests.png" caption="EditMode — 320 tests passing" />
                        <ImageWithCaption src="/testing/playmode-tests-1.png" caption="PlayMode — 59 tests (top)" />
                        <ImageWithCaption src="/testing/playmode-tests-2.png" caption="PlayMode — 59 tests (bottom)" />
                    </div>

                    <h3 style={{marginTop: '2rem'}}>What We Test</h3>

                    <p style={{marginTop: '1rem'}}>
                        <b>Game mechanics and math</b> — trajectory arc solving, Bezier curve interpolation, goal zone
                        coordinate mapping, shot tuning multiplier composition, and block probability calculations are
                        all validated with explicit floating-point tolerances.
                    </p>
                    <p style={{marginTop: '1rem'}}>
                        <b>State and scoring logic</b> — every minigame's session state machine is tested through its
                        full lifecycle (e.g., Menu → Countdown → ActiveRound → Completed for Goalkeeping). Scoring edge
                        cases such as double-count prevention, streak resets on misses, and target-score game completion
                        are covered.
                    </p>
                    <p style={{marginTop: '1rem'}}>
                        <b>Composition and wiring</b> — each minigame has a composition root that wires scene
                        dependencies. Tests verify that all references are correctly connected and that session flow
                        transitions invoke the expected callbacks.
                    </p>
                    <p style={{marginTop: '1rem'}}>
                        <b>Shared systems</b> — the logging facade, game settings singleton, audio service adapter, and
                        completion screen controller are all tested independently, including fallback behavior when
                        singletons are absent.
                    </p>

                    <h3 style={{marginTop: '2rem'}}>Testing Techniques</h3>

                    <p style={{marginTop: '1rem'}}>
                        To test private fields and methods without exposing them in production code, we built
                        a <code>TestReflectionUtility</code> helper that provides <code>SetField</code>, <code>GetField</code>, <code>InvokePrivate</code>,
                        and <code>TransitionSessionState</code> methods. This lets us verify internal state transitions
                        and wiring without compromising encapsulation.
                    </p>
                    <p style={{marginTop: '1rem'}}>
                        Where components depend on randomness (e.g., ball targeting in Goalkeeping), we inject
                        an <code>IRandomSource</code> interface so tests can supply deterministic values.
                        Similarly, <code>ILogChannelFilter</code> allows tests to run silently without log noise.
                    </p>
                    <p style={{marginTop: '1rem'}}>
                        PlayMode tests that need to resolve types from assemblies not directly referenced (such
                        as <code>GlobalGameAudio</code>) use dynamic type resolution via <code>System.Type.GetType</code> to
                        avoid hard coupling between the test assembly and every minigame assembly.
                    </p>
                </div>

                <div className={styles.abstractPanel}>
                    <h3>Integration Testing</h3>
                    <p style={{marginTop: '1rem'}}>
                        Beyond isolated unit tests, we wrote dedicated integration tests that exercise multi-component
                        flows end-to-end within the Unity runtime. These simulate realistic gameplay sequences:
                    </p>
                    <ul style={{marginTop: '0.5rem', paddingLeft: '1.5rem', color: 'var(--slate-700)', lineHeight: 1.8}}>
                        <li><b>Goalkeeping:</b> a three-save sequence where the ball shooter launches, the curve path executes, and the game manager correctly tracks saves — plus a full session that reaches the target score and triggers game completion.</li>
                        <li><b>Penalty Shootout:</b> a scoring flow with goals, misses, and streak resets across multiple shots, verifying that trigger resets and player state cycle correctly between rounds.</li>
                        <li><b>Obstacle Course:</b> task generation through round completion, endless mode progression over five rounds, and verification that difficulty settings produce different task sequences.</li>
                        <li><b>Free Kick:</b> the full shot pipeline from lane selection through zone mapping to trajectory generation, scoring streak accumulation with block chance calculations, and exhaustive validation that all nine goal zones produce valid trajectories.</li>
                    </ul>
                    <div style={{display: 'flex', justifyContent: 'center', marginTop: '1.5rem'}}>
                        <div style={{width: '60%'}}>
                            <ImageWithCaption src="/testing/integration.png" caption="Integration tests — 12 tests passing" />
                        </div>
                    </div>

                    <p style={{marginTop: '1rem'}}>
                        These integration tests catch interaction bugs that unit tests miss — for instance, ensuring
                        that a ball's Bezier curve path correctly feeds into the game manager's scoring system, or that
                        completing a target score triggers the right audio fade and completion panel sequence.
                    </p>
                </div>

                <div className={styles.abstractPanel}>
                    <h3>User Acceptance Testing</h3>

                    <h3 style={{marginTop: '2rem'}}>Showcase Playtesting</h3>
                    <p style={{marginTop: '1rem'}}>
                        We conducted user acceptance testing during a UCL showcase event attended by our co-operated
                        clients and partners. Participants played through the minigames using MotionInput hand and body
                        tracking, and we collected feedback on gameplay feel, accessibility, and usability.
                    </p>

                    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1.5rem'}}>
                        <ImageWithCaption src="/testing/showcase (1).jpg" caption="Showcase playtesting session" />
                        <ImageWithCaption src="/testing/showcase (2).jpg" caption="Showcase playtesting session" />
                    </div>

                    <h3 style={{marginTop: '2rem'}}>Feedback Received</h3>
                    <p style={{marginTop: '1rem'}}>
                        The feedback spanned both general game-wide concerns and minigame-specific issues:
                    </p>

                    <p style={{marginTop: '1.5rem'}}><b>General feedback:</b></p>
                    <div className={styles.tableWrap} style={{margin: '0.5rem 0 0', border: 'none', padding: 0}}>
                        <table>
                            <thead>
                                <tr>
                                    <th>Feedback</th>
                                    <th>Area</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td>Add a game speed setting so players can adjust difficulty</td><td>Settings / Accessibility</td></tr>
                                <tr><td>Reposition the power bar in Penalty Shootout so the player can see the full scene while aiming</td><td>UI Layout</td></tr>
                                <tr><td>MotionInput mode switching was too slow — opening and closing an instance per minigame caused delays</td><td>MotionInput Integration</td></tr>
                                <tr><td>Make icons on the MotionInput window overlay larger for better visibility</td><td>MotionInput UX</td></tr>
                                <tr><td>Use a single centered icon in Goalkeeping mode instead of two separate icons</td><td>MotionInput UX</td></tr>
                                <tr><td>Allow the use of the left foot as well as the right</td><td>Input / Accessibility</td></tr>
                                <tr><td>Reposition the goalkeeping hand tracking icons so they are easier to reach when standing</td><td>MotionInput UX</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <p style={{marginTop: '1.5rem'}}><b>Goalkeeping-specific feedback:</b></p>
                    <div className={styles.tableWrap} style={{margin: '0.5rem 0 0', border: 'none', padding: 0}}>
                        <table>
                            <thead>
                                <tr>
                                    <th>Feedback</th>
                                    <th>Area</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td>Game speed should only affect ball speed, not transition timings</td><td>Gameplay Tuning</td></tr>
                                <tr><td>Ball speed is too fast — needs to be much slower</td><td>Difficulty</td></tr>
                                <tr><td>Goal/save outcome text needs to be bigger, stay on screen longer, and use green/red colouring</td><td>Visual Feedback</td></tr>
                                <tr><td>Countdown should be slower, with a "Get Ready" prompt before the numbers</td><td>Pacing</td></tr>
                                <tr><td>Make the ball slightly bigger for better visibility</td><td>Visual Clarity</td></tr>
                                <tr><td>Make the goalkeeper's hands/gloves bigger so saves feel more achievable</td><td>Gameplay Feel</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <h3 style={{marginTop: '2rem'}}>Changes Made</h3>
                    <p style={{marginTop: '1rem'}}>Based on this feedback, we implemented the following improvements:</p>
                    <ul style={{marginTop: '0.5rem', paddingLeft: '1.5rem', color: 'var(--slate-700)', lineHeight: 1.8}}>
                        <li><b>Game speed setting:</b> added a game speed multiplier in the settings menu, applied to ball speed across all minigames. In Goalkeeping, the multiplier affects ball flight only, not countdown or reset transitions.</li>
                        <li><b>Ball and glove sizing:</b> increased ball scale and glove size in Goalkeeping to make saves more achievable, especially on Easy difficulty.</li>
                        <li><b>Countdown pacing:</b> slowed the countdown sequence and added a "Get Ready" prompt before the 3-2-1 numbers to give players time to prepare.</li>
                        <li><b>Outcome feedback:</b> enlarged the "SAVE!" and "GOAL!" text, extended display duration, and applied green/red colouring for immediate visual clarity.</li>
                        <li><b>MotionInput mode switching:</b> replaced the open-and-close approach with persistent mode switching via config write and Shift+R reload, reducing switch time to approximately 300ms.</li>
                        <li><b>MotionInput icon layout:</b> made overlay icons larger, consolidated the Goalkeeping mode to a single centered icon, and repositioned hand tracking targets for easier reach when standing.</li>
                        <li><b>Start menu consistency:</b> standardised the mode selection menu across all minigames to reduce confusion when switching between game modes.</li>
                        <li><b>Tutorial screens:</b> added tutorial pages with video slides so players can preview controls and objectives before entering gameplay.</li>
                        <li><b>Power bar repositioning:</b> moved the Penalty Shootout power meter to a position where it does not obscure the goal area.</li>
                    </ul>

                    <h3 style={{marginTop: '2rem'}}>Some of the Changes According to the Showcase Feedback</h3>

                    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', marginTop: '1rem'}}>
                        <ImageWithCaption src="/testing/aftershowcase (1).png" caption="Repositioned power bar above the goal" />
                        <ImageWithCaption src="/testing/aftershowcase (2).png" caption="Enlarged SAVE! text with green colouring" />
                        <ImageWithCaption src="/testing/aftershowcase (3).png" caption="Game speed setting added to settings menu" />
                    </div>
                </div>

                <div className={styles.abstractPanel}>
                    <h3>Anonymous User Testing</h3>
                    <p style={{marginTop: '1rem'}}>
                        In addition to the showcase playtesting with our partnered clients, we conducted anonymous user
                        testing with consenting adult participants recruited from classmates and peers. This allowed us
                        to gather broader feedback on gameplay feel, intuitiveness, and overall enjoyment from users
                        without disabilities, complementing the targeted accessibility testing done with our SEND-focused
                        partners.
                    </p>
                    <p style={{marginTop: '1rem'}}>
                        Participants were asked to play through each minigame and then complete a short anonymous
                        survey. The survey used a four-point Likert scale (Strongly Agree, Agree, Disagree, Strongly
                        Disagree) to measure key usability and experience metrics. We collected <b>15 responses</b> in total.
                    </p>

                    <h3 style={{marginTop: '2rem'}}>Survey Results</h3>

                    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '1.5rem'}}>
                        {[
                            {
                                question: 'Did you find the game easy to play after your first try?',
                                data: [
                                    {label: 'Strongly Agree', value: 43, color: '#00804c'},
                                    {label: 'Agree', value: 43, color: '#74c365'},
                                    {label: 'Disagree', value: 14, color: '#e8a838'},
                                ]
                            },
                            {
                                question: 'Would you recommend this game to others?',
                                data: [
                                    {label: 'Strongly Agree', value: 57, color: '#00804c'},
                                    {label: 'Agree', value: 36, color: '#74c365'},
                                    {label: 'Disagree', value: 7, color: '#e8a838'},
                                ]
                            },
                            {
                                question: 'Were the controls intuitive and responsive?',
                                data: [
                                    {label: 'Strongly Agree', value: 33, color: '#00804c'},
                                    {label: 'Agree', value: 40, color: '#74c365'},
                                    {label: 'Disagree', value: 20, color: '#e8a838'},
                                    {label: 'Strongly Disagree', value: 7, color: '#d94f4f'},
                                ]
                            },
                            {
                                question: 'Did you find the UI clear and easy to navigate?',
                                data: [
                                    {label: 'Strongly Agree', value: 47, color: '#00804c'},
                                    {label: 'Agree', value: 40, color: '#74c365'},
                                    {label: 'Disagree', value: 13, color: '#e8a838'},
                                    {label: 'Strongly Disagree', value: 0, color: '#d94f4f'},
                                ]
                            },
                        ].map(({question, data}) => {
                            let cumulative = 0
                            const slices = data.filter(d => d.value > 0).map(d => {
                                const startAngle = cumulative * 3.6
                                cumulative += d.value
                                const endAngle = cumulative * 3.6
                                const startRad = (startAngle - 90) * Math.PI / 180
                                const endRad = (endAngle - 90) * Math.PI / 180
                                const largeArc = (endAngle - startAngle) > 180 ? 1 : 0
                                const x1 = 100 + 90 * Math.cos(startRad)
                                const y1 = 100 + 90 * Math.sin(startRad)
                                const x2 = 100 + 90 * Math.cos(endRad)
                                const y2 = 100 + 90 * Math.sin(endRad)
                                return (
                                    <path
                                        key={d.label}
                                        d={`M100,100 L${x1},${y1} A90,90 0 ${largeArc},1 ${x2},${y2} Z`}
                                        fill={d.color}
                                        stroke="#fff"
                                        strokeWidth="1.5"
                                    />
                                )
                            })
                            return (
                                <div key={question} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                    <svg viewBox="0 0 200 200" style={{width: '200px', height: '200px'}}>
                                        {slices}
                                    </svg>
                                    <p style={{
                                        marginTop: '0.8rem', fontWeight: 600, fontSize: '0.88rem',
                                        color: 'var(--green-900)', textAlign: 'center', maxWidth: '260px'
                                    }}>{question}</p>
                                    <div style={{display: 'flex', gap: '0.6rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '0.5rem'}}>
                                        {data.map(d => (
                                            <div key={d.label} style={{display: 'flex', alignItems: 'center', gap: '0.25rem'}}>
                                                <div style={{width: '12px', height: '12px', borderRadius: '2px', background: d.color}} />
                                                <span style={{fontSize: '0.75rem', color: 'var(--slate-600)'}}>{d.label} ({d.value}%)</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    <h3 style={{marginTop: '2rem'}}>Key Takeaways</h3>
                    <ul style={{marginTop: '0.5rem', paddingLeft: '1.5rem', color: 'var(--slate-700)', lineHeight: 1.8}}>
                        <li><b>80%</b> of participants found the game easy to play after their first try, indicating strong initial learnability.</li>
                        <li><b>86%</b> would recommend the game to others, reflecting positive overall engagement.</li>
                        <li><b>Controls</b> scored slightly lower, with 27% reporting difficulty — primarily related to unfamiliarity with MotionInput gesture tracking rather than game design issues.</li>
                        <li><b>UI clarity</b> scored highest, with 87% rating the interface as clear and easy to navigate, validating our design principles.</li>
                    </ul>

                    <h3 style={{marginTop: '2rem'}}>Written Feedback Highlights</h3>
                    <div className={styles.tableWrap} style={{margin: '0.5rem 0 0', border: 'none', padding: 0}}>
                        <table>
                            <thead>
                                <tr>
                                    <th>Feedback</th>
                                    <th>Category</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td>"Really fun once I got the hang of the motion controls"</td><td>Overall Experience</td></tr>
                                <tr><td>"The goalkeeping mode felt very immersive"</td><td>Gameplay Feel</td></tr>
                                <tr><td>"Would be great with a multiplayer or versus mode"</td><td>Feature Suggestion</td></tr>
                                <tr><td>"Menus were very straightforward, never felt lost"</td><td>UI / Navigation</td></tr>
                                <tr><td>"Took a moment to calibrate my movements but felt natural after that"</td><td>Controls / Onboarding</td></tr>
                                <tr><td>"The obstacle course was my favourite — good variety of challenges"</td><td>Gameplay Content</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className={styles.abstractPanel}>
                    <h3>Compatibility Testing</h3>
                    <p style={{marginTop: '1rem'}}>
                        The game was tested across multiple machines with different display resolutions and Windows
                        display scaling settings. Key findings:
                    </p>
                    <ul style={{marginTop: '0.5rem', paddingLeft: '1.5rem', color: 'var(--slate-700)', lineHeight: 1.8}}>
                        <li>The MotionInput window positioning is sensitive to DPI scaling — machines with scaling above 100% may see the camera feed window misaligned relative to the game UI. This is a known limitation documented for future improvement.</li>
                        <li>All minigames support keyboard fallback (A/W/D keys) when MotionInput is unavailable, ensuring the game remains playable without the external tracking system.</li>
                        <li>The game runs on Unity 6 with Universal Render Pipeline and has been verified on Windows 10 and Windows 11.</li>
                    </ul>
                </div>

                <div className={styles.abstractPanel}>
                    <h3>Summary</h3>
                    <p style={{marginTop: '1rem'}}>
                        Our testing strategy combines <b>379 automated tests</b> covering game logic, trajectory math,
                        state machines, and component integration with <b>real-world playtesting</b> at a UCL showcase
                        with our partnered clients. Automated tests guard against regressions as the codebase evolves,
                        while user acceptance testing keeps development grounded in real player needs — the showcase
                        feedback directly drove improvements to ball speed, visual feedback, MotionInput responsiveness,
                        and accessibility features across all four minigames.
                    </p>
                </div>

            </div>
        </section>
    )
}
