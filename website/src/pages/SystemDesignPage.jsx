
import styles from '../App.module.css';
import SectionHeader from '../components/SectionHeader';
import Tabs from '../components/Tabs';
import SystemDesignImage from '../components/SystemDesignImage';


const tabs = [
  {
    label: 'Architecture',
    content: (
      <section>
        <h2>System Architecture Diagram</h2>
        <p>
           The architecture is built around a modular <strong>Unity</strong> scene-based shell, with each minigame implemented as a self-contained module. Shared runtime systems, such as <code>MotionInputManager</code>, <code>GameSettings</code>, and <code>GlobalGameAudio</code>, provide core services accessible across all scenes. An external <code>motioninput.exe</code> process handles motion tracking, with configuration and state exchanged via persistent JSON files and <code>PlayerPrefs</code>. The diagram below shows how the application shell, minigame modules, shared systems, and external processes interact, including the control flow between them.
        </p>
        <SystemDesignImage src="/diagrams/system-design/architecture.png" alt="System architecture diagram" caption="System architecture diagram" />
        <div className={styles.componentBreakdown}>
          <h3>Component Breakdown</h3>
          <ul>
            <li><b>Application Shell</b>: Hosts the main menu, minigames menu, settings, credits, and tutorials scenes. It manages user navigation, scene transitions, and global UI state. The shell is responsible for routing the user to the correct minigame or settings area and for maintaining persistent UI elements across scenes.</li>
            <li><b>Minigame Modules</b>: Each minigame (Freekick, Goalkeeping, Penalty Shootout, Obstacle Course) is implemented as a separate scene and code module. These modules encapsulate their own gameplay logic, assets, and session flow, allowing for independent development and testing. They interact with shared systems for settings, audio, and motion input.</li>
            <li><b>Shared Runtime Systems</b>: Core services such as <code>MotionInputManager</code>, <code>GameSettings</code>, <code>GlobalGameAudio</code>, <code>SessionFlow</code>, and <code>GameLogger</code> are implemented as singletons or service adapters. These provide cross-scene functionality, including input management, persistent settings, audio playback, session state management, and logging. They are accessible from any scene and ensure consistent behavior throughout the application.</li>
            <li><b>External Runtime (MotionInput)</b>: The <code>motioninput.exe</code> process runs outside of Unity and handles all motion tracking and input processing. It is launched and managed by the <code>MotionInputManager</code>, and communicates with the Unity application via configuration files and window focus events. The <code>ModesFolder</code> and <code>StreamingConfig</code> provide mode definitions and default settings for the external process.</li>
            <li><b>Data and Persistence</b>: User and runtime data is stored in <code>PlayerPrefs</code> (for settings like audio and input preferences), <code>PersistentConfig</code> (for motion input configuration), and <code>StreamingConfig</code> (for default config shipped with the app). These storage locations ensure that user preferences and system state persist across sessions and can be restored on startup.</li>
          </ul>
        </div>
      </section>
    ),
  },
  {
    label: 'Navigation',
    content: (
      <section>
        <h2>Navigation and Runtime Flow</h2>
        <div className={styles.componentBreakdown}>
          <h3>Game Map (Scene Navigation)</h3>
        <p>
           Navigation is managed through a clear scene flow: the user launches into <b>MainMenuScene</b>, proceed to <b>MinigamesMenuScene</b>, settings or credits. From <b>MinigamesMenuScene</b> the user can branch into any of the four minigames or the tutorials. Each minigame scene is designed to support seamless return to the <b>MinigamesMenu</b>, ensuring a consistent user experience. The game map navigation diagram visualises all possible navigation paths, including back/quit/completion routes for each minigame and the connections between menu, settings, and credits scenes.
        </p>
        </div>
        
        <SystemDesignImage src="/diagrams/system-design/game-map.png" alt="Game map diagram" caption="Game map and scene navigation diagram" />
      </section>
    ),
  },
  {
    label: 'Sequences',
    content: (
      <section>
        <h2>Sequence Diagrams</h2>
        <div className={styles.componentBreakdown}>
          <h3>Minigame Launch and Mode Switch</h3>
        <p>
           When a player selects a minigame, the menu controller requests a mode switch from <code>MotionInputManager</code>. If MotionInput is not running, it is launched with the correct configuration; if already running, the mode is hot-reloaded by updating the config and sending a reload shortcut to the external process. The sequence diagram details this process, showing how the system handles both initialization and runtime mode switching, ensuring the correct input mode is always active for the selected minigame.
        </p>
        </div>
        <SystemDesignImage
          src="/diagrams/system-design/sequence-minigame-launch.svg"
          alt="Sequence diagram for mode switching and minigame launch"
          caption="Sequence diagram for mode switching and minigame launch"
        />
        <div className={styles.componentBreakdown}>
        <h3>Session Lifecycle</h3>
        <p>
           Each minigame implements a <code>SessionFlow</code> state machine, registering all possible session states (menu, countdown, playing, complete) and their associated callbacks. The controller transitions between these states based on gameplay events, with per-frame tick logic driving state-specific behavior. The session lifecycle diagram illustrates how user actions, UI events, and controller logic interact to manage the full flow from game start to completion and return to the menu.
        </p>
        </div>
        <SystemDesignImage src="/diagrams/system-design/sequence-session-flow.svg" alt="Session lifecycle sequence diagram" caption="Session lifecycle sequence diagram" />
      </section>
    ),
  },
  {
    label: 'Class Diagrams',
    content: (
      <section>
        <h2>Class Diagrams</h2>
        <p>
           This section includes class diagrams for the key subsystems of the project, including the MotionInput integration, shared core contracts, and high-level overviews of each minigame. For minigames, only the main architectural subsystems and their relationships are shown—full class diagrams for each minigame would be too complex to represent clearly on this page. Each diagram is accompanied by a breakdown of the main components and their responsibilities, highlighting design patterns and architectural decisions that contribute to a modular, maintainable codebase. This approach ensures the diagrams remain readable and focused on the overarching structure, rather than every class dependency within each minigame implementation.
        </p>
        <div className={styles.componentBreakdown}>
          <h3>MotionInput Integration</h3>
          <p>
            The MotionInput integration subsystem is designed for modularity and testability, with clear separation of concerns. The main classes are:
          </p>
          <ul>
            <li><b>MotionInputManager</b>: Central orchestrator, responsible for launching and terminating the external motioninput.exe process, switching modes, and managing the runtime state. Holds references to the process, window, and config adapters as private fields, ensuring all integration logic is encapsulated.</li>
            <li><b>MotionInputProcessAdapter</b>: Abstracts process launching and existence checks, allowing the manager to start or verify the external process without direct dependency on .NET's Process API.</li>
            <li><b>MotionInputWindowAdapter</b>: Handles all window management, including focusing, sending reload shortcuts, and manipulating window properties. This enables robust runtime control and user experience integration.</li>
            <li><b>MotionInputConfigRepository</b>: Manages persistent and streaming configuration files, providing methods to check, set, and retrieve modes and config data. This keeps file I/O and schema logic out of the main manager class.</li>
          </ul>
          <p>
            The class diagram shows these classes and their relationships, with the manager holding references to each adapter/repository and delegating responsibilities accordingly. This structure allows for easy extension, testing, and maintenance of the motion input integration.
          </p>
        </div>
        <SystemDesignImage src="/diagrams/system-design/class-motion-input.png" alt="Class diagram for MotionInput integration" caption="Class diagram for MotionInput integration" />
        <div className={styles.componentBreakdown}>
          <h3>Shared Core Contracts</h3>
          <p>
            The shared core subsystem uses interface-driven design to decouple gameplay logic from Unity singletons and enable flexible, testable code. The main elements are:
          </p>
          <ul>
            <li><b>IAudioService</b> and <b>ISettingsService</b>: Interfaces that define the contract for audio and settings operations, allowing gameplay code to depend on abstractions, not concrete implementations.</li>
            <li><b>GlobalAudioServiceAdapter</b> and <b>GameSettingsServiceAdapter</b>: Implement these interfaces, acting as adapters that delegate calls to the underlying Unity singletons (<code>GlobalGameAudio</code> and <code>GameSettings</code>). This makes it easy to swap implementations or mock services for testing.</li>
            <li><b>SessionFlow&lt;TState&gt;</b>: A generic state machine used by all minigame controllers to manage session lifecycle, with explicit registration of states and transitions. This enables consistent, maintainable flow control across all minigames.</li>
            <li>The diagram also shows how adapters interact with singletons, and how <code>SessionFlow</code> is used by each minigame controller (Freekick, Goalkeeper, Penalty, Obstacle Course) for lifecycle orchestration.</li>
          </ul>
          <p>
            This approach ensures that core services are reusable, extensible, and easy to test, while keeping gameplay logic clean and focused on game-specific behavior.
          </p>
        </div>
        <SystemDesignImage src="/diagrams/system-design/class-shared-core.png" alt="Class diagram for shared core interfaces and adapters" caption="Class diagram for shared core interfaces and adapters" />

        <div className={styles.componentBreakdown}>
          <h3>Shared Logging</h3>
          
          <p>
            The shared logging subsystem provides a flexible, testable way to control log output across the codebase:
          </p>
          <ul>
            <li><b>GameLogger</b> is a static facade used throughout the project. It exposes methods to log messages and warnings, enable/disable logging per category, and swap out the active filter for testing or customization.</li>
            <li><b>ILogChannelFilter</b> is an interface that defines the contract for log filtering. It allows custom strategies for enabling/disabling log output by category, making it easy to test or extend logging behavior.</li>
            <li><b>DefaultLogChannelFilter</b> is the standard implementation, using a dictionary to track which log categories are enabled. It is used by default but can be replaced at runtime for advanced scenarios or unit testing.</li>
          </ul>
          <p>
            This design decouples logging logic from the rest of the codebase, supports per-subsystem log toggling, and enables robust testing by allowing filters to be swapped or stubbed as needed.
          </p>
          <SystemDesignImage src="/diagrams/system-design/class-shared-logging.png" alt="Class diagram for shared logging subsystem" caption="Class diagram for shared logging subsystem" />
        </div>
        <div className={styles.componentBreakdown}>
        <h3>Freekick Minigame Class Diagram</h3>
            <p>
              The Freekick minigame uses a controller and service-oriented architecture. The <code>FreekickController</code> manages Unity lifecycle, scene references, and state, delegating domain-specific logic to service classes such as <code>FreekickShotPlanningCoordinator</code>, <code>FreekickRoundManager</code>, and <code>FreekickSessionLifecycleService</code>. Scoring and round state are tracked by <code>FreekickScoreTracker</code> and <code>FreekickGoalTrigger</code>. This structure keeps orchestration centralized and reduces coupling, making the minigame maintainable and extensible.
            </p>
            <SystemDesignImage src="/diagrams/system-design/freekick-class-overview.png" alt="Class diagram for Freekick minigame" caption="Class diagram for Freekick minigame"/>
        </div>
        <div className={styles.componentBreakdown}>
          <h3>Goalkeeping Minigame Class Diagram</h3>
          <p>
            The Goalkeeping minigame is structured around a central <code>GoalkeeperGameManager</code> that manages the session state machine, scoring, UI, and audio. The <code>GoalkeeperCompositionRoot</code> wires up all dependencies and scene references. Ball spawning and targeting are handled by <code>GoalkeeperBallShooter</code>, which assigns Bezier curve trajectories to each ball using <code>GoalkeeperBallCurvePath</code>. The <code>GoalkeeperFPSController</code> manages hand position and input, while <code>GoalkeeperGloveSetup</code> instantiates and parents glove models for hand tracking. Save and goal outcomes are detected by <code>GoalkeeperSaveDetector</code> and <code>GoalkeeperGoalDetector</code>, which notify the manager of results. This architecture enables clear separation of concerns, robust hand/motion input integration, and maintainable gameplay logic.
          </p>
          <SystemDesignImage src="/diagrams/system-design/goalkeeping-class-overview.png" alt="Class diagram for Goalkeeping minigame" caption="Class diagram for Goalkeeping minigame"
          />
        </div>
        <div className={styles.componentBreakdown}>
          <h3>Penalty Shootout Minigame Class Diagram</h3>
          <p>
            The Penalty Shootout minigame is orchestrated by the <code>PenaltyController</code>, which manages session state, round flow, resets, and completion transitions. The <code>PenaltyCompositionRoot</code> wires up all scene dependencies. Player shot input, run-up, and kick execution are handled by the <code>PenaltyPlayer</code>, with power selection in hard mode managed by the <code>PenaltyPowerMeter</code>. The <code>PenaltyModeMenu</code> provides mode, difficulty, and target score selection. Scoring and streaks are tracked by the <code>PenaltyScore</code>, while the <code>PenaltyGoalTrigger</code> and <code>PenaltyMissTrigger</code> detect outcomes and notify the controller. Goalkeeper movement and save logic are managed by the <code>PenaltyGoalkeeperMovement</code> and <code>PenaltyGoalkeeperSave</code>. This architecture enables modular gameplay logic, clear separation of concerns, and robust handling of both easy and hard difficulty flows.
          </p>
          <SystemDesignImage
            src="/diagrams/system-design/penalty-class-overview.png"
            alt="Class diagram for Penalty Shootout minigame"
            caption="Class diagram for Penalty Shootout minigame"
          />
        </div>
        <div className={styles.componentBreakdown}>
          <h3>Obstacle Course Minigame Class Diagram</h3>
          <p>
            The Obstacle Course minigame is managed by the <code>ObstacleCourseGameManager</code>, which orchestrates session flow, player movement, and round progression. The <code>ObstacleCourseCompositionRoot</code> wires up all core dependencies. Task sequencing is handled by the <code>ObstacleTaskCatalog</code>, while the <code>ObstacleCourseObstacleManager</code> manages task spawning, completion detection, and scoring. The <code>ObstacleCoursePlayer</code> and <code>ObstacleCourseBallManager</code> handle player and ball behavior, respectively. UI is managed by the <code>ObstacleCourseUIManager</code>, and the <code>StartMenuUI</code> provides pre-game selection. This architecture enables modular task management, clear separation of concerns, and robust session control for a variety of challenge types and difficulty modes.
          </p>
          <SystemDesignImage
            src="/diagrams/system-design/obstacle-course-class-overview.png"
            alt="Class diagram for Obstacle Course minigame"
            caption="Class diagram for Obstacle Course minigame"
          />
        </div>
      </section>
    ),
  },
  {
    label: 'Data',
    content: (
      <section>
        <h2>Data Storage</h2>
        <div className={styles.componentBreakdown}>
          {/* <h3>Data Storage Model</h3> */}
          <ul>
            <li>
              <b>File-based approach:</b> The project avoids a traditional relational database, instead using simple files for all persistent data. This keeps the system lightweight and easy to maintain. <b>No user data is captured or stored at any point.</b>
            </li>
            <li>
              <b>Unity PlayerPrefs:</b> Used for lightweight, per-user runtime settings. Examples include:
              <ul>
                <li>Audio preferences: <code>GlobalAudio_SfxEnabled</code>, <code>GlobalAudio_CrowdEnabled</code>, <code>GlobalAudio_MusicVolume</code>, etc.</li>
                <li>Input toggles: <code>MotionInputEnabled</code>, <code>HandsOnlyMode</code></li>
                <li>Other simple configuration values frequently read/updated by UI or systems</li>
              </ul>
              PlayerPrefs provides automatic persistence across sessions and is ideal for settings that change often.
            </li>
            <li>
              <b>MotionInput JSON Config:</b> A structured file (<code>config.json</code>) storing all configuration for the external motion input process, including:
              <ul>
                <li>Current mode, version, and device</li>
                <li>Camera and view settings</li>
                <li>Speech and accessibility features</li>
                <li>Advanced calibration data (hands, head, forcefield, etc.)</li>
              </ul>
              The schema is extensible, with nested objects for each subsystem. The config is loaded at startup, updated on mode switches, and written back as needed.
            </li>
            <li>
              <b>Schema Overview:</b> The diagram below shows the structure and relationships between these data stores. Key PlayerPrefs fields and MotionInput config fields are highlighted, showing how user preferences and system-critical configuration are separated for efficiency and reliability.
            </li>
            <li>
              <b>Benefits:</b> This approach balances ease of use, flexibility, and maintainability. It also makes it straightforward to back up, migrate, or audit configuration data as the project evolves.
            </li>
          </ul>
        </div>
        <SystemDesignImage src="/diagrams/system-design/data-storage-schema.png" alt="Data storage schema for PlayerPrefs and MotionInput config" caption="Data storage schema for PlayerPrefs and MotionInput config" />
      </section>
    ),
  },
  {
    label: 'Design Patterns',
    content: (
      <section>
        <h2>Design Patterns</h2>
        <p>
            The project employs a variety of design patterns to ensure a modular, maintainable, extensible and testable codebase. These patterns are applied across the architecture, with specific examples in the MotionInput integration, shared core systems, and minigame implementations. The table below categorizes the main design patterns used, provides examples of where they are applied in the codebase, and explains their purpose in the context of this project.
        </p><br/>
        <table className={styles.patternTable}>
          <thead>
            <tr>
              <th>Pattern Type</th>
              <th>Pattern Name</th>
              <th>Main Usage / Example Classes</th>
              <th>Purpose in Project</th>
            </tr>
          </thead>
          <tbody>
            {/* CREATIONAL */}
            <tr>
              <td rowSpan={2}>Creational</td>
              <td>Singleton</td>
              <td>
                <ul>
                  <li>GameSettings</li>
                  <li>GlobalGameAudio</li>
                  <li>MotionInputManager</li>
                </ul>
              </td>
              <td>
                <p>Guarantees a single, always-available instance for core services (settings, audio, motion input) that must persist across scene loads and be accessible from any script. Prevents accidental duplication, ensures consistent state, and simplifies cross-scene communication.</p>
              </td>
            </tr>
            <tr>
              <td>Runtime Bootstrap</td>
              <td>
                <ul>
                  <li>GlobalGameAudio</li>
                </ul>
              </td>
              <td>
                <p>Forces critical global systems (like audio) to be constructed before any scene logic runs, eliminating race conditions and null reference errors. Ensures that all dependent objects can safely access these services from the very start of the application.</p>
              </td>
            </tr>

            {/* STRUCTURAL */}
            <tr>
              <td rowSpan={4}>Structural</td>
              <td>Facade</td>
              <td>
                <ul>
                  <li>GameLogger</li>
                  <li>GlobalGameAudio</li>
                </ul>
              </td>
              <td>
                <p>Hides the complexity and Unity-specific details of logging and audio behind a single, easy-to-use API. Makes it trivial to swap implementations, add filtering, or redirect output for testing without changing gameplay code.</p>
              </td>
            </tr>

            <tr>
              <td>Adapter</td>
              <td>
                <ul>
                  <li>GameSettingsServiceAdapter</li>
                  <li>GlobalAudioServiceAdapter</li>
                  <li>MotionInputProcessAdapter</li>
                  <li>MotionInputWindowAdapter</li>
                </ul>
              </td>
              <td>
                <p>Encapsulates Unity or OS-specific APIs behind interfaces, allowing gameplay and test code to interact with simple, stable contracts. Enables mocking and replacement in tests, and isolates platform changes to a single adapter class.</p>
              </td>
            </tr>

            <tr>
              <td>Composition Root</td>
              <td>
                <ul>
                  <li>FreekickCompositionRoot</li>
                  <li>GoalkeeperCompositionRoot</li>
                  <li>PenaltyCompositionRoot</li>
                  <li>ObstacleCourseCompositionRoot</li>
                </ul>
              </td>
              <td>
                <p>Collects all scene reference wiring and object instantiation in a single, visible location (the composition root), making dependencies explicit and Inspector-friendly. Reduces hidden runtime lookups and makes scene setup auditable and testable.</p>
              </td>
            </tr>

            <tr>
              <td>Repository</td>
              <td>
                <ul>
                  <li>MotionInputConfigRepository</li>
                </ul>
              </td>
              <td>
                <p>Owns all file I/O, config loading, and persistence for MotionInput, keeping these concerns out of gameplay and controller classes. Makes it easy to update, validate, or back up config data without touching core logic.</p>
              </td>
            </tr>

            {/* BEHAVIORAL */}
            <tr>
              <td rowSpan={4}>Behavioral</td>
              <td>State</td>
              <td>
                <ul>
                  <li>ISessionState</li>
                  <li>SessionStateMachine</li>
                  <li>SessionFlow&lt;TState&gt;</li>
                </ul>
              </td>
              <td>
                <p>Represents each gameplay or session phase as a distinct state object, allowing transitions and per-state logic without sprawling if/else chains. Makes adding new phases or transitions straightforward and keeps state logic isolated.</p>
              </td>
            </tr>

            <tr>
              <td>Strategy</td>
              <td>
                <ul>
                  <li>ObstacleTaskCatalog</li>
                  <li>IObstacleTaskExecutor</li>
                  <li>Freekick shot planning</li>
                </ul>
              </td>
              <td>
                <p>Enables dynamic selection of task, shot, or behavior logic at runtime by encapsulating each variant in its own class. Reduces code duplication and makes it easy to add new behaviors or tweak existing ones without touching the main flow.</p>
              </td>
            </tr>

            <tr>
              <td>Coordinator / Service</td>
              <td>
                <ul>
                  <li>FreekickShotPlanningCoordinator</li>
                  <li>FreekickSessionLifecycleService</li>
                </ul>
              </td>
              <td>
                <p>Splits large controller logic into focused, testable service or coordinator classes, each handling a single responsibility (e.g., shot planning, round management). Improves maintainability, test coverage, and code clarity.</p>
              </td>
            </tr>

            <tr>
              <td>Event-driven</td>
              <td>
                <ul>
                  <li>SceneManager.sceneLoaded</li>
                  <li>UnityEvent callbacks</li>
                  <li>Triggers</li>
                </ul>
              </td>
              <td>
                <p>Uses Unity events, triggers, and callbacks to decouple systems and allow them to react to changes or user actions without direct references. Makes the system more modular, extensible, and responsive to runtime conditions.</p>
              </td>
            </tr>

            {/* ARCHITECTURAL */}
            {/* <tr>
              <td rowSpan={1}>Architectural</td>
              <td>Modular Minigame</td>
              <td>
                <ul>
                  <li>Minigame folders</li>
                  <li>Shared systems</li>
                </ul>
              </td>
              <td>
                <p>Divides the project into self-contained minigame modules and shared systems, allowing independent development, testing, and reuse. Ensures that cross-cutting concerns (settings, audio, logging) are implemented once and reused everywhere, while each minigame can evolve separately.</p>
              </td>
            </tr> */}
          </tbody>
        </table>
      </section>
    ),
  }
];

export default function SystemDesignPage() {
  return (
    <section className={styles.sectionAlt}>
      <SectionHeader title="System Design" subtitle="Architecture, sequence and class diagrams, data storage model, and design patterns." />
      <Tabs tabs={tabs} defaultTab={0} />
    </section>
  );
}
