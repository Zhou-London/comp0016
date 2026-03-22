import styles from '../App.module.css'
import ImageWithCaption from '../components/ImageWithCaption'
import SectionHeader from '../components/SectionHeader'

export default function UiDesignPage() {
    return (
        <section className={styles.section}>
            <SectionHeader title="UI Design" subtitle="Design principles, sketches, and high-fidelity wireframe links." />

            <div
                style={{maxWidth: '1100px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>

                <div className={styles.abstractPanel}>
                    <h3>Design Principles</h3>
                    <p style={{marginTop: '1rem'}}><b>Simplicity:</b> Reducing
                        visual clutter is particularly important for autistic
                        children who may be sensitive to overstimulation. Clean
                        layouts, limited animations, and avoiding unnecessary
                        elements keeps the focus on the gameplay and allows the
                        player to easily interact with the game. Also, instructions
                        and UI text should be simple and jargon-free. Players may
                        struggle with abstract or figurative language, so clarity
                        is essential.</p>

                    <p style={{marginTop: '1rem'}}><b>Consistency:</b> Once a
                        gesture or interaction pattern is established, it should
                        behave the same way every time. Unpredictable behaviour is
                        especially disorienting for autistic users. Also, consistency
                        in design is also key. We will ensure the use of the same
                        fonts, sizes, layouts and colour scheme across the whole game.</p>

                    <p style={{marginTop: '1rem'}}><b>Visibility:</b> All buttons and
                        text should be large and clear when displayed on both a TV and
                        a laptop, as required by our client. UI elements with related
                        functions should be grouped together, and elements with different
                        functions should be kept separate – for example, text for score
                        and best score may be displayed in one corner, while the pause
                        button would be placed elsewhere.</p>

                    <p style={{marginTop: '1rem'}}><b>Efficiency:</b> The game should
                        allow the player to start playing with as little friction as
                        possible – they can go straight to the games if they know how
                        to play already, and tutorials can be navigated to if needed.
                        Furthermore, it should be easy to always pause, exit, or
                        restart a minigame easily. </p>

                    <p style={{marginTop: '1rem'}}><b>Feedback:</b> When interacting
                        with the game, both visual and auditory feedback should be
                        provided, to ensure that the users know exactly what their
                        actions will result in. For example, when a motion is successfully
                        detected (e.g. kicking, saving), the game should clearly confirm
                        this and convey it to the player. This responsiveness ensures
                        that players understand the cause and effects of their actions
                        and can intuitively navigate the game.</p>

                    <p style={{marginTop: '1rem'}}><b>Tolerance:</b> The UI is made to
                        be quite simple and easy to navigate, making it hard to make
                        mistakes. Users can quickly and easily navigate back to the
                        correct screen even if they misclick.</p>
                </div>

                <div className={styles.abstractPanel}>
                <h3>Initial sketches</h3>

                    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', marginTop: '1.5rem'}}>
                        <ImageWithCaption src="/sketches/initial sketches/main menu.png" caption="Main menu screen layout" />
                        <ImageWithCaption src="/sketches/initial sketches/minigames menu.png" caption="Minigames screen layout" />
                        <ImageWithCaption src="/sketches/initial sketches/shop.png" caption="Shop screen layout" />
                        <ImageWithCaption src="/sketches/initial sketches/free kick 1.png" caption="Free kick minigame layout" />
                        <ImageWithCaption src="/sketches/initial sketches/free kick 2.png" caption="Adding spin to the ball" />
                        <ImageWithCaption src="/sketches/initial sketches/penalty.png" caption="Penalty shootout minigame layout" />
                        <ImageWithCaption src="/sketches/initial sketches/goalkeeping 1.png" caption="Goalkeeping minigame layout" />
                        <ImageWithCaption src="/sketches/initial sketches/goalkeeping 2.png" caption="Ball moves towards the player" />
                        <ImageWithCaption src="/sketches/initial sketches/tutorial.png" caption="Tutorial loading screen" />
                    </div>

                    <p style={{marginTop: '2rem', color: 'var(--slate-700)'}}>
                        Add your description of the sketches here — what each one shows, the design decisions made, and
                        how they informed the final UI.
                    </p>

                    <h3 style={{ marginTop: '3rem' }}>Improved sketches</h3>

                    <div
                        style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', marginTop: '1.5rem'}}>
                        <ImageWithCaption src="/sketches/improved sketches/shop.png" caption="Shop screen with back button"/>
                        <ImageWithCaption src="/sketches/improved sketches/minigames menu.png" caption="Minigames menu with back button and tutorial level"/>
                        <ImageWithCaption src="/sketches/improved sketches/tutorial level.png" caption="Dedicated tutorial level"/>
                        <ImageWithCaption src="/sketches/improved sketches/free kick 1.png" caption="Free kick with pause button"/>
                        <ImageWithCaption src="/sketches/improved sketches/goalkeeping.png" caption="Goalkeeping with pause button"/>
                        <ImageWithCaption src="/sketches/improved sketches/gamepaused.png" caption="Game paused overlay over goalkeeping minigame"/>
                    </div>

                    <p style={{marginTop: '2rem', color: 'var(--slate-700)'}}>
                        Add your description of the sketches here — what each one shows, the design decisions made, and
                        how they informed the final UI.
                    </p>
                </div>

                <div className={styles.abstractPanel}>
                    <h3>Initial prototypes</h3>

                    <div
                        style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', marginTop: '1.5rem'}}>
                        <ImageWithCaption src="/prototypes/initial prototypes/MainMenu.png" caption="Main menu"/>
                        <ImageWithCaption src="/prototypes/initial prototypes/MiniGames-Menu.png" caption="Minigames menu"/>
                        <ImageWithCaption src="/prototypes/initial prototypes/Shop.png" caption="Shop screen"/>
                        <ImageWithCaption src="/prototypes/initial prototypes/Settings.png" caption="Settings screen"/>
                        <ImageWithCaption src="/prototypes/initial prototypes/MiniGames-FreeKick1.png" caption="Free kick minigame"/>
                        <ImageWithCaption src="/prototypes/initial prototypes/MiniGames-FreeKick2.png" caption="Spin popup in free kick"/>
                        <ImageWithCaption src="/prototypes/initial prototypes/MiniGames-Penalty.png" caption="Penalty shootout minigame"/>
                        <ImageWithCaption src="/prototypes/initial prototypes/MiniGames-GoalKeeping.png" caption="Goalkeeping minigame"/>
                        <ImageWithCaption src="/prototypes/initial prototypes/Game_Paused.png" caption="Game paused screen"/>
                    </div>

                    <p style={{marginTop: '2rem', color: 'var(--slate-700)'}}>
                        Add your description of the sketches here — what each one shows, the design decisions made, and
                        how they informed the final UI.
                    </p>

                    <h3 style={{ marginTop: '3rem' }}>Improved prototypes</h3>

                    <div
                        style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', marginTop: '1.5rem'}}>
                        <ImageWithCaption src="/prototypes/improved prototypes/game paused improved.png" caption="More options on pause screen"/>
                        <ImageWithCaption src="/prototypes/improved prototypes/free kick improved.png" caption="Brighter and clearer spin indicator"/>
                        <ImageWithCaption src="/prototypes/improved prototypes/shop improved.png" caption="Increased size of back button"/>
                    </div>

                    <p style={{marginTop: '2rem', color: 'var(--slate-700)'}}>
                        Add your description of the sketches here — what each one shows, the design decisions made, and
                        how they informed the final UI.
                    </p>
                </div>

                <div className={styles.abstractPanel}>
                    <h3>Interactive Wireframe</h3>
                    <p>Add Figma/prototype link placeholder.</p>
                </div>

                <div className={styles.abstractPanel}>
                    <h3>Final UI improvements</h3>

                    <div
                        style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', marginTop: '1.5rem'}}>
                        <ImageWithCaption src="/final game UI/main menu.png" caption="Main menu"/>
                        <ImageWithCaption src="/final game UI/minigames menu.png" caption="Minigames menu, with added obstacle course minigame"/>
                        <ImageWithCaption src="/final game UI/settings.png" caption="Final settings UI"/>
                        <ImageWithCaption src="/final game UI/tutorials.png" caption="Tutorials screen"/>
                        <ImageWithCaption src="/final game UI/start up menu.png" caption="Menu in each minigame to select difficulty and mode"/>
                        <ImageWithCaption src="/final game UI/penalty hard.png" caption="Adjusted position of power bar"/>
                        <ImageWithCaption src="/final game UI/pause menu.png" caption="Pause menu"/>
                        <ImageWithCaption src="/final game UI/settings in minigame.png" caption="Settings when accessed from the pause menu"/>
                        <ImageWithCaption src="/final game UI/minigame complete.png" caption="Minigame completion screen"/>
                    </div>

                    <p style={{marginTop: '2rem', color: 'var(--slate-700)'}}>
                        Add your description of the sketches here — what each one shows, the design decisions made, and
                        how they informed the final UI.
                    </p>

                    <h3 style={{marginTop: '2rem'}}>MotionInput window UI</h3>

                    <div
                        style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1.5rem'}}>
                        <ImageWithCaption src="/final game UI/mi window kick.png" caption="MotionInput window in game, kicking mode"/>
                        <ImageWithCaption src="/final game UI/mi window hands.png" caption="MotionInput window in game, hands-only mode"/>
                        <ImageWithCaption src="/final game UI/motion kick.png" caption="Glowing icons when kick is registered"/>
                        <ImageWithCaption src="/final game UI/motion hands.png" caption="Glowing icons when a hand is registered"/>
                    </div>

                    <p style={{marginTop: '2rem', color: 'var(--slate-700)'}}>
                        Add your description of the sketches here — what each one shows, the design decisions made, and
                        how they informed the final UI.
                    </p>
                </div>

            </div>
        </section>
    )
}