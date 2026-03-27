import styles from '../App.module.css'
import { Reveal } from '../components/Reveal'
import SectionHeader from '../components/SectionHeader'

export default function ResearchPage() {
  return (
    <section className={styles.sectionAlt}>
      <SectionHeader 
        title="Research" 
        subtitle="Related projects, technology comparison, device/algorithm choices, and references." 
      />

      <div style={{maxWidth: '1100px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>

        {/* Related Projects */}
        <Reveal><div className={styles.abstractPanel}>
          <h3>Related Projects Review</h3>

          <p style={{marginTop: '1rem'}}>
            Several existing systems explore the use of motion-based interaction and game environments 
            for sports training and skill development. Projects using Microsoft Kinect demonstrate how 
            full-body tracking can be applied to simulate real-world sports scenarios. These systems 
            typically provide real-time feedback and encourage physical engagement, making them effective 
            for training coordination and motor skills [1]. However, they often depend on specialised 
            hardware, which limits accessibility and scalability.
          </p>

          <p style={{marginTop: '1rem'}}>
            Other research has focused on interactive sports training platforms using computer vision 
            techniques. These systems allow users to interact with virtual environments through standard 
            cameras, reducing hardware requirements while maintaining interactivity [2]. Such approaches 
            highlight the trade-off between accessibility and tracking precision.
          </p>

          <p style={{marginTop: '1rem'}}>
            In the context of accessibility, studies on game-based learning for individuals with autism 
            show that structured, repetitive, and visually guided interactions improve engagement and 
            motor skill development [3]. These systems emphasise simplicity, consistency, and clear 
            feedback loops.
          </p>

          <p style={{marginTop: '1rem'}}>
            From these projects, several key lessons were identified:
          </p>

          <ul style={{marginTop: '0.5rem', paddingLeft: '1.5rem', lineHeight: 1.8}}>
            <li>Reducing hardware requirements increases accessibility</li>
            <li>Real-time feedback is essential for engagement</li>
            <li>Simplicity and consistency improve usability</li>
            <li>There is a trade-off between precision and accessibility</li>
          </ul>

          {/* Additional relevant football/sports/Unity projects and references */}
          <div style={{marginTop: '1.5rem'}}>
            <b>Additional Relevant Projects &amp; Research:</b>
            <ul style={{marginTop: '0.5rem', paddingLeft: '1.5rem', lineHeight: 1.8}}>
              <li>FIFA Trainer (EA Sports): Uses visual feedback and skill games to teach football mechanics and improve player performance [4].</li>
              <li>Exergames for Rehabilitation: Research on motion-based football and sports games for physical therapy and motor skill development [5][6].</li>
              <li>Unity Football Game Templates: Community and asset store projects that provide modular, physics-based football gameplay [7].</li>
              <li>MotionInput API: Used in educational and sports games for accessible, camera-based motion tracking [8].</li>
            </ul>
          </div>
        </div>
</Reveal>

        {/* Project Review: Superhero Sportsday */}
        <Reveal><div className={styles.abstractPanel}>
          <h3>Project Review: Superhero Sportsday — Water Sport Edition</h3>

          <p style={{marginTop: '1rem'}}>
            As part of our research, we reviewed <em>Superhero Sportsday: Water Sport Edition</em> [9], a previous
            COMP0016 project that also uses MotionInput to create an accessible sports game. Studying how it
            handles motion-based controls, game architecture, UI design, and accessibility features gave us valuable
            insight into what works well and where there is room for improvement.
          </p>

          <h4 style={{marginTop: '1.5rem'}}>System Architecture</h4>
          <p style={{marginTop: '0.5rem'}}>
            The project adopts a modular architecture where MotionInput translates body movements into
            keyboard events, which are then consumed by player controllers inside Unity. These controllers
            communicate with dedicated manager components — each responsible for a specific concern such as
            spawning, event handling, or entity state — that collectively drive the gameplay logic and state
            transitions. A rendering layer manages visuals and animations, a sound layer handles audio cues,
            and a completion tracker monitors player progress. Each of the four game modes shares this
            overall structure while swapping in mode-specific components.
          </p>

          <h4 style={{marginTop: '1.5rem'}}>Design Principles for Accessibility</h4>
          <p style={{marginTop: '0.5rem'}}>
            The project prioritises four accessibility-oriented design principles for its target audience of
            autistic children:
          </p>
          <ul style={{marginTop: '0.5rem', paddingLeft: '1.5rem', lineHeight: 1.8}}>
            <li><strong>Clarity:</strong> Each mode offers concise instructions and a video walkthrough. Motion controls were shaped by feedback from paediatric therapists to match how children naturally move.</li>
            <li><strong>Predictability:</strong> Interactions follow consistent patterns, and every mode centres on a single core mechanic (e.g. item collection or lap completion), reducing cognitive load.</li>
            <li><strong>Sensory consideration:</strong> Colour palettes, brightness levels, and on-screen elements were reviewed with therapists to avoid overstimulation — for instance, no predatory creatures appear.</li>
            <li><strong>Encouragement:</strong> Opening cinematics, victory screens, and visible progress indicators help sustain motivation and focus.</li>
          </ul>

          <h4 style={{marginTop: '1.5rem'}}>UI Design</h4>
          <p style={{marginTop: '0.5rem'}}>
            The interface is built around three guiding ideas: a clear layout hierarchy that foregrounds
            primary actions (e.g. starting a game, opening tutorials); instant visual and auditory responses
            to every player action to reinforce understanding; and a stripped-back aesthetic that removes
            clutter so players stay focused on gameplay. The team went through two rounds of sketches
            followed by high-fidelity prototypes, refining usability and look-and-feel at each stage.
          </p>

          <h4 style={{marginTop: '1.5rem'}}>Motion Input Integration</h4>
          <p style={{marginTop: '0.5rem'}}>
            The game connects to the MotionInput API, which opens a camera overlay containing configurable
            on-screen regions. When a tracked body part (such as a hand or the player's nose) enters or
            exits one of these regions, a mapped keystroke is sent to Unity. Each mode stores its region
            layout, key mappings, and sensitivity thresholds in a separate JSON file. In the swimming mode,
            for example, withdrawing both hands from the centre region propels the character forward, while
            head orientation steers the camera. The rowing mode instead watches for hands leaving corner
            regions to differentiate between straight paddling and turning.
          </p>

          <h4 style={{marginTop: '1.5rem'}}>Key Takeaways for Our Project</h4>
          <ul style={{marginTop: '0.5rem', paddingLeft: '1.5rem', lineHeight: 1.8}}>
            <li>Separating gameplay concerns into dedicated manager components scales well when a project contains multiple minigames — we adopted a similar pattern.</li>
            <li>Externalising motion-control mappings to configuration files makes tuning and adding new modes straightforward — we followed the same approach for our MotionInput setup.</li>
            <li>Designing with accessibility as a first-class requirement (clear instructions, predictable mechanics, sensory-appropriate visuals) directly shaped our own UI and gameplay choices.</li>
            <li>Iterating on interface designs through low-fidelity sketches before moving to prototypes consistently produced better results — we replicated this workflow.</li>
            <li>Providing immediate, multimodal feedback (visual cues paired with sound) proved critical for keeping younger players engaged.</li>
          </ul>
        </div>
</Reveal>

        {/* Technology Review */}
        <Reveal><div className={styles.abstractPanel}>
          <h3>Technology Review</h3>

          <h4 style={{marginTop: '1rem'}}>Game Engine</h4>
          <p style={{marginTop: '0.5rem'}}>
            Two main engines were considered: Unity and Unreal Engine. Unity was selected due to its 
            faster prototyping, simpler C# scripting model, and strong support for physics-based 
            interactions. Unreal Engine offers higher graphical fidelity but introduces additional 
            complexity, which was unnecessary for this project.
          </p>

          <h4 style={{marginTop: '1.5rem'}}>Motion Tracking</h4>
          <p style={{marginTop: '0.5rem'}}>
            Two main approaches were evaluated: hardware-based tracking (e.g. Microsoft Kinect) and 
            camera-based computer vision (MotionInput). Hardware solutions provide higher accuracy 
            but require specialised equipment. MotionInput allows interaction using a standard camera, 
            significantly improving accessibility and ease of deployment [8].
          </p>

          <p style={{marginTop: '1rem'}}>
            In addition to Microsoft Kinect and MotionInput, other motion capture solutions were reviewed for their relevance to sports and educational games. OpenPose is a widely used open-source library for real-time multi-person keypoint detection, offering high accuracy but requiring significant computational resources [10][11]. Azure Kinect DK provides advanced depth sensing and body tracking, but its need for dedicated hardware limits accessibility for classroom or home use [12][13]. These technologies highlight the trade-offs between accuracy, hardware requirements, and accessibility. For this project, camera-based solutions like MotionInput were prioritised to maximise reach and ease of deployment.
          </p>

          <p style={{marginTop: '1rem'}}>
            MotionInput was selected because it removes hardware barriers and aligns with the 
            accessibility goals of the project. However, it introduces challenges such as noisy input 
            data and reduced precision.
          </p>

          <h4 style={{marginTop: '1.5rem'}}>Architecture</h4>
          <p style={{marginTop: '0.5rem'}}>
            A modular, component-based architecture was chosen over tightly coupled scripts. Each 
            minigame operates independently with its own controller, while shared systems handle 
            audio, settings, and MotionInput integration. This improves maintainability and allows 
            independent development and testing of each component [14].
          </p>
        </div>
</Reveal>

        {/* Graphics Research */}
        <Reveal><div className={styles.abstractPanel}>
          <h3>Graphics Research &amp; Optimisation</h3>

          <p style={{marginTop: '1rem'}}>
            Beyond engine and motion-tracking choices, dedicated research was conducted into the
            game's graphics pipeline, shading, and asset management to achieve a consistent
            visual style while maintaining performance on classroom hardware [14].
          </p>

          <h4 style={{marginTop: '1.5rem'}}>Toon Shader &amp; PBR Materials</h4>
          <p style={{marginTop: '0.5rem'}}>
            The default URP/Lit shaders were replaced with the Unity Toon Shader, an open-source
            implementation that substitutes continuous lighting with discrete light bands and adds
            post-processing effects such as outlines and bloom. This produces a brighter, cartoon-style
            rendering that consistently fits the overall game aesthetic. PBR grass materials with
            normal maps were also applied to the football pitch, giving the field complex surface
            detail that the shader can respond to, compared to the flat 2D texture used previously [15].
          </p>

          <h4 style={{marginTop: '1.5rem'}}>Deep-Learning Resolution Upscaling (AMD FSR)</h4>
          <p style={{marginTop: '0.5rem'}}>
            To reduce GPU workload without sacrificing visual quality, AMD FidelityFX Super Resolution
            (FSR) was integrated into the rendering pipeline. FSR renders at a lower internal
            resolution and uses a spatial upscaling algorithm to reconstruct the output. In testing
            on an RTX 5090 system locked at 60 FPS, the FSR-enabled scene consumed approximately
            97 W compared to 118 W for the native-resolution scene — a roughly 18% reduction
            in GPU power draw, indicating higher energy efficiency per frame [16].
          </p>

          <h4 style={{marginTop: '1.5rem'}}>Asset &amp; Material Deduplication</h4>
          <p style={{marginTop: '0.5rem'}}>
            Many imported models from the Unity Asset Store used embedded textures, meaning each
            asset bundled its own copy of shared materials. This caused significant storage and VRAM
            bloat. By extracting embedded textures and consolidating duplicates so that multiple
            models reference a single shared material, the repository size was reduced from
            approximately 100 MB to 60 MB, and runtime VRAM usage decreased — an important
            improvement for systems with integrated GPUs commonly found in classroom environments [14].
          </p>
        </div>
</Reveal>

        {/* Technical Decisions */}
        <Reveal><div className={styles.abstractPanel}>
          <h3>Technical Decision Summary</h3>

          <p style={{marginTop: '1rem'}}>
            The final system architecture reflects a balance between accessibility, performance, and development efficiency. Key technical decisions include:
          </p>

          <ul style={{marginTop: '1rem', paddingLeft: '1.5rem', lineHeight: 1.8}}>
            <li><b>Game Engine:</b> Unity was chosen for rapid development, strong physics support, and a large ecosystem of assets and documentation.</li>
            <li><b>Motion Tracking:</b> MotionInput enables gesture-based interaction without specialised hardware, supporting standard webcams for maximum accessibility.</li>
            <li><b>Architecture:</b> Modular, component-based design supports scalability, maintainability, and parallel development of minigames and shared systems.</li>
            <li><b>Testing:</b> Modularised testing strategies were adopted to ensure reliability and facilitate future development.</li>
            <li><b>Accessibility:</b> The UI and gameplay were designed for clarity, with strong visual and audio feedback, making the game suitable for a wide range of users.</li>
            <li><b>Graphics:</b> The use of URP, toon shaders, and asset deduplication ensures consistent visuals and efficient performance on low-end hardware.</li>
            <li><b>Extensibility:</b> The system is structured to allow new minigames, input methods, or accessibility features to be added with minimal refactoring and customisation.</li>
          </ul>

          <p style={{marginTop: '1rem'}}>
            Several trade-offs were necessary:
          </p>

          <ul style={{marginTop: '0.5rem', paddingLeft: '1.5rem', lineHeight: 1.8}}>
            <li><b>Precision vs Accessibility:</b> Camera-based tracking is less accurate but more accessible and affordable for schools and homes.</li>
            <li><b>Realism vs Simplicity:</b> Gameplay physics and controls were simplified to improve responsiveness and minimise the learning curve.</li>
            <li><b>Performance vs Flexibility:</b> Modular design adds slight overhead but greatly improves extensibility and maintainability.</li>
            <li><b>Visual Fidelity vs Efficiency:</b> Stylised graphics and upscaling techniques were favoured over photorealism to ensure smooth performance on a wide range of devices.</li>
          </ul>

          <p style={{marginTop: '1rem'}}>
            These decisions allowed the system to remain feasible within a student project scope while delivering an engaging, accessible, and future-proof football training experience.
          </p>
        </div>
</Reveal>

        {/* References */}
        <Reveal><div className={styles.abstractPanel}>
          <h3>References (IEEE)</h3>

          <p style={{marginTop: '1rem'}}>[1] Z. Zhang, "Microsoft Kinect Sensor and Its Effect," IEEE Multimedia, 2012.</p>
          <p style={{marginTop: '0.5rem'}}>[2] J. Shotton et al., "Real-Time Human Pose Recognition in Parts from Single Depth Images," Proc. CVPR, 2011.</p>
          <p style={{marginTop: '0.5rem'}}>[3] L. Chen et al., "Game-Based Learning for Children with Autism Spectrum Disorder," IEEE Access, 2020.</p>
          <p style={{marginTop: '0.5rem'}}>[4] EA Sports, "FIFA Trainer: Learn to Play," 2024. [Online]. Available: <a href="https://www.ea.com/games/ea-sports-fc" target="_blank" rel="noopener noreferrer">https://www.ea.com/games/ea-sports-fc</a></p>
          <p style={{marginTop: '0.5rem'}}>[5] S. Staiano and A. Calvert, "Exergames for Physical Education: A Systematic Review," Journal of Physical Activity and Health, vol. 8, no. 5, 2011.</p>
          <p style={{marginTop: '0.5rem'}}>[6] J. Bonnechère et al., "The use of commercial video games in rehabilitation: a systematic review," International Journal of Rehabilitation Research, vol. 38, no. 4, 2015.</p>
          <p style={{marginTop: '0.5rem'}}>[7] Unity Asset Store, "Soccer Game Template," 2024. [Online]. Available: <a href="https://assetstore.unity.com/packages/templates/packs/in-fence-soccer-3d-game-template-299215" target="_blank" rel="noopener noreferrer">https://assetstore.unity.com/packages/templates/packs/in-fence-soccer-3d-game-template-299215</a></p>
          <p style={{marginTop: '0.5rem'}}>[8] MotionInput, "MotionInput," 2024. [Online]. Available: <a href="https://www.motioninputgames.com/" target="_blank" rel="noopener noreferrer">https://www.motioninputgames.com/</a></p>
          <p style={{marginTop: '0.5rem'}}>[9] COMP0016 2024 Group 4, "Superhero Sportsday: Water Sport Edition," 2024. [Online]. Available: <a href="https://students.cs.ucl.ac.uk/2024/group4/" target="_blank" rel="noopener noreferrer">https://students.cs.ucl.ac.uk/2024/group4/</a></p>
          <p style={{marginTop: '0.5rem'}}>[10] "The Complete Guide to OpenPose in 2025," viso.ai, [Online]. Available: <a href="https://viso.ai/deep-learning/openpose/" target="_blank" rel="noopener noreferrer">https://viso.ai/deep-learning/openpose/</a></p>
          <p style={{marginTop: '0.5rem'}}>[11] Guillaume Demarcq, "Complete OpenPose guide [Updated Mar 2024]," 8 February 2023. [Online]. Available: <a href="https://www.ikomia.ai/blog/complete-openpose-guide" target="_blank" rel="noopener noreferrer">https://www.ikomia.ai/blog/complete-openpose-guide</a></p>
          <p style={{marginTop: '0.5rem'}}>[12] "All you need to know on Azure Kinect," 25 February 2019. [Online]. Available: <a href="https://skarredghost.com/2019/02/25/all-need-know-azure-kinect/" target="_blank" rel="noopener noreferrer">https://skarredghost.com/2019/02/25/all-need-know-azure-kinect/</a></p>
          <p style={{marginTop: '0.5rem'}}>[13] "Azure Kinect DK," [Online]. Available: <a href="https://azure.microsoft.com/en-us/products/kinect-dk" target="_blank" rel="noopener noreferrer">https://azure.microsoft.com/en-us/products/kinect-dk</a></p>
          <p style={{marginTop: '0.5rem'}}>[14] Unity Technologies, "Unity Real-Time Development Platform," 2024. [Online]. Available: <a href="https://unity.com" target="_blank" rel="noopener noreferrer">https://unity.com</a></p>
          <p style={{marginTop: '0.5rem'}}>[15] Unity Technologies, "Unity Toon Shader," 2024. [Online]. Available: <a href="https://github.com/Unity-Technologies/com.unity.toonshader" target="_blank" rel="noopener noreferrer">https://github.com/Unity-Technologies/com.unity.toonshader</a></p>
          <p style={{marginTop: '0.5rem'}}>[16] AMD, "FidelityFX Super Resolution," 2024. [Online]. Available: <a href="https://gpuopen.com/fidelityfx-superresolution/" target="_blank" rel="noopener noreferrer">https://gpuopen.com/fidelityfx-superresolution/</a></p>
        </div>
</Reveal>

      </div>
    </section>
  )
}