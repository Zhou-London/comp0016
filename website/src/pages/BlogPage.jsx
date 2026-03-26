import { useEffect, useRef } from 'react'
import styles from '../App.module.css'
import SectionHeader from '../components/SectionHeader'
import ImageWithCaption from '../components/ImageWithCaption'
import { Reveal } from '../components/Reveal'

/* ── Blog entry ── */
function BlogEntry({ weeks, title, body, delay = 0, animClass = '' }) {
    return (
        <Reveal delay={delay} className={animClass}>
            <div style={{
                display: 'flex', gap: '1.5rem', alignItems: 'flex-start',
                paddingBottom: '2.5rem', borderBottom: '1px solid #e5e7eb',
            }}>
                <div style={{ flexShrink: 0, textAlign: 'center' }}>
                    <div style={{
                        padding: '0.4rem 0.9rem', borderRadius: 20,
                        background: 'linear-gradient(135deg, #488328, #5f9f28)',
                        color: '#fff', fontSize: '0.78rem', fontWeight: 700,
                        whiteSpace: 'nowrap',
                    }}>
                        {weeks}
                    </div>
                </div>
                <div style={{ flex: 1 }}>
                    <h3 style={{ color: 'var(--green-900)', fontSize: '1.05rem', marginBottom: '0.5rem' }}>{title}</h3>
                    {body}
                </div>
            </div>
        </Reveal>
    )
}

