import styles from '../App.module.css'
import ImageWithCaption from '../components/ImageWithCaption'
import SectionHeader from '../components/SectionHeader'

export default function UiDesignPage() {
    return (
        <section className={styles.section}>
            <SectionHeader title="UI Design" subtitle="Design principles, sketches, prototypes, wireframes." />

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
                        These sketches were made to portray our initial ideas for
                        the overall game design, flow and navigation between different
                        pages, and the gameplay of the minigames. We took into account
                        the placement of the MotionInput window in the top right corner
                        and designed our UI around this, ensuring all other elements
                        would be visible and accessible. Using the design principles,
                        our main aim was for our UI to be as straightforward and easy
                        to navigate as possible, and understandable at a first glance.
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
                        On the second iteration of our sketches, we added key
                        missing UI elements to improve the ease and efficiency
                        of navigation, and improve the user experience. In the
                        menus, back buttons are needed to allow the player to
                        easily move back and forth between them. In the minigames,
                        the ability to pause is also crucial to give the player a
                        break if needed and let them control their experience with
                        the game, therefore a pause button was added. The back
                        button and pause button are in the same position for
                        consistency. Furthermore, only showing instructions while
                        a game is loading would be too brief, so we planned to add
                        a dedicated tutorial level for more detailed instructions.
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
                        To better visualise our game, we created some prototypes
                        of what the different screens may look like using AI
                        generated images. These better illustrate the use of
                        colour, bold and readable fonts, and how the minigames
                        will look in 3D. A prototype of the settings page was
                        created to show to our clients what accessibility features
                        we will include – different volume sliders, adjustable
                        game difficulty and game speed.
                    </p>

                    <h3 style={{ marginTop: '3rem' }}>Improved prototypes</h3>

                    <div
                        style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', marginTop: '1.5rem'}}>
                        <ImageWithCaption src="/prototypes/improved prototypes/game paused improved.png" caption="More options on pause screen"/>
                        <ImageWithCaption src="/prototypes/improved prototypes/free kick improved.png" caption="Brighter and clearer spin indicator"/>
                        <ImageWithCaption src="/prototypes/improved prototypes/shop improved.png" caption="Increased size of back button"/>
                    </div>

                    <p style={{marginTop: '2rem', color: 'var(--slate-700)'}}>
                        Iterating on these ideas, we added a couple of design
                        improvements. First, we added some better functionality
                        to the game paused screen to improve the efficiency of
                        navigation – instead of only being able to pause and unpause,
                        the player is given the option to restart or exit as well.
                        The gameplay mechanic of adding spin has also been simplified
                        from being able to kick the ball anywhere, to only having 5
                        options. This has been reflected in the UI, with the discrete
                        options presented and the indicator changed to a bright
                        yellow for better visibility.
                    </p>
                </div>

                <div className={styles.abstractPanel}
                     style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <h3>Interactive Designs</h3>

                    <p style={{marginTop: '1rem', color: 'var(--slate-700)'}}>
                        This video presents an interactive UI demo.
                    </p>

                    <video
                        controls
                        style={{width: '80%', borderRadius: '10px', marginTop: '0.8rem'}}>
                        <source src="/final game UI/UI demo.mp4" type="video/mp4"/>
                    </video>
                </div>

                <div className={styles.abstractPanel}>
                    <h3>Design Inspiration & Final UI</h3>
                    <p>
                        We took inspiration from the UI from other games,
                        notably the layout of the menus were based on the
                        Persona series - however ours were made much more
                        minimalist and with less elements, to avoid making
                        them look too busy or overwhelming. During development,
                        we ended up making several changes to our UI, to
                        accommodate new features and after receiving feedback
                        from test users.
                    </p>

                    <div style={{display: 'flex', gap: '2rem', marginTop: '2rem', alignItems: 'flex-start'}}>

                        <p style={{color: 'var(--slate-700)', lineHeight: 1.7, flex: 1}}>
                            <b>Colour Palette: </b>The palette draws from the colours of a football pitch.
                            The greens, Mantis and Emerald Green, reflect the grass,
                            while Maastricht Blue and Deep Marine bring depth and
                            contrast. Peridot adds a bright, energetic accent to
                            highlight key UI elements, and Rice provides a soft,
                            off-white colour that is easier on the eyes than pure
                            white - an important consideration for autistic users
                            who may be sensitive to high contrast.
                        </p>

                        <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, auto)', gap: '1rem', flex: 1}}>
                            {[
                                {hex: '#f6f7ed', label: 'Rice'},
                                {hex: '#dbe64c', label: 'Peridot'},
                                {hex: '#74c365', label: 'Mantis'},
                                {hex: '#00804c', label: 'Emerald Green'},
                                {hex: '#1e488f', label: 'Deep Marine'},
                                {hex: '#001f3f', label: 'Maastricht Blue'},
                            ].map(({hex, label}) => (
                                <div key={hex} style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    gap: '0.15rem'
                                }}>
                                    <div style={{
                                        width: '140px', height: '50px',
                                        borderRadius: '10px',
                                        background: hex,
                                        border: '1px solid #dde7f3',
                                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                                    }}/>
                                    <span style={{
                                        fontSize: '0.8rem',
                                        fontWeight: 600,
                                        color: 'var(--slate-700)'
                                    }}>{label}</span>
                                    <span style={{
                                        fontSize: '0.75rem',
                                        color: 'var(--slate-500)',
                                        fontFamily: 'monospace'
                                    }}>{hex}</span>
                                </div>
                            ))}
                        </div>

                    </div>

                    <div
                        style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2.5rem', marginTop: '2rem'}}>
                        <ImageWithCaption src="/final game UI/main menu.png" caption="Main menu"/>
                        <ImageWithCaption src="/final game UI/minigames menu.png"
                                          caption="Minigames menu, with added obstacle course minigame"/>
                        <ImageWithCaption src="/final game UI/settings.png" caption="Final settings UI"/>
                    </div>

                    <p style={{marginTop: '1.5rem', color: 'var(--slate-700)'}}>
                        Our final menu UI still retains simplicity and ease of
                        navigation. 3 fonts are used consistently across the
                        game – Need for Font, Toxigenesis and Halo, providing
                        legibility but also suiting the style of our game. The
                        colour palette is also used across every menu and screen
                        in the game. All buttons now completely change colour
                        when hovered over, providing clear visual feedback but
                        also audio feedback with our added sound effects.
                    </p>

                    <div
                        style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2.5rem', marginTop: '1.5rem'}}>
                        <ImageWithCaption src="/final game UI/tutorials.png" caption="Tutorials screen"/>
                        <ImageWithCaption src="/final game UI/start up menu.png"
                                          caption="Menu in each minigame to select difficulty and mode"/>
                        <ImageWithCaption src="/final game UI/penalty hard.png"
                                          caption="Adjusted position of power bar"/>
                    </div>

                    <p style={{marginTop: '1.5rem', color: 'var(--slate-700)'}}>
                        We have added another menu to select the difficulty
                        and mode when starting a minigame, structured in a way that
                        leads you through the selection process and allows for a
                        quick start. The position of the power bar in our penalty
                        shootout minigame was also moved to right above the goal, as
                        we had received feedback during the showcase that it was
                        difficulty to look very far from the screen and keep track of
                        multiple elements – the moving goalkeeper, the moving power
                        bar indicator, as well as yourself in the motion window. By
                        moving the power bar right next to the goal, it is much easier
                        and more intuitive to play.
                    </p>

                    <p style={{marginTop: '1rem', color: 'var(--slate-700)'}}>
                        Additionally, the position of the back and pause button have changed from where they were placed
                        in our initial sketches. This is because we implemented a setting that allows the player to turn
                        the MotionInput window on and off, meaning the original position no longer works for both of
                        these cases – when the window is not there, the back/pause button will appear to be in the
                        middle of the screen with a large space to its right. Therefore, we moved it to the bottom right
                        corner instead.
                    </p>

                    <div
                        style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2.5rem', marginTop: '1.5rem'}}>
                        <ImageWithCaption src="/final game UI/pause menu.png" caption="Pause menu"/>
                        <ImageWithCaption src="/final game UI/settings in minigame.png"
                                          caption="Settings when accessed from the pause menu"/>
                        <ImageWithCaption src="/final game UI/minigame complete.png"
                                          caption="Minigame completion screen"/>
                    </div>

                    <p style={{marginTop: '1.5rem', color: 'var(--slate-700)'}}>
                        While playing a minigame, the pause menu can be brought up,
                        and through this the settings menu can also be accessed –
                        increasing efficiency and access to the settings, rather than
                        having to exit the game and go all the way back to the main
                        menu. This prevents the player’s gameplay from being interrupted,
                        and still allows them to adjust the settings to make the game
                        more accessible if needed. These menus are all placed over the
                        minigame in play, with a slight dark overlay used to increase
                        legibility. A minigame completion screen was also added to add a
                        sense of accomplishment and remove the harsh transition of an
                        instant restart. This also gives the player more control over their
                        next steps after finishing a minigame.
                    </p>

                    <h3 style={{marginTop: '2rem'}}>MotionInput window UI</h3>

                    <p style={{marginTop: '1.5rem', color: 'var(--slate-700)'}}>
                        The MotionInput window that is displayed in the corner while playing also requires good UI
                        design. This window displays icons that the player can trigger with certain body parts. In the
                        free kick, penalty shootout and obstacle course minigames, the player must use either foot to
                        kick these icons. In goalkeeping (or in hands-only mode), the player must use either hand to
                        trigger these icons. The placement and design of these icons are crucial to the gameplay and
                        user experience.
                    </p>

                    <div
                        style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1.5rem'}}>
                        <ImageWithCaption src="/final game UI/mi window kick.png"
                                          caption="MotionInput window in game, kicking mode"/>
                        <ImageWithCaption src="/final game UI/mi window hands.png"
                                          caption="MotionInput window in game, hands-only mode"/>
                        <ImageWithCaption src="/final game UI/motion kick.png"
                                          caption="Glowing icons when kick is registered"/>
                        <ImageWithCaption src="/final game UI/motion hands.png"
                                          caption="Glowing icons when a hand is registered"/>
                    </div>

                    <p style={{marginTop: '1.5rem', color: 'var(--slate-700)'}}>
                        For both modes, we wanted to use a circular icon as these are the most intuitive and lenient to
                        trigger, even for someone completely new to using MotionInput. Simply placing the required body
                        part within this circle results in a successful trigger. This is much easier to accomplish
                        rather than trying to perfectly line up your own foot with a football boot icon, for example.
                    </p>

                    <p style={{marginTop: '1.5rem', color: 'var(--slate-700)'}}>
                        For the kicking mode, we used icons of footballs that the player can ‘kick’. For the
                        hands-only/goalkeeping mode, we used goalkeeper gloves on top of a football, to retain the
                        circular shaped trigger but relate the icon to the gesture used. After several people playtested
                        our game during the showcase, we also observed that the left and right icons in goalkeeping were
                        hard to reach while standing (we had only tested this mode ourselves while sitting), and so we
                        moved these closer to the centre. In both modes, when a icon is successfully triggered, the icon
                        will light up, providing clear and instant feedback to the player that the input was
                        successfully registered.
                    </p>
                </div>

            </div>
        </section>
    )
}