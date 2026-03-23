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
        <h2>Data Storage and Schema</h2>
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
        <ul className={styles.diagramList}>
          <li>Singleton: GameSettings, GlobalGameAudio, MotionInputManager</li>
          <li>Adapter: GlobalAudioServiceAdapter, GameSettingsServiceAdapter, MotionInputProcessAdapter, MotionInputWindowAdapter</li>
          <li>Composition Root: FreekickCompositionRoot, GoalkeeperCompositionRoot, PenaltyCompositionRoot, ObstacleCourseCompositionRoot</li>
          <li>State Machine: SessionFlow&lt;TState&gt; for lifecycle orchestration</li>
        </ul>
      </section>
    ),
  },
];

export default function SystemDesignPage() {
  return (
    <section className={styles.sectionAlt}>
      <SectionHeader title="System Design" subtitle="Architecture, diagrams, data storage model, packages, and APIs." />
      <Tabs tabs={tabs} defaultTab={0} />
    </section>
  );
}
