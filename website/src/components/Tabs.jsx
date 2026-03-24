import { useState, useEffect } from 'react';
import styles from '../App.module.css';


export default function Tabs({ tabs, defaultTab = 0, storageKey = 'systemDesignActiveTab' }) {
  const [active, setActive] = useState(() => {
    const saved = sessionStorage.getItem(storageKey);
    return saved !== null ? Number(saved) : defaultTab;
  });

  useEffect(() => {
    sessionStorage.setItem(storageKey, active);
    return () => {
      // Clear tab state on unmount so navigation resets to default
      sessionStorage.removeItem(storageKey);
    };
  }, [active, storageKey]);

  return (
    <div className={styles.tabsRoot}>
      <div className={styles.tabsBar}>
        {tabs.map((tab, i) => (
          <button
            key={tab.label}
            className={active === i ? styles.tabActive : styles.tab}
            onClick={() => setActive(i)}
            type="button"
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className={styles.tabPanel}>{tabs[active].content}</div>
    </div>
  );
}
