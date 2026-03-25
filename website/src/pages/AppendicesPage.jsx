import styles from '../App.module.css';
import SectionHeader from '../components/SectionHeader';
import Tabs from '../components/Tabs';

function UserManual() {
  return (
    <div>
      <h2>User Manual</h2>
      <div className={styles.componentBreakdown}>
        <h3>1. Introduction</h3>
        <p>
          This manual provides a step-by-step guide for installing, launching, and playing the football practice game. The game features four minigames, motion input controls, and a range of accessibility options. Images will be added to illustrate each step.
        </p>

        <h3>2. System Requirements</h3>
        <ul>
          <li><b>Operating System:</b> Windows (required for MotionInput integration)</li>
          <li><b>Unity Version:</b> 6000.2.12f1 or compatible</li>
          <li><b>Hardware:</b> Standard PC with webcam for motion input</li>
        </ul>

        <h3>3. Installation & Setup</h3>
        <ol>
          <li>Download and unzip the game build.</li>
          <li>Copy the MotionInput build files (not included) into <code>Assets/StreamingAssets/MotionInput/</code>.<br/>Required files: <code>motioninput.exe</code>, <code>data/</code> folder, <code>modes/</code> folder.</li>
          <li>Double-click the game executable to launch.</li>
        </ol>
        <div className={styles.imagePlaceholder}>[Add installation screenshot here]</div>

        <h3>4. Main Menu & Navigation</h3>
        <ul>
          <li><b>Main Menu:</b> Start the game, access minigames, settings, credits, or quit.</li>
          <li><b>Minigames Menu:</b> Select from Freekick, Goalkeeping, Penalty Shootout, or Obstacle Course.</li>
          <li><b>Settings:</b> Adjust audio, motion input, and accessibility options.</li>
        </ul>
        <div className={styles.imagePlaceholder}>[Add main menu screenshot here]</div>

        <h3>5. Motion Input Controls</h3>
        <p>
          The game uses MotionInput to translate your physical gestures into in-game actions. Two gesture modes are supported:
        </p>
        <ul>
          <li><b>Kicking Mode:</b> Used for Freekick, Penalty Shootout, and Obstacle Course (full-body kicking).</li>
          <li><b>Goalkeeping Mode:</b> Used for Goalkeeping (hands only) and optionally for all minigames if Hands Only Mode is enabled.</li>
        </ul>
        <p>
          If MotionInput is not detected, the game will fall back to keyboard controls (A/W/D or arrow keys).
        </p>
        <div className={styles.imagePlaceholder}>[Add motion input demo image here]</div>

        <h3>6. Minigames Overview</h3>
        <ul>
          <li><b>Freekick:</b> Select a shot lane and kick to score goals. Avoid the wall and goalkeeper. Supports easy/hard modes and endless/target score sessions.</li>
          <li><b>Goalkeeping:</b> Move gloves to block shots using hand gestures. Supports easy/hard modes and endless/target saves sessions.</li>
          <li><b>Penalty Shootout:</b> Take penalties against a goalkeeper. In hard mode, use a power meter for shot force. Supports endless/target score sessions.</li>
          <li><b>Obstacle Course:</b> Complete eight sequential football challenges (kicking, dribbling, hitting targets, avoiding defenders, etc.). Supports easy/hard modes and multiple session types.</li>
        </ul>
        <div className={styles.imagePlaceholder}>[Add minigame selection screenshot here]</div>

        <h3>7. Settings & Accessibility</h3>
        <ul>
          <li>Adjust audio volumes and toggle SFX, crowd, and music.</li>
          <li>Enable or disable MotionInput and Hands Only Mode.</li>
          <li>All settings are saved using Unity PlayerPrefs and persist between sessions.</li>
        </ul>
        <div className={styles.imagePlaceholder}>[Add settings screenshot here]</div>

        <h3>8. Troubleshooting & FAQ</h3>
        <ul>
          <li><b>MotionInput not detected:</b> Ensure all required files are present in <code>StreamingAssets/MotionInput/</code>.</li>
          <li><b>Game falls back to keyboard:</b> Check webcam connection and MotionInput status.</li>
          <li><b>Settings not saving:</b> Verify write permissions for PlayerPrefs.</li>
          <li><b>For more help:</b> See the README or contact support.</li>
        </ul>

        <h3>9. Testing & Support</h3>
        <ul>
          <li>Automated tests can be run from Unity's Test Runner (Window → General → Test Runner).</li>
          <li>EditMode tests cover logic and state machines; PlayMode tests cover integration and UI flows.</li>
        </ul>
        <div className={styles.imagePlaceholder}>[Add test runner screenshot here]</div>
      </div>
    </div>
  );
}

