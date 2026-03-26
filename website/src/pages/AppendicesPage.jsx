
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
          This manual provides a step-by-step guide for installing, launching, and playing the football practice game. The game features four minigames, motion input controls, and a range of accessibility options.
        </p><br/>
        <p>
          <b>Children with SEND should play under the guidance of a guardian, who navigates the game on their behalf.</b>
        </p><br/>

        <h3>2. System Requirements</h3>
        <ul>
          <li><b>Target Operating System:</b> Windows 10/11 or later (required for MotionInput integration)</li>
          <li><b>Additional Operating System:</b> macOS Big Sur 11 or later (no MotionInput support)</li>
          <li><b>Processor:</b> Intel Core i5 or equivalent</li>
          <li><b>Memory</b> 8 GB RAM or higher</li>
          <li><b>Hardware:</b> Standard PC/laptop with webcam for motion input</li>
        </ul>

        <h3>3. Installation & Setup</h3>
        <ol>
          <li>Download the zip file and unzip the game build.</li>
          <ul>
            <li><a href="https://liveuclac-my.sharepoint.com/:u:/g/personal/zcabsub_ucl_ac_uk/IQAklyvTM-vRS5oTwmk2LmMnAQdt1Vu1hG2LnUVu9OmGWdQ?e=ue78Lr" target="_blank" rel="noopener noreferrer"><b>Windows build</b></a></li>
            <li><a href="https://liveuclac-my.sharepoint.com/:u:/g/personal/zcabsub_ucl_ac_uk/IQB70I_2RX8gToEW9BQqx9QsAehNRTjECu-wcZBukDrwW1A?e=R87gQ4" target="_blank" rel="noopener noreferrer"><b>macOS build</b></a></li>
          </ul>
          <li><b>(Windows)</b>Ensure the MotionInput build files are in <code>Assets/StreamingAssets/MotionInput/</code>.</li>
          <ul>
            <li>Required files: <code>motioninput.exe</code>, <code>data/</code> folder, <code>modes/</code> folder.</li>
            <li><a href="https://liveuclac-my.sharepoint.com/:u:/g/personal/zcabsub_ucl_ac_uk/IQAwedpsmkDAQp86gmjlfceQAR2m2-F9Sgb3hhU2uAVtlK8?e=w7vjZb" target="_blank" rel="noopener noreferrer"><b>MotionInput build files</b></a></li>
          </ul>
          <li>Double-click the game executable to launch.</li>
        </ol>
          <img
            src="/appendices/run-executable.png"
            alt="Double-click the executable to run the game"
            className={styles.appendicesImage}
          />

        <h3>4. Main Menu & Navigation</h3>
        <ul>
          <li><b>Main Menu:</b> Start the game, access minigames, settings, credits, or quit.</li>
          <img src="/appendices/main-menu.png" alt="Main Menu" className={styles.appendicesImage} />
          <li><b>Minigames Menu:</b> Select from Freekick, Goalkeeping, Penalty Shootout, Obstacle Course to play, or view tutorials</li>
          <img src="/appendices/minigame-menu.png" alt="Minigame Menu" className={styles.appendicesImage} />
          <li><b>Main Settings:</b> Adjust audio, motion input, and game speed for accessibility.</li>
          <img src="/appendices/settings-menu.png" alt="Settings Menu" className={styles.appendicesImage} />
        </ul>

        <h3>5. Motion Input Controls</h3>
        <p>
          The game uses MotionInput to translate your physical gestures into in-game actions. Two gesture modes are supported:
        </p>
        <ul>
          <li><b>Kicking Mode:</b> Used for Freekick, Penalty Shootout, and Obstacle Course (full-body kicking).</li>
          <img src="/appendices/kicking-mode.png" alt="Kicking Mode" className={styles.appendicesImage} />
          <li><b>Hands Mode:</b> Used for Goalkeeping (hands only) and optionally for all minigames if Hands Only Mode is enabled.</li>
          <img src="/appendices/hands-mode.png" alt="Hands Mode" className={styles.appendicesImage} />
        </ul>
        <p>
          If MotionInput is not detected, the game will fall back to keyboard controls (A/W/D). See the full tutorial screen for more information on how to play each minigame.
        </p>
        <img src="/appendices/tutorial-page.png" alt="Tutorial Screen" className={styles.appendicesImage} />

        <h3>6. Minigames Overview</h3>
        <ul>
          <li><b>Freekick:</b> Select a shot lane and kick to score goals. Avoid the wall and goalkeeper. Supports easy/hard modes and endless/target score sessions.</li>
          <img src="/appendices/freekick.png" alt="Freekick Minigame" className={styles.appendicesImage} />
          <li><b>Goalkeeping:</b> Move gloves to block shots using hand gestures. Supports easy/hard modes and endless/target saves sessions.</li>
          <img src="/appendices/goalkeeping.png" alt="Goalkeeping Minigame" className={styles.appendicesImage} />
          <li><b>Penalty Shootout:</b> Take penalties against a goalkeeper. In hard mode, use a power meter for shot force. Supports endless/target score sessions.</li>
          <img src="/appendices/penalty-shootout.png" alt="Penalty Shootout Minigame" className={styles.appendicesImage} />          
          <li><b>Obstacle Course:</b> Complete eight sequential football challenges (kicking, dribbling, hitting targets, avoiding defenders, etc.). Supports easy/hard modes and multiple session types.</li>
          <img src="/appendices/obstacle-course.png" alt="Obstacle Course Minigame" className={styles.appendicesImage} />
        </ul>
        

        <h3>7. Settings & Accessibility</h3>
        <ul>
          <li>Adjust audio volumes and toggle SFX, crowd, and music.</li>
          <li>Enable or disable MotionInput and Hands Only Mode.</li>
          <li>Adjust game speed for accessibility, between 0.5x and 1.5x standard speed</li>
          <li>All settings are applied across the game and are saved using Unity PlayerPrefs and stay between sessions.</li>
        </ul>
        <p>Settings can also be accesed from the pause menu in each minigame. To take effect the minigame may need to be restarted.</p>
        <img src="/appendices/pause-menu.png" alt="Pause Menu" className={styles.appendicesImage} />
        <img src="/appendices/in-game-settings.png" alt="In-Game Settings" className={styles.appendicesImage} />

        <h3>8. Troubleshooting & FAQ</h3>
        <ul>
          <li><b>MotionInput not detected:</b> Ensure all required files are present in <code>StreamingAssets/MotionInput/</code>.</li>
          <li><b>Camera not found:</b> Check webcam connection and ensure the camera is on. Make sure only 1 MotionInput window is open, close any duplicates or restart the application.</li>
          <li><b>Game falls back to keyboard:</b> Check webcam connection and MotionInput status.</li>
          <li><b>Use of external webcam:</b> Ensure the external webcam is properly connected and recognized by the system.</li>
        </ul>
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
          This manual provides a step-by-step guide for setting up the development environment, opening the project in Unity, configuring MotionInput, and building the football practice game for distribution.
        </p><br/>

        <h3>2. System Requirements</h3>
        <ul>
          <li><b>Target Operating System:</b> Windows 10/11 or later (required for MotionInput integration)</li>
          <li><b>Additional Operating System:</b> macOS Big Sur 11 or later (no MotionInput support)</li>
          <li><b>Processor:</b> Intel Core i5 or equivalent</li>
          <li><b>Memory</b> 8 GB RAM or higher</li>
          <li><b>Storage:</b> At least 10 GB of free disk space</li>
          <li><b>Hardware:</b> Standard PC/laptop with webcam for motion input</li>
          <li><b>Unity Version:</b> 6000.2.12f1 or compatible</li>
          <li><b>Code Editor:</b> Visual Studio or other IDEs with C# support</li>
        </ul>

        <h3>3. Environment Preparation</h3>
        <ol>
          <li>Install <a href="https://docs.unity.com/en-us/hub/install-hub"><b>Unity Hub</b></a> and add the required Unity version.</li>
          <li>Ensure you have <a href="https://git-scm.com/install/"><b>Git</b></a> (for source code and version control) and a suitable IDE (e.g. Visual Studio) for C# code editing.</li>
        </ol>

        <h3>4. Getting the Source Code</h3>
        <ol>
          <li>Clone the repository or download the source code as a .zip file.</li>
          <ul>
            <li><a href="https://github.com/mariha-s/COMP0016_2025_Team7_FootballPractice" target="_blank" rel="noopener noreferrer"><b>https://github.com/mariha-s/COMP0016_2025_Team7_FootballPractice</b></a></li>
            <li><code>git clone https://github.com/mariha-s/COMP0016_2025_Team7_FootballPractice.git</code></li>
          </ul>
          <li>Open Unity Hub, click <b>Add</b>, and select the project root folder.</li>
        </ol>
        <img src="/appendices/unity-hub.png" alt="Add project in Unity Hub" className={styles.appendicesImage} />

        <h3>5. MotionInput Setup</h3>
        <ol>
          <li>Obtain the MotionInput build files (not included in the repository due to GitHub file size limits).</li>
          <ul>
            <li><a href="https://liveuclac-my.sharepoint.com/:u:/g/personal/zcabsub_ucl_ac_uk/IQAwedpsmkDAQp86gmjlfceQAR2m2-F9Sgb3hhU2uAVtlK8?e=w7vjZb" target="_blank" rel="noopener noreferrer"><b>MotionInput build files</b></a></li>
          </ul>
          <li>Extract the zip file to <code>Assets/StreamingAssets/</code></li>
          <li>Ensure that <code>motioninput.exe</code>, the <code>data/</code> folder, and the <code>modes/</code> folder are in <code>Assets/StreamingAssets/MotionInput/</code>.</li>
        </ol>
        <img src="/appendices/motioninput-folder.png" alt="MotionInput Folder" className={styles.appendicesImage} />

        <h3>6. Opening the Project</h3>
        <ol>
          <li>Open the project in Unity Hub and launch it with the correct Unity version.</li>
          <li>Wait for Unity to import assets and dependencies (first load may take time).</li>
        </ol>
        <img src="/appendices/unity-editor.png" alt="Unity Editor" className={styles.appendicesImage} />

        <h3>7. Installing Dependencies</h3>
        <ol>
          <li>Open <b>Window → Package Management → Package Manager </b> in Unity.</li>
          <li>Ensure the following packages are installed:
            <ul>
              <li>Universal Render Pipeline (URP)</li>
              <li>Unity Toon Shader</li>
              <li>Shader Graph</li>
              <li>Unity UI (UGUI)</li>
              <li>TextMeshPro</li>
              <li>Input System</li>
              <li>2D Sprite</li>
              <li>Test Framework</li>
              <li>AI Navigation</li>
              <li>Timeline</li>
              <li>Visual Scripting</li>
              <li>Accessibility Module</li>
            </ul>
          </li>
        </ol>
        <img src="/appendices/package-manager.png" alt="Unity Package Manager" className={styles.appendicesImage} />

        <h3>8. Build Configuration</h3>
        <ol>
          <li>Go to <b>File → Build Profiles</b> and ensure all scenes are included in the correct order:</li>
          <li>Set the build target to <b>Windows (Standalone)</b> for MotionInput integration.</li>
          <img src="/appendices/win-build-profile.png" alt="Build Settings" className={styles.appendicesImage} />
          Or set the build target to <b>macOS</b> for keyboard input only builds for macOS
          <img src="/appendices/macos-build-profile.png" alt="Build Settings" className={styles.appendicesImage} />
          <li>Go to <b>Player Settings</b> to configure application settings.</li>
          Default resolution settings are shown below.
          <img src="/appendices/player-settings.png" alt="Player Settings" className={styles.appendicesImage} />
          <li>Click <b>Build and Run</b> to generate the executable in the chosen output directory.</li>
        </ol>

        <h3>9. Running the Game</h3>
        <ol>
          <li>After building, locate the executable in the output directory and double-click to run.</li>
          <li>Ensure the MotionInput window launches and overlays the game UI as expected.</li>
        </ol>
        <img src="/appendices/run-executable.png" alt="Run Executable" className={styles.appendicesImage} />
        <img src="/appendices/main-menu.png" alt="Main Menu" className={styles.appendicesImage} />

        <h3>10. Troubleshooting</h3>
        <ul>
          <li><b>MotionInput not detected:</b> Ensure all required files are present in <code>StreamingAssets/MotionInput/</code>.</li>
          <li><b>Camera not found:</b> Check webcam connection and ensure the camera is on. Make sure only 1 MotionInput window is open, close any duplicates or restart the application.</li>
          <li><b>Build errors:</b> Ensure all dependencies are installed and the correct Unity version is used.</li>
          <li><b>Game crashes or malfunctions:</b> Check log files in the output directory and verify input settings.</li>
          <li><b>UI elements not displaying correctly:</b> Ensure the correct URP material is applied to UI elements.</li>
          <li><b>Settings not saving:</b> Verify write permissions for PlayerPrefs.</li>
        </ul>

        <h3>11. Additional Notes</h3>
        <ul>
          <li><b>Version Control:</b> Use Git for all code and asset changes. Commit frequently and use descriptive commit messages. Large binary files (e.g., builds, MotionInput files) should be excluded via .gitignore.</li>
          <li><b>Asset Management:</b> When adding new assets (audio, textures, models), ensure they are properly imported and referenced in Unity. Use Unity's asset reimport if assets appear missing or broken.</li>
          <li><b>URP/Shader Issues:</b> If graphics or UI elements appear pink or broken, check that all materials use URP-compatible shaders and that the Render Pipeline Asset is assigned in Project Settings.</li>
          <li><b>Editor/Platform Differences:</b> Some features (e.g., MotionInput) are Windows-only. Test cross-platform builds for macOS to ensure fallback to keyboard controls works as expected.</li>
          <li><b>PlayerPrefs & Data:</b> PlayerPrefs are used for settings persistence. If settings do not save, check for permission issues or PlayerPrefs corruption. Use Unity's PlayerPrefs editor for debugging.</li>
          <li><b>Testing:</b> Use Unity's Test Runner for EditMode and PlayMode tests. Add new tests for any new features or bug fixes to maintain code quality.</li>
          <li><b>Documentation:</b> Update the READMEs, markdown files under <code>docs/</code>, and in-code comments when making significant changes to features, dependencies, or build steps.</li>
          <li><b>Build Output:</b> Always test the built executable (not just Play mode in the Editor) before release. Some issues only appear in builds.</li>
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
      </div>
    </div>
  );
}