export default function BlogPage() {
    const videos = [
        { label: 'November Video', href: 'https://your-link-here' },
        { label: 'December Video', href: 'https://your-link-here' },
        { label: 'February Video', href: 'https://your-link-here' },
        { label: 'March Video',    href: 'https://your-link-here' },
    ]

    return (
        <section className={styles.section}>
            <SectionHeader title="Development Blog and Monthly Video"
                           subtitle="Track weekly/monthly progress snapshots and demo recordings." />

            <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

                {/* Monthly Videos */}
                <Reveal className="fade-in-scale">
                    <div className={styles.abstractPanel}>
                        <h2>Monthly Video Logs</h2>
                        <p style={{ color: 'var(--slate-600)', marginTop: '0.5rem' }}>
                            Update videos showcasing our progress over time.
                        </p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '1rem' }}>
                            {videos.map(({ label, href }) => (
                                <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noreferrer"
                                style={{
                                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                                padding: '0.5rem 1rem', borderRadius: 8,
                                background: 'linear-gradient(135deg, #488328, #5f9f28)',
                                color: '#fff', fontWeight: 600, fontSize: '0.88rem',
                                textDecoration: 'none', boxShadow: '0 2px 6px rgba(0,0,0,0.12)',
                                transition: 'opacity 0.2s',
                            }}
                                onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                                >
                                ▶ {label}
                                </a>
                                ))}
                        </div>
                    </div>
                </Reveal>

                {/* Blog entries */}
                <div className={styles.abstractPanel} style={{ display: 'flex', flexDirection: 'column', gap: '0rem' }}>

                    <BlogEntry
                        weeks="Weeks 1–2"
                        title="Project Kickoff"
                        delay={0}
                        animClass="goal-roll-in"
                        body={<>
                            <p style={{ color: 'var(--slate-700)', lineHeight: 1.7 }}>
                                We had our initial client meeting where we were given our project brief. We spent the
                                rest of the fortnight brainstorming game concepts, throwing around ideas for how motion
                                input could work in a football context.

                            </p>
                        </>}
                    />

                    <BlogEntry
                        weeks="Weeks 3–4"
                        title="Understanding Our Users"
                        delay={50}
                        animClass="persona-slide-left"
                        body={<>
                            <p style={{ color: 'var(--slate-700)', lineHeight: 1.7 }}>
                                We focused on gathering requirements this fortnight. We conducted pseudo interviews and
                                used the findings to build personas and scenarios representing our target users:
                                autistic children with varying needs and abilities.
                            </p>
                            <p style={{ marginTop: '0.8rem', color: 'var(--slate-600)', fontSize: '0.92rem' }}>One of our personas:</p>
                            <div style={{ width: '60%', marginTop: '0.5rem' }}>
                                <ImageWithCaption src="/blog pics/persona.png" caption="User persona" />
                            </div>
                        </>}
                    />

                    <BlogEntry
                        weeks="Weeks 5–6"
                        title="Sketches, Prototypes & Learning Unity"
                        delay={50}
                        animClass="table-reveal"
                        body={<>
                            <p style={{ color: 'var(--slate-700)', lineHeight: 1.7 }}>
                                We completed our HCI coursework with hand-drawn sketches and early prototypes of the
                                game interface. Alongside this, we began learning Unity from scratch, through tutorials,
                                documentation, and a lot of trial and error

                            </p>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '0.8rem', marginTop: '1rem' }}>
                                <ImageWithCaption src="/sketches/initial sketches/main menu.png" caption="Main menu screen layout" />
                                <ImageWithCaption src="/sketches/initial sketches/free kick 1.png" caption="Free kick minigame layout" />
                                <ImageWithCaption src="/sketches/initial sketches/penalty.png" caption="Penalty shootout minigame layout" />
                                <ImageWithCaption src="/sketches/initial sketches/goalkeeping 1.png" caption="Goalkeeping minigame layout" />
                            </div>
                        </>}
                    />

                    <BlogEntry
                        weeks="Weeks 7–8"
                        title="Unity & Project Setup"
                        delay={50}
                        animClass="persona-slide-right"
                        body={<>
                            <p style={{ color: 'var(--slate-700)', lineHeight: 1.7 }}>
                                Continued building our Unity skills and got the project properly set up — repository created, folder
                                structure agreed, and team workflows established on GitHub. With one member working on graphics, we decided
                                to have the rest work on a minigame each. We decided to add another minigame, the obstacle course, so that
                                we would have 4 minigames in total.
                            </p>
                            <p style={{ marginTop: '0.8rem', color: 'var(--slate-600)', fontSize: '0.92rem' }}>
                                Visualising the obstacle course: the player moves around the pitch in a circuit, completing a mini task in each region.
                            </p>
                            <div style={{ width: '60%', marginTop: '0.5rem' }}>
                                <ImageWithCaption src="/blog pics/obstacle course concept.png" caption="Obstacle course layout" />
                            </div>
                        </>}
                    />

                    <BlogEntry
                        weeks="Weeks 9–10"
                        title="First Playable Build"
                        delay={50}
                        animClass="diagram-scale-in"
                        body={<>
                            <p style={{ color: 'var(--slate-700)', lineHeight: 1.7 }}>
                                Got our first basic scenes and gameplay mechanics running in Unity. By the end of the fortnight we had a
                                proof of concept demo with a simple minigames menu and rough versions of each game mode.
                            </p>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '0.8rem', marginTop: '1rem' }}>
                                <ImageWithCaption src="/blog pics/first demo menu.PNG" caption="Minigames menu" />
                                <ImageWithCaption src="/blog pics/basic fk.png" caption="Basic free kick scene" />
                                <ImageWithCaption src="/blog pics/basic gk.png" caption="Basic goalkeeping scene" />
                                <ImageWithCaption src="/blog pics/basic oc.png" caption="Basic obstacle course scene" />
                                <ImageWithCaption src="/blog pics/basic ps.png" caption="Basic penalty shootout scene" />
                            </div>
                        </>}
                    />

                    <BlogEntry
                        weeks="Weeks 11–12"
                        title="Gameplay Loops"
                        delay={50}
                        animClass="goal-roll-in"
                        body={<>
                            <p style={{ color: 'var(--slate-700)', lineHeight: 1.7 }}>
                                Working on the core gameplay loops for all four minigames. A lot of iteration to get the mechanics feeling
                                right and the difficulty balanced for our target audience.
                            </p>
                        </>}
                    />

                    <BlogEntry
                        weeks="Weeks 13–14"
                        title="Minigame Progress"
                        delay={50}
                        animClass="table-reveal"
                        body={<>
                            <p style={{ color: 'var(--slate-700)', lineHeight: 1.7 }}>
                                Completed the gameplay loops for Free Kick, Goalkeeping and Obstacle Course. These are feeling solid,
                                Penalty Shootout still needs work but we have a clear plan for the coming weeks.
                            </p>
                            <p style={{ marginTop: '0.8rem', color: 'var(--slate-600)', fontSize: '0.92rem' }}>
                                Basic gameplay loops for first three minigames.
                            </p>
                            <div style={{ marginTop: '0.5rem' }}>
                                <video controls style={{ width: '60%', borderRadius: '10px' }}>
                                    <source src={`${import.meta.env.BASE_URL}blog pics/jan demo vid.mp4`} type="video/mp4" />
                                </video>
                            </div>
                        </>}
                    />

                    <BlogEntry
                        weeks="Weeks 15–16"
                        title="BETT Conference & Asset Work"
                        delay={50}
                        animClass="persona-slide-left"
                        body={<>
                            <p style={{ color: 'var(--slate-700)', lineHeight: 1.7 }}>
                                We prepared and delivered our elevator pitch, and two of our team members presented at the BETT
                                conference, a major edtech event. Alongside this, we purchased and updated game assets, standardising
                                prefabs across the project for consistency.
                            </p>
                            <p style={{ marginTop: '0.8rem', color: 'var(--slate-600)', fontSize: '0.92rem' }}>New assets!</p>
                            <div style={{ marginTop: '0.5rem' }}>
                                <video controls style={{ width: '60%', borderRadius: '10px' }}>
                                    <source src={`${import.meta.env.BASE_URL}blog pics/new assets.mp4`} type="video/mp4" />
                                </video>
                            </div>
                        </>}
                    />

                    <BlogEntry
                        weeks="Weeks 17–18"
                        title="Features, UI & Motion Input"
                        delay={50}
                        animClass="diagram-scale-in"
                        body={<>
                            <p style={{ color: 'var(--slate-700)', lineHeight: 1.7 }}>
                                We added hard difficulty and endless/limited modes across all minigames, updated the menus, and integrated
                                basic motion input ahead of our second demo. We also gathered user feedback from testing sessions which
                                gave us useful direction going forward.
                            </p>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.8rem', marginTop: '1rem' }}>
                                <ImageWithCaption src="/blog pics/added main menu.png" caption="New main menu" />
                                <ImageWithCaption src="/blog pics/start up menu.png" caption="Select screen: easy or hard difficulty, endless or limited mode" />
                                <ImageWithCaption src="/blog pics/added motion input.png" caption="Added basic motion input" />
                            </div>
                        </>}
                    />

                    <BlogEntry
                        weeks="Weeks 19–20"
                        title="Polish & Testing"
                        delay={50}
                        animClass="persona-slide-right"
                        body={<>
                            <p style={{ color: 'var(--slate-700)', lineHeight: 1.7 }}>
                                Finished goalkeeping and penalty minigames, created 2D crowd sprites and added crowd generation to bring
                                the stadium to life, and implemented a full audio system. Ran unit and integration testing to catch bugs
                                and verify core systems were working correctly. Overhauled UI based on feedback, made more colourful and
                                added pause menu, completion menu, and more.
                            </p>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.8rem', marginTop: '1rem' }}>
                                <ImageWithCaption src="/blog pics/added crowd.png" caption="Added crowd to the stadium" />
                                <ImageWithCaption src="/final game UI/main menu.png" caption="New main menu" />
                                <ImageWithCaption src="/final game UI/pause menu.png" caption="New pause screen" />
                            </div>
                        </>}
                    />

                    <BlogEntry
                        weeks="Weeks 21–22"
                        title="Showcase, Feedback & Refactor"
                        delay={50}
                        animClass="table-reveal"
                        body={<>
                            <p style={{ color: 'var(--slate-700)', lineHeight: 1.7 }}>
                                We showcased the game and gathered feedback, which we quickly acted on to improve the minigames. Added
                                game settings, MotionInput mode switching, and crowd animations. A significant codebase refactor was
                                carried out this fortnight to better implement design patterns, improving long-term maintainability and
                                scalability.
                            </p>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.8rem', marginTop: '1rem' }}>
                                <ImageWithCaption src="/testing/showcase (2).jpg" caption="User testing at our showcase" />
                                <ImageWithCaption src="/final game UI/settings.png" caption="Settings screen with accessibility features" />
                                <ImageWithCaption src="/final game UI/mi window hands.png" caption="Switching to hands-only mode" />
                            </div>
                            <p style={{ marginTop: '1rem', color: 'var(--slate-600)', fontSize: '0.92rem' }}>
                                Crowd animation: when a player scores, the crowd will jump and cheer.
                            </p>
                            <div style={{ marginTop: '0.5rem' }}>
                                <video controls style={{ width: '50%', borderRadius: '10px' }}>
                                    <source src={`${import.meta.env.BASE_URL}blog pics/crowd jump.mp4`} type="video/mp4" />
                                </video>
                            </div>
                        </>}
                    />

                    <BlogEntry
                        weeks="Weeks 23–24"
                        title="Final Stretch"
                        delay={50}
                        animClass="goal-roll-in"
                        body={<>
                            <p style={{ color: 'var(--slate-700)', lineHeight: 1.7 }}>
                                Final testing and bug fixes across the board. Added in-game tutorials to help new players get started.
                                The team shifted focus to the website report and project handover documentation to wrap up the project.
                            </p>
                        </>}
                    />

                </div>
            </div>
        </section>
    )
}