function DeploymentManual() {
  return (
    <div>
      <h2>Deployment Manual</h2>
      <div className={styles.componentBreakdown}>
        <h3>1. Introduction</h3>
        <p>
          This manual provides a step-by-step guide for setting up the development environment, opening the project in Unity, configuring MotionInput, and building the football practice game for distribution. Images will be added to illustrate each step.
        </p>

        <h3>2. System Requirements</h3>
        <ul>
          <li><b>Operating System:</b> Windows (required for MotionInput integration)</li>
          <li><b>Unity Version:</b> 6000.2.12f1 or compatible</li>
          <li><b>Hardware:</b> Standard PC with webcam for motion input</li>
        </ul>

        <h3>3. Environment Preparation</h3>
        <ol>
          <li>Install <b>Unity Hub</b> and add the required Unity version.</li>
          <li>Ensure you have <b>Git</b> (for source code) and a suitable IDE (e.g., Visual Studio) for code editing.</li>
        </ol>
        <div className={styles.imagePlaceholder}>[Add Unity Hub screenshot here]</div>

        <h3>4. Getting the Source Code</h3>
        <ol>
          <li>Clone the repository or download the source code as a .zip file.</li>
          <li>Open Unity Hub, click <b>Add</b>, and select the project root folder.</li>
        </ol>
        <div className={styles.imagePlaceholder}>[Add project folder screenshot here]</div>

        <h3>5. MotionInput Setup</h3>
        <ol>
          <li>Obtain the MotionInput build files (not included in the repository).</li>
          <li>Copy <code>motioninput.exe</code>, the <code>data/</code> folder, and the <code>modes/</code> folder into <code>Assets/StreamingAssets/MotionInput/</code>.</li>
        </ol>
        <div className={styles.imagePlaceholder}>[Add MotionInput folder screenshot here]</div>

        <h3>6. Opening the Project</h3>
        <ol>
          <li>Open the project in Unity Hub and launch it with the correct Unity version.</li>
          <li>Wait for Unity to import assets and dependencies (first load may take time).</li>
        </ol>
        <div className={styles.imagePlaceholder}>[Add Unity Editor screenshot here]</div>

        <h3>7. Installing Dependencies</h3>
        <ol>
          <li>Open <b>Window → Package Manager</b> in Unity.</li>
          <li>Ensure the following packages are installed:
            <ul>
              <li>Universal Render Pipeline</li>
              <li>Unity Toon Shader</li>
              <li>Shader Graph</li>
              <li>Unity UI</li>
              <li>TextMeshPro</li>
              <li>Input System</li>
            </ul>
          </li>
        </ol>
        <div className={styles.imagePlaceholder}>[Add Package Manager screenshot here]</div>

        <h3>8. Build Configuration</h3>
        <ol>
          <li>Go to <b>File → Build Settings</b> and ensure all scenes are included in the correct order:</li>
          <li>Set the build target to <b>Windows (Standalone)</b>.</li>
          <li>Click <b>Build and Run</b> to generate the executable.</li>
        </ol>
        <div className={styles.imagePlaceholder}>[Add Build Settings screenshot here]</div>

        <h3>9. Running the Game</h3>
        <ol>
          <li>After building, locate the executable in the output directory and double-click to run.</li>
          <li>Ensure the MotionInput window launches and overlays the game UI as expected.</li>
        </ol>
        <div className={styles.imagePlaceholder}>[Add running game screenshot here]</div>

        <h3>10. Troubleshooting</h3>
        <ul>
          <li><b>MotionInput not launching:</b> Check that all required files are present in <code>StreamingAssets/MotionInput/</code>.</li>
          <li><b>Build errors:</b> Ensure all dependencies are installed and the correct Unity version is used.</li>
          <li><b>Game crashes or malfunctions:</b> Check log files in the output directory and verify input settings.</li>
        </ul>
        <div className={styles.imagePlaceholder}>[Add troubleshooting screenshot here]</div>

        <h3>11. Additional Notes</h3>
        <ul>
          <li>MotionInput build files are not included in the repository due to size and licensing. Obtain them from the project maintainers.</li>
          <li>All scenes must be present and correctly ordered in Build Settings for a successful build.</li>
        </ul>
      </div>
    </div>
  );
}

function GDPR() {
  return (
    <section>
      <h2>GDPR & Privacy</h2>
      <div className={styles.componentBreakdown}>
        <h3>This Application</h3>
        <p>
          This application is designed with user privacy in mind. It does not collect, store, or transmit any personal data. All user preferences (such as audio levels, input preferences, and UI customisations) are stored locally on your device. Gameplay and motion input data are processed in real-time for gameplay purposes only and are not stored or transmitted.
        </p>
        <ul>
          <li><b>User Preferences:</b> Stored locally using Unity PlayerPrefs.</li>
          <li><b>Gameplay Data:</b> Session-based, cleared when the application is closed.</li>
          <li><b>Motion Input Data:</b> Processed in real-time, never stored or transmitted.</li>
        </ul>
        <h3>Third-Party Privacy Policy</h3>
        <p>
          For all matters relating to the broader MotionInput Games privacy policy, including legal basis, data sharing, user rights, and GDPR compliance, please refer to the official policy:
        </p><br/>
        <b><a href="https://motioninputgames.com/privacy" target="_blank" rel="noopener noreferrer">https://motioninputgames.com/privacy</a></b><br/><br/>
        <p>
          This application is in compliance with the MotionInput Games Privacy Policy. By using this application, you acknowledge and agree that your privacy is protected in accordance with that policy.
        </p><br/> 
        <h3>Policy Updates</h3>
        <p>
          If data collection practices change in future updates, this policy will be updated accordingly.<br/>
          <b>This privacy policy was last updated on 25th March 2026</b>.
        </p>
      </div>
    </section>
  );
}

