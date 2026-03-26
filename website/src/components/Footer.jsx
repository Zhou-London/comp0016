
import styles from '../App.module.css';
import nasImg from '../assets/partners/nas.jpg';
import intelImg from '../assets/partners/intel.svg';
import motioninputImg from '../assets/partners/motioninput.jpg';
import uclImg from '../assets/partners/ucl.webp';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0.5rem 0' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '2.5rem', marginBottom: '1.1rem' }}>
          <a href="https://www.motioninput.com/" target="_blank" rel="noopener noreferrer">
            <img src={motioninputImg} alt="MotionInput" style={{ height: 38, background: '#fff', borderRadius: 6, padding: 2 }} />
          </a>
          <a href="https://www.autism.org.uk/" target="_blank" rel="noopener noreferrer">
            <img src={nasImg} alt="National Autistic Society" style={{ height: 38, background: '#fff', borderRadius: 6, padding: 2 }} />
          </a>
          <a href="https://www.intel.com/" target="_blank" rel="noopener noreferrer">
            <img src={intelImg} alt="Intel" style={{ height: 38, background: '#fff', borderRadius: 6, padding: 2 }} />
          </a>
          <a href="https://www.ucl.ac.uk/" target="_blank" rel="noopener noreferrer">
            <img src={uclImg} alt="UCL" style={{ height: 38, background: '#fff', borderRadius: 6, padding: 2 }} />
          </a>
        </div>
        <div style={{ marginBottom: '0.7rem', fontWeight: 600, fontSize: '1.05em' }}>
          MotionInput Football Practice · UCL COMP0016 2025/26
        </div>
        <div style={{ marginBottom: '0.7rem', fontSize: '0.98em' }}>
          <a href="#/home" style={{ color: '#b6e36b' }}>Home  </a> ·
          <a href="#/requirements" style={{ color: '#b6e36b' }}>  Requirements  </a> ·
          <a href="#/research" style={{ color: '#b6e36b' }}>  Research  </a> ·
          <a href="#/ui-design" style={{ color: '#b6e36b' }}>  UI Design  </a> ·
          <a href="#/system-design" style={{ color: '#b6e36b' }}>  System Design  </a> ·
          <a href="#/implementation" style={{ color: '#b6e36b' }}>  Implementation  </a> ·
          <a href="#/testing" style={{ color: '#b6e36b' }}>  Testing  </a> ·
          <a href="#/blog" style={{ color: '#b6e36b' }}>  Blog  </a> ·
          <a href="#/appendices" style={{ color: '#b6e36b' }}>  Appendices  </a> 
        </div>
        <div style={{ fontSize: '0.85em', opacity: 0.85 }}>
          Copyright © 2026 MotionInput Football Practice. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
