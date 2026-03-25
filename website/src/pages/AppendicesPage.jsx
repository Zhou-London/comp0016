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
    <div>
      <h2>GDPR and Privacy of Data</h2>
      <p>Details on GDPR compliance and how user data is handled. (Add privacy policy and compliance notes here.)</p>
    </div>
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