function WhereToFindCode() {
  return (
    <div>
      <h2>Where to Find the Code & Builds</h2>
      <div className={styles.componentBreakdown}>
        <h3>Source Code Repository</h3>
        <ul>
          <li>
            <b>GitHub Repository:</b> <a href="https://github.com/mariha-s/COMP0016_2025_Team7_FootballPractice" target="_blank" rel="noopener noreferrer">https://github.com/mariha-s/COMP0016_2025_Team7_FootballPractice</a>
          </li>
        </ul>
        <h3>Game Builds</h3>
        <ul>
          <li>
            <b>Windows Build:</b> <a href="https://liveuclac-my.sharepoint.com/:u:/g/personal/zcabsub_ucl_ac_uk/IQAklyvTM-vRS5oTwmk2LmMnAQdt1Vu1hG2LnUVu9OmGWdQ?e=ue78Lr" target="_blank" rel="noopener noreferrer">Download (Windows)</a>
          </li>
          <li>
            <b>macOS Build:</b> <a href="https://liveuclac-my.sharepoint.com/:u:/g/personal/zcabsub_ucl_ac_uk/IQB70I_2RX8gToEW9BQqx9QsAehNRTjECu-wcZBukDrwW1A?e=R87gQ4" target="_blank" rel="noopener noreferrer">Download (macOS)</a>
          </li>
        </ul>
        <h3>MotionInput Build (Windows only)</h3>
        <ul>
          <li>
            <b>MotionInput Build Files:</b> <a href="https://liveuclac-my.sharepoint.com/:u:/g/personal/zcabsub_ucl_ac_uk/IQAwedpsmkDAQp86gmjlfceQAR2m2-F9Sgb3hhU2uAVtlK8?e=w7vjZb" target="_blank" rel="noopener noreferrer">Download MotionInput</a>
          </li>
          <li>
            Place <code>motioninput.exe</code>, <code>data/</code> folder, and <code>modes/</code> folder in <code>Assets/StreamingAssets/MotionInput/</code> in your game directory.
          </li>
        </ul>
        <h3>Documentation</h3>
        <ul>
          <li>
            <b>Project Documentation:</b> See the <code>README.md</code> and <code>docs/</code> folder in the GitHub repository for architecture, build, and technical details.
          </li>
        </ul>
      </div>
    </div>
  );
}

