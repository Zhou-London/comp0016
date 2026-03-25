import styles from '../App.module.css'
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
        <div className={styles.abstractPanel}>
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
        </div>

        {/* Technology Review */}
        <div className={styles.abstractPanel}>
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
            Two approaches were evaluated: hardware-based tracking (e.g. Microsoft Kinect) and 
            camera-based computer vision (MotionInput). Hardware solutions provide higher accuracy 
            but require specialised equipment. MotionInput allows interaction using a standard camera, 
            significantly improving accessibility and ease of deployment.
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
            independent development and testing of each component.
          </p>
        </div>

        {/* Technical Decisions */}
        <div className={styles.abstractPanel}>
          <h3>Technical Decision Summary</h3>

          <p style={{marginTop: '1rem'}}>
            The final system architecture reflects a balance between accessibility, performance, and 
            development efficiency.
          </p>

          <ul style={{marginTop: '1rem', paddingLeft: '1.5rem', lineHeight: 1.8}}>
            <li>Unity was chosen for rapid development and strong physics support</li>
            <li>MotionInput enables gesture-based interaction without specialised hardware</li>
            <li>A modular architecture supports scalability and maintainability</li>
          </ul>

          <p style={{marginTop: '1rem'}}>
            Several trade-offs were necessary:
          </p>

          <ul style={{marginTop: '0.5rem', paddingLeft: '1.5rem', lineHeight: 1.8}}>
            <li><b>Precision vs Accessibility:</b> Camera-based tracking is less accurate but more accessible</li>
            <li><b>Realism vs Simplicity:</b> Gameplay physics were simplified to improve responsiveness</li>
            <li><b>Performance vs Flexibility:</b> Modular design adds slight overhead but improves extensibility</li>
          </ul>

          <p style={{marginTop: '1rem'}}>
            These decisions allowed the system to remain feasible within a student project scope while 
            delivering an engaging and accessible football training experience.
          </p>
        </div>

        {/* References */}
        <div className={styles.abstractPanel}>
          <h3>References (IEEE)</h3>

          <p style={{marginTop: '1rem'}}>
            [1] Z. Zhang, “Microsoft Kinect Sensor and Its Effect,” IEEE Multimedia, 2012.
          </p>

          <p style={{marginTop: '0.5rem'}}>
            [2] J. Shotton et al., “Real-Time Human Pose Recognition in Parts from Single Depth Images,” Proc. CVPR, 2011.
          </p>

          <p style={{marginTop: '0.5rem'}}>
            [3] L. Chen et al., “Game-Based Learning for Children with Autism Spectrum Disorder,” IEEE Access, 2020.
          </p>

          <p style={{marginTop: '0.5rem'}}>
            [4] Unity Technologies, “Unity Real-Time Development Platform,” 2024. [Online]. Available: https://unity.com
          </p>
        </div>

      </div>
    </section>
  )
}