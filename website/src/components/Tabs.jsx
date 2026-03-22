import { useState } from 'react';
import styles from '../App.module.css';

export default function Tabs({ tabs, defaultTab = 0 }) {
  const [active, setActive] = useState(defaultTab);
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