function Dependencies() {
  return (
    <div>
      <h2>Dependencies</h2>
      <div className={styles.componentBreakdown}>
        <h3>Unity Packages</h3>
        <ul>
          <li><b>Universal Render Pipeline (URP):</b> Modern rendering pipeline for high-quality graphics and performance.</li>
          <li><b>Unity Toon Shader:</b> Cartoon-style shading for characters and assets.</li>
          <li><b>Shader Graph:</b> Custom shader authoring.</li>
          <li><b>Unity UI (UGUI):</b> Canvas and UI components.</li>
          <li><b>TextMeshPro:</b> Advanced text rendering.</li>
          <li><b>Input System:</b> Modern input handling for keyboard, mouse, and motion input events.</li>
          <li><b>2D Sprite:</b> Sprite and UI image support.</li>
          <li><b>Test Framework:</b> Unit and integration testing (EditMode/PlayMode).</li>
          <li><b>AI Navigation:</b> Navigation mesh and pathfinding (used for future expansion).</li>
          <li><b>Timeline:</b> Timeline-based animation and cutscene support.</li>
          <li><b>Visual Scripting:</b> Node-based scripting for rapid prototyping.</li>
          <li><b>Accessibility Module:</b> Accessibility features for UI and input.</li>
        </ul>

        <h3>External Dependencies</h3>
        <ul>
          <li><b>MotionInput Runtime:</b> External executable and config files for gesture-based controls (required for motion input features).</li>
          <li><b>Imported Art/Audio Asset Packs:</b>
            <ul>
              <li><a href="https://assetstore.unity.com/packages/3d/environments/gamedev-starter-kit-football-mini-324490" target="_blank" rel="noopener noreferrer">GameDev Starter Kit: Football Mini</a> — 3D football field, goals, props, and environment assets.</li>
              <li><a href="https://assetstore.unity.com/packages/3d/characters/hyper-casual-mega-football-197981" target="_blank" rel="noopener noreferrer">Hyper Casual Mega Football</a> — 3D football player and character models.</li>
              <li><a href="https://pixabay.com/" target="_blank" rel="noopener noreferrer">Pixabay</a> — Free stock audio assets for background music and sound effects.</li>
              <li><a href="https://www.freesfx.co.uk/Category/Football-(Soccer)/86" target="_blank" rel="noopener noreferrer">FreeSFX</a> — Free sound effects for football related audio.</li>
            </ul>
          </li>
        </ul>

        {/* <h3>Build & Platform Constraints</h3>
        <ul>
          <li><b>Platform:</b> Windows only (uses Win32 DLL imports for window management and process launching).</li>
          <li><b>Unity Version:</b> 6000.2.12f1 or compatible.</li>
        </ul>

        <h3>Inspector & Configuration</h3>
        <ul>
          <li>All major gameplay tuning values are set via Unity Inspector and <code>PlayerPrefs</code> (audio, input, game speed, etc.).</li>
          <li>MotionInput configuration is managed via <code>StreamingAssets/MotionInput/data/config.json</code> and per-mode files.</li>
        </ul> */}
      </div>
    </div>
  );
}

// function Contributions() {
//   return (
//     <div>
//       <h2>Contributions</h2>
//       <p>Guidelines for contributing to the project. (Add contribution guidelines here.)</p>
//     </div>
//   );
// }

function Credits() {
  return (
    <div>
      <h2>Credits</h2>
      <p>Project credits and acknowledgements. (Add credits here.)</p>
    </div>
  );
}

export default function AppendicesPage() {
  const tabs = [
    { label: 'User Manual', content: <UserManual /> },
    { label: 'Deployment Manual', content: <DeploymentManual /> },
    { label: 'GDPR & Privacy', content: <GDPR /> },
    { label: 'Dependencies', content: <Dependencies /> },
    // { label: 'Contributions', content: <Contributions /> },
    { label: 'Credits', content: <Credits /> },
  ];

  return (
    <section className={styles.sectionAlt}>
      <SectionHeader title="Appendices" subtitle="Manuals, legal topics, dependencies, contributions, and credits." />
      <Tabs tabs={tabs} storageKey="appendicesActiveTab" />
    </section>
  );
}
