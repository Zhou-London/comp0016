import styles from '../App.module.css';
import SectionHeader from '../components/SectionHeader';
import Tabs from '../components/Tabs';

function UserManual() {
  return (
    <div>
      <h2>User Manual</h2>
      <p>Step-by-step instructions for using the system, with screenshots. (Add content/screenshots here.)</p>
    </div>
  );
}

function DeploymentManual() {
  return (
    <div>
      <h2>Deployment Manual</h2>
      <p>Instructions for deploying the system, including any authentication, live URLs, and test credentials. (Add deployment steps here.)</p>
      <div className={styles.noteCard}>
        If authentication is needed for deployment, include live URL and test credentials for each user type.
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
      <p>List of all major dependencies and libraries used in the project. (Add dependency list here.)</p>
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
