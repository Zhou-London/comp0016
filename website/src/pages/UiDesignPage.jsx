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
                    <p>Simplicity, consistency, visibility, feedback, tolerance.</p>
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
                    <h3>Final UI designs</h3>

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
                </div>

            </div>
        </section>
    )
}