function Credits() {
  return (
    <div>
      <h2>Credits</h2>
      <div className={styles.componentBreakdown}>
        <h3>Project Team</h3>
        <ul>
          <li>
            Mariha Subhan
            <a href="https://www.linkedin.com/in/mariha-subhan-ba0672324/" target="_blank" rel="noopener noreferrer" style={{marginLeft: '0.5em', marginRight: '0.3em', verticalAlign: 'middle'}} title="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{verticalAlign: 'middle'}}><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.034 0 3.595 1.997 3.595 4.59v5.606z"/></svg>
            </a>
            <a href="https://github.com/mariha-s" target="_blank" rel="noopener noreferrer" style={{marginRight: '0.3em', verticalAlign: 'middle'}} title="GitHub">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{verticalAlign: 'middle'}}><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.415-4.042-1.415-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576 4.765-1.588 8.199-6.084 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
          </li>
          <li>
            Sunain Syed
            <a href="https://www.linkedin.com/in/sunain-syed/" target="_blank" rel="noopener noreferrer" style={{marginLeft: '0.5em', marginRight: '0.3em', verticalAlign: 'middle'}} title="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{verticalAlign: 'middle'}}><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.034 0 3.595 1.997 3.595 4.59v5.606z"/></svg>
            </a>
            <a href="https://github.com/sunain-s" target="_blank" rel="noopener noreferrer" style={{marginRight: '0.3em', verticalAlign: 'middle'}} title="GitHub">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{verticalAlign: 'middle'}}><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.415-4.042-1.415-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576 4.765-1.588 8.199-6.084 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
          </li>
          <li>
            William Xing
            <a href="https://www.linkedin.com/in/wangweimin-xing-2bb1b8300/" target="_blank" rel="noopener noreferrer" style={{marginLeft: '0.5em', marginRight: '0.3em', verticalAlign: 'middle'}} title="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{verticalAlign: 'middle'}}><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.034 0 3.595 1.997 3.595 4.59v5.606z"/></svg>
            </a>
            <a href="https://github.com/WilliamX07" target="_blank" rel="noopener noreferrer" style={{marginRight: '0.3em', verticalAlign: 'middle'}} title="GitHub">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{verticalAlign: 'middle'}}><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.415-4.042-1.415-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576 4.765-1.588 8.199-6.084 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
          </li>
          <li>
            Zhouzhou Zhang
            <a href="https://www.linkedin.com/in/zhouzhou-zhang-aa16b0282/" target="_blank" rel="noopener noreferrer" style={{marginLeft: '0.5em', marginRight: '0.3em', verticalAlign: 'middle'}} title="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{verticalAlign: 'middle'}}><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.034 0 3.595 1.997 3.595 4.59v5.606z"/></svg>
            </a>
            <a href="https://github.com/Zhou-London" target="_blank" rel="noopener noreferrer" style={{marginRight: '0.3em', verticalAlign: 'middle'}} title="GitHub">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{verticalAlign: 'middle'}}><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.415-4.042-1.415-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576 4.765-1.588 8.199-6.084 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
          </li>
          <li>
            Antony Wiles
            <a href="https://www.linkedin.com/in/antony-wiles-8432892b8/" target="_blank" rel="noopener noreferrer" style={{marginLeft: '0.5em', marginRight: '0.3em', verticalAlign: 'middle'}} title="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{verticalAlign: 'middle'}}><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.034 0 3.595 1.997 3.595 4.59v5.606z"/></svg>
            </a>
            <a href="https://github.com/antoroux" target="_blank" rel="noopener noreferrer" style={{marginRight: '0.3em', verticalAlign: 'middle'}} title="GitHub">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{verticalAlign: 'middle'}}><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.415-4.042-1.415-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576 4.765-1.588 8.199-6.084 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
          </li>
        </ul>

        <h3>Supervision & Collaboration</h3>
        <ul>
          <li>Supervised by Prof. Dean Mohamedally</li>
          <li>In collaboration with the <a href="https://www.autism.org.uk/" target="_blank" rel="noopener noreferrer">National Autistic Society (NAS)</a> and <a href="https://www.intel.com/content/www/us/en/homepage.html" target="_blank" rel="noopener noreferrer">Intel</a> </li>
          <li>Developed for <a href="https://www.motioninputgames.com/" target="_blank" rel="noopener noreferrer">MotionInput Games Ltd.</a></li>
        </ul>
      </div>
    </div>
  );
}

export default function AppendicesPage() {
  const tabs = [
    { label: 'User Manual', content: <UserManual /> },
    { label: 'Deployment Manual', content: <DeploymentManual /> },
    { label: 'GDPR & Privacy', content: <GDPR /> },
    { label: 'Dependencies', content: <Dependencies /> },
    { label: 'Where to Find Code', content: <WhereToFindCode /> },
    { label: 'Credits', content: <Credits /> },
  ];

  return (
    <section className={styles.sectionAlt}>
      <SectionHeader title="Appendices" subtitle="Manuals, legal topics, dependencies, and credits." />
      <Tabs tabs={tabs} storageKey="appendicesActiveTab" />
    </section>
  );
}
