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
      <h2>Privacy and Data Protection</h2>
      <div className={styles.componentBreakdown}>
        <h3>Overview</h3>
        <p>
          This application is designed with user privacy in mind. It does not collect, store, or process personal data.
        </p><br/>

        <h3>What Data is Collected?</h3>
        <ul>
          <li>
            <b>User Preferences:</b> Settings such as audio levels, input preferences, and UI customisations are stored locally on the user's device using Unity PlayerPrefs.
          </li>
          <li>
            <b>Gameplay Data:</b> Session-based data (e.g. score or streak) is stored only during gameplay and is cleared when the application is closed.
          </li>
          <li>
            <b>Motion Input Data:</b> Motion tracking data is processed in real-time for gameplay purposes only and is not stored or transmitted.
          </li>
        </ul>

        <h3>How is Data Used?</h3>
        <ul>
          <li>Local preference data is used solely to improve gameplay experience and accessibility.</li>
          <li>No data is transmitted, shared, or sold to any third parties.</li>
        </ul>

        <h3>Data Storage and Security</h3>
        <ul>
          <li>All data is stored locally on the user's device.</li>
          <li>No cloud storage, external servers, or remote databases are used.</li>
        </ul>

        <h3>User Rights</h3>
        <p>
          As this application does not collect or store personal data, rights such as access, rectification, and erasure under GDPR are not applicable.
        </p><br/>

        <h3>Changes to This Policy</h3>
        <p>
          If data collection practices change in future updates, this policy will be updated accordingly.<br/>
          <b>This privacy policy was last updated on [25/03/2026]</b>.
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

function Contributions() {
  return (
    <div>
      <h2>Contributions</h2>
      <p>Guidelines for contributing to the project. (Add contribution guidelines here.)</p>
    </div>
  );
}

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
    { label: 'Contributions', content: <Contributions /> },
    { label: 'Credits', content: <Credits /> },
  ];

  return (
    <section className={styles.sectionAlt}>
      <SectionHeader title="Appendices" subtitle="Manuals, legal topics, dependencies, contributions, and credits." />
      <Tabs tabs={tabs} storageKey="appendicesActiveTab" />
    </section>
  );
}
