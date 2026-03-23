import styles from '../App.module.css';
import SectionHeader from '../components/SectionHeader';
import Tabs from '../components/Tabs';


const tabs = [
  {
    label: 'Architecture',
    content: (
      <section>
        <h2>System Architecture Diagram</h2>
        <p>
          The architecture combines a Unity scene-based shell, isolated minigame modules, shared runtime systems, and an
          external MotionInput process. The diagram below highlights runtime boundaries and data flow through PlayerPrefs and
          MotionInput configuration files.
        </p>
        <img className={styles.diagramImageWide} src="/diagrams/system-design/architecture.png" alt="System architecture diagram" />
      </section>
    ),
  },
  {
    label: 'Navigation',
    content: (
      <section>
        <h2>Navigation and Runtime Flow</h2>
        <h3>Site Map (Scene Navigation)</h3>
        <p>
          Scene flow starts from MainMenuScene to MinigamesMenuScene, then branches to four minigames, tutorials, settings,
          and credits. Each minigame supports a return path to MinigamesMenuScene.
        </p>
        <img className={styles.diagramImageWide} src="/diagrams/system-design/game-map.png" alt="Game map diagram" />
      </section>
    ),
  },
  {
    label: 'Sequences',
    content: (
      <section>
        <h2>Sequence Diagrams</h2>
        <h3>Minigame Launch and Mode Switch</h3>
        <p>
          Before scene loading, the menu requests a MotionInput mode switch. Depending on runtime state, the manager either
          launches MotionInput or hot-reloads mode by updating config and sending a reload shortcut.
        </p>
        <img
          className={styles.diagramImageWide}
          src="/diagrams/system-design/sequence-minigame-launch.svg"
          alt="Sequence diagram for mode switching and minigame launch"
        />
        <h3>Session Lifecycle</h3>
        <p>
          Each minigame uses SessionFlow with registered states and per-frame tick callbacks, transitioning from
          menu/countdown to active play and completion states.
        </p>
        <img className={styles.diagramImageWide} src="/diagrams/system-design/sequence-session-flow.svg" alt="Session lifecycle sequence diagram" />
      </section>
    ),
  },
  {
    label: 'Class Diagrams',
    content: (
      <section>
        <h2>Class Diagrams</h2>
        <h3>MotionInput Integration</h3>
        <p>
          This diagram shows MotionInputManager orchestration and its dependency split across process launching, window
          control, and config repository responsibilities.
        </p>
        <img className={styles.diagramImageWide} src="/diagrams/system-design/class-motion-input.svg" alt="Class diagram for MotionInput integration" />
        <h3>Shared Core Contracts</h3>
        <p>
          Shared service interfaces and adapters decouple gameplay logic from singleton implementations while SessionFlow
          handles typed state transitions.
        </p>
        <img className={styles.diagramImageWide} src="/diagrams/system-design/class-shared-core.svg" alt="Class diagram for shared core interfaces and adapters" />
      </section>
    ),
  },
  {
    label: 'Data',
    content: (
      <section>
        <h2>Data Storage</h2>
        <p>
          This project does not use a relational database. Runtime data storage is split between PlayerPrefs keys and a
          persistent MotionInput JSON config. The schema diagram below documents those structures and relationships.
        </p>
        <img className={styles.diagramImageWide} src="/diagrams/system-design/data-storage-schema.png" alt="Data storage schema for PlayerPrefs and MotionInput config" />
      </section>
    ),
  },
  {
    label: 'Packages & APIs',
    content: (
      <section>
        <h2>Packages and APIs</h2>
        <p>
          Assembly dependencies and shared APIs are defined via asmdef boundaries and shared interfaces. This keeps
          minigame code independent while reusing shared systems.
        </p>
        <img className={styles.diagramImageWide} src="/diagrams/system-design/package-api-map.png" alt="Assembly dependency and API map" />
      </section>
    ),
  },
  {
    label: 'Design Patterns',
    content: (
      <section>
        <h2>Design Patterns</h2>
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
            <tr>
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
            </tr>
          </tbody>
        </table>
      </section>
    ),
  }
];

export default function SystemDesignPage() {
  return (
    <section className={styles.sectionAlt}>
      <SectionHeader title="System Design" subtitle="Architecture, diagrams, data storage model, packages, and APIs." />
      <Tabs tabs={tabs} defaultTab={0} />
    </section>
  );
}
